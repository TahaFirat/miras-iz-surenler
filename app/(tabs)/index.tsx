import React, { useState } from "react";
import { View, Text, ScrollView, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import * as Haptics from "expo-haptics";
import {
  Sparkles,
  Shield,
  Cog,
  Landmark,
  Compass,
  Award,
  Scale,
  Search,
  Heart,
  LayoutGrid,
  Globe,
  Feather,
  Play,
} from "lucide-react-native";
import {
  HERO_CLASSES,
  HEROES_DATA,
  HeroClassId,
  HeroClassInfo,
  getAllChapters,
} from "../../src/data/storiesData";
import { useUserStore } from "../../src/store/useUserStore";
import { resolveImageAsset } from "../../src/utils/imageAssets";
import { useResponsiveLayout } from "../../src/utils/useResponsiveLayout";
import { BouncyPressable } from "../../src/components/BouncyPressable";
import { HeroCard } from "../../src/components/HeroCard";
import { FamilyGuideModal } from "../../src/components/FamilyGuideModal";
import { WorldAtlasAndTimeline } from "../../src/components/WorldAtlasAndTimeline";

type HomeTabMode = "HEROES" | "ATLAS";

export default function HomeDiscoveryScreen() {
  const router = useRouter();
  const {
    width,
    isTablet,
    isPhoneLandscape,
    isTabletLandscape,
    isSmallPhone,
    horizontalPadding,
  } = useResponsiveLayout();

  const [activeTab, setActiveTab] = useState<HomeTabMode>("HEROES");
  const [selectedClass, setSelectedClass] = useState<HeroClassId | "ALL">(
    "ALL"
  );
  const [familyGuideVisible, setFamilyGuideVisible] = useState(false);

  const apprenticeName = useUserStore((s) => s.apprenticeName);
  const selectedTitle = useUserStore((s) => s.selectedTitle);
  const totalPoints = useUserStore((s) => s.totalPoints);
  const completedChapters = useUserStore((s) => s.completedChapters);
  const savedSceneProgress = useUserStore((s) => s.savedSceneProgress);

  const allChaptersList = getAllChapters();
  const totalChaptersCount = allChaptersList.length;
  const completedCount = completedChapters.length;
  const progressPercent = Math.min(
    100,
    Math.round((completedCount / Math.max(totalChaptersCount, 1)) * 100)
  );

  // Active in-progress or next uncompleted chapter for the Spotlight banner
  const inProgressEntry = allChaptersList.find(
    (item) =>
      !completedChapters.includes(item.chapter.id) &&
      typeof savedSceneProgress[item.chapter.id] === "number" &&
      savedSceneProgress[item.chapter.id] >= 0
  );
  const nextUncompletedEntry = allChaptersList.find(
    (item) => !completedChapters.includes(item.chapter.id)
  );
  const featuredEntry =
    inProgressEntry || nextUncompletedEntry || allChaptersList[0];
  const featuredSavedIdx = featuredEntry
    ? savedSceneProgress[featuredEntry.chapter.id]
    : undefined;
  const isFeaturedInProgress =
    Boolean(inProgressEntry) && typeof featuredSavedIdx === "number";

  const triggerLightHaptic = () => {
    if (Platform.OS !== "web") {
      Haptics.selectionAsync().catch(() => {});
    }
  };

  const filteredHeroes =
    selectedClass === "ALL"
      ? HEROES_DATA
      : HEROES_DATA.filter((h) => h.heroClass === selectedClass);

  // Adaptive grid columns: 3 cols on wide iPad landscape, 2 cols on iPad portrait & phone landscape, 1 col on phone portrait
  const heroCardWidth =
    isTabletLandscape && width >= 1024
      ? "32.2%"
      : isTablet || isPhoneLandscape
      ? "48.8%"
      : "100%";

  const renderClassIcon = (
    iconName: HeroClassInfo["iconName"],
    color: string,
    size = 14
  ) => {
    switch (iconName) {
      case "scale":
        return <Scale size={size} color={color} />;
      case "shield":
        return <Shield size={size} color={color} />;
      case "cog":
        return <Cog size={size} color={color} />;
      case "search":
        return <Search size={size} color={color} />;
      case "compass":
        return <Compass size={size} color={color} />;
      case "heart":
        return <Heart size={size} color={color} />;
      case "landmark":
        return <Landmark size={size} color={color} />;
      case "sparkles":
        return <Sparkles size={size} color={color} />;
      case "feather":
        return <Feather size={size} color={color} />;
    }
  };

  const getModeTactileColors = (clsId: HeroClassId, isSelected: boolean) => {
    if (!isSelected) {
      return {
        bg: "#FFFDF7",
        border: "#E6DEC8",
        borderBottom: "#D6CBB2",
        text: "#1C1917",
        icon: "#D97706",
      };
    }
    switch (clsId) {
      case "ADALET_VICDANI":
      case "GIZEM_IZ_SURME":
      case "SANAT_ESTETIK":
        return {
          bg: "#F59E0B",
          border: "#FDE68A",
          borderBottom: "#B45309",
          text: "#1C1917",
          icon: "#1C1917",
        };
      case "MERTLIK_CESARET":
      case "MERHAMET_VAKIF":
        return {
          bg: "#F43F5E",
          border: "#FDA4AF",
          borderBottom: "#BE123C",
          text: "#FFFFFF",
          icon: "#FFFFFF",
        };
      default:
        return {
          bg: "#10B981",
          border: "#6EE7B7",
          borderBottom: "#047857",
          text: "#FFFFFF",
          icon: "#FFFFFF",
        };
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F7F3E8" }}>
      <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
        <ScrollView
          contentContainerStyle={{
            paddingTop: isPhoneLandscape ? 8 : isTablet ? 16 : 10,
            paddingBottom: isPhoneLandscape ? 20 : 32,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              maxWidth: 1140,
              alignSelf: "center",
              width: "100%",
              paddingHorizontal: horizontalPadding,
            }}
          >
            {/* 1. CLEAN COMPACT TOP HEADER BAR */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: isPhoneLandscape ? 10 : 12,
              }}
            >
              <View style={{ flex: 1, minWidth: 180 }}>
                <Text
                  style={{
                    color: "#D97706",
                    fontSize: 10.5,
                    fontWeight: "900",
                    letterSpacing: 0.9,
                  }}
                  numberOfLines={1}
                >
                  ★ {apprenticeName.toUpperCase()} • {selectedTitle.toUpperCase()}
                </Text>
                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: isPhoneLandscape
                      ? 20
                      : isTablet
                      ? 26
                      : isSmallPhone
                      ? 20
                      : 23,
                    fontWeight: "900",
                  }}
                  numberOfLines={1}
                >
                  MİRAS: İz Sürenler
                </Text>
              </View>

              {/* Right Quick Status + Family Guide */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#F59E0B",
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 12,
                    borderBottomWidth: 3,
                    borderBottomColor: "#B45309",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Award size={13} color="#1C1917" />
                  <Text
                    style={{
                      color: "#1C1917",
                      fontSize: 12,
                      fontWeight: "900",
                      marginLeft: 4,
                    }}
                  >
                    {totalPoints}
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: "#10B981",
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 12,
                    borderBottomWidth: 3,
                    borderBottomColor: "#047857",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                      fontWeight: "900",
                    }}
                  >
                    {completedCount}/{totalChaptersCount}
                  </Text>
                </View>

                <BouncyPressable
                  onPress={() => {
                    triggerLightHaptic();
                    setFamilyGuideVisible(true);
                  }}
                  scaleTo={0.96}
                  style={{
                    backgroundColor: "#FFFDF7",
                    borderRadius: 12,
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderWidth: 1.5,
                    borderColor: "#E6DEC8",
                    borderBottomWidth: 3,
                    borderBottomColor: "#D6CBB2",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Shield size={14} color="#F43F5E" />
                  <Text
                    style={{
                      color: "#1C1917",
                      fontSize: 12,
                      fontWeight: "900",
                      marginLeft: 4,
                    }}
                  >
                    Aile Rehberi
                  </Text>
                </BouncyPressable>
              </View>
            </View>

            {/* 2. SPOTLIGHT FEATURED CHAPTER (Visible in HEROES tab so ATLAS map starts immediately near the top!) */}
            {activeTab === "HEROES" && featuredEntry && (
              <BouncyPressable
                onPress={() => {
                  triggerLightHaptic();
                  router.push(`/chapter/${featuredEntry.chapter.id}`);
                }}
                scaleTo={0.985}
                style={{
                  backgroundColor: "#1E1B4B",
                  borderRadius: isPhoneLandscape ? 18 : isTablet ? 22 : 18,
                  padding: isPhoneLandscape ? 11 : isTablet ? 16 : 13,
                  marginBottom: isPhoneLandscape ? 10 : 14,
                  borderWidth: 2,
                  borderColor: "#F59E0B",
                  borderBottomWidth: 4,
                  borderBottomColor: "#B45309",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        width: isPhoneLandscape ? 48 : isTablet ? 62 : 54,
                        height: isPhoneLandscape ? 48 : isTablet ? 62 : 54,
                        borderRadius: 14,
                        overflow: "hidden",
                        borderWidth: 2,
                        borderColor: "#FBBF24",
                        backgroundColor: "#0F172A",
                        marginRight: 11,
                        flexShrink: 0,
                      }}
                    >
                      {resolveImageAsset(
                        featuredEntry.hero.images?.cover ??
                          featuredEntry.hero.coverImage ??
                          ""
                      ) && (
                        <Image
                          source={
                            resolveImageAsset(
                              featuredEntry.hero.images?.cover ??
                                featuredEntry.hero.coverImage ??
                                ""
                            )!
                          }
                          resizeMode="cover"
                          style={{ width: "100%", height: "100%" }}
                        />
                      )}
                    </View>

                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          color: "#FBBF24",
                          fontSize: 10.5,
                          fontWeight: "900",
                          textTransform: "uppercase",
                        }}
                        numberOfLines={1}
                      >
                        {isFeaturedInProgress
                          ? `▶ DEVAM ET (SAHNE ${(featuredSavedIdx ?? 0) + 1}/${
                              featuredEntry.chapter.scenes.length
                            })`
                          : "✨ SIRADAKİ MACERA"}
                      </Text>
                      <Text
                        style={{
                          color: "#FFFFFF",
                          fontSize: isPhoneLandscape
                            ? 15.5
                            : isTablet
                            ? 18
                            : 16,
                          fontWeight: "900",
                          marginTop: 1,
                        }}
                        numberOfLines={1}
                      >
                        {featuredEntry.hero.name}
                      </Text>
                      <Text
                        style={{
                          color: "#E2E8F0",
                          fontSize: isPhoneLandscape ? 11.5 : 12.5,
                          fontWeight: "700",
                          marginTop: 1,
                        }}
                        numberOfLines={1}
                      >
                        Bölüm {featuredEntry.chapter.chapterNumber}:{" "}
                        {featuredEntry.chapter.title}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      backgroundColor: "#10B981",
                      paddingHorizontal: isPhoneLandscape ? 12 : 14,
                      paddingVertical: isPhoneLandscape ? 8 : 10,
                      borderRadius: 13,
                      borderBottomWidth: 3.5,
                      borderBottomColor: "#047857",
                      flexDirection: "row",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Play size={13} color="#FFFFFF" fill="#FFFFFF" />
                    <Text
                      style={{
                        color: "#FFFFFF",
                        fontSize: isPhoneLandscape ? 12 : 13,
                        fontWeight: "900",
                        marginLeft: 5,
                      }}
                    >
                      {isFeaturedInProgress ? "Devam" : "Başla"}
                    </Text>
                  </View>
                </View>

                {/* Thin Global Progress Indicator */}
                <View
                  style={{
                    marginTop: isPhoneLandscape ? 8 : 10,
                    width: "100%",
                    height: 5,
                    backgroundColor: "rgba(255, 255, 255, 0.14)",
                    borderRadius: 999,
                    overflow: "hidden",
                  }}
                >
                  <View
                    style={{
                      width: `${Math.max(progressPercent, 3)}%`,
                      height: "100%",
                      backgroundColor: "#10B981",
                      borderRadius: 999,
                    }}
                  />
                </View>
              </BouncyPressable>
            )}

            {/* 3. DIRECT 2-TAB MODE SWITCHER: KAHRAMANLAR vs DÜNYA ATLASI */}
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#EDE6D4",
                borderRadius: 16,
                padding: 4,
                gap: 6,
                marginBottom: isPhoneLandscape ? 10 : 12,
                borderWidth: 1.5,
                borderColor: "#E0D6BF",
              }}
            >
              <BouncyPressable
                onPress={() => {
                  triggerLightHaptic();
                  setActiveTab("HEROES");
                }}
                scaleTo={0.98}
                style={{
                  flex: 1,
                  paddingVertical: isPhoneLandscape ? 7 : 9,
                  paddingHorizontal: 10,
                  borderRadius: 12,
                  backgroundColor:
                    activeTab === "HEROES" ? "#10B981" : "transparent",
                  borderBottomWidth: activeTab === "HEROES" ? 3 : 0,
                  borderBottomColor:
                    activeTab === "HEROES" ? "#047857" : "transparent",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LayoutGrid
                  size={15}
                  color={activeTab === "HEROES" ? "#FFFFFF" : "#57534E"}
                />
                <Text
                  style={{
                    color: activeTab === "HEROES" ? "#FFFFFF" : "#44403C",
                    fontSize: isPhoneLandscape ? 12.5 : 13,
                    fontWeight: "900",
                    marginLeft: 6,
                  }}
                  numberOfLines={1}
                >
                  Kahramanlar ({HEROES_DATA.length})
                </Text>
              </BouncyPressable>

              <BouncyPressable
                onPress={() => {
                  triggerLightHaptic();
                  setActiveTab("ATLAS");
                }}
                scaleTo={0.98}
                style={{
                  flex: 1,
                  paddingVertical: isPhoneLandscape ? 7 : 9,
                  paddingHorizontal: 10,
                  borderRadius: 12,
                  backgroundColor:
                    activeTab === "ATLAS" ? "#F59E0B" : "transparent",
                  borderBottomWidth: activeTab === "ATLAS" ? 3 : 0,
                  borderBottomColor:
                    activeTab === "ATLAS" ? "#B45309" : "transparent",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Globe
                  size={15}
                  color={activeTab === "ATLAS" ? "#1C1917" : "#0D9488"}
                />
                <Text
                  style={{
                    color: activeTab === "ATLAS" ? "#1C1917" : "#44403C",
                    fontSize: isPhoneLandscape ? 12.5 : 13,
                    fontWeight: "900",
                    marginLeft: 6,
                  }}
                  numberOfLines={1}
                >
                  Dünya Atlası & Tarih
                </Text>
              </BouncyPressable>
            </View>

            {/* 4. ACTIVE TAB CONTENT */}
            {activeTab === "ATLAS" ? (
              <WorldAtlasAndTimeline
                completedChapters={completedChapters}
                onSelectChapter={(chapterId) => {
                  triggerLightHaptic();
                  router.push(`/chapter/${chapterId}`);
                }}
              />
            ) : (
              <View>
                {/* Clean Horizontal Category Filter Strip */}
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ width: "100%", marginBottom: isPhoneLandscape ? 10 : 14 }}
                  contentContainerStyle={{ gap: 8, paddingRight: 8 }}
                >
                  <BouncyPressable
                    onPress={() => {
                      triggerLightHaptic();
                      setSelectedClass("ALL");
                    }}
                    scaleTo={0.96}
                    style={{
                      borderRadius: 13,
                      paddingHorizontal: 12,
                      paddingVertical: 7,
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor:
                        selectedClass === "ALL" ? "#10B981" : "#FFFDF7",
                      borderWidth: 1.5,
                      borderColor:
                        selectedClass === "ALL" ? "#6EE7B7" : "#E6DEC8",
                      borderBottomWidth: 3,
                      borderBottomColor:
                        selectedClass === "ALL" ? "#047857" : "#D6CBB2",
                    }}
                  >
                    <Sparkles
                      size={13}
                      color={selectedClass === "ALL" ? "#FFFFFF" : "#F59E0B"}
                    />
                    <Text
                      style={{
                        color:
                          selectedClass === "ALL" ? "#FFFFFF" : "#1C1917",
                        fontSize: 12.5,
                        fontWeight: "900",
                        marginLeft: 5,
                      }}
                    >
                      Tümü ({HEROES_DATA.length})
                    </Text>
                  </BouncyPressable>

                  {HERO_CLASSES.map((cls) => {
                    const isSelected = selectedClass === cls.id;
                    const modeHeroCount = HEROES_DATA.filter(
                      (h) => h.heroClass === cls.id
                    ).length;
                    const theme = getModeTactileColors(cls.id, isSelected);

                    return (
                      <BouncyPressable
                        key={cls.id}
                        onPress={() => {
                          triggerLightHaptic();
                          setSelectedClass(cls.id);
                        }}
                        scaleTo={0.96}
                        style={{
                          borderRadius: 13,
                          paddingHorizontal: 12,
                          paddingVertical: 7,
                          flexDirection: "row",
                          alignItems: "center",
                          backgroundColor: theme.bg,
                          borderWidth: 1.5,
                          borderColor: theme.border,
                          borderBottomWidth: 3,
                          borderBottomColor: theme.borderBottom,
                        }}
                      >
                        {renderClassIcon(cls.iconName, theme.icon, 13)}
                        <Text
                          style={{
                            color: theme.text,
                            fontSize: 12.5,
                            fontWeight: "900",
                            marginLeft: 5,
                          }}
                        >
                          {cls.shortName} ({modeHeroCount})
                        </Text>
                      </BouncyPressable>
                    );
                  })}
                </ScrollView>

                {/* Responsive Hero Cards Grid */}
                <View
                  style={{
                    flexDirection:
                      isTablet || isPhoneLandscape ? "row" : "column",
                    flexWrap:
                      isTablet || isPhoneLandscape ? "wrap" : "nowrap",
                    justifyContent: "space-between",
                  }}
                >
                  {filteredHeroes.map((hero) => (
                    <HeroCard
                      key={hero.id}
                      hero={hero}
                      completedChapters={completedChapters}
                      isTablet={isTablet}
                      isPhoneLandscape={isPhoneLandscape}
                      cardWidth={heroCardWidth}
                      onPress={(chapterId) => {
                        triggerLightHaptic();
                        router.push(`/chapter/${chapterId}`);
                      }}
                    />
                  ))}
                </View>
              </View>
            )}
          </View>
        </ScrollView>

        <FamilyGuideModal
          visible={familyGuideVisible}
          onClose={() => setFamilyGuideVisible(false)}
        />
      </SafeAreaView>
    </View>
  );
}
