import { buildChapter } from "../storyBuilders";
import { StoryChapter } from "../storyTypes";

export const EVLIYA_CELEBI_CHAPTERS: StoryChapter[] = [
  buildChapter({
    id: "evliya-celebi-ch1",
    heroId: "evliya-celebi",
    chapterNumber: 1,
    title: "Bir Rüyayla Başlayan 50 Yıllık Seyahatname",
    subtitle:
      "Unkapanı'nda büyüyen meraklı bir gencin, 10 ciltlik dev Seyahatname'ye dönüşen elli yıllık yolculuğu.",
    estimatedMinutes: 9,
    scenes: [
      {
        title: "Unkapanı'nda Kuyumcu Dükkânı ve Hikâyeler",
        narration:
          "1611 yılında İstanbul'un Unkapanı semtinde dünyaya gelen Evliya Çelebi, çocukluğunu saray başkuyumcusu olan babası Derviş Mehmed Zıllî Efendi'nin atölyesinde geçirdi. Altın ve gümüş kakmaların çekiç sesleri arasında büyürken, babasının dostlarından uzak diyarların, kalelerin ve denizlerin hikâyelerini dinleyerek hayallere dalardı.\n\nHenüz küçük bir çocukken bile sokak aralarındaki çeşmelerin kitabelerini okur, çarşıdaki esnafın hangi loncaya bağlı olduğunu merakla defterine not ederdi. Enderun Mektebi'nde musiki, hüsn-i hat ve Kur'an tilaveti eğitimi alırken bile pencereden Haliç'teki yelkenlileri izliyor, İstanbul surlarının ötesindeki dünyayı kendi gözleriyle görmenin özlemini çekiyordu.",
        speaker: "Genç Evliya Çelebi",
        dialogue:
          "Babacığım, altın işlemeli bu kalkanların gittiği uzak kaleleri ve şehirleri bir gün kendi adımlarımla ölçüp defterime yazabilecek miyim?",
        funFact:
          "Evliya Çelebi'nin babası Derviş Mehmed Zıllî Efendi, Kâbe'nin altın oluklarını ve İstanbul'daki pek çok caminin sanatlı kilitlerini yapan saray başkuyumcusuydu.",
        image: "assets/images/katip_celebi_books.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Unkapanı'ndaki kuyumcu atölyesinde altın ışıklar altında babasını dinleyen ve küçük defterine notlar alan genç Evliya Çelebi.",
      },
      {
        title: "Ahi Çelebi Camii'ndeki Unutulmaz Rüya",
        narration:
          "Yirmi yaşına bastığı 1630 yılının Muharrem ayında, bir gece uykusunda kendisini Eminönü'ndeki Ahi Çelebi Camii'nin nurlu kubbesi altında gördü. Rivayete göre caminin içi bembeyaz cemaatle doluydu ve heyecandan dili tutulan Evliya, 'Şefaat ya Resulallah' demek isterken dil sürçmesiyle 'Seyahat ya Resulallah!' deyiverdi.\n\nSabah uyandığında kalbi kuş gibi çırpınıyordu; bu rüyayı dönemin âlimlerine tabir ettirdiğinde, kendisine ömrü boyunca dünyayı dolaşıp gördüklerini yazacağı müjdelendi. Evliya Çelebi, o sabah deri kaplı ilk gezi defterini, kamış kalemini ve mürekkep hokkasını heybesine yerleştirerek hayatının en büyük sözünü verdi.",
        speaker: "Evliya Çelebi",
        dialogue:
          "Dilim sürçtü ama gönlümün muradı ortaya çıktı! Bundan böyle gördüğüm her taşı, her insanı ve her iyiliği gelecek nesiller için kayda geçireceğim.",
        funFact:
          "Evliya Çelebi'nin 'Şefaat' yerine 'Seyahat' dediği bu meşhur rüya, Türk edebiyatının en ünlü gezi eseri olan 10 ciltlik Seyahatname'nin başlangıç noktası kabul edilir.",
        image: "assets/images/omer_s1_medina_patrol.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Eminönü sahilinde gece fenerleriyle aydınlanan tarihi Ahi Çelebi Camii ve sabah şafağında heybesini hazırlayan genç seyyah.",
      },
      {
        title: "İlk Adım: Önce Kendi Şehrini Tanımak",
        narration:
          "Birçok gezgin yolculuğa hemen uzak ülkelerden başlamak isterdi; fakat Evliya Çelebi çok daha akıllıca bir yöntem seçti. 'Kendi evinin kapısını tanımayan, başka diyarların sırrını çözemez' diyerek ilk on yılını adım adım İstanbul'u gezerek, mahallelerini ve esnaf loncalarını inceleyerek geçirdi.\n\nSüleymaniye'nin kubbelerinden Galata'nın dar sokaklarına, Eyüp Sultan'ın çınarlarından Boğaziçi'nin balıkçı köylerine kadar her köşeyi dolaştı. Fırıncıların, terzilerin, haritacıların ve hekimlerin geçit törenlerini saatlerce izleyip İstanbul'un binlerce dükkânını, hamamını ve kütüphanesini birinci cildine tek tek işledi.",
        speaker: "Evliya Çelebi",
        dialogue:
          "Uzak çöllere ve karlı dağlara at sürmeden önce, doğduğum bu eşsiz şehrin her sokağını, her çeşmesini ve her zanaatkârını defterime nakşetmeliyim.",
        funFact:
          "Seyahatname'nin 1. cildi tamamen İstanbul'a ayrılmıştır ve 17. yüzyıldaki yüzlerce meslek grubunu anlatan eşsiz bir tarih hazinesidir.",
        image: "assets/images/evliya_celebi_seyahatname.png",
        atmosphere: "DAWN_MIST",
        visualNote:
          "Sabah sisleri içinde Haliç ve İstanbul kubbelerine tepeden bakan, elinde deri defteriyle notlar alan Evliya Çelebi.",
      },
      {
        title: "Bursa Yolunda İlk Büyük Sınav",
        narration:
          "1640 yılında nihayet İstanbul dışındaki ilk uzun yolculuğuna çıkarak Bursa'ya, oradan da Trabzon ve Kırım yönüne doğru at sürdü. Ulu Dağ'ın eteklerindeki taş hanlarda konaklarken, gittiği şehirlerde yalnızca sarayları ve kaleleri değil; halkın konuştuğu kelimeleri, pişirdiği çorbaları ve çocukların oynadığı oyunları da gözlemliyordu.\n\nAncak yeni bir şehre girdiğinde önünde önemli bir yöntem seçimi belirdi: Acaba sadece valilerin verdiği resmi rakamları mı yazmalıydı, yoksa çarşıya inip yaşlı ustalarla, yolcularla ve halkla bizzat konuşarak her bilgiyi yerinde mi ölçmeliydi?",
        speaker: "Han Kervancısı",
        dialogue:
          "Ey genç kâtip, konağın sıcak odasında oturup kâtiplerden dinlemek varken neden yağmur altında çarşıyı adım adım arşınlıyorsun?",
        funFact:
          "Evliya Çelebi gittiği bölgelerde yaklaşık 30'dan fazla farklı dil ve lehçeden günlük kelimeleri, sayıları ve selamlaşma biçimlerini derlemiştir.",
        image: "assets/images/yunus_emre_straight_wood.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Bursa'da ulu çınarların altındaki taş handa esnafla ve yolcularla sohbet edip ölçüm yapan Evliya Çelebi.",
        midDecision: {
          title: "ARA KARAR: Gerçek Bir Seyyah Nasıl Not Tutar?",
          question:
            "Yeni bir şehre vardığında defterinin gelecek yüzyıllara ışık tutması için hangi araştırma yöntemini seçersin?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Yorulmamak için sadece konaktaki görevlilerin anlattığı kısa özetleri yazıp hemen diğer şehre geçerim.",
              feedback:
                "Başkalarının özetleriyle yetinmek, şehrin gerçek ruhunu, insanlarını ve kültürünü kaçırmana neden olur.",
              isBestChoice: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Surları kendi adımlarımla ölçer, çarşıdaki ustaları dinler, kütüphaneleri gezer ve halkın kültürünü yerinde kayıt altına alırım.",
              feedback:
                "Harika seçim! Evliya Çelebi kalelerin çevresini bizzat adımlayarak ölçmüş ve halkın günlük yaşamını yerinde gözlemleyerek ölümsüzleştirmiştir.",
              isBestChoice: true,
            },
          ],
        },
      },
      {
        title: "Adımlarla Ölçülen Kaleler ve Köprüler",
        narration:
          "Evliya Çelebi, bir kalenin veya taş köprünün büyüklüğünü anlatırken tahmini sözlerle yetinmezdi; atından iner, surların etrafını sabırla adımlayarak kaç bin adım geldiğini tek tek sayardı. Mostar Köprüsü'nün kemer yüksekliğinden Diyarbakır surlarının burç sayısına kadar her mimari eseri bir mühendis dikkatiyle inceledi.\n\nGittiği şehirlerdeki darüşşifaları yani hastaneleri ziyaret ettiğinde, hastaların neyle tedavi edildiğini, bahçedeki şifalı bitkileri ve vakıf aşevlerinde günde kaç kazan çorba kaynadığını büyük bir hayranlıkla kaleme aldı.",
        speaker: "Evliya Çelebi",
        dialogue:
          "Bir şehrin gerçek büyüklüğü sadece yüksek surlarıyla değil; yoksuluna, yolcusuna ve hastasına açtığı şefkat kapılarıyla ölçülür!",
        funFact:
          "Evliya Çelebi, Mostar Köprüsü'nü gökyüzündeki gökkuşağına benzetmiş ve köprüden nehre atlayan cesur gençleri ayrıntılarıyla anlatmıştır.",
        image: "assets/images/cezeri_s1_artuklu_palace.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Taş kemerli tarihi bir köprü ve kale burçları önünde adımlarını sayarak çizim yapan Evliya Çelebi.",
      },
      {
        title: "Otuzdan Fazla Dilde Dostluk Köprüsü",
        narration:
          "Yolculukları Kafkas dağlarından Balkan ovalarına, Arap çöllerinden Orta Avrupa'ya uzandıkça Evliya Çelebi bambaşka kültürlerle karşılaştı. Hiçbir topluluğa tepeden bakmadı; aksine uğradığı her kasabada o dilin 'ekmek', 'su', 'dost' ve 'merhaba' kelimelerini öğrenip defterinin kenarına sözlükler hazırladı.\n\nİnsanlarla kendi dillerinde selamlaştığında en sert kapıların bile tebessümle açıldığını gördü. Onun tatlı dili, hazırcevaplığı ve musiki bilgisi, en uzak diyarlarda bile kendisine sofralar kurulmasını ve dostluklar kazanılmasını sağlıyordu.",
        speaker: "Evliya Çelebi",
        dialogue:
          "Bir insanın dilinden bir kelime öğrenmek, onun gönül sarayının kapısını açan altın bir anahtar bulmak gibidir.",
        funFact:
          "Seyahatname'de Kafkas dillerinden Almancaya, Rumcadan Nubye dillerine kadar birçok dilin 17. yüzyıldaki en eski kelime listeleri yer alır.",
        image: "assets/images/battuta_s1_tangier_departure.png",
        atmosphere: "DESERT_CAMPFIRE",
        visualNote:
          "Farklı coğrafyalardan insanlarla kervansaray ateşinin etrafında gülümseyerek sohbet eden ve kelime notları alan seyyah.",
      },
      {
        title: "Fırtınalar, Kış Geçitleri ve Korunan Defterler",
        narration:
          "Elli yıl süren bu dev yolculuk her zaman güllük gülistanlık geçmedi; Karadeniz'de gemisi fırtınaya tutuldu, Erzurum ve Kars yaylalarında dondurucu tipilere yakalandı. Kimi zaman geceleri eyerini yastık yapıp yıldızların altında uyudu ama heybesindeki balmumu bezine sarılı not defterlerini canı gibi korudu.\n\nÇünkü biliyordu ki atı yorulabilir, pelerini yırtılabilirdi; fakat o sayfalarda biriken binlerce şehrin hafızası kaybolursa, koskoca bir yüzyılın sesi sessizliğe gömülecekti.",
        speaker: "Evliya Çelebi",
        dialogue:
          "Üşüyen ellerim ateş başında ısınır; yeter ki balmumu kesesindeki şu satırlarımıza tek bir yağmur damlası bile değmesin!",
        funFact:
          "Evliya Çelebi, seyahatleri boyunca at sırtında ve gemilerle yaklaşık 25 bugünkü ülkenin topraklarını kapsayan devasa bir coğrafyayı gezmiştir.",
        image: "assets/images/nene_hatun_s1_erzurum_dawn.png",
        atmosphere: "STORM_SEA",
        visualNote:
          "Karlı bir dağ geçidinde fener ışığında heybesindeki deri defterlerini balmumu örtüyle koruyan cesur seyyah.",
      },
      {
        title: "Mizah, Merak ve İnsan Sevgisi",
        narration:
          "Evliya Çelebi'yi tarihteki diğer kâtiplerden ayıran en güzel özellik, kalemindeki neşe ve sıcaklıktı. Erzurum'un şiddetli soğuğunu anlatırken 'damdan dama atlayan kedinin havada donup kaldığını, bahar gelince çözülüp miyavlayarak koştuğunu' tatlı bir nükteyle aktararak okuyucusunu gülümsetirdi.\n\nBu ince mizahın yanında, mimari ölçüleri, nüfus kayıtlarını ve tarihi kitabeleri son derece titiz bir ciddiyetle yazardı. Böylece hem bilginlerin başvurduğu dev bir kaynak hem de çocukların ve gençlerin elinden düşüremediği bir macera eseri ortaya çıktı.",
        speaker: "Evliya Çelebi",
        dialogue:
          "Sözün arasına tebessüm katmazsanız, on ciltlik uzun yolu okuyucuya nasıl yorulmadan yürütürsünüz?",
        funFact:
          "Erzurum'da 'havada donan kedi' nüktesi, Evliya Çelebi'nin abartma sanatını (mübalağa) okuyucuyu eğlendirmek için ne kadar ustaca kullandığının en ünlü örneğidir.",
        image: "assets/images/ibn_battuta_hero.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Sıcak bir kütüphane köşesinde mum ışığında gülümseyerek Seyahatname sayfalarını temize çeken Evliya Çelebi.",
      },
      {
        title: "On Ciltlik Ölümsüz Miras",
        narration:
          "Yarım asır boyunca at sırtında dağları, nehirleri ve şehirleri aşan Evliya Çelebi, ömrünün son yıllarında Mısır'da tüm notlarını bir araya getirerek tam on ciltlik 'Seyahatname' külliyatını tamamladı. Gençliğinde gördüğü bir rüyayla başlayan yolculuk, dünya kültür tarihinin en büyük tek kişilik gezi ansiklopedisine dönüştü.\n\nOnun bıraktığı bu eşsiz miras bize şunu fısıldar: Merakla bakan göz, sabırla yürüyen ayak ve sevgiyle yazan kalem birleştiğinde, bir insan tek başına koca bir medeniyetin hafızası olabilir.",
        speaker: "Evliya Çelebi",
        dialogue:
          "Elli yıl boyunca gezdim, gördüm ve yazdım; şimdi bu on ciltlik hazineyi, dünyayı merak etmekten asla vazgeçmeyen siz genç iz sürenlere emanet ediyorum!",
        funFact:
          "Evliya Çelebi'nin Seyahatname'si, 2013 yılında UNESCO 'Dünya Belleği Kütüğü'ne kaydedilerek tüm insanlığın ortak mirası ilan edilmiştir.",
        image: "assets/images/seyh_hamdullah_calligraphy.png",
        atmosphere: "STARLIT_OBSERVATORY",
        visualNote:
          "On ciltlik deri kaplı Seyahatname külliyatı, yanında pirinç pusula, kamış kalem ve dünya haritası.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Elli yıl boyunca yüzlerce şehir ve ülke gezdikten sonra elinde binlerce sayfalık dağınık gezi notu birikti. Bu birikimi insanlığa nasıl bırakırsın?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Sadece en ünlü birkaç sarayı anlatan kısa bir kitapçık yazar, geri kalan halk kültürü ve dil notlarını gereksiz bulup atarım.",
          feedback:
            "O zaman yüzlerce şehrin yemekleri, dilleri, köprüleri ve günlük yaşamı tarihten silinip giderdi.",
          isHistoricalTruth: false,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Notlarımı sadece kendi ailemin okuması için sandığa kilitlerim, kimseyle paylaşmam.",
          feedback:
            "Bilgi paylaşılmadığında değerini yitirir; Evliya Çelebi eserini tüm insanlık faydalansın diye kaleme almıştır.",
          isHistoricalTruth: false,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "İstanbul'dan Mısır'a, mimariden dillere ve insan hikâyelerine kadar tüm gözlemlerimi 10 ciltlik dev Seyahatname'de sistemli ve akıcı bir dille toplarım.",
          feedback:
            "Tarihsel Gerçek! Evliya Çelebi 50 yıllık gözlemlerini 10 ciltlik Seyahatname'de toplayarak UNESCO Dünya Belleği'ne giren eşsiz bir kültür hazinesi bırakmıştır.",
          isHistoricalTruth: true,
        },
      ],
      historicalTruthExplanation:
        "Evliya Çelebi, 1630'dan 1680'li yıllara kadar yaklaşık 50 yıl boyunca gezdiği coğrafyaların mimarisini, insanlarını, dillerini ve vakıflarını 10 ciltlik Seyahatname'de bir araya getirmiş; eseri bugün UNESCO Dünya Belleği listesindedir.",
      quoteHighlight:
        "Seyahat ya Resulallah! Gezdiğim her şehrin taşını, suyunu ve insanını geleceğe bir emanet olarak yazdım.",
    },
    rewardArtifact: {
      id: "artifact-evliya-seyahatname",
      name: "Evliya Çelebi'nin 10 Ciltlik Seyahatname Sandığı",
      imagePath: "assets/images/evliya_celebi_seyahatname.png",
      pointType: "BILGELIK",
      pointLabel: "Bilgelik ve Keşif Puanı",
      points: 60,
      unlockedTitle: "Cihan Seyyahı",
      shortDescription:
        "Elli yıllık yolculuğun sonunda 25'ten fazla ülkenin kültürünü, mimarisini ve dillerini bir araya getiren UNESCO tescilli dev gezi külliyatı.",
      historicalNote:
        "Evliya Çelebi'nin Mısır'da son şeklini verdiği 10 ciltlik Seyahatname, dünya tarihinin tek bir yazar tarafından kaleme alınmış en kapsamlı seyahat eseridir.",
      accentColor: "#0D9488",
      hotspots: [
        {
          id: "evliya-vol1-istanbul",
          xPercent: 26,
          yPercent: 35,
          title: "1. Cilt: İstanbul Rehberi",
          secretFact:
            "İlk cilt tamamen İstanbul'un mahallelerine, camilerine ve yüzlerce esnaf loncasına ayrılmıştır.",
        },
        {
          id: "evliya-language-notes",
          xPercent: 54,
          yPercent: 50,
          title: "30 Dilin Sözlük Defteri",
          secretFact:
            "Gittiği coğrafyalarda konuşulan 30'dan fazla dil ve lehçenin günlük kelimelerini ve sayılarını kaydetmiştir.",
        },
        {
          id: "evliya-wax-satchel",
          xPercent: 76,
          yPercent: 68,
          title: "Balmumu Koruma Kesesi",
          secretFact:
            "Yağmur ve deniz fırtınalarında mürekkebin dağılmaması için defterlerini balmumlu bez keselerde taşımıştır.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Evliya Çelebi uzak ülkelere gitmeden önce neden tam 10 yıl boyunca kendi şehri İstanbul'u gezip incelemiştir?",
      "Yeni bir yere gittiğimizde sadece binalara bakmak yerine oradaki insanların kültürünü ve dilini tanımak bize ne kazandırır?",
      "Siz kendi mahalleniz veya şehriniz hakkında bir 'Seyahatname' bölümü yazsaydınız içine neleri eklerdiniz?",
    ],
  }),

  buildChapter({
    id: "evliya-celebi-ch2",
    heroId: "evliya-celebi",
    chapterNumber: 2,
    title: "Viyana'dan Nil Nehri'ne Sıra Dışı Gözlemler",
    subtitle:
      "Avrupa'nın saat kulelerinden Mısır'ın piramitlerine ve Nil'in kaynağına uzanan bilimsel merak yolculuğu.",
    estimatedMinutes: 9,
    scenes: [
      {
        title: "Orta Avrupa Yollarında Bir Osmanlı Gözlemcisi",
        narration:
          "1665 yılında elçilik heyetiyle birlikte Viyana'ya doğru yola çıkan Evliya Çelebi, Tuna Nehri boyunca uzanan şehirleri, köprüleri ve kaleleri büyük bir dikkatle inceledi. Gittiği yabancı şehirlerde ön yargıyla değil, bir bilim insanının bitmek bilmeyen öğrenme arzusuyla hareket ediyordu.\n\nViyana sokaklarında yürürken taş binaların yüksekliğini, sokakların temizliğini ve şehir kapılarındaki güvenlik düzenini tek tek defterine kaydetti. Başka toplumların başarılı olduğu teknik işleri takdir etmekten ve bunları kendi ülkesindeki okurlara anlatmaktan asla çekinmedi.",
        speaker: "Evliya Çelebi",
        dialogue:
          "Nerede faydalı bir ilim, düzenli bir kütüphane veya hünerli bir saat kulesi görürsem, onu defterime doğrulukla yazmak boynumun borcudur.",
        funFact:
          "Evliya Çelebi, 1665'te ziyaret ettiği Viyana'nın kütüphanelerini, hastanelerini ve mekanik saat kulelerini ayrıntılı biçimde tasvir etmiştir.",
        image: "assets/images/cezeri_s3_elephant_clock_full.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Viyana meydanındaki yüksek taş saat kulesini ve çarklı mekanizmaları dikkatle inceleyip çizim yapan Evliya Çelebi.",
      },
      {
        title: "Stephan Kulesi'nin Saatleri ve Kütüphaneler",
        narration:
          "Viyana'daki ünlü Stephan Katedrali'nin yüksek kulesine çıkan Evliya Çelebi, buradaki devasa mekanik çarklı saatlerin nasıl hiç şaşmadan çalıştığını uzun uzun inceledi. Ayrıca kütüphanelerdeki binlerce ciltlik basılı kitapları ve haritaları görünce bilginin her coğrafyada ne kadar kıymetli olduğunu bir kez daha anladı.\n\nOradaki hekimlerin cerrahi aletlerini ve hastane düzenini de gözlemleyerek kendi bildiği Osmanlı darüşşifalarıyla karşılaştırdı. Ona göre medeniyetler birbirini tanıdıkça insanlığın ortak bilgisi çoğalıyordu.",
        speaker: "Evliya Çelebi",
        dialogue:
          "Bu çarkların uyumu bana El-Cezerî ve Takiyyüddin ustalarımızın saatlerini hatırlattı; bilim doğuda da batıda da aynı hakikati arıyor!",
        funFact:
          "Evliya Çelebi, Viyana'da doğu dilleri bilen kütüphanecilerle sohbet etmiş ve oradaki Arapça, Farsça ve Türkçe el yazmalarını incelemiştir.",
        image: "assets/images/ibn_sina_s1_bukhara_library.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Yüksek kemerli bir kütüphanede küreleri ve kitap raflarını inceleyen Evliya Çelebi.",
      },
      {
        title: "Rotayı Güneye Çevirmek: Kahire ve Nil Nehri",
        narration:
          "Kuzeyin soğuk iklimlerinden ve Avrupa şehirlerinden sonra Evliya Çelebi'nin merak pusulası bu kez güneye, sıcak Mısır topraklarına ve efsanevi Nil Nehri'ne döndü. 1672 yılında Kahire'ye ulaştığında, yüzlerce minaresi, canlı çarşıları ve Nil kıyısındaki yelkenli tekneleriyle bu kadim şehre hayran kaldı.\n\nKahire'de bir köşeye çekilip dinlenmek yerine, Nil Nehri'nin taşkınlarını ölçen Mikyasü'n-Nil (Nilometre) yapısını inceledi. Suyun seviyesine göre tarlaların nasıl sulandığını ve bolluk hesabının nasıl yapıldığını satır satır yazdı.",
        speaker: "Evliya Çelebi",
        dialogue:
          "Nil sadece bir nehir değil, çölün ortasına hayat veren muazzam bir takvimdir; suyunun her parmağı Mısır'ın bereketini ölçer!",
        funFact:
          "Kahire'deki Roda Adası'nda bulunan Nilometre (Mikyasü'n-Nil), 9. yüzyıldan beri Nil sularının yüksekliğini ölçen mermer sütunlu bir mühendislik harikasıdır.",
        image: "assets/images/evliya_celebi_nile_map.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Gün batımında Nil Nehri kıyısında yelkenli tekneleri ve uzaktaki piramitleri izleyen Evliya Çelebi.",
      },
      {
        title: "Piramitlerin Gölgesinde ve Sudan Yolunda Karar",
        narration:
          "Gize Piramitleri'nin önüne geldiğinde, binlerce yıl önce dev kireçtaşı bloklarının nasıl üst üste konulduğunu hayretle inceledi ve piramitlerin taban çevresini yine kendi adımlarıyla ölçtü. Ancak onun asıl merak ettiği şey, herkesin konuştuğu ama çok az kişinin gitmeye cesaret ettiği Nil Nehri'nin güneydeki uzak kollarıydı.\n\nKahire'deki dostları ona 'Artık yaşın altmışı geçti, Sudan ve Habeşistan çöllerine inmek çok zahmetlidir, burada duyduklarını yazman yeter' dediler. Evliya Çelebi ise kervan hazırlıklarını izlerken kararını vermek zorundaydı.",
        speaker: "Kahireli Dostu",
        dialogue:
          "Evliya Efendi, güneydeki şelaleler ve sıcak çöller genç yolcuları bile yorar; Nil'in güneyini haritalardan bakıp yazsan olmaz mı?",
        funFact:
          "Evliya Çelebi, 60 yaşını geçmiş olmasına rağmen Nil Nehri boyunca güneye, bugünkü Sudan (Func Sultanlığı) ve Habeşistan sınırlarına kadar inmiştir.",
        image: "assets/images/omer_ch3_s5_medina_camel_journey.png",
        atmosphere: "DESERT_CAMPFIRE",
        visualNote:
          "Piramitlerin ve Nil kıyısının önünde güneye gidecek deve kervanıyla konuşan Evliya Çelebi.",
        midDecision: {
          title: "ARA KARAR: Nil'in Güneyine Yolculuk",
          question:
            "Yaşın ilerlemiş olmasına rağmen Nil'in güneyindeki bilinmeyen şehirleri ve şelaleleri yazmak için nasıl bir yol izlersin?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Kahire'de kalıp tüccarlardan duyduğum kulaktan dolma rivayetleri sanki gitmişim gibi defterime yazarım.",
              feedback:
                "Görmediğin yerleri görmüş gibi yazmak, Seyahatname'nin doğruluk ve gözlem değerini zedelerdi.",
              isBestChoice: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Kervana ve Nil teknelerine katılarak güneye bizzat iner, Sudan'daki şehirleri, Nil şelalelerini ve yerel halkları kendi gözlerimle görerek kaydederim.",
              feedback:
                "Mükemmel karar! Evliya Çelebi Nil boyunca güneye inerek 10. cildinde Afrika'nın iç kesimlerini ilk elden anlatan benzersiz kayıtlar bırakmıştır.",
              isBestChoice: true,
            },
          ],
        },
      },
      {
        title: "Nil Şelaleleri ve Func Sultanlığı",
        narration:
          "Evliya Çelebi, teknelerle ve deve kervanlarıyla Nil boyunca güneye doğru ilerleyerek çağlayanları, kayalık geçitleri ve Nubye köylerini tek tek geçti. Suyun dev kayalardan köpürerek döküldüğü şelalelerin sesini, nehir kıyısındaki timsahları ve rengârenk kuşları canlı bir tablo çizer gibi betimledi.\n\nSudan'daki Sinnar (Func) topraklarına vardığında, yerel halkın misafirperverliğini, kerpiç mimarisini ve sıcak iklime uygun kıyafetlerini büyük bir saygıyla defterine işledi.",
        speaker: "Evliya Çelebi",
        dialogue:
          "İklimler ve renkler değişse de, bir yolcuya uzatılan bir tas serin suyun içindeki iyilik dünyanın her yerinde aynıdır!",
        funFact:
          "Seyahatname'nin 10. cildi, Mısır, Sudan ve Habeşistan (Etiyopya) bölgelerinin 17. yüzyıldaki coğrafyasını anlatan en önemli kaynaklardan biridir.",
        image: "assets/images/piri_reis_s2_mediterranean_cove.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Nil Nehri'nin kayalık kıyılarında yelkenli tekneyle ilerleyen ve kıyıdaki doğayı çizen seyyah.",
      },
      {
        title: "Haritacılık Tutkusu: Nil Nehri Haritası",
        narration:
          "Evliya Çelebi sadece kelimelerle yazı yazan bir gezgin değildi; aynı zamanda gördüğü nehirleri, kaleleri ve limanları resmeden usta bir haritacıydı. Nil Nehri'nin güneydeki kaynağından Akdeniz'e döküldüğü deltalara kadar uzanan kıvrımlarını, üzerindeki adaları ve kıyısındaki şehirleri dev bir harita üzerinde birleştirdi.\n\nHaritanın üzerine her kasabanın adını, su kanallarını ve kervan konaklarını özenle yerleştirdi. Böylece kendisinden sonra o yollardan geçecek denizciler ve gezginler için paha biçilmez bir kılavuz ortaya çıktı.",
        speaker: "Evliya Çelebi",
        dialogue:
          "Söz uçar, çizgi ve yazı kalır; Nil'in her kıvrımını bu haritaya işleyelim ki bizden sonraki yolcular çölde ve nehirde yolunu şaşırmasın.",
        funFact:
          "Evliya Çelebi ve çevresi tarafından hazırlanan yaklaşık 6 metre uzunluğundaki resimli 'Nil Haritası', bugün Vatikan Kütüphanesi'nde korunan bir şaheserdir.",
        image: "assets/images/piri_reis_map.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Uzun bir parşömen rulo üzerine Nil Nehri'nin kollarını, deltayı ve şehirleri çizen Evliya Çelebi.",
      },
      {
        title: "Kahire'de Son Okumalar ve Düzenleme",
        narration:
          "Uzun güney yolculuğundan Kahire'ye dönen Evliya Çelebi, sakin bir konakta masa başına geçerek elli yıldır biriktirdiği on binlerce sayfayı cilt cilt tasnif etmeye başladı. İstanbul'dan başlayan 1. ciltten, Mısır ve Sudan'ı anlatan 10. cilde kadar her bölümü sabırla gözden geçirdi.\n\nMürekkep hokkası her boşaldığında gençlik yıllarındaki Ahi Çelebi Camii rüyasını hatırlıyor ve kendisine bu uzun ömrü, sağlığı ve keşif aşkını veren Allah'a şükrediyordu.",
        speaker: "Evliya Çelebi",
        dialogue:
          "Yirmi yaşında tek bir defterle çıktığım bu yolda, şimdi karşımda on koca ciltlik bir dünya duruyor!",
        funFact:
          "Seyahatname'nin kahredici yangınlardan kurtulup günümüze ulaşan en önemli el yazması nüshaları Topkapı Sarayı ve Süleymaniye Kütüphanesi'ndedir.",
        image: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Kahire'de güneşli bir avluda 10 ciltlik el yazmalarını düzenleyen bilge seyyah Evliya Çelebi.",
      },
      {
        title: "İستانbul'a Gönderilen Hazine Sandığı",
        narration:
          "Evliya Çelebi, ömrünün son demlerinde en büyük eseri olan bu on ciltlik el yazması takımın kaybolmaması için çok dikkatli davrandı. Yazmaların özenle ciltlenmiş nüshalarının İstanbul'a ulaştırılmasını ve ilim ehlinin istifadesine sunulmasını vasiyet etti.\n\nYüzyıllar sonra bu sandıklar açılıp incelendiğinde, tarihçiler, mimarlar, müzikologlar ve coğrafyacılar 17. yüzyıl dünyasını Evliya Çelebi'nin canlı satırlarından yeniden keşfettiler.",
        speaker: "Evliya Çelebi",
        dialogue:
          "Altın ve gümüş hazineler harcanır biter; fakat kitap sandığındaki bilgi hazinesi okundukça çoğalır.",
        funFact:
          "1742 yılında Kızlarağası Hacı Beşir Ağa tarafından Mısır'dan İstanbul'a getirtilen Seyahatname ciltleri sayesinde eser kaybolmaktan kurtulmuştur.",
        image: "assets/images/el_cezeri_combination_lock.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "İçinde Seyahatname ciltleri ve harita ruloları bulunan işlemeli ahşap miras sandığı.",
      },
      {
        title: "Bitmeyen Yolculuk: Merak Eden Her Çocuk Bir Seyyahtır",
        narration:
          "Evliya Çelebi'nin elli yıllık serüveni bize gezginliğin sadece uzak ülkelere gitmek olmadığını, asıl gezginliğin hayata dikkatli, saygılı ve meraklı gözlerle bakmak olduğunu öğretti. Bir çeşmenin tarihini merak etmek, farklı bir kültüre tebessümle yaklaşmak ve gördüğü güzellikleri kaydetmek onun en büyük mirasıdır.\n\nBugün eline bir defter alıp çevresini keşfetmeye başlayan her çocuk, aslında Evliya Çelebi'nin açtığı o aydınlık izde yürümeye devam etmektedir.",
        speaker: "Evliya Çelebi",
        dialogue:
          "Gözünüzü meraktan, kalbinizi insan sevgisinden, elinizi kalemden ayırmayın; yolunuz daima açık olsun genç iz sürenler!",
        funFact:
          "UNESCO, Evliya Çelebi'nin doğumunun 400. yılı olan 2011 yılını tüm dünyada 'Evliya Çelebi Yılı' olarak kutlamıştır.",
        image: "assets/images/islamic_world_atlas_map.png",
        atmosphere: "STARLIT_OBSERVATORY",
        visualNote:
          "Dünya atlası üzerinde Viyana'dan İstanbul'a ve Nil Nehri'ne uzanan altın ışık rotası.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Farklı ülkeleri, Viyana'nın saat kulelerini ve Mısır'ın Nil Nehri'ni gezerken kendi kültüründen çok farklı gelenekler ve buluşlarla karşılaştın. Seyahatnamene bunları nasıl yazarsın?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Ön yargısız bir bilim ve kültür gözlemcisi olarak gördüğüm her faydalı eseri, haritayı ve insan hikâyesini adaletle ve saygıyla kaydederim.",
          feedback:
            "Tarihsel Gerçek! Evliya Çelebi gittiği her coğrafyayı eşsiz bir hoşgörü, merak ve bilimsel dikkatle kayıt altına almıştır.",
          isHistoricalTruth: true,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Yabancı şehirlerdeki kütüphaneleri ve saat kulelerini hiç incelemeden geçer, sadece yolların uzunluğunu yazarım.",
          feedback:
            "Evliya Çelebi hiçbir zaman yüzeysel kalmamış, gördüğü her kütüphaneyi ve tekniği ayrıntısıyla incelemiştir.",
          isHistoricalTruth: false,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "Zorlu Nil yolculuğuna çıkmaktan vazgeçip haritamı yarım bırakırım.",
          feedback:
            "Evliya Çelebi 60 yaşından sonra bile Nil'in güneyine inerek araştırmasını tamamlamıştır.",
          isHistoricalTruth: false,
        },
      ],
      historicalTruthExplanation:
        "Evliya Çelebi, Viyana'dan Sudan'a kadar uzanan seyahatlerinde farklı kültürlerin bilimini, mimarisini ve doğasını büyük bir açık fikirlilikle incelemiş; Nil Haritası ve 10. cildiyle coğrafya tarihine silinmez bir iz bırakmıştır.",
      quoteHighlight:
        "Gezdiğim her iklimde insanlığın ortak aklını ve iyiliğini aradım.",
    },
    rewardArtifact: {
      id: "artifact-evliya-nile-compass",
      name: "Evliya Çelebi'nin Nil Haritası ve Seyyah Pusulası",
      imagePath: "assets/images/evliya_celebi_nile_map.png",
      pointType: "BILGELIK",
      pointLabel: "Keşif ve Coğrafya Puanı",
      points: 60,
      unlockedTitle: "Nil ve Tuna Kaşifi",
      shortDescription:
        "Tuna kıyılarından Nil Nehri'nin şelalelerine kadar uzanan şehirleri ve su yollarını gösteren tarihi harita rulosu ve pirinç pusula.",
      historicalNote:
        "Evliya Çelebi'nin Mısır yıllarında hazırlanan dev Nil Nehri haritası, nehrin kollarını, Nilometre'yi ve kıyı yerleşimlerini ayrıntılı biçimde gösterir.",
      accentColor: "#0D9488",
      hotspots: [
        {
          id: "nile-delta-branches",
          xPercent: 30,
          yPercent: 28,
          title: "Nil Deltası ve İskenderiye",
          secretFact:
            "Nehrin Akdeniz'e döküldüğü kolları ve liman kalelerini adım adım ölçerek işaretlemiştir.",
        },
        {
          id: "roda-nilometer",
          xPercent: 52,
          yPercent: 48,
          title: "Mikyasü'n-Nil (Nilometre)",
          secretFact:
            "Kahire'de nehir suyunun yükselmesini ölçerek tarım bereketini hesaplayan tarihi taş sütun.",
        },
        {
          id: "sudan-cataracts",
          xPercent: 74,
          yPercent: 72,
          title: "Güney Şelaleleri ve Sinnar",
          secretFact:
            "Altmış yaşını aşmışken indiği Sudan ve Nil çağlayanlarına ait ilk elden gözlem notları.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Evliya Çelebi farklı ülkeleri gezerken neden ön yargısız davranmış ve gördüğü iyi örnekleri takdir etmiştir?",
      "Kahire'deki Nilometre (su ölçer) insanların hayatını nasıl kolaylaştırıyordu?",
      "Altmış yaşından sonra bile yeni yerler keşfetmeye devam etmek bize azim hakkında ne öğretir?",
    ],
  }),
];

