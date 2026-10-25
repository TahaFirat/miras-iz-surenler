import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  Pressable,
  useWindowDimensions,
  Platform,
} from "react-native";
import * as Haptics from "expo-haptics";
import {
  MapPin,
  Clock,
  BookOpen,
  ChevronRight,
  CheckCircle2,
  Compass,
  X,
  Play,
} from "lucide-react-native";
import { HEROES_DATA } from "../data/storiesData";
import { useUserStore } from "../store/useUserStore";
import { resolveImageAsset } from "../utils/imageAssets";
import { BouncyPressable } from "./BouncyPressable";

type HeroProfile = (typeof HEROES_DATA)[number];

interface WorldAtlasAndTimelineProps {
  completedChapters: string[];
  onSelectChapter: (chapterId: string) => void;
}

interface AtlasCityNode {
  id: string;
  cityName: string;
  shortName: string;
  centuryBadge: string;
  xPercent: number;
  yPercent: number;
  heroIds: string[];
  medallionImage: string;
}

interface TimelineEraItem {
  id: string;
  centuryLabel: string;
  yearRange: string;
  heroId: string;
  cityId: string;
  cityLabel: string;
  cardImage: string;
}

const ATLAS_CITY_NODES: AtlasCityNode[] = [
  {
    id: "cebelitarik",
    cityName: "Cebelitarık & Kurtuba",
    shortName: "Endülüs",
    centuryBadge: "8–9. yy",
    xPercent: 14,
    yPercent: 22,
    heroIds: ["tarik-bin-ziyad", "ziryab-itri"],
    medallionImage: "assets/images/tarik_bin_ziyad_gibraltar.png",
  },
  {
    id: "fes-tanca",
    cityName: "Fes & Tanca",
    shortName: "Fes",
    centuryBadge: "9 & 14. yy",
    xPercent: 20,
    yPercent: 48,
    heroIds: ["medeniyet-mimarlari", "ibn-battuta"],
    medallionImage: "assets/images/fatima_fihri_hero.png",
  },
  {
    id: "gelibolu",
    cityName: "Gelibolu",
    shortName: "Gelibolu",
    centuryBadge: "16. yy",
    xPercent: 34,
    yPercent: 31,
    heroIds: ["piri-reis"],
    medallionImage: "assets/images/piri_reis_map.png",
  },
  {
    id: "istanbul",
    cityName: "İstanbul & Anadolu",
    shortName: "İstanbul",
    centuryBadge: "13–19. yy",
    xPercent: 46,
    yPercent: 21,
    heroIds: [
      "fatih-sultan-mehmed",
      "mimar-sinan",
      "yunus-emre",
      "katip-celebi",
      "evliya-celebi",
      "seyh-hamdullah",
      "ziryab-itri",
      "bezmialem-valide-sultan",
      "piri-reis",
      "medeniyet-mimarlari",
    ],
    medallionImage: "assets/images/fatih_hero.png",
  },
  {
    id: "kahire",
    cityName: "Kahire (Nil)",
    shortName: "Kahire",
    centuryBadge: "11 & 17. yy",
    xPercent: 43,
    yPercent: 58,
    heroIds: ["ibnul-heysem", "evliya-celebi"],
    medallionImage: "assets/images/ibnul_heysem_hero.png",
  },
  {
    id: "kudus",
    cityName: "Kudüs",
    shortName: "Kudüs",
    centuryBadge: "7 & 12. yy",
    xPercent: 55,
    yPercent: 46,
    heroIds: ["selahaddin-eyyubi", "hz-omer"],
    medallionImage: "assets/images/selahaddin_hero.png",
  },
  {
    id: "medine",
    cityName: "Medine & Kûfe",
    shortName: "Medine",
    centuryBadge: "7. yy",
    xPercent: 62,
    yPercent: 70,
    heroIds: ["hz-ebubekir", "hz-omer", "hz-ali"],
    medallionImage: "assets/images/hz_omer_pov.png",
  },
  {
    id: "diyarbakir",
    cityName: "Diyarbakır",
    shortName: "Diyarbakır",
    centuryBadge: "12–13. yy",
    xPercent: 59,
    yPercent: 30,
    heroIds: ["el-cezeri", "yunus-emre"],
    medallionImage: "assets/images/el_cezeri_hero.png",
  },
  {
    id: "erzurum-inebolu",
    cityName: "Erzurum & İnebolu",
    shortName: "Erzurum",
    centuryBadge: "19–20. yy",
    xPercent: 65,
    yPercent: 16,
    heroIds: ["nene-hatun-serife-baci"],
    medallionImage: "assets/images/nene_hatun_aziziye.png",
  },
  {
    id: "bagdat-halep",
    cityName: "Bağdat & Halep",
    shortName: "Bağdat",
    centuryBadge: "8–10. yy",
    xPercent: 71,
    yPercent: 46,
    heroIds: ["harizmi-meryem", "cabir-bin-hayyan"],
    medallionImage: "assets/images/meryem_el_icliyye_astrolabe.png",
  },
  {
    id: "buhara",
    cityName: "Buhara & Gazne",
    shortName: "Buhara",
    centuryBadge: "10–11. yy",
    xPercent: 77,
    yPercent: 29,
    heroIds: ["ibn-sina", "biruni"],
    medallionImage: "assets/images/ibn_sina_hero.png",
  },
  {
    id: "semerkand",
    cityName: "Semerkand",
    shortName: "Semerkand",
    centuryBadge: "15. yy",
    xPercent: 86,
    yPercent: 22,
    heroIds: ["ulug-bey", "ali-kuscu"],
    medallionImage: "assets/images/ulug_bey_observatory.png",
  },
  {
    id: "maldivler-cin",
    cityName: "Hint Okyanusu & Çin",
    shortName: "Doğu Rotası",
    centuryBadge: "14. yy",
    xPercent: 85,
    yPercent: 76,
    heroIds: ["ibn-battuta"],
    medallionImage: "assets/images/ibn_battuta_maldives_china.png",
  },
];

