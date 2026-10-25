import {
  BEZMIALEM_CHAPTERS,
  TARIK_EXTRA_CHAPTERS,
} from "./chapters/bezmialemTarik";
import { BIRUNI_CHAPTERS, CABIR_CHAPTERS } from "./chapters/biruniCabir";
import {
  EVLIYA_CELEBI_CHAPTERS,
  ZIRYAB_ITRI_CHAPTERS,
} from "./chapters/evliyaZiryab";
import {
  KATIP_CELEBI_EXTRA_CHAPTERS,
  SEYH_HAMDULLAH_EXTRA_CHAPTERS,
} from "./chapters/katipHamdullah";
import {
  ALI_KUSCU_EXTRA_CHAPTERS,
  HARIZMI_MERYEM_EXTRA_CHAPTERS,
  NENE_HATUN_EXTRA_CHAPTERS,
} from "./chapters/neneHarizmiAliKuscu";
import {
  PIRI_REIS_EXTRA_CHAPTERS,
  ULUG_BEY_EXTRA_CHAPTERS,
} from "./chapters/ulugBeyHezarfen";
import { HeroData, StoryChapter } from "./storyTypes";

/**
 * Extra multi-chapter adventures appended to existing single/two-chapter heroes
 * in `storiesData.ts`.
 */
export const EXTRA_CHAPTERS_BY_HERO: Record<string, StoryChapter[]> = {
  "tarik-bin-ziyad": TARIK_EXTRA_CHAPTERS,
  "nene-hatun-serife-baci": NENE_HATUN_EXTRA_CHAPTERS,
  "harizmi-meryem": HARIZMI_MERYEM_EXTRA_CHAPTERS,
  "ali-kuscu": ALI_KUSCU_EXTRA_CHAPTERS,
  "piri-reis": PIRI_REIS_EXTRA_CHAPTERS,
  "ulug-bey": ULUG_BEY_EXTRA_CHAPTERS,
  "katip-celebi": KATIP_CELEBI_EXTRA_CHAPTERS,
  "seyh-hamdullah": SEYH_HAMDULLAH_EXTRA_CHAPTERS,
};

