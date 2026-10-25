import {
  AtmosphereType,
  DestinyMoment,
  MidDecisionMoment,
  RewardArtifact,
  SceneItem,
  StoryChapter,
  VisualMode,
} from "./storyTypes";

/**
 * Compact authoring helpers for long-form chapters.
 * They expand to the exact same `StoryChapter` / `SceneItem` shape used by
 * heroesPart1-3 so the reader (`app/chapter/[id].tsx`) needs no changes.
 */
export interface SceneInput {
  title: string;
  /** 2-3 paragraphs (130-180 words), separated with "\n\n" */
  narration: string;
  speaker: string;
  dialogue: string;
  /** "Bunu Biliyor muydun?" content (header is rendered by the UI) */
  funFact: string;
  /** Key of IMAGE_ASSETS, e.g. "assets/images/piri_reis_map.png" */
  image: string;
  atmosphere: AtmosphereType;
  visualNote: string;
  /** Only on scene 4 */
  midDecision?: MidDecisionMoment;
}

export interface ChapterInput {
  id: string;
  heroId: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  estimatedMinutes?: number;
  visualMode?: VisualMode;
  scenes: SceneInput[];
  destinyMoment: DestinyMoment;
  rewardArtifact: Omit<RewardArtifact, "heroId" | "chapterId">;
  familyDiscussionQuestions: string[];
}

export function buildScene(
  chapterId: string,
  sceneNumber: number,
  input: SceneInput
): SceneItem {
  const scene: SceneItem = {
    id: `${chapterId}-s${sceneNumber}`,
    sceneNumber,
    title: input.title,
    narration: input.narration,
    text: input.narration,
    speaker: input.speaker,
    dialogue: input.dialogue,
    historicalNote: input.funFact,
    imagePath: input.image,
    imageKey: input.image,
    atmosphereType: input.atmosphere,
    visualNote: input.visualNote,
  };
  if (input.midDecision) {
    scene.midDecision = input.midDecision;
  }
  return scene;
}

export function buildChapter(input: ChapterInput): StoryChapter {
  return {
    id: input.id,
    heroId: input.heroId,
    chapterNumber: input.chapterNumber,
    title: input.title,
    subtitle: input.subtitle,
    estimatedMinutes: input.estimatedMinutes ?? 9,
    visualMode: input.visualMode ?? "CHARACTER_PORTRAIT",
    scenes: input.scenes.map((scene, index) =>
      buildScene(input.id, index + 1, scene)
    ),
    destinyMoment: input.destinyMoment,
    rewardArtifact: {
      ...input.rewardArtifact,
      heroId: input.heroId,
      chapterId: input.id,
    },
    familyDiscussionQuestions: input.familyDiscussionQuestions,
  };
}
