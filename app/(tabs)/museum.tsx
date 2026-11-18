import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Modal, Platform } from "react-native";
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
import { useResponsiveLayout } from "../../src/utils/useResponsiveLayout";
import { BouncyPressable } from "../../src/components/BouncyPressable";

export default function MirasMuseumScreen() {
  const router = useRouter();
  const {
    width,
    height: windowHeight,
    isLandscape,
    isTablet,
    isPhoneLandscape,
    isTabletLandscape,
    isSmallPhone,
    insets,
    horizontalPadding,
  } = useResponsiveLayout();

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
        withTiming(1.1, {
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

  const cardWidth =
    isTabletLandscape && width >= 1024
      ? "32.2%"
      : isTablet || isPhoneLandscape
      ? "48.8%"
      : "100%";

  const pedestalImageSize = isPhoneLandscape
    ? 92
    : isTablet
    ? 150
    : isSmallPhone
    ? 104
    : 114;

  const landscapeModalBodyHeight = Math.max(
    148,
    Math.min(isTablet ? 400 : 210, windowHeight - (insets.top + insets.bottom + 132))
  );
  const landscapeStageHeight = Math.max(130, landscapeModalBodyHeight - 24);

  const renderGoldenMarblePedestalSvg = () => (
    <Svg width="100%" height={isTablet ? 44 : 36} viewBox="0 0 260 56">
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

  // Shared Inspector Detail Content (reused for both Portrait & Landscape modal splits)
  const renderInspectorDetails = (artifact: RewardArtifact) => (
    <>
      {/* Clickable Hotspot Selector Pills Row */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 12,
        }}
      >
        {artifact.hotspots.map((hotspot, idx) => {
          const isSelected = activeHotspot?.id === hotspot.id;
          return (
            <BouncyPressable
              key={hotspot.id}
              onPress={() => handleSelectHotspot(hotspot)}
              scaleTo={0.96}
              style={{
                borderRadius: 13,
                paddingHorizontal: 11,
                paddingVertical: 7,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: isSelected ? "#F59E0B" : "#F7F3E8",
                borderWidth: 1.5,
                borderColor: isSelected ? "#FDE68A" : "#E6DEC8",
                borderBottomWidth: 3,
                borderBottomColor: isSelected ? "#B45309" : "#D6CBB2",
              }}
            >
              <Sparkles
                size={12}
                color={isSelected ? "#1C1917" : "#D97706"}
              />
              <Text
                style={{
                  color: "#1C1917",
                  fontSize: 12.5,
                  fontWeight: "900",
                  marginLeft: 5,
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
          style={{
            borderRadius: 18,
            padding: 14,
            marginBottom: 12,
            backgroundColor: "#FDF8EC",
            borderWidth: 2,
            borderColor: "#FDE68A",
            borderLeftWidth: 5,
            borderLeftColor: "#F59E0B",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginBottom: 4,
            }}
          >
            <Sparkles size={14} color="#D97706" />
            <Text
              style={{
                color: "#B45309",
                fontSize: 11,
                fontWeight: "900",
                letterSpacing: 0.5,
                textTransform: "uppercase",
              }}
            >
              KEŞFEDİLEN SIR NOKTASI
            </Text>
          </View>

          <Text
            style={{
              color: "#1C1917",
              fontSize: 16.5,
              fontWeight: "900",
              marginBottom: 4,
            }}
          >
            {activeHotspot.title}
          </Text>

          <Text
            style={{
              color: "#44403C",
              fontSize: 14,
              lineHeight: 21,
              fontWeight: "600",
            }}
          >
            {activeHotspot.secretFact}
          </Text>
        </View>
      )}

      {/* Full Historical Context Box */}
      <View
        style={{
          borderRadius: 16,
          padding: 13,
          marginBottom: 14,
          backgroundColor: "#F7F3E8",
          borderWidth: 1.5,
          borderColor: "#E6DEC8",
        }}
      >
        <Text
          style={{
            color: "#0D9488",
            fontSize: 11.5,
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
            fontSize: 13.5,
            lineHeight: 20,
            fontWeight: "600",
          }}
        >
          {artifact.historicalNote || artifact.shortDescription}
        </Text>
      </View>
    </>
  );

  // Pinned Modal Action Footer so "Bölüme Git" & "Müzeye Dön" are ALWAYS visible!
  const renderInspectorFooter = (artifact: RewardArtifact) => (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: isTablet ? 20 : 14,
        paddingVertical: isPhoneLandscape ? 9 : 12,
        backgroundColor: "#FDF8EC",
        borderTopWidth: 1.5,
        borderTopColor: "#E6DEC8",
      }}
    >
      <BouncyPressable
        onPress={() => {
          const targetChapterId = artifact.chapterId;
          setSelectedArtifact(null);
          router.push(`/chapter/${targetChapterId}`);
        }}
        scaleTo={0.97}
        style={{
          flex: 1,
          borderRadius: 13,
          paddingVertical: isPhoneLandscape ? 9 : 11,
          paddingHorizontal: 12,
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
        <Compass size={16} color="#1C1917" />
        <Text
          style={{
            color: "#1C1917",
            fontSize: 13,
            fontWeight: "900",
            marginLeft: 5,
          }}
          numberOfLines={1}
        >
          Bölüme Git
        </Text>
      </BouncyPressable>

      <BouncyPressable
        onPress={() => setSelectedArtifact(null)}
        scaleTo={0.97}
        style={{
          flex: 1,
          borderRadius: 13,
          paddingVertical: isPhoneLandscape ? 9 : 11,
          paddingHorizontal: 14,
          alignItems: "center",
          justifyContent: "center",
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
            fontSize: 13.5,
            fontWeight: "900",
          }}
        >
          Müzeye Dön
        </Text>
      </BouncyPressable>
    </View>
  );

  // Interactive Artifact Image + Clamped Circular Hotspot Pins inside exact square image bounds!
  const renderInspectorStage = (artifact: RewardArtifact, stageHeight: number) => (
    <View
      style={{
        width: "100%",
        height: stageHeight,
        borderRadius: 18,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1E1B4B",
        borderWidth: 2.5,
        borderColor: "#F59E0B",
        padding: 8,
      }}
    >
      <View
        style={{
          height: "100%",
          aspectRatio: 1,
          maxWidth: "100%",
          borderRadius: 14,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {resolveImageAsset(artifact.imagePath) && (
          <Image
            source={resolveImageAsset(artifact.imagePath)!}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        )}

        {artifact.hotspots.map((hotspot, idx) => {
          const isSelected = activeHotspot?.id === hotspot.id;
          const isDiscovered = discoveredHotspots.includes(hotspot.id);
          const clampedX = Math.max(12, Math.min(88, hotspot.xPercent));
          const clampedY = Math.max(14, Math.min(86, hotspot.yPercent));

          return (
            <View
              key={hotspot.id}
              style={{
                position: "absolute",
                left: `${clampedX}%`,
                top: `${clampedY}%`,
                marginLeft: -17,
                marginTop: -17,
                zIndex: isSelected ? 20 : 10,
              }}
            >
              <Animated.View style={pulsingPinStyle}>
                <BouncyPressable
                  onPress={() => handleSelectHotspot(hotspot)}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 17,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: isSelected
                      ? "#F59E0B"
                      : isDiscovered
                      ? "#10B981"
                      : "#FFFDF7",
                    borderWidth: 2.5,
                    borderColor: "#FFFFFF",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.35,
                    shadowRadius: 4,
                    elevation: 5,
                  }}
                >
                  <Text
                    style={{
                      color: isSelected
                        ? "#1C1917"
                        : isDiscovered
                        ? "#FFFFFF"
                        : "#1C1917",
                      fontSize: 13,
                      fontWeight: "900",
                    }}
                  >
                    {idx + 1}
                  </Text>
                </BouncyPressable>
              </Animated.View>
            </View>
          );
        })}
      </View>
    </View>
  );

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
              maxWidth: 1140,
              alignSelf: "center",
              width: "100%",
              paddingHorizontal: horizontalPadding,
            }}
          >
            {/* Museum Top Header */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 10,
                marginBottom: 12,
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
                  TARİHİ ESER KOLEKSİYONU
                </Text>
                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: isPhoneLandscape
                      ? 20
                      : isTablet
                      ? 26
                      : 22,
                    fontWeight: "900",
                  }}
                >
                  Miras Müzesi
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <View
                  style={{
                    paddingHorizontal: 11,
                    paddingVertical: 7,
                    borderRadius: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#10B981",
                    borderBottomWidth: 3,
                    borderBottomColor: "#047857",
                  }}
                >
                  <Award size={14} color="#FFFFFF" />
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                      fontWeight: "900",
                      marginLeft: 5,
                    }}
                  >
                    {unlockedArtifacts.length}/{allArtifacts.length} Eser
                  </Text>
                </View>

                <View
                  style={{
                    paddingHorizontal: 11,
                    paddingVertical: 7,
                    borderRadius: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#F59E0B",
                    borderBottomWidth: 3,
                    borderBottomColor: "#B45309",
                  }}
                >
                  <Sparkles size={14} color="#1C1917" />
                  <Text
                    style={{
                      color: "#1C1917",
                      fontSize: 12,
                      fontWeight: "900",
                      marginLeft: 5,
                    }}
                  >
                    {discoveredHotspots.length}/{totalHotspotsCount} Sır
                  </Text>
                </View>
              </View>
            </View>

            {/* Tactile Category Filter Chips */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ flexGrow: 0, flexShrink: 0, marginBottom: isPhoneLandscape ? 10 : 12 }}
              contentContainerStyle={{ gap: 8, alignItems: "center" }}
            >
              <BouncyPressable
                onPress={() => {
                  triggerLightHaptic();
                  setSelectedCategory("ALL");
                }}
                scaleTo={0.96}
                style={{
                  borderRadius: 13,
                  paddingHorizontal: 12,
                  paddingVertical: 7,
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor:
                    selectedCategory === "ALL" ? "#10B981" : "#FFFDF7",
                  borderWidth: 1.5,
                  borderColor:
                    selectedCategory === "ALL" ? "#6EE7B7" : "#E6DEC8",
                  borderBottomWidth: 3,
                  borderBottomColor:
                    selectedCategory === "ALL" ? "#047857" : "#D6CBB2",
                }}
              >
                <Sparkles
                  size={14}
                  color={selectedCategory === "ALL" ? "#FFFFFF" : "#D97706"}
                />
                <Text
                  style={{
                    color: selectedCategory === "ALL" ? "#FFFFFF" : "#1C1917",
                    fontSize: 12.5,
                    fontWeight: "900",
                    marginLeft: 5,
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
                    style={{
                      borderRadius: 13,
                      paddingHorizontal: 12,
                      paddingVertical: 7,
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: isSelected ? "#F59E0B" : "#FFFDF7",
                      borderWidth: 1.5,
                      borderColor: isSelected ? "#FDE68A" : "#E6DEC8",
                      borderBottomWidth: 3,
                      borderBottomColor: isSelected ? "#B45309" : "#D6CBB2",
                    }}
                  >
                    <Text
                      style={{
                        color: "#1C1917",
                        fontSize: 12.5,
                        fontWeight: "900",
                      }}
                    >
                      {cls.shortName} ({count})
                    </Text>
                  </BouncyPressable>
                );
              })}
            </ScrollView>

            {/* Responsive Artifact Grid */}
            <View
              style={{
                flexDirection: isTablet || isPhoneLandscape ? "row" : "column",
                flexWrap: isTablet || isPhoneLandscape ? "wrap" : "nowrap",
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
                      width: cardWidth as any,
                      marginBottom: isPhoneLandscape ? 14 : 18,
                    }}
                  >
                    <BouncyPressable
                      onPress={() => handleOpenArtifactInspector(artifact)}
                      scaleTo={0.985}
                      style={{
                        borderRadius: 22,
                        overflow: "hidden",
                        backgroundColor: "#FFFDF7",
                        borderWidth: 2,
                        borderColor: isUnlocked ? "#10B981" : "#E6DEC8",
                        borderBottomWidth: 5,
                        borderBottomColor: isUnlocked ? "#047857" : "#D6CBB2",
                        shadowColor: "#78350F",
                        shadowOffset: { width: 0, height: 5 },
                        shadowOpacity: 0.08,
                        shadowRadius: 12,
                        elevation: 3,
                      }}
                    >
                      {/* Exhibition Pedestal Showcase Stage */}
                      <View
                        style={{
                          backgroundColor: "#FDF8EC",
                          borderBottomWidth: 1.5,
                          borderBottomColor: "#E6DEC8",
                          paddingTop: 12,
                          paddingBottom: 4,
                          paddingHorizontal: 14,
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 6,
                            marginBottom: 6,
                          }}
                        >
                          <View
                            style={{
                              paddingHorizontal: 10,
                              paddingVertical: 4,
                              borderRadius: 999,
                              backgroundColor: "#FFFDF7",
                              borderWidth: 1.5,
                              borderColor: "#E6DEC8",
                              flexShrink: 1,
                            }}
                          >
                            <Text
                              style={{
                                color: "#1C1917",
                                fontSize: 11,
                                fontWeight: "900",
                              }}
                              numberOfLines={1}
                            >
                              {hero?.name} • +{artifact.points} Puan
                            </Text>
                          </View>

                          {isUnlocked ? (
                            <View
                              style={{
                                paddingHorizontal: 10,
                                paddingVertical: 4,
                                borderRadius: 999,
                                flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: "#10B981",
                                borderBottomWidth: 2,
                                borderBottomColor: "#047857",
                                flexShrink: 0,
                              }}
                            >
                              <CheckCircle2 size={11} color="#FFFFFF" />
                              <Text
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 10.5,
                                  fontWeight: "900",
                                  marginLeft: 4,
                                }}
                              >
                                Kazanıldı
                              </Text>
                            </View>
                          ) : (
                            <View
                              style={{
                                paddingHorizontal: 10,
                                paddingVertical: 4,
                                borderRadius: 999,
                                flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: "#F59E0B",
                                borderBottomWidth: 2,
                                borderBottomColor: "#B45309",
                                flexShrink: 0,
                              }}
                            >
                              <Sparkles size={11} color="#1C1917" />
                              <Text
                                style={{
                                  color: "#1C1917",
                                  fontSize: 10.5,
                                  fontWeight: "900",
                                  marginLeft: 4,
                                }}
                              >
                                İncele
                              </Text>
                            </View>
                          )}
                        </View>

                        <Animated.View
                          style={[
                            {
                              width: pedestalImageSize,
                              height: pedestalImageSize,
                              borderRadius: 22,
                              overflow: "hidden",
                              borderWidth: 2.5,
                              borderColor: "#F59E0B",
                              backgroundColor: "#1E1B4B",
                              marginTop: 4,
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

                        <View style={{ width: "100%", marginTop: -10, zIndex: 1 }}>
                          {renderGoldenMarblePedestalSvg()}
                        </View>
                      </View>

                      {/* Card Details Body */}
                      <View style={{ padding: isPhoneLandscape ? 14 : 16 }}>
                        <Text
                          style={{
                            color: "#1C1917",
                            fontSize: isPhoneLandscape ? 16.5 : 18,
                            fontWeight: "900",
                            marginBottom: 3,
                          }}
                          numberOfLines={1}
                        >
                          {artifact.name}
                        </Text>

                        <Text
                          style={{
                            color: "#D97706",
                            fontSize: 12.5,
                            fontWeight: "900",
                            marginBottom: 6,
                          }}
                          numberOfLines={1}
                        >
                          Unvan: “{artifact.unlockedTitle}”
                        </Text>

                        <Text
                          style={{
                            color: "#57534E",
                            fontSize: 13.5,
                            lineHeight: 19.5,
                            fontWeight: "600",
                            marginBottom: 12,
                          }}
                          numberOfLines={2}
                        >
                          {artifact.shortDescription}
                        </Text>

                        {/* Hotspot Discovery Bar */}
                        <View
                          style={{
                            borderRadius: 13,
                            paddingHorizontal: 11,
                            paddingVertical: 8,
                            marginBottom: 12,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: "#F7F3E8",
                            borderWidth: 1.5,
                            borderColor: "#E6DEC8",
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
                            <Search size={13} color="#D97706" />
                            <Text
                              style={{
                                color: "#1C1917",
                                fontSize: 12,
                                fontWeight: "800",
                                marginLeft: 5,
                                flexShrink: 1,
                              }}
                              numberOfLines={1}
                            >
                              {artifact.hotspots.map((h) => h.title).join(", ")}
                            </Text>
                          </View>
                          <View
                            style={{
                              paddingHorizontal: 8,
                              paddingVertical: 3,
                              borderRadius: 999,
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
                                fontSize: 11,
                                fontWeight: "900",
                              }}
                            >
                              {discoveredCountForArtifact}/
                              {artifact.hotspots.length} Sır
                            </Text>
                          </View>
                        </View>

                        {/* Clean 1-Line Action Buttons */}
                        <View style={{ flexDirection: "row", gap: 8 }}>
                          <View
                            style={{
                              flex: 1,
                              borderRadius: 13,
                              paddingHorizontal: 12,
                              minHeight: 42,
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
                            <Eye size={15} color="#FFFFFF" />
                            <Text
                              style={{
                                color: "#FFFFFF",
                                fontSize: 13,
                                fontWeight: "900",
                                marginLeft: 6,
                              }}
                              numberOfLines={1}
                            >
                              Sırları Keşfet
                            </Text>
                          </View>

                          <BouncyPressable
                            onPress={(e) => {
                              e.stopPropagation();
                              triggerLightHaptic();
                              router.push(`/chapter/${artifact.chapterId}`);
                            }}
                            scaleTo={0.96}
                            style={{
                              borderRadius: 13,
                              paddingHorizontal: 13,
                              minHeight: 42,
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
                            <BookOpen size={15} color="#1C1917" />
                            <Text
                              style={{
                                color: "#1C1917",
                                fontSize: 12.5,
                                fontWeight: "900",
                                marginLeft: 5,
                              }}
                              numberOfLines={1}
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

        {/* Responsive Artifact & Hotspot Inspector Modal (2-Column in Landscape!) */}
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
                backgroundColor: "rgba(28, 25, 23, 0.58)",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: Math.max(isPhoneLandscape ? 6 : 14, insets.top + 4),
                paddingBottom: Math.max(
                  isPhoneLandscape ? 6 : 14,
                  insets.bottom + 4
                ),
                paddingLeft: Math.max(12, insets.left + 8),
                paddingRight: Math.max(12, insets.right + 8),
              }}
            >
              <View
                style={{
                  width: "100%",
                  maxWidth: isLandscape ? 880 : 620,
                  maxHeight: isPhoneLandscape ? "97%" : "94%",
                  borderRadius: isPhoneLandscape ? 18 : 24,
                  overflow: "hidden",
                  backgroundColor: "#FFFDF7",
                  borderWidth: 2.5,
                  borderColor: "#F59E0B",
                  borderBottomWidth: isPhoneLandscape ? 4 : 5,
                  borderBottomColor: "#B45309",
                }}
              >
                {/* Modal Top Bar */}
                <View
                  style={{
                    paddingHorizontal: isTablet ? 20 : 14,
                    paddingVertical: isPhoneLandscape ? 7 : 13,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#FDF8EC",
                    borderBottomWidth: 1.5,
                    borderBottomColor: "#E6DEC8",
                  }}
                >
                  <View style={{ flex: 1, paddingRight: 12 }}>
                    <Text
                      style={{
                        color: "#0D9488",
                        fontSize: isPhoneLandscape ? 9.5 : 10.5,
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
                        fontSize: isTablet ? 20 : isPhoneLandscape ? 15 : 17,
                        fontWeight: "900",
                      }}
                      numberOfLines={1}
                    >
                      {selectedArtifact.name}
                    </Text>
                  </View>

                  <BouncyPressable
                    onPress={() => setSelectedArtifact(null)}
                    scaleTo={0.95}
                    style={{
                      borderRadius: 10,
                      paddingHorizontal: isPhoneLandscape ? 8 : 10,
                      paddingVertical: isPhoneLandscape ? 5 : 7,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#F43F5E",
                      borderBottomWidth: 3,
                      borderBottomColor: "#BE123C",
                    }}
                  >
                    <X size={isPhoneLandscape ? 15 : 17} color="#FFFFFF" />
                  </BouncyPressable>
                </View>

                {isLandscape ? (
                  /* LANDSCAPE MODAL: 2-Column Split (Stage Left | Scrollable Facts Right) */
                  <View
                    style={{
                      flexDirection: "row",
                      padding: isTablet ? 20 : 11,
                      gap: isPhoneLandscape ? 12 : 16,
                      height: landscapeModalBodyHeight,
                    }}
                  >
                    <View style={{ width: "42%", justifyContent: "center" }}>
                      {renderInspectorStage(
                        selectedArtifact,
                        landscapeStageHeight
                      )}
                    </View>
                    <ScrollView
                      style={{ flex: 1 }}
                      contentContainerStyle={{ paddingBottom: 6 }}
                      showsVerticalScrollIndicator={false}
                    >
                      {renderInspectorDetails(selectedArtifact)}
                    </ScrollView>
                  </View>
                ) : (
                  /* PORTRAIT MODAL: Vertical Stack */
                  <ScrollView
                    style={{ flexShrink: 1 }}
                    contentContainerStyle={{
                      padding: isTablet ? 22 : 15,
                    }}
                    showsVerticalScrollIndicator={false}
                  >
                    <View style={{ marginBottom: 12 }}>
                      {renderInspectorStage(
                        selectedArtifact,
                        isTablet ? 260 : isSmallPhone ? 190 : 210
                      )}
                    </View>
                    {renderInspectorDetails(selectedArtifact)}
                  </ScrollView>
                )}

                {renderInspectorFooter(selectedArtifact)}
              </View>
            </View>
          )}
        </Modal>
      </SafeAreaView>
    </View>
  );
}
