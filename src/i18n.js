// Central ID/EN strings for the portfolio.
export const LANG_KEY = "kouu-lang";

export function initialLang() {
  try {
    const v = localStorage.getItem(LANG_KEY);
    if (v === "id" || v === "en") return v;
  } catch {
    /* storage unavailable (e.g. some file:// contexts) */
  }
  return "en";
}

export const STRINGS = {
  en: {
    nav: {
      location: "Bandung · Indonesia",
      links: [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "work", label: "Work" },
        { id: "path", label: "Journey" },
        { id: "contact", label: "Contact" },
      ],
      index: "Index",
      langLabel: "Language",
    },
    transition: {
      home: "Home",
      about: "About",
      work: "Work",
      path: "Journey",
      contact: "Contact",
    },
    menu: {
      title: "Portfolio index",
      close: "Close",
      name: "Gading Khairlambang",
      tag: "Quality assurance · Odoo · Automation",
    },
    intro: {
      meta: "kouu / Portfolio",
      skip: "Skip intro",
    },
    home: {
      aria: "Home",
      kicker: "QA Engineer — Bandung, Indonesia",
      sub: "I test Odoo business flows and automate the boring parts — so users never meet the bugs I catch first.",
      viewWork: "View work →",
      getInTouch: "Get in touch →",
      facts: [
        { k: "Role", v: "QA Engineer at Ordonesia" },
        { k: "Focus", v: "Cypress · Playwright" },
        { k: "Education", v: "D4 Informatics · GPA 3.69" },
      ],
    },
    about: {
      aria: "About",
      kicker: "Profile",
      titleA: "I used to write the code. ",
      titleB: "Now I make sure it works.",
      story1lead: "I'm Khoirul, a QA Engineer at Ordonesia",
      story1rest:
        " in Bandung. My day-to-day is making sure Odoo implementations actually work: writing test cases, hunting bugs, and automating the boring parts with Cypress and Playwright.",
      story2:
        "Before QA, I was a frontend developer building React apps — which turned out to be the perfect background for breaking them professionally. These days I'm going deep on Odoo, both functional and technical, and sharing what I learn along the way.",
      facts: [
        {
          k: "Education",
          v: "D4 Informatics Engineering · ULBI",
          small: "Cumlaude · GPA 3.69",
        },
        {
          k: "Currently exploring",
          v: "Odoo Accounting · Server Actions",
          small: "Playwright & test automation",
        },
        {
          k: "Toolkit",
          chips: ["Odoo", "Cypress", "Playwright", "Manual Testing", "React"],
        },
      ],
    },
    work: {
      aria: "Work",
      kicker: "Selected Work",
      titleA: "Things I've ",
      titleB: "built.",
      lede: "Five projects from my builder years — each one taught me something I still use when I test software today.",
      projects: [
        {
          n: "01",
          title: "FarmRadius",
          tag: "Web app",
          blurb:
            "A web project shaped around practical poultry-farm management needs.",
          link: "https://farm-radius-izpv.vercel.app/",
          linkLabel: "Live ↗",
        },
        {
          n: "02",
          title: "SIBI Translator",
          tag: "Accessibility",
          blurb:
            "A translation project focused on Indonesian sign language accessibility.",
          link: null,
          linkLabel: null,
        },
        {
          n: "03",
          title: "U-Vote",
          tag: "Application",
          blurb:
            "A voting application developed as part of my software-building journey.",
          link: null,
          linkLabel: null,
        },
        {
          n: "04",
          title: "Admin Dashboard",
          tag: "Frontend",
          blurb:
            "A frontend exercise in dashboard structure, information hierarchy, and interface states.",
          link: null,
          linkLabel: null,
        },
        {
          n: "05",
          title: "Golang API",
          tag: "Backend",
          blurb:
            "A backend learning project for understanding API structure with Go.",
          link: null,
          linkLabel: null,
        },
      ],
    },
    path: {
      aria: "Journey",
      kicker: "Journey",
      titleA: "From interfaces to ",
      titleB: "quality.",
      lede: "Every step taught me something I still use — including how to break things properly.",
      experienceLabel: "Experience",
      educationLabel: "Education",
      nowBadge: "Now",
      experience: [
        {
          period: "Aug 2026 — now",
          title: "QA Engineer · Ordonesia",
          org: "Odoo Tech · Bandung · Full-time",
          note: "Testing Odoo business flows while deepening my functional, technical, and automation skills.",
          now: true,
        },
        {
          period: "May 2026 — Aug 2026",
          title: "QA Engineer (Contract) · Ordonesia",
          org: "Odoo Tech · Bandung",
          note: "UAT scenarios and Playwright automation across Manufacturing and Inventory modules.",
          now: false,
        },
        {
          period: "Nov 2025 — May 2026",
          title: "QA Intern · Ordonesia",
          org: "Odoo Tech · Bandung",
          note: "Learned Odoo from scratch: test cases, bug reports, Cypress, and XML customization.",
          now: false,
        },
        {
          period: "Sep 2025 — Dec 2025",
          title: "Frontend Developer · BRIN RI",
          org: "Apprenticeship · Bandung (Hybrid)",
          note: "Built React portals for research divisions. Where I learned how interfaces are made — before learning how to break them.",
          now: false,
        },
        {
          period: "Jun 2023 — Sep 2024",
          title: "Catalog Manager · Bukupedia",
          org: "Freelance · Bandung (Hybrid)",
          note: null,
          now: false,
        },
        {
          period: "Jul 2021 — Oct 2021",
          title: "Construction Supervisor Intern · Telkom Akses",
          org: "Apprenticeship · Remote",
          note: null,
          now: false,
        },
      ],
      education: [
        {
          period: "Sep 2022 — Jun 2026",
          title: "D4 Teknik Informatika · ULBI",
          org: "Cumlaude · GPA 3.69",
          note: "Graduated with honors. The foundation everything else stands on.",
        },
        {
          period: "Jul 2019 — Jun 2022",
          title: "Teknik Jaringan Akses Telekomunikasi · SMK Telkom Bandung",
          org: "Lab Assistant & Volunteer",
          note: null,
        },
      ],
    },
    contact: {
      aria: "Contact",
      kicker: "Contact",
      titleA: "Have something worth testing? ",
      titleB: "Let’s talk.",
      sub: "I’m open to conversations around software quality, Odoo, and test automation — or just a hello from a fellow builder.",
      footName: "Gading Khairlambang",
      footRole: "QA Engineer · Bandung",
    },
  },

  id: {
    nav: {
      location: "Bandung · Indonesia",
      links: [
        { id: "home", label: "Beranda" },
        { id: "about", label: "Tentang" },
        { id: "work", label: "Karya" },
        { id: "path", label: "Perjalanan" },
        { id: "contact", label: "Kontak" },
      ],
      index: "Indeks",
      langLabel: "Bahasa",
    },
    transition: {
      home: "Beranda",
      about: "Tentang",
      work: "Karya",
      path: "Perjalanan",
      contact: "Kontak",
    },
    menu: {
      title: "Indeks portofolio",
      close: "Tutup",
      name: "Gading Khairlambang",
      tag: "Quality assurance · Odoo · Otomasi",
    },
    intro: {
      meta: "kouu / Portofolio",
      skip: "Lewati intro",
    },
    home: {
      aria: "Beranda",
      kicker: "QA Engineer — Bandung, Indonesia",
      sub: "Saya menguji alur bisnis Odoo dan mengotomatisasi hal-hal membosankan — supaya pengguna tidak pernah bertemu bug yang saya tangkap duluan.",
      viewWork: "Lihat karya →",
      getInTouch: "Hubungi saya →",
      facts: [
        { k: "Peran", v: "QA Engineer di Ordonesia" },
        { k: "Fokus", v: "Cypress · Playwright" },
        { k: "Pendidikan", v: "D4 Informatika · IPK 3,69" },
      ],
    },
    about: {
      aria: "Tentang",
      kicker: "Profil",
      titleA: "Dulu saya menulis kodenya. ",
      titleB: "Sekarang saya memastikannya berfungsi.",
      story1lead: "Saya Khoirul, QA Engineer di Ordonesia",
      story1rest:
        ", Bandung. Keseharian saya memastikan implementasi Odoo benar-benar berjalan: menulis test case, berburu bug, dan mengotomatisasi hal-hal membosankan dengan Cypress dan Playwright.",
      story2:
        "Sebelum QA, saya frontend developer yang membangun aplikasi React — ternyata bekal yang pas untuk merusaknya secara profesional. Sekarang saya mendalami Odoo, baik fungsional maupun teknis, dan membagikan yang saya pelajari di sepanjang jalan.",
      facts: [
        {
          k: "Pendidikan",
          v: "D4 Teknik Informatika · ULBI",
          small: "Cumlaude · IPK 3,69",
        },
        {
          k: "Sedang didalami",
          v: "Odoo Accounting · Server Actions",
          small: "Playwright & otomasi testing",
        },
        {
          k: "Toolkit",
          chips: ["Odoo", "Cypress", "Playwright", "Manual Testing", "React"],
        },
      ],
    },
    work: {
      aria: "Karya",
      kicker: "Karya Pilihan",
      titleA: "Yang pernah saya ",
      titleB: "bangun.",
      lede: "Lima proyek dari masa-masa saya membangun — masing-masing mengajarkan sesuatu yang masih saya pakai saat menguji software hari ini.",
      projects: [
        {
          n: "01",
          title: "FarmRadius",
          tag: "Aplikasi web",
          blurb:
            "Proyek web untuk kebutuhan praktis manajemen peternakan ayam.",
          link: "https://farm-radius-izpv.vercel.app/",
          linkLabel: "Live ↗",
        },
        {
          n: "02",
          title: "SIBI Translator",
          tag: "Aksesibilitas",
          blurb:
            "Proyek penerjemah untuk aksesibilitas bahasa isyarat Indonesia (SIBI).",
          link: null,
          linkLabel: null,
        },
        {
          n: "03",
          title: "U-Vote",
          tag: "Aplikasi",
          blurb:
            "Aplikasi voting yang dikembangkan sebagai bagian dari perjalanan saya membangun software.",
          link: null,
          linkLabel: null,
        },
        {
          n: "04",
          title: "Admin Dashboard",
          tag: "Frontend",
          blurb:
            "Latihan frontend soal struktur dashboard, hierarki informasi, dan state antarmuka.",
          link: null,
          linkLabel: null,
        },
        {
          n: "05",
          title: "Golang API",
          tag: "Backend",
          blurb:
            "Proyek belajar backend untuk memahami struktur API dengan Go.",
          link: null,
          linkLabel: null,
        },
      ],
    },
    path: {
      aria: "Perjalanan",
      kicker: "Perjalanan",
      titleA: "Dari antarmuka ke ",
      titleB: "kualitas.",
      lede: "Setiap langkah mengajarkan sesuatu yang masih saya pakai — termasuk cara merusak sesuatu dengan benar.",
      experienceLabel: "Pengalaman",
      educationLabel: "Pendidikan",
      nowBadge: "Kini",
      experience: [
        {
          period: "Agu 2026 — kini",
          title: "QA Engineer · Ordonesia",
          org: "Odoo Tech · Bandung · Full-time",
          note: "Menguji alur bisnis Odoo sambil memperdalam skill fungsional, teknis, dan otomasi.",
          now: true,
        },
        {
          period: "Mei 2026 — Agu 2026",
          title: "QA Engineer (Kontrak) · Ordonesia",
          org: "Odoo Tech · Bandung",
          note: "Skenario UAT dan otomasi Playwright untuk modul Manufacturing dan Inventory.",
          now: false,
        },
        {
          period: "Nov 2025 — Mei 2026",
          title: "QA Intern · Ordonesia",
          org: "Odoo Tech · Bandung",
          note: "Belajar Odoo dari nol: test case, bug report, Cypress, dan kustomisasi XML.",
          now: false,
        },
        {
          period: "Sep 2025 — Des 2025",
          title: "Frontend Developer · BRIN RI",
          org: "Apprenticeship · Bandung (Hybrid)",
          note: "Membangun portal React untuk divisi riset. Di sinilah saya belajar cara antarmuka dibuat — sebelum belajar cara merusaknya.",
          now: false,
        },
        {
          period: "Jun 2023 — Sep 2024",
          title: "Catalog Manager · Bukupedia",
          org: "Freelance · Bandung (Hybrid)",
          note: null,
          now: false,
        },
        {
          period: "Jul 2021 — Okt 2021",
          title: "Construction Supervisor Intern · Telkom Akses",
          org: "Apprenticeship · Remote",
          note: null,
          now: false,
        },
      ],
      education: [
        {
          period: "Sep 2022 — Jun 2026",
          title: "D4 Teknik Informatika · ULBI",
          org: "Cumlaude · IPK 3,69",
          note: "Lulus dengan pujian. Fondasi dari segalanya.",
        },
        {
          period: "Jul 2019 — Jun 2022",
          title: "Teknik Jaringan Akses Telekomunikasi · SMK Telkom Bandung",
          org: "Lab Assistant & Volunteer",
          note: null,
        },
      ],
    },
    contact: {
      aria: "Kontak",
      kicker: "Kontak",
      titleA: "Punya sesuatu yang layak diuji? ",
      titleB: "Mari bicara.",
      sub: "Saya terbuka untuk diskusi soal kualitas software, Odoo, dan otomasi testing — atau sekadar sapa dari sesama builder.",
      footName: "Gading Khairlambang",
      footRole: "QA Engineer · Bandung",
    },
  },
};
