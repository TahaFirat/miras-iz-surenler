import { buildChapter } from "../storyBuilders";
import { StoryChapter } from "../storyTypes";

/**
 * Kâtip Çelebi (ch2, ch3) ve Şeyh Hamdullah & Hâfız Osman (ch2, ch3)
 * için ek bölümler. ch1 bölümleri `heroesPart3.ts` içindedir.
 */

export const KATIP_CELEBI_EXTRA_CHAPTERS: StoryChapter[] = [
  // ==========================================================================
  // KÂTİP ÇELEBİ — BÖLÜM 2
  // ==========================================================================
  buildChapter({
    id: "katip-celebi-ch2",
    heroId: "katip-celebi",
    chapterNumber: 2,
    title:
      "Bir Savaş Seferinde Başlayan Okuma: Bağdat ve Revan Seferleri'nde Defter Tutan Katip",
    subtitle:
      "Omzunda hesap defteri, çadırında mum ışığı: yolları gözleriyle okuyan genç kâtip",
    estimatedMinutes: 9,
    scenes: [
      {
        title: "On Dört Yaşında Divan Kalemine İlk Adım",
        narration:
          "Yıl 1623'e doğru ilerlerken İstanbul'daki Divan-ı Hümayun avlusunda her sabah ezandan sonra kamış kalemlerin hışırtısı yükselmeye başlardı. Genç Mustafa, babası Abdullah'ın elinden tutarak Anadolu Muhasebesi Kalemi'nin yüksek tavanlı odasına girdi. Burası, ordunun maaşlarının, erzakının ve harcamalarının tek tek yazıldığı yerdi. Babası ona kendi maaşından on dört dirhem harçlık bağlamıştı; on dört yaşındaki çırak bunu küçük bir hazine gibi hissediyordu.\n\nKalemin deneyimli bir halifesi ona sayıları, hesap kurallarını ve yalnızca kâtiplerin kullandığı özel siyakat yazısını öğretmeye başladı. Mürekkep, eski kâğıt ve mum kokan sütunların arasında Mustafa kimsenin ona söylemediği bir dersi kendi kendine çıkardı: Bir rakam yanlış yazılırsa bir askerin, bir yoksulun ya da bir ailenin hakkı eksik kalabilirdi. Bu yüzden doğru yazmak, güzel yazmaktan çok daha büyük bir sorumluluktu; çünkü defterin her satırı birinin emeğiydi.",
        speaker: "Kalemin Kıdemli Halifesi",
        dialogue:
          "Evlat, burada her rakam bir emanettir; bir sıfırı yanlış yazarsan bir ailenin ekmeğini yanlış yazmış olursun.",
        funFact:
          "Kâtip Çelebi'nin çalıştığı Anadolu Muhasebesi Kalemi, Divan-ı Hümayun'a bağlı kalemlerden biriydi. Burada rakamlar için 'siyakat' adı verilen özel bir yazı kullanılır ve genç kâtipler bu yazıyı yıllarca meşk ederek öğrenirdi.",
        image: "assets/images/fatih_s2_red_notebook_plan.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Yüksek tavanlı bir Osmanlı muhasebe odasında, uzun masalarda defter karıştıran kâtipler; en önde on dört yaşında bir çırak ve yanında babası, mum ışığı ve kâğıt rulolar, yazı içermeyen sahne.",
      },
      {
        title: "İlk Sefer: Çadırların Arasında Sayılan Develer",
        narration:
          "1624 yılında ordu doğuya doğru yola çıkarken Mustafa ilk kez bu kadar büyük bir kalabalığın içindeydi. Sabah borusuyla birlikte binlerce çadır söküldü, develer yüklerini homurdanarak kaldırdı, fırınlardan yükselen taze ekmek kokusu yol tozuna karıştı. Babası Abdullah oğlunun omzuna elini koyup ordunun karnını doyuran şeyin doğru tutulan defterler olduğunu söyledi.\n\nMustafa'nın işi savaşmak değil, saymak ve yazmaktı: Hangi birlik ne kadar arpa aldı, kaç çuval un harcandı, hangi konakta kaç at dinlendi? Defteri dizlerinin üstünde, sallanan bir arabanın içinde bile düz tutmayı öğrendi. Geceleri herkes uyurken çadırın aralığından dışarıya bakıyor, gün boyu geçtikleri dağları, nehirleri ve kasabaları düşünüyordu. Bunların hiçbiri hesap defterine girmiyordu; ama onun aklına tek tek yazılıyordu.",
        speaker: "Abdullah (Babası)",
        dialogue:
          "Oğlum, ordu önce ekmekle yürür; sen her çuvalı doğru yazarsan binlerce insana hizmet etmiş olursun.",
        funFact:
          "Kâtip Çelebi 1624'teki bu ilk sefere çıktığında henüz on beş yaşındaydı. Yıllar sonra kaleme aldığı Fezleke adlı tarih kitabında bu seferleri kendi gözleriyle gördüğü ayrıntılarla anlattı.",
        image: "assets/images/selahaddin_s1_crusader_camp.png",
        atmosphere: "DESERT_CAMPFIRE",
        visualNote:
          "Sabah sisinde sökülen sıra sıra çadırlar, yüklenen develer ve fırın dumanı; ön planda defterini dizine dayamış genç bir kâtip, uzakta ordu kafilesi, yazı içermeyen sahne.",
      },
      {
        title: "Musul'da Veda: Yola Eşlik Eden Bir Ders",
        narration:
          "1626'da ordu Bağdat önlerine ulaştı ama şehir alınamadı. Kuşatma kaldırılınca dönüş yolu yorgunluk, kıtlık ve karışıklık dolu uzun bir yürüyüşe dönüştü. Mustafa çadırdan çadıra dolaşıp azalan yiyeceklerin hesabını tutarken babasının her gün biraz daha yorulduğunu görüyordu. Yağmurlu, çamurlu menziller birbirini kovaladı; defterler bile rutubetten ağırlaştı.\n\nAğustos 1626'da ordu Musul'a vardığında Mustafa babasını kaybetti; bir ay sonra amcası da bu dünyadan göçtü. Henüz on yedi yaşındaydı ve artık omzunu tutacak o sıcak elin yokluğunu hissediyordu. Bir süre Diyarbakır'da kaldı. Yaşadığı bu zor günleri yıllar sonra Fezleke'de ayrıntılı biçimde anlatacaktı. Ama o sabah, Musul'un taş sokaklarında babasından öğrendiği en büyük dersi daha iyi anladı: Zor günlerde bile dürüstlüğü, çalışkanlığı ve öğrenme azmini bırakmamak.",
        speaker: "Genç Kâtip Çelebi",
        dialogue:
          "Babamdan bana kalan en değerli miras, doğru yazma sözüm ve öğrenmeye duyduğum sevgi olacak.",
        funFact:
          "Kâtip Çelebi, ağustos 1626'da Musul'da babasını, bir ay sonra Nusaybin'de amcasını kaybetti. Bağdat kuşatmasını ve dönüş yolundaki zorlukları yıllar sonra Fezleke'sinde canlı ayrıntılarla anlattı.",
        image: "assets/images/nene_hatun_s1_erzurum_dawn.png",
        atmosphere: "DAWN_MIST",
        visualNote:
          "Sisli bir şafakta uzun bir yolculuğun ardından Musul'a ulaşan yorgun ordu; ön planda sırtı dönük, defterini göğsüne bastırmış yalnız bir genç kâtip, yazı içermeyen sahne.",
      },
      {
        title: "Diyarbakır'ın Kış Geceleri",
        narration:
          "Babasının dostlarından Mehmed Halife genç Mustafa'ya sahip çıktı ve onu Süvari Mukabelesi Kalemi'ne yerleştirdi. Mukabele, kayıtları aslıyla karşılaştırıp doğruluğunu denetlemek demekti. Diyarbakır'ın kalın siyah surlarının gölgesinde geçen soğuk kış günlerinde Mustafa sabahtan akşama kadar ordunun at ve süvari kayıtlarını denetledi. Bir isim eksik ya da bir sayı fazla çıkarsa mumun ışığında satırı yeniden saydı.\n\nAkşam çökünce odasına çekildiğinde iki ses onu çağırıyordu. Biri, sabaha yetişmesi gereken yarım kalmış kayıtlardı. Diğeri, masasında bekleyen kitabın sayfaları ve gün boyu gördüklerini kâğıda dökme isteğiydi. Mangalın sıcağı gözlerini ağırlaştırıyor, parmaklarının ucu kalemi arıyordu. Dışarıda rüzgâr surların arasında ıslık çalarken genç kâtip o gece bir karar vermek zorunda olduğunu hissetti: Hangi işe önce sarılacaktı?",
        speaker: "Mehmed Halife",
        dialogue:
          "Mustafa, görevini eksiksiz yapan kâtibin hem kalemi hem vicdanı rahat uyur.",
        funFact:
          "Süvari Mukabelesi Kalemi'nde kayıtların asılları ile karşılaştırılarak denetlenmesi esastı. Kâtip Çelebi'nin sonraki yıllarda eserlerini yazarken kaynakları birbiriyle karşılaştırması ve hatalı gördüğü kitapları eleştirmesi bu titiz alışkanlığın devamı gibidir.",
        image: "assets/images/piri_reis_s1_gallipoli_tower.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Diyarbakır'ın kara bazalt surlarına bakan küçük bir oda; mum ışığında masada yarım kalmış kayıt defterleri ve kenarda açık bir kitap, yazı içermeyen sahne.",
        midDecision: {
          title: "ARA KARAR: Yorgun Bir Gecede Hangi İş Önce?",
          question:
            "Sen de genç bir kâtipsin. Yarın sabah teslim edilecek kayıtlar yarım kaldı, ama merakla beklediğin kitap masanda duruyor. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Önce kayıtları eksiksiz bitiririm; sonra kalan zamanda okur, gördüklerimi not ederim.",
              feedback:
                "Çok doğru! Kâtip Çelebi görevini aksatmadan yaptı, merakını da bırakmadı. Sorumluluğu önce yerine getirip sonra öğrenmeye zaman ayırmak, hem güven hem bilgelik kazandırır.",
              isBestChoice: true,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Kayıtları sabaha bırakıp bütün geceyi kitaba veririm; yarın bir şekilde yetişirim.",
              feedback:
                "Merak çok değerli, ama kayıtlar başkalarının hakkını ilgilendiriyordu. Kâtip Çelebi gibi önce emaneti yerine getirmek, sonra merakını beslemek daha güvenilir bir yoldur.",
              isBestChoice: false,
            },
          ],
        },
      },
      {
        title: "Bîsütûn'un Dev Kayası ve Hemedan Yolu",
        narration:
          "1630 yılında Vezir Hüsrev Paşa'nın ordusuyla Hemedan ve Bağdat seferine çıkıldığında Mustafa artık deneyimli bir kâtipti. Ordu İran topraklarına doğru ilerlerken yol üzerindeki menzilleri tek tek defterine geçirdi: Gülânber Kalesi, Hasanâbâd, Hemedan… Bir sabah dağ eteğinde, gökyüzüne doğru yükselen devasa bir kaya duvarının önünde durdular. Bu Bîsütûn'du; çok eski çağlardan beri insanları şaşırtan, kayasına kabartmalar işlenmiş bir yerdi.\n\nMustafa başını kaldırıp kayaya, çevredeki bahçelere ve akan sulara baktı; mesafeleri, yönleri ve gördüklerini kısa cümlelerle yazdı. Yıllar sonra bu notlardan Cihannüma ve Fezleke'de yararlanacaktı. Çünkü bir şeyi anladı: Bir yeri gerçekten anlatmak için ona yalnızca kitaplardan değil, ayağınla ve gözünle de gitmek gerekirdi. Kâtibin defteri, ordunun harcamalarını kaydettiği kadar dünyanın küçük bir parçasını da kaydetmeye başlamıştı.",
        speaker: "Genç Kâtip Çelebi",
        dialogue:
          "Gördüğüm her menzili yazıyorum; belki bir gün bu notlar başka yolculara yol gösterir.",
        funFact:
          "Kâtip Çelebi'nin 1630 Hemedan seferinde gördüğü Gülânber Kalesi, Hasanâbâd, Hemedan ve Bîsütûn hakkındaki gözlemleri Cihannüma ve Fezleke'de yer alır. Bîsütûn'daki ünlü kaya kabartması, yaklaşık 2500 yıl önce Pers Kralı I. Darius döneminde işlenmiştir.",
        image: "assets/images/tarik_s2_gibraltar_cliff.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Altın ışıklı sabahta dev bir kaya duvarının dibinde duran ordu kafilesi; önde defterine bir şeyler not eden genç kâtip, çevrede bahçeler ve su kanalları, yazı içermeyen sahne.",
      },
      {
        title: "Fatih Camii'ndeki Vaaz: Bir Cümlenin Açtığı Yol",
        narration:
          "Seferden dönen orduyla İstanbul'a gelen Mustafa bir gün Fatih Camii'nde ünlü vaiz Kadızade Mehmed Efendi'nin konuşmasını dinlemeye gitti. Geniş avluda kalabalığın uğultusu duyuluyordu; ama vaiz konuşmaya başlayınca herkes sustu. Kadızade, insanın okumadan, öğrenmeden ve düşünmeden olgunlaşamayacağını açık, etkili bir dille anlatıyordu.\n\nMustafa o gün eve dönerken kendi kendine bir söz verdi: Kalemde çalışmaya devam edecek, ama öğrenmeyi de asla bırakmayacaktı. Seferler arasındaki kış aylarında Kadızade'nin derslerine katıldı; tefsir, fıkıh ve kelâm kitapları okudu. Gündüzleri defterlerin, akşamları kitapların insanı oldu. Böylece yıllar boyunca hem görevini hem merakını birlikte taşımayı öğrendi. Ders halkaları, ona sefer yollarında göremediği başka bir dünyanın kapısını açtı.",
        speaker: "Kadızade Mehmed Efendi",
        dialogue:
          "Bilgi, öğrenene emanet edilmiş bir ışıktır; onu taşımayı bilen yol gösterir.",
        funFact:
          "Kâtip Çelebi 1629'da seferden İstanbul'a döndükten sonra Kadızade Mehmed Efendi'nin derslerine katıldı ve bu derslerde tefsir ile Gazzâlî'nin İhyâü Ulûmi'd-dîn adlı büyük eserini okudu.",
        image: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Güneşli bir cami avlusunda sessizce bir vaizi dinleyen kalabalık; ön planda dikkatle bakan genç bir kâtip, taş revaklar ve güvercinler, yazı içermeyen sahne.",
      },
      {
        title: "Halep'ten Hac Yoluna: Hacı Halife Doğuyor",
        narration:
          "1633'te ordu Tabanıyassı Mehmed Paşa komutasında doğu seferine çıktı. Kış yaklaşınca birlikler dinlenmek için Halep'e çekildi. Mustafa bu fırsatı değerlendirip hac farizesini yerine getirmeye karar verdi. 1634 yılında kervanlarla Hicaz'a doğru yola çıktı; gündüzleri kızgın kum, geceleri yıldızlarla dolu uçsuz bir gökyüzü yolculara eşlik ediyordu.\n\nHac dönüşünde Diyarbakır'da kışlamakta olan orduya katıldı. Orada bilginlerle sohbetler yaptı, ilmî tartışmalara katıldı. Artık hem hacca gitmiş bir yolcu hem de kalemde yıllar geçirmiş deneyimli bir 'halife', yani kıdemli memurdu. Divan mensupları ona saygıyla 'Hacı Halife' demeye başladı; bilginler arasında ise 'Kâtip Çelebi' adıyla anılıyordu. Aynı insan, iki ayrı çevrede iki ayrı adla tanınıyordu ve iki adın arkasında da aynı çalışkan, sakin ve meraklı Mustafa vardı.",
        speaker: "Divan Memuru",
        dialogue:
          "Hacı Halife'nin defteri yanlış saymaz; hem hesabı hem sözü ölçülüdür.",
        funFact:
          "Kâtip Çelebi doğuda 'Hacı Halife', Avrupa'da ise 'Hacı Kalfa' adıyla tanınır. 'Halife' ya da 'Kalfa', kalemde kıdemli ve usta memura verilen bir unvandı; 'Hacı' ise 1634'te yaptığı hac yolculuğundan gelir.",
        image: "assets/images/battuta_s1_tangier_departure.png",
        atmosphere: "JERUSALEM_DUSK",
        visualNote:
          "Akşam kızıllığında yola koyulan hac kervanı; develer, yük torbaları ve uzaklaşan bir yolcu kafilesi, ön planda sırtında heybe taşıyan genç bir kâtip, yazı içermeyen sahne.",
      },
      {
        title: "Revan Seferi: Küçük Cihaddan Büyük Cihada",
        narration:
          "1635 yılında Sultan IV. Murad'ın Revan seferinde Kâtip Çelebi yine ordunun defterleri başındaydı. Karlı dağların, uzun menzillerin ve soğuk gecelerin ardından ordu Revan'a ulaşırken gördüklerini, duyduklarını ve hesapladığı mesafeleri sonradan Fezleke'de uzun uzun anlatacaktı. Çadırının önünde yıldızlar o kadar parlaktı ki, defterinden başını kaldırıp uzun uzun gökyüzüne baktığı geceler oldu.\n\nSeferin sonunda Mustafa önemli bir karar verdi: Ordu hayatını geride bırakıp ömrünü öğrenmeye ve yazmaya adayacaktı. Bunu kendi sözleriyle 'küçük cihaddan büyük cihada dönmek' diye anlattı; yani artık en büyük mücadelesini bilgisizlikle, tembellikle ve kendi nefsiyle yapacaktı. Halep'te sahaf dükkânlarında gördüğü kitapların adlarını yazmaya daha önce başlamıştı; şimdi bu merak, bütün hayatının yönünü belirleyecek kadar büyümüştü.",
        speaker: "Kâtip Çelebi",
        dialogue:
          "Bundan sonra kalemim savaş meydanını değil, ilim yolunu yazacak; asıl büyük mücadele bilgisizliğe karşı verilir.",
        funFact:
          "Kâtip Çelebi 1635 Revan seferinden sonra kendini neredeyse tamamen ilim çalışmalarına verdi. Yıllar sonra, 1638'deki IV. Murad'ın Bağdat seferine katılmadı; o sırada okuyup yazmakla meşguldü.",
        image: "assets/images/katip_celebi_books.png",
        atmosphere: "STARLIT_OBSERVATORY",
        visualNote:
          "Yıldızlı bir gökyüzü altında çadırın önünde defterini kapatmış, uzaktaki kar dağlarına bakan düşünceli genç kâtip; yanında mum ve açık kitap yığını, yazı içermeyen sahne.",
      },
      {
        title: "Hesabın Armağanı: Kâtip, Çelebi ve Hacı Halife",
        narration:
          "Yıllar geçti, Mustafa'nın bilgisi bir kuyunun suyu gibi derinleşti. Gençliğinde kalemde öğrendiği hesap bilgisi onu yalnızca iyi bir okuyucu değil, aynı zamanda güçlü bir düşünür de yapmıştı. 1653'te devletin gelir ve giderleri arasındaki açığın nedenlerini ve çözüm yollarını anlatan Düstûrü'l-Amel adlı raporu yazıp Divan-ı Hümayun'a sundu.\n\nGördüğü seferler, tuttuğu defterler, aldığı dersler ve okuduğu yüzlerce kitap bu raporda birleşmişti. Bilginler arasında 'Kâtip Çelebi', Divan memurları arasında 'Hacı Halife' diye tanınan bu insan, doğru hesabın ve doğru yazının bir milletin sağlığı için ne kadar önemli olduğunu biliyordu. On dört dirhemlik harçlıkla başlayan küçük bir çırağın yolculuğu, yüzyıllar sonra bile okunan eserlerle sürüyordu. O defterlerdeki rakamlar kuruyup gitti, ama dürüstlük ve merak hâlâ canlıdır.",
        speaker: "Kâtip Çelebi",
        dialogue:
          "Bir devletin hesabı düzgünse insanların hakkı da yerini bulur; bu yüzden küçük rakamları bile küçümsemedim.",
        funFact:
          "Düstûrü'l-Amel li-Islâhi'l-Halel 1653'te yazılmış, devlet bütçesindeki açığın sebeplerini ve çaresini araştıran bir rapordur. Kâtip Çelebi bunu doğrudan Divan-ı Hümayun'a sunmuştur.",
        image: "assets/images/ibn_sina_s1_bukhara_library.png",
        atmosphere: "WORKSHOP_GEARS",
        visualNote:
          "Kitap rafları ve düzenli defter yığınlarıyla dolu sakin bir çalışma odası; masada ölçü aletleri, kâğıtlar ve mum, pencereden altın bir ışık, yazı içermeyen sahne.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Yıl 1635. Revan seferi bitmek üzere. Ordu kâtipliği sana terfi, maaş ve şan vaat ediyor; ama sen en çok okumayı, öğrenmeyi ve yazmayı seviyorsun. Hayatının yönünü seçmen gerekiyor. Ne yaparsın?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Terfi peşinde koşarım; kitaplara ancak vakit kalırsa bakarım.",
          feedback:
            "Rütbe ve maaş cazip görünür, ama Kâtip Çelebi'ye göre asıl kazanç öğrenmekte ve öğrendiğini başkalarına yazmakta saklıydı.",
          isHistoricalTruth: false,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Gördüklerimi ve öğrendiklerimi ilme dönüştürürüm; sefer biter bitmez ömrümü okumaya ve yazmaya veririm.",
          feedback:
            "Tarihi Hakikat! Kâtip Çelebi 1635 Revan seferinden sonra 'küçük cihaddan büyük cihada' döndüğünü söyledi ve hayatını ilme adadı.",
          isHistoricalTruth: true,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "Okumayı tamamen bırakır, yalnızca ordu görevleriyle yaşarım.",
          feedback:
            "Kâtip Çelebi kalemde hesap ve düzen öğrenmişti, ama onu büyük yapan şey bu bilgiyi okuma ve yazma tutkusuyla birleştirmesiydi.",
          isHistoricalTruth: false,
        },
      ],
      historicalTruthExplanation:
        "Kâtip Çelebi on dört yaşında Divan-ı Hümayun'a bağlı Anadolu Muhasebesi Kalemi'nde çalışmaya başladı, Bağdat ve Revan gibi seferlere katıldı. 1635 Revan seferinden sonra ömrünü ilme verdi ve ünlü eserlerini yazdı.",
      quoteHighlight:
        "Küçük cihaddan büyük cihada döndüm; artık en büyük mücadelem bilgisizliğe karşı.",
    },
    rewardArtifact: {
      id: "artifact-katip-celebi-sefer-defteri",
      name: "Sefer Kâtibinin Hesap Defteri ve Yol Notları",
      imagePath: "assets/images/katip_celebi_books.png",
      pointType: "ADALET",
      pointLabel: "Adalet Puanı",
      points: 55,
      unlockedTitle: "Sefer Kâtibi",
      shortDescription:
        "Bağdat ve Revan yollarında tutulan hesaplar, menzil notları ve ilme dönen büyük bir kararın hatırası.",
      historicalNote:
        "Kâtip Çelebi, Anadolu Muhasebesi Kalemi'nde öğrendiği hesap ve siyakat bilgisini yıllar sonra Düstûrü'l-Amel raporunda kullandı; sefer yollarındaki gözlemleri Cihannüma ve Fezleke'ye girdi.",
      accentColor: "#B45309",
      hotspots: [
        {
          id: "on-dort-dirhem",
          xPercent: 30,
          yPercent: 45,
          title: "On Dört Dirhemlik Harçlık",
          secretFact:
            "Babası, on dört yaşındaki Mustafa'ya maaşından günlük on dört dirhem harçlık bağlayıp onu Anadolu Muhasebesi Kalemi'ne yanına almıştı.",
        },
        {
          id: "bisutun-notu",
          xPercent: 66,
          yPercent: 36,
          title: "Bîsütûn Notu",
          secretFact:
            "1630 Hemedan seferinde gördüğü Bîsütûn, Hemedan ve Hasanâbâd gibi yerlerin notlarını daha sonra Cihannüma ve Fezleke'de kullandı.",
        },
        {
          id: "haci-halife-muhru",
          xPercent: 50,
          yPercent: 68,
          title: "Hacı Halife Mührü",
          secretFact:
            "Divan mensupları arasında 'Hacı Halife' diye tanınırdı; 'Halife' kalemde kıdemli memura, 'Hacı' ise 1634'te yaptığı hac yolculuğuna işaret eder.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Kâtip Çelebi on dört yaşında işe başladığında 'her rakam bir emanettir' dersini öğrendi. Siz hangi işlerde dikkatli ve dürüst olmak zorunda olduğunuzu düşünüyorsunuz?",
      "Yorgun bir gecede önce görevini yapıp sonra okumak ile hemen kitaba dalmak arasında hangisini seçerdiniz? Neden?",
      "Kâtip Çelebi seferlerde gördüğü yerleri not alarak ileride Cihannüma'ya kaynak oluşturdu. Siz de gördüğünüz yerleri ve yaşadıklarınızı yazarsanız yıllar sonra size ne kazandırır?",
    ],
  }),

  // ==========================================================================
  // KÂTİP ÇELEBİ — BÖLÜM 3
  // ==========================================================================
  buildChapter({
    id: "katip-celebi-ch3",
    heroId: "katip-celebi",
    chapterNumber: 3,
    title:
      "Mizanü'l-Hak: Hastalıkta Bile Yazmaya Devam, Kahvehane Tartışmaları ve Bilgelik",
    subtitle:
      "Öfkeli tartışmalara 'önce dinle, sonra tart' diyen ve Batı'dan gelen bilgiyi Türkçeye taşıyan bilgin",
    estimatedMinutes: 9,
    scenes: [
      {
        title: "İki Ayda Yazılan Zaman Cetveli",
        narration:
          "Bir kış akşamı Kâtip Çelebi'nin Fatih Camii yakınındaki evinde, çalışma odasındaki masa açık kitaplarla doluydu. Yıl 1648 dolaylarıydı. Kâtip Çelebi insanlığın bilinen tarihini baştan sona tek bakışta görülebilecek bir cetvele dönüştürmek istiyordu: Hz. Âdem'den kendi zamanına kadar olayların hangi yılda yaşandığını gösteren sütunlar, tarihler ve kısa notlar. Bu iş, daha önce yazdığı büyük Arapça tarih kitabının özeti gibiydi.\n\nKâtip Çelebi bu esere, yani Takvîmü't-Tevârîh'e, kendi sözüne göre yalnızca iki ayda yazdı. Ama bu hız bir acelenin değil, yıllarca süren okumanın meyvesiydi: Önceki tarih kitabını yazarken elinden yaklaşık 1300 eser geçmişti. Cetvelin her satırında bir kitap, her tarihin arkasında günlerce karşılaştırma vardı. Çünkü o, tarih bilmeyen komutanların hata yaptığını, bilen yöneticilerin ise geçmişten ders alacağını düşünüyordu.",
        speaker: "Kâtip Çelebi",
        dialogue:
          "Geçmişi bilmeyen kişi yarının yolunu da bilemez; bu cetvel, zamanın haritasıdır.",
        funFact:
          "Takvîmü't-Tevârîh daha sonra İbrahim Müteferrika'nın matbaasında basıldı (1146/1733-34) ve yabancı dillere de çevrildi. Kâtip Çelebi onu iki ayda yazdığını belirtmiştir.",
        image: "assets/images/harizmi_s2_sundial_observatory.png",
        atmosphere: "WORKSHOP_GEARS",
        visualNote:
          "Kitaplarla çevrili bir çalışma masasında, yıllara ayrılmış uzun kâğıt şeritler ve mum ışığı; pencerede kış akşamı, kâtibin ince parmakları kâğıdı düzeltiyor, yazı içermeyen sahne.",
      },
      {
        title: "Kahvehanede Yükselen Sesler",
        narration:
          "On yedinci yüzyılın ortalarında İstanbul'un kahvehaneleri sabahtan akşama kadar dolup taşardı. Fincanlardan yükselen kahve kokusu, tavla pulları, tütün dumanı ve insan sesleri birbirine karışırdı. Kâtip Çelebi bir akşam Haliç'e yakın bir sokakta yürürken kapısı açık bir kahvehanenin önünde durdu. İçeriden gelen sesler günlük işlerden değil, o günlerin en kızışmış tartışmalarından söz ediyordu: Kimin görüşü doğruydu, kimin yanlıştı?\n\nMasalarda herkes sesini yükseltiyordu; kimi kahvenin, kimi tütünün caiz olup olmadığını tartışıyor, kimi karşısındakine öfkeyle bakıyordu. Kâtip Çelebi sessizce bir köşede durup dinledi. Dikkatini çeken şey, insanların bilgiyle değil öfkeyle konuşmalarıydı. Kimse karşısındakinin delilini dinlemiyor, herkes yalnızca kendi sözünü daha yüksek söylemeye çalışıyordu. O akşam eve dönerken kafasında bir soru vardı: Bu kalabalığa doğruyu sakin bir dille anlatacak bir kitap yazılamaz mıydı?",
        speaker: "Kahvehanede Bir Tartışmacı",
        dialogue:
          "Benim dediğim doğrudur! Başkasının sözünü dinlemeye vaktim yok!",
        funFact:
          "İstanbul'da ilk kahvehaneler 16. yüzyılın ortalarında açıldı; 17. yüzyılda sohbet, satranç ve tartışmanın merkezi haline geldi. Kâtip Çelebi tütün hakkında ayrıca bir risale de yazmıştı.",
        image: "assets/images/fatih_s5_golden_horn_dawn.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Haliç'e yakın dar bir sokakta açık kapılı bir kahvehane; içeride masa başında hararetle konuşan insanlar, dışarıda sessizce bakan kâtip, akşam ışığı, yazı içermeyen sahne.",
      },
      {
        title: "Mîzânü'l-Hak: Doğruyu Seçmek İçin Terazi",
        narration:
          "Kâtip Çelebi o akşamdan sonra kalemini yeniden eline aldı. Bu kez yazacağı kitap bir harita ya da zaman cetveli değil, insanlara tartışmanın edebini gösteren bir terazi olacaktı. Kitabın adını Mîzânü'l-Hak fî İhtiyâri'l-Ehak koydu; yani 'Doğruyu Seçmek İçin Hakkın Terazisi'. Mîzân terazi, ihtiyâr seçmek, ehak ise doğruya en yakın olan demekti.\n\nEseri ömrünün son yıllarında, herkesin anlayabilmesi için Türkçe yazdı. Dönemin tütün gibi sıcak tartışma konularını öfkeye değil bilgiye, delile ve akla dayanarak ele aldı. Taassubun, yani kendi görüşünden başkasını duymak istememenin toplumu böldüğünü anlattı. Ona göre herkesin kıymetli bir bilgisi olabilirdi ama kimse bütün doğruyu tek başına taşımıyordu. Bu yüzden önce dinlemek, sonra tartmak, sonunda en doğruya yakın olanı seçmek gerekiyordu. Kitabın her sayfasında sabırlı ve ölçülü bir ses vardı.",
        speaker: "Kâtip Çelebi",
        dialogue:
          "Tartışma doğruyu bulmak içindir; karşındakini susturmak için değil.",
        funFact:
          "Mîzânü'l-Hak, Kâtip Çelebi'nin yazdığı son eserdir. Modern basımlarından birinin adı 'İslâm'da Tenkid ve Tartışma Usûlü'dür; çünkü kitap tam da bunu anlatır.",
        image: "assets/images/katip_celebi_books.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Kâtibin masasında iki kefesi dengede duran büyük bir pirinç terazi ve etrafında açık kitaplar; mum ışığında düşünceli kâtip, yazı içermeyen sahne.",
      },
      {
        title: "İki Dost, Tek Soru",
        narration:
          "Kâtip Çelebi kitabını yazarken bir gün evinin avlusunda iki ziyaretçisi oldu. İkisi de yıllardır birbirine küskün, bir konuda zıt görüşleri savunan iki tanıdıktı. Avluya girince aynı anda ona dönüp 'Çelebi Efendi, sen söyle, hangimiz haklıyız?' diye sordular. Kâtip Çelebi iki yüzün de yorgun ve kırgın olduğunu gördü. Aslında ikisi de doğruyu öğrenmek istiyordu, ama içlerinde birbirlerine karşı bir ağırlık taşıyorlardı.\n\nOdasındaki rafları düşündü: Bir yanda hocalarından öğrendikleri, öte yanda yüzlerce kitapta yazılan farklı görüşler. Hangi bilgiyi hangi kaynakla nasıl kontrol edeceğini biliyordu; ama asıl mesele iki dost arasında bir köprü kurmaktı. Güneş avlunun taşlarını ısıtırken çiçeklerin kokusu havaya karıştı. Gönlündeki soru çok basitti ama cevabı çok önemliydi: Burada doğru davranış hangisiydi?",
        speaker: "Kâtip Çelebi",
        dialogue:
          "Önce ikinizi de dinleyeyim, sonra kitaplara bakalım; doğru, bağırarak değil bakarak bulunur.",
        funFact:
          "Kâtip Çelebi taassubun her çeşidine karşı çıkmış, tarih yazarken bile duygularını bir kenara bırakıp tarafsız kalmayı savunmuştur.",
        image: "assets/images/ibn_sina_s1_bukhara_library.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Güneşli bir ev avlusunda yüzleri kırgın iki yetişkin ve ortada ellerini nazikçe açmış bilge kâtip; çiçekler, taş zemin ve küçük bir çeşme, yazı içermeyen sahne.",
        midDecision: {
          title: "ARA KARAR: İki Dost, Tek Soru",
          question:
            "İki kırgın arkadaşın aynı soruyu sana soruyor ve her ikisi de haklı çıkmak istiyor. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Hemen birinin tarafını tutar, haksız bulduğumu sert bir dille susturum.",
              feedback:
                "Hızlı karar vermek kolay görünür, ama dinlemeden hüküm vermek yeni kırgınlıklar doğurur. Kâtip Çelebi tam bunun yanlış olduğunu anlatmak için Mîzânü'l-Hak'ı yazdı.",
              isBestChoice: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "İkisini de sakin sakin dinler, kitaplara bakıp bilgileri karşılaştırır, her ikisine de saygıyla cevap veririm.",
              feedback:
                "Çok doğru! Kâtip Çelebi'nin yolu buydu: önce dinlemek, sonra delilleri tartmak, ardından en doğruya yakın olanı kimseyi küçük düşürmeden söylemek.",
              isBestChoice: true,
            },
          ],
        },
      },
      {
        title: "Hasta Günlerde Açık Kalan Defter",
        narration:
          "Kâtip Çelebi hastalandığı bir dönemde yatağına çekilip hiçbir şey yapmadan beklemek yerine yanına kitaplarını aldı. Mum ışığında tıp kitaplarını açıp hastalığının nedenlerini ve tedavi yollarını kendisi araştırdı. Bir ilaç, bir bitki ya da bir yöntem hakkında yazılmış ne varsa okumaya çalıştı. Çünkü bilmek, korkuyu küçülten en iyi şeylerden biriydi.\n\nAynı günlerde şifa için dua etmeyi de ihmal etmedi; temiz bir kalple edilen duaların insana güç verdiğine inanıyordu. Yatağında doğrulabildiği saatlerde bile oğluna ve öğrencilerine ders vermeyi sürdürdü. Odasında akşamın solgun ışığı, yanında yarım kalmış bir çorba ve açık duran bir defter vardı. Hasta olmak onu tümüyle durdurmuyor, yalnızca biraz yavaşlatıyordu; çünkü okumak ve yazmak onun için yaşama sevincinin en büyük kaynağıydı. Defterinin kenarındaki küçük notlar, en zor günlerde bile aklının uyanık kaldığını gösteriyordu.",
        speaker: "Kâtip Çelebi",
        dialogue:
          "Hastalık bedeni yorabilir; ama öğrenmek ve yazmak, gönlümü ayakta tutan ilacımdır.",
        funFact:
          "Kâtip Çelebi'nin bir oğlu vardı ve ona çeşitli konularda ders verdi; ayrıca birçok öğrenci yetiştirdi. Hastalığında tedavi yollarını öğrenmek için tıp kitaplarını okuduğu da kaynaklarda anlatılır.",
        image: "assets/images/ibn_sina_hospital.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Loş bir odada yatakta doğrulmuş, yanında açık tıp kitabı ve mum olan kâtip; yatağın ucunda küçük bir çocuk elinde defteriyle oturuyor, yazı içermeyen sahne.",
      },
      {
        title: "Mehmed İhlâsî ile Çeviri Masası",
        narration:
          "1654 yılında Kâtip Çelebi'nin çalışma odasına önemli bir konuk geldi: Fransız asıllı, sonradan Müslüman olmuş ve Latince bilen Şeyh Mehmed İhlâsî. Masanın üstünde kalın bir kitap duruyordu: Mercator'un Atlas Minor adlı Avrupa atlası ve Hondius'un eklediği haritalar. Sayfalarında ülkelerin, dağların ve nehirlerin çizimleri, çevresinde Latince açıklamalar vardı. Kâtip Çelebi bu haritaların yeni dünyayı tanımak için bir kapı olduğunu hemen anladı.\n\nİhlâsî Latince satırları Türkçe olarak anlatmaya başladı; Kâtip Çelebi her cümleyi dikkatle tartıp kâğıda döktü. Bazen bir kelimenin anlamını uzun uzun tartıştılar, bazen eski İslam coğrafyacılarının anlattıklarıyla karşılaştırdılar. Ortaya çıkan eser Levâmiu'n-Nûr fî Zulümâti Atlas Minor, yani 'Atlas Minor'un Karanlığında Işık Parıltıları' adını aldı. Bu kuru bir çeviri değil, Kâtip Çelebi'nin açıklama ve eleştirilerle zenginleştirdiği bir çalışmaydı.",
        speaker: "Mehmed İhlâsî",
        dialogue:
          "Çelebi Efendi, Avrupalıların yeni keşfettiği kıyıları bu sayfalarda görüyorsunuz; hepsini birlikte Türkçeye taşıyalım.",
        funFact:
          "Levâmiu'n-Nûr'un Kâtip Çelebi'nin kendi hattıyla yazılmış nüshası bugün Nuruosmaniye Kütüphanesi'nde saklanır. Aynı yardımcıyla Avrupa tarihine dair başka eserleri de Türkçeye çevirdi.",
        image: "assets/images/piri_reis_map.png",
        atmosphere: "WORKSHOP_GEARS",
        visualNote:
          "İki bilginin kalın bir atlas üzerinde başbaşa çalıştığı, masada mum ve kâğıtlar, pencerede kış akşamı; biri sayfayı gösteriyor, diğeri not alıyor, yazı içermeyen sahne.",
      },
      {
        title: "Cihannüma'yı Yeniden Yazmak",
        narration:
          "Kâtip Çelebi Cihannüma'ya ilk kez 1648'de başlamıştı; ancak elindeki eski İslam coğrafya kitapları yalnızca Doğu'nun bir bölümünü, yani Anadolu'nun doğusundan Irak'a uzanan toprakları ayrıntılı anlatabiliyor, dünyanın geri kalanını karanlıkta bırakıyordu. Bir süre umudunu yitirdi. Sonra Atlas Minor ile Ortelius'un Theatrum Orbis Terrarum adlı atlası elinin altına geçince, hem Doğu'nun hem de Batı'nın bilgisini bir araya getirebileceğini fark etti.\n\n1654'ten itibaren Cihannüma'yı baştan yazmaya başladı. Eski Arap, İran ve Osmanlı kaynaklarını yeni Avrupa haritalarıyla yan yana koydu; kitabına son yüzyıllarda keşfedilen ülkeleri ve kıtaları da ekledi. Yalnızca kopya etmedi: Güvendiği kitaplarda bile yanlış gördüğü yerleri düzeltip eleştirdi. Karşısına çıkan her bilgiyi 'Bu doğru mu?' diye tartan bu tavır, onu gerçek bir bilim insanı yapıyordu.",
        speaker: "Kâtip Çelebi",
        dialogue:
          "Doğu'nun bilgisiyle Batı'nın yeni keşiflerini yan yana koymadan dünyanın tam resmini çizemeyiz.",
        funFact:
          "Cihannüma, Kâtip Çelebi'nin ölümünden yaklaşık 75 yıl sonra İbrahim Müteferrika tarafından basıldı (1145/1732) ve Osmanlı'nın dünyaya bakışını genişleten bir kitap oldu.",
        image: "assets/images/islamic_world_atlas_map.png",
        atmosphere: "DAWN_MIST",
        visualNote:
          "Sabahın ilk ışığında pencerenin önünde geniş bir dünya haritasının üzerine eğilmiş kâtip; eski ve yeni haritalar yan yana serili, yazı içermeyen sahne.",
      },
      {
        title: "Gökyüzünden Gelen Soru: Vakitler ve Kıble",
        narration:
          "Atlasları ve haritaları incelerken Kâtip Çelebi'nin aklına ilginç sorular takıldı. Dünya yuvarlaksa, uzak kuzeydeki bazı yerlerde yazın gündüz çok uzun, kışın çok kısa olurdu. Peki o yerlerde namaz ve oruç vakitleri nasıl belirlenirdi? Güneş dünyanın hep aynı yönünden mi doğup batardı? Hatta hangi yöne dönülse kıble sayılabilecek bir yer var mıydı? Geceleri odasında gökyüzüne ve haritalara bakıp bu soruları defalarca düşündü.\n\nBu soruları zamanın bilginlerine fıkıh meselesi olarak sordu; ancak tatmin edici bir cevap alamadı. Bunun üzerine kendisi el-İlhâmü'l-Mukaddes adlı küçük bir risale yazdı. Çünkü ona göre astronomi ve coğrafya bilgisi, evrenin düzenini ve ibadet vakitlerini doğru anlamak için gerekliydi. Kâtip Çelebi bilgiyi ve inancı karşı karşıya getirmedi; ikisini birbirine yaklaştırmaya çalıştı. Soru sormaktan korkmayan bir zihin, karanlık bir gökyüzünde bile yeni yollar bulabilirdi.",
        speaker: "Kâtip Çelebi",
        dialogue:
          "Yıldızlara ve haritalara bakmayan kişi, ibadetin vakitlerini bile düşünürken eksik kalır.",
        funFact:
          "El-İlhâmü'l-Mukaddes'te üç soru sorulur: Gece ile gündüz süreleri çok farklı yerlerde namaz ve oruç vakitleri nasıl belirlenir, güneş her yerde aynı yönden doğup batar mı, her yöne dönülse kıble olabilecek bir yer var mıdır.",
        image: "assets/images/ulug_bey_observatory.png",
        atmosphere: "STARLIT_OBSERVATORY",
        visualNote:
          "Yıldızlı bir gece gökyüzü altında çatıda ellerinde harita ile gökyüzüne bakan kâtip; yanında ışıklı bir lamba ve açık defterler, yazı içermeyen sahne.",
      },
      {
        title: "Mavi Sümbüller ve Yarım Kalan Sayfalar",
        narration:
          "6 Ekim 1657 sabahı Kâtip Çelebi İstanbul'da vefat etti; kırk sekiz yaşındaydı. Zeyrek Camii civarındaki kabristana defnedildi. Arkasında yarım kalmış taslaklar da vardı: Süllemü'l-Vüsûl gibi eserler ve odasında üst üste duran notlar. Fakat onu tanıyanlar, onu 'küçükle küçük, büyükle büyük' olan, az konuşan, cömert ve sakin bir insan olarak anlattılar.\n\nKendisi sümbül yetiştirmeyi severdi; katmerli, salkım salkım mavi sümbüller onun gözdesiydi. Sanki kalemini bıraktığında bile ince bir güzellik arıyordu. Ölümünden yaklaşık yetmiş beş yıl sonra İbrahim Müteferrika Cihannüma'yı bastığında kitap Osmanlı topraklarının dört bir yanına ulaştı; sonraki yüzyıllarda Keşfü'z-Zünûn'dan Avrupalı bilginler de yararlandı. Bir kâtibin çadırlarda ve masa başında yazdığı notlar, dünyanın okuyacağı bir mirasa dönüşmüştü.",
        speaker: "Kâtip Çelebi'nin Öğrencisi",
        dialogue:
          "Hocamız gittiği halde kitapları bizimle konuşmaya devam ediyor; mavi sümbüller bile onu hatırlatıyor.",
        funFact:
          "Kâtip Çelebi'nin çiçek yetiştirmeye düşkün olduğu ve katmerli, salkımlı mavi sümbüller yetiştirdiği bilinir. Keşfü'z-Zünûn ise 19. yüzyılda Avrupa'da yayımlanarak şarkiyatçıların temel başvuru kaynağı oldu.",
        image: "assets/images/fatima_fihri_courtyard.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Güneşli bir avluda mavi sümbüllerin açtığı saksılar, çevresinde kitap taşıyan öğrenciler; arka planda kubbeler ve sakin bir mezarlık duvarı, yazı içermeyen sahne.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Elinde yabancı bir dilde yazılmış çok değerli bir atlas var ama o dili bilmiyorsun. Çevrendekiler eski kitaplarla yetinmeni söylüyor. Aynı zamanda şehirde herkes tartışıyor. Ne yaparsın?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Atlası rafa kaldırırım; eski kitaplar bana yeter.",
          feedback:
            "Kâtip Çelebi bunun tam tersini yaptı: yeni bilgiyi kendi toplumunun yararına kullanmak için aradı ve buldu.",
          isHistoricalTruth: false,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Birkaç sayfaya bakıp tahmin yürütür, gerisini kendi bildiğim gibi yazarım.",
          feedback:
            "Tahminle yazmak hata getirir. Kâtip Çelebi her bilgiyi kontrol ederek ilerledi ve güvenilmeyen yerleri açıkça belirtti.",
          isHistoricalTruth: false,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "Dili bilen güvenilir biriyle birlikte çalışır, her bilgiyi eski kaynaklarla karşılaştırır, hatalı gördüğüm yerleri açıkça not ederim.",
          feedback:
            "Tarihi Hakikat! Kâtip Çelebi Latince bilen Mehmed İhlâsî ile birlikte Atlas Minor'u çevirdi, Doğu ve Batı kaynaklarını karşılaştırdı ve eleştirel bir gözle Cihannüma'yı yeniden yazdı.",
          isHistoricalTruth: true,
        },
      ],
      historicalTruthExplanation:
        "Kâtip Çelebi 1654'te Latince bilen Şeyh Mehmed İhlâsî'nin yardımıyla Mercator'un Atlas Minor'unu Levâmiu'n-Nûr adıyla çevirdi ve Cihannüma'yı yeni bilgilerle baştan yazdı. Son eseri Mîzânü'l-Hak'ta da tartışmaları öfkeyle değil bilgiyle çözmeyi öğütledi.",
      quoteHighlight:
        "Doğruyu seçmek için önce dinlemek, sonra tartmak gerekir.",
    },
    rewardArtifact: {
      id: "artifact-katip-celebi-mizan-atlas",
      name: "Hakkın Terazisi ve Atlas Minor Çeviri Defteri",
      imagePath: "assets/images/islamic_world_atlas_map.png",
      pointType: "BILGELIK",
      pointLabel: "Bilgelik Puanı",
      points: 55,
      unlockedTitle: "Doğruyu Seçen Bilgin",
      shortDescription:
        "Tartışmaları sakin bir terazide ölçen Mîzânü'l-Hak ile Doğu ve Batı'nın haritalarını birleştiren çeviri defteri.",
      historicalNote:
        "Kâtip Çelebi'nin Levâmiu'n-Nûr adlı Atlas Minor çevirisi, Cihannüma'nın Avrupa bölümü için kaynak oldu. Eserin müellif nüshası Nuruosmaniye Kütüphanesi'ndedir.",
      accentColor: "#92400E",
      hotspots: [
        {
          id: "mizan-terazi",
          xPercent: 32,
          yPercent: 42,
          title: "Mîzân: Hakkın Terazisi",
          secretFact:
            "Mîzânü'l-Hak, Kâtip Çelebi'nin yazdığı son eserdir; dönemin tartışmalı konularını öfkeyle değil bilgi ve delille ele alır.",
        },
        {
          id: "atlas-minor-sayfasi",
          xPercent: 66,
          yPercent: 38,
          title: "Atlas Minor Sayfası",
          secretFact:
            "Mercator'un Atlas Minor'u 1654 civarında Mehmed İhlâsî'nin yardımıyla Türkçeye çevrildi; eser Levâmiu'n-Nûr adını taşır.",
        },
        {
          id: "mavi-sumbul",
          xPercent: 50,
          yPercent: 70,
          title: "Mavi Sümbül",
          secretFact:
            "Kâtip Çelebi'nin katmerli, salkımlı mavi sümbüller yetiştirmeyi sevdiği kaynaklarda anlatılır.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Kâtip Çelebi iki kırgın arkadaşı önce dinledi, sonra bilgilere baktı. Siz bir tartışmada karşınızdakini nasıl dinlersiniz?",
      "Kâtip Çelebi bilmediği bir dildeki atlası, bilen bir arkadaşıyla birlikte çevirdi. Yeni bir şeyi tek başınıza öğrenemeyince kimden yardım isteyebilirsiniz?",
      "Eski bilgiyle yeni bilgiyi karşılaştırıp hatalı yerleri düzeltmek neden değerlidir? Günlük hayatınızdan bir örnek verebilir misiniz?",
    ],
  }),
];

