import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Platform,
  Image,
  Modal,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
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
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

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
      imagePath: "assets/images/badge_crest_lantern.png",
    },
    ...allArtifacts.map((art) => {
      const hero = getHeroById(art.heroId);
      return {
        id: art.id,
        title: art.unlockedTitle,
        artifactName: art.name,
        heroName: hero?.name || "",
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
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 14,
            paddingBottom: 120,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              maxWidth: 1080,
              alignSelf: "center",
              width: "100%",
              paddingHorizontal: isTablet ? 24 : 14,
            }}
          >
            {/* Minimal Header */}
            <View className="flex-row items-center justify-between mb-4">
              <View>
                <Text
                  style={{
                    color: "#D97706",
                    fontSize: 10.5,
                    fontWeight: "900",
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                  }}
                >
                  OYUNCU KİMLİĞİ & ARMA
                </Text>
                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: isTablet ? 24 : 20,
                    fontWeight: "900",
                  }}
                >
                  Profil ve Başarı Rozetleri
                </Text>
              </View>

              <View className="flex-row items-center gap-2">
                <BouncyPressable
                  onPress={() => {
                    triggerLightHaptic();
                    setShowPrivacyModal(true);
                  }}
                  scaleTo={0.96}
                  className="px-3 py-2 rounded-xl flex-row items-center"
                  style={{
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
                  className="px-3 py-2 rounded-xl flex-row items-center"
                  style={{
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
                flexDirection: isTablet ? "row" : "column",
                alignItems: "flex-start",
                gap: 18,
              }}
            >
              {/* LEFT COLUMN: Royal Identity Card + Compact Stats */}
              <View style={{ width: isTablet ? "44%" : "100%" }}>
                {/* Royal Crest Identity Card */}
                <LinearGradient
                  colors={["#1E1B4B", "#0F172A"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    borderRadius: 26,
                    padding: isTablet ? 22 : 18,
                    borderWidth: 2,
                    borderColor: "#F59E0B",
                    marginBottom: 14,
                    alignItems: "center",
                  }}
                >
                  {/* 3D Crest Badge Showcase */}
                  <View
                    style={{
                      width: 118,
                      height: 118,
                      borderRadius: 59,
                      padding: 4,
                      backgroundColor: "#F59E0B",
                      shadowColor: "#F59E0B",
                      shadowOffset: { width: 0, height: 6 },
                      shadowOpacity: 0.35,
                      shadowRadius: 12,
                      elevation: 8,
                      marginBottom: 12,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        borderRadius: 55,
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

                  {/* Active Symbol Label Pill */}
                  <Text
                    style={{
                      color: "#FBBF24",
                      fontSize: 11,
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
                    className="flex-row items-center rounded-2xl px-3.5 py-1.5 mb-2.5"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      borderWidth: 1,
                      borderColor: "rgba(251,191,36,0.35)",
                      maxWidth: 260,
                    }}
                  >
                    <TextInput
                      value={nameInput}
                      onChangeText={(val) => {
                        setNameInput(val);
                        setApprenticeName(val);
                      }}
                      placeholder="Adını yaz..."
                      placeholderTextColor="#94A3B8"
                      style={{
                        color: "#FFFBEB",
                        fontSize: 18,
                        fontWeight: "900",
                        textAlign: "center",
                        paddingVertical: 2,
                        minWidth: 140,
                      }}
                    />
                    <PenLine size={14} color="#FBBF24" style={{ marginLeft: 6 }} />
                  </View>

                  {/* Equipped Title Ribbon */}
                  <View
                    className="px-4 py-1.5 rounded-full flex-row items-center mb-3"
                    style={{
                      backgroundColor: "#F59E0B",
                      borderBottomWidth: 3,
                      borderBottomColor: "#B45309",
                    }}
                  >
                    <Crown size={14} color="#1C1917" />
                    <Text
                      style={{
                        color: "#1C1917",
                        fontSize: 12.5,
                        fontWeight: "900",
                        marginLeft: 6,
                      }}
                    >
                      {selectedTitle}
                    </Text>
                  </View>

                  {/* Motto Banner Strip */}
                  <View
                    className="w-full rounded-xl px-3.5 py-2.5 items-center"
                    style={{
                      backgroundColor: "rgba(15, 23, 42, 0.75)",
                      borderWidth: 1,
                      borderColor: "rgba(251, 191, 36, 0.25)",
                    }}
                  >
                    <Text
                      style={{
                        color: "#FDE68A",
                        fontSize: 12.5,
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
                <View className="flex-row flex-wrap justify-between gap-2.5 mb-3.5">
                  {[
                    {
                      label: "Toplam Puan",
                      value: `${totalPoints}`,
                      color: "#D97706",
                      bg: "#FEF3C7",
                      icon: <Sparkles size={15} color="#D97706" />,
                    },
                    {
                      label: "Biten Bölüm",
                      value: `${completedChapters.length}/${totalChaptersCount}`,
                      color: "#059669",
                      bg: "#D1FAE5",
                      icon: <BookOpen size={15} color="#059669" />,
                    },
                    {
                      label: "Adalet & Cesaret",
                      value: `+${virtuePoints.ADALET + virtuePoints.CESARET_MERHAMET}`,
                      color: "#E11D48",
                      bg: "#FFE4E6",
                      icon: <ShieldCheck size={15} color="#E11D48" />,
                    },
                    {
                      label: "Bilim & İyilik",
                      value: `+${virtuePoints.BILGELIK + virtuePoints.IHSAN_MEDENIYET}`,
                      color: "#2563EB",
                      bg: "#DBEAFE",
                      icon: <Award size={15} color="#2563EB" />,
                    },
                  ].map((stat) => (
                    <View
                      key={stat.label}
                      style={{
                        width: "48.2%",
                        backgroundColor: "#FFFDF7",
                        borderRadius: 18,
                        padding: 12,
                        borderWidth: 1.5,
                        borderColor: "#E6DEC8",
                      }}
                    >
                      <View className="flex-row items-center justify-between mb-1">
                        <Text
                          style={{
                            color: "#78716C",
                            fontSize: 11.5,
                            fontWeight: "800",
                          }}
                        >
                          {stat.label}
                        </Text>
                        <View
                          style={{
                            width: 26,
                            height: 26,
                            borderRadius: 8,
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
                          fontSize: 18,
                          fontWeight: "900",
                        }}
                      >
                        {stat.value}
                      </Text>
                    </View>
                  ))}
                </View>

                {/* 3D Crest Emblem Picker + Motto Picker in a Single Clean Card */}
                <View
                  style={{
                    backgroundColor: "#FFFDF7",
                    borderRadius: 22,
                    padding: 16,
                    borderWidth: 2,
                    borderColor: "#E6DEC8",
                  }}
                >
                  <Text
                    style={{
                      color: "#1C1917",
                      fontSize: 14.5,
                      fontWeight: "900",
                      marginBottom: 10,
                    }}
                  >
                    Kraliyet Armanı Seç
                  </Text>

                  <View className="flex-row flex-wrap justify-between gap-y-2.5 mb-4">
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
                            borderRadius: 16,
                            paddingVertical: 8,
                            paddingHorizontal: 6,
                            alignItems: "center",
                            borderWidth: 2,
                            borderColor: isSelected ? "#F59E0B" : "#E6DEC8",
                          }}
                        >
                          <View
                            style={{
                              width: 48,
                              height: 48,
                              borderRadius: 24,
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
                              fontSize: 11,
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
                      fontSize: 14.5,
                      fontWeight: "900",
                      marginBottom: 8,
                    }}
                  >
                    Sancak Sözü
                  </Text>
                  <View className="flex-row flex-wrap gap-1.5">
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
                          className="rounded-xl px-3 py-2"
                          style={{
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
              <View style={{ width: isTablet ? "54%" : "100%" }}>
                <View
                  style={{
                    backgroundColor: "#FFFDF7",
                    borderRadius: 24,
                    padding: isTablet ? 20 : 15,
                    borderWidth: 2,
                    borderColor: "#E6DEC8",
                  }}
                >
                  {/* Header + Filter Pills */}
                  <View className="flex-row items-center justify-between flex-wrap gap-2 mb-3">
                    <View>
                      <Text
                        style={{
                          color: "#1C1917",
                          fontSize: 17,
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
                        İstediğin rozete dokunarak unvanını kuşan
                      </Text>
                    </View>

                    <View
                      className="flex-row rounded-xl p-1"
                      style={{
                        backgroundColor: "#F7F3E8",
                        borderWidth: 1,
                        borderColor: "#E6DEC8",
                      }}
                    >
                      {[
                        { id: "ALL" as const, label: `Tümü (${allPossibleTitles.length})` },
                        {
                          id: "UNLOCKED" as const,
                          label: `Kazanılan (${unlockedTitles.length})`,
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
                            className="px-3 py-1.5 rounded-lg"
                            style={{
                              backgroundColor: active ? "#1E1B4B" : "transparent",
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

                  {/* 2-Column Visual Badge Grid */}
                  <View className="flex-row flex-wrap justify-between gap-y-2.5">
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
                            setSelectedTitle(item.title);
                          }}
                          scaleTo={0.97}
                          style={{
                            width: isTablet ? "48.8%" : "100%",
                            backgroundColor: isSelected
                              ? "#FEF3C7"
                              : "#F7F3E8",
                            borderRadius: 18,
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
                          {/* 3D Badge Visual */}
                          <View
                            style={{
                              width: 52,
                              height: 52,
                              borderRadius: 15,
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
                                style={{ width: "100%", height: "100%" }}
                                resizeMode="cover"
                              />
                            )}
                          </View>

                          {/* Title & Hero Name */}
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
                            {isUnlocked && (
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
                            )}
                          </View>

                          {/* Status Pill */}
                          {isSelected ? (
                            <View
                              className="px-2.5 py-1 rounded-full flex-row items-center"
                              style={{ backgroundColor: "#D97706" }}
                            >
                              <CheckCircle2 size={12} color="#FFFFFF" />
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
                          ) : (
                            <View
                              className="px-2.5 py-1 rounded-full"
                              style={{
                                backgroundColor: "#FFFDF7",
                                borderWidth: 1,
                                borderColor: "#D6CBB2",
                              }}
                            >
                              <Text
                                style={{
                                  color: "#57534E",
                                  fontSize: 10.5,
                                  fontWeight: "800",
                                }}
                              >
                                Seç
                              </Text>
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
              padding: 20,
            }}
          >
            <View
              style={{
                width: "100%",
                maxWidth: 400,
                backgroundColor: "#FFFDF7",
                borderRadius: 26,
                padding: 22,
                borderWidth: 2,
                borderColor: "#E6DEC8",
              }}
            >
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

              <View className="flex-row gap-2.5">
                <BouncyPressable
                  onPress={() => setShowResetConfirm(false)}
                  scaleTo={0.97}
                  className="flex-1 py-3 rounded-xl items-center"
                  style={{
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
                    setNameInput("İz Süren Çırak");
                    setShowResetConfirm(false);
                  }}
                  scaleTo={0.97}
                  className="flex-1 py-3 rounded-xl items-center"
                  style={{
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
            </View>
          </View>
        </Modal>

        {/* Gizlilik & Ebeveyn Güvencesi Modalı (App Store Kids / Education Uyumluluğu) */}
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
              padding: 20,
            }}
          >
            <View
              style={{
                width: "100%",
                maxWidth: 460,
                backgroundColor: "#FFFDF7",
                borderRadius: 26,
                padding: 22,
                borderWidth: 2,
                borderColor: "#E6DEC8",
              }}
            >
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center">
                  <ShieldCheck size={20} color="#059669" />
                  <Text
                    style={{
                      color: "#1C1917",
                      fontSize: 17,
                      fontWeight: "900",
                      marginLeft: 8,
                    }}
                  >
                    Gizlilik ve Ebeveyn Güvencesi
                  </Text>
                </View>
                <BouncyPressable
                  onPress={() => setShowPrivacyModal(false)}
                  scaleTo={0.94}
                  className="w-8 h-8 rounded-full items-center justify-center"
                  style={{ backgroundColor: "#F7F3E8" }}
                >
                  <X size={16} color="#57534E" />
                </BouncyPressable>
              </View>

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
                className="py-3 rounded-xl items-center"
                style={{ backgroundColor: "#1E1B4B" }}
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
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
}
