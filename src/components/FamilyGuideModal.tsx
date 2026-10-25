import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  ScrollView,
  Platform,
  useWindowDimensions,
} from "react-native";
import * as Haptics from "expo-haptics";
import {
  Shield,
  X,
  CheckCircle2,
  Clock,
  MessageCircle,
  HeartHandshake,
  Award,
  Sparkles,
} from "lucide-react-native";
import { HEROES_DATA, getAllChapters } from "../data/storiesData";
import { useUserStore } from "../store/useUserStore";
import { BouncyPressable } from "./BouncyPressable";

export interface FamilyGuideModalProps {
  visible: boolean;
  onClose: () => void;
}

export const FamilyGuideModal: React.FC<FamilyGuideModalProps> = ({
  visible,
  onClose,
}) => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  const apprenticeName = useUserStore((s) => s.apprenticeName);
  const selectedTitle = useUserStore((s) => s.selectedTitle);
  const completedChapters = useUserStore((s) => s.completedChapters);
  const totalPoints = useUserStore((s) => s.totalPoints);

  const [selectedHeroId, setSelectedHeroId] = useState<string>(
    HEROES_DATA[0]?.id ?? "hz-omer"
  );
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number>(0);

  const activeHero =
    HEROES_DATA.find((h) => h.id === selectedHeroId) ?? HEROES_DATA[0];
  const activeChapter =
    activeHero?.chapters[selectedChapterIndex] ?? activeHero?.chapters[0];

  const totalChaptersCount = getAllChapters().length;

  const triggerLightHaptic = () => {
    if (Platform.OS !== "web") {
      Haptics.selectionAsync().catch(() => {});
    }
  };

  if (!activeHero || !activeChapter) return null;

  const isActiveChapterCompleted = completedChapters.includes(activeChapter.id);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(28, 25, 23, 0.45)",
          alignItems: "center",
          justifyContent: "center",
          padding: isTablet ? 28 : 16,
        }}
      >
        {/* Centered max-w-2xl (672px) Clean White Storybook Modal Card */}
        <View
          className="rounded-3xl overflow-hidden"
          style={{
            width: "100%",
            maxWidth: 672,
            maxHeight: "90%",
            backgroundColor: "#FFFFFF",
            borderWidth: 1,
            borderColor: "#E7E5E4",
            shadowColor: "#1C1917",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.08,
            shadowRadius: 24,
            elevation: 4,
          }}
        >
          {/* Top Header Bar */}
          <View
            className="px-6 py-4 flex-row items-center justify-between"
            style={{
              backgroundColor: "#FFFFFF",
              borderBottomWidth: 1,
              borderBottomColor: "#E7E5E4",
            }}
          >
            <View className="flex-row items-center flex-1 pr-3">
              <View
                className="w-10 h-10 rounded-2xl items-center justify-center mr-3"
                style={{
                  backgroundColor: "#F0FDFA",
                  borderWidth: 1,
                  borderColor: "#99F6E4",
                }}
              >
                <Shield size={20} color="#0D9488" />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: "#0D9488",
                    fontSize: 11,
                    fontWeight: "800",
                    letterSpacing: 0.8,
                    textTransform: "uppercase",
                  }}
                >
                  EBEVEYN & AİLE REHBERİ
                </Text>
                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: isTablet ? 20 : 17,
                    fontWeight: "800",
                  }}
                >
                  Akşam Yemeği Sohbet Köprüsü
                </Text>
              </View>
            </View>

            <BouncyPressable
              onPress={() => {
                triggerLightHaptic();
                onClose();
              }}
              className="rounded-xl px-3 py-2 items-center justify-center"
              style={{
                backgroundColor: "#FAF8F5",
                borderWidth: 1,
                borderColor: "#E7E5E4",
              }}
            >
              <X size={18} color="#1C1917" />
            </BouncyPressable>
          </View>

          <ScrollView
            contentContainerStyle={{
              padding: isTablet ? 24 : 18,
              paddingBottom: 28,
            }}
            showsVerticalScrollIndicator={false}
          >
            {/* Child Progress Summary Box */}
            <View
              className="rounded-2xl p-4 mb-5"
              style={{
                backgroundColor: "#FAF8F5",
                borderWidth: 1,
                borderColor: "#E7E5E4",
              }}
            >
              <View className="flex-row items-center justify-between flex-wrap gap-2 mb-3">
                <View className="flex-row items-center">
                  <HeartHandshake size={18} color="#D97706" />
                  <Text
                    style={{
                      color: "#1C1917",
                      fontSize: 15,
                      fontWeight: "800",
                      marginLeft: 8,
                    }}
                  >
                    {apprenticeName} • {selectedTitle}
                  </Text>
                </View>

                <View className="flex-row items-center gap-2">
                  <View
                    className="px-3 py-1 rounded-full flex-row items-center"
                    style={{
                      backgroundColor: "#FFFBEB",
                      borderWidth: 1,
                      borderColor: "#FDE68A",
                    }}
                  >
                    <Award size={14} color="#D97706" />
                    <Text
                      style={{
                        color: "#B45309",
                        fontSize: 12,
                        fontWeight: "800",
                        marginLeft: 5,
                      }}
                    >
                      {totalPoints} Puan
                    </Text>
                  </View>

                  <View
                    className="px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "#F0FDFA",
                      borderWidth: 1,
                      borderColor: "#99F6E4",
                    }}
                  >
                    <Text
                      style={{
                        color: "#0F766E",
                        fontSize: 12,
                        fontWeight: "800",
                      }}
                    >
                      {completedChapters.length}/{totalChaptersCount} Bölüm
                    </Text>
                  </View>
                </View>
              </View>

              <Text
                style={{
                  color: "#57534E",
                  fontSize: 13.5,
                  lineHeight: 20,
                  marginBottom: 12,
                }}
              >
                Bir kahraman ve bölüm seçerek çocuğunuzla o akşam yemek masasında
                konuşabileceğiniz{" "}
                <Text style={{ color: "#1C1917", fontWeight: "700" }}>
                  3 Karakter ve Değer Sorusunu
                </Text>{" "}
                görüntüleyin:
              </Text>

              {/* Hero Selector Pills */}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 8, paddingBottom: 4 }}
              >
                {HEROES_DATA.map((hero) => {
                  const isSelected = hero.id === selectedHeroId;
                  const heroDoneCount = hero.chapters.filter((ch) =>
                    completedChapters.includes(ch.id)
                  ).length;

                  return (
                    <BouncyPressable
                      key={hero.id}
                      onPress={() => {
                        triggerLightHaptic();
                        setSelectedHeroId(hero.id);
                        setSelectedChapterIndex(0);
                      }}
                      scaleTo={0.98}
                      className="rounded-xl px-3.5 py-2 flex-row items-center"
                      style={{
                        backgroundColor: isSelected ? "#0D9488" : "#FFFFFF",
                        borderWidth: 1,
                        borderColor: isSelected ? "#0D9488" : "#E7E5E4",
                      }}
                    >
                      <Text
                        style={{
                          color: isSelected ? "#FFFFFF" : "#1C1917",
                          fontSize: 13,
                          fontWeight: "700",
                        }}
                      >
                        {hero.name}
                      </Text>
                      <Text
                        style={{
                          color: isSelected ? "#CCFBF1" : "#78716C",
                          fontSize: 11.5,
                          fontWeight: "700",
                          marginLeft: 6,
                        }}
                      >
                        ({heroDoneCount}/{hero.chapters.length})
                      </Text>
                    </BouncyPressable>
                  );
                })}
              </ScrollView>

              {/* Chapter Selector Tabs for Active Hero */}
              {activeHero.chapters.length > 1 && (
                <View className="flex-row flex-wrap gap-2 mt-3">
                  {activeHero.chapters.map((ch, idx) => {
                    const isChSelected = idx === selectedChapterIndex;
                    const isChDone = completedChapters.includes(ch.id);

                    return (
                      <BouncyPressable
                        key={ch.id}
                        onPress={() => {
                          triggerLightHaptic();
                          setSelectedChapterIndex(idx);
                        }}
                        className="rounded-xl px-3 py-1.5 flex-row items-center"
                        style={{
                          backgroundColor: isChSelected ? "#FFFBEB" : "#FFFFFF",
                          borderWidth: 1,
                          borderColor: isChSelected ? "#F59E0B" : "#E7E5E4",
                        }}
                      >
                        {isChDone ? (
                          <CheckCircle2 size={13} color="#0D9488" />
                        ) : (
                          <Clock size={13} color="#78716C" />
                        )}
                        <Text
                          style={{
                            color: isChSelected ? "#B45309" : "#57534E",
                            fontSize: 12,
                            fontWeight: "700",
                            marginLeft: 5,
                          }}
                        >
                          Bölüm {ch.chapterNumber}
                        </Text>
                      </BouncyPressable>
                    );
                  })}
                </View>
              )}
            </View>

            {/* Selected Chapter Discussion Card */}
            <View
              className="rounded-2xl p-5"
              style={{
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#E7E5E4",
              }}
            >
              <View className="flex-row items-center justify-between flex-wrap gap-2 mb-3">
                <View style={{ flex: 1 }}>
                  <View className="flex-row items-center gap-1.5 mb-1">
                    <Sparkles size={14} color="#D97706" />
                    <Text
                      style={{
                        color: "#D97706",
                        fontSize: 11.5,
                        fontWeight: "800",
                        letterSpacing: 0.5,
                        textTransform: "uppercase",
                      }}
                    >
                      {activeHero.name} • BÖLÜM {activeChapter.chapterNumber}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#1C1917",
                      fontSize: isTablet ? 18 : 16.5,
                      fontWeight: "800",
                    }}
                  >
                    {activeChapter.title}
                  </Text>
                </View>

                <View
                  className="px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: isActiveChapterCompleted
                      ? "#F0FDFA"
                      : "#FAF8F5",
                    borderWidth: 1,
                    borderColor: isActiveChapterCompleted
                      ? "#99F6E4"
                      : "#E7E5E4",
                  }}
                >
                  <Text
                    style={{
                      color: isActiveChapterCompleted ? "#0D9488" : "#78716C",
                      fontSize: 11.5,
                      fontWeight: "700",
                    }}
                  >
                    {isActiveChapterCompleted
                      ? "Tamamlandı"
                      : "Henüz Oynanmadı"}
                  </Text>
                </View>
              </View>

              {/* Parent Summary */}
              <View
                style={{
                  borderLeftWidth: 4,
                  borderLeftColor: "#0D9488",
                  paddingLeft: 14,
                  paddingVertical: 2,
                  marginBottom: 18,
                }}
              >
                <Text
                  style={{
                    color: "#44403C",
                    fontSize: 14.5,
                    lineHeight: 22,
                    fontWeight: "500",
                  }}
                >
                  {activeChapter.subtitle}
                </Text>
              </View>

              {/* 3 Dinner-Table Character & Value Questions */}
              <View className="flex-row items-center gap-2 mb-3">
                <MessageCircle size={17} color="#D97706" />
                <Text
                  style={{
                    color: "#1C1917",
                    fontSize: 14.5,
                    fontWeight: "800",
                  }}
                >
                  Yemek Masası İçin 3 Karakter ve Değer Sorusu
                </Text>
              </View>

              <View style={{ gap: 10 }}>
                {activeChapter.familyDiscussionQuestions.map(
                  (question, idx) => (
                    <View
                      key={`${activeChapter.id}-q-${idx}`}
                      className="rounded-xl p-3.5 flex-row items-start"
                      style={{
                        backgroundColor: "#FAF8F5",
                        borderWidth: 1,
                        borderColor: "#E7E5E4",
                      }}
                    >
                      <View
                        className="w-6 h-6 rounded-full items-center justify-center mr-3 mt-0.5"
                        style={{
                          backgroundColor: "#0D9488",
                        }}
                      >
                        <Text
                          style={{
                            color: "#FFFFFF",
                            fontSize: 12,
                            fontWeight: "800",
                          }}
                        >
                          {idx + 1}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: "#1C1917",
                          fontSize: 14.5,
                          lineHeight: 22,
                          fontWeight: "600",
                          flex: 1,
                          flexShrink: 1,
                        }}
                      >
                        {question}
                      </Text>
                    </View>
                  )
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
