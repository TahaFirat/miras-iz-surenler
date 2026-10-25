import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
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
  onPress: (chapterId: string) => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  hero,
  completedChapters = [],
  isTablet,
  onPress,
}) => {
  const savedSceneProgress = useUserStore((s) => s.savedSceneProgress);

  const coverImagePath =
    hero.images?.cover ?? hero.coverImage ?? "assets/images/selahaddin_hero.png";
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

  const activeChapter =
    hero.chapters[selectedChapterIdx] ?? hero.chapters[0];

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
          icon: <Scale size={12} color="#FFFFFF" />,
        };
      case "MERTLIK_CESARET":
        return {
          bg: "#F43F5E",
          borderBottom: "#BE123C",
          icon: <Shield size={12} color="#FFFFFF" />,
        };
      case "BILIM_DENEY":
      case "BILIM_ICAT":
        return {
          bg: "#10B981",
          borderBottom: "#047857",
          icon: <Cog size={12} color="#FFFFFF" />,
        };
      case "GIZEM_IZ_SURME":
        return {
          bg: "#F59E0B",
          borderBottom: "#B45309",
          icon: <Search size={12} color="#FFFFFF" />,
        };
      case "BUYUK_SEYYAHLAR":
      case "KESIF_SEYAHAT":
        return {
          bg: "#10B981",
          borderBottom: "#047857",
          icon: <Compass size={12} color="#FFFFFF" />,
        };
      case "BILGELIK_GONUL":
        return {
          bg: "#10B981",
          borderBottom: "#047857",
          icon: <Sparkles size={12} color="#FFFFFF" />,
        };
      case "SANAT_ESTETIK":
        return {
          bg: "#F59E0B",
          borderBottom: "#B45309",
          icon: <Feather size={12} color="#FFFFFF" />,
        };
      case "MERHAMET_VAKIF":
      case "MEDENIYET_IYILIK":
      default:
        return {
          bg: "#F43F5E",
          borderBottom: "#BE123C",
          icon: <Heart size={12} color="#FFFFFF" />,
        };
    }
  };

  const categoryTheme = getCategoryTheme();

  return (
    <View
      style={{
        width: isTablet ? "48.8%" : "100%",
        marginBottom: isTablet ? 20 : 14,
      }}
    >
      <View
        style={{
          height: isTablet ? 310 : 280,
          borderRadius: isTablet ? 24 : 20,
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
          colors={["rgba(15, 23, 42, 0.55)", "transparent"]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 70,
          }}
        />

        <LinearGradient
          colors={[
            "transparent",
            "rgba(30, 27, 75, 0.72)",
            "rgba(28, 25, 23, 0.96)",
          ]}
          locations={[0, 0.4, 1]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 215,
          }}
        />

        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            padding: isTablet ? 16 : 13,
          }}
        >
          {/* Top Row: Category Pill + Chapter Progress Pill */}
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
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 999,
                backgroundColor: categoryTheme.bg,
                borderBottomWidth: 2.5,
                borderBottomColor: categoryTheme.borderBottom,
              }}
            >
              {categoryTheme.icon}
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 11,
                  fontWeight: "900",
                  marginLeft: 5,
                }}
              >
                {hero.heroClassLabel ?? hero.classBadgeLabel}
              </Text>
            </View>

            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 999,
                backgroundColor: allHeroChaptersCompleted
                  ? "#10B981"
                  : "rgba(28, 25, 23, 0.82)",
                borderWidth: 1,
                borderColor: allHeroChaptersCompleted
                  ? "#A7F3D0"
                  : "rgba(251, 191, 36, 0.55)",
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
                fontSize: isTablet ? 21 : 19,
                fontWeight: "900",
              }}
              numberOfLines={1}
            >
              {hero.name}
            </Text>

            <Text
              style={{
                color: "#FDE68A",
                fontSize: 12.5,
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 6,
                  marginBottom: 8,
                }}
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
                        paddingVertical: 4,
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
              </View>
            )}

            {/* Clean CTA Button */}
            {activeChapter && (
              <BouncyPressable
                onPress={() => onPress(activeChapter.id)}
                scaleTo={0.97}
                style={{
                  borderRadius: 14,
                  paddingHorizontal: 14,
                  paddingVertical: 10,
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
                      size={14}
                      color={isActiveInProgress ? "#1C1917" : "#FFFFFF"}
                      fill={isActiveInProgress ? "#1C1917" : "#FFFFFF"}
                    />
                  )}
                  <Text
                    style={{
                      color: isActiveInProgress ? "#1C1917" : "#FFFFFF",
                      fontSize: 13,
                      fontWeight: "900",
                      marginLeft: 6,
                      flexShrink: 1,
                    }}
                    numberOfLines={1}
                  >
                    {isActiveDone
                      ? "Tamamlandı • Tekrar Oku"
                      : isActiveInProgress
                      ? `Devam Et (Sahne ${(activeSavedSceneIdx ?? 0) + 1}/${
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
