# AGENTS.md — MİRAS: İz Sürenler (4 Kat Genişletilmiş Tam Sürüm Spesifikasyonu)

> **GOOGLE ANTIGRAVITY AJANI İÇİN SİSTEM EMRİ (SYSTEM DIRECTIVE):**
> Bu dosya projenin doğrudan yürütülebilir mimari spesifikasyonu ve anayasasıdır (`AGENTS.md`).
> **KRİTİK İÇERİK DERİNLİĞİ KURALI (4X GENİŞLETME):** Hikâyeler ve bölümler ASLA 2-3 cümlelik kısa özetler şeklinde yazılamaz! Çocukların hikayenin içine girmesi, atmosferi yaşaması ve uygulamada uzun süre vakit geçirmesi için:
> 1. Uygulamada **8 Ana Kahraman** ve toplam **18 Uzun Bölüm (Chapter)** yer almalıdır.
> 2. Her bir Bölüm (`Chapter`) en az **8 ila 10 sinematik sahneden (`scenes`)** oluşmalıdır.
> 3. Her sahnede; **Atmosfer Betimlemesi (3-4 zengin, akıcı cümle)** + **Karakter Diyalog Balonu (`speaker` ve `dialogue`)** + **Tarihsel İpucu (`funFact`)** yer almalıdır.
> 4. Her bölümde tek bir seçim değil; ortada bir **"Ara Karar / Keşif Seçimi"** ve bölüm sonunda büyük **"Kader Anı (Sen Olsan Ne Yapardın?)"** olmak üzere **en az 2 etkileşimli karar noktası** bulunmalıdır!

---

## 1. PROJE KİMLİĞİ VE TEKNOLOJİ YIĞINI (TECH STACK)

- **Uygulama Adı:** MİRAS: İz Sürenler (7–12 Yaş İnteraktif İslam Tarihi ve Karakter Gelişimi Uygulaması)
- **Hedef Platform:** Mobil (iOS / Android) ve **Tablet (iPad / Android Tablet)** tam duyarlı (responsive) arayüz + Web Önizleme.
- **Framework:** React Native (Expo SDK 52+ / Expo Router dosya tabanlı navigasyon) + TypeScript.
- **Stil & Animasyon:** NativeWind (Tailwind CSS) + `react-native-reanimated` + `lucide-react-native` + `react-native-svg`.
- **Durum Yönetimi (State):** Zustand + `@react-native-async-storage/async-storage`.
- **Ses & Dokunsal Geri Bildirim:** `expo-speech` (Türkçe sesli hikâye okuma) + `expo-haptics`.

---

## 2. DEĞİŞTİRİLEMEZ TASARIM VE HASSASİYET KURALLARI

1. **Zenginleştirilmiş Sahne Yapısı (Sıkıcı Olmayan Uzunluk):**
   - Her sahne kartında üç katman bulunur:
     - **Anlatıcı Metni (`narration`):** Olayın geçtiği yeri, sesleri, kokuları ve heyecanı çocuğun gözünde canlandıran **60–90 kelimelik** sürükleyici hikâye paragrafı.
     - **Diyalog Kutusu (`dialogueBox`):** Sahnedeki karakterlerin konuştuğu, başında konuşan kişinin unvanı olan canlı konuşma balonu.
     - **Merak Kutusu (`historicalNote`):** Sahnenin altında isteğe bağlı açılan *"Bunu Biliyor muydun?"* mini bilgi rozeti.
   - Bir bölüm 8–10 sahne sürdüğü için çocuk bir bölümü sindire sindire **5–8 dakikada** tamamlar; 20 saniyede biten yüzeysel özetler kesinlikle YASAKTIR.
