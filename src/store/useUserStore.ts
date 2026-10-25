import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { getChapterById, VirtuePointType } from "../data/storiesData";

export type BannerSymbolId =
  | "lantern"
  | "crescent_star"
  | "astrolabe"
  | "gear"
  | "shield"
  | "feather";

export type BannerFrameStyleId =
  | "ottoman_gold"
  | "seljuk_star"
  | "andalus_arch"
  | "emerald_shield";

export interface BannerConfig {
  primaryColor: string;
  secondaryColor: string;
  symbol: BannerSymbolId;
  frameStyle: BannerFrameStyleId;
  motto: string;
}

export type VirtuePointsMap = Record<VirtuePointType, number>;

export interface CompletedChapterRecord {
  chapterId: string;
  heroId: string;
  completedAt: string;
  selectedOptionId: "A" | "B" | "C";
}

export interface UserState {
  apprenticeName: string;
  selectedTitle: string;
  unlockedTitles: string[];
  completedChapters: string[];
  completedHistory: CompletedChapterRecord[];
  unlockedArtifacts: string[];
  discoveredHotspots: string[];
  savedSceneProgress: Record<string, number>;
  virtuePoints: VirtuePointsMap;
  totalPoints: number;
  bannerConfig: BannerConfig;
  isHydrated: boolean;

  // Actions
  setHydrated: (hydrated: boolean) => void;
  setApprenticeName: (name: string) => void;
  setSelectedTitle: (title: string) => void;
  updateBannerConfig: (partial: Partial<BannerConfig>) => void;
  saveSceneProgress: (chapterId: string, sceneIndex: number) => void;
  clearSceneProgress: (chapterId: string) => void;
  completeChapter: (chapterId: string, selectedOptionId?: "A" | "B" | "C") => {
    alreadyCompleted: boolean;
    earnedPoints: number;
    unlockedTitle: string;
    artifactId: string;
  } | null;
  discoverHotspot: (hotspotId: string) => void;
  resetProgress: () => void;
}

const DEFAULT_TITLE = "İz Süren Çırak";

const INITIAL_VIRTUE_POINTS: VirtuePointsMap = {
  ADALET: 0,
  CESARET_MERHAMET: 0,
  BILGELIK: 0,
  IHSAN_MEDENIYET: 0,
};

const INITIAL_BANNER_CONFIG: BannerConfig = {
  primaryColor: "#F59E0B",
  secondaryColor: "#1E1B4B",
  symbol: "lantern",
  frameStyle: "ottoman_gold",
  motto: "Adalet, Bilim ve İyilik İzinde",
};

export const BANNER_COLOR_OPTIONS = [
  { id: "amber", label: "Altın Kehribar", color: "#F59E0B", secondary: "#1E1B4B" },
  { id: "emerald", label: "Zümrüt Yeşili", color: "#10B981", secondary: "#064E3B" },
  { id: "sky", label: "Gökyüzü Turkuazı", color: "#06B6D4", secondary: "#164E63" },
  { id: "coral", label: "Mercan Kırmızısı", color: "#F43F5E", secondary: "#4C0519" },
] as const;

export const BANNER_SYMBOL_OPTIONS: Array<{
  id: BannerSymbolId;
  label: string;
  description: string;
}> = [
  { id: "lantern", label: "Adalet Feneri", description: "Karanlığı aydınlatan hakikat ışığı" },
  { id: "shield", label: "Mertlik Kalkanı", description: "Mazlumları koruyan cesaret sancağı" },
  { id: "gear", label: "Altın Çark", description: "El-Cezerî'nin bilgelik ve icat dişlisi" },
  { id: "astrolabe", label: "Gök Usturlabı", description: "Yıldızların ve bilimin pusulası" },
  { id: "crescent_star", label: "Hilal ve Yıldız", description: "Barış ve medeniyet kubbesi" },
  { id: "feather", label: "Bilgelik Kalemi", description: "Karaviyyin'in sönmeyen ilim mirası" },
];

