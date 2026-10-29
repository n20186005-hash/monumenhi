import type { Lang } from "./site-content";

export interface TopicSection {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  eyebrow: string;
  title: string;
  lead: string;
  updated: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: string[];
}

export interface TopicDef {
  id: string;
  slug: { id: string; en: string };
  group: string;
  content: { id: TopicContent; en: TopicContent };
}

export const TOPIC_GROUPS: Record<string, { id: string; en: string }> = {
  monument: { id: "Monumen & Bundaran HI", en: "Monument & Bundaran HI" },
  plan: { id: "Rencanakan Kunjungan", en: "Plan a Visit" },
  around: { id: "Sekitar & Rute", en: "Nearby & Routes" },
};

export const TOPICS: TopicDef[] = [
  {
    id: "foto",
    slug: { id: "foto-monumen-selamat-datang", en: "photos" },
    group: "monument",
    content: {
      id: {
        eyebrow: "01 · Melihat & Memotret",
        title: "Foto Monumen Selamat Datang & Tempat Melihatnya",
        lead: "Patung perunggu ini berdiri di tengah lalu lintas Bundaran HI. Anda dapat melihat dan memotretnya dari area pedestrian di sekitar bundaran, bukan dari pulau lalu lintasnya.",
        updated: "Diperbarui 28 Oktober 2026",
        sections: [
          {
            heading: "Dari mana monumen paling baik terlihat?",
            body: [
              "Monumen Selamat Datang berada pada pulau lalu lintas di tengah Bundaran HI, sehingga tidak ada jalur pejalan kaki yang mengelilingi patungnya secara langsung. Posisi terbaik adalah dari trotoar di tepi bundaran: sisi Jalan M.H. Thamrin dan sisi sekitar Hotel Indonesia.",
              "Gunakan patung sebagai subjek dari jarak menengah ke jauh. Beberapa sudut pandang berada di dekat halte, jembatan penyeberangan, atau lantai atas bangunan di sekitarnya — tetapi setiap sudut pandang harus dikonfirmasi sendiri, karena akses dan fasilitas dapat berubah.",
            ],
            bullets: [
              "Trotoar tepi Bundaran HI (sisi Thamrin) — posisi standar, aman di pedestrian.",
              "Area sekitar Hotel Indonesia — latar belakang bangunan bersejarah.",
              "Dek atau lantai atas di sekitar bundaran — konfirmasi akses dan syaratnya.",
            ],
          },
          {
            heading: "Waktu memotret yang umum",
            body: [
              "Cahaya pagi memberi kontras lembut pada patung dan langit; senja hingga malam menampilkan siluet dengan lampu jalan dan lalu lintas. Waktu terbaik bergantung cuaca dan langit hari itu, bukan jadwal tetap yang kami tentukan.",
              "Hindari menyeberang lajur kendaraan hanya untuk mendekati patung. Pilih posisi yang diizinkan dan jangan menghalangi pejalan kaki lain.",
            ],
          },
          {
            heading: "Catatan keaslian foto",
            body: [
              "Panduan ini menggunakan foto dokumentasi dengan sumber dan lisensi yang dicantumkan (CC BY-SA 4.0 dari Wikimedia Commons), bukan foto yang kami ambil hari ini. Foto tersebut menunjukkan kondisi pada tahun yang dicatat, bukan keadaan langsung saat Anda datang.",
              "Jangan menganggap sebuah foto lama atau postingan daring mewakili akses saat ini ke pulau bundaran atau dasar patung.",
            ],
          },
        ],
        faqs: [
          {
            q: "Bisakah saya masuk ke pulau bundaran tempat patung berdiri?",
            a: "Kami tidak memverifikasi akses masuk ke pulau lalu lintas atau ke dasar patung. Amati dari area pedestrian yang diizinkan dan ikuti rambu serta petugas.",
          },
          {
            q: "Kapan waktu terbaik memotret Monumen Selamat Datang?",
            a: "Pagi hari untuk cahaya lembut, senja hingga malam untuk siluet dan lampu kota. Pilih berdasarkan cuaca dan kondisi hari itu; tidak ada jadwal resmi yang kami tetapkan.",
          },
          {
            q: "Apakah foto di situs ini foto langsung lokasi?",
            a: "Tidak. Foto yang ditampilkan adalah dokumentasi dari sumber terbuka dengan lisensi CC BY-SA 4.0, berasal dari tahun yang dicatat, dan bukan kondisi saat ini.",
          },
          {
            q: "Di mana saya melihat posisi patung di peta?",
            a: "Gunakan pin lokasi untuk orientasi landmark. Pin adalah penanda posisi, bukan pintu masuk pengunjung.",
          },
        ],
        related: ["apa-itu-bundaran-hi", "pejalan-kaki", "panduan"],
      },
      en: {
        eyebrow: "01 · Viewing & Photography",
        title: "Selamat Datang Monument Photos & Where to View It",
        lead: "The bronze statue stands on the traffic island of Bundaran HI. You can see and photograph it from the pedestrian areas around the roundabout, not from the island itself.",
        updated: "Updated 28 October 2026",
        sections: [
          {
            heading: "Where is the monument best seen?",
            body: [
              "Monumen Selamat Datang stands on the traffic island at the centre of Bundaran HI, so there is no pedestrian path that circles the statue directly. The best positions are from the sidewalks at the edge of the roundabout: the Jalan M.H. Thamrin side and the area around Hotel Indonesia.",
              "Use the statue as a subject from a medium to long distance. Some vantage points sit near a bus stop, a crossing, or an upper floor of a nearby building — but each viewpoint must be confirmed individually, because access and facilities can change.",
            ],
            bullets: [
              "Sidewalk at the edge of Bundaran HI (Thamrin side) — standard, safe on foot.",
              "Area around Hotel Indonesia — historic building as backdrop.",
              "Deck or upper floor near the roundabout — confirm access and terms.",
            ],
          },
          {
            heading: "Common times for photography",
            body: [
              "Morning light gives the statue and sky a soft contrast; dusk to night shows a silhouette against streetlights and traffic. The best time depends on the weather and sky that day, not a fixed schedule we set.",
              "Do not cross vehicle lanes just to approach the statue. Choose a permitted position and avoid blocking other pedestrians.",
            ],
          },
          {
            heading: "A note on photo authenticity",
            body: [
              "This guide uses documentation photos with the source and licence stated (CC BY-SA 4.0 from Wikimedia Commons), not photos we took today. Those photos show conditions in the year recorded, not the present state when you arrive.",
              "Do not assume an older photo or an online post represents current access to the roundabout island or the statue base.",
            ],
          },
        ],
        faqs: [
          {
            q: "Can I enter the roundabout island where the statue stands?",
            a: "We have not verified entry to the traffic island or the statue base. Observe from permitted pedestrian areas and follow signs and staff.",
          },
          {
            q: "When is the best time to photograph the monument?",
            a: "Morning for soft light, dusk to night for the silhouette and city lights. Choose based on weather and that day’s conditions; there is no official schedule we set.",
          },
          {
            q: "Are the photos on this site live location shots?",
            a: "No. The photos shown are documentation from open sources under CC BY-SA 4.0, from the year recorded, and not the current condition.",
          },
          {
            q: "Where do I see the statue’s position on a map?",
            a: "Use the location pin for landmark orientation. The pin marks the position, not a visitor entrance.",
          },
        ],
        related: ["apa-itu-bundaran-hi", "pejalan-kaki", "panduan"],
      },
    },
  },
  {
    id: "sejarah",
    slug: { id: "sejarah-monumen-selamat-datang", en: "history" },
    group: "monument",
    content: {
      id: {
        eyebrow: "02 · Sejarah",
        title: "Sejarah Monumen Selamat Datang",
        lead: "Galeri Nasional Indonesia mencatat karya perunggu ini sebagai karya tahun 1962, dibuat untuk menyambut tamu Asian Games IV di Jakarta.",
        updated: "Diperbarui 28 Oktober 2026",
        sections: [
          {
            heading: "Latar 1962 dan Asian Games IV",
            body: [
              "Monumen Selamat Datang dibuat dalam rangka penyelenggaraan Asian Games IV tahun 1962 di Jakarta. Tema penyambutan tamu dituangkan dalam bentuk sepasang figur yang memegang karangan bunga dan memberi sikap menyambut.",
              "Sumber sejarah yang kami rujuk adalah Galeri Nasional Indonesia, yang mencatat karya ini dengan tahun 1962 dan konteks Asian Games.",
            ],
          },
          {
            heading: "Peran perancang dan pematung",
            body: [
              "Berdasarkan catatan Galeri Nasional, sketsa atau rancangan dibuat oleh Henk Ngantung, sementara pelaksanaan patung dilakukan oleh Edhi Sunarso bersama tim Pematung Keluarga Arca Yogyakarta.",
              "Penting untuk membedakan peran: rancangan (sketsa) dan eksekusi (pematungan) adalah tahapan berbeda dari satu karya yang sama. Kami merujuk ke sumber tersebut dan tidak menambahkan detail produksi yang tidak tertulis di situ.",
            ],
          },
          {
            heading: "Lokasi dan makna hari ini",
            body: [
              "Karya ini berada di Bundaran Hotel Indonesia pada koridor Jalan M.H. Thamrin, Jakarta Pusat. Hari ini ia berfungsi sebagai penanda kawasan sekaligus latar fotografi dan orientasi bagi pengunjung Bundaran HI.",
              "Untuk penjelasan simbolis patung, lihat halaman tersendiri tentang makna patung; untuk hubungan bundaran dan hotel, lihat halaman apa itu Bundaran HI.",
            ],
          },
        ],
        faqs: [
          {
            q: "Kapan Monumen Selamat Datang dibuat?",
            a: "Galeri Nasional Indonesia mencatatnya sebagai karya tahun 1962, untuk menyambut tamu Asian Games IV di Jakarta.",
          },
          {
            q: "Siapa yang merancang dan membuat patungnya?",
            a: "Sketsa/rancangan oleh Henk Ngantung; pelaksanaan patung oleh Edhi Sunarso dan tim Pematung Keluarga Arca Yogyakarta, menurut catatan Galeri Nasional.",
          },
          {
            q: "Apakah monumen ini terkait Asian Games?",
            a: "Ya, karya ini dibuat untuk konteks Asian Games IV 1962 di Jakarta sebagai simbol penyambutan tamu.",
          },
          {
            q: "Di mana sumber sejarahnya?",
            a: "Kami merujuk Galeri Nasional Indonesia untuk karya, seniman, dan konteks 1962. Lihat bagian sumber di bawah dan di beranda.",
          },
        ],
        related: ["makna-patung", "apa-itu-bundaran-hi", "panduan"],
      },
      en: {
        eyebrow: "02 · History",
        title: "History of the Selamat Datang Monument",
        lead: "The National Gallery of Indonesia records this bronze work as a 1962 piece, made to welcome guests to the fourth Asian Games in Jakarta.",
        updated: "Updated 28 October 2026",
        sections: [
          {
            heading: "The 1962 background and Asian Games IV",
            body: [
              "Monumen Selamat Datang was made for the fourth Asian Games held in Jakarta in 1962. The welcoming of guests is expressed through a pair of figures holding a floral arrangement in a greeting gesture.",
              "The historical source we cite is the National Gallery of Indonesia, which records the work as dated 1962 with the Asian Games context.",
            ],
          },
          {
            heading: "Roles of designer and sculptors",
            body: [
              "According to the National Gallery’s record, the sketch or design was made by Henk Ngantung, while the sculpture was executed by Edhi Sunarso with the Pematung Keluarga Arca Yogyakarta team.",
              "It helps to separate the roles: the design (sketch) and the execution (sculpting) are different stages of the same work. We cite that source and do not add production details not written there.",
            ],
          },
          {
            heading: "Location and meaning today",
            body: [
              "The work stands at the Hotel Indonesia roundabout on the Jalan M.H. Thamrin corridor in Central Jakarta. Today it serves as a district landmark and as a photo and orientation backdrop for visitors to Bundaran HI.",
              "For the symbolic reading of the statue, see the separate page on its meaning; for the roundabout and hotel relationship, see the page on what Bundaran HI is.",
            ],
          },
        ],
        faqs: [
          {
            q: "When was the Selamat Datang Monument made?",
            a: "The National Gallery of Indonesia records it as a 1962 work, made to welcome guests to the fourth Asian Games in Jakarta.",
          },
          {
            q: "Who designed and made the statue?",
            a: "Sketch/design by Henk Ngantung; sculpture executed by Edhi Sunarso with the Pematung Keluarga Arca Yogyakarta team, per the National Gallery’s record.",
          },
          {
            q: "Is the monument linked to the Asian Games?",
            a: "Yes, the work was made in the context of Asian Games IV 1962 in Jakarta as a symbol of welcoming guests.",
          },
          {
            q: "Where is the historical source?",
            a: "We cite the National Gallery of Indonesia for the work, artists, and 1962 context. See the sources section below and on the home page.",
          },
        ],
        related: ["makna-patung", "apa-itu-bundaran-hi", "panduan"],
      },
    },
  },
  {
    id: "apa-itu-bundaran-hi",
    slug: { id: "apa-itu-bundaran-hi", en: "what-is-bundaran-hi" },
    group: "monument",
    content: {
      id: {
        eyebrow: "03 · Mengenal Kawasan",
        title: "Apa Itu Bundaran HI?",
        lead: "Bundaran HI adalah bundaran lalu lintas di persimpangan Jalan M.H. Thamrin, Jakarta Pusat. Nama HI merujuk pada Hotel Indonesia, dan di tengahnya berdiri Monumen Selamat Datang.",
        updated: "Diperbarui 28 Oktober 2026",
        sections: [
          {
            heading: "Bundaran, bukan gedung",
            body: [
              "Istilah Bundaran HI merujuk pada bundaran (rotunda) lalu lintas, bukan pada satu gedung tertentu. Di tengah bundaran itulah Monumen Selamat Datang berdiri, di atas pulau lalu lintas yang memisahkan patung dari trotoar sekitarnya.",
              "Karena itu, menyebut 'Bundaran HI' dan 'Monumen Selamat Datang' sering tumpang tindih dalam percakapan, padahal keduanya adalah bagian dari satu kawasan yang sama.",
            ],
          },
          {
            heading: "Hotel Indonesia dan koridor Thamrin",
            body: [
              "Nama HI berasal dari Hotel Indonesia, salah satu hotel bersejarah di tepi bundaran. Koridor Jalan M.H. Thamrin menghubungkan kawasan ini ke arah selatan (Sarinah, Monas) dan utara (Ancol, pantai Jakarta).",
              "Kawasan ini juga menjadi titik temu transportasi: stasiun MRT, halte Transjakarta, dan jaringan pejalan kaki menuju pusat perbelanjaan di sekitarnya.",
            ],
          },
          {
            heading: "Cara membacanya sebagai pengunjung",
            body: [
              "Anggaplah Bundaran HI sebagai 'pusat putaran' dan Monumen Selamat Datang sebagai objek di tengahnya. Untuk melihat patung, Anda berdiri di tepi bundaran — bukan di pulau tengahnya.",
              "Halaman panduan kunjungan menjelaskan langkah praktis; halaman akses pejalan kaki merinci trotoar dan penyeberangan yang diizinkan.",
            ],
          },
        ],
        faqs: [
          {
            q: "Apa bedanya Bundaran HI dan Monumen Selamat Datang?",
            a: "Bundaran HI adalah bundaran lalu lintas; Monumen Selamat Datang adalah patung yang berdiri di tengah bundaran tersebut.",
          },
          {
            q: "Mengapa disebut 'HI'?",
            a: "HI merujuk pada Hotel Indonesia, hotel bersejarah di tepi bundaran yang memberi nama kawasan ini.",
          },
          {
            q: "Apakah saya bisa masuk ke tengah bundaran?",
            a: "Tengah bundaran adalah pulau lalu lintas. Kami tidak memverifikasi akses masuk ke sana; amati patung dari trotoar di tepi bundaran.",
          },
          {
            q: "Bundaran HI dekat dengan mana saja?",
            a: "Dekat koridor Thamrin, Hotel Indonesia, Grand Indonesia, Plaza Indonesia, dan terhubung ke Sarinah serta Monas melalui jaringan jalan dan transportasi.",
          },
        ],
        related: ["foto", "panduan", "mrt", "grand-indonesia", "plaza-indonesia", "sarinah"],
      },
      en: {
        eyebrow: "03 · The District",
        title: "What Is Bundaran HI?",
        lead: "Bundaran HI is a traffic roundabout at the Jalan M.H. Thamrin intersection in Central Jakarta. 'HI' refers to Hotel Indonesia, and at its centre stands the Selamat Datang Monument.",
        updated: "Updated 28 October 2026",
        sections: [
          {
            heading: "A roundabout, not a building",
            body: [
              "The term Bundaran HI refers to the traffic roundabout, not to a specific building. It is at the centre of this roundabout that the Selamat Datang Monument stands, on a traffic island that separates the statue from the surrounding sidewalks.",
              "So 'Bundaran HI' and 'Monumen Selamat Datang' often overlap in conversation, yet they are parts of the same district.",
            ],
          },
          {
            heading: "Hotel Indonesia and the Thamrin corridor",
            body: [
              "The 'HI' comes from Hotel Indonesia, a historic hotel at the edge of the roundabout. The Jalan M.H. Thamrin corridor links this area southbound (Sarinah, Monas) and northbound (Ancol, Jakarta’s coast).",
              "The district is also a transport meeting point: the MRT station, the Transjakarta stop, and the pedestrian network toward the shopping centres nearby.",
            ],
          },
          {
            heading: "How to read it as a visitor",
            body: [
              "Think of Bundaran HI as the 'centre of the turn' and the Selamat Datang Monument as the object at its middle. To see the statue, you stand at the edge of the roundabout — not on its central island.",
              "The visit guide explains practical steps; the pedestrian-access page details the permitted sidewalks and crossings.",
            ],
          },
        ],
        faqs: [
          {
            q: "What is the difference between Bundaran HI and the Selamat Datang Monument?",
            a: "Bundaran HI is the traffic roundabout; the Selamat Datang Monument is the statue standing at the centre of that roundabout.",
          },
          {
            q: "Why is it called 'HI'?",
            a: "HI refers to Hotel Indonesia, the historic hotel at the edge of the roundabout that gives the district its name.",
          },
          {
            q: "Can I enter the centre of the roundabout?",
            a: "The centre is a traffic island. We have not verified entry there; observe the statue from the sidewalks at the roundabout’s edge.",
          },
          {
            q: "What is Bundaran HI near?",
            a: "Near the Thamrin corridor, Hotel Indonesia, Grand Indonesia, Plaza Indonesia, and connected to Sarinah and Monas via the road and transport network.",
          },
        ],
        related: ["foto", "panduan", "mrt", "grand-indonesia", "plaza-indonesia", "sarinah"],
      },
    },
  },
  {
    id: "panduan",
    slug: { id: "panduan-berkunjung", en: "visit-guide" },
    group: "plan",
    content: {
      id: {
        eyebrow: "04 · Rencanakan",
        title: "Panduan Berkunjung ke Bundaran HI",
        lead: "Datang dengan tujuan sederhana: lihat monumen dari tepi bundaran, lalu pilih makan, belanja, atau rute sejarah sesuai waktu dan minat Anda.",
        updated: "Diperbarui 28 Oktober 2026",
        sections: [
          {
            heading: "Apa yang akan Anda lihat",
            body: [
              "Monumen Selamat Datang adalah patung perunggu di tengah Bundaran HI. Anda melihatnya dari area pedestrian di tepi bundaran; pulau lalu lintas tempat patung berdiri tidak kami verifikasi sebagai jalur pejalan kaki.",
              "Gunakan halaman foto untuk sudut pandang yang diizinkan, dan halaman apa itu Bundaran HI untuk memahami hubungan monumen, bundaran, dan Hotel Indonesia.",
            ],
          },
          {
            heading: "Bagaimana mencapai kawasan",
            body: [
              "Bundaran HI berada di pusat jaringan jalan dan transportasi Jakarta. Opsi utama: stasiun MRT Bundaran HI Bank Jakarta, halte Transjakarta Bundaran HI ASTRA, serta jaringan pejalan kaki menuju pusat perbelanjaan di sekitarnya.",
              "Rute terbaik bergantung titik keberangkatan, waktu, dan kondisi lalu lintas hari itu. Periksa rute, jam, dan pintu yang terbuka dengan operator serta petugas.",
            ],
          },
          {
            heading: "Kapan dan berapa lama",
            body: [
              "Kami tidak menetapkan durasi kunjungan atau jam operasional. Pilih waktu berdasarkan cuaca, pencahayaan, dan kondisi lalu lintas hari itu.",
              "Untuk perbandingan pagi, siang, dan senja, serta rencana saat hujan, lihat halaman waktu terbaik dan halaman kunjungan saat hujan.",
            ],
          },
          {
            heading: "Batas yang perlu diingat",
            body: [
              "Jangan menyeberang lajur kendaraan menuju pulau bundaran, kolam, atau dasar patung. Ikuti rambu, penyeberangan resmi, dan arahan petugas.",
              "Tidak ada tarif atau jaminan akses gratis yang kami verifikasi. Moda transportasi dan tempat pandang tertentu memiliki aturan masing-masing; konfirmasi langsung dengan operator.",
            ],
          },
        ],
        faqs: [
          {
            q: "Apakah Bundaran HI gratis dan buka 24 jam?",
            a: "Tidak ada jam operasional atau jaminan gratis yang kami verifikasi. Patung berada di ruang publik terbuka, tetapi akses tempat pandang dan transportasi punya ketentuan sendiri.",
          },
          {
            q: "Berapa lama waktu yang diperlukan?",
            a: "Kami tidak menetapkan durasi. Kunjungan singkat bisa satu jam; setengah hari jika digabung dengan pusat perbelanjaan atau Sarinah. Lihat rencana rute setengah hari.",
          },
          {
            q: "Apakah saya butuh tiket?",
            a: "Kami tidak memverifikasi tiket masuk untuk melihat monumen dari tepi bundaran. Beberapa dek atau gedung di sekitar mungkin punya aturan sendiri yang perlu dicek.",
          },
          {
            q: "Kapan sebaiknya datang?",
            a: "Pagi untuk cahaya lembut, senja untuk siluet. Sesuaikan dengan cuaca dan lalu lintas hari itu; tidak ada jadwal resmi yang kami tetapkan.",
          },
        ],
        related: ["mrt", "pejalan-kaki", "foto", "itinerary", "sarinah", "grand-indonesia", "plaza-indonesia", "kunjungan-saat-hujan"],
      },
      en: {
        eyebrow: "04 · Plan",
        title: "Visit Guide to Bundaran HI",
        lead: "Arrive with a simple aim: view the monument from the roundabout’s edge, then choose dining, shopping, or a history route that fits your time and interests.",
        updated: "Updated 28 October 2026",
        sections: [
          {
            heading: "What you will see",
            body: [
              "The Selamat Datang Monument is a bronze statue at the centre of Bundaran HI. You view it from pedestrian areas at the roundabout’s edge; the traffic island where the statue stands is not verified by us as a pedestrian route.",
              "Use the photos page for permitted vantage points, and the what-is-Bundaran-HI page to understand the monument, roundabout, and Hotel Indonesia relationship.",
            ],
          },
          {
            heading: "How to reach the district",
            body: [
              "Bundaran HI sits at the centre of Jakarta’s road and transport network. Main options: the Bundaran HI Bank Jakarta MRT station, the Bundaran HI ASTRA Transjakarta stop, and the pedestrian network toward the shopping centres nearby.",
              "The best route depends on your starting point, the time, and that day’s traffic. Check routes, hours, and open entrances with the operator and staff.",
            ],
          },
          {
            heading: "When and how long",
            body: [
              "We do not set a visit duration or operating hours. Choose a time based on weather, light, and that day’s traffic conditions.",
              "For a morning, midday, and dusk comparison, and a rainy-day plan, see the best-time page and the visiting-in-rain page.",
            ],
          },
          {
            heading: "Limits to keep in mind",
            body: [
              "Do not cross vehicle lanes toward the roundabout island, pool, or statue base. Follow signs, official crossings, and staff directions.",
              "No current tariff or free-access guarantee has been verified. Transport and individual viewpoints have separate rules; confirm directly with the operator.",
            ],
          },
        ],
        faqs: [
          {
            q: "Is Bundaran HI free and open 24 hours?",
            a: "No operating schedule or free-access guarantee has been verified. The statue is in open public space, but viewpoints and transport have their own terms.",
          },
          {
            q: "How long does a visit take?",
            a: "We do not set a duration. A short visit can be one hour; a half day if combined with a shopping centre or Sarinah. See the half-day route plan.",
          },
          {
            q: "Do I need a ticket?",
            a: "We have not verified an entry ticket for viewing the monument from the roundabout edge. Some nearby decks or buildings may have their own rules to check.",
          },
          {
            q: "When should I come?",
            a: "Morning for soft light, dusk for the silhouette. Match it to the weather and traffic that day; there is no official schedule we set.",
          },
        ],
        related: ["mrt", "pejalan-kaki", "foto", "itinerary", "sarinah", "grand-indonesia", "plaza-indonesia", "kunjungan-saat-hujan"],
      },
    },
  },
  {
    id: "mrt",
    slug: { id: "mrt-ke-bundaran-hi", en: "mrt-to-bundaran-hi" },
    group: "plan",
    content: {
      id: {
        eyebrow: "05 · Transportasi",
        title: "Naik MRT ke Bundaran HI",
        lead: "Materi resmi MRT Jakarta menggunakan nama stasiun Bundaran HI Bank Jakarta. Periksa rute, jam layanan, dan pintu yang sedang dibuka melalui operator serta petugas.",
        updated: "Diperbarui 28 Oktober 2026",
        sections: [
          {
            heading: "Nama dan posisi stasiun",
            body: [
              "Berdasarkan materi resmi MRT Jakarta, stasiun di kawasan ini bernama Bundaran HI Bank Jakarta. Nama ini penting saat memeriksa peta rute, jadwal, atau petunjuk arah di aplikasi resmi.",
              "Stasiun berada di tepi Bundaran HI, sehingga menjadi titik awal berjalan kaki menuju monumen dan pusat perbelanjaan di sekitarnya.",
            ],
          },
          {
            heading: "Dari stasiun ke monumen",
            body: [
              "Setelah keluar, Anda berada di tepi Bundaran HI. Monumen Selamat Datang terlihat dari area pedestrian di sekitar bundaran; Anda tidak perlu memasuki pulau lalu lintasnya.",
              "Untuk rute pejalan kaki yang diizinkan dan penyeberangan, lihat halaman akses pejalan kaki. Waktu tempuh berjalan bergantung pintu keluar yang digunakan.",
            ],
          },
          {
            heading: "Koneksi ke pusat perbelanjaan",
            body: [
              "Dari area Bundaran HI terdapat jalur pejalan kaki yang menghubungkan ke pusat perbelanjaan di sekitarnya. Informasi resmi Jakarta tourism menyebutkan sambungan pejalan kaki bawah tanah dari stasiun Bundaran HI MRT menuju Grand Indonesia.",
              "Status pintu, jalur, dan fasilitas dapat berubah; periksa dengan operator dan petugas pada hari kunjungan Anda.",
            ],
          },
          {
            heading: "Yang perlu dikonfirmasi",
            body: [
              "Kami tidak menetapkan waktu berjalan tetap atau jaminan semua akses dapat digunakan. Periksa rute, jam layanan, dan pintu yang terbuka dengan MRT Jakarta sebelum berangkat.",
            ],
            bullets: [
              "Nama stasiun resmi: Bundaran HI Bank Jakarta.",
              "Pintu keluar yang terbuka bisa berbeda tiap hari.",
              "Koneksi pejalan kaki ke mal: konfirmasi statusnya.",
            ],
          },
        ],
        faqs: [
          {
            q: "Stasiun MRT terdekat Bundaran HI namanya apa?",
            a: "Materi resmi MRT Jakarta menggunakan nama Bundaran HI Bank Jakarta.",
          },
          {
            q: "Berapa lama jalan dari stasiun ke monumen?",
            a: "Waktu tempuh bergantung pintu keluar yang digunakan; kami tidak menetapkan angka tetap. Monumen terlihat dari tepi bundaran setelah Anda keluar stasiun.",
          },
          {
            q: "Apakah ada jalur pejalan kaki ke Grand Indonesia?",
            a: "Informasi resmi menyebutkan sambungan pejalan kaki bawah tanah dari stasiun Bundaran HI MRT ke Grand Indonesia. Konfirmasi status jalur tersebut saat kunjungan.",
          },
          {
            q: "Apakah semua pintu stasiun bisa dipakai?",
            a: "Kami tidak menjamin semua akses tersedia. Periksa pintu yang sedang dibuka dengan operator dan petugas.",
          },
        ],
        related: ["pejalan-kaki", "panduan", "restoran", "grand-indonesia", "plaza-indonesia"],
      },
      en: {
        eyebrow: "05 · Transport",
        title: "Taking the MRT to Bundaran HI",
        lead: "Official MRT Jakarta material uses the station name Bundaran HI Bank Jakarta. Check routes, service hours, and open entrances with the operator and staff.",
        updated: "Updated 28 October 2026",
        sections: [
          {
            heading: "Station name and position",
            body: [
              "Per official MRT Jakarta material, the station in this district is named Bundaran HI Bank Jakarta. This name matters when checking route maps, schedules, or directions in the official app.",
              "The station sits at the edge of Bundaran HI, making it a starting point on foot toward the monument and the shopping centres nearby.",
            ],
          },
          {
            heading: "From the station to the monument",
            body: [
              "After exiting, you are at the edge of Bundaran HI. The Selamat Datang Monument is visible from the pedestrian areas around the roundabout; you do not need to enter its traffic island.",
              "For permitted pedestrian routes and crossings, see the pedestrian-access page. Walking time depends on which exit you use.",
            ],
          },
          {
            heading: "Connection to shopping centres",
            body: [
              "From the Bundaran HI area there is a pedestrian link toward the shopping centres nearby. Jakarta tourism’s official information mentions an underground pedestrian connection from the Bundaran HI MRT station to Grand Indonesia.",
              "The status of doors, routes, and facilities can change; check with the operator and staff on your visit date.",
            ],
          },
          {
            heading: "What to confirm",
            body: [
              "We do not set a fixed walking time or guarantee that every access is usable. Check routes, service hours, and open entrances with MRT Jakarta before departure.",
            ],
            bullets: [
              "Official station name: Bundaran HI Bank Jakarta.",
              "Open exits can differ day to day.",
              "Pedestrian connection to the mall: confirm its status.",
            ],
          },
        ],
        faqs: [
          {
            q: "What is the nearest MRT station to Bundaran HI called?",
            a: "Official MRT Jakarta material uses the name Bundaran HI Bank Jakarta.",
          },
          {
            q: "How long is the walk from the station to the monument?",
            a: "Walking time depends on the exit you use; we do not set a fixed number. The monument is visible from the roundabout edge once you exit the station.",
          },
          {
            q: "Is there a pedestrian route to Grand Indonesia?",
            a: "Official information mentions an underground pedestrian connection from the Bundaran HI MRT station to Grand Indonesia. Confirm that route’s status on your visit.",
          },
          {
            q: "Can every station entrance be used?",
            a: "We do not guarantee all access is available. Check the entrances currently open with the operator and staff.",
          },
        ],
        related: ["pejalan-kaki", "panduan", "restoran", "grand-indonesia", "plaza-indonesia"],
      },
    },
  },
  {
    id: "pejalan-kaki",
    slug: { id: "akses-pejalan-kaki-bundaran-hi", en: "pedestrian-access-bundaran-hi" },
    group: "plan",
    content: {
      id: {
        eyebrow: "06 · Akses Pejalan Kaki",
        title: "Akses Pejalan Kaki di Bundaran HI",
        lead: "Bundaran HI dapat dijelajahi dengan berjalan kaki dari trotoar di tepi bundaran. Gunakan penyeberangan resmi dan ikuti rambu serta petugas.",
        updated: "Diperbarui 28 Oktober 2026",
        sections: [
          {
            heading: "Berjalan di tepi bundaran",
            body: [
              "Area paling aman untuk berjalan adalah trotoar di sekitar Bundaran HI. Dari sini Anda dapat melihat Monumen Selamat Datang tanpa menyeberang lajur kendaraan.",
              "Jangan menganggap seluruh tepi bundaran dapat dilalui pejalan kaki secara bebas; kondisi trotoar, pekerjaan, dan pengaturan acara dapat mengubah rute yang tersedia.",
            ],
          },
          {
            heading: "Penyeberangan dan rambu",
            body: [
              "Gunakan penyeberangan resmi yang sedang dibuka, bukan memotong lintasan bundaran. Ikuti rambu pejalan kaki dan arahan petugas di lapangan.",
              "Beberapa titik penyeberangan mungkin hanya aktif pada jam tertentu atau selama acara tertentu; periksa kondisi hari itu.",
            ],
          },
          {
            heading: "Koneksi ke Thamrin dan pusat perbelanjaan",
            body: [
              "Dari tepi Bundaran HI, jaringan trotoar meneruskan ke koridor Thamrin, Hotel Indonesia, dan pusat perbelanjaan di sekitarnya. Jalur pejalan kaki bawah tanah dari stasiun MRT ke mal juga dapat menjadi opsi, dengan status yang perlu dikonfirmasi.",
              "Untuk rute berbelanja, lihat halaman restoran dekat Bundaran HI dan panduan kunjungan.",
            ],
          },
          {
            heading: "Akses tanpa tangga dan mobilitas",
            body: [
              "Fasilitas ramah kursi roda atau jalur tanpa tangga bergantung pada trotoar dan pintu yang digunakan. Tanyakan jalur yang diizinkan kepada petugas; jangan berasumsi semua fasilitas atau lift berfungsi.",
            ],
          },
        ],
        faqs: [
          {
            q: "Apakah aman berjalan kaki di sekitar Bundaran HI?",
            a: "Ya, dari trotoar di tepi bundaran. Jangan menyeberang lajur kendaraan menuju pulau bundaran atau dasar patung.",
          },
          {
            q: "Di mana saya menyeberang?",
            a: "Gunakan penyeberangan resmi yang sedang dibuka dan ikuti rambu serta petugas. Jangan memotong lintasan bundaran.",
          },
          {
            q: "Apakah ada akses tanpa tangga?",
            a: "Tergantung trotoar dan pintu yang digunakan. Tanyakan jalur yang diizinkan kepada petugas; kami tidak menjamin semua fasilitas berfungsi.",
          },
          {
            q: "Bisakah berjalan ke Grand Indonesia dari sini?",
            a: "Terdapat jaringan pejalan kaki dan sambungan dari stasiun MRT. Konfirmasi status jalur tersebut saat kunjungan Anda.",
          },
        ],
        related: ["mrt", "panduan", "restoran", "grand-indonesia", "plaza-indonesia", "sarinah"],
      },
      en: {
        eyebrow: "06 · Pedestrian Access",
        title: "Pedestrian Access at Bundaran HI",
        lead: "Bundaran HI can be explored on foot from the sidewalks at the roundabout’s edge. Use official crossings and follow signs and staff.",
        updated: "Updated 28 October 2026",
        sections: [
          {
            heading: "Walking at the roundabout edge",
            body: [
              "The safest area to walk is the sidewalk around Bundaran HI. From here you can see the Selamat Datang Monument without crossing vehicle lanes.",
              "Do not assume the entire roundabout edge is freely walkable; sidewalk conditions, works, and event arrangements can change the routes available.",
            ],
          },
          {
            heading: "Crossings and signs",
            body: [
              "Use official crossings that are currently open, not a cut across the roundabout’s path. Follow pedestrian signs and on-site staff directions.",
              "Some crossing points may only be active at certain hours or during certain events; check conditions that day.",
            ],
          },
          {
            heading: "Connection to Thamrin and shopping centres",
            body: [
              "From the Bundaran HI edge, the sidewalk network continues to the Thamrin corridor, Hotel Indonesia, and the shopping centres nearby. An underground pedestrian link from the MRT station to the mall can also be an option, with a status to confirm.",
              "For a shopping route, see the restaurants-near-Bundaran-HI page and the visit guide.",
            ],
          },
          {
            heading: "Step-free access and mobility",
            body: [
              "Wheelchair-friendly facilities or step-free routes depend on the sidewalk and entrances used. Ask staff about permitted routes; do not assume all facilities or lifts work.",
            ],
          },
        ],
        faqs: [
          {
            q: "Is it safe to walk around Bundaran HI?",
            a: "Yes, from the sidewalks at the roundabout edge. Do not cross vehicle lanes toward the roundabout island or the statue base.",
          },
          {
            q: "Where do I cross?",
            a: "Use official crossings currently open and follow signs and staff. Do not cut across the roundabout’s path.",
          },
          {
            q: "Is there step-free access?",
            a: "It depends on the sidewalk and entrances used. Ask staff about permitted routes; we do not guarantee all facilities work.",
          },
          {
            q: "Can I walk to Grand Indonesia from here?",
            a: "There is a pedestrian network and a link from the MRT station. Confirm that route’s status on your visit.",
          },
        ],
        related: ["mrt", "panduan", "restoran", "grand-indonesia", "plaza-indonesia", "sarinah"],
      },
    },
  },
  {
    id: "restoran",
    slug: { id: "restoran-dekat-bundaran-hi", en: "restaurants-near-bundaran-hi" },
    group: "around",
    content: {
      id: {
        eyebrow: "07 · Sekitar",
        title: "Restoran Dekat Bundaran HI",
        lead: "Pilihan makan di sekitar Bundaran HI terpusat pada pusat perbelanjaan besar di tepinya: Grand Indonesia, Plaza Indonesia, dan Hotel Indonesia. Nama, jam, dan harga setiap tempat harus dikonfirmasi dengan masing-masing penyedia.",
        updated: "Diperbarui 28 Oktober 2026",
        sections: [
          {
            heading: "Makan di dalam pusat perbelanjaan",
            body: [
              "Grand Indonesia dan Plaza Indonesia berada di tepi Bundaran HI dan menampung banyak pilihan makan dalam satu gedung — dari kafe hingga restoran keluarga. Dari monumen, Anda berjalan ke sana melalui trotoar atau sambungan pejalan kaki dari stasiun MRT.",
              "Karena penghuni mal berubah, kami tidak mencantumkan daftar restoran tetap. Periksa penyewa, jam buka, dan harga langsung dengan pihak mal atau restoran pada hari kunjungan.",
            ],
          },
          {
            heading: "Sarapan, makan siang, dan makan malam",
            body: [
              "Kawasan ini melayani ketiga waktu makan. Sarapan umum di kafe dalam mal; makan siang bisa ringan atau di food court; makan malam mencakup restoran di dalam mal dan di sekitar Hotel Indonesia.",
              "Jam buka bervariasi dan sering berbeda antara mal, kafe, dan restoran mandiri. Konfirmasi sebelum pergi, terutama untuk sarapan awal atau makan malam akhir pekan.",
            ],
          },
          {
            heading: "Dari monumen ke meja makan",
            body: [
              "Rute praktis: keluar di tepi Bundaran HI → ikuti trotoar menuju Grand Indonesia atau Plaza Indonesia → gunakan pintu masuk yang diizinkan. Jika dari stasiun MRT, manfaatkan sambungan pejalan kaki bawah tanah bila sedang beroperasi.",
              "Setelah makan, Anda dapat kembali ke monumen, melanjutkan ke Sarinah, atau menggunakan MRT/Transjakarta untuk tujuan berikutnya.",
            ],
          },
          {
            heading: "Yang harus dikonfirmasi",
            body: [
              "Panduan ini tidak menjamin ketersediaan meja, rentang harga, atau jam buka tertentu. Semua informasi toko bersifat umum dan harus diverifikasi dengan penyedia langsung.",
            ],
            bullets: [
              "Nama dan jenis restoran: cek penyewa mal terkini.",
              "Jam operasional: bervariasi, konfirmasi per tempat.",
              "Rentang harga: tergantung restoran, tanyakan langsung.",
              "Reservasi: tergantung kebijakan masing-masing tempat.",
            ],
          },
        ],
        faqs: [
          {
            q: "Restoran apa yang paling dekat dengan Bundaran HI?",
            a: "Pusat perbelanjaan Grand Indonesia dan Plaza Indonesia berada di tepi bundaran dan menampung banyak pilihan makan. Kami tidak mencantumkan daftar tetap karena penyewa berubah; periksa dengan pihak mal.",
          },
          {
            q: "Apakah ada sarapan di sekitar sini?",
            a: "Ya, umumnya di kafe dalam mal. Jam buka bervariasi; konfirmasi sebelum pergi, terutama untuk sarapan awal.",
          },
          {
            q: "Berapa kisaran harganya?",
            a: "Kami tidak menetapkan angka. Harga bergantung restoran; tanyakan langsung ke masing-masing penyedia.",
          },
          {
            q: "Bagaimana ke sana dari monumen?",
            a: "Berjalan melalui trotoar ke Grand Indonesia atau Plaza Indonesia, atau gunakan sambungan pejalan kaki dari stasiun MRT bila beroperasi.",
          },
        ],
        related: ["itinerary", "mrt", "pejalan-kaki", "grand-indonesia", "plaza-indonesia", "sarinah"],
      },
      en: {
        eyebrow: "07 · Nearby",
        title: "Restaurants Near Bundaran HI",
        lead: "Dining near Bundaran HI centres on the large shopping centres at its edge: Grand Indonesia, Plaza Indonesia, and Hotel Indonesia. Each venue’s name, hours, and prices must be confirmed with the provider.",
        updated: "Updated 28 October 2026",
        sections: [
          {
            heading: "Dining inside the shopping centres",
            body: [
              "Grand Indonesia and Plaza Indonesia sit at the edge of Bundaran HI and gather many dining choices in one building — from cafés to family restaurants. From the monument, you walk there via the sidewalk or the pedestrian link from the MRT station.",
              "Because mall tenants change, we do not list a fixed set of restaurants. Check tenants, opening hours, and prices directly with the mall or restaurant on your visit day.",
            ],
          },
          {
            heading: "Breakfast, lunch, and dinner",
            body: [
              "The district serves all three meal times. Breakfast is common at cafés in the malls; lunch can be light or at a food court; dinner spans restaurants inside the malls and around Hotel Indonesia.",
              "Opening hours vary and often differ between a mall, a café, and a standalone restaurant. Confirm before going, especially for early breakfast or a late weekend dinner.",
            ],
          },
          {
            heading: "From the monument to the table",
            body: [
              "A practical route: exit at the Bundaran HI edge → follow the sidewalk toward Grand Indonesia or Plaza Indonesia → use a permitted entrance. If coming from the MRT station, use the underground pedestrian link when it is operating.",
              "After eating, you can return to the monument, continue to Sarinah, or take the MRT/Transjakarta to your next destination.",
            ],
          },
          {
            heading: "What to confirm",
            body: [
              "This guide does not guarantee table availability, a price range, or specific opening hours. All venue information is general and must be verified with the provider directly.",
            ],
            bullets: [
              "Restaurant names and types: check the latest mall tenants.",
              "Operating hours: vary, confirm per venue.",
              "Price range: depends on the restaurant, ask directly.",
              "Reservations: per each venue’s policy.",
            ],
          },
        ],
        faqs: [
          {
            q: "Which restaurants are closest to Bundaran HI?",
            a: "The Grand Indonesia and Plaza Indonesia shopping centres sit at the roundabout edge and gather many dining options. We do not list a fixed set because tenants change; check with the mall.",
          },
          {
            q: "Is there breakfast around here?",
            a: "Yes, generally at cafés in the malls. Hours vary; confirm before going, especially for early breakfast.",
          },
          {
            q: "What is the price range?",
            a: "We do not set a figure. Prices depend on the restaurant; ask each provider directly.",
          },
          {
            q: "How do I get there from the monument?",
            a: "Walk via the sidewalk to Grand Indonesia or Plaza Indonesia, or use the pedestrian link from the MRT station when it is operating.",
          },
        ],
        related: ["itinerary", "mrt", "pejalan-kaki", "grand-indonesia", "plaza-indonesia", "sarinah"],
      },
    },
  },
  {
    id: "itinerary",
    slug: { id: "itinerary-setengah-hari-bundaran-hi", en: "half-day-itinerary-bundaran-hi" },
    group: "around",
    content: {
      id: {
        eyebrow: "08 · Rute",
        title: "Rute Setengah Hari di Bundaran HI",
        lead: "Rencanakan setengah hari berawal dari Bundaran HI: lihat monumen, jelajahi pusat perbelanjaan di tepinya, lalu lanjut ke Sarinah atau kembali lewat MRT.",
        updated: "Diperbarui 28 Oktober 2026",
        sections: [
          {
            heading: "Alur yang disarankan",
            body: [
              "Mulai di tepi Bundaran HI untuk melihat Monumen Selamat Datang dari pedestrian. Lanjutkan berjalan ke Grand Indonesia atau Plaza Indonesia melalui trotoar atau sambungan pejalan kaki MRT.",
              "Setelah jeda makan atau belanja, Anda dapat bergerak ke Sarinah (sekitar 1–2 km ke selatan) dengan berjalan kaki di sepanjang Thamrin atau menggunakan transportasi, lalu kembali ke Bundaran HI atau ke stasiun MRT.",
            ],
            bullets: [
              "00:00 — Tiba di tepi Bundaran HI, lihat monumen.",
              "00:30 — Berjalan ke Grand Indonesia / Plaza Indonesia.",
              "01:30 — Jeda makan atau belanja di dalam mal.",
              "03:00 — Ke Sarinah atau kembali via MRT/Transjakarta.",
            ],
          },
          {
            heading: "Waktu tempuh bersifat perkiraan",
            body: [
              "Angka waktu di atas adalah perkiraan, bukan jadwal tetap. Waktu berjalan dan antrean tiket atau lift bergantung kondisi hari itu, cuaca, dan kerumunan.",
              "Jangan menganggap semua koneksi pejalan kaki tersedia sepanjang waktu; periksa status jalur dan transportasi sebelum berangkat.",
            ],
          },
          {
            heading: "Cara kembali",
            body: [
              "Setelah Sarinah atau mal, gunakan MRT Bundaran HI Bank Jakarta atau halte Transjakarta Bundaran HI ASTRA untuk kembali. Periksa rute, jam, dan pintu yang terbuka dengan operator serta petugas.",
              "Jika cuaca mendukung, berjalan kembali menyusuri trotoar Thamrin juga memungkinkan, asalkan rambu dan penyeberangan diikuti.",
            ],
          },
        ],
        faqs: [
          {
            q: "Apakah setengah hari cukup untuk Bundaran HI?",
            a: "Cukup untuk melihat monumen, menjelajah satu pusat perbelanjaan, dan singgah ke Sarinah. Waktu bersifat perkiraan, bukan jadwal tetap.",
          },
          {
            q: "Bagaimana ke Sarinah dari sini?",
            a: "Berjalan kaki menyusuri Thamrin (sekitar 1–2 km ke selatan) atau menggunakan transportasi umum. Konfirmasi rute dan kondisi hari itu.",
          },
          {
            q: "Apakah rute ini cocok saat hujan?",
            a: "Sebagian besar berada di dalam mal atau terhubung pejalan kaki tertutup, tetapi sambungan dan atap bervariasi. Lihat juga halaman kunjungan saat hujan.",
          },
          {
            q: "Bagaimana cara kembali ke Bundaran HI?",
            a: "Gunakan MRT Bundaran HI Bank Jakarta atau halte Transjakarta Bundaran HI ASTRA; periksa rute, jam, dan pintu dengan operator.",
          },
        ],
        related: ["restoran", "mrt", "pejalan-kaki", "sarinah", "grand-indonesia", "plaza-indonesia", "kunjungan-saat-hujan"],
      },
      en: {
        eyebrow: "08 · Route",
        title: "Half-Day Itinerary at Bundaran HI",
        lead: "Plan a half day starting at Bundaran HI: view the monument, explore the shopping centres at its edge, then continue to Sarinah or return via the MRT.",
        updated: "Updated 28 October 2026",
        sections: [
          {
            heading: "Suggested flow",
            body: [
              "Start at the Bundaran HI edge to view the Selamat Datang Monument from the pedestrian area. Continue on foot to Grand Indonesia or Plaza Indonesia via the sidewalk or the MRT pedestrian link.",
              "After a dining or shopping break, you can move to Sarinah (roughly 1–2 km south) by walking along Thamrin or using transport, then return to Bundaran HI or to the MRT station.",
            ],
            bullets: [
              "00:00 — Arrive at the Bundaran HI edge, view the monument.",
              "00:30 — Walk to Grand Indonesia / Plaza Indonesia.",
              "01:30 — Dining or shopping break inside the mall.",
              "03:00 — Head to Sarinah or return via MRT/Transjakarta.",
            ],
          },
          {
            heading: "Times are estimates",
            body: [
              "The times above are estimates, not a fixed schedule. Walking time and ticket or lift queues depend on that day’s conditions, weather, and crowds.",
              "Do not assume all pedestrian connections are available at all times; check route and transport status before departure.",
            ],
          },
          {
            heading: "How to return",
            body: [
              "After Sarinah or the mall, use the Bundaran HI Bank Jakarta MRT station or the Bundaran HI ASTRA Transjakarta stop to return. Check routes, hours, and open entrances with the operator and staff.",
              "If weather allows, walking back along the Thamrin sidewalk is also possible, provided you follow signs and crossings.",
            ],
          },
        ],
        faqs: [
          {
            q: "Is half a day enough for Bundaran HI?",
            a: "Enough to view the monument, explore one shopping centre, and stop by Sarinah. Times are estimates, not a fixed schedule.",
          },
          {
            q: "How do I get to Sarinah from here?",
            a: "Walk along Thamrin (roughly 1–2 km south) or use public transport. Confirm the route and that day’s conditions.",
          },
          {
            q: "Does this route work in the rain?",
            a: "Much of it is inside malls or covered pedestrian links, but connections and roofing vary. See also the visiting-in-rain page.",
          },
          {
            q: "How do I get back to Bundaran HI?",
            a: "Use the Bundaran HI Bank Jakarta MRT station or the Bundaran HI ASTRA Transjakarta stop; check routes, hours, and entrances with the operator.",
          },
        ],
        related: ["restoran", "mrt", "pejalan-kaki", "sarinah", "grand-indonesia", "plaza-indonesia", "kunjungan-saat-hujan"],
      },
    },
  },
  {
    id: "grand-indonesia",
    slug: { id: "grand-indonesia-bundaran-hi", en: "grand-indonesia" },
    group: "around",
    content: {
      id: {
        eyebrow: "09 · Sekitar",
        title: "Grand Indonesia: Pusat Belanja di Tepi Bundaran HI",
        lead: "Grand Indonesia adalah pusat perbelanjaan besar yang berada di tepi Bundaran HI. Dari monumen, Anda dapat berjalan ke sana melalui trotoar atau sambungan pejalan kaki bawah tanah dari stasiun MRT.",
        updated: "Diperbarui 28 Oktober 2026",
        sections: [
          {
            heading: "Di mana letaknya?",
            body: [
              "Grand Indonesia berada di tepi Bundaran HI, bersebelahan dengan Hotel Indonesia dan Plaza Indonesia. Bangunan ini menempati dua menara yang dihubungkan oleh area jembatan dalam (sky bridge) serta koridor pejalan kaki.",
              "Dari Monumen Selamat Datang, Grand Indonesia terlihat sebagai salah satu massa bangunan terbesar di sekitar bundaran. Anda tidak perlu menyeberang lajur kendaraan untuk mencapai lobi sisinya yang menghadap trotoar Thamrin.",
            ],
          },
          {
            heading: "Cara ke sana dari monumen",
            body: [
              "Jalan kaki: keluar di tepi Bundaran HI, ikuti trotoar menyusuri sisi Thamrin, dan gunakan pintu masuk yang diizinkan. Jarak berjalan singkat dari tepi bundaran ke lobi.",
              "Dari stasiun: informasi resmi Jakarta tourism menyebutkan sambungan pejalan kaki bawah tanah dari stasiun Bundaran HI MRT menuju Grand Indonesia. Konfirmasi status jalur tersebut saat kunjungan, karena penyediaan dan jam operasi dapat berubah.",
            ],
            bullets: [
              "Trotoar Thamrin → lobi sisi Bundaran HI (jalan kaki, arah patung).",
              "Sambungan bawah tanah dari stasiun MRT (konfirmasi status).",
              "Transjakarta ke halte Bundaran HI ASTRA, lalu jalan kaki.",
            ],
          },
          {
            heading: "Apa yang ada di dalamnya",
            body: [
              "Seperti mal besar pada umumnya, tempat ini menampung pilihan makan, belanja, dan hiburan dalam satu gedung. Kami tidak mencantumkan daftar penyewa tetap karena penyewa dapat berubah; periksa papan pengumuman atau situs resmi mal pada hari kunjungan.",
              "Untuk pilihan makan, lihat halaman restoran dekat Bundaran HI. Untuk rute menyambung ke Plaza Indonesia, lihat halaman Plaza Indonesia.",
            ],
          },
        ],
        faqs: [
          {
            q: "Seberapa jauh Grand Indonesia dari Monumen Selamat Datang?",
            a: "Sangat dekat — berada di tepi Bundaran HI, dapat dicapai dengan berjalan kaki singkat menyusuri trotoar Thamrin dari sisi bundaran.",
          },
          {
            q: "Apakah ada jalur pejalan kaki bawah tanah dari MRT?",
            a: "Informasi resmi Jakarta tourism menyebutkan sambungan pejalan kaki bawah tanah dari stasiun Bundaran HI MRT ke Grand Indonesia. Konfirmasi status jalur tersebut saat kunjungan.",
          },
          {
            q: "Apakah semua toko dan jam buka sama?",
            a: "Tidak. Penyewa dan jam operasional dapat berbeda antar toko dan lantai; periksa langsung dengan pihak mal atau penyewa terkait.",
          },
          {
            q: "Bisakah saya berjalan ke Plaza Indonesia dari sini?",
            a: "Ya, Plaza Indonesia bersebelahan dan terhubung dalam satu kawasan pusat perbelanjaan di tepi bundaran. Gunakan pintu masuk yang diizinkan.",
          },
        ],
        related: ["plaza-indonesia", "mrt", "pejalan-kaki", "restoran"],
      },
      en: {
        eyebrow: "09 · Nearby",
        title: "Grand Indonesia: Shopping at the Bundaran HI Edge",
        lead: "Grand Indonesia is a large shopping centre at the edge of Bundaran HI. From the monument, you can walk there via the sidewalk or the underground pedestrian link from the MRT station.",
        updated: "Updated 28 October 2026",
        sections: [
          {
            heading: "Where is it?",
            body: [
              "Grand Indonesia sits at the edge of Bundaran HI, next to Hotel Indonesia and Plaza Indonesia. The complex spans two towers joined by an indoor sky bridge and pedestrian corridors.",
              "From the Selamat Datang Monument, Grand Indonesia is one of the largest building masses around the roundabout. You do not need to cross vehicle lanes to reach its lobby facing the Thamrin sidewalk.",
            ],
          },
          {
            heading: "How to get there from the monument",
            body: [
              "On foot: exit at the Bundaran HI edge, follow the sidewalk along the Thamrin side, and use a permitted entrance. The walk from the roundabout edge to the lobby is short.",
              "From the station: Jakarta tourism’s official information mentions an underground pedestrian connection from the Bundaran HI MRT station to Grand Indonesia. Confirm that route’s status on your visit, as availability and hours can change.",
            ],
            bullets: [
              "Thamrin sidewalk → Bundaran HI-side lobby (walk, facing the statue).",
              "Underground link from the MRT station (confirm status).",
              "Transjakarta to Bundaran HI ASTRA stop, then on foot.",
            ],
          },
          {
            heading: "What is inside",
            body: [
              "Like any large mall, it gathers dining, retail, and entertainment under one roof. We do not list fixed tenants because they change; check the mall’s on-site directory or official site on your visit day.",
              "For dining choices, see the restaurants-near-Bundaran-HI page. For the link to Plaza Indonesia, see the Plaza Indonesia page.",
            ],
          },
        ],
        faqs: [
          {
            q: "How far is Grand Indonesia from the Selamat Datang Monument?",
            a: "Very close — it stands at the Bundaran HI edge and is a short walk along the Thamrin sidewalk from the roundabout side.",
          },
          {
            q: "Is there an underground pedestrian link from the MRT?",
            a: "Official Jakarta tourism information mentions an underground pedestrian connection from the Bundaran HI MRT station to Grand Indonesia. Confirm that route’s status on your visit.",
          },
          {
            q: "Are all shops and opening hours the same?",
            a: "No. Tenants and operating hours can differ by store and floor; check directly with the mall or the relevant tenant.",
          },
          {
            q: "Can I walk to Plaza Indonesia from here?",
            a: "Yes, Plaza Indonesia is adjacent and connected within the same shopping district at the roundabout edge. Use a permitted entrance.",
          },
        ],
        related: ["plaza-indonesia", "mrt", "pejalan-kaki", "restoran"],
      },
    },
  },
  {
    id: "plaza-indonesia",
    slug: { id: "plaza-indonesia-bundaran-hi", en: "plaza-indonesia" },
    group: "around",
    content: {
      id: {
        eyebrow: "10 · Sekitar",
        title: "Plaza Indonesia: Pusat Belanja di Depan Bundaran HI",
        lead: "Plaza Indonesia berada di tepi Bundaran HI, bersebelahan dengan Grand Indonesia. Bersama kawasan sekitarnya, tempat ini membentuk pusat perbelanjaan utama di depan monumen.",
        updated: "Diperbarui 28 Oktober 2026",
        sections: [
          {
            heading: "Posisi di depan bundaran",
            body: [
              "Plaza Indonesia terletak di sisi depan Bundaran HI, menghadap monumen dan berbatasan langsung dengan Grand Indonesia. Dari trotoar tepi bundaran, Anda dapat melihat kedua pusat perbelanjaan ini dalam satu pandangan.",
              "Area ini adalah titik temu pejalan kaki, transportasi, dan ritel di pusat Jakarta. Stasiun MRT dan halte Transjakarta berada dalam jarak jalan kaki.",
            ],
          },
          {
            heading: "Menyambung dari monumen dan MRT",
            body: [
              "Dari Monumen Selamat Datang, ikuti trotoar tepi Bundaran HI ke arah Plaza Indonesia. Jika dari stasiun MRT, manfaatkan sambungan pejalan kaki bawah tanah menuju Grand Indonesia lalu lanjut ke Plaza Indonesia melalui jalur dalam yang diizinkan.",
              "Karena rute dalam gedung dapat berubah, konfirmasi papan penunjuk arah dan pintu yang sedang dibuka saat kunjungan Anda.",
            ],
            bullets: [
              "Trotoar tepi Bundaran HI → lobi Plaza Indonesia.",
              "Lewat sambungan MRT → Grand Indonesia → Plaza Indonesia (konfirmasi).",
              "Transjakarta halte Bundaran HI ASTRA → jalan kaki.",
            ],
          },
          {
            heading: "Catatan mengunjungi",
            body: [
              "Kami tidak mencantumkan daftar penyewa atau jam buka tetap, karena keduanya dapat berubah. Periksa dengan pihak mal atau penyewa terkait pada hari kunjungan.",
              "Untuk makan di sekitar kawasan ini, lihat halaman restoran dekat Bundaran HI. Untuk melihat hubungan monumen dan bundaran, lihat halaman apa itu Bundaran HI.",
            ],
          },
        ],
        faqs: [
          {
            q: "Apa bedanya Plaza Indonesia dan Grand Indonesia?",
            a: "Keduanya bersebelahan di tepi Bundaran HI dan membentuk satu kawasan pusat perbelanjaan. Plaza Indonesia berada tepat di depan bundaran, berbatasan dengan Grand Indonesia.",
          },
          {
            q: "Bagaimana ke Plaza Indonesia dari MRT?",
            a: "Gunakan sambungan pejalan kaki bawah tanah dari stasiun Bundaran HI MRT ke Grand Indonesia, lalu lanjut ke Plaza Indonesia melalui jalur dalam yang diizinkan. Konfirmasi status jalur tersebut.",
          },
          {
            q: "Apakah ada jam operasional pasti?",
            a: "Kami tidak menetapkan jam operasional. Jam buka tiap toko dan lantai berbeda; periksa langsung dengan pihak mal.",
          },
          {
            q: "Apakah cocok dijadikan tempat berteduh saat hujan?",
            a: "Ya, kawasan ini terhubung dan sebagian tertutup, tetapi sambungan dan atap bervariasi. Lihat juga halaman kunjungan saat hujan.",
          },
        ],
        related: ["grand-indonesia", "mrt", "pejalan-kaki", "restoran"],
      },
      en: {
        eyebrow: "10 · Nearby",
        title: "Plaza Indonesia: Shopping in Front of Bundaran HI",
        lead: "Plaza Indonesia stands at the edge of Bundaran HI, next to Grand Indonesia. Together with the surrounding district, it forms the main shopping centre in front of the monument.",
        updated: "Updated 28 October 2026",
        sections: [
          {
            heading: "Position in front of the roundabout",
            body: [
              "Plaza Indonesia sits on the front side of Bundaran HI, facing the monument and directly bordering Grand Indonesia. From the roundabout-edge sidewalk you can see both shopping centres in one view.",
              "This area is a meeting point for pedestrians, transport, and retail in central Jakarta. The MRT station and Transjakarta stop are within walking distance.",
            ],
          },
          {
            heading: "Connecting from the monument and MRT",
            body: [
              "From the Selamat Datang Monument, follow the Bundaran HI-edge sidewalk toward Plaza Indonesia. From the MRT station, use the underground pedestrian link to Grand Indonesia, then continue to Plaza Indonesia via a permitted indoor route.",
              "Because indoor routes can change, confirm the directional signs and open entrances on your visit day.",
            ],
            bullets: [
              "Bundaran HI-edge sidewalk → Plaza Indonesia lobby.",
              "Via MRT link → Grand Indonesia → Plaza Indonesia (confirm).",
              "Transjakarta Bundaran HI ASTRA stop → on foot.",
            ],
          },
          {
            heading: "Visiting notes",
            body: [
              "We do not list fixed tenants or opening hours, as both can change. Check with the mall or the relevant tenant on your visit day.",
              "For dining around this district, see the restaurants-near-Bundaran-HI page. For the monument–roundabout relationship, see the what-is-Bundaran-HI page.",
            ],
          },
        ],
        faqs: [
          {
            q: "What is the difference between Plaza Indonesia and Grand Indonesia?",
            a: "They are adjacent at the Bundaran HI edge and form one shopping district. Plaza Indonesia is right in front of the roundabout, bordering Grand Indonesia.",
          },
          {
            q: "How do I reach Plaza Indonesia from the MRT?",
            a: "Use the underground pedestrian link from the Bundaran HI MRT station to Grand Indonesia, then continue to Plaza Indonesia via a permitted indoor route. Confirm that route’s status.",
          },
          {
            q: "Is there a fixed operating schedule?",
            a: "We do not set operating hours. Opening times differ by store and floor; check directly with the mall.",
          },
          {
            q: "Is it a good place to take shelter in the rain?",
            a: "Yes, the district is connected and partly covered, but connections and roofing vary. See also the visiting-in-the-rain page.",
          },
        ],
        related: ["grand-indonesia", "mrt", "pejalan-kaki", "restoran"],
      },
    },
  },
  {
    id: "sarinah",
    slug: { id: "sarinah-bundaran-hi", en: "sarinah" },
    group: "around",
    content: {
      id: {
        eyebrow: "11 · Sekitar",
        title: "Sarinah: Toko Serba Ada Bersejarah dari Bundaran HI",
        lead: "Sarinah adalah gedung toko serba ada bersejarah yang berada sekitar 1–2 km ke selatan Bundaran HI, menyusuri Jalan M.H. Thamrin. Dari monumen, Anda dapat berjalan kaki atau menggunakan transportasi untuk mencapainya.",
        updated: "Diperbarui 28 Oktober 2026",
        sections: [
          {
            heading: "Di selatan Thamrin",
            body: [
              "Sarinah terletak di Jalan M.H. Thamrin, sekitar 1–2 km ke arah selatan dari Bundaran HI. Bangunan ini sering disebut sebagai salah satu toko serba ada modern pertama di Indonesia, dan menjadi bagian dari ingatan kota Jakarta.",
              "Karena letaknya menyusuri koridor Thamrin, Sarinah dapat dijadikan tujuan jalan kaki dari Bundaran HI atau sebagai persinggahan dalam rute menuju Monas yang lebih jauh ke selatan.",
            ],
          },
          {
            heading: "Cara ke sana",
            body: [
              "Berjalan kaki: susuri trotoar Thamrin ke arah selatan dari tepi Bundaran HI. Waktu tempuh bergantung kecepatan jalan dan kondisi trotoar hari itu.",
              "Transportasi: stasiun MRT atau halte Transjakarta di sekitar Bundaran HI dapat digunakan sebagai titik awal, lalu lanjut dengan jalur yang menghubungkan ke koridor Thamrin selatan. Periksa rute, jam, dan pintu dengan operator.",
            ],
            bullets: [
              "Jalan kaki menyusuri Thamrin ke selatan (sekitar 1–2 km).",
              "MRT/Transjakarta dari Bundaran HI → lanjut ke selatan.",
              "Sesuaikan dengan cuaca dan lalu lintas hari itu.",
            ],
          },
          {
            heading: "Apa yang dapat dilihat",
            body: [
              "Selain sebagai tempat belanja, Sarinah sering ditampilkan dalam bahan mengenai sejarah ritel dan perkotaan Jakarta. Kami tidak mencantumkan daftar penyewa atau acara tetap; periksa dengan pihak gedung pada hari kunjungan.",
              "Untuk rencana rute yang menggabungkan Bundaran HI dan Sarinah, lihat halaman rencana rute setengah hari. Untuk transportasi dari Bundaran HI, lihat halaman MRT.",
            ],
          },
        ],
        faqs: [
          {
            q: "Seberapa jauh Sarinah dari Bundaran HI?",
            a: "Sekitar 1–2 km ke arah selatan menyusuri Jalan M.H. Thamrin. Dapat ditempuh dengan berjalan kaki atau transportasi.",
          },
          {
            q: "Apakah Sarinah layak dijadwalkan dalam kunjungan?",
            a: "Ya, sebagai tujuan jalan kaki singkat dari Bundaran HI atau persinggahan menuju Monas. Waktu tempuh bersifat perkiraan, bukan jadwal tetap.",
          },
          {
            q: "Apakah ada jam buka atau acara tertentu?",
            a: "Kami tidak menetapkan jadwal. Jam buka dan acara dapat berubah; periksa langsung dengan pihak gedung.",
          },
          {
            q: "Apakah cocok dikunjungi saat hujan?",
            a: "Sebagian area tertutup, tetapi rute pejalan kaki luar dapat terpengaruh cuaca. Lihat halaman kunjungan saat hujan untuk tips berlindung.",
          },
        ],
        related: ["itinerary", "mrt", "apa-itu-bundaran-hi", "restoran"],
      },
      en: {
        eyebrow: "11 · Nearby",
        title: "Sarinah: A Historic Department Store from Bundaran HI",
        lead: "Sarinah is a historic department store about 1–2 km south of Bundaran HI along Jalan M.H. Thamrin. From the monument, you can walk there or use transport.",
        updated: "Updated 28 October 2026",
        sections: [
          {
            heading: "South along Thamrin",
            body: [
              "Sarinah is on Jalan M.H. Thamrin, about 1–2 km south of Bundaran HI. It is often described as one of Indonesia’s first modern department stores and is part of Jakarta’s urban memory.",
              "Because it sits along the Thamrin corridor, Sarinah can be a walking destination from Bundaran HI or a stop on a route toward the more distant Monas to the south.",
            ],
          },
          {
            heading: "How to get there",
            body: [
              "On foot: follow the Thamrin sidewalk south from the Bundaran HI edge. Walking time depends on your pace and that day’s sidewalk conditions.",
              "Transport: the MRT station or Transjakarta stop near Bundaran HI can be a starting point, then continue on routes connecting to the southern Thamrin corridor. Check routes, hours, and entrances with the operator.",
            ],
            bullets: [
              "Walk south along Thamrin (about 1–2 km).",
              "MRT/Transjakarta from Bundaran HI → continue south.",
              "Adjust to that day’s weather and traffic.",
            ],
          },
          {
            heading: "What to see",
            body: [
              "Beyond shopping, Sarinah often appears in material about Jakarta’s retail and urban history. We do not list fixed tenants or events; check with the building management on your visit day.",
              "For a route combining Bundaran HI and Sarinah, see the half-day itinerary page. For transport from Bundaran HI, see the MRT page.",
            ],
          },
        ],
        faqs: [
          {
            q: "How far is Sarinah from Bundaran HI?",
            a: "About 1–2 km south along Jalan M.H. Thamrin. Reachable on foot or by transport.",
          },
          {
            q: "Is Sarinah worth scheduling into a visit?",
            a: "Yes, as a short walk from Bundaran HI or a stop toward Monas. Travel time is an estimate, not a fixed schedule.",
          },
          {
            q: "Are there set opening hours or events?",
            a: "We do not set a schedule. Opening hours and events can change; check directly with the building management.",
          },
          {
            q: "Is it good to visit in the rain?",
            a: "Partly covered, but outdoor walking routes can be affected by weather. See the visiting-in-the-rain page for shelter tips.",
          },
        ],
        related: ["itinerary", "mrt", "apa-itu-bundaran-hi", "restoran"],
      },
    },
  },
  {
    id: "kunjungan-saat-hujan",
    slug: { id: "kunjungan-saat-hujan", en: "visiting-in-the-rain" },
    group: "plan",
    content: {
      id: {
        eyebrow: "12 · Rencanakan",
        title: "Kunjungan Saat Hujan di Bundaran HI",
        lead: "Bundaran HI dapat dikunjungi saat hujan, asalkan Anda merencanakan rute yang sebagian tertutup dan membawa perlengkapan yang sesuai. Monumen sendiri berada di ruang terbuka.",
        updated: "Diperbarui 28 Oktober 2026",
        sections: [
          {
            heading: "Melihat monumen saat hujan",
            body: [
              "Monumen Selamat Datang berada di ruang terbuka di tengah bundaran, sehingga tidak ada atap di atas patung. Anda dapat melihatnya secara singkat dari trotoar tepi bundaran, lalu berlindung di selasar atau pusat perbelanjaan terdekat.",
              "Gunakan jeda hujan ringan untuk foto cepat dari kejauhan; hindari berdiri lama di tepi lalu lintas. Patuhilah rambu dan arahan petugas.",
            ],
          },
          {
            heading: "Rute yang sebagian tertutup",
            body: [
              "Kawasan Bundaran HI terhubung ke Grand Indonesia dan Plaza Indonesia melalui jalur dalam yang sebagian tertutup. Informasi resmi Jakarta tourism menyebutkan sambungan pejalan kaki bawah tanah dari stasiun MRT ke Grand Indonesia.",
              "Karena atap dan sambungan bervariasi, jangan menganggap seluruh rute tertutup. Konfirmasi papan penunjuk arah serta pintu yang sedang dibuka saat kunjungan.",
            ],
            bullets: [
              "Trotoar beratap terbatas di sekitar halte dan pintu mal.",
              "Sambungan bawah tanah MRT → Grand Indonesia (konfirmasi).",
              "Selasar pusat perbelanjaan sebagai tempat berlindung.",
            ],
          },
          {
            heading: "Yang perlu dibawa",
            body: [
              "Bawa payung atau jas hujan, sepatu yang nyaman, dan tas yang aman dari percikan. Pantau prakiraan cuaca hari itu sebelum berangkat.",
              "Jika cuaca buruk, utamakan rute dalam gedung dan transportasi tertutup. Periksa status rute dan layanan dengan operator serta petugas.",
            ],
          },
        ],
        faqs: [
          {
            q: "Apakah Bundaran HI bisa dikunjungi saat hujan?",
            a: "Ya, asalkan Anda merencanakan rute yang sebagian tertutup dan membawa payung atau jas hujan. Monumen berada di ruang terbuka, jadi lihat dari kejauhan lalu berlindung.",
          },
          {
            q: "Di mana saya bisa berlindung?",
            a: "Selasar sekitar halte dan pintu pusat perbelanjaan, serta sambungan bawah tanah MRT ke Grand Indonesia (konfirmasi status). Jangan menganggap seluruh rute tertutup.",
          },
          {
            q: "Apakah foto monumen masih bisa diambil?",
            a: "Bisa, saat jeda hujan ringan dari kejauhan di trotoar tepi bundaran. Hindari memotong lajur kendaraan dan jangan berdiri lama di tepi lalu lintas.",
          },
          {
            q: "Apakah toko di sekitar tetap buka saat hujan?",
            a: "Jam buka dapat berbeda; periksa dengan pihak mal atau penyewa terkait pada hari kunjungan. Kami tidak menetapkan jadwal tetap.",
          },
        ],
        related: ["panduan", "pejalan-kaki", "mrt", "restoran"],
      },
      en: {
        eyebrow: "12 · Plan",
        title: "Visiting Bundaran HI in the Rain",
        lead: "Bundaran HI can be visited in the rain as long as you plan a partly covered route and bring suitable gear. The monument itself is in open space.",
        updated: "Updated 28 October 2026",
        sections: [
          {
            heading: "Viewing the monument in the rain",
            body: [
              "The Selamat Datang Monument is in open space at the centre of the roundabout, so there is no roof above the statue. You can view it briefly from the roundabout-edge sidewalk, then shelter in a colonnade or the nearest shopping centre.",
              "Use a light-rain break for a quick distant photo; avoid standing long at the traffic edge. Follow signs and staff directions.",
            ],
          },
          {
            heading: "Partly covered routes",
            body: [
              "The Bundaran HI district connects to Grand Indonesia and Plaza Indonesia through partly covered indoor routes. Official Jakarta tourism information mentions an underground pedestrian connection from the MRT station to Grand Indonesia.",
              "Because roofing and connections vary, do not assume the whole route is covered. Confirm the directional signs and open entrances on your visit day.",
            ],
            bullets: [
              "Limited covered sidewalks around the stop and mall entrances.",
              "MRT underground link → Grand Indonesia (confirm).",
              "Shopping-centre colonnades as shelter.",
            ],
          },
          {
            heading: "What to bring",
            body: [
              "Bring an umbrella or raincoat, comfortable shoes, and a bag safe from splashes. Check that day’s weather forecast before departing.",
              "In bad weather, prioritise indoor routes and covered transport. Check route and service status with the operator and staff.",
            ],
          },
        ],
        faqs: [
          {
            q: "Can Bundaran HI be visited in the rain?",
            a: "Yes, as long as you plan a partly covered route and bring an umbrella or raincoat. The monument is in open space, so view it from a distance then shelter.",
          },
          {
            q: "Where can I take shelter?",
            a: "Colonnades around the stop and mall entrances, plus the MRT underground link to Grand Indonesia (confirm status). Do not assume the whole route is covered.",
          },
          {
            q: "Can I still photograph the monument?",
            a: "Yes, during a light-rain break from a distance on the roundabout-edge sidewalk. Avoid crossing vehicle lanes and do not stand long at the traffic edge.",
          },
          {
            q: "Do the nearby shops stay open in the rain?",
            a: "Opening hours can differ; check with the mall or the relevant tenant on your visit day. We do not set a fixed schedule.",
          },
        ],
        related: ["panduan", "pejalan-kaki", "mrt", "restoran"],
      },
    },
  },
];

export function topicIdFromSlug(lang: Lang, slug: string): string | null {
  const def = TOPICS.find((d) => d.slug[lang] === slug);
  return def ? def.id : null;
}

/** Resolve the slug in `target` language for the current page, mapping topic slugs across languages. */
export function targetSlug(currentLang: Lang, page: string, target: Lang): string {
  const id = topicIdFromSlug(currentLang, page);
  if (!id) return page;
  const def = TOPICS.find((d) => d.id === id);
  return def ? def.slug[target] : page;
}

export function getTopic(lang: Lang, id: string): TopicContent | null {
  const def = TOPICS.find((d) => d.id === id);
  return def ? def.content[lang] : null;
}

export function topicSlug(lang: Lang, id: string): string | null {
  const def = TOPICS.find((d) => d.id === id);
  return def ? def.slug[lang] : null;
}

export function topicsByGroup(lang: Lang): { group: string; label: string; topics: TopicDef[] }[] {
  const order = ["monument", "plan", "around"];
  return order
    .map((g) => ({
      group: g,
      label: TOPIC_GROUPS[g][lang],
      topics: TOPICS.filter((t) => t.group === g),
    }))
    .filter((g) => g.topics.length > 0);
}
