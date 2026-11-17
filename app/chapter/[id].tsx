import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  Platform,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as Speech from "expo-speech";
import * as Haptics from "expo-haptics";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  Gift,
  Landmark,
  Quote,
  RotateCcw,
  Volume2,
  VolumeX,
  ChevronDown,
  ChevronUp,
  BookOpen,
} from "lucide-react-native";
import {
  DestinyOption,
  MidDecisionOption,
  getAllChapters,
  getChapterById,
} from "../../src/data/storiesData";
import { useUserStore } from "../../src/store/useUserStore";
import { resolveImageAsset } from "../../src/utils/imageAssets";
import { useResponsiveLayout } from "../../src/utils/useResponsiveLayout";
import { BouncyPressable } from "../../src/components/BouncyPressable";

type PlayerStage = "SCENES" | "DESTINY" | "TRUTH_REVEALED";
type SceneCardViewMode = "STORY" | "MID_DECISION";

const STORYBOOK_PAGE_SHADOW = {
  shadowColor: "#78350F",
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.09,
  shadowRadius: 14,
  elevation: 4,
};

export default function InteractiveChapterPlayerScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const {
    height: windowHeight,
    isLandscape,
    isTablet,
    isPhoneLandscape,
    isTabletLandscape,
    isSmallPhone,
    insets,
  } = useResponsiveLayout();

  // Split side-by-side layout on any Landscape screen (phone landscape OR tablet landscape)
  const isSideBySideSpread = isPhoneLandscape || isTabletLandscape;

  const found = getChapterById(id || "");

  const completedChapters = useUserStore((s) => s.completedChapters);
  const saveSceneProgress = useUserStore((s) => s.saveSceneProgress);
  const clearSceneProgress = useUserStore((s) => s.clearSceneProgress);
  const completeChapter = useUserStore((s) => s.completeChapter);

  const chapterId = found?.chapter.id || "";
  const isChapterCompleted = Boolean(
    chapterId && completedChapters.includes(chapterId)
  );

  const [sceneIndex, setSceneIndex] = useState(0);
  const [maxReachedSceneIdx, setMaxReachedSceneIdx] = useState(0);
  const [stage, setStage] = useState<PlayerStage>("SCENES");
  const [sceneViewMode, setSceneViewMode] =
    useState<SceneCardViewMode>("STORY");

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showHistoricalNote, setShowHistoricalNote] = useState(false);

  const [selectedMidOption, setSelectedMidOption] =
    useState<MidDecisionOption | null>(null);
  const [midDecisionSolved, setMidDecisionSolved] = useState(false);

  const [triedWrongOptions, setTriedWrongOptions] = useState<string[]>([]);
  const [activeFeedbackOption, setActiveFeedbackOption] =
    useState<DestinyOption | null>(null);
  const [selectedDestinyOptionId, setSelectedDestinyOptionId] = useState<
    "A" | "B" | "C"
  >("C");

  const [chestModalVisible, setChestModalVisible] = useState(false);
  const [isChestOpened, setIsChestOpened] = useState(false);

  const cardScrollRef = useRef<ScrollView>(null);

  const cardFade = useSharedValue(1);
  const goldenFlashOpacity = useSharedValue(0);
  const chestScale = useSharedValue(0.92);

  const currentScene = found
    ? found.chapter.scenes[
        Math.min(sceneIndex, found.chapter.scenes.length - 1)
      ]
    : null;

  const triggerLightHaptic = () => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    }
  };

  const triggerWarningHaptic = () => {
    if (Platform.OS !== "web") {
      Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Warning
      ).catch(() => {});
    }
  };

  const triggerSuccessHaptic = () => {
    if (Platform.OS !== "web") {
      Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
      ).catch(() => {});
    }
  };

  const stopTurkishSpeech = () => {
    try {
      Speech.stop();
    } catch {
      // ignore
    }
    setIsSpeaking(false);
  };

  useEffect(() => {
    stopTurkishSpeech();
    if (!found) return;

    const chId = found.chapter.id;
    const total = found.chapter.scenes.length;
    const alreadyDone = useUserStore
      .getState()
      .completedChapters.includes(chId);
    const savedIdx = useUserStore.getState().savedSceneProgress[chId];

    const initialIdx =
      !alreadyDone &&
      typeof savedIdx === "number" &&
      savedIdx >= 0 &&
      savedIdx < total
        ? savedIdx
        : 0;

    setSceneIndex(initialIdx);
    setMaxReachedSceneIdx(alreadyDone ? total - 1 : initialIdx);
    setStage("SCENES");
    setSceneViewMode("STORY");
    setShowHistoricalNote(false);
    setTriedWrongOptions([]);
    setActiveFeedbackOption(null);
    setChestModalVisible(false);
    setIsChestOpened(false);

    const truthOpt = found.chapter.destinyMoment.options.find(
      (o) => o.isHistoricalTruth
    );
    if (truthOpt) {
      setSelectedDestinyOptionId(truthOpt.id);
    }
  }, [id]);

  useEffect(() => {
    if (!found || stage !== "SCENES") return;
    const chId = found.chapter.id;
    setMaxReachedSceneIdx((prev) =>
      isChapterCompleted
        ? found.chapter.scenes.length - 1
        : Math.max(prev, sceneIndex)
    );
    if (!isChapterCompleted) {
      saveSceneProgress(chId, sceneIndex);
    }
  }, [sceneIndex, stage, isChapterCompleted, found?.chapter.id]);

  // Auto-reset scroll position to top when scene, mode, or stage changes
  useEffect(() => {
    cardScrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [sceneIndex, sceneViewMode, stage]);

  const handleToggleSpeech = (textToSpeak: string) => {
    triggerLightHaptic();
    if (isSpeaking) {
      stopTurkishSpeech();
      return;
    }

    try {
      Speech.stop();
      setIsSpeaking(true);
      Speech.speak(textToSpeak, {
        language: "tr-TR",
        rate: 0.95,
        pitch: 1.0,
        onDone: () => setIsSpeaking(false),
        onStopped: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false),
      });
    } catch {
      setIsSpeaking(false);
    }
  };

  useEffect(() => {
    return () => {
      try {
        Speech.stop();
      } catch {
        // ignore
      }
    };
  }, []);

  useEffect(() => {
    stopTurkishSpeech();
    setShowHistoricalNote(false);
    setSceneViewMode("STORY");

    if (currentScene?.midDecision && isChapterCompleted) {
      const bestOpt =
        currentScene.midDecision.options.find((o) => o.isBestChoice) ||
        currentScene.midDecision.options[0];
      setSelectedMidOption(bestOpt);
      setMidDecisionSolved(true);
    } else {
      setSelectedMidOption(null);
      setMidDecisionSolved(false);
    }

    if (!currentScene || stage !== "SCENES") return;

    cardFade.value = 0;
    cardFade.value = withTiming(1, {
      duration: 200,
      easing: Easing.out(Easing.quad),
    });
  }, [sceneIndex, stage, currentScene?.id, isChapterCompleted]);

  const triggerGoldenScreenFlash = () => {
    goldenFlashOpacity.value = 0.35;
    goldenFlashOpacity.value = withTiming(0, {
      duration: 700,
      easing: Easing.out(Easing.quad),
    });
  };

  useEffect(() => {
    if (chestModalVisible) {
      chestScale.value = 0.9;
      chestScale.value = withSpring(1, { damping: 14, stiffness: 180 });
    }
  }, [chestModalVisible, isChestOpened]);

  const cardAnimatedStyle = useAnimatedStyle(() => ({
    opacity: cardFade.value,
  }));

  const goldenFlashStyle = useAnimatedStyle(() => ({
    opacity: goldenFlashOpacity.value,
  }));

  const chestAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: chestScale.value }],
  }));

  if (!found || !currentScene) {
    return (
      <View style={{ flex: 1, backgroundColor: "#F7F3E8" }}>
        <SafeAreaView
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <Text
            style={{
              color: "#1C1917",
              fontSize: 20,
              fontWeight: "900",
              marginBottom: 16,
            }}
          >
            Bölüm Bulunamadı
          </Text>
          <BouncyPressable
            onPress={() => {
              stopTurkishSpeech();
              router.back();
            }}
            style={{
              backgroundColor: "#10B981",
              borderRadius: 16,
              paddingHorizontal: 24,
              paddingVertical: 14,
              borderBottomWidth: 4,
              borderBottomColor: "#047857",
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "900" }}>
              Ana Menüye Dön
            </Text>
          </BouncyPressable>
        </SafeAreaView>
      </View>
    );
  }

  const { hero, chapter } = found;
  const totalScenes = chapter.scenes.length;
  const artifactImageSource = resolveImageAsset(
    chapter.rewardArtifact.imagePath
  );

  const currentChapterIdx = hero.chapters.findIndex(
    (ch) => ch.id === chapter.id
  );
  const nextHeroChapter =
    currentChapterIdx >= 0 && currentChapterIdx + 1 < hero.chapters.length
      ? hero.chapters[currentChapterIdx + 1]
      : null;

  const allChaptersList = getAllChapters();
  const globalChapterIdx = allChaptersList.findIndex(
    (item) => item.chapter.id === chapter.id
  );
  const nextGlobalItem =
    globalChapterIdx >= 0 && globalChapterIdx + 1 < allChaptersList.length
      ? allChaptersList[globalChapterIdx + 1]
      : null;

  const nextAvailableChapter = nextHeroChapter ?? nextGlobalItem?.chapter ?? null;
  const nextAvailableHeroName = nextHeroChapter
    ? hero.name
    : nextGlobalItem?.hero.name ?? "";

  const activeArtworkPath =
    stage === "SCENES"
      ? currentScene.imageKey ?? currentScene.imagePath
      : stage === "DESTINY"
      ? chapter.id === "hz-omer-ch1"
        ? "assets/images/omer_s4_carrying_flour.png"
        : chapter.scenes[totalScenes - 1]?.imageKey ??
          chapter.scenes[totalScenes - 1]?.imagePath ??
          hero.images?.crisis ??
          chapter.rewardArtifact.imagePath
      : chapter.rewardArtifact.imagePath;

  const activeArtworkSource = resolveImageAsset(activeArtworkPath);
  const hasMidDecision = Boolean(currentScene.midDecision);

  const handleSelectMidDecision = (opt: MidDecisionOption) => {
    stopTurkishSpeech();
    setSelectedMidOption(opt);
    if (opt.isBestChoice) {
      triggerSuccessHaptic();
      setMidDecisionSolved(true);
    } else {
      triggerWarningHaptic();
    }
  };

  const handleNextScene = () => {
    triggerLightHaptic();
    stopTurkishSpeech();

    if (stage === "DESTINY") {
      if (isChapterCompleted) {
        setStage("TRUTH_REVEALED");
      }
      return;
    }

    if (stage === "TRUTH_REVEALED") {
      return;
    }

    if (hasMidDecision && !midDecisionSolved) {
      if (sceneViewMode === "STORY") {
        setSceneViewMode("MID_DECISION");
        return;
      }
      triggerWarningHaptic();
      return;
    }

    if (sceneIndex < totalScenes - 1) {
      setSceneIndex((prev) => prev + 1);
    } else {
      triggerGoldenScreenFlash();
      setStage("DESTINY");
    }
  };

  const handlePrevScene = () => {
    triggerLightHaptic();
    stopTurkishSpeech();
    if (stage === "TRUTH_REVEALED") {
      setStage("DESTINY");
      return;
    }
    if (stage === "DESTINY") {
      setStage("SCENES");
      setActiveFeedbackOption(null);
      return;
    }
    if (sceneViewMode === "MID_DECISION") {
      setSceneViewMode("STORY");
      return;
    }
    if (sceneIndex > 0) {
      setSceneIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (Platform.OS !== "web" || typeof window === "undefined") return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (chestModalVisible) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNextScene();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevScene();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const handleSelectDestinyOption = (option: DestinyOption) => {
    stopTurkishSpeech();
    if (!option.isHistoricalTruth) {
      triggerWarningHaptic();
      setActiveFeedbackOption(option);
      if (!triedWrongOptions.includes(option.id)) {
        setTriedWrongOptions((prev) => [...prev, option.id]);
      }
      return;
    }

    triggerSuccessHaptic();
    setActiveFeedbackOption(null);
    setSelectedDestinyOptionId(option.id);
    clearSceneProgress(chapter.id);
    triggerGoldenScreenFlash();
    setStage("TRUTH_REVEALED");
  };

  const handleJumpToScene = (targetIdx: number) => {
    const canJump =
      isChapterCompleted ||
      targetIdx <= maxReachedSceneIdx ||
      targetIdx <= sceneIndex;
    if (!canJump) {
      triggerWarningHaptic();
      return;
    }
    triggerLightHaptic();
    stopTurkishSpeech();
    setStage("SCENES");
    setSceneIndex(targetIdx);
  };

  // Horizontal container padding respecting safe areas
  const containerPadX = isPhoneLandscape ? 12 : isTablet ? 24 : 12;

  // Compact Top Progress Segments
  const renderProgressSegments = () => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: isTablet ? 6 : 4,
        flex: isPhoneLandscape ? 1 : undefined,
        width: isPhoneLandscape ? undefined : "100%",
      }}
    >
      {chapter.scenes.map((sceneItem, idx) => {
        const isCurrent = stage === "SCENES" && idx === sceneIndex;
        const isPassed =
          stage !== "SCENES" || idx < sceneIndex || isChapterCompleted;
        const isUnlocked =
          isChapterCompleted || idx <= maxReachedSceneIdx || idx <= sceneIndex;

        const bgColor = isCurrent
          ? "#F59E0B"
          : isPassed
          ? "#10B981"
          : isUnlocked
          ? "#A7F3D0"
          : "#E6DEC8";

        return (
          <BouncyPressable
            key={sceneItem.id}
            onPress={() => handleJumpToScene(idx)}
            scaleTo={0.95}
            hitSlop={{ top: 8, bottom: 8, left: 2, right: 2 }}
            style={{
              flex: 1,
              paddingVertical: 3,
            }}
          >
            <View
              style={{
                height: isCurrent ? (isTablet ? 8 : 7) : isTablet ? 6 : 5,
                borderRadius: 999,
                backgroundColor: bgColor,
                borderWidth: isCurrent ? 1 : 0,
                borderColor: "#B45309",
              }}
            />
          </BouncyPressable>
        );
      })}
    </View>
  );

  // TOP BAR: Single ultra-sleek row in Phone Landscape; clean 2-row header in Portrait & Tablet
  const renderTopBar = () => {
    if (isPhoneLandscape) {
      return (
        <View
          style={{
            flexShrink: 0,
            paddingHorizontal: containerPadX,
            paddingTop: 4,
            paddingBottom: 6,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <BouncyPressable
            onPress={() => {
              stopTurkishSpeech();
              router.back();
            }}
            scaleTo={0.96}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 11,
              backgroundColor: "#FFFDF7",
              borderWidth: 1.5,
              borderColor: "#E6DEC8",
              borderBottomWidth: 3,
              borderBottomColor: "#D6CBB2",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ArrowLeft size={14} color="#1C1917" />
            <Text
              style={{
                color: "#1C1917",
                fontSize: 11.5,
                fontWeight: "900",
                marginLeft: 4,
              }}
            >
              Çıkış
            </Text>
          </BouncyPressable>

          <Text
            style={{
              color: "#1C1917",
              fontSize: 12.5,
              fontWeight: "900",
              maxWidth: 180,
            }}
            numberOfLines={1}
          >
            {hero.name} • B{chapter.chapterNumber}
          </Text>

          {renderProgressSegments()}

          <View
            style={{
              paddingHorizontal: 9,
              paddingVertical: 4,
              borderRadius: 999,
              backgroundColor: "#FFFDF7",
              borderWidth: 1.5,
              borderColor: "#E6DEC8",
            }}
          >
            <Text
              style={{
                color: "#1C1917",
                fontSize: 11,
                fontWeight: "900",
              }}
            >
              {stage === "SCENES"
                ? `${currentScene.sceneNumber}/${totalScenes}`
                : "Kader Anı"}
            </Text>
          </View>
        </View>
      );
    }

    return (
      <View
        style={{
          flexShrink: 0,
          maxWidth: 1140,
          alignSelf: "center",
          width: "100%",
          paddingHorizontal: containerPadX,
          paddingTop: isTablet ? 8 : 4,
          paddingBottom: isTablet ? 10 : 6,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            marginBottom: isTablet ? 7 : 5,
          }}
        >
          <BouncyPressable
            onPress={() => {
              stopTurkishSpeech();
              router.back();
            }}
            scaleTo={0.96}
            style={{
              paddingHorizontal: isTablet ? 13 : 10,
              paddingVertical: isTablet ? 7 : 6,
              borderRadius: 12,
              backgroundColor: "#FFFDF7",
              borderWidth: 1.5,
              borderColor: "#E6DEC8",
              borderBottomWidth: 3,
              borderBottomColor: "#D6CBB2",
              flexDirection: "row",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <ArrowLeft size={isTablet ? 15 : 14} color="#1C1917" />
            <Text
              style={{
                color: "#1C1917",
                fontSize: isTablet ? 13 : 11.5,
                fontWeight: "900",
                marginLeft: 4,
              }}
            >
              Ana Menü
            </Text>
          </BouncyPressable>

          <View style={{ flex: 1, paddingHorizontal: 4 }}>
            <Text
              style={{
                color: "#0D9488",
                fontSize: isTablet ? 12 : 10.5,
                fontWeight: "900",
                textAlign: isTablet && isLandscape ? "right" : "center",
              }}
              numberOfLines={1}
            >
              {hero.name} • Bölüm {chapter.chapterNumber}
            </Text>
            <Text
              style={{
                color: "#1C1917",
                fontSize: isTablet ? 15 : 12.5,
                fontWeight: "900",
                textAlign: isTablet && isLandscape ? "right" : "center",
              }}
              numberOfLines={1}
            >
              {chapter.title}
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: isTablet ? 11 : 9,
              paddingVertical: isTablet ? 5 : 4,
              borderRadius: 999,
              backgroundColor: "#FFFDF7",
              borderWidth: 1.5,
              borderColor: "#E6DEC8",
              flexShrink: 0,
            }}
          >
            <Text
              style={{
                color: "#1C1917",
                fontSize: isTablet ? 12 : 11,
                fontWeight: "900",
              }}
            >
              {stage === "SCENES"
                ? `${currentScene.sceneNumber} / ${totalScenes}`
                : "Kader Anı"}
            </Text>
          </View>
        </View>

        {renderProgressSegments()}
      </View>
    );
  };

  // Portrait artwork height scales smoothly with screen height (no tiny crushed 120px strip!)
  const portraitArtworkHeight = isTablet
    ? Math.round(Math.max(300, Math.min(400, windowHeight * 0.34)))
    : Math.round(Math.max(168, Math.min(238, windowHeight * 0.27)));

  // ILLUSTRATED SCENE ARTWORK PANEL
  const renderArtworkPanel = () => {
    const captionTitle =
      stage === "SCENES"
        ? currentScene.title
        : stage === "DESTINY"
        ? chapter.destinyMoment.title
        : chapter.rewardArtifact.name;

    const captionTag =
      stage === "SCENES"
        ? `SAHNE ${currentScene.sceneNumber}`
        : stage === "DESTINY"
        ? "KADER ANI"
        : "KAZANILAN ESER";

    return (
      <View
        style={[
          {
            width: "100%",
            height: isSideBySideSpread ? "100%" : portraitArtworkHeight,
            borderRadius: isTablet ? 24 : 18,
            borderWidth: 2,
            borderColor: "#E6DEC8",
            borderBottomWidth: isSideBySideSpread || isTablet ? 5 : 4,
            borderBottomColor: "#D6CBB2",
            backgroundColor: "#1E1B4B",
            overflow: "hidden",
            position: "relative",
          },
          STORYBOOK_PAGE_SHADOW,
        ]}
      >
        {activeArtworkSource && (
          <Image
            key={activeArtworkPath}
            source={activeArtworkSource}
            fadeDuration={0}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        )}

        <LinearGradient
          pointerEvents="none"
          colors={["transparent", "rgba(15, 23, 42, 0.32)", "rgba(15, 23, 42, 0.90)"]}
          locations={[0.45, 0.72, 1]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: isTablet ? 105 : 80,
          }}
        />

        {/* Sleek Bottom Caption Overlay inside the frame */}
        <View
          pointerEvents="none"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            paddingHorizontal: isTablet ? 18 : 12,
            paddingBottom: isTablet ? 14 : 9,
            paddingTop: 12,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <View
              style={{
                backgroundColor: "#F59E0B",
                paddingHorizontal: 7,
                paddingVertical: 2,
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: "#1C1917",
                  fontSize: isTablet ? 10.5 : 9.5,
                  fontWeight: "900",
                  letterSpacing: 0.4,
                }}
              >
                {captionTag}
              </Text>
            </View>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: isTablet ? 16.5 : isPhoneLandscape ? 13 : 13.5,
                fontWeight: "900",
                flex: 1,
                textShadowColor: "rgba(0,0,0,0.6)",
                textShadowOffset: { width: 0, height: 1 },
                textShadowRadius: 3,
              }}
              numberOfLines={1}
            >
              {captionTitle}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  // AUDIO BUTTON HELPER
  const renderSpeechButton = (textToSpeak: string) => (
    <BouncyPressable
      onPress={() => handleToggleSpeech(textToSpeak)}
      scaleTo={0.96}
      style={{
        paddingHorizontal: isTablet ? 12 : 10,
        paddingVertical: isTablet ? 6 : 5,
        borderRadius: 11,
        backgroundColor: isSpeaking ? "#F43F5E" : "#F59E0B",
        borderWidth: 1,
        borderColor: isSpeaking ? "#FDA4AF" : "#FDE68A",
        borderBottomWidth: 3,
        borderBottomColor: isSpeaking ? "#BE123C" : "#B45309",
        flexDirection: "row",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      {isSpeaking ? (
        <VolumeX size={13} color="#FFFFFF" />
      ) : (
        <Volume2 size={13} color="#1C1917" />
      )}
      <Text
        style={{
          color: isSpeaking ? "#FFFFFF" : "#1C1917",
          fontSize: isTablet ? 12 : 11,
          fontWeight: "900",
          marginLeft: 4,
        }}
      >
        {isSpeaking ? "Durdur" : "Sesli Dinle"}
      </Text>
    </BouncyPressable>
  );

  // STAGE 1: SCENES READING CARD (flex: 1, zero nested scroll conflict!)
  const renderSceneReadingContent = () => {
    const fullNarration = currentScene.narration || currentScene.text;
    const fullSpeechText =
      sceneViewMode === "MID_DECISION" && currentScene.midDecision
        ? `${currentScene.midDecision.title}. ${currentScene.midDecision.question}`
        : [
            currentScene.title,
            fullNarration,
            currentScene.speaker && currentScene.dialogue
              ? `${currentScene.speaker} şöyle dedi: ${currentScene.dialogue}`
              : "",
            currentScene.historicalNote || "",
          ]
            .filter(Boolean)
            .join(". ");

    return (
      <Animated.View style={[cardAnimatedStyle, { flex: 1, width: "100%" }]}>
        <View
          style={[
            {
              flex: 1,
              width: "100%",
              backgroundColor: "#FFFDF7",
              borderRadius: isTablet ? 24 : 18,
              borderWidth: 2,
              borderColor: "#E6DEC8",
              borderBottomWidth: isTablet ? 5 : 4,
              borderBottomColor: "#D6CBB2",
              paddingHorizontal: isTablet ? 20 : isPhoneLandscape ? 14 : 13,
              paddingTop: isTablet ? 13 : isPhoneLandscape ? 9 : 11,
              paddingBottom: isTablet ? 13 : isPhoneLandscape ? 9 : 11,
              overflow: "hidden",
            },
            STORYBOOK_PAGE_SHADOW,
          ]}
        >
          {/* Pinned Top Card Header */}
          <View
            style={{
              flexShrink: 0,
              paddingBottom: isPhoneLandscape ? 6 : 8,
              borderBottomWidth: 1.5,
              borderBottomColor: "#E6DEC8",
              gap: 6,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flexShrink: 1,
                }}
              >
                <BookOpen size={isTablet ? 15 : 13} color="#D97706" />
                <Text
                  style={{
                    color: "#92400E",
                    fontSize: isTablet ? 12 : 11,
                    fontWeight: "900",
                    letterSpacing: 0.4,
                    textTransform: "uppercase",
                    marginLeft: 5,
                  }}
                  numberOfLines={1}
                >
                  SAYFA {currentScene.sceneNumber} / {totalScenes}
                </Text>
              </View>

              {renderSpeechButton(fullSpeechText)}
            </View>

            {hasMidDecision && (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#F3EDE0",
                  borderRadius: 10,
                  padding: 3,
                  gap: 4,
                  alignSelf: "flex-start",
                }}
              >
                <BouncyPressable
                  onPress={() => {
                    triggerLightHaptic();
                    stopTurkishSpeech();
                    setSceneViewMode("STORY");
                  }}
                  scaleTo={0.97}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    borderRadius: 8,
                    backgroundColor:
                      sceneViewMode === "STORY" ? "#FFFDF7" : "transparent",
                  }}
                >
                  <Text
                    style={{
                      color:
                        sceneViewMode === "STORY" ? "#1C1917" : "#78716C",
                      fontSize: 11.5,
                      fontWeight: "900",
                    }}
                  >
                    📖 Hikâye Metni
                  </Text>
                </BouncyPressable>

                <BouncyPressable
                  onPress={() => {
                    triggerLightHaptic();
                    stopTurkishSpeech();
                    setSceneViewMode("MID_DECISION");
                  }}
                  scaleTo={0.97}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    borderRadius: 8,
                    backgroundColor:
                      sceneViewMode === "MID_DECISION"
                        ? midDecisionSolved
                          ? "#10B981"
                          : "#F59E0B"
                        : "transparent",
                  }}
                >
                  <Text
                    style={{
                      color:
                        sceneViewMode === "MID_DECISION"
                          ? midDecisionSolved
                            ? "#FFFFFF"
                            : "#1C1917"
                          : "#B45309",
                      fontSize: 11.5,
                      fontWeight: "900",
                    }}
                  >
                    {midDecisionSolved ? "✓ Ara Karar" : "⚡ Ara Karar Sorusu"}
                  </Text>
                </BouncyPressable>
              </View>
            )}
          </View>

          {/* Smooth Scrollable Middle Content */}
          <ScrollView
            ref={cardScrollRef}
            style={{ flex: 1 }}
            contentContainerStyle={{
              paddingVertical: isPhoneLandscape ? 8 : 10,
              flexGrow: 1,
            }}
            showsVerticalScrollIndicator
          >
            {sceneViewMode === "MID_DECISION" && currentScene.midDecision ? (
              <View style={{ justifyContent: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 5,
                  }}
                >
                  <Sparkles
                    size={15}
                    color={midDecisionSolved ? "#10B981" : "#D97706"}
                  />
                  <Text
                    style={{
                      color: midDecisionSolved ? "#047857" : "#B45309",
                      fontSize: isTablet ? 12.5 : 11.5,
                      fontWeight: "900",
                      marginLeft: 5,
                      textTransform: "uppercase",
                    }}
                  >
                    {currentScene.midDecision.title}
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: isTablet ? 16 : 14.5,
                    lineHeight: isTablet ? 23 : 20.5,
                    fontWeight: "800",
                    marginBottom: 10,
                  }}
                >
                  {currentScene.midDecision.question}
                </Text>

                <View style={{ gap: 8 }}>
                  {currentScene.midDecision.options.map((opt) => {
                    const isSelected = selectedMidOption?.id === opt.id;
                    const borderColor = isSelected
                      ? opt.isBestChoice
                        ? "#10B981"
                        : "#F59E0B"
                      : "#E6DEC8";
                    const borderBottomColor = isSelected
                      ? opt.isBestChoice
                        ? "#047857"
                        : "#B45309"
                      : "#D6CBB2";
                    const bgColor = isSelected
                      ? opt.isBestChoice
                        ? "#ECFDF5"
                        : "#FFFBEB"
                      : "#F7F3E8";

                    return (
                      <BouncyPressable
                        key={opt.id}
                        onPress={() => handleSelectMidDecision(opt)}
                        scaleTo={0.98}
                        style={{
                          borderRadius: 15,
                          paddingHorizontal: 12,
                          paddingVertical: 10,
                          backgroundColor: bgColor,
                          borderWidth: 2,
                          borderColor,
                          borderBottomWidth: 3.5,
                          borderBottomColor,
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: 9,
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: 10,
                            backgroundColor: isSelected
                              ? opt.isBestChoice
                                ? "#10B981"
                                : "#F59E0B"
                              : "#D6CBB2",
                            flexShrink: 0,
                          }}
                        >
                          <Text
                            style={{
                              color: isSelected ? "#FFFFFF" : "#1C1917",
                              fontSize: 13,
                              fontWeight: "900",
                            }}
                          >
                            {opt.id}
                          </Text>
                        </View>
                        <Text
                          style={{
                            color: "#1C1917",
                            fontSize: isTablet ? 14.5 : 13.5,
                            lineHeight: isTablet ? 20 : 19,
                            fontWeight: "700",
                            flex: 1,
                          }}
                        >
                          {opt.text}
                        </Text>
                      </BouncyPressable>
                    );
                  })}
                </View>

                {selectedMidOption && (
                  <View
                    style={{
                      marginTop: 10,
                      borderRadius: 14,
                      paddingHorizontal: 12,
                      paddingVertical: 9,
                      backgroundColor: selectedMidOption.isBestChoice
                        ? "#ECFDF5"
                        : "#FFFBEB",
                      borderWidth: 1.5,
                      borderColor: selectedMidOption.isBestChoice
                        ? "#6EE7B7"
                        : "#FDE68A",
                    }}
                  >
                    <Text
                      style={{
                        color: selectedMidOption.isBestChoice
                          ? "#065F46"
                          : "#92400E",
                        fontSize: isTablet ? 13.5 : 12.5,
                        lineHeight: isTablet ? 19 : 18,
                        fontWeight: "700",
                      }}
                    >
                      {selectedMidOption.feedback}
                    </Text>
                  </View>
                )}
              </View>
            ) : (
              <View style={{ gap: isTablet ? 10 : 8 }}>
                <View style={{ gap: isTablet ? 9 : 7 }}>
                  {fullNarration
                    .split(/\n\n+/)
                    .filter(Boolean)
                    .map((paragraph, pIdx) => (
                      <Text
                        key={pIdx}
                        style={{
                          color: pIdx === 0 ? "#1C1917" : "#292524",
                          fontSize: isTablet ? 15.5 : isSmallPhone ? 13.5 : 14.5,
                          lineHeight: isTablet ? 23 : isSmallPhone ? 20 : 21.5,
                          fontWeight: pIdx === 0 ? "600" : "500",
                        }}
                      >
                        {paragraph}
                      </Text>
                    ))}
                </View>

                {currentScene.speaker && currentScene.dialogue ? (
                  <View
                    style={{
                      backgroundColor: "#FDF8EC",
                      borderRadius: 14,
                      borderWidth: 1.5,
                      borderColor: "#FDE68A",
                      borderLeftWidth: 4,
                      borderLeftColor: "#F59E0B",
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 2,
                      }}
                    >
                      <Quote size={12} color="#D97706" />
                      <Text
                        style={{
                          color: "#B45309",
                          fontSize: isTablet ? 12.5 : 11.5,
                          fontWeight: "900",
                          marginLeft: 5,
                          flexShrink: 1,
                        }}
                        numberOfLines={1}
                      >
                        {currentScene.speaker}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: "#1C1917",
                        fontSize: isTablet ? 14 : 13,
                        lineHeight: isTablet ? 20 : 18.5,
                        fontWeight: "600",
                        fontStyle: "italic",
                      }}
                    >
                      “{currentScene.dialogue}”
                    </Text>
                  </View>
                ) : null}

                {currentScene.historicalNote ? (
                  <View>
                    <BouncyPressable
                      onPress={() => {
                        triggerLightHaptic();
                        setShowHistoricalNote((prev) => !prev);
                      }}
                      scaleTo={0.97}
                      style={{
                        alignSelf: "flex-start",
                        borderRadius: 12,
                        paddingHorizontal: 11,
                        paddingVertical: 6,
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: showHistoricalNote
                          ? "#F59E0B"
                          : "#F7F3E8",
                        borderWidth: 1.5,
                        borderColor: showHistoricalNote
                          ? "#FDE68A"
                          : "#E6DEC8",
                        borderBottomWidth: 3,
                        borderBottomColor: showHistoricalNote
                          ? "#B45309"
                          : "#D6CBB2",
                      }}
                    >
                      <Text
                        style={{
                          color: "#1C1917",
                          fontSize: 12,
                          fontWeight: "900",
                          marginRight: 5,
                        }}
                      >
                        💡 Bunu Biliyor muydun?
                      </Text>
                      {showHistoricalNote ? (
                        <ChevronUp size={14} color="#1C1917" />
                      ) : (
                        <ChevronDown size={14} color="#78716C" />
                      )}
                    </BouncyPressable>

                    {showHistoricalNote && (
                      <View
                        style={{
                          marginTop: 7,
                          backgroundColor: "#FDF8EC",
                          borderRadius: 13,
                          borderWidth: 1.5,
                          borderColor: "#FDE68A",
                          paddingHorizontal: 12,
                          paddingVertical: 9,
                        }}
                      >
                        <Text
                          style={{
                            color: "#44403C",
                            fontSize: isTablet ? 13.5 : 12.5,
                            lineHeight: isTablet ? 19.5 : 18,
                            fontWeight: "600",
                          }}
                        >
                          {currentScene.historicalNote}
                        </Text>
                      </View>
                    )}
                  </View>
                ) : null}
              </View>
            )}
          </ScrollView>

          {/* Pinned Bottom Action Row */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
              paddingTop: isPhoneLandscape ? 6 : 8,
              borderTopWidth: 1.5,
              borderTopColor: "#E6DEC8",
            }}
          >
            {(sceneIndex > 0 || sceneViewMode === "MID_DECISION") && (
              <BouncyPressable
                onPress={handlePrevScene}
                scaleTo={0.96}
                style={{
                  borderRadius: 14,
                  paddingHorizontal: isTablet ? 15 : 12,
                  paddingVertical: isPhoneLandscape ? 8 : 10,
                  backgroundColor: "#F7F3E8",
                  borderWidth: 2,
                  borderColor: "#E6DEC8",
                  borderBottomWidth: 3.5,
                  borderBottomColor: "#D6CBB2",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowLeft size={15} color="#1C1917" />
                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: isTablet ? 13.5 : 12.5,
                    fontWeight: "900",
                    marginLeft: 5,
                  }}
                >
                  {sceneViewMode === "MID_DECISION" ? "Hikâye" : "Önceki"}
                </Text>
              </BouncyPressable>
            )}

            <BouncyPressable
              onPress={handleNextScene}
              scaleTo={0.98}
              style={{
                flex: 1,
                borderRadius: 14,
                paddingHorizontal: isTablet ? 16 : 13,
                paddingVertical: isPhoneLandscape ? 8 : 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor:
                  hasMidDecision && !midDecisionSolved
                    ? sceneViewMode === "STORY"
                      ? "#F59E0B"
                      : "#E6DEC8"
                    : sceneIndex === totalScenes - 1
                    ? "#F59E0B"
                    : "#10B981",
                borderWidth: 1.5,
                borderColor:
                  hasMidDecision && !midDecisionSolved
                    ? sceneViewMode === "STORY"
                      ? "#FDE68A"
                      : "#D6CBB2"
                    : sceneIndex === totalScenes - 1
                    ? "#FDE68A"
                    : "#6EE7B7",
                borderBottomWidth: 3.5,
                borderBottomColor:
                  hasMidDecision && !midDecisionSolved
                    ? sceneViewMode === "STORY"
                      ? "#B45309"
                      : "#B8AA8E"
                    : sceneIndex === totalScenes - 1
                    ? "#B45309"
                    : "#047857",
              }}
            >
              <Text
                style={{
                  color:
                    hasMidDecision && !midDecisionSolved
                      ? sceneViewMode === "STORY"
                        ? "#1C1917"
                        : "#78716C"
                      : sceneIndex === totalScenes - 1
                      ? "#1C1917"
                      : "#FFFFFF",
                  fontSize: isTablet ? 14.5 : 13,
                  fontWeight: "900",
                  flexShrink: 1,
                  paddingRight: 6,
                }}
                numberOfLines={1}
              >
                {hasMidDecision && !midDecisionSolved
                  ? sceneViewMode === "STORY"
                    ? "⚡ Ara Karar Sorusunu Cevapla"
                    : "Devam İçin Doğru Şıkkı Seç"
                  : sceneIndex < totalScenes - 1
                  ? `Sonraki Sayfa (${sceneIndex + 2}/${totalScenes})`
                  : "Kader Anı: Sen Olsan Ne Yapardın?"}
              </Text>
              <ArrowRight
                size={17}
                color={
                  hasMidDecision && !midDecisionSolved
                    ? sceneViewMode === "STORY"
                      ? "#1C1917"
                      : "#78716C"
                    : sceneIndex === totalScenes - 1
                    ? "#1C1917"
                    : "#FFFFFF"
                }
                strokeWidth={2.5}
              />
            </BouncyPressable>
          </View>
        </View>
      </Animated.View>
    );
  };

  // STAGE 2: DESTINY DECISION CARD (Now scrollable inside so options NEVER clip!)
  const renderDestinyDecisionEngine = () => (
    <View
      style={[
        {
          flex: 1,
          width: "100%",
          backgroundColor: "#FFFDF7",
          borderRadius: isTablet ? 24 : 18,
          borderWidth: 2,
          borderColor: "#E6DEC8",
          borderBottomWidth: isTablet ? 5 : 4,
          borderBottomColor: "#D6CBB2",
          paddingHorizontal: isTablet ? 20 : isPhoneLandscape ? 14 : 13,
          paddingTop: isTablet ? 13 : isPhoneLandscape ? 9 : 11,
          paddingBottom: isTablet ? 13 : isPhoneLandscape ? 9 : 11,
          overflow: "hidden",
        },
        STORYBOOK_PAGE_SHADOW,
      ]}
    >
      {/* Top Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          paddingBottom: isPhoneLandscape ? 6 : 8,
          borderBottomWidth: 1.5,
          borderBottomColor: "#E6DEC8",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            paddingRight: 8,
          }}
        >
          <Sparkles size={15} color="#D97706" />
          <Text
            style={{
              color: "#B45309",
              fontSize: isTablet ? 12.5 : 11.5,
              fontWeight: "900",
              letterSpacing: 0.4,
              textTransform: "uppercase",
              marginLeft: 5,
              flexShrink: 1,
            }}
            numberOfLines={1}
          >
            {chapter.destinyMoment.title}
          </Text>
        </View>

        {renderSpeechButton(
          `${chapter.destinyMoment.title}. ${chapter.destinyMoment.question}`
        )}
      </View>

      {/* Scrollable Center Choices */}
      <ScrollView
        ref={cardScrollRef}
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingVertical: 10,
          flexGrow: 1,
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            color: "#1C1917",
            fontSize: isTablet ? 16 : 14.5,
            lineHeight: isTablet ? 23 : 20.5,
            fontWeight: "800",
            marginBottom: 10,
          }}
        >
          {chapter.destinyMoment.question}
        </Text>

        {activeFeedbackOption && !activeFeedbackOption.isHistoricalTruth && (
          <View
            style={{
              borderRadius: 13,
              paddingHorizontal: 12,
              paddingVertical: 8,
              marginBottom: 9,
              backgroundColor: "#FFFBEB",
              borderWidth: 1.5,
              borderColor: "#F59E0B",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <Lightbulb size={14} color="#D97706" />
              <Text
                style={{
                  color: "#B45309",
                  fontSize: 12,
                  fontWeight: "900",
                  marginLeft: 5,
                }}
              >
                Birlikte Düşünelim ({activeFeedbackOption.label})
              </Text>
            </View>
            <Text
              style={{
                color: "#44403C",
                fontSize: isTablet ? 13 : 12.5,
                lineHeight: isTablet ? 18.5 : 17.5,
                fontWeight: "600",
              }}
            >
              {activeFeedbackOption.feedback}
            </Text>
          </View>
        )}

        <View style={{ gap: 8 }}>
          {chapter.destinyMoment.options.map((option) => {
            const wasTriedWrong = triedWrongOptions.includes(option.id);
            const isPreselectedTruth =
              isChapterCompleted && option.isHistoricalTruth;

            return (
              <BouncyPressable
                key={option.id}
                onPress={() => handleSelectDestinyOption(option)}
                scaleTo={0.98}
                style={{
                  borderRadius: 15,
                  paddingHorizontal: 12,
                  paddingVertical: 10,
                  backgroundColor: isPreselectedTruth
                    ? "#ECFDF5"
                    : wasTriedWrong
                    ? "#FFFBEB"
                    : "#F7F3E8",
                  borderWidth: 2,
                  borderColor: isPreselectedTruth
                    ? "#10B981"
                    : wasTriedWrong
                    ? "#F59E0B"
                    : "#E6DEC8",
                  borderBottomWidth: 3.5,
                  borderBottomColor: isPreselectedTruth
                    ? "#047857"
                    : wasTriedWrong
                    ? "#B45309"
                    : "#D6CBB2",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 29,
                    height: 29,
                    borderRadius: 9,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                    backgroundColor: wasTriedWrong ? "#F59E0B" : "#10B981",
                    borderBottomWidth: 2.5,
                    borderBottomColor: wasTriedWrong ? "#B45309" : "#047857",
                    flexShrink: 0,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 13.5,
                      fontWeight: "900",
                    }}
                  >
                    {isPreselectedTruth ? "✓" : option.id}
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: isTablet ? 14.5 : 13.5,
                    lineHeight: isTablet ? 20 : 18.5,
                    fontWeight: "700",
                    flex: 1,
                  }}
                >
                  {option.text}
                </Text>
              </BouncyPressable>
            );
          })}
        </View>
      </ScrollView>

      {/* Bottom Back / Next Buttons */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          flexShrink: 0,
          paddingTop: isPhoneLandscape ? 6 : 8,
          borderTopWidth: 1.5,
          borderTopColor: "#E6DEC8",
        }}
      >
        <BouncyPressable
          onPress={handlePrevScene}
          scaleTo={0.97}
          style={{
            flex: isChapterCompleted ? undefined : 1,
            borderRadius: 14,
            paddingHorizontal: 14,
            paddingVertical: isPhoneLandscape ? 8 : 10,
            backgroundColor: "#F7F3E8",
            borderWidth: 2,
            borderColor: "#E6DEC8",
            borderBottomWidth: 3.5,
            borderBottomColor: "#D6CBB2",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowLeft size={15} color="#1C1917" />
          <Text
            style={{
              color: "#1C1917",
              fontSize: isTablet ? 13.5 : 12.5,
              fontWeight: "900",
              marginLeft: 5,
            }}
          >
            {isChapterCompleted ? "Önceki" : "Hikâye Sayfalarına Dön"}
          </Text>
        </BouncyPressable>

        {isChapterCompleted && (
          <BouncyPressable
            onPress={() => {
              triggerLightHaptic();
              stopTurkishSpeech();
              setStage("TRUTH_REVEALED");
            }}
            scaleTo={0.98}
            style={{
              flex: 1,
              borderRadius: 14,
              paddingHorizontal: 14,
              paddingVertical: isPhoneLandscape ? 8 : 10,
              backgroundColor: "#10B981",
              borderWidth: 1.5,
              borderColor: "#6EE7B7",
              borderBottomWidth: 3.5,
              borderBottomColor: "#047857",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: isTablet ? 13.5 : 12.5,
                fontWeight: "900",
                flexShrink: 1,
              }}
              numberOfLines={1}
            >
              Tarihi Hakikati Gör
            </Text>
            <ArrowRight size={16} color="#FFFFFF" />
          </BouncyPressable>
        )}
      </View>
    </View>
  );

  // STAGE 3: HISTORICAL TRUTH CARD (Scrollable center + Pinned Bottom Actions)
  const renderHistoricalTruthCelebration = () => (
    <View
      style={[
        {
          flex: 1,
          width: "100%",
          backgroundColor: "#FFFDF7",
          borderRadius: isTablet ? 24 : 18,
          borderWidth: 2,
          borderColor: "#E6DEC8",
          borderBottomWidth: isTablet ? 5 : 4,
          borderBottomColor: "#D6CBB2",
          paddingHorizontal: isTablet ? 20 : isPhoneLandscape ? 14 : 13,
          paddingTop: isTablet ? 13 : isPhoneLandscape ? 9 : 11,
          paddingBottom: isTablet ? 13 : isPhoneLandscape ? 9 : 11,
          overflow: "hidden",
        },
        STORYBOOK_PAGE_SHADOW,
      ]}
    >
      {/* Top Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          paddingBottom: isPhoneLandscape ? 6 : 8,
          borderBottomWidth: 1.5,
          borderBottomColor: "#E6DEC8",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6, flex: 1 }}>
          <CheckCircle2 size={17} color="#10B981" />
          <Text
            style={{
              color: "#047857",
              fontSize: isTablet ? 13 : 11.5,
              fontWeight: "900",
              letterSpacing: 0.3,
              flexShrink: 1,
            }}
            numberOfLines={1}
          >
            TARİHİ HAKİKATİ BULDUN!
          </Text>
        </View>

        {renderSpeechButton(chapter.destinyMoment.historicalTruthExplanation)}
      </View>

      {/* Scrollable Explanation + Quote */}
      <ScrollView
        ref={cardScrollRef}
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingVertical: 10,
          flexGrow: 1,
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            color: "#D97706",
            fontSize: 11,
            fontWeight: "900",
            letterSpacing: 0.6,
            marginBottom: 4,
          }}
        >
          TARİHTE GERÇEKTEN NE OLDU?
        </Text>

        <Text
          style={{
            color: "#1C1917",
            fontSize: isTablet ? 15.5 : 14,
            lineHeight: isTablet ? 22.5 : 20.5,
            fontWeight: "500",
            marginBottom: 10,
          }}
        >
          {chapter.destinyMoment.historicalTruthExplanation}
        </Text>

        {chapter.destinyMoment.quoteHighlight && (
          <View
            style={{
              backgroundColor: "#FDF8EC",
              borderRadius: 14,
              borderWidth: 1.5,
              borderColor: "#FDE68A",
              borderLeftWidth: 4,
              borderLeftColor: "#F59E0B",
              paddingHorizontal: 12,
              paddingVertical: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <Quote size={12} color="#D97706" />
              <Text
                style={{
                  color: "#B45309",
                  fontSize: 11,
                  fontWeight: "900",
                  marginLeft: 5,
                }}
              >
                TARİHE GEÇEN SÖZ
              </Text>
            </View>
            <Text
              style={{
                color: "#1C1917",
                fontSize: isTablet ? 14 : 12.5,
                lineHeight: isTablet ? 19.5 : 18,
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              “{chapter.destinyMoment.quoteHighlight}”
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Bottom Action Area */}
      <View
        style={{
          flexShrink: 0,
          paddingTop: isPhoneLandscape ? 6 : 8,
          borderTopWidth: 1.5,
          borderTopColor: "#E6DEC8",
          gap: 7,
        }}
      >
        {!isChapterCompleted ? (
          <BouncyPressable
            onPress={() => {
              stopTurkishSpeech();
              triggerSuccessHaptic();
              completeChapter(chapter.id, selectedDestinyOptionId);
              setIsChestOpened(true);
              setChestModalVisible(true);
            }}
            scaleTo={0.98}
            style={{
              borderRadius: 14,
              paddingVertical: isPhoneLandscape ? 8 : 11,
              paddingHorizontal: 14,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F59E0B",
              borderWidth: 1.5,
              borderColor: "#FDE68A",
              borderBottomWidth: 3.5,
              borderBottomColor: "#B45309",
            }}
          >
            <Gift size={17} color="#1C1917" />
            <Text
              style={{
                color: "#1C1917",
                fontSize: isTablet ? 14.5 : 13.5,
                fontWeight: "900",
                marginLeft: 7,
              }}
              numberOfLines={1}
            >
              Miras Sandığını Aç (+{chapter.rewardArtifact.points} Puan)
            </Text>
          </BouncyPressable>
        ) : (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 11,
              backgroundColor: "#ECFDF5",
              borderWidth: 1.5,
              borderColor: "#6EE7B7",
            }}
          >
            <CheckCircle2 size={14} color="#047857" />
            <Text
              style={{
                color: "#047857",
                fontSize: isTablet ? 12.5 : 11.5,
                fontWeight: "900",
                marginLeft: 5,
                flexShrink: 1,
              }}
              numberOfLines={1}
            >
              Eser Müzede Açıldı: {chapter.rewardArtifact.name}
            </Text>
          </View>
        )}

        <View style={{ flexDirection: "row", gap: 7 }}>
          {nextAvailableChapter && (
            <BouncyPressable
              onPress={() => {
                stopTurkishSpeech();
                if (!isChapterCompleted) {
                  completeChapter(chapter.id, selectedDestinyOptionId);
                }
                router.replace(`/chapter/${nextAvailableChapter.id}`);
              }}
              scaleTo={0.98}
              style={{
                flex: 1.4,
                borderRadius: 13,
                paddingHorizontal: 12,
                paddingVertical: isPhoneLandscape ? 7 : 9,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#10B981",
                borderWidth: 1,
                borderColor: "#6EE7B7",
                borderBottomWidth: 3.5,
                borderBottomColor: "#047857",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: isTablet ? 13 : 12,
                  fontWeight: "900",
                  flex: 1,
                  paddingRight: 4,
                }}
                numberOfLines={1}
              >
                Sıradaki:{" "}
                {nextHeroChapter
                  ? nextAvailableChapter.title
                  : `${nextAvailableHeroName}`}
              </Text>
              <ArrowRight size={15} color="#FFFFFF" />
            </BouncyPressable>
          )}

          <BouncyPressable
            onPress={() => {
              stopTurkishSpeech();
              if (!isChapterCompleted) {
                completeChapter(chapter.id, selectedDestinyOptionId);
              }
              router.back();
            }}
            scaleTo={0.97}
            style={{
              flex: 1,
              borderRadius: 13,
              paddingVertical: isPhoneLandscape ? 7 : 9,
              paddingHorizontal: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F7F3E8",
              borderWidth: 2,
              borderColor: "#E6DEC8",
              borderBottomWidth: 3.5,
              borderBottomColor: "#D6CBB2",
            }}
          >
            <Text
              style={{
                color: "#1C1917",
                fontSize: isTablet ? 13 : 12,
                fontWeight: "900",
              }}
              numberOfLines={1}
            >
              Ana Menü
            </Text>
          </BouncyPressable>

          <BouncyPressable
            onPress={() => {
              stopTurkishSpeech();
              setSceneIndex(0);
              setStage("SCENES");
              setTriedWrongOptions([]);
              setActiveFeedbackOption(null);
            }}
            scaleTo={0.97}
            style={{
              borderRadius: 13,
              paddingVertical: isPhoneLandscape ? 7 : 9,
              paddingHorizontal: 11,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F7F3E8",
              borderWidth: 2,
              borderColor: "#E6DEC8",
              borderBottomWidth: 3.5,
              borderBottomColor: "#D6CBB2",
            }}
          >
            <RotateCcw size={15} color="#1C1917" />
          </BouncyPressable>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#F7F3E8" }}>
      <SafeAreaView
        style={{ flex: 1 }}
        edges={["top", "bottom", "left", "right"]}
      >
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: "#FDE68A", zIndex: 50 },
            goldenFlashStyle,
          ]}
        />

        {/* Hidden Preloader */}
        <View
          pointerEvents="none"
          style={{
            width: 0,
            height: 0,
            opacity: 0,
            overflow: "hidden",
            position: "absolute",
          }}
        >
          {chapter.scenes.map((s) => {
            const src = resolveImageAsset(s.imageKey ?? s.imagePath);
            return src ? <Image key={s.id} source={src} /> : null;
          })}
          {artifactImageSource ? <Image source={artifactImageSource} /> : null}
        </View>

        {renderTopBar()}

        {/* FULL VIEWPORT FLEX CONTAINER (Zero outer scroll fighting, adapts cleanly to all 4 orientations!) */}
        <View
          style={{
            flex: 1,
            maxWidth: isSideBySideSpread ? 1140 : isTablet ? 840 : 600,
            width: "100%",
            alignSelf: "center",
            paddingHorizontal: containerPadX,
            paddingBottom: isPhoneLandscape ? 6 : isTablet ? 16 : 8,
            justifyContent: isTabletLandscape ? "center" : "flex-start",
          }}
        >
          <View
            style={{
              flex: 1,
              maxHeight: isTabletLandscape ? 580 : undefined,
              flexDirection: isSideBySideSpread ? "row" : "column",
              gap: isSideBySideSpread ? (isTablet ? 20 : 12) : isTablet ? 14 : 9,
            }}
          >
            {/* ARTWORK SIDE */}
            <View
              style={
                isSideBySideSpread
                  ? {
                      width: isTablet ? "47%" : "43%",
                      height: "100%",
                      flexShrink: 0,
                    }
                  : {
                      width: "100%",
                      flexShrink: 0,
                    }
              }
            >
              {renderArtworkPanel()}
            </View>

            {/* STORY / DECISION / TRUTH CARD SIDE */}
            <View style={{ flex: 1, minHeight: 0 }}>
              {stage === "SCENES" && renderSceneReadingContent()}
              {stage === "DESTINY" && renderDestinyDecisionEngine()}
              {stage === "TRUTH_REVEALED" && renderHistoricalTruthCelebration()}
            </View>
          </View>
        </View>

        {/* Reward Artifact Chest Modal */}
        <Modal
          visible={chestModalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setChestModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(28, 25, 23, 0.58)",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: Math.max(16, insets.top + 8),
              paddingBottom: Math.max(16, insets.bottom + 8),
              paddingLeft: Math.max(16, insets.left + 8),
              paddingRight: Math.max(16, insets.right + 8),
            }}
          >
            <Animated.View
              style={[
                {
                  width: "100%",
                  maxWidth: 540,
                  maxHeight: "92%",
                  backgroundColor: "#FFFDF7",
                  borderRadius: 24,
                  borderWidth: 2.5,
                  borderColor: "#F59E0B",
                  borderBottomWidth: 5,
                  borderBottomColor: "#B45309",
                  overflow: "hidden",
                },
                STORYBOOK_PAGE_SHADOW,
                chestAnimatedStyle,
              ]}
            >
              <ScrollView
                contentContainerStyle={{
                  padding: isTablet ? 26 : 18,
                  alignItems: "center",
                }}
                showsVerticalScrollIndicator={false}
              >
                <Text
                  style={{
                    color: "#10B981",
                    fontSize: 12,
                    fontWeight: "900",
                    letterSpacing: 0.7,
                    marginBottom: 8,
                    textAlign: "center",
                  }}
                >
                  ★ YENİ TARİHİ ESER KAZANILDI (+{chapter.rewardArtifact.points}{" "}
                  PUAN) ★
                </Text>

                <View
                  style={{
                    width: isPhoneLandscape ? 96 : 128,
                    height: isPhoneLandscape ? 96 : 128,
                    borderRadius: 22,
                    overflow: "hidden",
                    borderWidth: 3,
                    borderColor: "#F59E0B",
                    backgroundColor: "#1E1B4B",
                    marginBottom: 10,
                  }}
                >
                  {artifactImageSource && (
                    <Image
                      source={artifactImageSource}
                      resizeMode="cover"
                      style={{ width: "100%", height: "100%" }}
                    />
                  )}
                </View>

                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: isTablet ? 20 : 18,
                    fontWeight: "900",
                    textAlign: "center",
                    marginBottom: 4,
                  }}
                >
                  {chapter.rewardArtifact.name}
                </Text>

                <Text
                  style={{
                    color: "#D97706",
                    fontSize: 13,
                    fontWeight: "900",
                    marginBottom: 8,
                    textAlign: "center",
                  }}
                >
                  Yeni Unvan: “{chapter.rewardArtifact.unlockedTitle}”
                </Text>

                <Text
                  style={{
                    color: "#44403C",
                    fontSize: 13.5,
                    lineHeight: 20,
                    textAlign: "center",
                    marginBottom: 16,
                  }}
                >
                  {chapter.rewardArtifact.shortDescription}
                </Text>

                <View style={{ width: "100%", gap: 9 }}>
                  {nextAvailableChapter && (
                    <BouncyPressable
                      onPress={() => {
                        stopTurkishSpeech();
                        setChestModalVisible(false);
                        router.replace(`/chapter/${nextAvailableChapter.id}`);
                      }}
                      scaleTo={0.98}
                      style={{
                        borderRadius: 14,
                        paddingVertical: 11,
                        paddingHorizontal: 16,
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#10B981",
                        borderWidth: 1,
                        borderColor: "#6EE7B7",
                        borderBottomWidth: 3.5,
                        borderBottomColor: "#047857",
                      }}
                    >
                      <Sparkles size={16} color="#FFFFFF" />
                      <Text
                        style={{
                          color: "#FFFFFF",
                          fontSize: 14,
                          fontWeight: "900",
                          marginLeft: 7,
                        }}
                        numberOfLines={1}
                      >
                        Sıradaki: {nextAvailableChapter.title} ➔
                      </Text>
                    </BouncyPressable>
                  )}

                  <BouncyPressable
                    onPress={() => {
                      stopTurkishSpeech();
                      setChestModalVisible(false);
                      router.push("/(tabs)/museum");
                    }}
                    scaleTo={0.98}
                    style={{
                      borderRadius: 14,
                      paddingVertical: 11,
                      paddingHorizontal: 16,
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#F59E0B",
                      borderWidth: 1,
                      borderColor: "#FDE68A",
                      borderBottomWidth: 3.5,
                      borderBottomColor: "#B45309",
                    }}
                  >
                    <Landmark size={16} color="#1C1917" />
                    <Text
                      style={{
                        color: "#1C1917",
                        fontSize: 14,
                        fontWeight: "900",
                        marginLeft: 7,
                      }}
                    >
                      Miras Müzesi’nde İncele
                    </Text>
                  </BouncyPressable>

                  <BouncyPressable
                    onPress={() => setChestModalVisible(false)}
                    scaleTo={0.98}
                    style={{
                      borderRadius: 14,
                      paddingVertical: 10,
                      paddingHorizontal: 16,
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#F7F3E8",
                      borderWidth: 2,
                      borderColor: "#E6DEC8",
                      borderBottomWidth: 3.5,
                      borderBottomColor: "#D6CBB2",
                    }}
                  >
                    <Text
                      style={{
                        color: "#1C1917",
                        fontSize: 13.5,
                        fontWeight: "800",
                      }}
                    >
                      Sayfada Kal
                    </Text>
                  </BouncyPressable>
                </View>
              </ScrollView>
            </Animated.View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
}
