/**
 * Lingkar Kota design system: factual city-guide copy, Indonesian-first with English parity.
 * This module centralizes bilingual content to prevent language mixing across pages.
 */

export type Lang = "id" | "en";

export const copy = {
  id: {
    brandKicker: "Panduan kota independen",
    nav: { story: "Cerita", visit: "Rencanakan", around: "Di sekitar", faq: "FAQ" },
    heroEyebrow: "Jakarta Pusat · Menteng",
    heroTitle: "Di pusat putaran, sebuah sambutan untuk kota.",
    heroLead:
      "Monumen Selamat Datang berdiri di Bundaran HI—sebuah penanda modernitas Jakarta sejak Asian Games IV 1962. Panduan ini membantu Anda membaca tempatnya, bukan sekadar melewatinya.",
    heroPrimary: "Rencanakan kunjungan",
    heroSecondary: "Baca ceritanya",
    sourceNote: "Panduan informasi independen · Bukan situs resmi",
    factYear: "1962",
    factYearLabel: "selesai dibangun",
    factPlace: "Bundaran HI",
    factPlaceLabel: "Jakarta Pusat",
    factCost: "Gratis",
    factCostLabel: "dilihat dari ruang publik",
    storyLabel: "01 · Cerita di pusat putaran",
    storyTitle: "Sebuah gerak menyambut, dibingkai kota yang terus bergerak.",
    storyP1:
      "Nama Bundaran HI merujuk pada Hotel Indonesia yang menghadap ke bundaran ini. Di tengahnya berdiri Monumen Selamat Datang—dikenal pula sebagai Patung Selamat Datang—yang dibangun pada 1962 untuk menyambut tamu negara saat Asian Games IV berlangsung di Jakarta.",
    storyP2:
      "Dari sini, monumen dapat dibaca sebagai potret ambisi Jakarta pada awal dekade 1960-an: sebuah gestur terbuka di persimpangan jalur kota. Kini, air mancur, jalur pejalan kaki, transportasi publik, dan gedung-gedung di sekelilingnya membentuk salah satu panorama urban yang paling mudah dikenali.",
    storyQuote: "Berhenti sejenak. Lihat bagaimana kota mengitari sebuah sambutan.",
    photoCaption: "Bundaran HI dan Monumen Selamat Datang. Foto: Baqotun0023, CC BY-SA 4.0.",
    knowLabel: "Yang perlu diketahui",
    knowTitle: "Ruang publik, bukan museum berpagar.",
    knowIntro:
      "Monumen berada di tengah bundaran lalu lintas. Pengalaman terbaik adalah mengamatinya dari trotoar, halte, atau ruang publik di sekitarnya—bukan mendekati area air mancur atau menyeberang tanpa fasilitas yang aman.",
    knowItems: [
      ["Akses", "Saksikan dari area publik dan ikuti pengaturan pejalan kaki di lokasi."],
      ["Biaya", "Tidak ada tiket untuk melihat monumen dari ruang publik."],
      ["Jam", "Tidak ada jadwal kunjungan resmi yang kami verifikasi; cek kondisi kawasan sebelum berangkat."],
      ["Foto", "Lantai dua Halte Bundaran HI Astra sering digunakan untuk melihat monumen dengan lebih leluasa."],
    ],
    planLabel: "02 · Siapkan langkah",
    planTitle: "Datang dengan tujuan sederhana, pulang dengan pemahaman yang lebih utuh.",
    bestTitle: "Waktu & durasi",
    bestText:
      "Pagi hari memberi cahaya yang lebih lembut untuk mengamati bentuk monumen dan ritme kota. Menjelang senja memberi suasana yang lebih dramatis, tetapi lalu lintas bisa lebih padat. Sisihkan sekitar 20–45 menit untuk berhenti, memotret dari titik aman, dan berjalan di kawasan sekitar.",
    trafficTitle: "Sebelum berangkat",
    trafficText:
      "Bundaran HI kerap menjadi titik acara publik, termasuk kegiatan Hari Bebas Kendaraan Bermotor pada waktu tertentu. Periksa pengumuman transportasi dan kondisi jalan pada hari perjalanan, terutama saat akhir pekan atau acara besar.",
    itineraryTitle: "Daftar perjalanan Anda",
    itineraryLead: "Simpan hal-hal yang ingin dilakukan. Tersimpan hanya di perangkat ini.",
    itineraryEmpty: "Belum ada yang disimpan. Pilih ide di bawah untuk memulai.",
    save: "Simpan", saved: "Tersimpan", remove: "Hapus", stored: "Tersimpan di perangkat ini", 
    itinerary: [
      ["observe", "Mengamati monumen dari titik yang aman", "Lihat arah pandang, skala, dan ritme air mancur dari tepi kawasan."],
      ["skydeck", "Mencari sudut pandang yang lebih tinggi", "Pertimbangkan lantai dua Halte Bundaran HI Astra untuk melihat komposisi bundaran."],
      ["walk", "Berjalan ke arah Thamrin", "Lanjutkan lewat trotoar dengan mengikuti lampu penyeberangan dan arus pejalan kaki."],
      ["check", "Memeriksa informasi lalu lintas", "Pastikan kembali kondisi akses sebelum berangkat atau berpindah moda."],
    ],
    accessLabel: "03 · Cara mencapai kawasan",
    accessTitle: "Masuklah lewat jaringan kota, lalu berjalan dengan pelan.",
    accessIntro:
      "Bundaran HI berada di pusat jaringan jalan dan transportasi Jakarta. Rute terbaik bergantung pada titik keberangkatan, waktu, dan kondisi lalu lintas hari itu.",
    transport: [
      ["MRT", "Stasiun Bundaran HI Bank Jakarta berada di kawasan ini. Lanjutkan melalui akses pejalan kaki dan ikuti petunjuk keluar stasiun."],
      ["TransJakarta", "Halte Bundaran HI Astra berada dekat monumen. Gunakan jalur resmi halte dan periksa rute aktif melalui operator."],
      ["Dari bandara", "Gunakan layanan kereta bandara atau kendaraan menuju pusat kota, lalu sambung ke MRT, TransJakarta, atau layanan kendaraan berizin. Sisihkan waktu cadangan karena kondisi jalan berubah."],
      ["Taksi / kendaraan daring", "Tetapkan titik turun yang aman dan legal di area sekitar; jangan meminta pengemudi berhenti di jalur bundaran."],
      ["KRL & LRT", "Dukuh Atas adalah kawasan transit yang menghubungkan KRL, LRT, MRT, dan TransJakarta. Dari sana, lanjutkan sesuai koneksi yang tersedia."],
    ],
    mapLabel: "Peta lokasi",
    mapTitle: "Bundaran HI, Jakarta Pusat",
    mapText: "Gunakan peta untuk orientasi. Perhatikan arus kendaraan dan selalu gunakan penyeberangan resmi.",
    aroundLabel: "04 · Membaca lingkungan sekitar",
    aroundTitle: "Satu bundaran, banyak lapisan kota.",
    aroundCards: [
      ["Ruang budaya", "Galeri, museum, dan ruang budaya di pusat Jakarta dapat menjadi kelanjutan kunjungan yang lebih tenang. Periksa jadwal dan akses resminya sebelum datang."],
      ["Ruang hijau", "Pilih taman kota atau jalur pejalan kaki publik untuk jeda dari kepadatan lalu lintas. Bawa air minum dan perhatikan cuaca."],
      ["Koridor sejarah", "Arahkan perjalanan ke kawasan bersejarah pusat kota jika ingin memperluas konteks Jakarta dari era awal republik hingga hari ini."],
      ["Transit kota", "Dukuh Atas adalah pilihan berguna bagi pengunjung yang ingin mengamati integrasi moda dan berjalan di ruang publik kota."],
    ],
    servicesLabel: "Kebutuhan praktis",
    servicesTitle: "Fasilitas: rencanakan, jangan berasumsi.",
    services: [
      ["Toilet & tempat ibadah", "Gunakan fasilitas publik atau fasilitas yang tersedia secara legal di kawasan sekitar; ketersediaan dapat berbeda menurut jam dan lokasi."],
      ["Makan & minum", "Kawasan pusat kota memiliki berbagai jenis pilihan makan dan minum. Pilih sesuai kebutuhan, anggaran, dan kebijakan setempat."],
      ["Parkir", "Parkir langsung di bundaran tidak dianjurkan. Pertimbangkan transportasi umum atau tempat parkir resmi di kawasan sekitar."],
      ["Akomodasi & belanja", "Kawasan pusat Jakarta memiliki berbagai tipe akomodasi, ritel, dan kebutuhan harian. Bandingkan informasi resmi sebelum menentukan pilihan."],
      ["BBM & pengisian", "Jika berkendara, rencanakan pengisian bahan bakar atau daya sebelum memasuki koridor pusat kota yang padat."],
    ],
    faqLabel: "05 · Tanya jawab",
    faqTitle: "Pertanyaan yang patut ditanyakan sebelum Anda tiba.",
    faqs: [
      ["Apakah Monumen Selamat Datang bisa dimasuki?", "Tidak. Monumen berada di tengah bundaran lalu lintas. Nikmati dari area pejalan kaki, halte, atau ruang publik yang aman di sekitarnya."],
      ["Apakah ada tiket masuk?", "Tidak ada tiket untuk melihat monumen dari ruang publik. Biaya dapat muncul bila Anda memilih layanan transportasi, parkir resmi, atau fasilitas lain di sekitar kawasan."],
      ["Kapan waktu terbaik untuk berkunjung?", "Pagi atau menjelang senja dapat memberi pengalaman visual yang lebih nyaman. Tetap pertimbangkan hujan, lalu lintas, dan acara publik pada hari kunjungan."],
      ["Bagaimana cara mencapai kawasan dari bandara?", "Gunakan koneksi menuju pusat kota, lalu sambung dengan moda publik atau kendaraan berizin. Periksa rute dan waktu tempuh aktual sebelum melakukan perjalanan."],
      ["Apakah tempat ini cocok untuk anak-anak?", "Cocok untuk diamati dari area publik bersama pendamping, dengan perhatian penuh pada lalu lintas, penyeberangan, dan cuaca panas."],
    ],
    sourcesLabel: "Catatan sumber",
    sourcesTitle: "Dibaca dari sumber terbuka, diperbarui dengan kehati-hatian.",
    sourcesText: "Riwayat dan konteks situs ini merujuk pada sumber informasi publik. Informasi lapangan dapat berubah; periksa kanal resmi sebelum bepergian.",
    sourceLinks: [
      ["Pemerintah Provinsi DKI Jakarta — Landmark Jakarta", "https://www.jakarta.go.id/landmark-jakarta"],
      ["Jakarta Smart City — Jakarta Dahulu dan Sekarang", "https://smartcity.jakarta.go.id/id/blog/jakarta-dahulu-dan-sekarang-sejarah-lewat-foto"],
      ["MRT Jakarta — informasi layanan", "https://www.jakartamrt.co.id/"],
      ["Wikimedia Commons — Jakarta Bundaran HI (Adisurahman)", "https://commons.wikimedia.org/wiki/File:Jakarta_Bundaran_HI_.jpg"],
      ["Wikimedia Commons — Bundaran HI per August 2023 (Baqotun0023)", "https://commons.wikimedia.org/wiki/File:Bundaran_HI_per_August_2023.jpg"],
    ],
    footerNonOfficial: "Situs ini adalah proyek panduan pengunjung independen dan non-profit. Situs ini tidak berafiliasi dengan instansi pemerintah atau organisasi resmi mana pun.",
    footerReference: "Informasi dirujuk dan disandingkan dengan bahan publik dari Pemerintah Kota Administrasi Jakarta Pusat, Pemerintah Provinsi DKI Jakarta, dan sumber transportasi umum. Tidak memuat rekomendasi komersial.",
    footerCredit: "Hak cipta foto tetap berada pada masing-masing fotografer. Lihat kredit gambar dan lisensi pada catatan sumber.",
    footerCopyright: "© 2026 Panduan Monumen Selamat Datang. Hak cipta atas desain dan konten asli dilindungi.",
    footerLinks: { privacy: "Kebijakan Privasi", terms: "Syarat Layanan", cookies: "Pengaturan Cookie" },
    privacy: {
      eyebrow: "Panduan informasi independen", title: "Kebijakan Privasi", updated: "Terakhir diperbarui: Agustus 2026",
      intro: "Kami menghormati privasi Anda. Halaman ini menerangkan pendekatan kami terhadap data ketika Anda menggunakan Panduan Monumen Selamat Datang.",
      sections: [["Informasi yang dapat diproses", "Kami berupaya meminimalkan data. Analitik hanya dapat dijalankan jika Anda mengaktifkannya pada pengaturan cookie. Penyedia layanan teknis dapat memproses data penjelajahan dasar seperti alamat IP, jenis peramban, atau halaman yang diminta sesuai kebijakan mereka."],["Cara informasi digunakan", "Informasi agregat dapat digunakan untuk memahami pola penggunaan, memperbaiki kejelasan panduan, menanggapi permintaan, dan memenuhi kewajiban hukum yang berlaku."],["Layanan pihak ketiga", "Peta Google dipakai untuk memberi orientasi lokasi. Jika analitik diaktifkan, Google Analytics dapat memproses data sebagaimana dijelaskan dalam kebijakan Google. Layanan tersebut memiliki kebijakan sendiri."],["Hak Anda", "Bergantung pada hukum yang berlaku, Anda dapat meminta akses, perbaikan, penghapusan, atau mengajukan keberatan atas pemrosesan data pribadi kepada penyedia layanan terkait."]]
    },
    terms: {
      eyebrow: "Panduan informasi independen", title: "Syarat Layanan", updated: "Terakhir diperbarui: Agustus 2026",
      intro: "Dengan mengakses panduan ini, Anda setuju menggunakan informasi secara bertanggung jawab dan memeriksa kondisi aktual sebelum bepergian.",
      sections: [["Penggunaan konten", "Semua materi disediakan untuk informasi umum. Kami adalah panduan perjalanan pihak ketiga yang independen, bukan perwakilan pengelola objek, pemerintah, atau operator komersial."],["Keakuratan informasi", "Kami berupaya menyajikan informasi dengan hati-hati, namun tidak menjamin kelengkapan atau ketepatan setiap saat. Kondisi jalan, layanan, akses, dan kegiatan dapat berubah tanpa pemberitahuan."],["Hak kekayaan intelektual", "Desain dan konten asli dilindungi. Foto dipakai sesuai kredit dan lisensi yang dicantumkan. Peta Google digunakan sesuai ketentuan layanan penyedianya."],["Batasan tanggung jawab", "Panduan ini disediakan sebagaimana adanya. Keputusan perjalanan, keselamatan di jalan, dan pemilihan layanan tetap merupakan tanggung jawab pengunjung."]]
    },
    cookies: {
      eyebrow: "Pilihan perangkat Anda", title: "Pengaturan Cookie", updated: "Terakhir diperbarui: Agustus 2026",
      intro: "Atur bagaimana perangkat ini menyimpan preferensi. Pilihan hanya berlaku di peramban dan perangkat yang sedang digunakan.",
      essential: "Cookie penting", essentialText: "Diperlukan untuk menyimpan pilihan dasar seperti bahasa dan status persetujuan. Selalu aktif.",
      analytics: "Cookie analitik", analyticsText: "Membantu memahami penggunaan secara agregat. Google Analytics hanya diaktifkan setelah Anda memberikan persetujuan.",
      preference: "Cookie preferensi", preferenceText: "Mengingat bahasa yang Anda pilih dan daftar perjalanan lokal Anda.",
      marketing: "Cookie pemasaran", marketingText: "Tidak digunakan oleh panduan ini.",
      save: "Simpan preferensi", reject: "Tolak analitik", saved: "Preferensi Anda tersimpan pada perangkat ini.",
    }
  },
  en: {
    brandKicker: "Independent city guide",
    nav: { story: "Story", visit: "Plan", around: "Nearby", faq: "FAQ" },
    heroEyebrow: "Central Jakarta · Menteng",
    heroTitle: "At the centre of the circle, a welcome for the city.",
    heroLead:
      "Monumen Selamat Datang stands at Bundaran HI—a marker of Jakarta’s modernity since the 1962 Asian Games. This guide helps you read the place, rather than simply pass through it.",
    heroPrimary: "Plan a visit", heroSecondary: "Read the story", sourceNote: "Independent information guide · Not an official website",
    factYear: "1962", factYearLabel: "completed", factPlace: "Bundaran HI", factPlaceLabel: "Central Jakarta", factCost: "Free", factCostLabel: "to view from public space",
    storyLabel: "01 · A story at the centre", storyTitle: "A welcoming gesture, framed by a city that never stops moving.",
    storyP1: "Bundaran HI takes its name from Hotel Indonesia, which faces the roundabout. At its centre stands Monumen Selamat Datang—also known as the Welcome Monument—built in 1962 to greet state guests during Jakarta’s fourth Asian Games.",
    storyP2: "From here, the monument can be read as a portrait of Jakarta’s early-1960s ambition: an open gesture at the meeting point of major city routes. Today, its fountain, walkways, public transport and surrounding towers form one of the capital’s most recognisable urban views.",
    storyQuote: "Pause for a moment. Watch the city orbit a welcome.", photoCaption: "Bundaran HI and Monumen Selamat Datang. Photo: Baqotun0023, CC BY-SA 4.0.",
    knowLabel: "What to know", knowTitle: "A public space, not a fenced museum.", knowIntro: "The monument sits at the centre of a traffic roundabout. The best experience is to view it from nearby pavements, stations, or public spaces—not by approaching the fountain area or crossing without a safe facility.",
    knowItems: [["Access", "View from public space and follow pedestrian arrangements on site."],["Cost", "There is no ticket to view the monument from public space."],["Hours", "We could not verify an official visiting schedule; check the area conditions before you travel."],["Photography", "The second floor of Bundaran HI Astra stop is commonly used for a clearer view of the monument."]],
    planLabel: "02 · Set your pace", planTitle: "Arrive with a simple purpose, leave with a fuller understanding.",
    bestTitle: "Timing & duration", bestText: "Morning brings gentler light for observing the monument’s form and the city’s rhythm. Near sunset can feel more dramatic, though traffic may be heavier. Allow around 20–45 minutes to pause, photograph from a safe vantage point, and walk nearby.",
    trafficTitle: "Before you go", trafficText: "Bundaran HI is often a focal point for public events, including Car-Free Day at certain times. Check transport notices and road conditions on the day, especially at weekends and during large events.",
    itineraryTitle: "Your field list", itineraryLead: "Save what you would like to do. It stays on this device only.", itineraryEmpty: "Nothing saved yet. Choose an idea below to begin.", save: "Save", saved: "Saved", remove: "Remove", stored: "Stored on this device only",
    itinerary: [["observe", "Observe the monument from a safe point", "Take in its direction, scale, and the fountain’s rhythm from the edge of the district."],["skydeck", "Find a higher viewpoint", "Consider the second floor of Bundaran HI Astra stop for a view across the circle."],["walk", "Walk toward Thamrin", "Continue along the pavements, following crossing signals and pedestrian flow."],["check", "Check traffic information", "Reconfirm access conditions before setting out or switching transport modes."]],
    accessLabel: "03 · Reaching the district", accessTitle: "Arrive through the city network, then walk slowly.", accessIntro: "Bundaran HI sits at the centre of Jakarta’s road and transport network. The best route depends on where you begin, the time, and that day’s traffic conditions.",
    transport: [["MRT", "Bundaran HI Bank Jakarta station serves the district. Continue on foot through the station exits and follow pedestrian wayfinding."],["TransJakarta", "Bundaran HI Astra stop is near the monument. Use the official stop access and check live routes with the operator."],["From the airport", "Use airport rail or a vehicle connection to the city centre, then transfer to MRT, TransJakarta or licensed vehicle services. Allow extra time because road conditions change."],["Taxi / ride-hail", "Set a safe, legal drop-off point in the surrounding area; do not ask a driver to stop in the roundabout lanes."],["Commuter rail & LRT", "Dukuh Atas is a transit district linking commuter rail, LRT, MRT and TransJakarta. Continue according to available connections."]],
    mapLabel: "Location map", mapTitle: "Bundaran HI, Central Jakarta", mapText: "Use the map for orientation. Watch traffic flow and always use an official crossing.",
    aroundLabel: "04 · Reading the surrounding city", aroundTitle: "One roundabout, many layers of Jakarta.",
    aroundCards: [["Cultural spaces", "Galleries, museums and cultural venues in central Jakarta can extend a quieter visit. Check official schedules and access before you go."],["Green pauses", "Choose a city park or public walking route for a break from traffic density. Carry water and consider the weather."],["Historic corridors", "Head toward the historic districts of central Jakarta to expand the city’s story from the early republic to today."],["Urban transit", "Dukuh Atas is useful for visitors who wish to observe integrated modes and walk through a contemporary public district."]],
    servicesLabel: "Practical needs", servicesTitle: "Facilities: plan ahead, do not assume.", services: [["Toilets & prayer", "Use public facilities or facilities legally available nearby; availability varies by hour and location."],["Food & drink", "The central city has many types of food and drink options. Choose according to your needs, budget and local rules."],["Parking", "Parking at the roundabout itself is not recommended. Consider public transport or formal parking in the wider area."],["Stays & essentials", "Central Jakarta offers many accommodation, retail and daily-needs types. Compare official information before choosing."],["Fuel & charging", "If driving, plan fuel or charging before entering a dense central-city corridor."]],
    faqLabel: "05 · Questions worth asking", faqTitle: "Before you arrive.",
    faqs: [["Can I enter Monumen Selamat Datang?", "No. The monument is in the middle of a traffic roundabout. Enjoy it from safe pedestrian areas, stations, or nearby public spaces."],["Is there an entry ticket?", "There is no ticket to view the monument from public space. Costs can arise from transport, formal parking, or other services around the district."],["When is the best time to visit?", "Morning or late afternoon can be more comfortable visually. Consider rain, traffic and public events on the day you visit."],["How do I reach the area from the airport?", "Use a connection into the city centre, then transfer to public transport or a licensed vehicle. Check current routes and travel times before starting."],["Is it suitable for children?", "It can be observed from public space with an accompanying adult, with close attention to traffic, crossings and heat."]],
    sourcesLabel: "Source notes", sourcesTitle: "Read from public sources, kept deliberately careful.", sourcesText: "The history and context in this guide refer to public information sources. Conditions on the ground can change; check official channels before travelling.",
    sourceLinks: [["Jakarta Provincial Government — Jakarta Landmarks", "https://www.jakarta.go.id/landmark-jakarta"],["Jakarta Smart City — Jakarta Then and Now", "https://smartcity.jakarta.go.id/id/blog/jakarta-dahulu-dan-sekarang-sejarah-lewat-foto"],["MRT Jakarta — service information", "https://www.jakartamrt.co.id/"],["Wikimedia Commons — Jakarta Bundaran HI (Adisurahman)", "https://commons.wikimedia.org/wiki/File:Jakarta_Bundaran_HI_.jpg"],["Wikimedia Commons — Bundaran HI per August 2023 (Baqotun0023)", "https://commons.wikimedia.org/wiki/File:Bundaran_HI_per_August_2023.jpg"]],
    footerNonOfficial: "This is an independent, non-profit visitor information guide. It is not affiliated with any government body or official organisation.", footerReference: "Information is referenced against public material from Central Jakarta Administrative City, the Jakarta Provincial Government and public transport sources. It contains no commercial recommendations.", footerCredit: "Image copyright remains with the respective photographers. See image credits and licences in the source notes.", footerCopyright: "© 2026 Monumen Selamat Datang Guide. Original design and content are protected.", footerLinks: { privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Settings" },
    privacy: { eyebrow: "Independent information guide", title: "Privacy Policy", updated: "Last updated: August 2026", intro: "We respect your privacy. This page explains our approach to data when you use the Monumen Selamat Datang Guide.", sections: [["Information that may be processed", "We aim to minimise data. Analytics can run only if you enable it in cookie settings. Technical providers may process basic browsing data such as an IP address, browser type, or requested page under their own policies."],["How information is used", "Aggregate information may be used to understand usage patterns, improve the guide’s clarity, respond to requests, and meet applicable legal duties."],["Third-party services", "Google Maps is used for location orientation. If analytics is enabled, Google Analytics may process data as described in Google’s policy. Those services have their own policies."],["Your rights", "Depending on applicable law, you may request access, correction, deletion, or object to personal-data processing through the relevant service provider."]] },
    terms: { eyebrow: "Independent information guide", title: "Terms of Service", updated: "Last updated: August 2026", intro: "By accessing this guide, you agree to use the information responsibly and to verify present conditions before travelling.", sections: [["Use of content", "All material is provided for general information. We are an independent third-party travel guide, not a representative of a site manager, government, or commercial operator."],["Accuracy of information", "We aim to present information carefully, but do not guarantee its completeness or accuracy at all times. Road conditions, services, access and events can change without notice."],["Intellectual property", "Original design and content are protected. Photos are used under the stated credits and licences. Google Maps is used under its provider’s terms."],["Limitation of responsibility", "This guide is provided as is. Travel decisions, road safety and service choices remain the visitor’s responsibility."]] },
    cookies: { eyebrow: "Your device choices", title: "Cookie Settings", updated: "Last updated: August 2026", intro: "Set how this device stores preferences. Choices apply only in the browser and device you are using.", essential: "Essential cookies", essentialText: "Needed to remember basic choices such as language and consent status. Always active.", analytics: "Analytics cookies", analyticsText: "Help us understand aggregate use. Google Analytics is enabled only after you give consent.", preference: "Preference cookies", preferenceText: "Remember your language choice and local field list.", marketing: "Marketing cookies", marketingText: "Not used by this guide.", save: "Save preferences", reject: "Reject analytics", saved: "Your preferences are stored on this device." }
  },
} as const;

export const languageName: Record<Lang, string> = { id: "ID", en: "EN" };

export function getRouteLanguage(): Lang {
  if (typeof window === "undefined") return "id";
  return window.localStorage.getItem("msd-language") === "en" ? "en" : "id";
}
