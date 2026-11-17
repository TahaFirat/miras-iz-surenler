import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Platform,
  Image,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import * as Haptics from "expo-haptics";
import {
  Award,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  Crown,
  PenLine,
  BookOpen,
  ShieldCheck,
  Lock,
  X,
  ArrowRight,
} from "lucide-react-native";
import {
  useUserStore,
  BANNER_SYMBOL_OPTIONS,
  BannerSymbolId,
} from "../../src/store/useUserStore";
import {
  getAllArtifacts,
  getAllChapters,
  getHeroById,
} from "../../src/data/storiesData";
import { resolveImageAsset } from "../../src/utils/imageAssets";
import { useResponsiveLayout } from "../../src/utils/useResponsiveLayout";
import { BouncyPressable } from "../../src/components/BouncyPressable";

const MOTTO_PRESETS = [
  "Adalet, Bilim ve İyilik İzinde",
  "Hakikat Sönmeyen Bir Fenerdir",
  "Mertlik ve Merhamet Muhafızı",
  "Bilgi Paylaştıkça Büyüyen Hazinedir",
];

const CREST_IMAGE_BY_SYMBOL: Record<BannerSymbolId, string> = {
  lantern: "assets/images/badge_crest_lantern.png",
  shield: "assets/images/badge_crest_shield.png",
  gear: "assets/images/badge_crest_gear.png",
  astrolabe: "assets/images/badge_crest_astrolabe.png",
  crescent_star: "assets/images/badge_crest_crescent.png",
  feather: "assets/images/badge_crest_feather.png",
};

