import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Platform,
  useWindowDimensions,
} from "react-native";
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
  ArrowLeft,
  ChevronRight,
  BookOpen,
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
import { BouncyPressable } from "../../src/components/BouncyPressable";
import { HeroCard } from "../../src/components/HeroCard";
import { FamilyGuideModal } from "../../src/components/FamilyGuideModal";
import { WorldAtlasAndTimeline } from "../../src/components/WorldAtlasAndTimeline";

type HomeViewMode = "MENU" | "HEROES" | "ATLAS";

export default function HomeDiscoveryScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  const [viewMode, setViewMode] = useState<HomeViewMode>("MENU");
  const [selectedClass, setSelectedClass] = useState<HeroClassId | "ALL">(
    "ALL"
  );
  const [familyGuideVisible, setFamilyGuideVisible] = useState(false);

  const apprenticeName = useUserStore((s) => s.apprenticeName);
  const selectedTitle = useUserStore((s) => s.selectedTitle);
  const totalPoints = useUserStore((s) => s.totalPoints);
  const completedChapters = useUserStore((s) => s.completedChapters);
  const unlockedArtifacts = useUserStore((s) => s.unlockedArtifacts);
  const savedSceneProgress = useUserStore((s) => s.savedSceneProgress);

  const allChaptersList = getAllChapters();
  const totalChaptersCount = allChaptersList.length;
  const completedCount = completedChapters.length;
  const progressPercent = Math.min(
    100,
    Math.round((completedCount / Math.max(totalChaptersCount, 1)) * 100)
  );

  // Find active in-progress chapter or next uncompleted chapter for the Quick Play card
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

  const renderClassIcon = (
    iconName: HeroClassInfo["iconName"],
    color: string,
    size = 15
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
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <ScrollView
          contentContainerStyle={{
            paddingTop: isTablet ? 16 : 10,
            paddingBottom: 120,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              maxWidth: 1120,
              alignSelf: "center",
              width: "100%",
              paddingHorizontal: isTablet ? 24 : 14,
            }}
          >
            {/* ============================================================== */}
            {/* MODE 1: ANA MENÜ (CLEAN GAME HUB)                              */}
            {/* ============================================================== */}
            {viewMode === "MENU" && (
              <View>
                {/* Top App Bar */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 12,
                  }}
                >
                  <View style={{ flex: 1, paddingRight: 8 }}>
                    <Text
                      style={{
                        color: "#D97706",
                        fontSize: 11,
                        fontWeight: "900",
                        letterSpacing: 1,
                      }}
                    >
                      İNTERAKTİF TARİH VE KARAKTER YOLCULUĞU
                    </Text>
                    <Text
                      style={{
                        color: "#1C1917",
                        fontSize: isTablet ? 28 : 22,
                        fontWeight: "900",
                      }}
                      numberOfLines={1}
                    >
                      MİRAS: İz Sürenler
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
                      borderRadius: 14,
                      paddingHorizontal: isTablet ? 14 : 11,
                      paddingVertical: isTablet ? 9 : 7,
                      borderWidth: 1.5,
                      borderColor: "#E6DEC8",
                      borderBottomWidth: 3.5,
                      borderBottomColor: "#D6CBB2",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Shield size={15} color="#F43F5E" />
                    <Text
                      style={{
                        color: "#1C1917",
                        fontSize: 12,
                        fontWeight: "900",
                        marginLeft: 5,
                      }}
                    >
                      Aile Rehberi
                    </Text>
                  </BouncyPressable>
                </View>

                {/* Apprentice Status Card */}
                <View
                  style={{
                    backgroundColor: "#FFFDF7",
                    borderRadius: isTablet ? 24 : 20,
                    padding: isTablet ? 18 : 14,
                    marginBottom: 14,
                    borderWidth: 2,
                    borderColor: "#E6DEC8",
                    borderBottomWidth: 5,
                    borderBottomColor: "#D6CBB2",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 10,
                    }}
                  >
                    <View style={{ flex: 1, minWidth: 160 }}>
                      <Text
                        style={{
                          color: "#0D9488",
                          fontSize: 11,
                          fontWeight: "900",
                          textTransform: "uppercase",
                        }}
                        numberOfLines={1}
                      >
                        ★ {selectedTitle}
                      </Text>
                      <Text
                        style={{
                          color: "#1C1917",
                          fontSize: isTablet ? 20 : 17.5,
                          fontWeight: "900",
                          marginTop: 1,
                        }}
                        numberOfLines={1}
                      >
                        {apprenticeName}
                      </Text>
                    </View>

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
                          paddingHorizontal: 11,
                          paddingVertical: 6,
                          borderRadius: 12,
                          borderBottomWidth: 3,
                          borderBottomColor: "#B45309",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Award size={14} color="#1C1917" />
                        <Text
                          style={{
                            color: "#1C1917",
                            fontSize: 12,
                            fontWeight: "900",
                            marginLeft: 4,
                          }}
                        >
                          {totalPoints} Puan
                        </Text>
                      </View>

                      <View
                        style={{
                          backgroundColor: "#10B981",
                          paddingHorizontal: 11,
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
                          {completedCount}/{totalChaptersCount} Bölüm
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      width: "100%",
                      height: 7,
                      backgroundColor: "#E6DEC8",
                      borderRadius: 999,
                      overflow: "hidden",
                    }}
                  >
                    <View
                      style={{
                        width: `${Math.max(progressPercent, 4)}%`,
                        height: "100%",
                        backgroundColor: "#10B981",
                        borderRadius: 999,
                      }}
                    />
                  </View>
                </View>

                {/* Quick Play / Continue Story Hero Banner */}
                {featuredEntry && (
                  <BouncyPressable
                    onPress={() => {
                      triggerLightHaptic();
                      router.push(`/chapter/${featuredEntry.chapter.id}`);
                    }}
                    scaleTo={0.98}
                    style={{
                      backgroundColor: "#1E1B4B",
                      borderRadius: isTablet ? 24 : 20,
                      padding: isTablet ? 18 : 14,
                      marginBottom: 14,
                      borderWidth: 2,
                      borderColor: "#F59E0B",
                      borderBottomWidth: 5,
                      borderBottomColor: "#B45309",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        flex: 1,
                        paddingRight: 10,
                      }}
                    >
                      <View
                        style={{
                          width: isTablet ? 68 : 56,
                          height: isTablet ? 68 : 56,
                          borderRadius: 16,
                          overflow: "hidden",
                          borderWidth: 2,
                          borderColor: "#FBBF24",
                          backgroundColor: "#0F172A",
                          marginRight: 12,
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
                            fontSize: 11,
                            fontWeight: "900",
                            textTransform: "uppercase",
                          }}
                          numberOfLines={1}
                        >
                          {isFeaturedInProgress
                            ? `▶ KALDIĞIN YERDEN DEVAM ET (SAHNE ${
                                (featuredSavedIdx ?? 0) + 1
                              }/${featuredEntry.chapter.scenes.length})`
                            : "✨ SIRADAKİ MACERA"}
                        </Text>
                        <Text
                          style={{
                            color: "#FFFFFF",
                            fontSize: isTablet ? 19 : 16,
                            fontWeight: "900",
                            marginTop: 2,
                          }}
                          numberOfLines={1}
                        >
                          {featuredEntry.hero.name}
                        </Text>
                        <Text
                          style={{
                            color: "#E2E8F0",
                            fontSize: isTablet ? 13.5 : 12,
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
                        paddingHorizontal: isTablet ? 16 : 12,
                        paddingVertical: isTablet ? 12 : 10,
                        borderRadius: 14,
                        borderBottomWidth: 3.5,
                        borderBottomColor: "#047857",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Play size={14} color="#FFFFFF" fill="#FFFFFF" />
                      <Text
                        style={{
                          color: "#FFFFFF",
                          fontSize: isTablet ? 14 : 12.5,
                          fontWeight: "900",
                          marginLeft: 6,
                        }}
                      >
                        Başla
                      </Text>
                    </View>
                  </BouncyPressable>
                )}

                {/* 4 Main Menu Hub Cards (2x2 Grid on Tablet & Phone) */}
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    rowGap: isTablet ? 14 : 10,
                    marginBottom: 18,
                  }}
                >
                  {/* 1. Hikâyeler & Kahramanlar */}
                  <BouncyPressable
                    onPress={() => {
                      triggerLightHaptic();
                      setSelectedClass("ALL");
                      setViewMode("HEROES");
                    }}
                    scaleTo={0.97}
                    style={{
                      width: "48.5%",
                      backgroundColor: "#10B981",
                      borderRadius: isTablet ? 22 : 18,
                      padding: isTablet ? 18 : 14,
                      borderWidth: 1.5,
                      borderColor: "#6EE7B7",
                      borderBottomWidth: 5,
                      borderBottomColor: "#047857",
                      justifyContent: "space-between",
                      minHeight: isTablet ? 132 : 116,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: 12,
                          backgroundColor: "rgba(255, 255, 255, 0.22)",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <BookOpen size={20} color="#FFFFFF" />
                      </View>
                      <ChevronRight size={18} color="#FFFFFF" />
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text
                        style={{
                          color: "#FFFFFF",
                          fontSize: isTablet ? 18 : 15,
                          fontWeight: "900",
                        }}
                        numberOfLines={1}
                      >
                        Hikâyeler
                      </Text>
                      <Text
                        style={{
                          color: "#ECFDF5",
                          fontSize: isTablet ? 12.5 : 11,
                          fontWeight: "800",
                          marginTop: 2,
                        }}
                        numberOfLines={1}
                      >
                        {HEROES_DATA.length} Kahraman • {totalChaptersCount}{" "}
                        Bölüm
                      </Text>
                    </View>
                  </BouncyPressable>

                  {/* 2. Dünya Atlası & Zaman */}
                  <BouncyPressable
                    onPress={() => {
                      triggerLightHaptic();
                      setViewMode("ATLAS");
                    }}
                    scaleTo={0.97}
                    style={{
                      width: "48.5%",
                      backgroundColor: "#F59E0B",
                      borderRadius: isTablet ? 22 : 18,
                      padding: isTablet ? 18 : 14,
                      borderWidth: 1.5,
                      borderColor: "#FDE68A",
                      borderBottomWidth: 5,
                      borderBottomColor: "#B45309",
                      justifyContent: "space-between",
                      minHeight: isTablet ? 132 : 116,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: 12,
                          backgroundColor: "rgba(28, 25, 23, 0.14)",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Globe size={20} color="#1C1917" />
                      </View>
                      <ChevronRight size={18} color="#1C1917" />
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text
                        style={{
                          color: "#1C1917",
                          fontSize: isTablet ? 18 : 15,
                          fontWeight: "900",
                        }}
                        numberOfLines={1}
                      >
                        Dünya Atlası
                      </Text>
                      <Text
                        style={{
                          color: "#78350F",
                          fontSize: isTablet ? 12.5 : 11,
                          fontWeight: "800",
                          marginTop: 2,
                        }}
                        numberOfLines={1}
                      >
                        Harita & Zaman Şeridi
                      </Text>
                    </View>
                  </BouncyPressable>

                  {/* 3. Miras Müzesi */}
                  <BouncyPressable
                    onPress={() => {
                      triggerLightHaptic();
                      router.push("/(tabs)/museum");
                    }}
                    scaleTo={0.97}
                    style={{
                      width: "48.5%",
                      backgroundColor: "#FFFDF7",
                      borderRadius: isTablet ? 22 : 18,
                      padding: isTablet ? 18 : 14,
                      borderWidth: 2,
                      borderColor: "#E6DEC8",
                      borderBottomWidth: 5,
                      borderBottomColor: "#D6CBB2",
                      justifyContent: "space-between",
                      minHeight: isTablet ? 132 : 116,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: 12,
                          backgroundColor: "#FEF3C7",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Landmark size={20} color="#D97706" />
                      </View>
                      <ChevronRight size={18} color="#78716C" />
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text
                        style={{
                          color: "#1C1917",
                          fontSize: isTablet ? 18 : 15,
                          fontWeight: "900",
                        }}
                        numberOfLines={1}
                      >
                        Miras Müzesi
                      </Text>
                      <Text
                        style={{
                          color: "#0D9488",
                          fontSize: isTablet ? 12.5 : 11,
                          fontWeight: "800",
                          marginTop: 2,
                        }}
                        numberOfLines={1}
                      >
                        {unlockedArtifacts.length}/{totalChaptersCount} Eser
                        Açıldı
                      </Text>
                    </View>
                  </BouncyPressable>

                  {/* 4. Çırak & Sancak Atölyesi */}
                  <BouncyPressable
                    onPress={() => {
                      triggerLightHaptic();
                      router.push("/(tabs)/profile");
                    }}
                    scaleTo={0.97}
                    style={{
                      width: "48.5%",
                      backgroundColor: "#FFFDF7",
                      borderRadius: isTablet ? 22 : 18,
                      padding: isTablet ? 18 : 14,
                      borderWidth: 2,
                      borderColor: "#E6DEC8",
                      borderBottomWidth: 5,
                      borderBottomColor: "#D6CBB2",
                      justifyContent: "space-between",
                      minHeight: isTablet ? 132 : 116,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: 12,
                          backgroundColor: "#CCFBF1",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Shield size={20} color="#0D9488" />
                      </View>
                      <ChevronRight size={18} color="#78716C" />
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text
                        style={{
                          color: "#1C1917",
                          fontSize: isTablet ? 18 : 15,
                          fontWeight: "900",
                        }}
                        numberOfLines={1}
                      >
                        Profil & Sancak
                      </Text>
                      <Text
                        style={{
                          color: "#D97706",
                          fontSize: isTablet ? 12.5 : 11,
                          fontWeight: "800",
                          marginTop: 2,
                        }}
                        numberOfLines={1}
                      >
                        Sancağını Özelleştir
                      </Text>
                    </View>
                  </BouncyPressable>
                </View>

                {/* Quick Category Shortcuts Section */}
                <View>
                  <Text
                    style={{
                      color: "#1C1917",
                      fontSize: isTablet ? 18 : 15.5,
                      fontWeight: "900",
                      marginBottom: 10,
                    }}
                  >
                    Kategorilere Göre Keşfet
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      rowGap: 8,
                    }}
                  >
                    {HERO_CLASSES.map((cls) => {
                      const count = HEROES_DATA.filter(
                        (h) => h.heroClass === cls.id
                      ).length;
                      return (
                        <BouncyPressable
                          key={cls.id}
                          onPress={() => {
                            triggerLightHaptic();
                            setSelectedClass(cls.id);
                            setViewMode("HEROES");
                          }}
                          scaleTo={0.97}
                          style={{
                            width: isTablet ? "24%" : "48.5%",
                            backgroundColor: "#FFFDF7",
                            borderRadius: 14,
                            paddingHorizontal: 12,
                            paddingVertical: 11,
                            borderWidth: 1.5,
                            borderColor: "#E6DEC8",
                            borderBottomWidth: 3.5,
                            borderBottomColor: "#D6CBB2",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              flex: 1,
                              paddingRight: 4,
                            }}
                          >
                            {renderClassIcon(
                              cls.iconName,
                              cls.accentColor,
                              15
                            )}
                            <Text
                              style={{
                                color: "#1C1917",
                                fontSize: 12.5,
                                fontWeight: "800",
                                marginLeft: 7,
                                flexShrink: 1,
                              }}
                              numberOfLines={1}
                            >
                              {cls.shortName}
                            </Text>
                          </View>
                          <Text
                            style={{
                              color: "#78716C",
                              fontSize: 11.5,
                              fontWeight: "800",
                            }}
                          >
                            {count}
                          </Text>
                        </BouncyPressable>
                      );
                    })}
                  </View>
                </View>
              </View>
            )}

            {/* ============================================================== */}
            {/* MODE 2 & 3: HEROES LIST OR WORLD ATLAS (WITH BACK TO MENU BAR) */}
            {/* ============================================================== */}
            {viewMode !== "MENU" && (
              <View>
                {/* Clean Sub-Navigation Bar: Back to Ana Menü + Mode Switcher */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                    marginBottom: 14,
                  }}
                >
                  <BouncyPressable
                    onPress={() => {
                      triggerLightHaptic();
                      setViewMode("MENU");
                    }}
                    scaleTo={0.96}
                    style={{
                      backgroundColor: "#FFFDF7",
                      borderRadius: 14,
                      paddingHorizontal: isTablet ? 14 : 11,
                      paddingVertical: isTablet ? 10 : 8,
                      borderWidth: 1.5,
                      borderColor: "#E6DEC8",
                      borderBottomWidth: 3.5,
                      borderBottomColor: "#D6CBB2",
                      flexDirection: "row",
                      alignItems: "center",
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
                      Ana Menü
                    </Text>
                  </BouncyPressable>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <BouncyPressable
                      onPress={() => {
                        triggerLightHaptic();
                        setViewMode("HEROES");
                      }}
                      scaleTo={0.97}
                      style={{
                        backgroundColor:
                          viewMode === "HEROES" ? "#10B981" : "#FFFDF7",
                        borderRadius: 14,
                        paddingHorizontal: isTablet ? 14 : 11,
                        paddingVertical: isTablet ? 10 : 8,
                        borderWidth: 1.5,
                        borderColor:
                          viewMode === "HEROES" ? "#6EE7B7" : "#E6DEC8",
                        borderBottomWidth: 3.5,
                        borderBottomColor:
                          viewMode === "HEROES" ? "#047857" : "#D6CBB2",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <LayoutGrid
                        size={15}
                        color={viewMode === "HEROES" ? "#FFFFFF" : "#D97706"}
                      />
                      <Text
                        style={{
                          color: viewMode === "HEROES" ? "#FFFFFF" : "#1C1917",
                          fontSize: isTablet ? 13 : 12,
                          fontWeight: "900",
                          marginLeft: 5,
                        }}
                      >
                        Kahramanlar
                      </Text>
                    </BouncyPressable>

                    <BouncyPressable
                      onPress={() => {
                        triggerLightHaptic();
                        setViewMode("ATLAS");
                      }}
                      scaleTo={0.97}
                      style={{
                        backgroundColor:
                          viewMode === "ATLAS" ? "#F59E0B" : "#FFFDF7",
                        borderRadius: 14,
                        paddingHorizontal: isTablet ? 14 : 11,
                        paddingVertical: isTablet ? 10 : 8,
                        borderWidth: 1.5,
                        borderColor:
                          viewMode === "ATLAS" ? "#FDE68A" : "#E6DEC8",
                        borderBottomWidth: 3.5,
                        borderBottomColor:
                          viewMode === "ATLAS" ? "#B45309" : "#D6CBB2",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Globe
                        size={15}
                        color={viewMode === "ATLAS" ? "#1C1917" : "#10B981"}
                      />
                      <Text
                        style={{
                          color: "#1C1917",
                          fontSize: isTablet ? 13 : 12,
                          fontWeight: "900",
                          marginLeft: 5,
                        }}
                      >
                        Dünya Atlası
                      </Text>
                    </BouncyPressable>
                  </View>
                </View>

                {viewMode === "ATLAS" ? (
                  <WorldAtlasAndTimeline
                    completedChapters={completedChapters}
                    onSelectChapter={(chapterId) => {
                      triggerLightHaptic();
                      router.push(`/chapter/${chapterId}`);
                    }}
                  />
                ) : (
                  <>
                    {/* Clean Horizontal Category Filter Pills */}
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={{ width: "100%", marginBottom: 14 }}
                      contentContainerStyle={{ gap: 8, paddingRight: 8 }}
                    >
                      <BouncyPressable
                        onPress={() => {
                          triggerLightHaptic();
                          setSelectedClass("ALL");
                        }}
                        scaleTo={0.96}
                        style={{
                          borderRadius: 14,
                          paddingHorizontal: 13,
                          paddingVertical: 8,
                          flexDirection: "row",
                          alignItems: "center",
                          backgroundColor:
                            selectedClass === "ALL" ? "#10B981" : "#FFFDF7",
                          borderWidth: 1.5,
                          borderColor:
                            selectedClass === "ALL" ? "#6EE7B7" : "#E6DEC8",
                          borderBottomWidth: 3.5,
                          borderBottomColor:
                            selectedClass === "ALL" ? "#047857" : "#D6CBB2",
                        }}
                      >
                        <Sparkles
                          size={14}
                          color={
                            selectedClass === "ALL" ? "#FFFFFF" : "#F59E0B"
                          }
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
                              borderRadius: 14,
                              paddingHorizontal: 13,
                              paddingVertical: 8,
                              flexDirection: "row",
                              alignItems: "center",
                              backgroundColor: theme.bg,
                              borderWidth: 1.5,
                              borderColor: theme.border,
                              borderBottomWidth: 3.5,
                              borderBottomColor: theme.borderBottom,
                            }}
                          >
                            {renderClassIcon(cls.iconName, theme.icon, 14)}
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
                        flexDirection: isTablet ? "row" : "column",
                        flexWrap: isTablet ? "wrap" : "nowrap",
                        justifyContent: "space-between",
                      }}
                    >
                      {filteredHeroes.map((hero) => (
                        <HeroCard
                          key={hero.id}
                          hero={hero}
                          completedChapters={completedChapters}
                          isTablet={isTablet}
                          onPress={(chapterId) => {
                            triggerLightHaptic();
                            router.push(`/chapter/${chapterId}`);
                          }}
                        />
                      ))}
                    </View>
                  </>
                )}
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
