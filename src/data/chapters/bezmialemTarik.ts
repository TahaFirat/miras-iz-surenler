import { buildChapter } from "../storyBuilders";
import { StoryChapter } from "../storyTypes";

// ============================================================================
// BEZMİÂLEM VALİDE SULTAN — MERHAMET VE VAKIF (1 BÖLÜM, 10 SAHNE)
// ============================================================================
export const BEZMIALEM_CHAPTERS: StoryChapter[] = [
  buildChapter({
    id: "bezmialem-valide-sultan-ch1",
    heroId: "bezmialem-valide-sultan",
    chapterNumber: 1,
    title: "Gureba Hastanesi ve Şifa Vakıfları",
    subtitle:
      "Kapıdaki garip hastaya 'Paran var mı?' diye sormayan bir iyiliğin hikâyesi",
    estimatedMinutes: 10,
    scenes: [
      {
        title: "Boğaz'ın Sabahında Genç Bir Padişah",
        narration:
          "1839 yazında İstanbul'un üstüne ağır bir sessizlik çökmüştü. Sultan II. Mahmud vefat etmiş, yerine henüz on altı yaşındaki oğlu Abdülmecid tahta çıkmıştı. Boğaz'ın sabah sisi martı çığlıklarıyla yırtılırken balıkçı kayıkları Haliç'in sularında sessizce kayıyor, taze simit ve közlenmiş balık kokusu dar sokaklara karışıyordu. Kubbeler ve minareler, yeni bir dönemin ilk ışığını bekler gibi pembeleşiyordu.\n\nSarayın pencerelerinden birinde, genç padişahın annesi Bezmiâlem Valide Sultan bütün bu manzarayı düşünceli gözlerle seyrediyordu. Adı 'cihan meclisi' gibi bir anlam taşıyan bu hanım, saraydaki günlerin gelip geçici olduğunu biliyordu. Peki bir insan arkasında ne bırakmalıydı? Altın sofraları mı, yoksa yıllar sonra bile bir hastanın acısını dindirecek açık bir kapıyı mı? İşte bu soru, onu şehrin en çok ihtiyaç duyan insanlarına bakmaya götürecekti.\n\nSabah ezanı Boğaz'ın üzerinde yankılanırken Valide Sultan pencerenin önünde bir süre daha kaldı. Aşağıda kayıkçılar ağlarını topluyor, sokak satıcıları seslerini yükseltiyordu. Sarayın kalın duvarlarının ötesinde adlarını kimsenin bilmediği binlerce hayat vardı ve onlardan bazılarının yarın bir şifaya, bir yatağa ve bir kaşık sıcak çorbaya ihtiyacı olacaktı.",
        speaker: "Bezmiâlem Valide Sultan",
        dialogue:
          "Saraylar bir gün susar; ama bir hastanın duası yıllar geçse de kapıyı çalmaya devam eder.",
        funFact:
          "Abdülmecid 1839'da tahta çıktığında yalnızca 16 yaşındaydı; annesi Bezmiâlem de bu tarihten sonra 'valide sultan' unvanıyla anıldı. Aynı yılın kasımında ilan edilen Tanzimat Fermanı, devlet yönetiminde yeni bir dönem başlattı.",
        image: "assets/images/fatih_s5_golden_horn_dawn.png",
        atmosphere: "DAWN_MIST",
        visualNote:
          "Şafak vakti Haliç ve Boğaz üzerinde yükselen kubbe ve minare silueti, saray penceresinde uzaktan düşünceli duran zarif bir hanımın arkadan görünüşü.",
      },
      {
        title: "Şehrin Gurebası: Evi Olmayan Hastalar",
        narration:
          "İstanbul o yıllarda dev bir mıknatıs gibiydi. Anadolu'nun dağ köylerinden, Rumeli'nin ovalarından gelen insanlar iş bulmak, ticaret yapmak ya da sadece bir umut aramak için bu büyük şehre akıyordu. Limanlarda hamallar sırtlarında çuvallarla merdiven çıkıyor, hanların avlularında kahve, at ve nem kokusu birbirine karışıyordu.\n\nAma bu kalabalığın içinde pek az kişinin gördüğü bir sorun vardı. Diyelim ki Rumeli'den gelmiş bir hamal, aylarca bir handa kalıp çalıştıktan sonra yüksek ateşle yatağa düştü. Ailesi çok uzakta, ahbabı yok, ilaç alacak parası hiç yok. Böyle kimsesiz yabancılara 'gureba', yani garipler denirdi. Valide Sultan şehrin bu görünmeyen yüzünü duyunca uzun süre konuşmadı. Çünkü gerçek bir şehir, en zayıf misafirini hastalığında yalnız bırakmayan şehirdi.\n\nÜstelik hasta bir garibin yatağını ısıtacak bir oda, ilacını alacak bir kuruş bulmak hiç kolay değildi. Kapı kapı dolaşan bu insanların sessiz çaresizliğini düşündükçe Valide Sultan'ın aklındaki soru her gece biraz daha büyüdü: Şehrin kapısı yalnız çalışırken mi açıktı, yoksa hasta düştüklerinde de açık kalabilir miydi?",
        speaker: "Bezmiâlem Valide Sultan",
        dialogue:
          "Bir şehir, en yorgun garibinin ateşini bile görmezden gelmiyorsa gerçekten şehirdir.",
        funFact:
          "'Gureba', Arapçada 'garip, yabancı, memleketinden uzakta kalmış kişi' anlamına gelen 'garîb' kelimesinin çoğuludur. Bu sahnedeki hamal hayalî bir örnektir; ama onun gibi çok sayıda insan İstanbul'da hasta ve kimsesiz kalıyordu.",
        image: "assets/images/ali_s3_orphan_doorstep.png",
        atmosphere: "NIGHT_LANTERN",
        visualNote:
          "Gece, fener ışığında eski bir han kapısının eşiğinde battaniyeye sarınmış, yüzü görünmeyen bir yolcunun silueti.",
      },
      {
        title: "Şifa Veren Eski Kapılar",
        narration:
          "Aslında şifa dağıtmak yeni bir fikir değildi. Anadolu'da yüzyıllardır darüşşifalar, yani şifahaneler hizmet veriyordu. Kayseri'de 1206 yılında, Gevher Nesibe adına yaptırılan şifahane bunlardan biriydi. Edirne'de II. Bayezid'in külliyesindeki darüşşifa (1488) ise hastaların huzur bulması için müzik ve akan su sesinden yararlanmasıyla bilinirdi. Taş avlularda çeşme şırıltısı, bitki çayı ve macun kokusu birbirine karışırdı.\n\nValide Sultan bu eski geleneği dinlerken içinde bir kıvılcım çaktı. Eşi II. Mahmud 1827'de Tıphane-i Âmire'yi kurdurarak yeni hekimler yetiştirmeye başlamıştı. Şehre bilgili genç doktorlar geliyordu; ama onların garip hastalara bakabileceği, kapısı herkese açık bir yere hâlâ ihtiyaç vardı. Eski şifa geleneği ile yeni tıp bilgisini aynı çatıda buluşturmak güzel bir fikir gibi görünüyordu.\n\nHayal edelim: Bir toplantıda yaşlı hekim eski kitaplardaki bitkileri anlatıyor, genç hekim ise yeni öğrendiği yöntemleri sıralıyor. İkisi birbirini dinledikçe odadaki gerginlik yerini heyecana bırakıyor. Şifa, kimin bilgisinin daha eski ya da daha yeni olduğundan çok, hastanın iyileşmesine hizmet etmeliydi.",
        speaker: "Yaşlı Hekim",
        dialogue:
          "Atalarımız hastayı yalnız ilaçla değil, huzurla da iyileştirmeye çalışırdı; bu mirası yaşatmak bize düşer.",
        funFact:
          "Edirne'deki II. Bayezid Darüşşifası 1488'de açıldı ve bugün müzesi ziyaret edilebilir. Tıphane-i Âmire ise 1827'de II. Mahmud tarafından kurulan modern tıp eğitiminin başlangıcıdır.",
        image: "assets/images/ibn_sina_hospital.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Taş kemerli bir şifahane avlusunda şadırvan başında dinlenen hastalar ve bitki demleyen görevliler.",
      },
      {
        title: "Vakıf: Zamana Dikilen İyilik Ağacı",
        narration:
          "Valide Sultan, hekimler ve vakıf görevlileriyle bir akşam uzun uzun konuştu. Soru basitti: Bir hastane yalnızca bugünün ihtiyacını mı karşılamalıydı, yoksa yıllar sonra da kapısı açık kalmalı mıydı? Cevap, Osmanlı'nın en güzel fikirlerinden birinde saklıydı: vakıf.\n\nVakıf, bir insanın kendi malından bir kısmını Allah rızası için ayırması ve o malın gelirinin süresiz olarak iyiliğe harcanması demekti. Genel kural olarak vakıf mülkü satılmaz; dükkânlar, hanlar ya da araziler kira ve ürün getirir, bu gelir de aşçıya, hekime, ilaca ve oduna giderdi. Çeşmeler, mektepler, köprüler hep böyle ayakta dururdu. Hasta kuşlar ve sokak hayvanları için bile vakıflar kurulduğu bilinir. Valide Sultan gülümsedi; insanın iyiliği bir gün sönmemeli, bir ağaç gibi kök salmalıydı.\n\nVakıf yalnız bir bina yaptırmak değildi; o binanın yıllarca ayakta kalmasını, odunun, ilacın, çorbanın ve görevlilerin maaşının hiç aksamadan bulunmasını sağlamaktı. Bu, yarınları önceden düşünmeyi isteyen uzun soluklu bir sabır işiydi ve Valide Sultan bu sabra hazırdı.",
        speaker: "Vakıf Görevlisi",
        dialogue:
          "Bir sadaka tek günde biter, valide sultanım; vakıf ise iyiliğe bir kök verir.",
        funFact:
          "Osmanlı Devleti, vakıfları düzenlemek için 1826'da Evkaf Nezareti'ni kurdu. Vakıf geleneği Osmanlı'dan çok daha eskidir; Selçuklu ve daha önceki İslam şehirlerinde de hastaneler, medreseler ve çeşmeler vakıflarla yaşatılırdı.",
        image: "assets/images/leylek_vakfi.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Güneşli bir avluda çeşme başında su içen kuşlar ve leylekler, arka planda eski bir vakıf binası.",
        midDecision: {
          title: "ARA KARAR: Bir İyiliği Nasıl Uzun Yaşatırsın?",
          question:
            "Valide Sultan'ın elinde büyük bir servet var ve şehirdeki garip hastaların halini duydu. Senin yerinde olsan hangi yolu seçerdin?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Büyük bir ziyafet verir, yoksullara bir günde bol yemek ve para dağıtırım.",
              feedback:
                "Yoksulları sevindirmek güzeldir; ama bir günde biten iyilik, hastalar ertesi gün yine kapısız kalınca etkisini yitirir.",
              isBestChoice: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Bir hastane kurar, giderlerini karşılayacak gelir getiren mülkleri vakfa bağlarım.",
              feedback:
                "Çok iyi! Vakıf sayesinde hastanenin hekimi, ilacı ve yemeği yıllarca devam eden bir gelirle karşılanabilirdi. İyilik süreklilik kazandığında gerçek bir kurum olur.",
              isBestChoice: true,
            },
          ],
        },
      },
      {
        title: "Vakfiye: Mürekkeple Yazılan Söz",
        narration:
          "Vakfın kurulması için sözler yetmezdi; her şey yazıya dökülmeliydi. Kâtipler uzun kâğıt tomarlarını açtı, kamış kalemler mürekkep hokkasına daldı, odaya is mürekkebi ve kuru kâğıt kokusu yayıldı. Vakfiye denilen bu belgede hangi mülklerin vakfa ayrıldığı, gelirin nasıl harcanacağı, hastaneye kimlerin bakacağı tek tek yazılırdı.\n\nVakıflar kadı huzurunda tescil edilirdi; böylece verilen sözün arkasında devletin hukuku dururdu. Valide Sultan okunan her maddeyi dikkatle dinledi, bir yerde elini kaldırıp durdurdu. Gelirin kimsenin keyfine göre değil, hastaların ihtiyacına göre harcanmasını istiyordu. Genç bir kâtibin elinin titrediğini fark edince nazikçe gülümsedi. Bu satırlar yalnız bir hanımın adını değil, henüz doğmamış hastaların umudunu da taşıyacaktı.\n\nOdanın köşesinde bir mum eridi, yenisi yakıldı. Satırlar uzadıkça hastanenin görünmeyen iskeleti ortaya çıkıyordu: Kaç yatak olacak, mutfağa ne kadar odun alınacak, ilaç nereden temin edilecekti? Bütün bu sorulara kâğıt üzerinde bile sabırla cevap aranması, gerçek bir iyiliğin hesaplı ve düzenli olması gerektiğini gösteriyordu.",
        speaker: "Bezmiâlem Valide Sultan",
        dialogue:
          "Yazın ki bu kapıdan çıkan hiçbir garip, tedavisinin borcunu omzunda taşımasın.",
        funFact:
          "Büyük vakfiyeler bazen metrelerce uzunlukta rulolar hâlinde yazılırdı. Vakfiyeler sadece belge değil, aynı zamanda dönemin yemek, maaş ve ilaç fiyatlarını da gösteren paha biçilmez tarih kaynaklarıdır.",
        image: "assets/images/seyh_hamdullah_calligraphy.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Mum ışığında kamış kalemle uzun bir tomara yazı yazan kâtip ve yanında dikkatle bekleyen zarif bir hanımın elleri.",
      },
      {
        title: "1845: Gureba Hastanesi'nin Kapısı Açılıyor",
        narration:
          "1845 yılında İstanbul'da, Aksaray semtinde Gureba Hastanesi hizmete girdi. Resmî adı 'Gurebâ-i Müslimîn'di; yani garip ve kimsesiz hastaların hastanesi. Sabahın erken saatlerinde taze çarşafların, ocaktaki sıcak çorbanın ve ıhlamur demlerinin kokusu koridorlara yayıldı. Görevliler kapıdaki eşiği süpürdü, hekimler çantalarını hazırladı, aşçılar kazanları ocağa koydu.\n\nBu hastanenin en özel yanı, kapısından girenin cebinin yoklanmamasıydı. Tedavi, yatak ve yemek vakfın gelirinden karşılanıyordu. Hayal edelim: İlk sabah kapıya yaklaşan bir hastanın çekingen adımlarını gören görevli, ona hemen yardım eder; çünkü hastanenin kuralı önce acının dinmesiydi. Bir kadının hayal ettiği iyilik artık taştan ve emekten bir gerçeğe dönüşmüştü. Aksaray'ın telaşlı sokaklarında yeni bir şifa kapısı açılmıştı.\n\nÖğle vakti avluda hastaların sesleri, koridorda çarşafların hışırtısı ve mutfaktan yükselen buhar birbirine karıştı. Dışarıda ise şehir her zamanki gibi akıyordu: Arabacılar bağırıyor, esnaf kepenk açıyordu. O gün kimse tarihte yeni bir sayfanın çevrildiğini düşünmüyordu, ama bu kapıya yıllar boyunca birçok insanın umudu yaslanacaktı.",
        speaker: "Hastane Görevlisi",
        dialogue:
          "Buyurun, önce hastanın hâlini soracağız, cebini değil!",
        funFact:
          "1845'te kurulan bu hastane bugün 'Vakıf Gureba' adıyla anılan hastanenin kökenidir. Adındaki 'gureba' sözü, ilk günkü amacını yüzyıllar sonra bile hatırlatır.",
        image: "assets/images/bezmialem_gureba_hospital.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Sabah güneşinde taş duvarlı bir hastane kapısı, kapıda çiçekleri düzelten ve yolcuyu karşılayan görevliler.",
      },
      {
        title: "Kapıdaki Garip Hasta",
        narration:
          "Şimdi hayalimizdeki hamala dönelim. Yüksek ateşi geçmeyince arkadaşı onu koluna girip Aksaray yolunda yürüttü. Cebinde birkaç kuruştan başka bir şey yoktu; kapının önüne gelince utançla başını eğdi: 'Param yok ama dualarım çok.' Ayakları titriyordu, çünkü hayatında ilk kez bir kapının önünde bu kadar küçük hissediyordu.\n\nGörevli ona sıcak bir gülümsemeyle baktı, kolunu tuttu ve geniş avluya buyur etti. Çınar gölgesinde bir bank, ardından temiz bir yatak, bitkisel bir ilaç ve ılık bir çorba geldi. Hamal ağlamaklı gözlerle etrafına baktı; bu duvarların arasında hastalığının borç, yoksulluğunun ayıp sayılmadığını gördü. Bir hastanenin değeri duvarlarının güzelliğinde değil, o duvarların içinde duyulan 'geçmiş olsun' sözünün sıcaklığındaydı.\n\nÜç gün sonra ateşi düştüğünde hamal yatağında doğruldu, pencereden giren güneşe baktı. Yan yatakta yatan yaşlı bir adamla sohbet etmeye başladılar; ikisi de aynı şeyi düşünüyordu: Onları hiç tanımayan biri, yıllar önce onların derdini düşünmüş ve bu kapıyı açık bırakmıştı.",
        speaker: "Hamal (hayalî karakter)",
        dialogue:
          "Ben bu hastanenin adını bilmiyordum, ama içimdeki ateş bile sönmeye başladı.",
        funFact:
          "Osmanlı döneminde bazı şifahaneler ve imaretler, yolculara ve yoksullara yemek ve barınak sağlayan külliyelerin parçasıydı. Çorba, ekmek ve sıcak bir yatak, tedavinin ayrılmaz parçası sayılırdı.",
        image: "assets/images/ibn_sina_s3_quarantine_courtyard.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Çınar gölgeli bir hastane avlusunda yatakta dinlenen hasta, yanında çorba ikram eden görevli.",
      },
      {
        title: "Hekimlerin ve Bakıcıların Sabrı",
        narration:
          "O yıllarda İstanbul'da tıp hızla değişiyordu. Tıphane'de yetişen genç hekimler yeni bilgiler öğrenirken, eski hekimlerin bitki ve macun tecrübesi de kıymetini koruyordu. Hastanelerde hekimler, eczacılar ve hastabakıcılar el ele çalışırdı. Kimi sabahlar odalarda bitki çayı ve ilaç kokusu, kimi akşamlar mum ışığında okunan hasta kayıtları vardı.\n\nAma şifa yalnız ilaçtan ibaret değildi. Bir hasta ateşinde kıvranırken yanında oturan, alnındaki bezi değiştiren, gece yarısı bir bardak su uzatan insanlar da tedavinin parçasıydı. Valide Sultan'ın kurduğu vakıf, bu emekçilerin maaşını ve hastaların ihtiyacını karşılayabildiği için, tedavi ile bakım aynı çatı altında birleşebilirdi. İyilik büyük taşlarla başlar, ama sabırla ve küçük elleri sevgiyle uzatan insanlarla büyürdü.\n\nBu emekçilerin adı çoğu zaman tarihe geçmez; vakfiyelerde bir maaş kalemi, hatıralarda ise bir 'Allah razı olsun' duası olarak kalır. Oysa hastanenin kapısını sabah erkenden açan, çarşafları yıkayan ve geceleri nöbet tutan bu insanlar olmasa, en güzel binanın bile içi soğuk kalırdı.",
        speaker: "Yaşlı Hastabakıcı",
        dialogue:
          "Bir bardak su, bir ılık bez, bir iyi söz... Hasta bazen hepsini ilaçtan önce ister.",
        funFact:
          "Hemşireliğin dünyaca ünlü öncüsü Florence Nightingale, Kırım Savaşı sırasında 1854'te İstanbul'a, Üsküdar'daki Selimiye Kışlası'na geldi. Bu, Gureba Hastanesi'nin açılışından yalnızca dokuz yıl sonrasıdır.",
        image: "assets/images/ibn_sina_s2_canon_of_medicine.png",
        atmosphere: "STARLIT_OBSERVATORY",
        visualNote:
          "Mum ışığında açık duran bir tıp kitabı, yanında bitki kavanozları ve hasta başında bekleyen yüzsüz bir bakıcının silueti.",
      },
      {
        title: "Fatıma'dan Bezmiâlem'e: Kadınların Kurduğu Mirasler",
        narration:
          "Valide Sultan'ın yaptığı iş tek başına bir olay değildi; uzun bir iyilik zincirinin halkasıydı. Bundan yaklaşık bin yıl önce, 859'da Fas'ın Fes şehrinde Fatıma el-Fihrî, mirasını bir bilgi yuvası olan Karaviyyin'i kurmak için harcamıştı. Dünyanın bu iki ucundaki iki kadın, farklı yüzyıllarda yaşadıkları hâlde aynı soruyu sormuştu: Elimdekiyle başkalarının hayatına nasıl dokunabilirim?\n\nBazı araştırmalar, Osmanlı şehirlerinde vakıf kuranlar arasında kadınların küçümsenmeyecek bir yer tuttuğunu gösterir. Mahalle mescitleri, çeşmeler, mektepler, aşevleri ve hastaneler çoğu zaman bir hanımın iyiliğinden doğardı. Valide Sultan'ın hastanesi, bu zincirin İstanbul'daki parlak halkalarından biri hâline geldi. Küçük bir tohum, ona sahip çıkan insanlarla koca bir ağaca dönüşebiliyordu.\n\nİstanbul'dan Fes'e uzanan şehirlerde böyle iyilikler birbirine eklenerek büyüdü. Bir hastane, bir medrese ya da bir çeşme, ardından gelenlere 'Ben de yapabilirim' diye fısıldayan bir örnek oldu. Bezmiâlem'in vakfı da kendinden sonra gelecek hayır sahiplerine sessiz bir çağrıydı.",
        speaker: "Bezmiâlem Valide Sultan",
        dialogue:
          "Ben yalnızca bir tuğla koyuyorum; gerisini sonradan gelen ellerin tamamlayacağını biliyorum.",
        funFact:
          "Karaviyyin, 859'da Fatıma el-Fihrî tarafından Fes'te kurulmuş ve Guinness Rekorlar Kitabı tarafından dünyanın en eski sürekli faaliyet gösteren yükseköğretim kurumu olarak kabul edilmiştir. Gureba Hastanesi ise bu geleneğin 19. yüzyıl İstanbul'undaki şifa kolu sayılabilir.",
        image: "assets/images/fatima_fihri_courtyard.png",
        atmosphere: "FEZ_COURTYARD",
        visualNote:
          "Fes'te sütunlu ve çeşmeli bir avluda öğrencilerin bulunduğu, güneş ışığı vuran huzurlu iç mekân.",
      },
      {
        title: "Bugüne Uzanan Şifa",
        narration:
          "Bezmiâlem Valide Sultan 1853'te vefat etti. Ama yazdırdığı vakfiye, onun adını taşıyan hastanenin kapısını açık tutmaya devam etti. Hastanede yatan çocukların, çalışan hekimlerin ve bahçedeki ağaçların arasından yüzyıllar geçti; İstanbul değişti, sokaklar büyüdü, ama gureba hastanesinin amacı unutulmadı.\n\nBugün onun adını İstanbul'da Bezmiâlem Vakıf Üniversitesi taşıyor. Bir zamanlar kapıdaki garip hastaya uzatılan şefkatli el, şimdi tıp öğrencilerini yetiştiren bir kurumun ilham kaynağına dönüşmüştür. Boğaz'a bakan her çocuk için asıl soru şudur: Ben ne bırakacağım? Büyük bir saray değil, kimsenin görmediği küçük ama sürekli bir iyilik de insanın en kalıcı mirası olabilir. Belki yarın sen de birinin kapısını açık bırakacaksın.\n\nHastanenin kapısından giren o ilk ışık bugünün şehrinde farklı biçimlerde sürüyor: Bazen bir hastane koridoru, bazen bir tıp öğrencisinin ilk önlüğü, bazen de bir mahalle sakininin yalnız yaşlı komşusuna götürdüğü çorba olarak. Kapısı açık bırakılan her iyilik, kendinden sonrakilere yol gösterir.",
        speaker: "Anlatıcı",
        dialogue:
          "Gerçek miras, adımızın yazıldığı taş değil; iyiliğimizin yaşattığı insanlardır.",
        funFact:
          "Bezmiâlem Vakıf Üniversitesi 2010'da kuruldu ve adını Bezmiâlem Valide Sultan'dan alır. Bu hanımın kurduğu vakıf, 19. yüzyıldaki bir hastanenin ruhunu bugünün sağlık eğitimine taşımaktadır.",
        image: "assets/images/hezarfen_s2_uskudar_landing.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Gün batımında Üsküdar sahilinden Boğaz ve İstanbul siluetine bakan, yan yana yürüyen genç tıp öğrencilerinin siluetleri.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Elinde büyük bir servet var ve şehirdeki kimsesiz hastaların acısını duydun. Bu serveti nasıl kullanırsın?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Adımı büyük harflerle taşa yazdırır, tek günlük gösterişli bir şölen veririm.",
          feedback:
            "Gösteriş birkaç saat parlar; ama hastalar ertesi gün yine kapısız kalır. Gerçek iyilik süreklilik ve samimiyet ister.",
          isHistoricalTruth: false,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Bir hastane kurar, gelir getiren mülkleri vakfa bağlar ve garip hastaların ücretsiz tedavi edilmesini sağlarım.",
          feedback:
            "Tarihî hakikat! Bezmiâlem Valide Sultan 1845'te Gureba Hastanesi'ni vakıf geliriyle yaşatarak iyiliğini yıllarca sürecek bir kuruma dönüştürdü.",
          isHistoricalTruth: true,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "Serveti kendime saklar, hasta olanlara ancak kendileri gelirlerse bakarım.",
          feedback:
            "Servetin değeri paylaşıldıkça artar; kapısı yalnızca gelene açık bir iyilik, çoğu zaman en çok ihtiyacı olana ulaşamaz.",
          isHistoricalTruth: false,
        },
      ],
      historicalTruthExplanation:
        "Bezmiâlem Valide Sultan, oğlu Sultan Abdülmecid döneminde 1845'te Gureba-i Müslimin Hastanesi'ni kurdu. Hastanenin yoksul ve garip hastalara ücretsiz bakabilmesi, vakıf gelirleriyle mümkün oldu; böylece iyilik bir günlük bir yardım olmaktan çıkıp yıllarca sürecek bir hizmete dönüştü.",
    },
    rewardArtifact: {
      id: "artifact-bezmialem-sifa-muhru",
      name: "Gureba Şifa Mührü",
      imagePath: "assets/images/bezmialem_gureba_hospital.png",
      pointType: "CESARET_MERHAMET",
      pointLabel: "Merhamet Puanı",
      points: 55,
      unlockedTitle: "Şifa Kapısı Koruyucusu",
      shortDescription:
        "Kimsesiz hastalara ücretsiz şifa kapısı açan Gureba Hastanesi'nin ve vakıf geleneğinin mührü.",
      historicalNote:
        "Bezmiâlem Valide Sultan'ın 1845'te kurduğu Gureba Hastanesi, vakıf gelirleriyle yoksul ve garip hastalara hizmet etti. Adı bugün hâlâ bir üniversitede yaşıyor.",
      accentColor: "#0D9488",
      hotspots: [
        {
          id: "gureba-door",
          xPercent: 50,
          yPercent: 30,
          title: "Gureba Kapısı",
          secretFact:
            "'Gureba', Arapça 'garip' kelimesinin çoğuludur; yani bu kapı, memleketinden uzakta hasta düşenler içindi.",
        },
        {
          id: "vakif-scroll",
          xPercent: 28,
          yPercent: 58,
          title: "Vakfiye Rulosu",
          secretFact:
            "Vakfiye, vakfın nasıl çalışacağını yazan belgedir; Osmanlı'da vakıflar kadı huzurunda tescil edilirdi.",
        },
        {
          id: "soup-bowl",
          xPercent: 72,
          yPercent: 66,
          title: "Şifa Çorbası",
          secretFact:
            "Osmanlı şifahanelerinde yemek ve sıcak bir yatak, tedavinin önemli parçası sayılırdı.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Bezmiâlem Valide Sultan bir günlük yardım yerine neden vakıf kurmayı seçti? Bir iyiliğin uzun yıllar sürmesi bize ne kazandırır?",
      "Hamalın hikâyesinde 'Param yok' diyen birine hastane kapısının açık olması sence neden çok önemliydi?",
      "Biz de çevremizde yalnız veya yardıma ihtiyacı olan birine küçük ama sürekli bir iyilik yapmak için neler yapabiliriz?",
    ],
  }),
];