export const SEYH_HAMDULLAH_EXTRA_CHAPTERS: StoryChapter[] = [
  // ==========================================================================
  // ŞEYH HAMDULLAH — BÖLÜM 2
  // ==========================================================================
  buildChapter({
    id: "seyh-hamdullah-ch2",
    heroId: "seyh-hamdullah",
    chapterNumber: 2,
    title: "Sülüs ve Nesih: Aklâm-ı Sitte'nin Yenilenmesi",
    subtitle:
      "Yâkût'un yolundan yürüyüp bu topraklara ait yeni bir güzellik bulan kalem",
    estimatedMinutes: 9,
    scenes: [
      {
        title: "Amasya'da Altı Yazının Öğrencisi",
        narration:
          "Amasya'nın dar sokaklarında, medrese avlularında ve kalem atölyelerinde güzel yazı öğrenmek, âdeta bir yaşam biçimiydi. Genç Hamdullah, o günlerde şehrin büyük hat ustalarından Hayreddin Mar'aşî'nin yanında vakit geçiriyordu. Hocası ona yalnızca tek bir yazıyı değil, 'aklâm-ı sitte' denen altı klasik yazıyı öğretiyordu: sülüs, nesih, muhakkak, reyhânî, tevkî' ve rikâ'. Her yazının kendi ölçüsü, kendi nefesi ve kendi kalemi vardı.\n\nHamdullah kalemini hocasının gösterdiği biçimde tutmayı, aynı harfi yüzlerce kez yazıp en küçük sapmayı fark etmeyi, kâğıdın üzerindeki ışığı okumayı öğrendi. Çok çalışkan olduğu için hocasından altı yazıda da icâzet aldı; yani 'artık yazabilir ve öğretebilirsin' izni. Aynı yıllarda babası Mustafa Dede'nin yanında manevi bir eğitim de gördü. Amasya'nın bu sakin öğrencisi, o gün yarının büyük ustası olacağını henüz bilmiyordu; ama kalemini sabırla her sabah yeniden yontuyordu.",
        speaker: "Hayreddin Mar'aşî",
        dialogue:
          "Oğlum, altı yazıyı da öğrenirsen elinin her kıvrımında bir ölçü olur; ama asıl sır sabrındadır.",
        funFact:
          "Aklâm-ı sitte altı klasik yazı demektir: sülüs, nesih, muhakkak, reyhânî, tevkî' ve rikâ'. Şeyh Hamdullah bu altı yazıda hocası Hayreddin Mar'aşî'den icâzet aldı.",
        image: "assets/images/fatima_fihri_courtyard.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Güneşli bir medrese avlusunda yan yana oturmuş hoca ve genç öğrenci; önlerinde kâğıt, kamış kalemler ve hokka, arkada taş revaklar ve çeşme, yazı içermeyen sahne.",
      },
      {
        title: "Yâkût'un Mirası: Bağdat'tan Gelen Altın Çizgi",
        narration:
          "Hamdullah'ın kalemini her gün Bağdat'tan yüzyıllar öncesine uzanan bir iz yönlendirirdi: Yâkût el-Müsta'sımî. On üçüncü yüzyılda yaşamış bu büyük hattat, altı yazının harf oranlarını öyle kusursuz ölçülere oturtmuştu ki, ondan sonraki ustalar yüzyıllarca onun yolundan yürüdüler. Hamdullah'ın Amasya'daki ilk eserleri de Yâkût üslubuyla yazılmıştı. Bir kıtada, bir kitap sayfasında o ince ve dengeli harfler hemen tanınırdı.\n\nGençlik yıllarında Hamdullah, Yâkût'un yazılarını geceler boyu inceledi; harflerin gövdelerini, birbirine uzaklığını ve satırdaki duruşunu gözüyle ölçtü. Fakat bu güzel yazılarda bile kelimeler birbirine biraz mesafeliydi; sanki her harf yalnız yürümek istiyordu. Hocalarından, ustalardan ve Yâkût'tan öğrendiklerini bir hazine gibi saklıyordu ama içinde küçük bir soru büyüyordu: Bu güzellik biraz daha canlı, biraz daha birleşik olabilir miydi? Bunu henüz kimseye söylemedi; yalnızca kalemini biraz daha dikkatle tuttu.",
        speaker: "Genç Hamdullah",
        dialogue:
          "Yâkût'un ölçüsü kusursuz; yine de acaba harfler birbirine biraz daha yakın dursa nasıl olurdu?",
        funFact:
          "Hamdullah'ın başlangıç dönemi eserleri Amasya'da, Yâkût üslubuyla yazılmıştır. Bu devirde Fâtih Sultan Mehmed'in kütüphanesi için istinsah ettiği tıp kitapları da vardır; bunlardan Meṣâliḥu'l-ebdân ve'l-enfüs günümüze ulaşmıştır.",
        image: "assets/images/harizmi_s1_house_of_wisdom.png",
        atmosphere: "JERUSALEM_DUSK",
        visualNote:
          "Akşam ışığında eski bir ilim yuvasının sütunlu salonunda raflar dolusu yazma eserler; masada tek bir kâğıt ve genç bir hattat, yazı içermeyen sahne.",
      },
      {
        title: "Padişahın Daveti: Saraydaki Meşkhâne",
        narration:
          "1481'de Şehzade Bayezid tahta çıkıp II. Bayezid olunca Amasya'daki hocasını unutmadı; ona İstanbul'a gelmesi için davet gönderdi. Hamdullah ailesiyle birlikte uzun yolu aşıp İstanbul'a vardı. Sarayda ona yalnız bir oda değil, mushaf yazabileceği ayrı bir çalışma yeri, yani meşkhâne verildi; bu yer Harem Dairesi civarındaydı. Edirne Sarayı'nda da buna benzer bir çalışma yeri hazırlanmıştı.\n\nPadişah, hattatın yazacağı kâğıtların hazırlanması için de özel bir düzen kurdu: Bir köyün geliri, kâğıtları mühreyle ovup parlatan ustalara ayrıldı. Hamdullah ise sarayda kâtiplere ve hizmetlilere güzel yazı öğretmekle görevliydi. Eserlerinin sonuna 'Sultan Bayezid Han'ın kâtibi' anlamına gelen bir ifade yazmaya başladı. Bir sanatçıya verilebilecek en büyük destek buydu: huzurlu bir oda, güzel kâğıt ve zaman. Hamdullah'ın en güzel eserleri de bu sakin, güvenli çalışma yıllarında ortaya çıktı.",
        speaker: "Sultan II. Bayezid",
        dialogue:
          "Hocam, yazı yazarken sizi hiçbir tasa rahatsız etmesin; kâğıdınız, kalemleriniz ve huzurunuz benden.",
        funFact:
          "II. Bayezid'in 1503–1512 yıllarına ait ihsan defterine göre en yüksek ödemeler, Şeyh Hamdullah'ın yazdığı mushaflar karşılığında yapılmıştır.",
        image: "assets/images/fatih_s2_red_notebook_plan.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Sarayın pencereli aydınlık çalışma odasında, kâğıt yığınları, kalem takımları ve altın hokka; ortada oturmuş yaşlıca bir hattat ve yanında saygıyla duran genç bir hizmetli, yazı içermeyen sahne.",
      },
      {
        title: "Yedi Yâkût Yazısı ve Bir Soru",
        narration:
          "Bir gün Sultan Bayezid hazineden yedi adet Yâkût el-Müsta'sımî yazısı çıkarttırdı ve hocası Hamdullah'ın önüne koydu. Eski kâğıtlardan yükselen harflerin ince geometrisi, sarayın loş ışığında bile ışıldıyordu. Padişah usulca konuştu: Yâkût'un titizlikle yazdıklarını herhalde görmemişsiniz; bu yoldan başka bir vadi açılsaydı ne güzel olurdu. Hamdullah uzun süre sustu ve yazılara baktı.\n\nBu söz bir emir değil, bir davetti. Önünde iki yol vardı: Yâkût'un yazılarını olduğu gibi tekrar etmek ya da onlardan öğrendiği her şeyi taşıyarak yepyeni bir güzelliğe yürümek. Ama kolay bir yol yoktu. Eski ustanın yazısını iyice bilmeden değişiklik yapmak, yıkık bir köprünün üstünde yürümeye benzerdi. Hamdullah kalemini elinde çevirirken içinden bir soru geçti: İlk adım ne olmalıydı? Odanın sessizliğinde yalnızca mumun hafif çıtırtısı duyuluyordu.",
        speaker: "Sultan II. Bayezid",
        dialogue:
          "Yâkût'un yolu çok güzel, hocam; ama bu topraklarda kendi sesimizi taşıyan yeni bir vadi de açılabilir mi?",
        funFact:
          "Kaynaklara göre II. Bayezid, Yâkût'un yedi yazısını hazineden çıkarıp Hamdullah'a vermiş ve 'bu tarzdan başka bir vadi açılsaydı iyi olurdu' demiştir. Ardından Hamdullah kendi üslubunu ortaya koymuştur.",
        image: "assets/images/seyh_hamdullah_calligraphy.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Mum ışığında geniş bir masaya serilmiş yedi eski yazı levhası; hattat ve padişah yan yana eğilmiş bakıyor, yan masada kalemler ve hokka, yazı içermeyen sahne.",
        midDecision: {
          title: "ARA KARAR: İlk Adım Ne Olmalı?",
          question:
            "Sultan sana yedi büyük ustanın yazısını verdi ve yeni bir yol bulmanı istiyor. İlk adımın ne olur?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Eski yazıları kenara bırakıp hemen kendi hayal ettiğim harfleri çizmeye başlarım.",
              feedback:
                "Heyecan güzel, ama ustanın yazısını iyice anlamadan yeni bir yol açmak zordur. Hamdullah önce eskiyi derin biçimde öğrendi.",
              isBestChoice: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Önce yazıları sabırla inceler ve meşk ederim; neyin güzel, neyin geliştirilebilir olduğunu anlayınca yeni oranları denerim.",
              feedback:
                "Çok doğru! Hamdullah eski ustaların güzelliklerini kavrayarak, onları yorumlayıp yeni bir üslup kurdu. Yenilik, eskiyi anlamaktan doğar.",
              isBestChoice: true,
            },
          ],
        },
      },
      {
        title: "Harflerin Kaynaştığı Yeni Üslup",
        narration:
          "Hamdullah aylar boyunca yedi yazıyı yeniden yeniden inceledi, sonra boş kâğıtlara kendi denemelerini yazmaya başladı. Önce harflerin birbirine uzaklığını, kelimelerin satıra oturuşunu ve gövdelerin oranını yeniden ölçtü. Elif'in boyu, nun'un çanağının eğriliği, kelimeler arasındaki boşluk… Her şey tek tek tartıldı. Kâğıdı ışığa tutup satır düzenine bakıyor, kalemi bir milim kaydırıp bakışların nasıl değiştiğine dikkat ediyordu.\n\nSonunda ortaya yeni bir yazı çıktı: Harfler birbirine kaynaşıyor, kelimeler tek gövdeli bir ağaç gibi satırda duruyordu. Hafif sola yatık dik çizgiler yazıya akıcılık ve canlılık veriyor, Yâkût üslubundaki durgunluğu gideriyordu. Ustalar bu yazıya hayranlıkla baktılar ve yıllar sonra güzel yazan her hattat için 'Şeyh gibi yazdı' demek en büyük övgü oldu. Hamdullah kendi üslubunu eskiyi yıkarak değil, eskinin en güzel yanlarını anlayarak kurmuştu.",
        speaker: "Şeyh Hamdullah",
        dialogue:
          "Harfler kelime içinde birbirine yabancı durmasın; bir sofrada oturan dostlar gibi yan yana ısınsın.",
        funFact:
          "Hamdullah üslubunda harfler klasik oranlarını buldu ve kelimeler satırda 'tek bir gövde gibi' durdu. Hamdullah ekolü, kaynaklara göre en uzun yaşayan hat okullarından biri oldu.",
        image: "assets/images/el_cezeri_workshop.png",
        atmosphere: "WORKSHOP_GEARS",
        visualNote:
          "Işık huzmesinin vurduğu çalışma masasında pergel, cetvel, boş kâğıtlar ve kalem takımı; hattatın eli kâğıdı ışığa tutuyor, yazı içermeyen sahne.",
      },
      {
        title: "Mushaf Yazmanın Heybeti",
        narration:
          "Hamdullah için en kutsal iş Kur'an-ı Kerim'i istinsah etmek, yani elle çoğaltmaktı. Mushaf yazacağı günlerde sabah erkenden kalkar, sakin bir kalple masasına otururdu. Önce kalemini yontar, mürekkebini hazırlar, kâğıdın üzerindeki cetveli kontrol ederdi. Çünkü Kur'an'ın tek bir harfinde bile dikkatsizlik olmamalıydı; hem yazının doğruluğu hem de okuyan gözün rahatlığı için her satır özenle düzenlenirdi.\n\nBunun için nesih yazısını geliştirdi: Kolay okunan, sade ve akıcı bir yazı. Satır aralarını, sayfadaki boşlukları ve harflerin kıvrımlarını öyle ölçülü yerleştirdi ki sayfa uzaktan bakıldığında bile huzur veriyordu. Zamanla İslam dünyasında mushaflar çoğunlukla bu nesih tarzıyla yazılır oldu. Kaynaklara göre Hamdullah ömrü boyunca kırk yedi mushaf yazdı; bu sayı bile sabrının büyüklüğünü anlatmaya yeter. Her mushafın sonunda adını yazarken kalemini alçakgönüllülükle indirirdi.",
        speaker: "Şeyh Hamdullah",
        dialogue:
          "Kalem Kur'an'a dokunurken önce kalp temiz, sonra el temiz olmalıdır; sayfa huzur vermeli.",
        funFact:
          "Şeyh Hamdullah'ın kırk yedi mushaf ile yaklaşık bin kadar En'âm, Kehf ve Nebe' sûresi, dua mecmuası, kıta ve murakka yazdığı nakledilir. Bugün müze ve kütüphanelerde ona ait olduğu belirtilen otuz kadar mushaf vardır.",
        image: "assets/images/ibn_sina_s1_bukhara_library.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Sakin bir sabah ışığında rahleye yerleştirilmiş kapalı değerli bir kitap, yanında hokka ve kamış kalemler; huzurlu yüzlü yaşlı hattat saygıyla kitabın karşısında, yazı içermeyen sahne.",
      },
      {
        title: "Padişaha Dikilen Kaftan",
        narration:
          "Sultan Bayezid, hocasına yalnızca hayran değildi; onun ders verdiği öğrencilerin arasındaydı. Yazı meşkini sarayda hocasının huzurunda sürdürdü ve zamanla ondan icâzet aldı. Padişahın bir sanat öğrencisi gibi dizlerinin üstüne kâğıt koyup kalem tuttuğunu gören saray halkı hem şaşıyor hem de bu tevazuya saygı duyuyordu. Hamdullah'ın yetiştirdiği öğrenciler arasında şehzadeler, devlet adamları ve âlimler de vardı.\n\nHamdullah yalnızca kalemle değil, el işiyle de ince bir ustaydı. Kaynaklarda anlatıldığına göre II. Bayezid için ek yerleri belli olmayacak şekilde bir kaftan bile dikmiştir. İğneyi kalem gibi sakin ve hassas tutuyor, dikişleri harflerin ölçülü satırı kadar düzgün sıralıyordu. Padişah kaftanı giydiğinde dikişleri bulmaya çalışıp bulamadı. Böyle bir ustaya duyulan saygı, yalnızca makamdan değil, onun elinin inceliğinden, sabrından ve alçakgönüllülüğünden geliyordu.",
        speaker: "Sultan II. Bayezid",
        dialogue:
          "Hocam, dikişlerinizi bulabilsem de bulamasam da bu kaftanın içinde sizin sabrınızı taşıyorum.",
        funFact:
          "Hamdullah'ın okçuluk ve yüzücülüğünün yanında terzilikte de hüner gösterdiği, II. Bayezid için ek yerleri belli olmayacak şekilde kaftan diktiği kaynaklarda belirtilir. II. Bayezid de ondan icâzet almıştır.",
        image: "assets/images/fatih_kadi_court.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Saray odasında yumuşak kumaşlı bir kaftanı tutan yaşlı usta ve onu hayranlıkla inceleyen genç padişah; masada ince iğne ve ipek kumaşlar, yazı içermeyen sahne.",
      },
      {
        title: "Sekiz Yıllık Sessizlik ve Kanuni'nin Daveti",
        narration:
          "1512'de II. Bayezid'in vefatından sonra Hamdullah sekiz yıl boyunca sessiz bir hayat sürdü. Bu yılları öğrenci yetiştirerek, dua ve ibadetle geçirdi. Kalemi hâlâ yanındaydı; fakat artık yaşlıydı, gözü ve eli eskisi gibi değildi. Öğrencileri her gün ona gelip meşk kâğıtlarını gösteriyor, o da her satırdaki küçük sapmayı gösterip nazikçe düzeltiyordu.\n\nYıllar sonra genç Padişah Kanuni Sultan Süleyman onu saraya çağırdı ve kendisi için bir mushaf yazmasını istedi. Hamdullah yaşlandığını söyledi, artık gereken titizliği gösteremeyeceğini anlattı ve yerine dayısının oğlu Celâlzâde Muhyiddin Amâsî'yi önerdi. Kanuni onun bu alçakgönüllülüğüne saygı duydu; ona bir samur kürk giydirdi ve hayır duasını aldı. Kısa bir süre sonra, 1520'de Hamdullah vefat etti. Arkasında bıraktığı yazılar kadar, kendini bilen ve gururu yenebilen bir ustanın örneği de kaldı.",
        speaker: "Şeyh Hamdullah",
        dialogue:
          "Hünkârım, elim eskisi gibi değil; sanatın hakkını verecek genç bir kalem tavsiye ederim.",
        funFact:
          "Şeyh Hamdullah'ın cenaze namazı Ayasofya Camii'nde kılındı; vasiyeti üzerine Üsküdar'daki Karacaahmet Mezarlığı'na defnedildi. Mezarının çevresi zamanla 'Şeyh Sofası' adını aldı.",
        image: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
        atmosphere: "JERUSALEM_DUSK",
        visualNote:
          "Akşam kızıllığında geniş bir sarayın avlusunda yaşlı bir ustanın genç sultanı nezaketle selamlaması; samur bir kürk, uzakta kubbeler, yazı içermeyen sahne.",
      },
      {
        title: "Şeyh Gibi Yazdı: Yüzyıllara Uzanan Ekol",
        narration:
          "Hamdullah'ın vefatından sonra yüzyıllar boyunca hattatlar onun yolunda yürüdü. Tezkirelerde adı geçen kırk üç öğrencisi arasında oğlu Mustafa Dede ve damadı Şükrullah Halife vardı. Sonra gelen ustalar harfleri biraz daha inceltti, biraz daha ölçülendirdi ama temeli Hamdullah'tan aldılar. İyi yazılmış bir yazı için 'Şeyh gibi yazmış' demek, bir hattatın alabileceği en büyük övgü sayıldı.\n\nAnadolu'da onunla birlikte yedi büyük hat ustası 'Anadolu'nun yedi üstadı' diye anıldı; böylece Yâkût'un yedi ustasına karşılık Osmanlı toprakları da kendi yedilisini bulmuştu. Hamdullah'ın yenilediği sülüs ve nesih, cami kitabelerinde, mushaflarda ve kıtalarda sabah güneşi gibi yayıldı. Bugün çocuklar defterlerine bir başlık yazarken bile onun açtığı yolun çok uzak bir yankısını taşıyor. O yol bize şunu öğretiyor: Yeni bir güzellik bulmak için önce eskiyi sevgiyle tanımak gerekir.",
        speaker: "Bir Hattat Çırağı",
        dialogue:
          "Ustam, yazımı 'Şeyh gibi' derlerse kalbim kuş gibi uçar!",
        funFact:
          "Anadolu'nun yedi hat üstadı (esâtize-i Rûm) arasında Şeyh Hamdullah, oğlu Mustafa Dede, Ahmed Şemseddin Karahisârî ve Celâleddin Amâsî de vardı. Hamdullah ekolü, en uzun yaşayan hat okulları arasında sayılır.",
        image: "assets/images/fatih_s5_golden_horn_dawn.png",
        atmosphere: "DAWN_MIST",
        visualNote:
          "Şafak sisinde Haliç'e bakan eski bir İstanbul çarşısında kubbeler ve minareler; ön planda elinde kâğıt rulosu taşıyan bir çırak, yazı içermeyen sahne.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Yaşlandın; elin ve gözün eskisi gibi değil. Büyük bir hükümdar senden kendisi için bir mushaf yazmanı istiyor; şan, ödül ve ün seni bekliyor. Ne yaparsın?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Yaşlandığımı dürüstçe söylerim ve işi hakkıyla yapabilecek yetenekli bir akrabamı öneririm.",
          feedback:
            "Tarihi Hakikat! Şeyh Hamdullah yaşlandığını söyleyerek Kanuni'ye dayısının oğlu Celâlzâde Muhyiddin Amâsî'yi önerdi; Kanuni onun alçakgönüllülüğüne saygı duyup ona samur kürk giydirdi.",
          isHistoricalTruth: true,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Ödülü kaybetmemek için işi kabul eder, gözümün ve elimin yetmediği yerleri özensiz geçerim.",
          feedback:
            "Kur'an'ı yazmak gibi kutsal bir işte özensizlik olmaz. Hamdullah işin hakkını verememekten çekindi ve dürüst davrandı.",
          isHistoricalTruth: false,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "Hiç kimse benim gibi yazamaz diyerek işi reddeder ve kimseyi önermem.",
          feedback:
            "Hamdullah kendi gururunu değil, sanatın geleceğini düşündü. Yetenekli bir öğrenciyi önermek, ustanın alçakgönüllülüğüdür.",
          isHistoricalTruth: false,
        },
      ],
      historicalTruthExplanation:
        "Kaynaklara göre Kanuni Sultan Süleyman Şeyh Hamdullah'tan mushaf yazmasını istedi; Hamdullah yaşlılığını ileri sürerek dayısının oğlu Celâlzâde Muhyiddin Amâsî'yi önerdi. Kanuni ona samur kürk giydirip duasını aldı. Birkaç ay sonra, 1520'de vefat etti.",
      quoteHighlight:
        "Yâkût'un yolundan yürüyen Hamdullah, yeni bir vadi açtı.",
    },
    rewardArtifact: {
      id: "artifact-seyh-hamdullah-aklam-i-sitte",
      name: "Aklâm-ı Sitte Murakkaı ve Nesih Kalemi",
      imagePath: "assets/images/seyh_hamdullah_calligraphy.png",
      pointType: "IHSAN_MEDENIYET",
      pointLabel: "İhsan ve Medeniyet Puanı",
      points: 55,
      unlockedTitle: "Yeni Vadi Açan Hattat",
      shortDescription:
        "Altı klasik yazıyı öğrenip Yâkût'un mirasından Osmanlı'ya ait yeni bir üslup çıkaran hattatın murakkaı ve kalemi.",
      historicalNote:
        "Topkapı Sarayı Müzesi Kütüphanesi'nde bulunan Hamdullah'ın aklâm-ı sitte murakka'ları, altı yazıdaki gelişimini gösteren en güzel örnekler arasındadır.",
      accentColor: "#B45309",
      hotspots: [
        {
          id: "yakut-yedi-yazi",
          xPercent: 28,
          yPercent: 44,
          title: "Yedi Yâkût Yazısı",
          secretFact:
            "II. Bayezid'in hazineden çıkarıp hocasına verdiği yedi Yâkût yazısı, Hamdullah'ın yeni üslubunu kurmasına ilham verdi.",
        },
        {
          id: "sola-yatik-elif",
          xPercent: 52,
          yPercent: 36,
          title: "Sola Yatık Elif",
          secretFact:
            "Hamdullah üslubunda dik çizgiler hafifçe sola meyillidir; bu yazıya hareket ve canlılık verir.",
        },
        {
          id: "kirk-yedi-mushaf",
          xPercent: 72,
          yPercent: 62,
          title: "Kırk Yedi Mushaf",
          secretFact:
            "Kaynaklara göre Şeyh Hamdullah ömrü boyunca kırk yedi mushaf yazdı ve nesih yazıyı mushaf için en güzel ölçülere kavuşturdu.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Hamdullah yeni bir yol açmadan önce eski ustaların yazılarını sabırla inceledi. Siz yeni bir şey yaparken önce neyi öğrenmek istersiniz?",
      "Hamdullah yaşlanınca Kanuni'ye kendisinin yerine başkasını önerdi. Bir işi yapamayacağınızı dürüstçe söylemek neden güçlü bir davranıştır?",
      "'Şeyh gibi yazdı' sözü bir hattat için büyük övgüydü. Sizin için en değerli övgü hangi söz olurdu?",
    ],
  }),

  // ==========================================================================
  // ŞEYH HAMDULLAH — BÖLÜM 3 (HÂFIZ OSMAN)
  // ==========================================================================
  buildChapter({
    id: "seyh-hamdullah-ch3",
    heroId: "seyh-hamdullah",
    chapterNumber: 3,
    title: "Hafız Osman'a Uzanan Miras: Hat Sanatında Ustadan Çırağa Zincir",
    subtitle:
      "Hamdullah'ın ölümünden yaklaşık 120 yıl sonra doğan ve onun kalemini yeniden canlandıran sabırlı çırak",
    estimatedMinutes: 9,
    scenes: [
      {
        title: "Haseki Mahallesinde Doğan Hâfız",
        narration:
          "Şeyh Hamdullah'ın dünyaya veda edişinin üzerinden yaklaşık yüz yirmi yıl geçmişti. 1642'de İstanbul'da, Haseki Sultan Camii'nin müezzini Ali Efendi'nin evinde küçük bir çocuk dünyaya geldi. Çocuk daha küçükken Kur'an-ı Kerim'i ezberleyip hâfız oldu; bu unvan öyle sevildi ki gerçek adı Osman, herkesin dilinde 'Hâfız Osman' olarak kaldı. Mahalle sakinleri küçük hâfızı sokakta görünce ona tebessümle selam verirdi.\n\nDaha sonra devrin güçlü devlet adamlarından Köprülü Fâzıl Mustafa Paşa'nın dairesinde eğitim ve terbiye gördü. Orada kitapların, kalemlerin ve yazıyla uğraşanların arasında büyürken güzel yazıya ilgi duymaya başladı. Henüz kimse bilmiyordu, ama bu çocuk günün birinde Şeyh Hamdullah'ın yolunu yeniden canlandıracaktı. Hamdullah ile hiç karşılaşmayacaktı; ama onun yazısını sayfalardan, ustalardan ve yıllarca süren meşkten tanıyacaktı.",
        speaker: "Küçük Hâfız Osman",
        dialogue:
          "Annem, hâfız olunca güzel yazı da öğrenebilir miyim? Kalemler bana bir sır gibi geliyor.",
        funFact:
          "Şeyh Hamdullah 1520'de vefat etti, Hâfız Osman ise 1642'de doğdu; aralarında yaklaşık 120 yıl vardır. Hâfız Osman, Hamdullah'ı eserlerinden ve onun yolunu sürdüren hocalarından tanıdı.",
        image: "assets/images/fatih_s5_golden_horn_dawn.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Sabah güneşinde İstanbul'un bir mahalle sokağı, küçük bir caminin önünde ellerinde küçük bir kitapla yürüyen sevimli bir çocuk; arkada kubbe ve minare, yazı içermeyen sahne.",
      },
      {
        title: "Karlı Yolda Yalınayak: Hocaya Giden Çırak",
        narration:
          "Hâfız Osman'ın ilk hocası Derviş Ali'ydi. Bu usta yaşlandığında öğrencisiyle yeterince ilgilenemeyeceğini düşündü ve onu yetiştirdiği hattatların en seçkini sayılan Suyolcuzâde Mustafa Eyyûbî'ye göndermeye razı oldu. Eyüp semti Haseki'den oldukça uzaktı. Rivayete göre Osman, karlı bir kış sabahı Haseki'den Eyüp'e kadar yalınayak yürüyerek derse gitti.\n\nKar ayaklarını üşütüyor, Haliç'ten gelen rüzgâr yüzünü yalıyordu; ama Osman durmadı. Eyüp Sultan'ın kubbelerini uzaktan görünce yorgunluğunu unuttu. Kapıdan girdiğinde hocası onun yüzündeki kararlılığı gördü. Bu azim, Suyolcuzâde'nin ona duyduğu sevgiyi ve takdiri daha da artırdı. Hat sanatında bir ustaya ulaşmak, yalnızca yetenekle değil, bu türden sabır ve edeple mümkündü. O gün Osman, mürekkepten önce yolun sabrını öğrenmişti.",
        speaker: "Suyolcuzâde Mustafa Eyyûbî",
        dialogue:
          "Bu kadar yolu kar altında yürüyen çocuğun kalemi de bir gün her zorluğu eritir.",
        funFact:
          "Rivayete göre Hâfız Osman bu yolu yalınayak yürüdü. Haseki'den Eyüp'e uzanan yol bugün bile yaklaşık altı kilometreye yakın uzun bir yürüyüştür.",
        image: "assets/images/yunus_emre_straight_wood.png",
        atmosphere: "DAWN_MIST",
        visualNote:
          "Karlı kış sabahında Haliç yakınında kapıya doğru yürüyen genç bir çırak; kapıda onu sevecen bir bakışla bekleyen yaşlı bilge hoca, yazı içermeyen sahne.",
      },
      {
        title: "On Sekiz Yaşında İcâzet",
        narration:
          "Yıllar geçti. Osman her gün meşk kâğıtlarını doldurdu, hocası hatalı yerleri işaretledi, o da ertesi gün aynı satırı daha güzel yazdı. Nihayet on sekiz yaşındayken büyük gün geldi: Hocası ona icâzet verdi. İcâzet, bir öğrencinin yazısının artık usta tarafından onaylandığını, kendi adıyla imza atıp başkalarına da öğretebileceğini gösteren bir belgeydi. Çoğu zaman bu belgede hocadan geriye doğru uzanan ustalar silsilesi de yazılırdı.\n\nOsman o gün hocasının elini öptü; ama sevinirken bile kalemini yere koymadı. Çünkü icâzetin bir bitiş değil, yeni bir sorumluluk olduğunu biliyordu: Ona verilen unvan, binlerce harfin ve yüzlerce yıllık emeğin sırtına yüklenmişti. 'Artık yazabilirsin' sözü aslında 'artık daha dikkatli yazmalısın' demekti. Odasına döndüğünde ilk işi, gururla değil alçakgönüllülükle yeni bir sayfa açıp yeniden elif harfini yazmak oldu.",
        speaker: "Suyolcuzâde Mustafa Eyyûbî",
        dialogue:
          "Bu icâzet sana bir unvan değil, bir emanet veriyor evladım; kalemini hep böyle diri tut.",
        funFact:
          "Hâfız Osman 18 yaşında (yaklaşık 1660) icâzet aldı. Hat sanatında icâzet, bir hattatın usta tarafından 'yazıda yetiştin' diye onaylanması demekti.",
        image: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Güneşli bir medrese avlusunda yaşlı hoca ve genç öğrencinin başbaşa durup sarılı bir kâğıt tomarını gururla incelemesi; çevrede güvercinler, taş revaklar, yazı içermeyen sahne.",
      },
      {
        title: "Şöhret mi, Yeniden Elifba mı?",
        narration:
          "İcâzetini alan genç Osman'ın yazısı artık İstanbul'da herkesin dilindeydi. Meraklılar ona yaptırmak istedikleri levhaları getiriyor, arkadaşları yazısına hayranlık gösteriyordu. Kolay bir yol vardı: Bildiğiyle yetinmek, ders vermek ve ününün tadını çıkarmak. Ama Osman bir akşam Şeyh Hamdullah'ın sarayda saklanan mushafını incelerken durdu. Harflerdeki zarafet, kendi harflerinde henüz yoktu.\n\nBiliyordu ki Hamdullah üslubunu en iyi bilen kişi o dönemde Nefeszâde Seyyid İsmâil Efendi'ydi. Ancak onun yanına giderse yeniden en baştan, elifbâ meşkinden, yani tek tek harf alıştırmalarından başlaması gerekecekti. İcâzetli bir hattatın yeniden öğrenci olması kolay bir şey değildi. Mum ışığında ellerine baktı, kalemi parmaklarının arasında durdu. Gururunu mu koruyacaktı, yoksa güzelliğin kaynağına yürümek için bir kez daha başa mı dönecekti?",
        speaker: "Hâfız Osman",
        dialogue:
          "İcâzet bana yol gösterdi; ama güzelliğin kaynağına yürümek için bir kez daha başlangıca dönmeliyim.",
        funFact:
          "Hâfız Osman, Şeyh Hamdullah üslubunu öğrenmek için Nefeszâde Seyyid İsmâil Efendi'nin yanında elifbâ meşkinden yeniden başladı. Hamdullah'ın saraydaki mushafını taklit ederek de yıllarca çalıştı.",
        image: "assets/images/fatih_s2_red_notebook_plan.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Mum ışığında masanın başında düşünceli bir genç hattat; önünde eski bir sayfa ve boş bir kâğıt, kalem elinde bekliyor, yazı içermeyen sahne.",
        midDecision: {
          title: "ARA KARAR: İcâzetten Sonra Yeniden Öğrenci mi?",
          question:
            "Sen de bir sanatta ustalık belgesi aldın. Daha büyük bir ustanın üslubunu öğrenmek için baştan başlaman gerekiyor. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Gururu bırakır, o ustaya gidip en baştan alıştırmalara başlarım.",
              feedback:
                "Çok doğru! Hâfız Osman icâzetli olmasına rağmen yeniden elifbâ meşkine başladı; gerçek ustalık, öğrenmeyi hiç bırakmamaktır.",
              isBestChoice: true,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Zaten icâzetim var; kendi bildiğim yolda ders vermeye devam ederim.",
              feedback:
                "İcâzet değerli bir belgedir, ama Hâfız Osman onun bitiş değil başlangıç olduğunu biliyordu ve öğrenmeye devam etti.",
              isBestChoice: false,
            },
          ],
        },
      },
      {
        title: "Taklit Ederken Bile Dürüstlük",
        narration:
          "Sarayda saklanan Şeyh Hamdullah mushafı Hâfız Osman'ın en değerli öğretmenlerinden biri oldu. Sayfaları uzun uzun inceledi, harflerin eğimini, nokta aralıklarını ve satırların nefesini gözleriyle ezberledi. Sonra kendi kâğıdına aynı sayfayı yazmaya başladı. Hat sanatında buna taklit denir; bir ustanın yazısını aynen yazabilmek, hattatın kendi imzasını bir yana bırakıp ustaya hizmet etmesi demektir. Meşk için çok değerli bir yöntemdi.\n\nAma Hâfız Osman'ı ayıran bir özellik vardı: Hamdullah'ı en usta biçimde taklit ettiği sayfaların altına bile kendi adını yazdı. Çünkü o yazıyı kimseye 'Şeyh'in eseri' diye göstermeyecekti. Başka kimselerin yazdığı taklitlerin zamanla gerçeklerinden ayırt edilmesi güçleşirken onun dürüst imzası, öğrencinin ustaya duyduğu saygının ve kendi emeğine verdiği değerin işaretiydi. Hâfız Osman hat sanatının inceliklerini kadar dürüstlüğü de aynı kalemle öğreniyordu.",
        speaker: "Hâfız Osman",
        dialogue:
          "Usta Hamdullah'ın yazısını ne kadar benzetirsem benzeteyim, altına kendi adımı yazarım; çünkü doğruluk güzel yazıdan önce gelir.",
        funFact:
          "Hâfız Osman olgunluk döneminde bile Şeyh Hamdullah'ı taklit ettiği yazıların altına kendi imzasını koyarak ona verdiği kıymeti gösterdi. Hat sanatında 'taklit', öğrenmek için bir ustanın yazısını aynen yazabilme hüneridir.",
        image: "assets/images/seyh_hamdullah_calligraphy.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Gün ışığı vuran bir çalışma odasında eski bir mushaf sayfasının yanında yazı meşk eden genç hattat; masada hokka ve kalem takımı, yazı içermeyen sahne.",
      },
      {
        title: "1679: Kendi Sesini Bulan Kalem",
        narration:
          "Yıllar boyunca Hâfız Osman Hamdullah'ın izinden yürüdü; sülüsü, nesihi ve diğer yazıları defalarca denedi. Sonunda 1679 yılında, otuz yedi yaşındayken, kendi üslubunu buldu. Tıpkı Hamdullah'ın Yâkût'un güzelliğini yorumlayarak kendi yolunu çizmesi gibi, Hâfız Osman da Hamdullah'ın güzelliğini yorumladı; harflerdeki fazlalıkları süzdü, çizgileri berraklaştırdı. Yazısı daha sade, daha dingin ve daha dengeliydi.\n\nBaşta bazı hattatlar bu yeni üslubu eleştirdi, hatta kıskandı. Ama gözler hızla alıştı: Sayfalarına bakan her sanatsever, bir şeyin yerine oturduğunu hissediyordu. 1679'dan 1689'a kadar geçen on yıl Hâfız Osman'ın en beğenilen dönemi sayılır. Sonraki yıllarda nesih harflerini biraz daha küçülttü. Bir sanatçının büyümesi önce ustasını sevmesiyle, sonra onu anlamasıyla ve nihayet kendi sesini bulmasıyla gerçekleşmişti. Osmanlı hat sanatı da böylece süzülüp arınarak yoluna devam etti.",
        speaker: "Hâfız Osman",
        dialogue:
          "Ustamı sevdim, onu öğrendim; şimdi onun öğrettiği ölçüyle kendi nefesimi yazıya katıyorum.",
        funFact:
          "Hâfız Osman 1679'da kendi üslubunu buldu; en parlak dönemi 1679–1689 arasındaki on yıldır. Üslubu kısa sürede o kadar benimsendi ki Şeyh Hamdullah üslubunu unutturdu.",
        image: "assets/images/el_cezeri_workshop.png",
        atmosphere: "WORKSHOP_GEARS",
        visualNote:
          "Atölyede pencere ışığında iki farklı yazı sayfasını yan yana koyup inceleyen olgun bir hattat; masada pergel, cetvel ve ince kalemler, yazı içermeyen sahne.",
      },
      {
        title: "Yol Kenarında Tekrarlanan Ders",
        narration:
          "Hâfız Osman evinde ders verirken pazar günlerini yoksul çocuklara, çarşamba günlerini ise varlıklı ailelerin çocuklarına ayırırdı; hiçbirinden ücret istemezdi. Öğrencileri hem harfleri hem de sabrı öğrenirdi. Ders başlarken önce herkes meşk kâğıdını yerleştirir, kalemlerini yontar, hocanın yazdığı örneğe bakardı. Her satır bir öncekinden biraz daha güzel olana kadar tekrar edilirdi.\n\nRivayete göre bir gün, dersi bitip yola çıkan Hâfız Osman Cerrahpaşa Hamamı yakınında öğrencilerinden birine rastladı. Çocuk geç kaldığı için derse yetişememişti ve nedenini utanarak anlattı. Hocası gülümseyip yol kenarına oturdu ve dersi orada, açık havada yeniden anlattı. Hâfız Osman bir ömür boyunca yaklaşık elli hattat yetiştirdi; sabrı, öğrencilerinin kalemlerine geçti. Ustanın kalemi artık onlarda yaşıyordu ve bu zincir dönemin en büyük sanat mirası haline geliyordu.",
        speaker: "Hâfız Osman",
        dialogue:
          "Evladım, geç kaldıysan üzülme; ders yarım kalmaz, ben sana yolun kenarında tamamlarım.",
        funFact:
          "Hâfız Osman'ın yetiştirdiği hattatlardan elli kadarının adı bilinir. Hat silsilesi bu öğrencileri yoluyla iki ayrı koldan günümüze kadar ulaşmıştır.",
        image: "assets/images/fatima_fihri_courtyard.png",
        atmosphere: "FEZ_COURTYARD",
        visualNote:
          "Avluda yan yana oturmuş çocuklar ve ortada sıcak bir gülümsemeyle ders anlatan hoca; yan tarafta taş çeşme, çiçekler ve güneş ışığı, yazı içermeyen sahne.",
      },
      {
        title: "Hac Yolunda Bile Kalem",
        narration:
          "1677'de Hâfız Osman hac için Hicaz'a doğru yola çıktı. Aylar süren bu yolculukta develerin çanları, çölün sıcağı ve uzun menzillerin yorgunluğu arasında bile kalemini elinden bırakmadı. Bir menzilde karalama yaptı, bir başkasında bir cüzden satırlar yazdı; elinin melekesini kaybetmemek için her durağı küçük bir meşkhâneye çevirdi. İstanbul dışında yazdığı yazıların altına bulunduğu yeri de not etti.\n\nHayatı boyunca yirmi beş mushaf yazdı. 1686'da yazdığı mushafı, 1881'de basılarak İslam dünyasına dağıtıldı. Ölümünden üç dört yıl önce felç geçirdi ama tedaviyle hastalığı hafif atlattı; şaşırtıcı olan, yazılarında hiçbir gerileme görülmemesiydi. Çünkü kalemiyle kurduğu bağ, bedeninin yorgunluğundan daha güçlüydü. Mürekkebi ve kâğıdıyla her gün aynı ritmi sürdürdü; sabır, ona yalnızca bir erdem değil, bir yaşam biçimi olmuştu.",
        speaker: "Hâfız Osman",
        dialogue:
          "Develer yürürken bile elim kalem tutsun; çünkü elin hafızası bir günlük aradan bile uyuşur.",
        funFact:
          "Hâfız Osman 1659'dan ölümüne kadar yirmi beş mushaf yazdı. 1686 tarihli mushafı, 1881'de II. Abdülhamid'in emriyle basılarak İslam dünyasına dağıtıldı.",
        image: "assets/images/battuta_s1_tangier_departure.png",
        atmosphere: "DESERT_CAMPFIRE",
        visualNote:
          "Hac yolunda gece konaklayan bir kervan; kamp ateşinin ışığında bir köşede küçük bir lamba altında kalemle yazan bir hattat, yazı içermeyen sahne.",
      },
      {
        title: "Hokka Tutan Padişah, Kalemi Yaşatan Çırak",
        narration:
          "1695'te Sultan II. Mustafa Hâfız Osman'ı hüsn-i hat hocası olarak atadı; şehzadeliği sırasında sonraki III. Ahmed de ondan ders almıştı. Rivayete göre ders günlerinde padişah hocasının yanına oturur, meşk kâğıdını hazırlarken mürekkep hokkasını kendi elinde tutardı. Bir gün sultan hayranlıkla 'Artık bir Hâfız Osman yetişmez' dedi. Hâfız Osman tebessümle cevap verdi.\n\n'Efendimiz gibi hocasına hokka tutan padişahlar geldikçe daha çok Hâfız Osman'lar yetişir, hünkârım.' Bu sözün haklılığı yıllar içinde görüldü: 1698'de vefat ettiğinde öğrencileri onun kalemini taşımaya devam ettiler; Sünbül Efendi Dergâhı hazîresindeki mezar taşının celî sülüs kitâbesini meslektaşı Ağakapılı İsmâil Efendi yazdı: 'Hüsn-i hattı biz bildik, Osman Efendimiz yazdı.' Yâkût'tan Hamdullah'a, Hamdullah'tan Hâfız Osman'a uzanan zincir, her yeni çırakla bir halka daha ekledi.",
        speaker: "Sultan II. Mustafa",
        dialogue:
          "Hocam, sizin gibi bir usta bir daha yetişmez; ben sizin hokkanızı tutmaktan şeref duyarım.",
        funFact:
          "Hâfız Osman 3 Aralık 1698'de vefat etti ve Sünbül Efendi Dergâhı hazîresine defnedildi. Celî sülüste devrim yapan Mustafa Râkım, bu başarıyı Hâfız Osman'ın sülüsünden aldığı ilhamla gerçekleştirdi.",
        image: "assets/images/fatih_kadi_court.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Sarayda altın ışıkta yaşlı hattatın yanında diz çöküp ona hokkayı saygıyla tutan genç padişah; masada kamış kalemler ve meşk kâğıdı, yazı içermeyen sahne.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Ustan Şeyh Hamdullah'ın yazısını çok seviyorsun. Herkes seni zaten iyi bir hattat sayıyor. Ustanın kalemini yaşatmak için ne yaparsın?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Hamdullah'ın bir sayfasını aynen yazar, altına onun adını koyup sanki o yazmış gibi gösteririm.",
          feedback:
            "Bu bir sanat değil, yanıltmadır. Hâfız Osman Hamdullah'ı taklit ettiği sayfaların altına bile kendi imzasını koydu.",
          isHistoricalTruth: false,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Ustanın yazısını sabırla meşk eder, dürüstçe kendi imzamı atar, yıllar sonra öğrendiklerimi yorumlayıp öğrencilere karşılıksız öğretirim.",
          feedback:
            "Tarihi Hakikat! Hâfız Osman Hamdullah'ı taklit ederek yıllarca çalıştı, altına kendi adını yazdı, 1679'da kendi üslubunu buldu ve yaklaşık elli öğrenci yetiştirdi.",
          isHistoricalTruth: true,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "Şöhretim yeter; çalışmayı bırakır, başkalarının benim yerime çalışmasını beklerim.",
          feedback:
            "Hâfız Osman ömrünün sonuna kadar, hasta olduğunda ve yolculukta bile kalemi elinden bırakmadı. Sabır ve süreklilik ustalığın sırrıdır.",
          isHistoricalTruth: false,
        },
      ],
      historicalTruthExplanation:
        "Hâfız Osman (1642–1698), Şeyh Hamdullah'ın mushafını taklit ederek çalıştı, yazılarının altına kendi imzasını koydu ve 1679'da kendi üslubunu buldu. Öğrencilerine ücret almadan ders verdi; yetiştirdiği hattatlardan elli kadarının adı bilinir.",
      quoteHighlight:
        "Hocasına hokka tutan padişahlar geldikçe daha çok Hâfız Osman'lar yetişir.",
    },
    rewardArtifact: {
      id: "artifact-seyh-hamdullah-icazet-zinciri",
      name: "İcâzetname Tomarı ve Zincirin Kalemi",
      imagePath: "assets/images/yunus_emre_straight_wood.png",
      pointType: "BILGELIK",
      pointLabel: "Bilgelik Puanı",
      points: 55,
      unlockedTitle: "Zincirin Halkası",
      shortDescription:
        "Ustadan çırağa, çırağdan yeni ustaya uzanan hat silsilesinin sembolü olan tomar ve kalem.",
      historicalNote:
        "Hâfız Osman'ın yetiştirdiği hattatlar yoluyla hat silsilesi iki ayrı koldan günümüze ulaşmıştır; bu bakımdan başka bir hattat onunla kıyaslanamaz.",
      accentColor: "#B45309",
      hotspots: [
        {
          id: "karli-yolun-izi",
          xPercent: 28,
          yPercent: 66,
          title: "Karlı Yolun İzi",
          secretFact:
            "Rivayete göre genç Osman, karlı bir günde Haseki'den Eyüp'e yalınayak yürüyerek hocasının dersine gitti.",
        },
        {
          id: "icazet-silsilesi",
          xPercent: 52,
          yPercent: 38,
          title: "İcâzet Silsilesi",
          secretFact:
            "Hâfız Osman 18 yaşında icâzet aldı; icâzetnâmelerde çoğu zaman ustaların birbirine bağlandığı bir silsile yazılırdı.",
        },
        {
          id: "padisahin-hokkasi",
          xPercent: 74,
          yPercent: 54,
          title: "Padişahın Tuttuğu Hokka",
          secretFact:
            "Rivayete göre padişah, hocasının yanında oturup mürekkep hokkasını elinde tutarak ona saygı gösterirdi.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Hâfız Osman icâzet aldıktan sonra bile baştan elifbâ meşkine başladı. Siz bir konuda uzman olduktan sonra yeniden öğrenci olmayı ister misiniz?",
      "Hâfız Osman taklit ettiği yazıların altına kendi imzasını koydu. Başkasının emeğini kendi adınıza çıkarmak neden yanlıştır?",
      "Ustadan çırağa geçen bir bilgi zinciri sizin ailenizde ya da çevrenizde var mı? Kimden ne öğrendiniz, kime ne öğretirsiniz?",
    ],
  }),
];
