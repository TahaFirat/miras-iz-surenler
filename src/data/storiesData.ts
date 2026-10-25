import { HEROES_PART_1 } from "./heroesPart1";
import { HEROES_PART_2 } from "./heroesPart2";
import { HEROES_PART_3 } from "./heroesPart3";
import { EXTRA_CHAPTERS_BY_HERO, HEROES_PART_4 } from "./heroesPart4";
import {
  ArtifactHotspot,
  AtmosphereType,
  DestinyMoment,
  DestinyOption,
  HeroClassId,
  HeroClassInfo,
  HeroData,
  MidDecisionMoment,
  MidDecisionOption,
  RewardArtifact,
  SceneItem,
  StoryChapter,
  VirtuePointType,
  VisualMode,
} from "./storyTypes";

export type {
  ArtifactHotspot,
  AtmosphereType,
  DestinyMoment,
  DestinyOption,
  HeroClassId,
  HeroClassInfo,
  HeroData,
  MidDecisionMoment,
  MidDecisionOption,
  RewardArtifact,
  SceneItem,
  StoryChapter,
  VirtuePointType,
  VisualMode,
};

export const HERO_CLASSES: HeroClassInfo[] = [
  {
    id: "ADALET_VICDANI",
    name: "Adalet ve Vicdan",
    shortName: "Adalet ve Vicdan",
    description:
      "Mahkemede ve gecenin karanlığında hakkı, eşitliği ve vicdanı her şeyin üstünde tutanlar.",
    accentColor: "#D97706",
    badgeBgColor: "#FFFBEB",
    iconName: "scale",
  },
  {
    id: "MERTLIK_CESARET",
    name: "Mertlik ve Cesaret",
    shortName: "Mertlik ve Cesaret",
    description:
      "En çetin meydanlarda bile merhametini, sözünü ve sarsılmaz cesaretini kaybetmeyen kahramanlar.",
    accentColor: "#0D9488",
    badgeBgColor: "#F0FDFA",
    iconName: "shield",
  },
  {
    id: "BILIM_DENEY",
    name: "Bilim ve Gökbilim",
    shortName: "Bilim ve Gökbilim",
    description:
      "Çarkları, suyun gücünü, ışığın sırlarını ve gökyüzündeki yıldızları deneylerle keşfeden bilginler.",
    accentColor: "#0D9488",
    badgeBgColor: "#F0FDFA",
    iconName: "cog",
  },
  {
    id: "GIZEM_IZ_SURME",
    name: "Gizem ve Ansiklopedi",
    shortName: "Gizem ve Ansiklopedi",
    description:
      "Kırmızı çizim defterlerinin, Cihannüma haritalarının ve binlerce kitabın ardındaki sırları çözenler.",
    accentColor: "#D97706",
    badgeBgColor: "#FFFBEB",
    iconName: "search",
  },
  {
    id: "BUYUK_SEYYAHLAR",
    name: "Büyük Seyyahlar",
    shortName: "Büyük Seyyahlar",
    description:
      "Çölleri, fırtınalı denizleri ve kıtaları aşarak bilinmeyen diyarları kayıt altına alan gezginler.",
    accentColor: "#0D9488",
    badgeBgColor: "#F0FDFA",
    iconName: "compass",
  },
  {
    id: "MERHAMET_VAKIF",
    name: "Merhamet ve Vakıf",
    shortName: "Merhamet ve Vakıf",
    description:
      "Gizli iyiliklerle kalpleri ısıtan, servetini ve ilmini insanlığın ortak hayrına vakfedenler.",
    accentColor: "#D97706",
    badgeBgColor: "#FFFBEB",
    iconName: "heart",
  },
  {
    id: "BILGELIK_GONUL",
    name: "Bilgelik ve Gönül",
    shortName: "Bilgelik ve Gönül",
    description:
      "Sabırla, doğrulukla ve sevgi dolu dizelerle gönülleri birleştiren Anadolu erenleri ve bilgeleri.",
    accentColor: "#0D9488",
    badgeBgColor: "#F0FDFA",
    iconName: "sparkles",
  },
  {
    id: "SANAT_ESTETIK",
    name: "Sanat ve Estetik",
    shortName: "Sanat ve Estetik",
    description:
      "Kamış kalemin ucundaki sabırla, mürekkeple ve zarafetle medeniyete estetik ruh kazandıran ustalar.",
    accentColor: "#D97706",
    badgeBgColor: "#FFFBEB",
    iconName: "feather",
  },
];

