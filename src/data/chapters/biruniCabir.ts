import { buildChapter } from "../storyBuilders";
import { StoryChapter } from "../storyTypes";

export const BIRUNI_CHAPTERS: StoryChapter[] = [
  buildChapter({
    id: "biruni-ch1",
    heroId: "biruni",
    chapterNumber: 1,
    title: "Bir Dağın Tepesinden Dünyanın Çapını Ölçen Bilgin",
    subtitle: "Tek bir dağ, bir usturlap ve sabırlı bir hesapla bütün Dünya'nın boyu ölçüldü",
    estimatedMinutes: 9,
    scenes: [
      {
        title: "Kâs'ın Damlarında Yıldız Sayan Çocuk",
        narration:
          "Aral Gölü'nün güneyinde, Âmû Derya'nın bereketli deltasında Hârizm adında zengin bir ülke vardı. Başkenti Kâs'ta, 973 yılının eylül ayında küçük bir çocuk dünyaya geldi: Ebû Reyhân Muhammed bin Ahmed. Sonraları herkes ona Bîrûnî dedi; söylendiğine göre 'Bîrûn', 'şehrin dış mahallesi' demekti ve o, surların dışındaki bir semtte büyümüştü.\n\nKüçük Ebû Reyhân akşam olunca evlerin düz damlarına çıkar, çölden gelen serin rüzgârı yüzünde hissederek yıldızları sayardı. Uzaktan kervan çıngıraklarının sesi gelir, o ise gökteki ışıkların neden her gece aynı yerde doğmadığını düşünürdü. Mahalle hocalarından öğrendikleriyle yetinmedi; daha on yedi yaşındayken Güneş'in öğle vakti gökte ne kadar yükseldiğini ölçüp Kâs'ın enlemini hesapladı. Küçücük bir şehirde, elindeki basit bir aletle koca gökyüzünü ölçmeye cesaret etmişti.\n\nGeceleri mum ışığında kitap okur, bir kitapta bulamadığı cevabı gökyüzünde aramaya giderdi. Bir gün sorduğu her sorunun cevabını bulmaya karar verdi. Bu küçük karar, ileride yüzlerce eser yazacak bir bilginin ilk büyük adımıydı.",
        speaker: "Genç Bîrûnî",
        dialogue:
          "Gökyüzü bize her gece yeni bir soru soruyor; ben de cevabı sayılarda aramaya karar verdim!",
        funFact:
          "Bîrûnî 973'te doğdu, 1048 civarında Gazne'de vefat etti ve ardında yüzün çok üzerinde eser bıraktı. Bugün Ay'daki bir kratere onun adı verilmiştir.",
        image: "assets/images/ibn_sina_s1_bukhara_library.png",
        atmosphere: "STARLIT_OBSERVATORY",
        visualNote:
          "Çölün kıyısındaki Orta Asya şehrinde, düz bir damın üzerinde yıldızlı gökyüzüne bakan meraklı bir genç ve yanında basit bir gözlem aleti.",
      },
      {
        title: "Aynı Ay Tutulması, İki Şehir",
        narration:
          "Yıllar geçtikçe genç bilgin yalnızca gökyüzünü seyretmekle kalmadı; yeryüzünün haritasını da gökten çıkarmaya heveslendi. Fikri şuydu: Bir ay tutulması her yerde aynı anda yaşanır, ama saatler şehirden şehre değişir. İki şehirdeki gözlemciler tutulmanın başlangıcını kendi saatlerine göre not edip karşılaştırırsa, şehirler arasındaki doğu-batı uzaklığı hesaplanabilirdi.\n\n997 yılında bir ay tutulması yaklaşıyordu. Kâs'ta Bîrûnî, çok uzaklardaki Bağdat'ta ise büyük matematikçi Ebü'l-Vefâ el-Bûzcânî aynı geceyi beklemeye başladı. Gece yarısı, Ay'ın gümüş yüzünü gölge yavaşça kaplarken ikisi de yıldız yüksekliklerine bakıp zamanı kaydetti. Sonra defterler karşılaştırıldı ve iki şehir arasındaki zaman farkı ortaya çıktı. Bilim, uzaklıkları aşıp iki bilgini aynı gökyüzünün altında buluşturmuştu.\n\nBir yerin haritadaki yerini bulmak için hem enlemi hem de boylamı bilmek gerekir. Enlemi Güneş ve yıldızlar kolayca söylerdi; boylam ise çok daha zordu. Bîrûnî, boylamı gökyüzünden okumayı öğreten bilginlerden biri oldu; bunu sabırla, üstelik hiç telefon ya da harita olmadan başardı.",
        speaker: "Bîrûnî",
        dialogue:
          "Ay'ı iki şehirden birden izleyeceğiz: gölge aynı, saatlerimiz farklı. İşte aradığımız uzaklığın ipucu!",
        funFact:
          "Bu ortak gözlem 997 yılında yapıldı. Bîrûnî, tutulma gözlemiyle şehirler arası boylam farkını bulma yöntemini 'Tahdîd' adlı kitabında anlatır.",
        image: "assets/images/harizmi_s2_sundial_observatory.png",
        atmosphere: "STARLIT_OBSERVATORY",
        visualNote:
          "Gece yarısı bir gözlem terasında, kısmen gölgelenmiş Ay'a bakan ve kayıt defterine not alan bir bilgin; uzakta ikinci şehrin ışıkları.",
      },
      {
        title: "Dağ Geçitlerinden Gazne'ye",
        narration:
          "Bîrûnî'nin yaşadığı çağda siyasi dengeler sık sık değişiyordu. Hârizm, 1017 yılı civarında Gazne Sultanı Mahmud'un hâkimiyetine girdi. Sultan Mahmud, başkentini şairlerin, hekimlerin ve bilginlerin toplandığı bir yer yapmak istiyordu. Bîrûnî de birçok bilginle birlikte bugün Afganistan'da bulunan Gazne'ye geldi. Dağ geçitlerinden geçen uzun bir yolculuktu; develerin sırtında yükler halinde kitaplar, defterler ve ölçü aletleri taşınıyordu.\n\nGazne'ye vardığında yüksek surlar, geniş çarşılar ve kubbeli medreselerle karşılaştı. Evini özlemişti ama merakı özleminden büyüktü, çünkü bu şehir Hindistan'a açılan bir kapıydı. Sultan'ın seferlerine eşlik eden bilginler yeni ülkeleri görecek, yeni kitaplar bulacaktı. Bîrûnî bu yeni hayatı kaderine küserek değil, merakla karşıladı; önüne çıkan her yeri kocaman bir laboratuvar saydı.\n\nGazne'nin akşamlarında sultanın bilginleri toplanıp şiirden gökbilime kadar her konuyu konuşurdu. Bîrûnî kimi zaman susup dinler, kimi zaman bir sayıyla bütün tartışmayı bitirirdi. Çünkü ona göre güzel söz değerliydi ama doğru ölçü her sözden güçlüydü.",
        speaker: "Bîrûnî",
        dialogue:
          "Yolum nereye düşerse düşsün, gökyüzü orada da var; ölçecek bir dağ, soracak bir bilge elbet bulunur.",
        funFact:
          "Sultan Mahmud devrinde Gazne Devleti'nin sınırları bugünkü Afganistan'dan Pakistan'a ve Kuzey Hindistan'ın bir bölümüne kadar uzanıyordu.",
        image: "assets/images/islamic_world_atlas_map.png",
        atmosphere: "DAWN_MIST",
        visualNote:
          "Sisli bir sabahta dağ geçidinden inen kervan; develerin üzerinde kitap sandıkları ve ölçü aletleri, uzakta surlu Gazne şehri.",
      },
      {
        title: "Nandana'da Ovanın Ortasındaki Tepe",
        narration:
          "Bîrûnî yıllar boyunca Pencap bölgesini dolaştı. Bugün Pakistan sınırları içinde kalan Tuz Sıradağları'nda, Nandana adlı kalenin yakınında durdu. Önünde uçsuz bucaksız bir ova yayılıyor, ovanın ortasından tek başına bir tepe yükseliyordu. Hava kuru ve berraktı; uzaktaki ufuk bir cetvelle çizilmiş gibi netti. Bîrûnî bu manzarayı görünce gözleri parladı: 'İşte aradığım sahne!'\n\nDaha önce halife Me'mûn'un bilginleri, Sincar çölünde günlerce yürüyerek Dünya'nın boyunu ölçmüştü. Bunun için çok insan, çok zaman ve uzun yollar gerekmişti. Bîrûnî ise ilginç bir soru sordu: 'Dünya yuvarlaksa, bir tepeden bakınca ufuk çizgisi biraz aşağıda görünmeli. Bu küçük kayma bile Dünya'nın büyüklüğünü fısıldamalı!' Ama önce tepenin tam yüksekliğini bilmesi gerekiyordu.\n\nYanında iki yardımcısı vardı: biri ölçü ipini taşıyor, öteki kâğıt ve kalem tutuyordu. Bîrûnî onlara tepeyi gösterip gülümsedi. Güneş yükselirken ovanın üzerinde sıcak hava titreşiyor, çalışma başlamak üzereydi. Kalenin burcundaki nöbetçiler, ovaya inen bu tuhaf bilgin topluluğuna şaşkınlıkla bakıyordu. Kimsenin aklına, o gün orada Dünya'nın boyunun hesaplanacağı gelmezdi.",
        speaker: "Bîrûnî",
        dialogue:
          "Dünya'yı ölçmek için bütün yolları yürümek şart değil; doğru yere çıkıp doğru soruyu sormak yeter!",
        funFact:
          "Nandana Kalesi, bugünkü Pakistan'ın Pencap bölgesindeki Tuz Sıradağları'nda yer alır. Bîrûnî ölçümünü yaklaşık 1018-1025 yılları arasında yapmış olmalıdır.",
        image: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Geniş bir ovanın ortasında yükselen tek bir tepe ve eteğinde ölçü aletleriyle duran bir bilgin ile iki yardımcısı.",
        midDecision: {
          title: "ARA KARAR: Tepenin Yüksekliğini Nasıl Ölçersin?",
          question:
            "Önünde yüzlerce metre yükselen, dik yamaçlı bir tepe var ve yüksekliğini tam olarak bilmen gerekiyor. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Çok uzun bir ip taşıyıp tepeden aşağı sarkıtarak ipin boyunu ölçerim.",
              feedback:
                "Mantıklı görünüyor ama dik ve yüksek bir yamaçta ip eğilir, takılır ve iş tehlikeli olur. Bîrûnî'nin gözlem ve hesapla çözdüğü daha akıllı bir yol vardı.",
              isBestChoice: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Ovada aynı doğru üzerinde iki nokta seçer, aralarını iple ölçer; her noktadan tepeye usturlapla bakıp açıları bulur ve trigonometriyle yüksekliği hesaplarım.",
              feedback:
                "Harika! Bîrûnî'nin yöntemi buydu: tepeye hiç çıkmadan, iki açı ve bir mesafeyle yüksekliği bulmak.",
              isBestChoice: true,
            },
          ],
        },
      },
      {
        title: "İki Nokta, İki Açı",
        narration:
          "Bîrûnî yardımcılarına ovada düz bir çizgi çizdirdi. Elindeki ölçü ipi, eşit aralıklarla düğümlerle işaretlenmişti. İlk noktadan ikinci noktaya kadar düğümleri tek tek saydılar ve aradaki mesafeyi deftere yazdılar. Rüzgâr ipi sallıyor, ayaklarının altındaki toprak kuru kuru çıtırdıyordu. Bîrûnî, hata olmasın diye ipi bir kez daha gerdirip saydırdı.\n\nSonra usturlabı gözünün hizasına kaldırıp tepenin ucuna nişan aldı. Aletin hareketli cetveli tepenin doruğunu gösterdi; açıyı okuyup deftere not etti. Ardından ikinci noktaya yürüyüp aynı ölçümü tekrarladı. Artık elinde iki açı ve bir mesafe vardı. Bunlar, bir üçgenin üç ipucuydu. Bîrûnî trigonometri tablolarını avucunun içi gibi bilirdi; sinüs ve tanjant değerleriyle bu ipuçlarını tepenin yüksekliğine dönüştürmeye koyuldu.\n\nYardımcılar nefeslerini tutmuş, kalemin kâğıt üzerindeki cızırtısını dinliyordu. Bîrûnî hesap yaparken ara sıra başını kaldırıp tepeye bakıyor, sayıların gerçekte neye karşılık geldiğini gözünde canlandırıyordu. Onun için matematik, görünmeyeni görünür kılan bir gözlüktü.",
        speaker: "Bîrûnî",
        dialogue:
          "Gözümle bakıp tahmin etmem; iki açıyı ve bir ipi ölçerim, gerisini sayılar anlatır.",
        funFact:
          "'Usturlap' sözcüğü Yunancada 'yıldız alan' anlamına gelir. Bîrûnî usturlap üzerine ayrı bir kitap yazmış ve bu aleti geliştirmeye katkı yapmıştır.",
        image: "assets/images/harizmi_usturlap.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Düğümlü bir ölçü ipi ovada gerili, bir bilgin usturlabı gözüne kaldırmış uzaktaki tepenin zirvesine nişan alıyor.",
      },
      {
        title: "Düğümlü İpin Sonucu",
        narration:
          "O akşam çadırında mum ışığında hesap yaptı. İki açıyı, aradaki mesafeyi ve trigonometri tablolarını birleştirdiğinde tepenin yüksekliği ortaya çıktı: yaklaşık 652 zira. Zira, dirsekten orta parmağın ucuna kadar olan uzunluğa dayanan bir ölçü birimiydi ve yarım metre kadar tutuyordu. Bugünün ölçüleriyle bu, üç yüz metre dolayında bir yükseklik demekti.\n\nBîrûnî sonuca hemen güvenmedi. Ertesi gün aynı ölçümü yeniden yapmak istedi, küçük farklara dikkat etti ve her sayıyı ayrı ayrı deftere geçirdi. Hırslı bir kâşif gibi aceleci değil, sabırlı bir kâtip gibi titizdi. Çünkü Dünya'nın boyunu ölçecek hesapta küçücük bir hata bile koskocaman bir yanlışa dönüşebilirdi. Tepenin yüksekliğini sağlama aldıktan sonra, asıl büyük ölçüm için hazır olduğunu hissetti.\n\nÇadırın dışında yıldızlar parlıyor, nöbetçilerin ateşi çıtırdıyordu. Bîrûnî uyumadan önce deftere bir not düştü: Yarın tepeden bakıp ufku ölçeceğim. Hesabın ikinci yarısı artık zirvede, gökle toprağın buluştuğu çizgide onu bekliyordu.",
        speaker: "Bîrûnî",
        dialogue:
          "Bir sayıyı bir kez bulmak yetmez, onu bir kez daha bulmak gerekir; işte o zaman güvenebilirim.",
        funFact:
          "Bîrûnî'nin hesabına göre tepenin yüksekliği 652 zira ve birkaç küçük parçaydı. Zira'nın bugünkü karşılığı kaynaklara göre biraz değiştiği için sonuç yaklaşık 300-320 metre olarak anılır.",
        image: "assets/images/meryem_el_icliyye_astrolabe.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Mum ışığında bir çadırın içinde, düğümlü ip ve usturlap yanında açık bir hesap defteri başında çalışan sabırlı bilgin.",
      },
      {
        title: "Zirvede Ufuk Çizgisi",
        narration:
          "Bîrûnî, hava berrak olan bir günü bekledi. Sabahın erken saatinde yardımcılarıyla birlikte yamaçtan yukarı tırmandı. Taşlar ayaklarının altından kayıyor, rüzgâr ceketlerini savuruyordu. Zirveye ulaştığında soluğunu toparladı ve karşısına geniş ova serildi; uzaklarda toprağın gökle buluştuğu ince çizgi gümüş bir tel gibi parlıyordu.\n\nUsturlabını astı, hareketli cetvelini ufuk çizgisine çevirdi. Gözleri aletin üzerindeki işaretleri dikkatle okudu. Ufuk çizgisi, gözün hizasındaki düz çizginin biraz aşağısında kalıyordu; tam 34 dakika kadar. Dakika, bir derecenin altmışta biridir; yani bu açı derecenin yarısından biraz fazlaydı, bir saç telinin kalınlığı kadar küçüktü. Ama işte Dünya'nın yuvarlak olduğunu ve boyunu bu küçücük açı fısıldıyordu.\n\nÖlçümü bir kez daha tekrarladı ve iki okuma birbirine yakın çıkınca derin bir nefes aldı. Aşağıda ova uzanıyor, uzakta küçük köyler ve tarlalar görünüyordu. O an bütün bu manzaranın devasa bir topun yüzeyi olduğunu düşünmek ona tuhaf ve çok güzel geldi.",
        speaker: "Bîrûnî",
        dialogue:
          "Bakın, ufuk gözümün hizasından biraz aşağıda kalıyor. Dünya yuvarlak olmasa bu küçük kayma hiç olmazdı!",
        funFact:
          "Ufuk çizgisinin yatay çizgiden aşağıda görünmesine 'ufuk çöküklüğü' denir. Bîrûnî bunu yaklaşık 34 dakika ölçmüştür; bir derecenin 60'ta biri 1 dakikadır.",
        image: "assets/images/biruni_earth_radius.png",
        atmosphere: "DAWN_MIST",
        visualNote:
          "Tepenin zirvesinde sabah ışığında usturlabını ufuk çizgisine doğrultan bilgin; önünde sonsuz bir ova ve ince gümüş bir ufuk.",
      },
      {
        title: "Hesap Gecesi: Dünya'nın Yarıçapı",
        narration:
          "O gece mum ışığında, tepenin yüksekliğini ve ufuktaki 34 dakikalık açıyı yan yana koydu. Kullandığı kural şuydu: Dünya'nın yarıçapı, tepenin yüksekliğiyle açının kosinüsünün çarpımının, bir eksi kosinüse bölünmesiyle bulunur. Kosinüs sayısı bire çok yakın olduğu için paydadaki fark minnacıktı; hesap, çok dikkatli yapılmak zorundaydı.\n\nUzun uğraşlardan sonra sayfanın en altına sonucu yazdı: yaklaşık 12 milyon 851 bin zira. Bunu bugünkü ölçülere çevirdiğimizde, Dünya'nın yarıçapı için yaklaşık 6.340 kilometre çıkıyor. Bugün ölçülen ortalama yarıçap ise 6.371 kilometre; yani bin yıl önce, bir dağ, bir usturlap ve bir ip ile yapılan hesap gerçeğe yüzde birden az bir farkla yaklaşmıştı. Bîrûnî kalemini bıraktı, mumun alevine bakıp gülümsedi.\n\nKendini büyük görmedi; sonucu deftere, olası hata payını da yanına yazdı. Daha iyi aletlerle daha iyi sonuç alınabileceğini de not etti. Bilim, kesin konuşmaktan çok dürüst ölçmek demekti; o gece bunu bir kez daha öğrendi.",
        speaker: "Bîrûnî",
        dialogue:
          "Küçücük bir açı, kocaman bir Dünya'yı ele verdi! Sabır ve doğru hesap her sırrı çözer.",
        funFact:
          "Bîrûnî'nin bulduğu yarıçap yaklaşık 6.340 km; bugünkü ortalama değer 6.371 km. Zira birimine bağlı olarak sonuçlar kaynaklarda küçük farklarla verilir.",
        image: "assets/images/meryem_s2_celestial_globe.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Mum ışığında masanın üzerinde kâğıtlar, bir yer küresi ve usturlap; bilgin elinde kalemle hesap yapıyor, kâğıtlarda üçgen çizimleri.",
      },
      {
        title: "Kitâbü'l-Hind: Saygıyla Dinleyen Bilgin",
        narration:
          "Bîrûnî Hindistan'da yalnızca dağ ölçmedi. Yıllar boyunca bu ülkenin bilginleriyle sohbet etti, Sanskritçe öğrendi ve onların astronomi, matematik, edebiyat, takvim ve geleneklerini kendi dillerinden okudu. Kimi zaman bilginlerin kapısını çalıp sabırla sorular sordu, kimi zaman günlerce bir kitabın tek bir sayfasını çözmeye uğraştı.\n\nSonunda yaklaşık 1030 yılında 'Kitâbü'l-Hind' adlı büyük eserini yazdı. Kitapta Hindistan'ı küçümsemeden, ön yargıya kapılmadan, duyduğunu ve gördüğünü olduğu gibi anlatmaya çalıştı. Başka kültürleri anlamak için önce dinlemeyi, sonra yazmayı seçti. Dünya'nın boyunu ölçen o sağlam akıl, insanları anlamaya çalışan sıcak bir yürekle birleşmişti. Merak ile saygı, Bîrûnî'nin iki kanadıydı.\n\nBîrûnî kitabında başka kültürlerin bilgisini kendi bilgisini küçülterek değil, genişleterek anlattı. Hintli bilginlerin hesap ve gözlemlerini gördükçe şaşırdı, hayranlığını gizlemedi. Böylece medeniyetlerin birbirinden öğrenerek büyüdüğünü gösterdi. Kitabında Hint takvimlerinden, yıldız adlarından, sayı sistemlerinden ve inançlardan uzun uzun söz etti; bunları anlatırken kendi görüşünü ayrı, onlardan duyduklarını ayrı tutmaya özen gösterdi. Bu dürüstlük, kitabı bin yıl sonra bile değerli kıldı.",
        speaker: "Bîrûnî",
        dialogue:
          "Bir milleti anlatmak istiyorsan önce onların dilini öğren, sonra söz söyle; yoksa yazdığın şey ancak kendi gölgen olur.",
        funFact:
          "Kitabın uzun adı, 'Hindlilere ait, akla uygun ya da uygun olmayan sözlerin araştırılması' anlamına gelir. Eser, bugün Hint kültür tarihinin en önemli kaynaklarından biri sayılır.",
        image: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Sıcak ışıklı bir medrese avlusunda, Hint ve İslam bilginleri aynı rahlenin başında birbirini saygıyla dinliyor, ortada açık bir kitap.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Bîrûnî gibi sen de bir dağın tepesindesin ve Dünya'nın ne kadar büyük olduğunu merak ediyorsun. Elinde usturlap, ölçü ipi ve defter var. Ne yaparsın?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Dünya'nın boyunu öğrenmek için yıllarca yürür, adımlarımı tek tek sayarım.",
          feedback:
            "Bu yöntem çok uzun sürer ve hata payı büyüktür. Bîrûnî aynı sonuca tek bir yerde durarak ulaşabileceğini fark etti.",
          isHistoricalTruth: false,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Dünya'nın boyu ölçülemez; bunu bilmeye çalışmak boşuna, derim.",
          feedback:
            "Bîrûnî merakı yarı yolda bırakmadı; sorunun cevabını ölçüm ve akılla aradı.",
          isHistoricalTruth: false,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "Tepenin yüksekliğini ve ufuk çizgisinin ne kadar aşağıda göründüğünü ölçer, trigonometriyle Dünya'nın yarıçapını hesaplarım.",
          feedback:
            "Tarihi hakikat! Bîrûnî tam olarak böyle yaptı ve Dünya'nın yarıçapını gerçeğe çok yakın buldu.",
          isHistoricalTruth: true,
        },
      ],
      historicalTruthExplanation:
        "Bîrûnî, Nandana yakınlarında önce tepenin yüksekliğini iki noktadan ölçtüğü açılarla hesapladı, sonra zirvede ufuk çizgisinin yaklaşık 34 dakika aşağıda göründüğünü buldu. Bu iki sayıdan Dünya'nın yarıçapını yaklaşık 6.340 kilometre buldu; bugünkü ortalama değer olan 6.371 kilometreye şaşırtıcı biçimde yakındır.",
      quoteHighlight:
        "Küçücük bir açı, kocaman bir Dünya'yı ele verdi!",
    },
    rewardArtifact: {
      id: "artifact-biruni-usturlap-olcu-ipi",
      name: "Bîrûnî'nin Usturlabı ve Düğümlü Ölçü İpi",
      imagePath: "assets/images/biruni_earth_radius.png",
      pointType: "BILGELIK",
      pointLabel: "Bilgelik Puanı",
      points: 55,
      unlockedTitle: "Dünyayı Ölçen Bilgin",
      shortDescription:
        "Nandana'da bir dağın tepesinden Dünya'nın boyunu hesaplayan Bîrûnî'nin usturlabı ve düğümlerle işaretlenmiş ölçü ipi.",
      historicalNote:
        "Bîrûnî'nin ölçümünün sonucu yaklaşık 6.340 km'dir. Bu değer, bugünkü ortalama yarıçapa bir bin yıl önceki bir hesap için olağanüstü derecede yakındır.",
      accentColor: "#0EA5E9",
      hotspots: [
        {
          id: "biruni-astrolabe-ring",
          xPercent: 50,
          yPercent: 40,
          title: "Hareketli Cetvel",
          secretFact:
            "Usturlabın arkasındaki hareketli cetvele alidat denir. Bîrûnî onu tepeye ve ufuk çizgisine doğrultarak açıları okurdu.",
        },
        {
          id: "biruni-knotted-rope",
          xPercent: 28,
          yPercent: 68,
          title: "Düğümlü Ölçü İpi",
          secretFact:
            "İp eşit aralıklarla düğümlenerek ovada iki gözlem noktası arasındaki mesafe hatasız ölçülürdü.",
        },
        {
          id: "biruni-34-minutes",
          xPercent: 72,
          yPercent: 30,
          title: "34 Dakikalık Açı",
          secretFact:
            "Ufuk çizgisinin gözün hizasından yaklaşık 34 dakika, yani derecenin yarısından biraz fazla aşağıda görünmesi, hesabın anahtarıydı.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Bîrûnî Dünya'nın boyunu ölçmek için neden yüzlerce kilometre yürümek yerine bir dağın tepesine çıkmayı seçti?",
      "Bîrûnî sonuca güvenmeden önce tepenin yüksekliğini neden ikinci kez ölçtü? Biz hangi işlerde bir şeyi iki kez kontrol etmeliyiz?",
      "Bîrûnî başka kültürlerin kitaplarını okurken neden ön yargılı davranmadı? Bundan sen ne öğrendin?",
    ],
  }),

  buildChapter({
    id: "biruni-ch2",
    heroId: "biruni",
    chapterNumber: 2,
    title: "Taşların ve Madenlerin Ağırlık Sırrı",
    subtitle: "Göz yanılır, parıltı kandırır; ama su ve terazi doğruyu söyler",
    estimatedMinutes: 9,
    scenes: [
      {
        title: "Gazne Çarşısında Parlayan İki Kırmızı Taş",
        narration:
          "Aradan yıllar geçmişti. Saçları ağarmış Bîrûnî, Gazne'nin kalabalık mücevher çarşısında dolaşıyordu. Tezgâhlarda yakutlar, zümrütler ve inciler ışıl ışıl parlıyor, kuyumcuların terazileri tıkırdıyordu. Havada gül yağı, baharat ve sıcak metal kokusu vardı. Bir satıcı, avucunda iki kırmızı taş tutarak bağırdı: 'Biri yakut, öteki parlak cam! Bakalım ayırabilecek misiniz?'\n\nÇevrede toplananlar taşları evirip çevirdi, ışığa tuttu; ama kimse emin olamadı. Renkleri de parlaklıkları da birbirine benziyordu. Bîrûnî gülümsedi. Gözün kolayca aldandığını biliyordu. Ama aldatılamayacak bir şey daha vardı: ağırlık. Aynı büyüklükteki iki taş, içlerindeki maddeye göre farklı ağırlıkta olurdu. O gün aklında yeni bir kitabın ilk satırı doğdu: Taşları ve madenleri görünüşlerine değil, ölçülebilir özelliklerine göre tanıtacaktı. Kalabalığın içinden bir çocuk, yaşlı bilginin gözlerindeki parıltıyı fark etti ve yanına sokulup ne merak ettiğini sordu. Bîrûnî gülümseyip henüz bilmediği bir şeye baktığını söyledi.\n\nAtölyesine döndüğünde yıllardır biriktirdiği defterleri açtı. Sayfalar sayılar, çizimler ve küçük notlarla doluydu. Gazne'nin günbatımı pencerelerden içeri süzülürken bu işin yıllar alacağını biliyordu ama sabretmeye hazırdı.",
        speaker: "Bîrûnî",
        dialogue:
          "Göz kandırılır, parıltı yanıltır; ama terazi ile su, sözünü eğip bükmez.",
        funFact:
          "Bu çarşı sahnesi hikâyeleştirilmiştir; ama Bîrûnî'nin mücevher kitabı gerçektir. Adı 'Kitâbü'l-Cemâhir fî Ma'rifeti'l-Cevâhir', yani 'Mücevherleri Tanımaya Dair Kitap'tır.",
        image: "assets/images/fatima_fihri_courtyard.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Güneşli bir çarşı avlusunda, tezgâhta parıldayan iki kırmızı taşı inceleyen yaşlı bilgin ve çevresinde meraklı kalabalık.",
      },
      {
        title: "Arşimed'in Banyosu ve Yeni Bir Fikir",
        narration:
          "Bîrûnî eski Yunan bilgini Arşimed'in meşhur hikâyesini kitaplardan biliyordu. Rivayete göre Arşimed, kralın tacının saf altından yapılıp yapılmadığını anlamaya çalışırken, banyoya girince suyun taştığını görmüş ve 'Buldum!' diye bağırmıştı. Hikâyenin doğruluğu tartışılsa da, bir cismin suyu yerinden ittiği, yani kapladığı hacmin suyla ölçülebileceği fikri çok sağlamdı.\n\nBîrûnî bu fikri bir adım öteye taşımak istedi. Tek bir taç için değil, onlarca madde ve taş için aynı ölçümü yapacaktı. Böylece her maddenin 'özgül ağırlığını', yani ağırlığının aynı hacimdeki suyun ağırlığına oranını bulacaktı. Bu oran, o maddenin kimlik numarası gibiydi: altınınki başka, demirinki başka, cam ve yakutunki başka. Defterini açtı, ilk sayfaya büyük harflerle sorusunu yazdı: 'Her maddenin ağırlık sırrı nedir?'\n\nOdanın köşesinde bir çırak merakla ona bakıyordu. Bîrûnî çırağa dönüp sırrı çözmek için önce dikkatli bakmayı öğrenmek gerektiğini söyledi. Çırak başını sallayıp kalemini aldı. Gazne'nin küçük bir atölyesinde yeni bir ölçüm yolculuğu başlıyordu.",
        speaker: "Bîrûnî",
        dialogue:
          "Her maddenin ağırlığı bir parmak izi gibidir; onu doğru ölçersem, sahtesini asıl olandan ayırabilirim.",
        funFact:
          "Arşimed'in 'Buldum!' diye bağırdığı banyo hikâyesi bir rivayettir; ama yer değiştiren su ilkesi M.Ö. 3. yüzyılda yaşamış Arşimed'e atfedilen gerçek bir bilimsel buluştur.",
        image: "assets/images/katip_celebi_books.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Mum ışığında rahlenin üzerinde açık eski bir kitap, yanında defter ve kalem; yaşlı bilgin düşünceli bir şekilde bir su kabına bakıyor.",
      },
      {
        title: "Koni Biçimli Kap ve Hassas Terazi",
        narration:
          "Bîrûnî atölyesine usta bir bakırcı çağırdı ve ondan özel bir kap yapmasını istedi. Kap koni biçimliydi, ağzının yakınında da küçük bir oluğu vardı. Kap ağzına kadar suyla doldurulduktan sonra içine bir madde bırakılırsa, taşan su oluktan akıp altındaki küçük bir kaba damlayacaktı. Bu damlayan su tartıldığında, maddenin hacmi hakkında kesin bilgi vermiş olacaktı.\n\nBir yanda da inceden inceye ayarlanmış bir terazi duruyordu. Kefeleri güneşte parlıyor, mıskal denilen küçük ağırlıklar, sedef bir kutuda sıra sıra dizilmişti. Bir mıskal yaklaşık dört buçuk gram ağırlığındaydı. Bîrûnî ağırlıkları parmak uçlarıyla tuttu, terazinin dilinin ortada durmasını bekledi. Atölyede hiç kimse konuşmuyordu; çünkü bu hassas ölçümde soluk bile fazlaydı.\n\nKapıdaki perde hafifçe kıpırdadı; rüzgârın bile terazinin dilini sallamasından korktukları için çıraklar kapıyı kapattı. Bîrûnî kefeye ilk ağırlığı koyarken derin bir nefes aldı. Büyük işler çoğu zaman bu kadar sessiz ve küçük hareketlerle başlar.",
        speaker: "Bîrûnî",
        dialogue:
          "Kabın oluğu damla damla sır verecek; biz de onları teraziyle dinleyeceğiz. Hadi, sessizce başlayalım.",
        funFact:
          "Bir mıskal yaklaşık 4,46 gramdı. Bîrûnî'nin kullandığı oluklu kap, bugün okullarda kullanılan taşırma kaplarıyla aynı mantıkla çalışırdı.",
        image: "assets/images/el_cezeri_workshop.png",
        atmosphere: "WORKSHOP_GEARS",
        visualNote:
          "Bakır koni biçimli bir kap, yanında küçük toplama kabı ve ince bir terazi; masada sedef kutuda sıralanmış küçük ağırlıklar.",
      },
      {
        title: "Ölçüm Tutmayınca Ne Yapmalı?",
        narration:
          "İlk deneyi küçük bir altın parçasıyla yaptı. Parçayı ipine bağlayıp yavaşça kaba daldırdı; taşan su oluktan akıp kabın içine damladı. Taşan suyu tarttı, altının kendisini tarttı ve oranı hesapladı. Sonuç güzeldi. Ama aynı deneyi ikinci kez yaptığında rakam biraz farklı çıktı. Kabın kenarında bir damla su kalmış gibi görünüyordu.\n\nÇıraklar sabırsızlandı. İçlerinden biri 'Efendim, fark çok küçük, bu kadarı önemsizdir!' dedi. Bîrûnî başını salladı. Eğer her maddede böyle küçük hatalar toplanırsa, tablo tamamen yanlış olabilirdi. Kap yeniden kurutuldu, su yeniden dolduruldu, oluk dikkatlice temizlendi. Bîrûnî ölçümü bir kez daha, sonra bir kez daha yaptı. Şimdi ne yapacağını düşünmeliydi: Küçük farkı görmezden mi gelecek, yoksa bunun peşine mi düşecekti?\n\nAtölyenin penceresinden öğleden sonranın sarı ışığı giriyordu. Bîrûnî kabın kenarına, oluğa ve terazinin kefelerine tek tek baktı. Hatanın küçük bir yerde saklandığını biliyordu; yeter ki onu bulmak için sabrı olsun.",
        speaker: "Bîrûnî",
        dialogue:
          "Küçük bir hata, büyük bir yanlışın tohumudur. Sebebini bulana kadar bırakmayacağım.",
        funFact:
          "Bîrûnî eserlerinde araçlarını, ölçüm koşullarını ve olası hata kaynaklarını açıkça yazar; böylece okuyucular yaptığını kontrol edebilirdi.",
        image: "assets/images/cezeri_s2_copper_float.png",
        atmosphere: "WORKSHOP_GEARS",
        visualNote:
          "Bakır bir kapta suyun taşıp oluktan damladığı an; başında kaşları çatık bir bilgin ve not alan çırak.",
        midDecision: {
          title: "ARA KARAR: Ölçümler Birbirini Tutmazsa?",
          question:
            "Aynı altın parçasını iki kez ölçtün ama sonuçlar küçük bir farkla birbirinden ayrıldı. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Fark küçük olduğu için ilk sonucu doğru kabul eder, deftere yazıp devam ederim.",
              feedback:
                "Acele eden bilim insanı, küçük hataları da tabloya taşır. Bîrûnî'nin güvenilirliği tam da bu titizlikten geliyordu.",
              isBestChoice: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Kabı temizler, deneyi birkaç kez daha tekrar eder, farkın nedenini araştırır ve tüm sonuçları deftere yazarım.",
              feedback:
                "Çok iyi! Tekrar ve kayıt, güvenilir bilgiye giden yoldur. Bîrûnî de hata nedenini bulana kadar çalıştı.",
              isBestChoice: true,
            },
          ],
        },
      },
      {
        title: "Madenler Sırayla Terazide",
        narration:
          "Hata kaynağı bulununca atölyede çalışma neşeyle sürdü. Altından sonra kurşun, bakır, demir, kalay ve tunç parçaları sırayla kaba daldırıldı. Her denemenin ardından Bîrûnî taşan suyu tartıyor, madenin kendi ağırlığını tartıyor, iki sayıyı yan yana yazıyordu. Ocakta kömür çıtırdıyor, çıraklar parçaları kurulayıp numaralandırıyordu.\n\nSonuçlar şaşırtıcıydı: Aynı büyüklükte bir altın parçası, demirden yaklaşık iki buçuk kat, kalaydan ise daha da ağırdı. Kurşun altından hafif ama demirden belirgin biçimde ağırdı. Küçük altın bir parça avucunuza sığdığı halde, kocaman bir demir çubuk kadar ağırlık yapabilirdi. Bîrûnî bunları sevinçle değil, bir saatçi gibi ciddiyetle kaydetti. Çünkü her sayı, birilerinin sahte madeni gerçekten ayırmasına yardımcı olacaktı.\n\nÇıraklardan biri 'Efendim, bu sayılar ne işe yarayacak?' diye sordu. Bîrûnî, 'Yarın bir tüccar sahte bir madenle gelirse, bu sayılar doğruyu söyleyecek,' diye cevap verdi. Çırak başını salladı; artık yaptıkları işin bir kuyumcunun, bir tüccarın ve bir halkın dürüstlüğünü koruduğunu anlıyordu.",
        speaker: "Bîrûnî",
        dialogue:
          "Altın avuca sığar ama ağırlığı demirin iki buçuk katıdır. Madenlerin sırrı hacimlerinde değil, içlerindeki yoğunlukta saklı!",
        funFact:
          "Bîrûnî'nin bulduğu özgül ağırlıklar bugünkü değerlere çok yakındır: bakır için yaklaşık 8,8-8,9 (bugün yaklaşık 9,0), demir için yaklaşık 7,8 (bugün 7,9), kurşun için yaklaşık 11,3-11,4 (bugün 11,3) gibi.",
        image: "assets/images/harizmi_s1_house_of_wisdom.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Geniş, kemerli bir atölye salonunda masalarda sıralı maden parçaları, kaplar ve teraziler; çıraklar ellerinde defterlerle çalışıyor.",
      },
      {
        title: "Parlayan Taşlar da Teraziye Çıkıyor",
        narration:
          "Sıra değerli taşlara geldi. Yakut, safir, zümrüt, inci ve billur gibi taşlar tek tek ipek bir mendilin üzerine yerleştirildi. Bîrûnî onları ışığa tuttu, renklerine hayranlıkla baktı, ama güzelliklerine kapılıp ölçüm kuralını bozmadı. Her biri koni biçimli kaba nazikçe bırakıldı, taşan su oluktan damlayıp tartıldı.\n\nYakutun ve safirin özgül ağırlığı zümrüt ile billurdan belirgin biçimde büyüktü. Sahte camlar ise ağırlıklarıyla kendilerini ele veriyordu. Bîrûnî, böylece gözle ayırt edilemeyen taşları iki rakamla ayırabileceğini gösterdi. Ertesi gün çarşıdaki satıcıyı atölyesine davet etti. Satıcı, iki kırmızı taşın birinin yakut, ötekinin cam olduğunu terazide görünce şaşkınlıktan elini ağzına götürdü. Parıltı kandırmıştı ama sayılar kandırmamıştı.\n\nBîrûnî satıcıya kızmadı; ona yöntemi sabırla gösterdi. Taşı suya sokup tartmanın bir sır olmadığını, herkesin öğrenebileceğini söyledi. Satıcı teşekkür etti. Bilgi, yalnızca bilginlerin değil, çarşının da yolunu aydınlatmaya başlamıştı. Taşların ağırlıklarını gösteren bu yeni liste, ertesi günden itibaren çarşıda dilden dile dolaştı; kuyumcular taşlarını ona getirip kontrol ettirmek için sıraya girdi.",
        speaker: "Bîrûnî",
        dialogue:
          "İki taş aynı kırmızıda parlayabilir, fakat aynı ağırlıkta olamaz. İşte sahte ile gerçek arasındaki fark!",
        funFact:
          "Bîrûnî'nin zümrüt ve inci için bulduğu değerler yaklaşık 2,6-2,7 arasındadır; bugünkü ölçümler de bu iki madde için 2,7 civarını verir.",
        image: "assets/images/ibnul_heysem_rainbow.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "İpek bir mendilin üzerinde yakut, zümrüt, safir ve inci; arkada güneş ışığında renkli yansımalar saçan cam küreler.",
      },
      {
        title: "18 Satırlık Altın Değerinde Tablo",
        narration:
          "Aylar süren çalışmanın sonunda Bîrûnî tabloyu tamamladı. Tabloda toplam on sekiz madde vardı; madenler ve değerli taşlar. Her biri için üç bilgi yazılmıştı: Altın ya da yakut gibi bir ölçü maddesiyle aynı hacimdeki miktarının ağırlığı, suda tartıldığında ağırlığı ve taşırdığı suyun ağırlığı. Satırların her biri onlarca deneyin sonucuydu.\n\nBîrûnî sayfaya bakarken parmaklarının boyalı ve nasırlı olduğunu fark etti. Yıllarca terazi, kap ve kâğıtla uğraşmıştı. Ama o sayfada, çocukluğundan beri aradığı şey vardı: bir kuyumcunun, bir hekimin, bir tüccarın ve bir meraklı çocuğun aynı tabloya bakıp doğruyu görebileceği güvenilir bir rehber. Bu tablo sonraları 12. yüzyıl bilgini Hâzinî tarafından 'Mîzânü'l-Hikme' adlı kitapta aktarıldı ve yüzyıllarca okundu.\n\nBîrûnî tabloyu bitirdiğinde kalemini yavaşça bıraktı, gözlerini kapatıp uzun uzun düşündü. Yılların emeği tek bir sayfaya sığmıştı. Ama o sayfa, sahtekârlığa karşı bir kalkan, dürüst ticaret için ise bir yol göstericiydi.",
        speaker: "Bîrûnî",
        dialogue:
          "On sekiz satır az görünebilir; ama her satırın arkasında yüzlerce dikkatli ölçüm, yüzlerce sabırlı gün var.",
        funFact:
          "Bîrûnî'nin tablosu 18 madde içerir. Tablonun bir bölümü, 12. yüzyıl bilgini el-Hâzinî'nin 'Mîzânü'l-Hikme' (Hikmet Terazisi) kitabında da yer almıştır.",
        image: "assets/images/ibn_sina_s2_canon_of_medicine.png",
        atmosphere: "STARLIT_OBSERVATORY",
        visualNote:
          "Işıklı bir masada açık el yazması; sütun sütun sayılar içeren bir tablo ve yanında kalem, hokka, küçük terazi.",
      },
      {
        title: "Ölüm Döşeğinde Bile Öğrenmek",
        narration:
          "Bîrûnî ömrünün sonlarına yaklaştığında gözleri zayıflamış, elleri titremeye başlamıştı. Ama kalemini bırakmıyor, hâlâ hesap yapıyor, hâlâ yeni sorular soruyordu. Gazne'de odasına gelen gün ışığı yavaş yavaş soluyor, kitaplar ve defterler yatağının kenarında sıra sıra duruyordu.\n\nRivayete göre hastayken yanına bir fakih ziyarete geldi. Bîrûnî, ona miras hukukuna dair bir soru sordu. Fakih şaşırarak 'Bu halde mi, efendim?' dedi. Bîrûnî gülümsedi: 'Bu meseleyi bilerek ölmem, bilmeden ölmemden daha iyi değil mi?' Fakih cevabı anlattı, Bîrûnî dikkatle dinledi. Bu hikâyenin doğruluğu tartışılsa da, onun hayatına çok yakışır: Bîrûnî son nefesine kadar öğrenmeyi ve sabırla çalışmayı bırakmayan bir bilgindi.\n\nOdasında hasta yatarken bile yanında kâğıt ve kalem bulundururdu. Gençlerin sorularına sabırla cevap verir, bilmediğini söylemekten çekinmezdi. Belki de büyük bilginleri büyük yapan şey, öğrenmekten hiç vazgeçmemeleriydi. Yatağının yanındaki rahlede, yıllarca kullandığı usturlap ve terazi duruyordu. Gözleri onlara takılınca hafifçe gülümsedi; o aletler ona yalnızca sayı değil, sabır ve alçakgönüllülük de öğretmişti.",
        speaker: "Yaşlı Bîrûnî",
        dialogue:
          "Öğrenmenin yaşı yoktur; bir soruyu cevaplanmış bilerek göçmek, cevapsız bırakmaktan iyidir.",
        funFact:
          "Bu hikâye, Yâkût el-Hamevî'nin eserinde rivayet olarak anlatılır. Bîrûnî'nin vefat tarihi genellikle 1048 olarak kabul edilir, bazı kaynaklar 1050 civarını verir.",
        image: "assets/images/ibn_sina_s1_bukhara_library.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Loş bir odada yatağında oturan yaşlı bilgin, yanında bir mum ve kitaplar; karşısında dikkatle dinleyen bir ziyaretçi.",
      },
      {
        title: "Terazinin Mirası",
        narration:
          "Bîrûnî'nin ölçümleri unutulmadı. Hâzinî onları kitabına aldı, sonra gelen bilginler Bîrûnî'nin tablolarına başvurdu. Yüzyıllar sonra özgül ağırlık, maden bilimcilerinin ve kuyumcuların kullandığı en temel ölçülerden biri hâline geldi. Bugün jeologlar, bir taşın cinsini belirlerken hâlâ onun yöntemine çok benzer ölçümlere bakıyor.\n\nBîrûnî çocuklara bir şey daha öğretiyor: Doğru bilgi, parlak bir görünüşte ya da yüksek sesle söylenen iddiada değil, tekrar tekrar ve sabırla yapılan ölçümlerde saklıdır. Terazi, su kabı ve defter... Üç basit araç, bir bilginin elinde bin yıl sonra bile hâlâ konuşuyor. Bîrûnî'nin hikâyesi bize titiz ve dürüst olmanın, bilimin en büyük gücü olduğunu hatırlatır.\n\nBugün bir okul laboratuvarında bir çocuk taşırma kabına bir taş bırakıp taşan suyu ölçerken, farkında olmadan bin yıl önceki bir bilginin sorusunu yeniden soruyor: Bu madde ne kadar ağır, neyle dolu? Sen de bir gün bir taşın ya da bir oyuncağın ağırlığını ölçerken Bîrûnî'nin izinden gidiyor olacaksın. Ölçerken sabırlı ol, yazarken dürüst ol, hata bulduğunda sevin; çünkü her düzeltilmiş hata, bilgiyi biraz daha sağlam kılar.",
        speaker: "Bîrûnî",
        dialogue:
          "Ölç, kaydet, tekrar et; bilgiyi hem kendine hem de gelecekteki meraklılara emanet etmenin yolu budur.",
        funFact:
          "Bîrûnî'nin Hindistan, astronomi, matematik, coğrafya, eczacılık, takvim ve mineraloji gibi alanlarda yüzlerce eser yazdığı bilinir; bunlardan bazıları günümüze ulaşamamıştır.",
        image: "assets/images/islamic_world_atlas_map.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Geniş bir sıcak ışıklı salonda, terazi, su kabı ve defter bir bilimsel eserin yanında; arka planda İslam dünyasının büyük haritası.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Çarşıda önüne iki parlak kırmızı taş konuyor. Satıcı biri yakut, biri cam diyor ama sen farkı gözle göremiyorsun. Ne yaparsın?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Taşları aynı kapla suyun taşmasına ve tartıya göre ölçer, özgül ağırlıklarını karşılaştırırım.",
          feedback:
            "Tarihi hakikat! Bîrûnî tam olarak böyle yaptı ve gözle ayırt edilemeyen taşları sayılarla birbirinden ayırdı.",
          isHistoricalTruth: true,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "En çok parlayan taşı seçer, o gerçektir derim.",
          feedback:
            "Parıltı yanıltıcıdır. Bîrûnî, güzel görünüşün kanıt olmadığını, ölçülebilir özelliklerin güvenilir olduğunu savunuyordu.",
          isHistoricalTruth: false,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "Satıcı yemin ederse ona inanırım, ölçüm yapmama gerek yoktur.",
          feedback:
            "Söze güvenmek kolaydır, ama kanıt aramak daha doğrudur. Bîrûnî 'Deney yap, ölç, kaydet' ilkesine bağlıydı.",
          isHistoricalTruth: false,
        },
      ],
      historicalTruthExplanation:
        "Bîrûnî, su dolu oluklu bir kap ve hassas terazi kullanarak on sekiz madde ve taşın özgül ağırlığını ölçtü. Bulduğu değerler bugünkü ölçümlere çok yakındır ve sahte taşı gerçeğinden ayırmaya yarar.",
      quoteHighlight:
        "Göz kandırılır, parıltı yanıltır; ama terazi ile su, sözünü eğip bükmez.",
    },
    rewardArtifact: {
      id: "artifact-biruni-yogunluk-terazisi",
      name: "Bîrûnî'nin Oluklu Kabı ve Hassas Terazisi",
      imagePath: "assets/images/biruni_gemstone_balance.png",
      pointType: "BILGELIK",
      pointLabel: "Bilgelik Puanı",
      points: 55,
      unlockedTitle: "Hassas Ölçüm Ustası",
      shortDescription:
        "Madenleri ve değerli taşları suyla ve teraziyle ölçerek özgül ağırlıklarını bulan Bîrûnî'nin oluklu bakır kabı ve ince terazisi.",
      historicalNote:
        "Bîrûnî'nin Kitâbü'l-Cemâhir ve ilgili ölçüm tabloları, İslam dünyasında özgül ağırlık biliminin en önemli kaynaklarındandır.",
      accentColor: "#F59E0B",
      hotspots: [
        {
          id: "biruni-conical-vessel",
          xPercent: 35,
          yPercent: 55,
          title: "Koni Biçimli Kap",
          secretFact:
            "Kabın yan tarafındaki oluk, taşan suyun tam olarak ayrı bir kaba damlamasını sağlıyordu.",
        },
        {
          id: "biruni-balance",
          xPercent: 68,
          yPercent: 42,
          title: "Hassas Terazi",
          secretFact:
            "Mıskal denilen küçük ağırlıklarla tartılan bu terazi, bir saç telinin ağırlığındaki farkları bile gösterecek kadar hassas çalışırdı.",
        },
        {
          id: "biruni-table",
          xPercent: 50,
          yPercent: 74,
          title: "18 Maddelik Tablo",
          secretFact:
            "Tablo madenlerin ve değerli taşların, toplam on sekiz maddenin özgül ağırlıklarını içeriyordu.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Bîrûnî iki kırmızı taşı ayırt etmek için neden gözüne güvenmedi? Sen hangi durumlarda gördüğün şeye hemen inanmazsın?",
      "Ölçümler birbirini tutmayınca Bîrûnî neden deneyi tekrarladı? Titiz ve sabırlı olmak hangi işlerimizde bize yardımcı olur?",
      "Bîrûnî ölümüne yakın bile öğrenmeye devam etti. Sen yaşlandığında hangi konuları öğrenmeye devam etmek istersin?",
    ],
  }),
];