const TIMELINE_ERAS: TimelineEraItem[] = [
  {
    id: "era-7-ebubekir",
    centuryLabel: "7. Yüzyıl",
    yearRange: "632–634",
    heroId: "hz-ebubekir",
    cityId: "medine",
    cityLabel: "Medine",
    cardImage: "assets/images/hz_ebubekir_pov.png",
  },
  {
    id: "era-7-omer",
    centuryLabel: "7. Yüzyıl",
    yearRange: "634–644",
    heroId: "hz-omer",
    cityId: "medine",
    cityLabel: "Medine & Kudüs",
    cardImage: "assets/images/hz_omer_pov.png",
  },
  {
    id: "era-7-ali",
    centuryLabel: "7. Yüzyıl",
    yearRange: "656–661",
    heroId: "hz-ali",
    cityId: "medine",
    cityLabel: "Kûfe",
    cardImage: "assets/images/hz_ali_pov.png",
  },
  {
    id: "era-8-tarik",
    centuryLabel: "8. Yüzyıl",
    yearRange: "711",
    heroId: "tarik-bin-ziyad",
    cityId: "cebelitarik",
    cityLabel: "Endülüs",
    cardImage: "assets/images/tarik_bin_ziyad_gibraltar.png",
  },
  {
    id: "era-8-cabir",
    centuryLabel: "8. Yüzyıl",
    yearRange: "721–815",
    heroId: "cabir-bin-hayyan",
    cityId: "bagdat-halep",
    cityLabel: "Kûfe & Bağdat",
    cardImage: "assets/images/cabir_imbik_alchemy.png",
  },
  {
    id: "era-9-harizmi",
    centuryLabel: "9. Yüzyıl",
    yearRange: "820–850",
    heroId: "harizmi-meryem",
    cityId: "bagdat-halep",
    cityLabel: "Bağdat & Halep",
    cardImage: "assets/images/harizmi_usturlap.png",
  },
  {
    id: "era-9-ziryab",
    centuryLabel: "9. Yüzyıl",
    yearRange: "822–857",
    heroId: "ziryab-itri",
    cityId: "cebelitarik",
    cityLabel: "Kurtuba & İstanbul",
    cardImage: "assets/images/ziryab_cordoba_music.png",
  },
  {
    id: "era-9-fatima",
    centuryLabel: "9. Yüzyıl",
    yearRange: "859",
    heroId: "medeniyet-mimarlari",
    cityId: "fes-tanca",
    cityLabel: "Fes",
    cardImage: "assets/images/fatima_fihri_hero.png",
  },
  {
    id: "era-11-biruni",
    centuryLabel: "11. Yüzyıl",
    yearRange: "973–1048",
    heroId: "biruni",
    cityId: "buhara",
    cityLabel: "Gazne & Nandana",
    cardImage: "assets/images/biruni_earth_radius.png",
  },
  {
    id: "era-11-heysem",
    centuryLabel: "11. Yüzyıl",
    yearRange: "1015",
    heroId: "ibnul-heysem",
    cityId: "kahire",
    cityLabel: "Kahire",
    cardImage: "assets/images/ibnul_heysem_hero.png",
  },
  {
    id: "era-11-sina",
    centuryLabel: "11. Yüzyıl",
    yearRange: "1025",
    heroId: "ibn-sina",
    cityId: "buhara",
    cityLabel: "Buhara",
    cardImage: "assets/images/ibn_sina_hero.png",
  },
  {
    id: "era-12-selahaddin",
    centuryLabel: "12. Yüzyıl",
    yearRange: "1187",
    heroId: "selahaddin-eyyubi",
    cityId: "kudus",
    cityLabel: "Kudüs",
    cardImage: "assets/images/selahaddin_hero.png",
  },
  {
    id: "era-13-cezeri",
    centuryLabel: "13. Yüzyıl",
    yearRange: "1206",
    heroId: "el-cezeri",
    cityId: "diyarbakir",
    cityLabel: "Diyarbakır",
    cardImage: "assets/images/el_cezeri_hero.png",
  },
  {
    id: "era-13-yunus",
    centuryLabel: "13. Yüzyıl",
    yearRange: "1240–1320",
    heroId: "yunus-emre",
    cityId: "istanbul",
    cityLabel: "Anadolu",
    cardImage: "assets/images/yunus_emre_straight_wood.png",
  },
  {
    id: "era-14-battuta",
    centuryLabel: "14. Yüzyıl",
    yearRange: "1325–1354",
    heroId: "ibn-battuta",
    cityId: "maldivler-cin",
    cityLabel: "Tanca'dan Çin'e",
    cardImage: "assets/images/ibn_battuta_hero.png",
  },
  {
    id: "era-15-ulugbey",
    centuryLabel: "15. Yüzyıl",
    yearRange: "1420–1449",
    heroId: "ulug-bey",
    cityId: "semerkand",
    cityLabel: "Semerkand",
    cardImage: "assets/images/ulug_bey_observatory.png",
  },
  {
    id: "era-15-fatih",
    centuryLabel: "15. Yüzyıl",
    yearRange: "1453",
    heroId: "fatih-sultan-mehmed",
    cityId: "istanbul",
    cityLabel: "İstanbul",
    cardImage: "assets/images/fatih_hero.png",
  },
  {
    id: "era-15-alikuscu",
    centuryLabel: "15. Yüzyıl",
    yearRange: "1470",
    heroId: "ali-kuscu",
    cityId: "semerkand",
    cityLabel: "Semerkand & İstanbul",
    cardImage: "assets/images/ali_kuscu_moon_map.png",
  },
  {
    id: "era-15-seyhhamdullah",
    centuryLabel: "15–16. Yüzyıl",
    yearRange: "1480–1520",
    heroId: "seyh-hamdullah",
    cityId: "istanbul",
    cityLabel: "Amasya & İstanbul",
    cardImage: "assets/images/seyh_hamdullah_calligraphy.png",
  },
  {
    id: "era-16-piri",
    centuryLabel: "16. Yüzyıl",
    yearRange: "1513–1632",
    heroId: "piri-reis",
    cityId: "gelibolu",
    cityLabel: "Gelibolu & Galata",
    cardImage: "assets/images/piri_reis_map.png",
  },
  {
    id: "era-16-sinan",
    centuryLabel: "16. Yüzyıl",
    yearRange: "1557",
    heroId: "mimar-sinan",
    cityId: "istanbul",
    cityLabel: "İstanbul",
    cardImage: "assets/images/mimar_sinan_hero.png",
  },
  {
    id: "era-17-katipcelebi",
    centuryLabel: "17. Yüzyıl",
    yearRange: "1648–1657",
    heroId: "katip-celebi",
    cityId: "istanbul",
    cityLabel: "İstanbul",
    cardImage: "assets/images/katip_celebi_books.png",
  },
  {
    id: "era-17-evliyacelebi",
    centuryLabel: "17. Yüzyıl",
    yearRange: "1630–1682",
    heroId: "evliya-celebi",
    cityId: "istanbul",
    cityLabel: "İstanbul & Kahire",
    cardImage: "assets/images/evliya_celebi_seyahatname.png",
  },
  {
    id: "era-19-bezmialem",
    centuryLabel: "19. Yüzyıl",
    yearRange: "1845",
    heroId: "bezmialem-valide-sultan",
    cityId: "istanbul",
    cityLabel: "İstanbul",
    cardImage: "assets/images/bezmialem_gureba_hospital.png",
  },
  {
    id: "era-19-nenehatun",
    centuryLabel: "19–20. Yüzyıl",
    yearRange: "1877 & 1921",
    heroId: "nene-hatun-serife-baci",
    cityId: "erzurum-inebolu",
    cityLabel: "Erzurum & İnebolu",
    cardImage: "assets/images/nene_hatun_aziziye.png",
  },
];

