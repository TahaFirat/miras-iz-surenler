import { HeroData } from "./storyTypes";

export const HEROES_PART_3: HeroData[] = [
  // ==========================================================================
  // 15. YUNUS EMRE & TAPTUK EMRE (BİLGELİK VE GÖNÜL HİKÂYELERİ) — 2 BÖLÜM
  // ==========================================================================
  {
    id: "yunus-emre",
    name: "Yunus Emre & Taptuk Emre",
    heroClass: "BILGELIK_GONUL",
    heroClassLabel: "Bilgelik ve Gönül",
    classBadgeLabel: "Bilgelik ve Gönül",
    title: "Gönüller Yapmaya Gelen Anadolu Bilgesi",
    era: "13.–14. Yüzyıl • Nallıhan / Eskişehir (Anadolu)",
    location: "Sarıköy ve Nallıhan, Anadolu",
    visualMode: "CHARACTER_PORTRAIT",
    accentColor: "#10B981",
    secondaryColor: "#F59E0B",
    badgeText: "Bilgelik ve Gönül • 2 Bölüm",
    summary:
      "Kırk yıl boyunca Taptuk Emre dergâhına tek bir eğri odun bile getirmeyen, Anadolu'yu duru Türkçesi ve sevgi dolu şiirleriyle aydınlatan gönül sultanı.",
    shortBio:
      "Kırk yıl boyunca Taptuk Emre dergâhına tek bir eğri odun bile getirmeyen, Anadolu'yu duru Türkçesi ve sevgi dolu şiirleriyle aydınlatan gönül sultanı.",
    coverImage: "assets/images/yunus_emre_straight_wood.png",
    crisisImage: "assets/images/yunus_emre_straight_wood.png",
    images: {
      cover: "assets/images/yunus_emre_straight_wood.png",
      crisis: "assets/images/yunus_emre_straight_wood.png",
      artifact: "assets/images/yunus_emre_straight_wood.png",
    },
    chapters: [
      {
        id: "yunus-emre-ch1",
        heroId: "yunus-emre",
        chapterNumber: 1,
        title: "Bu Dergâhtan İçeri Eğri Odun Giremez!",
        subtitle: "Kırk yıl süren doğruluk, sabır ve dürüstlük nöbeti",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "yunus-emre-ch1-s1",
            sceneNumber: 1,
            title: "Sakarya Kıyısında Kuraklık ve Alıç Heybesi",
            narration:
              "On üçüncü yüzyıl sonlarında Anadolu toprakları zorlu bir kuraklıkla sınanıyordu. Sakarya Nehri kıyısındaki Sarıköy'de yaşayan genç çiftçi Yunus, tarlasındaki ekinler susuzluktan sararınca komşularının ve çocukların aç kalmasına gönlü razı olmadı. Öküzünün sırtına kırda yetişen yabani alıç meyvelerini yükledi ve cömertliğiyle tanınan bilge dervişlerin ocağından tohumluk buğday istemek üzere yola koyuldu.\n\nSabah çiyi henüz kurumamışken dağ patikalarını aşan Yunus'un kalbinde hem köyünün telaşı hem de içini kemiren derin bir arayış vardı. İnsan dünyaya sadece karnını doyurmak için mi gelmişti, yoksa kalbi doyuran daha büyük bir hakikat var mıydı? İşte bu sorularla Taptuk Emre'nin mütevazı taş dergâhının kapısına ulaştı.",
            text: "On üçüncü yüzyıl sonlarında Anadolu toprakları zorlu bir kuraklıkla sınanıyordu. Sakarya Nehri kıyısındaki Sarıköy'de yaşayan genç çiftçi Yunus, tarlasındaki ekinler susuzluktan sararınca komşularının ve çocukların aç kalmasına gönlü razı olmadı. Öküzünün sırtına kırda yetişen yabani alıç meyvelerini yükledi ve cömertliğiyle tanınan bilge dervişlerin ocağından tohumluk buğday istemek üzere yola koyuldu.\n\nSabah çiyi henüz kurumamışken dağ patikalarını aşan Yunus'un kalbinde hem köyünün telaşı hem de içini kemiren derin bir arayış vardı. İnsan dünyaya sadece karnını doyurmak için mi gelmişti, yoksa kalbi doyuran daha büyük bir hakikat var mıydı? İşte bu sorularla Taptuk Emre'nin mütevazı taş dergâhının kapısına ulaştı.",
            speaker: "Genç Çiftçi Yunus",
            dialogue:
              "Köyümüzün toprağı çatladı, ambarlarımız boşaldı. Elimde hediye olarak sadece şu dağ alıçları var; umarım dergâhtan eli boş dönmem.",
            historicalNote:
              "Bunu Biliyor muydun? Anadolu'daki dergâhlar ve zaviyeler, kuraklık ve kıtlık yıllarında ambarlarındaki buğdayı halka karşılıksız dağıtan yardımlaşma merkezleriydi.",
            imagePath: "assets/images/yunus_emre_straight_wood.png",
            imageKey: "assets/images/yunus_emre_straight_wood.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Anadolu çam ormanı ve taş dergâh kapısında Yunus Emre ile Taptuk Emre.",
          },
          {
            id: "yunus-emre-ch1-s2",
            sceneNumber: 2,
            title: "Buğday mı İstersin, Erenlerin Himmetini mi?",
            narration:
              "Dergâhın avlusunda sıcak çorba kazanları kaynıyor, yolculara ve yoksullara güler yüzle sofra kuruluyordu. Yunus'un getirdiği mütevazı alıç meyveleri sanki saray mücevheriymiş gibi büyük bir saygıyla kabul edildi. Ocağın bilgesi Yunus'a tebessümle bakarak ambar dolusu buğday mı, yoksa kalbini aydınlatacak bilgelik nefesi mi istediğini sordu.\n\nYunus o an köyündeki aç çocukları düşünerek buğdayı seçti ve çuvalları yüklenip yola çıktı. Fakat dergâhtan uzaklaşıp bayırı tırmandıkça içine tarifsiz bir pişmanlık çöktü: 'Buğday birkaç günde yenir biter, ama bilgelik ve güzel ahlak insanı ömür boyu yaşatır!' diyerek adımlarını durdurdu ve dergâha geri döndü.",
            text: "Dergâhın avlusunda sıcak çorba kazanları kaynıyor, yolculara ve yoksullara güler yüzle sofra kuruluyordu. Yunus'un getirdiği mütevazı alıç meyveleri sanki saray mücevheriymiş gibi büyük bir saygıyla kabul edildi. Ocağın bilgesi Yunus'a tebessümle bakarak ambar dolusu buğday mı, yoksa kalbini aydınlatacak bilgelik nefesi mi istediğini sordu.\n\nYunus o an köyündeki aç çocukları düşünerek buğdayı seçti ve çuvalları yüklenip yola çıktı. Fakat dergâhtan uzaklaşıp bayırı tırmandıkça içine tarifsiz bir pişmanlık çöktü: 'Buğday birkaç günde yenir biter, ama bilgelik ve güzel ahlak insanı ömür boyu yaşatır!' diyerek adımlarını durdurdu ve dergâha geri döndü.",
            speaker: "Yunus Emre",
            dialogue:
              "Ben fani olan buğdayı seçmekle yanıldım! Buğday tükenir ama hakikat tükenmez; beni öğrenciliğe kabul edin.",
            historicalNote:
              "Bunu Biliyor muydun? Hacı Bektaş-ı Veli'nin Yunus'u Nallıhan'daki bilge Taptuk Emre'ye yönlendirdiği ve Yunus'un eğitim yolculuğunun böyle başladığı rivayet edilir.",
            imagePath: "assets/images/omer_s4_carrying_flour.png",
            imageKey: "assets/images/omer_s4_carrying_flour.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Buğday çuvalları ve taş patika yolu.",
          },
          {
            id: "yunus-emre-ch1-s3",
            sceneNumber: 3,
            title: "Taptuk Emre'nin İlk Görevi: Ormandan Odun Taşımak",
            narration:
              "Ak sakallı, nur yüzlü Taptuk Emre, kapısına gelen heyecanlı genci şefkatle karşıladı. Dergâhta kimse boş oturmaz, herkes elinin emeğiyle bir hizmetin ucundan tutardı. Taptuk Emre, Yunus'un eline sağlam bir balta ve kendirden örülmüş bir urgan vererek dergâhın aşevinde ve kış ocaklarında yakılmak üzere ormandan kuru odun getirme görevini ona emanet etti.\n\nİlk bakışta çok basit görünen bu görev, aslında insanın sabrını, dikkatini ve işine duyduğu saygıyı ölçen büyük bir okuldu. Yunus, hocasının elini öpüp urganını omzuna astı ve güneşin altın ışıklarının süzüldüğü çam ve meşe ormanına doğru ilk adımını attı.",
            text: "Ak sakallı, nur yüzlü Taptuk Emre, kapısına gelen heyecanlı genci şefkatle karşıladı. Dergâhta kimse boş oturmaz, herkes elinin emeğiyle bir hizmetin ucundan tutardı. Taptuk Emre, Yunus'un eline sağlam bir balta ve kendirden örülmüş bir urgan vererek dergâhın aşevinde ve kış ocaklarında yakılmak üzere ormandan kuru odun getirme görevini ona emanet etti.\n\nİlk bakışta çok basit görünen bu görev, aslında insanın sabrını, dikkatini ve işine duyduğu saygıyı ölçen büyük bir okuldu. Yunus, hocasının elini öpüp urganını omzuna astı ve güneşin altın ışıklarının süzüldüğü çam ve meşe ormanına doğru ilk adımını attı.",
            speaker: "Taptuk Emre",
            dialogue:
              "Evladım Yunus, dergâhımızın çorbası yolcular için kaynar. Senin vazifen ormandan ocağımıza odun taşımaktır; işini aşkla ve doğrulukla yap.",
            historicalNote:
              "Bunu Biliyor muydun? Anadolu irfan geleneğinde 'hizmet eğitimi', insanın kibrini yenmesi ve emeğin değerini anlaması için ilk basamak kabul edilirdi.",
            imagePath: "assets/images/ebubekir_s2_wooden_door.png",
            imageKey: "assets/images/ebubekir_s2_wooden_door.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Ahşap dergâh kapısı ve sabah güneşi.",
          },
          {
            id: "yunus-emre-ch1-s4",
            sceneNumber: 4,
            title: "Ormanda Kendi Kendine Verilen Doğruluk Sözü",
            narration:
              "Ormana giren Yunus, önce yaş ve yeşil ağaçlara asla dokunmamaya karar verdi; çünkü her filiz doğanın canlı bir nefesiydi. Sadece kurumuş ve devrilmiş dalları aramaya başladı. Tam yerdeki eğri büğrü, düğümlü çalı çırpıları toplayacakken durup düşündü: 'Taptuk Emre gibi doğru sözlü, dürüst bir bilgenin kapısından içeri eğri bir odun bile girmemeli!'\n\nO günden itibaren ormanda saatlerce yürüyor, cetvel gibi dümdüz kurumuş dalları tek tek seçiyor, budaklarını temizleyip aynı boyda kesiyordu. Diğer oduncular yarım saatte çalı çırpı doldurup dönerken, Yunus en düzgün odunları bulmak için akşamüstüne kadar ter döküyordu.",
            text: "Ormana giren Yunus, önce yaş ve yeşil ağaçlara asla dokunmamaya karar verdi; çünkü her filiz doğanın canlı bir nefesiydi. Sadece kurumuş ve devrilmiş dalları aramaya başladı. Tam yerdeki eğri büğrü, düğümlü çalı çırpıları toplayacakken durup düşündü: 'Taptuk Emre gibi doğru sözlü, dürüst bir bilgenin kapısından içeri eğri bir odun bile girmemeli!'\n\nO günden itibaren ormanda saatlerce yürüyor, cetvel gibi dümdüz kurumuş dalları tek tek seçiyor, budaklarını temizleyip aynı boyda kesiyordu. Diğer oduncular yarım saatte çalı çırpı doldurup dönerken, Yunus en düzgün odunları bulmak için akşamüstüne kadar ter döküyordu.",
            speaker: "Yunus Emre",
            dialogue:
              "Nasıl olsa ateşte yanıp kül olacak diyerek işimi baştan savma yapamam! Doğruluk kapısına eğri odun yakışmaz.",
            historicalNote:
              "Bunu Biliyor muydun? Yunus Emre doğayı çok severdi; kuruyan ağaçlara bile zarar vermekten çekinir, sadece kendiliğinden kurumuş düzgün dalları toplardı.",
            imagePath: "assets/images/fatih_s3_greased_logs.png",
            imageKey: "assets/images/fatih_s3_greased_logs.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Ormanda özenle seçilmiş dümdüz ağaç kütükleri.",
            midDecision: {
              title: "ARA KARAR: Kimse Görmezken İşini Nasıl Yaparsın?",
              question:
                "Ormanda tek başınasın ve hava kararmak üzere. Önünde eğri büğrü çalılar var, düzgün odunlar ise tepenin arkasında. Ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Nasıl olsa ocakta yanıp kül olacak, kimse dikkat etmez diyerek önümdeki eğri çalıları yüklenirim.",
                  feedback:
                    "İşini 'nasıl olsa kimse görmüyor' diye özensiz yapmak, kalpteki doğruluğu zedeler.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Zor olsa da tepeyi aşarım; doğruluk kapısına eğri odun yakışmaz diyerek en düzgün odunları seçerim!",
                  feedback:
                    "Harika seçim! Yunus Emre tam 40 yıl boyunca kimse kontrol etmese bile tek bir eğri odun bile getirmedi.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "yunus-emre-ch1-s5",
            sceneNumber: 5,
            title: "Sırtını Yaralayan Urgan ve Yumuşak Yosunlar",
            narration:
              "Mevsimler birbirini kovaladı; ilkbahar çiçekleri açtı, güz yaprakları döküldü, kışın bembeyaz karları dağları örttü. Yunus her gün sırtında dümdüz odun demetiyle dergâhın avlusuna girdi. Bir gün odunları bağladığı sert kendir ipi omuzlarını yara yapınca bile şikâyet etmedi; ipin altına yumuşak orman yosunları koyarak yükünü sessizce taşımaya devam etti.\n\nAşevindeki dervişler, Yunus'un getirdiği odunların birbirinin eşi gibi dümdüz ve tertemiz olmasına hayret ediyorlardı. Ocak yanarken ne etrafa kıvılcım sıçrıyor ne de eğri dallar yüzünden duman tütüyordu; Yunus'un özeni aşevindeki herkesin işini kolaylaştırıyordu.",
            text: "Mevsimler birbirini kovaladı; ilkbahar çiçekleri açtı, güz yaprakları döküldü, kışın bembeyaz karları dağları örttü. Yunus her gün sırtında dümdüz odun demetiyle dergâhın avlusuna girdi. Bir gün odunları bağladığı sert kendir ipi omuzlarını yara yapınca bile şikâyet etmedi; ipin altına yumuşak orman yosunları koyarak yükünü sessizce taşımaya devam etti.\n\nAşevindeki dervişler, Yunus'un getirdiği odunların birbirinin eşi gibi dümdüz ve tertemiz olmasına hayret ediyorlardı. Ocak yanarken ne etrafa kıvılcım sıçrıyor ne de eğri dallar yüzünden duman tütüyordu; Yunus'un özeni aşevindeki herkesin işini kolaylaştırıyordu.",
            speaker: "Aşevi Ustası",
            dialogue:
              "Yıllardır bu ocağı yakarım; Yunus'un getirdiği odunlar kadar düzgün kesilmiş ve kuru tek bir demet bile görmedim!",
            historicalNote:
              "Bunu Biliyor muydun? İslam ahlakında 'İhsan', yaptığı bir işi en güzel, en özenli ve kusursuz biçimde yapmaya çalışmak demektir.",
            imagePath: "assets/images/omer_s5_cooking_soup.png",
            imageKey: "assets/images/omer_s5_cooking_soup.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Ocakta düzgün odunlarla kaynayan sıcak çorba kazanı.",
          },
          {
            id: "yunus-emre-ch1-s6",
            sceneNumber: 6,
            title: "Taptuk Emre'nin Avludaki Sorusu",
            narration:
              "Aradan tam kırk yıl geçti! Bir sonbahar sabahı Taptuk Emre, öğrencileriyle birlikte dergâhın taş avlusunda otururken Yunus yine sırtında cetvel gibi dizilmiş odun demetiyle kapıdan içeri girdi. Taptuk Emre yerinden kalktı, odun yığınının yanına yaklaştı ve elini dümdüz meşe dallarının üzerinde gezdirdi.\n\nHocası gülümseyerek Yunus'un gözlerinin içine baktı ve bütün öğrencilerin duyacağı bir sesle sordu: 'Ey bizim Yunus! Dağda ormanda hiç mi eğri odun kalmadı ki, kırk yıldır bu kapıdan içeri tek bir eğri dal bile sokmadın?' Avludaki herkes nefesini tutmuş Yunus'un vereceği cevabı bekliyordu.",
            text: "Aradan tam kırk yıl geçti! Bir sonbahar sabahı Taptuk Emre, öğrencileriyle birlikte dergâhın taş avlusunda otururken Yunus yine sırtında cetvel gibi dizilmiş odun demetiyle kapıdan içeri girdi. Taptuk Emre yerinden kalktı, odun yığınının yanına yaklaştı ve elini dümdüz meşe dallarının üzerinde gezdirdi.\n\nHocası gülümseyerek Yunus'un gözlerinin içine baktı ve bütün öğrencilerin duyacağı bir sesle sordu: 'Ey bizim Yunus! Dağda ormanda hiç mi eğri odun kalmadı ki, kırk yıldır bu kapıdan içeri tek bir eğri dal bile sokmadın?' Avludaki herkes nefesini tutmuş Yunus'un vereceği cevabı bekliyordu.",
            speaker: "Taptuk Emre",
            dialogue:
              "Ey bizim Yunus! Ormandaki bütün ağaçlar cetvelle mi çizildi? Kırk yıldır getirdiğin odunların içinde nasıl olur da bir tane bile eğri bulunmaz?",
            historicalNote:
              "Bunu Biliyor muydun? Taptuk Emre'nin Yunus için söylediği 'Bizim Yunus' ifadesi, yüzyıllar boyunca Anadolu halkının Yunus Emre'yi kendi ailesinden biri gibi görmesini sağlamıştır.",
            imagePath: "assets/images/ebubekir_s3_clean_house.png",
            imageKey: "assets/images/ebubekir_s3_clean_house.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Tertemiz taş avlu ve sabah güneşi.",
          },
          {
            id: "yunus-emre-ch1-s7",
            sceneNumber: 7,
            title: "Asırlara Kazınan Cevap: Doğruluk Kapısı",
            narration:
              "Yunus Emre başını edeple öne eğdi, alnındaki ter damlalarını elinin tersiyle sildi. Kalbindeki bütün samimiyeti tek bir cümleye sığdırarak hocasına cevap verdi: 'Sultanım, ormanda eğri odun çoktur; lakin senin bu doğruluk dergâhından içeri odunun bile eğrisi yakışmaz!' Bu söz avlunun taş duvarlarında yankılandığında Taptuk Emre'nin gözleri doldu.\n\nÇünkü Yunus, kırk yıl boyunca sadece ormandan odun taşımamış; aslında kendi kalbindeki bütün eğrilikleri, sabırsızlıkları ve kibri de yontup düzeltmişti. Dışarıdaki işini düzgün yapan insanın, iç dünyası da berrak bir ayna gibi parlamaya başlamıştı.",
            text: "Yunus Emre başını edeple öne eğdi, alnındaki ter damlalarını elinin tersiyle sildi. Kalbindeki bütün samimiyeti tek bir cümleye sığdırarak hocasına cevap verdi: 'Sultanım, ormanda eğri odun çoktur; lakin senin bu doğruluk dergâhından içeri odunun bile eğrisi yakışmaz!' Bu söz avlunun taş duvarlarında yankılandığında Taptuk Emre'nin gözleri doldu.\n\nÇünkü Yunus, kırk yıl boyunca sadece ormandan odun taşımamış; aslında kendi kalbindeki bütün eğrilikleri, sabırsızlıkları ve kibri de yontup düzeltmişti. Dışarıdaki işini düzgün yapan insanın, iç dünyası da berrak bir ayna gibi parlamaya başlamıştı.",
            speaker: "Yunus Emre",
            dialogue:
              "Hocam, bu kapı doğruluk ve dürüstlük kapısıdır. Bu dergâhtan içeri eğri insan giremediği gibi, eğri odun bile giremez!",
            historicalNote:
              "Bunu Biliyor muydun? 'Bu dergâhtan içeri eğri odun giremez' sözü, Türkçede dürüstlüğün ve iş ahlakının en ünlü atasözlerinden biri haline gelmiştir.",
            imagePath: "assets/images/ebubekir_s7_morning_encounter.png",
            imageKey: "assets/images/ebubekir_s7_morning_encounter.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Güneş ışıkları altında uzanan bilgelik ve dostluk eli.",
          },
          {
            id: "yunus-emre-ch1-s8",
            sceneNumber: 8,
            title: "Çözülen Dil Bağı ve İlk Şiirler",
            narration:
              "Bir akşam dergâhta ilahiler ve hikmetli sohbetler konuşulurken Taptuk Emre, Yunus'a dönerek 'Vakit tamam oldu Yunus'um; artık kalbindeki o berrak pınarı insanlara anlatma vaktidir, söyle!' dedi. O ana kadar sessizliğiyle bilinen Yunus'un gönül kilidi açıldı ve dudaklarından duru, sade ve herkesin anlayabileceği güzellikte Türkçe dizeler dökülmeye başladı.\n\nNe süslü ve anlaşılmaz kelimeler kullanıyor ne de kimseye tepeden bakıyordu. Tıpkı ormandan seçtiği o dümdüz, pürüzsüz odunlar gibi, kelimeleri de yalın, içten ve dosdoğruydu. Dinleyenlerin kalbi ısınıyor, dargınlar barışıyor, umutsuzlar yeniden umut buluyordu.",
            text: "Bir akşam dergâhta ilahiler ve hikmetli sohbetler konuşulurken Taptuk Emre, Yunus'a dönerek 'Vakit tamam oldu Yunus'um; artık kalbindeki o berrak pınarı insanlara anlatma vaktidir, söyle!' dedi. O ana kadar sessizliğiyle bilinen Yunus'un gönül kilidi açıldı ve dudaklarından duru, sade ve herkesin anlayabileceği güzellikte Türkçe dizeler dökülmeye başladı.\n\nNe süslü ve anlaşılmaz kelimeler kullanıyor ne de kimseye tepeden bakıyordu. Tıpkı ormandan seçtiği o dümdüz, pürüzsüz odunlar gibi, kelimeleri de yalın, içten ve dosdoğruydu. Dinleyenlerin kalbi ısınıyor, dargınlar barışıyor, umutsuzlar yeniden umut buluyordu.",
            speaker: "Yunus Emre",
            dialogue:
              "İlim ilim bilmektir, ilim kendin bilmektir; sen kendini bilmezsin, ya nice okumaktır!",
            historicalNote:
              "Bunu Biliyor muydun? Yunus Emre, Anadolu'da Türkçenin edebi bir şiir ve bilim dili olarak yerleşmesinde en büyük paya sahip olan öncü şairimizdir.",
            imagePath: "assets/images/ibn_sina_s1_bukhara_library.png",
            imageKey: "assets/images/ibn_sina_s1_bukhara_library.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Kandil ışığında yazılan hikmetli şiir defteri.",
          },
          {
            id: "yunus-emre-ch1-s9",
            sceneNumber: 9,
            title: "Anadolu Yollarında Bir Gönül Yolcusu",
            narration:
              "Taptuk Emre'nin hayır duasını alan Yunus Emre, artık sadece bir dergâhın değil, bütün Anadolu'nun ve insanlığın bilgesi olarak yollara düştü. Köyden köye, şehirden şehre yürürken çocukların başını okşadı, hastaların halini sordu ve insanlara doğruluğu, sabrı ve kardeşliği anlattı.\n\nYedi yüz yılı aşkın bir zaman geçmesine rağmen onun ormandan taşıdığı o dümdüz odunların hikâyesi hiç unutulmadı. Çünkü Yunus Emre bize hangi işi yaparsak yapalım, içine dürüstlük ve özen kattığımızda sıradan bir işin bile bizi bilgeliğin zirvesine taşıyacağını kanıtlamıştı.",
            text: "Taptuk Emre'nin hayır duasını alan Yunus Emre, artık sadece bir dergâhın değil, bütün Anadolu'nun ve insanlığın bilgesi olarak yollara düştü. Köyden köye, şehirden şehre yürürken çocukların başını okşadı, hastaların halini sordu ve insanlara doğruluğu, sabrı ve kardeşliği anlattı.\n\nYedi yüz yılı aşkın bir zaman geçmesine rağmen onun ormandan taşıdığı o dümdüz odunların hikâyesi hiç unutulmadı. Çünkü Yunus Emre bize hangi işi yaparsak yapalım, içine dürüstlük ve özen kattığımızda sıradan bir işin bile bizi bilgeliğin zirvesine taşıyacağını kanıtlamıştı.",
            speaker: "Yunus Emre",
            dialogue:
              "Ben gelmedim dava için, benim işim sevi için; dostun evi gönüllerdir, gönüller yapmaya geldim!",
            historicalNote:
              "Bunu Biliyor muydun? UNESCO, Yunus Emre'nin vefatının 700. yılı dolayısıyla 2021 yılını tüm dünyada 'Yunus Emre ve Türkçe Yılı' ilan etmiştir.",
            imagePath: "assets/images/ebubekir_s8_secret_promise.png",
            imageKey: "assets/images/ebubekir_s8_secret_promise.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Güneş doğarken huzurlu Anadolu sokağı ve açık kapı.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Hocan Taptuk Emre sana dergâhın ocağı için ormandan odun getirme görevi verdi. Kimse seni ormanda görmüyor ve odunlar zaten ateşte yanıp kül olacak. Nasıl davranırsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Nasıl olsa yanıp kül olacak diyerek en yakındaki eğri büğrü ve yaş dalları hızla toplayıp dönerim.",
              feedback:
                "Yaş dallar doğaya zarar verir, özensiz iş ise insanın kendi karakterini zayıflatır.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Odun taşımak çok yorucu ve basit bir iş diyerek görevi bırakıp sadece kitap okumak isterim.",
              feedback:
                "Emeğe ve hizmete saygı duymadan gerçek bilgeliğe ulaşılamaz.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Doğruluk kapısından içeri eğri odun bile giremez diyerek, sadece kurumuş ve cetvel gibi dümdüz dalları özenle seçip taşırım!",
              feedback:
                "Tarihi Hakikat! Yunus Emre işine gösterdiği bu eşsiz doğruluk ve sabır sayesinde gönüller sultanı oldu.",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Yunus Emre tam kırk yıl boyunca Taptuk Emre dergâhına ormandan tek bir eğri veya yaş odun bile getirmedi. Hocası nedenini sorduğunda 'Bu doğruluk kapısından içeri odunun bile eğrisi giremez!' diyerek dürüstlüğün ve iş ahlakının ölümsüz dersini verdi.",
          quoteHighlight:
            "Bu dergâh doğruluk kapısıdır; buradan içeri eğri odun bile giremez!",
        },
        rewardArtifact: {
          id: "artifact-yunus-straight-wood",
          name: "Yunus'un Doğruluk Heybesi ve Odunu",
          heroId: "yunus-emre",
          chapterId: "yunus-emre-ch1",
          imagePath: "assets/images/yunus_emre_straight_wood.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik Puanı",
          points: 55,
          unlockedTitle: "Doğruluk Yolcusu",
          shortDescription:
            "Kırk yıl boyunca Taptuk Emre dergâhına tek bir eğri dal bile sokmayan Yunus Emre'nin sabır ve dürüstlük nişanesi.",
          historicalNote:
            "Yunus Emre'nin Risâletü'n-Nushiyye (Öğütler Kitabı) ve Divan'ı, çocuklara ve yetişkinlere doğruluğu, cömertliği ve alçakgönüllülüğü anlatan başyapıtlardır.",
          accentColor: "#10B981",
          hotspots: [
            {
              id: "straight-oak-log",
              xPercent: 45,
              yPercent: 40,
              title: "Cetvel Gibi Düz Meşe Odunu",
              secretFact:
                "Yunus Emre doğadaki canlı ağaçlara hiç zarar vermez, yalnızca kendiliğinden kurumuş düzgün dalları toplardı.",
            },
            {
              id: "moss-rope",
              xPercent: 52,
              yPercent: 60,
              title: "Yosun Destekli Kendir Urgan",
              secretFact:
                "Ağır odun demetlerini taşırken omuzları yara olduğunda bile şikâyet etmemiş, ipin altına orman yosunu koyarak hizmetine devam etmiştir.",
            },
            {
              id: "dergah-threshold",
              xPercent: 65,
              yPercent: 75,
              title: "Taptuk Dergâhı Eşiği",
              secretFact:
                "Dergâhın kapısı her yolcuya açıktı ama içeride doğruluk, emek ve tevazu en birinci kuraldı.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Yunus Emre odunlar ateşte yanıp kül olacağı halde neden hep en düzgün olanları seçti?",
          "Kimsenin bizi görmediği zamanlarda da ödevimizi veya işimizi özenle yapmak bize ne kazandırır?",
          "Yunus Emre neden canlı ve yeşil ağaçları hiç kesmedi?",
        ],
      },

      // ------------------------------------------------------------------------
      // YUNUS EMRE - BÖLÜM 2: SEVELİM SEVİLELİM VE GÖNÜL SOFRASI (8 SAHNE)
      // ------------------------------------------------------------------------
      {
        id: "yunus-emre-ch2",
        heroId: "yunus-emre",
        chapterNumber: 2,
        title: "Sevelim Sevilelim: Kırk Köye Dağıtılan Nefes",
        subtitle: "Bir kez gönül yıktın ise, kıldığın namaz değil",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "yunus-emre-ch2-s1",
            sceneNumber: 1,
            title: "Kırgınlıklarla Bölünen Anadolu Kasabası",
            narration:
              "Yunus Emre'nin yolu bir bahar günü, insanların birbirine küstüğü, komşuların selamı sabahı kestiği bir Anadolu kasabasına düştü. Çarşıdaki esnaflar su sırası ve tarla sınırı yüzünden tartışıyor, çocuklar bile büyüklerin bu öfkesinden etkilenerek sokakta neşeyle oynayamıyordu. Kasabanın üzerindeki kara bulutlar sanki insanların yüzündeki tebessümü alıp götürmüştü.\n\nElinde asası, sırtında sade heybesiyle kasaba meydanındaki çınar ağacının altına oturan Yunus Emre, kimseyi suçlamadan önce herkesi sessizce dinledi. Çünkü o biliyordu ki, öfkeyle söylenen söz yangını büyütür, tatlı dil ve merhamet ise en sert taşları bile yumuşatırdı.",
            text: "Yunus Emre'nin yolu bir bahar günü, insanların birbirine küstüğü, komşuların selamı sabahı kestiği bir Anadolu kasabasına düştü. Çarşıdaki esnaflar su sırası ve tarla sınırı yüzünden tartışıyor, çocuklar bile büyüklerin bu öfkesinden etkilenerek sokakta neşeyle oynayamıyordu. Kasabanın üzerindeki kara bulutlar sanki insanların yüzündeki tebessümü alıp götürmüştü.\n\nElinde asası, sırtında sade heybesiyle kasaba meydanındaki çınar ağacının altına oturan Yunus Emre, kimseyi suçlamadan önce herkesi sessizce dinledi. Çünkü o biliyordu ki, öfkeyle söylenen söz yangını büyütür, tatlı dil ve merhamet ise en sert taşları bile yumuşatırdı.",
            speaker: "Yunus Emre",
            dialogue:
              "Söz ola kese savaşı, söz ola bitire başı; söz ola ağılı aşı, bal ile yağ ede bir söz!",
            historicalNote:
              "Bunu Biliyor muydun? Yunus Emre'nin 'Söz ola ağılı (zehirli) aşı, bal ile yağ ede bir söz' dizeleri, güzel konuşmanın en zor sorunları bile çözdüğünü anlatır.",
            imagePath: "assets/images/ali_s1_kufa_bazaar.png",
            imageKey: "assets/images/ali_s1_kufa_bazaar.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Güneş ışığı süzülen taş kemerli Anadolu çarşısı.",
          },
          {
            id: "yunus-emre-ch2-s2",
            sceneNumber: 2,
            title: "Çınar Altında Kurulan Kardeşlik Sofrası",
            narration:
              "Yunus Emre heybesinden çıkardığı kuru ekmeği ve peyniri çınarın altındaki temiz bir bezin üzerine koydu. Ardından meydandan geçen bir çocuğa seslenerek kasabadaki en dargın iki komşuyu, hiçbir şey söylemeden kendi sofrasına misafir olarak davet etti. İki komşu, bu güler yüzlü yabancı dervişin davetini kıramayıp çınarın altına geldiler.\n\nBirbirlerini görünce kaşlarını çattılar ve sırtlarını dönüp kalkmak istediler. Ancak Yunus Emre öylesine içten bir tebessümle ikisinin de elini tuttu ki, nezaketi karşısında mahcup olup sofraya diz çöktüler. Yunus, kendi ekmeğini ikiye bölüp bir yarısını birine, diğer yarısını ötekine uzattı.",
            text: "Yunus Emre heybesinden çıkardığı kuru ekmeği ve peyniri çınarın altındaki temiz bir bezin üzerine koydu. Ardından meydandan geçen bir çocuğa seslenerek kasabadaki en dargın iki komşuyu, hiçbir şey söylemeden kendi sofrasına misafir olarak davet etti. İki komşu, bu güler yüzlü yabancı dervişin davetini kıramayıp çınarın altına geldiler.\n\nBirbirlerini görünce kaşlarını çattılar ve sırtlarını dönüp kalkmak istediler. Ancak Yunus Emre öylesine içten bir tebessümle ikisinin de elini tuttu ki, nezaketi karşısında mahcup olup sofraya diz çöktüler. Yunus, kendi ekmeğini ikiye bölüp bir yarısını birine, diğer yarısını ötekine uzattı.",
            speaker: "Yunus Emre",
            dialogue:
              "Gelin tanış olalım, işi kolay kılalım; sevelim sevilelim, dünya kimseye kalmaz!",
            historicalNote:
              "Bunu Biliyor muydun? Anadolu kültüründe aynı ekmeği bölüşüp aynı sofraya oturmak, kırgınlıkları bitiren en kutsal barış sözü sayılırdı.",
            imagePath: "assets/images/ebubekir_s5_pitting_dates.png",
            imageKey: "assets/images/ebubekir_s5_pitting_dates.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Ahşap sofrada paylaşılan sıcak ekmek, süt ve hurma.",
          },
          {
            id: "yunus-emre-ch2-s3",
            sceneNumber: 3,
            title: "Gönül Kırmanın Ağırlığı",
            narration:
              "İki komşudan biri, 'Derviş baba, ben günde beş vakit ibadetimi yaparım, kimseye borcum yoktur; sadece şu komşuma kızgınım ve onunla konuşmuyorum, bundan ne zarar gelir?' diye sordu. Yunus Emre derin bir iç çekti ve gökyüzünde süzülen beyaz güvercinlere baktı.\n\nArdından insan kalbinin Allah'ın nazargâhı (baktığı en değerli yer) olduğunu anlattı. Bir insanın kalbini kırmanın, onu aşağılamanın veya komşusuna sırt çevirmenin bütün iyiliklerin bereketini götüreceğini, kırılan bir cam testi gibi incinen kalbin de ancak sevgi ve helalleşmeyle onarılabileceğini söyledi.",
            text: "İki komşudan biri, 'Derviş baba, ben günde beş vakit ibadetimi yaparım, kimseye borcum yoktur; sadece şu komşuma kızgınım ve onunla konuşmuyorum, bundan ne zarar gelir?' diye sordu. Yunus Emre derin bir iç çekti ve gökyüzünde süzülen beyaz güvercinlere baktı.\n\nArdından insan kalbinin Allah'ın nazargâhı (baktığı en değerli yer) olduğunu anlattı. Bir insanın kalbini kırmanın, onu aşağılamanın veya komşusuna sırt çevirmenin bütün iyiliklerin bereketini götüreceğini, kırılan bir cam testi gibi incinen kalbin de ancak sevgi ve helalleşmeyle onarılabileceğini söyledi.",
            speaker: "Yunus Emre",
            dialogue:
              "Bir kez gönül yıktın ise, bu kıldığın namaz değil; yetmiş iki millet dahi elin yüzün yumaz değil!",
            historicalNote:
              "Bunu Biliyor muydun? Yunus Emre şiirlerinde 'yetmiş iki millete bir göz ile bakmak' diyerek bütün insanlara ayrım yapmadan merhamet gösterilmesini öğütlemiştir.",
            imagePath: "assets/images/vakif_s1_stork_hospital_bursa.png",
            imageKey: "assets/images/vakif_s1_stork_hospital_bursa.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Güneşli avluda kuşlara ve canlılara gösterilen şefkat.",
          },
          {
            id: "yunus-emre-ch2-s4",
            sceneNumber: 4,
            title: "Su Arkındaki Tartışma ve Ortak Emek",
            narration:
              "Yunus Emre iki komşuyu da yanına alarak kavga ettikleri bahçe sınırındaki su arkına götürdü. Su kanalının önüne büyük bir kaya düşmüş, suyun akışı bozulduğu için iki bahçe de susuz kalmıştı. Komşular aylardır birbirini suçlamaktan o kayayı birlikte kaldırmayı hiç düşünmemişlerdi bile!\n\nYunus Emre cübbesinin kollarını sıvadı ve suya girip kayanın bir ucundan tuttu. 'Tek elin nesi var, iki elin sesi var; gelin şu taşı birlikte kaldıralım da suyunuz yeniden şırıl şırıl aksın!' dedi. İki komşu utanarak suya girdiler ve Yunus'la omuz omuza verip kayayı kenara yuvarladılar.",
            text: "Yunus Emre iki komşuyu da yanına alarak kavga ettikleri bahçe sınırındaki su arkına götürdü. Su kanalının önüne büyük bir kaya düşmüş, suyun akışı bozulduğu için iki bahçe de susuz kalmıştı. Komşular aylardır birbirini suçlamaktan o kayayı birlikte kaldırmayı hiç düşünmemişlerdi bile!\n\nYunus Emre cübbesinin kollarını sıvadı ve suya girip kayanın bir ucundan tuttu. 'Tek elin nesi var, iki elin sesi var; gelin şu taşı birlikte kaldıralım da suyunuz yeniden şırıl şırıl aksın!' dedi. İki komşu utanarak suya girdiler ve Yunus'la omuz omuza verip kayayı kenara yuvarladılar.",
            speaker: "Barışan Komşular",
            dialogue:
              "Meğer bizi susuz bırakan birbirimiz değil, aramıza giren inat ve öfke taşıymış! Birlikte tutunca taş ne kolay kalktı!",
            historicalNote:
              "Bunu Biliyor muydun? Anadolu'da imece usulü, köylülerin su kanallarını, harmanları ve ev inşaatlarını yardımlaşarak birlikte yapması geleneğidir.",
            imagePath: "assets/images/cezeri_s1_artuklu_palace.png",
            imageKey: "assets/images/cezeri_s1_artuklu_palace.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Berrak su kanalları ve taş kemerli bahçe.",
            midDecision: {
              title: "ARA KARAR: İki Arkadaşın Küstüğünde Ne Yaparsın?",
              question:
                "Sınıfında veya mahallende iki yakın arkadaşın küçük bir yanlış anlaşılma yüzünden birbirine küstü. Nasıl davranırsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Birinin tarafını tutup diğerine kızarım ve tartışmayı daha da büyütürüm.",
                  feedback:
                    "Taraf tutup öfkeyi körüklemek kırgınlığı derinleştirir.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "İkisini de tatlı dille dinler, ortak bir oyunda veya paylaşımda bir araya getirerek barışmalarına vesile olurum.",
                  feedback:
                    "Harika! Yunus Emre gibi gönül köprüsü kurmak en büyük erdemdir.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "yunus-emre-ch2-s5",
            sceneNumber: 5,
            title: "Yetim Çocukların Sevinci",
            narration:
              "Berrak su bahçelere dolarken iki komşu birbirine sarılıp helalleşti. İlk iş olarak bahçelerinden topladıkları en taze elmaları ve armutları sepetlere doldurup kasabadaki yetim ve yoksul ailelerin evlerine götürdüler. Küslüğün yerini paylaşmanın neşesi aldığında bütün kasabanın havası bir anda değişti.\n\nÇocuklar yeniden sokaklara çıktı, yaşlıların yüzü güldü ve fırınlardan çıkan sıcak ekmeklerin kokusu bütün mahalleyi sardı. Yunus Emre uzaktan çocukların sevincini izlerken, bir tek güzel sözün koca bir şehri nasıl bahara çevirdiğine şükretti.",
            text: "Berrak su bahçelere dolarken iki komşu birbirine sarılıp helalleşti. İlk iş olarak bahçelerinden topladıkları en taze elmaları ve armutları sepetlere doldurup kasabadaki yetim ve yoksul ailelerin evlerine götürdüler. Küslüğün yerini paylaşmanın neşesi aldığında bütün kasabanın havası bir anda değişti.\n\nÇocuklar yeniden sokaklara çıktı, yaşlıların yüzü güldü ve fırınlardan çıkan sıcak ekmeklerin kokusu bütün mahalleyi sardı. Yunus Emre uzaktan çocukların sevincini izlerken, bir tek güzel sözün koca bir şehri nasıl bahara çevirdiğine şükretti.",
            speaker: "Kasaba Çocukları",
            dialogue:
              "Yunus Dede! Komşularımız barıştı, bahçemizden yine sular akıyor; bize yeni bir şiir daha okur musun?",
            historicalNote:
              "Bunu Biliyor muydun? Yunus Emre'nin şiirleri yüzyıllar boyunca çocuklara ninniler ve ilahiler halinde ezberletilerek sevgi kültürünün nesilden nesile aktarılmasını sağlamıştır.",
            imagePath: "assets/images/ali_s3_orphan_doorstep.png",
            imageKey: "assets/images/ali_s3_orphan_doorstep.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Kapı eşiğinde paylaşılan sıcak ekmek ve meyveler.",
          },
          {
            id: "yunus-emre-ch2-s6",
            sceneNumber: 6,
            title: "Sarı Çiçek İle Sohbet: Doğadaki Her Canlıya Saygı",
            narration:
              "Kasabadan ayrılıp bahar çayırlarında yürüyen Yunus Emre, yol kenarında rüzgârla nazlı nazlı sallanan küçük bir sarı çiçeğin önünde diz çöktü. Çocuklara doğadaki en küçük çiçeğin, karıncanın ve kuşun bile büyük bir hikmetle yaratıldığını anlatmak için sarı çiçekle sohbet eden o ünlü şiirini söyledi.\n\nİnsanın sadece insanlara değil; toprağa, suya, ağaçlara ve çiçeklere karşı da merhametli olması gerektiğini hatırlattı. Çünkü yaratılan her varlığı, onu yaratan Allah'tan ötürü sevmek Yunus Emre'nin en büyük hayat ilkesiydi.",
            text: "Kasabadan ayrılıp bahar çayırlarında yürüyen Yunus Emre, yol kenarında rüzgârla nazlı nazlı sallanan küçük bir sarı çiçeğin önünde diz çöktü. Çocuklara doğadaki en küçük çiçeğin, karıncanın ve kuşun bile büyük bir hikmetle yaratıldığını anlatmak için sarı çiçekle sohbet eden o ünlü şiirini söyledi.\n\nİnsanın sadece insanlara değil; toprağa, suya, ağaçlara ve çiçeklere karşı da merhametli olması gerektiğini hatırlattı. Çünkü yaratılan her varlığı, onu yaratan Allah'tan ötürü sevmek Yunus Emre'nin en büyük hayat ilkesiydi.",
            speaker: "Yunus Emre",
            dialogue:
              "Sordum sarı çiçeğe: Annen baban var mıdır? Çiçek eydür derviş baba: Annem babam topraktır!",
            historicalNote:
              "Bunu Biliyor muydun? 'Sordum Sarı Çiçeğe' ilahisi, çocuklara doğa sevgisini ve tevazuyu anlatan en eski ve en sevilen Türkçe çocuk şiirlerinden biridir.",
            imagePath: "assets/images/ibn_sina_s3_quarantine_courtyard.png",
            imageKey: "assets/images/ibn_sina_s3_quarantine_courtyard.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Çiçeklerle dolu güneşli şifahane ve bahçe avlusu.",
          },
          {
            id: "yunus-emre-ch2-s7",
            sceneNumber: 7,
            title: "Bölüşürsek Tok Oluruz",
            narration:
              "Akşamüstü bir başka köye vardığında köylüler Yunus Emre'nin etrafında halka oldular. İçlerinden biri 'Derviş baba, dünyada kavgalar ve yoksulluk nasıl biter?' diye sordu. Yunus Emre elindeki bir somun ekmeği havaya kaldırdı ve cömertliğin sırrını iki satırda özetledi.\n\nEğer insanlar sadece 'hep bana, hep bana' derse koca dünyanın bile kimseye yetmeyeceğini; ama elindekini kardeşiyle bölüşürse bir dilim ekmeğin bile bütün köyü doyuracağını anlattı. Paylaşmanın malı azaltmadığını, aksine sevgiyi ve bereketi çoğalttığını gönüllere nakşetti.",
            text: "Akşamüstü bir başka köye vardığında köylüler Yunus Emre'nin etrafında halka oldular. İçlerinden biri 'Derviş baba, dünyada kavgalar ve yoksulluk nasıl biter?' diye sordu. Yunus Emre elindeki bir somun ekmeği havaya kaldırdı ve cömertliğin sırrını iki satırda özetledi.\n\nEğer insanlar sadece 'hep bana, hep bana' derse koca dünyanın bile kimseye yetmeyeceğini; ama elindekini kardeşiyle bölüşürse bir dilim ekmeğin bile bütün köyü doyuracağını anlattı. Paylaşmanın malı azaltmadığını, aksine sevgiyi ve bereketi çoğalttığını gönüllere nakşetti.",
            speaker: "Yunus Emre",
            dialogue:
              "Bölüşürsek tok oluruz, bölünürsek yok oluruz! Yaratılanı hoş gör, Yaratandan ötürü.",
            historicalNote:
              "Bunu Biliyor muydun? Yunus Emre'nin şiirlerinin toplandığı esere 'Yunus Emre Divanı' adı verilir ve içinde yüzlerce hikmetli şiir yer alır.",
            imagePath: "assets/images/hz_ali_bread_charity.png",
            imageKey: "assets/images/hz_ali_bread_charity.png",
            atmosphereType: "DESERT_CAMPFIRE",
            visualNote: "Paylaşılan bereketli ekmek ve iyilik ışığı.",
          },
          {
            id: "yunus-emre-ch2-s8",
            sceneNumber: 8,
            title: "Asırları Aydınlatan Gönül Çerağı",
            narration:
              "Güneş Anadolu dağlarının ardında kızıl bir kor gibi batarken Yunus Emre'nin şiirleri dilden dile, gönülden gönüle yayılmaya devam etti. Onun ne mermer sarayları ne de altın dolu hazineleri vardı; ama bıraktığı sevgi, doğruluk ve hoşgörü mirası bütün hazinelerden daha değerliydi.\n\nBugün bile nerede bir gönül kırılsa, nerede iki insan barışmaya niyet etse Yunus Emre'nin 'Sevelim, sevilelim' çağrısı kulaklarda çınlar. Çünkü gerçek kahramanlık sadece kılıçla değil, kırık kalpleri onaran tatlı dille ve sarsılmaz doğrulukla kazanılır.",
            text: "Güneş Anadolu dağlarının ardında kızıl bir kor gibi batarken Yunus Emre'nin şiirleri dilden dile, gönülden gönüle yayılmaya devam etti. Onun ne mermer sarayları ne de altın dolu hazineleri vardı; ama bıraktığı sevgi, doğruluk ve hoşgörü mirası bütün hazinelerden daha değerliydi.\n\nBugün bile nerede bir gönül kırılsa, nerede iki insan barışmaya niyet etse Yunus Emre'nin 'Sevelim, sevilelim' çağrısı kulaklarda çınlar. Çünkü gerçek kahramanlık sadece kılıçla değil, kırık kalpleri onaran tatlı dille ve sarsılmaz doğrulukla kazanılır.",
            speaker: "Yunus Emre",
            dialogue:
              "Halka bakan Hakk'ı görür; gelin hiçbir kalbi incitmeyelim, dünyayı sevgiyle imar edelim!",
            historicalNote:
              "Bunu Biliyor muydun? Anadolu'nun pek çok şehrinde (Eskişehir, Karaman, Aksaray, Manisa, Erzurum) Yunus Emre'ye duyulan sevgiden dolayı makamları ve anıtları bulunmaktadır.",
            imagePath: "assets/images/yunus_emre_straight_wood.png",
            imageKey: "assets/images/yunus_emre_straight_wood.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Anadolu güneşinde Yunus Emre ve Taptuk Emre'nin bilgelik mirası.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Gittiğin bir kasabada insanların inat ve öfke yüzünden birbirine küstüğünü, su kanallarını bile temizlemedikleri için bahçelerinin kuruduğunu gördün. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Böyle kavgacı insanlarla uğraşılmaz diyerek kasabadan hemen uzaklaşırım.",
              feedback:
                "Sorunlardan kaçmak kolaydır ama gerçek bilgelik karanlığa bir mum yakmaktır.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Kasaba meydanında herkese sertçe bağırıp onları azarlarım.",
              feedback:
                "Sert söz öfkeyi artırır; Yunus Emre 'Söz ola kese savaşı' diyerek tatlı dili seçmiştir.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Ekmeğimi onlarla bölüşür, tatlı dille gönüllerini yumuşatır ve su kanalındaki taşı kaldırmak için ilk elimi ben uzatırım!",
              feedback:
                "Tarihi Hakikat! Yunus Emre 'Gelin tanış olalım, sevelim sevilelim' diyerek kırgın kalpleri birleştirdi.",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Yunus Emre ömrü boyunca Anadolu'yu gezerek insanlara 'Yaratılanı hoş gör, Yaratandan ötürü' ve 'Sevelim sevilelim' ilkelerini anlattı; şiirleriyle dargınları barıştırıp birlik ve merhamet ruhunu yeşertti.",
          quoteHighlight:
            "Gelin tanış olalım, işi kolay kılalım; sevelim sevilelim, dünya kimseye kalmaz!",
        },
        rewardArtifact: {
          id: "artifact-yunus-divan",
          name: "Yunus Emre'nin Gönül Divanı",
          heroId: "yunus-emre",
          chapterId: "yunus-emre-ch2",
          imagePath: "assets/images/ibn_sina_s1_bukhara_library.png",
          pointType: "IHSAN_MEDENIYET",
          pointLabel: "İhsan ve Medeniyet Puanı",
          points: 55,
          unlockedTitle: "Gönül Mimarı",
          shortDescription:
            "Duru Türkçesiyle sevgiyi, kardeşliği ve doğruluk ahlakını asırlar ötesine taşıyan ölümsüz şiir mecmuası.",
          historicalNote:
            "Yunus Emre Divanı, 700 yıldır Türkçenin en berrak ve en çok okunan eseri olma özelliğini korumaktadır.",
          accentColor: "#10B981",
          hotspots: [
            {
              id: "divan-verses",
              xPercent: 50,
              yPercent: 45,
              title: "Duru Türkçe Dizeler",
              secretFact:
                "Yunus Emre en derin felsefi ve ahlaki konuları bile çocukların kolayca anlayabileceği sade bir Türkçeyle anlatmıştır.",
            },
            {
              id: "yellow-flower",
              xPercent: 35,
              yPercent: 65,
              title: "Sarı Çiçek İlahisi",
              secretFact:
                "Doğadaki her çiçeğin ve canlının bir anlamı olduğunu anlatan bu şiir, çevre ve doğa bilincinin en güzel örneklerindendir.",
            },
            {
              id: "peace-seal",
              xPercent: 65,
              yPercent: 30,
              title: "Gönül Kırmama İlkesi",
              secretFact:
                "Yunus Emre'ye göre gerçek ibadet ve iyilik, hiçbir insanın kalbini incitmemekle başlar.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Yunus Emre'nin 'Söz ola ağılı aşı, bal ile yağ ede bir söz' dizeleri bize günlük konuşmalarımız için ne öğretir?",
          "Bir arkadaşımızın kalbini yanlışlıkla kırdığımızda onu onarmak için neler yapabiliriz?",
          "'Bölüşürsek tok oluruz' sözünü evimizde ve okulumuzda nasıl uygulayabiliriz?",
        ],
      },
    ],
  },

  // ==========================================================================
  // 16. ULUĞ BEY (BİLİM VE GÖKBİLİM TÜRÜ) — 1 BÖLÜM
  // ==========================================================================
  {
    id: "ulug-bey",
    name: "Uluğ Bey",
    heroClass: "BILIM_DENEY",
    heroClassLabel: "Bilim ve Gökbilim",
    classBadgeLabel: "Bilim ve Gökbilim",
    title: "Tahtını Yıldızlara ve Bilime Adamış Hükümdar",
    era: "1394–1449 • Semerkand",
    location: "Semerkand, Mâverâünnehir",
    visualMode: "CHARACTER_PORTRAIT",
    accentColor: "#0D9488",
    secondaryColor: "#F59E0B",
    badgeText: "Bilim ve Gökbilim • 1 Bölüm",
    summary:
      "Saray hazinesini savaşlara değil dünyanın en büyük rasathanesine harcayan, teleskop icat edilmeden önce bir yılın uzunluğunu saniyeler farkla ölçen hükümdar-astronom.",
    shortBio:
      "Saray hazinesini savaşlara değil dünyanın en büyük rasathanesine harcayan, teleskop icat edilmeden önce bir yılın uzunluğunu saniyeler farkla ölçen hükümdar-astronom.",
    coverImage: "assets/images/ulug_bey_observatory.png",
    crisisImage: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
    images: {
      cover: "assets/images/ulug_bey_observatory.png",
      crisis: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
      artifact: "assets/images/meryem_s2_celestial_globe.png",
    },
    chapters: [
      {
        id: "ulug-bey-ch1",
        heroId: "ulug-bey",
        chapterNumber: 1,
        title: "Semerkand'da Yıldızları Tek Tek Saydıran Hükümdar",
        subtitle: "Savaş ganimeti değil, gökyüzünün matematiğini arayan sultan",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "ulug-bey-ch1-s1",
            sceneNumber: 1,
            title: "Meragâ Rasathanesi'nin Kalıntılarında Bir Çocuk",
            narration:
              "Henüz dokuz yaşında küçük bir şehzade olan Muhammed Taragay —yani tarihteki ünlü adıyla Uluğ Bey— bir seyahat sırasında eski Meragâ Rasathanesi'nin taş kalıntılarını gezmişti. Diğer şehzadeler altın kılıçlara ve savaş atlarına merak sararken, küçük Uluğ Bey yıkık taş kemerlerin üzerindeki güneş açısı çizgilerine hayranlıkla dokunmuş ve gökyüzünün sırlarını çözmeye o gün çocuk kalbiyle söz vermişti.\n\nYıllar geçip on altı yaşında Semerkand valisi ve ardından hükümdar olduğunda, bu çocukluk hayalini hiç unutmadı. Sarayının kapılarını şairlere, müzisyenlere değil; çağının en parlak matematikçilerine, gökbilimcilerine ve mühendislerine sonuna kadar açtı.",
            text: "Henüz dokuz yaşında küçük bir şehzade olan Muhammed Taragay —yani tarihteki ünlü adıyla Uluğ Bey— bir seyahat sırasında eski Meragâ Rasathanesi'nin taş kalıntılarını gezmişti. Diğer şehzadeler altın kılıçlara ve savaş atlarına merak sararken, küçük Uluğ Bey yıkık taş kemerlerin üzerindeki güneş açısı çizgilerine hayranlıkla dokunmuş ve gökyüzünün sırlarını çözmeye o gün çocuk kalbiyle söz vermişti.\n\nYıllar geçip on altı yaşında Semerkand valisi ve ardından hükümdar olduğunda, bu çocukluk hayalini hiç unutmadı. Sarayının kapılarını şairlere, müzisyenlere değil; çağının en parlak matematikçilerine, gökbilimcilerine ve mühendislerine sonuna kadar açtı.",
            speaker: "Genç Hükümdar Uluğ Bey",
            dialogue:
              "Topraklar kılıçla alınır ama zamanla el değiştirir; oysa bilimin ve hakikatin fethi kıyamete kadar bütün insanlığa kalır!",
            historicalNote:
              "Bunu Biliyor muydun? Uluğ Bey, Semerkand'da yaptırdığı medresenin kapısına 'İlim öğrenmek her Müslüman erkek ve kadına farzdır' hadisini yazdırmıştır.",
            imagePath: "assets/images/ulug_bey_observatory.png",
            imageKey: "assets/images/ulug_bey_observatory.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Semerkand Rasathanesi'nde yıldızları inceleyen hükümdar-bilgin Uluğ Bey.",
          },
          {
            id: "ulug-bey-ch1-s2",
            sceneNumber: 2,
            title: "Registan Meydanında Yükselen Bilim Okulu",
            narration:
              "Uluğ Bey önce Semerkand'ın kalbi olan Registan Meydanı'nda turkuaz çinileri güneşte parlayan muazzam bir medrese inşa ettirdi. Burası sıradan bir okul değildi; dünyanın dört bir yanından gelen yüzlerce öğrenciye burs veriliyor, astronomi, cebir, geometri ve doğa bilimleri en ileri düzeyde okutuluyordu. Hükümdar olmasına rağmen Uluğ Bey haftanın belirli günleri tahtından inip sınıfa giriyor ve öğrencilere bizzat matematik dersi anlatıyordu!\n\nÜnlü bilginler Kadızâde-i Rûmî, Gıyâseddin Cemşîd el-Kâşî ve genç yetenek Ali Kuşçu bu okulda onunla omuz omuza çalışıyordu. Sarayda rütbe değil, kimin daha zor bir matematik problemini çözdüğü konuşuluyordu.",
            text: "Uluğ Bey önce Semerkand'ın kalbi olan Registan Meydanı'nda turkuaz çinileri güneşte parlayan muazzam bir medrese inşa ettirdi. Burası sıradan bir okul değildi; dünyanın dört bir yanından gelen yüzlerce öğrenciye burs veriliyor, astronomi, cebir, geometri ve doğa bilimleri en ileri düzeyde okutuluyordu. Hükümdar olmasına rağmen Uluğ Bey haftanın belirli günleri tahtından inip sınıfa giriyor ve öğrencilere bizzat matematik dersi anlatıyordu!\n\nÜnlü bilginler Kadızâde-i Rûmî, Gıyâseddin Cemşîd el-Kâşî ve genç yetenek Ali Kuşçu bu okulda onunla omuz omuza çalışıyordu. Sarayda rütbe değil, kimin daha zor bir matematik problemini çözdüğü konuşuluyordu.",
            speaker: "Kadızâde-i Rûmî",
            dialogue:
              "Hükümdarımız Uluğ Bey, ilim meclisinde sultanlığını kapıda bırakır; kanıtlarımızı bir bilim insanı tevazusuyla tartışır.",
            historicalNote:
              "Bunu Biliyor muydun? 1420 yılında açılan Semerkand Uluğ Bey Medresesi, bugün hâlâ ayaktadır ve Dünya Mirası listesinde yer almaktadır.",
            imagePath: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            imageKey: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Medrese avlusunda astronomi ve matematik dersi.",
          },
          {
            id: "ulug-bey-ch1-s3",
            sceneNumber: 3,
            title: "Eski Yıldız Tablolarındaki Yanlışlık",
            narration:
              "Bir gece medresenin terasında yıldızların konumunu ölçen Uluğ Bey ve hocaları çok önemli bir sorun fark ettiler: Yüzlerce yıl önce Yunan bilgin Batlamyus'un yaptığı ve sonraki astronomların kopyaladığı yıldız haritaları ile gökyüzündeki gerçek yıldız konumları birbirini tutmuyordu! Küçük ölçüm aletleriyle yapılan hesaplarda hep birkaç derecelik sapmalar çıkıyordu.\n\nGıyâseddin Cemşîd, 'Hünkârım, elimizdeki küçük usturlaplarla derecenin saniyelerini hatasız ölçemeyiz; hata payını sıfıra indirmek için ölçüm aletimizin bir bina kadar devasa olması gerekir!' dedi. Bu fikir Uluğ Bey'in gözlerinde bir şimşek çaktırdı.",
            text: "Bir gece medresenin terasında yıldızların konumunu ölçen Uluğ Bey ve hocaları çok önemli bir sorun fark ettiler: Yüzlerce yıl önce Yunan bilgin Batlamyus'un yaptığı ve sonraki astronomların kopyaladığı yıldız haritaları ile gökyüzündeki gerçek yıldız konumları birbirini tutmuyordu! Küçük ölçüm aletleriyle yapılan hesaplarda hep birkaç derecelik sapmalar çıkıyordu.\n\nGıyâseddin Cemşîd, 'Hünkârım, elimizdeki küçük usturlaplarla derecenin saniyelerini hatasız ölçemeyiz; hata payını sıfıra indirmek için ölçüm aletimizin bir bina kadar devasa olması gerekir!' dedi. Bu fikir Uluğ Bey'in gözlerinde bir şimşek çaktırdı.",
            speaker: "Gıyâseddin Cemşîd el-Kâşî",
            dialogue:
              "Yıldızların gerçek yörüngesini saniye hassasiyetiyle bulmak istiyorsak, şimdiye kadar dünyada hiç yapılmamış büyüklükte bir gözlem kemeri inşa etmeliyiz!",
            historicalNote:
              "Bunu Biliyor muydun? Astronomide açı ölçer aletin yarıçapı ne kadar büyük olursa, bir derecenin alt birimleri olan dakika ve saniyeler o kadar hassas okunabilir.",
            imagePath: "assets/images/harizmi_s2_sundial_observatory.png",
            imageKey: "assets/images/harizmi_s2_sundial_observatory.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Gece rasathane terasında bronz açıölçer ve yıldız gözlemi.",
          },
          {
            id: "ulug-bey-ch1-s4",
            sceneNumber: 4,
            title: "Kuhak Tepesi'nde Dev Rasathane Kararı",
            narration:
              "O günlerde saraydaki bazı komutanlar Uluğ Bey'in huzuruna çıkarak hazinedeki altınlarla yeni savaş topları dökülmesini ve komşu ülkelere sefer düzenlenmesini istediler. Oysa Uluğ Bey'in önünde Semerkand'ın dışındaki Kuhak Tepesi'ne kurulacak üç katlı, silindirik dev rasathanenin mimari çizimleri duruyordu.\n\nUluğ Bey, halkını gereksiz savaşlara sürüklemek yerine hazinenin kapılarını bilim için açtı. Kuhak Tepesi'nin sert kayalık zemini kazıldı; depremde bile milim oynamaması için kulenin yarısı yerin altına, yarısı gökyüzüne doğru yükseldi.",
            text: "O günlerde saraydaki bazı komutanlar Uluğ Bey'in huzuruna çıkarak hazinedeki altınlarla yeni savaş topları dökülmesini ve komşu ülkelere sefer düzenlenmesini istediler. Oysa Uluğ Bey'in önünde Semerkand'ın dışındaki Kuhak Tepesi'ne kurulacak üç katlı, silindirik dev rasathanenin mimari çizimleri duruyordu.\n\nUluğ Bey, halkını gereksiz savaşlara sürüklemek yerine hazinenin kapılarını bilim için açtı. Kuhak Tepesi'nin sert kayalık zemini kazıldı; depremde bile milim oynamaması için kulenin yarısı yerin altına, yarısı gökyüzüne doğru yükseldi.",
            speaker: "Uluğ Bey",
            dialogue:
              "Savaşlar şehirleri yıkar, bilim ise insanlığı yüceltir! Hazinemizi Kuhak Tepesi'ndeki büyük rasathaneyi kurmak için kullanacağız.",
            historicalNote:
              "Bunu Biliyor muydun? Semerkand Rasathanesi yaklaşık 46 metre çapında ve 30 metre yüksekliğinde, üç katlı dev bir bilim merkezi olarak inşa edilmiştir.",
            imagePath: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
            imageKey: "assets/images/ali_kuscu_s1_samarkand_sextant.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Yer altına inen devasa mermer Fahrî Sekstantı ve güneş hüzmesi.",
            midDecision: {
              title: "ARA KARAR: Saray Hazinesini Nereye Harcarsın?",
              question:
                "Semerkand hükümdarısın ve hazinede büyük bir bütçe var. Komutanlar gösterişli bir saray ve yeni seferler istiyor, bilginler ise dünyanın en büyük rasathanesini kurmak istiyor. Ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Kendime altın kubbeli yeni bir yazlık saray yaptırırım, gökyüzünü eski kitaplardan okumaya devam ederiz.",
                  feedback:
                    "Eski kitaplardaki hataları düzeltmeden bilim ilerleyemezdi.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Hazineyi bilime vakfeder, Kuhak Tepesi'ne dünyanın en hassas rasathanesini inşa ettirip bizzat gözlemlere katılırım!",
                  feedback:
                    "Harika karar! Uluğ Bey Semerkand Rasathanesi'ni kurarak astronomi tarihini değiştirdi.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "ulug-bey-ch1-s5",
            sceneNumber: 5,
            title: "Kırk Metrelik Mermer Fahrî Sekstantı",
            narration:
              "Rasathanenin tam kalbine, yarıçapı kırk metreyi bulan ve yerin on bir metre altına kadar inen iki paralel beyaz mermer ray inşa edildi. 'Fahrî Sekstantı' adı verilen bu devasa taş yay, öylesine pürüzsüz cilalanmıştı ki üzerindeki her bir derece dilimi yetmiş santimetre genişliğindeydi! Rayların yanındaki taş basamaklardan inip çıkan genç astronomlar ölçümleri milimetrik olarak okuyabiliyordu.\n\nKubbenin en tepesindeki küçük pencereden içeri süzülen incecik güneş ışığı, öğle vakti mermer yayın tam üzerine düşüyor; ışığın düştüğü nokta sayesinde Güneş'in ufuktan yüksekliği ve mevsim dönümleri tek bir saniye bile şaşmadan hesaplanıyordu.",
            text: "Rasathanenin tam kalbine, yarıçapı kırk metreyi bulan ve yerin on bir metre altına kadar inen iki paralel beyaz mermer ray inşa edildi. 'Fahrî Sekstantı' adı verilen bu devasa taş yay, öylesine pürüzsüz cilalanmıştı ki üzerindeki her bir derece dilimi yetmiş santimetre genişliğindeydi! Rayların yanındaki taş basamaklardan inip çıkan genç astronomlar ölçümleri milimetrik olarak okuyabiliyordu.\n\nKubbenin en tepesindeki küçük pencereden içeri süzülen incecik güneş ışığı, öğle vakti mermer yayın tam üzerine düşüyor; ışığın düştüğü nokta sayesinde Güneş'in ufuktan yüksekliği ve mevsim dönümleri tek bir saniye bile şaşmadan hesaplanıyordu.",
            speaker: "Genç Ali Kuşçu",
            dialogue:
              "Hünkârım, kubbeden süzülen ışık tam mermer yayın üzerindeki işarete değdi! Ekinoks anını saniyesi saniyesine yakaladık!",
            historicalNote:
              "Bunu Biliyor muydun? Semerkand'daki bu dev mermer sekstantın yer altındaki 11 metrelik bölümü, 1908 yılında yapılan kazılarda sapasağlam ortaya çıkarılmıştır!",
            imagePath: "assets/images/heysem_s1_dark_tent_pinhole.png",
            imageKey: "assets/images/heysem_s1_dark_tent_pinhole.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Karanlık gözlem odasına küçük delikten düşen güneş ışığı hüzmesi.",
          },
          {
            id: "ulug-bey-ch1-s6",
            sceneNumber: 6,
            title: "Bin On Sekiz Yıldızın Tek Tek Kaydedilişi",
            narration:
              "Teleskopun icadına daha yüz altmış yıldan fazla bir zaman vardı! Buna rağmen Uluğ Bey ve ekibi, dondurucu kış gecelerinde bile gözlerini kırpmadan gökyüzünü izlediler. Her bir yıldızın ufuktan yüksekliğini, boylamını ve parlaklığını tek tek ölçtüler; bir kişinin yaptığı ölçümü en az üç farklı bilgin tekrar kontrol etmeden deftere yazmadılar.\n\nTam otuz yıl süren bu sabırlı çalışma sonucunda gökyüzündeki 1.018 yıldızın koordinatlarını içeren muazzam 'Zîc-i Uluğ Bey' (Uluğ Bey Yıldız Kataloğu) ortaya çıktı. Eski kataloglardaki yüzlerce hata tek tek düzeltilmiş, gökyüzünün en doğru haritası çizilmişti.",
            text: "Teleskopun icadına daha yüz altmış yıldan fazla bir zaman vardı! Buna rağmen Uluğ Bey ve ekibi, dondurucu kış gecelerinde bile gözlerini kırpmadan gökyüzünü izlediler. Her bir yıldızın ufuktan yüksekliğini, boylamını ve parlaklığını tek tek ölçtüler; bir kişinin yaptığı ölçümü en az üç farklı bilgin tekrar kontrol etmeden deftere yazmadılar.\n\nTam otuz yıl süren bu sabırlı çalışma sonucunda gökyüzündeki 1.018 yıldızın koordinatlarını içeren muazzam 'Zîc-i Uluğ Bey' (Uluğ Bey Yıldız Kataloğu) ortaya çıktı. Eski kataloglardaki yüzlerce hata tek tek düzeltilmiş, gökyüzünün en doğru haritası çizilmişti.",
            speaker: "Uluğ Bey",
            dialogue:
              "Başkalarının kitaplarında yazanı kontrol etmeden doğru kabul etmeyin; gökyüzüne kendi gözünüzle bakın ve ölçümü üç kez doğrulayın!",
            historicalNote:
              "Bunu Biliyor muydun? Zîc-i Uluğ Bey, Batlamyus'tan 1.300 yıl sonra dünyada ilk kez doğrudan yeni gözlemlere dayanarak hazırlanan en kapsamlı yıldız kataloğudur.",
            imagePath: "assets/images/meryem_s2_celestial_globe.png",
            imageKey: "assets/images/meryem_s2_celestial_globe.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Yıldızlı gökyüzü altında gök küresi ve altın usturlap.",
          },
          {
            id: "ulug-bey-ch1-s7",
            sceneNumber: 7,
            title: "Bir Yılın Uzunluğunu Saniyeler Farkla Ölçmek!",
            narration:
              "Uluğ Bey'in en büyük başarılarından biri de Dünya'nın Güneş etrafındaki tam bir dönüş süresini, yani bir yıldız yılının uzunluğunu hesaplamak oldu. Trigonometri tablolarını virgülden sonra dokuz basamağa kadar hesaplayan Uluğ Bey, bir yılın süresini 365 gün, 6 saat, 10 dakika ve 8 saniye olarak buldu!\n\nBugün modern atom saatleri ve uydularla yapılan ölçümlere göre gerçek süre 365 gün, 6 saat, 9 dakika ve 9.6 saniyedir. Yani Uluğ Bey, 600 yıl önce mermer bir yay ve çıplak gözle yaptığı ölçümde bir yılın uzunluğunu sadece 58 saniyelik küçücük bir farkla bilmişti!",
            text: "Uluğ Bey'in en büyük başarılarından biri de Dünya'nın Güneş etrafındaki tam bir dönüş süresini, yani bir yıldız yılının uzunluğunu hesaplamak oldu. Trigonometri tablolarını virgülden sonra dokuz basamağa kadar hesaplayan Uluğ Bey, bir yılın süresini 365 gün, 6 saat, 10 dakika ve 8 saniye olarak buldu!\n\nBugün modern atom saatleri ve uydularla yapılan ölçümlere göre gerçek süre 365 gün, 6 saat, 9 dakika ve 9.6 saniyedir. Yani Uluğ Bey, 600 yıl önce mermer bir yay ve çıplak gözle yaptığı ölçümde bir yılın uzunluğunu sadece 58 saniyelik küçücük bir farkla bilmişti!",
            speaker: "Uluğ Bey",
            dialogue:
              "Evren kusursuz bir matematikle işliyor; bir yılın uzunluğunu 365 gün 6 saat 10 dakika 8 saniye olarak kayda geçirin!",
            historicalNote:
              "Bunu Biliyor muydun? Uluğ Bey ayrıca Dünya'nın eksen eğikliğini 23 derece 30 dakika 17 saniye olarak ölçmüş ve günümüz değerine inanılmaz derecede yaklaşmıştır.",
            imagePath: "assets/images/harizmi_s1_house_of_wisdom.png",
            imageKey: "assets/images/harizmi_s1_house_of_wisdom.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Parşömen üzerinde hassas trigonometri ve astronomi hesapları.",
          },
          {
            id: "ulug-bey-ch1-s8",
            sceneNumber: 8,
            title: "Oğlum Ali Kuşçu'ya Emanet",
            narration:
              "Zîc-i Uluğ Bey tamamlandığında Uluğ Bey, en güvendiği öğrencisi ve 'evladım' diye sevdiği Ali Kuşçu'yu yanına çağırdı. Otuz yıllık emeğin ürünü olan bu paha biçilmez eserin bir nüshasını ona teslim etti. Ne olursa olsun bu bilimsel mirasın korunmasını ve bütün dünyadaki bilim insanlarına ulaştırılmasını vasiyet etti.\n\nAli Kuşçu hocasının bu emanetini canı gibi koruyarak Semerkand'dan İstanbul'a, Fatih Sultan Mehmed'in yanına getirdi. Oradan da kopyaları Avrupa'ya, Oxford ve Paris üniversitelerine kadar ulaşarak modern astronominin doğuşuna rehberlik etti.",
            text: "Zîc-i Uluğ Bey tamamlandığında Uluğ Bey, en güvendiği öğrencisi ve 'evladım' diye sevdiği Ali Kuşçu'yu yanına çağırdı. Otuz yıllık emeğin ürünü olan bu paha biçilmez eserin bir nüshasını ona teslim etti. Ne olursa olsun bu bilimsel mirasın korunmasını ve bütün dünyadaki bilim insanlarına ulaştırılmasını vasiyet etti.\n\nAli Kuşçu hocasının bu emanetini canı gibi koruyarak Semerkand'dan İstanbul'a, Fatih Sultan Mehmed'in yanına getirdi. Oradan da kopyaları Avrupa'ya, Oxford ve Paris üniversitelerine kadar ulaşarak modern astronominin doğuşuna rehberlik etti.",
            speaker: "Uluğ Bey",
            dialogue:
              "Ali'm, bu kitap otuz yıllık göz nurumuzdur. Onu koru ve ilmin ışığını taşıyabildiğin her diyara ulaştır!",
            historicalNote:
              "Bunu Biliyor muydun? Zîc-i Uluğ Bey 1665 yılında İngiltere'de Oxford Üniversitesi'nde Latinceye çevrilerek basılmış ve Avrupa'da başucu kitabı olmuştur.",
            imagePath: "assets/images/ali_kuscu_moon_map.png",
            imageKey: "assets/images/ali_kuscu_moon_map.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Ali Kuşçu ve Uluğ Bey'in astronomi haritaları.",
          },
          {
            id: "ulug-bey-ch1-s9",
            sceneNumber: 9,
            title: "Ay'daki Kraterde Yaşayan İsim",
            narration:
              "Uluğ Bey'in dediği gibi, krallıklar ve tahtlar tarihin sayfalarında geride kaldı; ancak onun Semerkand'da yaktığı bilim meşalesi hiç sönmedi. Bugün bile gökyüzüne bakan modern gökbilimciler, onun teleskopsuz yaptığı hesapların kusursuzluğu karşısında şapka çıkarıyorlar.\n\nDünya Astronomi Birliği, insanlığa yaptığı bu büyük katkıdan dolayı Ay'ın görünen yüzündeki Fırtınalar Okyanusu kıyısında bulunan büyük bir kratere 'Ulugh Beigh' (Uluğ Bey Krateri) adını verdi. Tahtını yıldızlara adayan bilge hükümdar, artık adını bizzat gökyüzüne yazdırmıştı.",
            text: "Uluğ Bey'in dediği gibi, krallıklar ve tahtlar tarihin sayfalarında geride kaldı; ancak onun Semerkand'da yaktığı bilim meşalesi hiç sönmedi. Bugün bile gökyüzüne bakan modern gökbilimciler, onun teleskopsuz yaptığı hesapların kusursuzluğu karşısında şapka çıkarıyorlar.\n\nDünya Astronomi Birliği, insanlığa yaptığı bu büyük katkıdan dolayı Ay'ın görünen yüzündeki Fırtınalar Okyanusu kıyısında bulunan büyük bir kratere 'Ulugh Beigh' (Uluğ Bey Krateri) adını verdi. Tahtını yıldızlara adayan bilge hükümdar, artık adını bizzat gökyüzüne yazdırmıştı.",
            speaker: "Uluğ Bey",
            dialogue:
              "Dinler sis gibi dağılır, krallıklar yıkılır; fakat bilginlerin çalışmaları sonsuza dek baki kalır!",
            historicalNote:
              "Bunu Biliyor muydun? Ay yüzeyindeki 54 kilometre çapındaki 'Ulugh Beigh' krateri, teleskopla Ay'ın kuzeybatı kenarında görülebilmektedir.",
            imagePath: "assets/images/artifact_qarawiyyin_astrolabe.png",
            imageKey: "assets/images/artifact_qarawiyyin_astrolabe.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Altın usturlap ve yıldız kataloğu mirası.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Bin yıllık eski astronomi kitaplarındaki yıldız konumlarının gökyüzüyle uyuşmadığını fark ettin, ancak küçük aletlerle hassas ölçüm yapılamıyor. Hükümdar olarak ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Eski bilginler bizden daha iyi bilir diyerek kitaplardaki hatalı sayıları olduğu gibi kabul ederim.",
              feedback:
                "Bilimde körü körüne taklit olmaz; gözlem ve deney her zaman esastır.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Yıldızları ölçmek çok uzun sürer diyerek araştırmayı yarıda bırakırım.",
              feedback:
                "Büyük bilimsel keşifler yıllar süren sabır ve azimle gerçekleşir.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Semerkand'da 40 metre yarıçaplı dev mermer sekstantlı rasathaneyi kurar, 1.018 yıldızı ve yılın uzunluğunu bizzat yeniden ölçerim!",
              feedback:
                "Tarihi Hakikat! Uluğ Bey bir yılın uzunluğunu 58 saniye farkla ölçerek bilim tarihine geçti!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Uluğ Bey Semerkand Rasathanesi'ni kurarak 1.018 yıldızın konumunu yeniden ölçtü ve Zîc-i Uluğ Bey kataloğunu hazırladı. Bir yılın uzunluğunu 365 gün 6 saat 10 dakika 8 saniye olarak hesaplayarak gerçek değere 1 dakikadan az farkla yaklaştı!",
          quoteHighlight:
            "Bilginlerin çalışmaları ve hakikatin ışığı sonsuza dek baki kalır!",
        },
        rewardArtifact: {
          id: "artifact-ulug-bey-zic",
          name: "Zîc-i Uluğ Bey Yıldız Kataloğu",
          heroId: "ulug-bey",
          chapterId: "ulug-bey-ch1",
          imagePath: "assets/images/ulug_bey_observatory.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik Puanı",
          points: 60,
          unlockedTitle: "Yıldızların Hükümdarı",
          shortDescription:
            "Teleskop icat edilmeden önce 1.018 yıldızın konumunu ve bir yılın süresini saniyeler farkla kaydeden astronomi şaheseri.",
          historicalNote:
            "Zîc-i Uluğ Bey, hem İslam dünyasında hem de Avrupa'da yüzyıllar boyunca en güvenilir astronomi cetveli olarak kullanılmıştır.",
          accentColor: "#0D9488",
          hotspots: [
            {
              id: "fakhri-sextant",
              xPercent: 48,
              yPercent: 52,
              title: "40 Metrelik Fahrî Sekstantı",
              secretFact:
                "Yerin 11 metre altına inen bu dev mermer yay sayesinde açı ölçümleri saniye hassasiyetiyle yapılabiliyordu.",
            },
            {
              id: "star-table",
              xPercent: 30,
              yPercent: 35,
              title: "1.018 Yıldızın Koordinatı",
              secretFact:
                "Her yıldızın konumu en az üç farklı astronom tarafından doğrulanarak cetvele işlenmiştir.",
            },
            {
              id: "year-calculation",
              xPercent: 70,
              yPercent: 40,
              title: "58 Saniyelik Mucize Ölçüm",
              secretFact:
                "Uluğ Bey bir yılın süresini modern uydu ölçümlerinden sadece 58 saniye farkla hesaplamayı başarmıştır.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Uluğ Bey bir hükümdar olduğu halde neden tahtında oturmak yerine medresede öğrencilere matematik dersi verdi?",
          "Teleskop olmadan 1.018 yıldızı tek tek ölçmek için nasıl bir sabır gerekir?",
          "Neden ölçüm aletini büyütmek hata payını azaltır?",
        ],
      },
    ],
  },

  // ==========================================================================
  // 17. KÂTİP ÇELEBİ (MERAK VE ANSİKLOPEDİ TÜRÜ) — 1 BÖLÜM
  // ==========================================================================
  {
    id: "katip-celebi",
    name: "Kâtip Çelebi",
    heroClass: "GIZEM_IZ_SURME",
    heroClassLabel: "Merak ve Ansiklopedi",
    classBadgeLabel: "Merak ve Ansiklopedi",
    title: "Mum Işığında 15.000 Kitabı İnceleyen Bilgin",
    era: "1609–1657 • İstanbul",
    location: "İstanbul",
    visualMode: "CHARACTER_PORTRAIT",
    accentColor: "#D97706",
    secondaryColor: "#0D9488",
    badgeText: "Merak ve Ansiklopedi • 1 Bölüm",
    summary:
      "Kendisinin kalan tüm mirası kitaplara yatıran, 15.000 kitabı tek tek inceleyerek Keşfü'z-Zünûn ansiklopedisini ve Cihannüma dünya atlasını yazan büyük bilgin.",
    shortBio:
      "Kendisinin kalan tüm mirası kitaplara yatıran, 15.000 kitabı tek tek inceleyerek Keşfü'z-Zünûn ansiklopedisini ve Cihannüma dünya atlasını yazan büyük bilgin.",
    coverImage: "assets/images/katip_celebi_books.png",
    crisisImage: "assets/images/piri_reis_s1_gallipoli_tower.png",
    images: {
      cover: "assets/images/katip_celebi_books.png",
      crisis: "assets/images/piri_reis_s1_gallipoli_tower.png",
      artifact: "assets/images/artifact_fatih_notebook.png",
    },
    chapters: [
      {
        id: "katip-celebi-ch1",
        heroId: "katip-celebi",
        chapterNumber: 1,
        title: "Mum Işığında Dünyayı Yazan Adam: Cihannüma",
        subtitle: "Miras kalan altınları saraya değil, binlerce kitaba yatıran merak",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "katip-celebi-ch1-s1",
            sceneNumber: 1,
            title: "Sefer Çadırlarında Kitap Okuyan Genç Kâtip",
            narration:
              "On yedinci yüzyıl İstanbul'unda doğan Mustafa —bilginler arasındaki adıyla Hacı Halife, halk arasındaki ünlü adıyla Kâtip Çelebi— çocukluğundan beri bitmek bilmeyen bir okuma tutkusuyla yanıp tutuşuyordu. Gençliğinde devletin hesap kaleminde kâtip olarak görev yaparken Anadolu ve Bağdat seferlerine katıldı; ancak diğer görevliler dinlenirken o çadırında mum yakıp gittiği şehirlerin kütüphanelerini araştırıyordu.\n\nÖzellikle Halep'te kaldığı sırada sahaflar çarşısındaki binlerce el yazması eseri görünce büyülenmiş gibi oldu. Dünyada ne kadar çok kitap yazıldığını ve bu kitapların kaybolup gitmemesi için hepsini tanıtan büyük bir rehbere ihtiyaç olduğunu ilk kez orada fark etti.",
            text: "On yedinci yüzyıl İstanbul'unda doğan Mustafa —bilginler arasındaki adıyla Hacı Halife, halk arasındaki ünlü adıyla Kâtip Çelebi— çocukluğundan beri bitmek bilmeyen bir okuma tutkusuyla yanıp tutuşuyordu. Gençliğinde devletin hesap kaleminde kâtip olarak görev yaparken Anadolu ve Bağdat seferlerine katıldı; ancak diğer görevliler dinlenirken o çadırında mum yakıp gittiği şehirlerin kütüphanelerini araştırıyordu.\n\nÖzellikle Halep'te kaldığı sırada sahaflar çarşısındaki binlerce el yazması eseri görünce büyülenmiş gibi oldu. Dünyada ne kadar çok kitap yazıldığını ve bu kitapların kaybolup gitmemesi için hepsini tanıtan büyük bir rehbere ihtiyaç olduğunu ilk kez orada fark etti.",
            speaker: "Genç Kâtip Çelebi",
            dialogue:
              "Gittiğim her şehirde önce sahafları ve kütüphaneleri ziyaret ediyorum; çünkü bir şehrin gerçek hazinesi kütüphanelerindeki satırlarda saklıdır!",
            historicalNote:
              "Bunu Biliyor muydun? Osmanlı bilim dünyasında Kâtip Çelebi'ye, kâtiplik mesleği ve engin bilgisinden dolayı 'Kâtip Çelebi' ve 'Hacı Halife' unvanları verilmiştir.",
            imagePath: "assets/images/katip_celebi_books.png",
            imageKey: "assets/images/katip_celebi_books.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Mum ışığında binlerce cilt kitap ve dünya küresi arasında çalışan Kâtip Çelebi.",
          },
          {
            id: "katip-celebi-ch1-s2",
            sceneNumber: 2,
            title: "Kalan Büyük Miras ve Sahaflar Çarşısı",
            narration:
              "İstanbul'a döndükten bir süre sonra vefat eden zengin bir akrabasından Kâtip Çelebi'ye hatırı sayılır büyüklükte bir altın mirası kaldı. Çevresindeki dostları ona Boğaz'da görkemli bir konak satın almasını, süslü atlar ve hizmetkârlar tutarak ömür boyu rahat yaşamasını tavsiye ettiler.\n\nKâtip Çelebi ise altın kesesini eline alır almaz doğruca Beyazıt'taki Sahaflar Çarşısı'na koştu! Mirasın neredeyse tamamıyla tarih, coğrafya, astronomi, tıp ve matematik alanında yazılmış yüzlerce nadir el yazması kitabı satın aldı; evini İstanbul'un en zengin araştırma kütüphanesine dönüştürdü.",
            text: "İstanbul'a döndükten bir süre sonra vefat eden zengin bir akrabasından Kâtip Çelebi'ye hatırı sayılır büyüklükte bir altın mirası kaldı. Çevresindeki dostları ona Boğaz'da görkemli bir konak satın almasını, süslü atlar ve hizmetkârlar tutarak ömür boyu rahat yaşamasını tavsiye ettiler.\n\nKâtip Çelebi ise altın kesesini eline alır almaz doğruca Beyazıt'taki Sahaflar Çarşısı'na koştu! Mirasın neredeyse tamamıyla tarih, coğrafya, astronomi, tıp ve matematik alanında yazılmış yüzlerce nadir el yazması kitabı satın aldı; evini İstanbul'un en zengin araştırma kütüphanesine dönüştürdü.",
            speaker: "Kâtip Çelebi",
            dialogue:
              "Konaklar eskir, süslü elbiseler yıpranır; ama bu altınlarla aldığım kitaplar hem benim aklımı hem de gelecek nesillerin yolunu aydınlatacak!",
            historicalNote:
              "Bunu Biliyor muydun? Kâtip Çelebi kendisine kalan mirasın üçte ikisinden fazlasını doğrudan kitap satın almaya harcayarak dönemin en büyük kişisel kütüphanelerinden birini kurmuştur.",
            imagePath: "assets/images/ali_s1_kufa_bazaar.png",
            imageKey: "assets/images/ali_s1_kufa_bazaar.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Kemerli çarşıda kitap ve el yazması dükkanları.",
          },
          {
            id: "katip-celebi-ch1-s3",
            sceneNumber: 3,
            title: "Güneş Doğana Kadar Yanmaya Devam Eden Mum",
            narration:
              "Kâtip Çelebi'nin çalışma azmi öylesine büyüktü ki, bazen akşam namazından sonra masasının başına oturuyor, mumun eriyip bittiğini bile fark etmeden sabah güneşinin ilk ışıkları penceresine vurana kadar okuyor ve notlar alıyordu. Önündeki rahlede bir kitabı bitirip ötekine geçiyor, her kitabın adını, yazarını, konusunu ve yazılış tarihini alfabetik fişlere kaydediyordu.\n\nYirmi yıl süren bu insanüstü gayretle tam 14.500 (on beş bine yakın) kitabı ve 10.000 yazarı tek tek inceleyerek 'Keşfü'z-Zünûn' adlı dev ansiklopediyi meydana getirdi. Bu eser sayesinde İslam medeniyetinde bin yıl boyunca yazılmış binlerce bilimsel eserin kaydı unutulmaktan kurtuldu.",
            text: "Kâtip Çelebi'nin çalışma azmi öylesine büyüktü ki, bazen akşam namazından sonra masasının başına oturuyor, mumun eriyip bittiğini bile fark etmeden sabah güneşinin ilk ışıkları penceresine vurana kadar okuyor ve notlar alıyordu. Önündeki rahlede bir kitabı bitirip ötekine geçiyor, her kitabın adını, yazarını, konusunu ve yazılış tarihini alfabetik fişlere kaydediyordu.\n\nYirmi yıl süren bu insanüstü gayretle tam 14.500 (on beş bine yakın) kitabı ve 10.000 yazarı tek tek inceleyerek 'Keşfü'z-Zünûn' adlı dev ansiklopediyi meydana getirdi. Bu eser sayesinde İslam medeniyetinde bin yıl boyunca yazılmış binlerce bilimsel eserin kaydı unutulmaktan kurtuldu.",
            speaker: "Kâtip Çelebi",
            dialogue:
              "Bir kitabı elime alıp içindekileri öğrenmeye başladığımda zamanın nasıl geçtiğini unutuyorum; sabah güneşi doğduğunda mumum çoktan erimiş oluyor!",
            historicalNote:
              "Bunu Biliyor muydun? Kâtip Çelebi'nin Keşfü'z-Zünûn eseri, 15.000'e yakın kitabı alfabetik sırayla tanıtan dünyanın en büyük bibliyografya ansiklopedilerinden biridir.",
            imagePath: "assets/images/ibn_sina_s1_bukhara_library.png",
            imageKey: "assets/images/ibn_sina_s1_bukhara_library.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Gece kütüphanede mum ışığında incelenen binlerce cilt eser.",
          },
          {
            id: "katip-celebi-ch1-s4",
            sceneNumber: 4,
            title: "Girit Seferi ve Harita Eksikliği",
            narration:
              "1645 yılında Girit Adası seferi başladığında, İstanbul'daki devlet adamları ve denizciler Akdeniz'deki adaların, kıyıların ve uzak ülkelerin güncel haritalarını bulmakta zorlandılar. Piri Reis'ten bu yana denizcilik ve dünya coğrafyası hızla değişmiş, yeni kıtalar ve okyanus rotaları keşfedilmişti.\n\nKâtip Çelebi, bir ülkenin dünyayı tanımadan güçlü kalamayacağını gördü. 'Oturduğu yerden haritaya bakarak bütün dünyayı gezen insan, tehlikeleri önceden görür!' diyerek dünyanın bütün kıtalarını, denizlerini, nehirlerini ve ülkelerini anlatan 'Cihannüma' (Dünyayı Gösteren Atlas) kitabını yazmaya başladı.",
            text: "1645 yılında Girit Adası seferi başladığında, İstanbul'daki devlet adamları ve denizciler Akdeniz'deki adaların, kıyıların ve uzak ülkelerin güncel haritalarını bulmakta zorlandılar. Piri Reis'ten bu yana denizcilik ve dünya coğrafyası hızla değişmiş, yeni kıtalar ve okyanus rotaları keşfedilmişti.\n\nKâtip Çelebi, bir ülkenin dünyayı tanımadan güçlü kalamayacağını gördü. 'Oturduğu yerden haritaya bakarak bütün dünyayı gezen insan, tehlikeleri önceden görür!' diyerek dünyanın bütün kıtalarını, denizlerini, nehirlerini ve ülkelerini anlatan 'Cihannüma' (Dünyayı Gösteren Atlas) kitabını ilk kez kaleme almaya başladı.",
            speaker: "Kâtip Çelebi",
            dialogue:
              "Coğrafya ve harita bilmeyen bir yönetici, kendi evinin odalarını bilmeyen bir ev sahibi gibidir!",
            historicalNote:
              "Bunu Biliyor muydun? 'Cihannüma' kelimesi 'Dünyayı gösteren ayna / Dünya Atlası' anlamına gelir ve Osmanlı coğrafyacılığında yeni bir çığır açmıştır.",
            imagePath: "assets/images/piri_reis_s1_gallipoli_tower.png",
            imageKey: "assets/images/piri_reis_s1_gallipoli_tower.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Mum ışığında çizilen deniz ve dünya haritaları.",
            midDecision: {
              title: "ARA KARAR: Eksik Bilgiyle Karşılaştığında Ne Yaparsın?",
              question:
                "Cihannüma dünya atlasını yazarken elindeki doğu kaynaklarında Amerika kıtası ve okyanus adaları hakkında yeterli harita olmadığını fark ettin. Ne yaparsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "O uzak kıtaları bilmesek de olur diyerek kitabı eksik bırakırım.",
                  feedback:
                    "Gerçek bir bilim insanı merakını yarım bırakmaz, eksik bilgiyi tamamlar.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Yabancı dillerdeki en yeni dünya atlaslarını da bulup tercüme ettirir, Doğu ve Batı bilgisini birleştirerek eksiksiz bir dünya atlası hazırlarım!",
                  feedback:
                    "Harika! Kâtip Çelebi Latince atlasları da inceleyerek Cihannüma'yı en güncel bilgilerle yeniden yazdı.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "katip-celebi-ch1-s5",
            sceneNumber: 5,
            title: "Doğu ve Batı Atlaslarını Birleştiren Vizyon",
            narration:
              "Kâtip Çelebi Cihannüma'nın ilk bölümünü yazarken, elindeki eski kitapların yeni keşfedilen okyanusları ve kıtaları tam göstermediğini fark etti. Ön yargıya kapılmadı; bilimin nerede olursa olsun alınıp incelenmesi gerektiğine inanıyordu. Latince bilen bilgin Şeyh Mehmed İhlâsî ile birlikte çalışarak Avrupa'da basılmış en yeni dünya atlaslarını (Atlas Minor) Türkçeye çevirdi.\n\nArdından Doğu'nun zengin coğrafya birikimiyle Batı'nın yeni okyanus haritalarını karşılaştırarak Cihannüma'yı baştan sona yeniden kaleme aldı. Kitabına Dünya'nın yuvarlaklığından pusulanın kullanımına, Japonya adalarından Amerika kıtasına kadar onlarca renkli harita ekledi.",
            text: "Kâtip Çelebi Cihannüma'nın ilk bölümünü yazarken, elindeki eski kitapların yeni keşfedilen okyanusları ve kıtaları tam göstermediğini fark etti. Ön yargıya kapılmadı; bilimin nerede olursa olsun alınıp incelenmesi gerektiğine inanıyordu. Latince bilen bilgin Şeyh Mehmed İhlâsî ile birlikte çalışarak Avrupa'da basılmış en yeni dünya atlaslarını (Atlas Minor) Türkçeye çevirdi.\n\nArdından Doğu'nun zengin coğrafya birikimiyle Batı'nın yeni okyanus haritalarını karşılaştırarak Cihannüma'yı baştan sona yeniden kaleme aldı. Kitabına Dünya'nın yuvarlaklığından pusulanın kullanımına, Japonya adalarından Amerika kıtasına kadar onlarca renkli harita ekledi.",
            speaker: "Kâtip Çelebi",
            dialogue:
              "Gerçek bilgin, bilgi hangi dilde veya hangi ülkede olursa olsun onu arayıp bulur ve kendi milletinin istifadesine sunar!",
            historicalNote:
              "Bunu Biliyor muydun? Cihannüma, daha sonra İbrahim Müteferrika tarafından kurulan ilk Türk matbaasında renkli haritalarıyla basılan en önemli eserlerden biri olmuştur.",
            imagePath: "assets/images/piri_reis_map.png",
            imageKey: "assets/images/piri_reis_map.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Pergel, rüzgâr gülleri ve kıtaları gösteren renkli dünya haritası.",
          },
          {
            id: "katip-celebi-ch1-s6",
            sceneNumber: 6,
            title: "İki Kanatlı Kuş: Din İlimleri ve Akıl İlimleri",
            narration:
              "O dönemde bazı kimseler medreselerde matematik, astronomi ve coğrafya derslerinin azaltılmasını savunuyor, 'Sadece temel dersler yeter' diyordu. Kâtip Çelebi bu yanlış düşünceye karşı çıktı ve öğrencilerine bilimin ayrılmaz bütünlüğünü kuş benzetmesiyle anlattı.\n\nBir kuşun gökyüzünde yükselmesi için nasıl iki kanada ihtiyacı varsa, bir medeniyetin yükselmesi için de hem ahlak ve maneviyat ilimlerine hem de matematik, fizik, tıp ve coğrafya gibi akıl ilimlerine aynı anda ihtiyacı olduğunu kanıtlarıyla ortaya koydu.",
            text: "O dönemde bazı kimseler medreselerde matematik, astronomi ve coğrafya derslerinin azaltılmasını savunuyor, 'Sadece temel dersler yeter' diyordu. Kâtip Çelebi bu yanlış düşünceye karşı çıktı ve öğrencilerine bilimin ayrılmaz bütünlüğünü kuş benzetmesiyle anlattı.\n\nBir kuşun gökyüzünde yükselmesi için nasıl iki kanada ihtiyacı varsa, bir medeniyetin yükselmesi için de hem ahlak ve maneviyat ilimlerine hem de matematik, fizik, tıp ve coğrafya gibi akıl ilimlerine aynı anda ihtiyacı olduğunu kanıtlarıyla ortaya koydu.",
            speaker: "Kâtip Çelebi",
            dialogue:
              "Geometri ve astronomi bilmeyen bir hakimin verdiği hükümde bile eksiklik olur; ilim iki kanatlı bir kuştur, tek kanatla uçulmaz!",
            historicalNote:
              "Bunu Biliyor muydun? Kâtip Çelebi son eseri 'Mîzânü'l-Hakk' (Gerçeğin Terazisi) kitabında, insanların hoşgörüyle ve akılla düşünmesi gerektiğini savunmuştur.",
            imagePath: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            imageKey: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Medrese avlusunda öğrencilere küre ve harita ile ders anlatımı.",
          },
          {
            id: "katip-celebi-ch1-s7",
            sceneNumber: 7,
            title: "Deniz Savaşları Tarihi: Tuhfetü'l-Kibâr",
            narration:
              "Kâtip Çelebi sadece masa başında kitap okumakla kalmıyor; tersaneye gidip gemi reisleriyle, tecrübeli kaptanlarla ve deniz ustalarıyla saatlerce sohbet ediyordu. Rüzgârların yönünü, kalyonların yelken sistemini ve Akdeniz'deki limanların derinliğini bizzat denizcilerin ağzından dinleyip not alıyordu.\n\nBu araştırmalarının sonunda Osmanlı denizcilik tarihini anlatan ünlü 'Tuhfetü'l-Kibâr' eserini yazdı. Kitabın sonunda denizlerde başarılı olmak için iyi harita kullanmanın, pusulaya güvenmenin ve gemi teknolojisini sürekli yenilemenin şart olduğunu maddeler halinde sıraladı.",
            text: "Kâtip Çelebi sadece masa başında kitap okumakla kalmıyor; tersaneye gidip gemi reisleriyle, tecrübeli kaptanlarla ve deniz ustalarıyla saatlerce sohbet ediyordu. Rüzgârların yönünü, kalyonların yelken sistemini ve Akdeniz'deki limanların derinliğini bizzat denizcilerin ağzından dinleyip not alıyordu.\n\nBu araştırmalarının sonunda Osmanlı denizcilik tarihini anlatan ünlü 'Tuhfetü'l-Kibâr' eserini yazdı. Kitabın sonunda denizlerde başarılı olmak için iyi harita kullanmanın, pusulaya güvenmenin ve gemi teknolojisini sürekli yenilemenin şart olduğunu maddeler halinde sıraladı.",
            speaker: "Tersane Kaptanı",
            dialogue:
              "Çelebi Efendi, denizde kırk yıl gezen reislerin bildiği bütün fırtına koylarını ve rüzgâr sırlarını tek bir kitapta toplamışsın!",
            historicalNote:
              "Bunu Biliyor muydun? Kâtip Çelebi kırk sekiz yıllık nispeten kısa ömrüne, her biri bir kütüphane değerinde 20'den fazla dev bilimsel eser sığdırmıştır.",
            imagePath: "assets/images/piri_reis_s2_mediterranean_cove.png",
            imageKey: "assets/images/piri_reis_s2_mediterranean_cove.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Turkuaz Akdeniz koyunda güvenli rotada ilerleyen yelkenli gemi.",
          },
          {
            id: "katip-celebi-ch1-s8",
            sceneNumber: 8,
            title: "Sabah Kahvesi ve Son Satırına Kadar Bilim",
            narration:
              "Kâtip Çelebi hayatının son gününe kadar elinden kamış kalemini ve mürekkep hokkasını hiç bırakmadı. Yine bir gece boyu Cihannüma'nın haritaları üzerinde çalıştıktan sonra sabah erkenden kalktı; yüzünü yıkayıp çalışma masasının üzerindeki açık sayfasına sevgiyle baktı.\n\nArdından masasında bıraktığı binlerce sayfalık ansiklopediler, sadece Osmanlı'nın değil, tüm dünyanın başvurduğu bir bilgi hazinesine dönüştü. Fransa'dan Almanya'ya kadar bütün doğubilimciler, İslam dünyasının bilimsel mirasını Kâtip Çelebi'nin yazdığı Keşfü'z-Zünûn kataloğundan öğrendiler.",
            text: "Kâtip Çelebi hayatının son gününe kadar elinden kamış kalemini ve mürekkep hokkasını hiç bırakmadı. Yine bir gece boyu Cihannüma'nın haritaları üzerinde çalıştıktan sonra sabah erkenden kalktı; yüzünü yıkayıp çalışma masasının üzerindeki açık sayfasına sevgiyle baktı.\n\nArdından masasında bıraktığı binlerce sayfalık ansiklopediler, sadece Osmanlı'nın değil, tüm dünyanın başvurduğu bir bilgi hazinesine dönüştü. Fransa'dan Almanya'ya kadar bütün doğubilimciler, İslam dünyasının bilimsel mirasını Kâtip Çelebi'nin yazdığı Keşfü'z-Zünûn kataloğundan öğrendiler.",
            speaker: "Kâtip Çelebi",
            dialogue:
              "İnsanın geride bırakabileceği en hayırlı miras, insanların zihnini açan ve doğru yolu gösteren faydalı bir kitaptır.",
            historicalNote:
              "Bunu Biliyor muydun? Kâtip Çelebi'nin kabri İstanbul Unkapanı'nda, Vefa semtine giden cadde üzerinde kendi adını taşıyan küçük ve huzurlu bir hazirededir.",
            imagePath: "assets/images/fatih_s2_red_notebook_plan.png",
            imageKey: "assets/images/fatih_s2_red_notebook_plan.png",
            atmosphereType: "NIGHT_LANTERN",
            visualNote: "Mum ışığında pergel ve harita defteri.",
          },
          {
            id: "katip-celebi-ch1-s9",
            sceneNumber: 9,
            title: "Bilgiyi Koruyan Ansiklopedi Muhafızı",
            narration:
              "Bugün bir kütüphaneye girdiğimizde veya internette bir bilgiyi saniyeler içinde alfabetik sırayla aradığımızda, aslında Kâtip Çelebi gibi öncülerin kurduğu bilgi sınıflandırma sistemini kullanıyoruz. O, tek başına bir akademi gibi çalışarak binlerce yıllık bilgiyi kaybolmaktan kurtardı.\n\nKâtip Çelebi'nin öyküsü bize merak etmenin, çok okumanın ve farklı kaynakları karşılaştırarak gerçeği aramanın insanı nasıl bir bilgelik kahramanına dönüştürdüğünü anlatmaya devam ediyor.",
            text: "Bugün bir kütüphaneye girdiğimizde veya internette bir bilgiyi saniyeler içinde alfabetik sırayla aradığımızda, aslında Kâtip Çelebi gibi öncülerin kurduğu bilgi sınıflandırma sistemini kullanıyoruz. O, tek başına bir akademi gibi çalışarak binlerce yıllık bilgiyi kaybolmaktan kurtardı.\n\nKâtip Çelebi'nin öyküsü bize merak etmenin, çok okumanın ve farklı kaynakları karşılaştırarak gerçeği aramanın insanı nasıl bir bilgelik kahramanına dönüştürdüğünü anlatmaya devam ediyor.",
            speaker: "Kâtip Çelebi",
            dialogue:
              "Merak ateşini kalbinde diri tutan bir çocuk, mum ışığında bile bütün dünyayı keşfedebilir!",
            historicalNote:
              "Bunu Biliyor muydun? UNESCO, Kâtip Çelebi'nin doğumunun 400. yılı olan 2009 yılını dünyada 'Kâtip Çelebi Yılı' olarak kutlamıştır.",
            imagePath: "assets/images/artifact_fatih_notebook.png",
            imageKey: "assets/images/artifact_fatih_notebook.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Altın pergel ve deri ciltli Cihannüma atlası.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Akrabandan sana büyük bir altın mirası kaldı. Aynı dönemde kütüphanelerdeki binlerce değerli bilimsel kitabın kaybolma tehlikesi var ve ülkende güncel bir dünya atlası eksik. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Altınlarla kendime büyük bir konak alır, kitap yazma ve araştırma işini başkalarına bırakırım.",
              feedback:
                "Konaklar zamanla yıkılır ama üretilen bilimsel eserler asırlarca insanlığa hizmet eder.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Sadece birkaç popüler kitabı okur, yabancı dillerdeki yeni haritaları incelemeye gerek duymam.",
              feedback:
                "Gerçek bilgin hem Doğu hem Batı kaynaklarını inceleyerek en doğru bilgiye ulaşır.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Mirasımı kitaplara yatırırım! Mum ışığında 15.000 kitabı tek tek inceleyip Keşfü'z-Zünûn ansiklopedisini ve Cihannüma dünya atlasını yazarım!",
              feedback:
                "Tarihi Hakikat! Kâtip Çelebi tüm servetini ve ömrünü bilime vakfederek tarihin en büyük ansiklopedi ve coğrafya bilginlerinden biri oldu!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Kâtip Çelebi kendisine kalan mirası kitaplara yatırarak 15.000 eseri tek tek inceledi ve Keşfü'z-Zünûn ansiklopedisini yazdı. Ayrıca Doğu ve Batı haritalarını birleştirerek ünlü Cihannüma dünya atlasını insanlığa armağan etti.",
          quoteHighlight:
            "İlim iki kanatlı bir kuştur; hem akıl hem ahlak kanadıyla gökyüzüne yükselir!",
        },
        rewardArtifact: {
          id: "artifact-katip-celebi-cihannuma",
          name: "Cihannüma Dünya Atlası ve Ansiklopedisi",
          heroId: "katip-celebi",
          chapterId: "katip-celebi-ch1",
          imagePath: "assets/images/katip_celebi_books.png",
          pointType: "BILGELIK",
          pointLabel: "Bilgelik Puanı",
          points: 55,
          unlockedTitle: "Cihan Bilgini",
          shortDescription:
            "Mum ışığında 15.000 kitabı inceleyen Kâtip Çelebi'nin kıtaları, denizleri ve bilimleri tanıtan ölümsüz başyapıtı.",
          historicalNote:
            "Cihannüma ve Keşfü'z-Zünûn, Osmanlı'dan Avrupa kütüphanelerine kadar en çok başvurulan temel kaynak eserler arasında yer almıştır.",
          accentColor: "#D97706",
          hotspots: [
            {
              id: "cihannuma-globe",
              xPercent: 68,
              yPercent: 48,
              title: "Cihannüma Yer Küresi",
              secretFact:
                "Kâtip Çelebi Cihannüma'nın başında Dünya'nın yuvarlaklığını astronomik kanıtlarla açıklamıştır.",
            },
            {
              id: "kesfuz-zunun-stacks",
              xPercent: 25,
              yPercent: 42,
              title: "15.000 Kitaplık Fihrist",
              secretFact:
                "Keşfü'z-Zünûn'da 14.500 kitap ve 10.000 yazar alfabetik sırayla tek tek tanıtılmıştır.",
            },
            {
              id: "morning-candle",
              xPercent: 48,
              yPercent: 32,
              title: "Sabaha Kadar Yanan Mum",
              secretFact:
                "Kâtip Çelebi okuma heyecanıyla çoğu gece güneş doğana kadar mumunun eridiğini bile fark etmezdi.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Kâtip Çelebi kendisine kalan büyük mirası neden süslü eşyalara değil de kitaplara yatırdı?",
          "15.000 kitabı tek tek inceleyip not almak için nasıl bir düzen ve sabır gerekir?",
          "Kâtip Çelebi'nin 'iki kanatlı kuş' benzetmesi bize hangi dersleri birlikte öğrenmemiz gerektiğini anlatıyor?",
        ],
      },
    ],
  },

  // ==========================================================================
  // 18. ŞEYH HAMDULLAH & HAFIZ OSMAN (SANAT VE ESTETİK TÜRÜ) — 1 BÖLÜM
  // ==========================================================================
  {
    id: "seyh-hamdullah",
    name: "Şeyh Hamdullah & Hafız Osman",
    heroClass: "SANAT_ESTETIK",
    heroClassLabel: "Sanat ve Estetik",
    classBadgeLabel: "Sanat ve Estetik",
    title: "Kamış Kalemin Ucunda Sabrı Sanata Dönüştüren Ustalar",
    era: "15.–17. Yüzyıl • Amasya / İstanbul",
    location: "Amasya ve İstanbul",
    visualMode: "CHARACTER_PORTRAIT",
    accentColor: "#F59E0B",
    secondaryColor: "#10B981",
    badgeText: "Sanat ve Estetik • 1 Bölüm",
    summary:
      "Bir harfin en kusursuz altın oranını bulmak için aylarca çalışan, Padişah II. Bayezid'in saygıyla hokkasını tuttuğu büyük hat sanatı ustaları.",
    shortBio:
      "Bir harfin en kusursuz altın oranını bulmak için aylarca çalışan, Padişah II. Bayezid'in saygıyla hokkasını tuttuğu büyük hat sanatı ustaları.",
    coverImage: "assets/images/seyh_hamdullah_calligraphy.png",
    crisisImage: "assets/images/seyh_hamdullah_calligraphy.png",
    images: {
      cover: "assets/images/seyh_hamdullah_calligraphy.png",
      crisis: "assets/images/seyh_hamdullah_calligraphy.png",
      artifact: "assets/images/artifact_mimar_sinan_cube.png",
    },
    chapters: [
      {
        id: "seyh-hamdullah-ch1",
        heroId: "seyh-hamdullah",
        chapterNumber: 1,
        title: "Kamış Kalemin Ucundaki Sabır ve Altın Hokka",
        subtitle: "Padişahın hocasına hokka tuttuğu sanat ve edep zirvesi",
        estimatedMinutes: 8,
        visualMode: "CHARACTER_PORTRAIT",
        scenes: [
          {
            id: "seyh-hamdullah-ch1-s1",
            sceneNumber: 1,
            title: "Amasya'da Yeşilırmak Kıyısındaki Kalem Atölyesi",
            narration:
              "On beşinci yüzyılda, Yeşilırmak'ın sularının şırıl şırıl aktığı Amasya şehrinde Hamdullah adında genç ve sabırlı bir sanatkâr yetişiyordu. Hamdullah, kağıt üzerine düşen her bir harfin sadece bir ses işareti değil, aynı zamanda göze ve ruha huzur veren bir sanat eseri olması gerektiğine inanıyordu. Kuru kamışları özel bir kalemtıraşla yontuyor, ucunu milimetrik bir eğimle keserek yazıya hazırlıyordu.\n\nAmasya'da valilik yapan Şehzade Bayezid (II. Bayezid), Şeyh Hamdullah'ın bu eşsiz yeteneğine ve vakur ahlakına hayran kalmıştı. Şehzade, boş vakitlerinde sarayda dinlenmek yerine hocası Şeyh Hamdullah'ın dizinin dibine oturup ondan güzel yazı (hüsn-i hat) dersleri alıyordu.",
            text: "On beşinci yüzyılda, Yeşilırmak'ın sularının şırıl şırıl aktığı Amasya şehrinde Hamdullah adında genç ve sabırlı bir sanatkâr yetişiyordu. Hamdullah, kağıt üzerine düşen her bir harfin sadece bir ses işareti değil, aynı zamanda göze ve ruha huzur veren bir sanat eseri olması gerektiğine inanıyordu. Kuru kamışları özel bir kalemtıraşla yontuyor, ucunu milimetrik bir eğimle keserek yazıya hazırlıyordu.\n\nAmasya'da valilik yapan Şehzade Bayezid (II. Bayezid), Şeyh Hamdullah'ın bu eşsiz yeteneğine ve vakur ahlakına hayran kalmıştı. Şehzade, boş vakitlerinde sarayda dinlenmek yerine hocası Şeyh Hamdullah'ın dizinin dibine oturup ondan güzel yazı (hüsn-i hat) dersleri alıyordu.",
            speaker: "Şeyh Hamdullah",
            dialogue:
              "Kamış kalemin ucu sabırla açılır; elin titrememesi için önce kalbinin huzur ve edeple dolması gerekir.",
            historicalNote:
              "Bunu Biliyor muydun? İslam medeniyetinde güzel yazı sanatına 'Hüsn-i Hat' (Güzel Çizgi), bu sanatı icra eden ustalara ise 'Hattat' adı verilir.",
            imagePath: "assets/images/seyh_hamdullah_calligraphy.png",
            imageKey: "assets/images/seyh_hamdullah_calligraphy.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Boğaz'a bakan köşkte kamış kalemle yazı yazan Şeyh Hamdullah ve hokka tutan Sultan II. Bayezid.",
          },
          {
            id: "seyh-hamdullah-ch1-s2",
            sceneNumber: 2,
            title: "Süleymaniye Kubbelerinden Toplanan İs Mürekkebi",
            narration:
              "Güzel bir yazı için sadece usta bir el yetmezdi; yüzyıllarca solmayacak doğal bir mürekkep ve pürüzsüz bir kağıt da şarttı. Hattatlar mürekkeplerini beziryağı ve balmumu kandillerinden çıkan incecik siyah is kurumunu, zamk-ı arabî, gülsuyu ve safranla taş havanlarda günlerce döverek hazırlarlardı! Bu doğal mürekkep kağıda sürüldüğünde hem mis gibi gül kokar hem de beş yüz yıl geçse bile ilk günkü gibi parlak kalırdı.\n\nKağıtlar ise kalemin ucuna takılmasın diye üzerine yumurta akı ve nişasta sürülerek (aharlama) akik taşıyla cilalanır, ardından en az bir yıl dinlendirilirdi. Bir tek sayfa yazı yazmak için bile aylarca süren bir emek ve doğa bilimi bir araya geliyordu.",
            text: "Güzel bir yazı için sadece usta bir el yetmezdi; yüzyıllarca solmayacak doğal bir mürekkep ve pürüzsüz bir kağıt da şarttı. Hattatlar mürekkeplerini beziryağı ve balmumu kandillerinden çıkan incecik siyah is kurumunu, zamk-ı arabî, gülsuyu ve safranla taş havanlarda günlerce döverek hazırlarlardı! Bu doğal mürekkep kağıda sürüldüğünde hem mis gibi gül kokar hem de beş yüz yıl geçse bile ilk günkü gibi parlak kalırdı.\n\nKağıtlar ise kalemin ucuna takılmasın diye üzerine yumurta akı ve nişasta sürülerek (aharlama) akik taşıyla cilalanır, ardından en az bir yıl dinlendirilirdi. Bir tek sayfa yazı yazmak için bile aylarca süren bir emek ve doğa bilimi bir araya geliyordu.",
            speaker: "Genç Çırak",
            dialogue:
              "Ustam, kandil isini gülsuyuyla tam otuz bin kez havanda dövdük; mürekkep siyah inci gibi parlamaya başladı!",
            historicalNote:
              "Bunu Biliyor muydun? Mimar Sinan, Süleymaniye Camii'ndeki kandillerin isini özel bir hava akımıyla tek bir 'İs Odası'nda toplatmış ve bu islerden dünyanın en kaliteli hat mürekkebi üretilmiştir!",
            imagePath: "assets/images/sinan_s2_ostrich_eggs.png",
            imageKey: "assets/images/sinan_s2_ostrich_eggs.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Kandiller ve altın avizeler arasındaki doğal denge.",
          },
          {
            id: "seyh-hamdullah-ch1-s3",
            sceneNumber: 3,
            title: "Harflerin Geometrisi ve Nokta Ölçüsü",
            narration:
              "Şehzade Bayezid tahta çıkıp Osmanlı Padişahı olduğunda, çok sevdiği hocası Şeyh Hamdullah'ı İstanbul'a davet etti. Bir gün saray kütüphanesindeki en eski hat yazılarını hocasının önüne koyarak, 'Hocam, biz kendi ruhumuzu ve estetiğimizi yansıtan, okuması çok daha ferah ve zarif yeni bir yazı üslubu kuramaz mıyız?' diye sordu.\n\nŞeyh Hamdullah bu hedefe ulaşmak için dört ay boyunca sessiz bir odada (inzivada) çalıştı. Kamış kalemin kağıda bıraktığı tek bir 'nokta'yı ölçü birimi kabul etti! Elif harfinin boyunun kaç nokta olacağını, B harfinin çanağının hangi açıyla döneceğini adeta bir mimar ve matematikçi gibi yeniden hesapladı.",
            text: "Şehzade Bayezid tahta çıkıp Osmanlı Padişahı olduğunda, çok sevdiği hocası Şeyh Hamdullah'ı İstanbul'a davet etti. Bir gün saray kütüphanesindeki en eski hat yazılarını hocasının önüne koyarak, 'Hocam, biz kendi ruhumuzu ve estetiğimizi yansıtan, okuması çok daha ferah ve zarif yeni bir yazı üslubu kuramaz mıyız?' diye sordu.\n\nŞeyh Hamdullah bu hedefe ulaşmak için dört ay boyunca sessiz bir odada (inzivada) çalıştı. Kamış kalemin kağıda bıraktığı tek bir 'nokta'yı ölçü birimi kabul etti! Elif harfinin boyunun kaç nokta olacağını, B harfinin çanağının hangi açıyla döneceğini adeta bir mimar ve matematikçi gibi yeniden hesapladı.",
            speaker: "Şeyh Hamdullah",
            dialogue:
              "Her harfin içinde gizli bir geometri ve altın oran vardır; kalemin bıraktığı tek bir nokta bizim terazi ölçümüzdür!",
            historicalNote:
              "Bunu Biliyor muydun? Hat sanatında cetvel kullanılmaz; harflerin boyu ve genişliği, kullanılan kamış kalemin ucuyla konulan 'nokta' sayısıyla ölçülür.",
            imagePath: "assets/images/ibn_sina_s2_canon_of_medicine.png",
            imageKey: "assets/images/ibn_sina_s2_canon_of_medicine.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Güneşli çalışma masasında el yazması sayfalar ve hokka.",
          },
          {
            id: "seyh-hamdullah-ch1-s4",
            sceneNumber: 4,
            title: "Bin Kez Yazılan Tek Bir Harf: Meşk Sabrı",
            narration:
              "Atölyeye yeni başlayan sabırsız bir çırak, sadece bir hafta çalıştıktan sonra hemen büyük bir levha yazmak istedi. Ancak çizdiği harflerin kimi sağa yatıyor, kimi sola devriliyor, mürekkep kağıda dağılıyordu. Çırak üzülerek kalemini masaya bıraktı ve 'Ben bu işi asla başaramayacağım!' dedi.\n\nŞeyh Hamdullah tebessüm ederek kendi çalışma sandığını açtı ve çırağa binlerce sayfalık karalama (meşk) kağıtlarını gösterdi. Kendisinin bile tek bir 'Vav' veya 'Elif' harfinin en zarif kıvrımını bulmak için aynı harfi binlerce kez usanmadan yazdığını, gerçek ustalığın yetenekten çok sabırla kazanıldığını anlattı.",
            text: "Atölyeye yeni başlayan sabırsız bir çırak, sadece bir hafta çalıştıktan sonra hemen büyük bir levha yazmak istedi. Ancak çizdiği harflerin kimi sağa yatıyor, kimi sola devriliyor, mürekkep kağıda dağılıyordu. Çırak üzülerek kalemini masaya bıraktı ve 'Ben bu işi asla başaramayacağım!' dedi.\n\nŞeyh Hamdullah tebessüm ederek kendi çalışma sandığını açtı ve çırağa binlerce sayfalık karalama (meşk) kağıtlarını gösterdi. Kendisinin bile tek bir 'Vav' veya 'Elif' harfinin en zarif kıvrımını bulmak için aynı harfi binlerce kez usanmadan yazdığını, gerçek ustalığın yetenekten çok sabırla kazanıldığını anlattı.",
            speaker: "Şeyh Hamdullah",
            dialogue:
              "Evladım, yazı aceleyi sevmez! Bugün eğri çıkan çizgi, yarın sabırla tekrar ettiğinde kuğu boynu gibi zarifleşir.",
            historicalNote:
              "Bunu Biliyor muydun? Hattatlar yazıya başlamadan önce el ve göz terbiyesi için aylarca sadece 'Rabbi yessir' (Rabbim kolaylaştır, zorlaştırma) duasını meşk ederlerdi.",
            imagePath: "assets/images/cezeri_s1_artuklu_palace.png",
            imageKey: "assets/images/cezeri_s1_artuklu_palace.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Güneş ışığı alan taş kemerli sanat ve zanaat atölyesi.",
            midDecision: {
              title: "ARA KARAR: İlk Denemede Başaramadığında Ne Yaparsın?",
              question:
                "Yeni bir sanat, spor veya yazı öğrenirken ilk denemelerinde çizgilerin istediğin gibi düzgün olmadı. Nasıl davranırsın?",
              options: [
                {
                  id: "A",
                  label: "Seçenek A",
                  text: "Benim yeteneğim yok diyerek kalemi fırlatır ve hemen pes ederim.",
                  feedback:
                    "Hiçbir usta ilk denemede kusursuz eser çıkaramaz; pes etmek gelişimi durdurur.",
                  isBestChoice: false,
                },
                {
                  id: "B",
                  label: "Seçenek B",
                  text: "Derin bir nefes alır, hocamın gösterdiği ölçüye dikkat ederek her gün sabırla tekrar (meşk) yaparım!",
                  feedback:
                    "Harika! Şeyh Hamdullah ve Hafız Osman sabırlı meşk çalışmalarıyla tarihin en büyük ustaları oldular.",
                  isBestChoice: true,
                },
              ],
            },
          },
          {
            id: "seyh-hamdullah-ch1-s5",
            sceneNumber: 5,
            title: "Sarayda Kıskançlık ve Padişahın Hokka Dersi",
            narration:
              "Padişah II. Bayezid, hocası Şeyh Hamdullah'a o kadar büyük bir saygı gösteriyordu ki, alimlerin ve vezirlerin toplandığı meclislerde onu en başköşeye, kendi yanına oturtuyordu. Saraydaki bazı kimseler bu durumu kıskandılar ve 'Hünkârım, bir yazı ustasına vezirlerden bile fazla değer veriyorsunuz!' diyerek dedikodu yaptılar.\n\nBunun üzerine Sultan II. Bayezid bütün devlet erkânını Topkapı Sarayı'nın bahçesindeki köşke topladı. Şeyh Hamdullah'tan bir sahife yazı yazmasını rica etti. Şeyh Hamdullah kamış kalemini eline aldığında, koskoca Cihan Padişahı II. Bayezid diz çöktü, hocasının arkasına yastık koydu ve yazı bitene kadar mürekkep hokkasını bizzat kendi elleriyle tuttu!",
            text: "Padişah II. Bayezid, hocası Şeyh Hamdullah'a o kadar büyük bir saygı gösteriyordu ki, alimlerin ve vezirlerin toplandığı meclislerde onu en başköşeye, kendi yanına oturtuyordu. Saraydaki bazı kimseler bu durumu kıskandılar ve 'Hünkârım, bir yazı ustasına vezirlerden bile fazla değer veriyorsunuz!' diyerek dedikodu yaptılar.\n\nBunun üzerine Sultan II. Bayezid bütün devlet erkânını Topkapı Sarayı'nın bahçesindeki köşke topladı. Şeyh Hamdullah'tan bir sahife yazı yazmasını rica etti. Şeyh Hamdullah kamış kalemini eline aldığında, koskoca Cihan Padişahı II. Bayezid diz çöktü, hocasının arkasına yastık koydu ve yazı bitene kadar mürekkep hokkasını bizzat kendi elleriyle tuttu!",
            speaker: "Sultan II. Bayezid",
            dialogue:
              "Şeyh Hamdullah benim hocamdır ve sanatın zirvesidir! Hocaya ve sanata hizmet etmek padişahın şerefini azaltmaz, yüceltir!",
            historicalNote:
              "Bunu Biliyor muydun? Sultan II. Bayezid'in hocası Şeyh Hamdullah'a eliyle hokka tutması, tarihte öğretmene ve sanata verilen değerin en ünlü sembollerinden biridir.",
            imagePath: "assets/images/fatih_kadi_court.png",
            imageKey: "assets/images/fatih_kadi_court.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Osmanlı divanında ilme, adalete ve hocaya gösterilen hürmet.",
          },
          {
            id: "seyh-hamdullah-ch1-s6",
            sceneNumber: 6,
            title: "Boğaz'ı Yüzerek Geçen Okçu ve Sanatkâr",
            narration:
              "Şeyh Hamdullah sadece masa başında oturan bir hattat değildi! El ve kol kaslarının titrememesi, nefesinin güçlü ve dengeli olması için her gün spor yapıyordu. O, aynı zamanda İstanbul'un en usta okçularından ve yüzücülerinden biriydi; Üsküdar'dan Sarayburnu'na kadar Boğaz'ın serin sularını yüzerek geçecek kadar zindeydi.\n\nSeksen yaşını geçtiğinde bile gençliğinde olduğu gibi incecik kamış kalemi eline alıyor, tek bir büyüteç kullanmadan pirinç tanesi kadar küçük ve kusursuz harfler yazabiliyordu. Sağlıklı bir beden ile berrak bir zihnin birbirini tamamladığını öğrencilerine bizzat yaşayarak gösteriyordu.",
            text: "Şeyh Hamdullah sadece masa başında oturan bir hattat değildi! El ve kol kaslarının titrememesi, nefesinin güçlü ve dengeli olması için her gün spor yapıyordu. O, aynı zamanda İstanbul'un en usta okçularından ve yüzücülerinden biriydi; Üsküdar'dan Sarayburnu'na kadar Boğaz'ın serin sularını yüzerek geçecek kadar zindeydi.\n\nSeksen yaşını geçtiğinde bile gençliğinde olduğu gibi incecik kamış kalemi eline alıyor, tek bir büyüteç kullanmadan pirinç tanesi kadar küçük ve kusursuz harfler yazabiliyordu. Sağlıklı bir beden ile berrak bir zihnin birbirini tamamladığını öğrencilerine bizzat yaşayarak gösteriyordu.",
            speaker: "Şeyh Hamdullah",
            dialogue:
              "Sağlam bir nefes ve titremeyen bir bilek için bedenimizi de zinde tutmalıyız; spor yapan sanatkârın çizgisi güçlü olur!",
            historicalNote:
              "Bunu Biliyor muydun? İstanbul Okmeydanı'nda Şeyh Hamdullah'ın rekor kırdığı ok atışlarının mesafesini gösteren tarihi bir 'menzil taşı' bulunmaktadır!",
            imagePath: "assets/images/hezarfen_s2_uskudar_landing.png",
            imageKey: "assets/images/hezarfen_s2_uskudar_landing.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Üsküdar kıyısından İstanbul Boğazı'nın mavi suları.",
          },
          {
            id: "seyh-hamdullah-ch1-s7",
            sceneNumber: 7,
            title: "Bayrağı Devralan Deha: Hafız Osman",
            narration:
              "Şeyh Hamdullah'tan yüz elli yıl sonra İstanbul'da Hafız Osman adında bir başka büyük hat dehası yetişti. Hafız Osman, Şeyh Hamdullah'ın yazılarını gece gündüz inceleyerek harflerdeki fazlalıkları daha da sadeleştirdi ve göze en doğal gelen 'Hafız Osman Üslubu'nu ortaya çıkardı.\n\nOnun başarısının sırrı sadece yeteneği değil, aynı zamanda eşsiz merhameti ve dürüstlüğüydü. Haftanın bir gününü yalnızca yoksul çocuklara hiçbir ücret almadan ders vermeye ayırır; zengin-fakir ayrımı yapmadan her öğrencisinin kalemini aynı şefkatle açardı.",
            text: "Şeyh Hamdullah'tan yüz elli yıl sonra İstanbul'da Hafız Osman adında bir başka büyük hat dehası yetişti. Hafız Osman, Şeyh Hamdullah'ın yazılarını gece gündüz inceleyerek harflerdeki fazlalıkları daha da sadeleştirdi ve göze en doğal gelen 'Hafız Osman Üslubu'nu ortaya çıkardı.\n\nOnun başarısının sırrı sadece yeteneği değil, aynı zamanda eşsiz merhameti ve dürüstlüğüydü. Haftanın bir gününü yalnızca yoksul çocuklara hiçbir ücret almadan ders vermeye ayırır; zengin-fakir ayrımı yapmadan her öğrencisinin kalemini aynı şefkatle açardı.",
            speaker: "Hafız Osman",
            dialogue:
              "Sanat sadece zengin konakları için değildir; kalemi tutmaya hevesli her çocuğun bu güzelliği öğrenmeye hakkı vardır!",
            historicalNote:
              "Bunu Biliyor muydun? Hafız Osman, İslam sanat tarihinde Peygamber Efendimizin (s.a.v.) güzel ahlakını ve özelliklerini anlatan 'Hilye-i Şerîf' levha tasarımını ilk kez başlatan ustadır.",
            imagePath: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            imageKey: "assets/images/ali_kuscu_s2_ayasofya_madrasa.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "Medrese avlusunda genç öğrencilere şefkatle ders veren usta.",
          },
          {
            id: "seyh-hamdullah-ch1-s8",
            sceneNumber: 8,
            title: "Kayıkçıya Verilen Tek Satırlık Hediye",
            narration:
              "Bir gün Hafız Osman, Beşiktaş'tan Üsküdar'a geçmek için bir pazar kayığına bindi. Kayıktan inerken cebini yokladı ve o gün yanına para kesesini almayı unuttuğunu fark etti! Mahcup bir şekilde kayıkçıya, 'Kardeşim, yanımda akçem yok ama sana şu kağıda bir satır yazı yazıp vereyim, sahaflara götürürsen karşılığını verirler' dedi.\n\nKayıkçı o tek satırlık 'Besmele' yazısını çarşıdaki bir sanatseverin yanına götürdüğünde, yazının Hafız Osman'ın elinden çıktığını gören sahaf kayıkçıya tam bir aylık kazancı kadar altın ödedi! Çünkü gerçek emek ve ustalıkla yapılan bir sanat eseri, altından bile daha kıymetliydi.",
            text: "Bir gün Hafız Osman, Beşiktaş'tan Üsküdar'a geçmek için bir pazar kayığına bindi. Kayıktan inerken cebini yokladı ve o gün yanına para kesesini almayı unuttuğunu fark etti! Mahcup bir şekilde kayıkçıya, 'Kardeşim, yanımda akçem yok ama sana şu kağıda bir satır yazı yazıp vereyim, sahaflara götürürsen karşılığını verirler' dedi.\n\nKayıkçı o tek satırlık 'Besmele' yazısını çarşıdaki bir sanatseverin yanına götürdüğünde, yazının Hafız Osman'ın elinden çıktığını gören sahaf kayıkçıya tam bir aylık kazancı kadar altın ödedi! Çünkü gerçek emek ve ustalıkla yapılan bir sanat eseri, altından bile daha kıymetliydi.",
            speaker: "Boğaz Kayıkçısı",
            dialogue:
              "Sübhanallah! Kamış kalemin ucundan çıkan tek bir satır yazı, bir kayık dolusu yükten daha değerliymiş!",
            historicalNote:
              "Bunu Biliyor muydun? Ünlü ressam Pablo Picasso bile İslam hat sanatındaki çizgi ustalığını gördüğünde 'Modern resmin ulaşmak istediği soyut güzelliğe İslam hattatları yüzyıllar önce ulaşmış!' demiştir.",
            imagePath: "assets/images/fatih_s1_golden_horn_chain.png",
            imageKey: "assets/images/fatih_s1_golden_horn_chain.png",
            atmosphereType: "COURTYARD_SUNLIGHT",
            visualNote: "İstanbul Boğazı ve Haliç sularında süzülen tekneler.",
          },
          {
            id: "seyh-hamdullah-ch1-s9",
            sceneNumber: 9,
            title: "Asırlar Boyu Solmayan Güzellik Mirası",
            narration:
              "Şeyh Hamdullah ve Hafız Osman'ın kamış kalemlerinden süzülen o zarif harfler; cami kubbelerini, kütüphane raflarını ve çeşme kitabelerini birer mücevher gibi süsledi. Onlar bize güzelliğin aceleyle değil, sabırla, ölçüyle ve öğretmene duyulan saygıyla doğduğunu öğrettiler.\n\nBugün kendi defterimize bir başlık atarken veya bir resim çizerken gösterdiğimiz özen, aslında bu büyük ustaların bıraktığı estetik mirasın bir devamıdır. Kalemini sabırla ve sevgiyle tutan her el, dünyaya yeni bir güzellik izi bırakır.",
            text: "Şeyh Hamdullah ve Hafız Osman'ın kamış kalemlerinden süzülen o zarif harfler; cami kubbelerini, kütüphane raflarını ve çeşme kitabelerini birer mücevher gibi süsledi. Onlar bize güzelliğin aceleyle değil, sabırla, ölçüyle ve öğretmene duyulan saygıyla doğduğunu öğrettiler.\n\nBugün kendi defterimize bir başlık atarken veya bir resim çizerken gösterdiğimiz özen, aslında bu büyük ustaların bıraktığı estetik mirasın bir devamıdır. Kalemini sabırla ve sevgiyle tutan her el, dünyaya yeni bir güzellik izi bırakır.",
            speaker: "Şeyh Hamdullah",
            dialogue:
              "Güzel yazı, aklın ve sabrın kağıt üzerindeki geometrisidir; kaleminizi her zaman doğruluk ve güzellik için kullanın!",
            historicalNote:
              "Bunu Biliyor muydun? Hüsn-i Hat sanatı, 2021 yılında UNESCO İnsanlığın Somut Olmayan Kültürel Mirası Listesi'ne Türkiye adına kaydedilmiştir.",
            imagePath: "assets/images/artifact_mimar_sinan_cube.png",
            imageKey: "assets/images/artifact_mimar_sinan_cube.png",
            atmosphereType: "PALACE_WORKSHOP",
            visualNote: "Kubbeleri ve kitabeleri süsleyen estetik sanat mirası.",
          },
        ],
        destinyMoment: {
          title: "KADER ANI: Sen Olsan Ne Yapardın?",
          question:
            "Bir hükümdar olarak çok sevdiğin öğretmenin ve büyük sanat ustası Şeyh Hamdullah sarayda yazı yazarken bazıları 'Bir öğretmene neden bu kadar fazla saygı gösteriyorsunuz?' diye söylendi. Ne yaparsın?",
          options: [
            {
              id: "A",
              label: "Seçenek A",
              text: "Dedikodu yapanların sözüne uyup hocamı meclisin arka sırasına oturturum.",
              feedback:
                "Öğretmene ve sanata saygıyı azaltmak, bilginin değerini düşürür.",
              isHistoricalTruth: false,
            },
            {
              id: "B",
              label: "Seçenek B",
              text: "Hocama uzaktan selam verir, hokkasını tutması için bir hizmetkâr çağırırım.",
              feedback:
                "Hizmetkâr çağırmak sıradan bir davranıştır; oysa II. Bayezid herkese unutulmaz bir saygı dersi vermek istedi.",
              isHistoricalTruth: false,
            },
            {
              id: "C",
              label: "Seçenek C",
              text: "Bütün vezirlerin önünde diz çöker, hocam Şeyh Hamdullah yazısını bitirene kadar mürekkep hokkasını bizzat kendi ellerimle tutarım!",
              feedback:
                "Tarihi Hakikat! Padişah II. Bayezid hocası Şeyh Hamdullah'ın hokkasını eliyle tutarak ilme ve sanata en yüksek saygıyı gösterdi!",
              isHistoricalTruth: true,
            },
          ],
          historicalTruthExplanation:
            "Padişah II. Bayezid, hocası Şeyh Hamdullah'ı kıskananlara ders vermek için herkesin huzurunda hocasının yanına diz çöktü ve o yazı yazarken mürekkep hokkasını bizzat kendi elleriyle tuttu. Şeyh Hamdullah ve ardından gelen Hafız Osman, sabır ve ölçüyle hat sanatını zirveye taşıdılar.",
          quoteHighlight:
            "Hocaya, ilme ve sanata hizmet etmek padişahın şerefini azaltmaz, bilakis yüceltir!",
        },
        rewardArtifact: {
          id: "artifact-seyh-hamdullah-hokka",
          name: "Altın Hokka ve Kamış Kalem Takımı",
          heroId: "seyh-hamdullah",
          chapterId: "seyh-hamdullah-ch1",
          imagePath: "assets/images/seyh_hamdullah_calligraphy.png",
          pointType: "IHSAN_MEDENIYET",
          pointLabel: "İhsan ve Medeniyet Puanı",
          points: 55,
          unlockedTitle: "Kalem ve Sabır Ustası",
          shortDescription:
            "Padişah II. Bayezid'in hocası Şeyh Hamdullah'a saygıyla tuttuğu hokka ve altın oranlı kamış kalem takımı.",
          historicalNote:
            "Hattatların kalem ve hokka kutularına 'Divit', hokkanın içine mürekkebin dökülmemesi için konulan ham ipek lifine ise 'Lika' adı verilirdi.",
          accentColor: "#F59E0B",
          hotspots: [
            {
              id: "golden-inkwell",
              xPercent: 58,
              yPercent: 55,
              title: "Padişahın Tuttuğu Hokka",
              secretFact:
                "Hokkanın içindeki 'lika' adı verilen ham ipek yumağı, kamış kalemin ucuna her batırılışta tam kararında mürekkep gelmesini sağlardı.",
            },
            {
              id: "reed-pen",
              xPercent: 42,
              yPercent: 48,
              title: "Eğimli Kamış Kalem",
              secretFact:
                "Kamış kalemin ucu özel bir açıyla kesilir ve ortasına mürekkebin akması için 'şak' adı verilen incecik bir yarık açılırdı.",
            },
            {
              id: "ahar-paper",
              xPercent: 46,
              yPercent: 68,
              title: "Aharlı ve Cilalı Kağıt",
              secretFact:
                "Kağıtlar yumurta akı ve nişasta ile kaplanıp akik taşıyla parlatıldığı için kalem kağıt üzerinde yağ gibi kayardı.",
            },
          ],
        },
        familyDiscussionQuestions: [
          "Padişah II. Bayezid neden hocası yazı yazarken mürekkep hokkasını kendi elleriyle tuttu?",
          "Şeyh Hamdullah ve Hafız Osman tek bir harfi güzelleştirmek için neden binlerce kez tekrar (meşk) yaptılar?",
          "Süleymaniye Camii'ndeki kandillerin isinden mürekkep üretilmesi bize geri dönüşüm ve doğa bilimi hakkında ne gösterir?",
        ],
      },
    ],
  },
];
