import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  Platform,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import * as Haptics from "expo-haptics";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, {
  Defs,
  Ellipse,
  LinearGradient as SvgLinearGradient,
  Path,
  RadialGradient,
  Stop,
} from "react-native-svg";
import {
  Landmark,
  Sparkles,
  Award,
  Compass,
  Eye,
  CheckCircle2,
  X,
  Search,
  BookOpen,
} from "lucide-react-native";
import {
  ArtifactHotspot,
  HERO_CLASSES,
  HeroClassId,
  getAllArtifacts,
  getHeroById,
  RewardArtifact,
} from "../../src/data/storiesData";
import { useUserStore } from "../../src/store/useUserStore";
import { resolveImageAsset } from "../../src/utils/imageAssets";
import { BouncyPressable } from "../../src/components/BouncyPressable";

export default function MirasMuseumScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  const unlockedArtifacts = useUserStore((s) => s.unlockedArtifacts);
  const discoveredHotspots = useUserStore((s) => s.discoveredHotspots);
  const discoverHotspot = useUserStore((s) => s.discoverHotspot);

  const [selectedCategory, setSelectedCategory] = useState<
    HeroClassId | "ALL"
  >("ALL");

  const allArtifacts = getAllArtifacts();
  const totalHotspotsCount = allArtifacts.reduce(
    (sum, a) => sum + a.hotspots.length,
    0
  );

  const filteredArtifacts =
    selectedCategory === "ALL"
      ? allArtifacts
      : allArtifacts.filter((art) => {
          const hero = getHeroById(art.heroId);
          return hero?.heroClass === selectedCategory;
        });

  const [selectedArtifact, setSelectedArtifact] =
    useState<RewardArtifact | null>(null);
  const [activeHotspot, setActiveHotspot] = useState<ArtifactHotspot | null>(
    null
  );

  const floatY = useSharedValue(0);
  const pinPulse = useSharedValue(1);

  useEffect(() => {
    floatY.value = withRepeat(
      withSequence(
        withTiming(-5, {
          duration: 2200,
          easing: Easing.inOut(Easing.sin),
        }),
        withTiming(4, {
          duration: 2200,
          easing: Easing.inOut(Easing.sin),
        })
      ),
      -1,
      true
    );

    pinPulse.value = withRepeat(
      withSequence(
        withTiming(1.12, {
          duration: 950,
          easing: Easing.inOut(Easing.quad),
        }),
        withTiming(0.96, {
          duration: 950,
          easing: Easing.inOut(Easing.quad),
        })
      ),
      -1,
      true
    );
  }, []);

  const floatingArtifactStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: floatY.value }],
  }));

  const pulsingPinStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pinPulse.value }],
  }));

  const triggerLightHaptic = () => {
    if (Platform.OS !== "web") {
      Haptics.selectionAsync().catch(() => {});
    }
  };

  const handleOpenArtifactInspector = (artifact: RewardArtifact) => {
    triggerLightHaptic();
    setSelectedArtifact(artifact);
    if (artifact.hotspots.length > 0) {
      const firstHotspot = artifact.hotspots[0];
      setActiveHotspot(firstHotspot);
      discoverHotspot(firstHotspot.id);
    } else {
      setActiveHotspot(null);
    }
  };

  const handleSelectHotspot = (hotspot: ArtifactHotspot) => {
    triggerLightHaptic();
    setActiveHotspot(hotspot);
    discoverHotspot(hotspot.id);
  };

  const renderGoldenMarblePedestalSvg = () => (
    <Svg width="100%" height="56" viewBox="0 0 260 56">
      <Defs>
        <RadialGradient id="pedGlowGold" cx="50%" cy="45%" r="50%">
          <Stop offset="0%" stopColor="#F59E0B" stopOpacity="0.28" />
          <Stop offset="65%" stopColor="#10B981" stopOpacity="0.08" />
          <Stop offset="100%" stopColor="#FFFDF7" stopOpacity="0" />
        </RadialGradient>
        <SvgLinearGradient
          id="pedWarmBody"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <Stop offset="0%" stopColor="#E6DEC8" />
          <Stop offset="50%" stopColor="#FFFDF7" />
          <Stop offset="100%" stopColor="#E6DEC8" />
        </SvgLinearGradient>
      </Defs>
      <Ellipse cx="130" cy="26" rx="112" ry="22" fill="url(#pedGlowGold)" />
      <Path
        d="M 42 24 L 42 39 A 88 12 0 0 0 218 39 L 218 24 Z"
        fill="url(#pedWarmBody)"
        stroke="#D97706"
        strokeWidth="1.6"
      />
      <Ellipse
        cx="130"
        cy="24"
        rx="88"
        ry="12"
        fill="#FFFDF7"
        stroke="#F59E0B"
        strokeWidth="2"
      />
      <Ellipse
        cx="130"
        cy="24"
        rx="68"
        ry="7.5"
        fill="none"
        stroke="#10B981"
        strokeOpacity="0.6"
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />
    </Svg>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#F7F3E8" }}>
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 16,
            paddingBottom: 120,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Centered 1120px Container */}
          <View
            style={{
              maxWidth: 1120,
              alignSelf: "center",
              width: "100%",
              paddingHorizontal: isTablet ? 24 : 14,
            }}
          >
            {/* Museum Top Header */}
            <View className="flex-row items-center justify-between flex-wrap gap-3 mb-4">
              <View>
                <Text
                  style={{
                    color: "#D97706",
                    fontSize: 11,
                    fontWeight: "900",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  TARİHİ ESER KOLEKSİYONU
                </Text>
                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: isTablet ? 26 : 21,
                    fontWeight: "900",
                  }}
                >
                  Miras Müzesi
                </Text>
              </View>

              {/* Compact Stats Badges */}
              <View className="flex-row items-center gap-2">
                <View
                  className="px-3.5 py-2 rounded-xl flex-row items-center"
                  style={{
                    backgroundColor: "#10B981",
                    borderBottomWidth: 3.5,
                    borderBottomColor: "#047857",
                  }}
                >
                  <Award size={15} color="#FFFFFF" />
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12.5,
                      fontWeight: "900",
                      marginLeft: 5,
                    }}
                  >
                    {unlockedArtifacts.length}/{allArtifacts.length} Eser
                  </Text>
                </View>

                <View
                  className="px-3.5 py-2 rounded-xl flex-row items-center"
                  style={{
                    backgroundColor: "#F59E0B",
                    borderBottomWidth: 3.5,
                    borderBottomColor: "#B45309",
                  }}
                >
                  <Sparkles size={15} color="#1C1917" />
                  <Text
                    style={{
                      color: "#1C1917",
                      fontSize: 12.5,
                      fontWeight: "900",
                      marginLeft: 5,
                    }}
                  >
                    {discoveredHotspots.length}/{totalHotspotsCount} Sır
                  </Text>
                </View>
              </View>
            </View>

            {/* 3D Tactile Filter Buttons by 6 Story Modes */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, paddingBottom: 18 }}
            >
              <BouncyPressable
                onPress={() => {
                  triggerLightHaptic();
                  setSelectedCategory("ALL");
                }}
                scaleTo={0.96}
                className="rounded-2xl px-4 py-2.5 flex-row items-center"
                style={{
                  backgroundColor:
                    selectedCategory === "ALL" ? "#10B981" : "#FFFDF7",
                  borderWidth: 1.5,
                  borderColor:
                    selectedCategory === "ALL" ? "#6EE7B7" : "#E6DEC8",
                  borderBottomWidth: 4,
                  borderBottomColor:
                    selectedCategory === "ALL" ? "#047857" : "#D6CBB2",
                }}
              >
                <Sparkles
                  size={15}
                  color={selectedCategory === "ALL" ? "#FFFFFF" : "#D97706"}
                />
                <Text
                  style={{
                    color: selectedCategory === "ALL" ? "#FFFFFF" : "#1C1917",
                    fontSize: 13.5,
                    fontWeight: "900",
                    marginLeft: 6,
                  }}
                >
                  Tüm Eserler ({allArtifacts.length})
                </Text>
              </BouncyPressable>

              {HERO_CLASSES.map((cls) => {
                const isSelected = selectedCategory === cls.id;
                const count = allArtifacts.filter(
                  (a) => getHeroById(a.heroId)?.heroClass === cls.id
                ).length;

                return (
                  <BouncyPressable
                    key={cls.id}
                    onPress={() => {
                      triggerLightHaptic();
                      setSelectedCategory(cls.id);
                    }}
                    scaleTo={0.96}
                    className="rounded-2xl px-4 py-2.5 flex-row items-center"
                    style={{
                      backgroundColor: isSelected ? "#F59E0B" : "#FFFDF7",
                      borderWidth: 1.5,
                      borderColor: isSelected ? "#FDE68A" : "#E6DEC8",
                      borderBottomWidth: 4,
                      borderBottomColor: isSelected ? "#B45309" : "#D6CBB2",
                    }}
                  >
                    <Text
                      style={{
                        color: "#1C1917",
                        fontSize: 13.5,
                        fontWeight: "900",
                      }}
                    >
                      {cls.shortName} ({count})
                    </Text>
                  </BouncyPressable>
                );
              })}
            </ScrollView>

            {/* 31 Storybook Pedestal Artifact Cards Grid */}
            <View
              style={{
                flexDirection: isTablet ? "row" : "column",
                flexWrap: isTablet ? "wrap" : "nowrap",
                justifyContent: "space-between",
              }}
            >
              {filteredArtifacts.map((artifact) => {
                const isUnlocked = unlockedArtifacts.includes(artifact.id);
                const hero = getHeroById(artifact.heroId);
                const imageSource = resolveImageAsset(artifact.imagePath);
                const discoveredCountForArtifact = artifact.hotspots.filter(
                  (h) => discoveredHotspots.includes(h.id)
                ).length;

                return (
                  <View
                    key={artifact.id}
                    style={{
                      width: isTablet ? "48.8%" : "100%",
                      marginBottom: 24,
                    }}
                  >
                    <BouncyPressable
                      onPress={() => handleOpenArtifactInspector(artifact)}
                      scaleTo={0.985}
                      className="rounded-3xl overflow-hidden"
                      style={{
                        backgroundColor: "#FFFDF7",
                        borderWidth: 2.5,
                        borderColor: isUnlocked ? "#10B981" : "#E6DEC8",
                        borderBottomWidth: 6,
                        borderBottomColor: isUnlocked ? "#047857" : "#D6CBB2",
                        shadowColor: "#78350F",
                        shadowOffset: { width: 0, height: 6 },
                        shadowOpacity: 0.08,
                        shadowRadius: 14,
                        elevation: 3,
                      }}
                    >
                      {/* Exhibition Pedestal Showcase Stage */}
                      <View
                        style={{
                          backgroundColor: "#FDF8EC",
                          borderBottomWidth: 2,
                          borderBottomColor: "#E6DEC8",
                          paddingTop: 14,
                          paddingBottom: 6,
                          paddingHorizontal: 16,
                          alignItems: "center",
                        }}
                      >
                        {/* Top Status Row */}
                        <View className="w-full flex-row items-center justify-between mb-2">
                          <View
                            className="px-3 py-1 rounded-full"
                            style={{
                              backgroundColor: "#FFFDF7",
                              borderWidth: 1.5,
                              borderColor: "#E6DEC8",
                            }}
                          >
                            <Text
                              style={{
                                color: "#1C1917",
                                fontSize: 11.5,
                                fontWeight: "900",
                              }}
                            >
                              {hero?.name} • +{artifact.points} Puan
                            </Text>
                          </View>

                          {isUnlocked ? (
                            <View
                              className="px-3 py-1 rounded-full flex-row items-center"
                              style={{
                                backgroundColor: "#10B981",
                                borderBottomWidth: 2.5,
                                borderBottomColor: "#047857",
                              }}
                            >
                              <CheckCircle2 size={12} color="#FFFFFF" />
                              <Text
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 11,
                                  fontWeight: "900",
                                  marginLeft: 4,
                                }}
                              >
                                Kazanıldı
                              </Text>
                            </View>
                          ) : (
                            <View
                              className="px-3 py-1 rounded-full flex-row items-center"
                              style={{
                                backgroundColor: "#F59E0B",
                                borderBottomWidth: 2.5,
                                borderBottomColor: "#B45309",
                              }}
                            >
                              <Sparkles size={11} color="#1C1917" />
                              <Text
                                style={{
                                  color: "#1C1917",
                                  fontSize: 11,
                                  fontWeight: "900",
                                  marginLeft: 4,
                                }}
                              >
                                Sergide İncele
                              </Text>
                            </View>
                          )}
                        </View>

                        {/* Floating Artifact Image */}
                        <Animated.View
                          style={[
                            {
                              width: 158,
                              height: 158,
                              borderRadius: 26,
                              overflow: "hidden",
                              borderWidth: 3,
                              borderColor: "#F59E0B",
                              backgroundColor: "#1E1B4B",
                              marginTop: 6,
                              zIndex: 2,
                            },
                            floatingArtifactStyle,
                          ]}
                        >
                          {imageSource && (
                            <Image
                              source={imageSource}
                              resizeMode="cover"
                              style={{ width: "100%", height: "100%" }}
                            />
                          )}
                        </Animated.View>

                        <View
                          style={{ width: "100%", marginTop: -12, zIndex: 1 }}
                        >
                          {renderGoldenMarblePedestalSvg()}
                        </View>
                      </View>

                      {/* Card Details Body */}
                      <View style={{ padding: 18 }}>
                        <Text
                          style={{
                            color: "#1C1917",
                            fontSize: 19,
                            fontWeight: "900",
                            marginBottom: 4,
                          }}
                        >
                          {artifact.name}
                        </Text>

                        <Text
                          style={{
                            color: "#D97706",
                            fontSize: 13,
                            fontWeight: "900",
                            marginBottom: 8,
                          }}
                        >
                          Unvan Ödülü: “{artifact.unlockedTitle}”
                        </Text>

                        <Text
                          style={{
                            color: "#57534E",
                            fontSize: 14.5,
                            lineHeight: 21,
                            fontWeight: "600",
                            marginBottom: 14,
                          }}
                          numberOfLines={2}
                        >
                          {artifact.shortDescription}
                        </Text>

                        {/* Hotspot Discovery Bar */}
                        <View
                          className="rounded-2xl p-3 mb-4 flex-row items-center justify-between"
                          style={{
                            backgroundColor: "#F7F3E8",
                            borderWidth: 1.5,
                            borderColor: "#E6DEC8",
                          }}
                        >
                          <View className="flex-row items-center flex-1 pr-2">
                            <Search size={14} color="#D97706" />
                            <Text
                              style={{
                                color: "#1C1917",
                                fontSize: 12.5,
                                fontWeight: "800",
                                marginLeft: 6,
                                flexShrink: 1,
                              }}
                            >
                              Sır Noktaları (
                              {artifact.hotspots.map((h) => h.title).join(", ")})
                            </Text>
                          </View>
                          <View
                            className="px-2.5 py-1 rounded-full"
                            style={{
                              backgroundColor:
                                discoveredCountForArtifact ===
                                artifact.hotspots.length
                                  ? "#10B981"
                                  : "#F59E0B",
                            }}
                          >
                            <Text
                              style={{
                                color:
                                  discoveredCountForArtifact ===
                                  artifact.hotspots.length
                                    ? "#FFFFFF"
                                    : "#1C1917",
                                fontSize: 11.5,
                                fontWeight: "900",
                              }}
                            >
                              {discoveredCountForArtifact}/
                              {artifact.hotspots.length} Sır
                            </Text>
                          </View>
                        </View>

                        {/* 3D Tactile Action Buttons */}
                        <View className="flex-row gap-3">
                          <View
                            className="rounded-2xl px-4 flex-1 flex-row items-center justify-center"
                            style={{
                              minHeight: 50,
                              backgroundColor: "#10B981",
                              borderWidth: 1,
                              borderColor: "#6EE7B7",
                              borderBottomWidth: 4,
                              borderBottomColor: "#047857",
                            }}
                          >
                            <Eye size={17} color="#FFFFFF" />
                            <Text
                              style={{
                                color: "#FFFFFF",
                                fontSize: 14,
                                fontWeight: "900",
                                marginLeft: 8,
                              }}
                            >
                              Sır Noktalarını Keşfet
                            </Text>
                          </View>

                          <BouncyPressable
                            onPress={(e) => {
                              e.stopPropagation();
                              triggerLightHaptic();
                              router.push(`/chapter/${artifact.chapterId}`);
                            }}
                            scaleTo={0.96}
                            className="rounded-2xl px-4 flex-row items-center justify-center"
                            style={{
                              minHeight: 50,
                              backgroundColor: "#F59E0B",
                              borderWidth: 1,
                              borderColor: "#FDE68A",
                              borderBottomWidth: 4,
                              borderBottomColor: "#B45309",
                            }}
                          >
                            <BookOpen size={16} color="#1C1917" />
                            <Text
                              style={{
                                color: "#1C1917",
                                fontSize: 13,
                                fontWeight: "900",
                                marginLeft: 6,
                              }}
                            >
                              Hikâyesi
                            </Text>
                          </BouncyPressable>
                        </View>
                      </View>
                    </BouncyPressable>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>

        {/* Centered 672px Storybook Artifact & Hotspot Inspector Modal */}
        <Modal
          visible={!!selectedArtifact}
          transparent
          animationType="fade"
          onRequestClose={() => setSelectedArtifact(null)}
        >
          {selectedArtifact && (
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(28, 25, 23, 0.55)",
                alignItems: "center",
                justifyContent: "center",
                padding: isTablet ? 28 : 16,
              }}
            >
              <View
                className="rounded-3xl overflow-hidden"
                style={{
                  width: "100%",
                  maxWidth: 672,
                  maxHeight: "90%",
                  backgroundColor: "#FFFDF7",
                  borderWidth: 2.5,
                  borderColor: "#F59E0B",
                  borderBottomWidth: 6,
                  borderBottomColor: "#B45309",
                }}
              >
                {/* Modal Top Bar */}
                <View
                  className="px-6 py-4 flex-row items-center justify-between"
                  style={{
                    backgroundColor: "#FDF8EC",
                    borderBottomWidth: 2,
                    borderBottomColor: "#E6DEC8",
                  }}
                >
                  <View style={{ flex: 1, paddingRight: 12 }}>
                    <Text
                      style={{
                        color: "#0D9488",
                        fontSize: 11.5,
                        fontWeight: "900",
                        letterSpacing: 0.8,
                        textTransform: "uppercase",
                      }}
                    >
                      ESER İNCELEME & SIR NOKTALARI
                    </Text>
                    <Text
                      style={{
                        color: "#1C1917",
                        fontSize: isTablet ? 21 : 18,
                        fontWeight: "900",
                      }}
                    >
                      {selectedArtifact.name}
                    </Text>
                  </View>

                  <BouncyPressable
                    onPress={() => setSelectedArtifact(null)}
                    scaleTo={0.95}
                    className="rounded-xl px-3 py-2 items-center justify-center"
                    style={{
                      backgroundColor: "#F43F5E",
                      borderBottomWidth: 3,
                      borderBottomColor: "#BE123C",
                    }}
                  >
                    <X size={18} color="#FFFFFF" />
                  </BouncyPressable>
                </View>

                <ScrollView
                  contentContainerStyle={{
                    padding: isTablet ? 24 : 18,
                  }}
                  showsVerticalScrollIndicator={false}
                >
                  {/* Interactive Artifact Stage */}
                  <View
                    className="rounded-2xl overflow-hidden items-center justify-center mb-4"
                    style={{
                      width: "100%",
                      height: isTablet ? 280 : 235,
                      backgroundColor: "#1E1B4B",
                      borderWidth: 2.5,
                      borderColor: "#F59E0B",
                      position: "relative",
                    }}
                  >
                    {resolveImageAsset(selectedArtifact.imagePath) && (
                      <Image
                        source={resolveImageAsset(selectedArtifact.imagePath)!}
                        resizeMode="contain"
                        style={{ width: "86%", height: "86%" }}
                      />
                    )}

                    {selectedArtifact.hotspots.map((hotspot, idx) => {
                      const isSelected = activeHotspot?.id === hotspot.id;
                      const isDiscovered = discoveredHotspots.includes(
                        hotspot.id
                      );

                      return (
                        <View
                          key={hotspot.id}
                          style={{
                            position: "absolute",
                            left: `${hotspot.xPercent}%`,
                            top: `${hotspot.yPercent}%`,
                            marginLeft: -24,
                            marginTop: -24,
                            zIndex: isSelected ? 20 : 10,
                          }}
                        >
                          <Animated.View style={pulsingPinStyle}>
                            <BouncyPressable
                              onPress={() => handleSelectHotspot(hotspot)}
                              className="rounded-full flex-row items-center justify-center px-3.5 py-2"
                              style={{
                                backgroundColor: isSelected
                                  ? "#F59E0B"
                                  : isDiscovered
                                  ? "#10B981"
                                  : "#FFFDF7",
                                borderWidth: 2,
                                borderColor: "#FFFFFF",
                                borderBottomWidth: 3.5,
                                borderBottomColor: isSelected
                                  ? "#B45309"
                                  : isDiscovered
                                  ? "#047857"
                                  : "#D6CBB2",
                              }}
                            >
                              <Sparkles
                                size={13}
                                color={
                                  isSelected
                                    ? "#1C1917"
                                    : isDiscovered
                                    ? "#FFFFFF"
                                    : "#D97706"
                                }
                              />
                              <Text
                                style={{
                                  color: isSelected
                                    ? "#1C1917"
                                    : isDiscovered
                                    ? "#FFFFFF"
                                    : "#1C1917",
                                  fontSize: 12,
                                  fontWeight: "900",
                                  marginLeft: 4,
                                }}
                              >
                                Sır {idx + 1}
                              </Text>
                            </BouncyPressable>
                          </Animated.View>
                        </View>
                      );
                    })}
                  </View>

                  {/* Clickable Hotspot Selector Pills Row */}
                  <View className="flex-row flex-wrap gap-2.5 mb-4">
                    {selectedArtifact.hotspots.map((hotspot, idx) => {
                      const isSelected = activeHotspot?.id === hotspot.id;
                      return (
                        <BouncyPressable
                          key={hotspot.id}
                          onPress={() => handleSelectHotspot(hotspot)}
                          scaleTo={0.96}
                          className="rounded-2xl px-3.5 py-2 flex-row items-center"
                          style={{
                            backgroundColor: isSelected ? "#F59E0B" : "#F7F3E8",
                            borderWidth: 1.5,
                            borderColor: isSelected ? "#FDE68A" : "#E6DEC8",
                            borderBottomWidth: 3.5,
                            borderBottomColor: isSelected
                              ? "#B45309"
                              : "#D6CBB2",
                          }}
                        >
                          <Sparkles
                            size={13}
                            color={isSelected ? "#1C1917" : "#D97706"}
                          />
                          <Text
                            style={{
                              color: "#1C1917",
                              fontSize: 13,
                              fontWeight: "900",
                              marginLeft: 6,
                            }}
                          >
                            {idx + 1}. {hotspot.title}
                          </Text>
                        </BouncyPressable>
                      );
                    })}
                  </View>

                  {/* Active Hotspot Detail Card */}
                  {activeHotspot && (
                    <View
                      className="rounded-2xl p-5 mb-4"
                      style={{
                        backgroundColor: "#FDF8EC",
                        borderWidth: 2,
                        borderColor: "#FDE68A",
                        borderLeftWidth: 5,
                        borderLeftColor: "#F59E0B",
                      }}
                    >
                      <View className="flex-row items-center gap-1.5 mb-1.5">
                        <Sparkles size={15} color="#D97706" />
                        <Text
                          style={{
                            color: "#B45309",
                            fontSize: 12,
                            fontWeight: "900",
                            letterSpacing: 0.5,
                            textTransform: "uppercase",
                          }}
                        >
                          KEŞFEDİLEN TARİHİ SIR NOKTASI
                        </Text>
                      </View>

                      <Text
                        style={{
                          color: "#1C1917",
                          fontSize: 18,
                          fontWeight: "900",
                          marginBottom: 6,
                        }}
                      >
                        {activeHotspot.title}
                      </Text>

                      <Text
                        style={{
                          color: "#44403C",
                          fontSize: 15.5,
                          lineHeight: 24,
                          fontWeight: "600",
                        }}
                      >
                        {activeHotspot.secretFact}
                      </Text>
                    </View>
                  )}

                  {/* Full Historical Context Box */}
                  <View
                    className="rounded-2xl p-4 mb-4"
                    style={{
                      backgroundColor: "#F7F3E8",
                      borderWidth: 2,
                      borderColor: "#E6DEC8",
                    }}
                  >
                    <Text
                      style={{
                        color: "#0D9488",
                        fontSize: 12,
                        fontWeight: "900",
                        letterSpacing: 0.5,
                        marginBottom: 4,
                      }}
                    >
                      TARİHİ MİRAS ÖZETİ
                    </Text>
                    <Text
                      style={{
                        color: "#44403C",
                        fontSize: 14.5,
                        lineHeight: 22,
                        fontWeight: "600",
                      }}
                    >
                      {selectedArtifact.historicalNote ||
                        selectedArtifact.shortDescription}
                    </Text>
                  </View>

                  <View className="flex-row gap-3">
                    <BouncyPressable
                      onPress={() => {
                        const targetChapterId = selectedArtifact.chapterId;
                        setSelectedArtifact(null);
                        router.push(`/chapter/${targetChapterId}`);
                      }}
                      scaleTo={0.97}
                      className="rounded-2xl py-3.5 px-4 flex-1 flex-row items-center justify-center"
                      style={{
                        backgroundColor: "#F59E0B",
                        borderWidth: 1,
                        borderColor: "#FDE68A",
                        borderBottomWidth: 4,
                        borderBottomColor: "#B45309",
                      }}
                    >
                      <Compass size={17} color="#1C1917" />
                      <Text
                        style={{
                          color: "#1C1917",
                          fontSize: 14,
                          fontWeight: "900",
                          marginLeft: 6,
                        }}
                      >
                        Bölüm Hikâyesine Git
                      </Text>
                    </BouncyPressable>

                    <BouncyPressable
                      onPress={() => setSelectedArtifact(null)}
                      scaleTo={0.97}
                      className="rounded-2xl py-3.5 px-5 flex-1 items-center justify-center"
                      style={{
                        backgroundColor: "#10B981",
                        borderWidth: 1,
                        borderColor: "#6EE7B7",
                        borderBottomWidth: 4,
                        borderBottomColor: "#047857",
                      }}
                    >
                      <Text
                        style={{
                          color: "#FFFFFF",
                          fontSize: 14.5,
                          fontWeight: "900",
                        }}
                      >
                        Müzeye Dön
                      </Text>
                    </BouncyPressable>
                  </View>
                </ScrollView>
              </View>
            </View>
          )}
        </Modal>
      </SafeAreaView>
    </View>
  );
}
