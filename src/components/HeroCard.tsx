import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Shield,
  Cog,
  Compass,
  CheckCircle2,
  Scale,
  Search,
  Heart,
  Play,
  Sparkles,
  Feather,
} from "lucide-react-native";
import { HeroData } from "../data/storiesData";
import { useUserStore } from "../store/useUserStore";
import { resolveImageAsset } from "../utils/imageAssets";
import { BouncyPressable } from "./BouncyPressable";

export interface HeroCardProps {
  hero: HeroData;
  completedChapters?: string[];
  isCompleted?: boolean;
  isTablet: boolean;
  isPhoneLandscape?: boolean;
  cardWidth?: string | number;
  onPress: (chapterId: string) => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  hero,
  completedChapters = [],
  isTablet,
  isPhoneLandscape = false,
  cardWidth,
  onPress,
}) => {
  const savedSceneProgress = useUserStore((s) => s.savedSceneProgress);

  const coverImagePath =
    hero.images?.cover ??
    hero.coverImage ??
    "assets/images/selahaddin_hero.png";
  const imageSource = resolveImageAsset(coverImagePath);

  const totalHeroChapters = hero.chapters.length;
  const completedHeroChaptersCount = hero.chapters.filter((ch) =>
    completedChapters.includes(ch.id)
  ).length;
  const allHeroChaptersCompleted =
    totalHeroChapters > 0 && completedHeroChaptersCount === totalHeroChapters;

  const inProgressIdx = hero.chapters.findIndex(
    (ch) =>
      !completedChapters.includes(ch.id) &&
      typeof savedSceneProgress[ch.id] === "number"
  );
  const firstUncompletedIdx = hero.chapters.findIndex(
    (ch) => !completedChapters.includes(ch.id)
  );
  const defaultChapterIndex =
    inProgressIdx >= 0 ? inProgressIdx : Math.max(0, firstUncompletedIdx);

  const [selectedChapterIdx, setSelectedChapterIdx] =
    useState<number>(defaultChapterIndex);

  useEffect(() => {
    setSelectedChapterIdx(defaultChapterIndex);
  }, [defaultChapterIndex, hero.id]);

  const activeChapter = hero.chapters[selectedChapterIdx] ?? hero.chapters[0];

  const isActiveDone = activeChapter
    ? completedChapters.includes(activeChapter.id)
    : false;
  const activeSavedSceneIdx = activeChapter
    ? savedSceneProgress[activeChapter.id]
    : undefined;
  const isActiveInProgress =
    !isActiveDone &&
    typeof activeSavedSceneIdx === "number" &&
    activeSavedSceneIdx >= 0;

  const getCategoryTheme = () => {
    switch (hero.heroClass) {
      case "ADALET_VICDANI":
      case "ADALET_CESARET":
        return {
          bg: "#F59E0B",
          borderBottom: "#B45309",
          icon: <Scale size={11} color="#FFFFFF" />,
        };
      case "MERTLIK_CESARET":
        return {
          bg: "#F43F5E",
          borderBottom: "#BE123C",
          icon: <Shield size={11} color="#FFFFFF" />,
        };
      case "BILIM_DENEY":
      case "BILIM_ICAT":
        return {
          bg: "#10B981",
          borderBottom: "#047857",
          icon: <Cog size={11} color="#FFFFFF" />,
        };
      case "GIZEM_IZ_SURME":
        return {
          bg: "#F59E0B",
          borderBottom: "#B45309",
          icon: <Search size={11} color="#FFFFFF" />,
        };
      case "BUYUK_SEYYAHLAR":
      case "KESIF_SEYAHAT":
        return {
          bg: "#10B981",
          borderBottom: "#047857",
          icon: <Compass size={11} color="#FFFFFF" />,
        };
      case "BILGELIK_GONUL":
        return {
          bg: "#10B981",
          borderBottom: "#047857",
          icon: <Sparkles size={11} color="#FFFFFF" />,
        };
      case "SANAT_ESTETIK":
        return {
          bg: "#F59E0B",
          borderBottom: "#B45309",
          icon: <Feather size={11} color="#FFFFFF" />,
        };
      case "MERHAMET_VAKIF":
      case "MEDENIYET_IYILIK":
      default:
        return {
          bg: "#F43F5E",
          borderBottom: "#BE123C",
          icon: <Heart size={11} color="#FFFFFF" />,
        };
    }
  };

  const categoryTheme = getCategoryTheme();
  const minCardHeight = isPhoneLandscape ? 236 : isTablet ? 298 : 264;

  return (
    <View
      style={{
        width: (cardWidth ?? (isTablet || isPhoneLandscape ? "48.8%" : "100%")) as any,
        marginBottom: isTablet ? 16 : isPhoneLandscape ? 12 : 14,
      }}
    >
      <View
        style={{
          minHeight: minCardHeight,
          borderRadius: isTablet ? 22 : 18,
          overflow: "hidden",
          backgroundColor: "#1E1B4B",
          borderWidth: 2,
          borderColor: allHeroChaptersCompleted ? "#10B981" : "#F59E0B",
          position: "relative",
        }}
      >
        {imageSource && (
          <Image
            source={imageSource}
            resizeMode="cover"
            style={StyleSheet.absoluteFillObject}
          />
        )}

        <LinearGradient
          colors={["rgba(15, 23, 42, 0.62)", "transparent"]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 68,
          }}
        />

        <LinearGradient
          colors={[
            "transparent",
            "rgba(20, 18, 52, 0.72)",
            "rgba(24, 21, 19, 0.97)",
          ]}
          locations={[0, 0.36, 1]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "78%",
          }}
        />

        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            padding: isPhoneLandscape ? 12 : isTablet ? 15 : 13,
            gap: isPhoneLandscape ? 26 : 40,
          }}
        >
          {/* Top Row: Category Pill + Chapter Progress Pill */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 6,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 9,
                paddingVertical: 4,
                borderRadius: 999,
                backgroundColor: categoryTheme.bg,
                borderBottomWidth: 2,
                borderBottomColor: categoryTheme.borderBottom,
                flexShrink: 1,
              }}
            >
              {categoryTheme.icon}
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 10.5,
                  fontWeight: "900",
                  marginLeft: 4,
                  flexShrink: 1,
                }}
                numberOfLines={1}
              >
                {hero.heroClassLabel ?? hero.classBadgeLabel}
              </Text>
            </View>

            <View
              style={{
                paddingHorizontal: 9,
                paddingVertical: 4,
                borderRadius: 999,
                backgroundColor: allHeroChaptersCompleted
                  ? "#10B981"
                  : "rgba(28, 25, 23, 0.85)",
                borderWidth: 1,
                borderColor: allHeroChaptersCompleted
                  ? "#A7F3D0"
                  : "rgba(251, 191, 36, 0.55)",
                flexShrink: 0,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 10.5,
                  fontWeight: "900",
                }}
              >
                {completedHeroChaptersCount}/{totalHeroChapters} Bölüm
              </Text>
            </View>
          </View>

          {/* Bottom Half: Hero Name, Chapter Title, Chapter Tabs & CTA Button */}
          <View>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: isPhoneLandscape ? 17 : isTablet ? 20 : 18.5,
                fontWeight: "900",
              }}
              numberOfLines={1}
            >
              {hero.name}
            </Text>

            <Text
              style={{
                color: "#FDE68A",
                fontSize: isPhoneLandscape ? 11.5 : 12.5,
                fontWeight: "700",
                marginTop: 2,
                marginBottom: 8,
              }}
              numberOfLines={1}
            >
              {activeChapter
                ? `Bölüm ${activeChapter.chapterNumber}: ${activeChapter.title}`
                : hero.title}
            </Text>

            {/* Multi-Chapter Quick Selector Pills */}
            {hero.chapters.length > 1 && (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: 8 }}
                contentContainerStyle={{ gap: 6, alignItems: "center" }}
              >
                {hero.chapters.map((ch, idx) => {
                  const isSelected = idx === selectedChapterIdx;
                  const isDone = completedChapters.includes(ch.id);

                  return (
                    <BouncyPressable
                      key={ch.id}
                      onPress={() => setSelectedChapterIdx(idx)}
                      scaleTo={0.95}
                      style={{
                        paddingHorizontal: 9,
                        paddingVertical: 5,
                        borderRadius: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: isSelected
                          ? "#F59E0B"
                          : "rgba(255, 255, 255, 0.16)",
                        borderWidth: 1,
                        borderColor: isSelected
                          ? "#FEF3C7"
                          : "rgba(255, 255, 255, 0.25)",
                      }}
                    >
                      {isDone && (
                        <CheckCircle2
                          size={11}
                          color={isSelected ? "#1C1917" : "#34D399"}
                          style={{ marginRight: 4 }}
                        />
                      )}
                      <Text
                        style={{
                          color: isSelected ? "#1C1917" : "#FFFFFF",
                          fontSize: 11,
                          fontWeight: "900",
                        }}
                      >
                        {ch.chapterNumber}. Bölüm
                      </Text>
                    </BouncyPressable>
                  );
                })}
              </ScrollView>
            )}

            {/* Clean CTA Button */}
            {activeChapter && (
              <BouncyPressable
                onPress={() => onPress(activeChapter.id)}
                scaleTo={0.97}
                style={{
                  borderRadius: 13,
                  paddingHorizontal: 13,
                  paddingVertical: isPhoneLandscape ? 8 : 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: isActiveInProgress ? "#F59E0B" : "#10B981",
                  borderWidth: 1,
                  borderColor: isActiveInProgress ? "#FDE68A" : "#6EE7B7",
                  borderBottomWidth: 3.5,
                  borderBottomColor: isActiveInProgress ? "#B45309" : "#047857",
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
                  {isActiveDone ? (
                    <CheckCircle2 size={15} color="#FFFFFF" />
                  ) : (
                    <Play
                      size={13}
                      color={isActiveInProgress ? "#1C1917" : "#FFFFFF"}
                      fill={isActiveInProgress ? "#1C1917" : "#FFFFFF"}
                    />
                  )}
                  <Text
                    style={{
                      color: isActiveInProgress ? "#1C1917" : "#FFFFFF",
                      fontSize: isPhoneLandscape ? 12 : 13,
                      fontWeight: "900",
                      marginLeft: 6,
                      flexShrink: 1,
                    }}
                    numberOfLines={1}
                  >
                    {isActiveDone
                      ? "Tamamlandı • Tekrar Oku"
                      : isActiveInProgress
                      ? `Devam Et (${(activeSavedSceneIdx ?? 0) + 1}/${
                          activeChapter.scenes.length
                        })`
                      : "Hikâyeye Başla"}
                  </Text>
                </View>

                <Text
                  style={{
                    color: isActiveInProgress ? "#1C1917" : "#ECFDF5",
                    fontSize: 11,
                    fontWeight: "800",
                    flexShrink: 0,
                  }}
                >
                  {activeChapter.scenes.length} Sahne
                </Text>
              </BouncyPressable>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