2. **İslami Hassasiyet Kuralı (KRİTİK!):**
   - **Sahabeler (Hz. Ömer vb.):** Sahabelerin yüzü kesinlikle ÇİZİLMEZ ve GÖSTERİLMEZ (`visualMode: "POV_SILHOUETTE"`). Görsel üretim aracını (Nano Banana) çağırırken sahabe sahnelerinde yüz yerine **Birinci Şahıs Bakış Açısı (POV)** (sadece eldeki fener, Medine sokakları, uzaktaki çadır, Kudüs kapıları) üretilir.
   - **Tarihi Şahsiyetler (Selahaddin Eyyubi, Fatih Sultan Mehmed, El-Cezerî, İbnü'l-Heysem, İbn Battuta, Piri Reis, Fatıma el-Fihrî, Mimar Sinan):** `visualMode: "CHARACTER_PORTRAIT"` kullanılır; sıcak, karizmatik 3B/2.5B animasyon tarzında karakter tasarımları üretilir.

---

## 3. 8 KAHRAMAN VE ÇOK BÖLÜMLÜ (CHAPTER-BY-CHAPTER) DEV MÜFREDAT

`src/data/storiesData.ts` (veya modüler olarak `src/data/heroes/*.ts`) içerisine aşağıdaki **8 Kahraman ve 18 Bölüm** tam detaylı (her bölüm 8-10 sahne + diyaloglar + 2 karar anı) olarak kodlanmalıdır:

### SINIF 1: ADALET VE CESARET MUHAFIZLARI (`ADALET_CESARET`)

#### 1. Hz. Ömer (`id: "hz-omer"`, `visualMode: "POV_SILHOUETTE"`)
- **Bölüm 1: "Gece Nöbeti ve Kaynayan Taşlar" (9 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* (1) Medine'de gece yarısı sessizliği ve Eslem ile sokak kontrolü -> (2) Şehrin dışındaki Harre düzlüğünde görülen sönük çöl ateşi -> (3) Çadıra yaklaşırken duyulan çocuk ağlamaları ve Ara Karar 1 (*"Gece yarısı çadıra nasıl yaklaşırsın?"*) -> (4) Selam verip izin isteme ve annenin tencere başındaki çaresizliği -> (5) Tencerenin içindeki su ve çakıl taşlarının sırrının ortaya çıkışı -> (6) Kadının karşısındakini tanımadan "Ömer halife oldu ama bizim halimizden haberi yok" deyişi ve Hz. Ömer'in titreyen sesi -> (7) **Büyük Kader Anı** (*"Erzak deposuna gittiğinde ağır un çuvalını kim taşıyacak?"*) -> (8) "Kıyamet günü benim yükümü sen mi taşıyacaksın Eslem?" diyerek un çuvalını ve zeytinyağı testisini sırtında taşıması, dumanlar sakalının arasından çıkana kadar ateşi bizzat üflemesi -> (9) Çocukların doyup gülerek uyuması ve annenin gerçeği öğrenip dua etmesi.
  - *Ödül Eser:* **Gece Nöbeti Feneri**
- **Bölüm 2: "Kudüs Yolunda Tek Deve ve İki Yolcu" (8 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Kudüs'ün anahtarlarını teslim almak için Medine'den çıkış -> Gösterişli bir ordu yerine sadece hizmetkârı ve tek bir deve ile yolculuk -> Deveye sırayla binme kuralı (bir saat Halife biniyor, bir saat hizmetkârı biniyor, bir saat deve dinleniyor) -> Kudüs kapılarına varıldığında binme sırasının hizmetkâra gelmesi ve su birikintisinden geçerken Hz. Ömer'in deveyi yularından çekerek yürümesi -> Komutanların "Ey Halife, bari şehre girerken siz binin, elçiler yanlış anlamasın" teklifi -> **Büyük Kader Anı:** Adalet sırasını gösteriş için bozar mısın? -> "Bizi üstün kılan süslü elbiseler değil, adaletimizdir!" cevabı ve Kudüs Patriği Sophronius'un hayranlığı.
  - *Ödül Eser:* **Kudüs Emanet Anahtarı**
- **Bölüm 3: "Mısır'dan Gelen Yarış ve Adalet Divanı" (8 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Mısır'da yapılan at yarışında sıradan bir Kıptî gencin atının, Mısır Valisi Amr bin Âs'ın oğlunun atını geçmesi -> Valinin oğlunun "Sen soylu birinin oğlunu nasıl geçersin!" diyerek gence haksızlık etmesi -> Gencin çölleri aşıp Medine'ye, Hz. Ömer'e şikâyete gelişi -> Vali ve oğlunun Medine'ye çağrılması -> **Büyük Kader Anı:** Güçlü bir valinin oğlu suçlu bulunduğunda nasıl hüküm verirsin? -> Tarihe geçen *"Annelerinden özgür doğan insanları ne zamandan beri köleleştirdiniz?"* hitabı ve hakkın teslimi.
  - *Ödül Eser:* **Adalet Asası**

#### 2. Selahaddin Eyyubi (`id: "selahaddin-eyyubi"`, `visualMode: "CHARACTER_PORTRAIT"`)
- **Bölüm 1: "Kudüs Önlerinde Beklenmedik Hediye: Kar ve İki Arap Atı" (9 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Akka ve Kudüs önlerindeki kuşatma -> Gözcülerin Kral Richard'ın ateşler içinde yattığını ve savaş atının düştüğünü haber vermesi -> Savaş divanındaki komutanların "Hemen baskın yapalım" ısrarı -> Ara Karar (*"Casus mu gönderirsin, hekim mi?"*) -> **Büyük Kader Anı:** Hermon Dağı'ndan getirilen kar kütleleri, taze şeftali/armutlar ve iki asil Arap atının düşman kralına gönderilmesi -> Richard'ın şaşkınlığı ve mertlik dersi.
  - *Ödül Eser:* **Mertlik Sancağı ve Altın Üzengi**
- **Bölüm 2: "Savaş Ortasında Kaybolan Bebek" (8 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Kuşatma sırasında karşı kamptan ağlayarak İslam ordusunun çadırlarına gelen Hristiyan bir anne -> Kadının 3 aylık bebeğinin kargaşada kaybolduğunu ve çalındığını söylemesi -> Selahaddin'in gözyaşları içinde kendi muhafızlarını seferber etmesi -> Bebeğin pazarda bulunup satın alınan kişiye parasının Selahaddin'in kendi cebinden ödenmesi -> Bebeğin annesine kendi atıyla geri gönderilmesi.
  - *Ödül Eser:* **Merhamet Madalyonu**
- **Bölüm 3: "Kudüs Kapıları Açılırken: İntikam mı, Eman mı?" (9 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* 88 yıl sonra Kudüs'ün geri alınışı -> Daha önce şehir alındığında yaşanan acıları hatırlatan komutanların sertlik isteği -> **Büyük Kader Anı:** Güç elindeyken şehirdeki sivillere ve mabetlere nasıl davranırsın? -> Herkese can ve mal güvenliği (Eman) verilmesi, fidye ödeyemeyen yoksulların ücretini Selahaddin ve kardeşi Melik Âdil'in kendi hazinelerinden ödemesi.
  - *Ödül Eser:* **Zeytin Dalı Mührü**

#### 3. Fatih Sultan Mehmed (`id: "fatih-sultan-mehmed"`, `visualMode: "CHARACTER_PORTRAIT"`)
- **Bölüm 1: "Kırmızı Defterin Sırrı ve Karadan Yürüyen Gemiler" (9 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Çocukluğundan beri tuttuğu çizim defteri, matematik ve mühendislik çalışmaları -> Haliç'e gerilen devasa zincir -> Komutanların "Haliç'e girilemez" umutsuzluğu -> Tophane sırtlarından Kasımpaşa'ya döşenen yağlı kızaklar -> **Büyük Kader Anı:** Rüzgâr yokken ve dağ dikken gemileri nasıl aşırırsın? -> Yelkenleri açılmış 70 geminin bir gecede tepelerden Haliç'e indirilmesi.
  - *Ödül Eser:* **Fatih'in Çizim Defteri ve Pergeli**
- **Bölüm 2: "Kadı Hızır Çelebi'nin Mahkemesinde Padişah" (8 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* İstanbul'un imarı sırasında Rum mimar İpsilanti ile yaşanan anlaşmazlık -> Mimarın Padişahı İstanbul Kadısı Hızır Çelebi'ye dava etmesi -> Fatih'in mahkemeye gelip başköşeye oturmak istemesi -> Kadı Hızır Çelebi'nin *"Beyim! Mahkemede davacı ile davalı eşit durur, ayağa kalkınız!"* uyarısı -> **Büyük Kader Anı:** Koskoca Cihan Padişahısın, hakimin bu sözüne ne tepki verirsin? -> Fatih'in derhal ayağa kalkıp hükmü kabul etmesi ve adalete duyduğu saygı.
  - *Ödül Eser:* **Adalet Terazisi Mührü**

---

### SINIF 2: BİLİM VE İCAT DEHALARI (`BILIM_ICAT`)

#### 4. El-Cezerî (`id: "el-cezeri"`, `visualMode: "CHARACTER_PORTRAIT"`)
- **Bölüm 1: "Artuklu Sarayında Zamanı Ölçen Fil Saati" (9 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Diyarbakır Artuklu Sarayı atölyesi -> Elektrik ve pil olmadan 24 saat kesintisiz çalışacak otomat arayışı -> Delikli bakır şamandıra (tarjahar) fiziği -> Farklı medeniyetlerin sembollerini (Hint fili, Çin ejderhaları, Mısır Zümrüdüanka kuşu, İslam kubbesi) birleştirme fikri -> **Büyük Kader Anı:** Suyun kaldırma kuvvetini harekete ve sese nasıl dönüştürürsün?
  - *Ödül Eser:* **Mekanik Fil Saati**
- **Bölüm 2: "Şifreli Kilit ve Suyu Yukarı Taşıyan Çark" (8 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Saray hazinesi için anahtarsız açılan 4 halkalı harf şifreli kilit (bugünkü şifreli çantaların atası) -> Nehir suyunu tepeye çıkarmak için krank mili (crankshaft) mekanizmasının icadı -> Krank milinin yüzyıllar sonra trenlerin ve otomobil motorlarının kalbi oluşu.
  - *Ödül Eser:* **Altın Krank Mili ve Şifreli Kutu**

#### 5. İbnü'l-Heysem (`id: "ibnul-heysem"`, `visualMode: "CHARACTER_PORTRAIT"`)
- **Bölüm 1: "Karanlık Odadaki Işık Hüzmesi: Kameranın Doğuşu" (9 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Kahire'de herkesin "Gözümüzden görünmez ışınlar çıkar ve nesnelere çarpar" (Eski Yunan teorisi) sandığı dönem -> İbnü'l-Heysem'in "Eğer gözümüzden ışık çıksaydı karanlıkta da görürdük!" sorgulaması -> Kapkaranlık çadırına açılan küçücük bir delikten içeri süzülen ışığın dışarıdaki ağacı duvara baş aşağı yansıtması -> **Büyük Kader Anı:** Işığın düz çizgide yayıldığını kanıtlamak için hangi deneyi kurarsın? -> *Beytü'l-Muzlim* (Camera Obscura) ve fotoğraf makinesinin atası.
  - *Ödül Eser:* **Karanlık Oda Merceği (Camera Obscura)**
- **Bölüm 2: "Şüphe Etmekten Korkmayan Bilgin" (8 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Gökkuşağının nasıl oluştuğunu anlamak için içi su dolu cam kürelerle yaptığı kırılma deneyleri -> *"Gerçeği arayan kişi, eski kitaplarda yazılan her şeye körü körüne inanmaz; deney yapar ve kanıt arar!"* ilkesi -> Modern bilimsel yöntemin doğuşu.
  - *Ödül Eser:* **Kristal Işık Prizması**

---

### SINIF 3: BİLİNMEYENE GİDEN KAŞİFLER (`KESIF_SEYYAH`)

#### 6. İbn Battuta (`id: "ibn-battuta"`, `visualMode: "CHARACTER_PORTRAIT"`)
- **Bölüm 1: "21 Yaşında Tek Başına: 120 Bin Kilometrelik Yolculuk" (9 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Fas'ın Tanca şehrinden anne-babasıyla vedalaşıp yola çıkışı -> Kendi kendine verdiği söz: *"Geçtiğim hiçbir yoldan ikinci kez geçmeyeceğim!"* -> Çöl fırtınaları, Şam kervanları ve Kızıldeniz'de fırtınaya yakalanan gemi -> **Büyük Kader Anı:** Gemin fırtınada parçalandığında ve sahilde tek başına kaldığında geri mi dönersin, yeni bir rota mı çizersin?
  - *Ödül Eser:* **Seyyahın Deri Günlüğü (Rıhle)**
- **Bölüm 2: "Maldiv Adaları'ndan Çin'e Uzanan Gizem" (8 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Hindistan'dan Maldivler'e ve Çin'e uzanan 29 yıllık serüven -> Farklı dilleri, yemekleri ve kültürleri ön yargısızca not alması -> Marco Polo'nun gezdiği yolun 3 katını aşarak tarihin en büyük gezgini oluşu.
  - *Ödül Eser:* **Okyanus Usturlabı**

#### 7. Piri Reis (`id: "piri-reis"`, `visualMode: "CHARACTER_PORTRAIT"`)
- **Bölüm 1: "Ceylan Derisindeki Kayıp Kıta Haritası" (9 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Gelibolu'daki kulesinde amcası Kemal Reis ile denizlerden topladıkları 20'den fazla eski haritayı incelemesi -> Farklı ölçeklerdeki Arap, Portekiz ve Kristof Kolomb haritalarını matematiksel rüzgâr gülleriyle tek bir ceylan derisinde birleştirmesi -> **Büyük Kader Anı:** Birbiriyle çelişen iki deniz haritası bulduğunda hangisine güvenirsin? -> 1513 Dünya Haritası ve Kitab-ı Bahriye.
  - *Ödül Eser:* **Piri Reis Pusulası ve Ceylan Derisi Harita**
- **Bölüm 2: "Fırtınalı Denizde Yıldızları Okumak" (8 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Gece zifiri karanlıkta pusula şaştığında Kutup Yıldızı ve Kamal aletiyle enlem hesaplama -> Sığ kayalıkları ve akıntıları gelecekteki denizciler boğulmasın diye tek tek *Kitab-ı Bahriye*'ye çizmesi.
  - *Ödül Eser:* **Denizci Kamal Aleti**

---

### SINIF 4: MEDENİYET VE İYİLİK MİMARLARI (`MEDENIYET_IYILIK`)

#### 8. Fatıma el-Fihrî & Mimar Sinan (`id: "medeniyet-mimarlari"`, `visualMode: "CHARACTER_PORTRAIT"`)
- **Bölüm 1 (Fatıma el-Fihrî): "Fas Sokaklarında Yükselen Bilgi Kalesi: Karaviyyin" (9 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Fes şehrinde babasından kalan devasa miras -> Kardeşi Meryem ile aldıkları karar -> İnşaat için gereken toprağın kendi bahçesinden çıkarılması (kimseye yük olmamak için) -> 18 yıl süren inşaat boyunca gösterdiği sabır ve vizyon -> Dünyanın ilk üniversitesi Karaviyyin'in kapılarının tüm bilim dallarına açılması.
  - *Ödül Eser:* **Karaviyyin Altın Anahtarı**
- **Bölüm 2 (Mimar Sinan): "Süleymaniye'de Nargile Fokurtusu ve Devekuşu Yumurtası" (9 Sahne + 2 Karar Anı)**
  - *Sahne Akışı:* Mimar Sinan'ın Süleymaniye Camii'nin ortasında nargile fokurdattığını gören rakiplerinin Kanuni'ye "Sinan camide keyif çatıyor" diye dedikodu yapması -> Kanuni Sultan Süleyman'ın hışımla camiye gelişi -> Mimar Sinan'ın nargilede tütün bile olmadığını, sadece suyun fokurtu sesinin kubbedeki 65 boş küpten nasıl yankılandığını (akustik mühendisliği) test ettiğini göstermesi -> Avizelerin arasına konan devekuşu yumurtalarının örümcekleri camiden uzak tutma sırrı ve minarelerin altına yerleştirilen deprem terazileri!
  - *Ödül Eser:* **Mimar Sinan'ın Akustik Küpü ve Devekuşu Yumurtası**