export const BANNER_FRAME_OPTIONS: Array<{
  id: BannerFrameStyleId;
  label: string;
  borderColor: string;
}> = [
  { id: "ottoman_gold", label: "Altın Kehribar Çerçeve", borderColor: "#F59E0B" },
  { id: "seljuk_star", label: "Selçuklu Turkuaz Çerçeve", borderColor: "#06B6D4" },
  { id: "emerald_shield", label: "Zümrüt Muhafız Çerçeve", borderColor: "#10B981" },
  { id: "andalus_arch", label: "Endülüs Mercan Çerçeve", borderColor: "#F43F5E" },
];

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      apprenticeName: "Cesur İz Süren",
      selectedTitle: DEFAULT_TITLE,
      unlockedTitles: [DEFAULT_TITLE],
      completedChapters: [],
      completedHistory: [],
      unlockedArtifacts: [],
      discoveredHotspots: [],
      savedSceneProgress: {},
      virtuePoints: { ...INITIAL_VIRTUE_POINTS },
      totalPoints: 0,
      bannerConfig: { ...INITIAL_BANNER_CONFIG },
      isHydrated: false,

      setHydrated: (hydrated) => set({ isHydrated: hydrated }),

      setApprenticeName: (name) =>
        set({ apprenticeName: name.trim() || "Cesur İz Süren" }),

      setSelectedTitle: (title) => {
        const { unlockedTitles } = get();
        if (unlockedTitles.includes(title)) {
          set({ selectedTitle: title });
        }
      },

      updateBannerConfig: (partial) =>
        set((state) => ({
          bannerConfig: {
            ...state.bannerConfig,
            ...partial,
          },
        })),

      saveSceneProgress: (chapterId, sceneIndex) =>
        set((state) => {
          // If chapter is already completed, we don't need to persist a partial bookmark
          if (state.completedChapters.includes(chapterId)) {
            return state;
          }
          if (state.savedSceneProgress[chapterId] === sceneIndex) {
            return state;
          }
          return {
            savedSceneProgress: {
              ...state.savedSceneProgress,
              [chapterId]: sceneIndex,
            },
          };
        }),

      clearSceneProgress: (chapterId) =>
        set((state) => {
          if (!(chapterId in state.savedSceneProgress)) {
            return state;
          }
          const nextSaved = { ...state.savedSceneProgress };
          delete nextSaved[chapterId];
          return { savedSceneProgress: nextSaved };
        }),

      completeChapter: (chapterId, selectedOptionId = "C") => {
        const found = getChapterById(chapterId);
        if (!found) {
          return null;
        }

        const { chapter, hero } = found;
        const { rewardArtifact } = chapter;
        const state = get();
        const alreadyCompleted = state.completedChapters.includes(chapter.id);

        const nextSavedProgress = { ...state.savedSceneProgress };
        delete nextSavedProgress[chapter.id];

        if (alreadyCompleted) {
          if (chapter.id in state.savedSceneProgress) {
            set({ savedSceneProgress: nextSavedProgress });
          }
          return {
            alreadyCompleted: true,
            earnedPoints: 0,
            unlockedTitle: rewardArtifact.unlockedTitle,
            artifactId: rewardArtifact.id,
          };
        }

        const nextCompletedChapters = [...state.completedChapters, chapter.id];
        const nextUnlockedArtifacts = state.unlockedArtifacts.includes(
          rewardArtifact.id
        )
          ? state.unlockedArtifacts
          : [...state.unlockedArtifacts, rewardArtifact.id];

        const nextUnlockedTitles = state.unlockedTitles.includes(
          rewardArtifact.unlockedTitle
        )
          ? state.unlockedTitles
          : [...state.unlockedTitles, rewardArtifact.unlockedTitle];

        const nextVirtuePoints: VirtuePointsMap = {
          ...state.virtuePoints,
          [rewardArtifact.pointType]:
            (state.virtuePoints[rewardArtifact.pointType] || 0) +
            rewardArtifact.points,
        };

        const nextTotalPoints = Object.values(nextVirtuePoints).reduce(
          (sum, val) => sum + val,
          0
        );

        const nextSelectedTitle =
          state.selectedTitle === DEFAULT_TITLE
            ? rewardArtifact.unlockedTitle
            : state.selectedTitle;

        const nextRecord: CompletedChapterRecord = {
          chapterId: chapter.id,
          heroId: hero.id,
          completedAt: new Date().toISOString(),
          selectedOptionId,
        };

        set({
          completedChapters: nextCompletedChapters,
          completedHistory: [nextRecord, ...state.completedHistory],
          unlockedArtifacts: nextUnlockedArtifacts,
          unlockedTitles: nextUnlockedTitles,
          selectedTitle: nextSelectedTitle,
          virtuePoints: nextVirtuePoints,
          totalPoints: nextTotalPoints,
          savedSceneProgress: nextSavedProgress,
        });

        return {
          alreadyCompleted: false,
          earnedPoints: rewardArtifact.points,
          unlockedTitle: rewardArtifact.unlockedTitle,
          artifactId: rewardArtifact.id,
        };
      },

      discoverHotspot: (hotspotId) =>
        set((state) => {
          if (state.discoveredHotspots.includes(hotspotId)) {
            return state;
          }
          return {
            discoveredHotspots: [...state.discoveredHotspots, hotspotId],
          };
        }),

      resetProgress: () =>
        set({
          apprenticeName: "Cesur İz Süren",
          selectedTitle: DEFAULT_TITLE,
          unlockedTitles: [DEFAULT_TITLE],
          completedChapters: [],
          completedHistory: [],
          unlockedArtifacts: [],
          discoveredHotspots: [],
          savedSceneProgress: {},
          virtuePoints: { ...INITIAL_VIRTUE_POINTS },
          totalPoints: 0,
          bannerConfig: { ...INITIAL_BANNER_CONFIG },
        }),
    }),
    {
      name: "miras-iz-surenler-user-store-v1",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