export const ZIRYAB_ITRI_CHAPTERS: StoryChapter[] = [
  buildChapter({
    id: "ziryab-itri-ch1",
    heroId: "ziryab-itri",
    chapterNumber: 1,
    title: "Endülüs Bahçelerinde Mevsimler ve Musiki: Ziryâb ve Itrî",
    subtitle:
      "Kurtuba'da uduna beşinci teli ekleyen Ziryâb'dan İstanbul'da sesin zarafetini doruğa taşıyan Itrî'ye uzanan estetik mirası.",
    estimatedMinutes: 9,
    scenes: [
      {
        title: "Siyah Ötücü Kuş: Ziryâb'ın Kurtuba'ya Gelişi",
        narration:
          "9. yüzyılda Bağdat'tan yola çıkıp uzun bir yolculuğun ardından Endülüs'ün başkenti Kurtuba'ya ulaşan Ebü'l-Hasan Ali bin Nâfi, tatlı sesi ve zarif bilgisi yüzünden halk arasında 'Ziryâb' yani 'Siyah Ötücü Kuş' lakabıyla tanınıyordu. Kurtuba Emiri II. Abdurrahman, bu bilge sanatçıyı büyük bir saygıyla karşılayarak ona sarayının ve bahçelerinin kapılarını açtı.\n\nZiryâb sadece bir müzisyen değildi; astronomiden coğrafyaya, botanikten görgü kurallarına kadar pek çok alanda derin bilgi sahibiydi. Gittiği her yere kavga değil, zarafet, nezaket ve uyum taşıyan gerçek bir medeniyet elçisiydi.",
        speaker: "Ziryâb",
        dialogue:
          "Gerçek sanat yalnızca kulağa hoş gelen bir ezgi değil; insanın konuşmasına, sofrasına ve kalbine yerleşen inceliktir.",
        funFact:
          "Ziryâb (789–857), Bağdat'tan Endülüs'e (İspanya) yerleşmiş ve Avrupa kültür tarihini derinden etkileyen bir musiki ve zarafet okulu kurmuştur.",
        image: "assets/images/ziryab_cordoba_music.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Kurtuba'da portakal ağaçları ve mermer şadırvanlı Endülüs avlusunda elinde uduyla duran Ziryâb.",
      },
      {
        title: "Udun Kalbine Eklenen Beşinci Tel",
        narration:
          "O döneme kadar çalınan udlarda dört tel bulunur ve bu dört tel doğadaki dört unsuru (su, toprak, hava, ateş) temsil ederdi. Ziryâb ise müziğin insan ruhunun duygularını daha derin ifade edebilmesi için udun tam ortasına kırmızı renkli 'beşinci teli' ekledi.\n\nAyrıca telleri yıpratan sert ahşap mızraplar yerine, kartal kanadının teleğinden yaptığı esnek ve hafif bir mızrap kullanmaya başladı. Böylece tellerden çıkan ses sertliğini kaybetti; tıpkı bahar rüzgârı ve su şırıltısı gibi yumuşak, berrak bir tınıya kavuştu.",
        speaker: "Ziryâb",
        dialogue:
          "Dört tel doğanın unsurlarını anlatıyordu; eklediğim bu beşinci tel ise insanın düşünen aklını ve hisseden kalbini seslendiriyor!",
        funFact:
          "Ziryâb'ın uda beşinci teli eklemesi ve kartal tüyü mızrap kullanması, modern gitarın ve Endülüs müziğinin gelişiminde dönüm noktası olmuştur.",
        image: "assets/images/el_cezeri_workshop.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Ahşap atölye masasında uda kırmızı beşinci teli takan ve kartal tüyü mızrabı hazırlayan Ziryâb.",
      },
      {
        title: "Kurtuba Konservatuvarı: Herkese Açık Sanat Okulu",
        narration:
          "Ziryâb, bilgisini sadece saray duvarları arasında saklamak istemedi ve Kurtuba'da tarihin ilk sistemli müzik ve sanat okullarından birini kurdu. Bu okula kabul edilecek öğrencileri zenginliklerine göre değil, seslerinin uyumuna ve öğrenme sabırlarına göre seçiyordu.\n\nDerslerini üç aşamalı bilimsel bir yöntemle işlerdi: Öğrenciler önce ritmi ve usulü öğrenir, ardından melodiyi kavrar, en sonunda da sözlerin anlamını hissederek okumaya geçerdi. Onun yetiştirdiği öğrenciler Endülüs'ten tüm Akdeniz'e yayıldı.",
        speaker: "Ziryâb",
        dialogue:
          "Önce ritmi kalbinin atışı gibi doğru duyacaksın evladım; sabırla temel kurmadan yükselen ses, rüzgârda dağılan duman gibidir.",
        funFact:
          "Ziryâb'ın Kurtuba'da kurduğu müzik okulu, Avrupa'daki ilk konservatuvarların öncüsü kabul edilir ve ses eğitimi yöntemleri yüzyıllarca kullanılmıştır.",
        image: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
        atmosphere: "FEZ_COURTYARD",
        visualNote:
          "Kemerli Endülüs medresesi avlusunda genç öğrencilere ritim ve musiki dersi veren Ziryâb.",
      },
      {
        title: "Mevsimlere Göre Giyim ve Sofra Zarafeti",
        narration:
          "Ziryâb'ın estetik anlayışı günlük hayatın her alanını güzelleştiriyordu. Kurtuba halkına ilkbaharda çiçek renkli ince ipekler, yazın güneş ışığını yansıtan tertemiz beyaz pamuklular, sonbaharda sıcak toprak tonları ve kışın yünlü paltolar giymeyi öğreterek tarihte 'mevsimlik giyim' kültürünü başlattı.\n\nSofralarda ise bütün yemeklerin aynı anda karışık olarak masaya yığılması yerine; önce çorbanın, ardından ana yemeğin, en sonunda da meyve ve tatlının sırayla ikram edildiği düzenli ve sağlıklı sofra adabını getirdi.",
        speaker: "Kurtubalı Zanaatkâr",
        dialogue:
          "Üstadım, müziğinizle kulaklarımızı dinlendirdiğiniz gibi, getirdiğiniz temizlik ve sofra düzeniyle de şehrimizin yaşamını güzelleştirdiniz!",
        funFact:
          "Bugün tüm dünyada uygulanan 'önce çorba, sonra ana yemek, en son tatlı' sıralamasını ve kristal cam bardak kullanımını 9. yüzyılda Kurtuba'da Ziryâb yaygınlaştırmıştır.",
        image: "assets/images/ebubekir_s5_pitting_dates.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Beyaz örtülü düzenli bir Endülüs sofrasında kristal sürahiler, taze meyveler ve bahçe çiçekleri.",
        midDecision: {
          title: "ARA KARAR: Sanat ve Zarafet Kimin İçindir?",
          question:
            "Kurtuba'da geliştirdiğin musiki eğitimi, temizlik alışkanlıkları ve sofra adabı yeniliklerini toplumla nasıl paylaşırsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Bu incelikleri sadece saraydaki birkaç soyluya öğretir, halkın ve genç çırakların öğrenmesine izin vermem.",
              feedback:
                "Sanat ve zarafet yalnızca dar bir çevrede kalırsa bir medeniyete dönüşemez ve kısa sürede unutulur.",
              isBestChoice: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Okulumun kapılarını yetenekli gençlere açar; temizlik, mevsimlik giyim ve musiki kültürünü tüm şehrin günlük yaşamına kazandırırım.",
              feedback:
                "Harika karar! Ziryâb zarafeti tüm Kurtuba toplumuna yayarak Endülüs'ü Avrupa'nın kültür ve estetik merkezi haline getirmiştir.",
              isBestChoice: true,
            },
          ],
        },
      },
      {
        title: "Yüzyıllar Sonra İstanbul'da Bir Başka Usta: Itrî",
        narration:
          "Ziryâb'ın Endülüs bahçelerinde yaktığı musiki ve estetik meşalesi, yüzyıllar boyunca İslam dünyasında elden ele taşındı ve 17. yüzyılda İstanbul'da Buhûrîzâde Mustafa Itrî Efendi'nin elinde yeni bir zirveye ulaştı. Yenikapı yakınlarındaki bahçesinde nadir çiçekler ve meyve ağaçları yetiştirdiği için kendisine 'güzel koku' anlamına gelen 'Itrî' mahlası verilmişti.\n\nTıpkı Ziryâb gibi Itrî de hem şair, hem hattat, hem bahçıvan hem de benzersiz bir bestekârdı. Sabahları bahçesindeki güllerin çiy damlalarını izler, kuş seslerini dinler ve doğadaki bu uyumu notalara dönüştürürdü.",
        speaker: "Buhûrîzâde Mustafa Itrî",
        dialogue:
          "Bir çiçeğin yaprağındaki simetriyi ve seher vaktindeki rüzgârın sesini duymayan gönül, kalplere dokunan bir beste yapamaz.",
        funFact:
          "Klâsik Türk musikisinin kurucu ustası kabul edilen Itrî (1640–1712), çiçekçilik ve meyvecilikle de uğraşmış, kendi adını taşıyan 'Mustafa Bey armudu'nu yetiştirmiştir.",
        image: "assets/images/seyh_hamdullah_calligraphy.png",
        atmosphere: "DAWN_MIST",
        visualNote:
          "İstanbul'da sabah güneşinde gül bahçesinde çiçeklerle ilgilenen ve notalarını yazan bilge bestekâr Itrî.",
      },
      {
        title: "Şifahanelerde İlaç Gibi Dinlenen Makamlar",
        narration:
          "Hem Endülüs'te hem de Osmanlı dünyasında musiki yalnızca bir eğlence aracı olarak görülmez; aynı zamanda darüşşifalarda hastaların ruhunu dinlendiren bir şifa kaynağı olarak kullanılırdı. Su sesiyle birleşen Rast, Uşşak ve Segâh makamları, kaygılı ve yorgun kalplere huzur verirdi.\n\nItrî, yüzlerce eser bestelerken her makamın insan ruhunda uyandırdığı duyguyu büyük bir titizlikle hesapladı. Seher vaktinin dinginliğini, akşamın huzurunu ve bayram sabahlarının sevincini ayrı makamlarla işledi.",
        speaker: "Darüşşifa Hekimi",
        dialogue:
          "Şadırvandan akan suyun sesiyle Itrî Efendi'nin huzurlu makamları birleştiğinde, hastalarımızın kalp atışları sakinleşiyor ve yüzlerine tebessüm geliyor.",
        funFact:
          "Edirne ve Amasya Darüşşifalarında olduğu gibi İslam tıp geleneğinde su sesi ve musiki makamları yüzyıllar boyunca ruhsal tedavide kullanılmıştır.",
        image: "assets/images/ibn_sina_hospital.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Kemerli darüşşifa avlusunda mermer fıskiyeli havuz başında ney ve ud dinleyen huzurlu insanlar.",
      },
      {
        title: "Kubbede Yankılanan Segâh Tekbir",
        narration:
          "Itrî'nin ömrü boyunca ortaya koyduğu bini aşkın eser arasında öyle iki beste vardı ki, aradan geçen yüzyıllara rağmen tek bir notası bile eskimeksizin kuşaktan kuşağa aktarıldı: Segâh makamındaki 'Bayram Tekbiri' ve 'Salât-ı Ümmiye'.\n\nSüleymaniye ve Sultanahmet gibi ulu camilerin kubbeleri altında yüzlerce insan hep bir ağızdan bu ağırbaşlı, vakur ve huzur dolu ezgiyi okuduğunda, Mimar Sinan'ın taşla kurduğu akustik kubbe ile Itrî'nin sesle kurduğu manevi kubbe birbiriyle kucaklaşıyordu.",
        speaker: "Buhûrîzâde Mustafa Itrî",
        dialogue:
          "Taş kubbeleri ustalarımız omuzladı; biz de o kubbelerin içini asırlar boyu gönülleri birleştirecek berrak bir sesle doldurmaya gayret ettik.",
        funFact:
          "Ünlü şair Yahya Kemal Beyatlı, Itrî için yazdığı şiirde onun Segâh Tekbir'ini 'Süleymaniye kadar sağlam ve ölümsüz bir mimari eser' olarak nitelendirmiştir.",
        image: "assets/images/sinan_s1_suleymaniye_hookah.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Süleymaniye Camii'nin yüksek kubbesinden süzülen altın ışık hüzmeleri ve akustik küplerde yankılanan huzur.",
      },
      {
        title: "Notaları ve Eserleri Kaybolmaktan Kurtarmak",
        narration:
          "O dönemde musiki eserleri çoğunlukla ustadan çırağa 'meşk' usulüyle yani ezberlenerek aktarılırdı. Ancak Itrî ve çağdaşları olan Kantemiroğlu ile Nâyî Osman Dede gibi bilginler, bu eşsiz melodilerin unutulup gitmemesi için harf ve ebced notası sistemlerini geliştirerek eserleri kayıt altına almaya çalıştılar.\n\nBilginin ve sanatın ancak sabırlı bir eğitimle yaşayacağını bilen Itrî, Enderun'da onlarca genç öğrenci yetiştirerek bildiği her makamı cömertçe gelecek kuşaklara devretti.",
        speaker: "Buhûrîzâde Mustafa Itrî",
        dialogue:
          "Bir ustayı gerçek usta yapan şey, kendi sesinin güzelliği değil; kendisinden sonra o sesi yaşatacak genç kalpleri yetiştirmesidir.",
        funFact:
          "2012 yılı, Itrî'nin vefatının 300. yıl dönümü olması dolayısıyla UNESCO tarafından 'Uluslararası Itrî Yılı' ilan edilmiştir.",
        image: "assets/images/harizmi_s1_house_of_wisdom.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Mum ışığında el yazması musiki defterleri, ney, ud ve kamış kalem.",
      },
      {
        title: "Kurtuba'dan İstanbul'a Uzanan Güzellik Köprüsü",
        narration:
          "9. yüzyılda Kurtuba bahçelerinde uda beşinci teli takan Ziryâb ile 17. yüzyılda İstanbul'da çiçek yetiştirip Segâh makamında besteler yapan Itrî, aynı büyük medeniyet ağacının iki parlak dalıydı. İkisi de doğayı sevmiş, bilimi sanatla birleştirmiş ve insan ruhuna nezaket aşılamıştı.\n\nOnların hikayesi bize gerçek gücün gürültüde değil, uyumda ve estetikte saklı olduğunu hatırlatır. Hayatı güzelleştiren her nota, her temiz sofra ve her dikilen çiçek, insanlığa bırakılmış birer iyilik mirasıdır.",
        speaker: "Ziryâb & Itrî'nin Mirası",
        dialogue:
          "Hayatınıza ritim, sözünüze nezaket, bahçenize çiçek katın; çünkü güzellik paylaşıldıkça dünyayı iyileştirir!",
        funFact:
          "Bugün 100 Türk Lirası banknotlarının arka yüzünde, Türk musikisinin büyük ustası Buhûrîzâde Mustafa Itrî'nin portresi, ney, kudüm ve ud figürleri yer almaktadır.",
        image: "assets/images/fatima_s1_qarawiyyin_foundation.png",
        atmosphere: "STARLIT_OBSERVATORY",
        visualNote:
          "Yıldızlı bir akşamda Endülüs kemerleri ve İstanbul kubbelerini birleştiren zarif bir bahçe ve beş telli ud.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Hem müzikte hem de günlük yaşam kültüründe yeni buluşlar yaptın. Sanatını ve bilginin zarafetini toplumda nasıl kalıcı hale getirirsin?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Buluşlarımı kimseye öğretmem, sadece tek başıma çalarak sırrımı kendime saklarım.",
          feedback:
            "Paylaşılmayan sanat ustasıyla birlikte kaybolur; oysa Ziryâb ve Itrî yüzlerce öğrenci yetiştirmiştir.",
          isHistoricalTruth: false,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Yetenekli gençler için okul açar, uda beşinci teli ve yeni makamları öğreterek müziği şifa ve yaşam zarafetiyle birleştirip gelecek kuşaklara aktarırım.",
          feedback:
            "Tarihsel Gerçek! Ziryâb Kurtuba'da ilk konservatuvarı kurup yaşam zarafetini yaymış, Itrî ise yetiştirdiği öğrenciler ve ölümsüz besteleriyle yüzyılları aşmıştır.",
          isHistoricalTruth: true,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "Eski usullerin dışına çıkmaktan korkar, ne yeni bir tel eklerim ne de yeni bir beste yaparım.",
          feedback:
            "Gelenekten güç alıp yenilik yapmasalardı ne beş telli ud ne de Itrî'nin ölümsüz eserleri doğabilirdi.",
          isHistoricalTruth: false,
        },
      ],
      historicalTruthExplanation:
        "Ziryâb 9. yüzyıl Kurtuba'sında uda 5. teli ekleyip ilk müzik okulunu ve modern sofra/giyim adabını kurmuş; 17. yüzyılda Itrî ise İstanbul'da klasik musikinin en kalıcı eserlerini besteleyerek UNESCO tarafından anılan bir kültür mirası bırakmıştır.",
      quoteHighlight:
        "Sanat, insanın kalbini incelten ve toplumu uyum içinde birleştiren en zarif dildir.",
    },
    rewardArtifact: {
      id: "artifact-ziryab-eagle-oud",
      name: "Ziryâb'ın Beş Telli Udu ve Itrî'nin Nota Mecmuası",
      imagePath: "assets/images/ziryab_cordoba_music.png",
      pointType: "IHSAN_MEDENIYET",
      pointLabel: "Sanat ve Estetik Puanı",
      points: 60,
      unlockedTitle: "Zarafet ve Musiki Ustası",
      shortDescription:
        "Ortasına kırmızı beşinci tel eklenmiş sedef kakmalı Endülüs udu, kartal tüyü mızrap ve Itrî'nin el yazması makam defteri.",
      historicalNote:
        "Endülüs'te Ziryâb'ın geliştirdiği beş telli ud ve Osmanlı'da Itrî'nin zirveye taşıdığı makam müziği, dünya müzik ve tedavi tarihinin temel taşlarındandır.",
      accentColor: "#D97706",
      hotspots: [
        {
          id: "oud-fifth-red-string",
          xPercent: 32,
          yPercent: 42,
          title: "Kırmızı Beşinci Tel",
          secretFact:
            "Ziryâb'ın dört unsuru simgeleyen tellerin ortasına 'insan ruhunu ve duygusunu' temsilen eklediği beşinci tel.",
        },
        {
          id: "eagle-feather-plectrum",
          xPercent: 58,
          yPercent: 55,
          title: "Kartal Tüyü Mızrap",
          secretFact:
            "Tellerin yıpranmasını önleyen ve daha yumuşak, berrak bir ses çıkmasını sağlayan hafif mızrap.",
        },
        {
          id: "itri-segah-manuscript",
          xPercent: 75,
          yPercent: 34,
          title: "Itrî'nin Segâh Beste Yaprağı",
          secretFact:
            "Üç asırdır kubbelerde yankılanan ve 100 TL banknotlarımızda da simgelenen ölümsüz musiki mirası.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Ziryâb'ın uda beşinci teli eklemesi ve sert tahta yerine kartal tüyü mızrap kullanması bize yenilikçilik hakkında ne anlatır?",
      "Eski darüşşifalarda (hastanelerde) hastaları iyileştirmek için ilaçların yanında neden su sesi ve müzik kullanılıyordu?",
      "Günlük hayatımızda sofra düzenine, temizliğe ve güzel konuşmaya özen göstermek çevremizi nasıl etkiler?",
    ],
  }),
];
