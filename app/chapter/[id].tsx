import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  Platform,
  useWindowDimensions,
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
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  Gift,
  Landmark,
  Eye,
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
import { BouncyPressable } from "../../src/components/BouncyPressable";
import { SceneArtwork } from "../../src/components/SceneArtwork";

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
  const { width, height: windowHeight } = useWindowDimensions();
  const isTablet = width >= 820;
  const isSmallPhone = width < 420;

  const found = getChapterById(id || "");

  const completedChapters = useUserStore((s) => s.completedChapters);
  const savedSceneProgress = useUserStore((s) => s.savedSceneProgress);
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

  // Turkish TTS (expo-speech) state
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Collapsible "💡 Bunu Biliyor muydun?" state
  const [showHistoricalNote, setShowHistoricalNote] = useState(false);

  // Scene 4 Mid-Decision ("Ara Karar") state
  const [selectedMidOption, setSelectedMidOption] =
    useState<MidDecisionOption | null>(null);
  const [midDecisionSolved, setMidDecisionSolved] = useState(false);

  // Final Destiny Moment choices state
  const [triedWrongOptions, setTriedWrongOptions] = useState<string[]>([]);
  const [activeFeedbackOption, setActiveFeedbackOption] =
    useState<DestinyOption | null>(null);
  const [selectedDestinyOptionId, setSelectedDestinyOptionId] = useState<
    "A" | "B" | "C"
  >("C");

  // Treasure Chest Modal state (NEVER opens automatically!)
  const [chestModalVisible, setChestModalVisible] = useState(false);
  const [isChestOpened, setIsChestOpened] = useState(false);

  // Animations (200ms smooth opacity fade-in, zero vertical jump)
  const cardFade = useSharedValue(1);
  const goldenFlashOpacity = useSharedValue(0);
  const chestScale = useSharedValue(0.92);
  const chestGlow = useSharedValue(0.5);

  const currentScene = found
    ? found.chapter.scenes[
        Math.min(sceneIndex, found.chapter.scenes.length - 1)
      ]
    : null;

  // Safe Haptics helpers
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

  // Stop speech helper
  const stopTurkishSpeech = () => {
    try {
      Speech.stop();
    } catch {
      // ignore
    }
    setIsSpeaking(false);
  };

  // Initialize / restore auto-bookmark when chapter id changes
  useEffect(() => {
    stopTurkishSpeech();
    if (!found) return;

    const chId = found.chapter.id;
    const total = found.chapter.scenes.length;
    const alreadyDone = useUserStore
      .getState()
      .completedChapters.includes(chId);
    const savedIdx = useUserStore.getState().savedSceneProgress[chId];

    // If chapter was already completed, start at Scene 1 (index 0) and unlock all segments.
    // Otherwise resume from savedSceneProgress bookmark!
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

  // Save scene progress (auto-bookmark) whenever sceneIndex changes on an uncompleted chapter
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

  // Toggle Turkish TTS reading for given text
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

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      try {
        Speech.stop();
      } catch {
        // ignore
      }
    };
  }, []);

  // Smooth 200ms fade-in effect when scene changes + pre-solve Ara Karar if chapter is already completed
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

  // Trigger subtle warm screen flash when entering DESTINY or TRUTH_REVEALED
  const triggerGoldenScreenFlash = () => {
    goldenFlashOpacity.value = 0.35;
    goldenFlashOpacity.value = withTiming(0, {
      duration: 700,
      easing: Easing.out(Easing.quad),
    });
  };

  // Animate chest modal pulse
  useEffect(() => {
    if (chestModalVisible) {
      chestScale.value = 0.9;
      chestScale.value = withSpring(1, { damping: 14, stiffness: 180 });
      chestGlow.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 1200 }),
          withTiming(0.5, { duration: 1200 })
        ),
        -1,
        true
      );
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

  const chestGlowStyle = useAnimatedStyle(() => ({
    opacity: chestGlow.value,
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
            className="rounded-2xl px-6 py-3.5 items-center justify-center"
            style={{
              backgroundColor: "#10B981",
              borderBottomWidth: 4,
              borderBottomColor: "#047857",
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "900" }}>
              Keşif Haritasına Dön
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

  // Find next chapter of this hero OR the next chapter in the global curriculum
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

  // Bind each scene directly to its own scene.imageKey / scene.imagePath
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

  const activeAtmosphere =
    stage === "SCENES"
      ? currentScene.atmosphereType
      : chapter.scenes[totalScenes - 1]?.atmosphereType ?? "NIGHT_LANTERN";

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

    // If this scene has an Ara Karar and the user is still reading the STORY tab (and chapter is not already completed),
    // clicking the main bottom button switches directly to the Ara Karar view without scrolling!
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

  // Keyboard ArrowRight / ArrowLeft support for Web & Tablet keyboards
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
    // Critical UX rule: NEVER auto-open the chest modal here!
    // Let the child read "Tarihte Gerçekten Ne Oldu?" first in peace.
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

  // RESPONSIVE, CLEAN TOP BAR WITH 9 CLICKABLE PROGRESS SEGMENTS
  const renderTopBar = () => (
    <View
      style={{
        maxWidth: 1140,
        alignSelf: "center",
        width: "100%",
        paddingHorizontal: isTablet ? 24 : 12,
        paddingTop: isTablet ? 8 : 4,
        paddingBottom: isTablet ? 10 : 6,
      }}
    >
      {/* Row 1: Back Button + Hero/Chapter Title + Scene Counter Pill */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          marginBottom: isTablet ? 8 : 5,
        }}
      >
        <BouncyPressable
          onPress={() => {
            stopTurkishSpeech();
            router.back();
          }}
          scaleTo={0.96}
          className="rounded-xl flex-row items-center"
          style={{
            paddingHorizontal: isTablet ? 14 : 10,
            paddingVertical: isTablet ? 8 : 6,
            backgroundColor: "#FFFDF7",
            borderWidth: 1.5,
            borderColor: "#E6DEC8",
            borderBottomWidth: 3.5,
            borderBottomColor: "#D6CBB2",
            flexShrink: 0,
          }}
        >
          <ArrowLeft size={isTablet ? 16 : 14} color="#1C1917" />
          <Text
            style={{
              color: "#1C1917",
              fontSize: isTablet ? 13 : 12,
              fontWeight: "900",
              marginLeft: 5,
            }}
          >
            Ana Menü
          </Text>
        </BouncyPressable>

        {/* Center Title (Single clean line on mobile & tablet, never squished) */}
        <View style={{ flex: 1, paddingHorizontal: 4 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: isTablet ? "flex-end" : "center",
              gap: 6,
            }}
          >
            <Text
              style={{
                color: "#0D9488",
                fontSize: isTablet ? 12 : 11,
                fontWeight: "900",
              }}
              numberOfLines={1}
            >
              {hero.name} • Bölüm {chapter.chapterNumber}
            </Text>
          </View>

          <Text
            style={{
              color: "#1C1917",
              fontSize: isTablet ? 14.5 : 12.5,
              fontWeight: "900",
              textAlign: isTablet ? "right" : "center",
            }}
            numberOfLines={1}
          >
            {chapter.title}
          </Text>
        </View>

        {/* Right: Scene Counter Badge */}
        <View
          style={{
            paddingHorizontal: isTablet ? 12 : 9,
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

      {/* Row 2: Clickable Segmented Progress Bar (Jump to any unlocked/completed scene) */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: isTablet ? 6 : 4,
          width: "100%",
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
              style={{
                flex: 1,
                paddingVertical: 4,
              }}
            >
              <View
                style={{
                  height: isCurrent ? (isTablet ? 9 : 7) : isTablet ? 7 : 5,
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
    </View>
  );

  // Compute responsive card heights: Left image strictly pinned at 520px on Tablet/Desktop; Right card maxHeight 560px with internal ScrollView
  const desktopCardHeight = 520;
  const desktopRightMaxHeight = 560;
  const mobileArtworkCardHeight = windowHeight < 740 ? 156 : 176;
  const mobileArtworkImageHeight = mobileArtworkCardHeight - 36;
  const mobileRightCardHeight = Math.max(
    330,
    Math.min(480, windowHeight - mobileArtworkCardHeight - 108)
  );

  // LEFT ILLUSTRATED STORYBOOK PAGE (Strictly Pinned 520px on Tablet/Desktop, Compact Panoramic on Phone)
  const renderArtworkPanel = () => {
    const cardHeight = isTablet ? 520 : mobileArtworkCardHeight;
    const imageHeight = isTablet ? 426 : mobileArtworkImageHeight;
    const footerHeight = cardHeight - imageHeight - 6;

    return (
      <View
        style={[
          {
            width: "100%",
            height: cardHeight,
            minHeight: cardHeight,
            maxHeight: cardHeight,
            alignSelf: "flex-start",
            flexShrink: 0,
            backgroundColor: "#FFFDF7",
            borderRadius: isTablet ? 26 : 20,
            borderWidth: 2,
            borderColor: "#E6DEC8",
            borderBottomWidth: isTablet ? 6 : 4,
            borderBottomColor: "#D6CBB2",
            overflow: "hidden",
          },
          STORYBOOK_PAGE_SHADOW,
        ]}
      >
        <View
          style={{
            height: imageHeight,
            minHeight: imageHeight,
            maxHeight: imageHeight,
            flexShrink: 0,
          }}
        >
          <SceneArtwork
            imagePath={activeArtworkPath}
            atmosphereType={activeAtmosphere}
            visualMode={hero.visualMode}
            height={imageHeight}
            showBottomGradient={false}
          />
        </View>

        {/* Scene Caption Footer */}
        <View
          style={{
            height: footerHeight,
            minHeight: footerHeight,
            maxHeight: footerHeight,
            flexShrink: 0,
            justifyContent: "center",
            backgroundColor: "#FFFDF7",
            paddingHorizontal: isTablet ? 20 : 12,
            borderTopWidth: 1.5,
            borderTopColor: "#E6DEC8",
          }}
        >
          {isTablet ? (
            <>
              <Text
                style={{
                  color: "#0D9488",
                  fontSize: 11,
                  fontWeight: "900",
                  letterSpacing: 0.6,
                  textTransform: "uppercase",
                  marginBottom: 2,
                }}
                numberOfLines={1}
              >
                {stage === "SCENES"
                  ? `${hero.name} • Sahne ${currentScene.sceneNumber}`
                  : `${hero.name} • Karar Zamanı`}
              </Text>
              <Text
                style={{
                  color: "#1C1917",
                  fontSize: 17.5,
                  lineHeight: 22,
                  fontWeight: "900",
                }}
                numberOfLines={1}
              >
                {stage === "SCENES"
                  ? currentScene.title
                  : chapter.destinyMoment.title}
              </Text>
            </>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Text
                style={{
                  color: "#0D9488",
                  fontSize: 11,
                  fontWeight: "900",
                  textTransform: "uppercase",
                }}
              >
                {stage === "SCENES"
                  ? `SAHNE ${currentScene.sceneNumber}:`
                  : "KARAR:"}
              </Text>
              <Text
                style={{
                  color: "#1C1917",
                  fontSize: 13,
                  fontWeight: "900",
                  flex: 1,
                }}
                numberOfLines={1}
              >
                {stage === "SCENES"
                  ? currentScene.title
                  : chapter.destinyMoment.title}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  // RIGHT WARM PARCHMENT STORYBOOK PAGE (maxHeight: 560, Pinned Top Header + Internal ScrollView + Pinned Bottom Buttons)
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
      <Animated.View style={[cardAnimatedStyle, { width: "100%" }]}>
        <View
          style={[
            {
              width: "100%",
              height: isTablet ? desktopCardHeight : mobileRightCardHeight,
              minHeight: isTablet ? desktopCardHeight : mobileRightCardHeight,
              maxHeight: isTablet
                ? desktopRightMaxHeight
                : mobileRightCardHeight,
              alignSelf: "flex-start",
              backgroundColor: "#FFFDF7",
              borderRadius: isTablet ? 26 : 20,
              borderWidth: 2,
              borderColor: "#E6DEC8",
              borderBottomWidth: isTablet ? 6 : 4,
              borderBottomColor: "#D6CBB2",
              paddingHorizontal: isTablet ? 22 : 14,
              paddingTop: isTablet ? 14 : 12,
              paddingBottom: isTablet ? 14 : 12,
              justifyContent: "space-between",
              overflow: "hidden",
            },
            STORYBOOK_PAGE_SHADOW,
          ]}
        >
          {/* PINNED TOP HEADER: Always preserves "HİKÂYE KİTABI • SAYFA X" + "Sesli Dinle" */}
          <View
            style={{
              flexShrink: 0,
              paddingBottom: isTablet ? 9 : 8,
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
                <BookOpen size={isTablet ? 15 : 14} color="#D97706" />
                <Text
                  style={{
                    color: "#92400E",
                    fontSize: isTablet ? 12 : 11,
                    fontWeight: "900",
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    marginLeft: 6,
                  }}
                  numberOfLines={1}
                >
                  HİKÂYE KİTABI • SAYFA {currentScene.sceneNumber}
                </Text>
              </View>

              <BouncyPressable
                onPress={() => handleToggleSpeech(fullSpeechText)}
                scaleTo={0.96}
                className="rounded-xl flex-row items-center"
                style={{
                  paddingHorizontal: isTablet ? 12 : 10,
                  paddingVertical: isTablet ? 6 : 5,
                  backgroundColor: isSpeaking ? "#F43F5E" : "#F59E0B",
                  borderWidth: 1,
                  borderColor: isSpeaking ? "#FDA4AF" : "#FDE68A",
                  borderBottomWidth: 3,
                  borderBottomColor: isSpeaking ? "#BE123C" : "#B45309",
                  flexShrink: 0,
                }}
              >
                {isSpeaking ? (
                  <VolumeX size={14} color="#FFFFFF" />
                ) : (
                  <Volume2 size={14} color="#1C1917" />
                )}
                <Text
                  style={{
                    color: isSpeaking ? "#FFFFFF" : "#1C1917",
                    fontSize: isTablet ? 12 : 11,
                    fontWeight: "900",
                    marginLeft: 5,
                  }}
                >
                  {isSpeaking ? "Durdur" : "Sesli Dinle"}
                </Text>
              </BouncyPressable>
            </View>

            {/* Scene 4 Mode Switcher Pill Row (Below the preserved top header so it never hides Page 4 title) */}
            {hasMidDecision && (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#F3EDE0",
                  borderRadius: 11,
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
                    paddingHorizontal: isTablet ? 12 : 9,
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
                      fontSize: isTablet ? 11.5 : 11,
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
                    paddingHorizontal: isTablet ? 12 : 9,
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
                      fontSize: isTablet ? 11.5 : 11,
                      fontWeight: "900",
                    }}
                  >
                    {midDecisionSolved ? "✓ Ara Karar" : "⚡ Ara Karar Sorusu"}
                  </Text>
                </BouncyPressable>
              </View>
            )}
          </View>

          {/* INTERNAL SCROLLABLE MIDDLE CONTENT: Keeps top header & bottom buttons 100% pinned! */}
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{
              paddingVertical: isTablet ? 10 : 8,
              flexGrow: 1,
              justifyContent: "center",
            }}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
          >
            {sceneViewMode === "MID_DECISION" && currentScene.midDecision ? (
              /* DEDICATED ARA KARAR VIEW */
              <View style={{ justifyContent: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 6,
                  }}
                >
                  <Sparkles
                    size={16}
                    color={midDecisionSolved ? "#10B981" : "#D97706"}
                  />
                  <Text
                    style={{
                      color: midDecisionSolved ? "#047857" : "#B45309",
                      fontSize: isTablet ? 12.5 : 11.5,
                      fontWeight: "900",
                      marginLeft: 6,
                      textTransform: "uppercase",
                      letterSpacing: 0.4,
                    }}
                  >
                    {currentScene.midDecision.title}
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: isTablet ? 16 : 14.5,
                    lineHeight: isTablet ? 22.5 : 20.5,
                    fontWeight: "800",
                    marginBottom: isTablet ? 12 : 9,
                  }}
                >
                  {currentScene.midDecision.question}
                </Text>

                <View style={{ gap: isTablet ? 9 : 8 }}>
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
                        className="rounded-2xl flex-row items-center"
                        style={{
                          paddingHorizontal: isTablet ? 13 : 11,
                          paddingVertical: isTablet ? 10 : 9,
                          backgroundColor: bgColor,
                          borderWidth: 2,
                          borderColor,
                          borderBottomWidth: 4,
                          borderBottomColor,
                        }}
                      >
                        <View
                          style={{
                            width: isTablet ? 30 : 26,
                            height: isTablet ? 30 : 26,
                            borderRadius: 9,
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: 10,
                            backgroundColor: isSelected
                              ? opt.isBestChoice
                                ? "#10B981"
                                : "#F59E0B"
                              : "#D6CBB2",
                          }}
                        >
                          <Text
                            style={{
                              color: isSelected ? "#FFFFFF" : "#1C1917",
                              fontSize: isTablet ? 13.5 : 12.5,
                              fontWeight: "900",
                            }}
                          >
                            {opt.id}
                          </Text>
                        </View>
                        <Text
                          style={{
                            color: "#1C1917",
                            fontSize: isTablet ? 14 : 13,
                            lineHeight: isTablet ? 19.5 : 18,
                            fontWeight: "700",
                            flex: 1,
                            flexShrink: 1,
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
                      marginTop: isTablet ? 10 : 8,
                      borderRadius: 14,
                      paddingHorizontal: 12,
                      paddingVertical: 8,
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
                        fontSize: isTablet ? 13 : 12,
                        lineHeight: isTablet ? 18.5 : 17,
                        fontWeight: "700",
                      }}
                    >
                      {selectedMidOption.feedback}
                    </Text>
                  </View>
                )}
              </View>
            ) : (
              /* STORY + DIALOGUE + HISTORICAL NOTE VIEW */
              <View style={{ justifyContent: "space-between" }}>
                {/* 1. Main Story Narration (minHeight: 180 + 200ms fade-in so screen never jumps) */}
                <View style={{ minHeight: 180, gap: isTablet ? 8 : 6 }}>
                  {fullNarration
                    .split(/\n\n+/)
                    .filter(Boolean)
                    .map((paragraph, pIdx) => (
                      <Text
                        key={pIdx}
                        style={{
                          color: pIdx === 0 ? "#1C1917" : "#292524",
                          fontSize: isTablet ? 14 : 13.5,
                          lineHeight: isTablet ? 20.5 : 19.5,
                          fontWeight: pIdx === 0 ? "600" : "500",
                        }}
                      >
                        {paragraph}
                      </Text>
                    ))}
                </View>

                {/* 2. Character Dialogue Callout */}
                {currentScene.speaker && currentScene.dialogue ? (
                  <View
                    style={{
                      marginTop: isTablet ? 9 : 8,
                      backgroundColor: "#FDF8EC",
                      borderRadius: 15,
                      borderWidth: 1.5,
                      borderColor: "#FDE68A",
                      borderLeftWidth: 4,
                      borderLeftColor: "#F59E0B",
                      paddingHorizontal: isTablet ? 13 : 11,
                      paddingVertical: isTablet ? 8 : 7,
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
                        fontSize: isTablet ? 13.5 : 12.5,
                        lineHeight: isTablet ? 19 : 17.5,
                        fontWeight: "600",
                        fontStyle: "italic",
                      }}
                    >
                      “{currentScene.dialogue}”
                    </Text>
                  </View>
                ) : null}

                {/* 3. Compact "💡 Bunu Biliyor muydun?" */}
                {currentScene.historicalNote ? (
                  <View style={{ marginTop: isTablet ? 9 : 8 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <BouncyPressable
                        onPress={() => {
                          triggerLightHaptic();
                          setShowHistoricalNote((prev) => !prev);
                        }}
                        scaleTo={0.97}
                        className="rounded-xl flex-row items-center"
                        style={{
                          paddingHorizontal: 11,
                          paddingVertical: 5,
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
                            fontSize: isTablet ? 12 : 11.5,
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
                    </View>

                    {showHistoricalNote && (
                      <View
                        style={{
                          marginTop: 6,
                          backgroundColor: "#FDF8EC",
                          borderRadius: 14,
                          borderWidth: 1.5,
                          borderColor: "#FDE68A",
                          paddingHorizontal: 12,
                          paddingVertical: 8,
                        }}
                      >
                        <Text
                          style={{
                            color: "#44403C",
                            fontSize: isTablet ? 13 : 12,
                            lineHeight: isTablet ? 18.5 : 17,
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

          {/* PINNED BOTTOM NAVIGATION BUTTONS (Always Visible Without Scrolling) */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
              paddingTop: isTablet ? 10 : 8,
              borderTopWidth: 1.5,
              borderTopColor: "#E6DEC8",
            }}
          >
            {(sceneIndex > 0 || sceneViewMode === "MID_DECISION") && (
              <BouncyPressable
                onPress={handlePrevScene}
                scaleTo={0.96}
                className="rounded-2xl flex-row items-center justify-center"
                style={{
                  paddingHorizontal: isTablet ? 16 : 12,
                  minHeight: isTablet ? 44 : 40,
                  backgroundColor: "#F7F3E8",
                  borderWidth: 2,
                  borderColor: "#E6DEC8",
                  borderBottomWidth: 4,
                  borderBottomColor: "#D6CBB2",
                }}
              >
                <ArrowLeft size={16} color="#1C1917" />
                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: isTablet ? 13.5 : 12.5,
                    fontWeight: "900",
                    marginLeft: 5,
                  }}
                >
                  {sceneViewMode === "MID_DECISION" ? "Hikâyeye Dön" : "Önceki"}
                </Text>
              </BouncyPressable>
            )}

            <BouncyPressable
              onPress={handleNextScene}
              scaleTo={0.98}
              className="rounded-2xl flex-row items-center justify-between"
              style={{
                flex: 1,
                paddingHorizontal: isTablet ? 18 : 14,
                minHeight: isTablet ? 44 : 40,
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
                borderBottomWidth: 4,
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
                    : "Devam Etmek İçin Doğru Şıkkı Seç"
                  : sceneIndex < totalScenes - 1
                  ? `Sonraki Sayfa (${sceneIndex + 2}/${totalScenes})`
                  : "Kader Anı: Sen Olsan Ne Yapardın?"}
              </Text>
              <ArrowRight
                size={18}
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

  // ZERO-SCROLL DESTINY DECISION ENGINE (Fits 100% inside the card without scrolling)
  const renderDestinyDecisionEngine = () => (
    <View
      style={[
        {
          width: "100%",
          height: isTablet ? desktopCardHeight : undefined,
          minHeight: isTablet ? desktopCardHeight : undefined,
          maxHeight: desktopRightMaxHeight,
          alignSelf: "flex-start",
          backgroundColor: "#FFFDF7",
          borderRadius: isTablet ? 26 : 20,
          borderWidth: 2,
          borderColor: "#E6DEC8",
          borderBottomWidth: isTablet ? 6 : 4,
          borderBottomColor: "#D6CBB2",
          paddingHorizontal: isTablet ? 24 : 14,
          paddingTop: isTablet ? 16 : 12,
          paddingBottom: isTablet ? 16 : 12,
          justifyContent: "space-between",
          overflow: "hidden",
        },
        STORYBOOK_PAGE_SHADOW,
      ]}
    >
      {/* Pinned Top Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          paddingBottom: isTablet ? 10 : 8,
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
          <Sparkles size={16} color="#D97706" />
          <Text
            style={{
              color: "#B45309",
              fontSize: isTablet ? 12.5 : 11.5,
              fontWeight: "900",
              letterSpacing: 0.4,
              textTransform: "uppercase",
              marginLeft: 6,
              flexShrink: 1,
            }}
            numberOfLines={1}
          >
            {chapter.destinyMoment.title}
          </Text>
        </View>

        <BouncyPressable
          onPress={() =>
            handleToggleSpeech(
              `${chapter.destinyMoment.title}. ${chapter.destinyMoment.question}`
            )
          }
          scaleTo={0.96}
          className="rounded-xl flex-row items-center"
          style={{
            paddingHorizontal: isTablet ? 12 : 10,
            paddingVertical: isTablet ? 6 : 5,
            backgroundColor: isSpeaking ? "#F43F5E" : "#F59E0B",
            borderWidth: 1,
            borderColor: isSpeaking ? "#FDA4AF" : "#FDE68A",
            borderBottomWidth: 3,
            borderBottomColor: isSpeaking ? "#BE123C" : "#B45309",
          }}
        >
          {isSpeaking ? (
            <VolumeX size={14} color="#FFFFFF" />
          ) : (
            <Volume2 size={14} color="#1C1917" />
          )}
          <Text
            style={{
              color: isSpeaking ? "#FFFFFF" : "#1C1917",
              fontSize: isTablet ? 12 : 11,
              fontWeight: "900",
              marginLeft: 5,
            }}
          >
            {isSpeaking ? "Durdur" : "Sesli Dinle"}
          </Text>
        </BouncyPressable>
      </View>

      {/* Center Options (Fits without scrolling) */}
      <View
        style={{
          flex: isTablet ? 1 : undefined,
          justifyContent: "center",
          paddingVertical: isTablet ? 8 : 6,
        }}
      >
        <Text
          style={{
            color: "#1C1917",
            fontSize: isTablet ? 16.5 : 14.5,
            lineHeight: isTablet ? 23 : 20,
            fontWeight: "800",
            marginBottom: isTablet ? 10 : 8,
          }}
        >
          {chapter.destinyMoment.question}
        </Text>

        {activeFeedbackOption && !activeFeedbackOption.isHistoricalTruth && (
          <View
            style={{
              borderRadius: 14,
              paddingHorizontal: 12,
              paddingVertical: 8,
              marginBottom: 8,
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
                fontSize: isTablet ? 13 : 12,
                lineHeight: isTablet ? 18 : 16.5,
                fontWeight: "600",
              }}
            >
              {activeFeedbackOption.feedback}
            </Text>
          </View>
        )}

        <View style={{ gap: isTablet ? 8 : 7 }}>
          {chapter.destinyMoment.options.map((option) => {
            const wasTriedWrong = triedWrongOptions.includes(option.id);
            const isPreselectedTruth =
              isChapterCompleted && option.isHistoricalTruth;

            return (
              <BouncyPressable
                key={option.id}
                onPress={() => handleSelectDestinyOption(option)}
                scaleTo={0.98}
                className="rounded-2xl flex-row items-center"
                style={{
                  paddingHorizontal: isTablet ? 12 : 10,
                  paddingVertical: isTablet ? 10 : 8,
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
                  borderBottomWidth: 4,
                  borderBottomColor: isPreselectedTruth
                    ? "#047857"
                    : wasTriedWrong
                    ? "#B45309"
                    : "#D6CBB2",
                }}
              >
                <View
                  style={{
                    width: isTablet ? 32 : 28,
                    height: isTablet ? 32 : 28,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                    backgroundColor: wasTriedWrong ? "#F59E0B" : "#10B981",
                    borderBottomWidth: 2.5,
                    borderBottomColor: wasTriedWrong ? "#B45309" : "#047857",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: isTablet ? 14 : 13,
                      fontWeight: "900",
                    }}
                  >
                    {isPreselectedTruth ? "✓" : option.id}
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: isTablet ? 14 : 13,
                    lineHeight: isTablet ? 19.5 : 18,
                    fontWeight: "700",
                    flex: 1,
                    flexShrink: 1,
                  }}
                >
                  {option.text}
                </Text>
              </BouncyPressable>
            );
          })}
        </View>
      </View>

      {/* Pinned Bottom Back / Next Buttons */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          flexShrink: 0,
          paddingTop: isTablet ? 10 : 8,
          borderTopWidth: 1.5,
          borderTopColor: "#E6DEC8",
        }}
      >
        <BouncyPressable
          onPress={handlePrevScene}
          scaleTo={0.97}
          className="rounded-2xl flex-row items-center justify-center"
          style={{
            flex: isChapterCompleted ? undefined : 1,
            paddingHorizontal: 14,
            minHeight: isTablet ? 44 : 40,
            backgroundColor: "#F7F3E8",
            borderWidth: 2,
            borderColor: "#E6DEC8",
            borderBottomWidth: 4,
            borderBottomColor: "#D6CBB2",
          }}
        >
          <ArrowLeft size={16} color="#1C1917" />
          <Text
            style={{
              color: "#1C1917",
              fontSize: isTablet ? 13.5 : 12.5,
              fontWeight: "900",
              marginLeft: 6,
            }}
          >
            {isChapterCompleted ? "Önceki" : "Hikâye Sayfalarına Geri Dön"}
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
            className="rounded-2xl flex-row items-center justify-between"
            style={{
              flex: 1,
              paddingHorizontal: 16,
              minHeight: isTablet ? 44 : 40,
              backgroundColor: "#10B981",
              borderWidth: 1.5,
              borderColor: "#6EE7B7",
              borderBottomWidth: 4,
              borderBottomColor: "#047857",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: isTablet ? 13.5 : 12.5,
                fontWeight: "900",
              }}
            >
              Sonraki Sayfa (Tarihi Hakikat)
            </Text>
            <ArrowRight size={17} color="#FFFFFF" />
          </BouncyPressable>
        )}
      </View>
    </View>
  );

  // ZERO-SCROLL HISTORICAL TRUTH CELEBRATION CARD (Never obscured by an auto-popping chest modal!)
  const renderHistoricalTruthCelebration = () => (
    <View
      style={[
        {
          width: "100%",
          height: isTablet ? desktopCardHeight : undefined,
          minHeight: isTablet ? desktopCardHeight : undefined,
          maxHeight: isTablet ? desktopCardHeight : undefined,
          alignSelf: "flex-start",
          backgroundColor: "#FFFDF7",
          borderRadius: isTablet ? 26 : 20,
          borderWidth: 2,
          borderColor: "#E6DEC8",
          borderBottomWidth: isTablet ? 6 : 4,
          borderBottomColor: "#D6CBB2",
          paddingHorizontal: isTablet ? 24 : 14,
          paddingTop: isTablet ? 16 : 12,
          paddingBottom: isTablet ? 16 : 12,
          justifyContent: "space-between",
        },
        STORYBOOK_PAGE_SHADOW,
      ]}
    >
      {/* Pinned Top Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          paddingBottom: isTablet ? 10 : 8,
          borderBottomWidth: 1.5,
          borderBottomColor: "#E6DEC8",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <CheckCircle2 size={18} color="#10B981" />
          <Text
            style={{
              color: "#047857",
              fontSize: isTablet ? 13 : 12,
              fontWeight: "900",
              letterSpacing: 0.3,
            }}
          >
            TARİHİ HAKİKATİ BULDUN!
          </Text>
        </View>

        <BouncyPressable
          onPress={() =>
            handleToggleSpeech(
              chapter.destinyMoment.historicalTruthExplanation
            )
          }
          scaleTo={0.96}
          className="rounded-xl flex-row items-center"
          style={{
            paddingHorizontal: isTablet ? 12 : 10,
            paddingVertical: isTablet ? 6 : 5,
            backgroundColor: isSpeaking ? "#F43F5E" : "#F59E0B",
            borderWidth: 1,
            borderColor: isSpeaking ? "#FDA4AF" : "#FDE68A",
            borderBottomWidth: 3,
            borderBottomColor: isSpeaking ? "#BE123C" : "#B45309",
          }}
        >
          {isSpeaking ? (
            <VolumeX size={14} color="#FFFFFF" />
          ) : (
            <Volume2 size={14} color="#1C1917" />
          )}
          <Text
            style={{
              color: isSpeaking ? "#FFFFFF" : "#1C1917",
              fontSize: isTablet ? 12 : 11,
              fontWeight: "900",
              marginLeft: 5,
            }}
          >
            {isSpeaking ? "Durdur" : "Sesli Dinle"}
          </Text>
        </BouncyPressable>
      </View>

      {/* Center Celebration Content */}
      <View
        style={{
          flex: isTablet ? 1 : undefined,
          justifyContent: "center",
          paddingVertical: isTablet ? 6 : 6,
        }}
      >
        <Text
          style={{
            color: "#D97706",
            fontSize: 11.5,
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
            fontSize: isTablet ? 15 : 13.5,
            lineHeight: isTablet ? 22 : 19.5,
            fontWeight: "500",
            marginBottom: isTablet ? 10 : 8,
          }}
        >
          {chapter.destinyMoment.historicalTruthExplanation}
        </Text>

        {chapter.destinyMoment.quoteHighlight && (
          <View
            style={{
              backgroundColor: "#FDF8EC",
              borderRadius: 15,
              borderWidth: 1.5,
              borderColor: "#FDE68A",
              borderLeftWidth: 4,
              borderLeftColor: "#F59E0B",
              paddingHorizontal: 13,
              paddingVertical: 9,
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
                lineHeight: isTablet ? 19.5 : 17.5,
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              “{chapter.destinyMoment.quoteHighlight}”
            </Text>
          </View>
        )}
      </View>

      {/* Pinned Bottom Action Area */}
      <View
        style={{
          flexShrink: 0,
          paddingTop: isTablet ? 10 : 8,
          borderTopWidth: 1.5,
          borderTopColor: "#E6DEC8",
          gap: 8,
        }}
      >
        {!isChapterCompleted ? (
          /* FIRST-TIME COMPLETION: Show glowing "🎁 Miras Sandığını Aç (+50 Puan)" button!
             Chest modal ONLY opens when user clicks this button! */
          <BouncyPressable
            onPress={() => {
              stopTurkishSpeech();
              triggerSuccessHaptic();
              completeChapter(chapter.id, selectedDestinyOptionId);
              setIsChestOpened(true);
              setChestModalVisible(true);
            }}
            scaleTo={0.98}
            className="rounded-2xl py-3 px-4 flex-row items-center justify-center"
            style={{
              backgroundColor: "#F59E0B",
              borderWidth: 1.5,
              borderColor: "#FDE68A",
              borderBottomWidth: 4,
              borderBottomColor: "#B45309",
            }}
          >
            <Gift size={18} color="#1C1917" />
            <Text
              style={{
                color: "#1C1917",
                fontSize: isTablet ? 15 : 14,
                fontWeight: "900",
                marginLeft: 8,
              }}
            >
              🎁 Miras Sandığını Aç (+{chapter.rewardArtifact.points} Puan)
            </Text>
          </BouncyPressable>
        ) : (
          /* ALREADY COMPLETED: Never show chest modal or chest button again! */
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 12,
              backgroundColor: "#ECFDF5",
              borderWidth: 1.5,
              borderColor: "#6EE7B7",
            }}
          >
            <CheckCircle2 size={15} color="#047857" />
            <Text
              style={{
                color: "#047857",
                fontSize: isTablet ? 13 : 12,
                fontWeight: "900",
                marginLeft: 6,
              }}
            >
              ✓ Bu Bölümün Eseri Müzede Açıldı ({chapter.rewardArtifact.name})
            </Text>
          </View>
        )}

        {/* Seamless "Sıradaki Bölüm" + "Keşif Haritasına Dön" Row */}
        <View style={{ flexDirection: "row", gap: 8 }}>
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
              className="rounded-2xl px-3.5 py-2.5 flex-row items-center justify-between"
              style={{
                flex: 1.4,
                backgroundColor: "#10B981",
                borderWidth: 1,
                borderColor: "#6EE7B7",
                borderBottomWidth: 4,
                borderBottomColor: "#047857",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1,
                  paddingRight: 6,
                }}
              >
                <Sparkles size={15} color="#FFFFFF" />
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: isTablet ? 13 : 12,
                    fontWeight: "900",
                    marginLeft: 6,
                    flexShrink: 1,
                  }}
                  numberOfLines={1}
                >
                  Sıradaki Bölüm:{" "}
                  {nextHeroChapter
                    ? nextAvailableChapter.title
                    : `${nextAvailableHeroName} - ${nextAvailableChapter.title}`}
                </Text>
              </View>
              <ArrowRight size={16} color="#FFFFFF" />
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
            className="rounded-2xl py-2.5 px-3 flex-row items-center justify-center"
            style={{
              flex: 1,
              backgroundColor: "#F7F3E8",
              borderWidth: 2,
              borderColor: "#E6DEC8",
              borderBottomWidth: 4,
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
              Keşif Haritasına Dön
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
            className="rounded-2xl py-2.5 px-3 flex-row items-center justify-center"
            style={{
              backgroundColor: "#F7F3E8",
              borderWidth: 2,
              borderColor: "#E6DEC8",
              borderBottomWidth: 4,
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
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: "#FDE68A", zIndex: 50 },
            goldenFlashStyle,
          ]}
        />

        {/* Hidden Preloader for all chapter scene images so scene transitions never flicker or lag */}
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

        <ScrollView
          contentContainerStyle={{
            paddingBottom: isTablet ? 20 : 12,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Centered 1140px Open Illustrated Storybook Spread */}
          <View
            style={{
              maxWidth: 1140,
              alignSelf: "center",
              width: "100%",
              paddingHorizontal: isTablet ? 24 : 12,
            }}
          >
            <View
              style={{
                flexDirection: isTablet ? "row" : "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: isTablet ? 20 : 10,
              }}
            >
              <View
                style={{
                  width: isTablet ? "47%" : "100%",
                  height: isTablet
                    ? desktopCardHeight
                    : mobileArtworkCardHeight,
                  minHeight: isTablet
                    ? desktopCardHeight
                    : mobileArtworkCardHeight,
                  maxHeight: isTablet
                    ? desktopCardHeight
                    : mobileArtworkCardHeight,
                  alignSelf: "flex-start",
                  flexShrink: 0,
                }}
              >
                {renderArtworkPanel()}
              </View>

              <View
                style={{
                  width: isTablet ? "51%" : "100%",
                  alignSelf: "flex-start",
                  flexShrink: 0,
                }}
              >
                {stage === "SCENES" && renderSceneReadingContent()}
                {stage === "DESTINY" && renderDestinyDecisionEngine()}
                {stage === "TRUTH_REVEALED" &&
                  renderHistoricalTruthCelebration()}
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Reward Artifact Chest Modal (Only opens when user explicitly clicks "🎁 Miras Sandığını Aç") */}
        <Modal
          visible={chestModalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setChestModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(28, 25, 23, 0.55)",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
            }}
          >
            <Animated.View
              style={[
                {
                  width: "100%",
                  maxWidth: 600,
                  backgroundColor: "#FFFDF7",
                  borderRadius: 26,
                  borderWidth: 2.5,
                  borderColor: "#F59E0B",
                  borderBottomWidth: 6,
                  borderBottomColor: "#B45309",
                  padding: isTablet ? 28 : 20,
                  alignItems: "center",
                },
                STORYBOOK_PAGE_SHADOW,
                chestAnimatedStyle,
              ]}
            >
              <Text
                style={{
                  color: "#10B981",
                  fontSize: 12,
                  fontWeight: "900",
                  letterSpacing: 0.8,
                  marginBottom: 8,
                }}
              >
                ★ YENİ TARİHİ ESER KAZANILDI (+{chapter.rewardArtifact.points}{" "}
                PUAN) ★
              </Text>

              <View
                style={{
                  width: 136,
                  height: 136,
                  borderRadius: 24,
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "#F59E0B",
                  backgroundColor: "#1E1B4B",
                  marginBottom: 12,
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
                  fontSize: isTablet ? 21 : 19,
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
                  fontSize: 13.5,
                  fontWeight: "900",
                  marginBottom: 8,
                }}
              >
                Yeni Unvan: “{chapter.rewardArtifact.unlockedTitle}”
              </Text>

              <Text
                style={{
                  color: "#44403C",
                  fontSize: 14,
                  lineHeight: 21,
                  textAlign: "center",
                  marginBottom: 18,
                }}
              >
                {chapter.rewardArtifact.shortDescription}
              </Text>

              <View className="w-full gap-2.5">
                {nextAvailableChapter && (
                  <BouncyPressable
                    onPress={() => {
                      stopTurkishSpeech();
                      setChestModalVisible(false);
                      router.replace(`/chapter/${nextAvailableChapter.id}`);
                    }}
                    scaleTo={0.98}
                    className="rounded-2xl py-3 px-5 w-full flex-row items-center justify-center"
                    style={{
                      backgroundColor: "#10B981",
                      borderWidth: 1,
                      borderColor: "#6EE7B7",
                      borderBottomWidth: 4,
                      borderBottomColor: "#047857",
                    }}
                  >
                    <Sparkles size={17} color="#FFFFFF" />
                    <Text
                      style={{
                        color: "#FFFFFF",
                        fontSize: 14.5,
                        fontWeight: "900",
                        marginLeft: 8,
                      }}
                      numberOfLines={1}
                    >
                      Sıradaki Bölüm: {nextAvailableChapter.title} ➔
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
                  className="rounded-2xl py-3 px-5 w-full flex-row items-center justify-center"
                  style={{
                    backgroundColor: "#F59E0B",
                    borderWidth: 1,
                    borderColor: "#FDE68A",
                    borderBottomWidth: 4,
                    borderBottomColor: "#B45309",
                  }}
                >
                  <Landmark size={17} color="#1C1917" />
                  <Text
                    style={{
                      color: "#1C1917",
                      fontSize: 14.5,
                      fontWeight: "900",
                      marginLeft: 8,
                    }}
                  >
                    Miras Müzesi’nde İncele
                  </Text>
                </BouncyPressable>

                <BouncyPressable
                  onPress={() => setChestModalVisible(false)}
                  scaleTo={0.98}
                  className="rounded-2xl py-2.5 px-5 w-full items-center justify-center"
                  style={{
                    backgroundColor: "#F7F3E8",
                    borderWidth: 2,
                    borderColor: "#E6DEC8",
                    borderBottomWidth: 4,
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
            </Animated.View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
}