// ============================================================================
// TARIK BİN ZİYAD — EK BÖLÜMLER (2. ve 3. BÖLÜM)
// ============================================================================
export const TARIK_EXTRA_CHAPTERS: StoryChapter[] = [
  // --------------------------------------------------------------------------
  // BÖLÜM 2: GUADALETE OVASI'NDAN TOLEDO'YA (9 SAHNE)
  // --------------------------------------------------------------------------
  buildChapter({
    id: "tarik-bin-ziyad-ch2",
    heroId: "tarik-bin-ziyad",
    chapterNumber: 2,
    title: "Guadalete Ovası'ndan Toledo'ya: Şehirlere Eman ve Adil Yönetim",
    subtitle:
      "Kılıcı kınına koyup sözü ahde, ahdi adalete dönüştüren yürüyüş",
    estimatedMinutes: 10,
    scenes: [
      {
        title: "Lekke'nin Ertesi Sabahı",
        narration:
          "Temmuz 711'in sıcak güneşi Guadalete Ovası'nın üzerinde yükselirken savaş sesleri artık susmuştu. Çadırların arasında yorgun askerler su içiyor, yaralılar ot yataklarda dinleniyor, develer ve atlar kuru otları gevişiyordu. Havada toz, zeytin ağaçlarının kokusu ve uzak bir ırmağın serinliği vardı. Tarık bin Ziyad, çadırının önünde ufka bakarak düşünüyordu.\n\nVizigot Kralı Roderic'in akıbeti kaynaklarda net değildi; kimileri onun savaşta öldüğünü, kimileri ise ortadan kaybolduğunu anlatır. Önemli olan, ordusunun yok olduğuydu. Peki şimdi ne olacaktı? Yurda dönüp kazanılan zaferle yetinmek mümkündü. Ama Tarık biliyordu ki zaferden sonra asıl sınav başlıyordu: Yeni bir yerde yaşayan insanların güvenini kazanmak, kılıç sallamaktan çok daha zordu.\n\nAkşam çökerken Tarık askerlerini bir araya topladı. Onlara yorgunluğun geçeceğini, ama davranışlarının yıllarca hatırlanacağını söyledi. Ovadaki kamp ateşleri sönmeye yüz tutarken konuşulan şeyler de değişti: Artık herkes yalnız bugünü değil, yarın bu topraklarda kimlerle komşu olacağını da düşünüyordu.",
        speaker: "Tarık bin Ziyad",
        dialogue:
          "Zafer bir kapının aralanmasıdır; asıl iş, içeri girip o kapıdan geçenlere adil davranmakta başlar.",
        funFact:
          "Kral Roderic'in savaştan sonraki akıbeti tarihçiler arasında tartışmalıdır. Bazı Arapça kaynaklar onun savaşta öldüğünü, bazı Hristiyan kaynaklar ise ondan sonra kesin bir haber alınamadığını anlatır.",
        image: "assets/images/selahaddin_s1_crusader_camp.png",
        atmosphere: "DESERT_CAMPFIRE",
        visualNote:
          "Savaş sonrası sabahında geniş bir ovada çadırlar, dinlenen develer ve atlar, ufka bakan vakur bir komutan.",
      },
      {
        title: "Musa'ya Yazılan Mektup",
        narration:
          "Tarık, ordunun daha ileri gidebilmesi için yardıma ihtiyaç olduğunu biliyordu. Hızlı atlı habercilerden birini çağırdı ve Kuzey Afrika'daki valisi Musa bin Nusayr'a haber gönderdi. Mektupta durumu açıkça anlattı; açılan yolların ne kadar uzun olduğunu, yeni birliklerin gelmesinin işleri kolaylaştıracağını yazdı. Posta atı kıyıdaki sarp patikalardan toz kaldırarak uzaklaştı.\n\nKuzey Afrika'da Musa bin Nusayr haberi aldığında hemen hazırlığa başladı. Gemiler toplandı, atlar yüklendi, askerler denize dizildi. Kaynaklara göre Musa, 712 yazında yaklaşık on sekiz bin kişilik bir orduyla Cebelitarık Boğazı'nı geçti. Bu arada Tarık da boş durmadı; aylar süren yolculuğunda her şehirde halkın önceden korkuya kapılmaması için sakin ve düzenli davranmaya dikkat etti. Zaferin ardından savaşın değil, anlaşmanın mantığı hâkim olmalıydı.\n\nHaberci ayrıldıktan sonra Tarık uzun süre denize baktı. Dalgaların boğazın iki yakasını nasıl birbirine bağladığını izlerken, kendisinin de iki dünya arasında bir köprü kurmaya çalıştığını düşündü. Bu köprünün dayanıklı olması için hız kadar sabır da, kuvvet kadar güven de gerekiyordu.",
        speaker: "Tarık bin Ziyad",
        dialogue:
          "Yazın ki kapıyı araladık; ama bu yolu birlikte, düzenle ve sabırla yürümek zorundayız.",
        funFact:
          "Tarık, Musa bin Nusayr'ın valisi ve komutanıydı. Kaynaklarda Musa'nın 712 yazında İspanya'ya yaklaşık 18.000 kişilik bir orduyla geçtiği yazılıdır.",
        image: "assets/images/tarik_s2_gibraltar_cliff.png",
        atmosphere: "STORM_SEA",
        visualNote:
          "Sarp kıyıdan denize bakan bir komutan, ufukta haberci atlısının toz bulutu bırakarak uzaklaşması.",
      },
      {
        title: "Orduyu Bölmek: Birçok Şehre Birçok Yol",
        narration:
          "Eski Arap kaynaklarına göre Tarık, Eçce (Écija) yakınlarındaki karşılaşmanın ardından birliğini birkaç yöne ayırdı. Kimi küçük birlikler Kurtuba'ya, Malaga'ya ve Elvira'ya (bugünkü Granada çevresi) yönelirken, Tarık'ın kendisi asıl ordusuyla Tuleytula'ya, yani Toledo'ya doğru yürüdü. Yolların kıyısındaki sarı buğday tarlaları, zeytin bahçeleri ve taş köprüler yorgun askerlerin gözüne umut gibi görünüyordu.\n\nKurtuba'ya gönderilen birliğin komutanı Mugîs er-Rûmî, adından da anlaşılacağı gibi Rum, yani Bizans dünyası kökenliydi. Rivayete göre yaklaşık yedi yüz atlıyla şehre yaklaştı ve bir çobanın gösterdiği gizli bir geçitten gece sessizce girdi. Bu hikâye bir rivayet olsa da gösteriyor ki fetih ordusunda Arap, Berberî ve başka kökenlerden insanlar yan yana yürüyordu.\n\nKurtuba'nın ilk günlerinde sokaklarda endişeli bakışlar vardı. Eski Roma köprüsünün taşlarını okşayan Guadalquivir her zamanki gibi sakin akıyor, şehir ise yeni gelenlerin kim olduğunu ve nasıl davranacağını temkinle gözlüyordu. Yeni düzenin asıl sınavı, silahlardan çok sonraki günlerde verilecekti.",
        speaker: "Mugîs er-Rûmî",
        dialogue:
          "Yedi yüz atlıyla koca şehri kuşatmak cesaret ister; ama şehri incitmeden almak sabır ister.",
        funFact:
          "Mugîs er-Rûmî, Emevî Halifesi I. Velid'in azatlısıydı ve Rum kökenliydi. Kurtuba'nın alınışına dair 'çobanın gösterdiği geçit' hikâyesi rivayettir; tarihçiler ayrıntıların kaynaktan kaynağa değiştiğini belirtir.",
        image: "assets/images/battuta_s1_tangier_departure.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Taş köprü ve buğday tarlalarının arasından yola çıkan farklı yönlerdeki küçük süvari birlikleri.",
      },
      {
        title: "Toledo'nun Kapısında",
        narration:
          "Tuleytula, Tajo Nehri'nin kıvrılarak çevrelediği yüksek bir kayalığın üzerine kurulmuştu. Taş surları güneşte altın gibi parlıyor, aşağıdan akan nehrin sesi duvarların arasında yankılanıyordu. Vizigot krallığının başkentiydi; ama savaş haberleri şehre ulaştığında çok sayıda soylu ve zengin ailenin şehri terk ettiği anlatılır. Geride kalan halk ise korku içinde kapılarının arkasından ordunun gelişini izliyordu.\n\nTarık şehrin kapısına yaklaştığında uzun yürüyüşten yorgun askerlerinin gözlerinde ganimet umudunu, şehir halkının gözlerinde ise korkuyu gördü. Bir yanda uzun yollardan gelen yorgun bir ordu, öte yanda yıllarca ağır vergiler altında ezilmiş insanlar vardı. Kararını verirken yalnızca bugünü değil, bu şehirde yüzyıllar boyunca yaşayacak insanların birbirine duyacağı güveni de düşünmesi gerekiyordu.\n\nKapıdaki bekleyiş uzadıkça kuşlar surların üzerinde daireler çiziyor, nehrin sesi her şeyden yüksek duyuluyordu. Tarık atının dizginini hafifçe gevşetti. Önünde iki yol vardı ve hangisini seçeceği, yalnız o günün değil, şehrin gelecek yıllardaki huzurunun da rengini belirleyecekti.",
        speaker: "Tuleytulalı Zanaatkâr",
        dialogue:
          "Kapıyı açarsak evlerimiz, mabetlerimiz ve çocuklarımız güvende kalacak mı?",
        funFact:
          "Toledo, Vizigot Krallığı'nın başkentiydi ve Tajo Nehri'nin üç yandan çevrelediği sarp bir tepenin üzerinde kurulmuştur. Bugün de şehrin eski surları ve taş köprüleri görülebilir.",
        image: "assets/images/fatima_fihri_courtyard.png",
        atmosphere: "JERUSALEM_DUSK",
        visualNote:
          "Nehrin kıvrıldığı kayalık bir tepede altın renkli surlarla çevrili şehir, kapıda bekleşen sessiz halk.",
        midDecision: {
          title: "ARA KARAR: Şehre Nasıl Girersin?",
          question:
            "Ordu yorgun ve yolculuğu uzun; şehir halkı ise korku içinde bekliyor. Komutan olarak hangi yolu seçersin?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Askerler çok yoruldu; şehri kısa bir süre serbest bırakıp ganimet almalarına izin veririm.",
              feedback:
                "Askerlerin yorgunluğu anlaşılabilir; ama serbest bırakılan bir ordu, halkın güvenini hızla yitirir ve yeni yurtta uzun süreli huzur kurulamaz.",
              isBestChoice: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Şehir halkıyla görüşür, can, mal ve ibadet güvencesi veren yazılı bir anlaşma yaparım.",
              feedback:
                "Çok iyi! Kaynaklar, pek çok şehirde yerel halkla anlaşmalar yapıldığını ve bunun yeni yönetimin kabulünü kolaylaştırdığını anlatır. Güven, kalıcı yönetimin temelidir.",
              isBestChoice: true,
            },
          ],
        },
      },
      {
        title: "Eman Sözü Yazılıyor",
        narration:
          "Şehrin ileri gelenleri, din adamları ve zanaatkârlar toplandı. Mum ışığında kâtipler kâğıt hazırladı, mürekkep hokkaları açıldı. Odaya buhur, is mürekkebi ve nem kokusu yayıldı. Bu tür anlaşmalarda genellikle şunlar yazılırdı: Halkın can ve malı güvence altındadır, mabetler yıkılmayacaktır, insanlar kendi inançlarına göre ibadet edebilecektir. Karşılığında ise cizye adı verilen belirli bir vergi ödenir, bu vergi karşılığında halk korunurdu.\n\nİspanya'da Müslüman yönetim altında yaşayan ama Hristiyan kalan insanlara 'Mozarap' denirdi. Onlar kendi kiliselerinde ibadet eder, gündelik yaşamlarında kendi mahkemeleriyle ve yargıçlarıyla yönetilebilirlerdi. Tarık'ın Toledo'daki ahdinin kendi metni günümüze ulaşmamıştır; ancak bu dönemdeki uygulama benzer ilkelere dayanıyordu. Yazılan bir söz, kılıçların gürültüsünden daha uzun yaşayabilirdi.\n\nAnlaşma metninde her kelime tek tek tartıldı. Yaşlı bir din adamı kiliselerin akıbetini sordu, bir tüccar ticaret yollarının güvenliğini. Tarık sabırla dinledi, cevaplarını açık ve kısa cümlelerle verdi. Her sorunun cevabı yazıldıkça odadaki gerginlik azaldı; omuzlardan korku yavaşça düşüyordu.",
        speaker: "Tarık bin Ziyad",
        dialogue:
          "Mabetleriniz yerinde kalacak, evleriniz size ait olacak; bu söz kâğıtta olduğu kadar kalbimizde de yazılıdır.",
        funFact:
          "Mozarap ayini (Mozarap ritüeli), Toledo'da bugün bile belli kiliselerde yapılmaktadır. Bu, Müslüman yönetimde yaşayan Hristiyan topluluğun kendi geleneğini yüzyıllarca koruyabildiğinin canlı bir kanıtıdır.",
        image: "assets/images/seyh_hamdullah_calligraphy.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Mum ışığında masada anlaşma yazan kâtipler ve çevresinde sakin duran şehir ileri gelenleri.",
      },
      {
        title: "Musa bin Nusayr Geliyor",
        narration:
          "712 yazında Musa bin Nusayr Cezîre-i Hadrâ'ya, yani bugünkü Algeciras'a çıktı. Tecrübeli, yaşlı ve temkinli bir komutandı; Tarık'ın hızlı ilerleyişinden sonra geride kalan şehirlerin işini sağlam yapmak istiyordu. Karmona (Carmona), Sevilla ve daha sonra Merida gibi şehirlere yöneldi. Merida'nın uzun bir kuşatmadan sonra 713'te anlaşmayla teslim olduğu anlatılır.\n\nArtık iki büyük komutan, iki ayrı ordu ve tek bir hedef vardı. Musa'nın disiplin ve temkini ile Tarık'ın hızı ve cesareti birbirini tamamlıyordu. Ancak her büyük iş birliği, iki güçlü kişilik arasında zaman zaman gerginlik de yaratabilirdi. Sahile çıkan bu yaşlı komutan, ufukta Tarık'ın açtığı yolun ne kadar ileri gittiğini belki de ilk kez gerçekten fark ediyordu.\n\nYeni bir yurt, yalnız savaşla değil; vergi defterleriyle, onarılan yollarla ve kayda geçen anlaşmalarla kurulurdu. Musa bu işlerin ne kadar sabır istediğini yılların tecrübesinden biliyordu. Hız ile temkin yan yana yürüdüğünde, uzun yolların sonu daha sağlam olurdu.",
        speaker: "Musa bin Nusayr",
        dialogue:
          "Hız zaferi kazandırır; ama bir yurdu sağlam tutan şey sabır, düzen ve adalettir.",
        funFact:
          "Musa bin Nusayr, Kuzey Afrika'nın Emevî valisiydi. Kaynaklara göre doğum tarihi 640 civarıdır; yani İspanya'ya geçtiğinde yetmişli yaşlarda, çok tecrübeli bir komutandı.",
        image: "assets/images/piri_reis_s2_mediterranean_cove.png",
        atmosphere: "DAWN_MIST",
        visualNote:
          "Sabah sisinde gemilerle dolu sakin bir koy ve sahile çıkan tecrübeli bir komutan silueti.",
      },
      {
        title: "Talavera'da Buluşma",
        narration:
          "Anlatıldığına göre iki komutan Talavera (Talavera de la Reina) civarında buluştu. Kuru otların ve zeytin ağaçlarının arasında iki ordunun sancakları gökyüzünde dalgalanıyordu. Tarık, Musa'yı saygıyla karşıladı. Kaynaklar, Musa'nın Tarık'a, izinsiz ve fazla ilerlediği için sert sözler söylediğini rivayet eder. Bu anlatılar kaynaktan kaynağa değişir; bazılarında olay çok daha sert, bazılarında daha hafif anlatılır.\n\nTarık sinirlenip ordunun bir kısmıyla ayrılmak ya da tartışmayı büyütmek yerine sakin kaldı. Çünkü savaş alanında zafer kadar, zaferden sonra birliği korumak da önemliydi. İki büyük komutan, aralarındaki kırgınlığı bir kenara koyup yeni yurdun düzenini sürdürmeye devam etti. Tarihin en yüce işleri bazen en zor anlarda, gururun yerine sabrın seçilmesiyle başarıya ulaşırdı.\n\nEtraflarındaki askerler iki komutanın konuşmasını uzaktan, nefeslerini tutarak izliyordu. Kimileri sert bir kavga çıkmasından endişe etti, kimileri iki liderin yan yana kalmasına sevindi. Sonunda yolculuk devam etti; çünkü geride bırakılan şehirlerde yaşayan insanların huzuru, iki kişinin gururundan daha değerliydi.",
        speaker: "Tarık bin Ziyad",
        dialogue:
          "Kırgınlıkları sonra konuşuruz; şimdi bu halkın huzurunu ve ordunun birliğini korumak daha önemli.",
        funFact:
          "Tarık ile Musa arasındaki gerginlik, Arapça kaynaklarda farklı ayrıntılarla anlatılır; bu yüzden olayın ayrıntıları rivayettir. Kesin olan şey, ikisinin de sonunda Şam'a çağrılmış olduğudur.",
        image: "assets/images/selahaddin_s4_two_arabian_horses.png",
        atmosphere: "JERUSALEM_DUSK",
        visualNote:
          "Gün batımında iki atın başında karşılaşan iki komutan ve arkalarında bekleyen sancaklı birlikler.",
      },
      {
        title: "Ahit Metinleri: Teodomiro'nun Anlaşması",
        narration:
          "Musa'nın oğlu Abdülaziz bin Musa, 713'te Endülüs'ün güneydoğusunda Orihuela çevresini yöneten Vizigot soylusu Teodomiro (Arapçası Tudmir) ile bir anlaşma imzaladı. Bu ahit metninin kopyası günümüze ulaşmıştır. Şehir ve çevresindeki halkın hayatı, malı ve kiliseleri korunacak, aileler birbirinden ayrılmayacaktı. Karşılığında yılda belirli bir miktar vergi, yani bir dinar ve birkaç ölçek tahıl ödenecekti.\n\nBu anlaşma, Tarık'ın kendi eliyle yazdığı bir belge değildi; ama dönemin yönetim anlayışını gösteren çok değerli bir örnekti. Şehirler birer birer bu tür anlaşmalarla yeni düzene katılıyordu. Bir tarafın elindeki kılıç ne kadar keskin olursa olsun, imzalı bir söz güveni daha uzun süre koruyabilirdi. Kâğıdın üzerindeki mürekkep, halkın yüreğindeki korkuyu yavaşça silip götürüyordu.\n\nAnlaşmaların hiçbiri kusursuz değildi ve her bölgede uygulanışı aynı olmadı; tarihçiler farklı şehirlerin farklı koşullar yaşadığını söyler. Yine de bu belgeler, fetihten hemen sonra bile karşılıklı yükümlülüklerin yazıya geçirilmeye çalışıldığını gösterir. İyi bir söz, ancak yazıldığında ve uygulandığında değer kazanırdı.",
        speaker: "Teodomiro (Tudmir)",
        dialogue:
          "Elimdeki bu ahit, halkımın korkusundan daha ağır bir söz taşıyor; umarım yazılı kalan söz de yaşanır.",
        funFact:
          "Teodomiro (Tudmir) Ahdi, 713 yılına ait olup metni Arapça kaynaklarda korunmuştur. Bu, İspanya'daki erken dönem anlaşmaların bugün elimizde bulunan en önemli belgelerinden biridir; ancak bu ahdi Tarık değil, Musa'nın oğlu Abdülaziz imzalamıştır.",
        image: "assets/images/tarik_bin_ziyad_gibraltar.png",
        atmosphere: "COURTYARD_SUNLIGHT",
        visualNote:
          "Güneşli bir taş avluda iki heyetin masa başında anlaşma metnini inceleyişi.",
      },
      {
        title: "Şam Yolu: Çağrı ve Sade Dönüş",
        narration:
          "714 civarında Emevî Halifesi I. Velid, hem Musa'yı hem de Tarık'ı Şam'a çağırdı. Musa, İspanya'yı oğlu Abdülaziz'e bırakarak yola çıktı. Yolculuk uzundu; Akdeniz kıyılarından geçen kervan, Kuzey Afrika çöllerini ve Suriye yollarını aşacaktı. Gemilerin direklerinde rüzgâr ıslık çalıyor, uzaktaki İspanya kıyıları sisin içinde yavaşça kayboluyordu.\n\nTarık'ın bundan sonraki hayatı hakkında kaynaklar çok az bilgi verir; kimi rivayetler onun Şam'da sade bir yaşam sürdüğünü anlatır, ama kesin ayrıntılar bilinmemektedir. Bilinen şey, adının yüzyıllardır Cebelitarık'ta yaşadığıdır. Bir insan, ardında büyük bir saray ya da mezar taşı bırakmasa bile, yaptığı işin güzelliğiyle bir kıta tarihine adını yazabilirdi.\n\nGünler sonra kervanın ardında kalan topraklar yavaş yavaş görünmez oldu. Ama o toprakların insanları, kapıları, mabetleri ve tarlaları yerli yerinde duruyordu. Tarık'ın hikâyesi, güçlü olmanın yalnızca kazanmak değil, kazandıktan sonra da adil kalmak olduğunu hatırlatan sessiz bir hatıra olarak yaşıyordu.",
        speaker: "Tarık bin Ziyad",
        dialogue:
          "Adım bir dağda kalsın yeter; asıl iz, insanların kalbinde bırakılan adalettir.",
        funFact:
          "Halife I. Velid'in çağrısı yaklaşık 714'te gerçekleşti; Velid 715'te vefat etti. Tarık'ın sonraki hayatı hakkında kaynaklarda kesin bilgi yoktur.",
        image: "assets/images/tarik_s1_andalusia_fleet.png",
        atmosphere: "STORM_SEA",
        visualNote:
          "Sisli bir sabahta uzaklaşan İspanya kıyılarına doğru bakan, güvertedeki vakur bir komutanın arkadan görünüşü.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Büyük bir zafer kazandın ve şehirler seninle anlaşıyor. Sonra komutanın seni, izinsiz ilerledin diye ordunun önünde sert sözlerle eleştiriyor. Ne yaparsın?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Sakin kalır, ordunun birliğini korur ve halka adaletle davranma görevime devam ederim.",
          feedback:
            "Tarihî hakikat! Kaynaklar iki komutan arasındaki gerginliği anlatsa da Tarık isyana yönelmedi; birlikte fethi sürdürdü ve sonunda halifenin çağrısına birlikte uydular.",
          isHistoricalTruth: true,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Ordunun bir kısmıyla ayrılır, kendi yönetimimi kurmaya çalışırım.",
          feedback:
            "Ayrılık, yeni yurdun huzurunu bozar ve halkın güvenini sarsardı. Güçlü bir lider kırgınlıkla değil, birlikle yol alır.",
          isHistoricalTruth: false,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "Zaferin yalnızca benim olduğunu herkese ilan eder ve tartışmayı büyütürüm.",
          feedback:
            "Zafer, birlikte çalışan herkesin emeğidir; gururla tartışmayı büyütmek yeni halkın görmesi gereken adaleti gölgeler.",
          isHistoricalTruth: false,
        },
      ],
      historicalTruthExplanation:
        "Tarık bin Ziyad ile Musa bin Nusayr arasındaki gerginlik kaynaklarda farklı biçimlerde anlatılır; ayrıntıların bir kısmı rivayettir. Ancak Tarık'ın isyan etmediği, birlikte fethe devam ettiği ve sonunda halifenin çağrısıyla Şam'a gittiği bilinir.",
    },
    rewardArtifact: {
      id: "artifact-tarik-eman-ahidnamesi",
      name: "Eman Ahidnamesi Mührü",
      imagePath: "assets/images/seyh_hamdullah_calligraphy.png",
      pointType: "ADALET",
      pointLabel: "Adalet Puanı",
      points: 55,
      unlockedTitle: "Eman Elçisi",
      shortDescription:
        "Şehirlere can, mal ve ibadet güvenliği veren anlaşmaların simgesi olan mühür.",
      historicalNote:
        "711–713 yıllarında Endülüs'te yerel halkla yapılan anlaşmalar, yeni yönetimin kabulünü kolaylaştırdı. Teodomiro Ahdi gibi metinler bu dönemin yönetim anlayışını gösterir.",
      accentColor: "#B45309",
      hotspots: [
        {
          id: "treaty-seal",
          xPercent: 50,
          yPercent: 30,
          title: "Ahit Mührü",
          secretFact:
            "Teodomiro Ahdi 713'te yazılmış ve metni günümüze ulaşmıştır; yılda bir dinar ve birkaç ölçek tahıl gibi şartlar içerir.",
        },
        {
          id: "mozarab-cross",
          xPercent: 25,
          yPercent: 62,
          title: "Mozarap Mirası",
          secretFact:
            "Toledo'da Mozarap ayini bugün de belli kiliselerde yapılır; bu, farklı inançların bir arada yaşadığının izidir.",
        },
        {
          id: "talavera-banner",
          xPercent: 74,
          yPercent: 58,
          title: "Talavera Sancağı",
          secretFact:
            "Tarık ile Musa'nın Talavera civarında buluştuğu rivayet edilir; olayın ayrıntıları kaynaktan kaynağa değişir.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Tarık, şehirlere girerken neden ganimet yerine yazılı bir güvence vermeyi seçti? Güvenmek, korkutmaktan neden daha kalıcıdır?",
      "Eleştirildiği hâlde Tarık'ın sabırla birliği koruması hakkında ne düşünüyorsun? Sen aynı durumda ne yapardın?",
      "Farklı inançtan insanların birbirine saygı göstererek yaşadığı bir şehirde yaşamanın güzel yanları nelerdir?",
    ],
  }),

  // --------------------------------------------------------------------------
  // BÖLÜM 3: ENDÜLÜS'ÜN IŞIĞI (10 SAHNE)
  // --------------------------------------------------------------------------
  buildChapter({
    id: "tarik-bin-ziyad-ch3",
    heroId: "tarik-bin-ziyad",
    chapterNumber: 3,
    title: "Endülüs'ün Işığı: Bilim ve Hoşgörü Şehirlerinin Doğuşu",
    subtitle:
      "Bir boğazdan geçen cesaretin, yüzyıllar sonra kitap kokulu şehirlere dönüşmesi",
    estimatedMinutes: 10,
    scenes: [
      {
        title: "Tohumu Atan Tarık, Ağacı Büyüten Yüzyıllar",
        narration:
          "Şimdi hikâyenin önemli bir noktasını netleştirelim: Tarık bin Ziyad 711–714 yılları arasında Endülüs'te bulundu ve kitaplarla dolu o meşhur şehirleri hiç görmedi. O yıllarda Kurtuba, Guadalquivir Nehri kıyısında Roma köprüsüyle bilinen mütevazı bir şehirdi. Sokaklar dardı, evler taştandı, kütüphaneler ise henüz ortada yoktu.\n\nAma Tarık'ın açtığı kapıdan sonra, birbirini izleyen kuşaklar bu toprakları değiştirdi. Müslümanlar, Hristiyanlar ve Yahudiler aynı şehirlerde çalıştı, ticaret yaptı, kitap yazdı ve kitap kopyaladı. Bu bölümde anlatacağımız bilim insanları ve kütüphaneler, Tarık'ın kendi çağından yaklaşık elli yıl ile beş yüz yıl sonrası arasındaki dönemlere aittir. Bir çınar ağacının gölgesi, onu diken bahçıvanın ömründen çok daha uzun sürer.\n\nBu yüzden bu bölümde bir zaman yolculuğuna çıkacağız. Her sahnede hangi yüzyılda olduğumuzu hatırlayacağız; çünkü bir kahramanın yaptığı işi, ardından gelenlerin işleriyle karıştırmamak tarihe saygının ilk adımıdır. Tarık yalnızca kapıyı araladı; odaları bilginler, hekimler ve çevirmenler döşedi.",
        speaker: "Anlatıcı",
        dialogue:
          "Bir insan tohumu eker; gölgesinde oturanlar çoğu zaman o insanı hiç tanımaz.",
        funFact:
          "Tarık'ın kendi dönemi 711–714'tür. Kurtuba Ulu Camii'nin yapımı 786'da, Kurtuba Halifeliği'nin ilanı 929'da, Hakem II'nin kütüphanesi ise 10. yüzyılda gerçekleşti; yani bunların hepsi Tarık'tan çok sonradır.",
        image: "assets/images/tarik_bin_ziyad_gibraltar.png",
        atmosphere: "DAWN_MIST",
        visualNote:
          "Sabah sisinde Guadalquivir Nehri üzerindeki Roma köprüsü ve küçük bir şehir silueti, uzakta küçük bir tohum filizi.",
      },
      {
        title: "Kurtuba'nın Sütunlar Ormanı",
        narration:
          "756 yılında Emevî hanedanından genç bir prens, I. Abdurrahman, Şam'daki katliamlardan kaçarak Endülüs'e ulaştı ve Kurtuba'da yeni bir devlet kurdu. Yaklaşık 786'da şehrin merkezinde Ulu Cami'nin yapımına başladı. Binlerce taş yontuldu, kirişler dövüldü, havada kireç ve odun talaşı kokusu asılı kaldı. Camiyi taşıyan sütunlar çıplak ağaçlar gibi sıra sıra dizildi.\n\nCaminin en şaşırtıcı özelliği, kırmızı ve beyaz taşlardan yapılmış çift katlı kemerleriydi. Bazı sütun başlıkları eski Roma ve Vizigot yapılarından alınarak yeniden kullanılmıştı; yani eski bir medeniyetin parçaları yeni bir yapının içinde yaşamaya devam ediyordu. Kaynaklara göre Abdurrahman, Müslümanların ve Hristiyanların birlikte kullandığı bir kilisenin Hristiyanlara ait bölümünü satın alarak cami alanını genişletti. Camiye giren herkes, bir ormanın içinde dolaşır gibi kemerlerin arasında kaybolurdu.\n\nGüneş yüksekteki pencerelerden süzülürken kemerlerin gölgesi yere uzun çizgiler çiziyordu. İşçilerin çekiç sesleri, usta nakkaşların fısıltıları ve boyaların kokusu yapının içinde yankılanıyordu. Cami sonraki yüzyıllarda büyütülerek genişledi ve Kurtuba, yalnız bir ibadethane değil, sabırla yontulan bir şehir hafızası kazandı.",
        speaker: "I. Abdurrahman",
        dialogue:
          "Bir yurdu yitirdim; ama bilgi, sanat ve sabırla yeni bir yurt kurabilirim.",
        funFact:
          "Kurtuba Ulu Camii'nde (Mezquita) bugün hâlâ 800'den fazla sütun bulunur. Camiye daha sonra katedral eklendiği için, tek yapıda iki farklı dünyanın izi birlikte yaşar.",
        image: "assets/images/fatima_s1_qarawiyyin_foundation.png",
        atmosphere: "FEZ_COURTYARD",
        visualNote:
          "Kırmızı ve beyaz çift katlı kemerlerin sıralandığı, ışık huzmeleriyle dolu sütunlu bir cami iç mekânı.",
      },
      {
        title: "Kitaplarla Kurulan Şehir",
        narration:
          "10. yüzyılda Kurtuba'nın en büyük meraklılarından biri Halife II. Hakem'di. Bağdat'a, Kahire'ye, Şam'a ajanlar gönderiyor, nadir kitapları satın alıyor ya da kopyalatıyordu. Kurtuba'nın sokaklarında kâğıtçılar, ciltçiler, hattatlar ve sahaflar vardı. Dükkânlardan deri, kâğıt ve mürekkep kokusu taşardı. Şehir, kitapla yaşayan canlı bir organizma gibiydi.\n\nKaynaklar Hakem'in kütüphanesinde 400.000 cilt kitap bulunduğunu söyler. Ancak modern tarihçilerin bazıları bu sayının abartılı olabileceğini belirtir; yine de bu kütüphanenin devrinin Avrupa'sındaki hiçbir kütüphaneyle kıyaslanamayacak kadar büyük olduğu kabul edilir. Avrupa'nın başka yerlerinde bir manastırın birkaç yüz kitabı olması büyük bir zenginlik sayılırken, Kurtuba'da kitap, şehrin gündelik hayatının bir parçasıydı.\n\nKitap kopyalamak bir meslekti; kâtipler bir sayfayı titizlikle yazar, ciltçiler deriyi keser ve yapıştırır, hattatlar harfleri süslerdi. Bir kitap, birçok elin emeğiyle doğardı. Bu emeğin ardında yatan fikir basitti: Bilgi saklandıkça değil, paylaşıldıkça büyür. Şehirde kitap sahibi olmak, saygı gören bir merak sayılırdı.",
        speaker: "Saray Kütüphanecisi",
        dialogue:
          "Her yeni kitap, şehrin bir penceresini daha açmak demektir.",
        funFact:
          "Hakem II'nin kütüphanesi için kaynaklarda 400.000 cilt rakamı geçer; fakat bazı modern araştırmacılar bu rakamın abartılı olabileceğini söyler. Ne olursa olsun, Kurtuba dönemin en büyük kitap şehirlerinden biriydi.",
        image: "assets/images/ibn_sina_s1_bukhara_library.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Yüksek rafları cilt ve tomarlarla dolu geniş bir kütüphane salonu ve masalarda çalışan kâtipler.",
      },
      {
        title: "Ortak Çalışmanın Gücü: Bir Kitap, Üç Dil",
        narration:
          "Yaklaşık 950'li yıllarda Bizans İmparatoru, Halife III. Abdurrahman'a değerli bir hediye gönderdi: Dioscorides'in bitkilerle ilgili tıp kitabı. Fakat kitap Yunancaydı ve Kurtuba'da onu kolayca okuyabilen kimse yoktu. Çözüm için saray hekimi ve vezir Hasdai ibn Şaprut, Yahudi bir bilgin olarak devreye girdi; Konstantinopolis'ten gelen bir Rum rahip de çeviri çalışmasına katıldı.\n\nOdada kâğıtların hışırtısı, bitki kurutma kokusu ve kısık sesle tartışılan Yunanca, Latince ve Arapça kelimeler birbirine karışıyordu. Bazı kişiler 'farklı inançtan biriyle bu işi yapmak doğru değil' diye itiraz etti. Ama Hasdai ile rahip, bilginin sınırlarının inançlarla çizilmediğini biliyordu. Çalışma tamamlandığında, bitkilerin şifa gücüne dair yeni bilgi herkesin yararına sunuldu. İyi bir fikir, farklı insanların elleriyle olgunlaşınca daha güçlü yeşerirdi.\n\nBu iş birliği, yaklaşık 950'lerde Kurtuba'da farklı toplulukların aynı bilimsel hedef etrafında buluşabildiğini gösterir. Elbette her dönemde her şey kusursuz değildi; yine de bu hikâye, ortak merakın insanları birleştirebildiğini hatırlatan güzel bir örnektir. Bilgiyi birlikte çoğaltmak, bir şehrin en kalıcı servetiydi.",
        speaker: "Hasdai ibn Şaprut",
        dialogue:
          "Bilgi, hangi dilde yazılmış olursa olsun, şifaya ulaşan herkesin ortak hazinesidir.",
        funFact:
          "Dioscorides'in tıp kitabı yaklaşık 950'lerde Kurtuba'ya ulaştı ve Arapçaya aktarıldı. Hasdai ibn Şaprut, III. Abdurrahman'ın hem hekimi hem de dışişleri işlerine bakan güvenilir bir yöneticisiydi.",
        image: "assets/images/harizmi_s1_house_of_wisdom.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Büyük bir masa etrafında oturan, farklı kıyafetli üç bilginin açık bir bitki kitabını birlikte incelemesi.",
        midDecision: {
          title: "ARA KARAR: Kitabı Kimlerle Çevirirsin?",
          question:
            "Elinde çok değerli bir tıp kitabı var, ama dili sadece farklı inanç ve kültürden bilginler biliyor. Hangi yolu seçersin?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Farklı dil ve inançtan bilginleri birlikte çalıştırır, çeviriyi herkesin yararlanması için yaparım.",
              feedback:
                "Çok doğru! Kurtuba'da bu tür ortak çalışmalar bilginin hızla çoğalmasını sağladı. Ortak emek, bilgiyi bir kişinin değil, herkesin hazinesi yapar.",
              isBestChoice: true,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Yalnızca kendi toplumumdan çevirmen bulana kadar kitabı bekletirim.",
              feedback:
                "Beklemek, hastaların ve öğrencilerin yararlanabileceği bilgiyi yıllarca geciktirebilir. Bilgiyi paylaşmak, onu çoğaltır.",
              isBestChoice: false,
            },
          ],
        },
      },
      {
        title: "Cerrah Ez-Zehrâvî'nin Aletleri",
        narration:
          "Kurtuba yakınındaki Medinetüzzehra Sarayı'nın gölgesinde yaşayan Ebü'l-Kâsım ez-Zehrâvî (936-1013 civarı), dönemin en tanınmış cerrahlarındandı. Otuz bölümlük büyük tıp ansiklopedisi 'et-Tasrîf' içinde, hastaların tedavisi için kullandığı iki yüz kadar cerrahi aleti çizimlerle anlattı. Forseps, neşter, kanca ve dikiş iğneleri odasının duvarında düzenle sıralanırdı.\n\nHasta başında sakin kalmak, onun için en az bilgi kadar önemliydi; titreyen bir el, hastanın yarasını büyütebilirdi. Kendi yazdığı kitapta cerrahın sabırlı, dikkatli ve temiz olması gerektiğini vurguladı. Yüzyıllar sonra Avrupa'da Latinceye çevrilen bu eser, hekimlerin elinde uzun süre başvuru kitabı olarak kaldı. Küçük bir aletin, doğru ellerde binlerce insanın acısını dindirdiğini gösterdi.\n\nZehrâvî aletleri yalnız anlatmakla kalmadı, çizimlerle de gösterdi; çünkü bir fikrin başka bir hekime ulaşması için sözün yetmediği yerde çizmek gerekirdi. Kitabındaki titizlik, hekimlikte merhametle dikkatin birlikte yürümesi gerektiğini öğretiyordu. El yazmaları bugün kütüphanelerde ve müzelerde saklanır. Aletlerin her birinin adını, şeklini ve ne işe yaradığını ayrı ayrı anlattı.",
        speaker: "Ez-Zehrâvî",
        dialogue:
          "Elini bilmeden kesen cerrah olmaz; hastanın canı bir emanettir.",
        funFact:
          "Ez-Zehrâvî'nin et-Tasrîf adlı eseri, 12. yüzyılda Cremonalı Gerard tarafından Latinceye çevrildi ve Avrupa'da yüzyıllarca cerrahi eğitiminde kullanıldı. Kendisi Avrupa'da 'Abulcasis' adıyla tanınır.",
        image: "assets/images/ibn_sina_hospital.png",
        atmosphere: "WORKSHOP_GEARS",
        visualNote:
          "Duvara sıralanmış çeşitli cerrahi aletler, masada açık bir tıp kitabı ve sabırla çalışan bir cerrahın elleri.",
      },
      {
        title: "Uçmak İsteyen Adam: İbn Firnas",
        narration:
          "9. yüzyılda Kurtuba'da yaşamış İbn Firnas, merakıyla tanınan bir bilgindi. Arap kaynaklarına göre berrak cam yapmanın yolunu buldu, su saati yaptı, gök cisimlerinin hareketini gösteren bir araç yaptı. Gökyüzüne bakıp kuşların nasıl uçtuğunu uzun uzun izlerdi. Sonra ise çok cesur bir iş denedi.\n\nRivayete göre kuş tüyü ve ipekten kanatlar yaparak Kurtuba yakınlarındaki bir tepeden havalanmaya çalıştı. Kısa bir süre havada kaldı, ama inişte sırtını biraz incitti. Bu hikâye, 17. yüzyıldaki bir kaynakta anlatıldığı için tarihçiler tüm ayrıntıların doğru olup olmadığından emin değildir. Yine de önemli olan, merak ve cesaretin yüzyıllar öncesinde bile insanları yeni fikirlere yönlendirdiğidir. Başarısızlık, deneyenin dersi; hiç denememek ise korkunun suskunluğuydu.\n\nBir tepeden havalanmaya çalışan adamı izleyenler arasında kimi alay etti, kimi hayranlıkla baktı. Ama gökyüzünü engel değil soru olarak gören bu merak, yüzyıllar sonra uçmayı hayal eden başka insanlara da cesaret hatırlatır. Bilim çoğu zaman, bir hayalin ardına düşen merakla başlar.",
        speaker: "İbn Firnas",
        dialogue:
          "Düşmek, hiç denememekten iyidir; çünkü düşen öğrenir, denemeyen yalnızca merak eder.",
        funFact:
          "İbn Firnas 887'de vefat etti. Uçuş denemesi 'rivayete göre' yaklaşık 852 yılına dayanır ve ayrıntıları 17. yüzyıldaki kaynakta geçer. Osmanlı döneminde Galata Kulesi'nden uçtuğu anlatılan Hezarfen Ahmed Çelebi'nin hikâyesi de benzer bir cesareti yansıtır.",
        image: "assets/images/hezarfen_galata_flight.png",
        atmosphere: "WARM_GOLDEN",
        visualNote:
          "Gün batımında bir tepeden kanatlarıyla havalanmaya hazırlanan bir bilginin silueti, aşağıda toplanmış meraklı insanlar.",
      },
      {
        title: "Ziryab ve Zarif Sofralar",
        narration:
          "822 yılında Bağdat'tan gelen Ziryab adlı yetenekli bir müzisyen Kurtuba'ya yerleşti. Kaynaklara göre sarayda müziğin yanı sıra zarafet ve incelik konusunda da yenilikler getirdi. Anlatıya göre ud adlı sazına beşinci bir tel ekledi, mevsime uygun giyinme kurallarını yaygınlaştırdı ve yemek sofrasında yemekleri düzenli bir sıraya koymayı alışkanlık hâline getirdi: önce çorba, sonra ana yemek, en sonda tatlı.\n\nAvlunun gölgelerinde müzik sesi, taze nane ve portakal çiçeği kokusu yükseliyordu. Dinleyenler ses telinden fışkıran melodilerle büyülenirdi. Bu hikâyelerin bir kısmı sonradan yazılan kaynaklara dayandığı için tamamen kesin değildir; ama Kurtuba'nın bilimle birlikte sanatı, ince zevki ve güzel davranışı da önemsediğini gösterir. Medeniyet, yalnız kitaplarla değil, güzel bir sofranın nezaketiyle de kurulurdu.\n\nKurtuba sokaklarında kısa sürede başka şeyler de konuşulmaya başlandı: saçın biçimi, giysinin rengi, sofrada kimin önce konuşacağı. Kimileri bunları gereksiz bulurken, kimileri güzel davranışın şehrin ruhunu yumuşattığını düşündü. Bilim ile sanat, aynı avlunun iki ayrı penceresi gibiydi.",
        speaker: "Ziryab",
        dialogue:
          "Güzel bir şarkı da, düzenli bir sofra da insanları biraz daha nazik yapar.",
        funFact:
          "Ziryab hakkındaki bilgilerin çoğu, sonraki yüzyıllarda yazılan kaynaklardan gelir. 'Çorba, ana yemek, tatlı' sırasının ona dayandığı anlatısı da bu yüzden kesin bir tarihî olgu değil, güçlü bir geleneksel anlatıdır.",
        image: "assets/images/fatima_fihri_courtyard.png",
        atmosphere: "FEZ_COURTYARD",
        visualNote:
          "Çeşmeli ve narenciye ağaçlı bir avluda ud çalan bir müzisyen ve dinleyen misafirler.",
      },
      {
        title: "Yıldızlara Bakan Toledo",
        narration:
          "11. yüzyılda Tarık'ın yürüdüğü şehirlerden biri olan Toledo, bu kez bilimin merkeziydi. Ez-Zerkâlî (Azarquiel), bu şehirde yaşayan usta bir gözlemci ve alet yapımcısıydı. Pirinç ve bakırdan usturlaplar işler, gece boyunca gökyüzünü izler, yıldızların konumlarını defterlerine kaydederdi. Atölyesinde bakır tozu, yağ ve soğuk taş kokusu hissedilirdi.\n\nEz-Zerkâlî'nin hazırladığı astronomi tabloları 'Toledo Cetvelleri' adıyla Avrupa'da yüzyıllarca kullanıldı. Geliştirdiği evrensel usturlap türü, farklı enlemlerde aynı aletle hesap yapılmasına izin veriyordu. Tarihçiler, Kopernik'in eserinde bile onun adının anıldığını belirtir. Kapkaranlık bir gecede yıldızlara dikkatle bakan merak dolu bir göz, yüzyıllar sonrasının bilim insanlarına yol göstermişti.\n\nGece gözlemleri bazen sabaha kadar sürerdi. Soğuk taş terasta bakır aletin kenarına düşen yıldız ışığı, bir bilginin defterindeki bir sayıya dönüşürdü. Uzun sabırla yazılan o sayılar, aynı gökyüzüne bakan denizcilerin ve yolcuların da rotasını çizmeye yardım etti. Bu çalışma, bilimin sabırla, tekrar tekrar ölçerek ve kontrol ederek ilerlediğini gösterir.",
        speaker: "Ez-Zerkâlî",
        dialogue:
          "Her yıldızın yeri bir sayıdır, her sayı da yolculara uzanan bir haritadır.",
        funFact:
          "Ez-Zerkâlî 1029 civarında doğdu, 1087'de vefat etti. Avrupa'da 'Azarquiel' veya 'Arzachel' adıyla tanınır. Toledo Cetvelleri, 12. yüzyıldan itibaren Latince çevirileriyle Avrupa gözlemevlerinde kullanıldı.",
        image: "assets/images/meryem_el_icliyye_astrolabe.png",
        atmosphere: "STARLIT_OBSERVATORY",
        visualNote:
          "Gece vakti açık bir gözlem terasında bakır usturlapla yıldızlara bakan bir bilginin silueti.",
      },
      {
        title: "Toledo'da Tercüme Odası",
        narration:
          "1085 yılında Toledo, Kastilya Kralı VI. Alfonso'nun yönetimine geçti. Ancak şehrin zengin kitap birikimi yok olmadı; tam tersine 12. yüzyılda burada büyük bir çeviri hareketi başladı. Müslüman, Yahudi ve Hristiyan bilginler, Arapça kitapları Latinceye çeviriyordu. Odalarda eski deri ciltlerin kokusu, kamış kalemlerin çıkardığı sesler ve alçak sesle yapılan tartışmalar birbirine karışıyordu.\n\nBu çevirilerle İbn Sînâ'nın tıp kitabı, Hârizmî'nin cebir eseri, Ez-Zehrâvî'nin cerrahi kitabı ve Antik Yunan'dan Arapçaya aktarılmış birçok eser Avrupa'ya ulaştı. Cremonalı Gerard tek başına yaklaşık yetmiş eseri Latinceye kazandırmış olarak bilinir. Bir şehirde yüzyıllar boyunca biriken bilgi, başka bir kıtanın bilim yolunu aydınlatıyordu.\n\nToledo'daki bu çeviri odası, bilginin hangi dilde yazıldığından çok neye yaradığına bakan bir merakı simgeliyordu. Bir tarafta kitap ödünç veren, öbür tarafta çeviri yapan insanlar, farklı inançlardan olsalar da aynı masanın etrafında buluşuyordu. Bilgi böylece sınırları aşan bir ırmağa dönüştü.",
        speaker: "Cremonalı Gerard",
        dialogue:
          "Bu kitapların her satırı bir kapı; biz yalnızca anahtar çeviriyoruz.",
        funFact:
          "Cremonalı Gerard (öl. 1187), Toledo'da çalışan çevirmenlerin en tanınmışlarındandır. Çevirileri, Avrupa üniversitelerinde yüzyıllarca tıp, astronomi ve matematik dersleri için kullanıldı.",
        image: "assets/images/katip_celebi_books.png",
        atmosphere: "PALACE_WORKSHOP",
        visualNote:
          "Uzun masalarda Arapça kitaplardan Latince metinler çeviren, farklı kıyafetli bilginlerin birlikte çalıştığı bir çeviri odası.",
      },
      {
        title: "Elhamra'dan Bugüne Uzanan Miras",
        narration:
          "Endülüs'ün son büyük parlak şehri Gırnata'ydı (Granada). Nasrî sultanları 13. ve 14. yüzyıllarda Elhamra Sarayı'nı yükselttiler. Taş oymalar, çeşmeler ve incecik sütunlarla bezeli avlularda su, saray bahçelerinin arasında akıp giderdi. Bu şehirde güneş batarken, kızıl taşlar altın gibi parlardı.\n\nGırnata 1492'de el değiştirdi ve Endülüs'ün uzun Müslüman dönemi sona erdi. Bu yaklaşık sekiz yüzyıllık tarih her dönemde aynı ölçüde huzurlu değildi; zorluklar ve çatışmalar da yaşandı. Yine de geriye büyük bir miras kaldı: kitaplar, bilim, mimari, sanat ve İspanyolca ile Portekizcede binlerce Arapça kökenli kelime. Tarık'ın boğazdan geçerek açtığı kapı, çok sayıda insanın emeğiyle bir medeniyet hâline gelmişti.\n\nBugün Elhamra'nın avlularında dolaşan bir çocuk, duvarlardaki geometrik süslemelere ve çeşmelerin şırıltısına kulak verdiğinde, yüzyıllar öncesinden gelen bir sesi dinler gibi olur. O ses, merakın, sabrın ve birlikte çalışmanın bu topraklarda bıraktığı izdir.",
        speaker: "Gırnatalı Bahçıvan",
        dialogue:
          "Bu çeşmelerin suyu dağdan, bilgisi asırlardan, güzelliği ise birlikte çalışan ellerden gelir.",
        funFact:
          "Elhamra Sarayı 13.–14. yüzyıllarda Nasrîler döneminde inşa edildi ve bugün UNESCO Dünya Mirası Listesi'ndedir. İspanyolcada binlerce kelime Arapça kökenlidir; 'ojalá' (inşallah) bunlardan biridir.",
        image: "assets/images/islamic_world_atlas_map.png",
        atmosphere: "JERUSALEM_DUSK",
        visualNote:
          "Gün batımında kızıl surlarla çevrili bir sarayın su kanallı avlusu ve arka planda kar tepeli bir dağ silueti.",
      },
    ],
    destinyMoment: {
      title: "KADER ANI: Sen Olsan Ne Yapardın?",
      question:
        "Kurtuba gibi bir bilgi şehri kurmak istiyorsun. Hangi yolu seçersin?",
      options: [
        {
          id: "A",
          label: "Seçenek A",
          text: "Bütün kitapları sarayda saklar, kimsenin görmesine izin vermem.",
          feedback:
            "Saklanan bilgi çoğalmaz; Kurtuba, kitaplarını bilginlerin ve öğrencilerin kullanımına sunduğu için parladı.",
          isHistoricalTruth: false,
        },
        {
          id: "B",
          label: "Seçenek B",
          text: "Görkemli saraylar yaptırır ama okul ve kütüphane kurmam.",
          feedback:
            "Saraylar güzel olabilir; ama bir şehri medeniyet yapan şey, orada yaşayanların öğrenmesi ve paylaşmasıdır.",
          isHistoricalTruth: false,
        },
        {
          id: "C",
          label: "Seçenek C",
          text: "Farklı dil ve inançlardan bilginleri bir araya getirir, kitapları toplatıp çevirtir ve öğrenmeyi herkese açarım.",
          feedback:
            "Tarihî hakikat! Endülüs'ün parlaklığı, uzun yıllar boyunca Müslüman, Hristiyan ve Yahudi bilginlerin kitap toplaması, çevirmesi ve paylaşmasıyla büyüdü.",
          isHistoricalTruth: true,
        },
      ],
      historicalTruthExplanation:
        "Endülüs'ün bilim ve kültür ortamı, Tarık'ın 711'de açtığı kapıdan sonra yüzyıllar içinde birçok bilginin, kâtibin ve çevirmenin emeğiyle gelişti. Tarık'ın kendi dönemi bu mirasın başlangıcıydı; Kurtuba kütüphaneleri, Zehrâvî ve Ez-Zerkâlî gibi bilginler çok sonraki yüzyıllara aittir.",
    },
    rewardArtifact: {
      id: "artifact-tarik-endulus-usturlabi",
      name: "Endülüs Işık Usturlabı",
      imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
      pointType: "BILGELIK",
      pointLabel: "Bilgelik Puanı",
      points: 60,
      unlockedTitle: "Endülüs Işığı Taşıyıcısı",
      shortDescription:
        "Kitapların, bilginlerin ve çeviri odalarının Endülüs'ten dünyaya taşıdığı bilgi ışığının simgesi.",
      historicalNote:
        "Ez-Zerkâlî'nin Toledo'da geliştirdiği astronomi tabloları ve usturlap türleri, Avrupa'da yüzyıllarca kullanıldı. Kurtuba kütüphaneleri ve Toledo çeviri hareketi bilgiyi kıtalar arasında taşıdı.",
      accentColor: "#0D9488",
      hotspots: [
        {
          id: "cordoba-arch",
          xPercent: 30,
          yPercent: 55,
          title: "Kurtuba Kemeri",
          secretFact:
            "Kurtuba Ulu Camii'nde bugün hâlâ 800'den fazla sütun ve kırmızı-beyaz kemerler görülebilir.",
        },
        {
          id: "toledo-tables",
          xPercent: 52,
          yPercent: 28,
          title: "Toledo Cetvelleri",
          secretFact:
            "Ez-Zerkâlî'nin hazırladığı astronomi tabloları, 12. yüzyıldan sonra Latince çevirileriyle Avrupa'da kullanıldı.",
        },
        {
          id: "translation-quill",
          xPercent: 72,
          yPercent: 62,
          title: "Çevirmenin Kalemi",
          secretFact:
            "Cremonalı Gerard yaklaşık yetmiş eseri Arapçadan Latinceye çevirmiş olarak bilinir.",
        },
      ],
    },
    familyDiscussionQuestions: [
      "Tarık'ın kendi zamanındaki başlangıçla, yüzyıllar sonra büyüyen Endülüs medeniyeti arasında nasıl bir bağ var? Bir iş bazen başladığı kişiden çok sonra mı meyve verir?",
      "Farklı dil ve inançlardan insanların birlikte kitap çevirmesi, bilginin gelişmesine nasıl yardımcı oldu?",
      "Biz de okulumuzda ya da mahallemizde, farklı düşünen arkadaşlarımızla birlikte yeni bir şey öğrenmek için neler yapabiliriz?",
    ],
  }),
];