export const WorldAtlasAndTimeline: React.FC<WorldAtlasAndTimelineProps> = ({
  completedChapters,
  onSelectChapter,
}) => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const savedSceneProgress = useUserStore((s) => s.savedSceneProgress);

  const [selectedCityId, setSelectedCityId] = useState<string>("istanbul");
  const [selectedHeroId, setSelectedHeroId] = useState<string>(
    "fatih-sultan-mehmed"
  );
  const [chapterModalHero, setChapterModalHero] = useState<HeroProfile | null>(
    null
  );

  const triggerHaptic = () => {
    if (Platform.OS !== "web") {
      Haptics.selectionAsync().catch(() => {});
    }
  };

  const selectedCity =
    ATLAS_CITY_NODES.find((c) => c.id === selectedCityId) ||
    ATLAS_CITY_NODES[3];

  const cityHeroes: HeroProfile[] = selectedCity.heroIds
    .map((id) => HEROES_DATA.find((h) => h.id === id))
    .filter((h): h is HeroProfile => Boolean(h));

  const activeHero: HeroProfile =
    cityHeroes.find((h) => h.id === selectedHeroId) ||
    cityHeroes[0] ||
    HEROES_DATA[0];

  const handlePressCityMedallion = (city: AtlasCityNode) => {
    triggerHaptic();
    setSelectedCityId(city.id);
    const firstHero = HEROES_DATA.find((h) => h.id === city.heroIds[0]);
    if (firstHero) {
      setSelectedHeroId(firstHero.id);
    }
  };

  const handleOpenHeroChapters = (heroId: string, cityId?: string) => {
    triggerHaptic();
    if (cityId) {
      setSelectedCityId(cityId);
    }
    setSelectedHeroId(heroId);
    const hero = HEROES_DATA.find((h) => h.id === heroId);
    if (hero) {
      setChapterModalHero(hero);
    }
  };

  const atlasMapSource = resolveImageAsset(
    "assets/images/islamic_world_atlas_map.png"
  );

  const medallionSize = isTablet ? 48 : 32;
  const halfMedallion = medallionSize / 2;

  return (
    <View style={{ width: "100%", overflow: "hidden" }}>
      {/* ==================================================================== */}
      {/* 1. RESPONSIVE WORLD ATLAS CARD (Zero Horizontal Overflow)            */}
      {/* ==================================================================== */}
      <View
        style={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          borderRadius: isTablet ? 26 : 20,
          padding: isTablet ? 18 : 12,
          marginBottom: 16,
          borderWidth: 1.5,
          borderColor: "#E7E5E4",
          overflow: "hidden",
        }}
      >
        {/* Clean Header Row */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <View
              style={{
                width: isTablet ? 38 : 32,
                height: isTablet ? 38 : 32,
                borderRadius: 10,
                backgroundColor: "#FEF3C7",
                borderWidth: 1.5,
                borderColor: "#F59E0B",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <Compass size={isTablet ? 20 : 17} color="#B45309" />
            </View>
            <Text
              style={{
                color: "#1C1917",
                fontSize: isTablet ? 20 : 16.5,
                fontWeight: "900",
                flexShrink: 1,
              }}
              numberOfLines={1}
            >
              Medeniyet Haritası
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#FFFBEB",
              borderRadius: 999,
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderWidth: 1,
              borderColor: "#FDE68A",
            }}
          >
            <Text
              style={{
                color: "#B45309",
                fontSize: 11.5,
                fontWeight: "800",
              }}
            >
              {ATLAS_CITY_NODES.length} Şehir
            </Text>
          </View>
        </View>

        {/* Quick Horizontal City Selector Bar (Super easy on Mobile & Tablet) */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width: "100%", marginBottom: 10 }}
          contentContainerStyle={{ gap: 6, paddingRight: 8 }}
        >
          {ATLAS_CITY_NODES.map((city) => {
            const isSelected = city.id === selectedCity.id;
            return (
              <BouncyPressable
                key={city.id}
                onPress={() => handlePressCityMedallion(city)}
                scaleTo={0.96}
                style={{
                  paddingHorizontal: isTablet ? 12 : 10,
                  paddingVertical: isTablet ? 7 : 6,
                  borderRadius: 999,
                  backgroundColor: isSelected ? "#0D9488" : "#F7F3E8",
                  borderWidth: 1.5,
                  borderColor: isSelected ? "#0D9488" : "#E6DEC8",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MapPin
                  size={12}
                  color={isSelected ? "#FFFFFF" : "#D97706"}
                />
                <Text
                  style={{
                    color: isSelected ? "#FFFFFF" : "#1C1917",
                    fontSize: isTablet ? 12.5 : 11.5,
                    fontWeight: "800",
                    marginLeft: 4,
                  }}
                >
                  {city.shortName}
                </Text>
              </BouncyPressable>
            );
          })}
        </ScrollView>

        {/* 100% Width Responsive Map Box (Never overflows right edge!) */}
        <View
          style={{
            width: "100%",
            height: isTablet ? 400 : 230,
            borderRadius: isTablet ? 22 : 16,
            overflow: "hidden",
            borderWidth: isTablet ? 4 : 2.5,
            borderColor: "#D97706",
            backgroundColor: "#0C4A6E",
            position: "relative",
          }}
        >
          {atlasMapSource && (
            <Image
              source={atlasMapSource}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          )}

          {/* City Medallions */}
          {ATLAS_CITY_NODES.map((city) => {
            const isSelected = city.id === selectedCity.id;
            const medallionSource = resolveImageAsset(city.medallionImage);

            return (
              <View
                key={city.id}
                style={{
                  position: "absolute",
                  left: `${city.xPercent}%`,
                  top: `${city.yPercent}%`,
                  transform: [
                    { translateX: -halfMedallion },
                    { translateY: -halfMedallion },
                  ],
                  alignItems: "center",
                  zIndex: isSelected ? 50 : 20,
                }}
              >
                <BouncyPressable
                  onPress={() => handlePressCityMedallion(city)}
                  scaleTo={0.93}
                  style={{ alignItems: "center" }}
                >
                  <View
                    style={{
                      width: medallionSize,
                      height: medallionSize,
                      borderRadius: halfMedallion,
                      borderWidth: isSelected ? 3 : 2,
                      borderColor: isSelected ? "#10B981" : "#FBBF24",
                      backgroundColor: "#1C1917",
                      overflow: "hidden",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {medallionSource && (
                      <Image
                        source={medallionSource}
                        resizeMode="cover"
                        style={{ width: "100%", height: "100%" }}
                      />
                    )}
                  </View>

                  {/* Show city label on tablet or only for the selected city on phone to prevent overlap */}
                  {(isTablet || isSelected) && (
                    <View
                      style={{
                        marginTop: 2,
                        paddingHorizontal: 7,
                        paddingVertical: 2,
                        borderRadius: 999,
                        backgroundColor: isSelected
                          ? "#0D9488"
                          : "rgba(28, 25, 23, 0.86)",
                        borderWidth: 1,
                        borderColor: isSelected ? "#99F6E4" : "#FBBF24",
                      }}
                    >
                      <Text
                        style={{
                          color: "#FFFFFF",
                          fontSize: isTablet ? 10.5 : 9.5,
                          fontWeight: "800",
                        }}
                        numberOfLines={1}
                      >
                        {city.shortName}
                      </Text>
                    </View>
                  )}
                </BouncyPressable>
              </View>
            );
          })}
        </View>

        {/* Selected City & Hero Chapters Panel */}
        <View
          style={{
            backgroundColor: "#FAF8F5",
            borderRadius: 16,
            padding: isTablet ? 14 : 11,
            marginTop: 12,
            borderWidth: 1.5,
            borderColor: "#E7E5E4",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: cityHeroes.length > 1 ? 8 : 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
              <MapPin size={16} color="#0D9488" />
              <Text
                style={{
                  color: "#1C1917",
                  fontSize: isTablet ? 16.5 : 15,
                  fontWeight: "900",
                  marginLeft: 6,
                  flexShrink: 1,
                }}
                numberOfLines={1}
              >
                {selectedCity.cityName}
              </Text>
            </View>
            <Text
              style={{
                color: "#B45309",
                fontSize: 11.5,
                fontWeight: "800",
              }}
            >
              {selectedCity.centuryBadge}
            </Text>
          </View>

          {/* Hero Selector Pills if this city hosts multiple heroes */}
          {cityHeroes.length > 1 && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ width: "100%", marginBottom: 10 }}
              contentContainerStyle={{ gap: 6 }}
            >
              {cityHeroes.map((h) => {
                const isHeroActive = h.id === activeHero.id;
                return (
                  <BouncyPressable
                    key={h.id}
                    onPress={() => {
                      triggerHaptic();
                      setSelectedHeroId(h.id);
                    }}
                    scaleTo={0.97}
                    style={{
                      paddingHorizontal: 12,
                      paddingVertical: 6,
                      borderRadius: 999,
                      backgroundColor: isHeroActive ? "#0D9488" : "#FFFFFF",
                      borderWidth: 1.5,
                      borderColor: isHeroActive ? "#0D9488" : "#D6D3D1",
                    }}
                  >
                    <Text
                      style={{
                        color: isHeroActive ? "#FFFFFF" : "#1C1917",
                        fontSize: 12,
                        fontWeight: "800",
                      }}
                    >
                      {h.name}
                    </Text>
                  </BouncyPressable>
                );
              })}
            </ScrollView>
          )}

          {/* Active Hero Chapters List */}
          <View style={{ gap: 8 }}>
            {activeHero.chapters.map((chapter) => {
              const isDone = completedChapters.includes(chapter.id);
              return (
                <BouncyPressable
                  key={chapter.id}
                  onPress={() => onSelectChapter(chapter.id)}
                  scaleTo={0.98}
                  style={{
                    backgroundColor: isDone ? "#F0FDFA" : "#FFFFFF",
                    borderRadius: 12,
                    paddingHorizontal: 12,
                    paddingVertical: 10,
                    borderWidth: 1.5,
                    borderColor: isDone ? "#5EEAD4" : "#E7E5E4",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
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
                    {isDone ? (
                      <CheckCircle2 size={17} color="#0D9488" />
                    ) : (
                      <BookOpen size={17} color="#D97706" />
                    )}
                    <View style={{ marginLeft: 8, flex: 1 }}>
                      <Text
                        style={{
                          color: "#1C1917",
                          fontSize: isTablet ? 13.5 : 12.5,
                          fontWeight: "800",
                        }}
                        numberOfLines={1}
                      >
                        Bölüm {chapter.chapterNumber}: {chapter.title}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#0D9488",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 8,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#FFFFFF",
                        fontSize: 11.5,
                        fontWeight: "800",
                        marginRight: 2,
                      }}
                    >
                      Oku
                    </Text>
                    <ChevronRight size={13} color="#FFFFFF" />
                  </View>
                </BouncyPressable>
              );
            })}
          </View>
        </View>
      </View>

      {/* ==================================================================== */}
      {/* 2. COMPACT CHRONOLOGICAL TIMELINE                                    */}
      {/* ==================================================================== */}
      <View
        style={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          borderRadius: isTablet ? 26 : 20,
          padding: isTablet ? 18 : 12,
          marginBottom: 12,
          borderWidth: 1.5,
          borderColor: "#E7E5E4",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: isTablet ? 38 : 32,
                height: isTablet ? 38 : 32,
                borderRadius: 10,
                backgroundColor: "#FFFBEB",
                borderWidth: 1.5,
                borderColor: "#F59E0B",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <Clock size={isTablet ? 20 : 17} color="#B45309" />
            </View>
            <Text
              style={{
                color: "#1C1917",
                fontSize: isTablet ? 20 : 16.5,
                fontWeight: "900",
              }}
            >
              Zaman Şeridi (7. – 20. Yüzyıl)
            </Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width: "100%" }}
          contentContainerStyle={{
            paddingVertical: 4,
            gap: 10,
          }}
        >
          {TIMELINE_ERAS.map((era) => {
            const hero = HEROES_DATA.find((h) => h.id === era.heroId);
            if (!hero) return null;

            const isSelected = hero.id === activeHero.id;
            const imgSource = resolveImageAsset(
              era.cardImage || hero.images?.cover || hero.coverImage || ""
            );
            const completedHeroChapters = hero.chapters.filter((ch) =>
              completedChapters.includes(ch.id)
            ).length;

            return (
              <View
                key={era.id}
                style={{
                  width: isTablet ? 210 : 176,
                  borderRadius: 18,
                  backgroundColor: "#FFFFFF",
                  borderWidth: 2,
                  borderColor: isSelected ? "#0D9488" : "#E7E5E4",
                  overflow: "hidden",
                  justifyContent: "space-between",
                }}
              >
                <Pressable
                  onPress={() => handleOpenHeroChapters(hero.id, era.cityId)}
                  style={{
                    width: "100%",
                    height: isTablet ? 115 : 98,
                    backgroundColor: "#1C1917",
                    position: "relative",
                  }}
                >
                  {imgSource && (
                    <Image
                      source={imgSource}
                      resizeMode="cover"
                      style={{ width: "100%", height: "100%" }}
                    />
                  )}

                  <View
                    style={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      paddingHorizontal: 8,
                      paddingVertical: 3,
                      borderRadius: 999,
                      backgroundColor: "#F59E0B",
                    }}
                  >
                    <Text
                      style={{
                        color: "#1C1917",
                        fontSize: 10.5,
                        fontWeight: "900",
                      }}
                    >
                      {era.centuryLabel}
                    </Text>
                  </View>
                </Pressable>

                <View
                  style={{
                    padding: 10,
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: "#1C1917",
                        fontSize: isTablet ? 15 : 13.5,
                        fontWeight: "900",
                      }}
                      numberOfLines={1}
                    >
                      {hero.name}
                    </Text>
                    <Text
                      style={{
                        color: "#0D9488",
                        fontSize: 11,
                        fontWeight: "800",
                        marginTop: 2,
                        marginBottom: 8,
                      }}
                    >
                      {completedHeroChapters}/{hero.chapters.length} Bölüm
                    </Text>
                  </View>

                  <BouncyPressable
                    onPress={() => handleOpenHeroChapters(hero.id, era.cityId)}
                    scaleTo={0.97}
                    style={{
                      backgroundColor: "#0D9488",
                      borderRadius: 10,
                      paddingVertical: 8,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Play size={12} color="#FFFFFF" fill="#FFFFFF" />
                    <Text
                      style={{
                        color: "#FFFFFF",
                        fontSize: 12,
                        fontWeight: "900",
                        marginLeft: 5,
                      }}
                    >
                      Bölümler
                    </Text>
                  </BouncyPressable>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>

      {/* ==================================================================== */}
      {/* 3. HERO CHAPTERS QUICK LAUNCH MODAL                                  */}
      {/* ==================================================================== */}
      <Modal
        visible={Boolean(chapterModalHero)}
        transparent
        animationType="fade"
        onRequestClose={() => setChapterModalHero(null)}
      >
        <Pressable
          onPress={() => setChapterModalHero(null)}
          style={{
            flex: 1,
            backgroundColor: "rgba(28, 25, 23, 0.55)",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          {chapterModalHero && (
            <Pressable
              onPress={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: 500,
                backgroundColor: "#FAF8F5",
                borderRadius: 24,
                borderWidth: 2,
                borderColor: "#F59E0B",
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  height: 140,
                  backgroundColor: "#1C1917",
                  position: "relative",
                }}
              >
                {resolveImageAsset(
                  chapterModalHero.images?.cover ??
                    chapterModalHero.coverImage ??
                    ""
                ) && (
                  <Image
                    source={
                      resolveImageAsset(
                        chapterModalHero.images?.cover ??
                          chapterModalHero.coverImage ??
                          ""
                      )!
                    }
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
                <View
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: 12,
                    backgroundColor: "rgba(28, 25, 23, 0.75)",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 19,
                      fontWeight: "900",
                    }}
                  >
                    {chapterModalHero.name}
                  </Text>
                </View>

                <Pressable
                  onPress={() => setChapterModalHero(null)}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: "rgba(28, 25, 23, 0.75)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <X size={16} color="#FFFFFF" />
                </Pressable>
              </View>

              <View style={{ padding: 14, gap: 8 }}>
                {chapterModalHero.chapters.map((ch) => {
                  const isDone = completedChapters.includes(ch.id);
                  const savedIdx = savedSceneProgress[ch.id];
                  const isInProgress =
                    !isDone && typeof savedIdx === "number" && savedIdx >= 0;

                  return (
                    <BouncyPressable
                      key={ch.id}
                      onPress={() => {
                        setChapterModalHero(null);
                        onSelectChapter(ch.id);
                      }}
                      scaleTo={0.98}
                      style={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: 14,
                        padding: 12,
                        borderWidth: 1.5,
                        borderColor: isDone ? "#5EEAD4" : "#E7E5E4",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flex: 1, paddingRight: 8 }}>
                        <Text
                          style={{
                            color: isDone ? "#0D9488" : "#D97706",
                            fontSize: 11,
                            fontWeight: "900",
                          }}
                        >
                          {isDone
                            ? "✓ Tamamlandı"
                            : isInProgress
                            ? `▶ Sahne ${savedIdx + 1}/${ch.scenes.length}`
                            : "✨ Yeni Bölüm"}
                        </Text>
                        <Text
                          style={{
                            color: "#1C1917",
                            fontSize: 14,
                            fontWeight: "800",
                            marginTop: 2,
                          }}
                          numberOfLines={1}
                        >
                          Bölüm {ch.chapterNumber}: {ch.title}
                        </Text>
                      </View>

                      <View
                        style={{
                          backgroundColor: isInProgress ? "#F59E0B" : "#0D9488",
                          paddingHorizontal: 12,
                          paddingVertical: 7,
                          borderRadius: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: isInProgress ? "#1C1917" : "#FFFFFF",
                            fontSize: 12,
                            fontWeight: "900",
                          }}
                        >
                          {isInProgress ? "Devam Et" : "Başla"}
                        </Text>
                      </View>
                    </BouncyPressable>
                  );
                })}
              </View>
            </Pressable>
          )}
        </Pressable>
      </Modal>
    </View>
  );
};
