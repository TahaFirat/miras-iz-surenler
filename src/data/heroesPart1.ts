import { HeroData } from "./storyTypes";

export const HEROES_PART_1: HeroData[] = [
  // ============================================================================
  // 1. HZ. EBÛBEKİR (1 BÖLÜM - 9 SAHNE + 4. SAHNE ARA KARAR + KADER ANI)
  // ============================================================================
  {
    id: "hz-ebubekir",
    name: "Hz. Ebûbekir",
    heroClass: "MERHAMET_VAKIF",
    heroClassLabel: "Merhamet ve Vakıf",
    title: "Sadakatin ve Gizli İyiliğin Öncüsü (Es-Sıddîk)",
    era: "7. Yüzyıl • Hicrî 11–13 (MS 632–634)",
    location: "Medine-i Münevvere",
    visualMode: "POV_SILHOUETTE",
    islamicSensitivityNote:
      "İslami hassasiyet gereği sahabe-i kiramın yüzü kesinlikle çizilmez ve gösterilmez. Sahneler Birinci Şahıs Bakış Açısı (POV) ve seher vakti atmosferiyle betimlenir.",
    accentColor: "#D97706",
    secondaryColor: "#0D9488",
    summary:
      "Halife seçildikten sonra bile kimselere görünmeden seher vaktinde kimsesiz ve gözleri görmeyen yaşlı bir kadının evini süpürüp yemeklerini pişiren gizli merhamet timsali.",
    coverImage: "assets/images/hz_ebubekir_pov.png",
    crisisImage: "assets/images/hz_ebubekir_pov.png",
    images: {
      cover: "assets/images/hz_ebubekir_pov.png",
      crisis: "assets/images/hz_ebubekir_pov.png",
      artifact: "assets/images/artifact_justice_lantern.png",
    },
    chapters: [
      {
        id: "hz-ebubekir-ch1",
        heroId: "hz-ebubekir",
        chapterNumber: 1,
        title: "Seher Vaktinde Yaşlı Kadının Evini Gizlice Süpüren Halife",
        subtitle: "En güzel iyilik, sağ elin verdiğini sol elin görmediği gizli merhamettir",
        estimatedMinutes: 8,
        visualMode: "POV_SILHOUETTE",
        scenes: [
          {
            id: "hz-ebubekir-ch1-s1",
            sceneNumber: 1,
            title: "Medine'nin Kenar Mahallesindeki Küçük Kerpiç Ev",
            narration:
              "Medine'nin hurma bahçelerine komşu sessiz bir sokakta, kerpiç duvarlı küçücük bir evde kimsesiz ve gözleri görmeyen yaşlı bir nine yaşıyordu. Ne suyunu taşıyacak bir yakını ne de keçilerini sağıp ocağını yakacak bir evladı vardı. Hz. Ömer, bu yaşlı kadının yalnızlığını öğrendiğinde kalbi sızlamış ve her sabah erkenden onun evine gidip su taşımaya, evini temizlemeye kendi kendine söz vermişti.\n\nSeher rüzgârı hurma dallarını hafifçe hışırdatırken, gecenin serinliği yerini şafağın ilk pembe ışıklarına bırakıyordu. İyilik peşinde koşan adımlar, toprak yolda neredeyse hiç ses çıkarmadan ilerliyordu. O an Medine-i Münevvere'nin hurma bahçeleriyle çevrili dingin kerpiç sokaklarında hissedilen kimsenin bilmediği gizli bir iyiliğin kalbe verdiği o tarifsiz huzur ve tevazu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Medine'nin hurma bahçelerine komşu sessiz bir sokakta, kerpiç duvarlı küçücük bir evde kimsesiz ve gözleri görmeyen yaşlı bir nine yaşıyordu. Ne suyunu taşıyacak bir yakını ne de keçilerini sağıp ocağını yakacak bir evladı vardı. Hz. Ömer, bu yaşlı kadının yalnızlığını öğrendiğinde kalbi sızlamış ve her sabah erkenden onun evine gidip su taşımaya, evini temizlemeye kendi kendine söz vermişti.\n\nSeher rüzgârı hurma dallarını hafifçe hışırdatırken, gecenin serinliği yerini şafağın ilk pembe ışıklarına bırakıyordu. İyilik peşinde koşan adımlar, toprak yolda neredeyse hiç ses çıkarmadan ilerliyordu. O an Medine-i Münevvere'nin hurma bahçeleriyle çevrili dingin kerpiç sokaklarında hissedilen kimsenin bilmediği gizli bir iyiliğin kalbe verdiği o tarifsiz huzur ve tevazu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Bu gözleri görmeyen yaşlı teyzemizin kimsesi yok. Sabah namazından çıkar çıkmaz elime su kırbasını alıp ilk iş onun kapısını çalmalıyım.",
            historicalNote:
              "Bunu Biliyor muydun? Sahabeler Medine'deki yaşlı, yetim ve kimsesiz komşuların ihtiyaçlarını karşılamak için birbirleriyle iyilikte yarışırlardı.",
            imagePath: "assets/images/ebubekir_s1_dawn_streets.png",
            imageKey: "assets/images/ebubekir_s1_dawn_streets.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Seher vaktinde Medine'nin sessiz kerpiç sokakları.",
          },
          {
            id: "hz-ebubekir-ch1-s2",
            sceneNumber: 2,
            title: "Her Sabah Karşılaşılan Şaşırtıcı Manzara",
            narration:
              "Güneşin ilk ışıkları ufukta belirmeden Hz. Ömer elinde dolu su testisiyle yaşlı kadının kapısına vardı. Nazikçe kapıyı tıklatıp içeri girdiğinde gözlerine inanamadı! Evin toprak zemini tertemiz süpürülmüş, köşedeki su küpü ağzına kadar berrak kuyu suyuyla doldurulmuş, bahçedeki keçiler sağılmış ve ocakta sıcak arpa çorbası tütmeye başlamıştı bile! Ertesi gün daha erken geldi ama yine her işin çoktan bitirildiğini gördü.\n\nKerpiç duvarların ardında tüten sıcak arpa çorbasının kokusu ve kuyudan yeni çekilmiş berrak suyun serinliği, bu mütevazı yuvaya görünmez bir bereket ve güven duygusu yayıyordu. Tarihin bu unutulmaz dönemeç noktasında, kimsenin bilmediği gizli bir iyiliğin kalbe verdiği o tarifsiz huzur ve tevazu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Güneşin ilk ışıkları ufukta belirmeden Hz. Ömer elinde dolu su testisiyle yaşlı kadının kapısına vardı. Nazikçe kapıyı tıklatıp içeri girdiğinde gözlerine inanamadı! Evin toprak zemini tertemiz süpürülmüş, köşedeki su küpü ağzına kadar berrak kuyu suyuyla doldurulmuş, bahçedeki keçiler sağılmış ve ocakta sıcak arpa çorbası tütmeye başlamıştı bile! Ertesi gün daha erken geldi ama yine her işin çoktan bitirildiğini gördü.\n\nKerpiç duvarların ardında tüten sıcak arpa çorbasının kokusu ve kuyudan yeni çekilmiş berrak suyun serinliği, bu mütevazı yuvaya görünmez bir bereket ve güven duygusu yayıyordu. Tarihin bu unutulmaz dönemeç noktasında, kimsenin bilmediği gizli bir iyiliğin kalbe verdiği o tarifsiz huzur ve tevazu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Sübhanallah! Dün sabah geldiğimde de ev süpürülmüş ve su taşınmıştı, bugün daha erken geldim ama yine birisi benden önce bütün işleri bitirmiş!",
            historicalNote:
              "Bunu Biliyor muydun? Eski Medine evlerinde su şebekesi olmadığı için suyun kuyulardan deri kırbalarla taşınıp toprak küplere doldurulması en zahmetli günlük işti.",
            imagePath: "assets/images/ebubekir_s2_wooden_door.png",
            imageKey: "assets/images/ebubekir_s2_wooden_door.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "1. Şahıs POV: Yaşlı âmâ kadının mütevazı kerpiç evinin kapalı ahşap kapısı ve su testisi.",
          },
          {
            id: "hz-ebubekir-ch1-s3",
            sceneNumber: 3,
            title: "Yaşlı Ninenin Anlattığı Gizemli Misafir",
            narration:
              "Hz. Ömer büyük bir merakla yaşlı kadına yaklaşıp halini hatırını sordu. Ardından her sabah kendisinden önce gelip bu zahmetli işleri kimin yaptığını sordu. Gözleri görmeyen yaşlı kadın huzurla gülümsedi; gelen kişinin adını hiç söylemediğini, hatta sesi tanınmasın diye neredeyse hiç konuşmadan sessizce işleri görüp hayır dua bile beklemeden kapıdan çıkıp gittiğini anlattı.\n\nGözleri görmeyen yaşlı ninenin sesindeki içten dua ve şükür, gösterişten uzak yapılan her fedakârlığın insan ruhunda nasıl silinmez bir iz bıraktığını fısıldıyor gibiydi. Çevredeki her detay, Medine-i Münevvere'nin hurma bahçeleriyle çevrili dingin kerpiç sokaklarında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Hz. Ömer büyük bir merakla yaşlı kadına yaklaşıp halini hatırını sordu. Ardından her sabah kendisinden önce gelip bu zahmetli işleri kimin yaptığını sordu. Gözleri görmeyen yaşlı kadın huzurla gülümsedi; gelen kişinin adını hiç söylemediğini, hatta sesi tanınmasın diye neredeyse hiç konuşmadan sessizce işleri görüp hayır dua bile beklemeden kapıdan çıkıp gittiğini anlattı.\n\nGözleri görmeyen yaşlı ninenin sesindeki içten dua ve şükür, gösterişten uzak yapılan her fedakârlığın insan ruhunda nasıl silinmez bir iz bıraktığını fısıldıyor gibiydi. Çevredeki her detay, Medine-i Münevvere'nin hurma bahçeleriyle çevrili dingin kerpiç sokaklarında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Gözleri Görmeyen Yaşlı Kadın",
            dialogue:
              "Evladım, vallahi kim olduğunu ben de bilmiyorum! Seher vakti kapımı çalar, tek kelime konuşup kendini tanıtmadan evimi süpürür, hurmalarımın çekirdeğini bile ayıklayıp sessizce gider.",
            historicalNote:
              "Bunu Biliyor muydun? İslam ahlakında yapılan bir iyiliğin sahibini gizlemek, yardım alan kişinin mahcup olmasını önlediği için en üstün fazilet sayılır.",
            imagePath: "assets/images/ebubekir_s3_clean_house.png",
            imageKey: "assets/images/ebubekir_s3_clean_house.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "1. Şahıs POV: Tertemiz süpürülmüş avlu, taze süt kâsesi ve sıcak arpa ekmeği.",
          },
          {
            id: "hz-ebubekir-ch1-s4",
            sceneNumber: 4,
            title: "Seher Karanlığında Gizli Bekleyiş",
            narration:
              "Hz. Ömer bu eşsiz hayır yarışında kendisini her gün geçen o meçhul iyilikseverin kim olduğunu öğrenmeye karar verdi. O gece henüz şafak sökmeden, yıldızlar gökyüzünde parlarken sokağın başındaki hurma ağaçlarının gölgesine çekilip sessizce beklemeye başladı. Kimseyi rahatsız etmeden, sadece bu güzel ahlak kahramanından ders almak için gözlerini yaşlı kadının kerpiç evine dikti.\n\nYıldızların altında süren bu sessiz bekleyişte, ne bir övgü arzusu ne de bir üstünlük gayreti vardı; yalnızca hayırda yarışan iki güzel gönlün samimi heyecanı hissediliyordu. Sabır, dikkat ve samimiyetle atılan bu adım, kimsenin bilmediği gizli bir iyiliğin kalbe verdiği o tarifsiz huzur ve tevazu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Hz. Ömer bu eşsiz hayır yarışında kendisini her gün geçen o meçhul iyilikseverin kim olduğunu öğrenmeye karar verdi. O gece henüz şafak sökmeden, yıldızlar gökyüzünde parlarken sokağın başındaki hurma ağaçlarının gölgesine çekilip sessizce beklemeye başladı. Kimseyi rahatsız etmeden, sadece bu güzel ahlak kahramanından ders almak için gözlerini yaşlı kadının kerpiç evine dikti.\n\nYıldızların altında süren bu sessiz bekleyişte, ne bir övgü arzusu ne de bir üstünlük gayreti vardı; yalnızca hayırda yarışan iki güzel gönlün samimi heyecanı hissediliyordu. Sabır, dikkat ve samimiyetle atılan bu adım, kimsenin bilmediği gizli bir iyiliğin kalbe verdiği o tarifsiz huzur ve tevazu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Bu gece seher vaktinden önce burada bekleyeceğim. Bakalım her sabah benden önce koşup gelen bu gizli iyilik öncüsü kimmiş?",
            historicalNote:
              "Bunu Biliyor muydun? Kur'an-ı Kerim'de Mutaffifîn Suresi 26. ayette 'İyilikte yarışanlar işte bunun için yarışsınlar!' buyrulur; Hz. Ömer ve Hz. Ebûbekir'in tatlı rekabeti hep bu hayır yarışı üzerindeydi.",
            imagePath: "assets/images/ebubekir_s4_secret_wait.png",
            imageKey: "assets/images/ebubekir_s4_secret_wait.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Gece karanlığında kerpiç duvarın köşesinden sokağı gözetlerken uzaktan yaklaşan beyaz cübbeli silüet.",
            midDecision: {
              title: "ARA KARAR: Gizli İyilik Sahibini Nasıl Karşılarsın?",
              question:
                "Seher karanlığında sokağın ucundan bir silüetin yaşlı kadının evine yaklaştığını gördün. Ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Daha kapıya varmadan önüne çıkıp yüksek sesle kim olduğunu sorarım.",
                  feedback:
                    "Yüksek sesle konuşmak hem yaşlı kadını korkutur hem de yapılan iyiliği yarıda bırakırdı.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Sessizce bekleyip yaşlı kadının bütün işlerini bitirmesine izin verir, evden çıkarken yanına yaklaşırım.",
                  feedback:
                    "Çok doğru! Hz. Ömer iyiliğin tamamlanmasını sabırla bekledi ve gizli misafir kapıdan çıkarken yanına gitti.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "hz-ebubekir-ch1-s5",
            sceneNumber: 5,
            title: "Karanlıkta Yaklaşan Mütevazı Adımlar",
            narration:
              "Sabah ezanına az bir vakit kala, sokağın taşları üzerinde hafif ve telaşsız ayak sesleri duyuldu. Elinde küçük bir yağ feneri ve omzunda su kırbası taşıyan ince yapılı, sade hırkalı bir silüet evin kapısına yaklaştı. Kapıyı üç kez hafifçe tıklattı, izin aldıktan sonra içeri süzüldü. Ne yanında bir muhafız ne de gösterişli bir kıyafet vardı; tıpkı sıradan bir hizmetkâr gibi sessizce işe koyuldu.\n\nTahta sofranın üzerindeki çekirdeği çıkarılmış hurmalar ve dumanı tüten taze keçi sütü, gerçek şefkatin en küçük ayrıntıyı bile düşünen ince bir nezaket olduğunu kanıtlıyordu. O an Medine-i Münevvere'nin hurma bahçeleriyle çevrili dingin kerpiç sokaklarında hissedilen kimsenin bilmediği gizli bir iyiliğin kalbe verdiği o tarifsiz huzur ve tevazu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Sabah ezanına az bir vakit kala, sokağın taşları üzerinde hafif ve telaşsız ayak sesleri duyuldu. Elinde küçük bir yağ feneri ve omzunda su kırbası taşıyan ince yapılı, sade hırkalı bir silüet evin kapısına yaklaştı. Kapıyı üç kez hafifçe tıklattı, izin aldıktan sonra içeri süzüldü. Ne yanında bir muhafız ne de gösterişli bir kıyafet vardı; tıpkı sıradan bir hizmetkâr gibi sessizce işe koyuldu.\n\nTahta sofranın üzerindeki çekirdeği çıkarılmış hurmalar ve dumanı tüten taze keçi sütü, gerçek şefkatin en küçük ayrıntıyı bile düşünen ince bir nezaket olduğunu kanıtlıyordu. O an Medine-i Münevvere'nin hurma bahçeleriyle çevrili dingin kerpiç sokaklarında hissedilen kimsenin bilmediği gizli bir iyiliğin kalbe verdiği o tarifsiz huzur ve tevazu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Sırtında ağır su kırbasıyla ne kadar da sessiz yürüyor... Sanki sokaktaki taşları bile uyandırmak istemiyor!",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ebûbekir halife seçildiğinde bile eski sade yaşantısını hiç değiştirmemiş, mahallesindeki yetim kızların koyunlarını sağmaya devam etmiştir.",
            imagePath: "assets/images/hz_ebubekir_pov.png",
            imageKey: "assets/images/hz_ebubekir_pov.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Kerpiç kapı önünde süzülen sıcak fener ışığı.",
          },
          {
            id: "hz-ebubekir-ch1-s6",
            sceneNumber: 6,
            title: "Hurma Yaprağı Süpürge ve Taze Süt",
            narration:
              "İçeriden önce hurma liflerinden yapılmış süpürgenin 'hışır hışır' diye avluyu temizleme sesi geldi. Ardından su küpüne dökülen berrak suyun şırıltısı, keçilerin sağılma sesi ve ocakta çıtırdayan odunların kokusu sokağa yayıldı. İçerideki kişi yaşlı kadının dişleri kesmediği için yiyeceği hurmaların çekirdeklerini bile tek tek çıkarıp hazır ediyor, onun hiçbir zahmet çekmemesi için her detayı düşünüyordu.\n\nSabahın erken saatlerinde kapı eşiğinde tamamlanan bu sessiz hizmet, bir halifenin makamıyla değil, kalbindeki merhamet ve alçakgönüllülükle büyüdüğünü gözler önüne seriyordu. Tarihin bu unutulmaz dönemeç noktasında, kimsenin bilmediği gizli bir iyiliğin kalbe verdiği o tarifsiz huzur ve tevazu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "İçeriden önce hurma liflerinden yapılmış süpürgenin 'hışır hışır' diye avluyu temizleme sesi geldi. Ardından su küpüne dökülen berrak suyun şırıltısı, keçilerin sağılma sesi ve ocakta çıtırdayan odunların kokusu sokağa yayıldı. İçerideki kişi yaşlı kadının dişleri kesmediği için yiyeceği hurmaların çekirdeklerini bile tek tek çıkarıp hazır ediyor, onun hiçbir zahmet çekmemesi için her detayı düşünüyordu.\n\nSabahın erken saatlerinde kapı eşiğinde tamamlanan bu sessiz hizmet, bir halifenin makamıyla değil, kalbindeki merhamet ve alçakgönüllülükle büyüdüğünü gözler önüne seriyordu. Tarihin bu unutulmaz dönemeç noktasında, kimsenin bilmediği gizli bir iyiliğin kalbe verdiği o tarifsiz huzur ve tevazu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Gözleri Görmeyen Yaşlı Kadın",
            dialogue:
              "Allah senden razı olsun evladım! Sen her sabah gelip ocağımı yakıp suyumu doldurmasaydın ben bu âmâ gözlerimle ne yapardım?",
            historicalNote:
              "Bunu Biliyor muydun? Yaşlı ve kimsesiz bir insana yardım ederken sadece yemek bırakmak değil, onun evini temizleyip gönlünü hoş tutmak Peygamber Efendimizin (s.a.v.) sünnetidir.",
            imagePath: "assets/images/ebubekir_s5_pitting_dates.png",
            imageKey: "assets/images/ebubekir_s5_pitting_dates.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "1. Şahıs POV: Hurma lifi süpürgeyle temizlenen avlu ve taze süt.",
          },
          {
            id: "hz-ebubekir-ch1-s7",
            sceneNumber: 7,
            title: "Kapı Açıldığında Ortaya Çıkan Hakikat",
            narration:
              "Nihayet içerideki bütün işler bitti ve ahşap kapı yavaşça aralandı. Sabah namazına yetişmek için hızlı adımlarla dışarı çıkan o mütevazı insan, sokağın köşesinde bekleyen Hz. Ömer ile karşılaştı! Fenerin ışığı cübbesinin kenarına vurduğunda Hz. Ömer hayretten donakaldı: Karşısında duran ve elleri süpürge tozuna bulanmış olan bu kişi, İslam devletinin başkanı Halife Hz. Ebûbekir'den başkası değildi!\n\nGüneşin altın ışıkları Medine sokaklarını aydınlatırken, iki vefalı dostun karşılaştığı o an, tarihin en zarif kardeşlik ve fazilet tablolarından birine dönüşmüştü. Çevredeki her detay, Medine-i Münevvere'nin hurma bahçeleriyle çevrili dingin kerpiç sokaklarında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Nihayet içerideki bütün işler bitti ve ahşap kapı yavaşça aralandı. Sabah namazına yetişmek için hızlı adımlarla dışarı çıkan o mütevazı insan, sokağın köşesinde bekleyen Hz. Ömer ile karşılaştı! Fenerin ışığı cübbesinin kenarına vurduğunda Hz. Ömer hayretten donakaldı: Karşısında duran ve elleri süpürge tozuna bulanmış olan bu kişi, İslam devletinin başkanı Halife Hz. Ebûbekir'den başkası değildi!\n\nGüneşin altın ışıkları Medine sokaklarını aydınlatırken, iki vefalı dostun karşılaştığı o an, tarihin en zarif kardeşlik ve fazilet tablolarından birine dönüşmüştü. Çevredeki her detay, Medine-i Münevvere'nin hurma bahçeleriyle çevrili dingin kerpiç sokaklarında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Vallahi tahmin etmeliydim! Ey Resûlullah'ın Halifesi Ebûbekir, her sabah benden önce gelip bu yaşlı ninenin evini süpüren gerçekten sen miydin?",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ebûbekir'e sarsılmaz doğruluğu ve samimiyeti sebebiyle 'Es-Sıddîk' (Çok doğru ve sadık) unvanı verilmiştir.",
            imagePath: "assets/images/ebubekir_s7_morning_encounter.png",
            imageKey: "assets/images/ebubekir_s7_morning_encounter.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Şafak sökerken sokakta beliren beyaz cübbeli silüet.",
          },
          {
            id: "hz-ebubekir-ch1-s8",
            sceneNumber: 8,
            title: "Gizli Kalan Sırrın Emaneti",
            narration:
              "Sırrının ortaya çıktığını gören Hz. Ebûbekir mahcup bir sesle Hz. Ömer'in elini tuttu. Bu yaptığı hizmetin ne yaşlı kadına ne de şehir halkına duyurulmasını istemiyordu; çünkü o bu iyiliği insanların övgüsünü kazanmak için değil, yalnızca Allah'ın rızasını kazanmak için yapıyordu. Bütün gün devletin en ağır işleriyle uğraşmasına rağmen seher vaktindeki bu küçük hizmeti hayatının en büyük mutluluğu sayıyordu.\n\nSır olarak saklanan bu güzel amel, kuşların cıvıltısı ve sabah esintisiyle birlikte Medine semalarında yankılanan sessiz bir iyilik dersine dönüşüyordu. Sabır, dikkat ve samimiyetle atılan bu adım, kimsenin bilmediği gizli bir iyiliğin kalbe verdiği o tarifsiz huzur ve tevazu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Sırrının ortaya çıktığını gören Hz. Ebûbekir mahcup bir sesle Hz. Ömer'in elini tuttu. Bu yaptığı hizmetin ne yaşlı kadına ne de şehir halkına duyurulmasını istemiyordu; çünkü o bu iyiliği insanların övgüsünü kazanmak için değil, yalnızca Allah'ın rızasını kazanmak için yapıyordu. Bütün gün devletin en ağır işleriyle uğraşmasına rağmen seher vaktindeki bu küçük hizmeti hayatının en büyük mutluluğu sayıyordu.\n\nSır olarak saklanan bu güzel amel, kuşların cıvıltısı ve sabah esintisiyle birlikte Medine semalarında yankılanan sessiz bir iyilik dersine dönüşüyordu. Sabır, dikkat ve samimiyetle atılan bu adım, kimsenin bilmediği gizli bir iyiliğin kalbe verdiği o tarifsiz huzur ve tevazu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Hz. Ebûbekir",
            dialogue:
              "Aman yâ Ömer, bu gördüğün aramızda sır kalsın! O yaşlı teyzemiz evini süpürenin halife olduğunu bilirse sıkılır ve mahcup olur; bırak bizi sıradan bir komşu bilsin.",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ebûbekir halife olduğunda mahalledeki küçük bir kız 'Artık koyunlarımızı sağmaz' deyince, 'Hayır, inşallah makamım beni değiştirmeyecek, yine koyunlarınızı sağacağım!' demiştir.",
            imagePath: "assets/images/ebubekir_s8_secret_promise.png",
            imageKey: "assets/images/ebubekir_s8_secret_promise.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Yaşlı kadının tertemiz bırakılan sıcak yuvası.",
          },
          {
            id: "hz-ebubekir-ch1-s9",
            sceneNumber: 9,
            title: "Tarihe Geçen Gözyaşı ve Hayranlık",
            narration:
              "Hz. Ömer, dostunun bu eşsiz alçakgönüllülüğü karşısında gözyaşlarını tutamadı. Hangi hayır işine koşsa önünde hep Hz. Ebûbekir'in samimi izlerini buluyordu. Elleriyle yüzünü kapattı ve asırlar boyunca bütün yöneticilere ders olacak o meşhur sözünü söyledi. Ardından iki büyük dost, seher rüzgârları arasında omuz omuza sabah namazı için Mescid-i Nebevî'ye doğru yürüdüler.\n\nO seher vakti yaşananlar, yüzyıllar boyunca dilden dile aktarılacak; gerçek büyüklüğün alkış beklemeyen samimi bir kalpte saklı olduğunu tüm nesillere öğretecekti. O an Medine-i Münevvere'nin hurma bahçeleriyle çevrili dingin kerpiç sokaklarında hissedilen kimsenin bilmediği gizli bir iyiliğin kalbe verdiği o tarifsiz huzur ve tevazu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Hz. Ömer, dostunun bu eşsiz alçakgönüllülüğü karşısında gözyaşlarını tutamadı. Hangi hayır işine koşsa önünde hep Hz. Ebûbekir'in samimi izlerini buluyordu. Elleriyle yüzünü kapattı ve asırlar boyunca bütün yöneticilere ders olacak o meşhur sözünü söyledi. Ardından iki büyük dost, seher rüzgârları arasında omuz omuza sabah namazı için Mescid-i Nebevî'ye doğru yürüdüler.\n\nO seher vakti yaşananlar, yüzyıllar boyunca dilden dile aktarılacak; gerçek büyüklüğün alkış beklemeyen samimi bir kalpte saklı olduğunu tüm nesillere öğretecekti. O an Medine-i Münevvere'nin hurma bahçeleriyle çevrili dingin kerpiç sokaklarında hissedilen kimsenin bilmediği gizli bir iyiliğin kalbe verdiği o tarifsiz huzur ve tevazu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Ey Ebûbekir! Vallahi senden sonra gelecek olan halifelerin işini çok zorlaştırdın, onlara ulaşılması güç bir ahlak zirvesi bıraktın!",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ebûbekir vefat ettikten sonra, o yaşlı kadının evini süpürme ve suyunu taşıma nöbetini bizzat Hz. Ömer devralmıştır!",
            imagePath: "assets/images/artifact_justice_lantern.png",
            imageKey: "assets/images/artifact_justice_lantern.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Sabah kızıllığında Medine'nin hurma ağaçlı sokakları.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Devletin en üst makamına seçildin ve mahallende kimsesiz, gözleri görmeyen yaşlı bir komşunun her gün suya ve temizliğe ihtiyacı var. Nasıl davranırsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Ben artık devlet başkanıyım, vaktim çok değerli diyerek bu işi başkalarına bırakırım.",
              feedback:
                "Yardım ulaşsa bile tevazuyu ve mazlumun halini bizzat hissetme fırsatını kaçırmış olursun.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Gündüz vakti kalabalık bir törenle evine gidip herkesin önünde yardım ederim.",
              feedback:
                "Herkesin önünde yapılan yardım, ihtiyaç sahibi yaşlı kadını mahcup edip üzebilir.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Kimseye görünmeden seher vaktinde gider, kendimi tanıtmadan evini süpürür, suyunu doldurur ve yemeğini pişirip sessizce çıkarım!",
              feedback:
                "Tarihi Hakikat! Hz. Ebûbekir halife iken bile her sabah gizlice o yaşlı kadının evini temizlemiş ve kendisini hiç tanıtmamıştır.",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Hz. Ömer her sabah yaşlı ve âmâ kadının evine yardıma gittiğinde işlerin çoktan bitirildiğini gördü. Bir seher vakti beklediğinde bu gizli iyilikseverin bizzat Halife Hz. Ebûbekir olduğunu öğrendi ve ağlayarak: \"Ey Ebûbekir! Senden sonra gelecek halifelerin işini çok zorlaştırdın!\" dedi.",
          quoteHighlight:
            "Ey Ebûbekir! Senden sonra gelecek halifelerin işini çok zorlaştırdın!",
        },
        rewardArtifact: {
          id: "artifact-seher-water-pitcher",
          name: "Seher Vakti İyilik Testisi",
          heroId: "hz-ebubekir",
          chapterId: "hz-ebubekir-ch1",
          imagePath: "assets/images/hz_ebubekir_pov.png",
          pointType: "IHSAN_MEDENIYET",
          pointLabel: "İhsan ve Merhamet Puanı",
          points: 50,
          unlockedTitle: "Gizli İyilik Öncüsü",
          shortDescription:
            "Sağ elin verdiğini sol elin görmediği, gösterişten uzak samimi yardımlaşmayı simgeleyen seher vakti feneri ve testisi.",
          historicalNote:
            "Hz. Ebûbekir'in hilafeti boyunca sürdürdüğü bu gizli hizmet, İslam medeniyetindeki 'İhsan' ve 'Sadaka-i Cariye' kültürünün temel taşlarından biridir.",
          accentColor: "#D97706",
          hotspots: [
            {
              id: "seher-lantern-glow",
              xPercent: 48,
              yPercent: 32,
              title: "Seher Vakti Nöbeti",
              secretFact:
                "Hz. Ebûbekir kimse görmesin ve yaşlı kadın mahcup olmasın diye sabah namazından önceki seher vaktinde yardıma giderdi.",
            },
            {
              id: "seher-pitted-dates",
              xPercent: 38,
              yPercent: 60,
              title: "İnce Düşünceli Merhamet",
              secretFact:
                "Yaşlı kadının dişleri olmadığı için yiyeceği hurmaların çekirdeklerini bile tek tek çıkarıp başucuna bırakırdı.",
            },
            {
              id: "seher-humility-seal",
              xPercent: 62,
              yPercent: 72,
              title: "Makamın Değiştiremediği Ahlak",
              secretFact:
                "Halife seçildiği gün mahalledeki yetim kızların koyunlarını sağmayı bırakmayacağına dair söz vermiş ve sözünü tutmuştur.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Hz. Ebûbekir yaşlı kadına yardım ederken neden adını ve halife olduğunu hiç söylemedi?",
          "Bir iyiliği kimseye göstermeden, gizlice yapmak insanın kalbinde nasıl bir mutluluk oluşturur?",
          "Biz de bugün evde veya okulda kimseye söylemeden hangi güzel bir 'gizli iyilik' yapabiliriz?",
        ],
      },
    ],
  },

  // ============================================================================
  // 2. HZ. ÖMER (3 BÖLÜM - HER BÖLÜM 9 SAHNE + 4. SAHNE ARA KARAR + KADER ANI)
  // ============================================================================
  {
    id: "hz-omer",
    name: "Hz. Ömer",
    heroClass: "ADALET_VICDANI",
    heroClassLabel: "Adalet ve Vicdan",
    title: "Adaletin Sönmeyen Feneri",
    era: "7. Yüzyıl • Hicrî 13–23 (MS 634–644)",
    location: "Medine ve Kudüs",
    visualMode: "POV_SILHOUETTE",
    islamicSensitivityNote:
      "İslami hassasiyet gereği sahabe-i kiramın yüzü kesinlikle çizilmez ve gösterilmez. Sahneler Birinci Şahıs Bakış Açısı (POV) ve fener ışığı atmosferiyle betimlenir.",
    accentColor: "#F59E0B",
    secondaryColor: "#D97706",
    summary:
      "Geceleri herkes uyurken elinde feneriyle Medine sokaklarını adımlayan, Kudüs yolunda devesine hizmetkârıyla sırayla binen ve mahkemede valiyle halkı eşit tutan adalet timsali.",
    images: {
      cover: "assets/images/hz_omer_pov.png",
      crisis: "assets/images/hz_omer_tent_pot.png",
      artifact: "assets/images/artifact_justice_lantern.png",
    },
    chapters: [
      // ------------------------------------------------------------------------
      // HZ. ÖMER - BÖLÜM 1: GECE NÖBETİ VE KAYNAYAN TAŞLAR (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "hz-omer-ch1",
        heroId: "hz-omer",
        chapterNumber: 1,
        title: "Gece Nöbeti ve Kaynayan Taşlar",
        subtitle: "Gerçek adalet, mazlumun yükünü bizzat omuzlamaktır",
        estimatedMinutes: 8,
        visualMode: "POV_SILHOUETTE",
        scenes: [
          {
            id: "hz-omer-ch1-s1",
            sceneNumber: 1,
            title: "Medine Sokaklarında Sessiz Devriye",
            narration:
              "Medine'nin üzerine serin ve yıldızlı bir çöl gecesi çökmüştü. Hurma bahçelerinden esen hafif rüzgâr kerpiç evlerin duvarlarını yalıyor, şehirdeki herkes derin bir uykuda dinleniyordu. Ancak taşlı sokaklarda yankılanan iki kişinin ayak sesi hiç durmuyordu. Halife Hz. Ömer, elindeki bakır yağ fenerinin titrek sarı ışığıyla karanlık köşeleri aydınlatarak yanında yardımcısı Eslem ile şehrin en uzak mahallelerini kontrol ediyordu. Onun için halifelik, yumuşak minderlerde oturmak değil, halkı uyurken uyanık kalmaktı.\n\nZeytinyağlı fenerin titrek sarı ışığı taş ve toprak zeminde uzarken, gecenin derin sessizliğinde her bir adım mazlumların ve kimsesizlerin güvencesi oluyordu. O an adalet nöbetleriyle korunan Medine'den Kudüs surlarına uzanan tarihi yollarda hissedilen hakkı ve eşitliği her şeyin üstünde tutan sarsılmaz bir vicdan ve sorumluluk duygusu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Medine'nin üzerine serin ve yıldızlı bir çöl gecesi çökmüştü. Hurma bahçelerinden esen hafif rüzgâr kerpiç evlerin duvarlarını yalıyor, şehirdeki herkes derin bir uykuda dinleniyordu. Ancak taşlı sokaklarda yankılanan iki kişinin ayak sesi hiç durmuyordu. Halife Hz. Ömer, elindeki bakır yağ fenerinin titrek sarı ışığıyla karanlık köşeleri aydınlatarak yanında yardımcısı Eslem ile şehrin en uzak mahallelerini kontrol ediyordu. Onun için halifelik, yumuşak minderlerde oturmak değil, halkı uyurken uyanık kalmaktı.\n\nZeytinyağlı fenerin titrek sarı ışığı taş ve toprak zeminde uzarken, gecenin derin sessizliğinde her bir adım mazlumların ve kimsesizlerin güvencesi oluyordu. O an adalet nöbetleriyle korunan Medine'den Kudüs surlarına uzanan tarihi yollarda hissedilen hakkı ve eşitliği her şeyin üstünde tutan sarsılmaz bir vicdan ve sorumluluk duygusu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Ey Eslem! Fırat kıyısında bir kuzuyu kurt kapsa, korkarım ki Allah kıyamet günü onun hesabını Ömer'den sorar. Gel, bu gece şehrin dışındaki Harre düzlüğüne kadar yürüyelim.",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ömer, tarihte geceleri şehir güvenliğini ve ihtiyaç sahiplerini denetleyen 'Ases' (Gece Bekçiliği) teşkilatını kuran ilk devlet başkanıdır.",
            imagePath: "assets/images/omer_s1_medina_patrol.png",
            imageKey: "assets/images/omer_s1_medina_patrol.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote:
              "1. Şahıs POV: Elde tutulan bakır fener ve Medine'nin dolunaylı kerpiç sokakları.",
          },
          {
            id: "hz-omer-ch1-s2",
            sceneNumber: 2,
            title: "Harre Düzlüğündeki Sönük Ateş",
            narration:
              "Şehrin son evlerini geride bırakıp volkanik siyah taşlarla kaplı Harre düzlüğüne çıktıklarında gecenin ayazı iyice hissedilmeye başladı. Tam geri dönecekleri sırada, uzaktaki kum tepelerinin ardında rüzgârla titreyen cılız bir ateş kızıllığı fark ettiler. Bu saatte kervanların konaklamadığı ıssız bir noktada yanan bu ateş, oraya yeni gelmiş garip yolcuların habercisiydi. Hz. Ömer adımlarını sıklaştırdı; elindeki fenerin ışığı çöl kumlarının üzerinde uzun gölgeler oluşturarak o sönük ateşe doğru ilerledi.\n\nÇöl gecesinin ayazında parlayan küçük ocak ateşi ve rüzgârın sesi, halkının derdiyle dertlenen bir yöneticinin omuzlarındaki ağır emaneti tüm çıplaklığıyla hissettiriyordu. Tarihin bu unutulmaz dönemeç noktasında, hakkı ve eşitliği her şeyin üstünde tutan sarsılmaz bir vicdan ve sorumluluk duygusu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Şehrin son evlerini geride bırakıp volkanik siyah taşlarla kaplı Harre düzlüğüne çıktıklarında gecenin ayazı iyice hissedilmeye başladı. Tam geri dönecekleri sırada, uzaktaki kum tepelerinin ardında rüzgârla titreyen cılız bir ateş kızıllığı fark ettiler. Bu saatte kervanların konaklamadığı ıssız bir noktada yanan bu ateş, oraya yeni gelmiş garip yolcuların habercisiydi. Hz. Ömer adımlarını sıklaştırdı; elindeki fenerin ışığı çöl kumlarının üzerinde uzun gölgeler oluşturarak o sönük ateşe doğru ilerledi.\n\nÇöl gecesinin ayazında parlayan küçük ocak ateşi ve rüzgârın sesi, halkının derdiyle dertlenen bir yöneticinin omuzlarındaki ağır emaneti tüm çıplaklığıyla hissettiriyordu. Tarihin bu unutulmaz dönemeç noktasında, hakkı ve eşitliği her şeyin üstünde tutan sarsılmaz bir vicdan ve sorumluluk duygusu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Hizmetkârı Eslem",
            dialogue:
              "Ey Müminlerin Emiri! Şu tepenin ardında bir ateş yanıyor. Bu soğuk gecede şehrin dışında konaklayan bir yolcu ailesi olmalı.",
            historicalNote:
              "Bunu Biliyor muydun? Medine'nin çevresindeki siyah volkanik taşlık alanlara 'Harre' denirdi ve uzak kabilelerden gelen yoksul yolcular bazen şehre girmeden önce burada konaklardı.",
            imagePath: "assets/images/omer_s2_distant_campfire.png",
            imageKey: "assets/images/omer_s2_distant_campfire.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Uzaktaki kum tepelerinin ardında tüten ateş.",
          },
          {
            id: "hz-omer-ch1-s3",
            sceneNumber: 3,
            title: "Çadırdan Yükselen Hıçkırıklar",
            narration:
              "Tepenin yamacına yaklaştıklarında eski kıl dokumadan kurulmuş küçük ve yıpranmış bir çadır gördüler. Çadırın hemen önünde üç taş üzerine oturtulmuş isli bir bakır tencere fokurduyor, başında ise yaşlıca bir anne tahta bir kepçeyle tencereyi durmadan karıştırıyordu. Çadırın içinden ise insanın yüreğini sızlatan üç küçük çocuğun ağlama sesi geliyordu. Çocuklar karınlarını tutarak annelerine sesleniyor, anne ise onları susturmak için tencerenin altındaki çalı çırpıyı düzeltiyordu.\n\nKaranlığın içinden yükselen o masum çocuk sesleri, merhamet dolu bir kalbin adalet ve şefkat için nasıl hızla çarptığını anlatan en dokunaklı işaretti. Çevredeki her detay, adalet nöbetleriyle korunan Medine'den Kudüs surlarına uzanan tarihi yollarda filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Tepenin yamacına yaklaştıklarında eski kıl dokumadan kurulmuş küçük ve yıpranmış bir çadır gördüler. Çadırın hemen önünde üç taş üzerine oturtulmuş isli bir bakır tencere fokurduyor, başında ise yaşlıca bir anne tahta bir kepçeyle tencereyi durmadan karıştırıyordu. Çadırın içinden ise insanın yüreğini sızlatan üç küçük çocuğun ağlama sesi geliyordu. Çocuklar karınlarını tutarak annelerine sesleniyor, anne ise onları susturmak için tencerenin altındaki çalı çırpıyı düzeltiyordu.\n\nKaranlığın içinden yükselen o masum çocuk sesleri, merhamet dolu bir kalbin adalet ve şefkat için nasıl hızla çarptığını anlatan en dokunaklı işaretti. Çevredeki her detay, adalet nöbetleriyle korunan Medine'den Kudüs surlarına uzanan tarihi yollarda filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Eslem, duyuyor musun? Bu yavruların ağlaması sıradan bir huysuzluk değil; seslerinde derin bir yorgunluk ve çaresizlik var.",
            historicalNote:
              "Bunu Biliyor muydun? İslam geleneğinde gece vakti bir çadıra veya eve yaklaşırken ev halkını korkutmamak için uzaktan seslenerek izin istemek temel bir nezaket kuralıdır.",
            imagePath: "assets/images/hz_omer_pov.png",
            imageKey: "assets/images/hz_omer_pov.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Çadır önünde kaynayan bakır tencere ve içindeki çakıl taşları.",
          },
          {
            id: "hz-omer-ch1-s4",
            sceneNumber: 4,
            title: "Işık Sahiplerine Selam ve İlk Soru",
            narration:
              "Hz. Ömer, gece karanlığında tek başına olan anneyi ve çocukları ürkütmemek için çadırın birkaç adım gerisinde durdu. Fenerini yere yakın tutarak vakur ve yumuşak bir sesle selam verdi; karanlık kelimesini bile ağzına almayarak onlara 'Ey aydınlık ve ışık sahipleri' diye hitap etti. Kadından yaklaşmak için izin aldıktan sonra ateşin yanına kadar geldi. Tencereden yoğun buharlar yükselmesine rağmen etrafta hiçbir yemek, ekmek veya çorba kokusu yoktu.\n\nToprak tencereden yükselen buhar ve sabırla bekleyen annenin yorgun bakışları, gösterişli sarayların değil, en uzak çadırın bile hesabını soran bir vicdanı harekete geçirmişti. Sabır, dikkat ve samimiyetle atılan bu adım, hakkı ve eşitliği her şeyin üstünde tutan sarsılmaz bir vicdan ve sorumluluk duygusu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Hz. Ömer, gece karanlığında tek başına olan anneyi ve çocukları ürkütmemek için çadırın birkaç adım gerisinde durdu. Fenerini yere yakın tutarak vakur ve yumuşak bir sesle selam verdi; karanlık kelimesini bile ağzına almayarak onlara 'Ey aydınlık ve ışık sahipleri' diye hitap etti. Kadından yaklaşmak için izin aldıktan sonra ateşin yanına kadar geldi. Tencereden yoğun buharlar yükselmesine rağmen etrafta hiçbir yemek, ekmek veya çorba kokusu yoktu.\n\nToprak tencereden yükselen buhar ve sabırla bekleyen annenin yorgun bakışları, gösterişli sarayların değil, en uzak çadırın bile hesabını soran bir vicdanı harekete geçirmişti. Sabır, dikkat ve samimiyetle atılan bu adım, hakkı ve eşitliği her şeyin üstünde tutan sarsılmaz bir vicdan ve sorumluluk duygusu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Esselâmü aleyküm ey ışık sahipleri! İzninizle ateşinize yaklaşabilir miyiz? Bu küçük yavrular gecenin bu vaktinde neden böyle içli içli ağlıyor?",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ömer selam verirken nezaketinden dolayı 'Ey karanlıkta kalanlar' dememiş, ateşin ışığına işaret ederek 'Ey ışık sahipleri (Yâ ehle'd-dav')' demiştir.",
            imagePath: "assets/images/hz_omer_tent_pot.png",
            imageKey: "assets/images/hz_omer_tent_pot.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Ateş başındaki tencere ve yükselen su buharı.",
            midDecision: {
              title: "ARA KARAR: Çadıra Nasıl Yaklaşırsın?",
              question:
                "Gece yarısı ıssız çölde çocuklarıyla bekleyen bir annenin çadırına geldin. Onları korkutmadan derdini öğrenmek için nasıl davranırsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Ben devletin halifesiyim diyerek hemen çadırın içine girip kim olduklarını sorarım.",
                  feedback:
                    "Gece vakti izinsiz yaklaşmak ve unvan söylemek çadırdaki aileyi korkutup çekinmelerine sebep olurdu.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Uzaktan 'Ey ışık sahipleri' diye nazikçe selam verir, izin aldıktan sonra yaklaşıp çocukların neden ağladığını sorarım.",
                  feedback:
                    "Harika seçim! Hz. Ömer tam olarak böyle yaptı; önce selam verip izin istedi ve kalplerini ısıttı.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "hz-omer-ch1-s5",
            sceneNumber: 5,
            title: "Tenceredeki Çakıl Taşlarının Sırrı",
            narration:
              "Çadırdaki anne, karşısında duran sade giyimli uzun boylu adamın Halife Hz. Ömer olduğunu hiç bilmiyordu. Onu Medineli yardımsever bir yolcu sanarak içini çekti ve elindeki tahta kepçeyle tencerenin dibini karıştırdı. Kepçe tencerenin dibine değdikçe 'tıkır tıkır' diye sert taş sesleri geliyordu! Hz. Ömer fenerini tencerenin üzerine doğru yaklaştırdığında gözlerine inanamadı: Kaynayan suyun içinde ne bir avuç un ne de bir parça et vardı; sadece su ve çöl çakılları kaynıyordu!\n\nSuyla kaynayan çakıl taşlarının çıkardığı o hüzünlü tıkırtı, tarih boyunca bütün yöneticilere sorumluluğun ne kadar ciddi bir emanet olduğunu hatırlatan unutulmaz bir sahneydi. O an adalet nöbetleriyle korunan Medine'den Kudüs surlarına uzanan tarihi yollarda hissedilen hakkı ve eşitliği her şeyin üstünde tutan sarsılmaz bir vicdan ve sorumluluk duygusu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Çadırdaki anne, karşısında duran sade giyimli uzun boylu adamın Halife Hz. Ömer olduğunu hiç bilmiyordu. Onu Medineli yardımsever bir yolcu sanarak içini çekti ve elindeki tahta kepçeyle tencerenin dibini karıştırdı. Kepçe tencerenin dibine değdikçe 'tıkır tıkır' diye sert taş sesleri geliyordu! Hz. Ömer fenerini tencerenin üzerine doğru yaklaştırdığında gözlerine inanamadı: Kaynayan suyun içinde ne bir avuç un ne de bir parça et vardı; sadece su ve çöl çakılları kaynıyordu!\n\nSuyla kaynayan çakıl taşlarının çıkardığı o hüzünlü tıkırtı, tarih boyunca bütün yöneticilere sorumluluğun ne kadar ciddi bir emanet olduğunu hatırlatan unutulmaz bir sahneydi. O an adalet nöbetleriyle korunan Medine'den Kudüs surlarına uzanan tarihi yollarda hissedilen hakkı ve eşitliği her şeyin üstünde tutan sarsılmaz bir vicdan ve sorumluluk duygusu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Çadırdaki Anne",
            dialogue:
              "Yavrularım sabahtan beri açlıktan ağlıyor. Onlara yedirecek tek lokmamız kalmadı. Ben de 'Yemek pişiyor' sanıp avunsunlar ve yorulup uyuyakalsınlar diye tencerede suyla çakıl taşlarını kaynatıyorum!",
            historicalNote:
              "Bunu Biliyor muydun? O dönemde Medine'de 'Remâde Yılı' denilen büyük bir kuraklık yaşanmıştı ve çevre kabilelerden pek çok yoksul aile yardım için Medine yakınlarına sığınmıştı.",
            imagePath: "assets/images/omer_s3_boiling_stones.png",
            imageKey: "assets/images/omer_s3_boiling_stones.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Tencere içinde kaynayan su ve çakıl taşları.",
          },
          {
            id: "hz-omer-ch1-s6",
            sceneNumber: 6,
            title: "Kalbi Titreten Sözler",
            narration:
              "Kadın hem tenceredeki taşları karıştırıyor hem de soğuktan titreyen çocuklarını sakinleştirmeye çalışıyordu. Sonra başını kaldırıp karşısındaki yabancıya sitem dolu bir sesle, devlet başkanı Ömer'in kendilerini unuttuğunu söyledi. Bu sözleri duyan Hz. Ömer'in dizlerinin bağı çözüldü, gözlerinden süzülen sıcak yaşlar sakalına doğru aktı. Kendisini tanıtmadan, o büyük mahcubiyeti kalbinin en derininde hissederek kadına sabretmesini söyledi ve Eslem'e dönerek hemen erzak deposuna koşmaları gerektiğini işaret etti.\n\nUn çuvalının ve zeytinyağı testisinin ağırlığı omuzları bassa da, kendi nefsini terbiye ederek bizzat hizmet etmenin verdiği iç huzuru her türlü yorgunluğu unutturuyordu. Tarihin bu unutulmaz dönemeç noktasında, hakkı ve eşitliği her şeyin üstünde tutan sarsılmaz bir vicdan ve sorumluluk duygusu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Kadın hem tenceredeki taşları karıştırıyor hem de soğuktan titreyen çocuklarını sakinleştirmeye çalışıyordu. Sonra başını kaldırıp karşısındaki yabancıya sitem dolu bir sesle, devlet başkanı Ömer'in kendilerini unuttuğunu söyledi. Bu sözleri duyan Hz. Ömer'in dizlerinin bağı çözüldü, gözlerinden süzülen sıcak yaşlar sakalına doğru aktı. Kendisini tanıtmadan, o büyük mahcubiyeti kalbinin en derininde hissederek kadına sabretmesini söyledi ve Eslem'e dönerek hemen erzak deposuna koşmaları gerektiğini işaret etti.\n\nUn çuvalının ve zeytinyağı testisinin ağırlığı omuzları bassa da, kendi nefsini terbiye ederek bizzat hizmet etmenin verdiği iç huzuru her türlü yorgunluğu unutturuyordu. Tarihin bu unutulmaz dönemeç noktasında, hakkı ve eşitliği her şeyin üstünde tutan sarsılmaz bir vicdan ve sorumluluk duygusu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Allah sana merhamet etsin ey anne! Peki siz buraya yeni gelmişken ve haber göndermemişken Ömer sizin bu halinizi nereden bilecek?",
            historicalNote:
              "Bunu Biliyor muydun? Kadın bu soruya 'Madem halife oldu, bizim halimizden habersiz kalmaması gerekmez mi?' diye cevap vermiş ve Hz. Ömer bu haklı söz karşısında ağlamıştır.",
            imagePath: "assets/images/ebubekir_s4_secret_wait.png",
            imageKey: "assets/images/ebubekir_s4_secret_wait.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Gece karanlığında Medine'ye doğru hızlı adımlarla dönüş.",
          },
          {
            id: "hz-omer-ch1-s7",
            sceneNumber: 7,
            title: "Beytülmâl Erzak Deposunda Ağır Çuval",
            narration:
              "Hz. Ömer ve Eslem gecenin karanlığında neredeyse koşarcasına Medine'deki Beytülmâl erzak deposuna vardılar. Hz. Ömer kapıyı açtı, en kaliteli undan büyük bir çuval doldurdu ve yanına da bir testi yağ ile hurma hazırladı. Ardından Eslem'e 'Bu çuvalı hemen benim sırtıma yükle!' dedi. Eslem telaşla öne atılarak koskoca devlet başkanının çuval taşımasına gönlünün razı olmadığını, çuvalı kendisinin taşımak istediğini söyledi. Ancak Hz. Ömer kararlıydı.\n\nAteşe üflenen her nefeste yükselen kıvılcımlar, yalnızca tenceredeki çorbayı değil, çaresiz kalmış bir ailenin umutlarını da yeniden ısıtıp aydınlatıyordu. Çevredeki her detay, adalet nöbetleriyle korunan Medine'den Kudüs surlarına uzanan tarihi yollarda filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Hz. Ömer ve Eslem gecenin karanlığında neredeyse koşarcasına Medine'deki Beytülmâl erzak deposuna vardılar. Hz. Ömer kapıyı açtı, en kaliteli undan büyük bir çuval doldurdu ve yanına da bir testi yağ ile hurma hazırladı. Ardından Eslem'e 'Bu çuvalı hemen benim sırtıma yükle!' dedi. Eslem telaşla öne atılarak koskoca devlet başkanının çuval taşımasına gönlünün razı olmadığını, çuvalı kendisinin taşımak istediğini söyledi. Ancak Hz. Ömer kararlıydı.\n\nAteşe üflenen her nefeste yükselen kıvılcımlar, yalnızca tenceredeki çorbayı değil, çaresiz kalmış bir ailenin umutlarını da yeniden ısıtıp aydınlatıyordu. Çevredeki her detay, adalet nöbetleriyle korunan Medine'den Kudüs surlarına uzanan tarihi yollarda filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Hayır Eslem! Çuvalı hemen sırtıma koy. Kıyamet günü o aç çocukların vebalini ve benim yükümü de sen mi taşıyacaksın Eslem?",
            historicalNote:
              "Bunu Biliyor muydun? Beytülmâl, İslam devletinde yetimlerin, yoksulların, yolcuların ve tüm halkın ortak hazinesi ve erzak ambarıydı.",
            imagePath: "assets/images/omer_s4_carrying_flour.png",
            imageKey: "assets/images/omer_s4_carrying_flour.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Gece erzak deposundan çıkarılan ağır un çuvalı ve zeytinyağı testisinin omuzlanıp çöl yolunda taşınması.",
          },
          {
            id: "hz-omer-ch1-s8",
            sceneNumber: 8,
            title: "Dumanlar İçinde Pişen Sıcak Çorba",
            narration:
              "Hz. Ömer sırtında ağır un çuvalı, elinde yağ testisiyle nefes nefese Harre düzlüğündeki çadıra geri döndü. Çuvalı ateşin yanına indirdi, tenceredeki çakıl taşlarını döktü ve tencereyi temiz suyla yıkadı. Kendi elleriyle unu ve yağı tencereye koyup karıştırmaya başladı. Ateş sönmeye yüz tuttuğunda yere diz çöktü; başını toprağa kadar eğerek korları üfledi. Odun dumanları gür sakalının arasından süzülüyor, ama o yemek pişene kadar ateşin başından bir an bile çekilmiyordu.\n\nKarınları doyan çocukların yüzündeki tebessüm ve çadıra çöken huzur dolu uyku, adaletin merhametle birleştiğinde dünyayı nasıl güzelleştirdiğinin en canlı kanıtıydı. Sabır, dikkat ve samimiyetle atılan bu adım, hakkı ve eşitliği her şeyin üstünde tutan sarsılmaz bir vicdan ve sorumluluk duygusu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Hz. Ömer sırtında ağır un çuvalı, elinde yağ testisiyle nefes nefese Harre düzlüğündeki çadıra geri döndü. Çuvalı ateşin yanına indirdi, tenceredeki çakıl taşlarını döktü ve tencereyi temiz suyla yıkadı. Kendi elleriyle unu ve yağı tencereye koyup karıştırmaya başladı. Ateş sönmeye yüz tuttuğunda yere diz çöktü; başını toprağa kadar eğerek korları üfledi. Odun dumanları gür sakalının arasından süzülüyor, ama o yemek pişene kadar ateşin başından bir an bile çekilmiyordu.\n\nKarınları doyan çocukların yüzündeki tebessüm ve çadıra çöken huzur dolu uyku, adaletin merhametle birleştiğinde dünyayı nasıl güzelleştirdiğinin en canlı kanıtıydı. Sabır, dikkat ve samimiyetle atılan bu adım, hakkı ve eşitliği her şeyin üstünde tutan sarsılmaz bir vicdan ve sorumluluk duygusu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Hizmetkârı Eslem",
            dialogue:
              "Vallahi ateşin dumanları Hz. Ömer'in sakalının arasından çıkıyordu; o ise çocukların yemeği bir an önce pişsin diye ateşi üflemeye devam ediyordu.",
            historicalNote:
              "Bunu Biliyor muydun? O gece pişirilen un, yağ ve hurma karışımı sıcak yemeğe Arapçada 'Asîde' veya 'Harîre' denirdi; hem çok besleyici hem de hızlı pişen bir yemekti.",
            imagePath: "assets/images/omer_s5_cooking_soup.png",
            imageKey: "assets/images/omer_s5_cooking_soup.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Harlayan ateş, buharı tüten gerçek yemek ve yanındaki un çuvalı.",
          },
          {
            id: "hz-omer-ch1-s9",
            sceneNumber: 9,
            title: "Ağlayan Çocukların Kahkahası",
            narration:
              "Sıcak yemek piştiğinde Hz. Ömer kadından bir tabak istedi. Yemeği tabağa koydu, çocukların ağzı yanmasın diye kendi nefesiyle üfleyerek soğuttu ve küçük yavrulara tek tek yedirdi. Biraz önce açlıktan hıçkıra hıçkıra ağlayan üç çocuk, karınları doyunca ateşin etrafında neşeyle gülüşüp oynamaya, ardından da huzurla uykuya dalmaya başladı. Hz. Ömer, çocukların ağlamasını gülümsemeye dönüştürmeden oradan ayrılmadı; kadının 'Halifeliğe Ömer değil sen layıksın' duasına ise sadece tebessüm etti.\n\nTarihin altın sayfalarına kazınan bu asil duruş, insanları makam ve süslü elbiselerin değil, doğruluk ve hakkaniyetin yücelttiğini bütün dünyaya ilan ediyordu. O an adalet nöbetleriyle korunan Medine'den Kudüs surlarına uzanan tarihi yollarda hissedilen hakkı ve eşitliği her şeyin üstünde tutan sarsılmaz bir vicdan ve sorumluluk duygusu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Sıcak yemek piştiğinde Hz. Ömer kadından bir tabak istedi. Yemeği tabağa koydu, çocukların ağzı yanmasın diye kendi nefesiyle üfleyerek soğuttu ve küçük yavrulara tek tek yedirdi. Biraz önce açlıktan hıçkıra hıçkıra ağlayan üç çocuk, karınları doyunca ateşin etrafında neşeyle gülüşüp oynamaya, ardından da huzurla uykuya dalmaya başladı. Hz. Ömer, çocukların ağlamasını gülümsemeye dönüştürmeden oradan ayrılmadı; kadının 'Halifeliğe Ömer değil sen layıksın' duasına ise sadece tebessüm etti.\n\nTarihin altın sayfalarına kazınan bu asil duruş, insanları makam ve süslü elbiselerin değil, doğruluk ve hakkaniyetin yücelttiğini bütün dünyaya ilan ediyordu. O an adalet nöbetleriyle korunan Medine'den Kudüs surlarına uzanan tarihi yollarda hissedilen hakkı ve eşitliği her şeyin üstünde tutan sarsılmaz bir vicdan ve sorumluluk duygusu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Eslem! Onları ağlarken gördüğüm için gönlüm daralmıştı; şimdi karınları doyup gülerek uyuduklarını görmeden buradan ayrılmak istemedim.",
            historicalNote:
              "Bunu Biliyor muydun? Ertesi sabah kadın Halife'nin yanına gittiğinde gece kendi elleriyle yemek pişiren kişinin bizzat Halife Hz. Ömer olduğunu öğrenmiş ve ailesine düzenli maaş bağlanmıştır.",
            imagePath: "assets/images/artifact_justice_lantern.png",
            imageKey: "assets/images/artifact_justice_lantern.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Çadır ateşinin başında tahta kaşıkla pişen sıcak un çorbası ve kaselere doldurulan dumanı üstünde yemek.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Koskoca devletin başısın ve gece yarısı açlıktan taş kaynatan bu aileyi gördün. Erzak deposuna gittiğinde ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Hemen saray muhafızlarını uyandırıp çadıra bir araba erzak göndertirim.",
              feedback:
                "Yardım ulaşır ama o sorumluluğun ağırlığını ve mahcubiyetini bizzat kalbinde hissetmemiş olursun.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Kadına sabah erkenden Beytülmâl hazinesine gelmesini söylerim.",
              feedback:
                "Çocuklar o geceyi aç geçirir; gerçek adalet ve merhamet sabaha ertelemez!",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Gece yarısı erzak deposuna koşup ağır un çuvalını kendi sırtıma yüklenirim, ateşi üfleyip yemeği kendi ellerimle pişiririm!",
              feedback:
                "Tarihi Hakikat! Gerçek liderlik, mazlumun yükünü başkasına havale etmeden bizzat omuzlamaktır.",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Hizmetkârı Eslem \"Ey Ömer, çuvalı ben taşıyayım!\" dediğinde Hz. Ömer şu unutulmaz cevabı verdi: \"Kıyamet günü benim yükümü de sen mi taşıyacaksın Eslem?\" O gece çocukların karnı doyup yüzleri gülene kadar çadırın başından ayrılmadı.",
          quoteHighlight:
            "Kıyamet günü benim yükümü de sen mi taşıyacaksın Eslem?",
        },
        rewardArtifact: {
          id: "artifact-justice-lantern",
          name: "Gece Nöbeti Feneri",
          heroId: "hz-omer",
          chapterId: "hz-omer-ch1",
          imagePath: "assets/images/artifact_justice_lantern.png",
          pointType: "ADALET",
          pointLabel: "Adalet Puanı",
          points: 50,
          unlockedTitle: "Gece Nöbetçisi",
          shortDescription:
            "Medine sokaklarında mazlumları ve ihtiyaç sahiplerini ararken karanlığı aydınlatan pirinç ve kehribar camlı yağ feneri.",
          historicalNote:
            "Hz. Ömer dönemindeki gece devriyeleri, tarihte modern sosyal devlet anlayışının ve gece bekçiliği teşkilatının ilk örneklerinden biridir.",
          accentColor: "#F59E0B",
          hotspots: [
            {
              id: "lantern-flame",
              xPercent: 50,
              yPercent: 45,
              title: "Sönmeyen Zeytinyağı Fitili",
              secretFact:
                "Hz. Ömer devlet işlerini yaparken devletin mumunu, kendi özel işini konuşurken kendi cebinden aldığı mumu yakacak kadar kul hakkına dikkat ederdi!",
            },
            {
              id: "lantern-ring",
              xPercent: 50,
              yPercent: 18,
              title: "Gece Devriyesi Halkası",
              secretFact:
                "Hz. Ömer, Medine'de kurduğu 'Ases' sistemiyle şehirdeki yolcuların ve ailelerin güvenliğini her gece bizzat denetlerdi.",
            },
            {
              id: "lantern-base",
              xPercent: 52,
              yPercent: 78,
              title: "Dövme Bakır Gövde",
              secretFact:
                "Rüzgârlı çöl gecelerinde ateşin sönmemesi için fenerin alt kısmında özel hava delikleri bulunurdu.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Hz. Ömer un çuvalını neden yardımcısına taşıtmak yerine kendi sırtında taşımak istedi?",
          "Çevremizde yardıma ihtiyacı olan birini gördüğümüzde 'Başkası yardım eder' demek yerine biz hemen ne yapabiliriz?",
          "Hz. Ömer çocukların sadece doymasını değil, gülmesini de neden bekledi?",
        ],
      },

      // ------------------------------------------------------------------------
      // HZ. ÖMER - BÖLÜM 2: KUDÜS YOLUNDA TEK DEVE VE SIRAYLA BİNMEK (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "hz-omer-ch2",
        heroId: "hz-omer",
        chapterNumber: 2,
        title: "Kudüs Yolunda Tek Deve ve Sırayla Binmek",
        subtitle: "Bizi üstün kılan süslü elbiseler değil, adaletimizdir",
        estimatedMinutes: 8,
        visualMode: "POV_SILHOUETTE",
        scenes: [
          {
            id: "hz-omer-ch2-s1",
            sceneNumber: 1,
            title: "Kudüs'ten Gelen Tarihi Mektup",
            narration:
              "Hicretin on altıncı yılında Şam ve Filistin cephelerinden Medine'ye çok önemli bir haber ulaştı. Kudüs kuşatılmış, ancak şehirdeki Hristiyanların dini lideri Patrik Sophronius kan dökülmesini istemediğini bildirmişti. Patrik, eski kutsal kitaplarda Kudüs'ün anahtarlarını teslim alacak adil hükümdarın özelliklerinin yazılı olduğunu söylemiş ve 'Şehri yalnızca bizzat Halife Ömer gelirse ona teslim ederiz' şartını koşmuştu. Medine mescidinde toplanan sahabeler bu tarihi daveti heyecanla tartıştı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Hicretin on altıncı yılında Şam ve Filistin cephelerinden Medine'ye çok önemli bir haber ulaştı. Kudüs kuşatılmış, ancak şehirdeki Hristiyanların dini lideri Patrik Sophronius kan dökülmesini istemediğini bildirmişti. Patrik, eski kutsal kitaplarda Kudüs'ün anahtarlarını teslim alacak adil hükümdarın özelliklerinin yazılı olduğunu söylemiş ve 'Şehri yalnızca bizzat Halife Ömer gelirse ona teslim ederiz' şartını koşmuştu. Medine mescidinde toplanan sahabeler bu tarihi daveti heyecanla tartıştı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Komutan Ebû Ubeyde'nin Mektubu",
            dialogue:
              "Ey Müminlerin Emiri! Kudüs halkı barış istiyor ancak şehrin anahtarlarını yalnızca bizzat size teslim edeceklerini söylüyorlar. Yolunuzu gözlüyoruz.",
            historicalNote:
              "Bunu Biliyor muydun? Kudüs (o dönemki adıyla İliyâ), Hicrî 16 (MS 637) yılında tek damla kan dökülmeden barış antlaşmasıyla teslim alınmıştır.",
            imagePath: "assets/images/omer_ch2_s1_single_camel_departure.png",
            imageKey: "assets/images/omer_ch2_s1_single_camel_departure.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Medine'den Kudüs yönüne uzanan kervan yolu.",
          },
          {
            id: "hz-omer-ch2-s2",
            sceneNumber: 2,
            title: "Gösterişsiz Kervan: Tek Bir Deve",
            narration:
              "Dünyanın en güçlü devletlerinden birinin başkanı olan Hz. Ömer, Kudüs yolculuğu için ne altın işlemeli tahtlar ne de yüzlerce muhafızdan oluşan görkemli bir alay hazırlattı. Yanına sadece sadık hizmetkârını, bir su kırbasını, biraz arpa ekmeği ve hurma torbasını aldı. İkisinin bineceği sadece tek bir kızıl deve vardı! Medine halkı, koca bir ülkenin halifesinin bu kadar sade bir şekilde yola çıkışını hayranlık ve gözyaşlarıyla uğurladı.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Dünyanın en güçlü devletlerinden birinin başkanı olan Hz. Ömer, Kudüs yolculuğu için ne altın işlemeli tahtlar ne de yüzlerce muhafızdan oluşan görkemli bir alay hazırlattı. Yanına sadece sadık hizmetkârını, bir su kırbasını, biraz arpa ekmeği ve hurma torbasını aldı. İkisinin bineceği sadece tek bir kızıl deve vardı! Medine halkı, koca bir ülkenin halifesinin bu kadar sade bir şekilde yola çıkışını hayranlık ve gözyaşlarıyla uğurladı.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Yolculuğumuz gösteriş seferi değil, barış ve emanet seferidir. Bize bir deve, bir kırba su ve adaletli bir kalp yeter.",
            historicalNote:
              "Bunu Biliyor muydun? Medine ile Kudüs arasındaki yaklaşık 1.000 kilometrelik çöl ve vadi yolu o dönemde develerle haftalar süren zorlu bir yolculuktu.",
            imagePath: "assets/images/hz_omer_jerusalem_camel.png",
            imageKey: "assets/images/hz_omer_jerusalem_camel.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Çöl yolunda ilerleyen tek devenin yuları.",
          },
          {
            id: "hz-omer-ch2-s3",
            sceneNumber: 3,
            title: "Üçlü Nöbet Kuralı",
            narration:
              "Yola çıkar çıkmaz Hz. Ömer, hizmetkârına yolculuk boyunca hiç bozulmayacak adil bir kural koydu. Yol üç eşit nöbete bölünecekti: Birinci nöbette Halife Hz. Ömer deveye binecek, hizmetkârı yularından tutup yürüyecekti. İkinci nöbette hizmetkâr deveye binecek, koskoca Halife Ömer devenin yularından çekerek kumların üzerinde yaya yürüyecekti! Üçüncü nöbette ise hayvanın yorulmaması için ikisi birden yürüyecek ve deve yüksüz dinlenecekti.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Yola çıkar çıkmaz Hz. Ömer, hizmetkârına yolculuk boyunca hiç bozulmayacak adil bir kural koydu. Yol üç eşit nöbete bölünecekti: Birinci nöbette Halife Hz. Ömer deveye binecek, hizmetkârı yularından tutup yürüyecekti. İkinci nöbette hizmetkâr deveye binecek, koskoca Halife Ömer devenin yularından çekerek kumların üzerinde yaya yürüyecekti! Üçüncü nöbette ise hayvanın yorulmaması için ikisi birden yürüyecek ve deve yüksüz dinlenecekti.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Bu devede senin de benim kadar hakkın var, devenin de dinlenme hakkı var. Bir saat ben bineceğim, bir saat sen bineceksin, bir saat de ikimiz yürüyeceğiz!",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ömer sadece insanların değil, binek hayvanlarının da haklarını korur, develere taşıyabileceklerinden ağır yük vurulmasını yasaklardı.",
            imagePath: "assets/images/omer_ch3_s5_medina_camel_journey.png",
            imageKey: "assets/images/omer_ch3_s5_medina_camel_journey.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Çöl molasında dinlenen kervan ateşi.",
          },
          {
            id: "hz-omer-ch2-s4",
            sceneNumber: 4,
            title: "Câbiye Ordugâhında Komutanların Teklifi",
            narration:
              "Günler süren yolculuktan sonra Şam yakınlarındaki Câbiye ordugâhına ve ardından Kudüs vadilerine ulaştılar. İslam ordusunun ünlü komutanları Ebû Ubeyde bin Cerrâh ve Hâlid bin Velîd, Halife'yi karşılamaya geldi. Hz. Ömer'in üzerinde yamalı, sade bir hırka olduğunu görünce endişelendiler. Bizanslı rahiplerin ve Kudüs ileri gelenlerinin süslü ve ipekli kıyafetlere alışkın olduğunu düşünerek, Halife'ye beyaz bir küheylan at ve gösterişli bir elbise getirdiler.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Günler süren yolculuktan sonra Şam yakınlarındaki Câbiye ordugâhına ve ardından Kudüs vadilerine ulaştılar. İslam ordusunun ünlü komutanları Ebû Ubeyde bin Cerrâh ve Hâlid bin Velîd, Halife'yi karşılamaya geldi. Hz. Ömer'in üzerinde yamalı, sade bir hırka olduğunu görünce endişelendiler. Bizanslı rahiplerin ve Kudüs ileri gelenlerinin süslü ve ipekli kıyafetlere alışkın olduğunu düşünerek, Halife'ye beyaz bir küheylan at ve gösterişli bir elbise getirdiler.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Komutanlar",
            dialogue:
              "Ey Müminlerin Emiri! Kudüs'ün elçileri ve patrikleri sizi karşılayacak. Üzerinizdeki bu sade hırka yerine şu görkemli elbiseyi giyseniz ve şu cins ata binseniz daha heybetli olmaz mı?",
            historicalNote:
              "Bunu Biliyor muydun? O çağda imparatorlar şehirlere altın zırhlar, ipek pelerinler ve yüzlerce borazan eşliğinde girerdi.",
            imagePath: "assets/images/omer_ch2_s4_white_stallion_robe.png",
            imageKey: "assets/images/omer_ch2_s4_white_stallion_robe.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Kudüs vadisine doğru uzanan taşlı yol.",
            midDecision: {
              title: "ARA KARAR: Gösteriş mi, Tevazu mu?",
              question:
                "Yabancı elçilerin ve rahiplerin karşısına çıkacaksın. Komutanların sana süslü elbiseler ve gösterişli bir at getirdi. Ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Elçiler bizi küçümsemesin diye en süslü kaftanı giyer, hızla koşan beyaz ata binerim.",
                  feedback:
                    "Dış görünüşle kazanılan saygı geçicidir; gerçek saygınlık doğruluk ve adaletle kazanılır.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Gösterişli elbiseleri reddederim; 'Bizi üstün kılan süslü kıyafetler değil, adaletimizdir!' diyerek sade halimi korurum.",
                  feedback:
                    "Doğru karar! Hz. Ömer gösterişi reddetti ve tarihi cevabıyla komutanlarına tevazu dersi verdi.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "hz-omer-ch2-s5",
            sceneNumber: 5,
            title: "Şehre Girerken Gelen Binme Sırası",
            narration:
              "Hz. Ömer komutanların getirdiği gösterişli kıyafetleri geri çevirip kendi devemi ve sadeliğimi değişmem dedi. Tam Kudüs surlarının göründüğü zeytinlikli vadiye vardıklarında, nöbetleşe binme kuralına göre deveye binme sırası hizmetkârına geldi! Hz. Ömer hiç tereddüt etmeden deveden indi ve yuları eline aldı. Hizmetkârı mahcup olarak 'Ey Halife! Şehrin kapısına geldik, bütün Kudüs halkı surlardan bize bakıyor; lütfen siz binin!' diye yalvardı.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Hz. Ömer komutanların getirdiği gösterişli kıyafetleri geri çevirip kendi devemi ve sadeliğimi değişmem dedi. Tam Kudüs surlarının göründüğü vadiye vardıklarında, nöbetleşe binme kuralına göre deveye binme sırası hizmetkârına geldi! Hz. Ömer hiç tereddüt etmeden deveden indi ve yuları eline aldı. Hizmetkârı mahcup olarak 'Ey Halife! Şehrin kapısına geldik, bütün Kudüs halkı surlardan bize bakıyor; lütfen siz binin!' diye yalvardı.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hizmetkârı",
            dialogue:
              "Ey Müminlerin Emiri! Surların üzerindeki herkes bize bakıyor. Ben devenin üstünde, siz ise yerde yürürseniz insanlar beni Halife, sizi hizmetkâr sanacak!",
            historicalNote:
              "Bunu Biliyor muydun? Gerçek adalet, kimse görmezken uygulandığı gibi herkesin baktığı en önemli anlarda da kurallardan taviz vermemektir.",
            imagePath: "assets/images/ebubekir_s1_dawn_streets.png",
            imageKey: "assets/images/ebubekir_s1_dawn_streets.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Devenin yularını tutan el ve uzaktaki Kudüs surları.",
          },
          {
            id: "hz-omer-ch2-s6",
            sceneNumber: 6,
            title: "Su Birikintisi ve Çıkarılan Pabuçlar",
            narration:
              "Kudüs kapısının hemen önünde yağmurdan kalan çamurlu bir su birikintisi vardı. Devenin üzerinde hizmetkâr oturuyor, Halife Hz. Ömer ise yerde yürüyordu. Suya geldiklerinde Hz. Ömer pabuçlarını çıkardı, koltuğunun altına sıkıştırdı, cübbesinin eteklerini topladı ve bir eliyle devenin yularını çekerek çamurlu sudan çıplak ayakla geçti! Komutan Ebû Ubeyde dayanamayıp yanına koştu ve insanların önünde bunun yanlış anlaşılacağını söyledi.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Kudüs kapısının hemen önünde yağmurdan kalan çamurlu bir su birikintisi vardı. Devenin üzerinde hizmetkâr oturuyor, Halife Hz. Ömer ise yerde yürüyordu. Suya geldiklerinde Hz. Ömer pabuçlarını çıkardı, koltuğunun altına sıkıştırdı, cübbesinin eteklerini topladı ve bir eliyle devenin yularını çekerek çamurlu sudan çıplak ayakla geçti! Komutan Ebû Ubeyde dayanamayıp yanına koştu ve insanların önünde bunun yanlış anlaşılacağını söyledi.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Komutan Ebû Ubeyde bin Cerrâh",
            dialogue:
              "Ey Müminlerin Emiri! Bugün burada büyük bir iş yapılıyor; Kudüs'ün ileri gelenleri sizi karşılamaya çıktı. Böyle yaya ve yular çeker halde görünmenizden endişe ettik!",
            historicalNote:
              "Bunu Biliyor muydun? Bu olay İslam tarihinin en meşhur sahnelerinden biridir ve hem İslam hem de Doğu Hristiyan kaynaklarında hayranlıkla kaydedilmiştir.",
            imagePath: "assets/images/omer_ch2_s6_muddy_water_camel.png",
            imageKey: "assets/images/omer_ch2_s6_muddy_water_camel.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Kudüs taş yolu ve sur kapısı.",
          },
          {
            id: "hz-omer-ch2-s7",
            sceneNumber: 7,
            title: "Asırları Aşan Adalet Sözü",
            narration:
              "Hz. Ömer olduğu yerde durdu ve Ebû Ubeyde'ye tarihe altın harflerle kazınacak o cevabı verdi. Söz verdiğimiz nöbet sırasını insanların gözüne girmek için bozarsak adaletimizin hiçbir anlamı kalmaz dedi. İnsanın değerinin giydiği ipek kaftanda veya bindiği süslü atta değil, kalbindeki doğrulukta ve kul hakkına gösterdiği saygıda olduğunu hatırlattı. Surların önünde bekleyen Kudüs heyeti ise gördükleri manzara karşısında derin bir sessizliğe bürünmüştü.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Hz. Ömer olduğu yerde durdu ve Ebû Ubeyde'ye tarihe altın harflerle kazınacak o cevabı verdi. Söz verdiğimiz nöbet sırasını insanların gözüne girmek için bozarsak adaletimizin hiçbir anlamı kalmaz dedi. İnsanın değerinin giydiği ipek kaftanda veya bindiği süslü atta değil, kalbindeki doğrulukta ve kul hakkına gösterdiği saygıda olduğunu hatırlattı. Surların önünde bekleyen Kudüs heyeti ise gördükleri manzara karşısında derin bir sessizliğe bürünmüştü.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Ey Ebû Ubeyde! Keşke bu sözü senden başkası söyleseydi! Biz zillette iken Allah bizi İslam ve adaletle aziz kıldı. Eğer üstünlüğü adaletten başka yerde, gösterişte ararsak itibarımızı kaybederiz!",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ömer'in bu sözü, devlet yönetiminde kibir ve gösterişin değil, hakkaniyetin esas olduğunu gösteren temel ilkelerden biri olmuştur.",
            imagePath: "assets/images/omer_ch2_jerusalem_key.png",
            imageKey: "assets/images/omer_ch2_jerusalem_key.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Kudüs kapıları önünde vakur duruş.",
          },
          {
            id: "hz-omer-ch2-s8",
            sceneNumber: 8,
            title: "Patrik Sophronius'un Hayranlığı",
            narration:
              "Kudüs Patriği Sophronius önce devenin üzerindeki hizmetkârı Halife sanarak ona doğru yürüdü. Ancak hizmetkâr eliyle devenin yularını tutan kişiyi işaret ederek 'Halife ben değilim, devenin yularını tutan kişidir; şu an binme sırası bende olduğu için ben biniyorum!' dedi. Bunu duyan Patrik Sophronius hayretler içinde kaldı. Eski kitaplarda okuduğu adil ve mütevazı liderin tam karşısında durduğunu anlayarak Kudüs'ün ağır demir anahtarlarını saygıyla Hz. Ömer'e sundu.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Kudüs Patriği Sophronius önce devenin üzerindeki hizmetkârı Halife sanarak ona doğru yürüdü. Ancak hizmetkâr eliyle devenin yularını tutan kişiyi işaret ederek 'Halife ben değilim, devenin yularını tutan kişidir; şu an binme sırası bende olduğu için ben biniyorum!' dedi. Bunu duyan Patrik Sophronius hayretler içinde kaldı. Eski kitaplarda okuduğu adil ve mütevazı liderin tam karşısında durduğunu anlayarak Kudüs'ün ağır demir anahtarlarını saygıyla Hz. Ömer'e sundu.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Kudüs Patriği Sophronius",
            dialogue:
              "Gerçekten de kitaplarımızda anlatılan adil lider budur! Hizmetkârının hakkını bile çiğnemeyen bir hükümdarın sözüne ve adaletine tüm kalbimizle güveniriz.",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ömer Kudüs'ü gezerken namaz vakti girdiğinde, ileride Müslümanlar burayı camiye çevirmesin diye kilisenin içinde değil, dışarıdaki merdivenlerde namaz kılmıştır!",
            imagePath: "assets/images/omer_ch2_s8_sophronius_covenant.png",
            imageKey: "assets/images/omer_ch2_s8_sophronius_covenant.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Kudüs kapılarının barışla açılışı.",
          },
          {
            id: "hz-omer-ch2-s9",
            sceneNumber: 9,
            title: "Kudüs Barış Ahidnamesi (Ömer Emanname)",
            narration:
              "Şehre barışla giren Hz. Ömer, Kudüs'teki tüm insanların canlarına, mallarına, ibadethanelerine ve inançlarına dokunulmayacağını garanti altına alan ünlü 'Kudüs Emanname'sini yazdırdı. Hiç kimsenin zorlanmayacağını, kimsenin evinin veya mabedinin yıkılmayacağını mühürledi. Tek bir deveyle çıktığı yolculuk, tarihin en barışçıl ve en adil şehir teslimiyle taçlandı; Kudüs asırlar sürecek bir huzur ve birlikte yaşama dönemine kavuştu.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Şehre barışla giren Hz. Ömer, Kudüs'teki tüm insanların canlarına, mallarına, ibadethanelerine ve inançlarına dokunulmayacağını garanti altına alan ünlü 'Kudüs Emanname'sini yazdırdı. Hiç kimsenin zorlanmayacağını, kimsenin evinin veya mabedinin yıkılmayacağını mühürledi. Tek bir deveyle çıktığı yolculuk, tarihin en barışçıl ve en adil şehir teslimiyle taçlandı; Kudüs asırlar sürecek bir huzur ve birlikte yaşama dönemine kavuştu.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hz. Ömer (Kudüs Ahidnamesi)",
            dialogue:
              "Bu ahidname, İliyâ (Kudüs) halkına verilen emandır: Onların canlarına, mallarına ve mabetlerine asla dokunulmayacak, hiç kimseye zarar verilmeyecektir.",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ömer'in Kudüs Ahidnamesi, insanlık tarihinde din ve vicdan özgürlüğünü güvence altına alan en eski yazılı insan hakları belgelerinden biridir.",
            imagePath: "assets/images/artifact_justice_lantern.png",
            imageKey: "assets/images/artifact_justice_lantern.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Kudüs'ün taş kemerli kapıları önünde zeytin dalları arasında sunulan tarihi altın şehir anahtarı.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Kudüs kapılarına vardığında bütün şehir surlardan sana bakıyor ama deveye binme sırası hizmetkârında! Komutanlar 'Bari şimdi siz binin' diyor. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Elçilere karşı heybetli görünmek için hizmetkârı indirip deveye kendim binerim.",
              feedback:
                "İnsanların bakışları için verilen sözü ve nöbet sırasını bozmak adalete gölge düşürür.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Hizmetkârı yürütür, kendime komutanlardan süslü bir savaş atı isterim.",
              feedback:
                "Yol arkadaşını geride bırakıp gösterişe yönelmek Hz. Ömer'in ahlakına uymaz.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Adalet sırasını bozmam! Hizmetkârımı deveye bindirir, devenin yularından tutarak Kudüs kapısından yaya girerim!",
              feedback:
                "Tarihi Hakikat! Bizi üstün kılan süslü elbiseler ve gösteriş değil, sarsılmaz adaletimizdir!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Hz. Ömer nöbet sırasını bozmadı; hizmetkârı devede otururken kendisi devenin yularını çekerek Kudüs'e girdi. Patrik Sophronius bu eşsiz adaleti görünce hayranlıkla şehrin anahtarlarını teslim etti ve ünlü Kudüs Barış Ahidnamesi imzalandı.",
          quoteHighlight:
            "Biz öyle bir milletiz ki Allah bizi adaletle aziz kıldı; üstünlüğü gösterişte ararsak itibarımızı kaybederiz!",
        },
        rewardArtifact: {
          id: "artifact-jerusalem-key",
          name: "Kudüs Emanet Anahtarı",
          heroId: "hz-omer",
          chapterId: "hz-omer-ch2",
          imagePath: "assets/images/omer_ch2_jerusalem_key.png",
          pointType: "ADALET",
          pointLabel: "Adalet Puanı",
          points: 50,
          unlockedTitle: "Kudüs Emanetçisi",
          shortDescription:
            "Tek damla kan dökülmeden barış ve nöbetleşe adaletle teslim alınan Kudüs'ün tarihi barış sembolü.",
          historicalNote:
            "Hz. Ömer'in Kudüs'e girişinde gösterdiği tevazu ve imzaladığı Emanname, asırlar boyunca farklı inançların bir arada barış içinde yaşamasını sağlamıştır.",
          accentColor: "#F59E0B",
          hotspots: [
            {
              id: "key-seal",
              xPercent: 50,
              yPercent: 25,
              title: "Ömer Emanname Mührü",
              secretFact:
                "Ahidnamede Kudüs halkının mabetlerine ve mallarına asla dokunulmayacağı bizzat sahabe komutanların şahitliğiyle kayıt altına alınmıştır.",
            },
            {
              id: "camel-turn",
              xPercent: 48,
              yPercent: 55,
              title: "Üçlü Nöbet Adaleti",
              secretFact:
                "Medine'den Kudüs'e kadar Halife, hizmetkârı ve deve arasında uygulanan eşit nöbet sistemi tarihte eşine az rastlanır bir eşitlik örneğidir.",
            },
            {
              id: "prayer-steps",
              xPercent: 52,
              yPercent: 78,
              title: "Mabede Saygı İlkesi",
              secretFact:
                "Hz. Ömer, Hristiyanların ibadethanesi korunabilsin diye Patrik'in davetine rağmen kilisenin içinde değil, dışarıda namaz kılmıştır.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Hz. Ömer neden herkesin kendisini izlediği Kudüs kapısında bile deveye binme sırasını bozmadı?",
          "Verdiğimiz bir sözü veya sırayı sadece işimize geldiğinde değil, zor olduğunda da tutmak neden önemlidir?",
          "İnsanların bize kıyafetimiz için mi yoksa dürüstlüğümüz için mi saygı duymasını isteriz?",
        ],
      },

      // ------------------------------------------------------------------------
      // HZ. ÖMER - BÖLÜM 3: MISIR VALİSİNİN OĞLU VE ADALET DİVANI (8 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "hz-omer-ch3",
        heroId: "hz-omer",
        chapterNumber: 3,
        title: "Mısır Valisinin Oğlu ve Adalet Divanı",
        subtitle: "Kanun önünde valinin oğlu ile sade bir vatandaş eşittir",
        estimatedMinutes: 8,
        visualMode: "POV_SILHOUETTE",
        scenes: [
          {
            id: "hz-omer-ch3-s1",
            sceneNumber: 1,
            title: "Nil Kıyısında Büyük At Yarışı",
            narration:
              "Mısır'ın Fustat şehrinde güneşli bir bahar günü büyük bir at yarışı düzenlenmişti. Nil Nehri kıyısındaki geniş meydanda yüzlerce insan toplanmış, en hızlı Arap ve Mısır atlarının yarışını heyecanla izliyordu. Yarışa Mısır Valisi Amr bin Âs'ın oğlu Muhammed'in çok güvendiği cins atı da katılmıştı. Ayrıca Mısır'ın yerli halkından olan sıradan bir Kıptî gencin kendi elleriyle yetiştirdiği rüzgâr gibi çevik bir atı da başlangıç çizgisindeydi.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Mısır'ın Fustat şehrinde güneşli bir bahar günü büyük bir at yarışı düzenlenmişti. Nil Nehri kıyısındaki geniş meydanda yüzlerce insan toplanmış, en hızlı Arap ve Mısır atlarının yarışını heyecanla izliyordu. Yarışa Mısır Valisi Amr bin Âs'ın oğlu Muhammed'in çok güvendiği cins atı da katılmıştı. Ayrıca Mısır'ın yerli halkından olan sıradan bir Kıptî gencin kendi elleriyle yetiştirdiği rüzgâr gibi çevik bir atı da başlangıç çizgisindeydi.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Meydandaki İzleyiciler",
            dialogue:
              "Bakın, toz bulutunun içinden önde çıkan at Vali'nin oğlunun atı değil; Mısırlı gencin atı birinci geliyor!",
            historicalNote:
              "Bunu Biliyor muydun? Mısır'da Amr bin Âs tarafından kurulan Fustat şehri, bugünkü Kahire şehrinin ilk çekirdeğidir.",
            imagePath: "assets/images/omer_ch3_s1_egypt_horse_race.png",
            imageKey: "assets/images/omer_ch3_s1_egypt_horse_race.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "1. Şahıs POV: Çöl ufku ve uzak kervan yolu.",
          },
          {
            id: "hz-omer-ch3-s2",
            sceneNumber: 2,
            title: "Kibirle Yapılan Haksızlık",
            narration:
              "Yarış bittiğinde Mısırlı Kıptî gencin atı bitiş çizgisini açık ara birinci olarak geçti. Genç sevinçle atının boynuna sarılırken, yarışı kaybeden Vali'nin oğlu öfkeyle yanına geldi. Babasının makamına ve ailesinin şöhretine güvenerek kibirlenen Vali'nin oğlu, 'Sen kim oluyorsun da benim gibi soylu ve şerefli bir ailenin oğlunun atını geçiyorsun!' diyerek gence haksız yere kamçısıyla vurdu. Meydandaki herkes buz kesmiş, genç ise uğradığı bu haksızlık karşısında çok üzülmüştü.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Yarış bittiğinde Mısırlı Kıptî gencin atı bitiş çizgisini açık ara birinci olarak geçti. Genç sevinçle atının boynuna sarılırken, yarışı kaybeden Vali'nin oğlu öfkeyle yanına geldi. Babasının makamına ve ailesinin şöhretine güvenerek kibirlenen Vali'nin oğlu, 'Sen kim oluyorsun da benim gibi soylu ve şerefli bir ailenin oğlunun atını geçiyorsun!' diyerek gence haksız yere kamçısıyla vurdu. Meydandaki herkes buz kesmiş, genç ise uğradığı bu haksızlık karşısında çok üzülmüştü.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Vali'nin Oğlu",
            dialogue:
              "Ben şerefli ve soylu insanların oğluyum! Senin atın benim atımı nasıl geçebilir?",
            historicalNote:
              "Bunu Biliyor muydun? İslam hukukunda soy, zenginlik veya makam kimseye bir başkasına haksızlık yapma ayrıcalığı vermez.",
            imagePath: "assets/images/hz_omer_egypt_race.png",
            imageKey: "assets/images/hz_omer_egypt_race.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Çöl akşamında adalet arayışı.",
          },
          {
            id: "hz-omer-ch3-s3",
            sceneNumber: 3,
            title: "Çölleri Aşan Hak Arayışı",
            narration:
              "Mazlum genç akşam eve döndüğünde olanları babasına anlattı. Babası oğlunun gözyaşlarını sildi ve 'Oğlum, sakın umutsuzluğa kapılma! Medine'de Ömer adında öyle adil bir halife var ki, onun yanında ne valinin ne de soylunun haksızlığı geçer. Hazırlan, Medine'ye gidiyoruz!' dedi. Baba ve oğul, haklarını aramak için kavurucu Sina Çölü'nü ve Kızıldeniz kıyılarını aşarak haftalar süren bir yolculukla Medine'ye ulaştılar.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Mazlum genç akşam eve döndüğünde olanları babasına anlattı. Babası oğlunun gözyaşlarını sildi ve 'Oğlum, sakın umutsuzluğa kapılma! Medine'de Ömer adında öyle adil bir halife var ki, onun yanında ne valinin ne de soylunun haksızlığı geçer. Hazırlan, Medine'ye gidiyoruz!' dedi. Baba ve oğul, haklarını aramak için kavurucu Sina Çölü'nü ve Kızıldeniz kıyılarını aşarak haftalar süren bir yolculukla Medine'ye ulaştılar.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Mısırlı Gencin Babası",
            dialogue:
              "Korkma evladım! Medine'de zulme asla razı olmayan Halife Ömer var. Çölleri aşacağız ve hakkımızı bizzat ondan isteyeceğiz.",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ömer döneminde hangi dinden veya milletten olursa olsun her vatandaş, kapıda hiçbir engelle karşılaşmadan doğrudan Halife'ye şikâyetini iletebilirdi.",
            imagePath: "assets/images/omer_ch3_s5_medina_camel_journey.png",
            imageKey: "assets/images/omer_ch3_s5_medina_camel_journey.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Medine sokaklarına varış.",
          },
          {
            id: "hz-omer-ch3-s4",
            sceneNumber: 4,
            title: "Medine Mescidinde Şikâyet",
            narration:
              "Mısırlı baba ve oğul Medine'ye vardıklarında saray veya muhafız ordusu aradılar ama Hz. Ömer'i mescidin avlusunda sade kıyafetiyle halkın dertlerini dinlerken buldular. Genç öne çıktı; ne Müslüman olduğunu ne de zengin bir aileden geldiğini gizlemeden, Mısır'daki at yarışında birinci olduğu için Vali Amr bin Âs'ın oğlu tarafından haksız yere cezalandırıldığını anlattı. Hz. Ömer'in kaşları çatıldı; adaletin çiğnenmesi onu derinden sarsmıştı.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Mısırlı baba ve oğul Medine'ye vardıklarında saray veya muhafız ordusu aradılar ama Hz. Ömer'i mescidin avlusunda sade kıyafetiyle halkın dertlerini dinlerken buldular. Genç öne çıktı; ne Müslüman olduğunu ne de zengin bir aileden geldiğini gizlemeden, Mısırlı bir Kıptî olarak at yarışında birinci olduğu için Vali Amr bin Âs'ın oğlu tarafından haksız yere cezalandırıldığını anlattı. Hz. Ömer'in kaşları çatıldı; adaletin çiğnenmesi onu derinden sarsmıştı.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Mısırlı Kıptî Genç",
            dialogue:
              "Ey Müminlerin Emiri! Sadece atım yarışı kazandığı için Vali Amr bin Âs'ın oğlu 'Ben soyluların oğluyum' diyerek bana zulmetti. Adaletinize sığındım!",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ömer her yıl Hac mevsiminde bütün valilerini Mekke ve Medine'de toplar, halktan herhangi bir şikâyet olup olmadığını açıkça sorardı.",
            imagePath: "assets/images/ebubekir_s1_dawn_streets.png",
            imageKey: "assets/images/ebubekir_s1_dawn_streets.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Medine'de adalet meclisi.",
            midDecision: {
              title: "ARA KARAR: Uzak Bir Eyaletten Gelen Şikâyet",
              question:
                "Çok uzak bir ülkeden sıradan bir genç gelip senin atadığın en ünlü valinin oğlundan şikâyetçi oldu. İlk olarak ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Vali çok önemli bir devlet adamıdır diyerek gence biraz harçlık verip Mısır'a geri gönderirim.",
                  feedback:
                    "Haksızlığı örtbas etmek adaleti yıkar; gerçek adalet herkesin huzurunda gerçeği ortaya çıkarmaktır.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Genci ve babasını Medine'de misafir eder, derhal Mısır Valisi'ni ve oğlunu mahkemeye hesap vermeye çağırırım!",
                  feedback:
                    "Harika seçim! Hz. Ömer Mısırlı genci kendi misafiri yaptı ve Vali ile oğlunu derhal Medine'ye çağırdı.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "hz-omer-ch3-s5",
            sceneNumber: 5,
            title: "Mısır'a Gönderilen Ferman",
            narration:
              "Hz. Ömer hemen eline kalemi alıp Mısır Valisi Amr bin Âs'a kısa ve kesin bir ferman yazdı: 'Bu mektubumu okur okumaz oğlun Muhammed'i de yanına alarak derhal Medine'ye gel!' Bu sırada Mısırlı genci ve babasını karar görülene kadar Medine'nin en güzel şekilde ağırlanan misafirleri yaptı. Haftalar sonra Hac mevsiminde, bütün eyaletlerden gelen insanların toplandığı bir günde Vali Amr bin Âs ve oğlu Medine'ye ulaştı.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Hz. Ömer hemen eline kalemi alıp Mısır Valisi Amr bin Âs'a kısa ve kesin bir ferman yazdı: 'Bu mektubumu okur okumaz oğlun Muhammed'i de yanına alarak derhal Medine'ye gel!' Bu sırada Mısırlı genci ve babasını karar görülene kadar Medine'nin en güzel şekilde ağırlanan misafirleri yaptı. Haftalar sonra Hac mevsiminde, bütün eyaletlerden gelen insanların toplandığı bir günde Vali Amr bin Âs ve oğlu Medine'ye ulaştı.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Bizim yanımızda güçsüz olan, hakkını alıncaya kadar en güçlüdür; haksızlık yapan güçlü ise kendisinden hak alınıncaya kadar en zayıftır!",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ömer'in bu ilkesi, modern hukuk devletinin temel taşı olan 'kanun önünde eşitlik' prensibinin en berrak örneklerinden biridir.",
            imagePath: "assets/images/omer_ch2_s8_sophronius_covenant.png",
            imageKey: "assets/images/omer_ch2_s8_sophronius_covenant.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Açık mahkeme meydanı.",
          },
          {
            id: "hz-omer-ch3-s6",
            sceneNumber: 6,
            title: "Herkesin Önünde Kurulan Adalet Divanı",
            narration:
              "Hz. Ömer, davayı kapalı kapılar ardında değil, herkesin görebileceği açık bir mecliste kurdu. Bir tarafta koskoca Mısır Valisi ve oğlu, diğer tarafta ise Mısırlı Kıptî genç yan yana durdu. Hz. Ömer önce Vali'nin oğluna olayın doğru olup olmadığını sordu. Vali'nin oğlu başını öne eğerek yarışta geçildiği için öfkelenip gence vurduğunu itiraf etti. Suç sabit olmuş, sıra adaletin hükmüne gelmişti.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Hz. Ömer, davayı kapalı kapılar ardında değil, herkesin görebileceği açık bir mecliste kurdu. Bir tarafta koskoca Mısır Valisi ve oğlu, diğer tarafta ise Mısırlı Kıptî genç yan yana durdu. Hz. Ömer önce Vali'nin oğluna olayın doğru olup olmadığını sordu. Vali'nin oğlu başını öne eğerek yarışta geçildiği için öfkelenip gence vurduğunu itiraf etti. Suç sabit olmuş, sıra adaletin hükmüne gelmişti.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Ey Mısırlı genç! Şimdi tam karşında duruyorlar; sana yapılan haksızlığın karşılığını istemek senin en doğal hakkındır.",
            historicalNote:
              "Bunu Biliyor muydun? İslam adalet anlayışında mahkemelerin halka açık yapılması, hiçbir yöneticinin gizli ayrıcalık görememesini sağlardı.",
            imagePath: "assets/images/ali_s2_kadi_shurayh_court.png",
            imageKey: "assets/images/ali_s2_kadi_shurayh_court.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Adalet divanında hak ve eşitlik.",
          },
          {
            id: "hz-omer-ch3-s7",
            sceneNumber: 7,
            title: "Tarihe Geçen Özgürlük Hitabı",
            narration:
              "Hz. Ömer, Mısırlı gencin hakkını teslim ettikten sonra Vali Amr bin Âs'a ve oğluna döndü. Sesi bütün meydanda yankılanarak insanlık tarihinin en unutulmaz özgürlük bildirgelerinden birini dile getirdi. Hiçbir insanın doğuştan bir diğerinden üstün olmadığını, her bebeğin annesinden hür ve eşit doğduğunu vurguladı. Meydandaki herkes bu büyük adalet dersi karşısında derin bir saygıyla sustu.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Hz. Ömer, Mısırlı gencin hakkını teslim ettikten sonra Vali Amr bin Âs'a ve oğluna döndü. Sesi bütün meydanda yankılanarak insanlık tarihinin en unutulmaz özgürlük bildirgelerinden birini dile getirdi. Hiçbir insanın doğuştan bir diğerinden üstün olmadığını, her bebeğin annesinden hür ve eşit doğduğunu vurguladı. Meydandaki herkes bu büyük adalet dersi karşısında derin bir saygıyla sustu.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Hz. Ömer",
            dialogue:
              "Ey Amr! Annelerinden hür ve özgür olarak doğan insanları siz ne zamandan beri köleleştirdiniz?",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ömer'in 'Annelerinden özgür doğan insanları ne zamandan beri köleleştirdiniz?' sözü, Fransız İhtilali'nden 1.150 yıl önce söylenmiş bir insan hakları manifestosudur!",
            imagePath: "assets/images/omer_ch3_s8_justice_verdict.png",
            imageKey: "assets/images/omer_ch3_s8_justice_verdict.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Adalet ışığının parlayışı.",
          },
          {
            id: "hz-omer-ch3-s8",
            sceneNumber: 8,
            title: "Başları Dik Dönen Mazlumlar",
            narration:
              "Mahkeme bittiğinde Mısırlı genç ve babası, koskoca bir devletin en üst makamında kendi haklarının bir valiye karşı bile nasıl korunduğunu görerek sevinç gözyaşları döktüler. Hz. Ömer onlara Mısır'a döndüklerinde kimsenin kendilerine en ufak bir kötülük yapamayacağına dair güvence verdi. Baba ve oğul, başları dik ve kalpleri huzurla dolu olarak ülkelerine döndüler; Medine'deki bu adalet destanı ise dilden dile tüm dünyaya yayıldı.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Mahkeme bittiğinde Mısırlı genç ve babası, koskoca bir devletin en üst makamında kendi haklarının bir valiye karşı bile nasıl korunduğunu görerek sevinç gözyaşları döktüler. Hz. Ömer onlara Mısır'a döndüklerinde kimsenin kendilerine en ufak bir kötülük yapamayacağına dair güvence verdi. Baba ve oğul, başları dik ve kalpleri huzurla dolu olarak ülkelerine döndüler; Medine'deki bu adalet destanı ise dilden dile tüm dünyaya yayıldı.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Mısırlı Kıptî Genç",
            dialogue:
              "Hakkımı eksiksiz aldım ey Müminlerin Emiri! Sizin bu adaletiniz var oldukça hiçbir mazlumun boynu bükük kalmaz.",
            historicalNote:
              "Bunu Biliyor muydun? Bu olaydan sonra Mısır halkı İslam yönetiminin adaletine büyük bir güven duymuş ve bölge asırlarca huzur içinde yaşamıştır.",
            imagePath: "assets/images/omer_ch2_s1_single_camel_departure.png",
            imageKey: "assets/images/omer_ch2_s1_single_camel_departure.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Medine'de huzur ve adalet.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Uzak bir eyaletten sıradan bir genç gelip Vali'nin oğlunun kendisine 'Ben soyluların oğluyum' diyerek haksızlık yaptığını kanıtladı. Nasıl hüküm verirsin?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Vali gücenmesin diye olayı gizlice kapatır, gence hazineden biraz altın veririm.",
              feedback:
                "Haksızlığı parayla kapatmak, güçlülerin zayıfları ezmesine izin vermek demektir!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Vali'nin oğluna sadece bir mektup yazıp bir daha böyle yapmamasını tavsiye ederim.",
              feedback:
                "Mazlumun hakkı herkesin önünde teslim edilmedikçe gerçek adalet yerini bulmaz.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Vali'yi ve oğlunu herkesin önünde mahkemeye çıkarır, gencin hakkını teslim eder ve 'Annelerinden özgür doğan insanları ne zamandan beri köleleştirdiniz?' diye uyarırım!",
              feedback:
                "Tarihi Hakikat! Kanun ve adalet önünde valinin oğlu ile sade bir vatandaş tamamen eşittir!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Hz. Ömer, Mısır Valisi Amr bin Âs ve oğlunu Medine'ye getirtti. Açık divanda Mısırlı Kıptî gencin hakkını teslim etti ve tarihe geçen şu sözü söyledi: \"Annelerinden özgür doğan insanları ne zamandan beri köleleştirdiniz?\"",
          quoteHighlight:
            "Annelerinden özgür doğan insanları ne zamandan beri köleleştirdiniz?",
        },
        rewardArtifact: {
          id: "artifact-justice-staff",
          name: "Adalet Divanı Asası",
          heroId: "hz-omer",
          chapterId: "hz-omer-ch3",
          imagePath: "assets/images/hz_omer_egypt_race.png",
          pointType: "ADALET",
          pointLabel: "Adalet Puanı",
          points: 50,
          unlockedTitle: "Hakikat Hakimi",
          shortDescription:
            "Güçlü ile güçsüzü mahkeme huzurunda eşit tutan ve her insanın doğuştan özgür olduğunu simgeleyen adalet nişanı.",
          historicalNote:
            "Hz. Ömer'in kurduğu bağımsız kadılık (mahkeme) sistemi, valilerin ve yöneticilerin bile kanun önünde hesap vermesini sağlamıştır.",
          accentColor: "#F59E0B",
          hotspots: [
            {
              id: "staff-top",
              xPercent: 50,
              yPercent: 22,
              title: "Eşitlik İlkesi",
              secretFact:
                "Hz. Ömer döneminde kadılar (hakimler) valilerden bağımsız atanırdı ve valileri bile yargılama yetkisine sahipti.",
            },
            {
              id: "staff-mid",
              xPercent: 48,
              yPercent: 52,
              title: "Doğuştan Özgürlük",
              secretFact:
                "'Annelerinden özgür doğan insanlar' sözü, insan hakları tarihinin en erken ve en güçlü eşitlik vurgularından biridir.",
            },
            {
              id: "staff-base",
              xPercent: 52,
              yPercent: 78,
              title: "Mazlumun Güvencesi",
              secretFact:
                "Müslüman olsun ya da olmasın her vatandaş, en yüksek divanda hakkını doğrudan arayabilirdi.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Mısırlı genç neden hakkını aramak için o kadar uzun bir çöl yolculuğuna çıkmaktan çekinmedi?",
          "Hz. Ömer'in 'Annelerinden özgür doğan insanlar' sözü bize insanların eşitliği hakkında ne anlatıyor?",
          "Okulda veya oyunda haksızlığa uğrayan bir arkadaşımızı gördüğümüzde nasıl onun yanında durabiliriz?",
        ],
      },
    ],
  },

  // ============================================================================
  // 3. HZ. ALİ (2 BÖLÜM - HER BÖLÜM 9 SAHNE + 4. SAHNE ARA KARAR + KADER ANI)
  // ============================================================================
  {
    id: "hz-ali",
    name: "Hz. Ali",
    heroClass: "ADALET_VICDANI",
    heroClassLabel: "Adalet ve Vicdan",
    title: "İlim Şehrinin Kapısı ve Adalet Timsali",
    era: "7. Yüzyıl • Hicrî 35–40 (MS 656–661)",
    location: "Medine ve Kûfe",
    visualMode: "POV_SILHOUETTE",
    islamicSensitivityNote:
      "İslami hassasiyet gereği sahabe-i kiramın yüzü kesinlikle çizilmez ve gösterilmez. Sahneler Birinci Şahıs Bakış Açısı (POV), mahkeme kürsüsü ve fener atmosferiyle betimlenir.",
    accentColor: "#D97706",
    secondaryColor: "#0D9488",
    summary:
      "Halife iken kaybolan zırhı için sıradan bir vatandaşla mahkemede yan yana eşit oturan, üç gün üst üste iftar ekmeğini yetim ve yoksulla paylaşan ilim ve adalet önderi.",
    coverImage: "assets/images/hz_ali_pov.png",
    crisisImage: "assets/images/hz_ali_pov.png",
    images: {
      cover: "assets/images/hz_ali_pov.png",
      crisis: "assets/images/hz_ali_pov.png",
      artifact: "assets/images/artifact_justice_lantern.png",
    },
    chapters: [
      // ------------------------------------------------------------------------
      // HZ. ALİ - BÖLÜM 1: MAHKEMEDE KAYIP ZIRH DAVASI VE EŞİTLİK (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "hz-ali-ch1",
        heroId: "hz-ali",
        chapterNumber: 1,
        title: "Mahkemede Kayıp Zırh Davası ve Eşitlik",
        subtitle: "Gerçek hukuk devleti, devlet başkanının bile mahkemede sade vatandaşla eşit durmasıdır",
        estimatedMinutes: 8,
        visualMode: "POV_SILHOUETTE",
        scenes: [
          {
            id: "hz-ali-ch1-s1",
            sceneNumber: 1,
            title: "Yolculukta Deveden Düşen Demir Zırh",
            narration:
              "Kûfe şehrinin taşlı yollarında uzun bir sefer dönüşüydü. Halife Hz. Ali'nin devesinin üzerindeki yük çuvallarından, kendisi için çok kıymetli olan demir halkalı zırhı gece karanlığında sessizce toprağa düşüp kaybolmuştu. Günler sonra Kûfe'nin kalabalık çarşısında yürürken, üzerindeki özel işlemelerinden hemen tanıdığı o zırhı gayrimüslim bir vatandaşın elinde satmaya çalışırken gördü.\n\nKemerli taş çarşının arasından süzülen sabah güneşi, demirci dükkânlarından gelen çekiç seslerine karışırken hayatın içindeki dürüstlük ve hukuk sınavı başlıyordu. O an Kûfe'nin kemerli çarşılarından adalet divanına ve Medine'nin mütevazı hanelerine uzanan atmosferde hissedilen ilim, hikmet, mahkemede mutlak eşitlik ve kendi lokmasını paylaşan derin bir diğerkâmlık, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Kûfe şehrinin taşlı yollarında uzun bir sefer dönüşüydü. Halife Hz. Ali'nin devesinin üzerindeki yük çuvallarından, kendisi için çok kıymetli olan demir halkalı zırhı gece karanlığında sessizce toprağa düşüp kaybolmuştu. Günler sonra Kûfe'nin kalabalık çarşısında yürürken, üzerindeki özel işlemelerinden hemen tanıdığı o zırhı gayrimüslim bir vatandaşın elinde satmaya çalışırken gördü.\n\nKemerli taş çarşının arasından süzülen sabah güneşi, demirci dükkânlarından gelen çekiç seslerine karışırken hayatın içindeki dürüstlük ve hukuk sınavı başlıyordu. O an Kûfe'nin kemerli çarşılarından adalet divanına ve Medine'nin mütevazı hanelerine uzanan atmosferde hissedilen ilim, hikmet, mahkemede mutlak eşitlik ve kendi lokmasını paylaşan derin bir diğerkâmlık, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hz. Ali",
            dialogue:
              "Bu zırh benimdir; falan gece develerin üzerinden düşüp kaybolmuştu. Onu ne bir kimseye sattım ne de birine hibe ettim.",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ali, devlet başkanı (Halife) olmasına rağmen çarşıda tek başına korumasız dolaşır ve halkın dertlerini bizzat dinlerdi.",
            imagePath: "assets/images/ali_s1_kufa_bazaar.png",
            imageKey: "assets/images/ali_s1_kufa_bazaar.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Kûfe çarşısının kemerli taş sokakları.",
          },
          {
            id: "hz-ali-ch1-s2",
            sceneNumber: 2,
            title: "Güçle Değil, Mahkemeyle Çözüm",
            narration:
              "Zırhı elinde tutan gayrimüslim vatandaş ise zırhın kendi elinde bulunduğunu söyleyerek geri vermeyi reddetti. Çarşıdaki insanlar nefeslerini tutmuştu; çünkü karşısında duran kişi koca İslam devletinin Halifesiydi ve tek bir emriyle muhafızlar zırhı zorla alabilirdi! Ancak Hz. Ali asla makamının gücünü kullanmadı; adamı hakem ve mahkeme huzuruna davet etti.\n\nAdalet divanının serin taş avlusunda yan yana duran iki sade tabure, mahkeme huzurunda devlet başkanı ile sıradan bir vatandaşın zerre kadar farkı olmadığını simgeliyordu. Tarihin bu unutulmaz dönemeç noktasında, ilim, hikmet, mahkemede mutlak eşitlik ve kendi lokmasını paylaşan derin bir diğerkâmlık sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Zırhı elinde tutan gayrimüslim vatandaş ise zırhın kendi elinde bulunduğunu söyleyerek geri vermeyi reddetti. Çarşıdaki insanlar nefeslerini tutmuştu; çünkü karşısında duran kişi koca İslam devletinin Halifesiydi ve tek bir emriyle muhafızlar zırhı zorla alabilirdi! Ancak Hz. Ali asla makamının gücünü kullanmadı; adamı hakem ve mahkeme huzuruna davet etti.\n\nAdalet divanının serin taş avlusunda yan yana duran iki sade tabure, mahkeme huzurunda devlet başkanı ile sıradan bir vatandaşın zerre kadar farkı olmadığını simgeliyordu. Tarihin bu unutulmaz dönemeç noktasında, ilim, hikmet, mahkemede mutlak eşitlik ve kendi lokmasını paylaşan derin bir diğerkâmlık sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Hz. Ali",
            dialogue:
              "Benimle senin aranda güç değil, hukuk hakem olsun! Gel, birlikte Kûfe Kadısı Şüreyh'in mahkemesine gidelim; o ne hüküm verirse ikimiz de razı olalım.",
            historicalNote:
              "Bunu Biliyor muydun? Kadı Şüreyh, Hz. Ömer döneminde atanmış ve Hz. Ali döneminde de görevine devam etmiş, İslam tarihinin en adil ve bağımsız hakimlerinden biridir.",
            imagePath: "assets/images/hz_ali_pov.png",
            imageKey: "assets/images/hz_ali_pov.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Mahkeme avlusuna açılan ahşap kapı.",
          },
          {
            id: "hz-ali-ch1-s3",
            sceneNumber: 3,
            title: "Kadı Şüreyh'in Mahkemesine Giriş",
            narration:
              "Halife Hz. Ali ile gayrimüslim vatandaş yan yana yürüyerek Kadı Şüreyh'in mahkeme meclisine girdiler. Halife'nin içeri girdiğini gören Kadı Şüreyh, devlet başkanına saygı göstermek için oturduğu yerden doğrulup ona başköşede yer vermek ve 'Ey Ebû'l-Hasan' diye özel künyesiyle hitap etmek istedi. Fakat Hz. Ali kaşlarını çatarak bu ayrıcalığı hemen reddetti.\n\nZeytin ağaçlarının gölgesinde kurulan bu mahkemede, herkes nefesini tutmuş; gücün değil, kanıtın ve hakkın üstün geldiği o tarihi ana tanıklık ediyordu. Çevredeki her detay, Kûfe'nin kemerli çarşılarından adalet divanına ve Medine'nin mütevazı hanelerine uzanan atmosferde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Halife Hz. Ali ile gayrimüslim vatandaş yan yana yürüyerek Kadı Şüreyh'in mahkeme meclisine girdiler. Halife'nin içeri girdiğini gören Kadı Şüreyh, devlet başkanına saygı göstermek için oturduğu yerden doğrulup ona başköşede yer vermek ve 'Ey Ebû'l-Hasan' diye özel künyesiyle hitap etmek istedi. Fakat Hz. Ali kaşlarını çatarak bu ayrıcalığı hemen reddetti.\n\nZeytin ağaçlarının gölgesinde kurulan bu mahkemede, herkes nefesini tutmuş; gücün değil, kanıtın ve hakkın üstün geldiği o tarihi ana tanıklık ediyordu. Çevredeki her detay, Kûfe'nin kemerli çarşılarından adalet divanına ve Medine'nin mütevazı hanelerine uzanan atmosferde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Kadı Şüreyh",
            dialogue:
              "Hoş geldiniz ey Müminlerin Emiri, ey Ebû'l-Hasan! Buyurun, şöyle başköşedeki mindere oturun.",
            historicalNote:
              "Bunu Biliyor muydun? İslam yargı usulünde hakimin taraflardan birine daha güler yüzlü bakması veya özel unvanla hitap etmesi bile eşitliğe aykırı kabul edilir.",
            imagePath: "assets/images/ebubekir_s2_wooden_door.png",
            imageKey: "assets/images/ebubekir_s2_wooden_door.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Mahkeme divanında yan yana duran iki hasır minder.",
          },
          {
            id: "hz-ali-ch1-s4",
            sceneNumber: 4,
            title: "Mahkemede İlk Ders: Tam Eşitlik",
            narration:
              "Hz. Ali başköşeye geçmeyi kabul etmedi ve doğrudan davalı olan gayrimüslim vatandaşın tam yanına, aynı hizaya diz çöküp oturdu. Mahkemede halife ile sıradan bir vatandaş arasında en ufak bir fark bile olmaması gerektiğini, aksi halde diğer tarafın kalbine korku veya mahcubiyet düşeceğini Kadı Şüreyh'e hatırlattı.\n\nAkşam ezanıyla birlikte kerpiç evlerin pencerelerinde kandiller yanarken, gün boyu süren emeğin karşılığı olan birkaç arpa ekmeği sofradaki yerini alıyordu. Sabır, dikkat ve samimiyetle atılan bu adım, ilim, hikmet, mahkemede mutlak eşitlik ve kendi lokmasını paylaşan derin bir diğerkâmlık ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Hz. Ali başköşeye geçmeyi kabul etmedi ve doğrudan davalı olan gayrimüslim vatandaşın tam yanına, aynı hizaya diz çöküp oturdu. Mahkemede halife ile sıradan bir vatandaş arasında en ufak bir fark bile olmaması gerektiğini, aksi halde diğer tarafın kalbine korku veya mahcubiyet düşeceğini Kadı Şüreyh'e hatırlattı.\n\nAkşam ezanıyla birlikte kerpiç evlerin pencerelerinde kandiller yanarken, gün boyu süren emeğin karşılığı olan birkaç arpa ekmeği sofradaki yerini alıyordu. Sabır, dikkat ve samimiyetle atılan bu adım, ilim, hikmet, mahkemede mutlak eşitlik ve kendi lokmasını paylaşan derin bir diğerkâmlık ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Hz. Ali",
            dialogue:
              "Ey Şüreyh! Sakın mahkemede bana künyemle iltifat etme ve beni ayrı bir yere oturtma; hasmımla aynı hizada oturacağım ki adaletin gölgelenmesin!",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ali'nin mahkemede hasmıyla yan yana eşit oturması, hukuk tarihinde 'silahların ve tarafların eşitliği' ilkesinin en parlak örneklerinden biridir.",
            imagePath: "assets/images/ali_s2_kadi_shurayh_court.png",
            imageKey: "assets/images/ali_s2_kadi_shurayh_court.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Eşit hizada duran mahkeme divanı.",
            midDecision: {
              title: "ARA KARAR: Mahkemede Nereye Oturursun?",
              question:
                "Devlet başkanısın ve mahkemeye davacı olarak geldin. Hakim sana özel bir koltuk ve başköşeyi gösterdi. Ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Devlet başkanı olduğum için başköşeye otururum, davamı oradan anlatırım.",
                  feedback:
                    "Başköşeye oturmak karşı tarafın üzerinde baskı kurar ve mahkemenin tarafsızlığına gölge düşürür.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Ayrıcalığı reddeder, davalı vatandaşın tam yanına eşit hizada otururum.",
                  feedback:
                    "Harika! Hz. Ali de tam olarak böyle yaptı ve adaletin herkes için eşit olduğunu gösterdi.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "hz-ali-ch1-s5",
            sceneNumber: 5,
            title: "Kadı Şüreyh'in Delil ve Şahit İsteği",
            narration:
              "Kadı Şüreyh ciddiyetle doğruldu ve davayı dinlemeye başladı. Hz. Ali zırhın sefer sırasında devesinden düştüğünü anlattı; davalı vatandaş ise zırhın kendi elinde olduğunu ve kendisine ait bulunduğunu iddia etti. Bunun üzerine Kadı Şüreyh, devlet başkanı olan Hz. Ali'ye dönerek iddiasını kanıtlayacak iki bağımsız şahidi olup olmadığını sordu.\n\nKapı eşiğinde duyulan o mahcup yardım sesi, kendi açlığını unutup başkasının derdine koşan cömert bir ailenin gözlerindeki şefkat parıltısını ortaya çıkarıyordu. O an Kûfe'nin kemerli çarşılarından adalet divanına ve Medine'nin mütevazı hanelerine uzanan atmosferde hissedilen ilim, hikmet, mahkemede mutlak eşitlik ve kendi lokmasını paylaşan derin bir diğerkâmlık, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Kadı Şüreyh ciddiyetle doğruldu ve davayı dinlemeye başladı. Hz. Ali zırhın sefer sırasında devesinden düştüğünü anlattı; davalı vatandaş ise zırhın kendi elinde olduğunu ve kendisine ait bulunduğunu iddia etti. Bunun üzerine Kadı Şüreyh, devlet başkanı olan Hz. Ali'ye dönerek iddiasını kanıtlayacak iki bağımsız şahidi olup olmadığını sordu.\n\nKapı eşiğinde duyulan o mahcup yardım sesi, kendi açlığını unutup başkasının derdine koşan cömert bir ailenin gözlerindeki şefkat parıltısını ortaya çıkarıyordu. O an Kûfe'nin kemerli çarşılarından adalet divanına ve Medine'nin mütevazı hanelerine uzanan atmosferde hissedilen ilim, hikmet, mahkemede mutlak eşitlik ve kendi lokmasını paylaşan derin bir diğerkâmlık, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Kadı Şüreyh",
            dialogue:
              "Ey Müminlerin Emiri! Sizin doğru sözlü olduğunuzu kalbim bilir; ancak mahkeme kalbi kanaatle değil, delil ve şahitle hüküm verir. İki şahidiniz var mıdır?",
            historicalNote:
              "Bunu Biliyor muydun? Hukukun en temel kuralı olan 'İddia sahibi iddiasını ispatla yükümlüdür' (el-Beyyinetü ale'l-müddeî) ilkesi İslam hukukunun temel kaidesidir.",
            imagePath: "assets/images/omer_ch3_s8_justice_verdict.png",
            imageKey: "assets/images/omer_ch3_s8_justice_verdict.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Mahkeme kürsüsündeki adalet terazisi ve parşömen.",
          },
          {
            id: "hz-ali-ch1-s6",
            sceneNumber: 6,
            title: "Oğul ve Hizmetkârın Şahitliği",
            narration:
              "Hz. Ali, zırhın kendisine ait olduğunu bilen iki kişiyi şahit gösterdi: Biri kendi oğlu Hz. Hasan, diğeri ise azatlı hizmetkârı Kanber idi. Ancak Kadı Şüreyh hukuk kurallarını hiç esnetmedi! Bir babanın lehine kendi öz oğlunun şahitliğinin mahkemede tek başına geçerli olamayacağını söyleyerek Hz. Ali'den başka bağımsız bir şahit istedi.\n\nÜç gün üst üste kapıyı çalan yetim, yoksul ve esire uzatılan sıcak ekmekler, yalnız Allah rızası için yapılan fedakârlığın en saf ve en samimi halini yansıtıyordu. Tarihin bu unutulmaz dönemeç noktasında, ilim, hikmet, mahkemede mutlak eşitlik ve kendi lokmasını paylaşan derin bir diğerkâmlık sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Hz. Ali, zırhın kendisine ait olduğunu bilen iki kişiyi şahit gösterdi: Biri kendi oğlu Hz. Hasan, diğeri ise azatlı hizmetkârı Kanber idi. Ancak Kadı Şüreyh hukuk kurallarını hiç esnetmedi! Bir babanın lehine kendi öz oğlunun şahitliğinin mahkemede tek başına geçerli olamayacağını söyleyerek Hz. Ali'den başka bağımsız bir şahit istedi.\n\nÜç gün üst üste kapıyı çalan yetim, yoksul ve esire uzatılan sıcak ekmekler, yalnız Allah rızası için yapılan fedakârlığın en saf ve en samimi halini yansıtıyordu. Tarihin bu unutulmaz dönemeç noktasında, ilim, hikmet, mahkemede mutlak eşitlik ve kendi lokmasını paylaşan derin bir diğerkâmlık sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Kadı Şüreyh",
            dialogue:
              "Hizmetkârınız Kanber'in şahitliğini kabul ederim; ancak evladınız Hasan'ın babanız lehine yaptığı şahitliği mahkeme usulünce kabul edemem. Başka şahidiniz var mı?",
            historicalNote:
              "Bunu Biliyor muydun? Yakın akrabaların birbirleri lehine şahitliğinin sınırlandırılması, mahkemelerde tarafsızlığı korumak için uygulanırdı.",
            imagePath: "assets/images/omer_ch2_s8_sophronius_covenant.png",
            imageKey: "assets/images/omer_ch2_s8_sophronius_covenant.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Mahkeme salonundaki sessiz ve vakur bekleyiş.",
          },
          {
            id: "hz-ali-ch1-s7",
            sceneNumber: 7,
            title: "Halife Aleyhine Verilen Tarihi Karar",
            narration:
              "Hz. Ali 'Başka şahidim yoktur' deyince, Kadı Şüreyh tarihe altın harflerle kazınan o kararı açıkladı: Yeterli bağımsız delil bulunmadığı için zırhın gayrimüslim vatandaşın elinde kalmasına hükmetti! Mahkemedeki herkes nefesini tutarak Halife Hz. Ali'nin ne tepki vereceğini bekliyordu. Hz. Ali ise en ufak bir öfke göstermeden 'Hüküm senindir ey Şüreyh, kanun ne diyorsa odur!' diyerek karara saygıyla boyun eğdi.\n\nSadece berrak bir suyla açılan iftar sofrasında bile yüzlerden eksilmeyen o tebessüm, paylaşmanın insan kalbine verdiği manevi zenginliği kelimesizce anlatıyordu. Çevredeki her detay, Kûfe'nin kemerli çarşılarından adalet divanına ve Medine'nin mütevazı hanelerine uzanan atmosferde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Hz. Ali 'Başka şahidim yoktur' deyince, Kadı Şüreyh tarihe altın harflerle kazınan o kararı açıkladı: Yeterli bağımsız delil bulunmadığı için zırhın gayrimüslim vatandaşın elinde kalmasına hükmetti! Mahkemedeki herkes nefesini tutarak Halife Hz. Ali'nin ne tepki vereceğini bekliyordu. Hz. Ali ise en ufak bir öfke göstermeden 'Hüküm senindir ey Şüreyh, kanun ne diyorsa odur!' diyerek karara saygıyla boyun eğdi.\n\nSadece berrak bir suyla açılan iftar sofrasında bile yüzlerden eksilmeyen o tebessüm, paylaşmanın insan kalbine verdiği manevi zenginliği kelimesizce anlatıyordu. Çevredeki her detay, Kûfe'nin kemerli çarşılarından adalet divanına ve Medine'nin mütevazı hanelerine uzanan atmosferde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Hz. Ali",
            dialogue:
              "Doğru hüküm verdin ey Şüreyh! Benim başka şahidim olmadığına göre mahkemenin kararına gönül huzuruyla uyarım.",
            historicalNote:
              "Bunu Biliyor muydun? Devlet başkanının kendi atadığı bir hakimin önünde davayı kaybetmesi ve buna saygı duyması dünya hukuk tarihinde eşsiz bir olaydır.",
            imagePath: "assets/images/ebubekir_s7_morning_encounter.png",
            imageKey: "assets/images/ebubekir_s7_morning_encounter.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Adalet divanında sükûnetle kabul edilen hüküm.",
          },
          {
            id: "hz-ali-ch1-s8",
            sceneNumber: 8,
            title: "Vicdanı Uyandıran Adalet",
            narration:
              "Zırhı koltuğunun altına alıp mahkemeden birkaç adım uzaklaşan gayrimüslim vatandaş, olduğu yerde durdu ve vicdanının sesiyle sarsıldı. Koca devletin başkanı kendisini mahkemeye götürmüş, yanına eşit oturmuş, kendi atadığı hakimin verdiği aleyhteki karara tek kelime itiraz etmemişti! Adam gözleri dolarak geri döndü ve zırhı Hz. Ali'nin önüne koyarak gerçeği itiraf etti.\n\nVahyin nuruyla övülen bu sessiz cömertlik, küçük bir arpa ekmeğinin bile samimiyetle paylaşıldığında göklerde nasıl büyük bir değere ulaştığını müjdeliyordu. Sabır, dikkat ve samimiyetle atılan bu adım, ilim, hikmet, mahkemede mutlak eşitlik ve kendi lokmasını paylaşan derin bir diğerkâmlık ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Zırhı koltuğunun altına alıp mahkemeden birkaç adım uzaklaşan gayrimüslim vatandaş, olduğu yerde durdu ve vicdanının sesiyle sarsıldı. Koca devletin başkanı kendisini mahkemeye götürmüş, yanına eşit oturmuş, kendi atadığı hakimin verdiği aleyhteki karara tek kelime itiraz etmemişti! Adam gözleri dolarak geri döndü ve zırhı Hz. Ali'nin önüne koyarak gerçeği itiraf etti.\n\nVahyin nuruyla övülen bu sessiz cömertlik, küçük bir arpa ekmeğinin bile samimiyetle paylaşıldığında göklerde nasıl büyük bir değere ulaştığını müjdeliyordu. Sabır, dikkat ve samimiyetle atılan bu adım, ilim, hikmet, mahkemede mutlak eşitlik ve kendi lokmasını paylaşan derin bir diğerkâmlık ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Davalı Vatandaş",
            dialogue:
              "Müminlerin Emiri beni kendi hakiminin önüne götürdü ve hakimi de onun aleyhine hüküm verdi! Vallahi bu ancak peygamberlerin öğrettiği bir adalettir! Ey Ali, bu zırh gerçekten senin devenin üzerinden düşmüştü!",
            historicalNote:
              "Bunu Biliyor muydun? Gerçek adalet, insanları korkutarak değil, vicdanlarını uyandırarak kalpleri kazanır.",
            imagePath: "assets/images/ali_s3_orphan_doorstep.png",
            imageKey: "assets/images/ali_s3_orphan_doorstep.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: İade edilen demir zırh ve aydınlanan mahkeme avlusu.",
          },
          {
            id: "hz-ali-ch1-s9",
            sceneNumber: 9,
            title: "Hediye Edilen Zırh ve Kazanılan Gönül",
            narration:
              "Adam o an gördüğü bu muazzam adalet karşısında kelime-i şehadet getirerek Müslüman oldu. Bunun üzerine Hz. Ali'nin yüzünde sıcak bir tebessüm belirdi. Uğruna mahkemeye geldiği o kıymetli zırhı geri almadı; üstelik yanına güzel bir de at ekleyerek bu yeni kardeşine hediye etti! O gün Kûfe mahkemesinde kaybedilen bir dava, kazanılan bir kalbe ve ölümsüz bir adalet dersine dönüştü.\n\nKemerli taş çarşının arasından süzülen sabah güneşi, demirci dükkânlarından gelen çekiç seslerine karışırken hayatın içindeki dürüstlük ve hukuk sınavı başlıyordu. O an Kûfe'nin kemerli çarşılarından adalet divanına ve Medine'nin mütevazı hanelerine uzanan atmosferde hissedilen ilim, hikmet, mahkemede mutlak eşitlik ve kendi lokmasını paylaşan derin bir diğerkâmlık, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Adam o an gördüğü bu muazzam adalet karşısında kelime-i şehadet getirerek Müslüman oldu. Bunun üzerine Hz. Ali'nin yüzünde sıcak bir tebessüm belirdi. Uğruna mahkemeye geldiği o kıymetli zırhı geri almadı; üstelik yanına güzel bir de at ekleyerek bu yeni kardeşine hediye etti! O gün Kûfe mahkemesinde kaybedilen bir dava, kazanılan bir kalbe ve ölümsüz bir adalet dersine dönüştü.\n\nKemerli taş çarşının arasından süzülen sabah güneşi, demirci dükkânlarından gelen çekiç seslerine karışırken hayatın içindeki dürüstlük ve hukuk sınavı başlıyordu. O an Kûfe'nin kemerli çarşılarından adalet divanına ve Medine'nin mütevazı hanelerine uzanan atmosferde hissedilen ilim, hikmet, mahkemede mutlak eşitlik ve kendi lokmasını paylaşan derin bir diğerkâmlık, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hz. Ali",
            dialogue:
              "Madem ki sen gerçeği söyledin ve adaletin güzelliğini gördün; şimdi bu zırhı da yanındaki bu atı da sana gönülden hediye ediyorum!",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ali hem cesareti hem de engin ilmi ve cömertliğiyle 'Haydar-ı Kerrâr' ve 'İlim Şehrinin Kapısı' olarak anılmıştır.",
            imagePath: "assets/images/artifact_justice_lantern.png",
            imageKey: "assets/images/artifact_justice_lantern.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Huzur dolu Kûfe ufku ve adalet feneri.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Devlet başkanısın ve sana ait olduğunu kesin bildiğin zırhın için çıktığın mahkemede, bağımsız şahidin olmadığı için hakim davayı karşı tarafa verdi. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Ben devlet başkanıyım, benim sözüm tek başına yeter diyerek hakimin kararını iptal ederim.",
              feedback:
                "Eğer devlet başkanı mahkeme kararını çiğnerse ülkede hiç kimsenin adalete güveni kalmaz!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Hakimi görevden alıp benim lehime karar verecek başka bir hakim atarım.",
              feedback:
                "Doğruyu söyleyen hakimi cezalandırmak adaleti tamamen yıkmak demektir.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Hukukun üstünlüğüne saygı duyarak mahkemenin kararına gönülden uyarım; böylece adaletin gücüyle karşı tarafın vicdanını uyandırırım!",
              feedback:
                "Tarihi Hakikat! Hz. Ali Kadı Şüreyh'in kararına tereddütsüz uydu ve bu eşsiz adalet karşısında davalı gerçeği itiraf etti.",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Hz. Ali, Kûfe Kadısı Şüreyh'in mahkemesinde sıradan bir vatandaşla eşit oturdu. Bağımsız şahidi olmadığı için aleyhine verilen kararı saygıyla kabul etti. Bu adaleti gören vatandaş zırhı gerçekten yolda bulduğunu itiraf etti; Hz. Ali de zırhı ona hediye etti.",
          quoteHighlight:
            "Hasmımla aynı hizada oturacağım ki adaletin gölgelenmesin!",
        },
        rewardArtifact: {
          id: "artifact-kadi-shurayh-shield",
          name: "Kûfe Eşitlik Kalkanı ve Zırhı",
          heroId: "hz-ali",
          chapterId: "hz-ali-ch1",
          imagePath: "assets/images/hz_ali_pov.png",
          pointType: "ADALET",
          pointLabel: "Adalet Puanı",
          points: 50,
          unlockedTitle: "Eşitlik ve Vicdan Öncüsü",
          shortDescription:
            "Devlet başkanı ile sade vatandaşı mahkemede yan yana oturtan ve vicdanları uyandıran efsanevi zırh davasının nişanı.",
          historicalNote:
            "Hz. Ali ve Kadı Şüreyh arasındaki zırh davası, İslam hukukunda yargı bağımsızlığının en meşhur tarihsel belgesidir.",
          accentColor: "#D97706",
          hotspots: [
            {
              id: "shield-equal-seat",
              xPercent: 45,
              yPercent: 32,
              title: "Yan Yana İki Minder",
              secretFact:
                "Hz. Ali mahkemede kendisine ayrılan başköşeye oturmamış, davalı vatandaşın tam yanına diz çökmüştür.",
            },
            {
              id: "shield-rule-of-law",
              xPercent: 58,
              yPercent: 56,
              title: "Delil ve İspat Kuralı",
              secretFact:
                "Kadı Şüreyh, davacı Halife olsa bile bağımsız şahit olmadan hüküm verilemeyeceğini göstermiştir.",
            },
            {
              id: "shield-conscience-gift",
              xPercent: 42,
              yPercent: 76,
              title: "Gönül Kazanan Cömertlik",
              secretFact:
                "Gerçeği itiraf eden vatandaşa Hz. Ali zırhı geri almamış, üstelik hediye olarak bağışlamıştır.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Hz. Ali devlet başkanı olduğu halde zırhını neden zorla almadı da mahkemeye gitti?",
          "Kadı Şüreyh'in Halife aleyhine karar verebilmesi o ülkede nasıl bir adalet güveni olduğunu gösterir?",
          "Karşıdaki insanın vicdanını uyandıran şey sence güç müdür yoksa adaletli davranış mıdır?",
        ],
      },

      // ------------------------------------------------------------------------
      // HZ. ALİ - BÖLÜM 2: İLİM ŞEHRİNİN KAPISI VE PAYLAŞILAN EKMEK (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "hz-ali-ch2",
        heroId: "hz-ali",
        chapterNumber: 2,
        title: "İlim Şehrinin Kapısı ve Paylaşılan Ekmek",
        subtitle: "Bilgelik sorunları kavgasız çözer, cömertlik ise kendi lokmasını paylaşır",
        estimatedMinutes: 8,
        visualMode: "POV_SILHOUETTE",
        scenes: [
          {
            id: "hz-ali-ch2-s1",
            sceneNumber: 1,
            title: "Mescitteki İlim Halkası",
            narration:
              "Peygamber Efendimizin (s.a.v.) 'Ben ilmin şehriyim, Ali ise onun kapısıdır' buyurduğu Hz. Ali, mescitte kurduğu ilim halkalarında çocuklara ve gençlere hem Kur'an ahlakını hem de matematik ve hukuk inceliklerini öğretirdi. En karmaşık görünen meseleleri bile herkesin anlayabileceği berrak bir mantıkla çözer, ilmin maldan çok daha üstün bir hazine olduğunu anlatırdı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Peygamber Efendimizin (s.a.v.) 'Ben ilmin şehriyim, Ali ise onun kapısıdır' buyurduğu Hz. Ali, mescitte kurduğu ilim halkalarında çocuklara ve gençlere hem Kur'an ahlakını hem de matematik ve hukuk inceliklerini öğretirdi. En karmaşık görünen meseleleri bile herkesin anlayabileceği berrak bir mantıkla çözer, ilmin maldan çok daha üstün bir hazine olduğunu anlatırdı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hz. Ali",
            dialogue:
              "Ey gençler! İlim maldan hayırlıdır; çünkü malı sen korursun, ilim ise seni korur. Mal harcadıkça azalır, ilim ise paylaştıkça çoğalır!",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ali, Arapça dilbilgisi kurallarının (Nahiv ilmi) sistemleştirilmesini başlatan ve matematiksel miras hesaplarında uzman olan büyük bir alimdi.",
            imagePath: "assets/images/ebubekir_s1_dawn_streets.png",
            imageKey: "assets/images/ebubekir_s1_dawn_streets.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Mescit avlusunda parşömenler ve ilim rahlesi.",
          },
          {
            id: "hz-ali-ch2-s2",
            sceneNumber: 2,
            title: "Üç Kardeşin Çözemediği 17 Deve Bilmecesi",
            narration:
              "Bir gün birbirleriyle tartışan üç kardeş telaşla Hz. Ali'nin yanına geldi. Babaları vefat ederken geriye 17 deve bırakmış ve vasiyetinde develerin yarısının (1/2) büyük oğluna, üçte birinin (1/3) ortanca oğluna, dokuzda birinin (1/9) ise küçük oğluna verilmesini istemişti. Ancak 17 sayısı ne ikiye, ne üçe, ne de dokuza tam bölünüyordu! Kardeşler canlı develeri kesmeden nasıl paylaşacaklarını bilemiyordu.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Bir gün birbirleriyle tartışan üç kardeş telaşla Hz. Ali'nin yanına geldi. Babaları vefat ederken geriye 17 deve bırakmış ve vasiyetinde develerin yarısının (1/2) büyük oğluna, üçte birinin (1/3) ortanca oğluna, dokuzda birinin (1/9) ise küçük oğluna verilmesini istemişti. Ancak 17 sayısı ne ikiye, ne üçe, ne de dokuza tam bölünüyordu! Kardeşler canlı develeri kesmeden nasıl paylaşacaklarını bilemiyordu.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Büyük Kardeş",
            dialogue:
              "Ey Müminlerin Emiri! 17 deveyi ikiye, üçe ve dokuza bölemiyoruz. Develerden birini kesersek de babamızın mirası ziyan olacak, bize bir çözüm göster!",
            historicalNote:
              "Bunu Biliyor muydun? İslam matematik tarihinde kesirli miras paylaşımları, ünlü matematikçi Hârizmî'nin 'Cebir' ilmini kurmasına ilham kaynağı olmuştur.",
            imagePath: "assets/images/omer_s1_medina_patrol.png",
            imageKey: "assets/images/omer_s1_medina_patrol.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Avlu kapısında bekleyen deve kervanı.",
          },
          {
            id: "hz-ali-ch2-s3",
            sceneNumber: 3,
            title: "On Sekizinci Deve ve Muhteşem Matematik",
            narration:
              "Hz. Ali tebessüm etti ve 'Hiçbir deveyi kesmenize gerek yok; ben kendi devemi geçici olarak sizin 17 devenizin yanına katıyorum, şimdi kaç deveniz oldu?' diye sordu. Toplam 18 deve olmuştu! Ardından büyük kardeşe 18'in yarısı olan 9 deveyi, ortanca kardeşe üçte biri olan 6 deveyi, küçük kardeşe de dokuzda biri olan 2 deveyi verdi. Üç kardeşin aldığı develer toplanınca (9 + 6 + 2) tam 17 etti ve Hz. Ali kendi devesini geri aldı!\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Hz. Ali tebessüm etti ve 'Hiçbir deveyi kesmenize gerek yok; ben kendi devemi geçici olarak sizin 17 devenizin yanına katıyorum, şimdi kaç deveniz oldu?' diye sordu. Toplam 18 deve olmuştu! Ardından büyük kardeşe 18'in yarısı olan 9 deveyi, ortanca kardeşe üçte biri olan 6 deveyi, küçük kardeşe de dokuzda biri olan 2 deveyi verdi. Üç kardeşin aldığı develer toplanınca (9 + 6 + 2) tam 17 etti ve Hz. Ali kendi devesini geri aldı!\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Hz. Ali",
            dialogue:
              "Bakın; 9, 6 ve 2 deveyi topladığınızda sizin 17 deveniz eksiksiz paylaşıldı, geriye kalan bu 18. deve de benim kendi devemdir!",
            historicalNote:
              "Bunu Biliyor muydun? 1/2 + 1/3 + 1/9 kesirlerinin toplamı 17/18 eder; Hz. Ali 18 ortak paydasını zihninden anında bularak hem matematik hem de barış dersi vermiştir!",
            imagePath: "assets/images/omer_s4_carrying_flour.png",
            imageKey: "assets/images/omer_s4_carrying_flour.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Kum üzerine çizilen matematiksel hesap halkaları.",
          },
          {
            id: "hz-ali-ch2-s4",
            sceneNumber: 4,
            title: "Evdeki İftar Sofrası ve Çalınan Kapı",
            narration:
              "İlimde zirve olan Hz. Ali ve eşi Hz. Fatıma'nın evi ise şefkat ve cömertlik yuvasıydı. Çocukları Hz. Hasan ve Hz. Hüseyin hastalandığında iyileşmeleri için üç gün şükür orucu tutmayı adamışlardı. Çocuklar iyileşince oruca başladılar. Birinci günün akşamında Hz. Ali'nin el değirmeninde öğüttüğü arpadan pişirilen beş küçük ekmek sofraya kondu. Tam iftar edecekleri sırada kapı çalındı.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "İlimde zirve olan Hz. Ali ve eşi Hz. Fatıma'nın evi ise şefkat ve cömertlik yuvasıydı. Çocukları Hz. Hasan ve Hz. Hüseyin hastalandığında iyileşmeleri için üç gün şükür orucu tutmayı adamışlardı. Çocuklar iyileşince oruca başladılar. Birinci günün akşamında Hz. Ali'nin el değirmeninde öğüttüğü arpadan pişirilen beş küçük ekmek kondu. Tam iftar edecekleri sırada kapı çalındı.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Kapıdaki Yoksul",
            dialogue:
              "Esselâmü aleyküm ey Ehl-i Beyt! Ben karnı aç bir yoksulum, Allah rızası için bana yedirecek bir lokma ekmeğiniz var mı?",
            historicalNote:
              "Bunu Biliyor muydun? Eski Medine evlerinde arpa taneleri 'el değirmeni' (rahâ) denilen iki yuvarlak taşın kol gücüyle döndürülmesiyle un haline getirilirdi.",
            imagePath: "assets/images/ebubekir_s4_secret_wait.png",
            imageKey: "assets/images/ebubekir_s4_secret_wait.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "1. Şahıs POV: Hasır sofra üzerindeki arpa ekmeği ve su tası.",
            midDecision: {
              title: "ARA KARAR: İftar Vakti Kapı Çalındığında Ne Yaparsın?",
              question:
                "Bütün gün oruç tutmuşsun ve sofrada ailen için sadece birer arpa ekmeği var. Tam ezan okunurken kapıya aç bir yoksul geldi. Ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Önce kendi karnımızı doyururuz, kırıntı kalırsa kapıdakine veririz.",
                  feedback:
                "Kendi ihtiyacı varken paylaşmak (îsâr) en yüksek cömertlik mertebesidir.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Kendi açlığımızı unutup sofradaki sıcak arpa ekmeklerini kapıdaki yoksula ikram eder, orucumuzu sadece suyla açarız!",
                  feedback:
                    "Muhteşem! Hz. Ali ve ailesi tam üç gün boyunca kendi iftar ekmeklerini kapıya gelen ihtiyaç sahiplerine verdiler.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "hz-ali-ch2-s5",
            sceneNumber: 5,
            title: "İkinci Gün: Kapıdaki Yetimin Sesi",
            narration:
              "İlk akşam sofradaki bütün ekmeklerini yoksula verip sadece suyla iftar eden aile, ikinci gün yine oruç tuttu. Akşam vakti geldiğinde Hz. Fatıma yine beş küçük arpa ekmeği pişirip hasır sofraya koydu. Tam ellerini ekmeğe uzatacakları sırada kapı yeniden tıklatıldı! Bu kez kapının önünde boynu bükük, kimsesiz bir yetim çocuk duruyor ve aç olduğunu söylüyordu.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "İlk akşam sofradaki bütün ekmeklerini yoksula verip sadece suyla iftar eden aile, ikinci gün yine oruç tuttu. Akşam vakti geldiğinde Hz. Fatıma yine beş küçük arpa ekmeği pişirip hasır sofraya koydu. Tam ellerini ekmeğe uzatacakları sırada kapı yeniden tıklatıldı! Bu kez kapının önünde boynu bükük, kimsesiz bir yetim çocuk duruyor ve aç olduğunu söylüyordu.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hz. Ali",
            dialogue:
              "Kapımıza gelen bir yetimi asla boş çeviremeyiz! Sofradaki ekmeklerimizi ona verelim, onun yüzünün gülmesi bizim en güzel iftarımızdır.",
            historicalNote:
              "Bunu Biliyor muydun? Kendisi muhtaç olduğu halde elindekini başkasına vermeye İslam ahlakında 'Îsâr' (diğergamlık) denir.",
            imagePath: "assets/images/ali_s3_orphan_doorstep.png",
            imageKey: "assets/images/ali_s3_orphan_doorstep.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "1. Şahıs POV: İftar vaktinde parlayan kandil ve su testisi.",
          },
          {
            id: "hz-ali-ch2-s6",
            sceneNumber: 6,
            title: "Üçüncü Gün: Kapıdaki Esire Uzanan El",
            narration:
              "İki gündür ağızlarına tek lokma ekmek koymadan suyla oruç tutan aile, üçüncü günün akşamında artık iyice halsiz düşmüştü. Son arpa unundan pişirilen ekmekler sofraya konduğunda kapı üçüncü kez çalındı! Bu defa kapıda yoksul düşmüş bir esir vardı ve yiyecek bir lokma istiyordu. Hz. Ali, Hz. Fatıma ve küçük Hasan ile Hüseyin birbirlerine baktılar ve hiç tereddüt etmeden son ekmeklerini de esire verdiler!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "İki gündür ağızlarına tek lokma ekmek koymadan suyla oruç tutan aile, üçüncü günün akşamında artık iyice halsiz düşmüştü. Son arpa unundan pişirilen ekmekler sofraya konduğunda kapı üçüncü kez çalındı! Bu defa kapıda yoksul düşmüş bir esir vardı ve yiyecek bir lokma istiyordu. Hz. Ali, Hz. Fatıma ve küçük Hasan ile Hüseyin birbirlerine baktılar ve hiç tereddüt etmeden son ekmeklerini de esire verdiler!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Hz. Ali",
            dialogue:
              "Biz sizi yalnızca Allah rızası için doyuruyoruz; sizden ne bir karşılık ne de bir teşekkür bekliyoruz!",
            historicalNote:
              "Bunu Biliyor muydun? Üç gün boyunca yoksula, yetime ve esire yemek verme olayı, Kur'an-ı Kerim'deki İnsan Suresi 8 ve 9. ayetlerde övgüyle anlatılmıştır!",
            imagePath: "assets/images/hz_ali_bread_charity.png",
            imageKey: "assets/images/hz_ali_bread_charity.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "1. Şahıs POV: Sıcak ekmek sepetinin kapıdan uzatılışı.",
          },
          {
            id: "hz-ali-ch2-s7",
            sceneNumber: 7,
            title: "Teşekkür Bile Beklemeyen Samimiyet",
            narration:
              "Ekmeği verirken karşılarındaki insanların mahcup olmaması için yüzlerine bile dikkatle bakmadılar, onlardan kuru bir teşekkür sözü dahi beklemediler. Üçüncü geceyi de berrak kuyu suyu içerek ve şükrederek geçirdiler. Karınları açtı ama üç mazlum insanı doyurmuş olmanın verdiği manevi huzurla kalpleri dünyanın en zengin saraylarından daha ferah ve mutluydu.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Ekmeği verirken karşılarındaki insanların mahcup olmaması için yüzlerine bile dikkatle bakmadılar, onlardan kuru bir teşekkür sözü dahi beklemediler. Üçüncü geceyi de berrak kuyu suyu içerek ve şükrederek geçirdiler. Karınları açtı ama üç mazlum insanı doyurmuş olmanın verdiği manevi huzurla kalpleri dünyanın en zengin saraylarından daha ferah ve mutluydu.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Hz. Fatıma",
            dialogue:
              "Elhamdülillah, evimize gelen misafirler doyarak ayrıldı. Rabbimizin rızası bizim için her türlü nimettir.",
            historicalNote:
              "Bunu Biliyor muydun? Çocukların da anne-babalarıyla birlikte bu paylaşma kararını gönülden desteklemesi, aile içi merhamet eğitiminin en güzel örneğidir.",
            imagePath: "assets/images/ebubekir_s5_pitting_dates.png",
            imageKey: "assets/images/ebubekir_s5_pitting_dates.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Yıldızlı Medine gecesinde huzurlu avlu.",
          },
          {
            id: "hz-ali-ch2-s8",
            sceneNumber: 8,
            title: "Sabah Vakti Gelen Müjde",
            narration:
              "Dördüncü günün sabahında Hz. Ali küçük oğulları Hasan ve Hüseyin'in ellerinden tutarak Peygamber Efendimizin (s.a.v.) yanına gitti. Açlıktan renkleri solmuş olan torunlarını gören Peygamberimiz onlara şefkatle sarıldı. Tam o sırada bu eşsiz fedakârlığı bütün insanlığa örnek gösteren İnsan Suresi'nin ayetleri müjdelendi; yaptıkları gizli cömertlik kıyamete kadar okunacak bir Kur'an ayeti olarak ölümsüzleşti!\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Dördüncü günün sabahında Hz. Ali küçük oğulları Hasan ve Hüseyin'in ellerinden tutarak Peygamber Efendimizin (s.a.v.) yanına gitti. Açlıktan renkleri solmuş olan torunlarını gören Peygamberimiz onlara şefkatle sarıldı. Tam o sırada bu eşsiz fedakârlığı bütün insanlığa örnek gösteren İnsan Suresi'nin ayetleri müjdelendi; yaptıkları gizli cömertlik kıyamete kadar okunacak bir Kur'an ayeti olarak ölümsüzleşti!\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Hz. Ali",
            dialogue:
              "İnsanlara öyle bir sevgi ve adaletle yaklaşın ki; onlar ya dinde kardeşiniz ya da yaratılışta eşinizdir!",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ali'nin Mısır valisi Malik el-Eşter'e yazdığı adalet mektubundaki 'İnsanlar ya dinde kardeşin ya yaratılışta eşindir' sözü Birleşmiş Milletler raporlarında bile örnek gösterilmiştir.",
            imagePath: "assets/images/omer_s5_cooking_soup.png",
            imageKey: "assets/images/omer_s5_cooking_soup.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: Güneş doğarken Medine sokaklarına yayılan altın ışık.",
          },
          {
            id: "hz-ali-ch2-s9",
            sceneNumber: 9,
            title: "İlim ve Merhametin Birleştiği Miras",
            narration:
              "Hz. Ali hayatı boyunca hem 'Bana bir harf öğretenin kırk yıl kölesi olurum' diyerek bilginin değerini yüceltti hem de elindeki son ekmeği paylaşarak vicdanın ne demek olduğunu gösterdi. Onun bıraktığı miras; bilginin kibir için değil insanlığın sorunlarını çözmek için, gücün ise zayıfları korumak için var olduğunu asırlar boyu hatırlatmaya devam etti.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Hz. Ali hayatı boyunca hem 'Bana bir harf öğretenin kırk yıl kölesi olurum' diyerek bilginin değerini yüceltti hem de elindeki son ekmeği paylaşarak vicdanın ne demek olduğunu gösterdi. Onun bıraktığı miras; bilginin kibir için değil insanlığın sorunlarını çözmek için, gücün ise zayıfları korumak için var olduğunu asırlar boyu hatırlatmaya devam etti.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Hz. Ali",
            dialogue:
              "Gerçek zenginlik mal çokluğu değil, gönül tokluğu ve ilim üstünlüğüdür!",
            historicalNote:
              "Bunu Biliyor muydun? Hz. Ali'nin hikmetli sözleri ve hutbeleri daha sonra 'Nehcü'l-Belâga' gibi klasik eserlerde toplanarak nesilden nesile aktarılmıştır.",
            imagePath: "assets/images/ebubekir_s8_secret_promise.png",
            imageKey: "assets/images/ebubekir_s8_secret_promise.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "1. Şahıs POV: İlim rahlesi ve parlayan fener.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Hem üç kardeşin çözemediği 17 deve paylaşımıyla hem de iftar vaktinde kapıya gelen yoksul, yetim ve esirle karşılaştın. Hz. Ali'nin yolu hangisidir?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Bölünemeyen deveyi keserim, iftar ekmeğimi de önce kendim yerim.",
              feedback:
                "Deveyi kesmek mirası azaltır, yalnız kendini düşünmek ise paylaşma sevincini kaybettirir.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "İftar ekmeğimi veririm ama karşılığında herkesin bana teşekkür edip övmesini isterim.",
              feedback:
                "Karşılık ve övgü bekleyerek yapılan iyilik, samimiyetini kaybeder.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Sorunları ilim ve matematikle kimseyi kırmadan çözer, soframızdaki ekmeği ise hiçbir teşekkür beklemeden yoksul, yetim ve esirle paylaşırım!",
              feedback:
                "Tarihi Hakikat! Hz. Ali 18. deveyi katarak miras bilmecesini çözdü ve ailesiyle üç gün boyunca iftar ekmeklerini hiçbir karşılık beklemeden ihtiyaç sahiplerine verdi.",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Hz. Ali ve eşi Hz. Fatıma üç gün üst üste iftar vaktinde kapılarına gelen yoksul, yetim ve esire kendi ekmeklerini verip suyla oruç açtılar. Bu eşsiz cömertlik Kur'an-ı Kerim'de İnsan Suresi 8-9. ayetlerde ölümsüzleştirildi.",
          quoteHighlight:
            "Biz sizi yalnızca Allah rızası için doyuruyoruz; sizden ne bir karşılık ne de bir teşekkür bekliyoruz!",
        },
        rewardArtifact: {
          id: "artifact-city-of-knowledge-scroll",
          name: "İlim Şehri Rahlesi ve Bereket Başağı",
          heroId: "hz-ali",
          chapterId: "hz-ali-ch2",
          imagePath: "assets/images/hz_ali_bread_charity.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik ve İhsan Puanı",
          points: 50,
          unlockedTitle: "İlim ve Cömertlik Elçisi",
          shortDescription:
            "En zor düğümleri ilimle çözen ve kendi lokmasını mazlumla paylaşan Hz. Ali'nin bilgelik ve bereket sembolü.",
          historicalNote:
            "İlim ile cömertliğin birleşmesi, İslam medeniyetinde hem üniversitelerin hem de aşevlerinin yan yana kurulmasını sağlamıştır.",
          accentColor: "#D97706",
          hotspots: [
            {
              id: "knowledge-18th-camel",
              xPercent: 48,
              yPercent: 30,
              title: "18. Deve Matematiği",
              secretFact:
                "17 deveye kendi devesini ekleyip 18 üzerinden 9 + 6 + 2 = 17 olarak paylaştırması matematik tarihinin en zarif çözümlerindendir.",
            },
            {
              id: "knowledge-isar-bread",
              xPercent: 35,
              yPercent: 62,
              title: "Üç Günlük İftar Ekmeği",
              secretFact:
                "Yoksul, yetim ve esire verilen üç günlük iftar ekmeği İnsan Suresi'nde bütün insanlığa örnek gösterilmiştir.",
            },
            {
              id: "knowledge-humanity-letter",
              xPercent: 65,
              yPercent: 68,
              title: "İnsanlık Kardeşliği",
              secretFact:
                "'İnsanlar ya dinde kardeşin ya yaratılışta eşindir' ilkesi adaletli yönetimin temel düsturu olmuştur.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Hz. Ali 17 deve sorusunu çözerken kendi devesini ödünç vermesi sorunu nasıl kolaylaştırdı?",
          "Kendi canımız çok isterken sevdiğimiz bir yiyeceği başkasıyla paylaşmak neden çok kıymetlidir?",
          "Hz. Ali'nin 'İlim paylaştıkça çoğalır' sözünü günlük hayatımızda nasıl uygulayabiliriz?",
        ],
      },
    ],
  },

  // ============================================================================
  // 4. SELAHADDİN EYYUBİ (3 BÖLÜM - HER BÖLÜM 9 SAHNE + ARA KARAR + KADER ANI)
  // ============================================================================
  {
    id: "selahaddin-eyyubi",
    name: "Selahaddin Eyyubi",
    heroClass: "MERTLIK_CESARET",
    heroClassLabel: "Mertlik ve Cesaret",
    title: "Kudüs'ün Mert ve Merhametli Sultanı",
    era: "12. Yüzyıl • 1137–1193",
    location: "Kudüs, Akka ve Şam",
    visualMode: "CHARACTER_PORTRAIT",
    accentColor: "#10B981",
    secondaryColor: "#F59E0B",
    summary:
      "En çetin savaşlarda bile hasta düşmanına dağ karı ve at gönderecek kadar mert, kaybolan bir bebeği bulmak için gözyaşı dökecek kadar merhametli sultan.",
    images: {
      cover: "assets/images/selahaddin_hero.png",
      crisis: "assets/images/selahaddin_ch1_crisis.png",
      artifact: "assets/images/artifact_saladin_banner.png",
    },
    chapters: [
      // ------------------------------------------------------------------------
      // SELAHADDİN EYYUBİ - BÖLÜM 1: DAĞ KARI VE İKİ ARAP ATI (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "selahaddin-eyyubi-ch1",
        heroId: "selahaddin-eyyubi",
        chapterNumber: 1,
        title: "Düşman Kralına Gönderilen Dağ Karı ve İki At",
        subtitle: "Gerçek zafer, savaşta bile mertliği ve merhameti korumaktır",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "selahaddin-ch1-s1",
            sceneNumber: 1,
            title: "Kudüs Tepelerinde İki Büyük Komutan",
            narration:
              "On ikinci yüzyılın sonlarında Filistin ve Kudüs ovaları tarihin en büyük karşılaşmalarından birine sahne oluyordu. Bir tarafta Kudüs'ü adalet ve barışla koruyan Sultan Selahaddin Eyyubi, diğer tarafta ise Avrupa'nın en ünlü şövalyesi İngiliz Kralı Aslan Yürekli Richard vardı. Zümrüt yeşili sancağı rüzgârda dalgalanan Selahaddin, tepeden ovadaki ordugâhları izlerken bile kalbindeki merhameti ve vakarı bir an olsun kaybetmiyordu.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "On ikinci yüzyılın sonlarında Filistin ve Kudüs ovaları tarihin en büyük karşılaşmalarından birine sahne oluyordu. Bir tarafta Kudüs'ü adalet ve barışla koruyan Sultan Selahaddin Eyyubi, diğer tarafta ise Avrupa'nın en ünlü şövalyesi İngiliz Kralı Aslan Yürekli Richard vardı. Zümrüt yeşili sancağı rüzgârda dalgalanan Selahaddin, tepeden ovadaki ordugâhları izlerken bile kalbindeki merhameti ve vakarı bir an olsun kaybetmiyordu.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Sultan Selahaddin Eyyubi",
            dialogue:
              "Savaş meydanında kılıçlarımız konuşsa da, kalbimizdeki adalet ve insanlık terazisi asla şaşmamalıdır.",
            historicalNote:
              "Bunu Biliyor muydun? Selahaddin Eyyubi'nin yanındaki başkadısı Bahâeddin İbn Şeddâd, Sultan'ın hayatını günü gününe yazarak bu olayları tarihe kaydetmiştir.",
            imagePath: "assets/images/selahaddin_s1_crusader_camp.png",
            imageKey: "assets/images/selahaddin_s1_crusader_camp.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Kudüs önlerinde gün batımında karşı karşıya duran iki büyük ordugahın çadırları ve dalgalanan sancaklar.",
          },
          {
            id: "selahaddin-ch1-s2",
            sceneNumber: 2,
            title: "Gözcülerin Getirdiği Beklenmedik Haber",
            narration:
              "Kavurucu bir yaz gününün akşamında gözcü atlılar dörtnala Selahaddin Eyyubi'nin otağına geldiler. Toz toprak içindeki gözcü başı nefes nefese diz çöktü ve karşı kamptaki büyük krizi haber verdi. İngiliz Kralı Richard çok ağır ve ateşli bir hastalığa yakalanmış, çadırında halsiz halde yatıyordu! Üstelik son çatışmada en güvendiği savaş atı da yere kapaklanmış, düşman kralı hem hasta hem de atsız kalmıştı.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Kavurucu bir yaz gününün akşamında gözcü atlılar dörtnala Selahaddin Eyyubi'nin otağına geldiler. Toz toprak içindeki gözcü başı nefes nefese diz çöktü ve karşı kamptaki büyük krizi haber verdi. İngiliz Kralı Richard çok ağır ve ateşli bir hastalığa yakalanmış, çadırında halsiz halde yatıyordu! Üstelik son çatışmada en güvendiği savaş atı da yere kapaklanmış, düşman kralı hem hasta hem de atsız kalmıştı.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Keşif Gözcüsü",
            dialogue:
              "Sultanım! Kral Richard ağır bir ateşli hastalıkla pençeleşiyor; hararetten dudakları çatlamış, üstelik bineceği savaş atı da kalmamış!",
            historicalNote:
              "Bunu Biliyor muydun? Orta Çağ'da yakıcı Akdeniz sıcağında ağır demir zırhlarla sefere çıkan Avrupa ordularında ateşli hastalıklar çok yaygındı.",
            imagePath: "assets/images/selahaddin_s2_sick_king_news.png",
            imageKey: "assets/images/selahaddin_s2_sick_king_news.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Selahaddin Eyyubi'nin harita masası başında gözcüden Kral Richard'ın hastalandığı haberini dinlemesi.",
          },
          {
            id: "selahaddin-ch1-s3",
            sceneNumber: 3,
            title: "Savaş Divanında Yükselen Sesler",
            narration:
              "Haberi duyan otağdaki bazı komutanlar ellerini kılıçlarının kabzasına atarak heyecanla ayağa kalktılar. Onlara göre aylardır süren yorucu kuşatmayı tek bir gecede bitirmek için bundan daha büyük bir fırsat olamazdı! Rakip ordunun başkomutanı çadırında hasta yatarken yapılacak ani bir gece baskınıyla kesin zafer kazanılabilirdi. Bütün gözler, divanın başköşesinde sessizce düşünen Sultan Selahaddin'e çevrildi.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Haberi duyan otağdaki bazı komutanlar ellerini kılıçlarının kabzasına atarak heyecanla ayağa kalktılar. Onlara göre aylardır süren yorucu kuşatmayı tek bir gecede bitirmek için bundan daha büyük bir fırsat olamazdı! Rakip ordunun başkomutanı çadırında hasta yatarken yapılacak ani bir gece baskınıyla kesin zafer kazanılabilirdi. Bütün gözler, divanın başköşesinde düşünen Sultan Selahaddin'e çevrildi.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Savaş Divanı Komutanı",
            dialogue:
              "Sultanım, işte beklediğimiz an! Richard ne kılıç tutabilir ne ata binebilir; bu gece hücum edersek savaşı sabaha kalmadan kazanırız!",
            historicalNote:
              "Bunu Biliyor muydun? Selahaddin Eyyubi kararlarını alırken her zaman önce komutanlarını dinler, ancak son kararı İslam'ın savaş ahlakına göre verirdi.",
            imagePath: "assets/images/selahaddin_hero.png",
            imageKey: "assets/images/selahaddin_hero.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Selahaddin Eyyubi'nin vakur ve düşünceli duruşu.",
          },
          {
            id: "selahaddin-ch1-s4",
            sceneNumber: 4,
            title: "Hekimbaşı ve Kar Kuryelerine Emir",
            narration:
              "Selahaddin Eyyubi elini kaldırarak komutanlarını susturdu. Bir hastanın çaresizliğinden faydalanarak kazanılacak zaferin şerefli bir zafer olmayacağını söyledi. Ardından çadırına sarayın en bilgili hekimbaşısını ve hızlı dağ kuryelerini çağırdı. Ateşler içinde yanan bir hastanın en çok soğuk suya ve taze meyveye ihtiyaç duyacağını biliyordu. Komutanlar şaşkınlıkla Sultan'ın ne yapacağını izliyordu.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Selahaddin Eyyubi elini kaldırarak komutanlarını susturdu. Bir hastanın çaresizliğinden faydalanarak kazanılacak zaferin şerefli bir zafer olmayacağını söyledi. Ardından çadırına sarayın en bilgili hekimbaşısını ve hızlı dağ kuryelerini çağırdı. Ateşler içinde yanan bir hastanın en çok soğuk suya ve taze meyveye ihtiyaç duyacağını biliyordu. Komutanlar şaşkınlıkla Sultan'ın ne yapacağını izliyordu.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Sultan Selahaddin Eyyubi",
            dialogue:
              "Bizim töremizde ve inancımızda düşmanın hastasına kılıç çekilmez, şifa gönderilir! Hekimbaşını ve Hermon Dağı kuryelerini hemen buraya çağırın!",
            historicalNote:
              "Bunu Biliyor muydun? O dönemde Şam ve Lübnan arasındaki yüksek Hermon (Cebelü'ş-Şeyh) Dağı'nın zirvelerinden yazın bile keçelere sarılı kar kalıpları hızlı atlılarla taşınırdı!",
            imagePath: "assets/images/selahaddin_ch1_crisis.png",
            imageKey: "assets/images/selahaddin_ch1_crisis.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Dağ karı sandığı ve şifa meyveleri hazırlığı.",
            midDecision: {
              title: "ARA KARAR: Düşman Çadırına Kimi Gönderirsin?",
              question:
                "Rakip komutan Kral Richard ağır hasta. Onun çadırına elçiyle birlikte kimi göndermeyi seçersin?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Hastalığını bahane edip çadırın planlarını çizecek gizli bir casus gönderirim.",
                  feedback:
                    "İyilik görünümü altında hile yapmak büyük komutanların mertliğine gölge düşürür.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "En güvendiğim özel hekimimi, ateş düşürücü şerbetleri ve taze meyveleri gönderirim.",
                  feedback:
                    "Harika seçim! Selahaddin Eyyubi düşmanına şifa ulaştırmak için kendi özel hekimini ve dağ karlarını gönderdi.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "selahaddin-ch1-s5",
            sceneNumber: 5,
            title: "Hermon Dağı'ndan Gelen Buz ve Meyveler",
            narration:
              "Hızlı kuryeler Hermon Dağı'nın zirvelerinden özel keçelere ve samanlara sarılmış bembeyaz dağ karı kalıplarını ordugâha ulaştırdı. Selahaddin Eyyubi ahşap sandıkların içine bu pırıl pırıl dağ karlarını dizdirdi; üzerlerine de Şam bahçelerinin en taze armutlarını, şeftalilerini, incirlerini ve şifalı şerbetlerini yerleştirdi. Sıcak çöl akşamında sandığın kapağı açıldığında etrafa serin ve mis kokulu bir buhar yayıldı.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Hızlı kuryeler Hermon Dağı'nın zirvelerinden özel keçelere ve samanlara sarılmış bembeyaz dağ karı kalıplarını ordugâha ulaştırdı. Selahaddin Eyyubi ahşap sandıkların içine bu pırıl pırıl dağ karlarını dizdirdi; üzerlerine de Şam bahçelerinin en taze armutlarını, şeftalilerini, incirlerini ve şifalı şerbetlerini yerleştirdi. Sıcak çöl akşamında sandığın kapağı açıldığında etrafa serin ve mis kokulu bir buhar yayıldı.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Saray Hekimbaşı",
            dialogue:
              "Sultanım, dağ karıyla soğutulmuş bu taze armut ve şeftali özleri Kral Richard'ın hararetini düşürecek en etkili şifadır.",
            historicalNote:
              "Bunu Biliyor muydun? 12. yüzyılda İslam dünyasında tıp bilimi ve buzla soğutulan şerbet tedavileri Avrupa'dan çok daha ileri bir seviyedeydi.",
            imagePath: "assets/images/selahaddin_s3_hermon_snow.png",
            imageKey: "assets/images/selahaddin_s3_hermon_snow.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Karlı Hermon Dağı zirvelerinden özel sandıklara doldurulan buz kütleleri ve taze şeftali-armut sepetleri.",
          },
          {
            id: "selahaddin-ch1-s6",
            sceneNumber: 6,
            title: "Yaya Kalan Krala İki Asil Arap Atı",
            narration:
              "Selahaddin Eyyubi bununla da yetinmedi. Yafa önlerindeki çarpışmalarda Kral Richard'ın atının düştüğünü ve kralın kendi askerlerinin önünde yaya yürüdüğünü gördüğünde çok üzüldü. 'Böyle cesur bir kralın kendi ordusunun önünde yaya kalması mertliğe yakışmaz' diyerek ahırındaki en hızlı, altın üzengili iki asil Arap atını seçti. Atların yularını özel elçisine vererek doğrudan Richard'ın çadırına gönderdi.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Selahaddin Eyyubi bununla da yetinmedi. Yafa önlerindeki çarpışmalarda Kral Richard'ın atının düştüğünü ve kralın kendi askerlerinin önünde yaya yürüdüğünü gördüğünde çok üzüldü. 'Böyle cesur bir kralın kendi ordusunun önünde yaya kalması mertliğe yakışmaz' diyerek ahırındaki en hızlı, altın üzengili iki asil Arap atını seçti. Atların yularını özel elçisine vererek doğrudan Richard'ın çadırına gönderdi.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Sultan Selahaddin Eyyubi",
            dialogue:
              "Bu iki asil Arap atını Kral Richard'a götürün ve deyin ki: Biz düşmanımızla hasta ve atsızken değil, iyileşip atına bindiğinde mertçe karşılaşırız!",
            historicalNote:
              "Bunu Biliyor muydun? Fransız tarihçi Ambroise bile kendi kitabında Selahaddin'in savaşın tam ortasında Richard'a iki at göndermesini hayranlıkla anlatmıştır.",
            imagePath: "assets/images/ibn_sina_s2_canon_of_medicine.png",
            imageKey: "assets/images/ibn_sina_s2_canon_of_medicine.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Kral Richard'ın çadırına hediye olarak götürülen altın eğerli iki asil beyaz ve doru Arap atı.",
          },
          {
            id: "selahaddin-ch1-s7",
            sceneNumber: 7,
            title: "Kral Richard'ın Çadırında Şaşkınlık",
            narration:
              "Selahaddin'in elçileri beyaz barış flamasıyla İngiliz ordugâhına girdiğinde bütün şövalyeler merakla toplandı. Çadırın önünde iki muhteşem Arap atını ve içinden buz dumanları yükselen taze meyve sandığını gören Kral Richard gözlerine inanamadı. Kendi ülkesinde bile görmediği bu inceliğin en büyük rakibinden geldiğini öğrenince başını eğdi ve şövalyelerine Selahaddin'in ne kadar asil bir sultan olduğunu söyledi.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Selahaddin'in elçileri beyaz barış flamasıyla İngiliz ordugâhına girdiğinde bütün şövalyeler merakla toplandı. Çadırın önünde iki muhteşem Arap atını ve içinden buz dumanları yükselen taze meyve sandığını gören Kral Richard gözlerine inanamadı. Kendi ülkesinde bile görmediği bu inceliğin en büyük rakibinden geldiğini öğrenince başını eğdi ve şövalyelerine Selahaddin'in ne kadar asil bir sultan olduğunu söyledi.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Kral Aslan Yürekli Richard",
            dialogue:
              "Bize ‘barbar’ dedikleri insanların sultanına bakın! Ben ateşler içinde yatarken bana dağlardan kar, şifa meyveleri ve en güzel atlarını gönderdi. Ne muazzam bir mertlik!",
            historicalNote:
              "Bunu Biliyor muydun? Kral Richard iyileştikten sonra Selahaddin Eyyubi'ye büyük bir saygı duymuş ve iki lider arasında karşılıklı elçilerle barış görüşmeleri yapılmıştır.",
            imagePath: "assets/images/selahaddin_s4_two_arabian_horses.png",
            imageKey: "assets/images/selahaddin_s4_two_arabian_horses.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Yıldızlı gece altında parlayan fenerler ve iki Arap atı.",
          },
          {
            id: "selahaddin-ch1-s8",
            sceneNumber: 8,
            title: "Kılıçtan Güçlü Olan Ahlak",
            narration:
              "Bu olay hem İslam ordusunda hem de Haçlı ordugâhında dalga dalga yayıldı. Başlangıçta hemen saldırmak isteyen komutanlar bile Sultan Selahaddin'in ne kadar derin bir ileri görüşlülüğe sahip olduğunu anladılar. Çünkü kılıçla kazanılan savaşlar sadece toprak kazandırırken, ahlak ve mertlikle kazanılan zaferler en sert düşmanların bile kalbini kazanıyordu.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Bu olay hem İslam ordusunda hem de Haçlı ordugâhında dalga dalga yayıldı. Başlangıçta hemen saldırmak isteyen komutanlar bile Sultan Selahaddin'in ne kadar derin bir ileri görüşlülüğe sahip olduğunu anladılar. Çünkü kılıçla kazanılan savaşlar sadece toprak kazandırırken, ahlak ve mertlikle kazanılan zaferler en sert düşmanların bile kalbini kazanıyordu.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Başkadı Bahâeddin İbn Şeddâd",
            dialogue:
              "Sultanımız düşmanını sadece ordusuyla değil, eşsiz cömertliği ve mertliğiyle de dize getirdi.",
            historicalNote:
              "Bunu Biliyor muydun? Orta Çağ Avrupa edebiyatında (hatta Dante ve Boccaccio'nun eserlerinde) Selahaddin Eyyubi şövalyeliğin ve erdemin en büyük örneği olarak anılmıştır.",
            imagePath: "assets/images/selahaddin_jerusalem_olive.png",
            imageKey: "assets/images/selahaddin_jerusalem_olive.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "İki ordugâh arasında yayılan mertlik haberi.",
          },
          {
            id: "selahaddin-ch1-s9",
            sceneNumber: 9,
            title: "Ramle Barışı ve Kalıcı Saygı",
            narration:
              "Aylar süren mücadelelerin sonunda Kral Richard, böylesine adil ve sarsılmaz bir liderin elinden Kudüs'ün zorla alınamayacağını anladı. İki taraf arasında Ramle Barış Antlaşması imzalandı. Kudüs Müslümanların yönetiminde kaldı ve silahsız gelen her Hristiyan hacının Kudüs'ü güvenle ziyaret edebileceği kararlaştırıldı. Selahaddin Eyyubi'nin gönderdiği dağ karı ve iki Arap atı, tarihin en unutulmaz mertlik dersi olarak hafızalara kazındı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Aylar süren mücadelelerin sonunda Kral Richard, böylesine adil ve sarsılmaz bir liderin elinden Kudüs'ün zorla alınamayacağını anladı. İki taraf arasında Ramle Barış Antlaşması imzalandı. Kudüs Müslümanların yönetiminde kaldı ve silahsız gelen her Hristiyan hacının Kudüs'ü güvenle ziyaret edebileceği kararlaştırıldı. Selahaddin Eyyubi'nin gönderdiği dağ karı ve iki Arap atı, tarihin en unutulmaz mertlik dersi olarak hafızalara kazındı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Sultan Selahaddin Eyyubi",
            dialogue:
              "Gerçek kahramanlık, rakibin düştüğünde ona tekme vurmak değil, elinden tutup adaletle yarışmaktır.",
            historicalNote:
              "Bunu Biliyor muydun? 1192 yılında imzalanan Ramle Antlaşması ile Kudüs'te barış yeniden tesis edilmiş ve Kral Richard ülkesine dönmüştür.",
            imagePath: "assets/images/artifact_saladin_banner.png",
            imageKey: "assets/images/artifact_saladin_banner.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Altın saatlerde Kudüs ufku ve asil Arap atları.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "En güçlü rakibin Kral Richard ağır hasta ve savaş atını kaybetmiş. Bütün ordun saldırı emri bekliyor. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Tüm süvarilerle hemen gece baskını yapıp savaşı bitiririm.",
              feedback:
                "Savaşı belki kazanırsın ama mertliği ve şerefi kaybedersin.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Elçi gönderip hastalık bahanesiyle hemen kayıtsız şartsız teslim olmasını isterim.",
              feedback:
                "Rakibin en çaresiz anından faydalanmak büyük komutanların şanına yakışmaz.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Dağlardan özel kar kütleleri, taze şifa meyveleri ve ordumdaki en asil iki Arap atını hediye olarak Richard'ın çadırına gönderirim!",
              feedback:
                "Tarihi Hakikat! Mertlik, rakibin en zayıf anında bile asaletten ve merhametten vazgeçmemektir.",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Selahaddin Eyyubi, özel doktorunu, Hermon Dağı karıyla soğutulmuş armut ve şeftalileri ve iki muhteşem Arap atını düşman kralına gönderdi: \"Biz düşmanımızla hasta ve atsızken değil, iyileşip atına bindiğinde mertçe karşılaşırız!\" Bu asil davranış bütün dünyayı kendine hayran bıraktı.",
          quoteHighlight:
            "Biz düşmanımızla hasta ve atsızken değil, iyileşip atına bindiğinde mertçe karşılaşırız!",
        },
        rewardArtifact: {
          id: "artifact-saladin-banner",
          name: "Mertlik Sancağı ve Altın Üzengi",
          heroId: "selahaddin-eyyubi",
          chapterId: "selahaddin-eyyubi-ch1",
          imagePath: "assets/images/artifact_saladin_banner.png",
          pointType: "CESARET_MERHAMET",
          pointLabel: "Cesaret ve Merhamet Puanı",
          points: 50,
          unlockedTitle: "Mertlik Muhafızı",
          shortDescription:
            "Zümrüt yeşili üzerine altın işlemeli Eyyubi sancağı ve Kral Richard'a gönderilen asil Arap atlarının altın üzengisi.",
          historicalNote:
            "Selahaddin Eyyubi'nin bu davranışı hem İslam hem de Avrupa kroniklerinde şövalyelik ve mertliğin zirvesi olarak anlatılmıştır.",
          accentColor: "#10B981",
          hotspots: [
            {
              id: "banner-embroidery",
              xPercent: 38,
              yPercent: 32,
              title: "Zümrüt ve Altın İşlemeli Sancak",
              secretFact:
                "Eyyubi sancağındaki altın motifler, barış zamanında merhameti, savaş zamanında ise sarsılmaz adaleti simgelerdi.",
            },
            {
              id: "golden-stirrup",
              xPercent: 68,
              yPercent: 65,
              title: "Asil Arap Atı Üzengisi",
              secretFact:
                "Selahaddin Eyyubi, çatışmada atını kaybeden rakibi Kral Richard'ın yaya kalmasını mertliğe uygun bulmayarak ona iki seçkin at hediye etmişti.",
            },
            {
              id: "snow-courier-seal",
              xPercent: 48,
              yPercent: 75,
              title: "Hermon Dağı Kar Mührü",
              secretFact:
                "Ateşli hastalıkta şifa olması için dağ zirvelerinden keçelere sarılı buz kalıpları hızlı atlı kuryelerle getirilirdi.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Oyun oynarken veya bir yarışmada rakibimizin ayağı takıldığında Selahaddin Eyyubi gibi davranmak nasıl olurdu?",
          "Sence bir insanı gerçekten 'güçlü' yapan şey sadece kazanmak mıdır, yoksa adil ve merhametli olmak mıdır?",
          "Kral Richard, Selahaddin Eyyubi'den karla soğutulmuş meyveleri ve atları görünce ne hissetmiş olabilir?",
        ],
      },

      // ------------------------------------------------------------------------
      // SELAHADDİN EYYUBİ - BÖLÜM 2: SAVAŞ ORTASINDA KAYBOLAN BEBEK (8 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "selahaddin-eyyubi-ch2",
        heroId: "selahaddin-eyyubi",
        chapterNumber: 2,
        title: "Savaş Ortasında Kaybolan Bebeği Arayan Sultan",
        subtitle: "Bir annenin gözyaşı, bütün savaşlardan daha önemlidir",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "selahaddin-ch2-s1",
            sceneNumber: 1,
            title: "Akka Ovasında Gergin Sabah",
            narration:
              "1191 yılının serin bir sabahında Akka ovasında iki ordu karşılıklı siperlerde bekliyordu. Sultan Selahaddin Eyyubi sabah erkenden atına binmiş, yanında başkadısı Bahâeddin İbn Şeddâd ile birlikte ön hatlardaki nöbet noktalarını denetliyordu. Tam bu sırada karşı kamptan, yani Haçlı ordusunun çadırlarının olduğu taraftan hıçkıra hıçkıra ağlayan bir kadının İslam ordusunun nöbetçilerine doğru koştuğu görüldü.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "1191 yılının serin bir sabahında Akka ovasında iki ordu karşılıklı siperlerde bekliyordu. Sultan Selahaddin Eyyubi sabah erkenden atına binmiş, yanında başkadısı Bahâeddin İbn Şeddâd ile birlikte ön hatlardaki nöbet noktalarını denetliyordu. Tam bu sırada karşı kamptan, yani Haçlı ordusunun çadırlarının olduğu taraftan hıçkıra hıçkıra ağlayan bir kadının İslam ordusunun nöbetçilerine doğru koştuğu görüldü.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Ön Hat Nöbetçisi",
            dialogue:
              "Sultanım! Karşı kamptan gözü yaşlı bir Hristiyan kadın eman dileyerek doğrudan sizin huzurunuza çıkmak istiyor!",
            historicalNote:
              "Bunu Biliyor muydun? Bu olay uydurma bir efsane değil; o gün Sultan Selahaddin'in tam yanında bulunan Kadı Bahâeddin İbn Şeddâd'ın bizzat gözleriyle görüp yazdığı gerçek bir tarihi olaydır!",
            imagePath: "assets/images/selahaddin_s1_crusader_camp.png",
            imageKey: "assets/images/selahaddin_s1_crusader_camp.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Akka ovasında karşılıklı duran iki ordugâh.",
          },
          {
            id: "selahaddin-ch2-s2",
            sceneNumber: 2,
            title: "Karşı Kamptan Gelen Çaresiz Anne",
            narration:
              "Nöbetçiler kadına yol verdi ve onu Sultan Selahaddin'in otağının önüne getirdiler. Kadın yorgunluktan ve üzüntüden titriyor, gözyaşları yanaklarından süzülüyordu. Selahaddin Eyyubi hemen tercümanını çağırdı ve kadına korkmamasını, derdinin ne olduğunu sordu. Kadın ellerini açarak bir gece önce kargaşa sırasında çadırından üç aylık küçük bebeğinin kaybolduğunu ve kaçırıldığını anlattı.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Nöbetçiler kadına yol verdi ve onu Sultan Selahaddin'in otağının önüne getirdiler. Kadın yorgunluktan ve üzüntüden titriyor, gözyaşları yanaklarından süzülüyordu. Selahaddin Eyyubi hemen tercümanını çağırdı ve kadına korkmamasını, derdinin ne olduğunu sordu. Kadın ellerini açarak bir gece önce kargaşa sırasında çadırından üç aylık küçük bebeğinin kaybolduğunu ve kaçırıldığını anlattı.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Hristiyan Anne",
            dialogue:
              "Ey büyük Sultan! Dün gece çadırımdan üç aylık bebeğim kayboldu. Bütün gece ağladım; kendi komutanlarım bana ‘Git Selahaddin’e başvur, o çok merhametlidir, bebeğini bulursa ancak o bulur’ dediler!",
            historicalNote:
              "Bunu Biliyor muydun? Kadının kendi komutanlarının bile onu Selahaddin Eyyubi'ye yönlendirmesi, Sultan'ın merhametinin düşmanları arasında bile ne kadar iyi bilindiğini gösterir.",
            imagePath: "assets/images/selahaddin_ch2_crying_mother.png",
            imageKey: "assets/images/selahaddin_ch2_crying_mother.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Kuşatma alanında Selahaddin'in çadırına gelip kaybolan bebeği için yardım isteyen gözü yaşlı anne.",
          },
          {
            id: "selahaddin-ch2-s3",
            sceneNumber: 3,
            title: "Sultanın Gözyaşları",
            narration:
              "Tercüman kadının sözlerini çevirirken Sultan Selahaddin Eyyubi'nin kalbi öylesine yumuşadı ki, gözlerinden süzülen yaşlar sakalını ıslattı. Savaşta olmalarına rağmen karşısındaki kişinin hangi ordudan veya hangi dinden olduğuna hiç bakmadı; o sadece evladını kaybetmiş acılı bir anne görüyordu. Yanındaki muhafız komutanlarına dönerek derhal bütün ordugâhın ve pazar yerinin aranmasını emretti.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Tercüman kadının sözlerini çevirirken Sultan Selahaddin Eyyubi'nin kalbi öylesine yumuşadı ki, gözlerinden süzülen yaşlar sakalını ıslattı. Savaşta olmalarına rağmen karşısındaki kişinin hangi ordudan veya hangi dinden olduğuna hiç bakmadı; o sadece evladını kaybetmiş acılı bir anne görüyordu. Yanındaki muhafız komutanlarına dönerek derhal bütün ordugâhın ve pazar yerinin aranmasını emretti.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Sultan Selahaddin Eyyubi",
            dialogue:
              "Bir annenin evladından koparılmasına bizim kalbimiz de inancımız da razı olmaz! Derhal bütün çadırları ve çarşıyı arayın, o bebeği bana bulun!",
            historicalNote:
              "Bunu Biliyor muydun? Kadı İbn Şeddâd hatıratında 'Sultan kadının halini dinlerken ağladı ve yanındaki herkes de onunla birlikte gözyaşı döktü' diye yazmıştır.",
            imagePath: "assets/images/selahaddin_s2_sick_king_news.png",
            imageKey: "assets/images/selahaddin_s2_sick_king_news.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Selahaddin Eyyubi'nin şefkatli ve kararlı bakışı.",
          },
          {
            id: "selahaddin-ch2-s4",
            sceneNumber: 4,
            title: "Pazar Yerinde Bulunan Bebek",
            narration:
              "Sultan'ın özel muhafızları dört bir yana dağılarak pazar yerini ve kervan çadırlarını tek tek kontrol ettiler. Çok geçmeden bebeğin gece baskını yapan yağmacılar tarafından gizlice pazara getirildiği ve olaydan habersiz bir yolcuya satıldığı ortaya çıktı. Bebeği alan kişi, bunun çalıntı olduğunu bilmeden kendi parasını vererek çocuğu bakmak için almıştı. Muhafızlar durumu hemen Sultan Selahaddin'e bildirdiler.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Sultan'ın özel muhafızları dört bir yana dağılarak pazar yerini ve kervan çadırlarını tek tek kontrol ettiler. Çok geçmeden bebeğin gece baskını yapan yağmacılar tarafından gizlice pazara getirildiği ve olaydan habersiz bir yolcuya satıldığı ortaya çıktı. Bebeği alan kişi, bunun çalıntı olduğunu bilmeden kendi parasını vererek çocuğu bakmak için almıştı. Muhafızlar durumu hemen Sultan Selahaddin'e bildirdiler.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Muhafız Komutanı",
            dialogue:
              "Sultanım, müjdeler olsun! Bebeği sağ salim bulduk. Ancak bebeği alan kişi durumdan habersizmiş ve kendi parasını ödemiş.",
            historicalNote:
              "Bunu Biliyor muydun? Adil bir yönetici bir haksızlığı düzeltirken, olaydan habersiz olan bir başka masum insanın da zarar görmemesine dikkat eder.",
            imagePath: "assets/images/ali_s1_kufa_bazaar.png",
            imageKey: "assets/images/ali_s1_kufa_bazaar.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Muhafızın Sultan'a bebeğin bulunduğu müjdesini getirmesi.",
            midDecision: {
              title: "ARA KARAR: Bebeğin Bedelini Kim Ödeyecek?",
              question:
                "Bebek bulundu ama onu alan kişi olaydan habersizce kendi parasını ödemiş. Annenin ise hiç parası yok. Ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Anneye git kendi ordugâhından altın bulup getir, sonra bebeğini al derim.",
                  feedback:
                    "Acılı bir anneyi bekletmek ve para şartı koşmak merhamete sığmaz.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Kimse mağdur olmasın diye ücreti kendi kesemden altınla öder, bebeği hemen annesine kavuştururum!",
                  feedback:
                    "Harika karar! Selahaddin Eyyubi bebeğin bedelini bizzat kendi cebinden ödedi.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "selahaddin-ch2-s5",
            sceneNumber: 5,
            title: "Kendi Kesesinden Ödenen Altınlar",
            narration:
              "Selahaddin Eyyubi hiç düşünmeden elini kendi şahsi altın kesesine attı. Bebeği bilmeden satın alan kişinin ödediği paranın tamamını kendi cebinden verdi ve bebeğin derhal otağa getirilmesini emretti. Bu sırada anneye de yemek ve su ikram edilerek dinlenmesi sağlandı. Bütün divan üyeleri, bebeğin getirileceği anı nefeslerini tutarak bekliyordu.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Selahaddin Eyyubi hiç düşünmeden elini kendi şahsi altın kesesine attı. Bebeği bilmeden satın alan kişinin ödediği paranın tamamını kendi cebinden verdi ve bebeğin derhal otağa getirilmesini emretti. Bu sırada anneye de yemek ve su ikram edilerek dinlenmesi sağlandı. Bütün divan üyeleri, bebeğin getirileceği anı nefeslerini tutarak bekliyordu.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Sultan Selahaddin Eyyubi",
            dialogue:
              "Şu altınları kendi kesemden alın ve o adama hakkını verin; bebeği de incitmeden hemen annesinin kucağına getirin!",
            historicalNote:
              "Bunu Biliyor muydun? Selahaddin Eyyubi kazandığı tüm ganimetleri ve gelirleri yoksullara ve iyilik işlerine dağıttığı için vefat ettiğinde şahsi hazinesinde sadece 47 dirhem gümüş ve 1 altın dinar çıkmıştır!",
            imagePath: "assets/images/selahaddin_lost_baby.png",
            imageKey: "assets/images/selahaddin_lost_baby.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Cömertlik ve şefkat anı.",
          },
          {
            id: "selahaddin-ch2-s6",
            sceneNumber: 6,
            title: "Anne ile Bebeğin Kavuşması",
            narration:
              "Muhafızlar kundağa sarılı üç aylık bebeği otağın önüne getirdiklerinde kadının gözleri parladı. Bebeğini kucağına alıp bağrına basan anne, sevinçten ne yapacağını bilemedi; hem ağlıyor hem de bebeğinin minik yüzünü öpüyordu. Çevredeki tüm komutanlar ve askerler bu kavuşma manzarasını izlerken duygulanıp yeniden gözyaşı döktüler. Anne bebeğini emzirene kadar Sultan onu kendi otağında misafir etti.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Muhafızlar kundağa sarılı üç aylık bebeği otağın önüne getirdiklerinde kadının gözleri parladı. Bebeğini kucağına alıp bağrına basan anne, sevinçten ne yapacağını bilemedi; hem ağlıyor hem de bebeğinin minik yüzünü öpüyordu. Çevredeki tüm komutanlar ve askerler bu kavuşma manzarasını izlerken duygulanıp yeniden gözyaşı döktüler. Anne bebeğini emzirene kadar Sultan onu kendi otağında misafir etti.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Hristiyan Anne",
            dialogue:
              "Yavruma kavuştum! Allah senin ömrünü ve devletini bereketli kılsın ey merhametli Sultan!",
            historicalNote:
              "Bunu Biliyor muydun? Savaşın en sert günlerinde bile bir bebeğin huzuru için ordunun durması, İslam medeniyetinin çocuğa ve anneye verdiği değeri gösterir.",
            imagePath: "assets/images/selahaddin_s4_two_arabian_horses.png",
            imageKey: "assets/images/selahaddin_s4_two_arabian_horses.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Ordugâhta anne ile bebeğin kavuşması.",
          },
          {
            id: "selahaddin-ch2-s7",
            sceneNumber: 7,
            title: "Kendi Atıyla Güvenli Uğurlama",
            narration:
              "Anne bebeğini doyurup sakinleştikten sonra Selahaddin Eyyubi kadının kucağında bebekle yürüyerek dönmesine razı olmadı. Kendi binek atlarından uysal bir at hazırlattı; anneyi ve bebeğini ata bindirdi. Yanlarına da karşı ordunun sınır hattına kadar kimse onlara dokunmasın diye özel muhafız birliği görevlendirdi. Kadın dualar ederek kendi kampına doğru yola çıktı.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Anne bebeğini doyurup sakinleştikten sonra Selahaddin Eyyubi kadının kucağında bebekle yürüyerek dönmesine razı olmadı. Kendi binek atlarından uysal bir at hazırlattı; anneyi ve bebeğini ata bindirdi. Yanlarına da karşı ordunun sınır hattına kadar kimse onlara dokunmasın diye özel muhafız birliği görevlendirdi. Kadın dualar ederek kendi kampına doğru yola çıktı.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Sultan Selahaddin Eyyubi",
            dialogue:
              "Bu anneyi ve yavrusunu yürütmeyin! Atımıza bindirin ve kendi çadırlarına sağ salim ulaşana kadar yanlarında muhafız olarak yürüyün.",
            historicalNote:
              "Bunu Biliyor muydun? Selahaddin Eyyubi'nin bu merhameti karşı kampta duyulduğunda Haçlı askerleri bile şapkalarını çıkararak İslam ordugâhına doğru selam durmuşlardır.",
            imagePath: "assets/images/selahaddin_jerusalem_olive.png",
            imageKey: "assets/images/selahaddin_jerusalem_olive.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Asil Arap atı ve güvenli uğurlama.",
          },
          {
            id: "selahaddin-ch2-s8",
            sceneNumber: 8,
            title: "Kalplerde Bırakılan İz",
            narration:
              "Kadın kucağında bebeğiyle kendi kampına döndüğünde bütün çadırlardan alkış ve hayret sesleri yükseldi. Herkes Sultan Selahaddin'in hem bebeği buldurduğunu hem parasını kendi cebinden ödediğini hem de kadını atla geri gönderdiğini birbirine anlatıyordu. O gün kılıçlar kınında kalmış, ama merhametin gücü bütün kalpleri fethetmişti.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Kadın kucağında bebeğiyle kendi kampına döndüğünde bütün çadırlardan alkış ve hayret sesleri yükseldi. Herkes Sultan Selahaddin'in hem bebeği buldurduğunu hem parasını kendi cebinden ödediğini hem de kadını atla geri gönderdiğini birbirine anlatıyordu. O gün kılıçlar kınında kalmış, ama merhametin gücü bütün kalpleri fethetmişti.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Başkadı Bahâeddin İbn Şeddâd",
            dialogue:
              "İşte gerçek hükümdarlık budur: Savaşın ortasında bile mazlum bir annenin gözyaşını dindirmek!",
            historicalNote:
              "Bunu Biliyor muydun? Bu hadise İbn Şeddâd'ın 'En-Nevâdirü's-Sultâniyye' adlı eserinde tüm ayrıntılarıyla günümüze ulaşmıştır.",
            imagePath: "assets/images/artifact_saladin_banner.png",
            imageKey: "assets/images/artifact_saladin_banner.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Altın gün batımında Sultan Selahaddin ve bebeğine kavuşan anne.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Savaşın ortasında karşı kamptan ağlayan bir anne gelip 3 aylık bebeğinin kaybolduğunu söyledi. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Şu an savaş zamanı, bir bebekle uğraşamayız diyerek kadını geri çeviririm.",
              feedback:
                "Zulme ve bir annenin acısına kayıtsız kalmak merhametli bir kalbe yakışmaz.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Sadece savaştan sonra araştıracağımızı söylerim.",
              feedback:
                "Üç aylık bir bebek ve annesi için her dakika çok kıymetlidir; iyilik ertelenmez!",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Hemen bütün ordugâhı aratıp bebeği buldururum, bedelini kendi kesemden öder ve anneyi bebeğiyle birlikte atıma bindirip güvenle çadırına gönderirim!",
              feedback:
                "Tarihi Hakikat! Selahaddin Eyyubi gözyaşları içinde bebeği buldurdu ve annesine kavuşturdu!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Selahaddin Eyyubi, Hristiyan annenin acısını dinlerken gözyaşlarını tutamadı. Muhafızlarını seferber ederek bebeği buldurdu, parasını kendi cebinden ödedi ve anne ile bebeğini atına bindirerek güvenli bir şekilde kendi kamplarına uğurladı.",
          quoteHighlight:
            "Bir annenin evladından koparılmasına bizim kalbimiz de inancımız da razı olmaz!",
        },
        rewardArtifact: {
          id: "artifact-mercy-medallion",
          name: "Akka Merhamet Madalyonu",
          heroId: "selahaddin-eyyubi",
          chapterId: "selahaddin-eyyubi-ch2",
          imagePath: "assets/images/selahaddin_lost_baby.png",
          pointType: "CESARET_MERHAMET",
          pointLabel: "Cesaret ve Merhamet Puanı",
          points: 50,
          unlockedTitle: "Şefkat Sultanı",
          shortDescription:
            "Savaşın en çetin gününde bile din ve millet ayrımı yapmadan bir anneyi bebeğine kavuşturan şefkat nişanı.",
          historicalNote:
            "Kadı Bahâeddin İbn Şeddâd'ın bizzat şahit olduğu bu olay, savaş hukukunda sivillerin ve çocukların korunmasının en parlak örneklerindendir.",
          accentColor: "#10B981",
          hotspots: [
            {
              id: "medallion-heart",
              xPercent: 50,
              yPercent: 35,
              title: "Sınır Tanımayan Merhamet",
              secretFact:
                "Selahaddin Eyyubi yardım ederken insanların hangi ordudan veya inançtan olduğuna değil, mazlum olup olmadığına bakardı.",
            },
            {
              id: "medallion-purse",
              xPercent: 35,
              yPercent: 65,
              title: "Kendi Kesesinden İnfak",
              secretFact:
                "Sultan, devlet hazinesine dokunmadan bebeğin fidyesini kendi şahsi kesesinden ödemiştir.",
            },
            {
              id: "medallion-escort",
              xPercent: 68,
              yPercent: 65,
              title: "Eman Muhafızları",
              secretFact:
                "Anne ve bebek kendi çadırlarına ulaşana kadar Eyyubi muhafızları tarafından korunmuştur.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Karşı ordunun komutanları bile ağlayan anneye neden 'Git Selahaddin'e başvur, o çok merhametlidir' dediler?",
          "Çevremizde bize benzemeyen veya tanımadığımız biri zor durumda kaldığında ona yardım etmek neden çok değerlidir?",
          "Selahaddin Eyyubi bebeği bulmakla kalmayıp neden anneyi kendi atıyla geri gönderdi?",
        ],
      },

      // ------------------------------------------------------------------------
      // SELAHADDİN EYYUBİ - BÖLÜM 3: KUDÜS KAPILARI AÇILIRKEN EMAN VE AF (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "selahaddin-eyyubi-ch3",
        heroId: "selahaddin-eyyubi",
        chapterNumber: 3,
        title: "Kudüs'te İntikam Değil Eman",
        subtitle: "Gerçek büyüklük, güç elindeyken affedebilmektir",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "selahaddin-ch3-s1",
            sceneNumber: 1,
            title: "88 Yıllık Hasretin Sonu",
            narration:
              "Yıl 1187, Ekim ayının ilk günleri... Tam seksen sekiz yıl boyunca işgal altında kalan Kudüs şehri, Hittîn Zaferi'nin ardından Sultan Selahaddin Eyyubi'nin ordusu tarafından kuşatılmıştı. Zeytin Dağı'nın tepesinden Kudüs'ün altın kubbelerine bakan Selahaddin'in gözleri doluydu. Yıllardır bu kutsal şehri yeniden barış ve adalet yuvası yapabilmek için çalışmış, nihayet o tarihi gün gelip çatmıştı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Yıl 1187, Ekim ayının ilk günleri... Tam seksen sekiz yıl boyunca işgal altında kalan Kudüs şehri, Hittîn Zaferi'nin ardından Sultan Selahaddin Eyyubi'nin ordusu tarafından kuşatılmıştı. Zeytin Dağı'nın tepesinden Kudüs'ün altın kubbelerine bakan Selahaddin'in gözleri doluydu. Yıllardır bu kutsal şehri yeniden barış ve adalet yuvası yapabilmek için çalışmış, nihayet o tarihi gün gelip çatmıştı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Sultan Selahaddin Eyyubi",
            dialogue:
              "Rabbime hamdolsun ki seksen sekiz yıllık hasretten sonra bizi Kudüs kapılarına ulaştırdı. Şimdi bu mukaddes şehre layık olma vaktidir.",
            historicalNote:
              "Bunu Biliyor muydun? Kudüs, 2 Ekim 1187 (27 Receb 583) Cuma günü Sultan Selahaddin Eyyubi tarafından barış yoluyla teslim alınmıştır.",
            imagePath: "assets/images/selahaddin_s1_crusader_camp.png",
            imageKey: "assets/images/selahaddin_s1_crusader_camp.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Zeytin Dağı'ndan Kudüs'e bakan ordugâh.",
          },
          {
            id: "selahaddin-ch3-s2",
            sceneNumber: 2,
            title: "Balian'ın Barış Elçiliği",
            narration:
              "Kudüs'ü savunan komutan İbelinli Balian, surların daha fazla dayanamayacağını anlayınca beyaz bayrak çekerek Sultan Selahaddin'in çadırına geldi. Şehirdeki on binlerce sivilin, kadının ve çocuğun korku içinde olduğunu söyledi. Çünkü seksen sekiz yıl önce Haçlılar Kudüs'e girdiğinde şehirdeki masum insanlara hiç acımamışlardı; şimdi ise Müslümanların kendilerinden intikam alacağından korkuyorlardı.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Kudüs'ü savunan komutan İbelinli Balian, surların daha fazla dayanamayacağını anlayınca beyaz bayrak çekerek Sultan Selahaddin'in çadırına geldi. Şehirdeki on binlerce sivilin, kadının ve çocuğun korku içinde olduğunu söyledi. Çünkü seksen sekiz yıl önce Haçlılar Kudüs'e girdiğinde şehirdeki masum insanlara hiç acımamışlardı; şimdi ise Müslümanların kendilerinden intikam alacağından korkuyorlardı.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Kudüs Komutanı Balian",
            dialogue:
              "Ey Sultan! Eğer şehir halkına can güvenliği (eman) verirseniz kapıları barışla açmaya hazırız.",
            historicalNote:
              "Bunu Biliyor muydun? 1099 yılında Haçlılar Kudüs'e girdiğinde şehirde büyük bir yıkım yaşanmıştı; 1187'de ise Selahaddin Eyyubi tek bir sivilin bile burnunun kanamasına izin vermemiştir.",
            imagePath: "assets/images/selahaddin_hero.png",
            imageKey: "assets/images/selahaddin_hero.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Çadır önünde elçilik görüşmesi.",
          },
          {
            id: "selahaddin-ch3-s3",
            sceneNumber: 3,
            title: "İntikam mı, Hz. Ömer'in Yolu mu?",
            narration:
              "Çadırdaki bazı komutanlar geçmişte yaşanan acıları hatırlatarak şehrin zorla alınmasını ve sert davranılmasını savundular. Ancak Sultan Selahaddin ayağa kalktı ve onlara beş yüz elli yıl önce Hz. Ömer'in Kudüs'e nasıl girdiğini hatırlattı. 'Kötülüğe kötülükle karşılık verirsek onlardan ne farkımız kalır?' diyerek şehirdeki herkese Eman (güvence) verilmesine karar verdi.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Çadırdaki bazı komutanlar geçmişte yaşanan acıları hatırlatarak şehrin zorla alınmasını ve sert davranılmasını savundular. Ancak Sultan Selahaddin ayağa kalktı ve onlara beş yüz elli yıl önce Hz. Ömer'in Kudüs'e nasıl girdiğini hatırlattı. 'Kötülüğe kötülükle karşılık verirsek onlardan ne farkımız kalır?' diyerek şehirdeki herkese Eman (güvence) verilmesine karar verdi.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Sultan Selahaddin Eyyubi",
            dialogue:
              "Ben zulümle değil, Hz. Ömer'in adaletiyle anılmak isterim! Şehirdeki herkese can, mal ve ibadet güvencesi (eman) veriyorum!",
            historicalNote:
              "Bunu Biliyor muydun? İslam'da 'Eman', karşı tarafa verilen ve hiçbir şartta bozulmayan can ve mal güvenliği sözüdür.",
            imagePath: "assets/images/selahaddin_s2_sick_king_news.png",
            imageKey: "assets/images/selahaddin_s2_sick_king_news.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Selahaddin Eyyubi'nin adalet ve af kararı.",
          },
          {
            id: "selahaddin-ch3-s4",
            sceneNumber: 4,
            title: "Yoksulların Fidyesini Ödeyen Sultan",
            narration:
              "Yapılan antlaşmaya göre şehirden ayrılmak isteyenler sembolik bir geçiş ücreti ödeyerek bütün eşyalarıyla güven içinde gidebilecekti. Ancak şehirde bu küçük ücreti bile ödeyemeyecek binlerce yoksul insan, dul kadın ve yetim vardı. Selahaddin'in kardeşi Melik Âdil ve bizzat Sultan Selahaddin, bu yoksul insanların tek birinin bile esir kalmasına razı olmadılar.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Yapılan antlaşmaya göre şehirden ayrılmak isteyenler sembolik bir geçiş ücreti ödeyerek bütün eşyalarıyla güven içinde gidebilecekti. Ancak şehirde bu küçük ücreti bile ödeyemeyecek binlerce yoksul insan, dul kadın ve yetim vardı. Selahaddin'in kardeşi Melik Âdil ve bizzat Sultan Selahaddin, bu yoksul insanların tek birinin bile esir kalmasına razı olmadılar.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Melik Âdil",
            dialogue:
              "Hünkârım, şehir kapısında geçiş ücretini ödeyemeyen binlerce yoksul bekliyor; izin verin onların ücretlerini kendi hazinemizden ödeyip hepsini özgür bırakalım!",
            historicalNote:
              "Bunu Biliyor muydun? O gün Selahaddin Eyyubi ve kardeşi Melik Âdil, geçiş ücreti ödeyemeyen binlerce Hristiyan yoksulu hiçbir karşılık almadan serbest bırakmış, hatta yaşlılara yol harçlığı vermiştir!",
            imagePath: "assets/images/omer_ch2_jerusalem_key.png",
            imageKey: "assets/images/omer_ch2_jerusalem_key.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Şehir kapısında kurulan merhamet düzeni.",
            midDecision: {
              title: "ARA KARAR: Geçiş Ücreti Olmayan Yoksullar",
              question:
                "Antlaşmaya göre ayrılanlar küçük bir ücret ödüyor ama kapıda hiç parası olmayan binlerce yoksul, yaşlı ve dul kadın var. Ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Anlaşma anlaşmadır diyerek parası olmayanların şehirden çıkmasına izin vermem.",
                  feedback:
                    "Yoksullara ve kimsesizlere zorluk çıkarmak Selahaddin'in cömertliğine yakışmaz.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Yoksulların, yaşlıların ve dulların ücretini kendi hazinemden karşılar, üstelik onlara yol harçlığı vererek serbest bırakırım!",
                  feedback:
                    "Harika karar! Selahaddin Eyyubi binlerce yoksulu ücretsiz serbest bıraktı ve yaşlılara harçlık dağıttı.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "selahaddin-ch3-s5",
            sceneNumber: 5,
            title: "Patrik Heraklius'un Altın Arabaları",
            narration:
              "Yoksullar beş kuruşsuz çıkarken, şehrin zengin Patriği Heraklius ise kiliselerdeki altın şamdanları, gümüş tepsileri ve değerli halıları arabalar dolusu yükleterek kapıya geldi. Eyyubi maliye görevlileri Sultan'a koşup 'Sultanım! Patrik sadece şahsi eşyasını değil, servet değerinde hazineyi götürüyor, el koyalım mı?' diye sordular. Selahaddin ise verdiği sözün altından daha değerli olduğunu söyledi.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Yoksullar beş kuruşsuz çıkarken, şehrin zengin Patriği Heraklius ise kiliselerdeki altın şamdanları, gümüş tepsileri ve değerli halıları arabalar dolusu yükleterek kapıya geldi. Eyyubi maliye görevlileri Sultan'a koşup 'Sultanım! Patrik sadece şahsi eşyasını değil, servet değerinde hazineyi götürüyor, el koyalım mı?' diye sordular. Selahaddin ise verdiği sözün altından daha değerli olduğunu söyledi.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Sultan Selahaddin Eyyubi",
            dialogue:
              "Hayır, dokunmayın! Biz onlara mallarını götürebileceklerine dair söz verdik. Bizi sözümüzden dönmekle suçlamalarına asla fırsat vermem!",
            historicalNote:
              "Bunu Biliyor muydun? Selahaddin Eyyubi, Patrik Heraklius'tan sadece 10 dinar geçiş ücreti almış ve bütün hazine arabalarının güvenle çıkmasına izin vermiştir.",
            imagePath: "assets/images/selahaddin_ch2_crying_mother.png",
            imageKey: "assets/images/selahaddin_ch2_crying_mother.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Sözüne sadık kalan büyük Sultan.",
          },
          {
            id: "selahaddin-ch3-s6",
            sceneNumber: 6,
            title: "Sokaklarda Düzen ve Güvenlik Nöbeti",
            narration:
              "Şehir teslim alınırken tek bir evin kapısı kırılmadı, tek bir dükkân yağmalanmadı. Selahaddin Eyyubi, Kudüs'ün her sokağına ve her mahallesine adil muhafız birlikleri yerleştirdi. Şehirde kalmak isteyen Hristiyan ve Yahudi ailelerin kendi mahallelerinde ve ibadethanelerinde tam bir huzur içinde yaşayacakları ilan edildi. Kudüs sokaklarında korkunun yerini derin bir güven ve hayranlık aldı.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Şehir teslim alınırken tek bir evin kapısı kırılmadı, tek bir dükkân yağmalanmadı. Selahaddin Eyyubi, Kudüs'ün her sokağına ve her mahallesine adil muhafız birlikleri yerleştirdi. Şehirde kalmak isteyen Hristiyan ve Yahudi ailelerin kendi mahallelerinde ve ibadethanelerinde tam bir huzur içinde yaşayacakları ilan edildi. Kudüs sokaklarında korkunun yerini derin bir güven ve hayranlık aldı.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Kudüs Muhafız Komutanı",
            dialogue:
              "Sultanımızın emridir: Kudüs'teki hiçbir sivil incitilmeyecek, yaşlıların ve yolcuların eşyalarını taşımalarına yardım edilecektir!",
            historicalNote:
              "Bunu Biliyor muydun? İngiliz tarihçi Stanley Lane-Poole, 'Kudüs'ün teslim alınışında Müslümanların gösterdiği büyüklük ve merhamet, insanlık tarihinin en parlak sayfasıdır' diye yazmıştır.",
            imagePath: "assets/images/selahaddin_lost_baby.png",
            imageKey: "assets/images/selahaddin_lost_baby.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Kudüs sokaklarında güven ve barış.",
          },
          {
            id: "selahaddin-ch3-s7",
            sceneNumber: 7,
            title: "Mescid-i Aksâ'da Gül Suyu Kokusu",
            narration:
              "Şehirde güven sağlandıktan sonra sıra Mescid-i Aksâ ve Kubbetü's-Sahra'nın temizlenmesine geldi. Şam'dan deve kervanlarıyla yüzlerce testi saf gül suyu getirildi. Sultan Selahaddin, komutanları ve âlimlerle birlikte kollarını sıvadı; kutsal mabedin mermerlerini ve taşlarını kendi elleriyle yıkayıp gül suyuyla temizledi. Kubbelerden yükselen gül kokusu bütün Kudüs tepelerine yayıldı.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Şehirde güven sağlandıktan sonra sıra Mescid-i Aksâ ve Kubbetü's-Sahra'nın temizlenmesine geldi. Şam'dan deve kervanlarıyla yüzlerce testi saf gül suyu getirildi. Sultan Selahaddin, komutanları ve âlimlerle birlikte kollarını sıvadı; kutsal mabedin mermerlerini ve taşlarını kendi elleriyle yıkayıp gül suyuyla temizledi. Kubbelerden yükselen gül kokusu bütün Kudüs tepelerine yayıldı.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Sultan Selahaddin Eyyubi",
            dialogue:
              "Bu mukaddes mabedi öfkeyle değil, gül suyuyla, şükürle ve tevazumuzla temizleyelim!",
            historicalNote:
              "Bunu Biliyor muydun? Nûreddin Zengî'nin yıllar önce Kudüs için özel olarak ceviz ve abanoz ağacından yaptırdığı muazzam minber de Halep'ten getirilerek Mescid-i Aksâ'ya yerleştirilmiştir.",
            imagePath: "assets/images/selahaddin_jerusalem_olive.png",
            imageKey: "assets/images/selahaddin_jerusalem_olive.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Kudüs semalarında altın ışıklar.",
          },
          {
            id: "selahaddin-ch3-s8",
            sceneNumber: 8,
            title: "İbadethanelere Dokunulmaması",
            narration:
              "Bazı kişiler Kudüs'teki en büyük Hristiyan mabedi olan Kıyamet Kilisesi'nin kapatılmasını önerdiğinde Selahaddin Eyyubi buna kesinlikle karşı çıktı. Tıpkı Hz. Ömer'in yaptığı gibi kilisenin Hristiyanların ibadetine açık kalacağını ve oraya gelen hiçbir ziyaretçinin engellenmeyeceğini fermanla duyurdu. Ayrıca Kudüs'te yeni okullar, hastaneler (bîmâristan) ve vakıflar kurdurdu.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Bazı kişiler Kudüs'teki en büyük Hristiyan mabedi olan Kıyamet Kilisesi'nin kapatılmasını önerdiğinde Selahaddin Eyyubi buna kesinlikle karşı çıktı. Tıpkı Hz. Ömer'in yaptığı gibi kilisenin Hristiyanların ibadetine açık kalacağını ve oraya gelen hiçbir ziyaretçinin engellenmeyeceğini fermanla duyurdu. Ayrıca Kudüs'te yeni okullar, hastaneler (bîmâristan) ve vakıflar kurdurdu.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Sultan Selahaddin Eyyubi",
            dialogue:
              "Hz. Ömer buraya girdiğinde insanların ibadethanelerine dokunmadı; biz de onun izinden ayrılmayacağız!",
            historicalNote:
              "Bunu Biliyor muydun? Selahaddin Eyyubi Kudüs'te herkesin ücretsiz tedavi edildiği büyük 'Selahiyye Bîmâristanı'nı (hastanesini) kurdurmuştur.",
            imagePath: "assets/images/omer_ch2_s8_sophronius_covenant.png",
            imageKey: "assets/images/omer_ch2_s8_sophronius_covenant.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Hoşgörü ve medeniyet şehri Kudüs.",
          },
          {
            id: "selahaddin-ch3-s9",
            sceneNumber: 9,
            title: "Asırlar Boyu Unutulmayan Af",
            narration:
              "Kudüs'ten ayrılan kafileler gittikleri her şehirde Sultan Selahaddin'in kendilerine nasıl merhamet ettiğini, yoksullara nasıl altın dağıttığını ve verdiği sözü nasıl tuttuğunu anlattılar. Güç tamamen elindeyken intikam almak yerine affetmeyi seçen Selahaddin Eyyubi, hem Doğu'da hem de Batı'da 'En Asil Sultan' olarak tarihe geçti.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Kudüs'ten ayrılan kafileler gittikleri her şehirde Sultan Selahaddin'in kendilerine nasıl merhamet ettiğini, yoksullara nasıl altın dağıttığını ve verdiği sözü nasıl tuttuğunu anlattılar. Güç tamamen elindeyken intikam almak yerine affetmeyi seçen Selahaddin Eyyubi, hem Doğu'da hem de Batı'da 'En Asil Sultan' olarak tarihe geçti.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Sultan Selahaddin Eyyubi",
            dialogue:
              "Kan dökerek değil, gönülleri kazanarak ve affederek kurulan barış kalıcı olur.",
            historicalNote:
              "Bunu Biliyor muydun? Selahaddin Eyyubi'nin Şam'daki mütevazı türbesini ziyaret eden yabancı devlet adamları bile onun adaletine ve merhametine saygılarını sunmuşlardır.",
            imagePath: "assets/images/artifact_saladin_banner.png",
            imageKey: "assets/images/artifact_saladin_banner.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Barış ve adalet sancağı.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "88 yıl sonra Kudüs'ü geri aldın ve bütün güç senin elinde. Bazı kişiler geçmişin intikamını alalım diyor. Şehir halkına nasıl davranırsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Geçmişte yapılanların aynısını yaparak şehre sertçe girerim.",
              feedback:
                "Zulme zulümle karşılık vermek adaleti ve insanlığı yok eder.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Şehirdeki herkesin bütün eşyalarına ve kilise hazinelerine el koyarım.",
              feedback:
                "Verilen eman sözünü bozmak ve insanların malına dokunmak İslam ahlakına uymaz.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Tıpkı Hz. Ömer gibi herkese can ve mal güvencesi (Eman) veririm; yoksulların geçiş ücretini kendi hazinemden ödeyerek serbest bırakırım!",
              feedback:
                "Tarihi Hakikat! Gerçek büyüklük ve kahramanlık, güç elindeyken affedebilmektir!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Selahaddin Eyyubi 1187'de Kudüs'ü geri aldığında intikam almadı; herkese can ve mal güvencesi (Eman) verdi. Fidye ödeyemeyen binlerce yoksulu kendi hazinesinden ödeyerek serbest bıraktı ve ibadethaneleri koruma altına aldı.",
          quoteHighlight:
            "Ben zulümle değil, Hz. Ömer'in adaleti ve merhametiyle anılmak isterim!",
        },
        rewardArtifact: {
          id: "artifact-olive-seal",
          name: "Kudüs Eman ve Barış Mührü",
          heroId: "selahaddin-eyyubi",
          chapterId: "selahaddin-eyyubi-ch3",
          imagePath: "assets/images/selahaddin_jerusalem_olive.png",
          pointType: "CESARET_MERHAMET",
          pointLabel: "Cesaret ve Merhamet Puanı",
          points: 50,
          unlockedTitle: "Barış ve Eman Muhafızı",
          shortDescription:
            "Güç elindeyken intikam yerine affı ve barışı seçen Selahaddin Eyyubi'nin Kudüs eman mührü.",
          historicalNote:
            "1187 Kudüs teslimi, dünya savaş tarihinde sivillerin ve farklı inançların en yüksek merhametle korunduğu örneklerden biri olarak kabul edilir.",
          accentColor: "#10B981",
          hotspots: [
            {
              id: "seal-eman",
              xPercent: 45,
              yPercent: 30,
              title: "Sözden Dönmeme İlkesi",
              secretFact:
                "Patrik Heraklius arabalar dolusu hazine götürürken bile Selahaddin 'Verdiğimiz sözden dönmeyiz' diyerek müdahale ettirmemiştir.",
            },
            {
              id: "seal-rosewater",
              xPercent: 60,
              yPercent: 58,
              title: "Şam Gül Suyu",
              secretFact:
                "Mescid-i Aksâ kavga ile değil, Şam'dan getirilen saf gül sularıyla yıkanarak ibadete hazırlanmıştır.",
            },
            {
              id: "seal-charity",
              xPercent: 40,
              yPercent: 75,
              title: "Yoksullara Özgürlük",
              secretFact:
                "Binlerce yoksul, yaşlı ve yetim hiçbir ücret alınmadan Sultan'ın kendi ikramıyla serbest bırakılmıştır.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Güç tamamen elimizdeyken bize daha önce kötülük yapmış birini affetmek neden çok büyük bir erdemdir?",
          "Selahaddin Eyyubi neden altın hazinelere el koymak yerine 'Verdiğimiz söz her şeyden değerlidir' dedi?",
          "Mescid-i Aksâ'nın gül suyuyla yıkanması sence nasıl bir mesaj taşıyordu?",
        ],
      },
    ],
  },

  // ==========================================================================
  // 5. KAHRAMAN: FATİH SULTAN MEHMED (2 BÖLÜM - 9'AR SAHNE)
  // ==========================================================================
  {
    id: "fatih-sultan-mehmed",
    name: "Fatih Sultan Mehmed",
    heroClass: "GIZEM_IZ_SURME",
    classBadgeLabel: "Gizem ve İz Sürme",
    title: "Çağ Açıp Çağ Kapatan Bilge Hünkâr",
    era: "1432 – 1481 (Osmanlı Cihan Devleti / İstanbul)",
    visualMode: "CHARACTER_PORTRAIT",
    coverImage: "assets/images/fatih_hero.png",
    crisisImage: "assets/images/fatih_ships.png",
    images: {
      cover: "assets/images/fatih_hero.png",
      crisis: "assets/images/fatih_ships.png",
      artifact: "assets/images/artifact_fatih_notebook.png",
    },
    accentColor: "#F43F5E",
    secondaryColor: "#F59E0B",
    badgeText: "Strateji, Bilim & Adalet",
    shortBio:
      "Çocukluk defterini çizimler ve mühendislik hesaplarıyla dolduran, 21 yaşında gemileri karadan yürüterek İstanbul'u fetheden ve mahkemede bir Rum mimarla eşit ayakta duran büyük Sultan.",
    chapters: [
      // ------------------------------------------------------------------------
      // FATİH SULTAN MEHMED - BÖLÜM 1: KIRMIZI DEFTER VE KARADAN YÜRÜYEN GEMİLER (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "fatih-sultan-mehmed-ch1",
        heroId: "fatih-sultan-mehmed",
        chapterNumber: 1,
        title: "Kırmızı Çizim Defteri ve Karadan Yürüyen Gemiler",
        subtitle: "Gerçek zafer, kılıçtan önce bilgi, sabır ve mühendislikle kazanılır",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "fatih-ch1-s1",
            sceneNumber: 1,
            title: "Manisa Sarayında Kırmızı Deri Defter",
            narration:
              "Henüz on iki yaşındaki genç Şehzade Mehmed, Manisa Sarayı'ndaki odasında sabahlara kadar mum ışığında çalışıyordu. Önünde bugün bile Topkapı Sarayı Müzesi'nde korunan meşhur çocukluk çizim defteri duruyordu. Yaşıtları oyun oynarken o, defterinin sayfalarına at figürleri, sur krokileri, geometrik açılar, Arapça, Farsça ve Yunanca harfler çiziyor; hocası Molla Gürânî ve Akşemseddin'den tarih, matematik ve mühendislik dersleri alıyordu.\n\nHaliç'in girişine gerilen devasa demir zincir dalgalarla çarpışırken, boğazın serin rüzgârı genç Sultan'ın zihnindeki yepyeni mühendislik planlarını harekete geçiriyordu. O an 1453 baharında İstanbul surları, Tophane sırtları ve Haliç'in mavi suları arasında hissedilen bilimi, matematiği ve sarsılmaz azmi birleştirerek imkânsızı aşan vizyoner bir deha, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Henüz on iki yaşındaki genç Şehzade Mehmed, Manisa Sarayı'ndaki odasında sabahlara kadar mum ışığında çalışıyordu. Önünde bugün bile Topkapı Sarayı Müzesi'nde korunan meşhur çocukluk çizim defteri duruyordu. Yaşıtları oyun oynarken o, defterinin sayfalarına at figürleri, sur krokileri, geometrik açılar, Arapça, Farsça ve Yunanca harfler çiziyor; hocası Molla Gürânî ve Akşemseddin'den tarih, matematik ve mühendislik dersleri alıyordu.\n\nHaliç'in girişine gerilen devasa demir zincir dalgalarla çarpışırken, boğazın serin rüzgârı genç Sultan'ın zihnindeki yepyeni mühendislik planlarını harekete geçiriyordu. O an 1453 baharında İstanbul surları, Tophane sırtları ve Haliç'in mavi suları arasında hissedilen bilimi, matematiği ve sarsılmaz azmi birleştirerek imkânsızı aşan vizyoner bir deha, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Genç Şehzade Mehmed",
            dialogue:
              "Bir şehri fethetmek istiyorsak, önce o şehrin surlarını yıkacak matematiği ve orada yaşayan insanların gönlünü kazanacak adaleti öğrenmeliyiz!",
            historicalNote:
              "Bunu Biliyor muydun? Fatih Sultan Mehmed'in çocukken çizimler yaptığı gerçek 'Şehzade Defteri' bugün İstanbul Topkapı Sarayı Müzesi Arşivi'nde (H. 2324) sergilenmektedir!",
            imagePath: "assets/images/fatih_hero.png",
            imageKey: "assets/images/fatih_hero.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Mum ışığında kırmızı çizim defteri, pergel ve mühendislik aletleri.",
          },
          {
            id: "fatih-ch1-s2",
            sceneNumber: 2,
            title: "Şahi Toplarının Balistik Hesapları",
            narration:
              "Yirmi bir yaşına geldiğinde Padişah olan Sultan İkinci Mehmed, bin yıldır hiçbir ordunun aşamadığı İstanbul surlarını inceledi. Edirne'deki dökümhanede Macar döküm ustası Urban ve Türk mühendislerle birlikte bizzat çalışarak dev 'Şahi' toplarının balistik ve barut hesaplarını kendi eliyle çizdi. Bakır ve kalay karışımının hangi açıyla gülle fırlatacağını ve surlarda nasıl bir sarsıntı oluşturacağını milimi milimine hesapladı.\n\nOtağ-ı Hümayun'da yanan mumların altında açılan Kırmızı Defter, pergellerin ve açıölçerlerin diliyle yazılan büyük bir bilimsel hazırlığın sessiz tanığıydı. Tarihin bu unutulmaz dönemeç noktasında, bilimi, matematiği ve sarsılmaz azmi birleştirerek imkânsızı aşan vizyoner bir deha sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Yirmi bir yaşına geldiğinde Padişah olan Sultan İkinci Mehmed, bin yıldır hiçbir ordunun aşamadığı İstanbul surlarını inceledi. Edirne'deki dökümhanede Macar döküm ustası Urban ve Türk mühendislerle birlikte bizzat çalışarak dev 'Şahi' toplarının balistik ve barut hesaplarını kendi eliyle çizdi. Bakır ve kalay karışımının hangi açıyla gülle fırlatacağını ve surlarda nasıl bir sarsıntı oluşturacağını milimi milimine hesapladı.\n\nOtağ-ı Hümayun'da yanan mumların altında açılan Kırmızı Defter, pergellerin ve açıölçerlerin diliyle yazılan büyük bir bilimsel hazırlığın sessiz tanığıydı. Tarihin bu unutulmaz dönemeç noktasında, bilimi, matematiği ve sarsılmaz azmi birleştirerek imkânsızı aşan vizyoner bir deha sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Sultan II. Mehmed",
            dialogue:
              "Topun namlu et kalınlığını artıralım ve soğutma için zeytinyağı kullanalım; bilim olmadan sadece cesaretle bu üç katlı surlar aşılmaz!",
            historicalNote:
              "Bunu Biliyor muydun? Şahi topunun boyu 8 metreydi ve 500 kiloluk taş gülleleri bir buçuk kilometre uzağa fırlatabiliyordu; bu hesapları bizzat Fatih Sultan Mehmed yapmıştır.",
            imagePath: "assets/images/fatih_s1_golden_horn_chain.png",
            imageKey: "assets/images/fatih_s1_golden_horn_chain.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Mühendislik masasında tunç döküm ve açı planları.",
          },
          {
            id: "fatih-ch1-s3",
            sceneNumber: 3,
            title: "Haliç'in Ağzındaki Dev Demir Zincir",
            narration:
              "1453 yılının Nisan ayında Osmanlı ordusu karadan İstanbul surlarını kuşattı. Ancak şehrin kuzeyindeki Haliç Koyu'na girmek imkânsız görünüyordu! Çünkü Bizanslılar Galata Kulesi sahili ile Sarayburnu arasına dev baklalardan oluşan kalın bir demir zincir germiş, zincirin su üstünde kalması için altına ahşap şamandıralar bağlamış ve arkasına da savaş gemileri dizmişti. Osmanlı donanması Haliç'e giremediği için surlar deniz tarafında güvende kalıyordu.\n\nTophane'den Kasımpaşa'ya uzanan dik orman yolunda meşaleler geceyi aydınlatırken, yağlanan çam kızakların kokusu ve ustaların heyecanlı çalışması dağı sarıyordu. Çevredeki her detay, 1453 baharında İstanbul surları, Tophane sırtları ve Haliç'in mavi suları arasında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "1453 yılının Nisan ayında Osmanlı ordusu karadan İstanbul surlarını kuşattı. Ancak şehrin kuzeyindeki Haliç Koyu'na girmek imkânsız görünüyordu! Çünkü Bizanslılar Galata Kulesi sahili ile Sarayburnu arasına dev baklalardan oluşan kalın bir demir zincir germiş, zincirin su üstünde kalması için altına ahşap şamandıralar bağlamış ve arkasına da savaş gemileri dizmişti. Osmanlı donanması Haliç'e giremediği için surlar deniz tarafında güvende kalıyordu.\n\nTophane'den Kasımpaşa'ya uzanan dik orman yolunda meşaleler geceyi aydınlatırken, yağlanan çam kızakların kokusu ve ustaların heyecanlı çalışması dağı sarıyordu. Çevredeki her detay, 1453 baharında İstanbul surları, Tophane sırtları ve Haliç'in mavi suları arasında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Donanma Komutanı Baltaoğlu Süleyman Bey",
            dialogue:
              "Hünkârım! Haliç'in ağzındaki bu dev demir zinciri gemilerle kırmak imkânsız; üstelik Galata sırtları da Cenevizlilerin elinde!",
            historicalNote:
              "Bunu Biliyor muydun? 1453 yılında Haliç'i kapatan o gerçek demir zincirin parçaları bugün İstanbul'daki Askeri Müze'de ve Deniz Müzesi'nde görülebilir!",
            imagePath: "assets/images/fatih_s2_red_notebook_plan.png",
            imageKey: "assets/images/fatih_s2_red_notebook_plan.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Galata Kulesi ile Sarayburnu arasındaki dev demir zincir ve bekleyen gemiler.",
          },
          {
            id: "fatih-ch1-s4",
            sceneNumber: 4,
            title: "Gece Yarısı Çizilen İmkânsız Plan",
            narration:
              "Herkesin umutsuzluğa kapıldığı o gece genç Sultan çadırında haritasını açtı. Boğaz'daki Tophane ve Dolmabahçe kıyısından başlayıp Beyoğlu'nun dik tepelerini aşarak Kasımpaşa Deresi'nden Haliç'e inen ormanlık vadileri inceledi. Eğer deniz yolu zincirle kapalıysa, gemileri tepelerin üzerinden kızaklarla yürüterek doğrudan zincirin arkasına indirebilirdi! Bu fikri duyan paşalar hayretten donakaldı.\n\nKarada açılan bembeyaz yelkenler gece rüzgârıyla şişerken, tepelerden süzülen yetmiş gemi tarihin gördüğü en cüretkâr mühendislik mucizelerinden birini gerçekleştiriyordu. Sabır, dikkat ve samimiyetle atılan bu adım, bilimi, matematiği ve sarsılmaz azmi birleştirerek imkânsızı aşan vizyoner bir deha ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Herkesin umutsuzluğa kapıldığı o gece genç Sultan çadırında haritasını açtı. Boğaz'daki Tophane ve Dolmabahçe kıyısından başlayıp Beyoğlu'nun dik tepelerini aşarak Kasımpaşa Deresi'nden Haliç'e inen ormanlık vadileri inceledi. Eğer deniz yolu zincirle kapalıysa, gemileri tepelerin üzerinden kızaklarla yürüterek doğrudan zincirin arkasına indirebilirdi! Bu fikri duyan paşalar hayretten donakaldı.\n\nKarada açılan bembeyaz yelkenler gece rüzgârıyla şişerken, tepelerden süzülen yetmiş gemi tarihin gördüğü en cüretkâr mühendislik mucizelerinden birini gerçekleştiriyordu. Sabır, dikkat ve samimiyetle atılan bu adım, bilimi, matematiği ve sarsılmaz azmi birleştirerek imkânsızı aşan vizyoner bir deha ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Sultan II. Mehmed",
            dialogue:
              "Denizden geçemiyorsak karadan geçeriz! Tophane kıyısından Kasımpaşa'ya kadar ağaç kızaklardan bir yol döşeyin; gemilerimizi tepelerden aşıracağız!",
            historicalNote:
              "Bunu Biliyor muydun? Gemilerin karadan yürütülmesi dünya denizcilik tarihinde eşi benzeri görülmemiş bir lojistik ve fizik mühendisliği başarısıdır.",
            imagePath: "assets/images/artifact_fatih_notebook.png",
            imageKey: "assets/images/artifact_fatih_notebook.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Kırmızı Defteri ve altın pergeliyle Tophane-Kasımpaşa tepe rotasını çizen Fatih.",
            midDecision: {
              title: "ARA KARAR: Ağır Gemiler Tepeden Nasıl Kaydırılır?",
              question:
                "Tonlarca ağırlıktaki ahşap savaş gemilerini dik yokuşlardan yukarı çekmek için kızakların üzerine ne sürersin?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Kızakların üzerine kum ve çakıl dökerim ki gemiler geri kaymasın.",
                  feedback:
                    "Kum ve çakıl sürtünmeyi artırır, ağır gemiler yerinden bile kıpırdayamaz!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Sürtünmeyi azaltmak için kalasların üzerine tonlarca zeytinyağı ve sığır içyağı (don yağı) sürdürürüm!",
                  feedback:
                    "Tam isabet! Fatih'in mühendisleri sürtünme kuvvetini en aza indirmek için kızakları zeytinyağı ve içyağı ile yağladılar.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "fatih-ch1-s5",
            sceneNumber: 5,
            title: "Zeytinyağı ve İçyağı İle Yağlanan Kızaklar",
            narration:
              "Sultan'ın emriyle binlerce marangoz, lağımcı ve usta gece gündüz çalışarak orman içindeki yolu düzleştirdi. Toprağın üzerine birbirine kenetlenmiş kalın meşe ve çam kalaslarından uzun bir ray hattı döşendi. Sürtünme kuvvetini azaltmak için kalasların üzerine kazanlar dolusu zeytinyağı ve eritilmiş içyağı sürüldü. Her bir geminin omurgasına uygun dev tekerlekli ahşap kızaklar ve makara sistemleri hazırlandı.\n\nŞafak sökerken Haliç'in sakin sularında beliren donanma, bilgi ve kararlılıkla birleşen bir hayalin önünde hiçbir engelin duramayacağını tüm dünyaya ilan ediyordu. O an 1453 baharında İstanbul surları, Tophane sırtları ve Haliç'in mavi suları arasında hissedilen bilimi, matematiği ve sarsılmaz azmi birleştirerek imkânsızı aşan vizyoner bir deha, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Sultan'ın emriyle binlerce marangoz, lağımcı ve usta gece gündüz çalışarak orman içindeki yolu düzleştirdi. Toprağın üzerine birbirine kenetlenmiş kalın meşe ve çam kalaslarından uzun bir ray hattı döşendi. Sürtünme kuvvetini azaltmak için kalasların üzerine kazanlar dolusu zeytinyağı ve eritilmiş içyağı sürüldü. Her bir geminin omurgasına uygun dev tekerlekli ahşap kızaklar ve makara sistemleri hazırlandı.\n\nŞafak sökerken Haliç'in sakin sularında beliren donanma, bilgi ve kararlılıkla birleşen bir hayalin önünde hiçbir engelin duramayacağını tüm dünyaya ilan ediyordu. O an 1453 baharında İstanbul surları, Tophane sırtları ve Haliç'in mavi suları arasında hissedilen bilimi, matematiği ve sarsılmaz azmi birleştirerek imkânsızı aşan vizyoner bir deha, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Başmimar ve Mühendisbaşı",
            dialogue:
              "Hünkârım, kalasların tamamı içyağı ve zeytinyağı ile yağlandı; makaralar ve halatlar en ağır kadırgaları bile çekmeye hazır!",
            historicalNote:
              "Bunu Biliyor muydun? Gemilerin karadan yürütüldüğü güzergâh yaklașık 2,5 kilometre uzunluğundaydı ve deniz seviyesinden 60 metre yüksekliğindeki tepeyi aşıyordu.",
            imagePath: "assets/images/fatih_s3_greased_logs.png",
            imageKey: "assets/images/fatih_s3_greased_logs.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Gece meşaleler altında Tophane orman yoluna döşenen yağlı çam kızaklar.",
          },
          {
            id: "fatih-ch1-s6",
            sceneNumber: 6,
            title: "21 Nisan Gecesi: Karada Açılan Yelkenler!",
            narration:
              "21 Nisan'ı 22 Nisan'a bağlayan gece meşaleler yakıldı. Bizanslıların gürültüyü duymaması için surların önünde top atışları yapılırken, Boğaz kıyısındaki yetmişe yakın Osmanlı gemisi halatlarla yağlı kızakların üzerine çekildi! Güçlü öküz sürüleri ve binlerce levent halatlara asıldı. Gemiler tepeye çıktığında esen poyraz rüzgârından da faydalanmak için karanın ortasında yelkenler açıldı! Gemiler rüzgârla şişen yelkenleriyle ağaçların arasından süzülerek ilerliyordu.\n\nİstanbul Kadısı Hızır Çelebi'nin taş avlulu mahkemesinde yankılanan adalet sesi, Cihan Padişahı ile Rum mimarı kanun önünde omuz omuza eşit kılıyordu. Tarihin bu unutulmaz dönemeç noktasında, bilimi, matematiği ve sarsılmaz azmi birleştirerek imkânsızı aşan vizyoner bir deha sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "21 Nisan'ı 22 Nisan'a bağlayan gece meşaleler yakıldı. Bizanslıların gürültüyü duymaması için surların önünde top atışları yapılırken, Boğaz kıyısındaki yetmişe yakın Osmanlı gemisi halatlarla yağlı kızakların üzerine çekildi! Güçlü öküz sürüleri ve binlerce levent halatlara asıldı. Gemiler tepeye çıktığında esen poyraz rüzgârından da faydalanmak için karanın ortasında yelkenler açıldı! Gemiler rüzgârla şişen yelkenleriyle ağaçların arasından süzülerek ilerliyordu.\n\nİstanbul Kadısı Hızır Çelebi'nin taş avlulu mahkemesinde yankılanan adalet sesi, Cihan Padişahı ile Rum mimarı kanun önünde omuz omuza eşit kılıyordu. Tarihin bu unutulmaz dönemeç noktasında, bilimi, matematiği ve sarsılmaz azmi birleştirerek imkânsızı aşan vizyoner bir deha sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Kadırga Reisi",
            dialogue:
              "Yelkenleri fora edin leventler! Poyraz arkamızdan esiyor; tarihte ilk kez karada yelken açarak Haliç'e iniyoruz!",
            historicalNote:
              "Bunu Biliyor muydun? O gece gemilerin içinde kürekçiler yerlerinde oturmuş, dümenciler dümen tutmuş ve davullar çalınarak gemiler tıpkı denizdeymiş gibi yürütülmüştür!",
            imagePath: "assets/images/fatih_s4_ships_on_hills.png",
            imageKey: "assets/images/fatih_s4_ships_on_hills.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Yelkenleri rüzgârla şişmiş Osmanlı kadırgalarının tepelerden karadan yürütülmesi.",
          },
          {
            id: "fatih-ch1-s7",
            sceneNumber: 7,
            title: "22 Nisan Sabahı Haliç'te Şaşkınlık",
            narration:
              "22 Nisan sabahı güneş doğarken surların üzerine çıkan Bizans nöbetçileri gözlerini ovuşturdu. Aşılmaz sandıkları demir zincir yerli yerinde duruyordu ama zincirin tam arkasında, Haliç'in sakin sularında yetmiş parça Osmanlı donanması al sancağıyla dalgalanıyordu! Akşemseddin Hazretleri ve genç Sultan Mehmed, Kasımpaşa sırtlarından suya inen son gemiyi şükür dualarıyla izliyordu.\n\nAdaletin üstünlüğü karşısında saygıyla eğilen bu tavır, bir imparatorluğu ayakta tutan asıl gücün toplar ve surlar değil, sarsılmaz hukuk olduğunu gösteriyordu. Çevredeki her detay, 1453 baharında İstanbul surları, Tophane sırtları ve Haliç'in mavi suları arasında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "22 Nisan sabahı güneş doğarken surların üzerine çıkan Bizans nöbetçileri gözlerini ovuşturdu. Aşılmaz sandıkları demir zincir yerli yerinde duruyordu ama zincirin tam arkasında, Haliç'in sakin sularında yetmiş parça Osmanlı donanması al sancağıyla dalgalanıyordu! Akşemseddin Hazretleri ve genç Sultan Mehmed, Kasımpaşa sırtlarından suya inen son gemiyi şükür dualarıyla izliyordu.\n\nAdaletin üstünlüğü karşısında saygıyla eğilen bu tavır, bir imparatorluğu ayakta tutan asıl gücün toplar ve surlar değil, sarsılmaz hukuk olduğunu gösteriyordu. Çevredeki her detay, 1453 baharında İstanbul surları, Tophane sırtları ve Haliç'in mavi suları arasında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Akşemseddin Hazretleri",
            dialogue:
              "Elhamdülillah Hünkârım! Peygamber Efendimizin müjdelediği o kutlu fethin kapısı, ilminiz ve gayretinizle bugün ardına kadar açıldı!",
            historicalNote:
              "Bunu Biliyor muydun? Bizanslı tarihçi Dukas ve İtalyan doktor Nicolò Barbaro, sabah Haliç'te Osmanlı gemilerini gördüklerinde yaşadıkları büyük şaşkınlığı hatıratlarında yazmışlardır.",
            imagePath: "assets/images/fatih_ships.png",
            imageKey: "assets/images/fatih_ships.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Sabah güneş doğarken Haliç sularına inmiş 70 Osmanlı gemisi ve surlardaki Bizans gözcüleri.",
          },
          {
            id: "fatih-ch1-s8",
            sceneNumber: 8,
            title: "29 Mayıs 1453 ve Eman Fermanı",
            narration:
              "Haliç'e inen donanma sayesinde kuşatma tamamlandı ve 29 Mayıs 1453 Salı günü İstanbul fethedildi. Artık 'Fatih' unvanını alan yirmi bir yaşındaki Sultan, şehre girdiğinde ilk iş olarak korku içindeki halka tam bir can, mal ve inanç özgürlüğü tanıyan meşhur 'Emanname' fermanını ilan etti. Kimsenin ibadethanesine ve evine dokunulmayacağını, herkesin kendi inancında özgür olduğunu bütün dünyaya duyurdu.\n\nHaliç'in girişine gerilen devasa demir zincir dalgalarla çarpışırken, boğazın serin rüzgârı genç Sultan'ın zihnindeki yepyeni mühendislik planlarını harekete geçiriyordu. Sabır, dikkat ve samimiyetle atılan bu adım, bilimi, matematiği ve sarsılmaz azmi birleştirerek imkânsızı aşan vizyoner bir deha ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Haliç'e inen donanma sayesinde kuşatma tamamlandı ve 29 Mayıs 1453 Salı günü İstanbul fethedildi. Artık 'Fatih' unvanını alan yirmi bir yaşındaki Sultan, şehre girdiğinde ilk iş olarak korku içindeki halka tam bir can, mal ve inanç özgürlüğü tanıyan meşhur 'Emanname' fermanını ilan etti. Kimsenin ibadethanesine ve evine dokunulmayacağını, herkesin kendi inancında özgür olduğunu bütün dünyaya duyurdu.\n\nHaliç'in girişine gerilen devasa demir zincir dalgalarla çarpışırken, boğazın serin rüzgârı genç Sultan'ın zihnindeki yepyeni mühendislik planlarını harekete geçiriyordu. Sabır, dikkat ve samimiyetle atılan bu adım, bilimi, matematiği ve sarsılmaz azmi birleştirerek imkânsızı aşan vizyoner bir deha ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Fatih Sultan Mehmed",
            dialogue:
              "Bugünden itibaren hiç kimse canından ve malından korkmasın! Herkes evine ve işine dönsün; bu şehirde bütün inançlar devletimin güvencesi altındadır!",
            historicalNote:
              "Bunu Biliyor muydun? İstanbul'un fethi Orta Çağ'ı kapatıp Yeni Çağ'ı başlatan en büyük tarihi dönüm noktalarından biri kabul edilir.",
            imagePath: "assets/images/fatih_s5_golden_horn_dawn.png",
            imageKey: "assets/images/fatih_s5_golden_horn_dawn.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Adalet ve hoşgörü fermanı.",
          },
          {
            id: "fatih-ch1-s9",
            sceneNumber: 9,
            title: "Bilim ve Hayalin Zaferi",
            narration:
              "Çocukluğunda kırmızı deri defterine çizimler yapan o meraklı şehzade, okuduğu kitaplar ve öğrendiği fizik kuralları sayesinde tarihin akışını değiştirmişti. İstanbul'u aldıktan sonra şehrin her köşesine Sahn-ı Semân medreseleri, kütüphaneler ve rasathaneler kurdurarak İstanbul'u dünyanın bilim merkezi haline getirdi. Çünkü gerçek fetih, bilimin ve adaletin ışığıyla kalpleri aydınlatmaktı.\n\nOtağ-ı Hümayun'da yanan mumların altında açılan Kırmızı Defter, pergellerin ve açıölçerlerin diliyle yazılan büyük bir bilimsel hazırlığın sessiz tanığıydı. O an 1453 baharında İstanbul surları, Tophane sırtları ve Haliç'in mavi suları arasında hissedilen bilimi, matematiği ve sarsılmaz azmi birleştirerek imkânsızı aşan vizyoner bir deha, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Çocukluğunda kırmızı deri defterine çizimler yapan o meraklı şehzade, okuduğu kitaplar ve öğrendiği fizik kuralları sayesinde tarihin akışını değiştirmişti. İstanbul'u aldıktan sonra şehrin her köşesine Sahn-ı Semân medreseleri, kütüphaneler ve rasathaneler kurdurarak İstanbul'u dünyanın bilim merkezi haline getirdi. Çünkü gerçek fetih, bilimin ve adaletin ışığıyla kalpleri aydınlatmaktı.\n\nOtağ-ı Hümayun'da yanan mumların altında açılan Kırmızı Defter, pergellerin ve açıölçerlerin diliyle yazılan büyük bir bilimsel hazırlığın sessiz tanığıydı. O an 1453 baharında İstanbul surları, Tophane sırtları ve Haliç'in mavi suları arasında hissedilen bilimi, matematiği ve sarsılmaz azmi birleştirerek imkânsızı aşan vizyoner bir deha, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Fatih Sultan Mehmed",
            dialogue:
              "İlim ve sanat, bir devletin en sarsılmaz kalesidir. Okumaktan, çizmekten ve imkânsız denileni başarmaktan asla vazgeçmeyin!",
            historicalNote:
              "Bunu Biliyor muydun? Fatih Sultan Mehmed ünlü matematik ve astronomi bilgini Ali Kuşçu'yu İstanbul'a davet ederek Ayasofya Medresesi'nin başına getirmiştir.",
            imagePath: "assets/images/fatih_kadi_court.png",
            imageKey: "assets/images/fatih_kadi_court.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Bilim, usturlap ve mühendislik defteri.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "İstanbul kuşatmasında Haliç'in ağzı dev bir demir zincirle kapatılmış ve gemilerin içeri giremiyor. Herkes bunun imkânsız olduğunu söylüyor. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Zinciri kıramadığımız için kuşatmayı kaldırıp Edirne'ye geri dönerim.",
              feedback:
                "İlk engelde pes etmek büyük hedefleri olan bir vizyonere yakışmaz!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Gemileri zincirin üzerine doğru hızla sürüp çarparak geçmeye çalışırım.",
              feedback:
                "Kalın demir zincir ve arkasındaki topçu ateşi bütün gemilerinin batmasına yol açardı.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Boğaz kıyısından Kasımpaşa'ya kadar zeytinyağı ve içyağı ile yağlanmış ahşap kızaklar döşetir, 70 gemiyi bir gecede tepelerin üzerinden karadan yürüterek Haliç'e indiririm!",
              feedback:
                "Tarihi Hakikat! Fatih Sultan Mehmed mühendislik dehasıyla imkânsız denileni başardı!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Fatih Sultan Mehmed, 21-22 Nisan 1453 gecesi Tophane kıyısından Kasımpaşa'ya uzanan tepeye zeytinyağı ve içyağı ile yağlanmış ahşap kızaklar döşetti. Yetmişe yakın Osmanlı gemisi bir gecede karadan yürütülerek Haliç'e indirildi ve İstanbul'un fethinin önü açıldı!",
          quoteHighlight:
            "İmkânsız dedikleri şey, sadece henüz mühendisliği ve planı kurulmamış olandır!",
        },
        rewardArtifact: {
          id: "artifact-fatih-notebook",
          name: "Fatih'in Çizim Defteri ve Altın Pergeli",
          heroId: "fatih-sultan-mehmed",
          chapterId: "fatih-sultan-mehmed-ch1",
          imagePath: "assets/images/artifact_fatih_notebook.png",
          pointType: "CESARET_MERHAMET",
          pointLabel: "Cesaret ve Bilgelik Puanı",
          points: 50,
          unlockedTitle: "Cihan Stratejisti",
          shortDescription:
            "Genç Şehzade Mehmed'in çocukluk çizimlerini ve gemileri karadan yürüten mühendislik hesaplarını taşıyan tarihi defteri ve pergeli.",
          historicalNote:
            "Fatih Sultan Mehmed'in çocukluk çizim defteri bugün Topkapı Sarayı Müzesi'nde (H. 2324) korunan en değerli tarihi miraslarımızdan biridir.",
          accentColor: "#F43F5E",
          hotspots: [
            {
              id: "notebook-sketches",
              xPercent: 35,
              yPercent: 35,
              title: "Şehzade Mehmed'in Çizimleri",
              secretFact:
                "Topkapı Sarayı'ndaki gerçek defterde genç Mehmed'in kendi eliyle çizdiği atlar, leylekler, portreler ve harf çalışmaları yer alır.",
            },
            {
              id: "golden-compass",
              xPercent: 65,
              yPercent: 55,
              title: "Balistik ve Açı Pergeli",
              secretFact:
                "Şahi toplarının menzilini ve kızak yolunun eğimini hesaplamak için matematik ve geometri aletleri kullanılmıştır.",
            },
            {
              id: "slipway-plan",
              xPercent: 48,
              yPercent: 75,
              title: "Yağlı Kızak Yolu Krokisi",
              secretFact:
                "21-22 Nisan gecesi 70 gemi zeytinyağı ve içyağı sürülmüş çam kalaslar üzerinden Kasımpaşa'ya indirilmiştir.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Fatih Sultan Mehmed çocukken defterine sürekli çizimler yapıp yabancı diller ve matematik öğrenmeseydi gemileri karadan yürütebilir miydi?",
          "Hayatımızda karşımıza 'zincir' gibi aşılmaz görünen bir engel çıktığında pes etmek yerine yeni bir yol bulmak için ne yapabiliriz?",
          "Senin de hayallerini ve icat fikirlerini çizdiğin özel bir defterin olsa içine ilk ne çizerdin?",
        ],
      },

      // ------------------------------------------------------------------------
      // FATİH SULTAN MEHMED - BÖLÜM 2: KADI HIZIR ÇELEBİ MAHKEMESİ (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "fatih-sultan-mehmed-ch2",
        heroId: "fatih-sultan-mehmed",
        chapterNumber: 2,
        title: "Kadı Hızır Çelebi Mahkemesinde Ayağa Kalkan Padişah",
        subtitle: "Kanun ve adalet önünde cihan padişahı ile sade bir vatandaş eşittir",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "fatih-ch2-s1",
            sceneNumber: 1,
            title: "Yeniden İnşa Edilen İstanbul",
            narration:
              "İstanbul'un fethinden sonra Fatih Sultan Mehmed şehri dünyanın en güzel bilim ve kültür başkenti yapmak için büyük bir imar hareketi başlattı. Şehrin dört bir yanında külliyeler, kütüphaneler, aşevleri, hamamlar ve çarşılar yükseliyordu. Bu büyük inşaatlarda Müslüman ustalarla birlikte Rum ve Ermeni mimarlar da omuz omuza çalışıyor, emeklerinin karşılığını eksiksiz alıyorlardı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "İstanbul'un fethinden sonra Fatih Sultan Mehmed şehri dünyanın en güzel bilim ve kültür başkenti yapmak için büyük bir imar hareketi başlattı. Şehrin dört bir yanında külliyeler, kütüphaneler, aşevleri, hamamlar ve çarşılar yükseliyordu. Bu büyük inşaatlarda Müslüman ustalarla birlikte Rum ve Ermeni mimarlar da omuz omuza çalışıyor, emeklerinin karşılığını eksiksiz alıyorlardı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Fatih Sultan Mehmed",
            dialogue:
              "İstanbul'un taşlarını ustalıkla, temellerini ise sarsılmaz bir adaletle yükselteceğiz!",
            historicalNote:
              "Bunu Biliyor muydun? Fatih Sultan Mehmed, İstanbul'un ilk belediye başkanı ve başkadısı olarak dönemin en dürüst ve cesur âlimlerinden Hızır Çelebi'yi atamıştır.",
            imagePath: "assets/images/fatih_s5_golden_horn_dawn.png",
            imageKey: "assets/images/fatih_s5_golden_horn_dawn.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Güneşli avluda yükselen mermer sütunlar ve mimari planlar.",
          },
          {
            id: "fatih-ch2-s2",
            sceneNumber: 2,
            title: "Rum Mimarın Şikâyeti",
            narration:
              "İnşaatlar sırasında büyük mermer sütunların boyu ve kullanımı konusunda Fatih Sultan Mehmed ile İstanbullu bir Rum mimar arasında ciddi bir anlaşmazlık yaşandı. Rum mimar kendisine haksızlık yapıldığını ve mağdur edildiğini düşünüyordu. Çevresindeki komutanlar ona 'Karşındaki kişi koskoca İstanbul Fatihi, padişahı kime şikâyet edeceksin?' dediler. Ancak mimar, Osmanlı mahkemelerinin adaletini duymuştu.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "İnşaatlar sırasında büyük mermer sütunların boyu ve kullanımı konusunda Fatih Sultan Mehmed ile İstanbullu bir Rum mimar arasında ciddi bir anlaşmazlık yaşandı. Rum mimar kendisine haksızlık yapıldığını ve mağdur edildiğini düşünüyordu. Çevresindeki komutanlar ona 'Karşındaki kişi koskoca İstanbul Fatihi, padişahı kime şikâyet edeceksin?' dediler. Ancak mimar, Osmanlı mahkemelerinin adaletini duymuştu.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "İstanbullu Rum Mimar",
            dialogue:
              "Sizin dininizde ve kanununuzda adalet herkese eşit değil midir? Ben hakkımı aramak için İstanbul Kadısı Hızır Çelebi'nin mahkemesine başvuracağım!",
            historicalNote:
              "Bunu Biliyor muydun? Osmanlı hukuk sisteminde din, dil veya makam fark etmeksizin her insan doğrudan kadı mahkemesine başvurup hakkını arayabilirdi.",
            imagePath: "assets/images/fatih_hero.png",
            imageKey: "assets/images/fatih_hero.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Avluda mermer kemerler ve mimari rulolar.",
          },
          {
            id: "fatih-ch2-s3",
            sceneNumber: 3,
            title: "Saraya Gelen Mahkeme Celbi",
            narration:
              "Rum mimarın dilekçesini alan İstanbul Kadısı Hızır Çelebi hiç çekinmeden kalemi eline aldı. Davalı sıfatıyla doğrudan Padişah Fatih Sultan Mehmed'i mahkemeye çağıran resmi bir davetname (celp) yazıp mühürledi ve saraya gönderdi! Celbi okuyan saray vezirleri şaşkınlık içinde kaldı; acaba cihan padişahı bir mimarın şikâyeti üzerine mahkemeye gidecek miydi?\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Rum mimarın dilekçesini alan İstanbul Kadısı Hızır Çelebi hiç çekinmeden kalemi eline aldı. Davalı sıfatıyla doğrudan Padişah Fatih Sultan Mehmed'i mahkemeye çağıran resmi bir davetname (celp) yazıp mühürledi ve saraya gönderdi! Celbi okuyan saray vezirleri şaşkınlık içinde kaldı; acaba cihan padişahı bir mimarın şikâyeti üzerine mahkemeye gidecek miydi?\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Fatih Sultan Mehmed",
            dialogue:
              "Kadı Efendi bizi hukukun huzuruna çağırmış! Kanunun çağırdığı yere gitmemek padişaha yakışmaz; atımı hazırlayın, hemen mahkemeye gidiyoruz!",
            historicalNote:
              "Bunu Biliyor muydun? Kadı Hızır Çelebi, Nasreddin Hoca'nın soyundan gelen, hem ilmi hem de cesaretiyle tanınan çok büyük bir hukuk alimiydi.",
            imagePath: "assets/images/fatih_s2_red_notebook_plan.png",
            imageKey: "assets/images/fatih_s2_red_notebook_plan.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Kanuna saygıyla mahkemeye giden Sultan.",
          },
          {
            id: "fatih-ch2-s4",
            sceneNumber: 4,
            title: "Mahkeme Salonunda Tarihi Uyarı!",
            narration:
              "Fatih Sultan Mehmed mahkeme salonuna girdiğinde davacı Rum mimar ayakta bekliyordu. Padişah ise alışkanlıkla geçip sedirin üzerine oturdu. Tam o anda kürsüdeki Kadı Hızır Çelebi başını kaldırdı ve tarihe altın harflerle geçen o cesur uyarısını yaptı! Mahkeme salonunda çıt çıkmıyordu; Rum mimar ise korkudan ve şaşkınlıktan nefesini tutmuştu.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Fatih Sultan Mehmed mahkeme salonuna girdiğinde davacı Rum mimar ayakta bekliyordu. Padişah ise alışkanlıkla geçip sedirin üzerine oturdu. Tam o anda kürsüdeki Kadı Hızır Çelebi başını kaldırdı ve tarihe altın harflerle geçen o cesur uyarısını yaptı! Mahkeme salonunda çıt çıkmıyordu; Rum mimar ise korkudan ve şaşkınlıktan nefesini tutmuştu.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Kadı Hızır Çelebi",
            dialogue:
              "Beyim! Şu an sarayda değil, adalet kürsüsünün huzurundasınız. Mahkemede davacı ile davalı eşit durur; hasmınız ayaktayken siz oturamazsınız, lütfen ayağa kalkınız!",
            historicalNote:
              "Bunu Biliyor muydun? İslam hukukunda (Mecelle ve Fıkıh kurallarında) hâkimin taraflardan birine oturma izni verip diğerini ayakta tutması bile adalete aykırı sayılır!",
            imagePath: "assets/images/ali_s2_kadi_shurayh_court.png",
            imageKey: "assets/images/ali_s2_kadi_shurayh_court.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Adalet divanında eşitlik sahnesi.",
            midDecision: {
              title: "ARA KARAR: Kadı Seni Ayağa Kaldırdığında Ne Yaparsın?",
              question:
                "Koskoca cihan padişahısın ve Kadı Hızır Çelebi sana 'Mahkemede davacı ile davalı eşit durur, ayağa kalkınız!' dedi. Nasıl tepki verirsin?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Ben padişahım, kimse bana ayağa kalk diyemez diyerek öfkelenirim.",
                  feedback:
                    "Kanun ve adaletin üstünlüğünü kabul etmeyen bir hükümdar gerçek adaleti koruyamaz.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Hiç itiraz etmeden derhal ayağa kalkar ve Rum mimarla yan yana, omuz omuza eşit dururum!",
                  feedback:
                    "Muazzam seçim! Fatih Sultan Mehmed hukuka olan saygısından dolayı hemen ayağa kalkıp mimarla yan yana durdu.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "fatih-ch2-s5",
            sceneNumber: 5,
            title: "Rum Mimarla Omuz Omuza Duran Sultan",
            narration:
              "Kadı Hızır Çelebi'nin sözleri üzerine Fatih Sultan Mehmed tek bir kelime bile itiraz etmeden derhal ayağa kalktı! Cihan padişahı, şikâyetçi olan Rum mimarın tam yanına geçti ve ellerini önünde bağlayarak mahkeme boyunca ayakta durdu. Yanında İstanbul'u fetheden padişahın kendisiyle eşit bir vatandaş gibi ayakta beklediğini gören Rum mimarın dizlerinin bağı çözüldü, gözleri yaşlarla doldu.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Kadı Hızır Çelebi'nin sözleri üzerine Fatih Sultan Mehmed tek bir kelime bile itiraz etmeden derhal ayağa kalktı! Cihan padişahı, şikâyetçi olan Rum mimarın tam yanına geçti ve ellerini önünde bağlayarak mahkeme boyunca ayakta durdu. Yanında İstanbul'u fetheden padişahın kendisiyle eşit bir vatandaş gibi ayakta beklediğini gören Rum mimarın dizlerinin bağı çözüldü, gözleri yaşlarla doldu.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Fatih Sultan Mehmed",
            dialogue:
              "Haklısınız Kadı Efendi! Adalet divanında sultanlık sökmez; buyurun davayı dinleyiniz.",
            historicalNote:
              "Bunu Biliyor muydun? Bu tarihi duruşma Evliya Çelebi Seyahatnamesi'nde ve Osmanlı tarih kaynaklarında adaletin zirvesi olarak anlatılmaktadır.",
            imagePath: "assets/images/fatih_kadi_court.png",
            imageKey: "assets/images/fatih_kadi_court.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Kanun önünde başını eğen vakur Sultan.",
          },
          {
            id: "fatih-ch2-s6",
            sceneNumber: 6,
            title: "Adil Hüküm ve Ödenen Tazminat",
            narration:
              "Kadı Hızır Çelebi önce davacı Rum mimarı, ardından davalı Fatih Sultan Mehmed'i dikkatle dinledi. Delilleri inceledikten sonra Rum mimarın haklı olduğuna ve uğradığı zararın padişahın şahsi bütçesinden ömür boyu cömert bir tazminatla karşılanmasına hükmetti! Fatih Sultan Mehmed kararı tam bir teslimiyetle kabul etti ve mimara belirlenen tazminatın fazlasıyla ödenmesini emretti.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Kadı Hızır Çelebi önce davacı Rum mimarı, ardından davalı Fatih Sultan Mehmed'i dikkatle dinledi. Delilleri inceledikten sonra Rum mimarın haklı olduğuna ve uğradığı zararın padişahın şahsi bütçesinden ömür boyu cömert bir tazminatla karşılanmasına hükmetti! Fatih Sultan Mehmed kararı tam bir teslimiyetle kabul etti ve mimara belirlenen tazminatın fazlasıyla ödenmesini emretti.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Kadı Hızır Çelebi",
            dialogue:
              "Mahkememiz delilleri incelemiş ve mimarın mağduriyetinin Padişah'ın şahsi kesesinden eksiksiz tazmin edilmesine karar vermiştir!",
            historicalNote:
              "Bunu Biliyor muydun? Devlet hazinesi (Beytülmâl) milletin malı sayıldığı için Fatih Sultan Mehmed bu tazminatı devlet kasasından değil, kendi şahsi gelirinden ödemiştir.",
            imagePath: "assets/images/sinan_s3_earthquake_foundation.png",
            imageKey: "assets/images/sinan_s3_earthquake_foundation.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Adalet hükmünün açıklandığı mahkeme avlusu.",
          },
          {
            id: "fatih-ch2-s7",
            sceneNumber: 7,
            title: "Rum Mimarın Hayranlığı",
            narration:
              "Duruşma bittiğinde Rum mimar gözyaşlarını tutamayarak Kadı Hızır Çelebi'ye ve Fatih Sultan Mehmed'e baktı. Dünyanın hiçbir krallığında bir imparatorun sıradan bir ustayla mahkemede yan yana ayakta durup aleyhindeki kararı kabul ettiği görülmemişti! Bu muazzam adalet ve hakkaniyet karşısında kalbi ısınan mimar, ömrünün sonuna kadar İstanbul'un imarı için sadakatle çalıştı.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Duruşma bittiğinde Rum mimar gözyaşlarını tutamayarak Kadı Hızır Çelebi'ye ve Fatih Sultan Mehmed'e baktı. Dünyanın hiçbir krallığında bir imparatorun sıradan bir ustayla mahkemede yan yana ayakta durup aleyhindeki kararı kabul ettiği görülmemişti! Bu muazzam adalet ve hakkaniyet karşısında kalbi ısınan mimar, ömrünün sonuna kadar İstanbul'un imarı için sadakatle çalıştı.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "İstanbullu Rum Mimar",
            dialogue:
              "Bugün gözlerimle gördüm ki İstanbul'u sadece toplarınızla değil, bu eşsiz adaletinizle fethetmişsiniz!",
            historicalNote:
              "Bunu Biliyor muydun? Fatih'in adaleti sayesinde fetihten sonra İstanbul'dan ayrılan pek çok zanaatkâr ve bilgin kendi isteğiyle şehre geri dönmüştür.",
            imagePath: "assets/images/artifact_fatih_notebook.png",
            imageKey: "assets/images/artifact_fatih_notebook.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Güneş ışıkları altında parlayan İstanbul kemerleri.",
          },
          {
            id: "fatih-ch2-s8",
            sceneNumber: 8,
            title: "Kürsünün Altındaki Sembol",
            narration:
              "Herkes mahkeme salonundan çıktıktan sonra Fatih Sultan Mehmed ile Kadı Hızır Çelebi baş başa kaldılar. Sultan, Kadı Efendi'ye dönerek 'Eğer benim padişahlığımdan çekinip kanunu çiğneseydin ve bana haksız yere taraf tutsaydın, şu gücümle seni derhal görevden alırdım!' dedi. Hızır Çelebi ise tebessüm ederek kürsüsünün altındaki adalet mührünü gösterdi.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Herkes mahkeme salonundan çıktıktan sonra Fatih Sultan Mehmed ile Kadı Hızır Çelebi baş başa kaldılar. Sultan, Kadı Efendi'ye dönerek 'Eğer benim padişahlığımdan çekinip kanunu çiğneseydin ve bana haksız yere taraf tutsaydın, şu gücümle seni derhal görevden alırdım!' dedi. Hızır Çelebi ise tebessüm ederek kürsüsünün altındaki adalet mührünü gösterdi.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Kadı Hızır Çelebi",
            dialogue:
              "Hünkârım, siz de mahkemenin verdiği adil kararı padişahlığınıza güvenerek reddetseydiniz, ben de hukukun gücüyle buna asla izin vermezdim!",
            historicalNote:
              "Bunu Biliyor muydun? Kanunlara uyan bir hükümdar ve kimseden korkmadan adalet dağıtan bir hâkim, bir medeniyeti ayakta tutan iki ana sütundur.",
            imagePath: "assets/images/omer_ch2_s8_sophronius_covenant.png",
            imageKey: "assets/images/omer_ch2_s8_sophronius_covenant.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "İki büyük insanın karşılıklı saygısı.",
          },
          {
            id: "fatih-ch2-s9",
            sceneNumber: 9,
            title: "Adaletle Yükselen Cihan Devleti",
            narration:
              "Fatih Sultan Mehmed, kendisini mahkemede ayağa kaldıran ve aleyhinde karar veren Kadı Hızır Çelebi'ye kızmak şöyle dursun, onun bu cesaretinden dolayı kendisine hediyeler gönderdi ve makamını yüceltti. İstanbul sokaklarında yankılanan bu olay, 'Adalet mülkün temelidir' sözünün sadece duvarda yazılı bir cümle değil, bizzat padişahın bile önünde eğildiği yaşayan bir hakikat olduğunu bütün dünyaya kanıtladı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Fatih Sultan Mehmed, kendisini mahkemede ayağa kaldıran ve aleyhinde karar veren Kadı Hızır Çelebi'ye kızmak şöyle dursun, onun bu cesaretinden dolayı kendisine hediyeler gönderdi ve makamını yüceltti. İstanbul sokaklarında yankılanan bu olay, 'Adalet mülkün temelidir' sözünün sadece duvarda yazılı bir cümle değil, bizzat padişahın bile önünde eğildiği yaşayan bir hakikat olduğunu bütün dünyaya kanıtladı.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Fatih Sultan Mehmed",
            dialogue:
              "Bizi padişahlığımızdan korkmadan adalet huzurunda ayağa kaldıran âlimler oldukça bu devlet asla sarsılmaz!",
            historicalNote:
              "Bunu Biliyor muydun? Kadı Hızır Çelebi vefat ettiğinde Fatih Sultan Mehmed onun cenazesine bizzat katılmış ve İstanbul'da Vefa semtine defnedilmiştir.",
            imagePath: "assets/images/artifact_justice_lantern.png",
            imageKey: "assets/images/artifact_justice_lantern.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "İstanbul ufkunda yükselen adalet güneşi.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "İstanbul'u fethetmiş cihan padişahısın. Bir Rum mimar seni Kadı Hızır Çelebi'nin mahkemesine şikâyet etti ve Kadı sana 'Davacıyla eşit durmak için ayağa kalkınız!' dedi. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Ben koskoca padişahım, mahkemeye gitmem ve kadıyı görevden alırım.",
              feedback:
                "Hukukun üstünlüğünü tanımayan bir yönetim halkın güvenini kaybeder.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Mahkemeye giderim ama padişah olduğum için sedirde oturmaya devam ederim.",
              feedback:
                "Mahkemede taraflardan birinin ayrıcalıklı oturması eşitlik ve adalet ilkesini bozar!",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Derhal ayağa kalkıp Rum mimarla yan yana eşit dururum, Kadı'nın verdiği kararı saygıyla kabul eder ve dürüstlüğünden dolayı Kadı Hızır Çelebi'yi takdir ederim!",
              feedback:
                "Tarihi Hakikat! Fatih Sultan Mehmed kanun önünde bir vatandaşla eşit ayakta durarak gerçek büyüklüğünü gösterdi!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Fatih Sultan Mehmed, İstanbul'un ilk kadısı Hızır Çelebi'nin 'Mahkemede davacı ile davalı eşit durur, ayağa kalkınız!' uyarısı üzerine derhal ayağa kalkarak Rum mimarla yan yana durdu ve mahkemenin verdiği tazminat kararını kendi cebinden ödedi.",
          quoteHighlight:
            "Mahkemede davacı ile davalı eşit durur; adalet divanında sultanlık sökmez!",
        },
        rewardArtifact: {
          id: "artifact-justice-scale-seal",
          name: "Kadı Hızır Çelebi'nin Adalet Terazisi",
          heroId: "fatih-sultan-mehmed",
          chapterId: "fatih-sultan-mehmed-ch2",
          imagePath: "assets/images/fatih_kadi_court.png",
          pointType: "ADALET",
          pointLabel: "Adalet Puanı",
          points: 50,
          unlockedTitle: "Hukuk ve Eşitlik Muhafızı",
          shortDescription:
            "Padişah ile sade bir vatandaşı aynı hizada, omuz omuza eşit tutan İstanbul mahkemesinin altın adalet terazisi.",
          historicalNote:
            "Fatih Sultan Mehmed ve Kadı Hızır Çelebi arasındaki bu tarihi dava, hukukun üstünlüğü ilkesinin dünya tarihindeki en çarpıcı örneklerinden biridir.",
          accentColor: "#F43F5E",
          hotspots: [
            {
              id: "scale-equal-pans",
              xPercent: 50,
              yPercent: 32,
              title: "Eşitlik Kefeleri",
              secretFact:
                "Terazinin iki kefesinin tam aynı hizada olması, padişah ile Rum mimarın mahkemede yan yana ayakta durmasını simgeler.",
            },
            {
              id: "qadi-decree",
              xPercent: 35,
              yPercent: 65,
              title: "Hızır Çelebi'nin Celbi",
              secretFact:
                "İstanbul'un ilk kadısı Hızır Çelebi, hiçbir makamdan çekinmeden Padişah'ı mahkemeye davet etmiştir.",
            },
            {
              id: "eman-respect",
              xPercent: 68,
              yPercent: 65,
              title: "Kanuna Saygı Nişanı",
              secretFact:
                "Fatih Sultan Mehmed kendisini ayağa kaldıran kadıyı cezalandırmak yerine dürüstlüğü için ödüllendirmiştir.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Fatih Sultan Mehmed mahkemede ayağa kalktığında yanındaki Rum mimar neler hissetmiş olabilir?",
          "Kuralların ve adaletin herkes için eşit olması bir okulu, bir aileyi veya bir ülkeyi nasıl daha huzurlu yapar?",
          "Bir hatamız olduğunda veya haksız bulunduğumuzda tıpkı Fatih gibi olgunlukla kabul etmek neden cesaret ister?",
        ],
      },
    ],
  },

  // ==========================================================================
  // 6. KAHRAMAN: TARIK BİN ZİYAD (1 BÖLÜM - 9 SAHNE)
  // ==========================================================================
  {
    id: "tarik-bin-ziyad",
    name: "Tarık bin Ziyad",
    heroClass: "MERTLIK_CESARET",
    classBadgeLabel: "Mertlik ve Cesaret",
    title: "Cebelitarık Boğazı'na Adını Veren Komutan",
    era: "670 – 720 (Kuzey Afrika & Endülüs / İspanya)",
    visualMode: "CHARACTER_PORTRAIT",
    coverImage: "assets/images/tarik_bin_ziyad_gibraltar.png",
    crisisImage: "assets/images/tarik_bin_ziyad_gibraltar.png",
    accentColor: "#D97706",
    secondaryColor: "#0D9488",
    badgeText: "Endülüs Fatihi & Kararlılık",
    shortBio:
      "711 yılında Kuzey Afrika'dan İspanya kıyılarına geçerek Cebelitarık (Cebel-i Tarık) Boğazı'na adını veren, sarsılmaz cesareti ve adaletiyle Avrupa'da 800 yıllık Endülüs bilim ve kültür medeniyetinin kapılarını açan büyük komutan.",
    chapters: [
      // ------------------------------------------------------------------------
      // TARIK BİN ZİYAD - BÖLÜM 1: CEBELİTARIK KIYILARINDA CESARET (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "tarik-bin-ziyad-ch1",
        heroId: "tarik-bin-ziyad",
        chapterNumber: 1,
        title: "Cebelitarık Kıyılarında Cesaret ve Kararlılık",
        subtitle: "Geri dönmeyi değil, adalet ve ilimle yeni bir ufuk açmayı seçenlerin destanı",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "tarik-ch1-s1",
            sceneNumber: 1,
            title: "Tanca Kıyılarında İki Denizin Birleştiği Boğaz",
            narration:
              "Miladi 711 yılının baharında, Kuzey Afrika'nın en uç noktası olan Tanca kıyılarında tuzlu okyanus rüzgârları esiyordu. Akdeniz ile Atlas Okyanusu'nun birbirine kavuştuğu dar boğazın karşı yakasında, sisler ardında yükselen İspanya (Endülüs) kıyıları görünüyordu. Genç ve vakur komutan Tarık bin Ziyad, sahildeki kayalıkların üzerinde durmuş, karşı kıyıdan gelen mazlum insanların yardım çağrılarını dinliyordu.\n\nAkdeniz ile Atlas Okyanusu'nun birleştiği boğazda sabah sisi dağılırken, ahşap gemilerin pruvasına çarpan köpüklü dalgalar yeni bir çağın ayak seslerini duyuruyordu. O an sabah sisleriyle örtülü Cebelitarık Boğazı'nın sarp kayalıkları ve Endülüs kıyılarında hissedilen bilinmeyene doğru yelken açan sarsılmaz bir cesaret, kararlılık ve medeniyet kurma vizyonu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Miladi 711 yılının baharında, Kuzey Afrika'nın en uç noktası olan Tanca kıyılarında tuzlu okyanus rüzgârları esiyordu. Akdeniz ile Atlas Okyanusu'nun birbirine kavuştuğu dar boğazın karşı yakasında, sisler ardında yükselen İspanya (Endülüs) kıyıları görünüyordu. Genç ve vakur komutan Tarık bin Ziyad, sahildeki kayalıkların üzerinde durmuş, karşı kıyıdan gelen mazlum insanların yardım çağrılarını dinliyordu.\n\nAkdeniz ile Atlas Okyanusu'nun birleştiği boğazda sabah sisi dağılırken, ahşap gemilerin pruvasına çarpan köpüklü dalgalar yeni bir çağın ayak seslerini duyuruyordu. O an sabah sisleriyle örtülü Cebelitarık Boğazı'nın sarp kayalıkları ve Endülüs kıyılarında hissedilen bilinmeyene doğru yelken açan sarsılmaz bir cesaret, kararlılık ve medeniyet kurma vizyonu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Tarık bin Ziyad",
            dialogue:
              "Şu dar boğazın ötesinde ağır vergiler ve zulüm altında inleyen bir halk var; oraya kılıç sallamaya değil, adalet ve huzur götürmeye geçeceğiz!",
            historicalNote:
              "Bunu Biliyor muydun? O dönemde İspanya'da hüküm süren Vizigot Kralı Roderick'in ağır baskılarından bunalan yerel halk ve Sebte Valisi Julian, Müslümanlardan yardım istemişti.",
            imagePath: "assets/images/tarik_s1_andalusia_fleet.png",
            imageKey: "assets/images/tarik_s1_andalusia_fleet.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Boğaz kıyısında rüzgâra karşı duran vakur komutan.",
          },
          {
            id: "tarik-ch1-s2",
            sceneNumber: 2,
            title: "Gemide Görülen Kutlu Rüya ve Müjde",
            narration:
              "Yedi bin kişilik öncü birlik gemilere binip hırçın dalgaları yararak karşı kıyıya doğru ilerlemeye başladı. Gece yarısı geminin güvertesinde kısa bir süre gözlerini kapatan Tarık bin Ziyad, kalbine büyük bir ferahlık ve cesaret veren unutulmaz bir rüya gördü. Uyandığında yüzünde sakin bir tebessüm vardı; yanındaki sancaktarına dönerek yolculuklarının hayırla sonuçlanacağını müjdeledi.\n\nSarp kireçtaşı kayalıkların zirvesinden ufka bakan gözlerde, tereddüdü geride bırakıp bilimin ve adaletin filizleneceği yeni bir yurt kurma azmi parlıyordu. Tarihin bu unutulmaz dönemeç noktasında, bilinmeyene doğru yelken açan sarsılmaz bir cesaret, kararlılık ve medeniyet kurma vizyonu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Yedi bin kişilik öncü birlik gemilere binip hırçın dalgaları yararak karşı kıyıya doğru ilerlemeye başladı. Gece yarısı geminin güvertesinde kısa bir süre gözlerini kapatan Tarık bin Ziyad, kalbine büyük bir ferahlık ve cesaret veren unutulmaz bir rüya gördü. Uyandığında yüzünde sakin bir tebessüm vardı; yanındaki sancaktarına dönerek yolculuklarının hayırla sonuçlanacağını müjdeledi.\n\nSarp kireçtaşı kayalıkların zirvesinden ufka bakan gözlerde, tereddüdü geride bırakıp bilimin ve adaletin filizleneceği yeni bir yurt kurma azmi parlıyordu. Tarihin bu unutulmaz dönemeç noktasında, bilinmeyene doğru yelken açan sarsılmaz bir cesaret, kararlılık ve medeniyet kurma vizyonu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Tarık bin Ziyad",
            dialogue:
              "Kalbinizi ferah tutun! Doğruluktan ve merhametten ayrılmadığımız sürece bu fırtınalı denizler bize yol verecektir.",
            historicalNote:
              "Bunu Biliyor muydun? Tarık bin Ziyad Kuzey Afrika valisi Musa bin Nusayr tarafından Tanca valiliğine atanmış, dürüstlüğü ve liderlik yeteneğiyle ordunun sevgisini kazanmıştı.",
            imagePath: "assets/images/piri_reis_stars_kamal.png",
            imageKey: "assets/images/piri_reis_stars_kamal.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Gece yıldızlar altında boğazı geçen gemiler.",
          },
          {
            id: "tarik-ch1-s3",
            sceneNumber: 3,
            title: "Cebel-i Tarık: Tarık'ın Dağı",
            narration:
              "Sabahın ilk ışıklarıyla birlikte gemiler İspanya'nın güney ucundaki devasa, sarp ve kayalık bir dağın eteklerine demir attı. Askerler karaya ayak bastığında, gökyüzüne doğru bir kale gibi yükselen bu heybetli kaya kütlesine hayranlıkla baktılar. O günden itibaren bu sarp kayalık 'Cebel-i Tarık' yani 'Tarık'ın Dağı' olarak anılmaya başlandı ve dünya coğrafya tarihine kazındı!\n\nRüzgârda dalgalanan sancaklar ve süvarilerin kararlı duruşu, cesaretin sadece ileri atılmak değil, gittiği yere barış ve güven götürmek olduğunu anlatıyordu. Çevredeki her detay, sabah sisleriyle örtülü Cebelitarık Boğazı'nın sarp kayalıkları ve Endülüs kıyılarında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Sabahın ilk ışıklarıyla birlikte gemiler İspanya'nın güney ucundaki devasa, sarp ve kayalık bir dağın eteklerine demir attı. Askerler karaya ayak bastığında, gökyüzüne doğru bir kale gibi yükselen bu heybetli kaya kütlesine hayranlıkla baktılar. O günden itibaren bu sarp kayalık 'Cebel-i Tarık' yani 'Tarık'ın Dağı' olarak anılmaya başlandı ve dünya coğrafya tarihine kazındı!\n\nRüzgârda dalgalanan sancaklar ve süvarilerin kararlı duruşu, cesaretin sadece ileri atılmak değil, gittiği yere barış ve güven götürmek olduğunu anlatıyordu. Çevredeki her detay, sabah sisleriyle örtülü Cebelitarık Boğazı'nın sarp kayalıkları ve Endülüs kıyılarında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Öncü Gözcü",
            dialogue:
              "Komutanım! Karaya güvenle çıktık; bu sarp dağ sırtımızı koruyan doğal bir kalkan olacak!",
            historicalNote:
              "Bunu Biliyor muydun? Bugün haritalarda gördüğümüz 'Cebelitarık Boğazı' (İngilizcede Gibraltar), Arapça 'Cebel-i Tarık' (Tarık'ın Dağı) kelimesinden gelmektedir!",
            imagePath: "assets/images/tarik_bin_ziyad_gibraltar.png",
            imageKey: "assets/images/tarik_bin_ziyad_gibraltar.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Sabah sisleri arasında yükselen Cebelitarık kayalığı.",
          },
          {
            id: "tarik-ch1-s4",
            sceneNumber: 4,
            title: "Yüz Bin Kişilik Ordu Haberi ve Tereddüt",
            narration:
              "Çok geçmeden gözcüler nefes nefese kampa koşup korkutucu bir haber getirdiler: Vizigot Kralı Roderick, zırhlı süvarilerden oluşan tam yüz bin kişilik devasa bir orduyla üzerlerine yürüyordu! Tarık bin Ziyad'ın yanında ise Musa bin Nusayr'ın gönderdiği beş bin kişilik takviyeyle birlikte sadece on iki bin asker vardı. Bazı askerlerin kalbine korku düştü ve kıyıda bekleyen gemilere bakarak 'Acaba geri mi dönsek?' diye fısıldaşmaya başladılar.\n\nEndülüs'ün yeşil vadilerine doğru atılan her adım, asırlar boyunca kütüphaneleri ve üniversiteleriyle Avrupa'yı aydınlatacak büyük bir medeniyetin ilk tohumlarını ekiyordu. Sabır, dikkat ve samimiyetle atılan bu adım, bilinmeyene doğru yelken açan sarsılmaz bir cesaret, kararlılık ve medeniyet kurma vizyonu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Çok geçmeden gözcüler nefes nefese kampa koşup korkutucu bir haber getirdiler: Vizigot Kralı Roderick, zırhlı süvarilerden oluşan tam yüz bin kişilik devasa bir orduyla üzerlerine yürüyordu! Tarık bin Ziyad'ın yanında ise Musa bin Nusayr'ın gönderdiği beş bin kişilik takviyeyle birlikte sadece on iki bin asker vardı. Bazı askerlerin kalbine korku düştü ve kıyıda bekleyen gemilere bakarak 'Acaba geri mi dönsek?' diye fısıldaşmaya başladılar.\n\nEndülüs'ün yeşil vadilerine doğru atılan her adım, asırlar boyunca kütüphaneleri ve üniversiteleriyle Avrupa'yı aydınlatacak büyük bir medeniyetin ilk tohumlarını ekiyordu. Sabır, dikkat ve samimiyetle atılan bu adım, bilinmeyene doğru yelken açan sarsılmaz bir cesaret, kararlılık ve medeniyet kurma vizyonu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Endişeli Asker",
            dialogue:
              "Komutanım, karşı taraf bizden katbekat kalabalık! Kıyıdaki gemilere binip Afrika'ya geri mi çekilsek?",
            historicalNote:
              "Bunu Biliyor muydun? Bir liderin gerçek cesareti her şey yolundayken değil, herkesin umutsuzluğa kapıldığı en zor kriz anında ortaya çıkar.",
            imagePath: "assets/images/tarik_s2_gibraltar_cliff.png",
            imageKey: "assets/images/tarik_s2_gibraltar_cliff.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Kıyıda tereddüt yaşayan ordu ve ufuktaki fırtına.",
            midDecision: {
              title: "ARA KARAR: Orduda Korku Başladığında Ne Yaparsın?",
              question:
                "Askerlerin bir kısmı arkalarındaki gemilere güvenerek 'Sıkışırsak gemilere binip kaçarız' diye düşünüyor ve bu yüzden tam odaklanamıyor. Komutan olarak nasıl bir tavır alırsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Korkuya kapılıp hiç karşılaşmadan gemilerle geri dönerim.",
                  feedback:
                    "Yardım bekleyen mazlumları yüzüstü bırakıp kaçmak cesaret ve adaletle bağdaşmaz.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Geri dönme ve kaçma düşüncesini zihinlerden tamamen siler, ordunun önüne çıkıp tüm kalpleri birleştiren tarihi bir kararlılık konuşması yaparım!",
                  feedback:
                    "Harika bir liderlik! Tarık bin Ziyad geri dönüş ihtimalini ortadan kaldıracak sarsılmaz bir kararlılık göstererek ordusuna unutulmaz bir hitabede bulundu.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "tarik-ch1-s5",
            sceneNumber: 5,
            title: "Tarihe Geçen Hitabe: 'Arkanızda Deniz, Önünüzde Düşman!'",
            narration:
              "Tarık bin Ziyad yüksek bir kayanın üzerine çıktı; rüzgâr pelerinini dalgalandırırken bütün ordu nefesini tutup ona baktı. Komutan, zihinlerdeki 'kaçıp kurtulma' bahanesini tamamen silip atan ve dünya tarihine geçen o meşhur konuşmasını gür bir sesle yaptı! Sözleri kayalıklarda yankılanırken askerlerin gözlerindeki korku silindi, yerini çelikten bir azim ve inanç aldı.\n\nAkdeniz ile Atlas Okyanusu'nun birleştiği boğazda sabah sisi dağılırken, ahşap gemilerin pruvasına çarpan köpüklü dalgalar yeni bir çağın ayak seslerini duyuruyordu. O an sabah sisleriyle örtülü Cebelitarık Boğazı'nın sarp kayalıkları ve Endülüs kıyılarında hissedilen bilinmeyene doğru yelken açan sarsılmaz bir cesaret, kararlılık ve medeniyet kurma vizyonu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Tarık bin Ziyad yüksek bir kayanın üzerine çıktı; rüzgâr pelerinini dalgalandırırken bütün ordu nefesini tutup ona baktı. Komutan, zihinlerdeki 'kaçıp kurtulma' bahanesini tamamen silip atan ve dünya tarihine geçen o meşhur konuşmasını gür bir sesle yaptı! Sözleri kayalıklarda yankılanırken askerlerin gözlerindeki korku silindi, yerini çelikten bir azim ve inanç aldı.\n\nAkdeniz ile Atlas Okyanusu'nun birleştiği boğazda sabah sisi dağılırken, ahşap gemilerin pruvasına çarpan köpüklü dalgalar yeni bir çağın ayak seslerini duyuruyordu. O an sabah sisleriyle örtülü Cebelitarık Boğazı'nın sarp kayalıkları ve Endülüs kıyılarında hissedilen bilinmeyene doğru yelken açan sarsılmaz bir cesaret, kararlılık ve medeniyet kurma vizyonu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Tarık bin Ziyad",
            dialogue:
              "Ey insanlar! Kaçacak yeriniz neresi? Arkanızda uçsuz bucaksız deniz, önünüzde ise düşman var! Artık sizin için sabır, doğruluk ve azimden başka hiçbir kurtuluş yolu kalmamıştır!",
            historicalNote:
              "Bunu Biliyor muydun? Türkçede ve dünya dillerinde kararlılığı anlatmak için kullanılan 'Gemileri yakmak' deyimi, Tarık bin Ziyad'ın Cebelitarık kıyısındaki bu tarihi kararlılığından doğmuştur.",
            imagePath: "assets/images/selahaddin_s4_two_arabian_horses.png",
            imageKey: "assets/images/selahaddin_s4_two_arabian_horses.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Kayalıklar üzerinde ordusuna seslenen Tarık bin Ziyad.",
          },
          {
            id: "tarik-ch1-s6",
            sceneNumber: 6,
            title: "Lekke Vadisi'nde Strateji ve Omuz Omuza Duran Komutan",
            narration:
              "Tarık bin Ziyad sadece güzel konuşan bir hatip değil, aynı zamanda ordusunun en önünde yürüyen adil bir liderdi. Lekke (Guadalete) Vadisi'nde karşılaştıklarında sırtını sarp tepelere vererek ordusunun kuşatılmasını engelledi. Kendisi de süslü bir çadırda beklemek yerine en ön safta askerleriyle omuz omuza durdu. Komutanlarının bu cesaretini gören on iki bin kişi tek bir yürek gibi hareket etti.\n\nSarp kireçtaşı kayalıkların zirvesinden ufka bakan gözlerde, tereddüdü geride bırakıp bilimin ve adaletin filizleneceği yeni bir yurt kurma azmi parlıyordu. Tarihin bu unutulmaz dönemeç noktasında, bilinmeyene doğru yelken açan sarsılmaz bir cesaret, kararlılık ve medeniyet kurma vizyonu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Tarık bin Ziyad sadece güzel konuşan bir hatip değil, aynı zamanda ordusunun en önünde yürüyen adil bir liderdi. Lekke (Guadalete) Vadisi'nde karşılaştıklarında sırtını sarp tepelere vererek ordusunun kuşatılmasını engelledi. Kendisi de süslü bir çadırda beklemek yerine en ön safta askerleriyle omuz omuza durdu. Komutanlarının bu cesaretini gören on iki bin kişi tek bir yürek gibi hareket etti.\n\nSarp kireçtaşı kayalıkların zirvesinden ufka bakan gözlerde, tereddüdü geride bırakıp bilimin ve adaletin filizleneceği yeni bir yurt kurma azmi parlıyordu. Tarihin bu unutulmaz dönemeç noktasında, bilinmeyene doğru yelken açan sarsılmaz bir cesaret, kararlılık ve medeniyet kurma vizyonu sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Tarık bin Ziyad",
            dialogue:
              "Ben sizden kendimin yapmadığı hiçbir fedakârlığı istemiyorum; en önde ben yürüyeceğim!",
            historicalNote:
              "Bunu Biliyor muydun? 19 Temmuz 711'deki Lekke Vadisi zaferi, Avrupa tarihinin akışını değiştiren en önemli dönüm noktalarından biridir.",
            imagePath: "assets/images/fatima_fihri_courtyard.png",
            imageKey: "assets/images/fatima_fihri_courtyard.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Lekke Vadisi'nde stratejik mevzi alan sancaklar.",
          },
          {
            id: "tarik-ch1-s7",
            sceneNumber: 7,
            title: "Şehirlere Verilen Eman ve Adalet Sözü",
            narration:
              "Zafer kazanıldıktan sonra Tarık bin Ziyad'ın asıl büyüklüğü ortaya çıktı! Kurtuba (Córdoba) ve Tuleytula (Toledo) şehirlerine girerken hiçbir sivilin kılına dokunulmaması, kiliselerin, sinagogların ve evlerin korunması için kesin emir verdi. Yıllarca Vizigot krallarının ağır vergileri altında ezilen İspanyol köylüler ve şehir halkı, Müslümanların getirdiği din özgürlüğünü ve adil yönetimi görünce şehir kapılarını kendi elleriyle açtılar!\n\nRüzgârda dalgalanan sancaklar ve süvarilerin kararlı duruşu, cesaretin sadece ileri atılmak değil, gittiği yere barış ve güven götürmek olduğunu anlatıyordu. Çevredeki her detay, sabah sisleriyle örtülü Cebelitarık Boğazı'nın sarp kayalıkları ve Endülüs kıyılarında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Zafer kazanıldıktan sonra Tarık bin Ziyad'ın asıl büyüklüğü ortaya çıktı! Kurtuba (Córdoba) ve Tuleytula (Toledo) şehirlerine girerken hiçbir sivilin kılına dokunulmaması, kiliselerin, sinagogların ve evlerin korunması için kesin emir verdi. Yıllarca Vizigot krallarının ağır vergileri altında ezilen İspanyol köylüler ve şehir halkı, Müslümanların getirdiği din özgürlüğünü ve adil yönetimi görünce şehir kapılarını kendi elleriyle açtılar!\n\nRüzgârda dalgalanan sancaklar ve süvarilerin kararlı duruşu, cesaretin sadece ileri atılmak değil, gittiği yere barış ve güven götürmek olduğunu anlatıyordu. Çevredeki her detay, sabah sisleriyle örtülü Cebelitarık Boğazı'nın sarp kayalıkları ve Endülüs kıyılarında filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Tuleytulalı Yaşlı Bilgin",
            dialogue:
              "Biz onları istilacı sanıyorduk; oysa onlar mahkemelerimize adalet, mabetlerimize özgürlük ve topraklarımıza huzur getirdiler!",
            historicalNote:
              "Bunu Biliyor muydun? Endülüs'ün bu kadar kısa sürede benimsenmesinin en büyük sebebi askeri güç değil, Tarık bin Ziyad ve Musa bin Nusayr'ın yerli halka tanıdığı inanç ve mülkiyet özgürlüğüdür.",
            imagePath: "assets/images/ibn_sina_s1_bukhara_library.png",
            imageKey: "assets/images/ibn_sina_s1_bukhara_library.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Barış ve güven içinde açılan Endülüs şehir kapıları.",
          },
          {
            id: "tarik-ch1-s8",
            sceneNumber: 8,
            title: "Hazineler Karşısında Sarsılmaz Dürüstlük",
            narration:
              "Başkent Tuleytula'daki kraliyet sarayına girildiğinde, göz kamaştıran altın taçlar ve mücevherlerle dolu hazine odaları bulundu. Tarık bin Ziyad bu muazzam servetten kendi cebine tek bir altın bile koymadı! Bütün ganimetleri kuruşu kuruşuna kayıt altına aldırdı ve halka zulmedilerek toplanan malları sahiplerine ve kamu yararına ayırdı. Onun gözünde en büyük hazine altın değil, Allah'ın rızası ve lekelenmemiş bir şerefti.\n\nEndülüs'ün yeşil vadilerine doğru atılan her adım, asırlar boyunca kütüphaneleri ve üniversiteleriyle Avrupa'yı aydınlatacak büyük bir medeniyetin ilk tohumlarını ekiyordu. Sabır, dikkat ve samimiyetle atılan bu adım, bilinmeyene doğru yelken açan sarsılmaz bir cesaret, kararlılık ve medeniyet kurma vizyonu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Başkent Tuleytula'daki kraliyet sarayına girildiğinde, göz kamaştıran altın taçlar ve mücevherlerle dolu hazine odaları bulundu. Tarık bin Ziyad bu muazzam servetten kendi cebine tek bir altın bile koymadı! Bütün ganimetleri kuruşu kuruşuna kayıt altına aldırdı ve halka zulmedilerek toplanan malları sahiplerine ve kamu yararına ayırdı. Onun gözünde en büyük hazine altın değil, Allah'ın rızası ve lekelenmemiş bir şerefti.\n\nEndülüs'ün yeşil vadilerine doğru atılan her adım, asırlar boyunca kütüphaneleri ve üniversiteleriyle Avrupa'yı aydınlatacak büyük bir medeniyetin ilk tohumlarını ekiyordu. Sabır, dikkat ve samimiyetle atılan bu adım, bilinmeyene doğru yelken açan sarsılmaz bir cesaret, kararlılık ve medeniyet kurma vizyonu ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Tarık bin Ziyad",
            dialogue:
              "Biz bu denizleri altın biriktirmek için değil, karanlıkta kalan gönüllere adalet ve ilim ışığı taşımak için aştık!",
            historicalNote:
              "Bunu Biliyor muydun? Tarık bin Ziyad hayatının sonuna kadar son derece sade ve mütevazı bir yaşam sürmüş, hiçbir zaman mal ve makam hırsına kapılmamıştır.",
            imagePath: "assets/images/battuta_s1_tangier_departure.png",
            imageKey: "assets/images/battuta_s1_tangier_departure.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Endülüs kemerleri altında parlayan ilim meşalesi.",
          },
          {
            id: "tarik-ch1-s9",
            sceneNumber: 9,
            title: "Avrupa'yı Aydınlatan 800 Yıllık Endülüs Medeniyeti",
            narration:
              "Tarık bin Ziyad'ın Cebelitarık kıyılarında yaktığı o cesaret ve adalet meşalesi, İspanya'da tam sekiz asır sürecek muazzam Endülüs Medeniyeti'ni doğurdu! Yüzyıllar sonra Avrupa'da sokaklar karanlık ve çamurluyken, Tarık'ın açtığı Kurtuba şehrinde sokak lambaları yanıyor, yüz binlerce ciltlik kütüphanelerde tıp, astronomi, matematik ve felsefe okunuyordu. Kararlı bir adım, koca bir kıtanın kaderini aydınlatmıştı.\n\nAkdeniz ile Atlas Okyanusu'nun birleştiği boğazda sabah sisi dağılırken, ahşap gemilerin pruvasına çarpan köpüklü dalgalar yeni bir çağın ayak seslerini duyuruyordu. O an sabah sisleriyle örtülü Cebelitarık Boğazı'nın sarp kayalıkları ve Endülüs kıyılarında hissedilen bilinmeyene doğru yelken açan sarsılmaz bir cesaret, kararlılık ve medeniyet kurma vizyonu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Tarık bin Ziyad'ın Cebelitarık kıyılarında yaktığı o cesaret ve adalet meşalesi, İspanya'da tam sekiz asır sürecek muazzam Endülüs Medeniyeti'ni doğurdu! Yüzyıllar sonra Avrupa'da sokaklar karanlık ve çamurluyken, Tarık'ın açtığı Kurtuba şehrinde sokak lambaları yanıyor, yüz binlerce ciltlik kütüphanelerde tıp, astronomi, matematik ve felsefe okunuyordu. Kararlı bir adım, koca bir kıtanın kaderini aydınlatmıştı.\n\nAkdeniz ile Atlas Okyanusu'nun birleştiği boğazda sabah sisi dağılırken, ahşap gemilerin pruvasına çarpan köpüklü dalgalar yeni bir çağın ayak seslerini duyuruyordu. O an sabah sisleriyle örtülü Cebelitarık Boğazı'nın sarp kayalıkları ve Endülüs kıyılarında hissedilen bilinmeyene doğru yelken açan sarsılmaz bir cesaret, kararlılık ve medeniyet kurma vizyonu, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Tarık bin Ziyad",
            dialogue:
              "Cesaretle atılan her adil adım, yüzyıllar boyu meyve verecek bir medeniyet ağacının tohumudur!",
            historicalNote:
              "Bunu Biliyor muydun? Endülüs'te kurulan Kurtuba (Córdoba) Kütüphanesi'nde 400.000'den fazla el yazması kitap bulunuyordu ve tüm Avrupa'dan öğrenciler buraya bilim öğrenmeye geliyordu!",
            imagePath: "assets/images/artifact_saladin_banner.png",
            imageKey: "assets/images/artifact_saladin_banner.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Cebelitarık Boğazı üzerinde doğan medeniyet güneşi.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Boğazı geçip yeni bir kıtaya ayak bastın. Karşında kendinizden katbekat kalabalık bir ordu var ve askerlerin bir kısmı 'Sıkışırsak gemilere binip geri döneriz' diye tereddüt ediyor. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Hiç riske girmeden gemilere binip Kuzey Afrika'ya geri dönerim.",
              feedback:
                "Zorluktan kaçmak, yardım bekleyen mazlumları kaderine terk etmek olurdu.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Kendim gemide saklanıp sadece askerleri ileri gönderirim.",
              feedback:
                "Gerçek bir komutan tehlike anında geride saklanmaz, ordusunun en önünde durur!",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Geri dönme bahanesini zihinlerden tamamen siler, en ön safta durarak 'Arkanızda deniz, önünüzde düşman! Sabır ve doğruluktan başka yol yok!' diyerek orduma sarsılmaz bir cesaret veririm ve zaferden sonra halka adaletle davranırım!",
              feedback:
                "Tarihi Hakikat! Tarık bin Ziyad'ın bu eşsiz kararlılığı Cebelitarık'a adını verdi ve 800 yıllık Endülüs bilim medeniyetinin kapısını açtı!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Tarık bin Ziyad 711 yılında Cebelitarık Boğazı'nı geçtikten sonra geri çekilme fikrini tamamen ortadan kaldıran tarihi konuşmasıyla ordusuna büyük bir azim aşılamış, zaferden sonra ise yerli halka gösterdiği adaletle Endülüs İslam Medeniyeti'nin temellerini atmıştır.",
          quoteHighlight:
            "Arkanızda deniz, önünüzde düşman! Artık sabır, doğruluk ve kararlılıktan başka yol yoktur!",
        },
        rewardArtifact: {
          id: "artifact-gibraltar-compass-shield",
          name: "Cebelitarık Kararlılık Sancağı",
          heroId: "tarik-bin-ziyad",
          chapterId: "tarik-bin-ziyad-ch1",
          imagePath: "assets/images/tarik_bin_ziyad_gibraltar.png",
          pointType: "CESARET_MERHAMET",
          pointLabel: "Cesaret Puanı",
          points: 50,
          unlockedTitle: "Cebelitarık Öncüsü",
          shortDescription:
            "İki denizin birleştiği Cebelitarık Boğazı'nda geri adım atmayan cesaretin ve Endülüs medeniyetinin sancağı.",
          historicalNote:
            "711 yılında Cebelitarık'tan başlayan bu yürüyüş, Avrupa'ya kütüphaneler, üniversiteler ve sokak aydınlatmaları kazandıran Endülüs medeniyetini başlatmıştır.",
          accentColor: "#D97706",
          hotspots: [
            {
              id: "gibraltar-rock",
              xPercent: 50,
              yPercent: 25,
              title: "Cebel-i Tarık (Tarık'ın Dağı)",
              secretFact:
                "İspanya'nın güney ucundaki dev kayalık ve boğaz, adını doğrudan komutan Tarık bin Ziyad'dan almıştır.",
            },
            {
              id: "andalus-arch",
              xPercent: 35,
              yPercent: 60,
              title: "Kurtuba İlim Kemeri",
              secretFact:
                "Tarık bin Ziyad'ın açtığı yolda kurulan Kurtuba şehrinde 400 bin kitaplık dev kütüphaneler yükselmiştir.",
            },
            {
              id: "resolve-emblem",
              xPercent: 68,
              yPercent: 65,
              title: "Sarsılmaz Azim Mührü",
              secretFact:
                "Zorluklar karşısında bahaneleri bırakıp hedefe odaklanmayı simgeleyen 'Gemileri Yakmak' kararlılığını temsil eder.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Tarık bin Ziyad zor bir görev karşısında 'Acaba vazgeçip geri mi dönsek?' diye düşünen arkadaşlarına nasıl moral ve kararlılık verdi?",
          "Ders çalışırken veya zor bir beceri öğrenirken 'Yapamıyorum, bırakacağım' demek yerine kararlılıkla devam etmek bize neler kazandırır?",
          "Tarık bin Ziyad'ın şehirleri aldıktan sonra insanlara adaletle ve hoşgörüyle davranması neden en az cesareti kadar önemlidir?",
        ],
      },
    ],
  },

  // ==========================================================================
  // 7. KAHRAMAN: NENE HATUN & ŞERİFE BACI (2 BÖLÜM - 9'AR SAHNE)
  // ==========================================================================
  {
    id: "nene-hatun-serife-baci",
    name: "Nene Hatun & Şerife Bacı",
    heroClass: "MERTLIK_CESARET",
    classBadgeLabel: "Mertlik ve Cesaret",
    title: "Anadolu'nun Cesaret ve Fedakârlık Kahramanları",
    era: "1877 Erzurum (Aziziye) & 1921 Kastamonu (İnebolu)",
    visualMode: "CHARACTER_PORTRAIT",
    coverImage: "assets/images/nene_hatun_aziziye.png",
    crisisImage: "assets/images/serife_baci_inebolu.png",
    accentColor: "#E11D48",
    secondaryColor: "#D97706",
    badgeText: "Vatan Sevgisi & Fedakârlık",
    shortBio:
      "Vatan toprağı tehlikeye düştüğünde Erzurum Aziziye Tabyası'na koşan Nene Hatun ile dondurucu kış fırtınasında İnebolu'dan cepheye kağnısıyla emanet taşıyan Şerife Bacı'nın yürek ısıtan gerçek kahramanlık destanı.",
    chapters: [
      // ------------------------------------------------------------------------
      // BÖLÜM 1: NENE HATUN - AZİZİYE TABYASI DESTANI (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "nene-hatun-serife-baci-ch1",
        heroId: "nene-hatun-serife-baci",
        chapterNumber: 1,
        title: "Aziziye Tabyası Destanı",
        subtitle: "Erzurum şafağında vatanını ve komşularını korumak için ayağa kalkan bir millet",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "nene-ch1-s1",
            sceneNumber: 1,
            title: "Erzurum'da Dondurucu Kasım Gecesi",
            narration:
              "1877 yılının 8 Kasım'ı 9 Kasım'a bağlayan gece, Erzurum'un üzerinde dondurucu bir ayaz ve kalın bir sis tabakası vardı. Osmanlı-Rus Savaşı (93 Harbi) bütün şiddetiyle sürerken, yirmi yaşındaki genç anne Nene Hatun taş evinde üç aylık bebeğini ve küçük oğlunu uyutmaya çalışıyordu. Eşi cephede vatanı savunuyor, şehir halkı ise dualarla nöbet tutuyordu.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "1877 yılının 8 Kasım'ı 9 Kasım'a bağlayan gece, Erzurum'un üzerinde dondurucu bir ayaz ve kalın bir sis tabakası vardı. Osmanlı-Rus Savaşı (93 Harbi) bütün şiddetiyle sürerken, yirmi yaşındaki genç anne Nene Hatun taş evinde üç aylık bebeğini ve küçük oğlunu uyutmaya çalışıyordu. Eşi cephede vatanı savunuyor, şehir halkı ise dualarla nöbet tutuyordu.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Nene Hatun",
            dialogue:
              "Rabbim, bu soğuk kış gecesinde cephede nöbet tutan askerlerimizi ve şehrimizi koru!",
            historicalNote:
              "Bunu Biliyor muydun? Rumi takvimde 1293 yılına denk geldiği için tarihe '93 Harbi' olarak geçen bu savaşta Erzurum halkı tarihin en büyük sivil savunma destanlarından birini yazmıştır.",
            imagePath: "assets/images/nene_hatun_s1_erzurum_dawn.png",
            imageKey: "assets/images/nene_hatun_s1_erzurum_dawn.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Erzurum'da kış gecesi ve sıcak taş ev.",
          },
          {
            id: "nene-ch1-s2",
            sceneNumber: 2,
            title: "Aziziye Tabyası'ndan Gelen Haberci",
            narration:
              "Sabaha karşı karanlıkta şehrin doğusundaki Aziziye Tabyası'ndan beklenmedik sesler yükseldi! Gece karanlığından faydalanan baskıncı birlikler tabyaya sızmış, nöbetçileri gafil avlamıştı. Tabyadan yaralı halde kurtulup Erzurum sokaklarına ulaşan genç bir asker, kapıları çalarak şehrin en kritik kalesinin tehlikede olduğunu haber verdi!\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Sabaha karşı karanlıkta şehrin doğusundaki Aziziye Tabyası'ndan beklenmedik sesler yükseldi! Gece karanlığından faydalanan baskıncı birlikler tabyaya sızmış, nöbetçileri gafil avlamıştı. Tabyadan yaralı halde kurtulup Erzurum sokaklarına ulaşan genç bir asker, kapıları çalarak şehrin en kritik kalesinin tehlikede olduğunu haber verdi!\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Nöbetçi Er",
            dialogue:
              "Yetişin Erzurumlular! Aziziye Tabyası baskına uğradı; tabya düşerse bütün şehir düşer!",
            historicalNote:
              "Bunu Biliyor muydun? Tabyalar, şehirlerin etrafındaki yüksek tepelere kurulan ve şehri top ateşinden koruyan savunma kaleleridir.",
            imagePath: "assets/images/omer_s1_medina_patrol.png",
            imageKey: "assets/images/omer_s1_medina_patrol.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Şafak vakti Erzurum sokaklarında yankılanan çağrı.",
          },
          {
            id: "nene-ch1-s3",
            sceneNumber: 3,
            title: "Minarelerden Yükselen Sala ve Uyanan Şehir",
            narration:
              "Haber duyulur duyulmaz Erzurum'daki bütün camilerin minarelerinden müezzinlerin gür sesi yükseldi! Sabah ezanıyla birlikte yankılanan çağrı, uyuyan şehri bir anda ayağa kaldırdı. Yaşlısından gencine, esnafından kadınına kadar binlerce Erzurumlu fenerlerini yakıp sokaklara döküldü; herkes birbirine kenetlenmiş, şehrin onurunu ve güvenliğini korumaya hazırlanıyordu.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Haber duyulur duyulmaz Erzurum'daki camilerin minarelerinden müezzinlerin gür sesi yükseldi! Sabah ezanıyla birlikte yankılanan çağrı, uyuyan şehri bir anda ayağa kaldırdı. Yaşlısından gencine, esnafından kadınına kadar binlerce Erzurumlu fenerlerini yakıp sokaklara döküldü; herkes birbirine kenetlenmiş, şehrin onurunu ve güvenliğini korumaya hazırlanıyordu.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Erzurum Müezzini",
            dialogue:
              "Ey Erzurum ahalisi! Vatanımızı, evlerimizi ve komşularımızı koruma günüdür; Aziziye'ye yardıma koşun!",
            historicalNote:
              "Bunu Biliyor muydun? Aziziye Tabyası Sultan Abdülaziz döneminde Erzurum'u doğudan gelecek saldırılara karşı korumak için Topdağı sırtlarına inşa edilmişti.",
            imagePath: "assets/images/nene_hatun_aziziye.png",
            imageKey: "assets/images/nene_hatun_aziziye.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Sabah karanlığında fenerlerle uyanan şehir sokakları.",
          },
          {
            id: "nene-ch1-s4",
            sceneNumber: 4,
            title: "Beşik Başında Tarihi Söz!",
            narration:
              "Nene Hatun minarelerden yükselen çağrıyı duyduğunda yüreği titredi. Bir gün önce kendi ağabeyi Hasan cepheden ağır yaralı getirilmiş ve kollarında şehit olmuştu. Beşikte ise üç aylık minik bebeği uyuyordu. Nene Hatun bebeğinin alnından öptü, onu komşusu yaşlı teyzeye emanet etti ve tarihe altın harflerle kazınan o unutulmaz fedakârlık sözünü söyledi!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Nene Hatun minarelerden yükselen çağrıyı duyduğunda yüreği titredi. Bir gün önce kendi ağabeyi Hasan cepheden ağır yaralı getirilmiş ve kollarında şehit olmuştu. Beşikte ise üç aylık minik bebeği uyuyordu. Nene Hatun bebeğinin alnından öptü, onu komşusu yaşlı teyzeye emanet etti ve tarihe altın harflerle kazınan o unutulmaz fedakârlık sözünü söyledi!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Nene Hatun",
            dialogue:
              "Yavrumu bana Allah verdi, onu yine Allah korur! Vatanımız düşerse hiçbir çocuğun evi kalmaz; şimdi Aziziye'ye koşma vaktidir!",
            historicalNote:
              "Bunu Biliyor muydun? Nene Hatun'un beşiğin başında söylediği bu sözler, Türk kadınının vatan sevgisinin ve cesaretinin en büyük sembolü olmuştur.",
            imagePath: "assets/images/serife_baci_inebolu.png",
            imageKey: "assets/images/serife_baci_inebolu.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Vakur ve kararlı bakışlarıyla Nene Hatun.",
            midDecision: {
              title: "ARA KARAR: Şehir Tehlikedeyken Ne Yaparsın?",
              question:
                "Dışarıda dondurucu bir kış var ve şehri koruyan Aziziye Tabyası'ndaki askerlerin yardıma ihtiyacı olduğu duyuruldu. Komşuların sokağa çıkarken sen ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Kapımı kilitleyip evde beklerim, başkaları nasıl olsa gider.",
                  feedback:
                    "Herkes 'başkası yapsın' derse birlik ruhu kaybolur ve şehir savunmasız kalır.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Çocuklarımı güvenli ellere emanet eder, yanımıza su, sargı bezi ve erzak alarak komşularımla omuz omuza Aziziye Tabyası'na yardıma koşarım!",
                  feedback:
                    "Muazzam bir yürek! Nene Hatun ve Erzurum halkı tam bir dayanışma ruhuyla tabyaya koşarak askerlere güç verdi.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "nene-ch1-s5",
            sceneNumber: 5,
            title: "Topdağı Sırtlarına Doğru Tek Yürek Yürüyüş",
            narration:
              "Sabahın alaca karanlığında binlerce Erzurumlu kadınıyla, erkeğiyle, genciyle ve yaşlısıyla Topdağı sırtlarındaki Aziziye Tabyası'na doğru sel gibi aktı! Kimi elinde sargı bezi ve su güğümü taşıyor, kimi cephane sandıklarını sırtlıyor, kimi de askerlerin yanında savunmaya katılmak için en önde koşuyordu. Dondurucu rüzgâr bile bu büyük dayanışma ateşini söndüremiyordu.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Sabahın alaca karanlığında binlerce Erzurumlu kadınıyla, erkeğiyle, genciyle ve yaşlısıyla Topdağı sırtlarındaki Aziziye Tabyası'na doğru sel gibi aktı! Kimi elinde sargı bezi ve su güğümü taşıyor, kimi cephane sandıklarını sırtlıyor, kimi de askerlerin yanında savunmaya katılmak için en önde koşuyordu. Dondurucu rüzgâr bile bu büyük dayanışma ateşini söndüremiyordu.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Erzurumlu Yaşlı Dede",
            dialogue:
              "Yürüyün evlatlarım! Birlik olan bir milleti hiçbir fırtına yıkamaz!",
            historicalNote:
              "Bunu Biliyor muydun? Aziziye yürüyüşüne Erzurum'un bütün mahallelerinden binlerce sivil vatandaş gönüllü olarak katılmıştır.",
            imagePath: "assets/images/selahaddin_s3_hermon_snow.png",
            imageKey: "assets/images/selahaddin_s3_hermon_snow.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Şafak vakti tepelere doğru yürüyen ahali.",
          },
          {
            id: "nene-ch1-s6",
            sceneNumber: 6,
            title: "Tabyanın Kapılarında Sarsılmaz Cesaret",
            narration:
              "Halkın akın akın tabyaya ulaştığını gören Osmanlı askerleri yeniden büyük bir moral ve güç kazandı! Nene Hatun en ön saflara kadar ilerleyerek tabyanın ağır demir kapılarının açılmasına yardım etti ve içerideki yaralı askerlere su yetiştirip sargı sardı. Köşeye sıkışan baskıncı birlikler, karşılarında bütün bir şehrin tek vücut halinde durduğunu görünce büyük bir şaşkınlık yaşadılar.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Halkın akın akın tabyaya ulaştığını gören Osmanlı askerleri yeniden büyük bir moral ve güç kazandı! Nene Hatun en ön saflara kadar ilerleyerek tabyanın ağır demir kapılarının açılmasına yardım etti ve içerideki yaralı askerlere su yetiştirip sargı sardı. Köşeye sıkışan baskıncı birlikler, karşılarında bütün bir şehrin tek vücut halinde durduğunu görünce büyük bir şaşkınlık yaşadılar.\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Tabya Komutanı Ahmet Muhtar Paşa",
            dialogue:
              "Askerlerim, bakın! Erzurum'un anaları ve kardeşleri yanımızda omuz omuza duruyor; şimdi tabyamızı geri alma vaktidir!",
            historicalNote:
              "Bunu Biliyor muydun? Kafkas Cephesi Başkomutanı Gazi Ahmet Muhtar Paşa, Erzurum halkının bu kahramanlığını hatıralarında büyük bir övgüyle anlatmıştır.",
            imagePath: "assets/images/serife_baci_s2_kastamonu_arrival.png",
            imageKey: "assets/images/serife_baci_s2_kastamonu_arrival.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Tabyada dalgalanan sancak ve omuz omuza savunma.",
          },
          {
            id: "nene-ch1-s7",
            sceneNumber: 7,
            title: "Kurtarılan Aziziye ve Yaralılara Şefkat",
            narration:
              "Saatler süren zorlu mücadelenin ardından Aziziye Tabyası tamamen kurtarıldı ve burçlarına yeniden ay-yıldızlı sancak dikildi! Ancak Nene Hatun kendi aldığı yaralara bile aldırmadan hemen tabyanın avlusundaki yaralı askerlerin yardımına koştu. Kendi başörtüsünü ve cepkenini yırtarak yaralı Mehmetçiklerin yaralarını sardı, onlara sıcak çorba ve su içirerek moral verdi.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Saatler süren zorlu mücadelenin ardından Aziziye Tabyası tamamen kurtarıldı ve burçlarına yeniden ay-yıldızlı sancak dikildi! Ancak Nene Hatun kendi aldığı yaralara bile aldırmadan hemen tabyanın avlusundaki yaralı askerlerin yardımına koştu. Kendi başörtüsünü ve cepkenini yırtarak yaralı Mehmetçiklerin yaralarını sardı, onlara sıcak çorba ve su içirerek moral verdi.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Nene Hatun",
            dialogue:
              "Dayanın aslanlarım! Tabyamız kurtuldu, Erzurum güvende; şimdi yaralarınızı sarıp iyileşme vaktidir!",
            historicalNote:
              "Bunu Biliyor muydun? Nene Hatun tabyadaki mücadele sırasında ellerinden ve omuzundan yaralanmasına rağmen son yaralı asker taşınana kadar tabyadan ayrılmamıştır.",
            imagePath: "assets/images/ebubekir_s3_clean_house.png",
            imageKey: "assets/images/ebubekir_s3_clean_house.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Tabyada yaralılara şefkatle yardım eden Nene Hatun.",
          },
          {
            id: "nene-ch1-s8",
            sceneNumber: 8,
            title: "Beşikteki Bebeğe Kavuşma",
            narration:
              "Güneş Erzurum dağlarının üzerinden yükselirken Nene Hatun üstü başı barut dumanı içinde ama alnı ak bir şekilde evine döndü. Kapıyı açıp içeri girdiğinde üç aylık bebeğinin mışıl mışıl uyuduğunu gördü. Gözyaşları içinde yavrusunu kucağına aldı; o sabah gösterilen fedakârlık sayesinde hem kendi yavrusu hem de Erzurum'daki binlerce çocuk güvenle uyuyabilecekti.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Güneş Erzurum dağlarının üzerinden yükselirken Nene Hatun üstü başı barut dumanı içinde ama alnı ak bir şekilde evine döndü. Kapıyı açıp içeri girdiğinde üç aylık bebeğinin mışıl mışıl uyuduğunu gördü. Gözyaşları içinde yavrusunu kucağına aldı; o sabah gösterilen fedakârlık sayesinde hem kendi yavrusu hem de Erzurum'daki binlerce çocuk güvenle uyuyabilecekti.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Komşu Teyze",
            dialogue:
              "Allah senden razı olsun kızım! Senin ve komşularımızın cesareti sayesinde bugün bu beşikteki yavrularımız huzurla nefes alıyor.",
            historicalNote:
              "Bunu Biliyor muydun? Aziziye Tabyası'nda kazanılan bu zafer tüm yurtta büyük bir sevinçle karşılanmış, Namık Kemal bile bu kahramanlığı mektuplarında övmüştür.",
            imagePath: "assets/images/artifact_justice_lantern.png",
            imageKey: "assets/images/artifact_justice_lantern.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Sabah güneşiyle aydınlanan huzurlu Erzurum evi.",
          },
          {
            id: "nene-ch1-s9",
            sceneNumber: 9,
            title: "Asırlık Çınar: 'Yılın Annesi' Nene Hatun",
            narration:
              "Nene Hatun tam 98 yaşına kadar Erzurum'da yaşadı ve hem 93 Harbi'ne hem de Kurtuluş Savaşı'na tanıklık etti. 1955 yılında Türk Kadınlar Birliği tarafından Türkiye'de 'Yılın Annesi' seçildi ve 3. Ordu'nun 'Üçüncü Ordu Nenesi' unvanını aldı. O, vatan sevgisinin, komşuluk dayanışmasının ve anne şefkatinin birleştiğinde nasıl yenilmez bir güce dönüştüğünün ölümsüz sembolü oldu.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Nene Hatun tam 98 yaşına kadar Erzurum'da yaşadı ve hem 93 Harbi'ne hem de Kurtuluş Savaşı'na tanıklık etti. 1955 yılında Türk Kadınlar Birliği tarafından Türkiye'de 'Yılın Annesi' seçildi ve 3. Ordu'nun 'Üçüncü Ordu Nenesi' unvanını aldı. O, vatan sevgisinin, komşuluk dayanışmasının ve anne şefkatinin birleştiğinde nasıl yenilmez bir güce dönüştüğünün ölümsüz sembolü oldu.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Nene Hatun",
            dialogue:
              "O gün ne yaptıysam vatanım ve evlatlarımızın geleceği için yaptım; bugün olsa yine en önde koşarım!",
            historicalNote:
              "Bunu Biliyor muydun? Nene Hatun 22 Mayıs 1955'te vefat ettiğinde, gençliğinde omuz omuza savunduğu Erzurum Aziziye Tabyası'ndaki anıt mezara defnedilmiştir.",
            imagePath: "assets/images/omer_s5_cooking_soup.png",
            imageKey: "assets/images/omer_s5_cooking_soup.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Aziziye Tabyası burçlarında dalgalanan sancak.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Soğuk bir kış şafağında şehrinizi koruyan Aziziye Tabyası'nın baskına uğradığı ve askerlerin acil yardıma ihtiyacı olduğu duyuruldu. Bütün mahalle ayağa kalkarken sen ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Bana ne, sadece askerler uğraşsın diyerek kapımı kapatırım.",
              feedback:
                "Vatan ve şehir savunması sadece askerlerin değil, birlik olan tüm milletin sorumluluğudur.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Korkup şehri terk etmeye çalışırım.",
              feedback:
                "Zor günde komşularını ve yurdunu yalnız bırakmak fedakârlık ruhuna yakışmaz.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Bebekleri güvenli ellere emanet eder, 'Vatanımız yoksa evimiz de olmaz!' diyerek komşularımla omuz omuza Aziziye Tabyası'na koşar ve yaralı askerlerimize yardım ederim!",
              feedback:
                "Tarihi Hakikat! Nene Hatun ve Erzurum halkı tam bir dayanışma ve cesaretle Aziziye Tabyası'nı kurtararak tarihe altın bir destan yazdı!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "9 Kasım 1877 şafağında 20 yaşındaki Nene Hatun, üç aylık bebeğini Allah'a emanet ederek Erzurum halkıyla birlikte Aziziye Tabyası'na koşmuş, tabyanın geri alınmasında ve yaralı askerlerin tedavisinde eşsiz bir kahramanlık göstermiştir.",
          quoteHighlight:
            "Yavrumu bana Allah verdi, onu yine Allah korur; şimdi vatanımızı koruma vaktidir!",
        },
        rewardArtifact: {
          id: "artifact-aziziye-torch-medal",
          name: "Aziziye Dayanışma Meşalesi",
          heroId: "nene-hatun-serife-baci",
          chapterId: "nene-hatun-serife-baci-ch1",
          imagePath: "assets/images/nene_hatun_aziziye.png",
          pointType: "CESARET_MERHAMET",
          pointLabel: "Cesaret Puanı",
          points: 50,
          unlockedTitle: "Aziziye Muhafızı",
          shortDescription:
            "Erzurum şafağında bütün bir şehri tek yürek halinde Aziziye Tabyası'na koşturan vatan sevgisi ve dayanışma feneri.",
          historicalNote:
            "Aziziye Tabyası mücadelesi, sivil halkın ordusuyla omuz omuza vererek şehrini koruduğu en unutulmaz tarih sayfalarından biridir.",
          accentColor: "#E11D48",
          hotspots: [
            {
              id: "aziziye-bastion",
              xPercent: 50,
              yPercent: 28,
              title: "Aziziye Burcu",
              secretFact:
                "Erzurum Topdağı sırtlarındaki Aziziye Tabyası, bugün Nene Hatun Tarihi Milli Parkı olarak ziyaret edilmektedir.",
            },
            {
              id: "mothers-trust",
              xPercent: 35,
              yPercent: 62,
              title: "Anne Şefkati ve Cesaret",
              secretFact:
                "Nene Hatun 1955 yılında Türkiye'de 'Yılın Annesi' seçilerek vatansever annelerin sembolü olmuştur.",
            },
            {
              id: "unity-flame",
              xPercent: 66,
              yPercent: 65,
              title: "Birlik Işığı",
              secretFact:
                "Sabah ezanıyla uyanan binlerce Erzurumlunun fenerleriyle yaptığı yürüyüşü temsil eder.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Nene Hatun ve komşuları o soğuk sabah tek yürek olup yardıma koşmasaydı Erzurum'a ne olabilirdi?",
          "Mahallemizde, okulumuzda veya ülkemizde zor durumda olan birine yardım etmek için 'Başkası yapar' demek yerine ilk adımı atmak neden önemlidir?",
          "Ailemizde büyüklerimizden dinlediğimiz böyle fedakârlık ve yardımlaşma hatıraları var mı?",
        ],
      },

      // ------------------------------------------------------------------------
      // BÖLÜM 2: ŞERİFE BACI - KIŞ FIRTINASINDA İNEBOLU CEPHANE YOLU (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "nene-hatun-serife-baci-ch2",
        heroId: "nene-hatun-serife-baci",
        chapterNumber: 2,
        title: "Kış Fırtınasında İnebolu Cephane Yolu",
        subtitle: "Dondurucu Ilgaz rüzgârında emaneti canından aziz bilen Anadolu kadınları",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "serife-ch2-s1",
            sceneNumber: 1,
            title: "İnebolu Limanı'na Yanaşan Kayıklar",
            narration:
              "1921 yılının dondurucu Aralık ayında, Kurtuluş Savaşı'nın en çetin günleri yaşanıyordu. Karadeniz'in hırçın dalgalarını aşarak Kastamonu'nun İnebolu Limanı'na yanaşan gemiler, cephedeki askerler için hayati önem taşıyan cephane sandıklarını kıyıya indiriyordu. Ancak İnebolu'dan Ankara'ya kadar ne tren yolu vardı ne de kamyon; bu sandıkların karlı dağları aşması gerekiyordu!\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "1921 yılının dondurucu Aralık ayında, Kurtuluş Savaşı'nın en çetin günleri yaşanıyordu. Karadeniz'in hırçın dalgalarını aşarak Kastamonu'nun İnebolu Limanı'na yanaşan gemiler, cephedeki askerler için hayati önem taşıyan cephane sandıklarını kıyıya indiriyordu. Ancak İnebolu'dan Ankara'ya kadar ne tren yolu vardı ne de kamyon; bu sandıkların karlı dağları aşması gerekiyordu!\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "İnebolulu Kayıkçı Reisi",
            dialogue:
              "Sandıkları sağ salim kıyıya çıkardık! Şimdi sıra bu emanetleri Ilgaz Dağları'ndan aşırıp cepheye ulaştıracak kağnı kollarında!",
            historicalNote:
              "Bunu Biliyor muydun? İnebolu'dan başlayıp Kastamonu ve Çankırı üzerinden Ankara'ya uzanan 340 kilometrelik bu tarihi güzergâha 'İstiklal Yolu' denir!",
            imagePath: "assets/images/serife_baci_inebolu.png",
            imageKey: "assets/images/serife_baci_inebolu.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Kış akşamında sandıklar ve hazırlanan kervan.",
          },
          {
            id: "serife-ch2-s2",
            sceneNumber: 2,
            title: "Gönüllü Kağnı Kervanı ve Şerife Bacı",
            narration:
              "Köylerdeki genç erkeklerin tamamı cephede olduğu için kağnı arabalarını sürme görevini Anadolu'nun fedakâr kadınları, yaşlı dedeleri ve çocukları üstlenmişti! Kastamonu'nun Seydiler köyünden yirmi bir yaşındaki genç anne Şerife Bacı da iki öküzünün çektiği ahşap kağnısını hazırladı. Kağnının bir yanına ağır cephane sandıklarını, diğer yanına ise kundağa sardığı minik kızı Elif'i yerleştirdi.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Köylerdeki genç erkeklerin tamamı cephede olduğu için kağnı arabalarını sürme görevini Anadolu'nun fedakâr kadınları, yaşlı dedeleri ve çocukları üstlenmişti! Kastamonu'nun Seydiler köyünden yirmi bir yaşındaki genç anne Şerife Bacı da iki öküzünün çektiği ahşap kağnısını hazırladı. Kağnının bir yanına ağır cephane sandıklarını, diğer yanına ise kundağa sardığı minik kızı Elif'i yerleştirdi.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Şerife Bacı",
            dialogue:
              "Cephedeki kardeşlerimiz bu sandıkları bekliyor; kış ne kadar sert olursa olsun bu emaneti Kastamonu Kışlası'na ulaştıracağım!",
            historicalNote:
              "Bunu Biliyor muydun? İstiklal Yolu boyunca yüzlerce Anadolu kadını 3 yıl boyunca 300.000 tondan fazla malzemeyi kağnılarla cepheye taşımıştır.",
            imagePath: "assets/images/selahaddin_s3_hermon_snow.png",
            imageKey: "assets/images/selahaddin_s3_hermon_snow.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Kararlı ve şefkatli bakışlarıyla Anadolu kadını.",
          },
          {
            id: "serife-ch2-s3",
            sceneNumber: 3,
            title: "Ecevit Geçidi ve Dondurucu Tipi",
            narration:
              "Kağnı kervanı gıcırdayan tahta tekerlekleriyle Küre Dağları'nın dik yamaçlarını ve geçit vermez Ecevit Boğazı'nı tırmanmaya başladı. Akşama doğru gökyüzü karardı ve şiddetli bir kar fırtınası (tipi) koptu! Kar kalınlığı diz boyunu aşmış, dondurucu rüzgâr göz gözü görmez hale getirmişti. Şerife Bacı öküzlerin yularını sıkıca tutarak kardan kapanan yolda adım adım ilerliyordu.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Kağnı kervanı gıcırdayan tahta tekerlekleriyle Küre Dağları'nın dik yamaçlarını ve geçit vermez Ecevit Boğazı'nı tırmanmaya başladı. Akşama doğru gökyüzü karardı ve şiddetli bir kar fırtınası (tipi) koptu! Kar kalınlığı diz boyunu aşmış, dondurucu rüzgâr göz gözü görmez hale getirmişti. Şerife Bacı öküzlerin yularını sıkıca tutarak kardan kapanan yolda adım adım ilerliyordu.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Kervan Kılavuzu Yaşlı Dede",
            dialogue:
              "Aman evlatlarım, birbirinizden kopmayın! Tipi şiddetleniyor, cephane sandıklarının üstünü sıkıca kapatın!",
            historicalNote:
              "Bunu Biliyor muydun? 1921 yılı kışı son yüz yılın en soğuk kışlarından biriydi; Kastamonu dağlarında hava sıcaklığı sıfırın altında 25 dereceye kadar düşüyordu.",
            imagePath: "assets/images/nene_hatun_s1_erzurum_dawn.png",
            imageKey: "assets/images/nene_hatun_s1_erzurum_dawn.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Kış gecesinde karlar ve sandıklar.",
          },
          {
            id: "serife-ch2-s4",
            sceneNumber: 4,
            title: "Islanan Cephane Tehlikesi ve Yün Yorgan!",
            narration:
              "Tipi öylesine hızlandı ki rüzgârın savurduğu sulu kar taneleri kağnıdaki cephane sandıklarının arasına girmeye başladı! Eğer sandıkların içindeki barutlar ıslanıp nemlenirse bütün emekler boşa gidecek ve cephedeki askerler savunmasız kalacaktı. Şerife Bacı'nın elinde ise sadece sırtındaki hırkası ve kağnıdaki tek bir kalın yün yorgan vardı!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Tipi öylesine hızlandı ki rüzgârın savurduğu sulu kar taneleri kağnıdaki cephane sandıklarının arasına girmeye başladı! Eğer sandıkların içindeki barutlar ıslanıp nemlenirse bütün emekler boşa gidecek ve cephedeki askerler savunmasız kalacaktı. Şerife Bacı'nın elinde ise sadece sırtındaki hırkası ve kağnıdaki tek bir kalın yün yorgan vardı!\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Şerife Bacı",
            dialogue:
              "Bu sandıklar milletin emanetidir! Ne bebeğimin üşümesine ne de tek bir sandığın ıslanmasına izin veremem!",
            historicalNote:
              "Bunu Biliyor muydun? Cephane sandıklarının kuru kalması hayati önem taşıyordu; çünkü nemlenen barut ve mermiler kullanılamaz hale geliyordu.",
            imagePath: "assets/images/omer_s4_carrying_flour.png",
            imageKey: "assets/images/omer_s4_carrying_flour.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Gece karanlığında korunan emanet sandıklar.",
            midDecision: {
              title: "ARA KARAR: Kar Fırtınasında Emaneti Nasıl Korursun?",
              question:
                "Kar fırtınası şiddetlendi! Hem kağnıdaki bebeğin Elif'i sıcak tutman hem de milletin emaneti olan cephane sandıklarının ıslanmasını önlemen gerekiyor. Ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Ağır cephane sandıklarını yol kenarına bırakıp sadece boş kağnıyla giderim.",
                  feedback:
                    "Emaneti yarı yolda bırakmak cephedeki binlerce askeri zor durumda bırakırdı.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Sandıkların arasına bebeğim için sıcak ve korunaklı bir yuva yapar, üzerimizdeki kalın yün yorganı ve kendi hırkamı hem sandıkların hem de yavrumun üstüne sımsıkı örterim!",
                  feedback:
                    "Yürek ısıtan bir fedakârlık! Şerife Bacı kendi üşümesini hiç düşünmeden yün yorganını cephane sandıklarının ve bebeğinin üzerine siper etti.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "serife-ch2-s5",
            sceneNumber: 5,
            title: "Kendi Hırkasını Emanete Siper Eden Anne",
            narration:
              "Şerife Bacı hiç tereddüt etmeden kağnıdaki ağır sandıkların tam ortasında rüzgâr almayan kuytu bir boşluk açtı ve minik Elif'in kundağını oraya yerleştirdi. Ardından kalın yün yorganı ve sırtından çıkardığı kendi yün hırkasını hem sandıkların hem de bebeğinin üzerine sımsıkı örttü! Böylece sandıkların arasına tek bir kar tanesi bile giremiyor, alttaki bebek de yorganın altında sıcak kalıyordu.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Şerife Bacı hiç tereddüt etmeden kağnıdaki ağır sandıkların tam ortasında rüzgâr almayan kuytu bir boşluk açtı ve minik Elif'in kundağını oraya yerleştirdi. Ardından kalın yün yorganı ve sırtından çıkardığı kendi yün hırkasını hem sandıkların hem de bebeğinin üzerine sımsıkı örttü! Böylece sandıkların arasına tek bir kar tanesi bile giremiyor, alttaki bebek de yorganın altında sıcak kalıyordu.\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Şerife Bacı",
            dialogue:
              "Uyu güzel kızım Elif'im... Bu yorgan hem seni hem de vatanımızın istikbalini koruyacak!",
            historicalNote:
              "Bunu Biliyor muydun? Anadolu kadınları İstiklal Yolu'nda kendi yiyeceklerinden ve giyeceklerinden feragat ederek emanetleri gözleri gibi korumuşlardır.",
            imagePath: "assets/images/nene_hatun_aziziye.png",
            imageKey: "assets/images/nene_hatun_aziziye.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Fedakâr Anadolu kadınının sarsılmaz iradesi.",
          },
          {
            id: "serife-ch2-s6",
            sceneNumber: 6,
            title: "Kastamonu Kışlası'na Son Yüz Adım",
            narration:
              "Gece boyunca süren dondurucu yürüyüşün sonunda, sabaha karşı Kastamonu Kışlası'nın taş duvarları ve nöbetçi kulübelerinin solgun ışıkları ufukta göründü! Şerife Bacı'nın gücü tükenmek üzereydi ama hedefe sadece birkaç yüz adım kalmıştı. Son gayretiyle öküzlerini kışla kapısına doğru yönlendirdi; emaneti sağ salim menzile ulaştırmıştı!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Gece boyunca süren dondurucu yürüyüşün sonunda, sabaha karşı Kastamonu Kışlası'nın taş duvarları ve nöbetçi kulübelerinin solgun ışıkları ufünda göründü! Şerife Bacı'nın gücü tükenmek üzereydi ama hedefe sadece birkaç yüz adım kalmıştı. Son gayretiyle öküzlerini kışla kapısına doğru yönlendirdi; emaneti sağ salim menzile ulaştırmıştı!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Şerife Bacı",
            dialogue:
              "İşte kışlanın ışıkları göründü! Emaneti teslim etmemize sadece birkaç adım kaldı...",
            historicalNote:
              "Bunu Biliyor muydun? Şerife Bacı dondurucu soğuğa rağmen Kastamonu Kışlası'nın tam önüne kadar kağnısını getirmeyi başarmıştır.",
            imagePath: "assets/images/serife_baci_s2_kastamonu_arrival.png",
            imageKey: "assets/images/serife_baci_s2_kastamonu_arrival.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Karanlıkta uzaktan görünen kışla fenerleri.",
          },
          {
            id: "serife-ch2-s7",
            sceneNumber: 7,
            title: "Kışla Önünde Duran Kağnı ve Bebek Sesi",
            narration:
              "Sabahın ilk ışıklarıyla birlikte Kastamonu Kışlası'ndaki nöbetçi askerler ve Kastamonu İzci Teşkilatı'ndan gençler kapının önünde duran karla kaplı kağnıyı fark edip hemen yanına koştular. Tam o sırada kağnının üzerindeki kalın yün yorganın altından cılız bir bebek ağlaması duyuldu! Askerler yorganı kaldırdığında gördükleri manzara karşısında gözyaşlarını tutamadılar.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Sabahın ilk ışıklarıyla birlikte Kastamonu Kışlası'ndaki nöbetçi askerler ve Kastamonu İzci Teşkilatı'ndan gençler kapının önünde duran karla kaplı kağnıyı fark edip hemen yanına koştular. Tam o sırada kağnının üzerindeki kalın yün yorganın altından cılız bir bebek ağlaması duyuldu! Askerler yorganı kaldırdığında gördükleri manzara karşısında gözyaşlarını tutamadılar.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Kışla Nöbetçi Komutanı",
            dialogue:
              "Aman Allah'ım! Bu kahraman ana kendi yorganını cephane sandıklarına ve bebeğine sarmış; ne tek bir sandık ıslanmış ne de bebeğe bir şey olmuş!",
            historicalNote:
              "Bunu Biliyor muydun? Kağnının içinden sağ salim kurtarılan minik Elif bebek, Kastamonu'daki aileler ve devlet tarafından özenle büyütülmüştür.",
            imagePath: "assets/images/omer_s5_cooking_soup.png",
            imageKey: "assets/images/omer_s5_cooking_soup.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Kışla önünde korunan sandıklar.",
          },
          {
            id: "serife-ch2-s8",
            sceneNumber: 8,
            title: "Hiçbir Sandığın Islanmadığı Mucize",
            narration:
              "Şerife Bacı dondurucu soğukta son nefesine kadar kağnının koluna tutunmuş, hem yavrusunu hem de milletin emaneti olan cephane sandıklarını koruyarak şehit olmuştu. Askerler yorganın altındaki sandıkları tek tek kontrol ettiklerinde tek bir sandığın bile nemlenmediğini ve minik Elif'in sıcacık uyuduğunu gördüler. Kışladaki bütün askerler bu büyük fedakârlık karşısında esas duruşa geçip selam durdu.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Şerife Bacı dondurucu soğukta son nefesine kadar kağnının koluna tutunmuş, hem yavrusunu hem de milletin emaneti olan cephane sandıklarını koruyarak şehit olmuştu. Askerler yorganın altındaki sandıkları tek tek kontrol ettiklerinde tek bir sandığın bile nemlenmediğini ve minik Elif'in sıcacık uyuduğunu gördüler. Kışladaki bütün askerler bu büyük fedakârlık karşısında esas duruşa geçip selam durdu.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Genç İzci",
            dialogue:
              "Şerife Bacı'nın canı pahasına koruduğu bu emaneti biz de sonuna kadar koruyacağız; onun adı asla unutulmayacak!",
            historicalNote:
              "Bunu Biliyor muydun? O gün kağnıya koşan gençlerden biri olan Hüsnü Açıksöz, yıllar sonra yazdığı 'İstiklal Harbinde Kastamonu' kitabında bu olayı tüm gerçekliğiyle tarihe kaydetmiştir.",
            imagePath: "assets/images/artifact_justice_lantern.png",
            imageKey: "assets/images/artifact_justice_lantern.png",
            atmosphereType: "JERUSALEM_DUSK",
            visualNote: "Saygı duruşunda bekleyen askerler ve komutan.",
          },
          {
            id: "serife-ch2-s9",
            sceneNumber: 9,
            title: "İstiklal Yolu'nun Ölümsüz Sembolü",
            narration:
              "Şerife Bacı'nın ve yüzlerce Anadolu kadınının kış fırtınasında taşıdığı o emanetler cepheye ulaştı ve Kurtuluş Savaşı'nın zaferle taçlanmasını sağladı. Bugün Kastamonu Cumhuriyet Meydanı'nda ve Seydiler'de yükselen Şerife Bacı Anıtı, bir insanın üstlendiği sorumluluğa ve emanete nasıl canından bile çok sahip çıkabileceğini bütün dünyaya anlatmaya devam ediyor.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Şerife Bacı'nın ve yüzlerce Anadolu kadınının kış fırtınasında taşıdığı o emanetler cepheye ulaştı ve Kurtuluş Savaşı'nın zaferle taçlanmasını sağladı. Bugün Kastamonu Cumhuriyet Meydanı'nda ve Seydiler'de yükselen Şerife Bacı Anıtı, bir insanın üstlendiği sorumluluğa ve emanete nasıl canından bile çok sahip çıkabileceğini bütün dünyaya anlatmaya devam ediyor.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Kışla Nöbetçi Komutanı",
            dialogue:
              "Bu vatan, kış fırtınasında kendi yorganını emanetin üstüne örten Şerife Bacıların fedakârlığı üzerinde yükselmiştir!",
            historicalNote:
              "Bunu Biliyor muydun? Bugün İnebolu'dan Ankara'ya uzanan 340 kilometrelik 'İstiklal Yolu' Milli Park ilan edilmiş olup her yıl gençler tarafından Şerife Bacı'nın anısına yürünmektedir.",
            imagePath: "assets/images/ebubekir_s3_clean_house.png",
            imageKey: "assets/images/ebubekir_s3_clean_house.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Güneşli ufukta yükselen fedakârlık anıtı.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "İnebolu'dan Kastamonu'ya kağnıyla emanet taşırken dondurucu bir kar fırtınasına yakalandın. Elinde tek bir kalın yün yorgan var; hem bebeğini hem de milletin emaneti olan sandıkları ıslanmaktan koruman gerekiyor. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Sandıkların ıslanmasını umursamam, yorganı sadece kendime sararım.",
              feedback:
                "Milletin emanetini korumamak cephedeki binlerce insanın emeğini boşa çıkarırdı.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Sandıkları karda bırakıp geri dönerim.",
              feedback:
                "Şerife Bacı ve Anadolu kadınları üstlendikleri emaneti asla yarı yolda bırakmadılar.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Bebeğimi sandıkların arasındaki korunaklı yuvaya yerleştirir, kalın yün yorganı ve kendi hırkamı hem sandıkların hem de yavrumun üzerine örterek emaneti kışla kapısına kadar ulaştırırım!",
              feedback:
                "Tarihi Hakikat! Şerife Bacı'nın bu eşsiz fedakârlığı İstiklal Yolu'nun ve emanet bilincinin ölümsüz sembolü oldu!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "1921 yılının Aralık ayında Kastamonulu Şerife Bacı, İnebolu'dan aldığı cephane sandıklarını kar fırtınasında ıslanmasın diye kendi yün yorganıyla sarmış, bebeği Elif'i ve emanet sandıkları Kastamonu Kışlası'na sağ salim ulaştırarak Kurtuluş Savaşı'nın en büyük fedakârlık sembollerinden biri olmuştur.",
          quoteHighlight:
            "Bu sandıklar milletin emanetidir; ne yavrumun üşümesine ne de emanetin ıslanmasına izin veririm!",
        },
        rewardArtifact: {
          id: "artifact-istiklal-oxcart-wheel",
          name: "İstiklal Yolu Emanet Nişanı",
          heroId: "nene-hatun-serife-baci",
          chapterId: "nene-hatun-serife-baci-ch2",
          imagePath: "assets/images/serife_baci_inebolu.png",
          pointType: "CESARET_MERHAMET",
          pointLabel: "Merhamet Puanı",
          points: 50,
          unlockedTitle: "İstiklal Yolu Emanetçisi",
          shortDescription:
            "İnebolu'dan Ankara'ya uzanan karlı dağlarda kendi yorganını emanete siper eden Anadolu kadınlarının hatıra nişanı.",
          historicalNote:
            "İnebolu Limanı ve İstiklal Yolu, Kurtuluş Savaşı boyunca gösterilen üstün fedakârlıktan dolayı Türkiye Büyük Millet Meclisi tarafından beyaz şeritli İstiklal Madalyası ile ödüllendirilmiştir.",
          accentColor: "#E11D48",
          hotspots: [
            {
              id: "wool-quilt-shield",
              xPercent: 50,
              yPercent: 30,
              title: "Fedakârlık Yorganı",
              secretFact:
                "Şerife Bacı'nın dondurucu tipide hem kızı Elif'i hem de cephane sandıklarını kuru ve sıcak tutan yün yorganını simgeler.",
            },
            {
              id: "inebolu-route",
              xPercent: 35,
              yPercent: 62,
              title: "340 Kilometrelik İstiklal Yolu",
              secretFact:
                "İnebolu sahilinden başlayıp Küre ve Ilgaz dağlarını aşarak Ankara'ya ulaşan tarihi fedakârlık yoludur.",
            },
            {
              id: "inebolu-medal",
              xPercent: 68,
              yPercent: 65,
              title: "Beyaz Şeritli İstiklal Madalyası",
              secretFact:
                "İnebolu, Türkiye'de İstiklal Madalyası sahibi olan tek ilçemizdir!",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Şerife Bacı'nın soğuk kış fırtınasında kendi yorganını emanet sandıkların ve bebeğinin üzerine örtmesi bize 'emaneti korumak' hakkında ne öğretiyor?",
          "Bugün rahat ve güvenli bir ülkede yaşıyorsak bunu Nene Hatun ve Şerife Bacı gibi geçmişteki kahramanların hangi fedakârlıklarına borçluyuz?",
          "Bize teslim edilen bir görevi veya emaneti zorluk çıksa bile eksiksiz yerine getirmek neden çok değerlidir?",
        ],
      },
    ],
  },

  // ==========================================================================
  // 8. KAHRAMAN: EL-CEZERÎ (2 BÖLÜM - 9'AR SAHNE)
  // ==========================================================================
  {
    id: "el-cezeri",
    name: "El-Cezerî",
    heroClass: "BILIM_DENEY",
    classBadgeLabel: "Bilim ve Deney",
    title: "Robotların ve Otomatların Babası",
    era: "1136 – 1206 (Cizre & Diyarbakır / Artuklu Sarayı)",
    visualMode: "CHARACTER_PORTRAIT",
    coverImage: "assets/images/el_cezeri_hero.png",
    crisisImage: "assets/images/el_cezeri_workshop.png",
    accentColor: "#06B6D4",
    secondaryColor: "#F59E0B",
    badgeText: "Mühendislik & Sibernetik",
    shortBio:
      "Sekiz yüz yıl önce Diyarbakır'da su ve mekanik güçle kendi kendine çalışan otomatlar, şifreli kilitler, krank mili ve efsanevi Fil Saati'ni icat eden büyük İslam mühendisi.",
    chapters: [
      // ------------------------------------------------------------------------
      // EL-CEZERÎ - BÖLÜM 1: ARTUKLU SARAYINDA ZAMANI ÖLÇEN FİL SAATİ (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "el-cezeri-ch1",
        heroId: "el-cezeri",
        chapterNumber: 1,
        title: "Artuklu Sarayında Zamanı Ölçen Fil Saati",
        subtitle: "Bilim, bütün insanlığın ortak mirasıdır",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "el-cezeri-ch1-s1",
            sceneNumber: 1,
            title: "Diyarbakır Artuklu Sarayında Tıkırdayan Çarklar",
            narration:
              "Sekiz yüz yıl önce, Diyarbakır İçkale'deki Artuklu Sarayı'nın en geniş odasından gece gündüz tıkırdayan altın çarkların, şırıldayan su borularının ve bakır şamandıraların sesi geliyordu. Burası başmühendis Bedîüzzaman El-Cezerî'nin efsanevi atölyesiydi! Güneş ışıkları renkli vitray pencerelerden içeri süzülürken, El-Cezerî deri önlüğünü giymiş, mum ve güneş saatlerinden çok daha dakik bir mekanizma üzerinde çalışıyordu.\n\nArtuklu Sarayı'nın taş kemerli atölyesinde su kanallarının şırıltısı, bronz dişlilerin ve bakır şamandıraların ince tıkırtısına karışarak adeta bilimsel bir senfoni oluşturuyordu. O an Diyarbakır Artuklu Sarayı'nın su kanallarıyla serinleyen güneşli başmühendislik atölyesinde hissedilen bilimsel merak, farklı medeniyetleri birleştiren barışçıl vizyon ve mekanik tasarım dehası, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Sekiz yüz yıl önce, Diyarbakır İçkale'deki Artuklu Sarayı'nın en geniş odasından gece gündüz tıkırdayan altın çarkların, şırıldayan su borularının ve bakır şamandıraların sesi gelirdi. Burası başmühendis Bedîüzzaman El-Cezerî'nin efsanevi atölyesiydi! Güneş ışıkları renkli vitray pencerelerden içeri süzülürken, El-Cezerî deri önlüğünü giymiş, mum ve güneş saatlerinden çok daha dakik bir mekanizma üzerinde çalışıyordu.\n\nArtuklu Sarayı'nın taş kemerli atölyesinde su kanallarının şırıltısı, bronz dişlilerin ve bakır şamandıraların ince tıkırtısına karışarak adeta bilimsel bir senfoni oluşturuyordu. O an Diyarbakır Artuklu Sarayı'nın su kanallarıyla serinleyen güneşli başmühendislik atölyesinde hissedilen bilimsel merak, farklı medeniyetleri birleştiren barışçıl vizyon ve mekanik tasarım dehası, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Başmühendis El-Cezerî",
            dialogue:
              "Güneş saatleri bulutlu havada ve geceleri çalışmaz; bizim hem gece hem gündüz şaşmadan işleyen bir su ve denge otomatına ihtiyacımız var!",
            historicalNote:
              "Bunu Biliyor muydun? Cizre'de doğduğu için 'El-Cezerî' (Cizreli) olarak anılan büyük alim, tam 25 yıl boyunca Diyarbakır'daki Artuklu Sarayı'nda başmühendislik yapmıştır.",
            imagePath: "assets/images/cezeri_s1_artuklu_palace.png",
            imageKey: "assets/images/cezeri_s1_artuklu_palace.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Diyarbakır Artuklu Sarayı'nın su kanalları ve taş kemerli başmühendislik atölyesi.",
          },
          {
            id: "el-cezeri-ch1-s2",
            sceneNumber: 2,
            title: "Sultan Nâsırüddin Mahmud'un İsteği",
            narration:
              "Bir sabah Artuklu Sultanı Nâsırüddin Mahmud atölyeyi ziyaret etti. El-Cezerî'nin yaptığı abdest otomatlarını ve su pompalarını hayranlıkla inceledikten sonra ona tarihi bir görev verdi. Hem bütün bu eşsiz icatları gelecek nesiller için resimli bir kitapta toplamasını hem de sarayın avlusuna gelen elçilere bilimin bütün insanlığın ortak hazinesi olduğunu gösterecek muazzam bir saat tasarlamasını istedi.\n\nBerrak su haznesinin içinde milim milim batan delikli bakır tarjahar, görünmez fizik yasalarının sabırlı bir mühendisin elinde nasıl kusursuz bir saate dönüştüğünü gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, bilimsel merak, farklı medeniyetleri birleştiren barışçıl vizyon ve mekanik tasarım dehası sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Bir sabah Artuklu Sultanı Nâsırüddin Mahmud atölyeyi ziyaret etti. El-Cezerî'nin yaptığı abdest otomatlarını ve su pompalarını hayranlıkla inceledikten sonra ona tarihi bir görev verdi. Hem bütün bu eşsiz icatları gelecek nesiller için resimli bir kitapta toplamasını hem de sarayın avlusuna gelen elçilere bilimin bütün insanlığın ortak hazinesi olduğunu gösterecek muazzam bir saat tasarlamasını istedi.\n\nBerrak su haznesinin içinde milim milim batan delikli bakır tarjahar, görünmez fizik yasalarının sabırlı bir mühendisin elinde nasıl kusursuz bir saate dönüştüğünü gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, bilimsel merak, farklı medeniyetleri birleştiren barışçıl vizyon ve mekanik tasarım dehası sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Artuklu Sultanı Nâsırüddin Mahmud",
            dialogue:
              "Üstadım! Yaptığın bu eşsiz makineler unutulup gitmesin; onları öyle bir kitapta çiz ve öyle bir saat yap ki asırlar sonra bile insanlığa ışık tutsun!",
            historicalNote:
              "Bunu Biliyor muydun? El-Cezerî'nin 1206 yılında tamamladığı 'Kitâbü'l-Hiyel' adlı eseri, içindeki renkli teknik çizimler sayesinde dünyanın ilk resimli makine mühendisliği el kitabıdır!",
            imagePath: "assets/images/el_cezeri_hero.png",
            imageKey: "assets/images/el_cezeri_hero.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Güneşli atölyede Sultan ve Başmühendis.",
          },
          {
            id: "el-cezeri-ch1-s3",
            sceneNumber: 3,
            title: "Medeniyetleri Buluşturan Tasarım",
            narration:
              "El-Cezerî masasının üzerine büyük bir parşömen serdi ve saatin dış görünüşünü çizmeye başladı. Bilimin tek bir millete değil bütün dünyaya ait olduğunu göstermek için harika bir sembolik tasarım kurdu! Saatin en altına Hindistan medeniyetini temsil eden heybetli bir Fil, en tepesine Mısır'ı simgeleyen Zümrüdüanka kuşu, ortasına Çin sanatını simgeleyen iki ejderha ve üst köşke de İslam dünyasını simgeleyen kâtip ve seyis figürleri yerleştirdi.\n\nFarklı kültürlerin sembollerini aynı mekanik şaheserde buluşturan Fil Saati, bilimin bütün insanlığı birleştiren ortak bir barış dili olduğunu kanıtlıyordu. Çevredeki her detay, Diyarbakır Artuklu Sarayı'nın su kanallarıyla serinleyen güneşli başmühendislik atölyesinde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "El-Cezerî masasının üzerine büyük bir parşömen serdi ve saatin dış görünüşünü çizmeye başladı. Bilimin tek bir millete değil bütün dünyaya ait olduğunu göstermek için harika bir sembolik tasarım kurdu! Saatin en altına Hindistan medeniyetini temsil eden heybetli bir Fil, en tepesine Mısır'ı simgeleyen Zümrüdüanka kuşu, ortasına Çin sanatını simgeleyen iki ejderha ve üst köşke de İslam dünyasını simgeleyen kâtip ve seyis figürleri yerleştirdi.\n\nFarklı kültürlerin sembollerini aynı mekanik şaheserde buluşturan Fil Saati, bilimin bütün insanlığı birleştiren ortak bir barış dili olduğunu kanıtlıyordu. Çevredeki her detay, Diyarbakır Artuklu Sarayı'nın su kanallarıyla serinleyen güneşli başmühendislik atölyesinde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Başmühendis El-Cezerî",
            dialogue:
              "Hint fili, Mısır Zümrüdüanka kuşu, Çin ejderhaları ve Yunan su prensibi... Hepsi bu İslam saatinde kardeşçe bir araya gelecek!",
            historicalNote:
              "Bunu Biliyor muydun? Fil Saati, farklı kültürlerin bilime katkısını tek bir makinede birleştiren tarihteki ilk 'evrensel tasarım' örneklerinden biridir.",
            imagePath: "assets/images/el_cezeri_workshop.png",
            imageKey: "assets/images/el_cezeri_workshop.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Parşömen üzerinde Fil Saati'nin teknik çizimleri.",
          },
          {
            id: "el-cezeri-ch1-s4",
            sceneNumber: 4,
            title: "Gizli Güç Kaynağı: Tarjahar (Delikli Kova)",
            narration:
              "Tasarım hazırdı ama en büyük mühendislik sorusu şimdi başlıyordu: Elektrik, pil veya motor olmayan bir çağda bu dev saat her yarım saatte bir nasıl kendi kendine harekete geçecekti? El-Cezerî filin geniş karnının içine büyük bir su haznesi yerleştirdi. Suyun üstüne de 'Tarjahar' adını verdiği, tabanında çok ince ve hassas bir delik bulunan yarım küre şeklinde bakır bir şamandıra (kova) koydu.\n\nDairesel hareketi doğrusal harekete çeviren krank mili ve şifreli kilit çarkları, yüzyıllar sonra kurulacak modern mühendislik dünyasının ilk kıvılcımlarını saçıyordu. Sabır, dikkat ve samimiyetle atılan bu adım, bilimsel merak, farklı medeniyetleri birleştiren barışçıl vizyon ve mekanik tasarım dehası ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Tasarım hazırdı ama en büyük mühendislik sorusu şimdi başlıyordu: Elektrik, pil veya motor olmayan bir çağda bu dev saat her yarım saatte bir nasıl kendi kendine harekete geçecekti? El-Cezerî filin geniş karnının içine büyük bir su haznesi yerleştirdi. Suyun üstüne de 'Tarjahar' adını verdiği, tabanında çok ince ve hassas bir delik bulunan yarım küre şeklinde bakır bir şamandıra (kova) koydu.\n\nDairesel hareketi doğrusal harekete çeviren krank mili ve şifreli kilit çarkları, yüzyıllar sonra kurulacak modern mühendislik dünyasının ilk kıvılcımlarını saçıyordu. Sabır, dikkat ve samimiyetle atılan bu adım, bilimsel merak, farklı medeniyetleri birleştiren barışçıl vizyon ve mekanik tasarım dehası ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Başmühendis El-Cezerî",
            dialogue:
              "İşte saatin kalbi bu delikli bakır kasedir! Suyun kaldırma kuvvetini ve batma süresini milimetrik olarak hesaplamalıyız.",
            historicalNote:
              "Bunu Biliyor muydun? El-Cezerî bakır şamandıranın altındaki deliğin genişliğini değerli taş (akik) matkabıyla öylesine hassas delmiştir ki kase tam 30 dakikada suyla dolup batar!",
            imagePath: "assets/images/cezeri_s2_copper_float.png",
            imageKey: "assets/images/cezeri_s2_copper_float.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Suyun içinde yavaşça batan delikli bakır şamandıra (tarjahar) ve bronz zincir mekanizması.",
            midDecision: {
              title: "ARA KARAR: Yarım Saati Nasıl Ölçersin?",
              question:
                "Filin karnındaki su haznesinde bulunan bakır kovanın tam 30 dakikada bir yukarıdaki çarkları çekmesi için nasıl bir fizik kuralı kullanırsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Suyu alttan ateşle kaynatıp buharıyla çarkları rastgele döndürürüm.",
                  feedback:
                    "Kaynayan suyun buharı sabit hızda gitmez; saatin dakikliği tamamen bozulur!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Bakır kovanın altına milimetrik bir delik açarım; kova suyun üzerinde yüzerken yavaşça su alıp tam 30 dakikada dibe batar ve bağlı olduğu halatı çeker!",
                  feedback:
                    "Harika bir mühendislik! El-Cezerî Arşimet'in su kaldırma prensibini kullanarak tam 30 dakikada batan 'Tarjahar' şamandırasını kurdu.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "el-cezeri-ch1-s5",
            sceneNumber: 5,
            title: "Kâtibin Kalemi ve Geçen Dakikalar",
            narration:
              "Bakır şamandıra filin karnındaki suya bırakıldığında altındaki minik delikten yavaş yavaş su almaya başladı. Şamandıra ağırlaşıp suya gömüldükçe, ona bağlı olan ipek halat yukarıdaki kulede oturan 'Kâtip' robotunun mekanizmasını döndürüyordu! Kâtip elindeki ince kalemi önündeki yarım daire şeklindeki derece cetveli üzerinde ağır ağır hareket ettiriyor, böylece yarım saatin kaçıncı dakikasında olunduğunu tam olarak gösteriyordu.\n\nArtuklu Sarayı'nın taş kemerli atölyesinde su kanallarının şırıltısı, bronz dişlilerin ve bakır şamandıraların ince tıkırtısına karışarak adeta bilimsel bir senfoni oluşturuyordu. O an Diyarbakır Artuklu Sarayı'nın su kanallarıyla serinleyen güneşli başmühendislik atölyesinde hissedilen bilimsel merak, farklı medeniyetleri birleştiren barışçıl vizyon ve mekanik tasarım dehası, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Bakır şamandıra filin karnındaki suya bırakıldığında altındaki minik delikten yavaş yavaş su almaya başladı. Şamandıra ağırlaşıp suya gömüldükçe, ona bağlı olan ipek halat yukarıdaki kulede oturan 'Kâtip' robotunun mekanizmasını döndürüyordu! Kâtip elindeki ince kalemi önündeki yarım daire şeklindeki derece cetveli üzerinde ağır ağır hareket ettiriyor, böylece yarım saatin kaçıncı dakikasında olunduğunu tam olarak gösteriyordu.\n\nArtuklu Sarayı'nın taş kemerli atölyesinde su kanallarının şırıltısı, bronz dişlilerin ve bakır şamandıraların ince tıkırtısına karışarak adeta bilimsel bir senfoni oluşturuyordu. O an Diyarbakır Artuklu Sarayı'nın su kanallarıyla serinleyen güneşli başmühendislik atölyesinde hissedilen bilimsel merak, farklı medeniyetleri birleştiren barışçıl vizyon ve mekanik tasarım dehası, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Atölye Kalfası",
            dialogue:
              "Üstadım, bakın! Alttaki kase suya gömüldükçe yukarıdaki kâtibin kalemi dakikaları tek tek işaret ediyor!",
            historicalNote:
              "Bunu Biliyor muydun? Filin üzerindeki kâtip figürü, bugünkü analog saatlerdeki 'yelkovan' ibresinin 800 yıl önceki üç boyutlu robotik atasıdır!",
            imagePath: "assets/images/el_cezeri_combination_lock.png",
            imageKey: "assets/images/el_cezeri_combination_lock.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Mum ışığında parlayan pirinç dişliler ve ölçekler.",
          },
          {
            id: "el-cezeri-ch1-s6",
            sceneNumber: 6,
            title: "Zümrüdüanka Ötüyor, Şahin Top Bırakıyor!",
            narration:
              "Tam otuzuncu dakika dolduğunda bakır şamandıra tamamen suyla dolup dibe battı ve gizli mandalı çekti! O anda muazzam bir zincirleme reaksiyon başladı: Kulenin tepesindeki Zümrüdüanka kuşu kanatlarını çırpıp düdük sesiyle öttü; balkonundaki Şahin figürü gagasıyla tuttuğu bronz topu aşağıda ağzını açmış bekleyen Çin Ejderhası'nın ağzına bıraktı!\n\nBerrak su haznesinin içinde milim milim batan delikli bakır tarjahar, görünmez fizik yasalarının sabırlı bir mühendisin elinde nasıl kusursuz bir saate dönüştüğünü gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, bilimsel merak, farklı medeniyetleri birleştiren barışçıl vizyon ve mekanik tasarım dehası sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "Tam otuzuncu dakika dolduğunda bakır şamandıra tamamen suyla dolup dibe battı ve gizli mandalı çekti! O anda muazzam bir zincirleme reaksiyon başladı: Kulenin tepesindeki Zümrüdüanka kuşu kanatlarını çırpıp düdük sesiyle öttü; balkonundaki Şahin figürü gagasıyla tuttuğu bronz topu aşağıda ağzını açmış bekleyen Çin Ejderhası'nın ağzına bıraktı!\n\nBerrak su haznesinin içinde milim milim batan delikli bakır tarjahar, görünmez fizik yasalarının sabırlı bir mühendisin elinde nasıl kusursuz bir saate dönüştüğünü gösteriyordu. Tarihin bu unutulmaz dönemeç noktasında, bilimsel merak, farklı medeniyetleri birleştiren barışçıl vizyon ve mekanik tasarım dehası sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Başmühendis El-Cezerî",
            dialogue:
              "Şimdi dikkatle izleyin! Düşen tek bir bronz topun ağırlığı bütün sistemi yeniden kuracak!",
            historicalNote:
              "Bunu Biliyor muydun? Zümrüdüanka kuşunun ötmesi için suyun ittiği hava dar bir flüt borusundan geçirilerek gerçek kuş sesi elde edilmiştir.",
            imagePath: "assets/images/cezeri_s3_elephant_clock_full.png",
            imageKey: "assets/images/cezeri_s3_elephant_clock_full.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Tamamlanmış dev Mekanik Fil Saati; Zümrüdüanka kuşu, Çin ejderhaları ve kâtip otomatı.",
          },
          {
            id: "el-cezeri-ch1-s7",
            sceneNumber: 7,
            title: "Dönen Ejderha ve Kendi Kendini Sıfırlayan Döngü",
            narration:
              "Ağzına ağır bronz top düşen Çin Ejderhası ağırlıkla aşağı doğru döndü! Ejderha dönerken arka kuyruğuna bağlı zincirle filin karnında batmış olan bakır kovayı yukarı çekip içindeki suyu boşalttı! Boşalan kova tekrar suyun yüzüne çıktı. Ejderhanın ağzından yuvarlanan top ise filin başındaki seyisin elindeki baltayı ve tokmağı hareket ettirerek zillere vurdu ve yarım saatin dolduğunu herkese ilan etti!\n\nFarklı kültürlerin sembollerini aynı mekanik şaheserde buluşturan Fil Saati, bilimin bütün insanlığı birleştiren ortak bir barış dili olduğunu kanıtlıyordu. Çevredeki her detay, Diyarbakır Artuklu Sarayı'nın su kanallarıyla serinleyen güneşli başmühendislik atölyesinde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Ağzına ağır bronz top düşen Çin Ejderhası ağırlıkla aşağı doğru döndü! Ejderha dönerken arka kuyruğuna bağlı zincirle filin karnında batmış olan bakır kovayı yukarı çekip içindeki suyu boşalttı! Boşalan kova tekrar suyun yüzüne çıktı. Ejderhanın ağzından yuvarlanan top ise filin başındaki seyisin elindeki baltayı ve tokmağı hareket ettirerek zillere vurdu ve yarım saatin dolduğunu herkese ilan etti!\n\nFarklı kültürlerin sembollerini aynı mekanik şaheserde buluşturan Fil Saati, bilimin bütün insanlığı birleştiren ortak bir barış dili olduğunu kanıtlıyordu. Çevredeki her detay, Diyarbakır Artuklu Sarayı'nın su kanallarıyla serinleyen güneşli başmühendislik atölyesinde filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Artuklu Sultanı Nâsırüddin Mahmud",
            dialogue:
              "Sübhanallah! İnsan eli değmeden hem saati çaldı hem de batan kovayı boşaltıp kendini yeni yarım saat için sıfırladı!",
            historicalNote:
              "Bunu Biliyor muydun? Bir makinenin işlemi bitirip kendini otomatik olarak başa sarmasına modern bilimde 'Kapalı Çevrim Geri Besleme (Feedback)' yani Sibernetik denir!",
            imagePath: "assets/images/artifact_elephant_clock.png",
            imageKey: "assets/images/artifact_elephant_clock.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Zincirle yukarı çekilip sıfırlanan bakır şamandıra düzeneği.",
          },
          {
            id: "el-cezeri-ch1-s8",
            sceneNumber: 8,
            title: "Uygulamaya Dönüşmeyen Bilgi",
            narration:
              "Saray avlusunda toplanan alimler, öğrenciler ve yabancı elçiler kendi kendine çalışan Fil Saati'ni hayranlıkla alkışladılar. El-Cezerî ise yanındaki genç çıraklara dönerek kitabının girişine de yazdığı en önemli bilim ilkesini hatırlattı: Bir mühendis sadece zihninde hayal kurmakla yetinmemeli, düşündüğü her fikri elleriyle deneyerek gerçeğe dönüştürmeliydi.\n\nDairesel hareketi doğrusal harekete çeviren krank mili ve şifreli kilit çarkları, yüzyıllar sonra kurulacak modern mühendislik dünyasının ilk kıvılcımlarını saçıyordu. Sabır, dikkat ve samimiyetle atılan bu adım, bilimsel merak, farklı medeniyetleri birleştiren barışçıl vizyon ve mekanik tasarım dehası ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Saray avlusunda toplanan alimler, öğrenciler ve yabancı elçiler kendi kendine çalışan Fil Saati'ni hayranlıkla alkışladılar. El-Cezerî ise yanındaki genç çıraklara dönerek kitabının girişine de yazdığı en önemli bilim ilkesini hatırlattı: Bir mühendis sadece zihninde hayal kurmakla yetinmemeli, düşündüğü her fikri elleriyle deneyerek gerçeğe dönüştürmeliydi.\n\nDairesel hareketi doğrusal harekete çeviren krank mili ve şifreli kilit çarkları, yüzyıllar sonra kurulacak modern mühendislik dünyasının ilk kıvılcımlarını saçıyordu. Sabır, dikkat ve samimiyetle atılan bu adım, bilimsel merak, farklı medeniyetleri birleştiren barışçıl vizyon ve mekanik tasarım dehası ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Başmühendis El-Cezerî",
            dialogue:
              "Evlatlarım, unutmayın: Tatbikata (uygulamaya) dönüşmeyen her teknik ilim, doğru ile yanlış arasında askıda kalır!",
            historicalNote:
              "Bunu Biliyor muydun? 'Tatbikata dönüşmeyen her teknik ilim, doğru ile yanlış arasında kalır' sözü El-Cezerî'nin Kitâbü'l-Hiyel eserinde bizzat kendi yazdığı gerçek sözüdür.",
            imagePath: "assets/images/harizmi_usturlap.png",
            imageKey: "assets/images/harizmi_usturlap.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Artuklu Sarayı salonunda sergilenen dev Fil Saati.",
          },
          {
            id: "el-cezeri-ch1-s9",
            sceneNumber: 9,
            title: "800 Yıllık Sibernetik Mirası",
            narration:
              "El-Cezerî, Fil Saati'nin en küçük vidasından su şamandırasına kadar tüm ölçülerini kitabına öyle açık ve anlaşılır şekilde çizdi ki, sekiz yüz yıl sonra bile modern mühendisler sadece onun kitabına bakarak Fil Saati'ni birebir yeniden çalıştırmayı başardılar! Bugün kullandığımız robotların, otomatik makinelerin ve bilgisayarların temelindeki mekanik kodlama mantığı o gün Diyarbakır'da doğmuştu.\n\nArtuklu Sarayı'nın taş kemerli atölyesinde su kanallarının şırıltısı, bronz dişlilerin ve bakır şamandıraların ince tıkırtısına karışarak adeta bilimsel bir senfoni oluşturuyordu. O an Diyarbakır Artuklu Sarayı'nın su kanallarıyla serinleyen güneşli başmühendislik atölyesinde hissedilen bilimsel merak, farklı medeniyetleri birleştiren barışçıl vizyon ve mekanik tasarım dehası, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "El-Cezerî, Fil Saati'nin en küçük vidasından su şamandırasına kadar tüm ölçülerini kitabına öyle açık ve anlaşılır şekilde çizdi ki, sekiz yüz yıl sonra bile modern mühendisler sadece onun kitabına bakarak Fil Saati'ni birebir yeniden çalıştırmayı başardılar! Bugün kullandığımız robotların, otomatik makinelerin ve bilgisayarların temelindeki mekanik kodlama mantığı o gün Diyarbakır'da doğmuştu.\n\nArtuklu Sarayı'nın taş kemerli atölyesinde su kanallarının şırıltısı, bronz dişlilerin ve bakır şamandıraların ince tıkırtısına karışarak adeta bilimsel bir senfoni oluşturuyordu. O an Diyarbakır Artuklu Sarayı'nın su kanallarıyla serinleyen güneşli başmühendislik atölyesinde hissedilen bilimsel merak, farklı medeniyetleri birleştiren barışçıl vizyon ve mekanik tasarım dehası, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Başmühendis El-Cezerî",
            dialogue:
              "Bilgi saklandığında kaybolur, yazılıp paylaşıldığında ise asırlar boyu insanlığa hizmet eder!",
            historicalNote:
              "Bunu Biliyor muydun? Bugün İstanbul, Dubai, Frankfurt ve İsviçre'deki bilim müzelerinde El-Cezerî'nin tarifine göre yapılmış çalışan dev Fil Saatleri sergilenmektedir.",
            imagePath: "assets/images/artifact_mimar_sinan_cube.png",
            imageKey: "assets/images/artifact_mimar_sinan_cube.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Güneş ışıkları altında parlayan Fil Saati.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Saatin elektrik veya pil olmadan her 30 dakikada bir kendi kendine ses çıkarıp hareket etmesi ve kendini sıfırlaması için hangi mekanizmayı tasarlarsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Saatin yanına her yarım saatte bir kolu çevirecek bir nöbetçi dikerim.",
              feedback:
                "İnsan yorulur ve uyuyakalır; gerçek mühendislik kendi kendine çalışan otomat kurmaktır!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Sadece kum saati kullanıp boyutunu büyütürüm.",
              feedback:
                "Kum saati ne ses çıkarabilir ne de ağır mekanik kolları hareket ettirip kendini başa sarabilir.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Filin karnına altında ince bir delik olan bakır kova gizlerim; kova 30 dakikada suyla dolup battıkça ipleri çeker, ejderhaları döndürür, Zümrüdüanka kuşunu öttürür ve kendini sıfırlar!",
              feedback:
                "Tarihi Hakikat! El-Cezerî suyun kaldırma kuvveti ve mekanik geri besleme ile tarihin ilk sibernetik harikalarından Fil Saati'ni icat etti!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "El-Cezerî, Hint fili, Mısır Zümrüdüanka kuşu, Çin ejderhaları ve Arap figürlerini tek bir saatte birleştirerek tarihin ilk sibernetik harikalarından Fil Saati'ni icat etti. Bugünkü bilgisayarların ve robotların temelindeki mekanik kodlama mantığını 8 asır önce Diyarbakır'da kurdu!",
          quoteHighlight:
            "Tatbikata (uygulamaya) dönüşmeyen her teknik ilim, doğru ile yanlış arasında kalır!",
        },
        rewardArtifact: {
          id: "artifact-elephant-clock",
          name: "Mekanik Fil Saati",
          heroId: "el-cezeri",
          chapterId: "el-cezeri-ch1",
          imagePath: "assets/images/artifact_elephant_clock.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik Puanı",
          points: 50,
          unlockedTitle: "Baş Mühendis Çırağı",
          shortDescription:
            "Su şamandırası, bronz toplar ve dişli çarklarla her yarım saatte bir kendi kendine çalışan sibernetik Fil Saati.",
          historicalNote:
            "El-Cezerî'nin 1206 yılında yazdığı 'Kitâbü'l-Hiyel' eserinde tüm teknik çizimleriyle yer alan Fil Saati, dünya mühendislik tarihinin başyapıtıdır.",
          accentColor: "#06B6D4",
          hotspots: [
            {
              id: "phoenix-top",
              xPercent: 50,
              yPercent: 18,
              title: "Zümrüdüanka Kuşu",
              secretFact:
                "Saatin en tepesindeki Zümrüdüanka kuşu her yarım saat dolduğunda kendi etrafında döner ve su basıncıyla çalışan düdük mekanizmasıyla kuş sesi çıkarır!",
            },
            {
              id: "chinese-dragons",
              xPercent: 48,
              yPercent: 42,
              title: "Çin Ejderhaları ve Geri Besleme",
              secretFact:
                "Şahinin ağzından düşen bronz topu yutan ejderha ağırlıkla aşağı dönerken, suyun dibine batan kovayı zincirle tekrar yukarı çekip saati sıfırlar!",
            },
            {
              id: "elephant-belly-tank",
              xPercent: 52,
              yPercent: 72,
              title: "Filin Karnındaki Gizli Su Haznesi",
              secretFact:
                "Filin karnında altında küçücük bir delik olan bakır şamandıra (Tarjahar) bulunur. Bu kova tam 30 dakikada suyla dolup batarak tüm sistemi tetikler.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "El-Cezerî neden Fil Saati'nde Hint, Mısır, Çin, Yunan ve İslam kültürlerine ait sembolleri bir arada kullandı?",
          "Evimizde elektriğin olmadığını düşünsek; su, rüzgâr veya ağırlık kullanarak çalışan nasıl bir otomatik alet tasarlamak isterdin?",
          "Merak etmek ve pes etmeden defalarca denemek bir bilim insanı için neden en önemli özelliktir?",
        ],
      },

      // ------------------------------------------------------------------------
      // EL-CEZERÎ - BÖLÜM 2: İLK ŞİFRELİ KİLİT VE KRANK MİLİ (9 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "el-cezeri-ch2",
        heroId: "el-cezeri",
        chapterNumber: 2,
        title: "İlk Şifreli Kilit ve Suyu Taşıyan Krank Mili",
        subtitle: "Harflerle açılan sandıklardan modern motorların kalbine uzanan deha",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "el-cezeri-ch2-s1",
            sceneNumber: 1,
            title: "Sarayda İki Yeni Mühendislik Sorunu",
            narration:
              "Fil Saati'nin başarısından sonra Diyarbakır Artuklu Sarayı'nda El-Cezerî'nin kapısı bir kez daha çalındı. Bu kez hem saray kütüphanesinin başhafızı hem de Dicle Nehri kıyısındaki bahçelerin su sorumlusu yardım istiyordu! Kütüphane sorumlusu en değerli el yazmalarını ve hazine belgelerini sakladıkları sandıkların demir anahtarlarının kaybolmasından veya kopyalanmasından şikâyetçiydi.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Fil Saati'nin başarısından sonra Diyarbakır Artuklu Sarayı'nda El-Cezerî'nin kapısı bir kez daha çalındı. Bu kez hem saray kütüphanesinin başhafızı hem de Dicle Nehri kıyısındaki bahçelerin su sorumlusu yardım istiyordu! Kütüphane sorumlusu en değerli el yazmalarını ve hazine belgelerini sakladıkları sandıkların demir anahtarlarının kaybolmasından veya kopyalanmasından şikâyetçiydi.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Saray Hazine ve Kütüphane Emini",
            dialogue:
              "Üstadım! Demir anahtarlar ya kayboluyor ya da kalıbı çıkarılıp kopyalanabiliyor. Anahtarsız, sadece sahibinin bildiği bir sırla açılan bir kilit yapamaz mısınız?",
            historicalNote:
              "Bunu Biliyor muydun? Bugün çantalarımızda, kasalarda ve bisiklet kilitlerinde kullandığımız şifreli (kombinasyonlu) kilitlerin mekanik tasarımını 800 yıl önce El-Cezerî yapmıştır!",
            imagePath: "assets/images/el_cezeri_workshop.png",
            imageKey: "assets/images/el_cezeri_workshop.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Artuklu Sarayı başmühendislik atölyesi.",
          },
          {
            id: "el-cezeri-ch2-s2",
            sceneNumber: 2,
            title: "On Altı Harfli Dört Pirinç Halka",
            narration:
              "El-Cezerî hemen pergeli ve cetveli eline aldı. Hiçbir demir anahtara ihtiyaç duymayan, tamamen 'bilgi' ile açılan bir mekanizma tasarladı! Gümüş ve pirinç kaplı sandığın kapağına iç içe geçmiş dört adet döner halka (disk) yerleştirdi. Her bir halkanın üzerine alfabeden on altı farklı harf kazıdı. Halkaların alt kısmında ise sadece doğru harf hizaya geldiğinde mandalı serbest bırakan gizli çentikler vardı.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "El-Cezerî hemen pergeli ve cetveli eline aldı. Hiçbir demir anahtara ihtiyaç duymayan, tamamen 'bilgi' ile açılan bir mekanizma tasarladı! Gümüş ve pirinç kaplı sandığın kapağına iç içe geçmiş dört adet döner halka (disk) yerleştirdi. Her bir halkanın üzerine alfabeden on altı farklı harf kazıdı. Halkaların alt kısmında ise sadece doğru harf hizaya geldiğinde mandalı serbest bırakan gizli çentikler vardı.\n\nHarita masasının üzerindeki mum ışığında yankılanan haberler, gerçek bir komutanın sadece kılıcıyla değil, vicdanı ve insanlığıyla da sınandığı o kritik anı başlatmıştı. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Başmühendis El-Cezerî",
            dialogue:
              "Bu sandığın anahtarı cebinizde değil, aklınızda olacak! Dört halkadaki harfleri doğru kelimeyi oluşturacak şekilde yan yana getirmezseniz kilit asla açılmaz!",
            historicalNote:
              "Bunu Biliyor muydun? El-Cezerî'nin 16 harfli 4 halkadan oluşan tek bir şifreli kilidinde tam 65.536 (16x16x16x16) farklı şifre kombinasyonu vardı ve sandık kapağında bu kilitlerden 4 tane bulunuyordu!",
            imagePath: "assets/images/cezeri_s1_artuklu_palace.png",
            imageKey: "assets/images/cezeri_s1_artuklu_palace.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Harf işlemeli pirinç şifre diskleri.",
          },
          {
            id: "el-cezeri-ch2-s3",
            sceneNumber: 3,
            title: "Şifreli Sandığın İlk Denemesi",
            narration:
              "El-Cezerî sandığın kapağına bu dört halkalı kilitlerden tam dört takım yerleştirdi ve şifreyi belirledi. Kütüphane emini halkaları çevirip gizli şifre harflerini aynı çizgiye getirdiğinde içerideki bakır diller 'tık' sesiyle yuvalarına oturdu ve sandığın kapağı kolayca açıldı! Halkalardan sadece bir tanesi bile tek bir harf kaydırıldığında ise kapak çelik gibi kilitleniyordu.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "El-Cezerî sandığın kapağına bu dört halkalı kilitlerden tam dört takım yerleştirdi ve şifreyi belirledi. Kütüphane emini halkaları çevirip gizli şifre harflerini aynı çizgiye getirdiğinde içerideki bakır diller 'tık' sesiyle yuvalarına oturdu ve sandığın kapağı kolayca açıldı! Halkalardan sadece bir tanesi bile tek bir harf kaydırıldığında ise kapak çelik gibi kilitleniyordu.\n\nHermon Dağı'nın zirvelerinden keçelere sarılarak indirilen bembeyaz kar kütleleri ve taze meyve sepetleri, savaşın ortasında açan bir merhamet çiçeği gibi parlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Saray Hazine ve Kütüphane Emini",
            dialogue:
              "İnanılmaz! Ne anahtar var ne asma kilit; sadece doğru harfleri bilen kişinin açabileceği kusursuz bir mekanik şifre!",
            historicalNote:
              "Bunu Biliyor muydun? El-Cezerî Kitâbü'l-Hiyel'in 6. bölümünde bu 'Dört Sürgülü Harfli Şifreli Kilit' mekanizmasının her bir parçasını adım adım çizmiştir.",
            imagePath: "assets/images/el_cezeri_combination_lock.png",
            imageKey: "assets/images/el_cezeri_combination_lock.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Başarılı icadını inceleyen El-Cezerî.",
          },
          {
            id: "el-cezeri-ch2-s4",
            sceneNumber: 4,
            title: "Dicle Kıyısında Yorulan Hayvanlar",
            narration:
              "Şifreli kilit tamamlandıktan sonra El-Cezerî ikinci büyük sorunu çözmek için nehir kıyısına indi. Aşağıdaki su kaynağından yukarıdaki bahçelere ve saraya su çıkarmak için gün boyu dolap çeviren öküzlerin ve katırların ne kadar yorulduğunu gördü. Nehir kendi gücüyle akıp giderken zavallı hayvanları saatlerce döndürmek onun merhametli ve mucit kalbine ağır geldi.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "Şifreli kilit tamamlandıktan sonra El-Cezerî ikinci büyük sorunu çözmek için nehir kıyısına indi. Aşağıdaki su kaynağından yukarıdaki bahçelere ve saraya su çıkarmak için gün boyu dolap çeviren öküzlerin ve katırların ne kadar yorulduğunu gördü. Nehir kendi gücüyle akıp giderken zavallı hayvanları saatlerce döndürmek onun merhametli ve mucit kalbine ağır geldi.\n\nAltın üzengili iki asil Arap atının dörtnala karşı kampa doğru süzülüşü, düşman askerlerinin bile hayranlıkla izlediği eşsiz bir mertlik ve asalet dersine dönüşmüştü. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Başmühendis El-Cezerî",
            dialogue:
              "Akan suyun kendi gücü varken bu dilsiz hayvanları bütün gün yormak reva mıdır? Nehrin dönüşünü doğrudan pompaya aktaracak bir mil tasarlamalıyız!",
            historicalNote:
              "Bunu Biliyor muydun? El-Cezerî su pompalarını tasarlarken temel amacının insanları ve hayvanları ağır yükten kurtarmak olduğunu kitabında açıkça belirtmiştir.",
            imagePath: "assets/images/cezeri_s2_copper_float.png",
            imageKey: "assets/images/cezeri_s2_copper_float.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Su kanalları ve su çarkları.",
            midDecision: {
              title: "ARA KARAR: Dairesel Hareketi İleri-Geri Harekete Nasıl Çevirirsin?",
              question:
                "Nehirdeki su çarkı sürekli daire çizerek dönüyor, ama su pompasının pistonunun ileri-geri hareket etmesi gerekiyor. Bu iki hareketi birbirine nasıl bağlarsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Çarkın yanına iki işçi koyarım, çark döndükçe elleriyle pistonu itip çekerler.",
                  feedback:
                    "İnsan gücü kullanmak otomasyon değildir; mekanik bir bağlantı kurmalısın!",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Dönen milin üzerine merkezden kaçık dirsekli bir kol (Krank Mili ve biyel kolu) takarım; böylece mil döndükçe pistonları otomatik olarak ileri-geri iter!",
                  feedback:
                    "Deha işi! El-Cezerî tarihte ilk kez dairesel hareketi doğrusal harekete çeviren 'Krank Mili' (Crankshaft) sistemini bir makinede kullandı!",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "el-cezeri-ch2-s5",
            sceneNumber: 5,
            title: "Tarihin İlk Krank Mili Doğuyor!",
            narration:
              "Atölyesine dönen El-Cezerî, makine tarihinin en büyük buluşlarından birine imza attı. Su çarkının döndürdüğü ana şaftın üzerine dirsek şeklinde bükülmüş bir kol, yani 'Krank Mili' (kollu mil) yerleştirdi! Bu dirseğe de iki yanındaki bakır emme-basma pistonlarını hareket ettiren biyel kollarını bağladı. Böylece çark nehir suyuyla fırıl fırıl döndükçe, kollar sağa ve sola gidip gelerek pistonları hiç durmadan çalıştırıyordu!\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Atölyesine dönen El-Cezerî, makine tarihinin en büyük buluşlarından birine imza attı. Su çarkının döndürdüğü ana şaftın üzerine dirsek şeklinde bükülmüş bir kol, yani 'Krank Mili' (kollu mil) yerleştirdi! Bu dirseğe de iki yanındaki bakır emme-basma pistonlarını hareket ettiren biyel kollarını bağladı. Böylece çark nehir suyuyla fırıl fırıl döndükçe, kollar sağa ve sola gidip gelerek pistonları hiç durmadan çalıştırıyordu!\n\nÇadırların arasından yükselen dualar ve gözyaşları, kaybolan masum bir bebeğin acısını kendi evladının acısı gibi yüreğinde hisseden adil bir sultanın şefkatini gösteriyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Başmühendis El-Cezerî",
            dialogue:
              "İşte oldu! Dairesel dönüş hareketini, pistonları çalıştıran ileri-geri doğrusal harekete dönüştürdük!",
            historicalNote:
              "Bunu Biliyor muydun? Bugün dünyadaki tüm otomobil motorları, tren lokomotifleri ve gemi makineleri El-Cezerî'nin 1206'da çizdiği bu 'Krank Mili' prensibiyle çalışır!",
            imagePath: "assets/images/el_cezeri_hero.png",
            imageKey: "assets/images/el_cezeri_hero.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Krank mili, dişli çarklar ve bakır silindirler.",
          },
          {
            id: "el-cezeri-ch2-s6",
            sceneNumber: 6,
            title: "Çift Etkili Emme-Basma Su Pompası",
            narration:
              "El-Cezerî krank milinin iki ucuna tek yönlü açılan kapakçıklara (valflere) sahip iki adet bakır silindir yerleştirdi. Krank mili sola yatarken birinci silindir nehirden suyu içine çekiyor, aynı anda ikinci silindir içindeki suyu basınçla yukarıdaki boruya basıyordu! Mil sağa döndüğünde ise roller değişiyordu. Böylece su kesik kesik değil, güçlü ve aralıksız bir fıskiye gibi yirmi arşın yükseğe fışkırıyordu!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            text: "El-Cezerî krank milinin iki ucuna tek yönlü açılan kapakçıklara (valflere) sahip iki adet bakır silindir yerleştirdi. Krank mili sola yatarken birinci silindir nehirden suyu içine çekiyor, aynı anda ikinci silindir içindeki suyu basınçla yukarıdaki boruya basıyordu! Mil sağa döndüğünde ise roller değişiyordu. Böylece su kesik kesik değil, güçlü ve aralıksız bir fıskiye gibi yirmi arşın yükseğe fışkırıyordu!\n\nKudüs'ün asırlık taş kapıları yeniden açılırken, intikam korkusuyla titreyen kalplerin yerini eman, bağışlama ve barışın sıcak güveni alıyordu. Tarihin bu unutulmaz dönemeç noktasında, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı sayesinde en zorlu sınavlar bile hikmet ve doğrulukla aşılıyordu.",
            speaker: "Su Yolu Ustası",
            dialogue:
              "Üstadım, ne bir öküz yoruluyor ne bir insan! Suyun kendi akıntısı çarkı çeviriyor ve pompa suyu tepeye kadar tek başına basıyor!",
            historicalNote:
              "Bunu Biliyor muydun? Bilim tarihçisi Donald Routledge Hill, El-Cezerî'nin bu çift silindirli pompasını 'modern buhar ve içten yanmalı motorların doğrudan atası' olarak tanımlamıştır.",
            imagePath: "assets/images/cezeri_s3_elephant_clock_full.png",
            imageKey: "assets/images/cezeri_s3_elephant_clock_full.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Su haznesi ve parlayan bakır düzenekler.",
          },
          {
            id: "el-cezeri-ch2-s7",
            sceneNumber: 7,
            title: "Bahçelere Ulaşan Bereket",
            narration:
              "Yeni krank milli su pompası nehir kenarına kurulduğunda bütün Diyarbakır halkı ve saray erkanı izlemeye geldi. Çark dönmeye başladı, krank mili ritmik bir sesle kolları hareket ettirdi ve bakır borulardan yükselen berrak sular metrelerce yukarıdaki bahçe havuzlarına gürül gürül akmaya başladı! Yük taşıyan hayvanlar ise artık yemyeşil çayırlarda özgürce dinleniyordu.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            text: "Yeni krank milli su pompası nehir kenarına kurulduğunda bütün Diyarbakır halkı ve saray erkanı izlemeye geldi. Çark dönmeye başladı, krank mili ritmik bir sesle kolları hareket ettirdi ve bakır borulardan yükselen berrak sular metrelerce yukarıdaki bahçe havuzlarına gürül gürül akmaya başladı! Yük taşıyan hayvanlar ise artık yemyeşil çayırlarda özgürce dinleniyordu.\n\nZeytin ağaçlarının gölgesinde verilen bu tarihi söz, gerçek zaferin kaleleri yıkmakla değil, insan kalplerini adalet ve merhametle kazanmakla mümkün olduğunu kanıtlıyordu. Çevredeki her detay, Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta filizlenen bu örnek davranışın gelecek nesillere ışık tutacak bir miras olduğunu anlatıyordu.",
            speaker: "Artuklu Sultanı Nâsırüddin Mahmud",
            dialogue:
              "Allah ilminden razı olsun Ebü'l-İz! Hem bahçelerimize bereket getirdin hem de dilsiz hayvanları ağır yükten kurtardın.",
            historicalNote:
              "Bunu Biliyor muydun? Avrupa'da krank mili çizimleri El-Cezerî'nin kitabından yaklaşık 200-300 yıl sonra (15. yüzyılda) görülmeye başlanmıştır.",
            imagePath: "assets/images/artifact_elephant_clock.png",
            imageKey: "assets/images/artifact_elephant_clock.png",
            atmosphereType: "FEZ_COURTYARD",
            visualNote: "Mermer havuzlara akan berrak sular.",
          },
          {
            id: "el-cezeri-ch2-s8",
            sceneNumber: 8,
            title: "Kitâbü'l-Hiyel'in Altın Sayfaları",
            narration:
              "El-Cezerî, hem dört halkalı şifreli kilit kutusunu hem de krank milli çift etkili su pompasını 'Kitâbü'l-Hiyel' (Olağanüstü Mekanik Araçların Bilgisi Hakkında Kitap) adlı eserine tüm ayrıntılarıyla kaydetti. Kitabında tam elli farklı makinenin nasıl yapılacağını, hangi parçanın nereye takılacağını Arap alfabesindeki harflerle kodlayarak anlattı.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            text: "El-Cezerî, hem dört halkalı şifreli kilit kutusunu hem de krank milli çift etkili su pompasını 'Kitâbü'l-Hiyel' (Olağanüstü Mekanik Araçların Bilgisi Hakkında Kitap) adlı eserine tüm ayrıntılarıyla kaydetti. Kitabında tam elli farklı makinenin nasıl yapılacağını, hangi parçanın nereye takılacağını Arap alfabesindeki harflerle kodlayarak anlattı.\n\nYoksulların ve kimsesizlerin elinden tutan bu cömert tavır, doğudan batıya tüm tarihçilerin saygıyla eğildiği unutulmaz bir insanlık abidesi olarak tarihe geçti. Sabır, dikkat ve samimiyetle atılan bu adım, en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı ile birleşerek tarihin akışında silinmez bir iz bırakıyordu.",
            speaker: "Başmühendis El-Cezerî",
            dialogue:
              "Her parçaya bir harf kodu verdim ki benden yüzyıllar sonra bu kitabı açan genç bir mühendis bile bu makineleri hatasızca kurabilsin!",
            historicalNote:
              "Bunu Biliyor muydun? El-Cezerî'nin 1206 yılında Diyarbakır'da tamamlanan eserinin en eski el yazması nüshası bugün İstanbul Topkapı Sarayı III. Ahmed Kütüphanesi'nde (No: 3472) korunmaktadır!",
            imagePath: "assets/images/artifact_fatih_notebook.png",
            imageKey: "assets/images/artifact_fatih_notebook.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Altın yaldızlı el yazması mühendislik kitabı ve şifreli kilit.",
          },
          {
            id: "el-cezeri-ch2-s9",
            sceneNumber: 9,
            title: "Geleceğin Mucitlerine Mesaj",
            narration:
              "Diyarbakır'daki atölyesinde mum ışığında son çizimini tamamlayan El-Cezerî, pencereden yıldızlı Mezopotamya gökyüzüne baktı. Onun sekiz asır önce tasarladığı harfli şifre çarkları bugünkü dijital şifrelerin, icat ettiği krank mili ve pistonlar ise modern motorların temeli oldu. El-Cezerî, bilimin insanlığa ve canlılara merhamet etmek için var olduğunu kanıtlayarak tarihe geçti.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            text: "Diyarbakır'daki atölyesinde mum ışığında son çizimini tamamlayan El-Cezerî, pencereden yıldızlı Mezopotamya gökyüzüne baktı. Onun sekiz asır önce tasarladığı harfli şifre çarkları bugünkü dijital şifrelerin, icat ettiği krank mili ve pistonlar ise modern motorların temeli oldu. El-Cezerî, bilimin insanlığa ve canlılara merhamet etmek için var olduğunu kanıtlayarak tarihe geçti.\n\nAkşam güneşi Kudüs tepelerinin ardında kızıl bir kor gibi batarken, çöl rüzgârı iki büyük ordugâhın meşale ışıklarını ve dalgalanan sancaklarını birbirine doğru savuruyordu. O an Kudüs ve Akka önlerindeki rüzgârlı tepelerde, sancakların dalgalandığı tarihi ordugâhta hissedilen en çetin savaş meydanında bile düşmanına şefkat ve mertlikle yaklaşan sarsılmaz bir şövalye ahlakı, sahnedeki herkesin kalbine derin bir güven ve ilham veriyordu.",
            speaker: "Başmühendis El-Cezerî",
            dialogue:
              "Benden öncekilerin kitaplarını inceledim ve üzerine kendi buluşlarımı ekledim; şimdi sıra sizde genç mucitler!",
            historicalNote:
              "Bunu Biliyor muydun? El-Cezerî'nin kabri doğduğu şehir olan Şırnak'ın Cizre ilçesindeki Nuh Peygamber Camii külliyesinde yer almaktadır.",
            imagePath: "assets/images/artifact_mimar_sinan_cube.png",
            imageKey: "assets/images/artifact_mimar_sinan_cube.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Bilim mirasını geleceğe bırakan büyük usta.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Sarayda hem anahtarsız açılan güvenli bir sandığa hem de hayvanları yormadan nehirden yukarı su basacak bir makineye ihtiyaç var. Hangi iki icadı tasarlarsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Sandığın etrafına kalın zincir sararım, suyu da kovalarla işçilere taşıtırım.",
              feedback:
                "Zincir kırılabilir, kovayla su taşımak ise insanları tüketir; mühendislik akılla çözüm üretmektir!",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Sandığı toprağa gömerim, nehirden su çekmek için de daha fazla öküz bağlarım.",
              feedback:
                "Sorunu çözmek yerine zorlaştırmış olursun; El-Cezerî makineleri canlıları yormamak için tasarladı.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Sandık için 16 harfli döner disklerden oluşan 'Şifreli Kilit', nehir içinse dairesel hareketi ileri-geri piston hareketine çeviren 'Krank Milli Su Pompası' icat ederim!",
              feedback:
                "Tarihi Hakikat! El-Cezerî hem tarihin ilk harfli şifreli kilidini hem de modern motorların kalbi olan Krank Mili'ni Diyarbakır'da icat etti!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "El-Cezerî, Diyarbakır'da 1206 yılında yazdığı Kitâbü'l-Hiyel eserinde hem 16 harfli 4 halkadan oluşan ilk mekanik şifreli kilidi hem de dönme hareketini doğrusal piston hareketine çeviren Krank Mili (Crankshaft) sistemini dünyaya armağan etti!",
          quoteHighlight:
            "Benden öncekilerin ilmini inceledim ve kimsenin denemediği yeni mekanizmalar kurdum!",
        },
        rewardArtifact: {
          id: "artifact-cipher-crank",
          name: "Şifreli Kilit Kutusu ve Altın Krank Mili",
          heroId: "el-cezeri",
          chapterId: "el-cezeri-ch2",
          imagePath: "assets/images/el_cezeri_combination_lock.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik Puanı",
          points: 50,
          unlockedTitle: "Sibernetik Ustası",
          shortDescription:
            "Üzerinde 16 harfli 4 şifre halkası bulunan gümüş-pirinç kilit kutusu ve modern motorların atası olan Krank Mili düzeneği.",
          historicalNote:
            "Topkapı Sarayı III. Ahmed Kütüphanesi'nde korunan 1206 tarihli Kitâbü'l-Hiyel el yazmasında bu iki icadın renkli teknik çizimleri tüm detaylarıyla yer alır.",
          accentColor: "#06B6D4",
          hotspots: [
            {
              id: "cipher-dials",
              xPercent: 35,
              yPercent: 35,
              title: "16 Harfli Dört Şifre Halkası",
              secretFact:
                "Her bir halkada 16 harf bulunur; doğru 4 harfli şifre hizalanmadan içteki mandallar açılmaz (65.536 kombinasyon!).",
            },
            {
              id: "crankshaft-rod",
              xPercent: 65,
              yPercent: 52,
              title: "Tarihin İlk Krank Mili",
              secretFact:
                "Su çarkının dairesel dönüşünü pistonların ileri-geri hareketine çeviren bu parça, bugünkü otomobil motorlarının temelidir.",
            },
            {
              id: "double-piston",
              xPercent: 50,
              yPercent: 75,
              title: "Çift Etkili Bakır Pistonlar",
              secretFact:
                "Bir silindir suyu emerken diğeri suyu yukarı basar; böylece hayvan gücü kullanmadan su 20 arşın yükseğe çıkarılır.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "El-Cezerî'nin 800 yıl önce hayvanlar yorulmasın diye su pompası ve krank mili tasarlaması bize bilimin amacı hakkında ne anlatıyor?",
          "Sen kendi odan veya çantan için 4 harfli gizli bir şifreli kilit tasarlasaydın şifreyi hangi kelime yapardın?",
          "Bugün kullandığımız arabaların ve motorların temelindeki bir parçanın yüzyıllar önce Diyarbakır'da icat edilmiş olması sana ne hissettiriyor?",
        ],
      },
    ],
  },
];

