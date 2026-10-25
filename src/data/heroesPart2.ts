import { HeroData } from "./storyTypes";

export const HEROES_PART_2: HeroData[] = [
  // ==========================================================================
  // 9. KAHRAMAN: İBNÜ'L-HEYSEM (2 BÖLÜM - 9'AR SAHNE)
  // ==========================================================================
  {
    id: "ibnul-heysem",
    name: "İbnü'l-Heysem",
    heroClass: "BILIM_DENEY",
    heroClassLabel: "Bilim ve Deney",
    classBadgeLabel: "Bilim ve Deney",
    title: "Optik Biliminin ve Kameranın Babası",
    era: "965 – 1040 (Basra & Kahire)",
    location: "Kahire",
    visualMode: "CHARACTER_PORTRAIT",
    coverImage: "assets/images/ibnul_heysem_hero.png",
    crisisImage: "assets/images/ibnul_heysem_rainbow.png",
    images: {
      cover: "assets/images/ibnul_heysem_hero.png",
      crisis: "assets/images/ibnul_heysem_rainbow.png",
      artifact: "assets/images/ibnul_heysem_rainbow.png",
    },
    accentColor: "#06B6D4",
    secondaryColor: "#F59E0B",
    badgeText: "Optik, Kamera & Deney",
    summary:
      "Bin yıl önce Kahire'de karanlık odasına süzülen küçük bir ışık hüzmesiyle 'Camera Obscura'yı (Karanlık Oda) keşfeden ve deneysel bilimsel yöntemi kuran büyük fizikçi.",
    shortBio:
      "Bin yıl önce Kahire'de karanlık odasına süzülen küçük bir ışık hüzmesiyle 'Camera Obscura'yı (Karanlık Oda) keşfeden ve deneysel bilimsel yöntemi kuran büyük fizikçi.",
    chapters: [
      // ------------------------------------------------------------------------
      // İBNÜ'L-HEYSEM - BÖLÜM 1: KARANLIK ÇADIRDA KAMERANIN DOĞUŞU (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "ibnul-heysem-ch1",
        heroId: "ibnul-heysem",
        chapterNumber: 1,
        title: "Karanlık Çadırda Kameranın Doğuşu",
        subtitle: "Gözümüzden ışık çıkmaz; ışık nesnelerden yansıyıp gözümüze gelir!",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "heysem-ch1-s1",
            sceneNumber: 1,
            title: "Kahire'de Bin Yıllık Yanılgı",
            narration:
              "On birinci yüzyılın başlarında Mısır'ın Kahire şehrinde güneş Nil Nehri'nin sularını altın gibi parlatıyordu. O dönemde yaşayan hemen herkes, Eski Yunan filozofları Öklid ve Batlamyus'un kitaplarında yazan bir teoriye körü körüne inanıyordu. Bu eski teoriye göre insan gözünden dışarıya görünmez ışık ışınları çıkıyor, bu ışınlar elmaya veya ağaca çarpıp geri dönünce görme olayı gerçekleşiyordu! Ancak Basralı bilgin Hasan İbnü'l-Heysem bu açıklamadan hiç tatmin olmamıştı.\n\nKapkaranlık çadırın bezindeki küçücük delikten içeri süzülen altın sarısı ışık hüzmesi, havadaki toz zerrelerini aydınlatarak karşı duvara mucizevi bir görüntü düşürüyordu. O an Kahire'de kurulan karanlık deney çadırında (Beytü'l-Muzlim) ve ışık kırılma laboratuvarında hissedilen eski kabulleri sorgulayan bilimsel şüphe, deney tutkusu ve gerçeği kanıtlama heyecanı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "On birinci yüzyılın başlarında Mısır'ın Kahire şehrinde güneş Nil Nehri'nin sularını altın gibi parlatıyordu. O dönemde yaşayan hemen herkes, Eski Yunan filozofları Öklid ve Batlamyus'un kitaplarında yazan bir teoriye körü körüne inanıyordu. Bu eski teoriye göre insan gözünden dışarıya görünmez ışık ışınları çıkıyor, bu ışınlar elmaya veya ağaca çarpıp geri dönünce görme olayı gerçekleşiyordu! Ancak Basralı bilgin Hasan İbnü'l-Heysem bu açıklamadan hiç tatmin olmamıştı.\n\nKapkaranlık çadırın bezindeki küçücük delikten içeri süzülen altın sarısı ışık hüzmesi, havadaki toz zerrelerini aydınlatarak karşı duvara mucizevi bir görüntü düşürüyordu. O an Kahire'de kurulan karanlık deney çadırında (Beytü'l-Muzlim) ve ışık kırılma laboratuvarında hissedilen eski kabulleri sorgulayan bilimsel şüphe, deney tutkusu ve gerçeği kanıtlama heyecanı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Bir fikrin bin yıllık kitaplarda yazıyor olması onun kesin doğru olduğu anlamına gelmez; aklımızla sorgulamalı ve deneyle sınamalıyız!",
            historicalNote:
              "Bunu Biliyor muydun? Batı dünyasında 'Alhazen' adıyla tanınan İbnü'l-Heysem (965–1040), modern optik biliminin kurucusu kabul edilir.",
            imagePath: "assets/images/ibnul_heysem_hero.png",
            imageKey: "assets/images/ibnul_heysem_hero.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Güneş ışığı süzülen çalışma odasında düşünen bilgin.",
          },
          {
            id: "heysem-ch1-s2",
            sceneNumber: 2,
            title: "Karanlıkta Neden Göremiyoruz?",
            narration:
              "İbnü'l-Heysem Ezher Camii yakınlarındaki mütevazı çalışma odasında öğrencilerine çok basit ama sarsıcı iki soru sordu. Eğer gerçekten gözümüzden fener gibi görünmez ışınlar çıkıyor olsaydı, geceleri zifiri karanlık bir odaya girdiğimizde de her yeri rahatça görmemiz gerekmez miydi? Üstelik öğle vakti parlak güneşe baktığımızda neden gözlerimiz kamaşıyor ve acıyordu? Demek ki ışık gözümüzden çıkmıyor, dışarıdan gözümüzün içine giriyordu!\n\nDışarıdaki hurma ağacının duvarda baş aşağı beliren net yansıması, insanlığın görme ve ışık hakkındaki bin yıllık yanılgısını tek bir deneyle ortadan kaldırıyordu. Tarihin bu unutulmaz dönemeç noktasında, eski kabulleri sorgulayan bilimsel şüphe, deney tutkusu ve gerçeği kanıtlama heyecanı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "İbnü'l-Heysem Ezher Camii yakınlarındaki mütevazı çalışma odasında öğrencilerine çok basit ama sarsıcı iki soru sordu. Eğer gerçekten gözümüzden fener gibi görünmez ışınlar çıkıyor olsaydı, geceleri zifiri karanlık bir odaya girdiğimizde de her yeri rahatça görmemiz gerekmez miydi? Üstelik öğle vakti parlak güneşe baktığımızda neden gözlerimiz kamaşıyor ve acıyordu? Demek ki ışık gözümüzden çıkmıyor, dışarıdan gözümüzün içine giriyordu!\n\nDışarıdaki hurma ağacının duvarda baş aşağı beliren net yansıması, insanlığın görme ve ışık hakkındaki bin yıllık yanılgısını tek bir deneyle ortadan kaldırıyordu. Tarihin bu unutulmaz dönemeç noktasında, eski kabulleri sorgulayan bilimsel şüphe, deney tutkusu ve gerçeği kanıtlama heyecanı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Düşünün gençler: Gözümüzden ışık çıksaydı gece karanlığında da görürdük! Gece gökyüzündeki binlerce uzaktaki yıldızı aydınlatacak ışın küçücük gözümüzden nasıl çıkabilir?",
            historicalNote:
              "Bunu Biliyor muydun? İbnü'l-Heysem bu mantıksal kanıtlarıyla yaklaşık 1300 yıl boyunca doğru sanılan 'Gözden Işın Çıkma (Emission)' teorisini tarihte ilk kez çürütmüştür.",
            imagePath: "assets/images/heysem_s1_dark_tent_pinhole.png",
            imageKey: "assets/images/heysem_s1_dark_tent_pinhole.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Masa üzerinde çizilen göz küresi ve ışık açıları.",
          },
          {
            id: "heysem-ch1-s3",
            sceneNumber: 3,
            title: "Karanlık Oda ve Küçük Delik",
            narration:
              "Sadece mantık yürütmek İbnü'l-Heysem için yeterli değildi; gerçeği herkesin gözüyle görebileceği bir deneyle kanıtlamalıydı! Odasının bütün pencerelerini kalın siyah keçelerle kapattı ve içeriyi zifiri karanlık hale getirdi. Ardından güneşe bakan ahşap kepengin tam ortasına sadece bezelye tanesi büyüklüğünde küçücük bir delik açtı. O anda karanlığın içinden süzülen incecik bir ışık hüzmesi karşıdaki beyaz duvara vurdu!\n\nSu dolu cam kürelerden geçen güneş ışığının yedi renge ayrıldığı o büyüleyici an, doğanın sırlarının ancak dikkatli gözlem ve matematiksel kanıtla çözülebileceğini gösteriyordu. Çevredeki her detay, Kahire'de kurulan karanlık deney çadırında (Beytü'l-Muzlim) ve ışık kırılma laboratuvarında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Sadece mantık yürütmek İbnü'l-Heysem için yeterli değildi; gerçeği herkesin gözüyle görebileceği bir deneyle kanıtlamalıydı! Odasının bütün pencerelerini kalın siyah keçelerle kapattı ve içeriyi zifiri karanlık hale getirdi. Ardından güneşe bakan ahşap kepengin tam ortasına sadece bezelye tanesi büyüklüğünde küçücük bir delik açtı. O anda karanlığın içinden süzülen incecik bir ışık hüzmesi karşıdaki beyaz duvara vurdu!\n\nSu dolu cam kürelerden geçen güneş ışığının yedi renge ayrıldığı o büyüleyici an, doğanın sırlarının ancak dikkatli gözlem ve matematiksel kanıtla çözülebileceğini gösteriyordu. Çevredeki her detay, Kahire'de kurulan karanlık deney çadırında (Beytü'l-Muzlim) ve ışık kırılma laboratuvarında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Duvara bakın! Dışarıdaki hurma ağacının ve avludaki yapıların renkli görüntüsü karşı duvara baş aşağı olarak yansıdı!",
            historicalNote:
              "Bunu Biliyor muydun? İbnü'l-Heysem'in deney yaptığı bu karanlık odaya Arapçada 'Beytü'l-Muzlim' denir; Latinceye 'Camera Obscura' olarak çevrilmiş ve bugünkü 'Kamera' kelimesi buradan doğmuştur!",
            imagePath: "assets/images/ibnul_heysem_rainbow.png",
            imageKey: "assets/images/ibnul_heysem_rainbow.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Karanlık odada parlayan ışık hüzmesi ve optik çizimler.",
          },
          {
            id: "heysem-ch1-s4",
            sceneNumber: 4,
            title: "Duvardaki Görüntü Neden Baş Aşağı?",
            narration:
              "Karanlık odanın içindeki beyaz duvara bakan çırağı şaşkınlıkla elini ağzına götürdü. Dışarıdaki güneşli avluda duran hurma ağacının yaprakları duvarda aşağıda, kökleri ise yukarıda görünüyordu! Yani görüntü tamamen ters dönmüştü! İbnü'l-Heysem tebessüm ederek eline bir cetvel ve tebeşir aldı; görüntünün neden ters çıktığını açıklayan fizik kuralını göstermeye hazırlandı.\n\nMum ışığında kaleme alınan Kitâbü'l-Menâzır sayfaları, 'şüphe etmekten korkma, deney yap ve kanıt ara' ilkesiyle modern bilimsel yöntemin temel taşlarını döşüyordu. Sabır, dikkat ve samimiyetle atılan bu adım, eski kabulleri sorgulayan bilimsel şüphe, deney tutkusu ve gerçeği kanıtlama heyecanı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Karanlık odanın içindeki beyaz duvara bakan çırağı şaşkınlıkla elini ağzına götürdü. Dışarıdaki güneşli avluda duran hurma ağacının yaprakları duvarda aşağıda, kökleri ise yukarıda görünüyordu! Yani görüntü tamamen ters dönmüştü! İbnü'l-Heysem tebessüm ederek eline bir cetvel ve tebeşir aldı; görüntünün neden ters çıktığını açıklayan fizik kuralını göstermeye hazırlandı.\n\nMum ışığında kaleme alınan Kitâbü'l-Menâzır sayfaları, 'şüphe etmekten korkma, deney yap ve kanıt ara' ilkesiyle modern bilimsel yöntemin temel taşlarını döşüyordu. Sabır, dikkat ve samimiyetle atılan bu adım, eski kabulleri sorgulayan bilimsel şüphe, deney tutkusu ve gerçeği kanıtlama heyecanı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Genç Çırak",
            dialogue:
              "Üstadım, bu nasıl olur? Dışarıdaki ağaç düz duruyor ama küçük delikten geçen ışık ağacı duvara tepe taklak çiziyor!",
            historicalNote:
              "Bunu Biliyor muydun? İnsan gözünün içindeki göz bebeği de tıpkı İbnü'l-Heysem'in karanlık odası gibi çalışır; görüntü ağ tabakaya (retinaya) ters düşer ve beynimiz onu düzeltir!",
            imagePath: "assets/images/harizmi_s1_house_of_wisdom.png",
            imageKey: "assets/images/harizmi_s1_house_of_wisdom.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Cetvel ve pergel ile ışık doğrularını gösteren bilgin.",
            midDecision: {
              title: "ARA KARAR: Görüntü Neden Ters Döndü?",
              question:
                "Küçücük bir delikten karanlık odaya giren ışık, dışarıdaki ağacı duvara neden baş aşağı (ters) yansıtır?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Işık delikten geçerken rüzgârla kıvrılıp takla attığı için ters döner.",
                  feedback:
                    "Işık rüzgârla kıvrılmaz! Işığın nasıl ilerlediğini bir cetvelin düz kenarı gibi düşünmelisin.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Işık her zaman dümdüz çizgiler halinde yayılır! Ağacın tepesinden gelen ışık düz inip duvarın altına, kökünden gelen ışık düz çıkıp duvarın üstüne vurur!",
                  feedback:
                    "Harika çıkarım! İbnü'l-Heysem ışığın doğrusal (düz çizgi halinde) yayıldığını böylece matematiksel olarak kanıtladı.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "heysem-ch1-s5",
            sceneNumber: 5,
            title: "Beş Mumlu Efsanevi Deney",
            narration:
              "İbnü'l-Heysem bu kuralı kesinleştirmek için tarihin en ünlü optik deneyini kurdu. Karanlık odanın dışına yan yana beş adet yanan mum dizdi. Mumların alevlerinden çıkan ışıklar küçük delikten geçip içerideki duvarda beş parlak nokta oluşturdu. Sonra dışarıdaki en sağdaki mumu eliyle kapattığında, içerideki duvarda en soldaki ışık noktasının söndüğünü gösterdi! Elinin çektiğinde ise nokta tekrar belirdi.\n\nKapkaranlık çadırın bezindeki küçücük delikten içeri süzülen altın sarısı ışık hüzmesi, havadaki toz zerrelerini aydınlatarak karşı duvara mucizevi bir görüntü düşürüyordu. O an Kahire'de kurulan karanlık deney çadırında (Beytü'l-Muzlim) ve ışık kırılma laboratuvarında hissedilen eski kabulleri sorgulayan bilimsel şüphe, deney tutkusu ve gerçeği kanıtlama heyecanı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "İbnü'l-Heysem bu kuralı kesinleştirmek için tarihin en ünlü optik deneyini kurdu. Karanlık odanın dışına yan yana beş adet yanan mum dizdi. Mumların alevlerinden çıkan ışıklar küçük delikten geçip içerideki duvarda beş parlak nokta oluşturdu. Sonra dışarıdaki en sağdaki mumu eliyle kapattığında, içerideki duvarda en soldaki ışık noktasının söndüğünü gösterdi! Elini çektiğinde ise nokta tekrar belirdi.\n\nKapkaranlık çadırın bezindeki küçücük delikten içeri süzülen altın sarısı ışık hüzmesi, havadaki toz zerrelerini aydınlatarak karşı duvara mucizevi bir görüntü düşürüyordu. O an Kahire'de kurulan karanlık deney çadırında (Beytü'l-Muzlim) ve ışık kırılma laboratuvarında hissedilen eski kabulleri sorgulayan bilimsel şüphe, deney tutkusu ve gerçeği kanıtlama heyecanı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Gördünüz mü? Beş mumun ışığı da aynı küçücük delikten aynı anda geçiyor ama birbirine hiç karışmadan dümdüz yoluna devam ediyor!",
            historicalNote:
              "Bunu Biliyor muydun? İbnü'l-Heysem'in bu 'Beş Mum Deneyi', ışık ışınlarının aynı noktadan geçerken bile birbirini bozmadığını kanıtlayan ilk laboratuvar deneyidir.",
            imagePath: "assets/images/ibn_sina_s1_bukhara_library.png",
            imageKey: "assets/images/ibn_sina_s1_bukhara_library.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Mum ışığında parlayan optik deney masası.",
          },
          {
            id: "heysem-ch1-s6",
            sceneNumber: 6,
            title: "Gözün Anatomisini Çizen Bilgin",
            narration:
              "Karanlık odanın sırrını çözen İbnü'l-Heysem, insan gözünün de aslında minik bir 'Karanlık Oda' olduğunu fark etti! Masasına oturup gözün tabakalarını, korneayı, göz bebeğini, merceği ve görüntüyü beyne taşıyan optik sinirleri büyük bir titizlikle çizdi. Görmenin gözden çıkan ışınlarla değil, nesnelerden yansıyan ışığın göz bebeğinden içeri girmesiyle gerçekleştiğini bütün dünyaya ilan etti.\n\nDışarıdaki hurma ağacının duvarda baş aşağı beliren net yansıması, insanlığın görme ve ışık hakkındaki bin yıllık yanılgısını tek bir deneyle ortadan kaldırıyordu. Tarihin bu unutulmaz dönemeç noktasında, eski kabulleri sorgulayan bilimsel şüphe, deney tutkusu ve gerçeği kanıtlama heyecanı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Karanlık odanın sırrını çözen İbnü'l-Heysem, insan gözünün de aslında minik bir 'Karanlık Oda' olduğunu fark etti! Masasına oturup gözün tabakalarını, korneayı, göz bebeğini, merceği ve görüntüyü beyne taşıyan optik sinirleri büyük bir titizlikle çizdi. Görmenin gözden çıkan ışınlarla değil, nesnelerden yansıyan ışığın göz bebeğinden içeri girmesiyle gerçekleştiğini bütün dünyaya ilan etti.\n\nDışarıdaki hurma ağacının duvarda baş aşağı beliren net yansıması, insanlığın görme ve ışık hakkındaki bin yıllık yanılgısını tek bir deneyle ortadan kaldırıyordu. Tarihin bu unutulmaz dönemeç noktasında, eski kabulleri sorgulayan bilimsel şüphe, deney tutkusu ve gerçeği kanıtlama heyecanı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Göz bebeğimiz karanlık odanın küçük deliği gibidir; dışarıdaki dünyadan yansıyan ışık göz merceğimizden geçerek içerde görüntü oluşturur!",
            historicalNote:
              "Bunu Biliyor muydun? İbnü'l-Heysem'in Kitâbü'l-Menâzır'da çizdiği göz anatomisi şeması, yüzyıllar boyunca hem İslam dünyasında hem Avrupa tıp fakültelerinde ders kitabı olarak okutulmuştur.",
            imagePath: "assets/images/ibn_sina_s2_canon_of_medicine.png",
            imageKey: "assets/images/ibn_sina_s2_canon_of_medicine.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Parşömen üzerinde göz merceği ve ışık kırılma şemaları.",
          },
          {
            id: "heysem-ch1-s7",
            sceneNumber: 7,
            title: "Güneş Tutulmasını Duvara Yansıtmak",
            narration:
              "Bir gün Kahire semalarında kısmi Güneş tutulması yaşandığında İbnü'l-Heysem çıplak gözle güneşe bakmanın göze zarar vereceğini biliyordu. Hemen karanlık odasına girdi ve kepenkteki küçük delikten süzülen güneş ışığının karşı duvarda oluşturduğu şekli inceledi. Duvarda hilal şeklinde parlayan güneş görüntüsünü kurşun kalemle çizerek tutulmanın evrelerini güvenli ve matematiksel bir şekilde kaydetti!\n\nSu dolu cam kürelerden geçen güneş ışığının yedi renge ayrıldığı o büyüleyici an, doğanın sırlarının ancak dikkatli gözlem ve matematiksel kanıtla çözülebileceğini gösteriyordu. Çevredeki her detay, Kahire'de kurulan karanlık deney çadırında (Beytü'l-Muzlim) ve ışık kırılma laboratuvarında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Bir gün Kahire semalarında kısmi Güneş tutulması yaşandığında İbnü'l-Heysem çıplak gözle güneşe bakmanın göze zarar vereceğini biliyordu. Hemen karanlık odasına girdi ve kepenkteki küçük delikten süzülen güneş ışığının karşı duvarda oluşturduğu şekli inceledi. Duvarda hilal şeklinde parlayan güneş görüntüsünü kurşun kalemle çizerek tutulmanın evrelerini güvenli ve matematiksel bir şekilde kaydetti!\n\nSu dolu cam kürelerden geçen güneş ışığının yedi renge ayrıldığı o büyüleyici an, doğanın sırlarının ancak dikkatli gözlem ve matematiksel kanıtla çözülebileceğini gösteriyordu. Çevredeki her detay, Kahire'de kurulan karanlık deney çadırında (Beytü'l-Muzlim) ve ışık kırılma laboratuvarında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Güneş tutulması sırasında delikten geçen ışık duvarda hilal şeklini alıyor; bu da deliğin küçük, ışık kaynağının ise devasa olduğunu kanıtlar!",
            historicalNote:
              "Bunu Biliyor muydun? Bugün bile astronomlar Güneş tutulmalarını izlemek için İbnü'l-Heysem'in 1000 yıl önce kullandığı bu 'İğne Delikli Projeksiyon (Pinhole Camera)' yöntemini kullanırlar!",
            imagePath: "assets/images/harizmi_s2_sundial_observatory.png",
            imageKey: "assets/images/harizmi_s2_sundial_observatory.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Pencereden süzülen güneş hüzmesi ve astronomi araçları.",
          },
          {
            id: "heysem-ch1-s8",
            sceneNumber: 8,
            title: "Yedi Ciltlik Başyapıt: Kitâbü'l-Menâzır",
            narration:
              "İbnü'l-Heysem yıllar süren karanlık oda, ayna, mercek ve ışık kırılması deneylerini yedi ciltlik dev eseri 'Kitâbü'l-Menâzır'da (Optik Kitabı) topladı. Kitabında sadece sonuçları yazmakla kalmadı; deney aletlerinin nasıl yapılacağını, bakır boruların ve ahşap cetvellerin hangi ölçülerde kesileceğini adım adım anlattı ki dünyanın her yerindeki bilim insanları aynı deneyleri tekrarlayabilsin.\n\nMum ışığında kaleme alınan Kitâbü'l-Menâzır sayfaları, 'şüphe etmekten korkma, deney yap ve kanıt ara' ilkesiyle modern bilimsel yöntemin temel taşlarını döşüyordu. Sabır, dikkat ve samimiyetle atılan bu adım, eski kabulleri sorgulayan bilimsel şüphe, deney tutkusu ve gerçeği kanıtlama heyecanı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "İbnü'l-Heysem yıllar süren karanlık oda, ayna, mercek ve ışık kırılması deneylerini yedi ciltlik dev eseri 'Kitâbü'l-Menâzır'da (Optik Kitabı) topladı. Kitabında sadece sonuçları yazmakla kalmadı; deney aletlerinin nasıl yapılacağını, bakır boruların ve ahşap cetvellerin hangi ölçülerde kesileceğini adım adım anlattı ki dünyanın her yerindeki bilim insanları aynı deneyleri tekrarlayabilsin.\n\nMum ışığında kaleme alınan Kitâbü'l-Menâzır sayfaları, 'şüphe etmekten korkma, deney yap ve kanıt ara' ilkesiyle modern bilimsel yöntemin temel taşlarını döşüyordu. Sabır, dikkat ve samimiyetle atılan bu adım, eski kabulleri sorgulayan bilimsel şüphe, deney tutkusu ve gerçeği kanıtlama heyecanı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Gerçek bilim gizlenmez! Deneylerimin her adımını açıkça yazıyorum ki benden sonra gelenler bizzat deneyerek doğruluğunu görsünler.",
            historicalNote:
              "Bunu Biliyor muydun? Kitâbü'l-Menâzır Latinceye 'De Aspectibus' ve 'Opticae Thesaurus' adıyla çevrilmiş; Johannes Kepler, Roger Bacon ve Leonardo da Vinci bu kitaptan ilham almıştır!",
            imagePath: "assets/images/harizmi_usturlap.png",
            imageKey: "assets/images/harizmi_usturlap.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Yedi ciltlik el yazması eserler ve optik aletler.",
          },
          {
            id: "heysem-ch1-s9",
            sceneNumber: 9,
            title: "Fotoğraf Makinesi ve Sinemanın Atası",
            narration:
              "İbnü'l-Heysem'in Kahire'de kurduğu o 'Beytü'l-Muzlim' yani Karanlık Oda, yüzyıllar sonra içine cam mercekler ve ışığa duyarlı filmler eklenerek fotoğraf makinesine, sinema kamerasına ve bugün cebimizde taşıdığımız telefon kameralarına dönüştü! Merak etmekten ve deney yapmaktan vazgeçmeyen büyük bilgin, insanlığa ışığın gerçek sırrını armağan etti.\n\nKapkaranlık çadırın bezindeki küçücük delikten içeri süzülen altın sarısı ışık hüzmesi, havadaki toz zerrelerini aydınlatarak karşı duvara mucizevi bir görüntü düşürüyordu. O an Kahire'de kurulan karanlık deney çadırında (Beytü'l-Muzlim) ve ışık kırılma laboratuvarında hissedilen eski kabulleri sorgulayan bilimsel şüphe, deney tutkusu ve gerçeği kanıtlama heyecanı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "İbnü'l-Heysem'in Kahire'de kurduğu o 'Beytü'l-Muzlim' yani Karanlık Oda, yüzyıllar sonra içine cam mercekler ve ışığa duyarlı filmler eklenerek fotoğraf makinesine, sinema kamerasına ve bugün cebimizde taşıdığımız telefon kameralarına dönüştü! Merak etmekten ve deney yapmaktan vazgeçmeyen büyük bilgin, insanlığa ışığın gerçek sırrını armağan etti.\n\nKapkaranlık çadırın bezindeki küçücük delikten içeri süzülen altın sarısı ışık hüzmesi, havadaki toz zerrelerini aydınlatarak karşı duvara mucizevi bir görüntü düşürüyordu. O an Kahire'de kurulan karanlık deney çadırında (Beytü'l-Muzlim) ve ışık kırılma laboratuvarında hissedilen eski kabulleri sorgulayan bilimsel şüphe, deney tutkusu ve gerçeği kanıtlama heyecanı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Küçücük bir delikten süzülen ışık, sabırla düşünen bir zihin için bütün evrenin sırlarını aydınlatmaya yeter!",
            historicalNote:
              "Bunu Biliyor muydun? UNESCO, İbnü'l-Heysem'in optik bilimine katkılarını onurlandırmak için 2015 yılını 'Uluslararası Işık Yılı' ilan etmiş ve onu tüm dünyaya tanıtmıştır.",
            imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
            imageKey: "assets/images/artifact_qarawiyyin_astrolabe.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Işık hüzmeleri arasında bilge İbnü'l-Heysem.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Çevrendeki herkes 'Gözümüzden görünmez ışınlar çıkar ve nesnelere çarparak görürüz' diyor. Işığın aslında dışarıdan gözümüze geldiğini ve düz çizgide yayıldığını kanıtlamak için ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Eski kitaplarda öyle yazdığı için sorgulamayı bırakıp herkes gibi düşünürüm.",
              feedback:
                "Bilim körü körüne inanmakla değil, sorgulamak ve kanıt aramakla ilerler!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Hiç deney yapmadan sadece kendi fikrimi anlatıp tartışırım.",
              feedback:
                "Deney ve kanıt olmadan söylenen sözler bilimde kesin hakikate ulaştırmaz.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Kapkaranlık bir oda (Beytü'l-Muzlim / Camera Obscura) kurup kepengine minik bir delik açarım; dışarıdaki mumların ve ağacın ışığının düz çizgilerle geçip duvara ters yansıdığını deneyle kanıtlarım!",
              feedback:
                "Tarihi Hakikat! İbnü'l-Heysem Karanlık Oda deneyiyle hem görmenin sırrını çözdü hem de modern kameranın temelini attı!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "İbnü'l-Heysem, 'Beytü'l-Muzlim' (Camera Obscura) adını verdiği karanlık oda deneyiyle ışığın nesnelerden doğrusal olarak yansıyıp gözümüze girdiğini kanıtladı. Bu buluş hem modern optik biliminin hem de bugünkü fotoğraf ve video kameralarının doğuşu oldu!",
          quoteHighlight:
            "Eğer gözümüzden ışık çıksaydı, geceleri zifiri karanlıkta da her şeyi görürdük!",
        },
        rewardArtifact: {
          id: "artifact-camera-obscura",
          name: "Karanlık Oda Merceği (Camera Obscura)",
          heroId: "ibnul-heysem",
          chapterId: "ibnul-heysem-ch1",
          imagePath: "assets/images/ibnul_heysem_hero.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik Puanı",
          points: 50,
          unlockedTitle: "Işık ve Optik Kaşifi",
          shortDescription:
            "İbnü'l-Heysem'in ışığın doğrusal yayıldığını kanıtladığı ve modern kameralara adını veren Beytü'l-Muzlim (Camera Obscura) düzeneği.",
          historicalNote:
            "Arapça 'Beytü'l-Muzlim' (Karanlık Oda) kavramı Latinceye 'Camera Obscura' olarak geçmiş ve dünyadaki tüm dillerde kullanılan 'Kamera' kelimesinin kökü olmuştur.",
          accentColor: "#06B6D4",
          hotspots: [
            {
              id: "pinhole-aperture",
              xPercent: 35,
              yPercent: 40,
              title: "İğne Deliği Diyaframı",
              secretFact:
                "Karanlık odaya açılan küçücük delik, ışık ışınlarının birbirine karışmadan düz çizgiler halinde geçmesini sağlar.",
            },
            {
              id: "inverted-projection",
              xPercent: 65,
              yPercent: 45,
              title: "Ters Görüntü Perdesi",
              secretFact:
                "Üstten gelen ışık alta, alttan gelen ışık üste düştüğü için dışarıdaki manzara karşı duvarda baş aşağı (ters) oluşur.",
            },
            {
              id: "five-candles",
              xPercent: 50,
              yPercent: 75,
              title: "Beş Mum Deneyi Düzeneği",
              secretFact:
                "İbnü'l-Heysem beş farklı mumun ışığının aynı delikten geçerken bile birbirini bozmadığını bu düzenekle kanıtlamıştır.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "İbnü'l-Heysem herkesin doğru sandığı bin yıllık bir fikri sorgulamasaydı bugün fotoğraf makineleri ve kameralar olabilir miydi?",
          "Bugün kullandığımız 'Kamera' kelimesinin İbnü'l-Heysem'in 'Karanlık Oda'sından geldiğini öğrendiğinde ne hissettin?",
          "Evde karton bir kutu ve küçük bir delik kullanarak kendi karanlık oda deneyimizi nasıl yapabiliriz?",
        ],
      },

      // ------------------------------------------------------------------------
      // İBNÜ'L-HEYSEM - BÖLÜM 2: GÖKKUŞAĞI DENEYİ VE BİLİMSEL YÖNTEM (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "ibnul-heysem-ch2",
        heroId: "ibnul-heysem",
        chapterNumber: 2,
        title: "Gökkuşağı Deneyi ve Kanıt Arayan Bilgin",
        subtitle: "Gerçeği arayan kişi, okuduğu her şeye körü körüne inanmaz; deney yapar!",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "heysem-ch2-s1",
            sceneNumber: 1,
            title: "Yağmur Sonrası Kahire Gökyüzü",
            narration:
              "Bahar yağmurunun ardından Kahire semalarında güneş tekrar yüzünü gösterdiğinde, Nil Nehri'nin üzerinde yedi renkli muazzam bir gökkuşağı belirdi. Sokaktaki insanlar gökkuşağının renklerine hayranlıkla bakarken, İbnü'l-Heysem kendi kendine şu bilimsel soruyu soruyordu: 'Gökyüzünde boya yok, fırça yok; peki beyaz güneş ışığı yağmur damlalarının arasından geçerken nasıl oluyor da kırmızı, sarı, yeşil ve mavi renklere ayrılıyor?'\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Bahar yağmurunun ardından Kahire semalarında güneş tekrar yüzünü gösterdiğinde, Nil Nehri'nin üzerinde yedi renkli muazzam bir gökkuşağı belirdi. Sokaktaki insanlar gökkuşağının renklerine hayranlıkla bakarken, İbnü'l-Heysem kendi kendine şu bilimsel soruyu soruyordu: 'Gökyüzünde boya yok, fırça yok; peki beyaz güneş ışığı yağmur damlalarının arasından geçerken nasıl oluyor da kırmızı, sarı, yeşil ve mavi renklere ayrılıyor?'\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Gökyüzündeki bu renkli kemer bir sihir değil, ışığın yağmur damlaları içindeki kırılma ve yansıma kanunudur! Bunu laboratuvarımızda yeniden oluşturmalıyız!",
            historicalNote:
              "Bunu Biliyor muydun? İbnü'l-Heysem ve ardından öğrencisi Kemâleddin el-Fârisî, gökkuşağının oluşumunu içi su dolu cam kürelerle laboratuvarda açıklayan ilk bilim insanlarıdır!",
            imagePath: "assets/images/ibnul_heysem_rainbow.png",
            imageKey: "assets/images/ibnul_heysem_rainbow.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Gökkuşağı renkleri ve cam kürelerle dolu bilim atölyesi.",
          },
          {
            id: "heysem-ch2-s2",
            sceneNumber: 2,
            title: "Su Dolu Cam Küre: Dev Yağmur Damlası!",
            narration:
              "Gökyüzündeki minik bir yağmur damlasını havada durdurup incelemek imkânsızdı. Bunun üzerine İbnü'l-Heysem harika bir deney modeli düşündü! Kahire'deki cam ustalarına pürüzsüz, şeffaf camdan yuvarlak bir küre üfletti ve içini berrak suyla doldurdu. Bu su dolu cam küre, aslında binlerce kat büyütülmüş dev bir yağmur damlasıydı! Küreyi karanlık odasındaki ışık hüzmesinin tam önüne yerleştirdi.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Gökyüzündeki minik bir yağmur damlasını havada durdurup incelemek imkânsızdı. Bunun üzerine İbnü'l-Heysem harika bir deney modeli düşündü! Kahire'deki cam ustalarına pürüzsüz, şeffaf camdan yuvarlak bir küre üfletti ve içini berrak suyla doldurdu. Bu su dolu cam küre, aslında binlerce kat büyütülmüş dev bir yağmur damlasıydı! Küreyi karanlık odasındaki ışık hüzmesinin tam önüne yerleştirdi.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Bulutlardaki küçük yağmur damlasına ulaşamıyorsak, su dolu bu cam küreyle yağmur damlasını odamızın içine getiririz!",
            historicalNote:
              "Bunu Biliyor muydun? Doğadaki büyük bir olayı anlamak için laboratuvarda onun küçük bir modelini kurmaya 'Bilimsel Modelleme' denir.",
            imagePath: "assets/images/heysem_s1_dark_tent_pinhole.png",
            imageKey: "assets/images/heysem_s1_dark_tent_pinhole.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Masa üzerinde parlayan su dolu cam küre ve bakır açıölçer.",
          },
          {
            id: "heysem-ch2-s3",
            sceneNumber: 3,
            title: "Sudaki Kaşık Neden Kırık Görünür?",
            narration:
              "Deney sırasında İbnü'l-Heysem ışığın havadan suya veya cama geçerken yön değiştirdiğini, yani 'kırıldığını' (inkisâr) inceledi. Tıpkı su dolu bir bardağın içine konan metal kaşığın dışarıdan bakıldığında bükülmüş gibi görünmesi gibi, ışık da yoğunluğu farklı bir ortama girdiğinde hızını ve açısını değiştiriyordu! Bakır halkalar üzerine dereceler kazıyarak gelen ışığın açısını ve kırılan ışığın açısını tek tek ölçtü.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Deney sırasında İbnü'l-Heysem ışığın havadan suya veya cama geçerken yön değiştirdiğini, yani 'kırıldığını' (inkisâr) inceledi. Tıpkı su dolu bir bardağın içine konan metal kaşığın dışarıdan bakıldığında bükülmüş gibi görünmesi gibi, ışık da yoğunluğu farklı bir ortama girdiğinde hızını ve açısını değiştiriyordu! Bakır halkalar üzerine dereceler kazıyarak gelen ışığın açısını ve kırılan ışığın açısını tek tek ölçtü.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Işık havadan suya girerken yavaşlar ve bükülür; sudan tekrar havaya çıkarken bir kez daha kırılır! İşte gökkuşağının ve merceklerin sırrı buradadır!",
            historicalNote:
              "Bunu Biliyor muydun? İbnü'l-Heysem ışığın kırılma açılarını ölçmek için özel bakır silindirler tasarlamış ve gözlük merceklerinin çalışma prensibine öncülük etmiştir.",
            imagePath: "assets/images/ibnul_heysem_hero.png",
            imageKey: "assets/images/ibnul_heysem_hero.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Dereceli bakır halkalar ve ışık kırılma çizimleri.",
          },
          {
            id: "heysem-ch2-s4",
            sceneNumber: 4,
            title: "Ufuktaki Ay Neden Kocaman Görünür?",
            narration:
              "Bir akşam öğrencileriyle terasa çıktıklarında yeni doğan dolunayın ufuk çizgisindeyken tepsi gibi kocaman, gece yarısı gökyüzünün tepesine çıktığında ise daha küçük göründüğünü fark ettiler. Herkes Ay'ın akşamları dünyaya yaklaştığını veya atmosferin onu büyüteç gibi büyüttüğünü sanıyordu. İbnü'l-Heysem ise elindeki yıldız ölçüm aletiyle Ay'ın çapını hem ufuktayken hem de tepedeyken ölçtü!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Bir akşam öğrencileriyle terasa çıktıklarında yeni doğan dolunayın ufuk çizgisindeyken tepsi gibi kocaman, gece yarısı gökyüzünün tepesine çıktığında ise daha küçük göründüğünü fark ettiler. Herkes Ay'ın akşamları dünyaya yaklaştığını veya atmosferin onu büyüteç gibi büyüttüğünü sanıyordu. İbnü'l-Heysem ise elindeki yıldız ölçüm aletiyle Ay'ın çapını hem ufuktayken hem de tepedeyken ölçtü!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Ölçüm aletimiz gösteriyor ki Ay'ın gerçek büyüklüğü ufukta da tepede de milimi milimine aynı! Peki neden gözümüz onu ufukta daha büyük görüyor?",
            historicalNote:
              "Bunu Biliyor muydun? İbnü'l-Heysem, 'Ay Yanılsaması (Moon Illusion)' adı verilen bu olayı beynimizin ufuktaki ağaç ve binalarla kıyaslama yapmasıyla açıklayan ilk bilim insanıdır!",
            imagePath: "assets/images/ibn_sina_s2_canon_of_medicine.png",
            imageKey: "assets/images/ibn_sina_s2_canon_of_medicine.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Gece gökyüzünde parlayan dolunay ve yıldızlar.",
            midDecision: {
              title: "ARA KARAR: Gözümüz Yanıldığında Gerçeği Nasıl Bulursun?",
              question:
                "Ufuktaki Ay gözümüze çok büyük görünüyor ama gökyüzünün tepesine çıkınca küçülmüş gibi duruyor. Gerçeği anlamak için ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Gözüme güvenirim ve Ay'ın geceleri gerçekten küçülüp büyüdüğünü söylerim.",
                  feedback:
                    "Duyularımız bazen optik yanılsamalarla bizi yanıltabilir; bilimde ölçüme güvenmeliyiz!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Ölçüm aletiyle Ay'ın açısal çapını her iki konumda da ölçerim ve bunun beynimizin mesafe algısından kaynaklanan bir 'Göz Yanılsaması' olduğunu kanıtlarım!",
                  feedback:
                    "Mükemmel! İbnü'l-Heysem görme olayında sadece gözün değil, beynin algısının ve kıyaslamasının da rol oynadığını keşfetti.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "heysem-ch2-s5",
            sceneNumber: 5,
            title: "Beş Aşamalı Bilimsel Yöntem",
            narration:
              "İbnü'l-Heysem yaptığı tüm bu çalışmalarla insanlık tarihine 'Deneysel Bilimsel Yöntem'i kazandırdı. Ona göre bir bilim insanı önce dikkatle **Gözlem** yapmalı, sonra **Sorunu** tanımlamalı, ardından bir **Varsayım (Hipotez)** kurmalı, bu varsayımı kontrollü **Deneylerle** test etmeli ve sonunda matematiksel **Kanıtla** sonuca ulaşmalıydı! Bugün dünyadaki tüm laboratuvarlarda kullanılan yöntem tam olarak buydu.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "İbnü'l-Heysem yaptığı tüm bu çalışmalarla insanlık tarihine 'Deneysel Bilimsel Yöntem'i kazandırdı. Ona göre bir bilim insanı önce dikkatle Gözlem yapmalı, sonra Sorunu tanımlamalı, ardından bir Varsayım (Hipotez) kurmalı, bu varsayımı kontrollü Deneylerle test etmeli ve sonunda matematiksel Kanıtla sonuca ulaşmalıydı! Bugün dünyadaki tüm laboratuvarlarda kullanılan yöntem tam olarak buydu.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Deney ve matematiksel kanıt olmadan ileri sürülen her iddia sadece bir tahmindir; hakikate ancak sınanmış deneyle ulaşılır!",
            historicalNote:
              "Bunu Biliyor muydun? Bilim tarihçisi Bradley Steffens, İbnü'l-Heysem'i modern bilimsel yöntemi kurduğu için 'Tarihteki İlk Gerçek Bilim İnsanı' olarak nitelendirmiştir.",
            imagePath: "assets/images/harizmi_s1_house_of_wisdom.png",
            imageKey: "assets/images/harizmi_s1_house_of_wisdom.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Deney aletleri başında not tutan bilgin.",
          },
          {
            id: "heysem-ch2-s6",
            sceneNumber: 6,
            title: "Batlamyus'a Şüpheler Kitabı",
            narration:
              "O dönemde astronomide de Batlamyus'un gezegen modelleri tartışılmaz kabul ediliyordu. İbnü'l-Heysem gökyüzünü gözlemlediğinde eski kitaplarda yazan bazı matematiksel hesapların gerçek gökyüzü hareketleriyle çeliştiğini gördü. Bunun üzerine cesaretle kalemi eline aldı ve 'Eş-Şükûk alâ Batlamyus' (Batlamyus Üzerine Şüpheler) adlı ünlü eserini yazdı.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "O dönemde astronomide de Batlamyus'un gezegen modelleri tartışılmaz kabul ediliyordu. İbnü'l-Heysem gökyüzünü gözlemlediğinde eski kitaplarda yazan bazı matematiksel hesapların gerçek gökyüzü hareketleriyle çeliştiğini gördü. Bunun üzerine cesaretle kalemi eline aldı ve 'Eş-Şükûk alâ Batlamyus' (Batlamyus Üzerine Şüpheler) adlı ünlü eserini yazdı.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Gerçeği arayan kişi, eski kitapları okurken yazarına körü körüne güvenen kişi değildir; aksine okuduklarını sorgulayan ve kanıt arayan kişidir!",
            historicalNote:
              "Bunu Biliyor muydun? Yukarıdaki söz İbnü'l-Heysem'in 'Eş-Şükûk alâ Batlamyus' kitabının girişinde bizzat kendi kalemiyle yazdığı gerçek tarihi sözdür!",
            imagePath: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
            imageKey: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Yıldız haritaları ve el yazması kitaplar.",
          },
          {
            id: "heysem-ch2-s7",
            sceneNumber: 7,
            title: "Büyüteç ve Gözlüğe Giden Yol",
            narration:
              "İbnü'l-Heysem cam küreler ve merceklerle yaptığı kırılma deneyleri sırasında çok önemli bir şey daha keşfetti! Yarım küre şeklindeki dışbükey (konveks) bir cam parçası yazıların üzerine konulduğunda harfleri olduğundan daha büyük ve net gösteriyordu! Bu keşif, yaşlıların ve gözü bozuk insanların yeniden kitap okuyabilmesini sağlayan okuma taşlarının ve gözlüklerin kapısını açtı.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "İbnü'l-Heysem cam küreler ve merceklerle yaptığı kırılma deneyleri sırasında çok önemli bir şey daha keşfetti! Yarım küre şeklindeki dışbükey (konveks) bir cam parçası yazıların üzerine konulduğunda harfleri olduğundan daha büyük ve net gösteriyordu! Bu keşif, yaşlıların ve gözü bozuk insanların yeniden kitap okuyabilmesini sağlayan okuma taşlarının ve gözlüklerin kapısını açtı.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Bakın, dışbükey olarak yonttuğumuz bu cam mercek ışığı kırarak küçük harfleri büyütüyor; bu buluş gözü zayıflayan alimlerin en büyük yardımcısı olacak!",
            historicalNote:
              "Bunu Biliyor muydun? İbnü'l-Heysem'in merceklerin büyütme özelliği hakkındaki Latince çevirileri, 13. yüzyılda İtalya'da ilk gözlüklerin icat edilmesine doğrudan kaynaklık etmiştir.",
            imagePath: "assets/images/harizmi_usturlap.png",
            imageKey: "assets/images/harizmi_usturlap.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Parşömen üzerinde parlayan kristal mercek.",
          },
          {
            id: "heysem-ch2-s8",
            sceneNumber: 8,
            title: "Atmosferin Yüksekliğini Hesaplamak",
            narration:
              "Meraklı bilgin sadece odasındaki cam kürelerle yetinmedi. Güneş battıktan sonra gökyüzünün neden hemen kararmadığını ve alacakaranlığın (şafak vakti) ne kadar sürdüğünü ölçtü. Güneş ufuk çizgisinin 19 derece altına inene kadar atmosferdeki hava tabakasının güneş ışığını kırıp yansıttığını hesapladı ve buradan yola çıkarak Dünya atmosferinin kalınlığını şaşırtıcı bir doğrulukla buldu!\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Meraklı bilgin sadece odasındaki cam kürelerle yetinmedi. Güneş battıktan sonra gökyüzünün neden hemen kararmadığını ve alacakaranlığın (şafak vakti) ne kadar sürdüğünü ölçtü. Güneş ufuk çizgisinin 19 derece altına inene kadar atmosferdeki hava tabakasının güneş ışığını kırıp yansıttığını hesapladı ve buradan yola çıkarak Dünya atmosferinin kalınlığını şaşırtıcı bir doğrulukla buldu!\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Güneş ufuktan kaybolsa bile ışınları başımızın üzerindeki atmosfer tabakasına çarparak kırılır; işte akşam kızıllığının sebebi budur!",
            historicalNote:
              "Bunu Biliyor muydun? İbnü'l-Heysem bin yıl önce sadece geometri ve alacakaranlık süresini kullanarak atmosferin yüksekliğini yaklaşık 80 kilometre olarak hesaplamıştır!",
            imagePath: "assets/images/ibn_sina_s1_bukhara_library.png",
            imageKey: "assets/images/ibn_sina_s1_bukhara_library.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Alacakaranlıkta kızaran ufuk çizgisi ve yıldızlar.",
          },
          {
            id: "heysem-ch2-s9",
            sceneNumber: 9,
            title: "Hakikat Yolcusunun Mirası",
            narration:
              "Hayatı boyunca doksandan fazla bilimsel eser yazan İbnü'l-Heysem, Kahire'de vefat ettiğinde ardında altın saraylar değil, insanlığın düşünce biçimini değiştiren ölümsüz bir yöntem bıraktı. Bugün bir bilim insanı laboratuvarda deney yaparken, bir doktor göz muayenesi yaparken veya bir fotoğrafçı deklanşöre basarken İbnü'l-Heysem'in yaktığı o bilim meşalesi parlamaya devam ediyor.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Hayatı boyunca doksandan fazla bilimsel eser yazan İbnü'l-Heysem, Kahire'de vefat ettiğinde ardında altın saraylar değil, insanlığın düşünce biçimini değiştiren ölümsüz bir yöntem bıraktı. Bugün bir bilim insanı laboratuvarda deney yaparken, bir doktor göz muayenesi yaparken veya bir fotoğrafçı deklanşöre basarken İbnü'l-Heysem'in yaktığı o bilim meşalesi parlamaya devam ediyor.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbnü'l-Heysem",
            dialogue:
              "Ben ömrüm boyunca gücüm yettiğince hakikati aradım; çünkü insanı bilgeliğe ve iyiliğe yaklaştıran en güzel yol gerçeği aramaktır!",
            historicalNote:
              "Bunu Biliyor muydun? Ay'ın üzerindeki büyük kraterlerden birine ve uzaydaki '59239 Alhazen' asteroidine İbnü'l-Heysem'in adı verilmiştir!",
            imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
            imageKey: "assets/images/artifact_qarawiyyin_astrolabe.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Bilim mirasını geleceğe emanet eden İbnü'l-Heysem.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Ünlü bir bilginin yazdığı eski bir kitapta bir bilgi okudun ama kendi yaptığın gözlemler kitapta yazanla uyuşmuyor. Gerçek bir bilim insanı olarak nasıl davranırsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Ünlü bir bilgin yazdığına göre kesin doğrudur diyerek kendi gözlemimi çöpe atarım.",
              feedback:
                "En büyük bilginler bile hata yapabilir; sorgulamadan kabul etmek bilimi durdurur.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Hiç ölçüm yapmadan kitabı tamamen reddederim.",
              feedback:
                "Deney ve kanıt olmadan reddetmek de bilimsel yönteme aykırıdır!",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "'Gerçeği arayan kişi her okuduğuna körü körüne inanmaz' ilkesiyle su dolu cam küreler ve ölçü aletleriyle kontrollü deneyler kurar, hangisinin doğru olduğunu kanıtla ortaya koyarım!",
              feedback:
                "Tarihi Hakikat! İbnü'l-Heysem sorgulama, deney ve matematiksel kanıta dayalı modern bilimsel yöntemi kurdu!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "İbnü'l-Heysem, eski otoritelere körü körüne inanmak yerine gözlem, hipotez ve kontrollü deneye dayanan modern 'Bilimsel Yöntem'i kurdu. Su dolu cam kürelerle ışığın kırılmasını ve gökkuşağının oluşumunu deneysel olarak açıkladı!",
          quoteHighlight:
            "Gerçeği arayan kişi, eski kitapları okurken yazarına körü körüne güvenen değil, sorgulayan ve kanıt arayan kişidir!",
        },
        rewardArtifact: {
          id: "artifact-crystal-prism",
          name: "Kristal Işık Küresi ve Merceği",
          heroId: "ibnul-heysem",
          chapterId: "ibnul-heysem-ch2",
          imagePath: "assets/images/ibnul_heysem_rainbow.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik Puanı",
          points: 50,
          unlockedTitle: "Bilimsel Yöntem Öncüsü",
          shortDescription:
            "İbnü'l-Heysem'in gökkuşağı oluşumunu, ışığın kırılmasını (inkisâr) ve büyüteç merceklerini keşfettiği kristal deney küresi.",
          historicalNote:
            "İbnü'l-Heysem'in mercekler ve kırılma üzerine yaptığı çalışmalar hem gözlük ve teleskopların hem de modern deneysel fiziğin temelini oluşturmuştur.",
          accentColor: "#06B6D4",
          hotspots: [
            {
              id: "glass-sphere",
              xPercent: 48,
              yPercent: 36,
              title: "Su Dolu Cam Küre Modeli",
              secretFact:
                "İbnü'l-Heysem gökyüzündeki yağmur damlasını modellemek için içi su dolu cam küreler kullanarak ışığın kırılmasını incelemiştir.",
            },
            {
              id: "convex-lens",
              xPercent: 34,
              yPercent: 66,
              title: "Dışbükey Okuma Merceği",
              secretFact:
                "Yarım küre biçimindeki merceklerin yazıları büyüttüğünü keşfederek tarihteki ilk okuma merceklerine ve gözlüğe öncülük etmiştir.",
            },
            {
              id: "refraction-ring",
              xPercent: 66,
              yPercent: 64,
              title: "Dereceli Kırılma Halkası",
              secretFact:
                "Gelen ışığın açısı ile suda kırılan ışığın açısını milimetrik olarak ölçmek için bakır açıölçer halkalar kullanmıştır.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "İbnü'l-Heysem'in 'Okuduğunuz her şeye körü körüne inanmayın, kanıt arayın' sözü bugün internette gördüğümüz bilgiler için de neden çok önemlidir?",
          "Su dolu bir bardağın içindeki kaşığın neden kırık gibi göründüğünü artık kendi cümlelerinle anlatabilir misin?",
          "Sen bir bilim insanı olsaydın doğadaki hangi gizemi deney yaparak çözmek isterdin?",
        ],
      },
    ],
  },

  // ==========================================================================
  // 10. KAHRAMAN: İBN SÎNÂ (2 BÖLÜM - 9'AR SAHNE)
  // ==========================================================================
  {
    id: "ibn-sina",
    name: "İbn Sînâ",
    heroClass: "BILIM_DENEY",
    heroClassLabel: "Bilim ve Deney",
    classBadgeLabel: "Bilim ve Deney",
    title: "Hekimlerin Sultanı (El-Şeyhü'r-Reîs)",
    era: "980 – 1037 (Buhara & Hemedan)",
    location: "Buhara",
    visualMode: "CHARACTER_PORTRAIT",
    coverImage: "assets/images/ibn_sina_hero.png",
    crisisImage: "assets/images/ibn_sina_hospital.png",
    images: {
      cover: "assets/images/ibn_sina_hero.png",
      crisis: "assets/images/ibn_sina_hospital.png",
      artifact: "assets/images/artifact_qarawiyyin_astrolabe.png",
    },
    accentColor: "#0D9488",
    secondaryColor: "#D97706",
    badgeText: "Tıp, Karantina & Şifa",
    summary:
      "Henüz 18 yaşında Buhara Saray Kütüphanesi'ndeki tüm kitapları okuyup hafızasına kaydeden, mikropları ve 40 günlük karantinayı keşfeden, 'El-Kânûn fi't-Tıbb' eseri Avrupa'da 600 yıl okutulan büyük tıp dehası.",
    shortBio:
      "Henüz 18 yaşında Buhara Saray Kütüphanesi'ndeki tüm kitapları okuyup hafızasına kaydeden, mikropları ve 40 günlük karantinayı keşfeden, 'El-Kânûn fi't-Tıbb' eseri Avrupa'da 600 yıl okutulan büyük tıp dehası.",
    chapters: [
      // ------------------------------------------------------------------------
      // İBN SÎNÂ - BÖLÜM 1: BUHARA KÜTÜPHANESİNDE GECE GÜNDÜZ OKUYAN GENÇ HEKİM (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "ibn-sina-ch1",
        heroId: "ibn-sina",
        chapterNumber: 1,
        title: "Buhara Kütüphanesinde Gece Gündüz Okuyan Genç Hekim",
        subtitle: "Altın ve saraylar tükenir; ancak okunan bir kitabın ışığı ömür boyu sönmez",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "sina-ch1-s1",
            sceneNumber: 1,
            title: "Buhara'da Meraklı Bir Çocuk: Hüseyin",
            narration:
              "Miladi 980 yılında Orta Asya'nın incisi Buhara yakınlarındaki Efşene köyünde doğan küçük Hüseyin, yani hepimizin tanıdığı adıyla İbn Sînâ, daha çocuk yaşta olağanüstü bir öğrenme aşkına sahipti. On yaşına geldiğinde Kur'an-ı Kerim'i ve edebiyat eserlerini ezberlemiş, babasıyla birlikte Buhara çarşısındaki bir manavdan Hint aritmetiğini ve sayı hesaplarını öğrenmişti!\n\nBuhara kütüphanesinin tavana uzanan ahşap rafları arasında, mum ışığında çevrilen her parşömen sayfası genç İbn Sînâ'nın zihninde yeni bir şifa kapısı aralıyor gibiydi. O an Buhara Saray Kütüphanesi'nin ceviz rafları arasında ve güneşli Darüşşifa avlusunda hissedilen bitmek bilmeyen öğrenme aşkı, insan sağlığına adanmış şefkat ve titiz gözlem gücü, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Miladi 980 yılında Orta Asya'nın incisi Buhara yakınlarındaki Efşene köyünde doğan küçük Hüseyin, yani hepimizin tanıdığı adıyla İbn Sînâ, daha çocuk yaşta olağanüstü bir öğrenme aşkına sahipti. On yaşına geldiğinde Kur'an-ı Kerim'i ve edebiyat eserlerini ezberlemiş, babasıyla birlikte Buhara çarşısındaki bir manavdan Hint aritmetiğini ve sayı hesaplarını öğrenmişti!\n\nBuhara kütüphanesinin tavana uzanan ahşap rafları arasında, mum ışığında çevrilen her parşömen sayfası genç İbn Sînâ'nın zihninde yeni bir şifa kapısı aralıyor gibiydi. O an Buhara Saray Kütüphanesi'nin ceviz rafları arasında ve güneşli Darüşşifa avlusunda hissedilen bitmek bilmeyen öğrenme aşkı, insan sağlığına adanmış şefkat ve titiz gözlem gücü, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Genç İbn Sînâ",
            dialogue:
              "Her insanın öğreteceği bir şey vardır! Çarşıdaki hesap ustasından sayıları, doğadaki bitkilerden ise şifanın sırlarını öğreniyorum!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Sînâ kendi hayat hikayesini anlattığı eserinde, çocukken aritmetik ve hesap ilmini Buhara'da sebze satan Mahmud el-Messâh adlı bir esnaftan öğrendiğini yazar!",
            imagePath: "assets/images/ibn_sina_s1_bukhara_library.png",
            imageKey: "assets/images/ibn_sina_s1_bukhara_library.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Mum ışığında kitap okuyan genç İbn Sînâ.",
          },
          {
            id: "sina-ch1-s2",
            sceneNumber: 2,
            title: "Kırk Kez Okunan Kitap ve Sabır",
            narration:
              "İbn Sînâ on altı yaşına geldiğinde tıp, astronomi, fizik ve mantık kitaplarını gece gündüz demeden okuyordu. Bir gün felsefe tarihinin en zor eserlerinden biri olan 'Metafizik' kitabını anlamakta zorlandı. Kitabı bir kenara atıp pes etmek yerine tam kırk kez baştan sona okudu! Nihayet Buhara sahaflar çarşısında karşılaştığı büyük Türk bilgini Fârâbî'nin şerhini okuyunca bütün düğümler zihninde çözüldü.\n\nMasadaki bronz havan, şifalı lavanta ve papatya demetleri ile cam imbikler, tıp biliminin rastgele tahminlerle değil, sabırlı deneylerle ilerlediğini anlatıyordu. Tarihin bu unutulmaz dönemeç noktasında, bitmek bilmeyen öğrenme aşkı, insan sağlığına adanmış şefkat ve titiz gözlem gücü sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "İbn Sînâ on altı yaşına geldiğinde tıp, astronomi, fizik ve mantık kitaplarını gece gündüz demeden okuyordu. Bir gün felsefe tarihinin en zor eserlerinden biri olan 'Metafizik' kitabını anlamakta zorlandı. Kitabı bir kenara atıp pes etmek yerine tam kırk kez baştan sona okudu! Nihayet Buhara sahaflar çarşısında karşılaştığı büyük Türk bilgini Fârâbî'nin şerhini okuyunca bütün düğümler zihninde çözüldü.\n\nMasadaki bronz havan, şifalı lavanta ve papatya demetleri ile cam imbikler, tıp biliminin rastgele tahminlerle değil, sabırlı deneylerle ilerlediğini anlatıyordu. Tarihin bu unutulmaz dönemeç noktasında, bitmek bilmeyen öğrenme aşkı, insan sağlığına adanmış şefkat ve titiz gözlem gücü sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Genç İbn Sînâ",
            dialogue:
              "Bir konuyu ilk okuyuşta anlamamak eksiklik değildir; asıl kayıp merakı bırakıp pes etmektir! Fârâbî'nin kitabı zihnimin ufkunu açtı!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Sînâ, o zor konuyu nihayet anladığında şükür olarak Buhara'daki yoksullara sadaka dağıtmıştır.",
            imagePath: "assets/images/ibn_sina_hero.png",
            imageKey: "assets/images/ibn_sina_hero.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "El yazması parşömenler ve şifa şişeleri.",
          },
          {
            id: "sina-ch1-s3",
            sceneNumber: 3,
            title: "Sâmânî Sultanı Nûh bin Mansûr'un Hastalığı",
            narration:
              "O günlerde Buhara Sarayı'nda büyük bir telaş başladı. Sâmânî Hükümdarı Nûh bin Mansûr ağır bir hastalığa yakalanmış, saraydaki en ünlü yaşlı hekimler bile hastalığın sebebini bulmakta çaresiz kalmıştı. Hekimler birbirlerine danışırken 'Şehirde henüz on yedi yaşında olmasına rağmen tıbbı ve şifalı bitkileri herkesten iyi bilen İbn Sînâ adında genç bir hekim var!' dediler ve onu saraya davet ettiler.\n\nMermer şadırvanından berrak suların aktığı güneşli şifahane avlusu, temiz hava, su sesi ve hijyenin hastaları iyileştiren en güçlü ilaç olduğunu gözler önüne seriyordu. Çevredeki her detay, Buhara Saray Kütüphanesi'nin ceviz rafları arasında ve güneşli Darüşşifa avlusunda filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "O günlerde Buhara Sarayı'nda büyük bir telaş başladı. Sâmânî Hükümdarı Nûh bin Mansûr ağır bir hastalığa yakalanmış, saraydaki en ünlü yaşlı hekimler bile hastalığın sebebini bulmakta çaresiz kalmıştı. Hekimler birbirlerine danışırken 'Şehirde henüz on yedi yaşında olmasına rağmen tıbbı ve şifalı bitkileri herkesten iyi bilen İbn Sînâ adında genç bir hekim var!' dediler ve onu saraya davet ettiler.\n\nMermer şadırvanından berrak suların aktığı güneşli şifahane avlusu, temiz hava, su sesi ve hijyenin hastaları iyileştiren en güçlü ilaç olduğunu gözler önüne seriyordu. Çevredeki her detay, Buhara Saray Kütüphanesi'nin ceviz rafları arasında ve güneşli Darüşşifa avlusunda filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Saray Başhekimi",
            dialogue:
              "Yaşı gençtir ama ilmi ve gözlem gücü çok derindir; Hükümdarımızı muayene etmesi için genç İbn Sînâ'yı da davet edelim!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Sînâ henüz 16-17 yaşlarındayken sadece kitaplardan okumakla kalmamış, hastaları ücretsiz tedavi ederek yeni tedavi yöntemleri geliştirmişti.",
            imagePath: "assets/images/ibn_sina_s2_canon_of_medicine.png",
            imageKey: "assets/images/ibn_sina_s2_canon_of_medicine.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Buhara Sarayı'nda genç hekim İbn Sînâ.",
          },
          {
            id: "sina-ch1-s4",
            sceneNumber: 4,
            title: "Doğru Teşhis ve Sultan'ın Teklifi",
            narration:
              "Genç İbn Sînâ saraya girdiğinde hükümdarın nabzını dikkatle dinledi, yüz rengini ve beslenmesini inceledi. Hastalığın kurşunlu kaplardan kaynaklanan gizli bir zehirlenme ve iltihap olduğunu tespit ederek özel bir bitkisel şerbet ve perhiz tedavisi uyguladı! Birkaç hafta içinde Sultan Nûh bin Mansûr tamamen sağlığına kavuşup ayağa kalktı ve genç hekime dilediği ödülü vermeye hazır olduğunu söyledi!\n\nGözle görülmeyen hastalık tohumlarını fark edip kırk günlük karantina kuralını kuran bu ileri görüşlülük, yüzyıllar boyunca milyonlarca insanın hayatını kurtaracak bir mirasa dönüştü. Sabır, dikkat ve samimiyetle atılan bu adım, bitmek bilmeyen öğrenme aşkı, insan sağlığına adanmış şefkat ve titiz gözlem gücü ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Genç İbn Sînâ saraya girdiğinde hükümdarın nabzını dikkatle dinledi, yüz rengini ve beslenmesini inceledi. Hastalığın kurşunlu kaplardan kaynaklanan gizli bir zehirlenme ve iltihap olduğunu tespit ederek özel bir bitkisel şerbet ve perhiz tedavisi uyguladı! Birkaç hafta içinde Sultan Nûh bin Mansûr tamamen sağlığına kavuşup ayağa kalktı ve genç hekime dilediği ödülü vermeye hazır olduğunu söyledi!\n\nGözle görülmeyen hastalık tohumlarını fark edip kırk günlük karantina kuralını kuran bu ileri görüşlülük, yüzyıllar boyunca milyonlarca insanın hayatını kurtaracak bir mirasa dönüştü. Sabır, dikkat ve samimiyetle atılan bu adım, bitmek bilmeyen öğrenme aşkı, insan sağlığına adanmış şefkat ve titiz gözlem gücü ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Sultan Nûh bin Mansûr",
            dialogue:
              "Ey genç bilge! Hayatımı kurtardın. Şimdi dile benden ne dilersen; sana sandıklar dolusu altın mı vereyim, yoksa saraylar ve bahçeler mi bağışlayayım?",
            historicalNote:
              "Bunu Biliyor muydun? Sâmânî Sarayı'nda dünyaca ünlü 'Sivânü'l-Hikme' (Bilgelik Hazinesi) adlı dev bir kütüphane bulunuyordu ve buraya sadece özel izinle girilebiliyordu.",
            imagePath: "assets/images/ibn_sina_hospital.png",
            imageKey: "assets/images/ibn_sina_hospital.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Sultan'ın huzurunda ödül teklif edilen genç hekim.",
            midDecision: {
              title: "ARA KARAR: Hükümdardan Hangi Ödülü İstersin?",
              question:
                "Hükümdarı iyileştirdin ve sana 'Altın keseleri mi istersin, yoksa saray ve bahçe mi?' diye sordu. Sen ne istersin?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Sandıklar dolusu altın ve ipek elbiseler isterim.",
                  feedback:
                    "Altın harcanıp biter; oysa İbn Sînâ altından çok daha değerli bir hazinenin peşindeydi!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Altın ve mal istemem; sadece dünyanın en nadir kitaplarının bulunduğu Buhara Saray Kütüphanesi'ne girip gece gündüz okuma izni isterim!",
                  feedback:
                    "Muazzam seçim! İbn Sînâ altınları reddedip sadece Saray Kütüphanesi'nde kitap okuma izni istedi!",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "sina-ch1-s5",
            sceneNumber: 5,
            title: "Bilgelik Hazinesi'nin Açılan Kapıları",
            narration:
              "İbn Sînâ'nın altın yerine sadece kütüphane izni istemesi Sultan'ı hayran bıraktı ve derhal kapıların ona açılmasını emretti! Genç hekim, Buhara Saray Kütüphanesi'nin yüksek tavanlı, sedir ağacı kokulu odalarına adım attığında kalbi heyecanla çarptı. Her bir odada tıp, astronomi, matematik, doğa bilimleri ve felsefe alanında üst üste dizilmiş binlerce nadir el yazması sandık duruyordu!\n\nBuhara kütüphanesinin tavana uzanan ahşap rafları arasında, mum ışığında çevrilen her parşömen sayfası genç İbn Sînâ'nın zihninde yeni bir şifa kapısı aralıyor gibiydi. O an Buhara Saray Kütüphanesi'nin ceviz rafları arasında ve güneşli Darüşşifa avlusunda hissedilen bitmek bilmeyen öğrenme aşkı, insan sağlığına adanmış şefkat ve titiz gözlem gücü, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "İbn Sînâ'nın altın yerine sadece kütüphane izni istemesi Sultan'ı hayran bıraktı ve derhal kapıların ona açılmasını emretti! Genç hekim, Buhara Saray Kütüphanesi'nin yüksek tavanlı, sedir ağacı kokulu odalarına adım attığında kalbi heyecanla çarptı. Her bir odada tıp, astronomi, matematik, doğa bilimleri ve felsefe alanında üst üste dizilmiş binlerce nadir el yazması sandık duruyordu!\n\nBuhara kütüphanesinin tavana uzanan ahşap rafları arasında, mum ışığında çevrilen her parşömen sayfası genç İbn Sînâ'nın zihninde yeni bir şifa kapısı aralıyor gibiydi. O an Buhara Saray Kütüphanesi'nin ceviz rafları arasında ve güneşli Darüşşifa avlusunda hissedilen bitmek bilmeyen öğrenme aşkı, insan sağlığına adanmış şefkat ve titiz gözlem gücü, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Genç İbn Sînâ",
            dialogue:
              "Burada insanların adını bile duymadığı, kendim de daha önce hiç görmediğim binlerce nadir eser var! İşte dünyanın gerçek hazinesi burasıdır!",
            historicalNote:
              "Bunu Biliyor muydun? Yukarıdaki cümle İbn Sînâ'nın Buhara Kütüphanesi'ne ilk girdiğinde hissettiklerini anlattığı kendi gerçek sözüdür.",
            imagePath: "assets/images/ibn_sina_s3_quarantine_courtyard.png",
            imageKey: "assets/images/ibn_sina_s3_quarantine_courtyard.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Yüksek kitap rafları ve parlayan mum ışığı.",
          },
          {
            id: "sina-ch1-s6",
            sceneNumber: 6,
            title: "Mum Işığında Uykusuz Geceler",
            narration:
              "İbn Sînâ tam iki yıl boyunca vaktinin neredeyse tamamını bu kütüphanede geçirdi. Önüne koyduğu fihristlerden kitapları tek tek seçiyor, mum ışığında satır satır okuyor ve her kitabın özünü kendi çalışma defterlerine özetliyordu. Gece uykusu bastırdığında bile çözemediği bir tıp veya matematik sorusunu düşünerek uyuyor, rüyasında bile o problemin çözümünü görerek uyanıyordu!\n\nMasadaki bronz havan, şifalı lavanta ve papatya demetleri ile cam imbikler, tıp biliminin rastgele tahminlerle değil, sabırlı deneylerle ilerlediğini anlatıyordu. Tarihin bu unutulmaz dönemeç noktasında, bitmek bilmeyen öğrenme aşkı, insan sağlığına adanmış şefkat ve titiz gözlem gücü sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "İbn Sînâ tam iki yıl boyunca vaktinin neredeyse tamamını bu kütüphanede geçirdi. Önüne koyduğu fihristlerden kitapları tek tek seçiyor, mum ışığında satır satır okuyor ve her kitabın özünü kendi çalışma defterlerine özetliyordu. Gece uykusu bastırdığında bile çözemediği bir tıp veya matematik sorusunu düşünerek uyuyor, rüyasında bile o problemin çözümünü görerek uyanıyordu!\n\nMasadaki bronz havan, şifalı lavanta ve papatya demetleri ile cam imbikler, tıp biliminin rastgele tahminlerle değil, sabırlı deneylerle ilerlediğini anlatıyordu. Tarihin bu unutulmaz dönemeç noktasında, bitmek bilmeyen öğrenme aşkı, insan sağlığına adanmış şefkat ve titiz gözlem gücü sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Genç İbn Sînâ",
            dialogue:
              "Gece boyunca lambam hiç sönmedi; bir meseleyi gündüz çözemezsem zihnim gece uykuda bile onun kanıtını aramaya devam ediyor!",
            historicalNote:
              "Bunu Biliyor muydun? Modern beyin bilimi, gündüz üzerinde yoğun çalışılan konuların gece uykuda beyin tarafından birleştirilip çözüldüğünü kanıtlamıştır!",
            imagePath: "assets/images/harizmi_s1_house_of_wisdom.png",
            imageKey: "assets/images/harizmi_s1_house_of_wisdom.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Mum ışığında tutulan tıp notları ve havan.",
          },
          {
            id: "sina-ch1-s7",
            sceneNumber: 7,
            title: "Yanan Kütüphane ve Hafızadaki Hazine",
            narration:
              "İbn Sînâ on sekiz yaşına bastığında kütüphanedeki bütün odalarda yer alan kitapların tamamını okumuş, anlamış ve en önemli bilgilerini hafızasına kaydetmişti! Çok geçmeden talihsiz bir kaza sonucu Buhara Saray Kütüphanesi'nde yangın çıktı ve pek çok kitap zarar gördü. Ancak İbn Sînâ'nın iki yıl boyunca gece gündüz okuyup aldığı notlar sayesinde o paha biçilemez bilimsel miras yok olmaktan kurtuldu!\n\nMermer şadırvanından berrak suların aktığı güneşli şifahane avlusu, temiz hava, su sesi ve hijyenin hastaları iyileştiren en güçlü ilaç olduğunu gözler önüne seriyordu. Çevredeki her detay, Buhara Saray Kütüphanesi'nin ceviz rafları arasında ve güneşli Darüşşifa avlusunda filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "İbn Sînâ on sekiz yaşına bastığında kütüphanedeki bütün odalarda yer alan kitapların tamamını okumuş, anlamış ve en önemli bilgilerini hafızasına kaydetmişti! Çok geçmeden talihsiz bir kaza sonucu Buhara Saray Kütüphanesi'nde yangın çıktı ve pek çok kitap zarar gördü. Ancak İbn Sînâ'nın iki yıl boyunca gece gündüz okuyup aldığı notlar sayesinde o paha biçilemez bilimsel miras yok olmaktan kurtuldu!\n\nMermer şadırvanından berrak suların aktığı güneşli şifahane avlusu, temiz hava, su sesi ve hijyenin hastaları iyileştiren en güçlü ilaç olduğunu gözler önüne seriyordu. Çevredeki her detay, Buhara Saray Kütüphanesi'nin ceviz rafları arasında ve güneşli Darüşşifa avlusunda filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Buharalı Alim Ebû Bekir el-Berakî",
            dialogue:
              "Eğer sen altın yerine kütüphaneyi seçip o kitapları tek tek okuyup kaydetmeseydin, insanlığın yüzyıllık tıp ve felsefe birikimi küle dönecekti!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Sînâ ilk büyük ansiklopedik eseri olan 'El-Mecmû' (Derleme) kitabını henüz 21 yaşındayken komşusu Ebû'l-Hasan el-Arûzî'nin isteği üzerine yazmıştır.",
            imagePath: "assets/images/vakif_s1_stork_hospital_bursa.png",
            imageKey: "assets/images/vakif_s1_stork_hospital_bursa.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Kurtarılan bilimsel parşömenler ve tıp defterleri.",
          },
          {
            id: "sina-ch1-s8",
            sceneNumber: 8,
            title: "Hastaları Ücretsiz Muayene Eden Genç Hekim",
            narration:
              "İbn Sînâ öğrendiği bilgileri sadece saraydakiler için kullanmadı. Buhara sokaklarındaki yoksul hastaları hiçbir ücret almadan muayene etti; çünkü her hastayı hem iyileştirilmesi gereken bir can hem de tıbbı geliştirecek yeni bir gözlem fırsatı olarak görüyordu. Göz hastalıklarından kalp çarpıntısına, kırık çıkıklardan beslenmeye kadar yüzlerce yeni tedavi yöntemi geliştirdi.\n\nGözle görülmeyen hastalık tohumlarını fark edip kırk günlük karantina kuralını kuran bu ileri görüşlülük, yüzyıllar boyunca milyonlarca insanın hayatını kurtaracak bir mirasa dönüştü. Sabır, dikkat ve samimiyetle atılan bu adım, bitmek bilmeyen öğrenme aşkı, insan sağlığına adanmış şefkat ve titiz gözlem gücü ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "İbn Sînâ öğrendiği bilgileri sadece saraydakiler için kullanmadı. Buhara sokaklarındaki yoksul hastaları hiçbir ücret almadan muayene etti; çünkü her hastayı hem iyileştirilmesi gereken bir can hem de tıbbı geliştirecek yeni bir gözlem fırsatı olarak görüyordu. Göz hastalıklarından kalp çarpıntısına, kırık çıkıklardan beslenmeye kadar yüzlerce yeni tedavi yöntemi geliştirdi.\n\nGözle görülmeyen hastalık tohumlarını fark edip kırk günlük karantina kuralını kuran bu ileri görüşlülük, yüzyıllar boyunca milyonlarca insanın hayatını kurtaracak bir mirasa dönüştü. Sabır, dikkat ve samimiyetle atılan bu adım, bitmek bilmeyen öğrenme aşkı, insan sağlığına adanmış şefkat ve titiz gözlem gücü ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "İbn Sînâ",
            dialogue:
              "Tıp ilmi, insan bedeninin sağlığını korumak ve hastalık geldiğinde onu şifaya kavuşturmak için yapılan en şerefli sanattır!",
            historicalNote:
              "Bunu Biliyor muydun? Yukarıdaki söz, İbn Sînâ'nın dünyaca ünlü 'El-Kânûn fi't-Tıbb' (Tıbbın Kanunu) kitabının ilk cümlesidir!",
            imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
            imageKey: "assets/images/artifact_qarawiyyin_astrolabe.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Şifalı bitkiler ve tıp el yazmaları.",
          },
          {
            id: "sina-ch1-s9",
            sceneNumber: 9,
            title: "18 Yaşında Bilim Dünyasının Zirvesinde",
            narration:
              "O gün Buhara Kütüphanesi'nde altın keselerini elinin tersiyle itip kitaplara koşan genç İbn Sînâ, hayatı boyunca 200'den fazla ölümsüz eser kaleme aldı. Doğuda 'El-Şeyhü'r-Reîs' (Bilginlerin Başbuğu), Batıda ise 'Avicenna' ve 'Hekimlerin Prensi' unvanıyla anıldı. Onun hikayesi, kitap okuma sevgisinin bir çocuğu nasıl bütün insanlığın öğretmeni yapabileceğinin en parlak kanıtı oldu.\n\nBuhara kütüphanesinin tavana uzanan ahşap rafları arasında, mum ışığında çevrilen her parşömen sayfası genç İbn Sînâ'nın zihninde yeni bir şifa kapısı aralıyor gibiydi. O an Buhara Saray Kütüphanesi'nin ceviz rafları arasında ve güneşli Darüşşifa avlusunda hissedilen bitmek bilmeyen öğrenme aşkı, insan sağlığına adanmış şefkat ve titiz gözlem gücü, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "O gün Buhara Kütüphanesi'nde altın keselerini elinin tersiyle itip kitaplara koşan genç İbn Sînâ, hayatı boyunca 200'den fazla ölümsüz eser kaleme aldı. Doğuda 'El-Şeyhü'r-Reîs' (Bilginlerin Başbuğu), Batıda ise 'Avicenna' ve 'Hekimlerin Prensi' unvanıyla anıldı. Onun hikayesi, kitap okuma sevgisinin bir çocuğu nasıl bütün insanlığın öğretmeni yapabileceğinin en parlak kanıtı oldu.\n\nBuhara kütüphanesinin tavana uzanan ahşap rafları arasında, mum ışığında çevrilen her parşömen sayfası genç İbn Sînâ'nın zihninde yeni bir şifa kapısı aralıyor gibiydi. O an Buhara Saray Kütüphanesi'nin ceviz rafları arasında ve güneşli Darüşşifa avlusunda hissedilen bitmek bilmeyen öğrenme aşkı, insan sağlığına adanmış şefkat ve titiz gözlem gücü, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbn Sînâ",
            dialogue:
              "Bilgi, paylaştıkça çoğalan ve sahibini karanlıklardan aydınlığa çıkaran tek hazinedir!",
            historicalNote:
              "Bunu Biliyor muydun? Türkiye'de her yıl Ağustos ayının üçüncü haftası, bu büyük Türk-İslam bilgininin anısına 'İbn Sînâ Haftası' olarak kutlanmaktadır.",
            imagePath: "assets/images/fatima_fihri_courtyard.png",
            imageKey: "assets/images/fatima_fihri_courtyard.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Buhara Kütüphanesi'nde parlayan bilim meşalesi.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Henüz 17 yaşındasın ve kimsenin iyileştiremediği Buhara Hükümdarı'nı tıp bilginle iyileştirdin. Hükümdar sana 'Dile benden ne dilersen; altın mı, saray mı?' diye sordu. Ne seçersin?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Sandıklar dolusu altın alıp bir daha hiç çalışmam.",
              feedback:
                "Altın biter ama öğrenmeyi bırakan insan yerinde sayar!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Sarayda lüks bir makam isteyip kitap okumayı bırakırım.",
              feedback:
                "İbn Sînâ makam peşinde koşsaydı insanlığa şifa veren eserlerini yazamazdı.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Altın ve mücevher istemem; sadece dünyanın en nadir el yazmalarının bulunduğu Buhara Saray Kütüphanesi'ne girip tüm kitapları okuma izni isterim!",
              feedback:
                "Tarihi Hakikat! İbn Sînâ altın yerine kütüphane izni isteyerek insanlık tarihinin en büyük hekimi oldu!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "İbn Sînâ, Sâmânî Hükümdarı Nûh bin Mansûr'u iyileştirdiğinde ödül olarak altın değil, sadece Buhara Saray Kütüphanesi'nden (Sivânü'l-Hikme) yararlanma izni istedi. 18 yaşına kadar buradaki tüm eserleri okuyup hafızasına kaydederek dünya tıp tarihini değiştirdi.",
          quoteHighlight:
            "Altın ve saraylar tükenir; benim tek dileğim kütüphanedeki kitapları okumaktır!",
        },
        rewardArtifact: {
          id: "artifact-bukhara-medicine-chest",
          name: "Buhara Kütüphanesi Anahtarı ve Şifa Havanı",
          heroId: "ibn-sina",
          chapterId: "ibn-sina-ch1",
          imagePath: "assets/images/ibn_sina_hero.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik Puanı",
          points: 50,
          unlockedTitle: "Genç Şifa Bilgini",
          shortDescription:
            "Genç İbn Sînâ'nın altın yerine seçtiği Buhara Saray Kütüphanesi'nin sembolik anahtarı ve bitkisel ilaçlar hazırladığı bronz havanı.",
          historicalNote:
            "Buhara'daki Sivânü'l-Hikme kütüphanesinde edindiği birikim, İbn Sînâ'nın 'El-Kânûn fi't-Tıbb' ve 'Kitâbü'ş-Şifâ' ansiklopedilerinin temelini oluşturmuştur.",
          accentColor: "#0D9488",
          hotspots: [
            {
              id: "bukhara-scrolls",
              xPercent: 45,
              yPercent: 32,
              title: "Sivânü'l-Hikme Parşömenleri",
              secretFact:
                "İbn Sînâ 16 ile 18 yaşları arasında Buhara kütüphanesindeki tüm tıp, mantık ve doğa bilimleri eserlerini okuyup özetlemiştir.",
            },
            {
              id: "herbal-mortar",
              xPercent: 35,
              yPercent: 65,
              title: "Şifalı Bitki Havanı",
              secretFact:
                "El-Kânûn fi't-Tıbb eserinde 760'tan fazla bitkisel ve madensel ilacın hazırlanışı ve etkileri tek tek tarif edilmiştir.",
            },
            {
              id: "forty-readings",
              xPercent: 68,
              yPercent: 62,
              title: "40 Okuma Azmi",
              secretFact:
                "Anlamadığı bir konuyu pes etmeden 40 kez üst üste okuması, bilim tarihinin en ünlü çalışma azmi örneklerinden biridir.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "İbn Sînâ hükümdardan altın keseleri yerine neden kütüphanede kitap okuma izni istedi?",
          "Zor bir ders veya kitapla karşılaştığımızda İbn Sînâ'nın 40 kez okuyup pes etmemesi bize ne öğretiyor?",
          "Senin evinde dünyanın bütün kitaplarının olduğu gizli bir kütüphane kapısı açılsa ilk hangi konudaki kitapları okumak isterdin?",
        ],
      },

      // ------------------------------------------------------------------------
      // İBN SÎNÂ - BÖLÜM 2: GÖRÜNMEZ MİKROPLAR VE KARANTİNA KEŞFİ (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "ibn-sina-ch2",
        heroId: "ibn-sina",
        chapterNumber: 2,
        title: "Görünmez Mikroplar ve Karantina Keşfi",
        subtitle: "Hastalıkları yenen en büyük güç; temizlik, gözlem ve kırk günlük tedbirdir",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "sina-ch2-s1",
            sceneNumber: 1,
            title: "Salgın Hastalıkların Gizemi",
            narration:
              "Bin yıl önce dünyada salgın bir hastalık çıktığında insanlar nedenini bir türlü anlayamıyor, hastalıkların 'kötü yıldızlardan' veya 'uğursuz rüzgârlardan' kaynaklandığını sanıyordu. Henüz mikroskobun icat edilmesine yüzlerce yıl vardı! Ancak İbn Sînâ şifahanede hastaları dikkatle gözlemlerken, hastalıkların bir insandan diğerine ve kirli sulardan sağlam bedenlere nasıl geçtiğini araştırıyordu.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Bin yıl önce dünyada salgın bir hastalık çıktığında insanlar nedenini bir türlü anlayamıyor, hastalıkların 'kötü yıldızlardan' veya 'uğursuz rüzgârlardan' kaynaklandığını sanıyordu. Henüz mikroskobun icat edilmesine yüzlerce yıl vardı! Ancak İbn Sînâ şifahanede hastaları dikkatle gözlemlerken, hastalıkların bir insandan diğerine ve kirli sulardan sağlam bedenlere nasıl geçtiğini araştırıyordu.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbn Sînâ",
            dialogue:
              "Hastalıklar uğursuzluktan değil, doğadaki somut sebeplerden doğar! Sebebi bulursak çaresini de buluruz!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Sînâ ve Akşemseddin, mikroskobun icadından yüzyıllar önce bulaşıcı hastalıkların gözle görülmeyen canlı tohumlarla yayıldığını öngören ilk bilginlerdir.",
            imagePath: "assets/images/ibn_sina_s3_quarantine_courtyard.png",
            imageKey: "assets/images/ibn_sina_s3_quarantine_courtyard.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Cam şişeler ve şifahane laboratuvarı.",
          },
          {
            id: "sina-ch2-s2",
            sceneNumber: 2,
            title: "Gözle Görülmeyen Küçük Canlılar!",
            narration:
              "İbn Sînâ bir gün durgun bataklık suyundan içen insanların aynı ateşli hastalığa yakalandığını fark etti. Suya baktığında hiçbir şey görünmüyordu ama o üstün zekasıyla tarihi bir sonuca vardı: Suyun ve havanın içinde insan gözünün göremeyeceği kadar küçücük, hastalık taşıyan zerrecikler (mikroplar) bulunuyordu! Bu yüzden içme sularının mutlaka kaynatılması veya ince bezlerden süzülmesi gerektiğini ilan etti.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "İbn Sînâ bir gün durgun bataklık suyundan içen insanların aynı ateşli hastalığa yakalandığını fark etti. Suya baktığında hiçbir şey görünmüyordu ama o üstün zekasıyla tarihi bir sonuca vardı: Suyun ve havanın içinde insan gözünün göremeyeceği kadar küçücük, hastalık taşıyan zerrecikler (mikroplar) bulunuyordu! Bu yüzden içme sularının mutlaka kaynatılması veya ince bezlerden süzülmesi gerektiğini ilan etti.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "İbn Sînâ",
            dialogue:
              "Suyun ve nefesin içinde gözümüzün göremediği minik hastalık etkenleri vardır; suyu kaynatmak ve elleri temiz tutmak en güçlü kalkandır!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Sînâ, verem (tüberküloz) ve çiçek gibi hastalıkların nefes ve temas yoluyla insandan insana bulaştığını tıp tarihinde ilk kez kanıtlamıştır!",
            imagePath: "assets/images/ibn_sina_hospital.png",
            imageKey: "assets/images/ibn_sina_hospital.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Kaynatılan su imbikleri ve temizlik araçları.",
          },
          {
            id: "sina-ch2-s3",
            sceneNumber: 3,
            title: "Şehre Yayılan Bulaşıcı Salgın Tehlikesi",
            narration:
              "Bir kış günü kervanlarla gelen bazı yolcularda yüksek ateş ve öksürükle seyreden bulaşıcı bir hastalık görüldü. Eğer hastalar kalabalık çarşılarda dolaşmaya devam ederse birkaç hafta içinde bütün şehir hastalanacaktı! Öte yandan hastaları kaderine terk etmek de hekimlik merhametine asla sığmazdı. İbn Sînâ öğrencilerini toplayarak hem hastaları iyileştirecek hem de şehri koruyacak planını açıkladı.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Bir kış günü kervanlarla gelen bazı yolcularda yüksek ateş ve öksürükle seyreden bulaşıcı bir hastalık görüldü. Eğer hastalar kalabalık çarşılarda dolaşmaya devam ederse birkaç hafta içinde bütün şehir hastalanacaktı! Öte yandan hastaları kaderine terk etmek de hekimlik merhametine asla sığmazdı. İbn Sînâ öğrencilerini toplayarak hem hastaları iyileştirecek hem de şehri koruyacak planını açıkladı.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Genç Tıp Öğrencisi",
            dialogue:
              "Üstadım! Hastalık nefesle ve dokunmayla hızla yayılıyor; hem hastalarımıza şefkatle bakıp hem de sağlıklı insanları nasıl koruyacağız?",
            historicalNote:
              "Bunu Biliyor muydun? İslam tıbbında Peygamber Efendimizin (s.a.v.) 'Bir yerde bulaşıcı hastalık olduğunu duyarsanız oraya girmeyin, bulunduğunuz yerde çıkarsa oradan dışarı çıkmayın' hadisi temel ilke alınmıştır.",
            imagePath: "assets/images/ibn_sina_s2_canon_of_medicine.png",
            imageKey: "assets/images/ibn_sina_s2_canon_of_medicine.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Şifahanede öğrencilerine ders veren İbn Sînâ.",
          },
          {
            id: "sina-ch2-s4",
            sceneNumber: 4,
            title: "Tarihin İlk Karantinası: 'El-Erbaînîyye' (40 Gün)!",
            narration:
              "İbn Sînâ bulaşıcı hastalıkların yayılma zincirini kırmak için dünya tıp tarihine geçen 'El-Erbaînîyye' yani 'Kırk Günlük Ayrılma' yöntemini kurdu! Bulaşıcı hastalığı olan kişiler temiz havalı, güneş gören özel bakım odalarında kırk gün boyunca sağlıklı insanlardan ayrı tutularak özenle tedavi edilecek, hekimler ise sirke ile ellerini ve aletlerini dezenfekte edecekti!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "İbn Sînâ bulaşıcı hastalıkların yayılma zincirini kırmak için dünya tıp tarihine geçen 'El-Erbaînîyye' yani 'Kırk Günlük Ayrılma' yöntemini kurdu! Bulaşıcı hastalığı olan kişiler temiz havalı, güneş gören özel bakım odalarında kırk gün boyunca sağlıklı insanlardan ayrı tutularak özenle tedavi edilecek, hekimler ise sirke ile ellerini ve aletlerini dezenfekte edecekti!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "İbn Sînâ",
            dialogue:
              "Bu yöntemin adı 'Erbaînîyye' yani Kırk Gün'dür! Hastalarımızı kırk gün boyunca ayrı ve tertemiz odalarda şefkatle tedavi edeceğiz ki salgın tamamen dursun!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Sînâ'nın 'Erbaînîyye' (40 gün) yöntemi, yüzyıllar sonra Venedikli denizciler tarafından İtalyancaya 'Quarantina' (Kırk gün) olarak çevrilmiş ve bugünkü 'Karantina' kelimesi buradan doğmuştur!",
            imagePath: "assets/images/ibn_sina_hero.png",
            imageKey: "assets/images/ibn_sina_hero.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Temiz şifahane odaları ve şifalı bitkiler.",
            midDecision: {
              title: "ARA KARAR: Bulaşıcı Salgını Nasıl Durdurursun?",
              question:
                "Şehirde insandan insana geçen bulaşıcı bir hastalık başladı. Hem hastaları iyileştirmek hem de diğer insanların hastalanmasını önlemek için ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Hiçbir önlem almam, hastalarla sağlam insanları aynı kalabalık odalarda tutarım.",
                  feedback:
                    "Tedbir almamak hastalığın bütün şehre yayılmasına sebep olur!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Hastaları güneş gören temiz odalarda 40 gün boyunca ayrı tutarak ('Erbaînîyye / Karantina') özenle tedavi eder, suyu kaynatır ve elleri sirkeyle temizlerim!",
                  feedback:
                    "Harika! İbn Sînâ'nın 1000 yıl önce kurduğu 40 günlük 'Erbaînîyye' yöntemi bugünkü modern Karantina sisteminin atasıdır!",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "sina-ch2-s5",
            sceneNumber: 5,
            title: "Nabızların Dili ve Moralin Gücü",
            narration:
              "İbn Sînâ sadece ilaçlarla değil, hastaların kalbi ve moraliyle de yakından ilgileniyordu. Başparmağını hastanın bileğine koyduğunda nabzın hızından, gücünden ve ritminden tam kırk sekiz farklı nabız türünü ayırt edebiliyordu! Üstelik üzgün ve korkmuş hastaların daha geç iyileştiğini, neşeli olanların ise hastalığı hızla yendiğini keşfederek şifahanelerde su sesi ve müzikle moral tedavisi başlattı.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "İbn Sînâ sadece ilaçlarla değil, hastaların kalbi ve moraliyle de yakından ilgileniyordu. Başparmağını hastanın bileğine koyduğunda nabzın hızından, gücünden ve ritminden onlarca farklı nabız türünü ayırt edebiliyordu! Üstelik üzgün ve korkmuş hastaların daha geç iyileştiğini, neşeli olanların ise hastalığı hızla yendiğini keşfederek şifahanelerde su sesi ve müzikle moral tedavisi başlattı.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbn Sînâ",
            dialogue:
              "Unutmayın: Hastanın moralini ve sevincini yükseltmek, tedavinin yarısıdır! Güzel söz ve umut, bedenin direncini artırır.",
            historicalNote:
              "Bunu Biliyor muydun? İbn Sînâ'nın bu yaklaşımı, Selçuklu ve Osmanlı darüşşifalarında (Gevher Nesibe ve Edirne II. Bayezid Şifahanesi gibi) su sesi ve müzikle tedavi geleneğine dönüşmüştür!",
            imagePath: "assets/images/ibn_sina_s1_bukhara_library.png",
            imageKey: "assets/images/ibn_sina_s1_bukhara_library.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Güneşli şifahane avlusunda şırıldayan mermer şadırvan.",
          },
          {
            id: "sina-ch2-s6",
            sceneNumber: 6,
            title: "Yeni Bir İlacı Denemenin 7 Altın Kuralı",
            narration:
              "O dönemde bazı şifacılar hazırladıkları karışımları rastgele hastalara veriyordu. İbn Sînâ buna kesinlikle karşı çıktı ve modern eczacılığın temelini atan 'İlaç Deneme Kuralları'nı yazdı! Bir ilacın gerçekten işe yaradığını kanıtlamak için ilacın saf olması, tek bir hastalık üzerinde denenmesi ve etkisinin sabırla gözlemlenmesi gerektiğini şart koştu.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "O dönemde bazı şifacılar hazırladıkları karışımları rastgele hastalara veriyordu. İbn Sînâ buna kesinlikle karşı çıktı ve modern eczacılığın temelini atan 'İlaç Deneme Kuralları'nı yazdı! Bir ilacın gerçekten işe yaradığını kanıtlamak için ilacın saf olması, tek bir hastalık üzerinde denenmesi ve etkisinin sabırla gözlemlenmesi gerektiğini şart koştu.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "İbn Sînâ",
            dialogue:
              "İnsan hayatı deneme tahtası değildir! Bir ilacın etkisi bilimsel kurallarla kanıtlanmadan hastaya verilemez!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Sînâ'nın El-Kânûn fi't-Tıbb'ın 2. cildinde yazdığı 7 ilaç deneme şartı, bugünkü modern klinik ilaç araştırmalarının (Clinical Trials) ilk bilimsel protokolüdür!",
            imagePath: "assets/images/vakif_s1_stork_hospital_bursa.png",
            imageKey: "assets/images/vakif_s1_stork_hospital_bursa.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Hassas terazi ve şifalı bitki şişeleri.",
          },
          {
            id: "sina-ch2-s7",
            sceneNumber: 7,
            title: "Beş Ciltlik Başyapıt: El-Kânûn fi't-Tıbb",
            narration:
              "İbn Sînâ yıllar süren bütün gözlemlerini, anatomi çizimlerini, koruyucu hekimlik kurallarını ve 760'tan fazla ilacın tarifini beş ciltlik dev ansiklopedisi 'El-Kânûn fi't-Tıbb' (Tıbbın Kanunu) içinde topladı! Kitabında hastalanmadan önce sağlığı korumanın (düzenli egzersiz, dengeli uyku ve el temizliğinin) ilaç içmekten çok daha önemli olduğunu anlattı.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "İbn Sînâ yıllar süren bütün gözlemlerini, anatomi çizimlerini, koruyucu hekimlik kurallarını ve 760'tan fazla ilacın tarifini beş ciltlik dev ansiklopedisi 'El-Kânûn fi't-Tıbb' (Tıbbın Kanunu) içinde topladı! Kitabında hastalanmadan önce sağlığı korumanın (düzenli egzersiz, dengeli uyku ve el temizliğinin) ilaç içmekten çok daha önemli olduğunu anlattı.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "İbn Sînâ",
            dialogue:
              "En büyük hekimlik, hastalık gelmeden önce hareket, temizlik ve dengeli beslenmeyle sağlığı korumaktır!",
            historicalNote:
              "Bunu Biliyor muydun? Yaklaşık bir milyon kelimeden oluşan 'El-Kânûn fi't-Tıbb', o güne kadar yazılmış en düzenli ve kapsamlı tıp ansiklopedisidir.",
            imagePath: "assets/images/fatima_fihri_courtyard.png",
            imageKey: "assets/images/fatima_fihri_courtyard.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Beş ciltlik El-Kânûn fi't-Tıbb el yazmaları.",
          },
          {
            id: "sina-ch2-s8",
            sceneNumber: 8,
            title: "Avrupa Üniversitelerinde 600 Yıl Okutulan Kitap",
            narration:
              "İbn Sînâ'nın yazdığı 'El-Kânûn fi't-Tıbb', 12. yüzyılda İspanya'nın Tuleytula (Toledo) şehrinde Latinceye 'Canon Medicinae' adıyla çevrildi. Matbaanın icadından sonra Avrupa'da İncil'den sonra en çok basılan eserlerden biri oldu! Fransa'daki Montpellier ve İtalya'daki Bologna üniversitelerinde 17. yüzyılın sonuna kadar tam 600 yıl boyunca doktorların başucu ders kitabı olarak okutuldu!\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "İbn Sînâ'nın yazdığı 'El-Kânûn fi't-Tıbb', 12. yüzyılda İspanya'nın Tuleytula (Toledo) şehrinde Latinceye 'Canon Medicinae' adıyla çevrildi. Matbaanın icadından sonra Avrupa'da İncil'den sonra en çok basılan eserlerden biri oldu! Fransa'daki Montpellier ve İtalya'daki Bologna üniversitelerinde 17. yüzyılın sonuna kadar tam 600 yıl boyunca doktorların başucu ders kitabı olarak okutuldu!\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Avrupalı Tıp Profesörü",
            dialogue:
              "Hekimlerin Prensi Avicenna'nın (İbn Sînâ'nın) Kanun kitabını okumadan hiç kimse gerçek bir doktor olamaz!",
            historicalNote:
              "Bunu Biliyor muydun? Modern tıbbın kurucularından Sir William Osler, İbn Sînâ'nın kitabını 'İnsanlık tarihinde diğer tüm tıp kitaplarından daha uzun süre tıp kutsal kitabı olarak kalan eser' diye tanımlamıştır.",
            imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
            imageKey: "assets/images/artifact_qarawiyyin_astrolabe.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Bilim kürsüsü ve tıp öğrencileri.",
          },
          {
            id: "sina-ch2-s9",
            sceneNumber: 9,
            title: "İnsanlığa Adanmış Bir Ömür",
            narration:
              "Buhara'dan Hemedan'a uzanan ömrü boyunca bilimin her dalında eserler veren İbn Sînâ, 1037 yılında vefat ettiğinde arkasında milyonlarca insanın hayatını kurtaran bilimsel ilkeler bıraktı. Bugün bile ellerimizi yıkarken, suyu temiz tutarken ve salgınlarda karantina uygularken bin yıl önceki o meraklı Buharalı gencin mirasını yaşıyoruz.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Buhara'dan Hemedan'a uzanan ömrü boyunca bilimin her dalında eserler veren İbn Sînâ, 1037 yılında vefat ettiğinde arkasında milyonlarca insanın hayatını kurtaran bilimsel ilkeler bıraktı. Bugün bile ellerimizi yıkarken, suyu temiz tutarken ve salgınlarda karantina uygularken bin yıl önceki o meraklı Buharalı gencin mirasını yaşıyoruz.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbn Sînâ",
            dialogue:
              "Bilim ve merhamet iki kanat gibidir; biri olmadan insanlık şifaya uçamaz!",
            historicalNote:
              "Bunu Biliyor muydun? Ay'daki bir kratere ('Avicenna Krateri') ve Ankara Üniversitesi Tıp Fakültesi Hastanesi'ne İbn Sînâ'nın adı verilmiştir.",
            imagePath: "assets/images/harizmi_s1_house_of_wisdom.png",
            imageKey: "assets/images/harizmi_s1_house_of_wisdom.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Mum ışığında parlayan tıp mirası.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Şehirde hızla yayılan bulaşıcı bir hastalık çıktı. Henüz mikroskobun icat edilmediği bir çağda hem hastaları iyileştirmek hem de salgını durdurmak için nasıl bir yöntem kurarsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Hastalığın kötü yıldızlardan geldiğini söyleyip hiçbir temizlik önlemi almam.",
              feedback:
                "Hurafelere sığınmak bilimsel gözleme aykırıdır ve salgını büyütür!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Hastaları şehrin dışına terk edip onlara hiç ilaç vermem.",
              feedback:
                "Hastaları terk etmek hekimlik ahlakına ve merhamete asla sığmaz!",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Hastalıkların gözle görülmeyen küçük etkenlerle bulaştığını tespit eder; suları kaynatır, 40 günlük bakım ve izolasyon ('Erbaînîyye / Karantina') kurar ve tüm tıp bilgilerini 'El-Kânûn fi't-Tıbb' eserinde toplarım!",
              feedback:
                "Tarihi Hakikat! İbn Sînâ 40 günlük karantinayı ve bulaşıcı hastalıkların yayılma yollarını keşfederek dünya tıp tarihine yön verdi!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "İbn Sînâ, bulaşıcı hastalıkların su ve hava yoluyla gözle görülmeyen küçük etkenlerle yayıldığını fark etti. Salgınları önlemek için 40 günlük izolasyon yöntemi olan 'El-Erbaînîyye'yi (Karantina) kurdu ve 600 yıl boyunca dünyada ders kitabı olarak okutulan 'El-Kânûn fi't-Tıbb' eserini yazdı.",
          quoteHighlight:
            "Hastanın moralini yükseltmek tedavinin yarısıdır; temizlik ve kırk günlük tedbir ise salgının kalkanıdır!",
        },
        rewardArtifact: {
          id: "artifact-canon-of-medicine",
          name: "El-Kânûn fi't-Tıbb ve Şifa İksiri",
          heroId: "ibn-sina",
          chapterId: "ibn-sina-ch2",
          imagePath: "assets/images/ibn_sina_hospital.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik ve Şifa Puanı",
          points: 50,
          unlockedTitle: "Hekimlerin Sultanı Çırağı",
          shortDescription:
            "Avrupa ve İslam dünyasında 600 yıl boyunca doktorların başucu kitabı olan 5 ciltlik El-Kânûn fi't-Tıbb ansiklopedisi.",
          historicalNote:
            "İbn Sînâ'nın 'El-Erbaînîyye' (40 gün) yöntemi İtalyancaya 'Quarantina' olarak geçmiş ve modern tıp tarihindeki karantina uygulamasını başlatmıştır.",
          accentColor: "#0D9488",
          hotspots: [
            {
              id: "quarantine-forty",
              xPercent: 48,
              yPercent: 30,
              title: "El-Erbaînîyye (40 Günlük Karantina)",
              secretFact:
                "Bulaşıcı hastalıkların yayılmasını önlemek için uygulanan 40 günlük ayrılma süresi, bugünkü 'Karantina' kelimesinin doğrudan kökenidir.",
            },
            {
              id: "canon-five-volumes",
              xPercent: 32,
              yPercent: 64,
              title: "5 Ciltlik Tıp Kanunu",
              secretFact:
                "Anatomi, ilaç bilimi, cerrahi ve koruyucu hekimliği sistemli şekilde anlatan bu eser 17. yüzyıla kadar Avrupa'da ders kitabı olarak okutulmuştur.",
            },
            {
              id: "pulse-music-therapy",
              xPercent: 68,
              yPercent: 62,
              title: "Nabız ve Moral Tedavisi",
              secretFact:
                "İbn Sînâ ruh sağlığı ile beden sağlığının birbiriyle bağlantılı olduğunu keşfederek hastaların moralini yüksek tutmayı tedavinin temeli saymıştır.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Bugün kullandığımız 'Karantina' kelimesinin İbn Sînâ'nın 1000 yıl önce uyguladığı '40 Günlük Tedbir (Erbaînîyye)' yönteminden geldiğini duymak seni şaşırttı mı?",
          "İbn Sînâ neden 'En iyi hekimlik hastalanmadan önce sağlığı korumaktır' demiştir? Sağlığımızı korumak için her gün neler yapabiliriz?",
          "Hasta olan bir arkadaşımıza veya aile büyüğümüze güzel söz söyleyip moral vermek onun iyileşmesine nasıl yardımcı olur?",
        ],
      },
    ],
  },

  // ==========================================================================
  // 11. KAHRAMAN: HÂRİZMÎ & MERYEM EL-İCLİYYE (2 BÖLÜM - 9'AR SAHNE)
  // ==========================================================================
  {
    id: "harizmi-meryem",
    name: "Hârizmî & Meryem el-İcliyye",
    heroClass: "BILIM_DENEY",
    heroClassLabel: "Bilim ve Deney",
    classBadgeLabel: "Bilim ve Deney",
    title: "Cebirin, Algoritmanın ve Usturlabın Öncüleri",
    era: "780–850 (Bağdat) & 10. Yüzyıl (Halep)",
    location: "Bağdat & Halep",
    visualMode: "CHARACTER_PORTRAIT",
    coverImage: "assets/images/harizmi_usturlap.png",
    crisisImage: "assets/images/meryem_el_icliyye_astrolabe.png",
    images: {
      cover: "assets/images/harizmi_usturlap.png",
      crisis: "assets/images/meryem_el_icliyye_astrolabe.png",
      artifact: "assets/images/artifact_qarawiyyin_astrolabe.png",
    },
    accentColor: "#0D9488",
    secondaryColor: "#D97706",
    badgeText: "Cebir, Algoritma & Usturlap",
    summary:
      "Sıfır rakamını, Cebir bilimini ve bilgisayarlara hayat veren 'Algoritma' kavramını dünyaya kazandıran Hârizmî ile gökyüzünü ölçen en hassas usturlapları tasarlayan kadın mühendis Meryem el-İcliyye.",
    shortBio:
      "Sıfır rakamını, Cebir bilimini ve bilgisayarlara hayat veren 'Algoritma' kavramını dünyaya kazandıran Hârizmî ile gökyüzünü ölçen en hassas usturlapları tasarlayan kadın mühendis Meryem el-İcliyye.",
    chapters: [
      // ------------------------------------------------------------------------
      // BÖLÜM 1: HÂRİZMÎ VE SIFIRIN / CEBİRİN DOĞUŞU (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "harizmi-meryem-ch1",
        heroId: "harizmi-meryem",
        chapterNumber: 1,
        title: "Hârizmî ve Sıfırın/Cebirin Doğuşu",
        subtitle: "Sıfırdan doğan sonsuzluk ve bilgisayarlara adını veren Algoritma",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "harizmi-ch1-s1",
            sceneNumber: 1,
            title: "Bağdat'taki Bilgelik Evi: Beytü'l-Hikme",
            narration:
              "Dokuzuncu yüzyılın başında Bağdat şehri, dünyanın dört bir yanından gelen matematikçilerin, astronomların ve mütercimlerin buluştuğu büyük bir bilim merkeziydi. Şehrin kalbindeki 'Beytü'l-Hikme' (Bilgelik Evi) Akademisi'nin başkanı ise Türkistan'ın Harezm bölgesinden gelen büyük matematik ve astronomi bilgini Muhammed bin Mûsâ el-Hârizmî idi!\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Dokuzuncu yüzyılın başında Bağdat şehri, dünyanın dört bir yanından gelen matematikçilerin, astronomların ve mütercimlerin buluştuğu büyük bir bilim merkeziydi. Şehrin kalbindeki 'Beytü'l-Hikme' (Bilgelik Evi) Akademisi'nin başkanı ise Türkistan'ın Harezm bölgesinden gelen büyük matematik ve astronomi bilgini Muhammed bin Mûsâ el-Hârizmî idi!\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hârizmî",
            dialogue:
              "Sayılar evrenin dilidir! İnsanların günlük hayatta, ticarette, arazi ölçümünde ve yıldız hesaplarında kolayca kullanabileceği yeni bir matematik dili kurmalıyız!",
            historicalNote:
              "Bunu Biliyor muydun? 780 yılında Harezm'de doğan Hârizmî, Abbâsî Halifesi Me'mûn döneminde Beytü'l-Hikme kütüphanesi ve rasathanesinin başkanlığını yapmıştır.",
            imagePath: "assets/images/harizmi_s1_house_of_wisdom.png",
            imageKey: "assets/images/harizmi_s1_house_of_wisdom.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Beytü'l-Hikme balkonunda parşömenler ve geometrik çizimler.",
          },
          {
            id: "harizmi-ch1-s2",
            sceneNumber: 2,
            title: "Romen Rakamlarının Zorluğu ve 'Sıfır' (Es-Sıfr)!",
            narration:
              "O dönemde pek çok ülkede harflerle veya Romen rakamlarıyla (MCMLXXXVIII gibi) hesap yapılmaya çalışılıyor, basit bir çarpma işlemi bile saatler sürüyordu! Hârizmî, 1'den 9'a kadar olan rakamların yanına 'boşluk' anlamına gelen 'Es-Sıfr' yani 'Sıfır (0)' rakamını ve onluk basamak sistemini yerleştirdi! Artık sıfır sayesinde sadece on rakamla trilyonlarca büyüklükteki sayılar bile saniyeler içinde yazılıp toplanabiliyordu!\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "O dönemde pek çok ülkede harflerle veya Romen rakamlarıyla (MCMLXXXVIII gibi) hesap yapılmaya çalışılıyor, basit bir çarpma işlemi bile saatler sürüyordu! Hârizmî, 1'den 9'a kadar olan rakamların yanına 'boşluk' anlamına gelen 'Es-Sıfr' yani 'Sıfır (0)' rakamını ve onluk basamak sistemini yerleştirdi! Artık sıfır sayesinde sadece on rakamla trilyonlarca büyüklükteki sayılar bile saniyeler içinde yazılıp toplanabiliyordu!\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Hârizmî",
            dialogue:
              "Bir basamakta hiçbir değer olmadığında orası karışmasın diye küçük bir daire (0) koyacağız! Bu küçük sıfır, matematiğin en büyük anahtarı olacak!",
            historicalNote:
              "Bunu Biliyor muydun? Arapça 'Es-Sıfr' kelimesi İtalyancaya 'Zefiro / Zero' (Sıfır) ve Fransızcaya 'Chiffre' (Şifre / Rakam) olarak geçmiştir!",
            imagePath: "assets/images/harizmi_s2_sundial_observatory.png",
            imageKey: "assets/images/harizmi_s2_sundial_observatory.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Parşömen üzerinde 0'dan 9'a rakamlar ve basamaklar.",
          },
          {
            id: "harizmi-ch1-s3",
            sceneNumber: 3,
            title: "Çarşıdaki Miras ve Arazi Problemleri",
            narration:
              "Bir gün Bağdat kadıları ve tüccarları Hârizmî'nin yanına gelerek karşılaştıkları karmaşık hesapları anlattılar: Bir tarlanın kenar uzunluğu bilinmediğinde alanı nasıl bölüştürülecek, kanalların su hacmi ve miras payları hatasızca nasıl hesaplanacaktı? Her problemi tek tek deneme-yanılma yoluyla çözmek günler alıyordu.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Bir gün Bağdat kadıları ve tüccarları Hârizmî'nin yanına gelerek karşılaştıkları karmaşık hesapları anlattılar: Bir tarlanın kenar uzunluğu bilinmediğinde alanı nasıl bölüştürülecek, kanalların su hacmi ve miras payları hatasızca nasıl hesaplanacaktı? Her problemi tek tek deneme-yanılma yoluyla çözmek günler alıyordu.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Bağdatlı Mühendis",
            dialogue:
              "Üstadım! Kanal kazarken ve arazi ölçerken bilinmeyen uzunlukları bulmak için her seferinde günlerce tahminde bulunuyoruz; bunun kesin bir yolu yok mudur?",
            historicalNote:
              "Bunu Biliyor muydun? Hârizmî matematik kitabını sadece teorik merak için değil, insanların miras, ticaret, kanal kazma ve arazi ölçümü işlerini kolaylaştırmak için yazdığını bizzat belirtmiştir!",
            imagePath: "assets/images/harizmi_usturlap.png",
            imageKey: "assets/images/harizmi_usturlap.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Arazi ölçüm krokileri ve pergel.",
          },
          {
            id: "harizmi-ch1-s4",
            sceneNumber: 4,
            title: "Bilinmeyen Sayıya İsim Vermek: 'Şey (x)'!",
            narration:
              "Hârizmî parşömenin üzerine iki kefesi birbirine eşit bir terazi çizdi. Aradığımız ama henüz kaç olduğunu bilmediğimiz sayıya Arapçada 'Şey' (nesne / bilinmeyen) adını verdi! Eşitliğin iki tarafındaki sayıları terazi kefeleri gibi dengeleyerek bilinmeyen 'Şey'i yalnız bırakma yöntemini kurdu. İşte matematikte bugün kullandığımız 'x' harfi ve denklemler tam o anda doğdu!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Hârizmî parşömenin üzerine iki kefesi birbirine eşit bir terazi çizdi. Aradığımız ama henüz kaç olduğunu bilmediğimiz sayıya Arapçada 'Şey' (nesne / bilinmeyen) adını verdi! Eşitliğin iki tarafındaki sayıları terazi kefeleri gibi dengeleyerek bilinmeyen 'Şey'i yalnız bırakma yöntemini kurdu. İşte matematikte bugün kullandığımız 'x' harfi ve denklemler tam o anda doğdu!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Hârizmî",
            dialogue:
              "Bir denklem tıpkı iki kefeli adalet terazisi gibidir! Eksilen parçayı tamamlayarak ('El-Cebr') ve iki kefeyi dengeleyerek ('El-Mukâbele') bilinmeyen sayıyı şaşmadan bulabiliriz!",
            historicalNote:
              "Bunu Biliyor muydun? Hârizmî'nin bilinmeyen sayı için kullandığı Arapça 'Şey' (Shay) kelimesi İspanyolcaya 'Xay' olarak geçmiş ve zamanla kısaltılarak bugünkü matematikteki 'x' harfine dönüşmüştür!",
            imagePath: "assets/images/meryem_el_icliyye_astrolabe.png",
            imageKey: "assets/images/meryem_el_icliyye_astrolabe.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Geometrik kareler ve cebir denklemleri.",
            midDecision: {
              title: "ARA KARAR: Bilinmeyen Bir Sayıyı Nasıl Bulursun?",
              question:
                "Bir tarlanın bilinmeyen kenar uzunluğunu bulman gerekiyor. Rastgele sayılar sallayarak mı denersin, yoksa Hârizmî'nin yöntemiyle mi çözersin?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Aklıma gelen sayıları rastgele denerim, belki biri tutar.",
                  feedback:
                    "Rastgele tahmin yapmak büyük mühendislik hesaplarında hataya yol açar!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Bilinmeyen sayıya 'Şey (x)' derim ve eşitliğin iki tarafını terazi gibi dengeleyerek ('Cebir ve Mukâbele' yöntemiyle) kesin sonucu adım adım bulurum!",
                  feedback:
                    "Tam isabet! Hârizmî'nin kurduğu bu dengeleme yöntemi dünya tarihine 'Cebir (Algebra)' bilimini kazandırdı!",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "harizmi-ch1-s5",
            sceneNumber: 5,
            title: "Cebir Biliminin Doğuşu: Hisâbü'l-Cebr ve'l-Mukâbele",
            narration:
              "Hârizmî 830 yılı civarında ünlü başyapıtı 'El-Kitâbü'l-Muhtasar fî Hisâbi'l-Cebr ve'l-Mukâbele'yi tamamladı. Kitabın adındaki 'El-Cebr' (tamamlama, onarma) kelimesi, matematiğin yepyeni bir dalının adı oldu: Doğuda 'Cebir', Batıda ise 'Algebra'! Üstelik Hârizmî yazdığı her denklemi sadece sayılarla bırakmadı, yanına kareler ve dikdörtgenler çizerek geometrik olarak da kanıtladı!\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Hârizmî 830 yılı civarında ünlü başyapıtı 'El-Kitâbü'l-Muhtasar fî Hisâbi'l-Cebr ve'l-Mukâbele'yi tamamladı. Kitabın adındaki 'El-Cebr' (tamamlama, onarma) kelimesi, matematiğin yepyeni bir dalının adı oldu: Doğuda 'Cebir', Batıda ise 'Algebra'! Üstelik Hârizmî yazdığı her denklemi sadece sayılarla bırakmadı, yanına kareler ve dikdörtgenler çizerek geometrik olarak da kanıtladı!\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hârizmî",
            dialogue:
              "Sayılarla bulduğumuz her eşitliği, karelerin ve dikdörtgenlerin alanlarıyla gözle görülür şekilde kanıtlamalıyız ki zihinlerde hiçbir şüphe kalmasın!",
            historicalNote:
              "Bunu Biliyor muydun? Bugün tüm dünyada okullarda okutulan 'Algebra' (Cebir) dersinin adı doğrudan Hârizmî'nin kitabındaki 'El-Cebr' kelimesinden gelmektedir!",
            imagePath: "assets/images/meryem_s2_celestial_globe.png",
            imageKey: "assets/images/meryem_s2_celestial_globe.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Kare tamamlama yöntemi çizimleri.",
          },
          {
            id: "harizmi-ch1-s6",
            sceneNumber: 6,
            title: "Hârizmî'nin Adından Doğan Kelime: 'Algoritma'!",
            narration:
              "Hârizmî her matematik problemini çözerken karışıklığı önlemek için birinci adım, ikinci adım, üçüncü adım şeklinde çok net ve sıralı kurallar dizisi yazıyordu. Yüzyıllar sonra onun Hint rakamlarını ve hesap kurallarını anlattığı kitabı Latinceye çevrildiğinde, ilk sayfasına 'Dixit Algoritmi' yani 'Hârizmî şöyle dedi' yazıldı! Zamanla 'Hârizmî'nin Yöntemi' anlamına gelen bu kelime, dünyadaki bütün dillerde 'Algoritma' (Algorithm) oldu!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Hârizmî her matematik problemini çözerken karışıklığı önlemek için birinci adım, ikinci adım, üçüncü adım şeklinde çok net ve sıralı kurallar dizisi yazıyordu. Yüzyıllar sonra onun Hint rakamlarını ve hesap kurallarını anlattığı kitabı Latinceye çevrildiğinde, ilk sayfasına 'Dixit Algoritmi' yani 'Hârizmî şöyle dedi' yazıldı! Zamanla 'Hârizmî'nin Yöntemi' anlamına gelen bu kelime, dünyadaki bütün dillerde 'Algoritma' (Algorithm) oldu!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Hârizmî",
            dialogue:
              "En karmaşık problem bile doğru sırayla atılan küçük ve düzenli adımlara bölündüğünde kolayca çözülür!",
            historicalNote:
              "Bunu Biliyor muydun? Bugün bilgisayar oyunlarının, yapay zekânın ve kodlamanın temeli olan 'Algoritma' kelimesi, bizzat büyük bilgin 'El-Hârizmî'nin kendi ismidir!",
            imagePath: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
            imageKey: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Adım adım hesap şemaları ve rakamlar.",
          },
          {
            id: "harizmi-ch1-s7",
            sceneNumber: 7,
            title: "Sincar Ovası'nda Dünyanın Çevresini Ölçmek!",
            narration:
              "Hârizmî sadece masa başında oturan bir matematikçi değildi! Astronom arkadaşlarıyla birlikte Sincar Çölü'ne gitti. Kutup Yıldızı'nın yüksekliğini usturlapla ölçtükten sonra biri kuzeye, diğeri güneye doğru halatlarla tam bir derecelik enlem farkı oluşana kadar yürüdüler! Bu ölçümle Dünya'nın çevresini bugünkü modern uydu ölçümlerine inanılmaz derecede yakın bir doğrulukla hesapladılar!\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Hârizmî sadece masa başında oturan bir matematikçi değildi! Astronom arkadaşlarıyla birlikte Sincar Çölü'ne gitti. Kutup Yıldızı'nın yüksekliğini usturlapla ölçtükten sonra biri kuzeye, diğeri güneye doğru halatlarla tam bir derecelik enlem farkı oluşana kadar yürüdüler! Bu ölçümle Dünya'nın çevresini bugünkü modern uydu ölçümlerine inanılmaz derecede yakın bir doğrulukla hesapladılar!\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Hârizmî",
            dialogue:
              "Bir derecelik meridyen yayını çölde adımlarımızla ve usturlapla ölçtük; bunu 360 ile çarptığımızda yerkürenin tam çevresini buluyoruz!",
            historicalNote:
              "Bunu Biliyor muydun? Hârizmî ve ekibinin 9. yüzyılda Sincar Ovası'nda yaptığı bu ölçüm, Dünya'nın çevresini yaklaşık 40.000 km olarak neredeyse sıfır hatayla bulmuştur!",
            imagePath: "assets/images/ali_kuscu_moon_map.png",
            imageKey: "assets/images/ali_kuscu_moon_map.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Yıldızlı gökyüzü altında usturlapla ölçüm.",
          },
          {
            id: "harizmi-ch1-s8",
            sceneNumber: 8,
            title: "70 Coğrafyacı İle Çizilen Dünya Haritası",
            narration:
              "Hârizmî ayrıca yetmiş bilim insanıyla birlikte çalışarak 'Kitâbü Sûreti'l-Arz' (Yeryüzünün Şekli) adlı büyük coğrafya atlasını hazırladı. Eski Yunan coğrafyacısı Batlamyus'un Akdeniz'in uzunluğu hakkındaki hatalarını düzeltti; şehirlerin, dağların, denizlerin ve nehirlerin enlem ve boylam koordinatlarını tek tek cetveller halinde kaydetti.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Hârizmî ayrıca yetmiş bilim insanıyla birlikte çalışarak 'Kitâbü Sûreti'l-Arz' (Yeryüzünün Şekli) adlı büyük coğrafya atlasını hazırladı. Eski Yunan coğrafyacısı Batlamyus'un Akdeniz'in uzunluğu hakkındaki hatalarını düzeltti; şehirlerin, dağların, denizlerin ve nehirlerin enlem ve boylam koordinatlarını tek tek cetveller halinde kaydetti.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Hârizmî",
            dialogue:
              "Coğrafya ve astronomi matematiğin ikiz kardeşidir; gökyüzündeki yıldızları ölçmeden yeryüzünün haritası doğru çizilemez!",
            historicalNote:
              "Bunu Biliyor muydun? Hârizmî'nin hazırladığı 'Zîc' (Astronomi Cetvelleri), Güneş, Ay ve beş gezegenin hareketlerini gösteren ilk kapsamlı İslam astronomi tablolarıdır.",
            imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
            imageKey: "assets/images/artifact_qarawiyyin_astrolabe.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Koordinat cetvelleri ve dünya haritası.",
          },
          {
            id: "harizmi-ch1-s9",
            sceneNumber: 9,
            title: "Her Bilgisayarın Kalbinde Yaşayan İsim",
            narration:
              "Sekiz yüz elli yılında Bağdat'ta vefat eden Hârizmî, insanlığa 'Sıfır (0)', 'Cebir (Algebra)' ve kendi adını taşıyan 'Algoritma' kavramlarını miras bıraktı. Bugün elimizdeki tabletin, telefonun ve uzay araçlarının çalışmasını sağlayan bütün bilgisayar kodları, bin iki yüz yıl önce Hârizmî'nin Bağdat'ta kurduğu o matematik temeli üzerinde yükselmektedir!\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Sekiz yüz elli yılında Bağdat'ta vefat eden Hârizmî, insanlığa 'Sıfır (0)', 'Cebir (Algebra)' ve kendi adını taşıyan 'Algoritma' kavramlarını miras bıraktı. Bugün elimizdeki tabletin, telefonun ve uzay araçlarının çalışmasını sağlayan bütün bilgisayar kodları, bin iki yüz yıl önce Hârizmî'nin Bağdat'ta kurduğu o matematik temeli üzerinde yükselmektedir!\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hârizmî",
            dialogue:
              "Küçücük bir sıfır ve doğru kurulmuş bir algoritma ile çözülemeyecek hiçbir bilmece yoktur!",
            historicalNote:
              "Bunu Biliyor muydun? Ay'ın görünmeyen yüzündeki büyük kraterlerden birine ('Al-Khwarizmi Krateri') bu büyük matematik dehamızın adı verilmiştir!",
            imagePath: "assets/images/ibn_sina_s1_bukhara_library.png",
            imageKey: "assets/images/ibn_sina_s1_bukhara_library.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Bağdat semalarında parlayan cebir ve yıldız mirası.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "İnsanlar hantal rakamlarla hesap yaparken sürekli hata yapıyor ve bilinmeyen uzunlukları bulmakta zorlanıyor. Matematikte devrim yapmak için nasıl bir sistem kurarsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Eski karışık harf rakamlarını olduğu gibi kullanmaya devam ederim.",
              feedback:
                "Eski hantal yöntemlerle ne büyük mühendislik hesapları ne de modern bilim kurulabilirdi!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Hesap yöntemlerini sadece kendime saklar, kimseye öğretmem.",
              feedback:
                "Hârizmî kitabını herkes kolayca öğrensin diye açık ve anlaşılır adımlarla yazmıştır.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Onluk basamak sistemine 'Sıfır (0)' rakamını eklerim, bilinmeyen sayıyı bulmak için 'Cebir (El-Cebr)' denklemlerini ve adım adım çözüm kurallarını ('Algoritma') yazarım!",
              feedback:
                "Tarihi Hakikat! Hârizmî Sıfır'ı, Cebir'i ve Algoritma'yı dünyaya kazandırarak modern bilgisayar çağının temelini attı!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Muhammed bin Mûsâ el-Hârizmî, 'Hisâbü'l-Cebr ve'l-Mukâbele' eseriyle Cebir (Algebra) bilimini kurdu, Sıfır (0) rakamlı onluk sistemi yaygınlaştırdı ve adım adım problem çözme yöntemiyle kendi adından türeyen 'Algoritma' kavramını insanlığa armağan etti.",
          quoteHighlight:
            "En karmaşık problem bile doğru sırayla atılan düzenli adımlarla (Algoritma ile) kolayca çözülür!",
        },
        rewardArtifact: {
          id: "artifact-algebra-scroll",
          name: "Hârizmî'nin Cebir ve Algoritma Parşömeni",
          heroId: "harizmi-meryem",
          chapterId: "harizmi-meryem-ch1",
          imagePath: "assets/images/harizmi_usturlap.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik Puanı",
          points: 50,
          unlockedTitle: "Algoritma Ustası",
          shortDescription:
            "Sıfır (0) rakamını, 'Şey (x)' bilinmeyenini ve geometrik cebir kanıtlarını içeren tarihi Beytü'l-Hikme parşömeni.",
          historicalNote:
            "Hârizmî'nin 830 yılında Bağdat'ta yazdığı Cebir kitabı ve Hint Hesabı eseri, hem Doğu'da hem Avrupa'da modern matematiğin doğuşunu sağlamıştır.",
          accentColor: "#0D9488",
          hotspots: [
            {
              id: "zero-digit",
              xPercent: 32,
              yPercent: 35,
              title: "Es-Sıfr (Sıfır Rakamı)",
              secretFact:
                "Basamak sisteminde boşluğu gösteren 'Es-Sıfr' (0), Avrupa dillerine 'Zero' ve 'Şifre' olarak geçmiştir.",
            },
            {
              id: "al-jabr-scale",
              xPercent: 52,
              yPercent: 55,
              title: "El-Cebr (Algebra) Dengesi",
              secretFact:
                "Bilinmeyen 'Şey (x)' değerini bulmak için eşitliğin iki tarafını terazi gibi dengeleme sanatıdır.",
            },
            {
              id: "algoritmi-steps",
              xPercent: 68,
              yPercent: 70,
              title: "Dixit Algoritmi (Algoritma)",
              secretFact:
                "Bugün bilgisayar kodlamasında kullandığımız 'Algoritma' kelimesi doğrudan Hârizmî'nin Latince telaffuzundan doğmuştur!",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Eğer 'Sıfır (0)' rakamı olmasaydı 10, 100 veya 2026 gibi sayıları yazmak neden çok zor olurdu?",
          "Bilgisayarlarda ve tabletlerde kullandığımız 'Algoritma' kelimesinin Hârizmî'nin kendi adından geldiğini öğrendiğinde ne hissettin?",
          "Günlük hayatımızda (örneğin sabah okula hazırlanırken veya kek yaparken) farkında olmadan hangi 'algoritma' adımlarını uyguluyoruz?",
        ],
      },

      // ------------------------------------------------------------------------
      // BÖLÜM 2: MERYEM EL-İCLİYYE VE GÖKYÜZÜNÜ ÖLÇEN USTURLAP (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "harizmi-meryem-ch2",
        heroId: "harizmi-meryem",
        chapterNumber: 2,
        title: "Meryem el-İcliyye ve Gökyüzünü Ölçen Usturlap",
        subtitle: "Gökyüzündeki yıldızları avuç içine sığdıran kadın mühendis",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "meryem-ch2-s1",
            sceneNumber: 1,
            title: "Halep'te Bir Astronomi Atölyesi",
            narration:
              "Onuncu yüzyılda Suriye'nin Halep şehrinde, güneş ışığının vurduğu taş bir atölyede parlak pirinç levhalar, pergeller ve yıldız haritaları duruyordu. Bağdatlı ünlü usturlap ustası Kûşyâr el-Cîlî'nin öğrencisi olan kızı Meryem el-İcliyye (el-Usturlâbî), çocukluğundan beri babasının yanında hem gök (astronomi) matematiğini hem de ince metal işleme sanatını öğrenmişti.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Onuncu yüzyılda Suriye'nin Halep şehrinde, güneş ışığının vurduğu taş bir atölyede parlak pirinç levhalar, pergeller ve yıldız haritaları duruyordu. Bağdatlı ünlü usturlap ustası Kûşyâr el-Cîlî'nin öğrencisi olan kızı Meryem el-İcliyye (el-Usturlâbî), çocukluğundan beri babasının yanında hem gök (astronomi) matematiğini hem de ince metal işleme sanatını öğrenmişti.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Meryem el-İcliyye",
            dialogue:
              "Gökyüzü uçsuz bucaksız bir saat gibidir; doğru matematik ve sabırlı bir işçilikle bütün yıldızların yörüngesini bu pirinç diskin üzerine işleyebiliriz!",
            historicalNote:
              "Bunu Biliyor muydun? 10. yüzyılda Halep'te yaşayan Meryem el-İcliyye, tarihte adı kaynaklara geçen en ünlü kadın astronomi aleti ve usturlap mühendisidir!",
            imagePath: "assets/images/meryem_el_icliyye_astrolabe.png",
            imageKey: "assets/images/meryem_el_icliyye_astrolabe.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Güneşli balkonda pirinç usturlap tutan Meryem el-İcliyye.",
          },
          {
            id: "meryem-ch2-s2",
            sceneNumber: 2,
            title: "Antik Dünyanın Cep Bilgisayarı: Usturlap Nedir?",
            narration:
              "Peki Meryem'in gece gündüz üzerinde çalıştığı 'Usturlap' ne işe yarıyordu? Usturlap; gökyüzünün üç boyutlu kubbesini düz bir pirinç daire üzerine indiren muazzam bir mekanik gök bilgisayarıydı! İnsanlar usturlabı güneşe veya gece en parlak yıldızlara tutarak saatin kaç olduğunu, sabah şafağının ne zaman sökeceğini, kıble yönünü ve bulundukları şehrin enlemini tek bir bakışta bulabiliyordu!\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Peki Meryem'in gece gündüz üzerinde çalıştığı 'Usturlap' ne işe yarıyordu? Usturlap; gökyüzünün üç boyutlu kubbesini düz bir pirinç daire üzerine indiren muazzam bir mekanik gök bilgisayarıydı! İnsanlar usturlabı güneşe veya gece en parlak yıldızlara tutarak saatin kaç olduğunu, sabah şafağının ne zaman sökeceğini, kıble yönünü ve bulundukları şehrin enlemini tek bir bakışta bulabiliyordu!\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Meryem el-İcliyye",
            dialogue:
              "Bir usturlap sadece tek bir alet değildir; içinde hem saat, hem pusula, hem takvim, hem de dağların boyunu ölçen bir geometri cetveli taşır!",
            historicalNote:
              "Bunu Biliyor muydun? Usturlapla 1000 yıl önce gece ve gündüz saati birkaç dakikalık hassasiyetle ölçülebildiği gibi, derin kuyuların derinliği ve kalelerin yüksekliği de hesaplanabiliyordu!",
            imagePath: "assets/images/meryem_s2_celestial_globe.png",
            imageKey: "assets/images/meryem_s2_celestial_globe.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "İşlemeli altın ve pirinç usturlap halkaları.",
          },
          {
            id: "meryem-ch2-s3",
            sceneNumber: 3,
            title: "Farklı Şehirlerde Şaşan Ölçüm Sorunu",
            narration:
              "Ancak o dönemde yapılan sıradan usturlapların büyük bir zorluğu vardı. Bağdat için yapılan bir usturlap Halep'e, Kahire'ye veya İstanbul'a götürüldüğünde, o şehrin enlem açısı farklı olduğu için yıldızların konumu kayıyor ve saat hesabı şaşıyordu! Üstelik pirinç levhaların üzerindeki çizgilerde saç teli kadar bile kayma olsa denizciler rotalarını kaybedebilirdi.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Ancak o dönemde yapılan sıradan usturlapların büyük bir zorluğu vardı. Bağdat için yapılan bir usturlap Halep'e, Kahire'ye veya İstanbul'a götürüldüğünde, o şehrin enlem açısı farklı olduğu için yıldızların konumu kayıyor ve saat hesabı şaşıyordu! Üstelik pirinç levhaların üzerindeki çizgilerde saç teli kadar bile kayma olsa denizciler rotalarını kaybedebilirdi.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Kervan Kılavuzu",
            dialogue:
              "Usta Meryem! Bağdat'tan aldığımız usturlap Halep'e ve Şam'a geldiğimizde saati ve yıldız açılarını tam göstermiyor; bize her şehirde doğru çalışacak bir tasarım lazım!",
            historicalNote:
              "Bunu Biliyor muydun? Dünya yuvarlak olduğu için kuzeye veya güneye gidildikçe yıldızların ufuktan görünme açısı değişir.",
            imagePath: "assets/images/harizmi_usturlap.png",
            imageKey: "assets/images/harizmi_usturlap.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Farklı şehir enlemlerini gösteren çizimler.",
          },
          {
            id: "meryem-ch2-s4",
            sceneNumber: 4,
            title: "Değiştirilebilir Enlem Plakaları ve Örümcek Ağı (Ankebût)!",
            narration:
              "Meryem el-İcliyye bu sorunu çözmek için usturlabın ana gövdesinin ('Ümm') içine her büyük şehrin enlemine göre özel olarak hesaplanmış, takılıp çıkarılabilen ince pirinç 'İklim Plakaları (Safîha)' yerleştirdi! En üstüne ise gökyüzündeki en parlak yıldızların yerini sivri ibrelerle gösteren, dönen kafes şeklinde muazzam bir 'Örümcek (Ankebût)' diski monte etti.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Meryem el-İcliyye bu sorunu çözmek için usturlabın ana gövdesinin ('Ümm') içine her büyük şehrin enlemine göre özel olarak hesaplanmış, takılıp çıkarılabilen ince pirinç 'İklim Plakaları (Safîha)' yerleştirdi! En üstüne ise gökyüzündeki en parlak yıldızların yerini sivri ibrelerle gösteren, dönen kafes şeklinde muazzam bir 'Örümcek (Ankebût)' diski monte etti.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Meryem el-İcliyye",
            dialogue:
              "İşte şimdi tamam! Yolcu hangi şehre giderse o şehrin enlem plakasını üste takacak; üstteki yıldız kafesini döndürdüğünde gökyüzünün o anki haritası avucunun içinde belirecek!",
            historicalNote:
              "Bunu Biliyor muydun? Usturlabın en üstündeki dönen yıldız haritası parçasına, ince metal kolları örümcek ağına benzediği için Arapçada 'Ankebût' (Örümcek) denir!",
            imagePath: "assets/images/harizmi_s2_sundial_observatory.png",
            imageKey: "assets/images/harizmi_s2_sundial_observatory.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Usturlabın iç plakaları ve dönen yıldız kafesi.",
            midDecision: {
              title: "ARA KARAR: Usturlabı Nasıl Daha Hassas Yaparsın?",
              question:
                "Bir usturlabın hem Bağdat'ta hem Halep'te hem de deniz yolculuğunda hatasız ölçüm yapması için nasıl bir mühendislik uygularsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Çizgileri göz kararıyla hızlıca çizer, tek bir sabit plaka kullanırım.",
                  feedback:
                    "Göz kararı çizilen açılar astronomide ve denizcilikte yüzlerce kilometrelik hataya yol açar!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Küresel trigonometri hesaplarıyla her enlem için değiştirilebilir pirinç plakalar ('Safîha') ve dönen yıldız ağı ('Ankebût') tasarlar, dereceleri milimetrik pergel ile kazırım!",
                  feedback:
                    "Muazzam mühendislik! Meryem el-İcliyye'nin tasarladığı çok katmanlı usturlaplar dönemin en hassas bilim araçları oldu!",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "meryem-ch2-s5",
            sceneNumber: 5,
            title: "Halep Sarayında Büyük Sınav",
            narration:
              "Meryem el-İcliyye'nin yaptığı usturlapların şöhreti kısa sürede Halep Hükümdarı Seyfüddevle el-Hamdânî'nin kulağına kadar ulaştı. Bilime ve alimlere büyük değer veren hükümdar, Meryem'i saray rasathanesine davet etti. Saraydaki astronomlar Meryem'in yaptığı usturlabı incelediklerinde hem matematiksel hesaplarının kusursuzluğuna hem de metal işçiliğinin zarafetine hayran kaldılar!\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Meryem el-İcliyye'nin yaptığı usturlapların şöhreti kısa sürede Halep Hükümdarı Seyfüddevle el-Hamdânî'nin kulağına kadar ulaştı. Bilime ve alimlere büyük değer veren hükümdar, Meryem'i saray rasathanesine davet etti. Saraydaki astronomlar Meryem'in yaptığı usturlabı incelediklerinde hem matematiksel hesaplarının kusursuzluğuna hem de metal işçiliğinin zarafetine hayran kaldılar!\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hükümdar Seyfüddevle",
            dialogue:
              "Meryem Hanım! Yaptığınız bu usturlap sadece bir ölçüm aleti değil, matematik ile sanatın birleştiği bir şaheserdir; sarayımızın baş usturlap mühendisi sizsiniz!",
            historicalNote:
              "Bunu Biliyor muydun? Ünlü tarihçi İbnü'n-Nedîm, 987 yılında yazdığı 'El-Fihrist' adlı eserinde Meryem el-İcliyye'nin 944–967 yılları arasında Halep sarayında resmi olarak görev yaptığını kaydetmiştir.",
            imagePath: "assets/images/harizmi_s1_house_of_wisdom.png",
            imageKey: "assets/images/harizmi_s1_house_of_wisdom.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Halep Sarayı balkonunda gökyüzü gözlemi.",
          },
          {
            id: "meryem-ch2-s6",
            sceneNumber: 6,
            title: "Usturlapla Dağın ve Kulelerin Boyunu Ölçmek!",
            narration:
              "Bir gün saray bahçesindeki genç öğrenciler Meryem el-İcliyye'ye 'Bu küçük aletle karşıdaki yüksek kalenin boyunu kuleye hiç tırmanmadan nasıl ölçebiliriz?' diye sordular. Meryem usturlabı eline aldı, arkasındaki hareketli nişan kolunu ('İdâde') kulenin en tepesine hizaladı ve oluşan üçgen açısıyla kendi durduğu mesafeyi kullanarak kulenin yüksekliğini birkaç dakika içinde tam olarak söyledi!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Bir gün saray bahçesindeki genç öğrenciler Meryem el-İcliyye'ye 'Bu küçük aletle karşıdaki yüksek kalenin boyunu kuleye hiç tırmanmadan nasıl ölçebiliriz?' diye sordular. Meryem usturlabı eline aldı, arkasındaki hareketli nişan kolunu ('İdâde') kulenin en tepesine hizaladı ve oluşan üçgen açısıyla kendi durduğu mesafeyi kullanarak kulenin yüksekliğini birkaç dakika içinde tam olarak söyledi!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Meryem el-İcliyye",
            dialogue:
              "Usturlabın arkasındaki gölge kareleri ve trigonometri cetveli sayesinde, yanına bile yaklaşamadığınız bir dağın yüksekliğini veya bir nehrin genişliğini uzaktan ölçebilirsiniz!",
            historicalNote:
              "Bunu Biliyor muydun? Usturlabın arka yüzünde bulunan 'Zıll-i Mebsût' ve 'Zıll-i Menkûs' (Gölge Kareleri), bugünkü trigonometrideki Tanjant ve Kotanjant hesaplarının mekanik cetvelidir!",
            imagePath: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
            imageKey: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Usturlabın arkasındaki nişan kolu ve açı cetveli.",
          },
          {
            id: "meryem-ch2-s7",
            sceneNumber: 7,
            title: "Zamanı, Kıbleyi ve Mevsimleri Gösteren Halka",
            narration:
              "Meryem el-İcliyye usturlaplarını daha da geliştirerek üzerine güneşin yıl boyunca burçlar kuşağındaki hareketini, namaz vakitlerini, şafak ve alacakaranlık çizgilerini ekledi. Böylece çölde yürüyen bir kervan veya açık denizde yol alan bir kaptan, bulutların arasından tek bir yıldız gördüğünde bile hem saati hem de yönünü şaşmadan bulabiliyordu.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Meryem el-İcliyye usturlaplarını daha da geliştirerek üzerine güneşin yıl boyunca burçlar kuşağındaki hareketini, namaz vakitlerini, şafak ve alacakaranlık çizgilerini ekledi. Böylece çölde yürüyen bir kervan veya açık denizde yol alan bir kaptan, bulutların arasından tek bir yıldız gördüğünde bile hem saati hem de yönünü şaşmadan bulabiliyordu.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Meryem el-İcliyye",
            dialogue:
              "Bilim insanların hayatını kolaylaştırdığı zaman anlam kazanır; bu alet gece karanlığında yolunu arayan her yolcunun pusulasıdır!",
            historicalNote:
              "Bunu Biliyor muydun? İslam dünyasında geliştirilen usturlaplar Endülüs ve Sicilya üzerinden Avrupa'ya geçmiş ve Kristof Kolomb ile Vasco da Gama dönemindeki denizcilerin en önemli yön bulma aracı olmuştur.",
            imagePath: "assets/images/ali_kuscu_moon_map.png",
            imageKey: "assets/images/ali_kuscu_moon_map.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Alacakaranlıkta yıldızlara tutulan usturlap.",
          },
          {
            id: "meryem-ch2-s8",
            sceneNumber: 8,
            title: "Genç Çıraklara Aktarılan Ustalık",
            narration:
              "Meryem el-İcliyye yıllar boyunca Halep'teki atölyesinde hem kız hem erkek pek çok genç öğrenciye astronomi, geometri ve hassas alet yapımı öğretti. Onlara bir bilim insanının hem zihnini matematikle hem de ellerini sabırlı bir zanaatla eğitmesi gerektiğini gösterdi. Onun yetiştirdiği ustalar İslam dünyasının dört bir yanında yeni rasathaneler kurdular.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Meryem el-İcliyye yıllar boyunca Halep'teki atölyesinde hem kız hem erkek pek çok genç öğrenciye astronomi, geometri ve hassas alet yapımı öğretti. Onlara bir bilim insanının hem zihnini matematikle hem de ellerini sabırlı bir zanaatla eğitmesi gerektiğini gösterdi. Onun yetiştirdiği ustalar İslam dünyasının dört bir yanında yeni rasathaneler kurdular.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Meryem el-İcliyye",
            dialogue:
              "Sabırla işlenen her çizgi, gökyüzündeki bir yıldızın yeryüzündeki izdüşümüdür; ilimde kadın-erkek ayrımı olmaz, emek ve dikkat vardır!",
            historicalNote:
              "Bunu Biliyor muydun? İslam bilim tarihinde Meryem el-İcliyye, Fatıma el-Fihrî ve Sutayta el-Mahâmilî gibi pek çok kadın alim matematik ve astronomi alanında öncülük etmiştir.",
            imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
            imageKey: "assets/images/artifact_qarawiyyin_astrolabe.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Avluda usturlap dersi alan genç öğrenciler.",
          },
          {
            id: "meryem-ch2-s9",
            sceneNumber: 9,
            title: "Uzayda Parlayan İsim: '7060 Al-Ijliya' Asteroidi!",
            narration:
              "Aradan geçen bin yıla rağmen Meryem el-İcliyye'nin adı hiç unutulmadı! 1990 yılında Palomar Gözlemevi'nde keşfedilen ana kuşak asteroidlerinden birine, Uluslararası Astronomi Birliği tarafından onun onuruna '7060 Al-Ijliya' adı verildi! Bir zamanlar Halep'teki atölyesinden gökyüzündeki yıldızları ölçen o bilge kadının ismi, şimdi bizzat uzayın derinliklerinde Güneş'in etrafında dönmeye devam ediyor!\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Aradan geçen bin yıla rağmen Meryem el-İcliyye'nin adı hiç unutulmadı! 1990 yılında Palomar Gözlemevi'nde keşfedilen ana kuşak asteroidlerinden birine, Uluslararası Astronomi Birliği tarafından onun onuruna '7060 Al-Ijliya' adı verildi! Bir zamanlar Halep'teki atölyesinden gökyüzündeki yıldızları ölçen o bilge kadının ismi, şimdi bizzat uzayın derinliklerinde Güneş'in etrafında dönmeye devam ediyor!\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Meryem el-İcliyye",
            dialogue:
              "Gökyüzüne merakla bakan her çocuk, yıldızların arasında kendi izini bırakmaya adaydır!",
            historicalNote:
              "Bunu Biliyor muydun? Bugün kullandığımız GPS uyduları ve akıllı telefonlardaki konum bulma sistemleri, Meryem el-İcliyye'nin geliştirdiği usturlapların modern torunlarıdır!",
            imagePath: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            imageKey: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Yıldızlı gökyüzü ve parlayan usturlap.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Onuncu yüzyılda Halep'te bir astronomi mühendisisin. Yolcuların ve bilim insanlarının farklı şehirlerde hem saati, hem yönü, hem de dağların yüksekliğini hatasız ölçebilmesi için nasıl bir alet tasarlarsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Gökyüzünü ölçmek çok zor diyerek sadece basit bir kum saati yaparım.",
              feedback:
                "Kum saati ne yönü gösterebilir ne de yıldızların ve dağların açısını ölçebilir!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Sadece tek bir şehirde çalışan, ölçüleri göz kararı çizilmiş bir disk yaparım.",
              feedback:
                "Matematiksel hassasiyet olmadan yapılan alet başka şehirlere gidildiğinde yanlış sonuç verir.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Küresel geometri hesaplarıyla farklı enlemler için değiştirilebilir plakaları ('Safîha'), dönen yıldız kafesi ('Ankebût') ve açı ölçen nişan kolu ('İdâde') bulunan hassas pirinç Usturlaplar tasarlarım!",
              feedback:
                "Tarihi Hakikat! Meryem el-İcliyye tasarladığı hassas usturlaplarla bilim tarihine adını altın harflerle yazdırdı!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "10. yüzyılda Halep'te yaşayan Meryem el-İcliyye (el-Usturlâbî), geliştirdiği çok katmanlı ve yüksek hassasiyetli usturlaplarla hem zaman hem yön hem de yükseklik ölçümünde çığır açtı. Onun anısına uzaydaki '7060 Al-Ijliya' asteroidine adı verildi.",
          quoteHighlight:
            "Gökyüzü uçsuz bucaksız bir saat gibidir; doğru matematikle bütün yıldızları avucumuzun içine sığdırabiliriz!",
        },
        rewardArtifact: {
          id: "artifact-mariam-astrolabe",
          name: "Meryem el-İcliyye'nin Yıldız Usturlabı",
          heroId: "harizmi-meryem",
          chapterId: "harizmi-meryem-ch2",
          imagePath: "assets/images/meryem_el_icliyye_astrolabe.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik ve Astronomi Puanı",
          points: 50,
          unlockedTitle: "Gökyüzü Mühendisi",
          shortDescription:
            "Üzerinde dönen yıldız ağı (Ankebût), değiştirilebilir enlem plakaları ve gölge kareleri bulunan pirinç usturlap.",
          historicalNote:
            "Meryem el-İcliyye 944–967 yılları arasında Halep'te geliştirdiği usturlaplarla astronomi ve navigasyon bilimine büyük katkılar sağlamıştır.",
          accentColor: "#D97706",
          hotspots: [
            {
              id: "ankebut-rete",
              xPercent: 50,
              yPercent: 32,
              title: "Ankebût (Dönen Yıldız Ağı)",
              secretFact:
                "Usturlabın en üstündeki kafesli parça gökyüzündeki en parlak yıldızların konumunu ve Güneş'in yıllık yörüngesini gösterir.",
            },
            {
              id: "safiha-plates",
              xPercent: 35,
              yPercent: 62,
              title: "Safîha (Enlem Plakaları)",
              secretFact:
                "Her şehrin (Bağdat, Halep, Kahire, İstanbul) enlem açısına göre değiştirilebilen iç pirinç levhalardır.",
            },
            {
              id: "idade-alidade",
              xPercent: 68,
              yPercent: 64,
              title: "İdâde (Nişan Kolu) ve Gölge Karesi",
              secretFact:
                "Yıldızın ufuktan yüksekliğini ve karşıdaki bir dağın ya da kulenin boyunu trigonometriyle ölçmeye yarar.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Elektrik ve pil olmayan bir çağda, sadece pirinç diskleri döndürerek hem saati hem yönü hem de dağların boyunu ölçen 'Usturlap' fikrini nasıl buldun?",
          "Bin yıl önce yaşamış kadın mühendis Meryem el-İcliyye'nin adının bugün uzaydaki bir asteroide ('7060 Al-Ijliya') verilmiş olması bize ne anlatıyor?",
          "Sen gökyüzünü inceleyen bir astronom olsaydın hangi gezegeni veya yıldızı keşfetmek isterdin?",
        ],
      },
    ],
  },

  // ==========================================================================
  // 12. KAHRAMAN: MİMAR SİNAN (2 BÖLÜM - 9'AR SAHNE)
  // ==========================================================================
  {
    id: "mimar-sinan",
    name: "Mimar Sinan",
    heroClass: "GIZEM_IZ_SURME",
    heroClassLabel: "Gizem ve İz Sürme",
    classBadgeLabel: "Gizem ve İz Sürme",
    title: "Kubbelere Akustik ve Deprem Sırrı Gizleyen Başmimar",
    era: "1489 – 1588 (İstanbul & Edirne)",
    location: "İstanbul",
    visualMode: "CHARACTER_PORTRAIT",
    coverImage: "assets/images/mimar_sinan_hero.png",
    crisisImage: "assets/images/mimar_sinan_acoustics.png",
    images: {
      cover: "assets/images/mimar_sinan_hero.png",
      crisis: "assets/images/mimar_sinan_acoustics.png",
      artifact: "assets/images/artifact_mimar_sinan_cube.png",
    },
    accentColor: "#D97706",
    secondaryColor: "#0D9488",
    badgeText: "Akustik, Deprem Terazisi & Mimari",
    summary:
      "Süleymaniye'de tütünsüz nargile fokurtusuyla ses akustiğini ölçen, devekuşu yumurtalarıyla örümcekleri uzak tutan ve minarelerin altına deprem terazileri gizleyen Cihan Başmimarı.",
    shortBio:
      "Süleymaniye'de tütünsüz nargile fokurtusuyla ses akustiğini ölçen, devekuşu yumurtalarıyla örümcekleri uzak tutan ve minarelerin altına deprem terazileri gizleyen Cihan Başmimarı.",
    chapters: [
      // ------------------------------------------------------------------------
      // MİMAR SİNAN - BÖLÜM 1: SÜLEYMANİYE'DE AKUSTİK TESTİ VE DEVEKUŞU YUMURTASI SIRRI (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "mimar-sinan-ch1",
        heroId: "mimar-sinan",
        chapterNumber: 1,
        title: "Süleymaniye'de Nargile Fokurtusuyla Akustik Testi ve Devekuşu Yumurtası Sırrı",
        subtitle: "Taşa bilimi, kubbeye sesi, kandile doğanın sırrını işleyen Başmimar",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "sinan-ch1-s1",
            sceneNumber: 1,
            title: "İstanbul'un Yedi Tepesinde Yükselen Şaheser",
            narration:
              "Yıl 1556... İstanbul'un Haliç'e ve Boğaz'a bakan en güzel tepesinde binlerce taş ustası, demirci ve hattat harıl harıl çalışıyordu. Osmanlı Devleti'nin Başmimarı Koca Mimar Sinan Ağa, altmış yaşının üzerindeki bilge tecrübesiyle 'Kalfalık Eserim' dediği muazzam Süleymaniye Camii ve Külliyesi'ni inşa ediyordu. Elli üç metre yüksekliğindeki dev ana kubbe nihayet kapanmış, sıra iç mekanın görünmez mühendislik sırlarına gelmişti.\n\nHenüz inşaat iskeleleriyle çevrili Süleymaniye'nin tam ortasında yankılanan su fokurtusu, dev kubbeye yerleştirilen altmış beş boş küpün akustik sırrını test ediyordu. O an Süleymaniye Camii'nin dev kubbesi altında ve sarsılmaz taş temellerinin derinliklerinde hissedilen mimarlığı fizik, akustik ve doğa bilimiyle birleştiren tevazu dolu bir ustalık, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Yıl 1556... İstanbul'un Haliç'e ve Boğaz'a bakan en güzel tepesinde binlerce taş ustası, demirci ve hattat harıl harıl çalışıyordu. Osmanlı Devleti'nin Başmimarı Koca Mimar Sinan Ağa, altmış yaşının üzerindeki bilge tecrübesiyle 'Kalfalık Eserim' dediği muazzam Süleymaniye Camii ve Külliyesi'ni inşa ediyordu. Elli üç metre yüksekliğindeki dev ana kubbe nihayet kapanmış, sıra iç mekanın görünmez mühendislik sırlarına gelmişti.\n\nHenüz inşaat iskeleleriyle çevrili Süleymaniye'nin tam ortasında yankılanan su fokurtusu, dev kubbeye yerleştirilen altmış beş boş küpün akustik sırrını test ediyordu. O an Süleymaniye Camii'nin dev kubbesi altında ve sarsılmaz taş temellerinin derinliklerinde hissedilen mimarlığı fizik, akustik ve doğa bilimiyle birleştiren tevazu dolu bir ustalık, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Koca Mimar Sinan",
            dialogue:
              "Bir mabedin büyüklüğü sadece yüksek taş duvarlarıyla değil; içindeki sesin berraklığı, havasının temizliği ve depreme dayanıklılığıyla ölçülür!",
            historicalNote:
              "Bunu Biliyor muydun? Kayseri'nin Ağırnas köyünde doğan Mimar Sinan (1489–1588), hayatı boyunca 375'ten fazla cami, köprü, su kemeri, medrese ve şifahane inşa etmiştir!",
            imagePath: "assets/images/mimar_sinan_hero.png",
            imageKey: "assets/images/mimar_sinan_hero.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Güneşli Süleymaniye kubbesi altında elinde mimari planlar tutan Mimar Sinan.",
          },
          {
            id: "sinan-ch1-s2",
            sceneNumber: 2,
            title: "Rakiplerin Dedikodusu: 'Sinan Nargile İçiyor!'",
            narration:
              "İnşaatın son aylarında caminin dış duvarları bittiği halde açılış bir türlü yapılmıyordu. Mimar Sinan'ın başarısını kıskanan bazı dedikoducular gizlice caminin kapısından içeri baktıklarında, Koca Sinan'ın tam kubbenin altında bağdaş kurup oturduğunu ve önündeki cam şişeli bir nargileyi 'fokur fokur' öttürdüğünü gördüler! Hemen saraya koşup Padişah Kanuni Sultan Süleyman'a şikâyette bulundular.\n\nİftiralara ve aceleci yargılara karşı kızmak yerine bilimsel kanıtla cevap veren Koca Sinan, gerçek ustalığın sabır ve tevazuda gizli olduğunu gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, mimarlığı fizik, akustik ve doğa bilimiyle birleştiren tevazu dolu bir ustalık sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "İnşaatın son aylarında caminin dış duvarları bittiği halde açılış bir türlü yapılmıyordu. Mimar Sinan'ın başarısını kıskanan bazı dedikoducular gizlice caminin kapısından içeri baktıklarında, Koca Sinan'ın tam kubbenin altında bağdaş kurup oturduğunu ve önündeki cam şişeli bir nargileyi 'fokur fokur' öttürdüğünü gördüler! Hemen saraya koşup Padişah Kanuni Sultan Süleyman'a şikâyette bulundular.\n\nİftiralara ve aceleci yargılara karşı kızmak yerine bilimsel kanıtla cevap veren Koca Sinan, gerçek ustalığın sabır ve tevazuda gizli olduğunu gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, mimarlığı fizik, akustik ve doğa bilimiyle birleştiren tevazu dolu bir ustalık sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Saraydaki Dedikoducu",
            dialogue:
              "Hünkârım! Siz caminin bitmesini bekliyorsunuz ama Mimarbaşı Sinan inşaatı bırakmış, mabedin tam ortasına nargile kurmuş keyif çatıyor!",
            historicalNote:
              "Bunu Biliyor muydun? Bu ünlü tarihi olay, Mimar Sinan'ın ses mühendisliğine (akustiğe) verdiği olağanüstü önemi anlatan en meşhur hatıralardan biridir.",
            imagePath: "assets/images/sinan_s1_suleymaniye_hookah.png",
            imageKey: "assets/images/sinan_s1_suleymaniye_hookah.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Süleymaniye kubbesi altında akustik test hazırlığı.",
          },
          {
            id: "sinan-ch1-s3",
            sceneNumber: 3,
            title: "Kanuni Sultan Süleyman'ın Camiye Gelişi",
            narration:
              "Duyduklarına inanamayan Kanuni Sultan Süleyman, gerçeği kendi gözleriyle görmek için muhafızlarıyla birlikte derhal Süleymaniye şantiyesine geldi. Cami kapısından içeri adım attığında gerçekten de Mimar Sinan'ın mihrabın ve kubbenin ortasında oturduğunu, yanındaki şişeden 'fokur, fokur' diye su sesleri yükseldiğini gördü! Padişah kaşlarını çatarak gür bir sesle Başmimar'a seslendi.\n\nKandil avizelerinin arasına dizilen bembeyaz devekuşu yumurtaları, doğayı dikkatle gözlemleyen bir mimarın en küçük sorunu bile zarafetle çözdüğünü kanıtlıyordu. Çevredeki her detay, Süleymaniye Camii'nin dev kubbesi altında ve sarsılmaz taş temellerinin derinliklerinde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Duyduklarına inanamayan Kanuni Sultan Süleyman, gerçeği kendi gözleriyle görmek için muhafızlarıyla birlikte derhal Süleymaniye şantiyesine geldi. Cami kapısından içeri adım attığında gerçekten de Mimar Sinan'ın mihrabın ve kubbenin ortasında oturduğunu, yanındaki şişeden 'fokur, fokur' diye su sesleri yükseldiğini gördü! Padişah kaşlarını çatarak gür bir sesle Başmimar'a seslendi.\n\nKandil avizelerinin arasına dizilen bembeyaz devekuşu yumurtaları, doğayı dikkatle gözlemleyen bir mimarın en küçük sorunu bile zarafetle çözdüğünü kanıtlıyordu. Çevredeki her detay, Süleymaniye Camii'nin dev kubbesi altında ve sarsılmaz taş temellerinin derinliklerinde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Kanuni Sultan Süleyman",
            dialogue:
              "Bre Mimarbaşı! Biz hayır eserimiz bir an önce açılsın diye bekleriz, sen Allah'ın evinin ortasında nargile mi tüttürürsün?!",
            historicalNote:
              "Bunu Biliyor muydun? Süleymaniye Camii'nin inşası 1550'den 1557'ye kadar 7 yıl sürmüş ve temeli toprağa iyice otursun diye yıllarca beklenmiştir.",
            imagePath: "assets/images/mimar_sinan_acoustics.png",
            imageKey: "assets/images/mimar_sinan_acoustics.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Heybetli kubbe altında Kanuni ve Başmimar Sinan.",
          },
          {
            id: "sinan-ch1-s4",
            sceneNumber: 4,
            title: "Nargilede Tütün Yok, Sadece Su Sesi Var!",
            narration:
              "Mimar Sinan saygıyla ayağa kalktı ve Padişah'ı nargilenin yanına davet etti. Kanuni yaklaşıp baktığında şaşkınlık içinde kaldı: Nargilenin üst lülesinde ne ateş vardı, ne köz, ne de tek bir yaprak tütün! Şişenin içinde sadece berrak su bulunuyor, Sinan marpucu her çektiğinde suyun çıkardığı fokurtu sesi kubbeye çarpıp caminin en uzak köşelerine kadar dalga dalga yayılıyordu!\n\nToprağın metrelerce altındaki kurşun kenetli taşlar ve deprem terazileri, asırlar boyu en şiddetli sarsıntılara bile meydan okuyacak bir mühendislik imzasıydı. Sabır, dikkat ve samimiyetle atılan bu adım, mimarlığı fizik, akustik ve doğa bilimiyle birleştiren tevazu dolu bir ustalık ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Mimar Sinan saygıyla ayağa kalktı ve Padişah'ı nargilenin yanına davet etti. Kanuni yaklaşıp baktığında şaşkınlık içinde kaldı: Nargilenin üst lülesinde ne ateş vardı, ne köz, ne de tek bir yaprak tütün! Şişenin içinde sadece berrak su bulunuyor, Sinan marpucu her çektiğinde suyun çıkardığı fokurtu sesi kubbeye çarpıp caminin en uzak köşelerine kadar dalga dalga yayılıyordu!\n\nToprağın metrelerce altındaki kurşun kenetli taşlar ve deprem terazileri, asırlar boyu en şiddetli sarsıntılara bile meydan okuyacak bir mühendislik imzasıydı. Sabır, dikkat ve samimiyetle atılan bu adım, mimarlığı fizik, akustik ve doğa bilimiyle birleştiren tevazu dolu bir ustalık ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Koca Mimar Sinan",
            dialogue:
              "Aman Hünkârım, bakın lülede ne ateş var ne tütün! Ben burada keyif çatmıyorum; suyun fokurtu sesiyle caminin 'Akustik' (ses dağılımı) testini yapıyorum!",
            historicalNote:
              "Bunu Biliyor muydun? Mimar Sinan mikrofon ve hoparlör olmayan bir çağda, imamın sesinin binlerce kişiye yankılanmadan (uğultu yapmadan) ulaşması için su fokurtusuyla ses dalgalarını ölçmüştür!",
            imagePath: "assets/images/fatih_kadi_court.png",
            imageKey: "assets/images/fatih_kadi_court.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Akustik testini açıklayan Koca Mimar Sinan.",
            midDecision: {
              title: "ARA KARAR: Dev Kubbede Sesin Yankılanmasını Nasıl Önlersin?",
              question:
                "53 metre yüksekliğindeki dev taş kubbede imamın sesinin boğuk bir uğultuya dönüşmemesi ve her köşeden net duyulması için kubbenin içine ne yerleştirirsin?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Kubbenin altını tamamen kalın demir levhalarla kaplarım.",
                  feedback:
                    "Demir levhalar sesi sertçe çarptırıp korkunç bir çınlama ve uğultu yapar!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Kubbenin etrafına ağızları içeri bakan 65 adet içi boş pişmiş toprak küp (Akustik Küpler) gömerim; böylece ses dalgaları küplerde tınlayarak camiye eşit dağılır!",
                  feedback:
                    "Deha işi! Mimar Sinan kubbeye yerleştirdiği 65 adet boş toprak küple (Helmholtz rezonatörü prensibi) kusursuz bir akustik kurdu!",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "sinan-ch1-s5",
            sceneNumber: 5,
            title: "Kubbedeki 65 Akustik Toprak Küpün Sırrı",
            narration:
              "Mimar Sinan eliyle elli üç metre yukarıdaki ana kubbenin etrafını işaret etti. Kubbenin iç kemerlerine ve köşelerine, ağızları caminin içine bakan tam altmış beş adet içi boş, özel pişmiş toprak küp (sebu) yerleştirmişti! Nargilenin su fokurtusunu dinleyerek hangi küpün ağzının ne kadar açık kalacağını ayarlıyor, böylece mihraptaki en hafif sesin bile uğultu yapmadan en arka safa ulaşmasını sağlıyordu!\n\nHenüz inşaat iskeleleriyle çevrili Süleymaniye'nin tam ortasında yankılanan su fokurtusu, dev kubbeye yerleştirilen altmış beş boş küpün akustik sırrını test ediyordu. O an Süleymaniye Camii'nin dev kubbesi altında ve sarsılmaz taş temellerinin derinliklerinde hissedilen mimarlığı fizik, akustik ve doğa bilimiyle birleştiren tevazu dolu bir ustalık, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Mimar Sinan eliyle elli üç metre yukarıdaki ana kubbenin etrafını işaret etti. Kubbenin iç kemerlerine ve köşelerine, ağızları caminin içine bakan tam altmış beş adet içi boş, özel pişmiş toprak küp (sebu) yerleştirmişti! Nargilenin su fokurtusunu dinleyerek hangi küpün ağzının ne kadar açık kalacağını ayarlıyor, böylece mihraptaki en hafif sesin bile uğultu yapmadan en arka safa ulaşmasını sağlıyordu!\n\nHenüz inşaat iskeleleriyle çevrili Süleymaniye'nin tam ortasında yankılanan su fokurtusu, dev kubbeye yerleştirilen altmış beş boş küpün akustik sırrını test ediyordu. O an Süleymaniye Camii'nin dev kubbesi altında ve sarsılmaz taş temellerinin derinliklerinde hissedilen mimarlığı fizik, akustik ve doğa bilimiyle birleştiren tevazu dolu bir ustalık, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Kanuni Sultan Süleyman",
            dialogue:
              "Maşallah Koca Sinan! Cahiller seni keyif çatıyor sanırken sen kubbeye ses mühendisliği işliyormuşsun! Hakkını helal eyle!",
            historicalNote:
              "Bunu Biliyor muydun? Mimar Sinan'ın kubbede kullandığı bu boş toprak küpler, modern fizikte 'Helmholtz Rezonatörü' olarak bilinen ses dengeleme sisteminin 16. yüzyıldaki harikasıdır!",
            imagePath: "assets/images/sinan_s2_ostrich_eggs.png",
            imageKey: "assets/images/sinan_s2_ostrich_eggs.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Kubbe kemerlerindeki akustik toprak küpler.",
          },
          {
            id: "sinan-ch1-s6",
            sceneNumber: 6,
            title: "Avizelerdeki Devekuşu Yumurtalarının Sırrı!",
            narration:
              "Kanuni Sultan Süleyman camiyi gezerken başını yukarı kaldırdığında bir tuhaflık daha fark etti: Yüzlerce yağ kandilinin asılı olduğu demir avizelerin tam ortasında kocaman beyaz 'Devekuşu Yumurtaları' asılıydı! Padişah merakla bu yumurtaların süs için mi konduğunu sorduğunda, Mimar Sinan doğayı ne kadar iyi gözlemlediğini gösteren ikinci büyük sırrını açıkladı.\n\nİftiralara ve aceleci yargılara karşı kızmak yerine bilimsel kanıtla cevap veren Koca Sinan, gerçek ustalığın sabır ve tevazuda gizli olduğunu gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, mimarlığı fizik, akustik ve doğa bilimiyle birleştiren tevazu dolu bir ustalık sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Kanuni Sultan Süleyman camiyi gezerken başını yukarı kaldırdığında bir tuhaflık daha fark etti: Yüzlerce yağ kandilinin asılı olduğu demir avizelerin tam ortasında kocaman beyaz 'Devekuşu Yumurtaları' asılıydı! Padişah merakla bu yumurtaların süs için mi konduğunu sorduğunda, Mimar Sinan doğayı ne kadar iyi gözlemlediğini gösteren ikinci büyük sırrını açıkladı.\n\nİftiralara ve aceleci yargılara karşı kızmak yerine bilimsel kanıtla cevap veren Koca Sinan, gerçek ustalığın sabır ve tevazuda gizli olduğunu gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, mimarlığı fizik, akustik ve doğa bilimiyle birleştiren tevazu dolu bir ustalık sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Koca Mimar Sinan",
            dialogue:
              "Hünkârım, devekuşu yumurtası kurudukça insan burnunun duymadığı ama örümceklerin hiç sevmediği doğal bir koku yayar! Bu yumurtalar olduğu sürece caminin tavanında tek bir örümcek ağı bile oluşmaz!",
            historicalNote:
              "Bunu Biliyor muydun? Süleymaniye Camii'nin avizeleri arasında Mimar Sinan döneminden kalma yüzlerce yıllık gerçek devekuşu yumurtaları bugün hâlâ asılı durmaktadır!",
            imagePath: "assets/images/sinan_s3_earthquake_foundation.png",
            imageKey: "assets/images/sinan_s3_earthquake_foundation.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Avizeler arasında parlayan devekuşu yumurtaları.",
          },
          {
            id: "sinan-ch1-s7",
            sceneNumber: 7,
            title: "Dumanı Mürekkebe Dönüştüren 'İs Odası'!",
            narration:
              "Peki geceleri camiyi aydınlatan yüzlerce zeytinyağı kandilinin çıkardığı siyah is ve duman nereye gidiyordu? Neden bembeyaz mermer duvarlar ve hat yazıları hiç kararmıyordu? Mimar Sinan Padişah'ı cümle kapısının üzerindeki gizli bir odaya çıkardı! Cami içindeki hava akımını öyle hesaplamıştı ki bütün kandillerin isi tek bir hava kanalından uçup bu 'İs Odası'nda toplanıyordu!\n\nKandil avizelerinin arasına dizilen bembeyaz devekuşu yumurtaları, doğayı dikkatle gözlemleyen bir mimarın en küçük sorunu bile zarafetle çözdüğünü kanıtlıyordu. Çevredeki her detay, Süleymaniye Camii'nin dev kubbesi altında ve sarsılmaz taş temellerinin derinliklerinde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Peki geceleri camiyi aydınlatan yüzlerce zeytinyağı kandilinin çıkardığı siyah is ve duman nereye gidiyordu? Neden bembeyaz mermer duvarlar ve hat yazıları hiç kararmıyordu? Mimar Sinan Padişah'ı cümle kapısının üzerindeki gizli bir odaya çıkardı! Cami içindeki hava akımını öyle hesaplamıştı ki bütün kandillerin isi tek bir hava kanalından uçup bu 'İs Odası'nda toplanıyordu!\n\nKandil avizelerinin arasına dizilen bembeyaz devekuşu yumurtaları, doğayı dikkatle gözlemleyen bir mimarın en küçük sorunu bile zarafetle çözdüğünü kanıtlıyordu. Çevredeki her detay, Süleymaniye Camii'nin dev kubbesi altında ve sarsılmaz taş temellerinin derinliklerinde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Koca Mimar Sinan",
            dialogue:
              "Kandillerin isini duvarları kirletmesin diye hava kanalıyla bu odaya topluyoruz; buradan kazıdığımız saf isi de su ve zamkla karıştırıp dünyanın en kaliteli 'İs Mürekkebi'ni yapıyoruz!",
            historicalNote:
              "Bunu Biliyor muydun? Süleymaniye'nin İs Odası'ndan elde edilen bu geri dönüşüm mürekkebiyle yazılan el yazması kitaplar, 450 yıldır hiç solmadan günümüze ulaşmıştır!",
            imagePath: "assets/images/cezeri_s1_artuklu_palace.png",
            imageKey: "assets/images/cezeri_s1_artuklu_palace.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Hava kanalları, hokka ve hat mürekkebi.",
          },
          {
            id: "sinan-ch1-s8",
            sceneNumber: 8,
            title: "Anahtarı Mimar Sinan'a Verilen Mabed",
            narration:
              "1557 yılının Ekim ayında Süleymaniye Camii'nin açılış günü geldiğinde Kanuni Sultan Süleyman herkesin önünde caminin altın anahtarını Mimar Sinan'a uzattı: 'Bu bina ettiğin Beytullah'ın kapısını açmak herkesten çok senin hakkındır!' dedi. Koca Mimar Sinan dualarla kapıyı açarken, içerideki binlerce insan kubbedeki muazzam ferahlığa ve ses berraklığına hayran kaldı.\n\nToprağın metrelerce altındaki kurşun kenetli taşlar ve deprem terazileri, asırlar boyu en şiddetli sarsıntılara bile meydan okuyacak bir mühendislik imzasıydı. Sabır, dikkat ve samimiyetle atılan bu adım, mimarlığı fizik, akustik ve doğa bilimiyle birleştiren tevazu dolu bir ustalık ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "1557 yılının Ekim ayında Süleymaniye Camii'nin açılış günü geldiğinde Kanuni Sultan Süleyman herkesin önünde caminin altın anahtarını Mimar Sinan'a uzattı: 'Bu bina ettiğin Beytullah'ın kapısını açmak herkesten çok senin hakkındır!' dedi. Koca Mimar Sinan dualarla kapıyı açarken, içerideki binlerce insan kubbedeki muazzam ferahlığa ve ses berraklığına hayran kaldı.\n\nToprağın metrelerce altındaki kurşun kenetli taşlar ve deprem terazileri, asırlar boyu en şiddetli sarsıntılara bile meydan okuyacak bir mühendislik imzasıydı. Sabır, dikkat ve samimiyetle atılan bu adım, mimarlığı fizik, akustik ve doğa bilimiyle birleştiren tevazu dolu bir ustalık ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Kanuni Sultan Süleyman",
            dialogue:
              "Bu muazzam eserin kapısını açmak en çok onu ilmiyle ve alın teriyle yükselten Mimarbaşı Sinan'a yakışır!",
            historicalNote:
              "Bunu Biliyor muydun? Mimar Sinan 99 yaşında vefat ettiğinde çok sevdiği Süleymaniye Külliyesi'nin hemen yanı başındaki mütevazı türbesine defnedilmiştir.",
            imagePath: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            imageKey: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Süleymaniye'nin görkemli kubbesi ve ışık süzmeleri.",
          },
          {
            id: "sinan-ch1-s9",
            sceneNumber: 9,
            title: "Asırları Aşan Mimari Gizem",
            narration:
              "Mimar Sinan, Süleymaniye'de taşların arasına gizlediği ses küpleri, hava akımı kanalları ve doğal devekuşu yumurtalarıyla bir yapının sadece taştan ibaret olmadığını kanıtladı. O, fiziği, akustiği ve doğayı gözlemleyen gerçek bir bilim insanı ve iz sürücüydü.\n\nHenüz inşaat iskeleleriyle çevrili Süleymaniye'nin tam ortasında yankılanan su fokurtusu, dev kubbeye yerleştirilen altmış beş boş küpün akustik sırrını test ediyordu. O an Süleymaniye Camii'nin dev kubbesi altında ve sarsılmaz taş temellerinin derinliklerinde hissedilen mimarlığı fizik, akustik ve doğa bilimiyle birleştiren tevazu dolu bir ustalık, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Mimar Sinan, Süleymaniye'de taşların arasına gizlediği ses küpleri, hava akımı kanalları ve doğal devekuşu yumurtalarıyla bir yapının sadece taştan ibaret olmadığını kanıtladı. O, fiziği, akustiği ve doğayı gözlemleyen gerçek bir bilim insanı ve iz sürücüydü.\n\nHenüz inşaat iskeleleriyle çevrili Süleymaniye'nin tam ortasında yankılanan su fokurtusu, dev kubbeye yerleştirilen altmış beş boş küpün akustik sırrını test ediyordu. O an Süleymaniye Camii'nin dev kubbesi altında ve sarsılmaz taş temellerinin derinliklerinde hissedilen mimarlığı fizik, akustik ve doğa bilimiyle birleştiren tevazu dolu bir ustalık, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Koca Mimar Sinan",
            dialogue:
              "Taşı üst üste koymak duvarcılıktır; taşa ses, nefes ve ruh vermek ise mimarlıktır!",
            historicalNote:
              "Bunu Biliyor muydun? Mimar Sinan Şehzade Camii'ne 'Çıraklık Eserim', Süleymaniye Camii'ne 'Kalfalık Eserim', Edirne Selimiye Camii'ne ise 'Ustalık Eserim' demiştir.",
            imagePath: "assets/images/artifact_mimar_sinan_cube.png",
            imageKey: "assets/images/artifact_mimar_sinan_cube.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Mimar Sinan ve Süleymaniye kubbesi.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Süleymaniye Camii gibi devasa bir eseri tamamlıyorsun. Hem sesin yankılanmadan her yerden duyulması, hem örümcek ağlarının oluşmaması, hem de kandil islerinin duvarları karartmaması için ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Bu sorunları hiç düşünmeden inşaatı hemen bitirip teslim ederim.",
              feedback:
                "Gerçek bir başmimar eserin her detayını asırlar boyu yaşayacak şekilde planlar!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Kandilleri tamamen kaldırıp camiyi karanlık bırakırım.",
              feedback:
                "Sorundan kaçmak yerine bilimsel ve doğal mühendislik çözümleri üretmelisin!",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Su fokurtusuyla 65 boş küpün akustiğini ayarlarım, avizelere örümcekleri uzak tutan devekuşu yumurtaları asarım ve kandil dumanını 'İs Odası'nda toplayıp mürekkebe dönüştürürüm!",
              feedback:
                "Tarihi Hakikat! Koca Mimar Sinan Süleymaniye'de akustik, aerodinamik ve doğal geri dönüşüm dehasını birleştirdi!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Mimar Sinan, Süleymaniye Camii'nde tütünsüz nargilenin su fokurtusuyla kubbedeki 65 boş toprak küpün akustiğini test etti; örümcek ağlarını önlemek için avizelere devekuşu yumurtaları astı ve kandil islerini 'İs Odası'nda toplayarak en kaliteli hat mürekkebine dönüştürdü!",
          quoteHighlight:
            "Ben burada keyif çatmıyorum Hünkârım; suyun fokurtu sesiyle kubbenin akustik dengesini ölçüyorum!",
        },
        rewardArtifact: {
          id: "artifact-sinan-acoustics",
          name: "Mimar Sinan'ın Akustik Küpü ve Devekuşu Yumurtası",
          heroId: "mimar-sinan",
          chapterId: "mimar-sinan-ch1",
          imagePath: "assets/images/artifact_mimar_sinan_cube.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik ve Keşif Puanı",
          points: 50,
          unlockedTitle: "Ser-Mimarân-ı Cihan Çırağı",
          shortDescription:
            "Süleymaniye kubbesinde sesi dengeleyen pişmiş toprak akustik küp, örümcekleri uzak tutan devekuşu yumurtası ve İs Odası hokkası.",
          historicalNote:
            "1557'de açılan Süleymaniye Camii; ses akustiği, İs Odası havalandırması ve depreme dayanıklı temeliyle dünya mimarlık tarihinin zirvelerindendir.",
          accentColor: "#D97706",
          hotspots: [
            {
              id: "acoustic-clay-jar",
              xPercent: 48,
              yPercent: 32,
              title: "Kubbedeki 65 Akustik Küp",
              secretFact:
                "Kubbenin etrafına ağızları içeri bakacak şekilde yerleştirilen 65 adet boş toprak küp, sesin uğultu yapmadan net dağılmasını sağlar.",
            },
            {
              id: "ostrich-egg-secret",
              xPercent: 34,
              yPercent: 64,
              title: "Devekuşu Yumurtası Sırrı",
              secretFact:
                "Kandillerin arasına asılan devekuşu yumurtaları, yaydıkları doğal koku sayesinde örümceklerin ve haşerelerin tavana ağ örmesini engeller!",
            },
            {
              id: "soot-chamber-ink",
              xPercent: 68,
              yPercent: 66,
              title: "İs Odası ve Hat Mürekkebi",
              secretFact:
                "Yüzlerce kandilin dumanı hava akımıyla kapı üstündeki İs Odası'nda toplanır ve buradan dünyanın en parlak siyah mürekkebi üretilirdi.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Mimar Sinan'ı nargile fokurdatırken görenler neden gerçeği sormadan hemen dedikodu yaptılar? Bir olayı tam anlamadan yargılamak neden yanlıştır?",
          "Kandillerden çıkan siyah dumanı bile çöpe atmayıp kitap yazmak için mürekkebe dönüştüren 'İs Odası' fikrini nasıl buldun?",
          "Bugün Süleymaniye Camii'ne gittiğimizde tavandaki devekuşu yumurtalarına ve kubbedeki küplere birlikte dikkatle bakalım mı?",
        ],
      },

      // ------------------------------------------------------------------------
      // MİMAR SİNAN - BÖLÜM 2: MİNARELERİN ALTINDAKİ DEPREM TERAZİLERİ (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "mimar-sinan-ch2",
        heroId: "mimar-sinan",
        chapterNumber: 2,
        title: "Minarelerin Altındaki Deprem Terazileri",
        subtitle: "Depremde sallanan ama yıkılmayan taşların ve döner sütunların gizemi",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "sinan-ch2-s1",
            sceneNumber: 1,
            title: "Deprem Kuşağındaki Şehirlerin Sırrı",
            narration:
              "İstanbul ve Edirne gibi büyük şehirler tarih boyunca şiddetli yer sarsıntılarıyla sınanmıştı. Pek çok eski bina depremde yıkılırken, Mimar Sinan'ın yükselttiği incecik kalem minareler ve devasa kubbeler nasıl oluyor da tek bir taş bile düşürmeden ayakta kalıyordu? Genç kalfası Davud Ağa bir sabah elinde şakülle Koca Sinan'ın yanına yaklaştı ve bu büyük sırrı sordu.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "İstanbul ve Edirne gibi büyük şehirler tarih boyunca şiddetli yer sarsıntılarıyla sınanmıştı. Pek çok eski bina depremde yıkılırken, Mimar Sinan'ın yükselttiği incecik kalem minareler ve devasa kubbeler nasıl oluyor da tek bir taş bile düşürmeden ayakta kalıyordu? Genç kalfası Davud Ağa bir sabah elinde şakülle Koca Sinan'ın yanına yaklaştı ve bu büyük sırrı sordu.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Kalfa Davud Ağa",
            dialogue:
              "Üstadım, yetmiş metre yüksekliğindeki bu incecik minareler şiddetli depremde nasıl kırılmıyor? Toprağın altına nasıl bir gizem sakladınız?",
            historicalNote:
              "Bunu Biliyor muydun? Mimar Sinan'ın yetiştirdiği çıraklardan Davud Ağa (Yeni Cami'nin mimarı) ve Sedefkâr Mehmed Ağa (Sultanahmet Camii'nin mimarı) onun mühendislik sırlarını devam ettirmiştir.",
            imagePath: "assets/images/sinan_s2_ostrich_eggs.png",
            imageKey: "assets/images/sinan_s2_ostrich_eggs.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Elinde şakül ve mimari çizim tutan Mimar Sinan.",
          },
          {
            id: "sinan-ch2-s2",
            sceneNumber: 2,
            title: "Yerin Altındaki Orman: Meşe Kazıklar ve Raylı Temel",
            narration:
              "Mimar Sinan kalfasını temel çukurunun kenarına götürdü. Sinan bir binaya başlamadan önce toprağı metrelerce derinliğe kadar kazdırır, zemini sağlamlaştırmak için toprağa su altında çürümeyen binlerce gürgen ve meşe kazık çaktırırdı! Bunun üzerine taş ve Horasan harcından oluşan kalın bir tabaka döşer, temelin yer sarsıntısında dalga üzerindeki bir gemi gibi tek parça halinde esnemesini sağlardı.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Mimar Sinan kalfasını temel çukurunun kenarına götürdü. Sinan bir binaya başlamadan önce toprağı metrelerce derinliğe kadar kazdırır, zemini sağlamlaştırmak için toprağa su altında çürümeyen binlerce gürgen ve meşe kazık çaktırırdı! Bunun üzerine taş ve Horasan harcından oluşan kalın bir tabaka döşer, temelin yer sarsıntısında dalga üzerindeki bir gemi gibi tek parça halinde esnemesini sağlardı.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Koca Mimar Sinan",
            dialogue:
              "Evladım, ağacın boyu ne kadar yüksekse kökü de toprağın altında o kadar derin olmalıdır! Temeli sağlam olmayan kubbe gökyüzünde duramaz!",
            historicalNote:
              "Bunu Biliyor muydun? Mimar Sinan'ın kullandığı bu yöntem, bugünkü modern gökdelenlerde kullanılan 'Kazıklı Radye Temel' ve 'Sismik İzolasyon' sisteminin 16. yüzyıldaki öncüsüdür!",
            imagePath: "assets/images/sinan_s3_earthquake_foundation.png",
            imageKey: "assets/images/sinan_s3_earthquake_foundation.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Temel planları ve mühendislik pergeli.",
          },
          {
            id: "sinan-ch2-s3",
            sceneNumber: 3,
            title: "Taşları Birbirine Bağlayan Kurşun Kenetler",
            narration:
              "Peki minarenin gövdesindeki binlerce kesme taş depremde neden birbirinden ayrılmıyordu? Mimar Sinan taşları sadece harçla yapıştırmazdı. Her iki taşın arasına demir 'Kenet' (kanca) yerleştirir ve üzerine eritilmiş sıcak kurşun dökerdi! Kurşun yumuşak ve esnek bir metal olduğu için deprem sarsıntısı geldiğinde sert taşların birbirine çarpıp kırılmasını önleyen bir yay (amortisör) görevi görüyordu!\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Peki minarenin gövdesindeki binlerce kesme taş depremde neden birbirinden ayrılmıyordu? Mimar Sinan taşları sadece harçla yapıştırmazdı. Her iki taşın arasına demir 'Kenet' (kanca) yerleştirir ve üzerine eritilmiş sıcak kurşun dökerdi! Kurşun yumuşak ve esnek bir metal olduğu için deprem sarsıntısı geldiğinde sert taşların birbirine çarpıp kırılmasını önleyen bir yay (amortisör) görevi görüyordu!\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Koca Mimar Sinan",
            dialogue:
              "Sert olan kırılır, esneyen ise ayakta kalır! Taşların arasındaki kurşun yuvalar, depremin öfkesini yumuşatan gizli yaylarımızdır!",
            historicalNote:
              "Bunu Biliyor muydun? 1999 yılında yapılan bilimsel testlerde, Mimar Sinan'ın kurşun kenetli minarelerinin depremde esneyip tekrar eski dengesine döndüğü kanıtlanmıştır.",
            imagePath: "assets/images/mimar_sinan_hero.png",
            imageKey: "assets/images/mimar_sinan_hero.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Metal kenetler ve mühendislik aletleri.",
          },
          {
            id: "sinan-ch2-s4",
            sceneNumber: 4,
            title: "Mihrabın Yanındaki Dönen Sütunlar: Deprem Terazisi!",
            narration:
              "Ardından Mimar Sinan kalfasını caminin içindeki mihrabın ve minare kaidelerinin yanına götürdü. Mihrabın sağında ve solunda, mermer başlıkların arasına sıkıştırılmış silindir şeklinde parlak mermer sütunçeler duruyordu. Koca Sinan elini bu mermer sütuna koyup hafifçe çevirdiğinde, sütun kendi ekseni etrafında 'tıkır tıkır' diye rahatça döndü! Genç kalfa gözlerine inanamadı!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Ardından Mimar Sinan kalfasını caminin içindeki mihrabın ve minare kaidelerinin yanına götürdü. Mihrabın sağında ve solunda, mermer başlıkların arasına sıkıştırılmış silindir şeklinde parlak mermer sütunçeler duruyordu. Koca Sinan elini bu mermer sütuna koyup hafifçe çevirdiğinde, sütun kendi ekseni etrafında 'tıkır tıkır' diye rahatça döndü! Genç kalfa gözlerine inanamadı!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Koca Mimar Sinan",
            dialogue:
              "İşte buna 'Deprem Terazisi' (Döner Sütun) derler! Bu silindir sütunlar elle çevrildiğinde rahatça dönüyorsa binanın dengesi kusursuzdur!",
            historicalNote:
              "Bunu Biliyor muydun? Osmanlı mimarisinde mihrapların ve kemerlerin yanına konan bu 'Döner Sütunçeler' (Deprem Terazileri), binada milimetrik bir kayma olup olmadığını gösteren mekanik sensörlerdi!",
            imagePath: "assets/images/sinan_s1_suleymaniye_hookah.png",
            imageKey: "assets/images/sinan_s1_suleymaniye_hookah.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Mihrap yanındaki mermer sütunlar ve ışık.",
            midDecision: {
              title: "ARA KARAR: Depremden Sonra Binanın Sağlamlığını Nasıl Ölçersin?",
              question:
                "Şiddetli bir deprem oldu ve dışarıdan bakınca cami duvarlarında hiçbir çatlak görünmüyor. Ancak binanın temelinde gizli bir kayma olup olmadığını kesin olarak anlamak için nasıl bir düzenek kurarsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Dışarıdan çatlak görünmüyorsa sağlamdır deyip geçerim.",
                  feedback:
                    "Gözle görülmeyen milimetrik temel kaymaları sonraki depremde büyük tehlike oluşturabilir!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Duvar ve mihrap köşelerine kendi etrafında dönebilen mermer 'Deprem Terazisi' sütunları yerleştiririm; depremde bina milimetre bile eğilse sütun sıkışıp dönmez ve tehlikeyi hemen haber verir!",
                  feedback:
                    "Muazzam mühendislik! Döner sütun sıkışırsa o yöndeki temel takviye edilir ve bina yıkılmaktan kurtarılır!",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "sinan-ch2-s5",
            sceneNumber: 5,
            title: "Sıkışan Sütunun Verdiği Erken Uyarı",
            narration:
              "Koca Sinan deprem terazisinin nasıl çalıştığını kalfasına detaylıca anlattı: Eğer şiddetli bir depremde binanın sağ veya sol temeli toprağa bir milimetre bile çökerse, üstteki taş kemer o taraftaki döner sütunun üzerine baskı yapıyor ve sütun sıkışıp dönmez oluyordu! Böylece mimarlar hangi sütunun dönmediğine bakarak binanın tam hangi köşesinde gizli bir yük binişi olduğunu elleriyle koymuş gibi buluyordu!\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Koca Sinan deprem terazisinin nasıl çalıştığını kalfasına detaylıca anlattı: Eğer şiddetli bir depremde binanın sağ veya sol temeli toprağa bir milimetre bile çökerse, üstteki taş kemer o taraftaki döner sütunun üzerine baskı yapıyor ve sütun sıkışıp dönmez oluyordu! Böylece mimarlar hangi sütunun dönmediğine bakarak binanın tam hangi köşesinde gizli bir yük binişi olduğunu elleriyle koymuş gibi buluyordu!\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Kalfa Davud Ağa",
            dialogue:
              "Sübhanallah Üstadım! Hiçbir elektronik alet olmadan taşın kendi ağırlığıyla çalışan bir deprem uyarı cihazı kurmuşsunuz!",
            historicalNote:
              "Bunu Biliyor muydun? Bugün İstanbul, Edirne ve Bursa'daki pek çok tarihi Osmanlı camiinde mihrabın iki yanındaki bu deprem terazileri hâlâ görülebilmektedir!",
            imagePath: "assets/images/mimar_sinan_acoustics.png",
            imageKey: "assets/images/mimar_sinan_acoustics.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Süleymaniye'nin dengeli kemerleri ve sütunları.",
          },
          {
            id: "sinan-ch2-s6",
            sceneNumber: 6,
            title: "Bir Minarenin İçinde Üç Ayrı Merdiven!",
            narration:
              "Mimar Sinan'ın minarelerindeki gizem sadece deprem terazisiyle bitmiyordu. Edirne'de seksen yaşında inşa ettiği 'Ustalık Eserim' dediği Selimiye Camii'nin incecik minarelerinin içine tam üç ayrı taş merdiven sığdırmıştı! Aynı anda minare kapısından giren üç müezzin, içeride birbirini hiç görmeden ve ayak seslerini bile karıştırmadan üst üste dönen üç ayrı sarmal yoldan üç farklı şerefeye çıkabiliyordu!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Mimar Sinan'ın minarelerindeki gizem sadece deprem terazisiyle bitmiyordu. Edirne'de seksen yaşında inşa ettiği 'Ustalık Eserim' dediği Selimiye Camii'nin incecik minarelerinin içine tam üç ayrı taş merdiven sığdırmıştı! Aynı anda minare kapısından giren üç müezzin, içeride birbirini hiç görmeden ve ayak seslerini bile karıştırmadan üst üste dönen üç ayrı sarmal yoldan üç farklı şerefeye çıkabiliyordu!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Koca Mimar Sinan",
            dialogue:
              "Geometriyi iyi bilen bir mimar için daracık bir taş silindirin içinde bile üç ayrı yol açmak mümkündür!",
            historicalNote:
              "Bunu Biliyor muydun? Selimiye Camii'nin 3 yollu minare merdiveni, bugün bile dünyanın dört bir yanından gelen mimarları hayrete düşüren bir geometri harikasıdır!",
            imagePath: "assets/images/cezeri_s1_artuklu_palace.png",
            imageKey: "assets/images/cezeri_s1_artuklu_palace.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Geometrik minare ve kubbe çizimleri.",
          },
          {
            id: "sinan-ch2-s7",
            sceneNumber: 7,
            title: "Horasan Harcının Gizli Formülü",
            narration:
              "Sinan taşları birbirine yapıştıran 'Horasan Harcı'nı hazırlarken de kimya bilimini kullanıyordu. Sönmüş kireç, ince elenmiş kiremit tozu ve kuvars kumunu karıştırıyor; harcın hem su geçirmez hem de esnek olması için içine yumurta akı, peynir suyu ve keten lifleri ekletiyordu! Bu doğal biyokimyasal karışım, asırlar geçtikçe ufalanmak yerine kaya gibi sağlamlaşıyordu.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Sinan taşları birbirine yapıştıran 'Horasan Harcı'nı hazırlarken de kimya bilimini kullanıyordu. Sönmüş kireç, ince elenmiş kiremit tozu ve kuvars kumunu karıştırıyor; harcın hem su geçirmez hem de esnek olması için içine yumurta akı, peynir suyu ve keten lifleri ekletiyordu! Bu doğal biyokimyasal karışım, asırlar geçtikçe ufalanmak yerine kaya gibi sağlamlaşıordu.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Koca Mimar Sinan",
            dialogue:
              "Bizim harcımızda hile olmaz; taşın hakkını verirsen o taş da asırlar boyu insanlığa gölge ve sığınak olur!",
            historicalNote:
              "Bunu Biliyor muydun? Süleymaniye ve Selimiye inşaatlarında harç için Anadolu'nun dört bir yanından milyonlarca yumurta getirildiği Osmanlı arşiv defterlerinde kayıtlıdır!",
            imagePath: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            imageKey: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Harç kapları, pergel ve terazi.",
          },
          {
            id: "sinan-ch2-s8",
            sceneNumber: 8,
            title: "1990'larda Japon Mühendislerin Hayranlığı",
            narration:
              "Mimar Sinan'ın vefatından dört yüz yıl sonra, dünyadaki en gelişmiş deprem teknolojisine sahip Japon bilim insanları ve mühendisler İstanbul'a gelerek Süleymaniye ve Selimiye camilerinin temellerini incelediler. Zemindeki kazık sistemini, taşlar arasındaki kurşun amortisörleri ve döner deprem terazilerini gördüklerinde şapkalarını çıkararak Koca Sinan'ın dehası önünde saygıyla eğildiler.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Mimar Sinan'ın vefatından dört yüz yıl sonra, dünyadaki en gelişmiş deprem teknolojisine sahip Japon bilim insanları ve mühendisler İstanbul'a gelerek Süleymaniye ve Selimiye camilerinin temellerini incelediler. Zemindeki kazık sistemini, taşlar arasındaki kurşun amortisörleri ve döner deprem terazilerini gördüklerinde şapkalarını çıkararak Koca Sinan'ın dehası önünde saygıyla eğildiler.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Deprem Araştırmacısı Mühendis",
            dialogue:
              "Mimar Sinan modern sismik izolasyon (deprem yalıtımı) bilimini bizden dört yüz yıl önce taş ve kurşunla kusursuzca uygulamış!",
            historicalNote:
              "Bunu Biliyor muydun? Mimar Sinan'ın İstanbul'daki eserleri 1557'den bu yana gerçekleşen 80'den fazla büyük depremi yıkılmadan atlatmıştır.",
            imagePath: "assets/images/artifact_mimar_sinan_cube.png",
            imageKey: "assets/images/artifact_mimar_sinan_cube.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Asırlara meydan okuyan Süleymaniye kubbesi.",
          },
          {
            id: "sinan-ch2-s9",
            sceneNumber: 9,
            title: "Taşlara Yazılan Dürüstlük ve Bilim",
            narration:
              "Doksan dokuz yıllık bereketli ömrüne yüzlerce ölümsüz eser sığdıran Koca Mimar Sinan, depremle savaşmak yerine depremin enerjisini esneterek sönümleyen mühendislik sırlarını gelecek nesillere miras bıraktı. O, işini en sağlam ve en dürüst şekilde yapan insanın eserlerinin yüzyıllar boyu ayakta kalacağını tüm dünyaya gösterdi.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Doksan dokuz yıllık bereketli ömrüne yüzlerce ölümsüz eser sığdıran Koca Mimar Sinan, depremle savaşmak yerine depremin enerjisini esneterek sönümleyen mühendislik sırlarını gelecek nesillere miras bıraktı. O, işini en sağlam ve en dürüst şekilde yapan insanın eserlerinin yüzyıllar boyu ayakta kalacağını tüm dünyaya gösterdi.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Koca Mimar Sinan",
            dialogue:
              "Yaptığınız her işi öyle sağlam ve dürüst yapın ki, yüzyıllar sonra gelen torunlarınız baktığında 'Allah ustasından razı olsun' desin!",
            historicalNote:
              "Bunu Biliyor muydun? Merkür gezegenindeki büyük bir kratere dünya bilim dünyası tarafından 'Sinan Krateri' adı verilmiştir!",
            imagePath: "assets/images/fatih_kadi_court.png",
            imageKey: "assets/images/fatih_kadi_court.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Güneş ışıkları altında Başmimar Sinan.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Deprem kuşağındaki bir şehirde 70 metre yüksekliğinde minareler ve dev bir kubbe inşa ediyorsun. Asırlar boyunca depremlerde yıkılmaması ve en ufak eğilmenin hemen fark edilmesi için ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Malzemeden tasarruf etmek için temeli sığ kazar, taşları sadece çamurla dizerim.",
              feedback:
                "Çürük temel ve malzemeden çalmak ilk depremde felakete yol açar!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Minareleri hiç yapmam ve kubbeyi çok alçak tutarım.",
              feedback:
                "Korkup vazgeçmek yerine mühendislik ve bilimle güvenli çözümler üretmelisin!",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Zemini kazıklarla sağlamlaştırırım, taşları esnek kurşun kenetlerle bağlarım ve mihrap/minare kenarlarına milimetrik kaymayı bile haber veren döner 'Deprem Terazisi' sütunları yerleştiririm!",
              feedback:
                "Tarihi Hakikat! Mimar Sinan kurşun kenetler, esnek Horasan harcı ve döner Deprem Terazileri ile asırlara meydan okuyan yapılar kurdu!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Mimar Sinan, yapılarının depreme dayanması için kazıklı temel, esnek Horasan harcı ve taşlar arasına eritilmiş kurşun kenetler kullandı. Ayrıca mihrap ve kemer yanlarına yerleştirdiği döner mermer sütunlarla (Deprem Terazileri) binanın dengesini sürekli kontrol altında tuttu!",
          quoteHighlight:
            "Bu döner sütunlar elle çevrildiğinde rahatça dönüyorsa binanın dengesi kusursuzdur; sıkışırsa deprem yükünü hemen haber verir!",
        },
        rewardArtifact: {
          id: "artifact-earthquake-balance",
          name: "Mimar Sinan'ın Deprem Terazisi ve Kurşun Keneti",
          heroId: "mimar-sinan",
          chapterId: "mimar-sinan-ch2",
          imagePath: "assets/images/artifact_mimar_sinan_cube.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik ve Mühendislik Puanı",
          points: 50,
          unlockedTitle: "Deprem Mühendisi",
          shortDescription:
            "Mihrapların ve minare kaidelerinin yanına yerleştirilen döner mermer Deprem Terazisi sütunu ve esnek kurşun kenet.",
          historicalNote:
            "Osmanlı mimarisindeki Deprem Terazileri, yapıdaki en küçük oturma veya eğilmeyi sıkışarak haber veren mekanik denge sensörleridir.",
          accentColor: "#D97706",
          hotspots: [
            {
              id: "rotating-marble-column",
              xPercent: 48,
              yPercent: 35,
              title: "Döner Mermer Silindir",
              secretFact:
                "Kendi ekseni etrafında dönebilen bu mermer sütun, binada milimetrik bir kayma olduğunda sıkışarak mimarları uyarırdı.",
            },
            {
              id: "lead-clamp-joint",
              xPercent: 35,
              yPercent: 68,
              title: "Esnek Kurşun Kenet",
              secretFact:
                "Kesme taşların arasına dökülen kurşun ve demir kenetler, deprem dalgalarında yay gibi esneyerek taşların kırılmasını önler.",
            },
            {
              id: "horasan-mortar-seal",
              xPercent: 66,
              yPercent: 65,
              title: "Horasan Harcı Formülü",
              secretFact:
                "Kiremit tozu, kireç ve yumurta akıyla yapılan Horasan harcı su geçirmez ve depreme karşı esneklik sağlar.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Mimar Sinan'ın elektrik olmayan bir çağda döner mermer sütunlarla 'Deprem Terazisi' kurması sence nasıl bir zeka örneğidir?",
          "Bir işi yaparken kimsenin görmediği temel ve taş aralarını bile en sağlam malzemeyle yapmak neden çok önemlidir?",
          "Tarihi bir camiye gittiğimizde mihrabın iki yanındaki döner deprem terazisi sütunlarını birlikte inceleyelim mi?",
        ],
      },
    ],
  },

  // ==========================================================================
  // 13. KAHRAMAN: ALİ KUŞÇU (1 BÖLÜM - 9 SAHNE)
  // ==========================================================================
  {
    id: "ali-kuscu",
    name: "Ali Kuşçu",
    heroClass: "GIZEM_IZ_SURME",
    heroClassLabel: "Gizem ve İz Sürme",
    classBadgeLabel: "Gizem ve İz Sürme",
    title: "Semerkand'dan İstanbul'a Yıldızları ve Ay'ı Haritalayan Astronom",
    era: "1403 – 1474 (Semerkand & İstanbul)",
    location: "Semerkand & İstanbul",
    visualMode: "CHARACTER_PORTRAIT",
    coverImage: "assets/images/ali_kuscu_moon_map.png",
    crisisImage: "assets/images/ali_kuscu_moon_map.png",
    images: {
      cover: "assets/images/ali_kuscu_moon_map.png",
      crisis: "assets/images/ali_kuscu_moon_map.png",
      artifact: "assets/images/artifact_qarawiyyin_astrolabe.png",
    },
    accentColor: "#D97706",
    secondaryColor: "#0D9488",
    badgeText: "Astronomi, Ay Haritası & Güneş Saati",
    summary:
      "Semerkand Rasathanesi'nde Uluğ Bey ile 1018 yıldızın kataloğunu çıkaran, Ay'ın ilk haritasını çizen ve Fatih Sultan Mehmed'in davetiyle İstanbul'da astronomi okulunu kuran büyük gökbilimci.",
    shortBio:
      "Semerkand Rasathanesi'nde Uluğ Bey ile 1018 yıldızın kataloğunu çıkaran, Ay'ın ilk haritasını çizen ve Fatih Sultan Mehmed'in davetiyle İstanbul'da astronomi okulunu kuran büyük gökbilimci.",
    chapters: [
      // ------------------------------------------------------------------------
      // ALİ KUŞÇU - BÖLÜM 1: SEMERKAND'DAN İSTANBUL'A YILDIZ HARİTASI VE AY'IN İLK HARİTASI (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "ali-kuscu-ch1",
        heroId: "ali-kuscu",
        chapterNumber: 1,
        title: "Semerkand'dan İstanbul'a Yıldız Haritası ve Ay'ın İlk Haritası",
        subtitle: "Gökyüzünün sırlarını çözen bilgin, gittiği her şehri aydınlatır",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "kuscu-ch1-s1",
            sceneNumber: 1,
            title: "Semerkand Sarayında Doğan Gökyüzü Merakı",
            narration:
              "On beşinci yüzyılın başlarında Mâverâünnehir'in incisi Semerkand şehri, mavi çinili kubbeleri ve rasathanesiyle dünyanın bilim merkeziydi. Babası, astronom hükümdar Uluğ Bey'in doğancıbaşısı (kuşçubaşısı) olduğu için genç Alâeddin Ali herkes tarafından 'Ali Kuşçu' diye tanınıyordu. Ancak küçük Ali'nin gözü saraydaki av kuşlarından çok daha yükseklerde; gece gökyüzünde parlayan yıldızlarda ve gümüş renkli Ay'daydı!\n\nSemerkand Rasathanesi'nin yer altına inen dev mermer sekstant rayına düşen ince güneş hüzmesi, gök cisimlerinin hareketini saniyesi saniyesine görünür kılıyordu. O an Semerkand Rasathanesi'nin mermer sekstant galerisinde ve İstanbul Ayasofya Medresesi'nde hissedilen evrenin düzenini keşfetme tutkusu, hocasına duyduğu vefa ve genç öğrencilere ilim aşılama heyecanı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "On beşinci yüzyılın başlarında Mâverâünnehir'in incisi Semerkand şehri, mavi çinili kubbeleri ve rasathanesiyle dünyanın bilim merkeziydi. Babası, astronom hükümdar Uluğ Bey'in doğancıbaşısı (kuşçubaşısı) olduğu için genç Alâeddin Ali herkes tarafından 'Ali Kuşçu' diye tanınıyordu. Ancak küçük Ali'nin gözü saraydaki av kuşlarından çok daha yükseklerde; gece gökyüzünde parlayan yıldızlarda ve gümüş renkli Ay'daydı!\n\nSemerkand Rasathanesi'nin yer altına inen dev mermer sekstant rayına düşen ince güneş hüzmesi, gök cisimlerinin hareketini saniyesi saniyesine görünür kılıyordu. O an Semerkand Rasathanesi'nin mermer sekstant galerisinde ve İstanbul Ayasofya Medresesi'nde hissedilen evrenin düzenini keşfetme tutkusu, hocasına duyduğu vefa ve genç öğrencilere ilim aşılama heyecanı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Genç Ali Kuşçu",
            dialogue:
              "Babam gökyüzünde süzülen şahinlerin izini sürüyor; ben ise yıldızların ve Ay'ın gökyüzündeki görünmez yörüngelerinin izini süreceğim!",
            historicalNote:
              "Bunu Biliyor muydun? Ali Kuşçu Semerkand'da bizzat hükümdar ve büyük astronom Uluğ Bey ile Kadızâde-i Rûmî ve Gıyâseddin Cemşid'den matematik ve astronomi dersleri almıştır.",
            imagePath: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
            imageKey: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Semerkand gecesinde yıldızlara tutulan pirinç usturlap.",
          },
          {
            id: "kuscu-ch1-s2",
            sceneNumber: 2,
            title: "Kimseye Haber Vermeden Çıkılan İlim Yolculuğu",
            narration:
              "Genç Ali Kuşçu öğrendikleriyle yetinmiyor, matematik ve optik bilimini en derin köklerine kadar çözmek istiyordu. Ancak hocası Uluğ Bey onu çok sevdiği için yanından ayrılmasına kıyamazdı. Ali Kuşçu bir gece kimseye haber vermeden heybesini topladı ve bilgisini artırmak için İran'ın Kirman şehrine gitti! Yıllarca orada gece gündüz çalışarak 'Hallü Eşkâli'l-Kamer' yani 'Ay'ın Safhalarının ve Şekillerinin Çözümü' adlı ünlü eserini yazdı!\n\nGece boyu süren sabırlı gözlemlerle çizilen Ay haritası, teleskopun icadından yüzyıllar önce bile insan aklının ve matematiğin gökyüzüne nasıl ulaşabildiğini gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, evrenin düzenini keşfetme tutkusu, hocasına duyduğu vefa ve genç öğrencilere ilim aşılama heyecanı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Genç Ali Kuşçu öğrendikleriyle yetinmiyor, matematik ve optik bilimini en derin köklerine kadar çözmek istiyordu. Ancak hocası Uluğ Bey onu çok sevdiği için yanından ayrılmasına kıyamazdı. Ali Kuşçu bir gece kimseye haber vermeden heybesini topladı ve bilgisini artırmak için İran'ın Kirman şehrine gitti! Yıllarca orada gece gündüz çalışarak 'Hallü Eşkâli'l-Kamer' yani 'Ay'ın Safhalarının ve Şekillerinin Çözümü' adlı ünlü eserini yazdı!\n\nGece boyu süren sabırlı gözlemlerle çizilen Ay haritası, teleskopun icadından yüzyıllar önce bile insan aklının ve matematiğin gökyüzüne nasıl ulaşabildiğini gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, evrenin düzenini keşfetme tutkusu, hocasına duyduğu vefa ve genç öğrencilere ilim aşılama heyecanı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Ali Kuşçu",
            dialogue:
              "Ay'ın hilalden dolunaya geçişini ve üzerindeki gölgeleri sadece izlemek yetmez; onu geometri ve ışık kurallarıyla haritalamak gerekir!",
            historicalNote:
              "Bunu Biliyor muydun? Ali Kuşçu'nun Kirman'da yazdığı 'Hallü Eşkâli'l-Kamer' (Ay'ın Şekillerinin Açıklanması) risalesi, Ay hareketleri ve görünümü üzerine yazılmış en özgün astronomi eserlerinden biridir.",
            imagePath: "assets/images/harizmi_s2_sundial_observatory.png",
            imageKey: "assets/images/harizmi_s2_sundial_observatory.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Ay safhalarını gösteren geometrik çizimler ve usturlap.",
          },
          {
            id: "kuscu-ch1-s3",
            sceneNumber: 3,
            title: "Uluğ Bey'e Sunulan Ay Haritası ve Rasathane",
            narration:
              "Ali Kuşçu yıllar sonra Semerkand'a döndüğünde Uluğ Bey ona 'Bana hediye olarak ne getirdin?' diye sordu. Ali Kuşçu çantasından Ay'ın hareketlerini ve yüzey şekillerini matematiksel olarak açıklayan kitabını çıkardı! Uluğ Bey eseri ayakta okudu ve öğrencisini alnından öperek onu dünyanın en gelişmiş gözlemevi olan Semerkand Rasathanesi'nin müdürü yaptı!\n\nUzun kervan yolculukları boyunca gözü gibi korunan astronomi kitapları, bilimin sınırları ve şehirleri aşan en değerli insanlık hazinesi olduğunu hatırlatıyordu. Çevredeki her detay, Semerkand Rasathanesi'nin mermer sekstant galerisinde ve İstanbul Ayasofya Medresesi'nde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Ali Kuşçu yıllar sonra Semerkand'a döndüğünde Uluğ Bey ona 'Bana hediye olarak ne getirdin?' diye sordu. Ali Kuşçu çantasından Ay'ın hareketlerini ve yüzey şekillerini matematiksel olarak açıklayan kitabını çıkardı! Uluğ Bey eseri ayakta okudu ve öğrencisini alnından öperek onu dünyanın en gelişmiş gözlemevi olan Semerkand Rasathanesi'nin müdürü yaptı!\n\nUzun kervan yolculukları boyunca gözü gibi korunan astronomi kitapları, bilimin sınırları ve şehirleri aşan en değerli insanlık hazinesi olduğunu hatırlatıyordu. Çevredeki her detay, Semerkand Rasathanesi'nin mermer sekstant galerisinde ve İstanbul Ayasofya Medresesi'nde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Hükümdar ve Astronom Uluğ Bey",
            dialogue:
              "Aferin evladım Ali! Bir alimin getirebileceği en büyük hediye altın veya mücevher değil, Ay'ın sırlarını çözen bu eşsiz ilim eseridir!",
            historicalNote:
              "Bunu Biliyor muydun? Semerkand Rasathanesi'nin içinde yerin altına inen 40 metre yarıçapında devasa mermer bir 'Suds-i Fahrî' (Sekstant / Gök Kemeri) ölçüm aleti bulunuyordu!",
            imagePath: "assets/images/ali_kuscu_moon_map.png",
            imageKey: "assets/images/ali_kuscu_moon_map.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Rasathane balkonunda yıldız ve Ay gözlemi.",
          },
          {
            id: "kuscu-ch1-s4",
            sceneNumber: 4,
            title: "1018 Yıldızın Kataloğu: Zîc-i Uluğ Bey!",
            narration:
              "Uluğ Bey ve Ali Kuşçu, Semerkand Rasathanesi'nde otuz yıl süren gözlemlerle gökyüzündeki tam 1018 yıldızın konumunu ve bir yılın süresini (365 gün, 6 saat, 10 dakika, 8 saniye olarak!) inanılmaz bir hassasiyetle ölçüp 'Zîc-i Uluğ Bey' (Yıldız Kataloğu) kitabında topladılar. Ancak 1449 yılında Uluğ Bey şehit edilip Semerkand'da karışıklık çıkınca, rasathanedeki bu paha biçilemez yıldız haritaları yok olma tehlikesiyle karşı karşıya kaldı!\n\nAyasofya Medresesi'nin güneşli avlusunda genç öğrencilerin gözlerindeki merak parıltısı, Semerkand'da yakılan bilim meşalesinin İstanbul'da daha da gür yanacağını müjdeliyordu. Sabır, dikkat ve samimiyetle atılan bu adım, evrenin düzenini keşfetme tutkusu, hocasına duyduğu vefa ve genç öğrencilere ilim aşılama heyecanı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Uluğ Bey ve Ali Kuşçu, Semerkand Rasathanesi'nde otuz yıl süren gözlemlerle gökyüzündeki tam 1018 yıldızın konumunu ve bir yılın süresini (365 gün, 6 saat, 10 dakika, 8 saniye olarak!) inanılmaz bir hassasiyetle ölçüp 'Zîc-i Uluğ Bey' (Yıldız Kataloğu) kitabında topladılar. Ancak 1449 yılında Uluğ Bey şehit edilip Semerkand'da karışıklık çıkınca, rasathanedeki bu paha biçilemez yıldız haritaları yok olma tehlikesiyle karşı karşıya kaldı!\n\nAyasofya Medresesi'nin güneşli avlusunda genç öğrencilerin gözlerindeki merak parıltısı, Semerkand'da yakılan bilim meşalesinin İstanbul'da daha da gür yanacağını müjdeliyordu. Sabır, dikkat ve samimiyetle atılan bu adım, evrenin düzenini keşfetme tutkusu, hocasına duyduğu vefa ve genç öğrencilere ilim aşılama heyecanı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Ali Kuşçu",
            dialogue:
              "Hocam Uluğ Bey'in ve otuz yıllık emeğimizin eseri olan bu 1018 yıldızlık Zîc kataloğunun yok olmasına asla izin veremem!",
            historicalNote:
              "Bunu Biliyor muydun? Teleskobun icadından yaklaşık 160 yıl önce hazırlanan 'Zîc-i Uluğ Bey', yüzyıllar boyunca hem Doğu'da hem Avrupa'da en güvenilir yıldız atlası olarak kullanılmıştır!",
            imagePath: "assets/images/meryem_s2_celestial_globe.png",
            imageKey: "assets/images/meryem_s2_celestial_globe.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Yıldız haritası parşömenleri ve usturlap.",
            midDecision: {
              title: "ARA KARAR: Tehlikedeki Bilim Hazinesini Nasıl Korursun?",
              question:
                "Semerkand'da kargaşa çıktı ve 30 yılda hazırlanan 1018 yıldızlık astronomi kataloğu (Zîc) kaybolma tehlikesi altında. Bu bilim mirasını kurtarmak için ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Kitapları rasathanede bırakıp sadece kendi canımı kurtarmak için kaçarım.",
                  feedback:
                    "O zaman 30 yıllık astronomi emeği ve 1018 yıldızın kaydı tarihten silinip giderdi!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Zîc-i Uluğ Bey'in el yazması nüshalarını ve astronomi aletlerini özenle sandıklara sarıp koruma altına alırım; ilme değer veren güvenli bir bilim merkezine ulaştırırım!",
                  feedback:
                    "Harika! Ali Kuşçu hocasının emaneti olan Zîc-i Uluğ Bey'i koruyup çoğaltarak tüm dünyaya ulaşmasını sağladı!",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "kuscu-ch1-s5",
            sceneNumber: 5,
            title: "Tebriz'den İstanbul'a Elçilik Yolculuğu",
            narration:
              "Ali Kuşçu, Zîc-i Uluğ Bey nüshalarını yanına alarak ailesi ve öğrencileriyle birlikte batıya, Tebriz'e geldi. Akkoyunlu Hükümdarı Uzun Hasan bu büyük alime derin bir saygı gösterdi ve Osmanlı Padişahı Fatih Sultan Mehmed ile barış görüşmeleri yapması için Ali Kuşçu'yu elçi olarak İstanbul'a gönderdi. İstanbul'da bilime aşık genç Padişah Fatih Sultan Mehmed ile büyük astronom Ali Kuşçu'nun tarihi buluşması gerçekleşti!\n\nSemerkand Rasathanesi'nin yer altına inen dev mermer sekstant rayına düşen ince güneş hüzmesi, gök cisimlerinin hareketini saniyesi saniyesine görünür kılıyordu. O an Semerkand Rasathanesi'nin mermer sekstant galerisinde ve İstanbul Ayasofya Medresesi'nde hissedilen evrenin düzenini keşfetme tutkusu, hocasına duyduğu vefa ve genç öğrencilere ilim aşılama heyecanı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Ali Kuşçu, Zîc-i Uluğ Bey nüshalarını yanına alarak ailesi ve öğrencileriyle birlikte batıya, Tebriz'e geldi. Akkoyunlu Hükümdarı Uzun Hasan bu büyük alime derin bir saygı gösterdi ve Osmanlı Padişahı Fatih Sultan Mehmed ile barış görüşmeleri yapması için Ali Kuşçu'yu elçi olarak İstanbul'a gönderdi. İstanbul'da bilime aşık genç Padişah Fatih Sultan Mehmed ile büyük astronom Ali Kuşçu'nun tarihi buluşması gerçekleşti!\n\nSemerkand Rasathanesi'nin yer altına inen dev mermer sekstant rayına düşen ince güneş hüzmesi, gök cisimlerinin hareketini saniyesi saniyesine görünür kılıyordu. O an Semerkand Rasathanesi'nin mermer sekstant galerisinde ve İstanbul Ayasofya Medresesi'nde hissedilen evrenin düzenini keşfetme tutkusu, hocasına duyduğu vefa ve genç öğrencilere ilim aşılama heyecanı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Fatih Sultan Mehmed Han",
            dialogue:
              "Hoş geldiniz Mevlânâ Ali Kuşçu! Semerkand'ın yıldız ilmini İstanbul'da görmek bizim için en büyük bahtiyarlıktır; gelin şehrimizde kalın ve medreselerimizin başhocası olun!",
            historicalNote:
              "Bunu Biliyor muydun? Fatih Sultan Mehmed, İstanbul'u sadece askeri bir başkent değil, dünyanın en büyük alimlerinin toplandığı bir bilim merkezi yapmak istiyordu.",
            imagePath: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            imageKey: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Fatih Sultan Mehmed'in ilme ve alimlere verdiği değer.",
          },
          {
            id: "kuscu-ch1-s6",
            sceneNumber: 6,
            title: "Sözünü Tutup İstanbul'a Dönüş",
            narration:
              "Ali Kuşçu, Fatih'in bu samimi davetine çok sevindi ancak önce üzerine aldığı elçilik görevini dürüstçe tamamlaması gerekiyordu! 'Hünkârım, önce Tebriz'e dönüp elçilik emanetimi teslim edeyim, söz veriyorum ardından hemen İstanbul'a geleceğim!' dedi. Sözünü tutan Ali Kuşçu elçilik görevini bitirir bitirmez 200 kişilik ailesi, öğrencileri ve el yazması kitaplarıyla İstanbul yoluna çıktı. Fatih her konak yerinde onu karşılamak için günde bin akçe yol harçlığı ve tören alayı gönderdi!\n\nGece boyu süren sabırlı gözlemlerle çizilen Ay haritası, teleskopun icadından yüzyıllar önce bile insan aklının ve matematiğin gökyüzüne nasıl ulaşabildiğini gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, evrenin düzenini keşfetme tutkusu, hocasına duyduğu vefa ve genç öğrencilere ilim aşılama heyecanı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Ali Kuşçu, Fatih'in bu samimi davetine çok sevindi ancak önce üzerine aldığı elçilik görevini dürüstçe tamamlaması gerekiyordu! 'Hünkârım, önce Tebriz'e dönüp elçilik emanetimi teslim edeyim, söz veriyorum ardından hemen İstanbul'a geleceğim!' dedi. Sözünü tutan Ali Kuşçu elçilik görevini bitirir bitirmez 200 kişilik ailesi, öğrencileri ve el yazması kitaplarıyla İstanbul yoluna çıktı. Fatih her konak yerinde onu karşılamak için günde bin akçe yol harçlığı ve tören alayı gönderdi!\n\nGece boyu süren sabırlı gözlemlerle çizilen Ay haritası, teleskopun icadından yüzyıllar önce bile insan aklının ve matematiğin gökyüzüne nasıl ulaşabildiğini gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, evrenin düzenini keşfetme tutkusu, hocasına duyduğu vefa ve genç öğrencilere ilim aşılama heyecanı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Ali Kuşçu",
            dialogue:
              "Elçilik bir emanettir; emaneti sahibine teslim etmeden kendi rahatımızı düşünemeyiz! Şimdi gönül huzuruyla İstanbul'da ilim meşalesini yakabiliriz!",
            historicalNote:
              "Bunu Biliyor muydun? Ali Kuşçu İstanbul'a vardığında Üsküdar'dan başlayarak İstanbul Kadısı Hızır Çelebi ve tüm medrese hocaları tarafından saltanat kayıklarıyla karşılanmıştır!",
            imagePath: "assets/images/fatih_s2_red_notebook_plan.png",
            imageKey: "assets/images/fatih_s2_red_notebook_plan.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "İstanbul ufku ve astronomi aletleri.",
          },
          {
            id: "kuscu-ch1-s7",
            sceneNumber: 7,
            title: "İstanbul'un Enlemi ve Fatih Camii Güneş Saatleri",
            narration:
              "İstanbul'a yerleşen Ali Kuşçu, vakit kaybetmeden şehrin coğrafi konumunu usturlapla ölçtü ve daha önce yanlış bilinen İstanbul'un enlemini 41 derece 14 dakika, boylamını ise 59 derece olarak düzeltti! Ardından Fatih Camii ve Ayasofya'nın avlularına güneşin gölgesiyle dakikası dakikasına zamanı gösteren mermer 'Güneş Saatleri' (Basîta) inşa etti.\n\nUzun kervan yolculukları boyunca gözü gibi korunan astronomi kitapları, bilimin sınırları ve şehirleri aşan en değerli insanlık hazinesi olduğunu hatırlatıyordu. Çevredeki her detay, Semerkand Rasathanesi'nin mermer sekstant galerisinde ve İstanbul Ayasofya Medresesi'nde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "İstanbul'a yerleşen Ali Kuşçu, vakit kaybetmeden şehrin coğrafi konumunu usturlapla ölçtü ve daha önce yanlış bilinen İstanbul'un enlemini 41 derece 14 dakika, boylamını ise 59 derece olarak düzeltti! Ardından Fatih Camii ve Ayasofya'nın avlularına güneşin gölgesiyle dakikası dakikasına zamanı gösteren mermer 'Güneş Saatleri' (Basîta) inşa etti.\n\nUzun kervan yolculukları boyunca gözü gibi korunan astronomi kitapları, bilimin sınırları ve şehirleri aşan en değerli insanlık hazinesi olduğunu hatırlatıyordu. Çevredeki her detay, Semerkand Rasathanesi'nin mermer sekstant galerisinde ve İstanbul Ayasofya Medresesi'nde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Ali Kuşçu",
            dialogue:
              "Gökyüzündeki Güneş en şaşmaz saattir; mermer üzerine çizdiğimiz bu trigonometrik çizgilerle İstanbul halkı vakti hatasızca öğrenecek!",
            historicalNote:
              "Bunu Biliyor muydun? Ali Kuşçu'nun 1473 yılında Fatih Sultan Mehmed'e sunduğu 'el-Fethiyye' (Astronomi) ve 'el-Muhammediyye' (Matematik) kitapları asırlarca Osmanlı medreselerinde ders kitabı olarak okutulmuştur!",
            imagePath: "assets/images/harizmi_usturlap.png",
            imageKey: "assets/images/harizmi_usturlap.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Mermer güneş saati, usturlap ve geometrik çizimler.",
          },
          {
            id: "kuscu-ch1-s8",
            sceneNumber: 8,
            title: "Dünya'nın Dönüşünü Savunan Cesur Fikir",
            narration:
              "Ayasofya Medresesi'nde başmüderris (rektör) olarak yüzlerce öğrenci yetiştiren Ali Kuşçu, 'Fethiyye' adlı eserinde o çağ için çok ileri bir bilimsel görüş ortaya koydu: Eski Yunan filozoflarının 'Astronomi fiziğe bağımlıdır ve Dünya sabittir' iddiasına karşı çıktı! Gök cisimlerinin hareketini açıklamak için Dünya'nın kendi ekseni etrafında dönmesinin bilimsel olarak hiçbir engeli olmadığını, astronominin gözlem ve matematikle kanıtlanması gerektiğini yazdı!\n\nAyasofya Medresesi'nin güneşli avlusunda genç öğrencilerin gözlerindeki merak parıltısı, Semerkand'da yakılan bilim meşalesinin İstanbul'da daha da gür yanacağını müjdeliyordu. Sabır, dikkat ve samimiyetle atılan bu adım, evrenin düzenini keşfetme tutkusu, hocasına duyduğu vefa ve genç öğrencilere ilim aşılama heyecanı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Ayasofya Medresesi'nde başmüderris (rektör) olarak yüzlerce öğrenci yetiştiren Ali Kuşçu, 'Fethiyye' adlı eserinde o çağ için çok ileri bir bilimsel görüş ortaya koydu: Eski Yunan filozoflarının 'Astronomi fiziğe bağımlıdır ve Dünya sabittir' iddiasına karşı çıktı! Gök cisimlerinin hareketini açıklamak için Dünya'nın kendi ekseni etrafında dönmesinin bilimsel olarak hiçbir engeli olmadığını, astronominin gözlem ve matematikle kanıtlanması gerektiğini yazdı!\n\nAyasofya Medresesi'nin güneşli avlusunda genç öğrencilerin gözlerindeki merak parıltısı, Semerkand'da yakılan bilim meşalesinin İstanbul'da daha da gür yanacağını müjdeliyordu. Sabır, dikkat ve samimiyetle atılan bu adım, evrenin düzenini keşfetme tutkusu, hocasına duyduğu vefa ve genç öğrencilere ilim aşılama heyecanı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Ali Kuşçu",
            dialogue:
              "Astronomi bilimi varsayımlara değil, doğrudan gökyüzü gözlemine ve matematiğe dayanmalıdır!",
            historicalNote:
              "Bunu Biliyor muydun? Bilim tarihçileri, Ali Kuşçu'nun Dünya'nın dönüşü hakkındaki matematiksel analizlerinin 16. yüzyılda Kopernik'in güneş merkezli teorisine zemin hazırladığını kabul etmektedir!",
            imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
            imageKey: "assets/images/artifact_qarawiyyin_astrolabe.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Gezegen yörüngeleri ve matematik parşömenleri.",
          },
          {
            id: "kuscu-ch1-s9",
            sceneNumber: 9,
            title: "Ay'da Yaşayan İsim: Ali Kuşçu Krateri!",
            narration:
              "1474 yılında İstanbul'da vefat eden ve Eyüp Sultan'ın yanı başına defnedilen Ali Kuşçu, Semerkand'ın astronomi mirasını Osmanlı'ya taşıyarak Takiyyüddin ve Mîrim Çelebi gibi yeni gökbilimcilerin yetişmesini sağladı. Yüzyıllar sonra modern uzay çağında, gençliğinde büyük bir aşkla haritasını çizdiği Ay'ın üzerindeki bir bölgeye onun adı verildi!\n\nSemerkand Rasathanesi'nin yer altına inen dev mermer sekstant rayına düşen ince güneş hüzmesi, gök cisimlerinin hareketini saniyesi saniyesine görünür kılıyordu. O an Semerkand Rasathanesi'nin mermer sekstant galerisinde ve İstanbul Ayasofya Medresesi'nde hissedilen evrenin düzenini keşfetme tutkusu, hocasına duyduğu vefa ve genç öğrencilere ilim aşılama heyecanı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "1474 yılında İstanbul'da vefat eden ve Eyüp Sultan'ın yanı başına defnedilen Ali Kuşçu, Semerkand'ın astronomi mirasını Osmanlı'ya taşıyarak Takiyyüddin ve Mîrim Çelebi gibi yeni gökbilimcilerin yetişmesini sağladı. Yüzyıllar sonra modern uzay çağında, gençliğinde büyük bir aşkla haritasını çizdiği Ay'ın üzerindeki bir bölgeye onun adı verildi!\n\nSemerkand Rasathanesi'nin yer altına inen dev mermer sekstant rayına düşen ince güneş hüzmesi, gök cisimlerinin hareketini saniyesi saniyesine görünür kılıyordu. O an Semerkand Rasathanesi'nin mermer sekstant galerisinde ve İstanbul Ayasofya Medresesi'nde hissedilen evrenin düzenini keşfetme tutkusu, hocasına duyduğu vefa ve genç öğrencilere ilim aşılama heyecanı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Ali Kuşçu",
            dialogue:
              "Başınızı gökyüzüne kaldırmaktan asla vazgeçmeyin; çünkü her yıldız, merak eden bir zihin için okunmayı bekleyen bir kitaptır!",
            historicalNote:
              "Bunu Biliyor muydun? Uluslararası Astronomi Birliği ve NASA, Ali Kuşçu'nun Ay çalışmaları onuruna Ay'daki bir bölgeye onun adını vermiştir!",
            imagePath: "assets/images/ibn_sina_s1_bukhara_library.png",
            imageKey: "assets/images/ibn_sina_s1_bukhara_library.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Yıldızlı gökyüzü ve parlayan usturlap.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Semerkand Rasathanesi'nde 30 yılda hazırlanan 1018 yıldızlık Zîc kataloğuna ve Ay haritası çalışmalarına sahipsin. Fatih Sultan Mehmed seni İstanbul'da bilim okulunu kurmaya davet etti ama üzerinde tamamlaman gereken bir elçilik emaneti var. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Elçilik görevimi yarım bırakıp hemen saraydaki rahat makama geçerim.",
              feedback:
                "Gerçek bir alim sözüne ve emanetine asla ihanet etmez!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Astronomi kitaplarını saklarım ve kimseye öğretmem.",
              feedback:
                "Bilim paylaşıldıkça ve yeni öğrenciler yetiştirdikçe büyür!",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Önce elçilik emanetimi dürüstçe tamamlarım; ardından Zîc-i Uluğ Bey yıldız haritalarıyla İstanbul'a gelip Ayasofya ve Sahn-ı Seman medreselerinde astronomi ve matematik müfredatını kurarım!",
              feedback:
                "Tarihi Hakikat! Ali Kuşçu hem sözüne sadık kaldı hem de Semerkand'ın gökbilim hazinesini İstanbul'a taşıyarak Osmanlı astronomi çağını başlattı!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Ali Kuşçu, Uluğ Bey ile hazırladıkları 1018 yıldızlık 'Zîc-i Uluğ Bey' kataloğunu ve Ay haritası çalışmalarını koruyarak İstanbul'a getirdi. Fatih Sultan Mehmed ile birlikte Sahn-ı Seman medreselerinin matematik ve astronomi programını yazdı, 'Fethiyye' ve 'Muhammediyye' eserlerini kaleme aldı!",
          quoteHighlight:
            "Bir alimin getirebileceği en büyük hediye altın değil, gökyüzünün ve Ay'ın sırlarını çözen ilim eseridir!",
        },
        rewardArtifact: {
          id: "artifact-ali-kuscu-moon-map",
          name: "Ali Kuşçu'nun Ay Haritası ve Zîc-i Uluğ Bey Atlası",
          heroId: "ali-kuscu",
          chapterId: "ali-kuscu-ch1",
          imagePath: "assets/images/ali_kuscu_moon_map.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik ve Keşif Puanı",
          points: 50,
          unlockedTitle: "Gökyüzü İz Sürücüsü",
          shortDescription:
            "Semerkand'dan İstanbul'a taşınan 1018 yıldızlık Zîc-i Uluğ Bey kataloğu, Ay safhaları haritası ve Fatih Camii güneş saati.",
          historicalNote:
            "Ali Kuşçu'nun 'Hallü Eşkâli'l-Kamer' ve 'el-Fethiyye' eserleri, İslam astronomi tarihinin en parlak halkalarından biridir.",
          accentColor: "#D97706",
          hotspots: [
            {
              id: "lunar-map-diagram",
              xPercent: 46,
              yPercent: 34,
              title: "Hallü Eşkâli'l-Kamer (Ay Haritası)",
              secretFact:
                "Ali Kuşçu'nun gençliğinde Kirman'da hazırladığı, Ay'ın safhalarını ve yüzey görünümünü geometrik olarak açıklayan tarihi çalışma.",
            },
            {
              id: "zic-1018-stars",
              xPercent: 64,
              yPercent: 56,
              title: "1018 Yıldızlık Zîc Kataloğu",
              secretFact:
                "Semerkand Rasathanesi'nde teleskop olmadan 1018 yıldızın koordinatlarını ve bir yılın süresini saniyesine kadar ölçen başyapıt.",
            },
            {
              id: "istanbul-sundial",
              xPercent: 35,
              yPercent: 72,
              title: "İstanbul Enlemi ve Güneş Saati",
              secretFact:
                "Ali Kuşçu İstanbul'un enlemini 41 derece 14 dakika olarak ölçmüş ve Fatih Camii avlusuna mermer güneş saatleri yerleştirmiştir.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Ali Kuşçu Fatih Sultan Mehmed'den çok büyük bir teklif aldığı halde neden 'Önce elçilik görevimi bitirip emaneti teslim etmeliyim' dedi?",
          "Teleskop icat edilmeden 160 yıl önce 1018 yıldızın yerini ve bir yılın uzunluğunu saniyesine kadar ölçmek nasıl bir sabır gerektirir?",
          "Bu akşam pencereden veya balkondan Ay'a bakıp Ali Kuşçu'nun 550 yıl önce çizdiği Ay safhalarını birlikte konuşalım mı?",
        ],
      },
    ],
  },

  // ==========================================================================
  // 14. KAHRAMAN: İBN BATTUTA (2 BÖLÜM - 9'AR SAHNE)
  // ==========================================================================
  {
    id: "ibn-battuta",
    name: "İbn Battuta",
    heroClass: "BUYUK_SEYYAHLAR",
    heroClassLabel: "Büyük Seyyahlar",
    classBadgeLabel: "Büyük Seyyahlar",
    title: "120 Bin Kilometre Yol Yürüyen Seyyahlar Sultanı",
    era: "1304 – 1369 (Tanca, Fas & Dünya Kıta Yolu)",
    location: "Tanca, Fas",
    visualMode: "CHARACTER_PORTRAIT",
    coverImage: "assets/images/ibn_battuta_hero.png",
    crisisImage: "assets/images/ibn_battuta_maldives_china.png",
    images: {
      cover: "assets/images/ibn_battuta_hero.png",
      crisis: "assets/images/ibn_battuta_maldives_china.png",
      artifact: "assets/images/artifact_qarawiyyin_astrolabe.png",
    },
    accentColor: "#F43F5E",
    secondaryColor: "#F59E0B",
    badgeText: "Keşif, Coğrafya & Rıhle",
    summary:
      "21 yaşında tek başına Fas'tan yola çıkıp 29 yıl boyunca Afrika, Orta Doğu, Hindistan, Maldivler ve Çin'e kadar 120 bin kilometre yol kat eden dünya tarihinin en büyük gezgini.",
    shortBio:
      "21 yaşında tek başına Fas'tan yola çıkıp 29 yıl boyunca Afrika, Orta Doğu, Hindistan, Maldivler ve Çin'e kadar 120 bin kilometre yol kat eden dünya tarihinin en büyük gezgini.",
    chapters: [
      // ------------------------------------------------------------------------
      // İBN BATTUTA - BÖLÜM 1: 21 YAŞINDA TANCA'DAN ÇIKIŞ VE KIZILDENİZ FIRTINASI (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "ibn-battuta-ch1",
        heroId: "ibn-battuta",
        chapterNumber: 1,
        title: "21 Yaşında Tanca'dan Çıkış ve Kızıldeniz Fırtınası",
        subtitle: "Mümkün oldukça geçtiğim hiçbir yoldan ikinci kez geçmeyeceğim!",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "battuta-ch1-s1",
            sceneNumber: 1,
            title: "Tanca Kapısında 21 Yaşında Bir Genç",
            narration:
              "Yıl 1325, Haziran ayının güneşli bir Perşembe sabahı... Fas'ın Atlas Okyanusu ile Akdeniz'in buluştuğu beyaz badanalı Tanca şehrinde yirmi bir yaşındaki genç hukuk öğrencisi Şemseddin Muhammed İbn Battuta heybesini katırına yükledi. Hem Hac vazifesini yerine getirmek hem de dünyadaki farklı şehirleri ve alimleri tanımak için tek başına yola çıkıyordu. Kapının önünde annesi ve babası gözyaşları içinde ona sarıldı.\n\nTanca'nın taş kemerli kapısından sabah güneşiyle birlikte çıkarken, sırtındaki deri heybe ve elindeki asa, yirmi dokuz yıl sürecek destansı bir keşfin ilk adımıydı. O an Tanca kapılarından Kızıldeniz fırtınalarına, Maldiv mercan adalarından Çin limanlarına uzanan 120 bin kilometrelik rotada hissedilen dünyayı tanıma merakı, zorluklar karşısında pes etmeyen azim ve farklı kültürlere duyulan saygı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Yıl 1325, Haziran ayının güneşli bir Perşembe sabahı... Fas'ın Atlas Okyanusu ile Akdeniz'in buluştuğu beyaz badanalı Tanca şehrinde yirmi bir yaşındaki genç hukuk öğrencisi Şemseddin Muhammed İbn Battuta heybesini katırına yükledi. Hem Hac vazifesini yerine getirmek hem de dünyadaki farklı şehirleri ve alimleri tanımak için tek başına yola çıkıyordu. Kapının önünde annesi ve babası gözyaşları içinde ona sarıldı.\n\nTanca'nın taş kemerli kapısından sabah güneşiyle birlikte çıkarken, sırtındaki deri heybe ve elindeki asa, yirmi dokuz yıl sürecek destansı bir keşfin ilk adımıydı. O an Tanca kapılarından Kızıldeniz fırtınalarına, Maldiv mercan adalarından Çin limanlarına uzanan 120 bin kilometrelik rotada hissedilen dünyayı tanıma merakı, zorluklar karşısında pes etmeyen azim ve farklı kültürlere duyulan saygı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Genç İbn Battuta",
            dialogue:
              "Canım annem, kıymetli babam; dualarınızı benden eksik etmeyin. Yeryüzünü gezip ilim öğrenmek için yola çıkıyorum!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Battuta 14 Haziran 1325 (2 Receb 725) günü Tanca'dan ayrıldığında sadece 1-2 yıl içinde dönmeyi planlıyordu ama yolculuğu tam 29 yıl sürdü!",
            imagePath: "assets/images/battuta_s1_tangier_departure.png",
            imageKey: "assets/images/battuta_s1_tangier_departure.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Elinde deri seyahat günlüğü ve usturlabıyla genç İbn Battuta.",
          },
          {
            id: "battuta-ch1-s2",
            sceneNumber: 2,
            title: "Çölde Verilen Büyük Söz",
            narration:
              "Tanca'dan ayrıldıktan sonra Kuzey Afrika kıyılarını takip ederek Cezayir ve Tunus yollarına düştü. Başlangıçta yanında hiçbir yol arkadaşı yoktu; zaman zaman sıtma ateşine yakalansa da katırının sırtından inmedi. Yol boyunca gördüğü her ağacı, her köprüyü ve insanların geleneklerini hafızasına kazıyan genç gezgin, kendine ömrü boyunca tutacağı çok özel bir kaşif sözü verdi.\n\nKızıldeniz'in dev dalgaları ve çöl fırtınaları yolu kesse de, 'geçtiğim hiçbir yoldan ikinci kez geçmeyeceğim' sözü genç gezginin kalbindeki cesareti diri tutuyordu. Tarihin bu unutulmaz dönemeç noktasında, dünyayı tanıma merakı, zorluklar karşısında pes etmeyen azim ve farklı kültürlere duyulan saygı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Tanca'dan ayrıldıktan sonra Kuzey Afrika kıyılarını takip ederek Cezayir ve Tunus yollarına düştü. Başlangıçta yanında hiçbir yol arkadaşı yoktu; zaman zaman sıtma ateşine yakalansa da katırının sırtından inmedi. Yol boyunca gördüğü her ağacı, her köprüyü ve insanların geleneklerini hafızasına kazıyan genç gezgin, kendine ömrü boyunca tutacağı çok özel bir kaşif sözü verdi.\n\nKızıldeniz'in dev dalgaları ve çöl fırtınaları yolu kesse de, 'geçtiğim hiçbir yoldan ikinci kez geçmeyeceğim' sözü genç gezginin kalbindeki cesareti diri tutuyordu. Tarihin bu unutulmaz dönemeç noktasında, dünyayı tanıma merakı, zorluklar karşısında pes etmeyen azim ve farklı kültürlere duyulan saygı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "İbn Battuta",
            dialogue:
              "Kendi kendime söz veriyorum: Yeryüzünde mümkün oldukça geçtiğim hiçbir yoldan ikinci kez geçmeyeceğim; her zaman yeni ufuklar arayacağım!",
            historicalNote:
              "Bunu Biliyor muydun? 'Mümkün oldukça aynı yoldan iki kez geçmeme' kuralı, İbn Battuta'nın ünlü Seyahatnamesinde (Rıhle) bizzat kendi yazdığı gerçek seyahat ilkesidir!",
            imagePath: "assets/images/ibn_battuta_hero.png",
            imageKey: "assets/images/ibn_battuta_hero.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Ufka doğru uzanan keşif rotası ve İbn Battuta.",
          },
          {
            id: "battuta-ch1-s3",
            sceneNumber: 3,
            title: "İskenderiye Feneri ve Bilgenin Müjdesi",
            narration:
              "Sekiz aylık zorlu bir yolculuğun ardından Mısır'ın İskenderiye şehrine ulaştı. Dünyanın Yedi Harikası'ndan biri olan dev İskenderiye Feneri'nin kalıntılarını hayranlıkla inceledi ve ölçülerini kaydetti. Burada karşılaştığı bilge bir zat, genç İbn Battuta'nın içindeki keşif heyecanını görünce ona 'Sen sadece Mekke'ye gitmeyeceksin; Hindistan'daki ve Çin'deki kardeşlerime de benden selam götüreceksin!' dedi.\n\nHint Okyanusu'nun turkuaz sularında parlayan mercan adaları ve uzak doğu limanları, yeryüzündeki her halkın kendine özgü bir bilgeliği olduğunu gözler önüne seriyordu. Çevredeki her detay, Tanca kapılarından Kızıldeniz fırtınalarına, Maldiv mercan adalarından Çin limanlarına uzanan 120 bin kilometrelik rotada filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Sekiz aylık zorlu bir yolculuğun ardından Mısır'ın İskenderiye şehrine ulaştı. Dünyanın Yedi Harikası'ndan biri olan dev İskenderiye Feneri'nin kalıntılarını hayranlıkla inceledi ve ölçülerini kaydetti. Burada karşılaştığı bilge bir zat, genç İbn Battuta'nın içindeki keşif heyecanını görünce ona 'Sen sadece Mekke'ye gitmeyeceksin; Hindistan'daki ve Çin'deki kardeşlerime de benden selam götüreceksin!' dedi.\n\nHint Okyanusu'nun turkuaz sularında parlayan mercan adaları ve uzak doğu limanları, yeryüzündeki her halkın kendine özgü bir bilgeliği olduğunu gözler önüne seriyordu. Çevredeki her detay, Tanca kapılarından Kızıldeniz fırtınalarına, Maldiv mercan adalarından Çin limanlarına uzanan 120 bin kilometrelik rotada filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "İbn Battuta",
            dialogue:
              "O gün Hindistan ve Çin isimlerini duyduğumda kalbim yerinden çıkacak gibi çarptı; dünyanın öbür ucuna gitme fikri ruhuma ilk kez o an düştü!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Battuta İskenderiye Feneri'ni 1326'da sağlamken görmüş, 1349'da dönüş yolunda tekrar uğradığında ise fenerin depremle yıkıldığını kaydederek tarihe çok önemli bir belge bırakmıştır.",
            imagePath: "assets/images/omer_ch2_s1_single_camel_departure.png",
            imageKey: "assets/images/omer_ch2_s1_single_camel_departure.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Akdeniz ve İskenderiye kıyılarında İbn Battuta.",
          },
          {
            id: "battuta-ch1-s4",
            sceneNumber: 4,
            title: "Kızıldeniz Kıyısında Kapanan Yol!",
            narration:
              "Kahire'den Nil Nehri boyunca güneye inen İbn Battuta, Kızıldeniz'i gemiyle geçip Cidde'ye ulaşmak için çölü aşarak İzâb (Aidhab) limanına vardı. Ancak limana ulaştığında büyük bir şok yaşadı! Bölgedeki kabile çatışmaları ve şiddetli Kızıldeniz fırtınası yüzünden limandaki bütün gemiler batırılmış veya parçalanmıştı! Karşı kıyıya geçecek tek bir sandal bile yoktu ve çöl gecesi hızla bastırıyordu.\n\nMum ışığında deri kaplı Rıhle günlüğüne düşülen her satır, ön yargısız bir gözle dünyayı dinleyen gezginin gelecek nesillere bıraktığı eşsiz bir kültür köprüsüydü. Sabır, dikkat ve samimiyetle atılan bu adım, dünyayı tanıma merakı, zorluklar karşısında pes etmeyen azim ve farklı kültürlere duyulan saygı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Kahire'den Nil Nehri boyunca güneye inen İbn Battuta, Kızıldeniz'i gemiyle geçip Cidde'ye ulaşmak için çölü aşarak İzâb (Aidhab) limanına vardı. Ancak limana ulaştığında büyük bir şok yaşadı! Bölgedeki kabile çatışmaları ve şiddetli Kızıldeniz fırtınası yüzünden limandaki bütün gemiler batırılmış veya parçalanmıştı! Karşı kıyıya geçecek tek bir sandal bile yoktu ve çöl gecesi hızla bastırıyordu.\n\nMum ışığında deri kaplı Rıhle günlüğüne düşülen her satır, ön yargısız bir gözle dünyayı dinleyen gezginin gelecek nesillere bıraktığı eşsiz bir kültür köprüsüydü. Sabır, dikkat ve samimiyetle atılan bu adım, dünyayı tanıma merakı, zorluklar karşısında pes etmeyen azim ve farklı kültürlere duyulan saygı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Liman Reislerinden Biri",
            dialogue:
              "Ey genç yolcu! Kızıldeniz'de ne gemi kaldı ne geçit! Buradan karşıya geçmek imkânsız, yol yakınken memleketine geri dön!",
            historicalNote:
              "Bunu Biliyor muydun? İzâb limanında gemi bulamaması aslında İbn Battuta'nın hayatını kurtarmıştır; çünkü o günlerde denize açılan tek tük tekneler fırtınada alabora olmuştur.",
            imagePath: "assets/images/omer_s2_distant_campfire.png",
            imageKey: "assets/images/omer_s2_distant_campfire.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Kızıldeniz kıyısında yeni rota arayan İbn Battuta.",
            midDecision: {
              title: "ARA KARAR: Limanda Gemi Kalmadığında Ne Yaparsın?",
              question:
                "Aylarca yol yürüyüp Kızıldeniz kıyısına geldin ama karşıya geçecek hiçbir gemi kalmamış. Hedefine ulaşmak için ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Kaderime küserim ve yolculuktan vazgeçip Fas'a geri dönerim.",
                  feedback:
                    "İlk engelde vazgeçseydi İbn Battuta tarihin en büyük gezgini olamazdı!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Asla pes etmem! Deniz yolu kapandıysa kuzeye dönüp Filistin, Kudüs ve Şam üzerinden geçen büyük kara kervanıyla yoluma devam ederim!",
                  feedback:
                    "Harika karar! İbn Battuta deniz yolu kapanınca rotasını değiştirip Kudüs ve Şam üzerinden hedefine ulaştı!",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "battuta-ch1-s5",
            sceneNumber: 5,
            title: "Kudüs ve Şam Kervanına Katılış",
            narration:
              "İbn Battuta umutsuzluğa kapılmak yerine haritasını yeniden açtı. Kızıldeniz yolu kapandıysa, kuzeye dönüp Sina Çölü'nü aşarak Kudüs ve Şam üzerinden geçen tarihi Hac kervanına katılacaktı! Bu karar sayesinde yol üzerinde Gazze, El-Halil, Kudüs'teki Mescid-i Aksâ ve Şam'daki Emeviye Camii'ni de görme fırsatı yakaladı. Karşılaştığı engel, aslında onun çok daha fazla şehir keşfetmesini sağlamıştı!\n\nTanca'nın taş kemerli kapısından sabah güneşiyle birlikte çıkarken, sırtındaki deri heybe ve elindeki asa, yirmi dokuz yıl sürecek destansı bir keşfin ilk adımıydı. O an Tanca kapılarından Kızıldeniz fırtınalarına, Maldiv mercan adalarından Çin limanlarına uzanan 120 bin kilometrelik rotada hissedilen dünyayı tanıma merakı, zorluklar karşısında pes etmeyen azim ve farklı kültürlere duyulan saygı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "İbn Battuta umutsuzluğa kapılmak yerine haritasını yeniden açtı. Kızıldeniz yolu kapandıysa, kuzeye dönüp Sina Çölü'nü aşarak Kudüs ve Şam üzerinden geçen tarihi Hac kervanına katılacaktı! Bu karar sayesinde yol üzerinde Gazze, El-Halil, Kudüs'teki Mescid-i Aksâ ve Şam'daki Emeviye Camii'ni de görme fırsatı yakaladı. Karşılaştığı engel, aslında onun çok daha fazla şehir keşfetmesini sağlamıştı!\n\nTanca'nın taş kemerli kapısından sabah güneşiyle birlikte çıkarken, sırtındaki deri heybe ve elindeki asa, yirmi dokuz yıl sürecek destansı bir keşfin ilk adımıydı. O an Tanca kapılarından Kızıldeniz fırtınalarına, Maldiv mercan adalarından Çin limanlarına uzanan 120 bin kilometrelik rotada hissedilen dünyayı tanıma merakı, zorluklar karşısında pes etmeyen azim ve farklı kültürlere duyulan saygı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbn Battuta",
            dialogue:
              "Bir kapı kapandığında üzülme; belki de o kapalı kapı seni Kudüs ve Şam gibi çok daha güzel bahçelere yönlendirmek içindir!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Battuta Şam'da gördüğü birbirinden ilginç vakıfları (hatta kırdığı tabak yüzünden azarlanmaktan korkan çocuklara yeni tabak veren 'Tabak Vakfı'nı!) kitabında anlatmıştır.",
            imagePath: "assets/images/battuta_s2_red_sea_storm.png",
            imageKey: "assets/images/battuta_s2_red_sea_storm.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Kudüs ve Şam yolunda seyyah İbn Battuta.",
          },
          {
            id: "battuta-ch1-s6",
            sceneNumber: 6,
            title: "Şam'daki Kırık Tabak Vakfı!",
            narration:
              "İbn Battuta Şam sokaklarında gezerken gözlerine inanamadığı bir iyilik kurumuyla karşılaştı. Sokakta yürüyen küçük bir çırağın elindeki porselen kase yere düşüp tuzla buz olmuş, çocuk ağlamaya başlamıştı. Çevredekiler çocuğa 'Ağlama, kırık parçaları topla ve Evani (Kap-Kacak) Vakfı'na götür!' dediler. Çocuk kırık parçaları vakıf görevlisine verdi ve görevli ona hiçbir ücret almadan yepyeni bir porselen kase hediye etti!\n\nKızıldeniz'in dev dalgaları ve çöl fırtınaları yolu kesse de, 'geçtiğim hiçbir yoldan ikinci kez geçmeyeceğim' sözü genç gezginin kalbindeki cesareti diri tutuyordu. Tarihin bu unutulmaz dönemeç noktasında, dünyayı tanıma merakı, zorluklar karşısında pes etmeyen azim ve farklı kültürlere duyulan saygı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "İbn Battuta Şam sokaklarında gezerken gözlerine inanamadığı bir iyilik kurumuyla karşılaştı. Sokakta yürüyen küçük bir çırağın elindeki porselen kase yere düşüp tuzla buz olmuş, çocuk ağlamaya başlamıştı. Çevredekiler çocuğa 'Ağlama, kırık parçaları topla ve Evani (Kap-Kacak) Vakfı'na götür!' dediler. Çocuk kırık parçaları vakıf görevlisine verdi ve görevli ona hiçbir ücret almadan yepyeni bir porselen kase hediye etti!\n\nKızıldeniz'in dev dalgaları ve çöl fırtınaları yolu kesse de, 'geçtiğim hiçbir yoldan ikinci kez geçmeyeceğim' sözü genç gezginin kalbindeki cesareti diri tutuyordu. Tarihin bu unutulmaz dönemeç noktasında, dünyayı tanıma merakı, zorluklar karşısında pes etmeyen azim ve farklı kültürlere duyulan saygı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Şam Vakıf Görevlisi",
            dialogue:
              "Bu vakıf, elindeki tabağı yanlışlıkla düşürüp kıran çocukların kalbi kırılmasın ve ustalarından azar işitmesinler diye kuruldu!",
            historicalNote:
              "Bunu Biliyor muydun? Şam'daki bu gerçek 'Kırık Kaplar Vakfı', İbn Battuta Seyahatnamesinin 1. cildinde tüm detaylarıyla kayıtlıdır!",
            imagePath: "assets/images/piri_reis_stars_kamal.png",
            imageKey: "assets/images/piri_reis_stars_kamal.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Şam'ın taş avluları ve çinileri.",
          },
          {
            id: "battuta-ch1-s7",
            sceneNumber: 7,
            title: "Medine ve Mekke'ye Varış",
            narration:
              "Şam'dan kalkan büyük kervanla çölleri aşan İbn Battuta, nihayet Tanca'dan ayrıldıktan bir buçuk yıl sonra Medine-i Münevvere'ye ve Mekke-i Mükerreme'ye ulaştı. Hayalini kurduğu Hac görevini tamamladığında artık deneyimli bir gezgin olmuştu. Mekke'de dünyanın dört bir yanından (Anadolu'dan, İran'dan, Türkistan'dan, Hindistan'dan) gelen insanlarla tanıştı.\n\nHint Okyanusu'nun turkuaz sularında parlayan mercan adaları ve uzak doğu limanları, yeryüzündeki her halkın kendine özgü bir bilgeliği olduğunu gözler önüne seriyordu. Çevredeki her detay, Tanca kapılarından Kızıldeniz fırtınalarına, Maldiv mercan adalarından Çin limanlarına uzanan 120 bin kilometrelik rotada filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Şam'dan kalkan büyük kervanla çölleri aşan İbn Battuta, nihayet Tanca'dan ayrıldıktan bir buçuk yıl sonra Medine-i Münevvere'ye ve Mekke-i Mükerreme'ye ulaştı. Hayalini kurduğu Hac görevini tamamladığında artık deneyimli bir gezgin olmuştu. Mekke'de dünyanın dört bir yanından (Anadolu'dan, İran'dan, Türkistan'dan, Hindistan'dan) gelen insanlarla tanıştı.\n\nHint Okyanusu'nun turkuaz sularında parlayan mercan adaları ve uzak doğu limanları, yeryüzündeki her halkın kendine özgü bir bilgeliği olduğunu gözler önüne seriyordu. Çevredeki her detay, Tanca kapılarından Kızıldeniz fırtınalarına, Maldiv mercan adalarından Çin limanlarına uzanan 120 bin kilometrelik rotada filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "İbn Battuta",
            dialogue:
              "Mekke'de gördüm ki dünyanın her köşesinde keşfedilmeyi bekleyen bambaşka diller, yemekler ve bilgelikler var!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Battuta hayatı boyunca Mekke'yi dört kez ziyaret etmiş ve her seferinde farklı bir kıtaya doğru yeni bir yolculuğa çıkmıştır.",
            imagePath: "assets/images/ibn_battuta_maldives_china.png",
            imageKey: "assets/images/ibn_battuta_maldives_china.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Hicaz yolculuğunda deri günlüğünü tutan İbn Battuta.",
          },
          {
            id: "battuta-ch1-s8",
            sceneNumber: 8,
            title: "Anadolu'da Ahî Misafirperverliği",
            narration:
              "Mekke'den sonra rotasını kuzeye çeviren İbn Battuta; Irak, İran ve Yemen'i gezdikten sonra Anadolu'ya ayak bastı! Alanya'dan başlayarak Antalya, Burdur, Denizli, Konya, Bursa ve İznik'e kadar pek çok Türk şehrini gezdi. Anadolu'daki 'Ahî' esnaf teşkilatlarının yabancı bir misafiri ağırlamak için birbirleriyle nasıl tatlı bir yarışa girdiklerini hayranlıkla defterine not etti.\n\nMum ışığında deri kaplı Rıhle günlüğüne düşülen her satır, ön yargısız bir gözle dünyayı dinleyen gezginin gelecek nesillere bıraktığı eşsiz bir kültür köprüsüydü. Sabır, dikkat ve samimiyetle atılan bu adım, dünyayı tanıma merakı, zorluklar karşısında pes etmeyen azim ve farklı kültürlere duyulan saygı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Mekke'den sonra rotasını kuzeye çeviren İbn Battuta; Irak, İran ve Yemen'i gezdikten sonra Anadolu'ya ayak bastı! Alanya'dan başlayarak Antalya, Burdur, Denizli, Konya, Bursa ve İznik'e kadar pek çok Türk şehrini gezdi. Anadolu'daki 'Ahî' esnaf teşkilatlarının yabancı bir misafiri ağırlamak için birbirleriyle nasıl tatlı bir yarışa girdiklerini hayranlıkla defterine not etti.\n\nMum ışığında deri kaplı Rıhle günlüğüne düşülen her satır, ön yargısız bir gözle dünyayı dinleyen gezginin gelecek nesillere bıraktığı eşsiz bir kültür köprüsüydü. Sabır, dikkat ve samimiyetle atılan bu adım, dünyayı tanıma merakı, zorluklar karşısında pes etmeyen azim ve farklı kültürlere duyulan saygı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "İbn Battuta",
            dialogue:
              "Anadolu'ya 'Bilâd-ı Rûm' derler; vallahi dünyada buranın insanlarından daha şefkatli, misafire daha cömert davranan bir topluluk görmedim!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Battuta Bursa'da Osmanlı hükümdarı Orhan Gazi ile bizzat görüşmüş ve onun kaleleri denetleyen çalışkanlığını kitabında övmüştür!",
            imagePath: "assets/images/tarik_s1_andalusia_fleet.png",
            imageKey: "assets/images/tarik_s1_andalusia_fleet.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Deri seyahat defteri (Rıhle) ve usturlap.",
          },
          {
            id: "battuta-ch1-s9",
            sceneNumber: 9,
            title: "Doğu'nun Büyük Denizlerine Doğru",
            narration:
              "Anadolu'dan Karadeniz'i geçip Kırım, Altın Orda ve Semerkant bozkırlarını aşan genç gezgin, artık dünyanın diğer ucuna gitmeye hazırdı. Heybesinde deri kaplı notları, dilinde dört farklı lisan ve kalbinde hiç sönmeyen merak ateşiyle Hindistan ve Çin yollarına doğru atını sürdü.\n\nTanca'nın taş kemerli kapısından sabah güneşiyle birlikte çıkarken, sırtındaki deri heybe ve elindeki asa, yirmi dokuz yıl sürecek destansı bir keşfin ilk adımıydı. O an Tanca kapılarından Kızıldeniz fırtınalarına, Maldiv mercan adalarından Çin limanlarına uzanan 120 bin kilometrelik rotada hissedilen dünyayı tanıma merakı, zorluklar karşısında pes etmeyen azim ve farklı kültürlere duyulan saygı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Anadolu'dan Karadeniz'i geçip Kırım, Altın Orda ve Semerkant bozkırlarını aşan genç gezgin, artık dünyanın diğer ucuna gitmeye hazırdı. Heybesinde deri kaplı notları, dilinde dört farklı lisan ve kalbinde hiç sönmeyen merak ateşiyle Hindistan ve Çin yollarına doğru atını sürdü.\n\nTanca'nın taş kemerli kapısından sabah güneşiyle birlikte çıkarken, sırtındaki deri heybe ve elindeki asa, yirmi dokuz yıl sürecek destansı bir keşfin ilk adımıydı. O an Tanca kapılarından Kızıldeniz fırtınalarına, Maldiv mercan adalarından Çin limanlarına uzanan 120 bin kilometrelik rotada hissedilen dünyayı tanıma merakı, zorluklar karşısında pes etmeyen azim ve farklı kültürlere duyulan saygı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbn Battuta",
            dialogue:
              "Yolculuk insanı önce sözsüz bırakır, sonra da anlatacak binlerce hikayesi olan bir bilgeye dönüştürür!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Battuta'nın 14. yüzyılda Anadolu hakkında yazdığı gözlemler, bugün Türk tarihinin en önemli birinci el kaynaklarından biridir.",
            imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
            imageKey: "assets/images/artifact_qarawiyyin_astrolabe.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Yeni ufuklara yelken açan İbn Battuta.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "21 yaşında tek başına yola çıktın, çölleri aşıp Kızıldeniz kıyısına vardın ama limandaki bütün gemiler fırtına ve çatışmalar yüzünden yok olmuş. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Yol kapandığı için pes edip Tanca'daki evime geri dönerim.",
              feedback:
                "Zorlukta hemen geri dönen kişi yeni kıtaları ve medeniyetleri keşfedemez.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Kırık tahtalarla fırtınalı denize açılıp hayatımı tehlikeye atarım.",
              feedback:
                "Cesaret ile tedbirsizlik farklıdır; fırtınalı denize kırık tahtayla çıkılmaz!",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "'Geçtiğim yoldan bir daha geçmeyeceğim' ilkesiyle yeni bir rota çizerim; Kudüs ve Şam üzerinden geçen kervanla hedefime ulaşıp ardından Anadolu ve Asya'yı keşfederim!",
              feedback:
                "Tarihi Hakikat! İbn Battuta kapanan limanı yeni bir keşif fırsatına dönüştürdü!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "İbn Battuta, Kızıldeniz kıyısındaki İzâb limanında gemi bulamayınca pes etmedi. Rotasını değiştirerek Kudüs ve Şam üzerinden Mekke'ye ulaştı; ardından Anadolu'da Orhan Gazi ve Ahî teşkilatlarıyla tanışarak dünya turuna devam etti!",
          quoteHighlight:
            "Mümkün oldukça geçtiğim hiçbir yoldan ikinci kez geçmeme kararı aldım!",
        },
        rewardArtifact: {
          id: "artifact-rihla-journal",
          name: "Seyyahın Deri Günlüğü (Rıhle)",
          heroId: "ibn-battuta",
          chapterId: "ibn-battuta-ch1",
          imagePath: "assets/images/ibn_battuta_hero.png",
          pointType: "IHSAN_MEDENIYET",
          pointLabel: "Keşif ve Medeniyet Puanı",
          points: 50,
          unlockedTitle: "Kıtalararası Gezgin",
          shortDescription:
            "İbn Battuta'nın Tanca'dan başlayarak Kudüs, Şam, Mekke ve Anadolu'da gördüğü kültürleri kaydettiği meşhur seyahatnamesi (Rıhle).",
          historicalNote:
            "Tam adı 'Tuhfetü'n-Nuzzâr fî Garâibi'l-Emsâr ve Acâibi'l-Esfâr' olan Rıhle, Orta Çağ dünyasının en kapsamlı gezi ve kültür ansiklopedisidir.",
          accentColor: "#F43F5E",
          hotspots: [
            {
              id: "rihla-leather-cover",
              xPercent: 40,
              yPercent: 38,
              title: "Fas Derisi Cilt",
              secretFact:
                "Tanca ve Fes şehirlerinde üretilen dayanıklı deri ciltler, çöl sıcaklarına ve deniz nemine karşı sayfaları korurdu.",
            },
            {
              id: "damascus-waqf-note",
              xPercent: 62,
              yPercent: 55,
              title: "Şam Tabak Vakfı Kaydı",
              secretFact:
                "İbn Battuta, Şam'da elindeki tabağı kıran çocuklara ücretsiz yeni tabak veren Evani Vakfı'nı bu eserde dünyaya tanıtmıştır.",
            },
            {
              id: "anatolia-ahi-seal",
              xPercent: 48,
              yPercent: 75,
              title: "Anadolu Ahîlik Notları",
              secretFact:
                "1330'lu yıllarda Denizli, Konya, Bursa ve İznik'teki Türk misafirperverliğini bizzat yaşayarak kaydetmiştir.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "İbn Battuta'nın Şam'da gördüğü 'Kırık Tabak Vakfı' (çocuklar üzülmesin diye kırılan tabağın yerine yenisini veren vakıf) hakkında ne düşünüyorsun?",
          "İbn Battuta Kızıldeniz'de gemi bulamadığında pes etseydi neler kaçırmış olurdu?",
          "Sen yeni bir şehre veya ülkeye gittiğinde oradaki insanların hangi özelliklerini not defterine yazmak isterdin?",
        ],
      },

      // ------------------------------------------------------------------------
      // İBN BATTUTA - BÖLÜM 2: MALDİVLER'DEN ÇİN'E 120 BİN KİLOMETRE (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "ibn-battuta-ch2",
        heroId: "ibn-battuta",
        chapterNumber: 2,
        title: "Maldivler'den Çin'e 120 Bin Kilometre",
        subtitle: "Ön yargısızca dinleyen gezgin, her kültürde bir dost bulur",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "battuta-ch2-s1",
            sceneNumber: 1,
            title: "Hindistan Dağlarını Aşarken",
            narration:
              "İbn Battuta Orta Asya bozkırlarını ve karla kaplı Hindukuş Dağları'nı aşarak 1333 yılında Hindistan'a ulaştı. Delhi Sultanı Muhammed bin Tuğluk, dünyanın dört bir yanından gelen alimlere ve gezginlere büyük değer veriyordu. Fas'tan gelen bu bilgili ve hoşsohbet gezgini tanıdığında onun hukuk bilgisine hayran kaldı ve İbn Battuta'yı başkent Delhi'ye kadı (hâkim) olarak atadı!\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "İbn Battuta Orta Asya bozkırlarını ve karla kaplı Hindukuş Dağları'nı aşarak 1333 yılında Hindistan'a ulaştı. Delhi Sultanı Muhammed bin Tuğluk, dünyanın dört bir yanından gelen alimlere ve gezginlere büyük değer veriyordu. Fas'tan gelen bu bilgili ve hoşsohbet gezgini tanıdığında onun hukuk bilgisine hayran kaldı ve İbn Battuta'yı başkent Delhi'ye kadı (hâkim) olarak atadı!\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbn Battuta",
            dialogue:
              "Tanca'da öğrendiğim hukuk ve adalet ilmi, binlerce kilometre uzaktaki Hindistan'da bile bana kapıları açtı; ilim gerçekten her yerde geçerli bir anahtardır!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Battuta Hindistan'da yaklaşık 8 yıl yaşamış ve mango meyvesinden gergedanlara kadar Avrupa'nın o dönemde hiç bilmediği canlıları detaylıca anlatmıştır.",
            imagePath: "assets/images/ibn_battuta_maldives_china.png",
            imageKey: "assets/images/ibn_battuta_maldives_china.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Doğu yolculuğunda İbn Battuta.",
          },
          {
            id: "battuta-ch2-s2",
            sceneNumber: 2,
            title: "Hindistan'ın Hızlı Posta Kuryeleri",
            narration:
              "Hindistan'da görev yaparken İbn Battuta'yı en çok şaşırtan şeylerden biri ülkedeki inanılmaz hızlı haberleşme sistemiydi! Her birkaç kilometrede bir dinlenme istasyonları kurulmuştu; ellerinde zilli sopalar taşıyan koşucu haberciler, mektupları bayrak yarışı gibi birbirine devrederek elli günlük yolu sadece beş günde tamamlıyordu! Hatta Sultan için dağlardan taze meyveler bile bu koşucu zinciriyle taşınıyordu.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Hindistan'da görev yaparken İbn Battuta'yı en çok şaşırtan şeylerden biri ülkedeki inanılmaz hızlı haberleşme sistemiydi! Her birkaç kilometrede bir dinlenme istasyonları kurulmuştu; ellerinde zilli sopalar taşıyan koşucu haberciler, mektupları bayrak yarışı gibi birbirine devrederek elli günlük yolu sadece beş günde tamamlıyordu! Hatta Sultan için dağlardan taze meyveler bile bu koşucu zinciriyle taşınıyordu.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "İbn Battuta",
            dialogue:
              "Her milletin kendine özgü harika bir çözümü var! Buradaki koşucu posta sistemi atlı kuryelerden bile daha hızlı haber ulaştırıyor.",
            historicalNote:
              "Bunu Biliyor muydun? İbn Battuta gittiği ülkeleri asla küçümsemez; onların zekice kurduğu sistemleri takdirle kaydederdi.",
            imagePath: "assets/images/battuta_s1_tangier_departure.png",
            imageKey: "assets/images/battuta_s1_tangier_departure.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Gözlemlerini kaydeden İbn Battuta.",
          },
          {
            id: "battuta-ch2-s3",
            sceneNumber: 3,
            title: "Binlerce Mercan Adası: Maldivler!",
            narration:
              "1341 yılında Sultan, İbn Battuta'yı Çin İmparatoru'na hediyeler götürecek elçilik heyetinin başkanı seçti. Yol üzerinde Hint Okyanusu'nun turkuaz sularında parlayan binlerce küçük mercan adasına, yani Maldiv Adaları'na (Zîbetü'l-Mahal) uğradı! Burası o kadar temiz, huzurlu ve yemyeşil bir yerdi ki, ada halkı sokaklarda yalınayak yürümeden önce kapı önlerindeki su küplerinde ayaklarını yıkıyordu.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "1341 yılında Sultan, İbn Battuta'yı Çin İmparatoru'na hediyeler götürecek elçilik heyetinin başkanı seçti. Yol üzerinde Hint Okyanusu'nun turkuaz sularında parlayan binlerce küçük mercan adasına, yani Maldiv Adaları'na (Zîbetü'l-Mahal) uğradı! Burası o kadar temiz, huzurlu ve yemyeşil bir yerdi ki, ada halkı sokaklarda yalınayak yürümeden önce kapı önlerindeki su küplerinde ayaklarını yıkıyordu.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "İbn Battuta",
            dialogue:
              "Maldiv Adaları dünyanın harikalarından biridir! Yaklaşık iki bin adacık okyanusun üzerinde inci dizisi gibi sıralanmış!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Battuta Maldiv Adaları'nın tarihini, yönetimini ve kültürünü dünyaya tanıtan ilk yazılı eseri kaleme almıştır.",
            imagePath: "assets/images/tarik_s1_andalusia_fleet.png",
            imageKey: "assets/images/tarik_s1_andalusia_fleet.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Palmiye adaları ve yelkenli gemi güvertesinde İbn Battuta.",
          },
          {
            id: "battuta-ch2-s4",
            sceneNumber: 4,
            title: "Deniz Kabuğundan Para ve Hindistan Cevizi",
            narration:
              "Maldivler'in çarşısına inen İbn Battuta çok ilginç iki şey gözlemledi. Birincisi; adada altın veya gümüş madeni olmadığı için insanlar alışverişte para olarak okyanustan çıkardıkları parlak küçük deniz kabuklarını (Vedâ / Cowrie) kullanıyordu! İkincisi ise adadaki Hindistan cevizi (Nârcîl) ağaçlarıydı: Gövdesinden gemi tahtası, liflerinden çivisiz gemi halatı, içinden süt ve bal yapılıyordu!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Maldivler'in çarşısına inen İbn Battuta çok ilginç iki şey gözlemledi. Birincisi; adada altın veya gümüş madeni olmadığı için insanlar alışverişte para olarak okyanustan çıkardıkları parlak küçük deniz kabuklarını (Vedâ / Cowrie) kullanıyordu! İkincisi ise adadaki Hindistan cevizi (Nârcîl) ağaçlarıydı: Gövdesinden gemi tahtası, liflerinden çivisiz gemi halatı, içinden süt ve bal yapılıyordu!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Maldivli Denizci",
            dialogue:
              "Ey Faslı bilgin! Biz gemilerimizde demir çivi kullanmayız; çünkü hindistan cevizi lifleriyle dikilen ahşap gövdeler mercan kayalıklarına çarptığında esner ve kırılmaz!",
            historicalNote:
              "Bunu Biliyor muydun? Mercan kayalıklarının bol olduğu Hint Okyanusu'nda demir çivili gemiler çarpınca parçalanırken, hindistan cevizi lifiyle dikilen esnek tekneler sağlam kalıyordu!",
            imagePath: "assets/images/battuta_s2_red_sea_storm.png",
            imageKey: "assets/images/battuta_s2_red_sea_storm.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Denizcilik halatları ve seyahat günlüğü.",
            midDecision: {
              title: "ARA KARAR: Farklı Bir Kültürle Karşılaştığında Ne Yaparsın?",
              question:
                "Maldivler'de insanların altın yerine deniz kabuklarını para olarak kullandığını ve gemilerini çivi yerine hindistan cevizi lifleriyle bağladığını gördün. Nasıl yaklaşırsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Bizim ülkemizde böyle yapılmaz diyerek onların yöntemini küçümserim.",
                  feedback:
                    "Ön yargılı olmak, doğayla uyumlu bu harika mühendislik sırrını öğrenmeni engeller!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Merakla nedenini sorup öğrenirim; lifle bağlanan gemilerin mercan kayalıklarında kırılmadığını keşfedip defterime saygıyla kaydederim!",
                  feedback:
                    "Harika! İbn Battuta farklı kültürleri ön yargısızca incelediği için eşsiz bilgiler topladı.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "battuta-ch2-s5",
            sceneNumber: 5,
            title: "Dev Çin Cünk Gemileriyle Yolculuk",
            narration:
              "Maldivler, Sri Lanka (Serendib) ve Sumatra adalarını gezdikten sonra İbn Battuta, okyanusların en büyük gemileri olan Çin 'Cünk' (Junk) gemilerinden birine bindi. Bu gemiler o kadar büyüktü ki üzerinde bambudan yapılmış on iki yelken bulunuyor, güvertesinde tayfalar ahşap saksılar içinde taze sebze ve zencefil yetiştiriyordu! Gemi adeta yüzen bir şehir gibi Çin kıyılarına doğru süzüldü.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Maldivler, Sri Lanka (Serendib) ve Sumatra adalarını gezdikten sonra İbn Battuta, okyanusların en büyük gemileri olan Çin 'Cünk' (Junk) gemilerinden birine bindi. Bu gemiler o kadar büyüktü ki üzerinde bambudan yapılmış on iki yelken bulunuyor, güvertesinde tayfalar ahşap saksılar içinde taze sebze ve zencefil yetiştiriyordu! Gemi adeta yüzen bir şehir gibi Çin kıyılarına doğru süzüldü.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbn Battuta",
            dialogue:
              "Bu dev gemilerde bin kişi yolculuk ediyor ve denizciler aylar süren yolculukta taze sebze yiyebilmek için güvertede bahçe yetiştiriyor!",
            historicalNote:
              "Bunu Biliyor muydun? 14. yüzyılda Çin Cünk gemileri su geçirmez bölmeleri ve dev yelkenleriyle dünyanın en gelişmiş okyanus gemileriydi.",
            imagePath: "assets/images/piri_reis_s2_mediterranean_cove.png",
            imageKey: "assets/images/piri_reis_s2_mediterranean_cove.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Gemi güvertesinde okyanusu izleyen İbn Battuta.",
          },
          {
            id: "battuta-ch2-s6",
            sceneNumber: 6,
            title: "Çin'de Kağıt Para ve İpek Sanatı",
            narration:
              "1345 yılında Çin'in ünlü Zeytûn (Quanzhou) limanına ayak basan İbn Battuta, Çin'den Pekin'e (Hanbalık) kadar uzanan Büyük Kanal boyunca seyahat etti. Çin'de gördüğü porselen sanatına, ipek kumaşların bolluğuna ve devletin bastığı mühürlü 'Kağıt Para' sistemine hayran kaldı. Limana gelen yabancı tüccarların güvenlik için ressamlar tarafından portrelerinin çizildiğini bile şaşkınlıkla kaydetti!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "1345 yılında Çin'in ünlü Zeytûn (Quanzhou) limanına ayak basan İbn Battuta, Çin'den Pekin'e (Hanbalık) kadar uzanan Büyük Kanal boyunca seyahat etti. Çin'de gördüğü porselen sanatına, ipek kumaşların bolluğuna ve devletin bastığı mühürlü 'Kağıt Para' sistemine hayran kaldı. Limana gelen yabancı tüccarların güvenlik için ressamlar tarafından portrelerinin çizildiğini bile şaşkınlıkla kaydetti!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "İbn Battuta",
            dialogue:
              "Çinliler el sanatlarında ve resimde dünyadaki en yetenekli milletlerden biridir; çarşıda yürürken haberimiz bile olmadan hepimizin portresini birebir çizmişler!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Battuta Çin'de gördüğü bu ressam uygulamasını bugünkü 'pasaport fotoğrafı' ve güvenlik kayıtlarının ilk örneği olarak anlatmıştır.",
            imagePath: "assets/images/ibn_battuta_hero.png",
            imageKey: "assets/images/ibn_battuta_hero.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Uzak Doğu gözlemlerini yazan İbn Battuta.",
          },
          {
            id: "battuta-ch2-s7",
            sceneNumber: 7,
            title: "Sahra Çölü ve Timbuktu Yolculuğu",
            narration:
              "Çin'den döndükten sonra 1349 yılında memleketi Fas'a ulaşan İbn Battuta, annesinin ve babasının vefat ettiğini öğrenince hüzünlendi. Ancak keşif tutkusu henüz bitmemişti! Önce İspanya'daki Endülüs (Gırnata) şehrini gezdi, ardından uçsuz bucaksız Sahra Çölü'nü deve kervanlarıyla aşarak Batı Afrika'daki Mali Sultanlığı'na ve ünlü ilim şehri Timbuktu'ya kadar gitti!\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Çin'den döndükten sonra 1349 yılında memleketi Fas'a ulaşan İbn Battuta, annesinin ve babasının vefat ettiğini öğrenince hüzünlendi. Ancak keşif tutkusu henüz bitmemişti! Önce İspanya'daki Endülüs (Gırnata) şehrini gezdi, ardından uçsuz bucaksız Sahra Çölü'nü deve kervanlarıyla aşarak Batı Afrika'daki Mali Sultanlığı'na ve ünlü ilim şehri Timbuktu'ya kadar gitti!\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "İbn Battuta",
            dialogue:
              "Mali ülkesinde beni en çok etkileyen şey, insanların haksızlıktan nefret etmesi ve ülkedeki tam güvenliktir; yolcu burada hiçbir şeyden korkmadan yürür!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Battuta'nın Batı Afrika (Mali ve Nijer Nehri) gözlemleri, Sahra altı Afrika tarihini aydınlatan en değerli yazılı belgedir.",
            imagePath: "assets/images/piri_reis_stars_kamal.png",
            imageKey: "assets/images/piri_reis_stars_kamal.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Sahra ve deniz rotalarını tamamlayan İbn Battuta.",
          },
          {
            id: "battuta-ch2-s8",
            sceneNumber: 8,
            title: "Fes Sarayında Yazılan Başyapıt: İbn Cüzey",
            narration:
              "Yirmi dokuz yıl süren ve bugünkü kırk dört ülkeyi kapsayan yaklaşık 120 bin kilometrelik yolculuktan sonra İbn Battuta 1354 yılında Fes şehrine döndü. Merînî Sultanı Ebû İnan, bu eşsiz hazinenin unutulup gitmemesi için genç edebiyat alimi İbn Cüzey'i görevlendirdi. İbn Battuta aylarca Karaviyyin avlusunda anlattı, İbn Cüzey ise bu hatıraları 'Rıhle' (Seyahatname) olarak kaleme aldı.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Yirmi dokuz yıl süren ve bugünkü kırk dört ülkeyi kapsayan yaklaşık 120 bin kilometrelik yolculuktan sonra İbn Battuta 1354 yılında Fes şehrine döndü. Merînî Sultanı Ebû İnan, bu eşsiz hazinenin unutulup gitmemesi için genç edebiyat alimi İbn Cüzey'i görevlendirdi. İbn Battuta aylarca Karaviyyin avlusunda anlattı, İbn Cüzey ise bu hatıraları 'Rıhle' (Seyahatname) olarak kaleme aldı.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Kâtip İbn Cüzey",
            dialogue:
              "Şeyh İbn Battuta'nın anlattıklarını hiçbir kelimesini değiştirmeden yazıyorum; çünkü o, bu çağın ve bütün zamanların en büyük seyyahıdır!",
            historicalNote:
              "Bunu Biliyor muydun? İbn Battuta'nın kat ettiği 120.000 kilometrelik mesafe, dünyanın çevresini Ekvator'dan tam 3 kez dolaşmaya eşittir ve Venedikli gezgin Marco Polo'nun gittiği yolun 3 katıdır!",
            imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
            imageKey: "assets/images/artifact_qarawiyyin_astrolabe.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Fes avlusunda yazılan dev seyahatname.",
          },
          {
            id: "battuta-ch2-s9",
            sceneNumber: 9,
            title: "Kültürleri Birleştiren Köprü",
            narration:
              "İbn Battuta ömrünün kalan yıllarında Fas'ta kadılık yaparak huzur içinde yaşadı. Onun 29 yıllık serüveni, dünyadaki farklı dillerin, renklerin ve geleneklerin aslında büyük bir insanlık ailesinin parçaları olduğunu gösterdi. Ön yargısız bir kalple ve öğrenme aşkıyla yola çıkan kişi için bütün dünya sıcak bir yuvaydı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "İbn Battuta ömrünün kalan yıllarında Fas'ta kadılık yaparak huzur içinde yaşadı. Onun 29 yıllık serüveni, dünyadaki farklı dillerin, renklerin ve geleneklerin aslında büyük bir insanlık ailesinin parçaları olduğunu gösterdi. Ön yargısız bir kalple ve öğrenme aşkıyla yola çıkan kişi için bütün dünya sıcak bir yuvaydı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İbn Battuta",
            dialogue:
              "Dünyayı gezdim ve gördüm ki insanları birbirine bağlayan en güçlü köprü; selam vermek, adaletli olmak ve birbirini dinlemektir!",
            historicalNote:
              "Bunu Biliyor muydun? Bugün Tanca Uluslararası Havalimanı'na ve Ay'daki bir kratere ('Ibn Battuta Krateri') bu büyük gezginin adı verilmiştir.",
            imagePath: "assets/images/omer_ch2_s1_single_camel_departure.png",
            imageKey: "assets/images/omer_ch2_s1_single_camel_departure.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Seyyahlar Sultanı İbn Battuta.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "29 yıl boyunca Afrika'dan Anadolu'ya, Maldivler'den Çin'e kadar 120 bin kilometre yol yürüdün ve 44 ülke gördün. Memleketine döndüğünde bu eşsiz tecrübeyle ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Gezdiğim yerlerin sırlarını sadece kendime saklar, kimseye anlatmam.",
              feedback:
                "Paylaşılmayan bilgi ve tecrübe zamanla unutulup gider!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "İnsanları etkilemek için gitmediğim yerleri ve dev ejderhaları uydurarak anlatırım.",
              feedback:
                "Gerçekten sapmak ve uydurma şeyler anlatmak bir ilim insanının güvenilirliğini yok eder!",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Gördüğüm tüm şehirleri, halkların geleneklerini, yemeklerini ve iyilik vakıflarını alim İbn Cüzey ile birlikte doğru ve ayrıntılı şekilde 'Rıhle' (Seyahatname) kitabında toplarım!",
              feedback:
                "Tarihi Hakikat! İbn Battuta Seyahatnamesi (Rıhle), dünya tarihinin en önemli kültür ve coğrafya hazinesi oldu!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "İbn Battuta 29 yılda yaklaşık 120.000 kilometre (Marco Polo'nun 3 katı!) yol kat ettikten sonra Fes'e döndü. Alim İbn Cüzey ile birlikte tüm gözlemlerini 'Rıhle' (İbn Battuta Seyahatnamesi) adlı ölümsüz eserde topladı.",
          quoteHighlight:
            "Yolculuk insanı önce sözsüz bırakır, sonra da anlatacak binlerce hikayesi olan bir bilgeye dönüştürür!",
        },
        rewardArtifact: {
          id: "artifact-ocean-astrolabe",
          name: "Hint Okyanusu Seyyah Usturlabı",
          heroId: "ibn-battuta",
          chapterId: "ibn-battuta-ch2",
          imagePath: "assets/images/ibn_battuta_maldives_china.png",
          pointType: "IHSAN_MEDENIYET",
          pointLabel: "Keşif ve Medeniyet Puanı",
          points: 50,
          unlockedTitle: "Seyyahlar Sultanı",
          shortDescription:
            "İbn Battuta'nın Maldiv Adaları'ndan Çin'e uzanan 120 bin kilometrelik yolculuğunu simgeleyen okyanus usturlabı ve deniz kabuğu nişanı.",
          historicalNote:
            "İbn Battuta 1325–1354 yılları arasında buharlı gemi veya tren olmadan 120.000 km yol kat ederek modern çağ öncesi tarihin en uzun mesafe rekorunu kırmıştır.",
          accentColor: "#F43F5E",
          hotspots: [
            {
              id: "astrolabe-horizon",
              xPercent: 48,
              yPercent: 35,
              title: "44 Ülke Enlem Halkası",
              secretFact:
                "Kuzeyde Kırım ve İdil Nehri'nden güneyde Tanzanya, Maldivler ve Mali'ye kadar farklı enlemlerde yön ve vakit ölçümü sağlardı.",
            },
            {
              id: "maldives-cowrie",
              xPercent: 35,
              yPercent: 68,
              title: "Maldiv Deniz Kabuğu (Vedâ)",
              secretFact:
                "Maldiv Adaları'nda para olarak kullanılan parlak okyanus kabuklarını ve hindistan cevizi lifli gemileri simgeler.",
            },
            {
              id: "china-route-seal",
              xPercent: 66,
              yPercent: 65,
              title: "Zeytûn ve Hanbalık Mührü",
              secretFact:
                "İbn Battuta dev Çin Cünk gemileriyle Zeytûn (Quanzhou) limanına ve Pekin'e kadar ulaşmıştır.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "İbn Battuta uçak, araba veya tren olmayan bir dönemde 29 yıl boyunca 120 bin kilometreyi nasıl bir sabırla yürüyebildi?",
          "Farklı ülkelerin yemeklerini, dillerini ve kültürlerini tanımak insanın ufkunu nasıl genişletir?",
          "Sen bir seyahatname yazsaydın yaşadığımız şehri gelecekteki çocuklara nasıl anlatırdın?",
        ],
      },
    ],
  },

  // ==========================================================================
  // 7. KAHRAMAN: PİRİ REİS (2 BÖLÜM - 9'AR SAHNE)
  // ==========================================================================
  // 15. KAHRAMAN: PİRİ REİS & HEZÂRFEN AHMED ÇELEBİ (2 BÖLÜM - 9'AR SAHNE)
  // ==========================================================================
  {
    id: "piri-reis",
    name: "Piri Reis & Hezârfen Ahmed Çelebi",
    heroClass: "BUYUK_SEYYAHLAR",
    heroClassLabel: "Büyük Seyyahlar",
    classBadgeLabel: "Büyük Seyyahlar",
    title: "Okyanusları Haritalayan Kaptan ve Boğaz'ı Kanatla Aşan Bilgin",
    era: "1513 (Gelibolu) & 1632 (İstanbul, Galata Kulesi)",
    location: "Gelibolu & İstanbul",
    visualMode: "CHARACTER_PORTRAIT",
    coverImage: "assets/images/piri_reis_map.png",
    crisisImage: "assets/images/hezarfen_galata_flight.png",
    images: {
      cover: "assets/images/piri_reis_map.png",
      crisis: "assets/images/hezarfen_galata_flight.png",
      artifact: "assets/images/artifact_qarawiyyin_astrolabe.png",
    },
    accentColor: "#F43F5E",
    secondaryColor: "#06B6D4",
    badgeText: "Dünya Haritası, Havacılık & Keşif",
    summary:
      "Gelibolu'da 20 eski haritayı matematikle birleştirerek 1513 Dünya Haritası'nı ceylan derisine çizen Piri Reis ve Galata Kulesi'nden Üsküdar'a kanatlarla süzülen Hezârfen Ahmed Çelebi.",
    shortBio:
      "Gelibolu'da 20 eski haritayı matematikle birleştirerek 1513 Dünya Haritası'nı ceylan derisine çizen Piri Reis ve Galata Kulesi'nden Üsküdar'a kanatlarla süzülen Hezârfen Ahmed Çelebi.",
    chapters: [
      // ------------------------------------------------------------------------
      // BÖLÜM 1: CEYLAN DERİSİNDEKİ DÜNYA HARİTASI (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "piri-reis-ch1",
        heroId: "piri-reis",
        chapterNumber: 1,
        title: "Ceylan Derisindeki Dünya Haritası",
        subtitle: "Gerçek haritacı, farklı dillerdeki bilgileri matematikle birleştirir",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "piri-ch1-s1",
            sceneNumber: 1,
            title: "Gelibolu Kıyısında Dalgalarla Büyüyen Çocuk",
            narration:
              "On beşinci yüzyılın sonlarında Çanakkale Boğazı'nın rüzgârlı kıyısındaki Gelibolu'da her sabah bembeyaz yelkenli Osmanlı gemileri denize açılırdı. Küçük Muhyiddin Pîrî, limandaki taş iskelede oturup martıları ve ufukta kaybolan kadırgaları izlerdi. Amcası ise Akdeniz'in en ünlü denizcisi Kemal Reis'ti! Genç Pîrî on bir yaşına geldiğinde amcasının gemisine adım attı ve tam on dört yıl boyunca Akdeniz'in her koyunu, her rüzgârını bizzat yaşayarak öğrendi.\n\nGelibolu Kulesi'nin penceresinden içeri dolan deniz kokusu ve mum ışığı, ceylan derisi üzerine çizilen rüzgâr güllerine ve kıyı çizgilerine hayat veriyordu. O an Gelibolu'daki denizci kulesinden Akdeniz koylarına ve Galata Kulesi'nin rüzgârlı terasına uzanan ufuklarda hissedilen denizlerin ve gökyüzünün sırlarını haritalara ve kanatlara dönüştüren araştırma ve keşif ruhu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "On beşinci yüzyılın sonlarında Çanakkale Boğazı'nın rüzgârlı kıyısındaki Gelibolu'da her sabah bembeyaz yelkenli Osmanlı gemileri denize açılırdı. Küçük Muhyiddin Pîrî, limandaki taş iskelede oturup martıları ve ufukta kaybolan kadırgaları izlerdi. Amcası ise Akdeniz'in en ünlü denizcisi Kemal Reis'ti! Genç Pîrî on bir yaşına geldiğinde amcasının gemisine adım attı ve tam on dört yıl boyunca Akdeniz'in her koyunu, her rüzgârını bizzat yaşayarak öğrendi.\n\nGelibolu Kulesi'nin penceresinden içeri dolan deniz kokusu ve mum ışığı, ceylan derisi üzerine çizilen rüzgâr güllerine ve kıyı çizgilerine hayat veriyordu. O an Gelibolu'daki denizci kulesinden Akdeniz koylarına ve Galata Kulesi'nin rüzgârlı terasına uzanan ufuklarda hissedilen denizlerin ve gökyüzünün sırlarını haritalara ve kanatlara dönüştüren araştırma ve keşif ruhu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Kemal Reis",
            dialogue:
              "Yeğenim Pîrî! İyi bir denizci sadece yelken açmayı değil; gördüğü her adayı, her akıntıyı ve her yıldızı defterine hatasızca çizmeyi bilmelidir!",
            historicalNote:
              "Bunu Biliyor muydun? Piri Reis (asıl adı Muhyiddin Pîrî Bey) 1495 yılında amcası Kemal Reis ile birlikte Osmanlı Donanması'nın resmi hizmetine girmiştir.",
            imagePath: "assets/images/piri_reis_s1_gallipoli_tower.png",
            imageKey: "assets/images/piri_reis_s1_gallipoli_tower.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Gelibolu kulesinde ceylan derisi haritası başında Piri Reis.",
          },
          {
            id: "piri-ch1-s2",
            sceneNumber: 2,
            title: "Deniz Sandığından Çıkan Yirmi Harita",
            narration:
              "Yıl 1513 olduğunda Piri Reis Gelibolu'daki sessiz çalışma kulesine çekildi. Önündeki büyük ceviz masanın üzerine yıllarca Akdeniz seferlerinde topladığı deri ruloları açtı. Burada İslam coğrafyacılarının çizdiği Caferiye haritaları, dört yeni Portekiz deniz haritası, Arap denizcilerin Hint Okyanusu haritası ve 1501 yılında Valensiya açıklarında ele geçirilen gemiden çıkan Kristof Kolomb'a ait Amerika kıyı haritası duruyordu!\n\nFarklı dillerdeki yirmiden fazla eski haritayı matematiksel hesaplarla karşılaştıran Piri Reis, bilimde tek bir kaynağa bağlı kalmadan doğrulamanın önemini gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, denizlerin ve gökyüzünün sırlarını haritalara ve kanatlara dönüştüren araştırma ve keşif ruhu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Yıl 1513 olduğunda Piri Reis Gelibolu'daki sessiz çalışma kulesine çekildi. Önündeki büyük ceviz masanın üzerine yıllarca Akdeniz seferlerinde topladığı deri ruloları açtı. Burada İslam coğrafyacılarının çizdiği Caferiye haritaları, dört yeni Portekiz deniz haritası, Arap denizcilerin Hint Okyanusu haritası ve 1501 yılında Valensiya açıklarında ele geçirilen gemiden çıkan Kristof Kolomb'a ait Amerika kıyı haritası duruyordu!\n\nFarklı dillerdeki yirmiden fazla eski haritayı matematiksel hesaplarla karşılaştıran Piri Reis, bilimde tek bir kaynağa bağlı kalmadan doğrulamanın önemini gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, denizlerin ve gökyüzünün sırlarını haritalara ve kanatlara dönüştüren araştırma ve keşif ruhu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Piri Reis",
            dialogue:
              "Elimde yirmiden fazla farklı harita var; kimi Arapça, kimi Portekizce, kimi de Kolomb'un çizimi! Şimdi bütün bu parçaları tek bir dünya haritasında birleştirme vaktidir!",
            historicalNote:
              "Bunu Biliyor muydun? Kristof Kolomb'un 1498 yılında kendi eliyle çizdiği orijinal harita bugün kayıptır; o haritanın dünyadaki tek izi Piri Reis'in 1513 haritasının içindedir!",
            imagePath: "assets/images/piri_reis_map.png",
            imageKey: "assets/images/piri_reis_map.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Masa üzerinde parşömen haritalar, pergel ve pusula.",
          },
          {
            id: "piri-ch1-s3",
            sceneNumber: 3,
            title: "Ceylan Derisinin Hazırlanışı",
            narration:
              "Böylesine değerli bir dünya haritasını sıradan bir kağıda çizemezdi; çünkü denizlerdeki tuzlu nem kağıdı çabucak yıpratır ve çürütürdü. Piri Reis en kaliteli, pürüzsüz ceylan derisini (parşömen) seçti. Doğal kök boyalarından turkuaz, mercan kırmızısı, zümrüt yeşili ve altın yaldızlı mürekkepler hazırladı. Ancak çizime başlamadan önce karşısında çok büyük bir matematik sorunu duruyordu!\n\nAkdeniz'in turkuaz koylarındaki gizli sığlıkları ve su altı kayalıklarını tek tek Kitab-ı Bahriye'ye işleyen kalem, gelecekteki denizcilerin hayatını koruyan bir pusulaydı. Çevredeki her detay, Gelibolu'daki denizci kulesinden Akdeniz koylarına ve Galata Kulesi'nin rüzgârlı terasına uzanan ufuklarda filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Böylesine değerli bir dünya haritasını sıradan bir kağıda çizemezdi; çünkü denizlerdeki tuzlu nem kağıdı çabucak yıpratır ve çürütürdü. Piri Reis en kaliteli, pürüzsüz ceylan derisini (parşömen) seçti. Doğal kök boyalarından turkuaz, mercan kırmızısı, zümrüt yeşili ve altın yaldızlı mürekkepler hazırladı. Ancak çizime başlamadan önce karşısında çok büyük bir matematik sorunu duruyordu!\n\nAkdeniz'in turkuaz koylarındaki gizli sığlıkları ve su altı kayalıklarını tek tek Kitab-ı Bahriye'ye işleyen kalem, gelecekteki denizcilerin hayatını koruyan bir pusulaydı. Çevredeki her detay, Gelibolu'daki denizci kulesinden Akdeniz koylarına ve Galata Kulesi'nin rüzgârlı terasına uzanan ufuklarda filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Piri Reis",
            dialogue:
              "Bu yirmi haritanın her biri farklı bir ölçekle çizilmiş! Kimi bir karışa yüz mil sığdırmış, kimi beş yüz mil! Bunları doğrudan yan yana yapıştırırsak kıtalar eğri büğrü olur!",
            historicalNote:
              "Bunu Biliyor muydun? Piri Reis haritanın kenarındaki kendi el yazısı notunda 'Yirmi kıt'a haritayı pergel ve geometri kurallarıyla tek bir ölçeğe (mikyasa) indirdim' diye yazmıştır!",
            imagePath: "assets/images/tarik_s1_andalusia_fleet.png",
            imageKey: "assets/images/tarik_s1_andalusia_fleet.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Ceylan derisi üzerinde altın pergel ve mürekkep hokkaları.",
          },
          {
            id: "piri-ch1-s4",
            sceneNumber: 4,
            title: "Rüzgâr Gülleri ve Kerteriz Çizgileri",
            narration:
              "Farklı ölçeklerdeki yirmi haritayı tek bir ceylan derisinde hatasızca birleştirmek için Piri Reis muazzam bir geometrik yöntem kullandı. Haritanın üzerine otuz iki yönü gösteren süslü 'Rüzgâr Gülleri' (Pusula Gülleri) ve mil ölçekleri yerleştirdi. Bu rüzgâr güllerinin merkezinden çıkan kırmızı ve siyah 'Kerteriz' (yön) çizgileriyle bütün kıyıları aynı matematiksel orana dönüştürdü.\n\nGalata Kulesi'nden Boğaz'ın lodos rüzgârına açılan beyaz kanatlar ise, kuşların süzülüşünü sabırla inceleyen bir bilginin gökyüzü hayalini gerçeğe dönüştürüyordu. Sabır, dikkat ve samimiyetle atılan bu adım, denizlerin ve gökyüzünün sırlarını haritalara ve kanatlara dönüştüren araştırma ve keşif ruhu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Farklı ölçeklerdeki yirmi haritayı tek bir ceylan derisinde hatasızca birleştirmek için Piri Reis muazzam bir geometrik yöntem kullandı. Haritanın üzerine otuz iki yönü gösteren süslü 'Rüzgâr Gülleri' (Pusula Gülleri) ve mil ölçekleri yerleştirdi. Bu rüzgâr güllerinin merkezinden çıkan kırmızı ve siyah 'Kerteriz' (yön) çizgileriyle bütün kıyıları aynı matematiksel orana dönüştürdü.\n\nGalata Kulesi'nden Boğaz'ın lodos rüzgârına açılan beyaz kanatlar ise, kuşların süzülüşünü sabırla inceleyen bir bilginin gökyüzü hayalini gerçeğe dönüştürüyordu. Sabır, dikkat ve samimiyetle atılan bu adım, denizlerin ve gökyüzünün sırlarını haritalara ve kanatlara dönüştüren araştırma ve keşif ruhu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Piri Reis",
            dialogue:
              "Pergelimizin ucu ve rüzgâr güllerinin açıları asla yalan söylemez! Bilimde tahminle değil, matematiksel oranla çizim yapılır!",
            historicalNote:
              "Bunu Biliyor muydun? Piri Reis'in haritasındaki Atlas Okyanusu, İspanya, Batı Afrika ve Güney Amerika kıyıları bugünkü uydu haritalarıyla şaşırtıcı bir uyum göstermektedir!",
            imagePath: "assets/images/piri_reis_s2_mediterranean_cove.png",
            imageKey: "assets/images/piri_reis_s2_mediterranean_cove.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Harita üzerinde rüzgâr gülleri ve açı hesapları.",
            midDecision: {
              title: "ARA KARAR: Farklı Ölçekli Haritaları Nasıl Birleştirirsin?",
              question:
                "Elinde Arap, Portekiz ve Kolomb'a ait 20 farklı harita var ama hepsinin boyutu ve ölçeği birbirinden farklı. Bunları tek bir haritada nasıl doğru birleştirirsin?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Göz kararıyla rastgele çizerim, zaten okyanusta kimse fark etmez.",
                  feedback:
                    "Haritada yapılacak bir santimlik göz kararı hata, okyanusta gemilerin yüzlerce mil kaybolmasına yol açar!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Pergel, mil cetveli ve 32 yönlü Rüzgâr Gülleri kullanarak tüm haritaları matematiksel olarak tek bir ortak ölçeğe (mikyasa) dönüştürürüm!",
                  feedback:
                    "Harika mühendislik! Piri Reis 20 farklı haritayı geometrik oranlama ile tek bir ölçekte kusursuzca birleştirdi.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "piri-ch1-s5",
            sceneNumber: 5,
            title: "Yeni Dünya Kıyıları ve Renkli Papağanlar",
            narration:
              "Piri Reis ceylan derisinin sol tarafına henüz yeni keşfedilmiş olan Orta ve Güney Amerika kıyılarını (Antil Adaları'nı, Amazon Nehri'ni ve And Dağları'nı) büyük bir özenle çizdi. Harita sadece kuru çizgilerden ibaret olmasın, bakan kişi o diyarların doğasını da tanısın diye kıtaların üzerine kırmızı-yeşil papağanlar, lamalar, dağlar ve okyanusta yüzen kalyon resimleri işledi!\n\nGelibolu Kulesi'nin penceresinden içeri dolan deniz kokusu ve mum ışığı, ceylan derisi üzerine çizilen rüzgâr güllerine ve kıyı çizgilerine hayat veriyordu. O an Gelibolu'daki denizci kulesinden Akdeniz koylarına ve Galata Kulesi'nin rüzgârlı terasına uzanan ufuklarda hissedilen denizlerin ve gökyüzünün sırlarını haritalara ve kanatlara dönüştüren araştırma ve keşif ruhu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Piri Reis ceylan derisinin sol tarafına henüz yeni keşfedilmiş olan Orta ve Güney Amerika kıyılarını (Antil Adaları'nı, Amazon Nehri'ni ve And Dağları'nı) büyük bir özenle çizdi. Harita sadece kuru çizgilerden ibaret olmasın, bakan kişi o diyarların doğasını da tanısın diye kıtaların üzerine kırmızı-yeşil papağanlar, lamalar, dağlar ve okyanusta yüzen kalyon resimleri işledi!\n\nGelibolu Kulesi'nin penceresinden içeri dolan deniz kokusu ve mum ışığı, ceylan derisi üzerine çizilen rüzgâr güllerine ve kıyı çizgilerine hayat veriyordu. O an Gelibolu'daki denizci kulesinden Akdeniz koylarına ve Galata Kulesi'nin rüzgârlı terasına uzanan ufuklarda hissedilen denizlerin ve gökyüzünün sırlarını haritalara ve kanatlara dönüştüren araştırma ve keşif ruhu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Piri Reis",
            dialogue:
              "Bu haritaya bakan genç bir denizci, sadece kıyının şeklini değil; o adalardaki renkli papağanları, nehirleri ve rüzgârların yönünü de bir bakışta okuyabilmeli!",
            historicalNote:
              "Bunu Biliyor muydun? Piri Reis'in 1513 Dünya Haritası, Amerika kıtasını ve Güney Amerika'daki And Dağları'nı gösteren dünyadaki en eski ve en doğru haritalardan biridir!",
            imagePath: "assets/images/piri_reis_stars_kamal.png",
            imageKey: "assets/images/piri_reis_stars_kamal.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Renkli minyatürlü ceylan derisi harita.",
          },
          {
            id: "piri-ch1-s6",
            sceneNumber: 6,
            title: "Harita Kenarındaki Bilimsel Notlar",
            narration:
              "Piri Reis haritanın boş kalan kenarlarına Osmanlı Türkçesiyle tam yirmi dört adet açıklayıcı bilimsel not (haşiye) yazdı. Bu notlarda hangi bilgiyi hangi kaynaktan aldığını tek tek belirtti; hiçbir bilgiyi kendine mal etmedi! 'Bu kıyıları Cenovalı Kolomb keşfetmiştir, şu adaları Portekiz gemicileri kaydetmiştir' diyerek tam bir bilim ahlakı ve dürüstlük örneği sergiledi.\n\nFarklı dillerdeki yirmiden fazla eski haritayı matematiksel hesaplarla karşılaştıran Piri Reis, bilimde tek bir kaynağa bağlı kalmadan doğrulamanın önemini gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, denizlerin ve gökyüzünün sırlarını haritalara ve kanatlara dönüştüren araştırma ve keşif ruhu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Piri Reis haritanın boş kalan kenarlarına Osmanlı Türkçesiyle tam yirmi dört adet açıklayıcı bilimsel not (haşiye) yazdı. Bu notlarda hangi bilgiyi hangi kaynaktan aldığını tek tek belirtti; hiçbir bilgiyi kendine mal etmedi! 'Bu kıyıları Cenovalı Kolomb keşfetmiştir, şu adaları Portekiz gemicileri kaydetmiştir' diyerek tam bir bilim ahlakı ve dürüstlük örneği sergiledi.\n\nFarklı dillerdeki yirmiden fazla eski haritayı matematiksel hesaplarla karşılaştıran Piri Reis, bilimde tek bir kaynağa bağlı kalmadan doğrulamanın önemini gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, denizlerin ve gökyüzünün sırlarını haritalara ve kanatlara dönüştüren araştırma ve keşif ruhu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Piri Reis",
            dialogue:
              "İlimde emanete hıyanet olmaz! Hangi haritadan ve hangi denizciden ne öğrendiysem kaynağını açıkça yazıyorum; bu harita çağımızın en hatasız haritasıdır!",
            historicalNote:
              "Bunu Biliyor muydun? Piri Reis haritanın imzasını 'Gelibolulu Kemal Reis'in kardeşinin oğlu Hacı Mehmed'in oğlu fakir Pîrî, 919 (1513) yılı Muharrem ayında Gelibolu'da çizdi' diye atmıştır.",
            imagePath: "assets/images/battuta_s2_red_sea_storm.png",
            imageKey: "assets/images/battuta_s2_red_sea_storm.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Haritasına imza atan büyük denizci Piri Reis.",
          },
          {
            id: "piri-ch1-s7",
            sceneNumber: 7,
            title: "1517 Kahire: Yavuz Sultan Selim'e Takdim",
            narration:
              "Dört yıl sonra, 1517 yılında Piri Reis donanmayla Mısır'ın İskenderiye limanına demir attı ve Kahire'de bulunan Padişah Yavuz Sultan Selim'in huzuruna çıktı. Gelibolu'da ceylan derisine çizdiği bu muazzam Dünya Haritası'nı bizzat Sultan'a takdim etti. Haritayı büyük bir dikkatle inceleyen Yavuz Sultan Selim, okyanusların ve yeni kıtaların bu kadar ayrıntılı çizilmiş olmasına hayran kaldı.\n\nAkdeniz'in turkuaz koylarındaki gizli sığlıkları ve su altı kayalıklarını tek tek Kitab-ı Bahriye'ye işleyen kalem, gelecekteki denizcilerin hayatını koruyan bir pusulaydı. Çevredeki her detay, Gelibolu'daki denizci kulesinden Akdeniz koylarına ve Galata Kulesi'nin rüzgârlı terasına uzanan ufuklarda filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Dört yıl sonra, 1517 yılında Piri Reis donanmayla Mısır'ın İskenderiye limanına demir attı ve Kahire'de bulunan Padişah Yavuz Sultan Selim'in huzuruna çıktı. Gelibolu'da ceylan derisine çizdiği bu muazzam Dünya Haritası'nı bizzat Sultan'a takdim etti. Haritayı büyük bir dikkatle inceleyen Yavuz Sultan Selim, okyanusların ve yeni kıtaların bu kadar ayrıntılı çizilmiş olmasına hayran kaldı.\n\nAkdeniz'in turkuaz koylarındaki gizli sığlıkları ve su altı kayalıklarını tek tek Kitab-ı Bahriye'ye işleyen kalem, gelecekteki denizcilerin hayatını koruyan bir pusulaydı. Çevredeki her detay, Gelibolu'daki denizci kulesinden Akdeniz koylarına ve Galata Kulesi'nin rüzgârlı terasına uzanan ufuklarda filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Yavuz Sultan Selim Han",
            dialogue:
              "Ellerine sağlık Pîrî Reis! Denizlerin ve kıtaların ilmini bu ceylan derisinde öyle güzel toplamışsın ki devletimizin ufku okyanuslara kadar genişledi!",
            historicalNote:
              "Bunu Biliyor muydun? Piri Reis 1528 yılında Grönland, Kuzey Amerika, Florida ve Küba'yı daha da hassas gösteren ikinci bir Dünya Haritası daha çizip Kanuni Sultan Süleyman'a sunmuştur!",
            imagePath: "assets/images/fatih_s2_red_notebook_plan.png",
            imageKey: "assets/images/fatih_s2_red_notebook_plan.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Sarayda sunulan ceylan derisi dünya haritası.",
          },
          {
            id: "piri-ch1-s8",
            sceneNumber: 8,
            title: "1929 Topkapı Sarayı'nda Büyük Keşif!",
            narration:
              "Yüzyıllar boyunca saray hazinesinde saklanan bu eşsiz harita zamanla unutulmuştu. Ta ki Cumhuriyet döneminde, 9 Ekim 1929 tarihinde Topkapı Sarayı Müzesi Müdürü Halil Edhem Bey saray kütüphanesindeki eski evrakları tasnif ederken ceylan derisi üzerindeki bu renkli haritayı bulana kadar! Haritanın bulunması bütün dünya bilim çevrelerinde ve coğrafya cemiyetlerinde büyük bir heyecan uyandırdı.\n\nGalata Kulesi'nden Boğaz'ın lodos rüzgârına açılan beyaz kanatlar ise, kuşların süzülüşünü sabırla inceleyen bir bilginin gökyüzü hayalini gerçeğe dönüştürüyordu. Sabır, dikkat ve samimiyetle atılan bu adım, denizlerin ve gökyüzünün sırlarını haritalara ve kanatlara dönüştüren araştırma ve keşif ruhu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Yüzyıllar boyunca saray hazinesinde saklanan bu eşsiz harita zamanla unutulmuştu. Ta ki Cumhuriyet döneminde, 9 Ekim 1929 tarihinde Topkapı Sarayı Müzesi Müdürü Halil Edhem Bey saray kütüphanesindeki eski evrakları tasnif ederken ceylan derisi üzerindeki bu renkli haritayı bulana kadar! Haritanın bulunması bütün dünya bilim çevrelerinde ve coğrafya cemiyetlerinde büyük bir heyecan uyandırdı.\n\nGalata Kulesi'nden Boğaz'ın lodos rüzgârına açılan beyaz kanatlar ise, kuşların süzülüşünü sabırla inceleyen bir bilginin gökyüzü hayalini gerçeğe dönüştürüyordu. Sabır, dikkat ve samimiyetle atılan bu adım, denizlerin ve gökyüzünün sırlarını haritalara ve kanatlara dönüştüren araştırma ve keşif ruhu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Müze Müdürü Halil Edhem Bey",
            dialogue:
              "Dostlar, buraya bakın! Elimizdeki bu ceylan derisi, 1513 yılında Piri Reis'in Gelibolu'da çizdiği ve Kolomb'un kayıp haritasını da içeren paha biçilemez Dünya Haritası'dır!",
            historicalNote:
              "Bunu Biliyor muydun? Gazi Mustafa Kemal Atatürk de Piri Reis Haritası'nı bizzat incelemiş ve Devlet Matbaası'nda tıpkıbasımının yapılarak tüm dünyaya tanıtılmasını sağlamıştır!",
            imagePath: "assets/images/artifact_fatih_notebook.png",
            imageKey: "assets/images/artifact_fatih_notebook.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Topkapı Sarayı'nda korunan ceylan derisi harita.",
          },
          {
            id: "piri-ch1-s9",
            sceneNumber: 9,
            title: "Asırları Aşan Kartografya Mirası",
            narration:
              "Bugün İstanbul Topkapı Sarayı Müzesi'nde korunan Piri Reis'in 1513 Dünya Haritası, UNESCO Dünya Belleği Listesi'nde yer alan en değerli kültür hazinelerimizden biridir. Gelibolu'daki kulesinde mum ışığında pergel sallayan o büyük denizci, doğu ve batı bilimini birleştirerek Türk denizciliğinin adını dünya haritasına altın harflerle yazdırdı.\n\nGelibolu Kulesi'nin penceresinden içeri dolan deniz kokusu ve mum ışığı, ceylan derisi üzerine çizilen rüzgâr güllerine ve kıyı çizgilerine hayat veriyordu. O an Gelibolu'daki denizci kulesinden Akdeniz koylarına ve Galata Kulesi'nin rüzgârlı terasına uzanan ufuklarda hissedilen denizlerin ve gökyüzünün sırlarını haritalara ve kanatlara dönüştüren araştırma ve keşif ruhu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Bugün İstanbul Topkapı Sarayı Müzesi'nde korunan Piri Reis'in 1513 Dünya Haritası, UNESCO Dünya Belleği Listesi'nde yer alan en değerli kültür hazinelerimizden biridir. Gelibolu'daki kulesinde mum ışığında pergel sallayan o büyük denizci, doğu ve batı bilimini birleştirerek Türk denizciliğinin adını dünya haritasına altın harflerle yazdırdı.\n\nGelibolu Kulesi'nin penceresinden içeri dolan deniz kokusu ve mum ışığı, ceylan derisi üzerine çizilen rüzgâr güllerine ve kıyı çizgilerine hayat veriyordu. O an Gelibolu'daki denizci kulesinden Akdeniz koylarına ve Galata Kulesi'nin rüzgârlı terasına uzanan ufuklarda hissedilen denizlerin ve gökyüzünün sırlarını haritalara ve kanatlara dönüştüren araştırma ve keşif ruhu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Piri Reis",
            dialogue:
              "Bu fakir Pîrî'nin çizdiği harita, benden sonra denizlere açılacak genç kaptanlara pusula ve ışık olsun!",
            historicalNote:
              "Bunu Biliyor muydun? UNESCO, Piri Reis Haritası'nın 500. yılı olan 2013 yılını tüm dünyada 'Piri Reis Yılı' olarak kutlamıştır.",
            imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
            imageKey: "assets/images/artifact_qarawiyyin_astrolabe.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Dünya haritası ve denizci pusulası.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Gelibolu'daki kulende farklı dillerde ve farklı ölçeklerde çizilmiş 20'den fazla eski deniz haritası var. Dünya denizciliğine rehber olacak kusursuz bir harita yapmak için nasıl bir yol izlersin?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Yabancı dildeki haritaları hiç incelemeden sadece kendi bildiğim yakın kıyıları çizerim.",
              feedback:
                "Bilim ve coğrafya, dünyadaki tüm kaynakları inceleyip doğrulamakla gelişir!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Haritaları ölçmeden rastgele kağıda kopyalarım ve kaynaklarını gizlerim.",
              feedback:
                "Ölçeksiz harita denizcileri yanıltır; kaynakları gizlemek ise bilim ahlakına uymaz.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "İslam, Portekiz ve Kolomb haritalarının tamamını pergel ve 32 yönlü rüzgâr gülleriyle tek bir matematiksel ölçeğe indirir, ceylan derisi üzerine kaynaklarını da belirterek 1513 Dünya Haritası'nı çizerim!",
              feedback:
                "Tarihi Hakikat! Piri Reis doğu ve batı kaynaklarını matematiksel ölçekle birleştirerek 1513 Dünya Haritası'nı meydana getirdi!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Piri Reis, 1513 yılında Gelibolu'da 20'den fazla farklı haritayı (Arap, Portekiz ve Kristof Kolomb haritalarını) pergel ve rüzgâr gülleriyle tek bir matematiksel ölçeğe indirerek ceylan derisi üzerine meşhur Dünya Haritası'nı çizdi!",
          quoteHighlight:
            "Yirmi kıt'a haritayı pergel ve geometri kurallarıyla tek bir ölçeğe indirdim; bu harita çağımızın en hatasız haritasıdır!",
        },
        rewardArtifact: {
          id: "artifact-piri-reis-map",
          name: "Piri Reis'in Ceylan Derisi Haritası ve Pusulası",
          heroId: "piri-reis",
          chapterId: "piri-reis-ch1",
          imagePath: "assets/images/piri_reis_map.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik ve Keşif Puanı",
          points: 50,
          unlockedTitle: "Okyanus Haritacısı",
          shortDescription:
            "1513 yılında Gelibolu'da ceylan derisi üzerine 9 renkte çizilen, üzerinde 32 yönlü rüzgâr gülleri bulunan tarihi Dünya Haritası.",
          historicalNote:
            "Topkapı Sarayı Müzesi'nde korunan Piri Reis Haritası, Amerika kıtasını ve Atlas Okyanusu'nu gösteren en eski ve en değerli tarihi belgelerden biridir.",
          accentColor: "#F43F5E",
          hotspots: [
            {
              id: "wind-rose-32",
              xPercent: 52,
              yPercent: 38,
              title: "32 Yönlü Rüzgâr Gülü",
              secretFact:
                "Haritanın üzerindeki pusula güllerinden çıkan kerteriz çizgileri, kaptanların iki liman arasındaki açıyı cetvelle bulmasını sağlardı.",
            },
            {
              id: "new-world-coasts",
              xPercent: 28,
              yPercent: 60,
              title: "Güney Amerika ve Papağanlar",
              secretFact:
                "Sol kısımda Orta ve Güney Amerika kıyıları, And Dağları ve o coğrafyaya özgü renkli papağan figürleri yer alır.",
            },
            {
              id: "gallipoli-signature",
              xPercent: 68,
              yPercent: 72,
              title: "Gelibolu 1513 İmzası",
              secretFact:
                "Piri Reis haritanın kenar notlarında yararlandığı 20 kaynağı dürüstçe yazmış ve 1513 Muharrem ayında Gelibolu'da tamamladığını kaydetmiştir.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Piri Reis haritasını çizerken neden yararlandığı diğer denizcilerin isimlerini gizlemek yerine tek tek haritanın kenarına yazdı?",
          "Ceylan derisi üzerine çizilen 500 yıllık bir haritanın bugün hâlâ Topkapı Sarayı'nda korunuyor olması neden çok kıymetlidir?",
          "Sen kendi mahallenin veya okul yolunun resimli bir haritasını çizseydin üzerine hangi sembolleri eklerdin?",
        ],
      },

      // ------------------------------------------------------------------------
      // BÖLÜM 2: GALATA KULESİ'NDEN ÜSKÜDAR'A KANAT ÇIRPIŞ (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "piri-reis-ch2",
        heroId: "piri-reis",
        chapterNumber: 2,
        title: "Galata Kulesi'nden Üsküdar'a Kanat Çırpış",
        subtitle: "Kuşların kanadındaki rüzgâr sırrını çözen Hezârfen Ahmed Çelebi",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "hezarfen-ch2-s1",
            sceneNumber: 1,
            title: "Bin Bilimli Genç: 'Hezârfen'",
            narration:
              "On yedinci yüzyıl İstanbul'unda, Haliç'in kıyısındaki atölyesinde gece gündüz çalışan genç bir mucit yaşıyordu: Ahmed Çelebi! Fizikten astronomiye, mekanikten kuşların anatomisine kadar pek çok bilim dalında derin bilgisi olduğu için İstanbul halkı ona Farsça 'Bin Bilimli / Bin Hünerli' anlamına gelen 'Hezârfen' unvanını vermişti. Onun en büyük hayali ise Boğaz'ın üzerinde süzülen martılar gibi gökyüzünde uçmaktı!\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "On yedinci yüzyıl İstanbul'unda, Haliç'in kıyısındaki atölyesinde gece gündüz çalışan genç bir mucit yaşıyordu: Ahmed Çelebi! Fizikten astronomiye, mekanikten kuşların anatomisine kadar pek çok bilim dalında derin bilgisi olduğu için İstanbul halkı ona Farsça 'Bin Bilimli / Bin Hünerli' anlamına gelen 'Hezârfen' unvanını vermişti. Onun en büyük hayali ise Boğaz'ın üzerinde süzülen martılar gibi gökyüzünde uçmaktı!\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hezârfen Ahmed Çelebi",
            dialogue:
              "Denizlerde Pîrî Reis'in haritalarıyla yol bulduk; şimdi sıra gökyüzündeki rüzgâr akımlarının haritasını çıkarmaya geldi!",
            historicalNote:
              "Bunu Biliyor muydun? 'Hezâr' kelimesi bin, 'Fen' ise bilim ve sanat demektir; 'Hezârfen' çok yönlü bilim insanlarına verilen bir saygı unvanıdır.",
            imagePath: "assets/images/piri_reis_stars_kamal.png",
            imageKey: "assets/images/piri_reis_stars_kamal.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Atölyede kanat çizimleri ve mekanik aletler.",
          },
          {
            id: "hezarfen-ch2-s2",
            sceneNumber: 2,
            title: "İsmail Cevherî ve Kartal Kanatlarının İncelenmesi",
            narration:
              "Hezârfen Ahmed Çelebi uçma fikrine körü körüne atılmadı. Önce kendisinden altı yüz yıl önce Nişabur'da kanat takarak uçmayı deneyen Türk bilgini İsmail Cevherî'nin notlarını ve Abbas İbn Firnas'ın çalışmalarını dikkatle inceledi. Önceki denemelerde kuyruk dengesi ve kanat kavisi eksik olduğu için iniş sırasında kazalar yaşandığını fark etti. Haftalarca Boğaz'daki kartalların ve martıların rüzgârda kanatlarını hiç çırpmadan nasıl süzüldüğünü gözlemledi.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Hezârfen Ahmed Çelebi uçma fikrine körü körüne atılmadı. Önce kendisinden altı yüz yıl önce Nişabur'da kanat takarak uçmayı deneyen Türk bilgini İsmail Cevherî'nin notlarını ve Abbas İbn Firnas'ın çalışmalarını dikkatle inceledi. Önceki denemelerde kuyruk dengesi ve kanat kavisi eksik olduğu için iniş sırasında kazalar yaşandığını fark etti. Haftalarca Boğaz'daki kartalların ve martıların rüzgârda kanatlarını hiç çırpmadan nasıl süzüldüğünü gözlemledi.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Hezârfen Ahmed Çelebi",
            dialogue:
              "Bakın, martılar lodos rüzgârına karşı kanatlarını hafifçe kavisli açtığında rüzgâr onları aşağı itmiyor, tam tersine yukarı kaldırıyor!",
            historicalNote:
              "Bunu Biliyor muydun? Kuş kanadının üst yüzeyinin kavisli olması sayesinde oluşan hava kaldırma kuvvetine modern havacılıkta 'Aerodinamik Kaldırma (Bernoulli İlkesi)' denir!",
            imagePath: "assets/images/piri_reis_s2_mediterranean_cove.png",
            imageKey: "assets/images/piri_reis_s2_mediterranean_cove.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Boğaz üzerinde süzülen kuşları ve rüzgâr yönlerini inceleyen çizimler.",
          },
          {
            id: "hezarfen-ch2-s3",
            sceneNumber: 3,
            title: "Okmeydanı'nda Dokuz Kez Yapılan Deneme Uçuşu!",
            narration:
              "Hezârfen Ahmed Çelebi hafif dişbudak ağacı, balmumuyla güçlendirilmiş ipek kumaş ve kartal tüylerinden geniş bir planör kanadı tasarladı. Ancak hemen yüksek Galata Kulesi'ne çıkmadı! Evliya Çelebi'nin Seyahatname'de kaydettiğine göre, önce Okmeydanı'nın rüzgârlı tepelerine gitti ve yüksekçe bir minberin üzerinden rüzgâra karşı tam sekiz-dokuz kez kısa mesafeli deneme uçuşları yaparak kanatların dengesini test etti!\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Hezârfen Ahmed Çelebi hafif dişbudak ağacı, balmumuyla güçlendirilmiş ipek kumaş ve kartal tüylerinden geniş bir planör kanadı tasarladı. Ancak hemen yüksek Galata Kulesi'ne çıkmadı! Evliya Çelebi'nin Seyahatname'de kaydettiğine göre, önce Okmeydanı'nın rüzgârlı tepelerine gitti ve yüksekçe bir minberin üzerinden rüzgâra karşı tam sekiz-dokuz kez kısa mesafeli deneme uçuşları yaparak kanatların dengesini test etti!\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Dostu Evliya Çelebi",
            dialogue:
              "Aziz dostum Ahmed! Okmeydanı'nda yaptığın dokuz denemede de kanatların seni rüzgârın üzerinde kuş gibi taşıdı; artık büyük uçuşa hazırsın!",
            historicalNote:
              "Bunu Biliyor muydun? Evliya Çelebi ünlü Seyahatnamesinin 1. cildinde Hezârfen Ahmed Çelebi'nin önce Okmeydanı'nda rüzgâr şiddetini ölçerek defalarca deneme yaptığını bizzat yazmıştır!",
            imagePath: "assets/images/piri_reis_s1_gallipoli_tower.png",
            imageKey: "assets/images/piri_reis_s1_gallipoli_tower.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "İpek ve hafif ahşaptan yapılan kanat mekanizması.",
          },
          {
            id: "hezarfen-ch2-s4",
            sceneNumber: 4,
            title: "Galata Kulesi'nin Zirvesinde Rüzgâr Hesabı",
            narration:
              "Yıl 1632... Büyük gün geldiğinde İstanbul halkı sahillere toplanmış, Padişah IV. Murad ise Sarayburnu'ndaki Sinan Paşa Köşkü'nden dürbünle Galata Kulesi'ni izlemeye başlamıştı. Deniz seviyesinden neredeyse yüz metre yüksekteki Galata Kulesi'nin külahına çıkan Hezârfen Ahmed Çelebi kanatlarını kollarına ve gövdesine sıkıca bağladı. Ancak o sırada rüzgârın yönü çok kritikti!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Yıl 1632... Büyük gün geldiğinde İstanbul halkı sahillere toplanmış, Padişah IV. Murad ise Sarayburnu'ndaki Sinan Paşa Köşkü'nden dürbünle Galata Kulesi'ni izlemeye başlamıştı. Deniz seviyesinden neredeyse yüz metre yüksekteki Galata Kulesi'nin külahına çıkan Hezârfen Ahmed Çelebi kanatlarını kollarına ve gövdesine sıkıca bağladı. Ancak o sırada rüzgârın yönü çok kritikti!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Hezârfen Ahmed Çelebi",
            dialogue:
              "Boğaz'ı aşabilmem için rüzgârın arkamdan değil, güneybatıdan (Lodos yönünden) güçlüce esip kanatlarımın altını doldurması gerekir!",
            historicalNote:
              "Bunu Biliyor muydun? Uçaklar ve planörler bugün de havalanırken arkadan esen rüzgârla değil, kanatların altında kaldırma kuvveti oluşturan karşı rüzgârla (rüzgâra karşı) kalkış yaparlar!",
            imagePath: "assets/images/piri_reis_map.png",
            imageKey: "assets/images/piri_reis_map.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Kule tepesinden Boğaz ve rüzgâr gülü açıları.",
            midDecision: {
              title: "ARA KARAR: Hangi Rüzgârda Kanat Açarsın?",
              question:
                "Galata Kulesi'nin tepesinde kanatlarını taktın ve karşı kıyıdaki Üsküdar'a süzülmek istiyorsun. Güvenli bir kaldırma kuvveti yakalamak için ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Hiç rüzgâr yokken veya fırtına beni aşağı bastırırken rastgele atlarım.",
                  feedback:
                    "Durgun havada veya ters akımda yeterli kaldırma kuvveti oluşmaz!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Okmeydanı'nda test ettiğim gibi uygun Lodos (güneybatı) rüzgârını ve Boğaz üzerindeki yükselen hava akımını bekler, kanatlarımı kavisli açarak süzülürüm!",
                  feedback:
                    "Harika aerodinamik bilgisi! Doğru rüzgâr açısı ve yükselen hava akımı planör uçuşunun anahtarıdır!",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "hezarfen-ch2-s5",
            sceneNumber: 5,
            title: "Boğaz'ın Üzerinde Süzülen İnsan!",
            narration:
              "Beklenen kuvvetli Lodos rüzgârı Boğaz'dan yukarı doğru esmeye başladığında Hezârfen Ahmed Çelebi 'Bismillah!' diyerek Galata Kulesi'nin zirvesinden boşluğa süzüldü! İlk anda nefesini tutan binlerce insan, bir saniye sonra genç bilginin dev kanatlarının rüzgârla dolduğunu ve tıpkı süzülen bir kartal gibi yükselerek masmavi İstanbul Boğazı'nın üzerine doğru açıldığını gördü!\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Beklenen kuvvetli Lodos rüzgârı Boğaz'dan yukarı doğru esmeye başladığında Hezârfen Ahmed Çelebi 'Bismillah!' diyerek Galata Kulesi'nin zirvesinden boşluğa süzüldü! İlk anda nefesini tutan binlerce insan, bir saniye sonra genç bilginin dev kanatlarının rüzgârla dolduğunu ve tıpkı süzülen bir kartal gibi yükselerek masmavi İstanbul Boğazı'nın üzerine doğru açıldığını gördü!\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Sahildeki İstanbullular",
            dialogue:
              "Gökyüzüne bakın! Hezârfen Ahmed Çelebi düşmüyor; kanatlarını açmış martılarla birlikte Boğaz'ın üstünden karşı kıyıya uçuyor!",
            historicalNote:
              "Bunu Biliyor muydun? Galata Kulesi'nin tepesi (yaklaşık 62 m kule + 35 m tepe yüksekliği = denizden ~97 metre) planörle süzülüş başlatmak için ideal bir irtifa sağlıyordu.",
            imagePath: "assets/images/hezarfen_s1_galata_wings_prep.png",
            imageKey: "assets/images/hezarfen_s1_galata_wings_prep.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "İstanbul Boğazı ve Haliç semaları.",
          },
          {
            id: "hezarfen-ch2-s6",
            sceneNumber: 6,
            title: "Avrupa'dan Asya'ya 3358 Metrelik Uçuş!",
            narration:
              "Hezârfen Ahmed Çelebi Boğaz'ın altındaki gemilerin, yelkenlilerin ve kız kulesinin üzerinden rüzgâr akımlarını ustalıkla kullanarak süzüldü. Kol ve gövde hareketleriyle kanatlarına yön vererek Avrupa yakasındaki Galata'dan Asya yakasındaki Üsküdar'a geçti! Yaklaşık 3358 metre (3,3 kilometre) boyunca havada süzüldükten sonra Üsküdar'daki Doğancılar Meydanı'na yumuşak bir iniş yaptı!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Hezârfen Ahmed Çelebi Boğaz'ın altındaki gemilerin, yelkenlilerin ve kız kulesinin üzerinden rüzgâr akımlarını ustalıkla kullanarak süzüldü. Kol ve gövde hareketleriyle kanatlarına yön vererek Avrupa yakasındaki Galata'dan Asya yakasındaki Üsküdar'a geçti! Yaklaşık 3358 metre (3,3 kilometre) boyunca havada süzüldükten sonra Üsküdar'daki Doğancılar Meydanı'na yumuşak bir iniş yaptı!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Hezârfen Ahmed Çelebi",
            dialogue:
              "İki kıta arasındaki denizi ilk kez yüzmeden ve gemiye binmeden, sadece bilimin ve rüzgârın kanatlarıyla aştık!",
            historicalNote:
              "Bunu Biliyor muydun? Hezârfen Ahmed Çelebi'nin Galata Kulesi'nden Üsküdar Doğancılar Meydanı'na yaptığı bu uçuş, tarihin ilk kıtalararası (Avrupa'dan Asya'ya) insanlı süzülüşüdür!",
            imagePath: "assets/images/hezarfen_galata_flight.png",
            imageKey: "assets/images/hezarfen_galata_flight.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Boğaz haritası üzerinde Galata-Üsküdar uçuş rotası.",
          },
          {
            id: "hezarfen-ch2-s7",
            sceneNumber: 7,
            title: "Sarayburnu'nda Altın Kesesiyle Ödül",
            narration:
              "Üsküdar halkının coşkulu alkışları arasında kanatlarını çıkaran Hezârfen Ahmed Çelebi, kayıkla Sarayburnu'na geçerek Padişah IV. Murad'ın huzuruna çıktı. Uçuşu başından sonuna kadar hayranlıkla izleyen Sultan Murad, bu cesur bilim insanını tebrik etti ve kendisine tam bir kese altın ihsan ederek ilmini takdir etti.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Üsküdar halkının coşkulu alkışları arasında kanatlarını çıkaran Hezârfen Ahmed Çelebi, kayıkla Sarayburnu'na geçerek Padişah IV. Murad'ın huzuruna çıktı. Uçuşu başından sonuna kadar hayranlıkla izleyen Sultan Murad, bu cesur bilim insanını tebrik etti ve kendisine tam bir kese altın ihsan ederek ilmini takdir etti.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Sultan IV. Murad",
            dialogue:
              "Maşallah Hezârfen! Aklın ve cesaretinle imkânsız denileni başardın; şu bir kese altın senin ilminin helal mükâfatıdır!",
            historicalNote:
              "Bunu Biliyor muydun? Hezârfen'in yakın arkadaşı olan Lagâri Hasan Çelebi de bir yıl sonra (1633'te) barut dolu 7 kollu bir füze ile Sarayburnu'ndan gökyüzüne fırlamış ve kanatlarla denize yumuşak iniş yaparak roketçiliğin öncüsü olmuştur!",
            imagePath: "assets/images/hezarfen_s2_uskudar_landing.png",
            imageKey: "assets/images/hezarfen_s2_uskudar_landing.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Bilim ve cesaretle kazanılan başarı.",
          },
          {
            id: "hezarfen-ch2-s8",
            sceneNumber: 8,
            title: "Avrupa Kitaplarında Anlatılan Uçan Türk",
            narration:
              "Hezârfen Ahmed Çelebi'nin Boğaz üzerindeki bu muazzam uçuşu sadece Evliya Çelebi'nin Seyahatnamesinde kalmadı; kısa sürede İstanbul'daki yabancı elçiler ve gezginler aracılığıyla Avrupa'ya da duyuldu! İngiliz bilim insanı John Wilkins 1638 yılında yazdığı kitapta İstanbul'da Galata Kulesi'nden kanatlarla uçan Türk bilgininden hayranlıkla bahsetti.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Hezârfen Ahmed Çelebi'nin Boğaz üzerindeki bu muazzam uçuşu sadece Evliya Çelebi'nin Seyahatnamesinde kalmadı; kısa sürede İstanbul'daki yabancı elçiler ve gezginler aracılığıyla Avrupa'ya da duyuldu! İngiliz bilim insanı John Wilkins 1638 yılında yazdığı kitapta İstanbul'da Galata Kulesi'nden kanatlarla uçan Türk bilgininden hayranlıkla bahsetti.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Evliya Çelebi",
            dialogue:
              "Dostum Hezârfen'in bu destanını Seyahatnameme bütün ayrıntılarıyla yazdım ki gelecekteki Türk gençleri göklerde ne büyük bir mirasları olduğunu bilsin!",
            historicalNote:
              "Bunu Biliyor muydun? Wright Kardeşler'in 1903'teki motorlu uçuşundan tam 271 yıl önce Hezârfen Ahmed Çelebi planör aerodinamiğiyle Boğaz'ı geçmiştir!",
            imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
            imageKey: "assets/images/artifact_qarawiyyin_astrolabe.png",
            atmosphereType: "WORKSHOP_GEARS",
            visualNote: "Seyahatname sayfaları ve kanat çizimleri.",
          },
          {
            id: "hezarfen-ch2-s9",
            sceneNumber: 9,
            title: "Denizlerde Piri Reis, Göklerde Hezârfen!",
            narration:
              "Gelibolu'da okyanusları ceylan derisine çizen Piri Reis ve Galata Kulesi'nden gökyüzüne kanat açan Hezârfen Ahmed Çelebi, sınırların sadece hayal etmekten vazgeçenler için var olduğunu kanıtladı. Biri denizlerin, diğeri göklerin kaşifi olarak kendilerinden sonra gelecek nesillere 'İstikbal göklerdedir ve denizlerdedir!' ufkunu miras bıraktı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Gelibolu'da okyanusları ceylan derisine çizen Piri Reis ve Galata Kulesi'nden gökyüzüne kanat açan Hezârfen Ahmed Çelebi, sınırların sadece hayal etmekten vazgeçenler için var olduğunu kanıtladı. Biri denizlerin, diğeri göklerin kaşifi olarak kendilerinden sonra gelecek nesillere 'İstikbal göklerdedir ve denizlerdedir!' ufkunu miras bıraktı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hezârfen Ahmed Çelebi",
            dialogue:
              "Kuşların kanadına, rüzgârın yönüne ve bilimin kurallarına kulak veren insan için gökyüzü ulaşılmaz bir duvar değil, açık bir yoldur!",
            historicalNote:
              "Bunu Biliyor muydun? Bugün İstanbul'daki uluslararası eğitim havalimanlarından birine 'Hezârfen Havalimanı' adı verilmiştir.",
            imagePath: "assets/images/tarik_s1_andalusia_fleet.png",
            imageKey: "assets/images/tarik_s1_andalusia_fleet.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Deniz ve gökyüzü kaşiflerinin mirası.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Gökyüzünde kuşlar gibi süzülmeyi hayal ediyorsun ama çevrendekiler 'İnsanoğlu uçamaz, boşuna uğraşma!' diyor. Galata Kulesi'nden Üsküdar'a güvenli bir uçuş gerçekleştirmek için nasıl bir yol izlersin?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "İnsanların sözünden korkup hayalimden hemen vazgeçerim.",
              feedback:
                "Büyük kaşifler ve mucitler 'imkânsız' diyenlere kulak asmaz, bilimle çalışır!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Hiç deneme yapmadan ve rüzgârı ölçmeden rastgele iki tahtayla kuleden atlarım.",
              feedback:
                "Deney ve aerodinamik hesap olmadan yapılan girişim çok tehlikelidir!",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Önce kuşların kanat yapısını ve İsmail Cevherî'nin notlarını incelerim, Okmeydanı'nda 9 kez deneme uçuşu yaparım ve Lodos rüzgârıyla Galata Kulesi'nden Üsküdar'a 3358 metre süzülürüm!",
              feedback:
                "Tarihi Hakikat! Hezârfen Ahmed Çelebi bilimsel gözlem, Okmeydanı testleri ve rüzgâr hesabıyla Boğaz'ı kanatlarıyla aştı!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Hezârfen Ahmed Çelebi, önce Okmeydanı'nda rüzgâra karşı 8-9 kez deneme uçuşu yaptıktan sonra 1632 yılında Lodos rüzgârıyla Galata Kulesi'nden havalanmış ve İstanbul Boğazı'nı aşarak Üsküdar Doğancılar Meydanı'na inmiştir!",
          quoteHighlight:
            "Kuşların kanadına, rüzgârın yönüne ve bilimin kurallarına kulak veren insan için gökyüzü açık bir yoldur!",
        },
        rewardArtifact: {
          id: "artifact-hezarfen-wings",
          name: "Hezârfen'in Planör Kanadı ve Rüzgâr Pusulası",
          heroId: "piri-reis",
          chapterId: "piri-reis-ch2",
          imagePath: "assets/images/hezarfen_galata_flight.png",
          pointType: "CESARET_MERHAMET",
          pointLabel: "Cesaret ve Keşif Puanı",
          points: 50,
          unlockedTitle: "Gökyüzü Seyyahı",
          shortDescription:
            "Hezârfen Ahmed Çelebi'nin Galata Kulesi'nden Üsküdar'a 3358 metre süzüldüğü kartal kanadı planör tasarımı ve rüzgâr ölçeri.",
          historicalNote:
            "Evliya Çelebi Seyahatnamesinde anlatılan 1632 Galata-Üsküdar uçuşu, dünya havacılık tarihinin en erken ve en ünlü planör uçuşlarından biridir.",
          accentColor: "#F43F5E",
          hotspots: [
            {
              id: "eagle-wing-curve",
              xPercent: 35,
              yPercent: 35,
              title: "Kavisli Kartal Kanadı Tasarımı",
              secretFact:
                "Hafif ahşap, balmumlu ipek ve kartal tüylerinden yapılan kavisli kanatlar, rüzgârın kaldırma kuvvetini yakalamak için tasarlanmıştı.",
            },
            {
              id: "okmeydani-trials",
              xPercent: 65,
              yPercent: 52,
              title: "Okmeydanı Deneme Notları",
              secretFact:
                "Hezârfen büyük uçuşundan önce Okmeydanı'nda rüzgâra karşı 8-9 kez kısa deneme uçuşları yaparak kanat dengesini mükemmelleştirmiştir.",
            },
            {
              id: "bosphorus-lodos-route",
              xPercent: 48,
              yPercent: 75,
              title: "3358 Metrelik Boğaz Rotası",
              secretFact:
                "Lodos rüzgârıyla Galata Kulesi'nden havalanıp Avrupa yakasından Asya yakasındaki Üsküdar Doğancılar Meydanı'na ulaşmıştır.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Hezârfen Ahmed Çelebi neden doğrudan Galata Kulesi'nden atlamak yerine önce Okmeydanı'nda 9 kez küçük deneme uçuşları yaptı?",
          "Galata Kulesi'ne veya Üsküdar'a gittiğimizde Hezârfen'in Boğaz üzerinden süzüldüğü mesafeye birlikte bakalım mı?",
          "Sen gelecekte gökyüzü veya uzay için nasıl bir araç tasarlamak isterdin?",
        ],
      },
    ],
  },

  // ==========================================================================
  // 16. KAHRAMAN: FATIMA EL-FİHRÎ & OSMANLI MERHAMET VAKIFLARI (2 BÖLÜM - 9'AR SAHNE)
  // ==========================================================================
  {
    id: "medeniyet-mimarlari",
    name: "Fatıma el-Fihrî & Osmanlı Merhamet Vakıfları",
    heroClass: "MERHAMET_VAKIF",
    heroClassLabel: "Merhamet ve Vakıf",
    classBadgeLabel: "Merhamet ve Vakıf",
    title: "Dünyanın İlk Üniversitesini ve Yaralı Leylekler Hastanesini Kuranlar",
    era: "859 (Fes, Fas) & 19. Yüzyıl (Bursa, Gurabahane-i Laklakan)",
    location: "Fes & Bursa",
    visualMode: "CHARACTER_PORTRAIT",
    coverImage: "assets/images/fatima_fihri_hero.png",
    crisisImage: "assets/images/leylek_vakfi.png",
    images: {
      cover: "assets/images/fatima_fihri_hero.png",
      crisis: "assets/images/leylek_vakfi.png",
      artifact: "assets/images/artifact_qarawiyyin_astrolabe.png",
    },
    accentColor: "#10B981",
    secondaryColor: "#F59E0B",
    badgeText: "Karaviyyin, Vakıf & Şefkat",
    summary:
      "Fas'ta tüm mirasıyla dünyanın ilk üniversitesi Karaviyyin'i kuran Fatıma el-Fihrî ve göç yolunda yaralanan kuşlar için dünyanın ilk leylek hastanesi Gurabahane-i Laklakan'ı kuran Osmanlı merhamet vakıfları.",
    shortBio:
      "Fas'ta tüm mirasıyla dünyanın ilk üniversitesi Karaviyyin'i kuran Fatıma el-Fihrî ve göç yolunda yaralanan kuşlar için dünyanın ilk leylek hastanesi Gurabahane-i Laklakan'ı kuran Osmanlı merhamet vakıfları.",
    chapters: [
      // ------------------------------------------------------------------------
      // BÖLÜM 1: DÜNYANIN İLK ÜNİVERSİTESİ KARAVİYYİN (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "medeniyet-mimarlari-ch1",
        heroId: "medeniyet-mimarlari",
        chapterNumber: 1,
        title: "Dünyanın İlk Üniversitesi Karaviyyin",
        subtitle: "En kalıcı miras, insanlığa bırakılan ilim yuvasıdır",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "mimari-ch1-s1",
            sceneNumber: 1,
            title: "Kayravan'dan Fes Şehrine Göç",
            narration:
              "Dokuzuncu yüzyılın ortalarında Kuzey Afrika'nın kalbindeki Fes şehri, dört bir yandan gelen ilim yolcuları, zanaatkârlar ve kervanlarla dolup taşıyordu. Tunus'un Kayravan şehrinden Fes'e göç eden Muhammed el-Fihrî, dürüst ticaretiyle büyük bir servet kazanmış ve iki kızı Fatıma ile Meryem'i en güzel şekilde yetiştirmişti. Genç Fatıma çocukluğundan beri kitaplara, mimariye ve yıldız ilmine büyük bir merak duyuyordu.\n\nFes şehrinin güneşli avlusunda yükselen beyaz mermer sütunlar ve at nalı kemerler, bir kadının sabır ve vizyonla kurduğu dünyanın ilk üniversitesini müjdeliyordu. O an Fes şehrinde yükselen Karaviyyin Üniversitesi avlusunda ve Bursa Göçmen Leylekler Hastanesi'nde hissedilen servetini ve emeğini tüm canlıların eğitimine ve şifasına adayan kuşatıcı bir vakıf merhameti, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Dokuzuncu yüzyılın ortalarında Kuzey Afrika'nın kalbindeki Fes şehri, dört bir yandan gelen ilim yolcuları, zanaatkârlar ve kervanlarla dolup taşıyordu. Tunus'un Kayravan şehrinden Fes'e göç eden Muhammed el-Fihrî, dürüst ticaretiyle büyük bir servet kazanmış ve iki kızı Fatıma ile Meryem'i en güzel şekilde yetiştirmişti. Genç Fatıma çocukluğundan beri kitaplara, mimariye ve yıldız ilmine büyük bir merak duyuyordu.\n\nFes şehrinin güneşli avlusunda yükselen beyaz mermer sütunlar ve at nalı kemerler, bir kadının sabır ve vizyonla kurduğu dünyanın ilk üniversitesini müjdeliyordu. O an Fes şehrinde yükselen Karaviyyin Üniversitesi avlusunda ve Bursa Göçmen Leylekler Hastanesi'nde hissedilen servetini ve emeğini tüm canlıların eğitimine ve şifasına adayan kuşatıcı bir vakıf merhameti, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Fatıma el-Fihrî",
            dialogue:
              "Babamız bize altından daha kıymetli bir şey öğretti: İnsanlara faydası dokunmayan servet, sahibine sadece yüktür.",
            historicalNote:
              "Bunu Biliyor muydun? Fatıma el-Fihrî doğduğu Kayravan şehrine nispetle kurduğu külliyeye 'Karaviyyin' (Kayravanlıların Yeri) adını vermiştir.",
            imagePath: "assets/images/fatima_fihri_hero.png",
            imageKey: "assets/images/fatima_fihri_hero.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Güneşli Karaviyyin avlusunda elinde mimari planlar tutan Fatıma el-Fihrî.",
          },
          {
            id: "mimari-ch1-s2",
            sceneNumber: 2,
            title: "Hayal Edilemeyecek Bir Miras",
            narration:
              "Yıl 859 olduğunda babası ve eşinin vefatıyla Fatıma el-Fihrî ve kız kardeşi Meryem'e hayal bile edilemeyecek büyüklükte bir altın mirası kaldı. Şehirdeki zengin tüccarlar onların kendilerine mermer saraylar yaptıracağını, ipek kumaşlar ve mücevherler alacağını konuşuyordu. Ancak Fatıma penceresinden dışarı baktığında dar sokaklarda ders çalışmak için gölge bir köşe arayan genç öğrencileri görüyordu.\n\nKimseye yük olmamak için inşaat toprağını bile kendi bahçesinden çıkaran Fatıma el-Fihrî, on sekiz yıl süren emeğiyle insanlığa sönmeyen bir ilim meşalesi armağan ediyordu. Tarihin bu unutulmaz dönemeç noktasında, servetini ve emeğini tüm canlıların eğitimine ve şifasına adayan kuşatıcı bir vakıf merhameti sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Yıl 859 olduğunda babası ve eşinin vefatıyla Fatıma el-Fihrî ve kız kardeşi Meryem'e hayal bile edilemeyecek büyüklükte bir altın mirası kaldı. Şehirdeki zengin tüccarlar onların kendilerine mermer saraylar yaptıracağını, ipek kumaşlar ve mücevherler alacağını konuşuyordu. Ancak Fatıma penceresinden dışarı baktığında dar sokaklarda ders çalışmak için gölge bir köşe arayan genç öğrencileri görüyordu.\n\nKimseye yük olmamak için inşaat toprağını bile kendi bahçesinden çıkaran Fatıma el-Fihrî, on sekiz yıl süren emeğiyle insanlığa sönmeyen bir ilim meşalesi armağan ediyordu. Tarihin bu unutulmaz dönemeç noktasında, servetini ve emeğini tüm canlıların eğitimine ve şifasına adayan kuşatıcı bir vakıf merhameti sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Meryem el-Fihrî",
            dialogue:
              "Kardeşim Fatıma, elimizdeki bu büyük emaneti öyle bir hayra dönüştürelim ki bizden asırlar sonra bile kapısından ilim ve dua eksilmesin!",
            historicalNote:
              "Bunu Biliyor muydun? Fatıma el-Fihrî Karaviyyin Külliyesi'ni kurarken, kız kardeşi Meryem el-Fihrî de Fes şehrindeki bir diğer büyük eser olan Endülüs Camii'ni inşa ettirmiştir!",
            imagePath: "assets/images/fatima_s1_qarawiyyin_foundation.png",
            imageKey: "assets/images/fatima_s1_qarawiyyin_foundation.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Fes şehrinin kemerli avluları ve kitap okuyan talebeler.",
          },
          {
            id: "mimari-ch1-s3",
            sceneNumber: 3,
            title: "Büyük Karar: Bilgi Kalesi",
            narration:
              "Fatıma el-Fihrî mirasının tek bir kuruşunu bile şahsi lüksü için harcamamaya karar verdi. Fes şehrinin tam merkezinde geniş bir bahçe ve arazi satın aldı. Amacı sadece ibadet edilen bir mescit değil; içinde kütüphanesi, ders halkaları, astronomi gözlem araçları ve öğrenci odaları bulunan dev bir ilim külliyesi ve üniversite kurmaktı!\n\nBursa'daki çınar ve servi ağaçlarının gölgesinde kurulan Gurabahane-i Laklakan avlusunda, kanadı sarılmış göçmen bir leyleğe uzatılan su kabı merhametin sınır tanımadığını gösteriyordu. Çevredeki her detay, Fes şehrinde yükselen Karaviyyin Üniversitesi avlusunda ve Bursa Göçmen Leylekler Hastanesi'nde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Fatıma el-Fihrî mirasının tek bir kuruşunu bile şahsi lüksü için harcamamaya karar verdi. Fes şehrinin tam merkezinde geniş bir bahçe ve arazi satın aldı. Amacı sadece ibadet edilen bir mescit değil; içinde kütüphanesi, ders halkaları, astronomi gözlem araçları ve öğrenci odaları bulunan dev bir ilim külliyesi ve üniversite kurmaktı!\n\nBursa'daki çınar ve servi ağaçlarının gölgesinde kurulan Gurabahane-i Laklakan avlusunda, kanadı sarılmış göçmen bir leyleğe uzatılan su kabı merhametin sınır tanımadığını gösteriyordu. Çevredeki her detay, Fes şehrinde yükselen Karaviyyin Üniversitesi avlusunda ve Bursa Göçmen Leylekler Hastanesi'nde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Fatıma el-Fihrî",
            dialogue:
              "Burada kurulacak ilim yuvasının kapısı doğudan ve batıdan gelen her öğrenciye ücretsiz olarak açık olacak!",
            historicalNote:
              "Bunu Biliyor muydun? İslam medeniyetinde eğitim vakıflar aracılığıyla tamamen ücretsiz verilir, öğrencilerin yemek ve barınma ihtiyaçları bile vakıftan karşılanırdı.",
            imagePath: "assets/images/fatima_fihri_courtyard.png",
            imageKey: "assets/images/fatima_fihri_courtyard.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Mimari rulolar ve geometrik çini tasarımları.",
          },
          {
            id: "mimari-ch1-s4",
            sceneNumber: 4,
            title: "Komşuları Rahatsız Etmeyen Şantiye Sırrı",
            narration:
              "859 yılının Ramazan ayında inşaat başladı. Ancak Fes sokakları dar ve kalabalıktı; dışarıdan yüzlerce deve ve katırla taş, kum ve kireç taşımak hem şehir halkını toz ve gürültüyle rahatsız edecek hem de esnafın yolunu kapatacaktı. Başmimar bu sorunu Fatıma el-Fihrî'ye anlattığında, genç vizyoner herkesi hayran bırakan bir mühendislik ve nezaket çözümü buldu.\n\nİnsandan göçmen kuşlara kadar her canlıyı emanet bilen bu vakıf medeniyeti, gerçek iyiliğin yeryüzündeki tüm varlıkları şefkatle kucaklamak olduğunu fısıldıyordu. Sabır, dikkat ve samimiyetle atılan bu adım, servetini ve emeğini tüm canlıların eğitimine ve şifasına adayan kuşatıcı bir vakıf merhameti ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "859 yılının Ramazan ayında inşaat başladı. Ancak Fes sokakları dar ve kalabalıktı; dışarıdan yüzlerce deve ve katırla taş, kum ve kireç taşımak hem şehir halkını toz ve gürültüyle rahatsız edecek hem de esnafın yolunu kapatacaktı. Başmimar bu sorunu Fatıma el-Fihrî'ye anlattığında, genç vizyoner herkesi hayran bırakan bir mühendislik ve nezaket çözümü buldu.\n\nİnsandan göçmen kuşlara kadar her canlıyı emanet bilen bu vakıf medeniyeti, gerçek iyiliğin yeryüzündeki tüm varlıkları şefkatle kucaklamak olduğunu fısıldıyordu. Sabır, dikkat ve samimiyetle atılan bu adım, servetini ve emeğini tüm canlıların eğitimine ve şifasına adayan kuşatıcı bir vakıf merhameti ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Fatıma el-Fihrî",
            dialogue:
              "İyilik yaparken komşularımıza zahmet veremeyiz! İnşaat için gereken taşı, toprağı ve kumu kendi arazimizin altından çıkaracağız; açılan çukuru da avlunun su sarnıcı ve şadırvanı yapacağız!",
            historicalNote:
              "Bunu Biliyor muydun? Tarihçi İbn Ebî Zer'in 'Ravzü'l-Kırtâs' adlı eserinde yazdığına göre Fatıma el-Fihrî inşaatın tüm taş, toprak ve suyunu bizzat satın aldığı arazinin içinden çıkarmıştır!",
            imagePath: "assets/images/ibn_sina_s3_quarantine_courtyard.png",
            imageKey: "assets/images/ibn_sina_s3_quarantine_courtyard.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Avlunun ortasındaki mermer şadırvan ve kemerler.",
            midDecision: {
              title: "ARA KARAR: İnşaat Taşlarını Nereden Çıkarırsın?",
              question:
                "Büyük bir üniversite inşa ediyorsun ama dar sokaklardan taş arabaları geçerse bütün mahalle toz ve gürültü içinde kalacak. Ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "İnşaat önemli olduğu için sokakları kapatır, taşları dışarıdan getirtirim.",
                  feedback:
                    "Halka zahmet vererek yapılan iş, Fatıma el-Fihrî'nin ince düşüncesine uymaz.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Kimse rahatsız olmasın diye taş ve kumu bizzat kendi inşaat arazimizin altından kazdırır, açılan havuzu da avlunun şadırvanı ve su kaynağı yaparım!",
                  feedback:
                    "Harika karar! Fatıma el-Fihrî hem mahalle halkını rahatsız etmedi hem de avlunun ortasında serin bir şadırvan havuzu kazandı.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "mimari-ch1-s5",
            sceneNumber: 5,
            title: "Şantiyenin Başında Duran Mimar Ruh",
            narration:
              "Fatıma el-Fihrî inşaatı uzaktan izlemedi; yıllar süren yapım ve genişletme çalışmaları boyunca her gün şantiyeye gelerek ustalarla, taş işçileriyle ve hattatlarla bizzat ilgilendi. At nalı kemerlerin dengesini, akustik ses dağılımını ve avludaki turkuaz-beyaz 'Zellij' çinilerinin geometrik uyumunu tek tek denetledi. Hatta inşaat bitene kadar şükür niyetiyle gündüzleri oruç tuttu.\n\nFes şehrinin güneşli avlusunda yükselen beyaz mermer sütunlar ve at nalı kemerler, bir kadının sabır ve vizyonla kurduğu dünyanın ilk üniversitesini müjdeliyordu. O an Fes şehrinde yükselen Karaviyyin Üniversitesi avlusunda ve Bursa Göçmen Leylekler Hastanesi'nde hissedilen servetini ve emeğini tüm canlıların eğitimine ve şifasına adayan kuşatıcı bir vakıf merhameti, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Fatıma el-Fihrî inşaatı uzaktan izlemedi; yıllar süren yapım ve genişletme çalışmaları boyunca her gün şantiyeye gelerek ustalarla, taş işçileriyle ve hattatlarla bizzat ilgilendi. At nalı kemerlerin dengesini, akustik ses dağılımını ve avludaki turkuaz-beyaz 'Zellij' çinilerinin geometrik uyumunu tek tek denetledi. Hatta inşaat bitene kadar şükür niyetiyle gündüzleri oruç tuttu.\n\nFes şehrinin güneşli avlusunda yükselen beyaz mermer sütunlar ve at nalı kemerler, bir kadının sabır ve vizyonla kurduğu dünyanın ilk üniversitesini müjdeliyordu. O an Fes şehrinde yükselen Karaviyyin Üniversitesi avlusunda ve Bursa Göçmen Leylekler Hastanesi'nde hissedilen servetini ve emeğini tüm canlıların eğitimine ve şifasına adayan kuşatıcı bir vakıf merhameti, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Başmimar Ustası",
            dialogue:
              "Hanımefendi, kemerlerin açısını öyle güzel planladınız ki avlu hem yaz sıcağında serin kalıyor hem de hocanın sesi en arka sıraya kadar yankılanmadan ulaşıyor!",
            historicalNote:
              "Bunu Biliyor muydun? Fas mimarisindeki geometrik 'Zellij' çinileri, matematikteki simetri ve sonsuzluk kavramlarını sanata dönüştüren eşsiz bir gelenektir.",
            imagePath: "assets/images/harizmi_s1_house_of_wisdom.png",
            imageKey: "assets/images/harizmi_s1_house_of_wisdom.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Güneş ışığında parlayan beyaz kemerler ve Fatıma el-Fihrî.",
          },
          {
            id: "mimari-ch1-s6",
            sceneNumber: 6,
            title: "Kürsüler, Usturlaplar ve İlk İcazetler",
            narration:
              "Karaviyyin Külliyesi tamamlandığında sütunların etrafında 'Halka' adı verilen ders kürsüleri kuruldu. Burada sadece dini ilimler değil; matematik, astronomi, tıp, kimya, coğrafya, mantık ve edebiyat dersleri verilmeye başlandı! Öğrenciler bakır usturlaplarla yıldızların yüksekliğini ölçüyor, mezun olanlara ise bugünkü üniversite diplomasının atası olan 'İcâzetnâme' belgeleri veriliyordu.\n\nKimseye yük olmamak için inşaat toprağını bile kendi bahçesinden çıkaran Fatıma el-Fihrî, on sekiz yıl süren emeğiyle insanlığa sönmeyen bir ilim meşalesi armağan ediyordu. Tarihin bu unutulmaz dönemeç noktasında, servetini ve emeğini tüm canlıların eğitimine ve şifasına adayan kuşatıcı bir vakıf merhameti sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Karaviyyin Külliyesi tamamlandığında sütunların etrafında 'Halka' adı verilen ders kürsüleri kuruldu. Burada sadece dini ilimler değil; matematik, astronomi, tıp, kimya, coğrafya, mantık ve edebiyat dersleri verilmeye başlandı! Öğrenciler bakır usturlaplarla yıldızların yüksekliğini ölçüyor, mezun olanlara ise bugünkü üniversite diplomasının atası olan 'İcâzetnâme' belgeleri veriliyordu.\n\nKimseye yük olmamak için inşaat toprağını bile kendi bahçesinden çıkaran Fatıma el-Fihrî, on sekiz yıl süren emeğiyle insanlığa sönmeyen bir ilim meşalesi armağan ediyordu. Tarihin bu unutulmaz dönemeç noktasında, servetini ve emeğini tüm canlıların eğitimine ve şifasına adayan kuşatıcı bir vakıf merhameti sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Astronomi Müderrisi",
            dialogue:
              "Gençler, elinizdeki bu pirinç usturlapla güneşin ve yıldızların konumunu ölçerek hem namaz vakitlerini hem de denizcilerin yönünü hatasızca bulabilirsiniz!",
            historicalNote:
              "Bunu Biliyor muydun? Bugün dünyada üniversite mezunlarının giydiği 'cübbe' geleneği ve 'kürsü / diploma (icazet)' sistemi İslam medreselerinden Avrupa'ya geçmiştir!",
            imagePath: "assets/images/ibn_sina_s1_bukhara_library.png",
            imageKey: "assets/images/ibn_sina_s1_bukhara_library.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Kitaplıklar, el yazmaları ve pirinç usturlaplar.",
          },
          {
            id: "mimari-ch1-s7",
            sceneNumber: 7,
            title: "Dört Anahtarlı Tarihi Kütüphane",
            narration:
              "Külliye büyüdükçe içine binlerce nadir el yazması eserin korunduğu muazzam Karaviyyin Kütüphanesi eklendi. Bu kütüphanedeki kitaplar o kadar kıymetliydi ki, ana hazine odasının meşe kapısına dört ayrı demir kilit takıldı! Her bir kilidin anahtarı farklı bir güvenilir alime teslim edildi; böylece dört görevli aynı anda kapının önünde buluşmadan kimse tek başına nadir kitaplara dokunamıyordu.\n\nBursa'daki çınar ve servi ağaçlarının gölgesinde kurulan Gurabahane-i Laklakan avlusunda, kanadı sarılmış göçmen bir leyleğe uzatılan su kabı merhametin sınır tanımadığını gösteriyordu. Çevredeki her detay, Fes şehrinde yükselen Karaviyyin Üniversitesi avlusunda ve Bursa Göçmen Leylekler Hastanesi'nde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Külliye büyüdükçe içine binlerce nadir el yazması eserin korunduğu muazzam Karaviyyin Kütüphanesi eklendi. Bu kütüphanedeki kitaplar o kadar kıymetliydi ki, ana hazine odasının meşe kapısına dört ayrı demir kilit takıldı! Her bir kilidin anahtarı farklı bir güvenilir alime teslim edildi; böylece dört görevli aynı anda kapının önünde buluşmadan kimse tek başına nadir kitaplara dokunamıyordu.\n\nBursa'daki çınar ve servi ağaçlarının gölgesinde kurulan Gurabahane-i Laklakan avlusunda, kanadı sarılmış göçmen bir leyleğe uzatılan su kabı merhametin sınır tanımadığını gösteriyordu. Çevredeki her detay, Fes şehrinde yükselen Karaviyyin Üniversitesi avlusunda ve Bursa Göçmen Leylekler Hastanesi'nde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Karaviyyin Kütüphane Hafızı",
            dialogue:
              "Bu kapının dört anahtarı dört ayrı emindedir; çünkü buradaki ilim hazinesi altınlardan çok daha değerlidir!",
            historicalNote:
              "Bunu Biliyor muydun? Karaviyyin Kütüphanesi bugün hâlâ açıktır ve içinde İbn Haldun'un kendi el yazısıyla imzaladığı orijinal 'Mukaddime' nüshası gibi paha biçilemez eserler bulunmaktadır!",
            imagePath: "assets/images/meryem_el_icliyye_astrolabe.png",
            imageKey: "assets/images/meryem_el_icliyye_astrolabe.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Güneşli avlu ve kütüphane rafları.",
          },
          {
            id: "mimari-ch1-s8",
            sceneNumber: 8,
            title: "Avrupa'dan Gelen Öğrenciler",
            narration:
              "Karaviyyin Üniversitesi'nin ünü kısa sürede Akdeniz'i aşarak Avrupa'ya kadar yayıldı. İslam dünyasının en büyük tarih felsefecisi İbn Haldun, filozof İbn Rüşd, tıp bilgini İbn Meymun ve coğrafyacı İdrisî burada ders aldı veya ders verdi. Hatta Avrupa'ya 0'dan 9'a kadar olan rakamları ve usturlap kullanımını tanıtan Gerbert d'Aurillac bile Fes'teki bu ilim ortamından faydalandı.\n\nİnsandan göçmen kuşlara kadar her canlıyı emanet bilen bu vakıf medeniyeti, gerçek iyiliğin yeryüzündeki tüm varlıkları şefkatle kucaklamak olduğunu fısıldıyordu. Sabır, dikkat ve samimiyetle atılan bu adım, servetini ve emeğini tüm canlıların eğitimine ve şifasına adayan kuşatıcı bir vakıf merhameti ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Karaviyyin Üniversitesi'nin ünü kısa sürede Akdeniz'i aşarak Avrupa'ya kadar yayıldı. İslam dünyasının en büyük tarih felsefecisi İbn Haldun, filozof İbn Rüşd, tıp bilgini İbn Meymun ve coğrafyacı İdrisî burada ders aldı veya ders verdi. Hatta Avrupa'ya 0'dan 9'a kadar olan rakamları ve usturlap kullanımını tanıtan Gerbert d'Aurillac bile Fes'teki bu ilim ortamından faydalandı.\n\nİnsandan göçmen kuşlara kadar her canlıyı emanet bilen bu vakıf medeniyeti, gerçek iyiliğin yeryüzündeki tüm varlıkları şefkatle kucaklamak olduğunu fısıldıyordu. Sabır, dikkat ve samimiyetle atılan bu adım, servetini ve emeğini tüm canlıların eğitimine ve şifasına adayan kuşatıcı bir vakıf merhameti ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Fatıma el-Fihrî",
            dialogue:
              "İlim güneş gibidir; tek bir şehrin malı olmaz, doğudan batıya bütün insanlığı aydınlatır!",
            historicalNote:
              "Bunu Biliyor muydun? Avrupa'nın en eski üniversitesi olan Bologna (1088) ve Oxford'dan (1096) tam 230 yıl önce Fatıma el-Fihrî Karaviyyin Üniversitesi'ni kurmuştur!",
            imagePath: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            imageKey: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Avluda ilim halkaları.",
          },
          {
            id: "mimari-ch1-s9",
            sceneNumber: 9,
            title: "1100 Yıldır Sönmeyen İlim Meşalesi",
            narration:
              "Fatıma el-Fihrî'nin 859 yılında kurduğu Karaviyyin Üniversitesi, aradan geçen bin yüz yılı aşkın zamana rağmen kapılarını hiç kapatmadı ve UNESCO ile Guinness Dünya Rekorları tarafından 'dünyanın kesintisiz eğitim veren ilk ve en eski üniversitesi' olarak tescillendi! Genç bir kadının iyilik ve bilim vizyonu, insanlık tarihinin en parlak eğitim kalesine dönüştü.\n\nFes şehrinin güneşli avlusunda yükselen beyaz mermer sütunlar ve at nalı kemerler, bir kadının sabır ve vizyonla kurduğu dünyanın ilk üniversitesini müjdeliyordu. O an Fes şehrinde yükselen Karaviyyin Üniversitesi avlusunda ve Bursa Göçmen Leylekler Hastanesi'nde hissedilen servetini ve emeğini tüm canlıların eğitimine ve şifasına adayan kuşatıcı bir vakıf merhameti, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Fatıma el-Fihrî'nin 859 yılında kurduğu Karaviyyin Üniversitesi, aradan geçen bin yüz yılı aşkın zamana rağmen kapılarını hiç kapatmadı ve UNESCO ile Guinness Dünya Rekorları tarafından 'dünyanın kesintisiz eğitim veren ilk ve en eski üniversitesi' olarak tescillendi! Genç bir kadının iyilik ve bilim vizyonu, insanlık tarihinin en parlak eğitim kalesine dönüştü.\n\nFes şehrinin güneşli avlusunda yükselen beyaz mermer sütunlar ve at nalı kemerler, bir kadının sabır ve vizyonla kurduğu dünyanın ilk üniversitesini müjdeliyordu. O an Fes şehrinde yükselen Karaviyyin Üniversitesi avlusunda ve Bursa Göçmen Leylekler Hastanesi'nde hissedilen servetini ve emeğini tüm canlıların eğitimine ve şifasına adayan kuşatıcı bir vakıf merhameti, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Fatıma el-Fihrî",
            dialogue:
              "Gerçek zenginlik biriktirilen altında değil, insanlığa ışık tutacak bilge nesiller yetiştirmektedir!",
            historicalNote:
              "Bunu Biliyor muydun? Fatıma el-Fihrî Fes halkı tarafından sevgi ve saygıyla 'Ümmü'l-Benîn' (Çocukların ve Öğrencilerin Annesi) unvanıyla anılmıştır.",
            imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
            imageKey: "assets/images/artifact_qarawiyyin_astrolabe.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Bilge vizyoner Fatıma el-Fihrî.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Elinde devasa bir servet var ve önünde bütün hayatın duruyor. Bu mirasla ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Kendime yüksek duvarlı, kimsenin giremeyeceği muazzam bir köşk yaptırırım.",
              feedback:
                "Köşkler yıkılır gider, geriye kimsenin hatırlamadığı taşlar kalır.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Altınları sandıklara kilitleyip hiç harcamadan saklarım.",
              feedback:
                "İnsanlığa faydası olmayan servet, sahibine sadece yük olur.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Mirasımın tek kuruşuna bile dokunmadan dünyanın her yerinden öğrencilerin astronomi, tıp ve matematik öğreneceği Karaviyyin Külliyesi ve Üniversitesi'ni kurarım!",
              feedback:
                "Tarihi Hakikat! Paylaşılan bilgi ve iyilik, asırlar boyu sönmeyen bir meşaleye dönüşür!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Fatıma el-Fihrî, inşaat tamamlanana kadar her gün bizzat şantiyenin başında durdu. Kurduğu Karaviyyin Üniversitesi, UNESCO ve Guinness kayıtlarına göre dünyanın kesintisiz eğitim veren ilk ve en eski üniversitesi oldu!",
          quoteHighlight:
            "Gerçek zenginlik biriktirilen altında değil, yetiştirilen bilge insanlardadır.",
        },
        rewardArtifact: {
          id: "artifact-qarawiyyin-astrolabe",
          name: "Karaviyyin Usturlabı ve Altın Anahtar",
          heroId: "medeniyet-mimarlari",
          chapterId: "medeniyet-mimarlari-ch1",
          imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
          pointType: "IHSAN_MEDENIYET",
          pointLabel: "İhsan ve Medeniyet Puanı",
          points: 50,
          unlockedTitle: "Bilgi Mimarı",
          shortDescription:
            "Karaviyyin Üniversitesi'nde yıldızların konumunu hesaplamakta kullanılan pirinç usturlap ve tarihi kütüphanenin sembolik altın anahtarı.",
          historicalNote:
            "859 yılında kurulan Karaviyyin Üniversitesi'nde sadece dini ilimler değil; astronomi, tıp, matematik, coğrafya ve diller de ücretsiz olarak okutulmuştur.",
          accentColor: "#10B981",
          hotspots: [
            {
              id: "astrolabe-dial",
              xPercent: 45,
              yPercent: 38,
              title: "Gökyüzü Pusulası: Usturlap",
              secretFact:
                "Karaviyyin öğrencileri usturlap sayesinde hem gece yıldızlara bakarak saati ve yönü buluyor hem de gezegenlerin yörüngelerini hesaplıyordu!",
            },
            {
              id: "library-key",
              xPercent: 64,
              yPercent: 68,
              title: "Dört Kilitli Kütüphane Anahtarı",
              secretFact:
                "Karaviyyin Kütüphanesi'nin kapısında 4 ayrı kilit vardı ve her anahtar farklı bir güvenilir görevlide dururdu; kapı ancak dördü bir araya geldiğinde açılırdı!",
            },
            {
              id: "courtyard-quarry",
              xPercent: 32,
              yPercent: 72,
              title: "Şantiye Toprağı Sırrı",
              secretFact:
                "Fatıma el-Fihrî şehirde kimseye gürültü ve toz zahmeti vermemek için inşaat taşlarını ve kumu dışarıdan taşımak yerine doğrudan külliyenin kendi arazisinden çıkardı!",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Fatıma el-Fihrî elindeki büyük servetle sadece kendisini mutlu edecek şeyler alsaydı bugün onu tanıyor olur muyduk?",
          "Senin elinde büyük bir imkân olsaydı, yaşadığımız şehirde çocuklar için nasıl bir okul, kütüphane veya bilim merkezi kurmak isterdin?",
          "Öğrendiğimiz güzel bir bilgiyi arkadaşlarımızla paylaşmak neden onu tek başımıza saklamaktan daha değerlidir?",
        ],
      },

      // ------------------------------------------------------------------------
      // BÖLÜM 2: YARALI LEYLEKLER HASTANESİ GURABAHANE-İ LAKLAKAN (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "medeniyet-mimarlari-ch2",
        heroId: "medeniyet-mimarlari",
        chapterNumber: 2,
        title: "Yaralı Leylekler Hastanesi Gurabahane-i Laklakan",
        subtitle: "Göç yolunda kanadı kırılan kuşlara bile hastane kuran şefkat medeniyeti",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "leylek-ch2-s1",
            sceneNumber: 1,
            title: "Cami Duvarlarındaki Minyatür Kuş Sarayları",
            narration:
              "Osmanlı şehirlerinde yürüyen bir çocuk başını camilerin, medreselerin ve kütüphanelerin güneş gören taş duvarlarına kaldırdığında çok sevimli bir manzarayla karşılaşırdı: Taş ustaları duvarların rüzgâr almayan sıcak cephelerine serçeler, güvercinler ve kırlangıçlar üşümesin diye minyatür kubbeli, balkonlu ve su çanaklı 'Kuş Köşkleri' (Kuş Evleri) oymuştu! Çünkü bu medeniyette şehirler sadece insanların değil, kanatlı misafirlerin de yuvasıydı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Osmanlı şehirlerinde yürüyen bir çocuk başını camilerin, medreselerin ve kütüphanelerin güneş gören taş duvarlarına kaldırdığında çok sevimli bir manzarayla karşılaşırdı: Taş ustaları duvarların rüzgâr almayan sıcak cephelerine serçeler, güvercinler ve kırlangıçlar üşümesin diye minyatür kubbeli, balkonlu ve su çanaklı 'Kuş Köşkleri' (Kuş Evleri) oymuştu! Çünkü bu medeniyette şehirler sadece insanların değil, kanatlı misafirlerin de yuvasıydı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Bursalı Taş Ustası",
            dialogue:
              "Kışın kar yağdığında serçeler bu taş köşklerin içine sığınır; hem onlar sıcak bir yuva bulur hem de bizim kalbimiz merhametle ısınır!",
            historicalNote:
              "Bunu Biliyor muydun? 16. yüzyıldan itibaren Osmanlı mimarisinde yapılan 'Kuş Köşkleri', dünyada hayvan hakları ve doğa sevgisinin taşa işlenmiş en zarif örnekleridir!",
            imagePath: "assets/images/vakif_s1_stork_hospital_bursa.png",
            imageKey: "assets/images/vakif_s1_stork_hospital_bursa.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Taş kuş köşkleri ve avluda dinlenen beyaz leylekler.",
          },
          {
            id: "leylek-ch2-s2",
            sceneNumber: 2,
            title: "Sonbaharda Bursa Semalarından Geçen Göç Kervanı",
            narration:
              "Her yıl sonbahar geldiğinde Uludağ'ın eteklerindeki yemyeşil Bursa şehrinin üzerinden binlerce beyaz leylek sıcak Afrika ülkelerine doğru göç ederdi. Ancak binlerce kilometrelik bu zorlu yolculukta bazı yavru veya yaşlı leylekler fırtınada kanatlarından yaralanır, elektrik veya ağaç dallarına çarparak sürüden geri kalırdı! Sürü uçup gittiğinde yaralı leylekler yaklaşan dondurucu kışın ortasında çaresizce yerde kalıyordu.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Her yıl sonbahar geldiğinde Uludağ'ın eteklerindeki yemyeşil Bursa şehrinin üzerinden binlerce beyaz leylek sıcak Afrika ülkelerine doğru göç ederdi. Ancak binlerce kilometrelik bu zorlu yolculukta bazı yavru veya yaşlı leylekler fırtınada kanatlarından yaralanır, elektrik veya ağaç dallarına çarparak sürüden geri kalırdı! Sürü uçup gittiğinde yaralı leylekler yaklaşan dondurucu kışın ortasında çaresizce yerde kalıyordu.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Bursalı Küçük Çırak",
            dialogue:
              "Dede bak! Bütün leylek sürüsü güneye uçtu ama şu beyaz leyleğin kanadı incinmiş, uçamadığı için çınar ağacının altında tir tir titriyor!",
            historicalNote:
              "Bunu Biliyor muydun? Anadolu, Avrupa ile Afrika arasındaki en önemli kuş göç yollarının (Boğazlar ve Bursa hattının) tam kalbinde yer alır.",
            imagePath: "assets/images/leylek_vakfi.png",
            imageKey: "assets/images/leylek_vakfi.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Kanadı sarılı leylek ve şefkatli vakıf avlusu.",
          },
          {
            id: "leylek-ch2-s3",
            sceneNumber: 3,
            title: "Bursa Çarşısında Toplanan İyilik Meclisi",
            narration:
              "Kanadı kırık leyleklerin kış soğuğunda aç ve korumasız kalmasına Bursa halkının ve çarşı esnafının vicdanı razı olmadı. Hocaalizade ve Setbaşı mahallesindeki hayırseverler ile hekimler bir araya geldi. İslam medeniyetinde asırlardır yaşatılan bir geleneği daha da büyütmeye karar verdiler: Nasıl ki insanlar için darüşşifalar (hastaneler) varsa, göç yolunda yaralanıp garip kalan kuşlar için de resmi bir vakıf hastanesi kurulacaktı!\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Kanadı kırık leyleklerin kış soğuğunda aç ve korumasız kalmasına Bursa halkının ve çarşı esnafının vicdanı razı olmadı. Hocaalizade ve Setbaşı mahallesindeki hayırseverler ile hekimler bir araya geldi. İslam medeniyetinde asırlardır yaşatılan bir geleneği daha da büyütmeye karar verdiler: Nasıl ki insanlar için darüşşifalar (hastaneler) varsa, göç yolunda yaralanıp garip kalan kuşlar için de resmi bir vakıf hastanesi kurulacaktı!\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Bursa Vakıf Mütevellisi",
            dialogue:
              "Yeryüzündekilere merhamet etmeyene göktekiler merhamet etmez! Sürüden ayrı düşmüş bu dilsiz misafirlerimiz için özel bir şifahane kuruyoruz!",
            historicalNote:
              "Bunu Biliyor muydun? Osmanlı'da dağ başlarına kışın aç kalan kurtlar ve kuşlar için yem bırakan, yaşlı yük atlarını emekliye ayırıp besleyen yüzlerce resmi hayvan vakfı kurulmuştur!",
            imagePath: "assets/images/ibn_sina_s3_quarantine_courtyard.png",
            imageKey: "assets/images/ibn_sina_s3_quarantine_courtyard.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Güneşli Bursa avlusunda leyleklerin bakımı.",
          },
          {
            id: "leylek-ch2-s4",
            sceneNumber: 4,
            title: "Dünyanın İlk Kuş Hastanesi: 'Gurabahane-i Laklakan'!",
            narration:
              "Bursa'da kurulan bu şefkat yuvasına çok anlamlı bir isim verildi: 'Gurabahane-i Laklakan' yani 'Garip (Memleketinden Uzak Kalmış) Leylekler Evi ve Hastanesi'! Geniş ve güneşli bir bahçe içine ahşap barınaklar, mermer su havuzları ve tedavi odaları yapıldı. Şehrin herhangi bir yerinde kanadı kırık bir leylek, karga veya baykuş gören herkes, kuşu kucağına alıp doğruca bu hastaneye getiriyordu.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Bursa'da kurulan bu şefkat yuvasına çok anlamlı bir isim verildi: 'Gurabahane-i Laklakan' yani 'Garip (Memleketinden Uzak Kalmış) Leylekler Evi ve Hastanesi'! Geniş ve güneşli bir bahçe içine ahşap barınaklar, mermer su havuzları ve tedavi odaları yapıldı. Şehrin herhangi bir yerinde kanadı kırık bir leylek, karga veya baykuş gören herkes, kuşu kucağına alıp doğruca bu hastaneye getiriyordu.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Kuş Hekimi (Baytar Ustası)",
            dialogue:
              "Hoş geldin uzun bacaklı misafirimiz! Şimdi kırık kanadını ince tahtalarla ve temiz sargılarla saracağız; bahara kadar bizim misafirimizsin!",
            historicalNote:
              "Bunu Biliyor muydun? Bursa'daki 'Gurabahane-i Laklakan', dünya tarihinde göçmen kuşlar için kurulmuş ilk uzman hayvan hastanesi olarak kabul edilmektedir!",
            imagePath: "assets/images/ibn_sina_hospital.png",
            imageKey: "assets/images/ibn_sina_hospital.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Gurabahane-i Laklakan avlusunda kanadı sargılı leylekler.",
            midDecision: {
              title: "ARA KARAR: Göç Yolunda Yaralanan Kuş İçin Ne Yaparsın?",
              question:
                "Sonbaharda sürüyle göç ederken kanadı incinen ve uçamadığı için kış soğuğunda tek başına kalan bir leylek buldun. Ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Doğanın kanunu böyledir deyip kendi haline bırakırım.",
                  feedback:
                    "Yardıma muhtaç bir canlıya sırt çevirmek merhamet medeniyetimize yakışmaz!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Yaralı leyleği şefkatle alıp 'Gurabahane-i Laklakan' (Yaralı Leylekler Hastanesi) vakfına götürürüm; kanadını tedavi ettirip baharda sürüsüne kavuşana kadar beslenmesini sağlarım!",
                  feedback:
                    "Harika! Osmanlı insanı yaralı göçmen kuşları bile sahipsiz bırakmayıp onlar için vakıf hastanesi kurdu!",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "leylek-ch2-s5",
            sceneNumber: 5,
            title: "Çarşı Esnafının Leylek Bütçesi",
            narration:
              "Peki kış boyunca hastanede kalan onlarca yaralı leyleğin ve kuşun günlük taze yiyecekleri, ilaçları ve bakıcılarının maaşı nereden karşılanıyordu? Bursa'daki çarşı esnafı ve vakıf kurucuları bunun için kalıcı bir gelir ayırmıştı! Hatta her sabah balıkçılar ve kasaplar tezgâhlarını açtığında en taze yiyeceklerden bir kısmını 'Bu da Gurabahane'deki garip leyleklerin hakkıdır!' diyerek vakıf görevlisine teslim ediyordu.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Peki kış boyunca hastanede kalan onlarca yaralı leyleğin ve kuşun günlük taze yiyecekleri, ilaçları ve bakıcılarının maaşı nereden karşılanıyordu? Bursa'daki çarşı esnafı ve vakıf kurucuları bunun için kalıcı bir gelir ayırmıştı! Hatta her sabah balıkçılar ve kasaplar tezgâhlarını açtığında en taze yiyeceklerden bir kısmını 'Bu da Gurabahane'deki garip leyleklerin hakkıdır!' diyerek vakıf görevlisine teslim ediyordu.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Bursalı Çarşı Esnafı",
            dialogue:
              "Bizim kazancımızın bereketi, kanadı kırık kuşlarla paylaştığımız bu lokmalardadır!",
            historicalNote:
              "Bunu Biliyor muydun? Bursa Belediyesi ve vakıf kayıtlarında 'Leyleklerin beslenmesi için ayrılan yıllık tahsisat (bütçe)' kalemleri resmi belgelerde yer almıştır!",
            imagePath: "assets/images/ali_s3_orphan_doorstep.png",
            imageKey: "assets/images/ali_s3_orphan_doorstep.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Mermer şadırvan yanında su ve yem kapları.",
          },
          {
            id: "leylek-ch2-s6",
            sceneNumber: 6,
            title: "Fransız Gezgin ve Yazarların Hayranlığı",
            narration:
              "On dokuzuncu yüzyılda ve yirminci yüzyılın başlarında Bursa'yı ziyaret eden Avrupalı gezginler, diplomatlar ve ünlü edebiyatçı Ahmet Haşim, Setbaşı'ndaki bu leylek hastanesini gördüklerinde hayretten donakaldılar! Kendi ülkelerinde hayvanları koruma dernekleri bile henüz yeni tartışılırken, Anadolu'da kanadı kırık göçmen leylekler için özel doktoru ve bütçesi olan bir vakıf hastanesinin çalışıyor olması dünyaya örnek oldu.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "On dokuzuncu yüzyılda ve yirminci yüzyılın başlarında Bursa'yı ziyaret eden Avrupalı gezginler, diplomatlar ve ünlü edebiyatçı Ahmet Haşim, Setbaşı'ndaki bu leylek hastanesini gördüklerinde hayretten donakaldılar! Kendi ülkelerinde hayvanları koruma dernekleri bile henüz yeni tartışılırken, Anadolu'da kanadı kırık göçmen leylekler için özel doktoru ve bütçesi olan bir vakıf hastanesinin çalışıyor olması dünyaya örnek oldu.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Yazar Ahmet Haşim",
            dialogue:
              "Bursa'da gördüğüm Gurabahane-i Laklakan, insan kalbinin incelikte ve şefkatte ulaşabileceği en yüksek zirvedir!",
            historicalNote:
              "Bunu Biliyor muydun? Türk edebiyatının usta yazarı Ahmet Haşim, 1928 yılında yayımlanan ünlü kitabına bu vakfa duyduğu hayranlıkla 'Gurabahane-i Laklakan' adını vermiştir!",
            imagePath: "assets/images/fatima_fihri_courtyard.png",
            imageKey: "assets/images/fatima_fihri_courtyard.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Selvi ağaçları altında şefkat yuvası.",
          },
          {
            id: "leylek-ch2-s7",
            sceneNumber: 7,
            title: "İlkbaharın Gelişi ve Gökyüzüne Dönüş!",
            narration:
              "Kış ayları boyunca Gurabahane-i Laklakan'ın sıcak yuvalarında özenle bakılan leyleklerin kırık kanatları yavaş yavaş kaynadı ve güçlendi. Mart ve Nisan aylarında Uludağ'ın karları eriyip gökyüzünde yeni bahar sürüleri belirdiğinde, hastanenin avlusu tatlı bir heyecanla dolardı. İyileşen leylekler gagalarını 'lak lak' diye birbirine vurarak bakıcılarına teşekkür edercesine kanatlarını açardı!\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Kış ayları boyunca Gurabahane-i Laklakan'ın sıcak yuvalarında özenle bakılan leyleklerin kırık kanatları yavaş yavaş kaynadı ve güçlendi. Mart ve Nisan aylarında Uludağ'ın karları eriyip gökyüzünde yeni bahar sürüleri belirdiğinde, hastanenin avlusu tatlı bir heyecanla dolardı. İyileşen leylekler gagalarını 'lak lak' diye birbirine vurarak bakıcılarına teşekkür edercesine kanatlarını açardı!\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Kuş Bakıcısı Dede",
            dialogue:
              "Yolunuz açık olsun beyaz kanatlı dostlarımız! Kanatlarınız artık sapasağlam; gökyüzündeki sürünüze kavuşma vaktidir!",
            historicalNote:
              "Bunu Biliyor muydun? Leylekler son derece sadık kuşlardır ve iyileştikten sonra her bahar tekrar aynı çatıdaki yuvalarına geri dönerler!",
            imagePath: "assets/images/ebubekir_s3_clean_house.png",
            imageKey: "assets/images/ebubekir_s3_clean_house.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "İyileşip gökyüzüne kanat açmaya hazırlanan leylekler.",
          },
          {
            id: "leylek-ch2-s8",
            sceneNumber: 8,
            title: "İnsana, İlime ve Doğaya Uzanan Vakıf Köprüsü",
            narration:
              "Fas'ta tüm servetiyle dünyanın ilk üniversitesi Karaviyyin'i kuran Fatıma el-Fihrî'den, Şam'da çocukların kırdığı tabakları yenileyen vakıflara ve Bursa'da yaralı leylekleri iyileştiren Gurabahane-i Laklakan'a kadar İslam medeniyeti tek bir büyük ilkeyle yükselmişti: İyilik (İhsan), sadece tanıdığın insanlara değil; yeryüzündeki her öğrenciye, her yolcuya ve her canlıya karşılıksız şefkat göstermektir.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Fas'ta tüm servetiyle dünyanın ilk üniversitesi Karaviyyin'i kuran Fatıma el-Fihrî'den, Şam'da çocukların kırdığı tabakları yenileyen vakıflara ve Bursa'da yaralı leylekleri iyileştiren Gurabahane-i Laklakan'a kadar İslam medeniyeti tek bir büyük ilkeyle yükselmişti: İyilik (İhsan), sadece tanıdığın insanlara değil; yeryüzündeki her öğrenciye, her yolcuya ve her canlıya karşılıksız şefkat göstermektir.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Fatıma el-Fihrî",
            dialogue:
              "Bir medeniyetin gerçek büyüklüğü; gençlerine açtığı kütüphanelerle ve kanadı kırık bir kuşa gösterdiği merhametle ölçülür!",
            historicalNote:
              "Bunu Biliyor muydun? Bursa'daki tarihi Gurabahane-i Laklakan binası bugün restore edilerek tekrar 'Leylek Evi ve Doğa Müzesi' olarak yaşatılmaktadır!",
            imagePath: "assets/images/artifact_justice_lantern.png",
            imageKey: "assets/images/artifact_justice_lantern.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Medeniyet ve iyilik mimarlarının mirası.",
          },
          {
            id: "leylek-ch2-s9",
            sceneNumber: 9,
            title: "Yeni Nesil İyilik İz Sürücüleri",
            narration:
              "Bugün cami duvarlarındaki taş kuş köşklerine veya gökyüzünde süzülen leyleklere baktığımızda, atalarımızın bize bıraktığı o sıcacık merhamet emanetini görürüz. Şimdi bu iyilik, bilim ve şefkat meşalesini geleceğe taşıma sırası, kalbi merhametle çarpan genç İz Sürücülerdedir!\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Bugün cami duvarlarındaki taş kuş köşklerine veya gökyüzünde süzülen leyleklere baktığımızda, atalarımızın bize bıraktığı o sıcacık merhamet emanetini görürüz. Şimdi bu iyilik, bilim ve şefkat meşalesini geleceğe taşıma sırası, kalbi merhametle çarpan genç İz Sürücülerdedir!\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Vakıf Ustası",
            dialogue:
              "Unutmayın çocuklar; bir kap su, bir avuç buğday ve paylaşılan bir kitap dünyayı güzelleştirmeye yeter!",
            historicalNote:
              "Bunu Biliyor muydun? Sen de soğuk kış günlerinde veya sıcak yaz aylarında pencerenin önüne kuşlar için bir kap temiz su koyarak bu 1000 yıllık vakıf geleneğini yaşatabilirsin!",
            imagePath: "assets/images/fatima_s1_qarawiyyin_foundation.png",
            imageKey: "assets/images/fatima_s1_qarawiyyin_foundation.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Güneşli avluda huzurla dinlenen beyaz leylekler.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Şehrinden her sonbahar binlerce göçmen leylek geçiyor ancak bazıları kanatlarından yaralanıp sürüden geri kalıyor ve kış soğuğunda tehlikeye düşüyor. Kalıcı bir iyilik yapmak için ne kurarsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Göçmen kuşlarla ilgilenmem, sadece kendi evcil hayvanıma bakarım.",
              feedback:
                "Gerçek merhamet, sahipsiz ve garip kalmış canlılara da el uzatmaktır!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Kuşları karanlık bir kafese kapatıp uçmalarını tamamen engellerim.",
              feedback:
                "Göçmen kuşların yuvası gökyüzüdür; amaç onları iyileştirip özgürlüğe kavuşturmaktır!",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Yaralı göçmen kuşların ücretsiz tedavi edilip kış boyu besleneceği 'Gurabahane-i Laklakan' (Garip Leylekler Hastanesi) vakfını ve cami duvarlarına taş 'Kuş Köşkleri'ni kurarım!",
              feedback:
                "Tarihi Hakikat! Osmanlı merhamet vakıfları Bursa'da dünyanın ilk göçmen kuş hastanesi olan Gurabahane-i Laklakan'ı kurdu!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Osmanlı medeniyetinde göç yolunda yaralanan ve uçamayan leylekler ile kuşların tedavi edilip kış boyunca beslenmesi için Bursa'da dünyanın ilk leylek hastanesi olan 'Gurabahane-i Laklakan' vakfı kurulmuş, binaların cephelerine ise taş 'Kuş Köşkleri' işlenmiştir!",
          quoteHighlight:
            "Bir medeniyetin gerçek büyüklüğü; gençlerine açtığı kütüphanelerle ve kanadı kırık bir kuşa gösterdiği merhametle ölçülür!",
        },
        rewardArtifact: {
          id: "artifact-stork-hospital-birdhouse",
          name: "Gurabahane-i Laklakan Beratı ve Taş Kuş Köşkü",
          heroId: "medeniyet-mimarlari",
          chapterId: "medeniyet-mimarlari-ch2",
          imagePath: "assets/images/leylek_vakfi.png",
          pointType: "IHSAN_MEDENIYET",
          pointLabel: "İhsan ve Merhamet Puanı",
          points: 50,
          unlockedTitle: "Şefkat Vakıfçısı",
          shortDescription:
            "Bursa'daki Yaralı Leylekler Hastanesi (Gurabahane-i Laklakan) vakfiyesi ve Osmanlı mimarisindeki minyatür taş Kuş Köşkü.",
          historicalNote:
            "Bursa Hocaalizade/Setbaşı'nda kurulan Gurabahane-i Laklakan, göçmen kuşları tedavi eden dünyadaki ilk vakıf hastanesidir.",
          accentColor: "#10B981",
          hotspots: [
            {
              id: "stone-bird-palace",
              xPercent: 48,
              yPercent: 32,
              title: "Taş Kuş Köşkü (Kuş Evi)",
              secretFact:
                "Cami ve medrese duvarlarının rüzgâr almayan sıcak cephelerine kuşların kışın barınması için oyulan minyatür saraycıklar.",
            },
            {
              id: "stork-wing-splint",
              xPercent: 34,
              yPercent: 64,
              title: "Gurabahane-i Laklakan Şifahanesi",
              secretFact:
                "Göç sırasında kanadı kırılan leylekler burada kuş hekimleri tarafından tedavi edilir ve baharda sürülerine kavuşana kadar beslenirdi.",
            },
            {
              id: "waqf-charity-bowl",
              xPercent: 68,
              yPercent: 66,
              title: "Vakıf Yem ve Su Çanağı",
              secretFact:
                "Çarşı esnafının ve vakıfların ayırdığı özel bütçeyle her gün yaralı kuşlara taze yiyecek ve su temin edilirdi.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Atalarımızın yüzlerce yıl önce kanadı kırık göçmen leylekler için bile hastane ('Gurabahane-i Laklakan') kurmuş olması sana neler hissettiriyor?",
          "Cami ve kütüphane duvarlarına minyatür 'Kuş Köşkleri' yapan taş ustaları sence nasıl bir kalbe sahipti?",
          "Biz de balkonumuza veya bahçemize kuşlar için küçük bir su ve yem kabı hazırlayarak kendi küçük vakfımızı kuralım mı?",
        ],
      },
    ],
  },
];