export const HEROES_PART_4: HeroData[] = [
  {
    id: "evliya-celebi",
    name: "Evliya Çelebi",
    heroClass: "BUYUK_SEYYAHLAR",
    heroClassLabel: "Büyük Seyyahlar",
    classBadgeLabel: "Büyük Seyyahlar",
    title: "Seyahatname'nin 50 Yıllık Gezgini",
    era: "17. Yüzyıl (1611–1682)",
    location: "İstanbul, Viyana & Kahire",
    visualMode: "CHARACTER_PORTRAIT",
    accentColor: "#0D9488",
    secondaryColor: "#115E59",
    badgeText: "BÜYÜK SEYYAHLAR • 2 BÖLÜM",
    summary:
      "Gençliğinde gördüğü bir rüyayla yola çıkıp 50 yıl boyunca gezdiği şehirleri, dilleri, köprüleri ve insan hikâyelerini 10 ciltlik dev Seyahatname'de ölümsüzleştiren büyük gezgin.",
    shortBio:
      "İstanbul'dan Viyana'ya ve Nil Nehri'nin şelalelerine kadar uzanan 50 yıllık yolculuğunu UNESCO Dünya Belleği'ne giren 10 ciltlik Seyahatname'de toplayan eşsiz kültür elçisi.",
    coverImage: "assets/images/evliya_celebi_seyahatname.png",
    crisisImage: "assets/images/evliya_celebi_nile_map.png",
    images: {
      cover: "assets/images/evliya_celebi_seyahatname.png",
      crisis: "assets/images/evliya_celebi_nile_map.png",
      artifact: "assets/images/evliya_celebi_seyahatname.png",
    },
    chapters: EVLIYA_CELEBI_CHAPTERS,
  },
  {
    id: "biruni",
    name: "Ebû Reyhân el-Bîrûnî",
    heroClass: "BILIM_DENEY",
    heroClassLabel: "Bilim ve Gökbilim",
    classBadgeLabel: "Bilim ve Gökbilim",
    title: "Dünyanın Çapını Ölçen Evrensel Bilgin",
    era: "10–11. Yüzyıl (973–1048)",
    location: "Hârizm, Gazne & Nandana",
    visualMode: "CHARACTER_PORTRAIT",
    accentColor: "#0EA5E9",
    secondaryColor: "#0369A1",
    badgeText: "BİLİM VE GÖKBİLİM • 2 BÖLÜM",
    summary:
      "Nandana Dağı'nın zirvesinden usturlap ve trigonometriyle Dünya'nın yarıçapını gerçeğe %1'den yakın ölçen, değerli taşların özgül ağırlığını bulan büyük bilgin.",
    shortBio:
      "Gökbilim, matematik, fizik, coğrafya ve kültür tarihi alanlarında 100'den fazla eser bırakan; deney ve ölçümü her şeyin üstünde tutan Hârizmli bilge.",
    coverImage: "assets/images/biruni_earth_radius.png",
    crisisImage: "assets/images/biruni_gemstone_balance.png",
    images: {
      cover: "assets/images/biruni_earth_radius.png",
      crisis: "assets/images/biruni_gemstone_balance.png",
      artifact: "assets/images/biruni_earth_radius.png",
    },
    chapters: BIRUNI_CHAPTERS,
  },
  {
    id: "cabir-bin-hayyan",
    name: "Câbir bin Hayyân",
    heroClass: "BILIM_DENEY",
    heroClassLabel: "Bilim ve Deney",
    classBadgeLabel: "Bilim ve Deney",
    title: "İmbik ve Deney Laboratuvarının Öncüsü",
    era: "8–9. Yüzyıl (Kûfe & Bağdat)",
    location: "Kûfe & Bağdat",
    visualMode: "CHARACTER_PORTRAIT",
    accentColor: "#10B981",
    secondaryColor: "#047857",
    badgeText: "BİLİM VE DENEY • 1 BÖLÜM",
    summary:
      "Cam imbik (el-enbîk) düzeneğiyle damıtma, kristalleştirme ve hassas tartım kurallarını sistemleştirerek kimyayı deneysel bir bilime dönüştüren öncü bilgin.",
    shortBio:
      "'Kimyada ilk şart çalışmak ve deney yapmaktır' ilkesiyle laboratuvar disiplininin ve kayıtlı deney yönteminin temellerini atan öncü.",
    coverImage: "assets/images/cabir_imbik_alchemy.png",
    crisisImage: "assets/images/cabir_imbik_alchemy.png",
    images: {
      cover: "assets/images/cabir_imbik_alchemy.png",
      crisis: "assets/images/cabir_imbik_alchemy.png",
      artifact: "assets/images/cabir_imbik_alchemy.png",
    },
    chapters: CABIR_CHAPTERS,
  },
  {
    id: "ziryab-itri",
    name: "Ziryâb & Buhûrîzâde Itrî",
    heroClass: "SANAT_ESTETIK",
    heroClassLabel: "Sanat ve Estetik",
    classBadgeLabel: "Sanat ve Estetik",
    title: "Kurtuba'dan İstanbul'a Musiki ve Zarafet Ustaları",
    era: "9. Yüzyıl Kurtuba & 17. Yüzyıl İstanbul",
    location: "Kurtuba (Endülüs) & İstanbul",
    visualMode: "CHARACTER_PORTRAIT",
    accentColor: "#D97706",
    secondaryColor: "#92400E",
    badgeText: "SANAT VE ESTETİK • 1 BÖLÜM",
    summary:
      "Kurtuba'da uda beşinci teli ve kartal tüyü mızrabı kazandıran Ziryâb ile İstanbul'da Segâh makamındaki ölümsüz besteleriyle gönülleri birleştiren Itrî'nin estetik mirası.",
    shortBio:
      "Müziği darüşşifalarda şifayla, günlük hayatta nezaket ve doğa sevgisiyle buluşturan iki büyük medeniyet sanatçısı.",
    coverImage: "assets/images/ziryab_cordoba_music.png",
    crisisImage: "assets/images/ziryab_cordoba_music.png",
    images: {
      cover: "assets/images/ziryab_cordoba_music.png",
      crisis: "assets/images/ziryab_cordoba_music.png",
      artifact: "assets/images/ziryab_cordoba_music.png",
    },
    chapters: ZIRYAB_ITRI_CHAPTERS,
  },
  {
    id: "bezmialem-valide-sultan",
    name: "Bezmiâlem Valide Sultan",
    heroClass: "MERHAMET_VAKIF",
    heroClassLabel: "Merhamet ve Vakıf",
    classBadgeLabel: "Merhamet ve Vakıf",
    title: "Gureba Hastanesi ve Şifa Vakıflarının Kurucusu",
    era: "19. Yüzyıl (1807–1853)",
    location: "İstanbul (Aksaray & Boğaziçi)",
    visualMode: "CHARACTER_PORTRAIT",
    accentColor: "#0D9488",
    secondaryColor: "#0F766E",
    badgeText: "MERHAMET VE VAKIF • 1 BÖLÜM",
    summary:
      "Şehirdeki kimsesiz ve yoksul hastaların hiçbir ücret ödemeden tedavi edilmesi için 1845'te Vakıf Gureba Hastanesi'ni, çeşmeleri ve okulları kuran hayırsever Valide Sultan.",
    shortBio:
      "Servetini gösterişe değil, yüzyıllar boyu hastaların duasını alacak kalıcı şifa ve eğitim vakıflarına dönüştüren merhamet öncüsü.",
    coverImage: "assets/images/bezmialem_gureba_hospital.png",
    crisisImage: "assets/images/bezmialem_gureba_hospital.png",
    images: {
      cover: "assets/images/bezmialem_gureba_hospital.png",
      crisis: "assets/images/bezmialem_gureba_hospital.png",
      artifact: "assets/images/bezmialem_gureba_hospital.png",
    },
    chapters: BEZMIALEM_CHAPTERS,
  },
];
