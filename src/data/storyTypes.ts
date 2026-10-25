export type HeroClassId =
  | "ADALET_VICDANI"
  | "MERTLIK_CESARET"
  | "BILIM_DENEY"
  | "GIZEM_IZ_SURME"
  | "BUYUK_SEYYAHLAR"
  | "MERHAMET_VAKIF"
  | "BILGELIK_GONUL"
  | "SANAT_ESTETIK"
  | "ADALET_CESARET"
  | "BILIM_ICAT"
  | "MEDENIYET_IYILIK"
  | "KESIF_SEYAHAT";

export type VisualMode = "POV_SILHOUETTE" | "CHARACTER_PORTRAIT";

export type VirtuePointType =
  | "ADALET"
  | "CESARET_MERHAMET"
  | "BILGELIK"
  | "IHSAN_MEDENIYET";

export type AtmosphereType =
  | "NIGHT_LANTERN"
  | "DESERT_CAMPFIRE"
  | "JERUSALEM_DUSK"
  | "WORKSHOP_GEARS"
  | "PALACE_WORKSHOP"
  | "COURTYARD_SUNLIGHT"
  | "FEZ_COURTYARD"
  | "DAWN_MIST"
  | "STORM_SEA"
  | "STARLIT_OBSERVATORY"
  | "WARM_GOLDEN";

export interface HeroClassInfo {
  id: HeroClassId;
  name: string;
  shortName: string;
  description: string;
  accentColor: string;
  badgeBgColor: string;
  iconName:
    | "scale"
    | "shield"
    | "cog"
    | "search"
    | "compass"
    | "heart"
    | "landmark"
    | "sparkles"
    | "feather";
}

export interface MidDecisionOption {
  id: "A" | "B";
  label: string;
  text: string;
  feedback: string;
  isBestChoice: boolean;
}

export interface MidDecisionMoment {
  title: string;
  question: string;
  options: MidDecisionOption[];
}

export interface SceneItem {
  id: string;
  sceneNumber: number;
  title: string;
  /** 4-5 sentences (70-90 words) vivid, historically accurate narrative */
  narration: string;
  /** Alias for compatibility */
  text: string;
  /** Character speaking in this scene */
  speaker: string;
  /** Direct quote or dialogue of the character in this scene */
  dialogue: string;
  /** "Bunu Biliyor muydun?" historical fact for curious kids */
  historicalNote: string;
  imagePath: string;
  imageKey?: string;
  atmosphereType: AtmosphereType;
  visualNote: string;
  /** Present on Scene 4 for the mid-chapter interactive decision */
  midDecision?: MidDecisionMoment;
}

export interface DestinyOption {
  id: "A" | "B" | "C";
  label: string;
  text: string;
  feedback: string;
  isHistoricalTruth: boolean;
}

export interface DestinyMoment {
  title: string;
  question: string;
  options: DestinyOption[];
  historicalTruthExplanation: string;
  quoteHighlight?: string;
}

export interface ArtifactHotspot {
  id: string;
  xPercent: number;
  yPercent: number;
  title: string;
  secretFact: string;
}

export interface RewardArtifact {
  id: string;
  name: string;
  heroId: string;
  chapterId: string;
  imagePath: string;
  pointType: VirtuePointType;
  pointLabel: string;
  points: number;
  unlockedTitle: string;
  shortDescription: string;
  historicalNote: string;
  accentColor: string;
  hotspots: ArtifactHotspot[];
}

export interface StoryChapter {
  id: string;
  heroId: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  visualMode: VisualMode;
  scenes: SceneItem[];
  destinyMoment: DestinyMoment;
  rewardArtifact: RewardArtifact;
  familyDiscussionQuestions: string[];
}

export interface HeroData {
  id: string;
  name: string;
  heroClass: HeroClassId;
  heroClassLabel?: string;
  classBadgeLabel?: string;
  title: string;
  era: string;
  location?: string;
  visualMode: VisualMode;
  islamicSensitivityNote?: string;
  accentColor: string;
  secondaryColor: string;
  summary?: string;
  shortBio?: string;
  badgeText?: string;
  coverImage?: string;
  crisisImage?: string;
  images?: {
    cover: string;
    crisis: string;
    artifact: string;
  };
  chapters: StoryChapter[];
}