export default function ApprenticeProfileScreen() {
  const router = useRouter();
  const {
    isTablet,
    isPhoneLandscape,
    insets,
    horizontalPadding,
  } = useResponsiveLayout();

  const isTwoColumn = isTablet || isPhoneLandscape;

  const apprenticeName = useUserStore((s) => s.apprenticeName);
  const selectedTitle = useUserStore((s) => s.selectedTitle);
  const unlockedTitles = useUserStore((s) => s.unlockedTitles);
  const virtuePoints = useUserStore((s) => s.virtuePoints);
  const totalPoints = useUserStore((s) => s.totalPoints);
  const completedChapters = useUserStore((s) => s.completedChapters);
  const bannerConfig = useUserStore((s) => s.bannerConfig);

  const setApprenticeName = useUserStore((s) => s.setApprenticeName);
  const setSelectedTitle = useUserStore((s) => s.setSelectedTitle);
  const updateBannerConfig = useUserStore((s) => s.updateBannerConfig);
  const resetProgress = useUserStore((s) => s.resetProgress);

  const [nameInput, setNameInput] = useState(apprenticeName);
  const [badgeFilter, setBadgeFilter] = useState<"UNLOCKED" | "ALL">("ALL");
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  useEffect(() => {
    setNameInput(apprenticeName);
  }, [apprenticeName]);

  const triggerLightHaptic = () => {
    if (Platform.OS !== "web") {
      Haptics.selectionAsync().catch(() => {});
    }
  };

  const activeSymbol =
    BANNER_SYMBOL_OPTIONS.find((s) => s.id === bannerConfig.symbol) ||
    BANNER_SYMBOL_OPTIONS[0];

  const activeCrestSource = resolveImageAsset(
    CREST_IMAGE_BY_SYMBOL[bannerConfig.symbol] ||
      "assets/images/badge_crest_lantern.png"
  );

  const allArtifacts = getAllArtifacts();
  const totalChaptersCount = getAllChapters().length;

  const allPossibleTitles = [
    {
      id: "starter-title",
      title: "İz Süren Çırak",
      artifactName: "Başlangıç Arması",
      heroName: "Miras Atölyesi",
      chapterId: "",
      imagePath: "assets/images/badge_crest_lantern.png",
    },
    ...allArtifacts.map((art) => {
      const hero = getHeroById(art.heroId);
      return {
        id: art.id,
        title: art.unlockedTitle,
        artifactName: art.name,
        heroName: hero?.name || "",
        chapterId: art.chapterId,
        imagePath: art.imagePath,
      };
    }),
  ];

  const displayedTitles =
    badgeFilter === "UNLOCKED"
      ? allPossibleTitles.filter(
          (item) =>
            item.id === "starter-title" || unlockedTitles.includes(item.title)
        )
      : allPossibleTitles;

  return (
    <View style={{ flex: 1, backgroundColor: "#F7F3E8" }}>
      <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
        <ScrollView
          contentContainerStyle={{
            paddingTop: isPhoneLandscape ? 10 : 14,
            paddingBottom: isPhoneLandscape ? 20 : 32,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              maxWidth: 1120,
              alignSelf: "center",
              width: "100%",
              paddingHorizontal: horizontalPadding,
            }}
          >
            {/* Minimal Header */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 14,
              }}
            >
              <View style={{ flex: 1, minWidth: 170 }}>
                <Text
                  style={{
                    color: "#D97706",
                    fontSize: 10.5,
                    fontWeight: "900",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  OYUNCU KİMLİĞİ & ARMA
                </Text>
                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: isPhoneLandscape ? 19 : isTablet ? 24 : 18.5,
                    fontWeight: "900",
                  }}
                  numberOfLines={1}
                >
                  Profil & Rozetler
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <BouncyPressable
                  onPress={() => {
                    triggerLightHaptic();
                    setShowPrivacyModal(true);
                  }}
                  scaleTo={0.96}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 7,
                    borderRadius: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFFDF7",
                    borderWidth: 1.5,
                    borderColor: "#E6DEC8",
                  }}
                >
                  <Lock size={13} color="#D97706" />
                  <Text
                    style={{
                      color: "#57534E",
                      fontSize: 11.5,
                      fontWeight: "800",
                      marginLeft: 5,
                    }}
                  >
                    Gizlilik
                  </Text>
                </BouncyPressable>

                <BouncyPressable
                  onPress={() => {
                    triggerLightHaptic();
                    setShowResetConfirm(true);
                  }}
                  scaleTo={0.96}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 7,
                    borderRadius: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFF1F2",
                    borderWidth: 1.5,
                    borderColor: "#FECDD3",
                  }}
                >
                  <RotateCcw size={13} color="#E11D48" />
                  <Text
                    style={{
                      color: "#BE123C",
                      fontSize: 11.5,
                      fontWeight: "800",
                      marginLeft: 5,
                    }}
                  >
                    Sıfırla
                  </Text>
                </BouncyPressable>
              </View>
            </View>

            <View
              style={{
                flexDirection: isTwoColumn ? "row" : "column",
                alignItems: "flex-start",
                gap: isPhoneLandscape ? 14 : 18,
              }}
            >
              {/* LEFT COLUMN: Royal Identity Card + Compact Stats + Crest Picker */}
              <View style={{ width: isTwoColumn ? "44%" : "100%" }}>
                {/* Royal Crest Identity Card */}
                <LinearGradient
                  colors={["#1E1B4B", "#0F172A"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    borderRadius: 24,
                    padding: isTablet ? 20 : 16,
                    borderWidth: 2,
                    borderColor: "#F59E0B",
                    marginBottom: 14,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: isPhoneLandscape ? 88 : 112,
                      height: isPhoneLandscape ? 88 : 112,
                      borderRadius: 56,
                      padding: 3.5,
                      backgroundColor: "#F59E0B",
                      shadowColor: "#F59E0B",
                      shadowOffset: { width: 0, height: 6 },
                      shadowOpacity: 0.35,
                      shadowRadius: 12,
                      elevation: 8,
                      marginBottom: 10,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        borderRadius: 52,
                        overflow: "hidden",
                        backgroundColor: "#0F172A",
                        borderWidth: 2,
                        borderColor: "#FEF3C7",
                      }}
                    >
                      {activeCrestSource && (
                        <Image
                          source={activeCrestSource}
                          style={{ width: "100%", height: "100%" }}
                          resizeMode="cover"
                        />
                      )}
                    </View>
                  </View>

                  <Text
                    style={{
                      color: "#FBBF24",
                      fontSize: 10.5,
                      fontWeight: "800",
                      letterSpacing: 0.8,
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    {activeSymbol.label}
                  </Text>

                  {/* Editable Apprentice Name */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderRadius: 14,
                      paddingHorizontal: 12,
                      paddingVertical: 5,
                      marginBottom: 10,
                      backgroundColor: "rgba(255,255,255,0.08)",
                      borderWidth: 1,
                      borderColor: "rgba(251,191,36,0.35)",
                      maxWidth: 250,
                    }}
                  >
                    <TextInput
                      value={nameInput}
                      onChangeText={(val) => {
                        setNameInput(val);
                        setApprenticeName(val);
                      }}
                      maxLength={24}
                      returnKeyType="done"
                      placeholder="Adını yaz..."
                      placeholderTextColor="#94A3B8"
                      style={{
                        color: "#FFFBEB",
                        fontSize: 16.5,
                        fontWeight: "900",
                        textAlign: "center",
                        paddingVertical: 2,
                        minWidth: 120,
                        flexShrink: 1,
                      }}
                    />
                    <PenLine size={14} color="#FBBF24" style={{ marginLeft: 6 }} />
                  </View>

                  {/* Equipped Title Ribbon */}
                  <View
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 6,
                      borderRadius: 999,
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 10,
                      backgroundColor: "#F59E0B",
                      borderBottomWidth: 3,
                      borderBottomColor: "#B45309",
                    }}
                  >
                    <Crown size={13} color="#1C1917" />
                    <Text
                      style={{
                        color: "#1C1917",
                        fontSize: 12,
                        fontWeight: "900",
                        marginLeft: 5,
                      }}
                    >
                      {selectedTitle}
                    </Text>
                  </View>

                  {/* Motto Banner Strip */}
                  <View
                    style={{
                      width: "100%",
                      borderRadius: 12,
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      alignItems: "center",
                      backgroundColor: "rgba(15, 23, 42, 0.75)",
                      borderWidth: 1,
                      borderColor: "rgba(251, 191, 36, 0.25)",
                    }}
                  >
                    <Text
                      style={{
                        color: "#FDE68A",
                        fontSize: 12,
                        fontWeight: "700",
                        fontStyle: "italic",
                        textAlign: "center",
                      }}
                    >
                      “{bannerConfig.motto}”
                    </Text>
                  </View>
                </LinearGradient>

                {/* 4 Compact Stat Cards (2x2 Grid) */}
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    rowGap: 9,
                    marginBottom: 14,
                  }}
                >
                  {[
                    {
                      label: "Toplam Puan",
                      value: `${totalPoints}`,
                      color: "#D97706",
                      bg: "#FEF3C7",
                      icon: <Sparkles size={14} color="#D97706" />,
                    },
                    {
                      label: "Biten Bölüm",
                      value: `${completedChapters.length}/${totalChaptersCount}`,
                      color: "#059669",
                      bg: "#D1FAE5",
                      icon: <BookOpen size={14} color="#059669" />,
                    },
                    {
                      label: "Adalet & Cesaret",
                      value: `+${
                        virtuePoints.ADALET + virtuePoints.CESARET_MERHAMET
                      }`,
                      color: "#E11D48",
                      bg: "#FFE4E6",
                      icon: <ShieldCheck size={14} color="#E11D48" />,
                    },
                    {
                      label: "Bilim & İyilik",
                      value: `+${
                        virtuePoints.BILGELIK + virtuePoints.IHSAN_MEDENIYET
                      }`,
                      color: "#2563EB",
                      bg: "#DBEAFE",
                      icon: <Award size={14} color="#2563EB" />,
                    },
                  ].map((stat) => (
                    <View
                      key={stat.label}
                      style={{
                        width: "48.2%",
                        backgroundColor: "#FFFDF7",
                        borderRadius: 16,
                        padding: 11,
                        borderWidth: 1.5,
                        borderColor: "#E6DEC8",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: 3,
                        }}
                      >
                        <Text
                          style={{
                            color: "#78716C",
                            fontSize: 11,
                            fontWeight: "800",
                            flexShrink: 1,
                          }}
                          numberOfLines={1}
                        >
                          {stat.label}
                        </Text>
                        <View
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: 7,
                            backgroundColor: stat.bg,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {stat.icon}
                        </View>
                      </View>
                      <Text
                        style={{
                          color: stat.color,
                          fontSize: 17,
                          fontWeight: "900",
                        }}
                      >
                        {stat.value}
                      </Text>
                    </View>
                  ))}
                </View>

                {/* 3D Crest Emblem Picker + Motto Picker */}
                <View
                  style={{
                    backgroundColor: "#FFFDF7",
                    borderRadius: 20,
                    padding: 15,
                    borderWidth: 2,
                    borderColor: "#E6DEC8",
                  }}
                >
                  <Text
                    style={{
                      color: "#1C1917",
                      fontSize: 14,
                      fontWeight: "900",
                      marginBottom: 10,
                    }}
                  >
                    Kraliyet Armanı Seç
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      rowGap: 8,
                      marginBottom: 14,
                    }}
                  >
                    {BANNER_SYMBOL_OPTIONS.map((sym) => {
                      const isSelected = bannerConfig.symbol === sym.id;
                      const thumbSource = resolveImageAsset(
                        CREST_IMAGE_BY_SYMBOL[sym.id]
                      );
                      return (
                        <BouncyPressable
                          key={sym.id}
                          onPress={() => {
                            triggerLightHaptic();
                            updateBannerConfig({ symbol: sym.id });
                          }}
                          scaleTo={0.96}
                          style={{
                            width: "31.5%",
                            backgroundColor: isSelected ? "#FEF3C7" : "#F7F3E8",
                            borderRadius: 14,
                            paddingVertical: 8,
                            paddingHorizontal: 5,
                            alignItems: "center",
                            borderWidth: 2,
                            borderColor: isSelected ? "#F59E0B" : "#E6DEC8",
                          }}
                        >
                          <View
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: 22,
                              overflow: "hidden",
                              marginBottom: 5,
                              borderWidth: 1.5,
                              borderColor: isSelected ? "#D97706" : "#D6CBB2",
                              backgroundColor: "#0F172A",
                            }}
                          >
                            {thumbSource && (
                              <Image
                                source={thumbSource}
                                style={{ width: "100%", height: "100%" }}
                                resizeMode="cover"
                              />
                            )}
                          </View>
                          <Text
                            numberOfLines={1}
                            style={{
                              color: isSelected ? "#92400E" : "#1C1917",
                              fontSize: 10.5,
                              fontWeight: "900",
                              textAlign: "center",
                            }}
                          >
                            {sym.label}
                          </Text>
                        </BouncyPressable>
                      );
                    })}
                  </View>

                  <Text
                    style={{
                      color: "#1C1917",
                      fontSize: 14,
                      fontWeight: "900",
                      marginBottom: 8,
                    }}
                  >
                    Sancak Sözü
                  </Text>
                  <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
                    {MOTTO_PRESETS.map((motto) => {
                      const isSelected = bannerConfig.motto === motto;
                      return (
                        <BouncyPressable
                          key={motto}
                          onPress={() => {
                            triggerLightHaptic();
                            updateBannerConfig({ motto });
                          }}
                          scaleTo={0.97}
                          style={{
                            borderRadius: 11,
                            paddingHorizontal: 10,
                            paddingVertical: 7,
                            backgroundColor: isSelected ? "#1E1B4B" : "#F7F3E8",
                            borderWidth: 1.5,
                            borderColor: isSelected ? "#F59E0B" : "#E6DEC8",
                          }}
                        >
                          <Text
                            style={{
                              color: isSelected ? "#FBBF24" : "#44403C",
                              fontSize: 11.5,
                              fontWeight: "800",
                            }}
                          >
                            {motto}
                          </Text>
                        </BouncyPressable>
                      );
                    })}
                  </View>
                </View>
              </View>

              {/* RIGHT COLUMN: Visual Achievement Badges & Titles Showcase */}
              <View style={{ width: isTwoColumn ? "54%" : "100%" }}>
                <View
                  style={{
                    backgroundColor: "#FFFDF7",
                    borderRadius: 22,
                    padding: isTablet ? 18 : 14,
                    borderWidth: 2,
                    borderColor: "#E6DEC8",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 12,
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          color: "#1C1917",
                          fontSize: 16.5,
                          fontWeight: "900",
                        }}
                      >
                        Başarı Rozetleri & Unvanlar
                      </Text>
                      <Text
                        style={{
                          color: "#78716C",
                          fontSize: 12,
                          fontWeight: "700",
                        }}
                      >
                        Kazanılanları kuşan, kilitlilerin bölümüne git
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        borderRadius: 11,
                        padding: 3,
                        backgroundColor: "#F7F3E8",
                        borderWidth: 1,
                        borderColor: "#E6DEC8",
                      }}
                    >
                      {[
                        {
                          id: "ALL" as const,
                          label: `Tümü (${allPossibleTitles.length})`,
                        },
                        {
                          id: "UNLOCKED" as const,
                          label: `Açılan (${unlockedTitles.length})`,
                        },
                      ].map((tab) => {
                        const active = badgeFilter === tab.id;
                        return (
                          <BouncyPressable
                            key={tab.id}
                            onPress={() => {
                              triggerLightHaptic();
                              setBadgeFilter(tab.id);
                            }}
                            scaleTo={0.97}
                            style={{
                              paddingHorizontal: 10,
                              paddingVertical: 6,
                              borderRadius: 8,
                              backgroundColor: active
                                ? "#1E1B4B"
                                : "transparent",
                            }}
                          >
                            <Text
                              style={{
                                color: active ? "#FBBF24" : "#57534E",
                                fontSize: 11.5,
                                fontWeight: "900",
                              }}
                            >
                              {tab.label}
                            </Text>
                          </BouncyPressable>
                        );
                      })}
                    </View>
                  </View>

                  {/* Responsive Badge Grid */}
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      rowGap: 9,
                    }}
                  >
                    {displayedTitles.map((item) => {
                      const isUnlocked =
                        item.id === "starter-title" ||
                        unlockedTitles.includes(item.title);
                      const isSelected = selectedTitle === item.title;
                      const badgeImg = resolveImageAsset(item.imagePath);

                      return (
                        <BouncyPressable
                          key={item.id}
                          onPress={() => {
                            triggerLightHaptic();
                            if (isUnlocked) {
                              setSelectedTitle(item.title);
                            } else if (item.chapterId) {
                              router.push(`/chapter/${item.chapterId}`);
                            }
                          }}
                          scaleTo={0.97}
                          style={{
                            width: isTablet ? "48.8%" : "100%",
                            backgroundColor: isSelected
                              ? "#FEF3C7"
                              : isUnlocked
                              ? "#ECFDF5"
                              : "#F7F3E8",
                            borderRadius: 16,
                            padding: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            borderWidth: 2,
                            borderColor: isSelected
                              ? "#F59E0B"
                              : isUnlocked
                              ? "#10B981"
                              : "#E6DEC8",
                          }}
                        >
                          <View
                            style={{
                              width: 48,
                              height: 48,
                              borderRadius: 14,
                              overflow: "hidden",
                              backgroundColor: "#1E1B4B",
                              borderWidth: 2,
                              borderColor: isSelected
                                ? "#D97706"
                                : isUnlocked
                                ? "#10B981"
                                : "#D6CBB2",
                              marginRight: 10,
                              flexShrink: 0,
                            }}
                          >
                            {badgeImg && (
                              <Image
                                source={badgeImg}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  opacity: isUnlocked ? 1 : 0.72,
                                }}
                                resizeMode="cover"
                              />
                            )}
                          </View>

                          <View style={{ flex: 1, paddingRight: 6 }}>
                            <Text
                              numberOfLines={1}
                              style={{
                                color: "#1C1917",
                                fontSize: 13.5,
                                fontWeight: "900",
                              }}
                            >
                              {item.title}
                            </Text>
                            <Text
                              numberOfLines={1}
                              style={{
                                color: "#78716C",
                                fontSize: 11,
                                fontWeight: "700",
                                marginTop: 1,
                              }}
                            >
                              {item.heroName}
                            </Text>
                            {isUnlocked ? (
                              <Text
                                style={{
                                  color: "#059669",
                                  fontSize: 10,
                                  fontWeight: "900",
                                  marginTop: 2,
                                }}
                              >
                                ✓ Kazanıldı
                              </Text>
                            ) : (
                              <Text
                                style={{
                                  color: "#B45309",
                                  fontSize: 10,
                                  fontWeight: "800",
                                  marginTop: 2,
                                }}
                              >
                                Bölümü tamamlayınca açılır
                              </Text>
                            )}
                          </View>

                          {isSelected ? (
                            <View
                              style={{
                                paddingHorizontal: 9,
                                paddingVertical: 5,
                                borderRadius: 999,
                                flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: "#D97706",
                              }}
                            >
                              <CheckCircle2 size={11} color="#FFFFFF" />
                              <Text
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 10.5,
                                  fontWeight: "900",
                                  marginLeft: 3,
                                }}
                              >
                                Aktif
                              </Text>
                            </View>
                          ) : isUnlocked ? (
                            <View
                              style={{
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                borderRadius: 999,
                                backgroundColor: "#10B981",
                              }}
                            >
                              <Text
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 10.5,
                                  fontWeight: "900",
                                }}
                              >
                                Kuşan
                              </Text>
                            </View>
                          ) : (
                            <View
                              style={{
                                paddingHorizontal: 9,
                                paddingVertical: 5,
                                borderRadius: 999,
                                flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: "#FFFDF7",
                                borderWidth: 1,
                                borderColor: "#D6CBB2",
                              }}
                            >
                              <Lock size={10} color="#78716C" />
                              <Text
                                style={{
                                  color: "#57534E",
                                  fontSize: 10.5,
                                  fontWeight: "800",
                                  marginLeft: 3,
                                  marginRight: 2,
                                }}
                              >
                                Aç
                              </Text>
                              <ArrowRight size={10} color="#78716C" />
                            </View>
                          )}
                        </BouncyPressable>
                      );
                    })}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Sıfırlama Onay Modalı */}
        <Modal
          visible={showResetConfirm}
          transparent
          animationType="fade"
          onRequestClose={() => setShowResetConfirm(false)}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(15, 23, 42, 0.65)",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: Math.max(16, insets.top + 8),
              paddingBottom: Math.max(16, insets.bottom + 8),
              paddingLeft: Math.max(16, insets.left + 8),
              paddingRight: Math.max(16, insets.right + 8),
            }}
          >
            <View
              style={{
                width: "100%",
                maxWidth: 400,
                maxHeight: "90%",
                backgroundColor: "#FFFDF7",
                borderRadius: 24,
                padding: 20,
                borderWidth: 2,
                borderColor: "#E6DEC8",
              }}
            >
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: 18,
                    fontWeight: "900",
                    marginBottom: 8,
                  }}
                >
                  İlerlemeyi Sıfırlamak İstiyor musun?
                </Text>
                <Text
                  style={{
                    color: "#57534E",
                    fontSize: 13.5,
                    fontWeight: "600",
                    lineHeight: 20,
                    marginBottom: 18,
                  }}
                >
                  Kazandığın puanlar, açılan müze eserleri ve tamamlanan bölümler
                  baştan başlayacak.
                </Text>

                <View style={{ flexDirection: "row", gap: 10 }}>
                  <BouncyPressable
                    onPress={() => setShowResetConfirm(false)}
                    scaleTo={0.97}
                    style={{
                      flex: 1,
                      paddingVertical: 11,
                      borderRadius: 13,
                      alignItems: "center",
                      backgroundColor: "#F7F3E8",
                      borderWidth: 1.5,
                      borderColor: "#E6DEC8",
                    }}
                  >
                    <Text
                      style={{
                        color: "#44403C",
                        fontSize: 13.5,
                        fontWeight: "800",
                      }}
                    >
                      Vazgeç
                    </Text>
                  </BouncyPressable>

                  <BouncyPressable
                    onPress={() => {
                      triggerLightHaptic();
                      resetProgress();
                      setShowResetConfirm(false);
                    }}
                    scaleTo={0.97}
                    style={{
                      flex: 1,
                      paddingVertical: 11,
                      borderRadius: 13,
                      alignItems: "center",
                      backgroundColor: "#E11D48",
                    }}
                  >
                    <Text
                      style={{
                        color: "#FFFFFF",
                        fontSize: 13.5,
                        fontWeight: "900",
                      }}
                    >
                      Evet, Sıfırla
                    </Text>
                  </BouncyPressable>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>

        {/* Gizlilik & Ebeveyn Güvencesi Modalı */}
        <Modal
          visible={showPrivacyModal}
          transparent
          animationType="fade"
          onRequestClose={() => setShowPrivacyModal(false)}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(15, 23, 42, 0.65)",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: Math.max(16, insets.top + 8),
              paddingBottom: Math.max(16, insets.bottom + 8),
              paddingLeft: Math.max(16, insets.left + 8),
              paddingRight: Math.max(16, insets.right + 8),
            }}
          >
            <View
              style={{
                width: "100%",
                maxWidth: 460,
                maxHeight: "90%",
                backgroundColor: "#FFFDF7",
                borderRadius: 24,
                padding: 20,
                borderWidth: 2,
                borderColor: "#E6DEC8",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                  <ShieldCheck size={20} color="#059669" />
                  <Text
                    style={{
                      color: "#1C1917",
                      fontSize: 16.5,
                      fontWeight: "900",
                      marginLeft: 8,
                    }}
                    numberOfLines={1}
                  >
                    Gizlilik ve Ebeveyn Güvencesi
                  </Text>
                </View>
                <BouncyPressable
                  onPress={() => setShowPrivacyModal(false)}
                  scaleTo={0.94}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F7F3E8",
                  }}
                >
                  <X size={16} color="#57534E" />
                </BouncyPressable>
              </View>

              <ScrollView showsVerticalScrollIndicator={false}>
                <Text
                  style={{
                    color: "#44403C",
                    fontSize: 13,
                    fontWeight: "600",
                    lineHeight: 20,
                    marginBottom: 10,
                  }}
                >
                  • <Text style={{ fontWeight: "900" }}>%100 Cihaz İçi Veri Saklama:</Text> Çırak adı, kazanılan eserler ve hikâye ilerlemeleri yalnızca cihazınızın kendi hafızasında (AsyncStorage) saklanır; hiçbir sunucuya gönderilmez.
                </Text>
                <Text
                  style={{
                    color: "#44403C",
                    fontSize: 13,
                    fontWeight: "600",
                    lineHeight: 20,
                    marginBottom: 10,
                  }}
                >
                  • <Text style={{ fontWeight: "900" }}>Kişisel Veri ve Takip Yoktur:</Text> Uygulama konum, kamera, mikrofon veya rehber izni talep etmez; üçüncü taraf reklam veya takip kodu içermez.
                </Text>
                <Text
                  style={{
                    color: "#44403C",
                    fontSize: 13,
                    fontWeight: "600",
                    lineHeight: 20,
                    marginBottom: 16,
                  }}
                >
                  • <Text style={{ fontWeight: "900" }}>Pedagojik ve Tarihi Hassasiyet:</Text> 7–12 yaş grubu için özel olarak hazırlanmış 25 öncü şahsiyet, 56 bölüm ve etkileşimli müze içeriği tamamen reklamsız ve güvenli bir öğrenme ortamı sunar.
                </Text>

                <BouncyPressable
                  onPress={() => setShowPrivacyModal(false)}
                  scaleTo={0.97}
                  style={{
                    paddingVertical: 11,
                    borderRadius: 13,
                    alignItems: "center",
                    backgroundColor: "#1E1B4B",
                  }}
                >
                  <Text
                    style={{
                      color: "#FBBF24",
                      fontSize: 13.5,
                      fontWeight: "900",
                    }}
                  >
                    Anladım, Kapat
                  </Text>
                </BouncyPressable>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
}
