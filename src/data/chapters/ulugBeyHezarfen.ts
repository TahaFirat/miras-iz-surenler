import { buildChapter } from "../storyBuilders";
import { StoryChapter } from "../storyTypes";

// ============================================================================
// ULUĞ BEY — EK BÖLÜMLER (ch2, ch3)
// ============================================================================
export const ULUG_BEY_EXTRA_CHAPTERS: StoryChapter[] = [
  // --------------------------------------------------------------------------
  // BÖLÜM 2: ULUGH BEY MEDRESESİ (10 SAHNE)
  // --------------------------------------------------------------------------
  buildChapter({
    id: "ulug-bey-ch2",
    heroId: "ulug-bey",
    chapterNumber: 2,
    title: "Ulugh Bey Medresesi: Semerkand'ın Registan Meydanı'nda Bilim Okulu",
    subtitle: "Bilimde padişah da öğrencidir",
    estimatedMinutes: 9,
    scenes: [
      {
        title: "Registan'a Atılan İlk Temel",
        narration:
          "Yıl 1417'ydi ve Semerkand, İpek Yolu'nun en parlak şehirlerinden biri olarak uğulduyordu. Registan Meydanı'nda deve çanları, bakırcıların çekiçleri, taze pişmiş çörek ve baharat kokusu birbirine karışıyordu. Kervancılar Çin'den ipek, Hindistan'dan biber, Anadolu'dan halı getiriyordu; ama o yıl meydandaki herkesin gözü başka bir yükteydi: taş ve kerpiç yığınları.\n\nGenç hükümdar Uluğ Bey, burada bir saray değil, bir bilim okulu yaptırmaya karar vermişti! Mimarlar iplerle zemini ölçtü, çini ustaları ocaklarda turkuaz renkli çinileri pişirmeye başladı. İlk temel taşı konulurken esnaf bile işini bırakıp seyretti. Bir tüccar yanındakine fısıldadı: 'Padişahlar kale yapar, bu ise kafalara kale yapıyor.' Uluğ Bey o gün temel çukurunun başında uzun uzun gökyüzüne baktı; çünkü bu okulun duvarları taştan, hayali ise yıldızlardan yapılacaktı.\n\nAkşam olurken ustalar aletlerini bıraktı, meydanda hafif bir esinti çıktı. Çıraklar kireç ve toprağın serin kokusunu içlerine çekti. Uzaktaki minarelerin gölgeleri uzadıkça temel çukuru, sanki yarına açılan büyük bir kitabın ilk sayfası gibi görünüyordu.",
        speaker: "Uluğ Bey",
        dialogue:
          "Bir şehrin en değerli hazinesi sandıklarındaki altın değil, sınıflarındaki meraklı çocuklardır.",
        funFact:
          "Semerkand'daki Uluğ Bey Medresesi 1417–1420 yılları arasında inşa edildi. Bugün Registan Meydanı'ndaki üç medresenin en eskisidir; diğer ikisi 17. yüzyılda eklenmiştir.",
        image: "assets/images/islamic_world_atlas_map.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "İpek Yolu kervanlarıyla dolu Semerkand Registan Meydanı'nda temeli atılan turkuaz çinili medrese inşaatı ve gün batımı ışığı.",
      },
      {
        title: "Kervanlarla Gelen Öğrenciler",
        narration:
          "Medresenin kapıları açıldığında Semerkand yollarında yeni bir kervan görüldü: sırtlarında kitap sandıkları, ceplerinde kalem kutuları olan gençler! Kimi Buhara'dan, kimi Herat'tan, kimi Tebriz'den, kimi de çok uzaktaki Anadolu'dan yola çıkmıştı. Çoğunun ayakkabıları tozdan griye dönmüştü ama gözleri parlıyordu.\n\nİki katlı, kubbeli hücrelerin kapısında kayıt yapan görevli, her öğrenciye adını, memleketini ve en çok hangi dersi merak ettiğini soruyordu. Vakıf gelirleriyle yiyecek ve barınma desteği sağlandığı için parası olmayan bir genç de içeri girebiliyordu. Avluda ilk akşam çeşmenin başında dört farklı dilde bir tartışma yükseldi; konu ise hep aynıydı: Yıldızlar neden her gece yer değiştirir? Uluğ Bey'in okulu daha ilk günden koca bir bilgi pazarına dönüşmüştü.\n\nGece olunca hücrelerden mum ışıkları taştı. Biri defterini komşusuna uzatıp 'Şu çizimi anlıyor musun?' diye sordu; öbürü usturlabını gösterdi. Çeşmenin başında yan yana oturan yabancılar sabaha kadar konuşarak birbirinin şehrini ve bilgisini tanıdı; dostluk da böyle başlıyordu.",
        speaker: "Medrese Kâtibi",
        dialogue:
          "Adın, memleketin ve merak ettiğin ders... Kapıdan girmek için bundan fazlası gerekmiyor evladım!",
        funFact:
          "Uluğ Bey yalnızca Semerkand'da değil, Buhara'da (1417) ve Gıjduvan'da (1433) da medreseler yaptırmıştır.",
        image: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Tozlu kıyafetli, sırtında kitap sandıkları olan genç öğrencilerin turkuaz çinili medrese avlusuna girişi.",
      },
      {
        title: "Bursa'dan Gelen Hoca: Kadızâde-i Rûmî",
        narration:
          "Medresenin en sevilen hocalarından biri, Anadolu'nun Bursa şehrinde doğan Kadızâde-i Rûmî'ydi. 'Rûmî', Anadolu'dan gelen demekti. Genç yaşta memleketinden ayrılmış, yıllarca kitap ve hoca peşinde Doğu'ya yürümüş, sonunda Semerkand'da matematik ve astronomi okutmaya başlamıştı. Sesi gürdü; ama soru soran öğrenciye öyle yumuşak bakardı ki en çekingen çocuk bile parmak kaldırırdı.\n\nSabah dersinde sınıfa ince kum serpilmiş bir tahta getirildi. Kadızâde bir çubukla daire çizdi, ortasına bir nokta koydu ve sordu: 'Bu noktadan çembere kaç tane eşit çizgi çekebiliriz?' Öğrenciler birbirine baktı. 'Sonsuz!' diye atıldı arka sıradan biri. Hoca gülümsedi. Semerkand'da doğru cevabı bulmak kadar, yanlış cevabın nerede yanıldığını anlamak da dersin parçasıydı. O sabah duvardaki çini yıldızlar bile dinliyor gibiydi.\n\nDers bittiğinde öğrenciler avluya çıktı. Kimi çubukla yerde daireler çiziyor, kimi yanındakine az önceki hatasını anlatıyordu. Kadızâde pencereden onları izledi. Bir öğretmen için en büyük mutluluk, dersin sınıfta bitmeyip avluya taşmasıydı.",
        speaker: "Kadızâde-i Rûmî",
        dialogue:
          "Doğru cevabı bulmak güzeldir; ama yanlış cevabın nerede yanıldığını bulmak insanı gerçek bilgin yapar!",
        funFact:
          "Kadızâde'nin Çağmînî'nin astronomi kitabına yazdığı şerh (açıklama), sonraki yüzyıllarda Osmanlı medreselerinde de okutulmuştur.",
        image: "assets/images/harizmi_s1_house_of_wisdom.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Kum serpilmiş bir tahtaya daire çizen bilge hocanın etrafında merakla toplanmış genç öğrenciler.",
      },
      {
        title: "Sınıfa Giren Hükümdar",
        narration:
          "Haftanın o gününde medrese avlusunda bir telaş başladı: Uluğ Bey dersine geliyordu! Muhafızlar kapıda beklerken hükümdar tacını ve süslü pelerinini çıkardı, sade bir cübbeyle sınıfa girdi, öğrencilerin arasına oturdu ve kum tahtasının başına geçti. Öğrenciler önce nefes almaya bile çekindi; çünkü karşılarında koskoca bir şehrin hükümdarı duruyordu.\n\nDers ilerledi, Uluğ Bey daireleri ve açıları anlattı. Derken arka sıradan bir öğrenci elini kaldırıp zor bir soru sordu: Bir açıyı pergel ve cetvelle üç eşit parçaya bölmek mümkün müydü? Sınıf bir anda sustu. Uluğ Bey tahtaya baktı, çenesini sıvazladı; cevaptan emin değildi. Herkes onun ne yapacağını merak ediyordu: Hükümdar olduğu için bilmiyormuş gibi görünmemek mi, yoksa dürüstçe 'bilmiyorum' demek mi?\n\nKum tahtasının üzerinde parmak izleri, kapının ardında nöbetçi çizmelerinin sesi vardı. Öğrenciler nefes almadan bekledi. Bir hükümdarın sözü kanun gibiydi; bu yüzden vereceği cevap yalnızca bir soruyu değil, bu okulun nasıl bir yer olacağını da belirleyecekti.",
        speaker: "Uluğ Bey",
        dialogue:
          "Bu soru beni de düşündürdü. Şimdi ne yapmalıyım ki hem doğruyu söyleyeyim hem de öğrenmeye devam edeyim?",
        funFact:
          "Bu sahne medrese derslerini canlandıran bir kurgudur; ama sorulan problem gerçektir: Açıyı pergel ve cetvelle üçe bölmenin imkânsız olduğu ancak 1837'de kanıtlandı. Semerkand bilginleri ise bu soruyu denklemlerle yaklaşık olarak çözmeyi başaracaktı.",
        image: "assets/images/harizmi_s2_sundial_observatory.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Tacını çıkarmış sade giyimli bir hükümdarın, öğrencilerin arasında oturup kum tahtasına bakarak düşünmesi.",
        midDecision: {
          title: "ARA KARAR: Bilmediğin Bir Soruyla Karşılaşırsan?",
          question:
            "Hükümdar ve ders veren hoca olarak sınıfa girdin. Bir öğrenci cevabını tam bilmediğin bir soru sordu ve herkes sana bakıyor. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Sultan olduğum için bilmediğimi belli etmem; soruyu geçiştirip dersi bitiririm.",
              feedback:
                "Bilmediğini gizlemek hem öğrenciyi susturur hem de gerçeği öğrenme fırsatını kaçırır. Bilim, 'bilmiyorum'u saklayanın değil, soranın yoludur.",
              isBestChoice: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Bilmediğimi açıkça söyler, soruyu tahtaya yazar, hocalarla birlikte çözmeye çalışırım.",
              feedback:
                "Harika! 'Bilmiyorum, birlikte öğrenelim' diyebilmek bilginin ilk adımıdır. Semerkand'ı büyük yapan da bu tevazuydu.",
              isBestChoice: true,
            },
          ],
        },
      },
      {
        title: "Kâşî Semerkand'a Geliyor",
        narration:
          "Bir gün medresenin kapısına yorgun, tozlu bir yolcu geldi: İran'ın Kâşân şehrinden yola çıkan matematikçi Gıyâseddin Cemşîd el-Kâşî. Yıllarca hesap yapmış, çok zor problemlerle uğraşmıştı; ama yaşadığı şehirlerde bilimi gerçekten destekleyen bir hükümdar bulmakta zorlanmıştı. Semerkand'a vardığında Uluğ Bey'in hocalarla eşit konuşup matematik bilgisini sınayan sorular sorduğunu duyunca şaşkına döndü.\n\nKâşî babasına yazdığı mektupta bu şaşkınlığını anlattı: Hükümdar yalnızca bilginleri korumuyor, bizzat hesabın içine giriyordu! Geceleri mum ışığında uzun hesaplar yapan Kâşî, sabah olunca sonuçları Kadızâde'ye gösteriyordu. İki bilgin birbirinin hatasını bulunca kırılmak yerine sevinirdi; çünkü hata bulmak doğruya bir adım daha yaklaşmaktı. Semerkand böyle bir şehirdi: Burada bilmemek ayıp değildi, öğrenmemek ayıptı.\n\nAkşam yemeğinde Kâşî ile Kadızâde aynı sofraya oturdu. Biri diğerine tuhaf bir hesap hatasını anlattı, ikisi birlikte güldü. Pencereden giren serin hava mum alevini titretiyor, duvardaki gölgeleri oynatıyordu. Kâşî, uzun yolculuğun ardından ilk kez evinde gibi hissetti.",
        speaker: "Gıyâseddin Cemşîd el-Kâşî",
        dialogue:
          "Babacığım, burada hükümdar bilginlere hesap sormuyor; onlarla birlikte hesap yapıyor!",
        funFact:
          "Kâşî, 1427'de yazdığı Miftâhu'l-Hisâb (Hesabın Anahtarı) kitabında ondalık kesirleri sistemli kullanan ilk bilginlerden biridir; bugünkü virgüllü sayıların atası sayılır.",
        image: "assets/images/meryem_s2_celestial_globe.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Mum ışığında kâğıtlara hesap yapan matematikçi ve yanında duran hoca; masada gök küresi ve pergel.",
      },
      {
        title: "Pergel, Çokgen ve Pi Sayısı",
        narration:
          "Kâşî bir gün öğrencilere şaşırtıcı bir ödev verdi: 'Bir çemberin çevresini çapına bölünce hep aynı sayıyı bulursunuz. Bu sayıyı ne kadar doğru bulabiliriz?' Öğrenciler ipi bir tencerenin çevresine sardı, uzunluğunu ölçtü, sonra çapına böldü. Üç buçuk civarında bir sayı çıktı; ama herkesin bulduğu sonuç birbirinden biraz farklıydı.\n\nKâşî kum tahtasına çemberin içine bir altıgen çizdi, sonra her kenarı ikiye bölerek on iki, yirmi dört kenarlı çokgenler çizdi. 'Kenar sayısı arttıkça çokgen çembere sarılıyor,' dedi. Birkaç yıl sonra, 1424'te bu yöntemi tam 805 milyonu aşan kenarlı bir çokgene kadar götürerek pi sayısını virgülden sonra on altı basamak doğrulukla hesaplayacaktı. O gün sınıftaki çocuklar bunu bilmiyordu; ama sabrın sayıları nasıl keskinleştirdiğini ilk kez gördüler.\n\nÖğle güneşi avlunun taşlarını ısıtırken çocuklar yerde çokgenler çizmeye devam etti. İp, çubuk ve tebeşir tozu birbirine karıştı. Biri 'Bu işin sonu yok mu?' diye mırıldandı. Kâşî gülümsedi: 'Sonu yok ama her adım bizi doğruya yaklaştırıyor.'",
        speaker: "Gıyâseddin Cemşîd el-Kâşî",
        dialogue:
          "Çokgenin kenarını bir daha ikiye bölün; sayı her seferinde gerçeğe biraz daha yaklaşacak. Matematikte sabır, en keskin alettir!",
        funFact:
          "Kâşî'nin kullandığı çokgenin kenar sayısı 3 × 2^28 = 805.306.368'dir. Avrupa'da benzer doğruluğa bir buçuk yüzyıldan fazla sonra ulaşıldı.",
        image: "assets/images/harizmi_usturlap.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Kum tahtasında çemberin içine çizilmiş altıgen, on iki ve yirmi dört kenarlı çokgenler; yanında pergel ve ip.",
      },
      {
        title: "Terasta Usturlap Gecesi",
        narration:
          "Akşam olunca medresenin düz damına çıkılırdı. Semerkand'ın ışıkları tek tek sönüyor, yerini binlerce yıldız alıyordu. Öğrenciler bakır usturlapları ellerinde tutuyor, ufuktan yükselen parlak yıldıza nişan alıyordu. Bir hoca yüksek sesle okuyordu: 'Yükseklik yirmi dört derece... yirmi beş derece...' Rüzgâr defterlerin kenarlarını uçuruyor, mum alevi titriyordu.\n\nUluğ Bey de arada gelip öğrencilerin arasında dururdu. Bir gece genç bir öğrencinin ölçümünün eski bir tabloyla uyuşmadığını gördü. Çocuk utanıp özür dilemeye kalktı. Uluğ Bey onun omzuna dokundu: 'Tablo mu yanlış, ölçüm mü, yoksa ikisi birden mi? Bunu bulmadan kimseyi suçlamayacağız.' İşte bu merak, birkaç yıl sonra Kuhak Tepesi'ndeki dev rasathanenin ve Zîc'in tohumu oldu. Terasın taşları o gece gökyüzüne en yakın sınıf gibi görünüyordu.\n\nGece ilerledikçe soğuk arttı, öğrenciler pelerinlerine sarıldı. Uzaklardan bir çoban köpeğinin havlaması, kervansaraydan gelen son deve çanları duyuldu. Usturlapların bakır yüzeyi mum ışığında altın gibi parladı ve herkes gökyüzünün kendisine ait küçük bir köşesini bulduğunu hissetti.",
        speaker: "Uluğ Bey",
        dialogue:
          "Kitapla gökyüzü çelişirse gökyüzünü yeniden ölçeriz; çünkü yıldızlar kimseden çekinmeden doğruyu söyler.",
        funFact:
          "Usturlap, yıldızların yüksekliğini ölçerek saati, yönü ve kıbleyi bulmaya yarayan bakır bir alettir. Uluğ Bey'in Kuhak Tepesi'ndeki rasathanesi ise 1420'lerde inşa edilmeye başlandı.",
        image: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
        atmosphere: "STARLIT_OBSERVATORY",
        visualNote:
          "Medrese damında yıldızlı gökyüzü altında bakır usturlaplarla gözlem yapan öğrenciler ve onları izleyen hükümdar.",
      },
      {
        title: "Hocasının Önünde Öğrenci Hükümdar",
        narration:
          "Medresenin en güzel derslerinden biri, öğrencilerin Uluğ Bey ile hocalarının ilişkisini seyretmesiydi. Uluğ Bey sınıfta ders veren hükümdar olduğu kadar, kütüphanede hocasının önünde not tutan bir öğrenciydi de. Kadızâde ona astronomi problemlerini adım adım açıklarken Uluğ Bey kâğıdının kenarına küçük şekiller çiziyor, anlamadığı yerde duraklayıp soruyu yeniden soruyordu.\n\nBir akşam kütüphane lambaları yanarken genç öğrenciler bu manzaraya şahit oldu: Sultanın mührü masanın kenarında duruyordu ama kimse ona bakmıyordu; herkesin gözü kum tahtasındaki küçük şekildeydi. Öğrenciler o gün büyük bir şey öğrendi: Gerçek büyüklük, her şeyi bildiğini göstermek değil, öğrenmeye hep açık kalabilmektir. Bu yüzden Uluğ Bey'in medresesinde 'öğrenci' sözü utanılacak bir şey değil, saygıyla taşınan bir unvandı.\n\nKütüphane raflarında deri ciltli kitaplar sıra sıra uzanıyor, havada kâğıt ve mürekkep kokusu asılı kalıyordu. Dışarıda rüzgâr çinar yapraklarını savururken içeride kalemlerin hışırtısından başka ses yoktu. Uluğ Bey o gece yemeğe geç kalmıştı; ama yüzünde derin bir huzur vardı.",
        speaker: "Uluğ Bey",
        dialogue:
          "Hocam, bu adımı bir daha anlatır mısınız? Bilginin kapısı, soru sormaktan utanmayanlara açılır.",
        funFact:
          "Uluğ Bey'in astronomi ve matematik bilgisini Kadızâde-i Rûmî'den aldığı kaynaklarda anlatılır. Sahnedeki ayrıntılar bu hoca–öğrenci ilişkisini canlandıran bir kurgudur. Uluğ Bey 1409'da, henüz on beş-on altı yaşlarındayken Semerkand valisi olmuştu.",
        image: "assets/images/ibn_sina_s1_bukhara_library.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Kütüphane lambalarının altında hocasının anlattığı şekli dikkatle not alan sade giyimli genç hükümdar.",
      },
      {
        title: "Kuşçubaşı'nın Oğlu Ali",
        narration:
          "Medresenin son sırasında oturan bir genç herkesin dikkatini çekiyordu: Ali. Babası saray av kuşlarına bakan kuşçubaşıydı; bu yüzden herkes ona 'Kuşçu' derdi. Soylu bir ailenin çocuğu değildi ama defterleri sayfa sayfa doluydu. Matematik problemlerini en hızlı çözen oydu ve gözleri hep yıldızlardaydı.\n\nBir gün Kadızâde, Ali'nin çözümünü sınıfa okuttu. Bazı öğrenciler fısıldaştı: 'Kuşçunun oğlu mu?' Uluğ Bey bunu duyunca söze karıştı: 'Medresemin kapısında babanın mesleği sorulmaz, aklın sorulur.' Ali'nin yüzü kızardı, sonra gülümsedi. O gün çocukların çoğu, bilginin soya sopa değil çalışmaya bağlı olduğunu anladı. Yıllar sonra bu çocuk, Ali Kuşçu adıyla Semerkand'ın en büyük gökbilimcilerinden biri, ardından İstanbul'un ilk büyük medrese hocalarından biri olacaktı.\n\nAli o akşam yurduna giderken defterini göğsüne bastırdı. Baba ocağındaki kuş kafeslerinin kokusunu medresenin kitap kokusuyla karşılaştırdı ve ikisinin de kendisine ait olduğunu düşündü. Gökyüzü hâlâ merak edilecek çok şeyle doluydu.",
        speaker: "Genç Ali Kuşçu",
        dialogue:
          "Babam kuşlara bakıyordu, ben yıldızlara bakıyorum. İkimiz de gökyüzüne bakıyoruz ama ben onu hesaplamak istiyorum!",
        funFact:
          "Ali Kuşçu (yaklaşık 1403–1474) 1474'te İstanbul'da vefat etti; kabri bugün Eyüp'tedir.",
        image: "assets/images/ali_kuscu_moon_map.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Sınıfın son sırasında defterine yıldız çizimleri yapan, babası av kuşu eğiten yetenekli bir genç; yanında Ay haritası.",
      },
      {
        title: "Kapıdaki Yıldızlar",
        narration:
          "Medrese tamamlandığında akşamüstü ışığı dev kapının üstündeki desenlere vuruyordu. Mavi ve turkuaz çinilerle yapılmış kemerin altında gökyüzünü andıran yıldız desenleri parlıyordu. Gelen geçen durup başını kaldırıyor, 'Burada gökyüzü kapının üstüne mi konmuş?' diye fısıldaşıyordu. Kapının iki yanında öğrenciler kitaplarını kucaklayarak tek tek içeri giriyordu.\n\nUluğ Bey avluda durmuş, onların içeri girişini izliyordu. Yanındaki Kadızâde'ye döndü: 'Bu çocuklardan bazısı bizden çok daha uzak yıldızlara gidecek.' Hoca gülümsedi: 'Ve oraya giden yolu birlikte öğrenerek açtık, hünkârım.' Gün batarken çiniler altın renge döndü. Avluda artık yalnızca ayak sesleri, sayfa çevirme sesleri ve uzaktan gelen bir hoca sesi vardı. Semerkand'ın o akşamı, tek bir cümleyle özetlenebilirdi: Bilimde padişah da öğrencidir.\n\nKapının üzerindeki yıldız desenleri alacakaranlıkta bir bir belirdi. Meydandaki esnaf kepenklerini indirirken bile başını kaldırıp bu kapıya baktı. Semerkand'da artık yalnızca kervanlar değil, bilgi de geliyor ve gidiyordu.",
        speaker: "Uluğ Bey",
        dialogue:
          "Padişahlığım bir gün biter; ama bu avluda öğrenilen her bilgi benden sonra da yaşar.",
        funFact:
          "Semerkand'daki Registan Meydanı, 2001'de UNESCO Dünya Mirası Listesi'ne 'Semerkand – Kültürlerin Kavşağı' adıyla girmiştir.",
        image: "assets/images/ulug_bey_observatory.png",
        atmosphere: "JERUSALEM_DUSK",
        visualNote:
          "Gün batımında yıldız desenli turkuaz çinili medrese kapısı ve içeri giren öğrencileri izleyen hükümdar ile hoca.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Hükümdarsın ve şehrin kalbine bir bilim okulu kurdun. Öğrencileri nasıl seçersin ve okulda kendi yerini nasıl belirlersin?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Sadece zengin ve soylu ailelerin çocuklarını alırım; ders vermeye de hiç karışmam.",
          feedback:
            "Yetenek her ailede doğabilir. Kuşçubaşının oğlu Ali de bu kapıdan girerek büyük bir gökbilimci oldu.",
          isHistoricalTruth: false,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Yeteneği ve merakı olan herkesi kabul ederim; hocalarla birlikte ders verir, öğrenmem gereken yerde öğrenci olurum.",
          feedback:
            "Tarihi Hakikat! Uluğ Bey'in medresesi her yerden gelen öğrenciye açıktı; kendisi de ders verdiği gibi hocalarından öğrenmeye devam etti.",
          isHistoricalTruth: true,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "Matematik ve astronomiyi dışarıda bırakır, yalnızca eski kitapları ezberletirim.",
          feedback:
            "Semerkand'ı parlak yapan şey tam tersine gözlem ve hesaptı; ezber, tek başına yeni keşif doğurmaz.",
          isHistoricalTruth: false,
        },
      ],
      historicalTruthExplanation:
        "Uluğ Bey, 1417–1420 yıllarında Semerkand'ın Registan Meydanı'na bir medrese yaptırdı. Matematik ve astronomi okutulan bu okulda Kadızâde-i Rûmî ve Kâşî gibi bilginler ders verdi; Uluğ Bey de hem ders verdi hem hocalarından öğrenmeye açık kaldı.",
      quoteHighlight: "Bilimde padişah da öğrencidir.",
    },
    rewardArtifact: {
      id: "artifact-ulug-bey-registan-madrasa",
      name: "Registan Medresesi Yıldızlı Çinisi ve Kum Tahtası",
      imagePath: "assets/images/harizmi_usturlap.png",
      pointType: "IHSAN_MEDENIYET",
      pointLabel: "Medeniyet Puanı",
      points: 50,
      unlockedTitle: "Semerkand Öğrencisi",
      shortDescription:
        "Uluğ Bey'in Registan Meydanı'nda kurduğu medresenin yıldız desenli çini kapısını ve öğrencilerin hesap yaptığı kum tahtasını simgeleyen hatıra.",
      historicalNote:
        "Semerkand'daki Uluğ Bey Medresesi 1417–1420 arasında inşa edilmiş, bugün de Registan Meydanı'nda ayaktadır.",
      accentColor: "#0EA5E9",
      hotspots: [
        {
          id: "star-tile-arch",
          xPercent: 50,
          yPercent: 28,
          title: "Yıldızlı Çini Kemer",
          secretFact:
            "Medrese kapısının kemeri gökyüzünü andıran yıldız desenleriyle süslüdür; öğrenciler her girişte astronomiyi hatırlardı.",
        },
        {
          id: "dust-board",
          xPercent: 32,
          yPercent: 62,
          title: "Kum Tahtası",
          secretFact:
            "Kâğıdın pahalı olduğu dönemlerde hesaplar ince kum serpilmiş tahtalara yazılır, silinip yeniden çözülürdü.",
        },
        {
          id: "open-door-policy",
          xPercent: 72,
          yPercent: 55,
          title: "Herkese Açık Kapı",
          secretFact:
            "Medrese uzak şehirlerden gelen öğrencileri ağırlardı; Ali Kuşçu gibi kuşçubaşının oğlu da bu ortamda yetişti.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Uluğ Bey bir hükümdar olduğu halde sınıfta öğrenci gibi oturup hocasına soru sormaktan neden çekinmedi?",
      "Bir soruyu bilmediğinde 'bilmiyorum, birlikte öğrenelim' demek sence güçlü bir davranış mıdır, neden?",
      "Ali Kuşçu'nun babasının mesleği yüzünden dışlanmaması neden önemliydi? Bugünkü okullarda bu nasıl sağlanabilir?",
    ],
  }),

  // --------------------------------------------------------------------------
  // BÖLÜM 3: SİNÜS 1° VE ZÎC-İ SULTÂNÎ'NİN YOLCULUĞU (10 SAHNE)
  // --------------------------------------------------------------------------
  buildChapter({
    id: "ulug-bey-ch3",
    heroId: "ulug-bey",
    chapterNumber: 3,
    title: "Sinüs 1° Hesabı ve Zîc-i Sultânî'nin Yolculuğu",
    subtitle:
      "Küçük bir açının büyük sırrı: Semerkand'dan Oxford'a uzanan bir bilim kitabı",
    estimatedMinutes: 9,
    scenes: [
      {
        title: "Bir Derecelik Eksik Halka",
        narration:
          "Semerkand'ın sessiz bir akşamında Uluğ Bey, Kâşî ve Kadızâde masanın etrafına oturmuş, yağ lambasının altında bir sorunla uğraşıyordu. Yıldızların gökteki yerlerini yazacak koca bir kitap, yani Zîc hazırlıyorlardı. Bunun için bir 'sinüs tablosu' gerekiyordu. Sinüs, bir açının çember içindeki dikme boyunu gösteren sayıydı; tıpkı bir merdivenin her basamağının yüksekliğini bilmek gibi. Tabloya 1 dereceden 90 dereceye kadar bütün basamaklar tek tek yazılmalıydı.\n\nAma bir sorun vardı: Merdivenin ilk basamağı, yani 1 derecenin sinüsü, bilinmiyordu! O olmadan öteki basamakları hesaplamak mümkün değildi. Üstelik değer biraz yanlış çıkarsa hata her satırda büyüyerek yıldız konumlarını kaydıracaktı. Kâşî elindeki kalemi bıraktı. Uluğ Bey başını salladı. Bir derecelik eksik halkayı bulmak için sabırlı bir yolculuğa çıkacaklardı.\n\nDışarıda gece kuşları ötüyor, penceredeki ince perde hafifçe dalgalanıyordu. Masanın üzerinde pergeller, cetveller ve üstü karalanmış kâğıtlar dağınık duruyordu. Üç bilgin birbirine baktı; hiçbiri uyumayı düşünmüyordu, çünkü merak, uykudan her zaman daha güçlüdür.",
        speaker: "Gıyâseddin Cemşîd el-Kâşî",
        dialogue:
          "Merdivenin ilk basamağını yanlış koyarsak yıldızlara varmadan yolumuzu şaşırırız!",
        funFact:
          "Bugün kullandığımız 'sinüs' kelimesi, Arapça 'ceyb' (cep, kıvrım) sözcüğünün Orta Çağ'da Latince 'sinus' diye çevrilmesinden gelir.",
        image: "assets/images/meryem_el_icliyye_astrolabe.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Yağ lambası ışığında üç bilginin etrafında toplandığı, üzerinde pergel ve açı çizimleri olan masa.",
      },
      {
        title: "Pergelle Bulunan Üç Derece",
        narration:
          "Sinüs 1° doğrudan hesaplanamazdı; ama bilginler akıllıca bir dolambaçlı yol buldu. Pergel ve cetvelle çizilebilen şekiller vardı: düzgün beşgen, altıgen, kare. Bu şekillerin içinden 18 derece ve 15 derece gibi açılar çıkıyordu. Peki bu iki açı ne işe yarardı? Aralarındaki farka bakın: 18 eksi 15, tam 3 derece!\n\nKâşî kum tahtasında sayıları çarptı, böldü, karekökünü aldı. Her adımın sonucunu Kadızâde'ye gösterdi; o da bağımsız hesaplayıp karşılaştırdı. Böylece 3 derecenin sinüsü virgülden sonra çok sayıda basamakla bulundu. Uluğ Bey avucundaki küçük taşları sıraya dizerek çocuklara anlatır gibi özetledi: 'Elimizde üç basamaklık bir merdiven var. Şimdi bunu bir basamaklık üç parçaya bölmeliyiz.' Ama bu bölme, kolay bir kesme işi değildi; arkasında gizli bir bilmece vardı.\n\nMum alevi titredi, tahtadaki rakamlar kısa süre gölgeye gömüldü. Kadızâde lambanın fitilini ayarladı. Kum tanelerinin arasında parıldayan sayı sütunları, sanki hâlâ çözülmeyi bekleyen küçük bir sırrı saklıyordu.",
        speaker: "Kadızâde-i Rûmî",
        dialogue:
          "On sekizle on beş arasındaki fark bize üç derecenin kapısını açtı; şimdi o kapıdan bir dereceyi çıkarmamız gerek.",
        funFact:
          "18 derecenin sinüsü, düzgün beşgenin geometrisinden gelen (√5 − 1) / 4 sayısıdır; bu sayı Eski Yunan'dan beri bilinir ve 3°'lik hesabın başlangıç taşı oldu.",
        image: "assets/images/harizmi_usturlap.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Kum tahtasında bir daire içine çizilmiş düzgün beşgen, altıgen ve kare; yanında pergel ve sıralanmış küçük taşlar.",
      },
      {
        title: "Üçlü Açı Bilmecesi",
        narration:
          "Şimdi sıra asıl bilmeceye gelmişti. Eski matematikçiler bir açının üç katının sinüsü ile kendi sinüsü arasında gizli bir bağ olduğunu biliyordu. Kâşî bunu tahtaya yazdı: Üç açının sinüsü, açının sinüsünün üç katından, aynı sinüsün üç kez çarpılıp dört katının çıkarılmasıyla elde ediliyordu; yani sin 3x = 3·sin x − 4·sin³x. Aranan sayı eşitliğin hem bir yanında düz, hem öbür yanında küp hâlinde duruyordu.\n\nBu, kendi gölgesini kovalayan bir tilkiyi yakalamaya benziyordu; çünkü çözüm tek hamlede bulunamıyordu. Önce bir tahmin yaptılar. Bu tahmini denkleme koyup daha iyi bir sonuç elde ettiler; sonra onu yeniden koydular. Her turda sayı gerçek değere biraz daha yaklaştı. Bu yönteme bugün 'iterasyon', yani tekrarlayarak yaklaşma diyoruz. Semerkand'lı bilginler bunu yüzyıllar önce mum ışığında uyguluyordu.\n\nTahtanın üzerinde yeni satırlar belirdikçe sayılar uzadı. Kâşî her turu temiz bir kâğıda geçirdi; Kadızâde de aynı hesabı kendi masasında tekrarladı. İki sonuç birbirini tutunca ikisi birden derin bir nefes aldı. Doğruluk, iki ayrı elin aynı sonucu bulmasıyla kanıtlanıyordu.",
        speaker: "Gıyâseddin Cemşîd el-Kâşî",
        dialogue:
          "Tahminim gerçeğe ilk seferde dokunmasa bile, onu bir sonraki turda yakalayacak kadar yaklaşabilirim!",
        funFact:
          "Kâşî bu yöntemle 1°'nin sinüsünü ondalık olarak on beşten fazla basamağa kadar doğru buldu. Zîc'in sinüs tablosu ise virgülden sonra yaklaşık dokuz basamak doğruluktadır.",
        image: "assets/images/harizmi_s1_house_of_wisdom.png",
        atmosphere: "WORKSHOP_GEARS",
        visualNote:
          "Tahtaya yazılmış üçlü açı denklemi ve yanında her turda biraz daha uzayan sayı sütunları; bilginlerin hesap kâğıtları.",
      },
      {
        title: "Hesap Nerede Durmalı?",
        narration:
          "Üçüncü turdan sonra sonuç virgülden sonra altı basamak doğru çıktı. Masanın çevresindeki bilginlerden biri esneyip lambaya baktı: 'Altı basamak bence yeter. Gökyüzüne bakarken bu kadar küçük farkı kim görecek?' Gerçekten de pek çok takvimci ve denizci için bu doğruluk fazlasıyla yeterliydi. Gece yarısı olmuştu, mumlar kısalmıştı; herkes yorgundu.\n\nUluğ Bey ise kâğıtları çevirip bir şeyi hatırlattı: 1°'nin sinüsündeki küçük bir fark, tablonun sonraki yüzlerce satırına taşınacak ve yıllarca tekrarlanacaktı. 'Bugün gözümüzün seçemeyeceği bir hata, yarın bir gezegenin yerini şaşırtabilir,' dedi. Masadakiler duraksadı. Hesabı şimdi durdurmak mı, yoksa uykudan feragat edip bir tur daha sürdürmek mi gerekiyordu? Bu karar, Zîc'in ne kadar güvenilir olacağını belirleyecekti.\n\nMumun son damlası eriyip masaya sızdı. Dışarıda gece nöbetçisinin seslenişi duyuldu. Uluğ Bey çenesini avucuna dayayıp kâğıtlara baktı. Herkesin yorgun gözlerinde hem uyku hem de merak vardı; karar sandıklarından çok daha ağırdı.",
        speaker: "Uluğ Bey",
        dialogue:
          "Küçük hata, tablo her satırda tekrar ettikçe büyür; bugün biraz yorulalım ki yarın kimse yanılmasın.",
        funFact:
          "Bilgisayarların kullandığı pek çok hesap yöntemi de aynı fikre dayanır: Tahmini adım adım iyileştirmek. Bu yönteme 'iterasyon' denir.",
        image: "assets/images/harizmi_s2_sundial_observatory.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Gece yarısı kısalmış mumların altında yorgun bilginler ve hesap kâğıtlarını gösteren kararlı hükümdar.",
        midDecision: {
          title: "ARA KARAR: Hesabı Bırakır mısın, Sürdürür müsün?",
          question:
            "Hesaplar altı basamak doğrulukla durdu. Gece yarısı, herkes yorgun ve bu doğruluk çoğu iş için yeterli görünüyor. Ama bu sayı koca bir yıldız tablosunun temeli olacak. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Altı basamak yeter; hesabı bırakır, dinlenip ertesi gün yeni işe başlarız.",
              feedback:
                "Yorgunluk anlaşılır; ama temel sayıdaki küçük hata, tablonun bütün satırlarına taşınır. Bu yüzden durmak riskliydi.",
              isBestChoice: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Hata küçük görünse de büyüyebilir; birkaç tur daha yaparak basamak sayısını artırır, sonucu ayrı ayrı doğrularız.",
              feedback:
                "Harika! Temel bir sayıyı ne kadar titizlikle hesaplarsan sonraki bütün ölçümler o kadar güvenilir olur.",
              isBestChoice: true,
            },
          ],
        },
      },
      {
        title: "Zîc'in Dört Bölümü",
        narration:
          "Sinüs 1° bulunduktan sonra bütün tablo birkaç ay içinde dolmaya başladı. Zîc-i Sultânî dört büyük bölümden oluşuyordu: Takvimlerin ve zaman hesabının anlatıldığı kısım, sinüs ve açı tablolarının bulunduğu kısım, Güneş ile Ay'ın ve gezegenlerin hareketlerinin hesaplandığı kısım ve en sonda yıldız kataloğu. Kitap Farsça kaleme alınmıştı ve her sayfası ayrı bir bilmece çözümüydü.\n\nHocalar tablonun doğruluğunu birbirlerine kontrol ettirdi. Kimi usturlapla, kimi Fahrî Sekstantı'ndan gelen ölçümlerle satırları denetledi. Kitap ciltlenip hazır olduğunda odadaki herkes taze mürekkep ve yeni deri kokusunu içine çekti. Uluğ Bey bir sayfayı açtı, parmağını bir satırın üzerine koydu: 'Bu satır yüzyıllar sonra da birinin yolunu aydınlatacak.' Odada kimse konuşmadı; çünkü herkes aynı şeyi hissediyordu: Bu kitap yalnızca onlara ait değildi.\n\nSayfaların arasında pencereden süzülen sabah ışığı yürüdü. Dışarıda Semerkand yeni bir güne uyanıyor, kervanlar yola çıkıyordu. İçeride ise yüzlerce sayının ardında yıllarca süren bir gözlem, dostluk ve sabır uyuyordu.",
        speaker: "Uluğ Bey",
        dialogue:
          "Yıldızların konumunu defterimize yazarken, bir gün başka bir ülkenin gökbilimcisinin de bu sayfalara bakacağını düşünün.",
        funFact:
          "Zîc-i Sultânî 1437–1439 yıllarında tamamlandı. 992 yıldızın konumu yeniden ölçüldü ve el-Sûfî'nin kitabından Semerkand'dan görülemeyen 27 güney yıldızı eklenerek toplam 1.018 yıldıza ulaşıldı.",
        image: "assets/images/meryem_s2_celestial_globe.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Taze ciltlenmiş büyük bir yıldız kitabını açan hükümdar; etrafında tablolara bakan hocalar ve masadaki gök küresi.",
      },
      {
        title: "Güneş Yılı: 365 Gün 5 Saat 49 Dakika 15 Saniye",
        narration:
          "Zîc'in zaman bölümünde en önemli sorulardan biri şuydu: Güneş, ilkbaharda aynı noktaya tam olarak kaç günde döner? Bu süre, mevsimlerin yeniden başladığı süre olan 'Güneş yılı'ydı. Kuhak Tepesi'ndeki rasathanede Fahrî Sekstantı'nın taş yayına düşen ışık noktası yıllar boyunca her gün işaretlendi. Gölgenin kışın uzayıp yazın kısalması dikkatle yazıldı.\n\nSonunda hesaplar masaya yatırıldığında Güneş yılı için şu değer çıktı: 365 gün, 5 saat, 49 dakika ve 15 saniye. Bugünkü ölçümle fark yalnızca yarım dakika kadar, yani yaklaşık 25–30 saniye! Bu doğruluk çıplak gözle yapılmış bir ölçüm için olağanüstüydü. Uluğ Bey hesabın sonunu okuyan öğrencisine gülümsedi: 'Çiftçi mevsimi kokusundan anlar, bizse mermer bir yayla ölçeriz; birimiz gönlüyle, öbürümüz hesabıyla aynı gerçeğe varıyor.'\n\nTaş yayın üzerinde ışık noktası yavaşça kıpırdadı. Genç astronomlar sayıları fısıldayarak defterlerine yazdı. Gölgeler uzadıkça yeni bir mevsimin yaklaştığını hissettiler. Zaman, o sessiz odada bile kendini ölçülebilir kılıyordu.",
        speaker: "Uluğ Bey",
        dialogue:
          "Mevsimleri döndüren süre 365 gün 5 saat 49 dakika 15 saniye! Küçük bir saniye bile bize gökyüzünün hikâyesini anlatıyor.",
        funFact:
          "Birinci bölümde yıldızlara göre ölçülen 'yıldız yılı'nı öğrenmiştik; burada mevsim yılı olan 'Güneş yılı' hesaplanıyor. Uluğ Bey sonraki ölçümlerinde yıldız yılı için 365 gün 6 saat 9 dakika 35 saniye gibi daha doğru bir değer de buldu; bu değerin hatası yaklaşık 25 saniyedir.",
        image: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
        atmosphere: "STARLIT_OBSERVATORY",
        visualNote:
          "Karanlık gözlem odasında mermer sekstant yayına düşen ince bir güneş ışığı ve ışık noktasını işaretleyen genç astronom.",
      },
      {
        title: "Ali Kuşçu İstanbul Yolunda",
        narration:
          "Yıllar geçti. Uluğ Bey 1449'da hayatını kaybettikten sonra Semerkand'ın bilim hayatı sarsıldı. Hocasının bilgisini taşıyan Ali Kuşçu doğu şehirlerinde dolaştı, sonra Tebriz'de Akkoyunlu hükümdarı Uzun Hasan'ın sarayına yerleşti. 1472'de Uzun Hasan onu elçi olarak İstanbul'a gönderdi. Yolculuk uzundu; dağlar, karlı geçitler, hanlar ve nehirler arkada kalırken Ali Kuşçu'nun çantasında defterleri ve hesapları vardı.\n\nİstanbul'da onu Fatih Sultan Mehmed karşıladı. Fatih, çocukluğundan beri çizim defterleri, matematik ve mühendislikle uğraşan bir padişahtı. Ali Kuşçu'nun bilgisini ve nezaketini görünce ona bir teklif sundu: Kalıp İstanbul'da ders vermesini istedi. Ali Kuşçu birkaç gün düşündü. Semerkand'ın mumu başka bir şehirde yeniden yanabilirdi. Bir bilgin için en güzel yurt, bilgisini paylaşabileceği yerdi.\n\nİstanbul'un iskelesinde martılar dolaşıyor, kayıklar ışıl ışıl sulara yaklaşıyordu. Ali Kuşçu yeni şehrin camlarından yansıyan ışığa baktı. Mimari bambaşkaydı ama gökyüzü aynıydı: aynı yıldızlar, aynı hesap, aynı merak.",
        speaker: "Fatih Sultan Mehmed",
        dialogue:
          "Hocam, ilmin sınır tanımadığını bilirim; bu şehir sizin için yeni bir Semerkand olsun!",
        funFact:
          "Kaynaklara göre Ali Kuşçu, Fatih'in isteğiyle İstanbul'da kalarak Ayasofya Medresesi'nde müderris oldu ve günlük 200 akçe maaş aldı.",
        image: "assets/images/fatih_s2_red_notebook_plan.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Sarayda iki bilgin: bir yanda çizim defterlerini gösteren padişah, öte yanda uzun yolculuktan gelmiş yorgun ama saygın astronom.",
      },
      {
        title: "Ayasofya Medresesi'nde Semerkand Dersleri",
        narration:
          "Ali Kuşçu İstanbul'da Ayasofya Medresesi'nde ders vermeye başladığında öğrencileri onun sınıfında Semerkand'ın havasını soludu. Tahtaya Kâşî'den öğrendiği geometri şekillerini çiziyor, usturlapla gökyüzünü ölçüyor, hocası Uluğ Bey'in 'önce kendin ölç' ilkesini anlatıyordu. Fatih'in kurdurduğu Sahn-ı Seman Medreseleri'nin ilim ortamı da bu bilgi alışverişiyle zenginleşti.\n\nAli Kuşçu Fatih adına Muhammediyye adlı bir matematik kitabı yazdı. Padişah ona ve ilmine büyük saygı gösterirdi. Semerkand'da filizlenen bilgi, İstanbul'un taş avlularında yeni bir bahçe buldu. Ancak Ali Kuşçu yalnızca iki yıl sonra, 1474'te vefat etti ve Eyüp'e defnedildi. Öğrencileri onun getirdiği bilgiyi taşımaya devam etti. Bir bilginin gerçek mirası, kendisinden sonra sınıfta çalmaya devam eden kalem sesleridir.\n\nMedrese avlusunda akşam ezanı okunurken öğrenciler defterlerini topladı. Taş duvarlar yaşlı bir bilgin gibi sessizce dinliyordu. Uzakta Haliç'te, ışıkları yeni yanan gemiler yavaş yavaş demirliyordu. Son öğrenci kapıdan çıkarken defterindeki şekle bir kez daha baktı; Semerkand'dan gelen bir çizgi, artık İstanbul'da onun zihninde yaşıyordu.",
        speaker: "Ali Kuşçu",
        dialogue:
          "Hocam Uluğ Bey bana gökyüzünü ölçmeyi öğretti; ben de size öğretiyorum ki bir gün siz başkalarına öğretesiniz.",
        funFact:
          "Ali Kuşçu'nun Fatih Sultan Mehmed'e adadığı aritmetik kitabının adı Muhammediyye'dir.",
        image: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "İstanbul'da taş avlulu bir medresede astronomi ve matematik dersi anlatan hocanın etrafındaki öğrenciler; arka planda Ayasofya silueti.",
      },
      {
        title: "Oxford'a Giden Zîc",
        narration:
          "Zîc'in yolculuğu Anadolu'da bitmedi. 1638'de İngiltere'den İstanbul'a bir bilim yolcusu geldi: Oxford Üniversitesi'nde sonradan astronomi profesörü olacak John Greaves. Greaves, çarşılarda ve kütüphanelerde Doğu'nun astronomi el yazmalarını arıyordu. Sahafların raflarını ve eski ciltleri kurcalarken, aralarında Uluğ Bey'in astronomi tablolarına ait Farsça metinlerin de bulunduğu çok sayıda el yazması topladı.\n\nGreaves bu metinlerden çevirdiği bölümleri 1650 dolaylarında Latince yayımladı. Böylece Avrupalı gökbilimciler Uluğ Bey'in adını ilk kez yakından duydu. İngiltere'de bir odada, Semerkand'ın mum ışığında yazılmış bir tabloyu inceleyen bilgin belki de şöyle düşünüyordu: 'Bu hesabı kim yazdıysa doğru yazmış.' Bu, bilimin en güzel yanıydı: Bir bilginin hangi şehirden, hangi dilde yazdığına bakmadan doğruluğu tanıyabilmek.\n\nGreaves gemiye binerken sandıklarını bir kez daha saydı. Rüzgârlı denizde dalgalar tahta ambarın üzerinde çatırdıyordu. Sandıkların içinde yüzlerce yıllık bir emek, kâğıt ve mürekkep kokusuyla bir denizden öbürüne yol alıyordu.",
        speaker: "John Greaves",
        dialogue:
          "Doğu'nun kitaplıklarında, Avrupa'nın henüz bilmediği hazineler duruyor!",
        funFact:
          "John Greaves 1643'te Oxford'da Savilian Astronomi Profesörü oldu; Mısır'daki piramitleri ölçen ilk Avrupalı bilginlerden biridir.",
        image: "assets/images/islamic_world_atlas_map.png",
        atmosphere: "STORM_SEA",
        visualNote:
          "İstanbul çarşısında eski el yazması ciltleri karıştıran Avrupalı bir bilim yolcusu; arka planda Boğaz ve gemiler.",
      },
      {
        title: "Oxford'dan Ay'a Uzanan İz",
        narration:
          "Zîc'in büyük macerası 1665'te Oxford'da yeni bir sayfa açtı: Thomas Hyde, Uluğ Bey'in yıldız kataloğunu Latince çevirisiyle birlikte bastırdı. Artık İngiltere'de, Fransa'da, Hollanda'da gökbilimciler kitabı açıp yıldız konumlarını kontrol edebiliyordu. Yüzyıllar sonra, 1767'de ve 1843'te bu katalog yeniden basıldı.\n\nGökyüzü de Uluğ Bey'i unutmadı: Ay'ın yüzeyindeki bir krater onun adını taşıyor. Semerkand'da Registan'ın turkuaz kapısından sınıfa giren öğrenciler, Zîc'in kum tahtasında başlayan yolculuğunun Oxford'a, oradan Ay'a uzanacağını bilseydi şaşırırdı. Ama Uluğ Bey bu yolculuğu başlatırken tek bir şeye güveniyordu: Doğru ölçen ve dürüstçe paylaşan bilim, hangi şehre giderse gitsin kendi yolunu bulurdu.\n\nOxford'un kütüphanesinde mum ışığında kitabın sayfaları çevrildi; sayfalarda 1.018 yıldızın adı ve konumu sıra sıra duruyordu. Dışarıda gece gökyüzü Semerkand'dakiyle aynı yıldızlarla parlıyordu. Bilim, böylece sınırları aşan bir ışığa dönüşmüştü. Bir sayfanın kenarına düşmüş küçük bir not, yüzyıllar sonra bile 'Kim yazdıysa dikkatle yazmış' dedirtecek kadar titizdi.",
        speaker: "Uluğ Bey",
        dialogue:
          "Doğru ölçülmüş bir sayı, nerede okunursa okunsun yine doğrudur; bu yüzden bilim bütün insanlığındır.",
        funFact:
          "Zîc-i Sultânî, 16. yüzyılda Takiyüddin ile Tycho Brahe'nin çalışmalarına kadar doğruluğu aşılamayan bir yıldız kataloğu olarak kabul edilir.",
        image: "assets/images/ulug_bey_observatory.png",
        atmosphere: "STARLIT_OBSERVATORY",
        visualNote:
          "Yıldızlı gökyüzünde parlak Ay ve altında açık bir yıldız kitabı; kenarda Semerkand rasathanesinin silueti.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Yıldız tablosu için bir derecenin sinüsünü bulman gerekiyor ama onu doğrudan çizemiyorsun. Elinde yalnızca 3 derecenin sinüsünü bulan bir yol var. Zîc'i güvenilir yapmak için ne yaparsın?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Bir derece için tahmini bir sayı yazar, doğru çıkacağını umarım.",
          feedback:
            "Tahmin tek başına yeterli değildir; küçük bir hata tablonun bütün satırlarına yayılır.",
          isHistoricalTruth: false,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Eski bir kitapta yazan değeri kontrol etmeden kopyalarım.",
          feedback:
            "Uluğ Bey ve ekibi başkalarının değerlerini bile yeniden ölçüp hesaplayarak doğruladı.",
          isHistoricalTruth: false,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "3 derecenin sinüsünden üçlü açı denklemini kurar, tahmini adım adım iyileştirerek çok basamaklı sonucu bulur ve ekibimle birlikte doğrularım.",
          feedback:
            "Tarihi Hakikat! Semerkand'lı bilginler üçlü açı denklemini tekrarlayan hesapla çözerek sinüs 1°'yi çok yüksek doğrulukla buldu.",
          isHistoricalTruth: true,
        },
      ],
      historicalTruthExplanation:
        "Semerkand bilginleri 3 derecenin sinüsünü geometriyle bulup üçlü açı denklemini tekrarlayan hesapla çözerek sinüs 1°'yi çok yüksek doğrulukla elde etti. Bu sinüs tablosu, Zîc-i Sultânî'nin temelini oluşturdu.",
      quoteHighlight:
        "Küçük bir açının sayısı, koca bir gökyüzünün güvenini taşır.",
    },
    rewardArtifact: {
      id: "artifact-ulug-bey-sine-zic-journey",
      name: "Sinüs 1° Tablosu ve Yolculuk Eden Zîc",
      imagePath: "assets/images/meryem_s2_celestial_globe.png",
      pointType: "BILGELIK",
      pointLabel: "Bilgelik Puanı",
      points: 60,
      unlockedTitle: "Bir Derecenin Bilgesi",
      shortDescription:
        "Sinüs 1° hesabının, Güneş yılı ölçümünün ve Zîc-i Sultânî'nin Semerkand'dan İstanbul'a, Oxford'a uzanan yolculuğunun simgesi.",
      historicalNote:
        "Zîc-i Sultânî 1437–1439'da tamamlandı; Ali Kuşçu aracılığıyla Osmanlı ilim dünyasına, John Greaves ve Thomas Hyde aracılığıyla Avrupa'ya ulaştı.",
      accentColor: "#0D9488",
      hotspots: [
        {
          id: "sine-table",
          xPercent: 32,
          yPercent: 42,
          title: "1° Aralıklı Sinüs Tablosu",
          secretFact:
            "Zîc'teki sinüs tablosu 1 derecelik adımlarla ilerler; ilk basamak olan sinüs 1° bulunmadan tablonun geri kalanı hesaplanamazdı.",
        },
        {
          id: "solar-year-row",
          xPercent: 68,
          yPercent: 35,
          title: "Güneş Yılı Satırı",
          secretFact:
            "Güneş yılı için 365 gün 5 saat 49 dakika 15 saniye hesaplandı; bugünkü değerden fark yalnızca yarım dakika kadardır.",
        },
        {
          id: "oxford-route",
          xPercent: 50,
          yPercent: 72,
          title: "Oxford Yolculuğu",
          secretFact:
            "Greaves'in 1650 dolaylarındaki Latince yayınları ve Thomas Hyde'ın 1665 baskısı, Zîc'i Avrupa'ya tanıttı.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Uluğ Bey ve ekibi, altı basamak yeterliyken neden hesaplarını sürdürdü? Sen olsan nerede dururdun?",
      "Ali Kuşçu Semerkand'dan İstanbul'a bilgiyi taşıdı; senin bildiğin bir şeyi başkasına öğretmek sana nasıl hissettirir?",
      "Bilimin kimin yazdığına ve hangi dilde yazıldığına bakmadan paylaşılması neden önemlidir?",
    ],
  }),
];