export const CABIR_CHAPTERS: StoryChapter[] = [
  buildChapter({
    id: "cabir-bin-hayyan-ch1",
    heroId: "cabir-bin-hayyan",
    chapterNumber: 1,
    title: "İmbikten Damlayan Bilim: Kimya Laboratuvarının Doğuşu",
    subtitle: "Gerçek bilgi, ocak başında deneyle, ölçüyle ve kayıtla büyür",
    estimatedMinutes: 9,
    scenes: [
      {
        title: "Kûfe'de Sabahın İlk Isısı",
        narration:
          "Sekizinci yüzyılın sonlarında, Fırat kıyısındaki Kûfe şehrinde sabah ezanından önce bir atölyenin ocağı yakılırdı. Taşlardan örülmüş küçük bir odada kömür kıpkırmızı parlar, bakır kaplar ve cam şişeler raflarda sıra sıra dururdu. Havada duman, çam odunu ve sıcak metal kokusu asılı kalırdı. Bu atölyenin sahibi, Câbir bin Hayyân adıyla anılan bilgindi.\n\nCâbir hakkında kesin bilgi azdır; çoğu bilgi rivayetlere dayanır. Kimi kaynaklar onun Tûs kentinde doğduğunu, Kûfe'de yaşadığını ve Harun Reşid dönemi Bağdat'ında bulunduğunu söyler. Adına atfedilen onlarca kitap, hayatı kadar gizemlidir. Ama bu kitaplardaki en çarpıcı fikir bellidir: Doğayı anlamak için önce kurallara uyarak çalışmak, ölçmek ve deneme yapmak gerekir. Atölyeye girenler, ocağın başına geçmeden önce bu kuralı öğrenirdi.\n\nSabah ışığı küçük pencereden süzüldüğünde, raflardaki cam şişeler kehribar rengine bürünürdü. Çıraklar sessizce önlüklerini bağlar, defterlerini açar ve ustanın ilk sözünü beklerdi. Kûfe'nin uyanmasına daha vardı ama bu atölyede bilim çoktan uyanmıştı.",
        speaker: "Câbir'e atfedilen anlatıcı",
        dialogue:
          "Önce kurallar, sonra deney. Ocağın başında acele eden, hem bilimi hem kendini tehlikeye atar.",
        funFact:
          "Câbir bin Hayyân adıyla anılan yüzlerce eserin hepsini tek bir kişinin yazıp yazmadığı tarihçiler arasında tartışmalıdır. Bu yüzden eserlere 'Câbir'e atfedilen' denir.",
        image: "assets/images/el_cezeri_workshop.png",
        atmosphere: "WORKSHOP_GEARS",
        visualNote:
          "Şafakta taş bir atölyede kızaran kömür ocağı, rafta bakır kaplar ve cam şişeler; yüzü gösterilmeyen sakin bir bilgin eldiven giymiş hazırlık yapıyor.",
      },
      {
        title: "Altın Hayalinden Deney Disiplinine",
        narration:
          "O çağın simyacıları, madenleri altına çevirmeyi hayal ederdi. Câbir'e atfedilen yazılarda da bu hayal geçer. Ama aynı yazılarda çok önemli bir fark vardır: Hayal kurmakla yetinilmez, her şeyin bir sebebi olduğu ve o sebebin deneyle araştırılması gerektiği söylenir. Sözlerin değil, yapılan işin gücü vurgulanır.\n\nBağdat'ın kâğıt kokulu kitap pazarlarında dolaşan bir çırak, bir gün usta ile sohbet ederken sordu: 'Efendim, bu kadar kitap okudum; neden hâlâ ustalaşamadım?' Usta gülümsedi. Ona göre bilgi, kitaplardan okunup bırakılacak bir şey değildi. Bir şeyi gerçekten bilmek, onu kendi ellerinle deneyip sonucunu görmek demekti. Kitaplar yol gösterirdi, ama deney yolun kendisiydi. Böylece kitap okuyan çırak, ocağın başına geçti.\n\nOcak başında ilk gün hiçbir şeyi beceremedi; kaplar devrildi, odunlar fazla yandı, defter sayfaları dumandan karardı. Ama usta onu azarlamadı. 'Her usta bir zamanlar çıraktı,' dedi. 'Önemli olan, düştüğünde nedenini öğrenip yeniden kalkmaktır.'",
        speaker: "Atölye Ustası",
        dialogue:
          "Bir şeyi bildiğini söylemek kolaydır; onu deneyerek göstermek gerçek ustalıktır.",
        funFact:
          "Câbir'e atfedilen metinlerde 'Kimyada ilk şart çalışmak ve deney yapmaktır; deney yapmayan kimse ustalık derecesine ulaşamaz' anlamına gelen ifadeler bulunur.",
        image: "assets/images/harizmi_s1_house_of_wisdom.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Kemerli bir bilim salonunda rahlelerde kitaplar, masalarda deney kapları; genç bir çırak kitaptan başını kaldırıp ocağa bakıyor.",
      },
      {
        title: "İmbiğin Üç Parçası",
        narration:
          "Ustanın çırağa gösterdiği ilk büyük alet imbikti. Arapça 'el-enbîk' sözcüğünden gelen bu alet üç parçadan oluşuyordu: altta ateşle ısıtılan kazan, üstünde damlaları toplayan kubbeli başlık ve başlığın yanından çıkan ince bir boru. Borunun ucunda ise temiz bir cam kap bekliyordu.\n\nBir sabah çırak ocağın başına geçti ve ustanın gözetiminde gül yapraklarını kazana koydu. Su ısındıkça buhar yükseldi, başlığın serin yüzünde yeniden damlacıklara dönüştü ve boru boyunca cam kaba süzüldü. Odanın içi birdenbire gül kokusuyla doldu. Çırak büyülenmiş gibi baktı: Görünmez buhar damla damla yeniden suya dönüşmüştü. Câbir'e atfedilen yazılar damıtmayı ayrıntılı biçimde anlatır; bu yöntem koku, ilaç ve temiz sıvılar elde etmenin yolunu açtı.\n\nO gün çırak yalnızca gül suyu elde etmedi; bir maddenin hâlini değiştirip yeniden eski hâline döndürebileceğini de öğrendi. Buhar, sıvı ve damla arasındaki bu gizli dönüşüm, onun gözünde doğanın bir bulmaca gibi çözülebileceğini kanıtlıyordu.",
        speaker: "Çırak",
        dialogue:
          "Buhar kayboluyor sanmıştım, oysa başlıkta yeniden damla olup geri dönüyormuş!",
        funFact:
          "Gül suyu damıtmak, İslam dünyasında Câbir'in zamanından sonra da çok yaygındı. Arapça 'el-enbîk' sözcüğü Avrupa dillerine 'alembic' olarak geçmiştir.",
        image: "assets/images/ibnul_heysem_rainbow.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Taş masanın üzerinde kazan, kubbeli başlık ve ince borulu bakır-cam bir imbik; ucundan damlayan gül suyu ve etrafta gül yaprakları.",
      },
      {
        title: "Beklenmedik Sonuç",
        narration:
          "Birkaç gün sonra ustanın çırağı yeni bir deney denedi. Tuzlu suyu tencerede ısıtıp bir kaba aktardı ve kristal elde etmek istedi. Ama sabah kaba baktığında bulduğu şey, kristal değil bulanık bir tortuydu. Çırak hevesle kurduğu düzeneğin yarım kaldığını görünce yüzü düştü.\n\nUsta ocağın başından geldi, kaba baktı ve hiçbir şey demeden çırağın deney defterini açtı. Defterde sadece iki satır vardı: 'Tuz, su, ateş.' Usta başını salladı. 'Ne kadar tuz, ne kadar su, ocak ne kadar yandı, kap ne kadar soğudu, hiçbirini yazmamışsın. Deneyin sebebini bulmak için neyin değiştiğini bilmek gerekir.' Çırak mahcup oldu. Şimdi bir karar vermesi gerekiyordu: Deneyi sessizce kapatıp başka bir şey mi deneyecekti, yoksa yeniden başlayıp bu sefer her şeyi mi kaydedecekti?\n\nPencereden öğleden sonranın solgun ışığı giriyordu. Çırak bulanık kaba, sonra ustanın açık tuttuğu deftere baktı. İçinden bir ses 'Vazgeç' diyor, bir başka ses ise 'Bir daha dene' diye fısıldıyordu. Karar verme zamanı gelmişti.",
        speaker: "Atölye Ustası",
        dialogue:
          "Deneyin tutmaması utanç değildir; neden tutmadığını yazmamak utançtır.",
        funFact:
          "Laboratuvar defteri tutmak, bugün de bilim insanlarının en önemli alışkanlıklarından biridir; sonucu başkalarının tekrar edebilmesi için her adımın kaydedilmesi gerekir.",
        image: "assets/images/ibn_sina_s1_bukhara_library.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Mum ışığında bir masada bulanık tortulu cam kap ve yarım kalmış bir defter; usta ile çırak başları eğik, düşünceli bakıyor.",
        midDecision: {
          title: "ARA KARAR: Deney Tutmadığında Ne Yapmalı?",
          question:
            "Kristal bekliyordun ama kapta bulanık bir tortu oluştu. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Deneyi başarısız sayar, defteri kapatır ve başka bir konuya geçerim.",
              feedback:
                "Başarısız deneyler de değerli ipuçları taşır. Câbir'e atfedilen çalışma anlayışında hatadan ders çıkarmak esastı.",
              isBestChoice: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Deneyi baştan yaparım; bu kez tuz ve su miktarını, ısıtma süresini ve soğuma zamanını ayrı ayrı deftere yazar, neyi değiştirdiğimi takip ederim.",
              feedback:
                "Harika! Deney çocuğun değil, kaydın hikâyesini yazar. Her adımı not almak, hatanın sebebini bulmanın en güvenilir yoludur.",
              isBestChoice: true,
            },
          ],
        },
      },
      {
        title: "Kristallerin Sessiz Sabrı",
        narration:
          "Çırak bu kez her şeyi dikkatle ölçtü. Ölçülü tuzu ölçülü suda erittikten sonra karışımı ocaktan alıp loş bir köşeye bıraktı. Kâse yavaş yavaş soğudu. Çırak bir gün bekledi, sonra bir gün daha. Her sabah kâsenin başına gelip kâğıda not aldı, ama kaba dokunmadı.\n\nÜçüncü sabah kâsenin dibinde ve kenarlarında küçük küçük parlak billurlar belirdi. Pencereden süzülen ışık huzmesi onlara değince küçük prizmalar gibi parıldadılar. Usta yanına gelip baktı ve gülümsedi. 'Bak,' dedi, 'yavaş soğutursan büyük ve düzgün kristaller oluşur; aceleyle soğutursan küçük ve bulanık olurlar.' Çırak sabrın bir erdem olmanın yanında aynı zamanda bir deney yöntemi olduğunu anlamıştı. Doğa, aceleci olanlara sırrını vermiyordu.\n\nÇırak defterine büyük harflerle şunu yazdı: 'Sabır da bir alettir.' O günden sonra ne zaman sabırsızlansa kâsedeki kristalleri hatırladı. Usta ise uzaktan gülümseyerek onu izliyordu; çünkü en iyi ders, öğrencinin kendi başına keşfettiği derstir.",
        speaker: "Atölye Ustası",
        dialogue:
          "Kristal, sabırlı olanın ödülüdür. Doğayı aceleyle zorlayanın değil, ona zaman tanıyanın kâsesi parlar.",
        funFact:
          "Kristalleştirme, bir madde erimiş ya da çözünmüş halden yavaşça katıya geçerken düzenli yapılar oluşturmasıdır. Bu yöntem bugün hâlâ saf madde elde etmek için kullanılır.",
        image: "assets/images/heysem_s1_dark_tent_pinhole.png",
        atmosphere: "DAWN_MIST",
        visualNote:
          "Loş bir köşede cam bir kâsede parlayan küçük tuz kristalleri; pencereden giren bir ışık huzmesi kristallerin üzerinde parlıyor.",
      },
      {
        title: "Süzme, Eritme ve Ocak Başı Kuralları",
        narration:
          "Câbir'e atfedilen yöntemlerin bir diğeri süzmeydi. Çamurlu ve bulanık sıvıları ince bir keten bezden geçirmek, içindeki katı parçacıkları ayırıp temiz sıvıyı toplamaya yarıyordu. Çırak ilk kez bulanık bir suyun bezden geçtikten sonra berrak aktığını gördüğünde hayretle gülümsedi.\n\nBir başka gün kil bir pota içinde kalay gibi kolay eriyen bir maden eritilişini seyretti. Usta, ocağın başında herkesin uyması gereken kuralları saydı: Saçlar bağlanır, deri önlük giyilir, ateş başında şaka yapılmaz ve hiçbir deney büyükler yanında olmadan başlamaz. Çırağın gözü altınımsı eriyik madene takılmıştı ama ustanın söylediklerini ciddiyetle dinledi. Çünkü onun dediği gibi, ocak sadece güç değil, aynı zamanda sorumluluk demekti.\n\nO gün çırak, bilimde cesaretin acele etmek değil, önlem almak olduğunu öğrendi. Duvardaki eski deri önlüğü giyerken kendini bir bilgin gibi hissetti. Ocağın turuncu ışığı gözlerinde, yeni bir sorumluluğun sıcak parıltısı gibi yandı. Usta başını sallayıp memnuniyetle gülümsedi.",
        speaker: "Atölye Ustası",
        dialogue:
          "Ocağın başında cesaret, kurallara uymaktır. Dikkatli olan hem öğrenir hem sağ salim eve döner.",
        funFact:
          "Bu hikâyedeki kurallar günümüz laboratuvar güvenliğiyle uyumludur. Okullardaki deneyleri yetişkin gözetiminde yapmak, bilimin ilk kuralıdır; ev ortamında tehlikeli madde denenmemelidir.",
        image: "assets/images/cezeri_s2_copper_float.png",
        atmosphere: "WORKSHOP_GEARS",
        visualNote:
          "Taş atölyede keten bezden süzülen berrak sıvı ve kil potada eriyen maden; deri önlüklü bilgin ve genç çırak güvenlik kurallarına uyarak çalışıyor.",
      },
      {
        title: "Her Şey Tartılır, Her Şey Yazılır",
        narration:
          "Câbir'e atfedilen eserler arasında 'Kitâbü'l-Mîzân', yani 'Denge ve Ölçü Kitabı' adıyla anılan bir eser vardır. Bu kitaplarda maddelerin tartılması, miktarların bilinmesi ve her işlemin kaydedilmesi çok önemsenir. 'Mîzân', terazi demektir; ama aynı zamanda her şeyin bir ölçüsü ve düzeni olduğu fikrine de işaret eder.\n\nÇırağın defteri artık sayfa sayfa doluydu. Hangi gün, hangi maddeden ne kadar kullanıldı, ocak ne kadar ısındı, bekleme süresi ne oldu, sonuç nasıl çıktı; her şey tarihiyle birlikte kayıt altındaydı. Bir akşam usta defterlere bakıp dedi ki: 'Bilgi, hatırlanan şey değil, yazılan ve tekrar edilebilen şeydir. Bugün bu defteri okuyan biri, yarın aynı deneyi aynı sonuçla yapabilir.' İşte bilimin sırrı bu paylaşılabilir titizlikte saklıydı.\n\nÇırak o akşam defterinin ilk sayfasına döndü ve başlangıçtaki iki satırlık ham notlara baktı. Ne kadar yol aldığını görünce gülümsedi. Karmakarışık başlayan defter, şimdi bir bilginin hafızası gibi düzenliydi; sayfaların arasında kurutulmuş bir gül yaprağı bile duruyordu.",
        speaker: "Atölye Ustası",
        dialogue:
          "Yazdığın her sayı, yarın bir başkasının yolunu aydınlatır. Defterini ciddiye al, çünkü o senin laboratuvarının hafızasıdır.",
        funFact:
          "'Mîzân' sözcüğü Arapçada 'terazi, ölçü' anlamına gelir. Câbir'e atfedilen külliyatta maddelerin miktarlarının ve oranlarının önemi tekrar tekrar vurgulanır.",
        image: "assets/images/katip_celebi_books.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Mum ışığında masada küçük bir terazi, ölçüm kapları ve tarihlerle dolu açık bir defter; rafta sıralı kitaplar.",
      },
      {
        title: "Maddeleri Gruplayan Düzen",
        narration:
          "Câbir'e atfedilen yazılarda bir başka önemli fikir, maddeleri benzerliklerine göre gruplamaktı. Ateşte kolayca uçup giden maddeler bir grupta, ısıtılınca eriyen ve çekiçle şekil alan madenler bir başka grupta, sert ve kırılgan taşlar ise ayrı bir grupta toplanıyordu. Bu düzen, atölyedeki rafların da düzenini belirliyordu.\n\nÇırak bir sabah rafları yeniden dizerken, benzer maddelerin yan yana durduğunda ne kadar kolay bulunduğunu fark etti. Tıpkı bir kütüphanede kitapların konularına göre dizildiği gibi, atölyede de düzen zamandan ve emekten tasarruf sağlıyordu. Ustası, 'Düzenli çalışmak, yarım işi tamamlamanın yarısıdır,' dedi. Sınıflandırma, doğayı anlamak için atılan ilk adımdı; çünkü birbirine benzeyen şeyleri bir araya getirmek, farklılıkları ve nedenlerini keşfetmeye yardım ediyordu.\n\nÇırak bir gün ustasına sordu: 'Efendim, gruplandırırken yanılırsam ne olur?' Usta cevap verdi: 'Yanılırsan rafın yerini değiştirirsin. Yanılmak, öğrenmenin bir parçasıdır.' Çırak bu sözü uzun süre unutmadı.",
        speaker: "Çırak",
        dialogue:
          "Raflarımı düzene soktuğumda, aradığım şeyi karanlıkta bile bulabiliyorum. Düzen, merakın en iyi arkadaşıdır!",
        funFact:
          "Câbir'e atfedilen külliyat, maddeleri uçucu, eriyen ve kırılgan gruplara ayıran erken sınıflandırma denemeleri içerir. Bu, bugünkü kimya sınıflandırmalarının uzak bir atası sayılabilir.",
        image: "assets/images/ibn_sina_s2_canon_of_medicine.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Işıklı bir atölye rafında benzer kaplar ve şişeler gruplar halinde düzenlenmiş; genç çırak etiketleri elinde sıralıyor.",
      },
      {
        title: "Latince Konuşan Geber",
        narration:
          "Yüzyıllar sonra, Arapçadan Latinceye çevrilen simya ve kimya kitapları Avrupa'ya ulaştı. Câbir'in adı Latinceye 'Geber' diye girdi; bu adla dolaşan bazı eserler gerçekten çeviriydi, bazıları ise sonradan Avrupa'da yazılmıştı. Bu kitaplar damıtma, kristalleştirme ve ocak başı çalışma düzeninin Avrupa'da tanınmasına katkıda bulundu. Yeni bir kimya dili de böylece doğmaya başladı.\n\nBugün kullandığımız birçok sözcük, o dönemden günümüze ulaşmıştır. 'Alkali' Arapça 'el-kalî'den, 'alembic' ise 'el-enbîk'ten gelir. Simya yavaş yavaş kimyaya dönüştü; çünkü deneyin, ölçünün ve kaydın giderek daha çok önem kazandığı bir yol açılmıştı. Pek çok kaynakta Câbir'e 'kimyanın babası' denir. Tarihçiler bu unvanı tartışsa da, Câbir'e atfedilen eserlerin deney, ölçü ve kayıt disiplinini öne çıkarması bilim tarihinde çok önemli bir adımdır.\n\nBugün okul laboratuvarında önlüğünü giyip deney defterini açtığında, bu eski geleneğin bir halkası olursun. Merak, sabır ve dürüst kayıt; Câbir'in atölyesinden günümüz laboratuvarlarına uzanan sürekli bir ışıktır.",
        speaker: "Câbir'e atfedilen anlatıcı",
        dialogue:
          "Ben bir sır sakladım sanmayın; deneyi, ölçüyü ve sabrı herkese açık yazdım ki yarınlar benden daha ileri gitsin.",
        funFact:
          "Latince eserlerde adı 'Geber' olarak geçer. 'Alkali', 'alembic' ve 'elixir' sözcükleri Arapçadan Avrupa dillerine geçen kelimelerdendir.",
        image: "assets/images/islamic_world_atlas_map.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Bir manastır kütüphanesinde Latince yazılmış eski bir kitap ve yanında Arapça el yazması; masada imbik ve cam kaplar, pencereden altın ışık.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Meraklı bir komşun sana geliyor ve 'Bana kısa yoldan zengin olmanın, madenleri altına çevirmenin tarifini hemen ver!' diyor. Ne yaparsın?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Aceleyle bir tarif uydurur, denemesi için ona veririm.",
          feedback:
            "Uydurma tarif, hem güvenli değildir hem de bilime saygısızlıktır. Câbir'e atfedilen çalışma anlayışı doğruluğa dayanırdı.",
          isHistoricalTruth: false,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Ona önce deneyin disiplinini anlatırım: ölçerek, deftere yazarak, güvenlik kurallarına uyarak ve yetişkin gözetiminde adım adım öğrenmek gerektiğini söylerim.",
          feedback:
            "Tarihi hakikat! Câbir'e atfedilen eserlerde de kısa yol aramak yerine deney, ölçü ve kayıt disiplini öne çıkar.",
          isHistoricalTruth: true,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "Bilgiyi kimseyle paylaşmaz, kimseye bir şey anlatmam.",
          feedback:
            "Bilimin gücü paylaşılan ve tekrar edilebilen bilgidedir. Kayıt tutmanın amacı da yarın başkalarının yolunu aydınlatmaktır.",
          isHistoricalTruth: false,
        },
      ],
      historicalTruthExplanation:
        "Câbir'e atfedilen eserler, simya geleneği içinde yazılmış olsa da deneye, maddeleri tartıp ölçmeye ve çalışmayı kayıt altına almaya büyük önem verir. Bu yaklaşım, simyanın zamanla kimyaya dönüşmesinde ve laboratuvar disiplininin gelişmesinde rol oynamıştır.",
      quoteHighlight:
        "Önce kurallar, sonra deney. Ocağın başında acele eden, hem bilimi hem kendini tehlikeye atar.",
    },
    rewardArtifact: {
      id: "artifact-cabir-imbik-defteri",
      name: "Câbir'e Atfedilen Cam İmbik ve Deney Defteri",
      imagePath: "assets/images/cabir_imbik_alchemy.png",
      pointType: "BILGELIK",
      pointLabel: "Bilgelik Puanı",
      points: 50,
      unlockedTitle: "Deney Ustası",
      shortDescription:
        "Gül suyu damlatan cam başlıklı imbik ile her adımı tarihiyle birlikte kayda geçen ilk laboratuvar defterinin simgesi.",
      historicalNote:
        "Câbir'e atfedilen eserlerde damıtma, kristalleştirme, süzme ve eritme gibi laboratuvar yöntemleri ayrıntılı biçimde anlatılır; bu yöntemlerin bir kısmı bugün hâlâ kimya laboratuvarlarının temelidir.",
      accentColor: "#10B981",
      hotspots: [
        {
          id: "cabir-alembic-head",
          xPercent: 48,
          yPercent: 35,
          title: "Kubbeli Başlık",
          secretFact:
            "İmbiğin kubbeli başlığı buharı soğutup yeniden damlaya çevirir; 'alembic' sözcüğü Arapça 'el-enbîk'ten gelir.",
        },
        {
          id: "cabir-notebook",
          xPercent: 28,
          yPercent: 70,
          title: "Deney Defteri",
          secretFact:
            "Defterde miktarlar, süreler ve sonuçlar yazılır; böylece bir deney başkaları tarafından da tekrar edilebilir.",
        },
        {
          id: "cabir-crystals",
          xPercent: 72,
          yPercent: 62,
          title: "Tuz Kristalleri",
          secretFact:
            "Yavaş soğuyan tuzlu su büyük ve düzgün kristaller oluşturur; hızlı soğuyan karışım ise küçük ve bulanık kristaller verir.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Câbir'e atfedilen çalışma anlayışında neden önce kurallar, sonra deney geliyor? Güvenlik kuralları bilimde neden önemli?",
      "Deney tutmadığında defterine her şeyi yazmak neden işe yarar? Günlük hayatta bir hatadan ders çıkardığın bir durum anlat.",
      "'Câbir'e atfedilen' ifadesi bize tarihi bilgiler konusunda ne öğretiyor? Bir bilgiden emin olmadığımızda nasıl davranmalıyız?",
    ],
  }),
];
