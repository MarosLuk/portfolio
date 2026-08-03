/* ============================================
   Maroš Lukáč — Portfolio
   Translations: EN (default) / SK
   Every visible string lives here.
   ============================================ */

const I18N = {
  /* ============================================================
     ENGLISH
     ============================================================ */
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },

    hero: {
      eyebrow: 'Maroš Lukáč · Lead Developer & Founder',
      title: 'I build products from first commit to <span class="accent">live users</span>.',
      subtitle: 'Full-stack & mobile developer from Slovakia. I design, build and ship production web and mobile systems end-to-end — Flutter, React Native, React, Kotlin, Swift and TypeScript/Node.',
      ctaProjects: 'View projects',
      ctaContact: 'Get in touch'
    },

    about: {
      label: 'About me',
      title: 'Developer, founder,<br>product owner.',
      p1: 'I\'m a lead developer and founder based in <strong>Martin, Slovakia</strong>. Over the last years I\'ve shipped production systems for government, health insurance, fitness and construction — and a growing family of my own products.',
      p2: 'I run my own studio <strong>MATROSOFT s.r.o.</strong>, co-own <strong>Dakoty Studio</strong>, and lead development of apps like <strong>GardenYX</strong> and <strong>FitJam</strong>. At <strong>Asseco Central Europe</strong> I work on large-scale mobile and web projects such as VšZP, U+ and Slovak government e-wallet apps.',
      p3: 'I hold a master\'s degree from the <strong>Faculty of Informatics and Information Technologies, STU Bratislava</strong>. Away from the keyboard: economics, fitness, cars and motorcycles.',
      fact1n: '4+',
      fact1l: 'years of professional experience',
      fact2n: '15+',
      fact2l: 'projects designed & shipped',
      fact3n: '2',
      fact3l: 'companies founded / co-owned',
      skillsMobile: 'Mobile',
      skillsFrontend: 'Frontend',
      skillsBackend: 'Backend & data',
      skillsAI: 'AI & cloud',
      skillsTesting: 'Quality'
    },

    exp: {
      label: 'Experience',
      title: 'Where I\'ve worked',
      e1p: 'Jun 2025 — Present',
      e1r: 'Owner & Lead Developer',
      e1c: 'MATROSOFT s.r.o. · Žilina, Slovakia',
      e1d: 'My own software studio. Building Polier — a white-label information system for construction companies — and delivering full-stack client work.',
      e2p: 'Mar 2025 — Present',
      e2r: 'Co-owner & Lead Developer',
      e2c: 'Dakoty Studio s.r.o.',
      e2d: 'Product studio. Leading development of Dakoty-AI, a multi-model AI chat assistant.',
      e3p: 'Jan 2025 — Present',
      e3r: 'Lead Developer',
      e3c: 'Joina Garden s.r.o.',
      e3d: 'GardenYX — AI plant identification & care app. Full-stack from scratch: Flutter app, TypeScript API, PostgreSQL and AI service integrations.',
      e4p: 'Jul 2024 — Present',
      e4r: 'Lead Developer',
      e4c: 'All Soft Corp s.r.o.',
      e4d: 'Frontend for mobile applications — backend integration, caching and modern design systems.',
      e5p: 'Jan 2024 — Present',
      e5r: 'Lead Developer',
      e5c: 'FitJam Global Platform · Dubai, UAE',
      e5d: 'Global fitness platform. Flutter app built from scratch, parts of the TypeScript backend and Swift integration for Apple Watch.',
      e6p: 'Jan 2023 — Present',
      e6r: 'Frontend & Test Automation Developer',
      e6c: 'Asseco Central Europe, a.s.',
      e6d: 'Large-scale mobile & web projects: VšZP (Kotlin, Swift, web), U+ SK/CZ & CH/AT, PGSK, NICL (React Native), E-peňaženka — Slovak government mobile apps. Automated tests across all of them.',
      e7p: 'May 2022 — Dec 2022',
      e7r: 'IT Tester',
      e7c: 'Asseco Central Europe, a.s.',
      e7d: 'Manual and automated testing of enterprise applications.'
    },

    projects: {
      label: 'Projects',
      title: 'Things I\'ve built',
      intro: 'A selection of products I own or lead — from AI-powered mobile apps to multi-tenant enterprise systems. Every project has its own detail page.'
    },

    cards: {
      gardenyx: 'AI plant identification & care app — snap a photo, get a personalized care plan. Flutter + TypeScript + PostgreSQL.',
      fitjam: 'Global fitness & wellness platform — workouts, nutrition, community and live streaming. Live in production.',
      polier: 'White-label multi-tenant system for construction companies — GPS attendance, site reports, HR, fleet. Built by MATROSOFT.',
      hillconqueror: 'Gamified peak hunting — GPS + photo summit check-ins, trophies and leaderboards. Flutter + NestJS + PostGIS.',
      dakotyai: 'Multi-model AI chat assistant with voice, image and video input. Flagship product of Dakoty Studio.',
      casa3d: 'Film your home with a phone, walk through it in the browser — Gaussian Splatting in 3D.',
      acrea: 'AI pipeline generating Slovak building documentation across 10 engineering professions, integrated with ArchiCAD.',
      ea: 'Personal AI chief-of-staff — Telegram, iMessage, mail, calendar, research and real-world bookings.',
      aiagents: 'GDPR-safe AI agent packs for small businesses, running locally at the customer. First pack: CFO in a box.',
      vszp: 'Official app & web of Slovakia\'s largest health insurer — digital insurance card, e-prescriptions, health records. Kotlin, Swift & web.',
      nicl: 'CYRIL — the Slovak national integrated travel ticket. One app, one QR code, 39 carriers. React Native mobile + web.',
      epenazenka: 'Receipt-verification app of the Slovak Financial Administration — scan any e-kasa QR receipt and verify it instantly.',
      youplus: 'Fully digital life insurer YOUPLUS — web platforms for four markets: Slovakia, Czechia, Austria and Switzerland.',
      pgsk: 'Web ecosystem of PARTNERS GROUP SK — one of Slovakia\'s largest financial advisories — and its digital insurer.'
    },

    contact: {
      label: 'Contact',
      title: 'Let\'s build something together.',
      text: 'Have a project in mind, or just want to talk tech? My inbox is always open — I\'ll get back to you as soon as I can.',
      cta: 'Say hello',
      ctaCall: 'Call me',
      location: 'Martin, Slovakia'
    },

    footer: {
      rights: 'All rights reserved.',
      built: 'Designed & built by hand — plain HTML, CSS and JavaScript.'
    },

    status: {
      live: 'Live in production',
      dev: 'In development',
      proto: 'Prototype',
      exp: 'Experiment',
      daily: 'In daily use',
      ongoing: 'Ongoing'
    },

    time: {
      since2023: '2023 — Present',
      since2024: '2024 — Present',
      since2025: '2025 — Present',
      in2025: '2025'
    },

    proj: {
      back: 'All projects',
      overview: 'Overview',
      features: 'Key features',
      myrole: 'My role',
      stack: 'Tech stack',
      info: 'Project info',
      role: 'Role',
      timeline: 'Timeline',
      platform: 'Platform',
      status: 'Status',
      next: 'Next project',
      prev: 'Previous project',
      gallery: 'App screenshots',
      links: 'Links',
      linkWeb: 'Website',
      linkAppStore: 'App Store',
      linkPlay: 'Google Play'
    },

    p: {
      gardenyx: {
        tagline: 'AI-powered plant identification and care companion. Snap a photo, know your plant — and never forget to water it again.',
        role: 'Lead Developer (full-stack)',
        ov1: 'GardenYX is a Flutter app for iOS and Android (with a web build) that identifies plants from a photo and turns the result into a personalized care plan. It is Slovak-first and fully localized into English, Hungarian and Czech.',
        ov2: 'Identification combines the Plant.id API for a fast scientific match with a Gemini-backed content cache that fills in rich, localized care instructions in the background. Users organize plants into gardens and rooms, get watering and fertilizing reminders, and unlock premium features through subscriptions.',
        features: [
          'Instant plant identification from a photo — Plant.id enriched with iNaturalist and Perenual data',
          'Localized care content generated and cached with Gemini 2.5',
          'Gardens & rooms — organize plants the way your home is organized',
          'Watering, fertilizing and care schedules with push reminders',
          'Sign-in with e-mail, Google or Apple; cloud sync via Firebase',
          'Premium subscriptions powered by RevenueCat',
          'Four languages: Slovak, English, Hungarian, Czech'
        ],
        roleDesc: 'I built the entire product from scratch as lead developer for Joina Garden s.r.o. — the Flutter app, the TypeScript/Express API with PostgreSQL, the AI integration layer and the release pipeline to both app stores.'
      },

      fitjam: {
        tagline: 'A global fitness & wellness platform — workouts, nutrition, mindfulness, community and live streaming in one app.',
        role: 'Lead Developer',
        ov1: 'FitJam is a production fitness platform headquartered in Dubai. The Flutter app (iOS-first) covers the whole wellness journey: guided workouts, diet and nutrition plans, mindfulness and recovery content, community features, live streaming and health tracking with wearable integration.',
        ov2: 'The app follows a clean architecture (service → repository → usecase → viewmodel → UI) built on Riverpod and is live in production at version 2.3+. Subscriptions run on RevenueCat and Stripe; the TypeScript/Express backend is migrating from SQLite to PostgreSQL, with Firebase for auth and messaging and Gemini powering AI features.',
        features: [
          'Workouts, diet & nutrition, mindfulness and recovery modules',
          'Community features and live streaming',
          'Health tracking with Apple Watch integration (Swift)',
          'Subscriptions via RevenueCat + Stripe',
          'Admin web panel for content and user management',
          'Clean architecture with full observability and release process'
        ],
        roleDesc: 'As lead developer I built most of the Flutter frontend from scratch, implemented parts of the TypeScript backend, and delivered the Swift integration for Apple Watch.'
      },

      polier: {
        tagline: 'White-label, multi-tenant information system for construction and scaffolding companies — built by my studio, MATROSOFT.',
        role: 'Founder & Lead Developer',
        ov1: 'Polier digitizes the daily operations of construction firms. The first tenant is MK Gerüstbau, a scaffolding company in Germany. Field workers use an offline-capable Expo app for GPS attendance and geotagged daily photo reports; managers run the company from a Next.js dashboard.',
        ov2: 'Modules cover projects & CRM, HR (leave, sick days, certifications), workplace safety, warehouse, fleet, worker housing, internal communication and e-signed contracts — governed by role-based access control with seven roles, localized into Slovak, English and German.',
        features: [
          'GPS attendance for field workers with offline support',
          'Daily site reports with geotagged photos',
          'Projects & CRM, HR, safety, warehouse and fleet modules',
          'E-signed contracts and worker housing management',
          'Role-based access control with 7 roles',
          'Multi-tenant white-label architecture, i18n SK / EN / DE'
        ],
        roleDesc: 'Polier is my own product: as founder of MATROSOFT s.r.o. I designed the architecture and lead development end-to-end — the Express + Prisma + PostgreSQL API, the Next.js 14 web apps and the Expo field app.'
      },

      hillconqueror: {
        tagline: 'Gamified peak hunting — check in on summits with GPS and photos, collect trophies and beat your friends.',
        role: 'Creator & Full-stack Developer',
        ov1: 'HillConqueror turns hiking into a collecting game. Every mountain summit becomes a collectible: you verify your presence with a GPS + photo check-in, earn peaks and trophies, and climb leaderboards against your friends.',
        ov2: 'The Flutter app uses MapLibre maps; the NestJS API runs PostgreSQL with PostGIS geospatial queries on Neon, with Drizzle ORM and Firebase Auth. Background workers sync the global peak database from OpenStreetMap and drive the achievement engine. Infrastructure is Terraform on Fly.io behind Cloudflare — the API already runs live.',
        features: [
          'GPS + photo verified summit check-ins',
          'Global peak database synced from OpenStreetMap',
          'Achievement & trophy engine with background workers',
          'Leaderboards among friends',
          'MapLibre / MapTiler maps',
          'Terraform-managed infrastructure on Fly.io + Cloudflare'
        ],
        roleDesc: 'A personal product — I design and build everything myself: the mobile app, the geospatial backend, the workers and the infrastructure.'
      },

      dakotyai: {
        tagline: 'One chat, many minds — a multi-model AI assistant with voice, image and video input.',
        role: 'Co-owner & Lead Developer',
        ov1: 'Dakoty-AI is the flagship product of Dakoty Studio, which I co-own. It is a Flutter chat assistant that lets users talk to multiple AI models from a single place, with audio, image and video input, and persona-based "occupations" that tune the assistant for a specific task.',
        ov2: 'The app is built on Riverpod and go_router, with Firebase (Auth, Firestore, Messaging, Crashlytics), Google and Apple sign-in, local persistence via sqflite, and a companion backend.',
        features: [
          'Multiple AI models available in one chat',
          'Voice input and audio playback',
          'Image and video understanding',
          'Persona / occupation presets for different tasks',
          'Google & Apple sign-in, cloud sync',
          'Local chat history with offline access'
        ],
        roleDesc: 'As co-owner of Dakoty Studio I lead product direction and development across the Flutter app and its backend.'
      },

      casa3d: {
        tagline: 'Film your home with a phone — then walk through it in the browser as a photorealistic 3D world.',
        role: 'Creator',
        ov1: 'Casa3D explores Gaussian Splatting for real-estate and interior use-cases: a phone-camera capture is reconstructed into a photorealistic, walkable 3D scene rendered directly in the browser.',
        ov2: 'The React + Three.js web app renders .ksplat scenes and simulates the processing pipeline for demos; the real reconstruction runs in a local Python pipeline built on ffmpeg, COLMAP, Nerfstudio and gsplat. A production backend on FastAPI + Celery + S3 is designed and ready to build.',
        features: [
          'In-browser Gaussian splat rendering (Three.js)',
          'Phone video → 3D reconstruction pipeline (COLMAP, Nerfstudio, gsplat)',
          'Walkable first-person navigation',
          'Demo mode simulating the full processing pipeline',
          'Production architecture designed: FastAPI + Celery + S3'
        ],
        roleDesc: 'A solo experiment — I built the web app and the reconstruction pipeline end-to-end.'
      },

      acrea: {
        tagline: 'AI that writes Slovak building documentation — ten engineering professions, one pipeline.',
        role: 'Sole Developer',
        ov1: 'Acrea generates the technical documentation package for Slovak architectural projects — statics, HVAC, plumbing, gas, electrical, energy assessment and more — following Slovak STN standards and Eurocodes.',
        ov2: 'It runs as a back-office AI pipeline behind ArchiCAD, connected through the Tapir bridge: Claude produces the technical reports, calculations and tables as structured documents rendered to PDF, while the CAD drawings remain in the architect\'s hands.',
        features: [
          'Documentation for 10 engineering professions',
          'STN standard & Eurocode-aware generation',
          'ArchiCAD integration through the Tapir bridge',
          'Structured PDF output with reportlab',
          'Claude-powered pipeline with strict Pydantic validation'
        ],
        roleDesc: 'Sole developer — I designed and built the entire pipeline: the Python + Pydantic domain model, the Claude integration, the FastAPI server and the PDF rendering.'
      },

      ea: {
        tagline: 'A personal AI chief-of-staff that runs my calendar, mail, messages — and books real things in the real world.',
        role: 'Creator',
        ov1: 'A single Python process running on my Mac that acts as a real executive assistant: it talks to me over Telegram, reads and sends iMessages and e-mail, manages my calendar, does web research and briefs me every morning.',
        ov2: 'It also books things — hotels, sport courts and restaurants — through a zero-shot booking concierge that drives a real browser with Playwright, with a single yes/no confirmation gate before any final click. Built on Gemini function calling and Vision.',
        features: [
          'Telegram interface controlling iMessage, Mail and Calendar',
          'Morning briefings and meeting scheduling',
          'Web research with source gathering',
          'Booking concierge: hotels, sport courts, restaurants',
          'AppleScript automation of native macOS apps',
          'Single confirmation gate before any irreversible action'
        ],
        roleDesc: 'A personal project designed and built entirely by me — and used every day.'
      },

      aiagents: {
        tagline: 'Specialized AI agents for small businesses — GDPR-safe, running locally at the customer.',
        role: 'Creator',
        ov1: 'Productized packs of AI agents, each solving one business function for small and medium businesses in Slovakia and Czechia. The first pack, "CFO in a box", is a financial analyst that understands Pohoda accounting exports.',
        ov2: 'Everything runs locally at the customer for GDPR compliance: a Claude-based runtime distributed via Docker Compose, with domain-specific MCP servers (like pohoda-mcp) giving the agents structured access to business data.',
        features: [
          'Agent packs targeting one business function each',
          '"CFO in a box" — financial analyst for SK/CZ firms',
          'Fully local execution — data never leaves the company',
          'Pohoda accounting integration via a custom MCP server',
          'Docker Compose distribution'
        ],
        roleDesc: 'Creator — concept, agent design and the MCP integration servers.'
      },

      vszp: {
        tagline: 'The official app of Slovakia\'s largest health insurance company — a digital insurance card, health records and e-prescriptions in every pocket.',
        role: 'Frontend & Test Automation Developer',
        ov1: 'The VšZP mobile app ("Apka VšZP") and web give policyholders of Všeobecná zdravotná poisťovňa — the largest Slovak public health insurer — a digital insurance card (including the European EHIC) for themselves and their children, access to health records and e-prescriptions with drug-interaction warnings, overviews of provided care, and the "Peňaženka zdravia" benefits program.',
        ov2: 'The app also finds nearby doctors, pharmacies and emergency services, signs users in with facial biometrics, and is localized into Slovak, English and Hungarian. I work on it at Asseco Central Europe as part of a long-running product team.',
        features: [
          'Digital insurance card incl. the European EHIC — for you and your children',
          'Health records and e-prescriptions with drug-interaction warnings',
          '"Peňaženka zdravia" — the insurer\'s benefits program',
          'Locator for doctors, pharmacies and emergency services',
          'Biometric (face) sign-in',
          'Localized into Slovak, English and Hungarian'
        ],
        roleDesc: 'At Asseco Central Europe I develop the native mobile frontends — Android (Kotlin) and iOS (Swift) — and the web, and I build the automated test suites that guard every release.'
      },

      nicl: {
        tagline: 'One ticket for the whole of Slovakia — trains, regional buses and city transport in a single app with one QR code.',
        role: 'React Native Developer (mobile & web)',
        ov1: 'CYRIL is the app of the Slovak National Integrated Travel Ticket (NICL), run by the Ministry of Transport and delivered by Asseco Central Europe. It merges 39 carriers — railways, regional buses and city transit — into a single ticket represented by one QR code.',
        ov2: 'Launched commercially in July 2026, it supports card payments, Apple Pay and Google Pay, plus a Bluetooth-beacon "pay as you go" mode in cities. The mobile apps are built in React Native, alongside a web app at cyril.sk.',
        features: [
          'One QR-code ticket valid across 39 carriers',
          'Trains, regional buses and city transit in one purchase',
          'Card payments, Apple Pay and Google Pay',
          'Bluetooth-beacon PAYGO check-in mode in cities',
          'React Native mobile apps + web app (cyril.sk)'
        ],
        roleDesc: 'At Asseco Central Europe I develop the React Native frontends — the mobile apps and the web — and write automated tests for the platform.'
      },

      epenazenka: {
        tagline: 'The Slovak Financial Administration\'s receipt app — scan the QR code on any receipt and instantly know it\'s genuine.',
        role: 'Mobile Frontend Developer',
        ov1: 'ePeňaženka is the official app of the Financial Administration of the Slovak Republic. Users scan the QR code on a cash-register receipt and the app verifies it against the national e-kasa system — showing the verified detail, or warning that the receipt does not exist in e-kasa.',
        ov2: 'Registered users can also store receipts for warranty claims, browse a chronological purchase history and track their spending. Suspicious receipts can be reported to the Financial Administration directly from the app.',
        features: [
          'QR scanning and instant verification against e-kasa',
          'Receipt storage for warranty claims',
          'Chronological purchase history and spending overview',
          'Direct reporting of suspicious receipts'
        ],
        roleDesc: 'I work on the frontend of the mobile applications and their automated test coverage.'
      },

      youplus: {
        tagline: 'Web platforms for a paperless, fully digital life-insurance brand across four European markets.',
        role: 'Frontend & Test Automation Developer',
        ov1: 'YOUPLUS (branded "U+") is a fully digital life insurer headquartered in Liechtenstein, selling in Slovakia, Czechia, Austria and Switzerland. Asseco Central Europe is its main digital-solutions provider, running the brand\'s web ecosystem on the IooX insurance platform.',
        ov2: 'The country websites cover product presentation, claims reporting and a document center, and act as entry points into the uPortal self-service for clients and brokers — all fully digital and paperless.',
        features: [
          'Four country webs: youplus.sk / youplus.cz / youplus.at / youplus.ch',
          'Fully digital, paperless insurance flows',
          'uPortal self-service for clients and brokers',
          'Claims reporting and document center',
          'Runs on Asseco\'s IooX insurance platform'
        ],
        roleDesc: 'At Asseco Central Europe I develop the web frontends for the SK/CZ and CH/AT markets and maintain their automated test suites.'
      },

      pgsk: {
        tagline: 'The digital web presence of one of Slovakia\'s largest financial-advisory groups and its fully digital insurance company.',
        role: 'Frontend Developer',
        ov1: 'PARTNERS GROUP SK is one of the largest Slovak financial-advisory groups, with around 1,600 advisors. Its sister company PARTNERS poisťovňa is a fully digital risk-life insurer running on Asseco\'s IooX insurance platform.',
        ov2: 'The web ecosystem spans the group\'s public websites, the product presentation of PARTNERS poisťovňa, and the client & advisor portal with single sign-on.',
        features: [
          'Public websites of the group and the insurer',
          'Client & advisor portal with SSO',
          'Fully digital insurance flows on the IooX platform'
        ],
        roleDesc: 'At Asseco Central Europe I work on frontend development for the web platform and its automated tests.'
      }
    }
  },

  /* ============================================================
     SLOVENČINA
     ============================================================ */
  sk: {
    nav: {
      about: 'O mne',
      experience: 'Skúsenosti',
      projects: 'Projekty',
      contact: 'Kontakt'
    },

    hero: {
      eyebrow: 'Maroš Lukáč · Lead Developer & zakladateľ',
      title: 'Tvorím produkty od prvého commitu až po <span class="accent">reálnych používateľov</span>.',
      subtitle: 'Full-stack a mobilný vývojár zo Slovenska. Navrhujem, staviam a nasadzujem produkčné webové a mobilné systémy od začiatku do konca — Flutter, React Native, React, Kotlin, Swift a TypeScript/Node.',
      ctaProjects: 'Pozrieť projekty',
      ctaContact: 'Napíšte mi'
    },

    about: {
      label: 'O mne',
      title: 'Vývojár, zakladateľ,<br>product owner.',
      p1: 'Som lead developer a zakladateľ z <strong>Martina</strong>. Za posledné roky som dodal produkčné systémy pre štátnu správu, zdravotnú poisťovňu, fitness aj stavebníctvo — a rastúcu rodinu vlastných produktov.',
      p2: 'Vediem vlastné štúdio <strong>MATROSOFT s.r.o.</strong>, som spolumajiteľom <strong>Dakoty Studio</strong> a vediem vývoj aplikácií ako <strong>GardenYX</strong> či <strong>FitJam</strong>. V <strong>Asseco Central Europe</strong> pracujem na veľkých mobilných a webových projektoch ako VšZP, U+ a mobilné aplikácie štátnej e-peňaženky.',
      p3: 'Vyštudoval som inžinierske štúdium na <strong>Fakulte informatiky a informačných technológií STU v Bratislave</strong>. Mimo klávesnice: ekonómia, fitness, autá a motorky.',
      fact1n: '4+',
      fact1l: 'roky profesionálnych skúseností',
      fact2n: '15+',
      fact2l: 'navrhnutých a dodaných projektov',
      fact3n: '2',
      fact3l: 'založené / spoluvlastnené firmy',
      skillsMobile: 'Mobil',
      skillsFrontend: 'Frontend',
      skillsBackend: 'Backend a dáta',
      skillsAI: 'AI a cloud',
      skillsTesting: 'Kvalita'
    },

    exp: {
      label: 'Skúsenosti',
      title: 'Kde som pracoval',
      e1p: 'Jún 2025 — súčasnosť',
      e1r: 'Majiteľ & Lead Developer',
      e1c: 'MATROSOFT s.r.o. · Žilina',
      e1d: 'Vlastné softvérové štúdio. Staviam Polier — white-label informačný systém pre stavebné firmy — a dodávam full-stack riešenia pre klientov.',
      e2p: 'Marec 2025 — súčasnosť',
      e2r: 'Spolumajiteľ & Lead Developer',
      e2c: 'Dakoty Studio s.r.o.',
      e2d: 'Produktové štúdio. Vediem vývoj Dakoty-AI — multimodelového AI chat asistenta.',
      e3p: 'Január 2025 — súčasnosť',
      e3r: 'Lead Developer',
      e3c: 'Joina Garden s.r.o.',
      e3d: 'GardenYX — AI aplikácia na identifikáciu rastlín a starostlivosť o ne. Full-stack od nuly: Flutter appka, TypeScript API, PostgreSQL a integrácie AI služieb.',
      e4p: 'Júl 2024 — súčasnosť',
      e4r: 'Lead Developer',
      e4c: 'All Soft Corp s.r.o.',
      e4d: 'Frontend mobilných aplikácií — napojenie na backend, cachovanie a moderné dizajnové systémy.',
      e5p: 'Január 2024 — súčasnosť',
      e5r: 'Lead Developer',
      e5c: 'FitJam Global Platform · Dubaj, SAE',
      e5d: 'Globálna fitness platforma. Flutter aplikácia postavená od nuly, časti TypeScript backendu a Swift integrácia pre Apple Watch.',
      e6p: 'Január 2023 — súčasnosť',
      e6r: 'Frontend & Test Automation Developer',
      e6c: 'Asseco Central Europe, a.s.',
      e6d: 'Veľké mobilné a webové projekty: VšZP (Kotlin, Swift, web), U+ SK/CZ & CH/AT, PGSK, NICL (React Native), E-peňaženka — mobilné aplikácie pre štát. Automatizované testy naprieč všetkými.',
      e7p: 'Máj 2022 — December 2022',
      e7r: 'IT Tester',
      e7c: 'Asseco Central Europe, a.s.',
      e7d: 'Manuálne a automatizované testovanie enterprise aplikácií.'
    },

    projects: {
      label: 'Projekty',
      title: 'Čo som postavil',
      intro: 'Výber produktov, ktoré vlastním alebo vediem — od AI mobilných aplikácií po multi-tenant enterprise systémy. Každý projekt má vlastnú detailnú stránku.'
    },

    cards: {
      gardenyx: 'AI aplikácia na identifikáciu rastlín a starostlivosť — odfoťte rastlinu a dostanete plán starostlivosti na mieru. Flutter + TypeScript + PostgreSQL.',
      fitjam: 'Globálna fitness & wellness platforma — tréningy, výživa, komunita a live streaming. Beží v produkcii.',
      polier: 'White-label multi-tenant systém pre stavebné firmy — GPS dochádzka, denné hlásenia, HR, vozový park. Produkt MATROSOFT-u.',
      hillconqueror: 'Gamifikovaný lov vrcholov — GPS + foto check-iny na štítoch, trofeje a rebríčky. Flutter + NestJS + PostGIS.',
      dakotyai: 'Multimodelový AI chat asistent s hlasovým, obrazovým a video vstupom. Vlajkový produkt Dakoty Studio.',
      casa3d: 'Natočte si byt telefónom a prejdite sa ním v prehliadači — Gaussian Splatting v 3D.',
      acrea: 'AI pipeline generujúca slovenskú projektovú dokumentáciu pre 10 profesií, integrovaná s ArchiCAD-om.',
      ea: 'Osobný AI asistent — Telegram, iMessage, mail, kalendár, research a skutočné rezervácie.',
      aiagents: 'GDPR-safe balíky AI agentov pre malé firmy, bežiace lokálne u zákazníka. Prvý balík: CFO in a box.',
      vszp: 'Oficiálna aplikácia a web najväčšej slovenskej zdravotnej poisťovne — digitálny preukaz, eRecepty, zdravotné záznamy. Kotlin, Swift a web.',
      nicl: 'CYRIL — národný integrovaný cestovný lístok. Jedna appka, jeden QR kód, 39 dopravcov. React Native mobil + web.',
      epenazenka: 'Aplikácia Finančnej správy SR na overovanie pokladničných bločkov — naskenujte QR kód z eKasy a hneď viete, či je pravý.',
      youplus: 'Plne digitálna životná poisťovňa YOUPLUS — webové platformy pre štyri trhy: Slovensko, Česko, Rakúsko a Švajčiarsko.',
      pgsk: 'Webový ekosystém PARTNERS GROUP SK — jednej z najväčších finančných skupín na Slovensku — a jej digitálnej poisťovne.'
    },

    contact: {
      label: 'Kontakt',
      title: 'Poďme spolu niečo postaviť.',
      text: 'Máte projekt, alebo sa chcete len porozprávať o technológiách? Moja schránka je vždy otvorená — ozvem sa hneď, ako to bude možné.',
      cta: 'Napíšte mi',
      ctaCall: 'Zavolajte mi',
      location: 'Martin, Slovensko'
    },

    footer: {
      rights: 'Všetky práva vyhradené.',
      built: 'Navrhnuté a postavené ručne — čisté HTML, CSS a JavaScript.'
    },

    status: {
      live: 'V produkcii',
      dev: 'Vo vývoji',
      proto: 'Prototyp',
      exp: 'Experiment',
      daily: 'V dennom používaní',
      ongoing: 'Priebežne'
    },

    time: {
      since2023: '2023 — súčasnosť',
      since2024: '2024 — súčasnosť',
      since2025: '2025 — súčasnosť',
      in2025: '2025'
    },

    proj: {
      back: 'Všetky projekty',
      overview: 'O projekte',
      features: 'Kľúčové funkcie',
      myrole: 'Moja rola',
      stack: 'Technológie',
      info: 'Informácie',
      role: 'Rola',
      timeline: 'Obdobie',
      platform: 'Platforma',
      status: 'Stav',
      next: 'Ďalší projekt',
      prev: 'Predchádzajúci projekt',
      gallery: 'Ukážky aplikácie',
      links: 'Odkazy',
      linkWeb: 'Web stránka',
      linkAppStore: 'App Store',
      linkPlay: 'Google Play'
    },

    p: {
      gardenyx: {
        tagline: 'AI spoločník pre identifikáciu rastlín a starostlivosť o ne. Odfoťte rastlinu, spoznajte ju — a už nikdy nezabudnite polievať.',
        role: 'Lead Developer (full-stack)',
        ov1: 'GardenYX je Flutter aplikácia pre iOS a Android (s webovým buildom), ktorá identifikuje rastliny z fotografie a výsledok premení na personalizovaný plán starostlivosti. Primárne je v slovenčine a plne lokalizovaná do angličtiny, maďarčiny a češtiny.',
        ov2: 'Identifikácia kombinuje Plant.id API pre rýchle vedecké určenie s obsahovou cache postavenou na Gemini, ktorá na pozadí dopĺňa bohaté lokalizované inštrukcie k starostlivosti. Používatelia si organizujú rastliny do záhrad a izieb, dostávajú pripomienky polievania a hnojenia a prémiové funkcie odomykajú cez predplatné.',
        features: [
          'Okamžitá identifikácia rastliny z fotky — Plant.id obohatené o dáta z iNaturalist a Perenual',
          'Lokalizovaný obsah starostlivosti generovaný a cachovaný cez Gemini 2.5',
          'Záhrady a izby — organizácia rastlín podľa vášho domova',
          'Plány polievania, hnojenia a starostlivosti s push pripomienkami',
          'Prihlásenie e-mailom, Googlom alebo Apple; synchronizácia cez Firebase',
          'Prémiové predplatné cez RevenueCat',
          'Štyri jazyky: slovenčina, angličtina, maďarčina, čeština'
        ],
        roleDesc: 'Celý produkt som postavil od nuly ako lead developer pre Joina Garden s.r.o. — Flutter aplikáciu, TypeScript/Express API s PostgreSQL, vrstvu AI integrácií aj release pipeline do oboch obchodov.'
      },

      fitjam: {
        tagline: 'Globálna fitness & wellness platforma — tréningy, výživa, mindfulness, komunita a live streaming v jednej aplikácii.',
        role: 'Lead Developer',
        ov1: 'FitJam je produkčná fitness platforma so sídlom v Dubaji. Flutter aplikácia (primárne iOS) pokrýva celú wellness cestu: vedené tréningy, jedálničky a výživové plány, mindfulness a regeneráciu, komunitné funkcie, live streaming a sledovanie zdravia s integráciou nositeľných zariadení.',
        ov2: 'Aplikácia stojí na clean architecture (service → repository → usecase → viewmodel → UI) s Riverpodom a beží v produkcii vo verzii 2.3+. Predplatné zabezpečuje RevenueCat a Stripe; TypeScript/Express backend prechádza migráciou zo SQLite na PostgreSQL, Firebase rieši autentifikáciu a notifikácie a AI funkcie poháňa Gemini.',
        features: [
          'Moduly tréningov, výživy, mindfulness a regenerácie',
          'Komunitné funkcie a live streaming',
          'Sledovanie zdravia s integráciou Apple Watch (Swift)',
          'Predplatné cez RevenueCat + Stripe',
          'Admin webový panel na správu obsahu a používateľov',
          'Clean architecture s plnou observabilitou a release procesom'
        ],
        roleDesc: 'Ako lead developer som postavil väčšinu Flutter frontendu od nuly, implementoval časti TypeScript backendu a dodal Swift integráciu pre Apple Watch.'
      },

      polier: {
        tagline: 'White-label multi-tenant informačný systém pre stavebné a lešenárske firmy — produkt môjho štúdia MATROSOFT.',
        role: 'Zakladateľ & Lead Developer',
        ov1: 'Polier digitalizuje každodennú prevádzku stavebných firiem. Prvým nasadením je MK Gerüstbau, lešenárska firma v Nemecku. Pracovníci v teréne používajú offline Expo aplikáciu na GPS dochádzku a denné fotoreporty s geolokáciou; manažéri riadia firmu z Next.js dashboardu.',
        ov2: 'Moduly pokrývajú projekty a CRM, HR (dovolenky, PN-ky, certifikácie), BOZP, sklad, vozový park, ubytovanie pracovníkov, internú komunikáciu a elektronicky podpisované zmluvy — všetko riadené prístupovými rolami (7 rolí) a lokalizované do slovenčiny, angličtiny a nemčiny.',
        features: [
          'GPS dochádzka pre terénnych pracovníkov s offline podporou',
          'Denné hlásenia zo stavby s fotkami a geolokáciou',
          'Moduly projekty & CRM, HR, BOZP, sklad a vozový park',
          'Elektronicky podpisované zmluvy a správa ubytovania',
          'Riadenie prístupu so 7 rolami (RBAC)',
          'Multi-tenant white-label architektúra, i18n SK / EN / DE'
        ],
        roleDesc: 'Polier je môj vlastný produkt: ako zakladateľ MATROSOFT s.r.o. som navrhol architektúru a vediem vývoj od začiatku do konca — Express + Prisma + PostgreSQL API, Next.js 14 weby aj terénnu Expo aplikáciu.'
      },

      hillconqueror: {
        tagline: 'Gamifikovaný lov vrcholov — check-iny na štítoch cez GPS a fotku, zbieranie trofejí a súboje s priateľmi.',
        role: 'Autor & Full-stack Developer',
        ov1: 'HillConqueror mení turistiku na zberateľskú hru. Každý horský vrchol je zberateľský kúsok: prítomnosť overíte GPS + foto check-inom, zbierate vrcholy a trofeje a šplháte sa v rebríčkoch medzi priateľmi.',
        ov2: 'Flutter aplikácia používa MapLibre mapy; NestJS API beží na PostgreSQL s PostGIS geopriestorovými dopytmi (Neon), s Drizzle ORM a Firebase Auth. Background workery synchronizujú globálnu databázu vrcholov z OpenStreetMap a poháňajú achievement engine. Infraštruktúra je Terraform na Fly.io za Cloudflare — API už beží naostro.',
        features: [
          'Check-iny na vrcholoch overené cez GPS + fotku',
          'Globálna databáza vrcholov synchronizovaná z OpenStreetMap',
          'Achievement & trophy engine s background workermi',
          'Rebríčky medzi priateľmi',
          'MapLibre / MapTiler mapy',
          'Infraštruktúra cez Terraform na Fly.io + Cloudflare'
        ],
        roleDesc: 'Osobný produkt — všetko navrhujem a staviam sám: mobilnú aplikáciu, geopriestorový backend, workery aj infraštruktúru.'
      },

      dakotyai: {
        tagline: 'Jeden chat, veľa myslí — multimodelový AI asistent s hlasovým, obrazovým a video vstupom.',
        role: 'Spolumajiteľ & Lead Developer',
        ov1: 'Dakoty-AI je vlajkový produkt Dakoty Studio, ktorého som spolumajiteľom. Je to Flutter chat asistent, v ktorom sa používatelia rozprávajú s viacerými AI modelmi z jedného miesta — s audio, obrazovým a video vstupom a s "povolaniami", ktoré asistenta naladia na konkrétnu úlohu.',
        ov2: 'Aplikácia stojí na Riverpode a go_routri, s Firebase (Auth, Firestore, Messaging, Crashlytics), prihlásením cez Google a Apple, lokálnou perzistenciou cez sqflite a vlastným backendom.',
        features: [
          'Viacero AI modelov v jednom chate',
          'Hlasový vstup a prehrávanie audia',
          'Porozumenie obrázkom a videu',
          'Predvoľby persón / povolaní pre rôzne úlohy',
          'Prihlásenie cez Google a Apple, synchronizácia do cloudu',
          'Lokálna história chatov s offline prístupom'
        ],
        roleDesc: 'Ako spolumajiteľ Dakoty Studio vediem produktové smerovanie aj vývoj — Flutter aplikáciu aj jej backend.'
      },

      casa3d: {
        tagline: 'Natočte si domov telefónom — a prejdite sa ním v prehliadači ako fotorealistickým 3D svetom.',
        role: 'Autor',
        ov1: 'Casa3D skúma Gaussian Splatting pre realitné a interiérové využitie: záznam z telefónu sa zrekonštruuje do fotorealistickej, prechodnej 3D scény vykreslenej priamo v prehliadači.',
        ov2: 'React + Three.js webová aplikácia vykresľuje .ksplat scény a pre demá simuluje spracovateľskú pipeline; skutočná rekonštrukcia beží v lokálnej Python pipeline postavenej na ffmpeg, COLMAP, Nerfstudio a gsplat. Produkčný backend na FastAPI + Celery + S3 je navrhnutý a pripravený na stavbu.',
        features: [
          'Vykresľovanie Gaussian splatov v prehliadači (Three.js)',
          'Pipeline video z telefónu → 3D (COLMAP, Nerfstudio, gsplat)',
          'Prechádzanie scénou z pohľadu prvej osoby',
          'Demo režim simulujúci celú pipeline',
          'Navrhnutá produkčná architektúra: FastAPI + Celery + S3'
        ],
        roleDesc: 'Sólo experiment — webovú aplikáciu aj rekonštrukčnú pipeline som postavil od začiatku do konca.'
      },

      acrea: {
        tagline: 'AI, ktorá píše slovenskú projektovú dokumentáciu — desať profesií, jedna pipeline.',
        role: 'Jediný vývojár',
        ov1: 'Acrea generuje balík technickej dokumentácie pre slovenské architektonické projekty — statika, vzduchotechnika, zdravotechnika, plyn, elektroinštalácie, energetické hodnotenie a ďalšie — podľa slovenských STN noriem a Eurokódov.',
        ov2: 'Beží ako back-office AI pipeline za ArchiCAD-om, prepojená cez Tapir bridge: Claude produkuje technické správy, výpočty a tabuľky ako štruktúrované dokumenty renderované do PDF, kým CAD výkresy ostávajú v rukách architekta.',
        features: [
          'Dokumentácia pre 10 inžinierskych profesií',
          'Generovanie so znalosťou STN noriem a Eurokódov',
          'Integrácia s ArchiCAD-om cez Tapir bridge',
          'Štruktúrovaný PDF výstup cez reportlab',
          'Pipeline na Claude s prísnou Pydantic validáciou'
        ],
        roleDesc: 'Jediný vývojár — navrhol a postavil som celú pipeline: Python + Pydantic doménový model, integráciu Claude, FastAPI server aj PDF rendering.'
      },

      ea: {
        tagline: 'Osobný AI asistent, ktorý riadi môj kalendár, mail, správy — a rezervuje skutočné veci v skutočnom svete.',
        role: 'Autor',
        ov1: 'Jeden Python proces bežiaci na mojom Macu, ktorý funguje ako skutočný výkonný asistent: komunikuje so mnou cez Telegram, číta a posiela iMessage aj e-maily, spravuje kalendár, robí web research a každé ráno mi pripraví briefing.',
        ov2: 'A tiež rezervuje — hotely, športoviská a reštaurácie — cez booking concierge, ktorý ovláda skutočný prehliadač cez Playwright, s jediným áno/nie potvrdením pred finálnym klikom. Postavené na Gemini function calling a Vision.',
        features: [
          'Telegram rozhranie ovládajúce iMessage, Mail a Kalendár',
          'Ranné briefingy a plánovanie stretnutí',
          'Web research so zbieraním zdrojov',
          'Booking concierge: hotely, športoviská, reštaurácie',
          'AppleScript automatizácia natívnych macOS aplikácií',
          'Jediná potvrdzovacia brána pred nevratnou akciou'
        ],
        roleDesc: 'Osobný projekt navrhnutý a postavený kompletne mnou — a používaný každý deň.'
      },

      aiagents: {
        tagline: 'Špecializovaní AI agenti pre malé firmy — GDPR-safe, bežiaci lokálne u zákazníka.',
        role: 'Autor',
        ov1: 'Produktizované balíky AI agentov, každý rieši jednu biznis funkciu pre malé a stredné firmy na Slovensku a v Česku. Prvý balík, "CFO in a box", je finančný analytik, ktorý rozumie exportom z účtovníctva Pohoda.',
        ov2: 'Všetko beží lokálne u zákazníka kvôli GDPR: runtime postavený na Claude distribuovaný cez Docker Compose, s doménovými MCP servermi (napr. pohoda-mcp), ktoré agentom dávajú štruktúrovaný prístup k firemným dátam.',
        features: [
          'Balíky agentov — každý pre jednu biznis funkciu',
          '"CFO in a box" — finančný analytik pre SK/CZ firmy',
          'Plne lokálny beh — dáta nikdy neopustia firmu',
          'Integrácia účtovníctva Pohoda cez vlastný MCP server',
          'Distribúcia cez Docker Compose'
        ],
        roleDesc: 'Autor — koncept, návrh agentov aj integračné MCP servery.'
      },

      vszp: {
        tagline: 'Oficiálna aplikácia najväčšej slovenskej zdravotnej poisťovne — digitálny preukaz, zdravotné záznamy a eRecepty v každom vrecku.',
        role: 'Frontend & Test Automation Developer',
        ov1: 'Mobilná aplikácia VšZP („Apka VšZP") a web dávajú poistencom Všeobecnej zdravotnej poisťovne — najväčšej zdravotnej poisťovne na Slovensku — digitálny preukaz poistenca (vrátane európskeho EHIC) pre seba aj deti, prístup k zdravotným záznamom a eReceptom s upozorneniami na interakcie liekov, prehľad poskytnutej starostlivosti a benefitný program Peňaženka zdravia.',
        ov2: 'Aplikácia tiež nájde najbližších lekárov, lekárne a pohotovosti, prihlasuje biometriou tváre a je lokalizovaná do slovenčiny, angličtiny a maďarčiny. Pracujem na nej v Asseco Central Europe ako súčasť dlhodobého produktového tímu.',
        features: [
          'Digitálny preukaz poistenca vrátane európskeho EHIC — pre vás aj vaše deti',
          'Zdravotné záznamy a eRecepty s upozorneniami na interakcie liekov',
          'Peňaženka zdravia — benefitný program poisťovne',
          'Vyhľadávanie lekárov, lekární a pohotovostí',
          'Biometrické prihlásenie tvárou',
          'Lokalizácia do slovenčiny, angličtiny a maďarčiny'
        ],
        roleDesc: 'V Asseco Central Europe vyvíjam natívne mobilné frontendy — Android (Kotlin) a iOS (Swift) — aj web, a staviam automatizované testy, ktoré strážia každé vydanie.'
      },

      nicl: {
        tagline: 'Jeden lístok pre celé Slovensko — vlaky, prímestské autobusy a MHD v jednej aplikácii s jedným QR kódom.',
        role: 'React Native Developer (mobil & web)',
        ov1: 'CYRIL je aplikácia Národného integrovaného cestovného lístka (NICL), ktorý prevádzkuje Ministerstvo dopravy SR a dodáva Asseco Central Europe. Spája 39 dopravcov — železnice, prímestské autobusy a MHD — do jedného lístka reprezentovaného jedným QR kódom.',
        ov2: 'Do komerčnej prevádzky vstúpil v júli 2026, podporuje platby kartou, Apple Pay a Google Pay a v mestách aj režim „pay as you go" cez Bluetooth beacony. Mobilné aplikácie sú postavené v React Native, spolu s webovou aplikáciou na cyril.sk.',
        features: [
          'Jeden QR lístok platný u 39 dopravcov',
          'Vlaky, prímestské autobusy a MHD v jednom nákupe',
          'Platby kartou, Apple Pay a Google Pay',
          'PAYGO check-in cez Bluetooth beacony v mestách',
          'React Native mobilné aplikácie + webová aplikácia (cyril.sk)'
        ],
        roleDesc: 'V Asseco Central Europe vyvíjam React Native frontendy — mobilné aplikácie aj web — a píšem automatizované testy platformy.'
      },

      epenazenka: {
        tagline: 'Aplikácia Finančnej správy SR na bločky — naskenujte QR kód z bločku a hneď viete, či je pravý.',
        role: 'Mobile Frontend Developer',
        ov1: 'ePeňaženka je oficiálna aplikácia Finančnej správy Slovenskej republiky. Používateľ naskenuje QR kód z pokladničného bločku a aplikácia ho overí voči národnému systému eKasa — zobrazí overený detail, alebo upozorní, že bloček v eKase neexistuje.',
        ov2: 'Registrovaní používatelia si navyše môžu bločky ukladať (napríklad pre reklamácie), prezerať chronologickú históriu nákupov a sledovať výdavky. Podozrivé bločky sa dajú nahlásiť Finančnej správe priamo z aplikácie.',
        features: [
          'Skenovanie QR kódu a okamžité overenie voči eKase',
          'Ukladanie bločkov pre záručné reklamácie',
          'Chronologická história nákupov a prehľad výdavkov',
          'Priame nahlásenie podozrivých bločkov'
        ],
        roleDesc: 'Pracujem na frontende mobilných aplikácií a na ich automatizovanom testovacom pokrytí.'
      },

      youplus: {
        tagline: 'Webové platformy pre bezpapierovú, plne digitálnu značku životného poistenia na štyroch európskych trhoch.',
        role: 'Frontend & Test Automation Developer',
        ov1: 'YOUPLUS (so značkou „U+") je plne digitálna životná poisťovňa so sídlom v Lichtenštajnsku, pôsobiaca na Slovensku, v Česku, Rakúsku a Švajčiarsku. Asseco Central Europe je jej hlavným dodávateľom digitálnych riešení a prevádzkuje webový ekosystém značky na poistnej platforme IooX.',
        ov2: 'Webové stránky jednotlivých krajín pokrývajú prezentáciu produktov, hlásenie poistných udalostí a dokumentačné centrum a slúžia ako vstup do samoobslužného uPortalu pre klientov a maklérov — všetko plne digitálne a bez papiera.',
        features: [
          'Štyri krajinné weby: youplus.sk / youplus.cz / youplus.at / youplus.ch',
          'Plne digitálne, bezpapierové poistné procesy',
          'Samoobslužný uPortal pre klientov a maklérov',
          'Hlásenie poistných udalostí a dokumentačné centrum',
          'Beží na poistnej platforme Asseco IooX'
        ],
        roleDesc: 'V Asseco Central Europe vyvíjam webové frontendy pre trhy SK/CZ a CH/AT a udržiavam ich automatizované testovacie sady.'
      },

      pgsk: {
        tagline: 'Digitálna webová prezentácia jednej z najväčších finančno-poradenských skupín na Slovensku a jej plne digitálnej poisťovne.',
        role: 'Frontend Developer',
        ov1: 'PARTNERS GROUP SK je jedna z najväčších slovenských finančno-poradenských skupín s približne 1 600 poradcami. Jej sesterská spoločnosť PARTNERS poisťovňa je plne digitálna riziková životná poisťovňa bežiaca na poistnej platforme Asseco IooX.',
        ov2: 'Webový ekosystém zahŕňa verejné weby skupiny, prezentáciu produktov PARTNERS poisťovne a klientsky & poradenský portál s jednotným prihlásením (SSO).',
        features: [
          'Verejné weby skupiny a poisťovne',
          'Klientsky a poradenský portál so SSO',
          'Plne digitálne poistné procesy na platforme IooX'
        ],
        roleDesc: 'V Asseco Central Europe pracujem na frontend vývoji webovej platformy a jej automatizovaných testoch.'
      }
    }
  }
};