// ============================================================================
// PİRİ REİS & HEZÂRFEN AHMED ÇELEBİ — EK BÖLÜM (ch3)
// ============================================================================
export const PIRI_REIS_EXTRA_CHAPTERS: StoryChapter[] = [
  buildChapter({
    id: "piri-reis-ch3",
    heroId: "piri-reis",
    chapterNumber: 3,
    title: "Kanatların Defteri: Kuşları İzleyen Mühendis",
    subtitle:
      "Hezârfen Ahmed Çelebi'nin hazırlığı, rivayetler ve gerçekler",
    estimatedMinutes: 9,
    scenes: [
      {
        title: "Doğancılar Meydanı'nda Şafak",
        narration:
          "Üsküdar'ın Doğancılar Meydanı'nda Boğaz'dan yükselen sabah sisi henüz dağılmamıştı. Meydan, adını burada av kuşlarını eğiten doğancılardan alıyordu. Şahinler kalın eldivenlerin üzerinde sabırla bekliyor, doğancılar kuşlarına kısık sesle konuşuyordu. Meydanın kenarında, koltuğunun altında kalın bir defterle genç bir adam oturuyordu ve hiçbir şeyi kaçırmadan izliyordu: Hezârfen Ahmed Çelebi.\n\nEvliya Çelebi'nin anlattığına göre Hezârfen, on yedinci yüzyıl İstanbul'unun çok yönlü bilginlerindendi. Bugün ona uçuşuyla bakıyoruz ama o sabah yalnızca bir gözlemciydi. Doğancı şahinini göğe bıraktığında Hezârfen defterine hızlı çizgiler attı: kanadın açılışı, kuyruğun dönüşü, rüzgârı yakalayan tüylerin dizilişi. Şahin birkaç kanat çırptıktan sonra hiç çırpmadan süzüldü. Çelebi mırıldandı: 'Süzülmek, kanat çırpmaktan daha ince bir hesap işi.'\n\nDoğancılardan biri ona bir fincan çay uzattı. Çelebi bir yudum aldı ama gözlerini şahinden ayırmadı. Boğaz'ın serin rüzgârı defterin sayfalarını çeviriyor, martıların çığlıkları meydanın taşlarında yankılanıyordu. Kuzeyden gelen bir leylek sürüsü tepelerinin üzerinden geçti; Hezârfen başını kaldırıp onların kanat uzunluklarını gözleriyle ölçmeye başladı.",
        speaker: "Hezârfen Ahmed Çelebi",
        dialogue:
          "Şahin bana kanadını nasıl kullandığını gösteriyor; benim işim gördüğümü hatasızca deftere geçirmek!",
        funFact:
          "Üsküdar'daki Doğancılar semti adını Osmanlı döneminde burada çalışan doğancılardan alır; rivayete göre Hezârfen'in uçuşunu bitirdiği Doğancılar Meydanı da bu semttedir.",
        image: "assets/images/hezarfen_s2_uskudar_landing.png",
        atmosphere: "DAWN_MIST",
        visualNote:
          "Sabah sisinde Üsküdar Doğancılar Meydanı'nda şahin tutan doğancılar ve kenarda defterine çizim yapan genç bilgin.",
      },
      {
        title: "Göçmen Kuşların Boğaz Merdiveni",
        narration:
          "İstanbul, kuşlar için dünyanın en önemli göç yollarından biridir. Sonbaharda Boğaz'ın üstünden leylekler, kartallar ve atmacalar sürüler hâlinde geçer. Hezârfen de günlerini bu göçmen kuşları izlemekle geçirdi. Kimi sabah Çamlıca Tepesi'ne çıktı, kimi akşam Galata'nın önünde oturdu. Kuşların kanatlarını nasıl kıvırıp rüzgâra karşı dönüş yaptıklarını görünce bir şeyi fark etti: En büyük kuşlar bile çok az kanat çırpıyordu.\n\nSıcak hava kütleleri yamaçlardan yukarı yükselirken kartalların kanatları onları adeta merdiven çıkarır gibi taşıyordu. Bugün bu yükselen hava akımlarına 'termik' diyoruz. Leylekler bir termikte spiral çizerek yükseliyor, sonra uzun bir süzülüşle bir sonrakine geçiyordu. Hezârfen bu görünmez merdivenlerin hangi saatte, hangi yamaçta oluştuğunu anlamaya çalıştı. Mühendislik dediğimiz şey işte buydu: Doğayı kopyalamadan önce onu uzun uzun anlamak.\n\nAkşamüstü Hezârfen aşağı indiğinde ayakları yorgun, defteri ise çizgilerle doluydu. Dönüş yolunda sokak çocukları ona 'Yine kuşlarla mı konuştun Çelebi?' diye seslendi. O gülümsedi: 'Evet, ve bana çok şey söylediler.'",
        speaker: "Hezârfen Ahmed Çelebi",
        dialogue:
          "Kartal kanadını neredeyse hiç çırpmıyor; demek ki rüzgârın görünmez bir merdiveni var ve ben onu bulacağım!",
        funFact:
          "İstanbul Boğazı'ndan her sonbahar yüz binlerce leylek ve yırtıcı kuş geçer. Hezârfen'in defterinden bize ulaşan bir sayfa yoktur; sahnedeki gözlemler, onun bir mühendis gibi çalıştığını düşünerek yazılmış canlandırmadır.",
        image: "assets/images/piri_reis_s2_mediterranean_cove.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Boğaz üzerinde yükselen sıcak hava akımında spiral çizerek süzülen leylek ve kartal sürüsü; tepeden izleyen bir bilgin.",
      },
      {
        title: "Hayalimizdeki Atölye ve El-Cezerî'nin Kitabı",
        narration:
          "Hayalimizde Hezârfen'in atölyesine girelim. Hangi kitapları okuduğunu tam bilmiyoruz; ama onun gibi çok yönlü bir bilginin, yaklaşık dört yüz yıl önce Diyarbakır'da yaşamış mühendis El-Cezerî'nin eserini tanıması çok mümkündü. Cezerî'nin kitabında su saatleri, otomatlar, su çıkaran çarklar ve birbirine bağlanan dişli mekanizmalar adım adım resimlerle anlatılıyordu. Cezerî bir aleti önce çizer, sonra yapar, sonra yeniden çizerdi.\n\nBu yöntem Hezârfen'in çok hoşuna gitmiş olabilirdi. Kuşun kanadı kemiklerin, tüylerin ve kasların oyunuyla hareket eder; bir mühendis ise dişlileri, kolları ve makaraları kullanırdı. Peki bu iki dünyayı birleştirmek mümkün müydü? Hayalimizdeki Hezârfen ilk önce küçük bir ahşap kanat modeli yaptı ve ipek gerdi. Model birkaç kez kanat çırptıktan sonra düştü. Çelebi hiç sinirlenmedi; her düşüş, sonraki çizimde düzeltilecek bir hataydı.\n\nAtölyenin penceresinden süzülen akşam ışığı tezgâhtaki bakır parçalara vuruyordu. Havada mum, ahşap tozu ve ipek kokusu vardı. Her çizimin altına küçük bir not yazılıyordu: 'Bir dahaki sefere şunu değiştir.' Hezârfen için hata, öğretmenin başka bir adıydı.",
        speaker: "Hezârfen Ahmed Çelebi",
        dialogue:
          "Cezerî çizerek düşünürdü; ben de önce defterime çizeyim, sonra kanadımı yapayım, düşersem yine çizeyim.",
        funFact:
          "El-Cezerî'nin kitabı 1206'da tamamlandı ve 50 kadar mekanik cihazı anlatır. Hezârfen'in bu kitabı okuduğuna dair elimizde belge yoktur; bu bölümdeki bağlantı, İslam dünyasındaki mühendislik geleneğini hatırlatan bir hayaldir.",
        image: "assets/images/cezeri_s2_copper_float.png",
        atmosphere: "WORKSHOP_GEARS",
        visualNote:
          "Mum ışığında bakır şamandıra, dişliler, ahşap kanat modeli ve çizim kâğıtlarıyla dolu bir mucit atölyesi.",
      },
      {
        title: "Kanadı Nasıl Deneyeceksin?",
        narration:
          "Hayalimizdeki atölyede ilk gerçek boy kanat taslağı ortaya çıktığında Hezârfen'in dostları meraklanıp toplandı. Kimi 'Hemen bir kuleden dene, herkes görsün!' dedi, kimi 'Bu işe girişilmez, vazgeç!' diye endişelendi. Atölyenin duvarında rüzgâr güllerinin çizildiği bir levha, bakır bir rüzgâr ölçeri ve sepet sepet kuş tüyü vardı.\n\nHezârfen kanadı iki kişinin tuttuğu yerde dengeledi, rüzgâra çevirdi; kanadın bir yanı yukarı kalkıp öbür yanı eğildiğinde başını salladı. Bu taslak henüz bir insanı taşıyamazdı. Peki ilk denemeyi nasıl yapmalıydı? Hemen en yüksek yerden mi, yoksa küçük adımlarla mı? Dostları ondan bir karar bekliyordu. Hem cesur olmak hem de can güvenliğini gözetmek gerekiyordu. Kumaşın hışırtısı, rüzgârın uğultusu ve tahta çıtalardaki hafif gıcırtı sessizliği bozuyordu.\n\nHezârfen derin bir nefes aldı. Bu karar yalnızca kendi canını değil, dostlarının güvenini ve gelecekte onun izinden gidecek meraklıların yolunu da etkileyecekti. Atölye bir an için bir sınıf kadar sessiz kaldı.",
        speaker: "Hezârfen Ahmed Çelebi",
        dialogue:
          "Cesaret, kanadı kontrol etmeden atlamak değil; kontrol ettikten sonra bile bir adım daha dikkatle atmaktır.",
        funFact:
          "Modern havacılıkta yeni bir uçak önce rüzgâr tünelinde küçük bir maketle denenir. İlk rüzgâr tüneli 1871'de İngiliz mühendis Francis Wenham tarafından kuruldu.",
        image: "assets/images/el_cezeri_workshop.png",
        atmosphere: "WORKSHOP_GEARS",
        visualNote:
          "Atölyede rüzgâra çevrilmiş büyük bir ahşap-kumaş kanat taslağı, çevresinde tartışan dostlar ve duvarda rüzgâr gülü levhası.",
        midDecision: {
          title: "ARA KARAR: İlk Deneme Nasıl Olmalı?",
          question:
            "Kanat taslağın hazır. Dostlarından biri 'Hemen yüksek bir yerden dene!' diyor, bir diğeri 'Bu iş çok tehlikeli!' diyor. İlk denemeyi nasıl yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Hiç ön deneme yapmadan, en yüksek yerden hemen denerim; böylece herkes görür.",
              feedback:
                "Acele bir mucit için en büyük risktir. Deneme basamak basamak ilerlemezse hatayı küçük yerde bulamazsın.",
              isBestChoice: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Önce küçük modelleri ve ağırlık torbalarını alçak yamaçlarda denerim; her denemeyi deftere yazar, hata bulursam kanadı değiştiririm.",
              feedback:
                "Harika! Gözlem, küçük deneme, kayıt ve düzeltme: cesaret ancak hazırlıkla birleşince güvenli olur.",
              isBestChoice: true,
            },
          ],
        },
      },
      {
        title: "Rüzgâr Gülü ve Kuyruk Dengesi",
        narration:
          "Hezârfen, uçmanın yalnızca kanatla ilgili olmadığını biliyordu. Bir kuşun kuyruğu dümen, gövdesi ağırlık merkezi, gözleri ise pusuladır. Piri Reis'in haritalarındaki rüzgâr güllerine benzeyen bir levha çizdi: Boğaz'ın üzerine poyraz, lodos, yıldız ve kıble yönlerini işaretledi. Hangi mevsimde hangi rüzgâr, hangi yamaçta yükseliyor, sabahla akşam nasıl değişiyor; hepsini sıralamaya çalıştı.\n\nKuşları izlerken bir şeyi daha öğrendi: Rüzgâra karşı süzülen kuş daha yavaş ama daha güvenli iniyordu; arkadan rüzgâr alan kuş ise dengesini korumak için zorlanıyordu. Kuyruğun açısı biraz değiştiğinde süzülüşün yönü de değişiyordu. Bir mühendis için bu, ince ayar ve çok sabır demekti. Hezârfen defterinin kenarına küçük bir not düştü: 'Denge, cesaretten önce gelir.' Dışarıda lodos rüzgârı pencerenin kepengini hafifçe vuruyordu.\n\nHezârfen defterini kapatmadan önce rüzgâr gülünün ortasındaki küçük daireye bir nokta koydu. 'Burası benim durduğum yer,' dedi kendi kendine. 'Her yön buradan başlıyor.' Pusula, harita ve defter, o küçük masada bir araya gelmişti.",
        speaker: "Hezârfen Ahmed Çelebi",
        dialogue:
          "Kuş kuyruğuyla yönünü bulur; benim kanadımın da ağırlığı ve dengesi hesaplanmalı!",
        funFact:
          "Kuşların kanat uçlarındaki ayrık tüyler girdap oluşumunu azaltır. Günümüz uçaklarındaki kanat uçlarında bulunan küçük dik kanatçıklar (winglet) kuşlardan esinlenmiştir.",
        image: "assets/images/piri_reis_map.png",
        atmosphere: "WORKSHOP_GEARS",
        visualNote:
          "Bir levhaya çizilmiş rüzgâr gülü ve Boğaz yönleri; masada kuş kuyruğu çizimleri ve küçük bir ağırlık merkezi denemesi.",
      },
      {
        title: "Cesaretin Gecesi: Korku ve Hazırlık",
        narration:
          "Her mucidin bir de korku gecesi vardır. Hezârfen için bu gece büyük denemeden önce geldi. Atölyenin penceresinden Galata Kulesi'nin gölgesine baktı. Kanatla uçmayı deneyenlerin hikâyelerinin her zaman mutlu bitmediğini biliyordu. Dostları da endişeliydi; biri sessizce yanına yaklaşıp sordu: 'Ahmed, ya rüzgâr dönerse?'\n\nHezârfen gülümsedi: 'Rüzgâr dönerse inerim; dönmezse süzülürüm. Atlamamak için yüz sebep var ama bir kere atmak için tek bir şey yeter: Doğru gün, doğru rüzgâr, doğru kanat.' Cesaret korkmamak değildi; korkuyu tanıyıp hazırlıkla onunla yarışmaktı. O gece Hezârfen kanat bağlarını son kez kontrol etti, ipek gerginliğini saydı, kuyruğun dengesini yokladı. Sonra mum söndü ve yıldızlı Boğaz sessizce kanatların gölgesine uzandı.\n\nGece yarısı bir nöbetçinin sesi sokakta yankılandı. Hezârfen yatağında uzun süre gökyüzünü düşündü. Bütün kuşlar, bütün rüzgârlar ve bütün defter sayfaları zihninde sıralandı. Sabaha karşı uykuya daldığında yüzünde küçük bir gülümseme vardı.",
        speaker: "Hezârfen Ahmed Çelebi",
        dialogue:
          "Korkuyu yok etmem gerekmiyor; yeter ki hazırlığım korkumdan bir adım önde olsun.",
        funFact:
          "Leonardo da Vinci 1505 dolaylarında kuşların uçuşunu inceleyen küçük bir not defteri hazırladı; ancak insan taşıyan bir kanadı denediğine dair kanıt yoktur.",
        image: "assets/images/tarik_s2_gibraltar_cliff.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Gece pencereden Galata Kulesi'ne bakan düşünceli bilgin ve masada son kez kontrol edilen kanat bağları.",
      },
      {
        title: "Lagâri Hasan Çelebi'nin Barutlu Rüyası",
        narration:
          "Hezârfen'in İstanbul'unda gökyüzüne bakan tek kişi o değildi. Evliya Çelebi'nin yazdığına göre bir başka cesur mühendis, Lagâri Hasan Çelebi, yedi kollu bir roket yapmıştı. Rivayete göre roket yaklaşık elli okka, yani altmış dört kilogram kadar barutla doldurulmuştu. Hasan Çelebi Sarayburnu'nda bu roketin tepesine oturdu ve kalabalığın önünde fitil ateşlendi.\n\nEvliya'ya göre roket gökyüzüne yükseldi, sonra Hasan Çelebi kanatlarını açıp denize indi ve sağ salim kurtarıldı. Bu olay Evliya Çelebi'nin Seyahatnamesi dışında başka bir bağımsız kaynakla doğrulanmış değildir; bu yüzden tarihçiler bazı ayrıntılarını tartışır. Ama barutun şenliklerde ve savaşlarda yaygın kullanıldığını biliyoruz. Hezârfen bu haberi duyunca çok merak etmiş olabilir: Roket yükselmeyi, kanat ise inmeyi çözüyordu.\n\nAnlatıldığına göre fitil ateşlendiğinde Sarayburnu'nun duvarlarında alevin ışığı dans etti, kalabalıktan 'Maşallah!' sesleri yükseldi. Çocuklar annelerinin elini sıktı. Bir an için bütün İstanbul başını göğe çevirip o küçük alevin peşinden baktı.",
        speaker: "Lagâri Hasan Çelebi",
        dialogue:
          "Barutla yükseleceğim, kanatlarla ineceğim; bakalım ikisi birbirine güvenecek mi!",
        funFact:
          "Roketin atası olan barutlu ateş okları 13. yüzyılda Çin'de kullanılıyordu. Lagâri lakabının 'ince, zayıf' anlamına geldiği söylenir.",
        image: "assets/images/tarik_s1_andalusia_fleet.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Sarayburnu önünde gemiler ve kalabalık arasında yedi kollu bir roket maketi; üzerinde açılmış küçük kanatlar.",
      },
      {
        title: "Galata Kulesi'nde Rüzgârı Beklemek",
        narration:
          "Rivayete göre Hezârfen'in büyük günü, Padişah IV. Murad döneminde İstanbul'un gözü önünde yaşandı. Evliya Çelebi'nin anlattığına göre güneşli, lodosun hafifçe estiği bir gündü. Hezârfen Galata Kulesi'nin tepesine çıktı; aşağıda kayıkçılar, esnaf, çocuklar ve saray görevlileri toplanmıştı. Kanatlarını bağlarken ellerinin titrediğini kimse görmedi; çünkü yüzündeki ifade sakin ve kararlıydı.\n\nBu hikâye tarih kitaplarında yüzyıllardır tartışılır. Elimizdeki en eski ayrıntılı kaynak Evliya Çelebi'dir ve olay başka belgelerle kesin olarak doğrulanmış değildir. Bu yüzden 'rivayete göre' demek, dürüstlüğün gereğidir. Ama rivayet olsa bile Hezârfen'in hazırlığı çok açıktı: gözlem, deneme, hesap ve doğru rüzgârı bekleme sabrı. Kulenin tepesinde son bir kez rüzgâra baktı, derin bir nefes aldı. Aşağıdaki kalabalık dönen bir martı gibi aniden sustu.\n\nBoğaz'dan gelen lodos kulenin sarmaşıklarını hafifçe sallıyordu. Uzakta Üsküdar'ın tepeleri güneşte parlıyordu. Hezârfen bütün hazırlıklarını, defter sayfalarını ve kuşlardan öğrendiklerini bir an için zihninde sıraladı. Sonra gözlerini ufka dikti.",
        speaker: "Hezârfen Ahmed Çelebi",
        dialogue:
          "Rüzgâr hazırsa ben de hazırım. Bundan sonrası dua, dikkat ve bilimin işidir.",
        funFact:
          "Galata Kulesi 1348'de Cenevizliler tarafından inşa edilmiştir. Evliya Çelebi'nin on ciltlik Seyahatname'si, yaklaşık kırk yıl süren yolculuklarının ürünüdür.",
        image: "assets/images/hezarfen_galata_flight.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Galata Kulesi'nin külahında rüzgâra yüzünü dönmüş, kanatlarını bağlamış sakin bir bilgin; aşağıda sessizce bekleyen kalabalık.",
      },
      {
        title: "Altın Kese ve Sürgün Rivayeti",
        narration:
          "Hikâyenin devamı daha az neşelidir. Evliya Çelebi'ye göre Padişah IV. Murad, Hezârfen'in uçuşunu hayranlıkla izledi ve ona bir kese altın verdi. Ancak sarayda bazı kişiler bu kadar yetenekli bir mühendisin fazla güçlü olabileceğinden endişe etti. Rivayete göre Sultan, 'Bu adam korkulacak adamdır, her istediğini yapmaya gücü yeter' diyerek onu Cezayir'e göndermiştir.\n\nCezayir'de Hezârfen'in nasıl bir hayat sürdüğünü bilmiyoruz; bazı kaynaklar orada vefat ettiğini yazar ama ayrıntı çok azdır. Bu yüzden kesin cümleler kurmak doğru olmaz. Şu kadarını söyleyebiliriz: Büyük işler yapan insanlara bazen yalnızca alkış değil, korku ve kuşku da gelir. Bir bilgin nereye giderse bilgisini de beraberinde götürür. Boğaz'ın üzerindeki sabah sisi gibi, rivayetin bir kısmı dağılsa da geriye hazırlığın ve cesaretin hatırası kalır.\n\nİstanbul'un sokaklarında bu hikâye ağızdan ağıza dolaştı. Kimisi onu bir kahraman, kimisi bir sır olarak anlattı. Ama herkes aynı şeyde birleşiyordu: Bu şehirde bir zamanlar gökyüzünü hesaplayan, kuşları dinleyen bir bilgin yaşamıştı.",
        speaker: "Sultan IV. Murad",
        dialogue:
          "Bu adam korkulacak adamdır; her istediğini yapmaya gücü yeter.",
        funFact:
          "Bu söz yalnızca Evliya Çelebi'nin aktardığı bir rivayettir; padişahın gerçekten böyle söyleyip söylemediği kesin değildir. IV. Murad 1623–1640 yılları arasında, yaklaşık 17 yıl tahtta kaldı.",
        image: "assets/images/islamic_world_atlas_map.png",
        atmosphere: "STORM_SEA",
        visualNote:
          "İstanbul'dan Cezayir'e uzanan deniz yolu üzerinde yelkenli bir gemi ve güvertede ufka bakan yalnız bir bilgin silueti.",
      },
      {
        title: "Kuşlardan Uçaklara Uzanan Zincir",
        narration:
          "Hezârfen'den yaklaşık iki buçuk yüzyıl sonra, 1890'larda Almanya'da Otto Lilienthal adlı bir mühendis kuşları izleyerek ahşap ve kumaştan planörler yaptı. Defalarca küçük tepelerden süzülüp denemelerini kayda geçirdi. Fotoğrafları ve notları Wright Kardeşler'e ilham verdi. 1903'te Wright Kardeşler'in motorlu uçağı havalandı. Kuş gözlemi, deney, kayıt ve cesaret: Hikâye aynı kalıpla devam ediyordu.\n\nHezârfen'in uçuşu rivayet olsa da bize bıraktığı miras kesindir: Merak, gözlem ve hazırlıkla çalışan insan 'imkânsız'ı yavaş yavaş 'mümkün'e çevirir. Bugün Türkiye'de Hezârfen adını taşıyan havacılık kulüpleri var. Gökyüzüne bakan her çocuk, Üsküdar'daki Doğancılar Meydanı'nda defterine çizgi atan o genç adamın izinden gidiyor olabilir. Piri Reis denizleri, Hezârfen ise gökleri çizmeye cesaret etmişti; ikisinin ortak yanı, önce merakla başlayıp sonra sabırla hazırlanmalarıydı.\n\nAkşam olurken bir çocuk elindeki kâğıttan uçağı rüzgâra bıraktı. Uçak dengesiz bir yay çizip yumuşakça kaldırıma kondu. Çocuk başını kaldırdı, gökyüzüne baktı ve bir dahaki sefere kanatları biraz daha uzun yapmaya karar verdi.",
        speaker: "Hezârfen Ahmed Çelebi",
        dialogue:
          "Önce kuşa bak, sonra deftere yaz, sonra küçük küçük dene; gökyüzü acele edenin değil, hazırlananın yoludur.",
        funFact:
          "Otto Lilienthal 1891–1896 arasında 2.000'den fazla planör uçuşu yaptı. Leonardo'dan Lilienthal'a, oradan Wright Kardeşler'e uzanan zincir hep kuş gözlemiyle başlamıştır.",
        image: "assets/images/hezarfen_s1_galata_wings_prep.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Gün batımında bir tepeden planörle süzülen mühendis ve yanında kanat maketleriyle oynayan meraklı çocuklar.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Kuşlar gibi uçmayı hayal ediyorsun. Elinde yalnızca kuş gözlemlerin, bir kanat çizimin ve çevrendeki insanların 'imkânsız' sözleri var. Hedefe nasıl yaklaşırsın?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Kuşları uzun süre izler, defterime çizer, küçük modellerle güvenli denemeler yapar, doğru rüzgârı bekler ve hikâyemi de kaynağıyla birlikte, rivayet olan yerleri belirterek anlatırım.",
          feedback:
            "Tarihi Hakikat! Evliya Çelebi'ye göre Hezârfen de uçuşundan önce gözlem, deneme ve rüzgâr hazırlığı yapmıştı. Rivayet olan kısımları dürüstçe belirtmek de bilim ahlakıdır.",
          isHistoricalTruth: true,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Kanıtı kesin olmayan bir hikâye olduğu için hepsini boş sayar, cesaret ve hazırlık derslerinden vazgeçerim.",
          feedback:
            "Rivayet olan kısımlar tartışılabilir; ama kuş gözlemi, hazırlık ve cesaret dersleri geçerliliğini korur.",
          isHistoricalTruth: false,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "Rivayeti kesin gerçekmiş gibi anlatır, arkadaşlarıma 'çatıdan kanatla atla, sen de uçarsın' derim.",
          feedback:
            "Çok tehlikelidir! Uçuş denemeleri ancak uzmanlarla, güvenli koşullarda ve basamak basamak ilerleyerek yapılır.",
          isHistoricalTruth: false,
        },
      ],
      historicalTruthExplanation:
        "Evliya Çelebi'nin anlattığına göre Hezârfen Ahmed Çelebi IV. Murad döneminde Galata Kulesi'nden Üsküdar'a süzülmüştür; ancak olay başka belgelerle kesin olarak doğrulanmış değildir. Bu yüzden rivayet ile belge ayrımını yapmak, bilim ve tarih ahlakının gereğidir.",
      quoteHighlight:
        "Denge, cesaretten önce gelir; hazırlık ise ikisini birleştirir.",
    },
    rewardArtifact: {
      id: "artifact-hezarfen-bird-notebook",
      name: "Hezârfen'in Kuş Gözlem Defteri ve Kanat Maketi",
      imagePath: "assets/images/hezarfen_s1_galata_wings_prep.png",
      pointType: "CESARET_MERHAMET",
      pointLabel: "Cesaret ve Hazırlık Puanı",
      points: 55,
      unlockedTitle: "Kanat Mühendisi",
      shortDescription:
        "Kuşların süzülüşünü inceleyen, rüzgâr yönlerini kaydeden ve kanadını basamak basamak deneyen bir mühendisin hayali gözlem defteri ve küçük kanat maketi.",
      historicalNote:
        "Hezârfen'in uçuşu Evliya Çelebi'nin Seyahatnamesi'ne dayanan bir rivayettir; ancak gözlem, deneme ve hazırlık fikri bugünkü havacılığın temelidir.",
      accentColor: "#F43F5E",
      hotspots: [
        {
          id: "bird-wing-sketches",
          xPercent: 30,
          yPercent: 38,
          title: "Kuş Kanadı Çizimleri",
          secretFact:
            "Kartal ve şahin gibi kuşların kanat eğimini ve kuyruk açısını incelemek, modern havacılığın da ilk adımıdır.",
        },
        {
          id: "wind-rose-table",
          xPercent: 68,
          yPercent: 45,
          title: "Rüzgâr Gülü Levhası",
          secretFact:
            "Poyraz ve lodos gibi yönlerin Boğaz'da farklı yamaçlarda nasıl yükseldiğini kaydetmek uçuş planı için çok önemlidir.",
        },
        {
          id: "stepwise-testing",
          xPercent: 50,
          yPercent: 72,
          title: "Basamak Basamak Deneme",
          secretFact:
            "Küçük maket, ağırlık torbası ve alçak yamaç denemeleri, modern havacılıktaki rüzgâr tüneli ve test uçuşu fikrinin atasıdır.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Bir hikâyenin rivayet olup olmadığını nasıl anlarız ve neden 'rivayete göre' demek önemlidir?",
      "Hezârfen kuşları izleyerek ne öğrenmiş olabilir? Sen doğadan hangi bir şeyi gözlemleyip yeni bir icat düşünürdün?",
      "Cesaret ile hazırlık arasındaki fark nedir? Hayatında hazırlığın cesaretini güçlendirdiği bir örnek paylaşır mısın?",
    ],
  }),
];