function mapHeroClass(hero: HeroData): {
  heroClass: HeroClassId;
  label: string;
} {
  switch (hero.heroClass) {
    case "ADALET_VICDANI":
      return { heroClass: "ADALET_VICDANI", label: "Adalet ve Vicdan" };
    case "MERTLIK_CESARET":
      return { heroClass: "MERTLIK_CESARET", label: "Mertlik ve Cesaret" };
    case "BILIM_DENEY":
      return { heroClass: "BILIM_DENEY", label: "Bilim ve Deney" };
    case "GIZEM_IZ_SURME":
      return { heroClass: "GIZEM_IZ_SURME", label: "Gizem ve İz Sürme" };
    case "BUYUK_SEYYAHLAR":
      return { heroClass: "BUYUK_SEYYAHLAR", label: "Büyük Seyyahlar" };
    case "MERHAMET_VAKIF":
      return { heroClass: "MERHAMET_VAKIF", label: "Merhamet ve Vakıf" };
    case "BILGELIK_GONUL":
      return {
        heroClass: "BILGELIK_GONUL",
        label: "Bilgelik ve Gönül Hikâyeleri",
      };
    case "SANAT_ESTETIK":
      return { heroClass: "SANAT_ESTETIK", label: "Sanat ve Estetik" };
    case "ADALET_CESARET":
      return { heroClass: "ADALET_VICDANI", label: "Adalet ve Vicdan" };
    case "BILIM_ICAT":
      return { heroClass: "BILIM_DENEY", label: "Bilim ve Deney" };
    case "KESIF_SEYAHAT":
      return { heroClass: "BUYUK_SEYYAHLAR", label: "Büyük Seyyahlar" };
    case "MEDENIYET_IYILIK":
      return { heroClass: "MERHAMET_VAKIF", label: "Merhamet ve Vakıf" };
  }
}

function normalizeHero(hero: HeroData): HeroData {
  const cover =
    hero.images?.cover ??
    hero.coverImage ??
    "assets/images/selahaddin_hero.png";
  const crisis = hero.images?.crisis ?? hero.crisisImage ?? cover;
  const artifact =
    hero.images?.artifact ??
    hero.chapters[0]?.rewardArtifact?.imagePath ??
    "assets/images/artifact_saladin_banner.png";

  const mapped = mapHeroClass(hero);
  const customLabel = hero.heroClassLabel ?? hero.classBadgeLabel ?? mapped.label;

  const extraChapters = EXTRA_CHAPTERS_BY_HERO[hero.id] ?? [];
  const mergedChapters: StoryChapter[] = [...hero.chapters];
  for (const extra of extraChapters) {
    if (!mergedChapters.some((ch) => ch.id === extra.id)) {
      mergedChapters.push(extra);
    }
  }

  const normalizedChapters: StoryChapter[] = mergedChapters.map((chapter) => {
    const normalizedScenes: SceneItem[] = chapter.scenes.map((scene) => {
      const explicitImage = scene.imageKey || scene.imagePath || cover;
      return {
        ...scene,
        imagePath: explicitImage,
        imageKey: explicitImage,
      };
    });

    return {
      ...chapter,
      scenes: normalizedScenes,
    };
  });

  return {
    ...hero,
    heroClass: mapped.heroClass,
    heroClassLabel: customLabel,
    classBadgeLabel: hero.classBadgeLabel ?? customLabel,
    location: hero.location ?? hero.era,
    summary: hero.summary ?? hero.shortBio ?? "",
    shortBio: hero.shortBio ?? hero.summary ?? "",
    coverImage: cover,
    crisisImage: crisis,
    images: {
      cover,
      crisis,
      artifact,
    },
    chapters: normalizedChapters,
  };
}

export const HEROES_DATA: HeroData[] = [
  ...HEROES_PART_1.map(normalizeHero),
  ...HEROES_PART_2.map(normalizeHero),
  ...HEROES_PART_3.map(normalizeHero),
  ...HEROES_PART_4.map(normalizeHero),
];

export function getHeroById(heroId: string): HeroData | undefined {
  if (heroId === "fatima-el-fihri") {
    return HEROES_DATA.find((hero) => hero.id === "medeniyet-mimarlari");
  }
  return HEROES_DATA.find((hero) => hero.id === heroId);
}

export function getChapterById(chapterId: string): {
  hero: HeroData;
  chapter: StoryChapter;
} | null {
  const normalizedId =
    chapterId === "fatima-el-fihri-ch1" ? "medeniyet-mimarlari-ch1" : chapterId;

  for (const hero of HEROES_DATA) {
    const chapter = hero.chapters.find((ch) => ch.id === normalizedId);
    if (chapter) {
      return { hero, chapter };
    }
  }
  const directHero = getHeroById(normalizedId);
  if (directHero && directHero.chapters.length > 0) {
    return { hero: directHero, chapter: directHero.chapters[0] };
  }
  return null;
}

export function getAllChapters(): Array<{
  hero: HeroData;
  chapter: StoryChapter;
}> {
  const list: Array<{ hero: HeroData; chapter: StoryChapter }> = [];
  for (const hero of HEROES_DATA) {
    for (const chapter of hero.chapters) {
      list.push({ hero, chapter });
    }
  }
  return list;
}

export function getAllArtifacts(): RewardArtifact[] {
  return getAllChapters().map((item) => item.chapter.rewardArtifact);
}
