import type { Lang } from "@/contexts/LanguageContext";

export type T = typeof translations.en;

export const translations = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      cv: "CV",
      contact: "Contact",
      language: "Language",
    },
    hero: {
      tagline: "Mechanical Engineer & Entrepreneur",
      scroll: "Scroll",
    },
    about: {
      label: "About",
      heading: "Mechanical Engineer,\nBuilder, and Seller",
      italic:
        "I combine technical design with customer‑facing validation to turn commercial appliances into product–market fit.",
      para1:
        "Mexican engineer and entrepreneur living in Amsterdam. Seven years moving between technical and commercial work: four years as a manager in manufacturing and two and a half years co-founding a Dutch design and additive manufacturing studio.",
      para2:
        "Experience in consultative selling across three languages. Comfortable in technical environments, in front of customers, and public speaking. Native Spanish and English, conversational Dutch.",
      tagsLeft: [
        "Team Player",
        "Product Designer",
        "Consultative Selling",
        "Marketing",
        "AI Skills",
        "Prototyping",
        "Branding",
      ],
      tagsRight: ["Photographer", "Golf", "Tennis"],
    },
    work: {
      label: "Companies I Have Worked",
      items: [
        {
          description: "3D printing studio & innovation venture",
          tags: ["Engineering", "Startup"],
        },
        {
          description: "€150K+ in kitchen sales through consultative selling",
          tags: ["Sales", "Commercial"],
        },
        {
          description: "Mechanical engineer at a Mexican maritime shipyard",
          tags: ["Engineering", "Maritime"],
        },
      ],
    },
    skills: {
      heading: "What I Bring",
      technical: "Technical",
      commercial: "Commercial",
      slidesT: [
        "At sea, Mexico",
        "Maritime engineering",
        "LNG breakwater repairs",
        "Concrete 3D printing",
        "Heavy manufacturing",
        "3D printing studio",
        "3D printer troubleshooting",
        "Steel fabrication",
        "Field deployment",
      ],
      slidesC: [
        "Pitching to investors",
        "Presenting at University of Amsterdam",
        "Beyond Bounds pitch",
        "D·LAB panel talk",
        "Dutch Design Week",
        "€150K in sales",
        "Workshop facilitation",
        "Pitch competition win",
        "Consultative kitchen design",
      ],
    },
    experience: {
      label: "Experience",
      heading: "Where I’ve Worked",
      roles: [
        {
          title: "Mechanical Engineer",
          org: "Maritime Industry",
          bullets: [
            "Designed and maintained mechanical systems for commercial vessels",
            "Produced 3D models and technical documentation in SolidWorks and Fusion 360",
            "Coordinated with cross-functional teams on safety and compliance specs",
          ],
        },
        {
          title: "Co-Founder",
          org: "3D Printing Studio",
          bullets: [
            "Built and ran a product-to-print studio from zero to operational",
            "Secured €25,000 RVO innovation subsidy and won a pitch competition",
            "Led business development, client relationships, and production workflow",
          ],
        },
        {
          title: "Kitchen Sales Consultant",
          org: "IKEA",
          bullets: [
            "Generated over €150,000 in kitchen sales through consultative selling",
            "Operated across Dutch, English, and Spanish with diverse clientele",
            "Managed the full customer journey from design session to close",
          ],
        },
      ],
    },
    education: {
      label: "Education",
      heading: "Education",
      degrees: [
        {
          degree: "BSc Mechanical Engineering",
          note: "Foundation in thermodynamics, machine design, and manufacturing.",
        },
        {
          degree: "MSc Entrepreneurship",
          note: "Focus on venture creation, innovation management, and growth strategy.",
        },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Get in Touch",
      body: "Building something technical, something commercial, or something in between? Let’s talk.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      linkedinLabel: "LinkedIn",
    },
    cv: {
      back: "← Back",
      download: "Download PDF",
      profileLabel: "Profile",
      profileText:
        "Mexican mechanical engineer and entrepreneur based in Amsterdam. Seven years of experience across technical and commercial roles. Co-founded a Dutch additive manufacturing studio, sold over €150,000 in kitchens, and designed mechanical systems for commercial vessels. Native Spanish and English, conversational Dutch.",
      skillsLabel: "Skills",
      skillsTech:
        "SolidWorks · Fusion 360 · CAD · 3D Printing · Bambu Studio · Technical Documentation · Manufacturing Processes",
      skillsComm:
        "HubSpot · Consultative Selling · B2B Sales · Pitch & Fundraising · Product Strategy",
      skillsLang: "Spanish (Native) · English (Native) · Dutch (Conversational)",
      techLabel: "Technical",
      commLabel: "Commercial",
      langLabel: "Languages",
    },
  },

  nl: {
    nav: {
      work: "Werk",
      about: "Over",
      cv: "CV",
      contact: "Contact",
      language: "Taal",
    },
    hero: {
      tagline: "Werktuigbouwkundig Ingenieur & Ondernemer",
      scroll: "Scroll",
    },
    about: {
      label: "Over",
      heading: "Werktuigbouwkundig Ingenieur,\nMaker en Verkoper",
      italic:
        "Ik combineer technisch ontwerp met klantgerichte validatie om commerciële toepassingen om te zetten naar product-marktfit.",
      para1:
        "Mexicaanse ingenieur en ondernemer woonachtig in Amsterdam. Zeven jaar wisselend tussen technisch en commercieel werk: vier jaar als manager in de maakindustrie en tweeënenhalf jaar als medeoprichter van een Nederlands ontwerp- en additive manufacturing studio.",
      para2:
        "Ervaring in consultative selling in drie talen. Thuis in technische omgevingen, voor klanten en bij publieke presentaties. Spaans en Engels als moedertaal, conversationeel Nederlands.",
      tagsLeft: [
        "Teamspeler",
        "Productontwerper",
        "Consultative Selling",
        "Marketing",
        "AI Skills",
        "Prototyping",
        "Branding",
      ],
      tagsRight: ["Fotograaf", "Golf", "Tennis"],
    },
    work: {
      label: "Bedrijven waarvoor ik heb gewerkt",
      items: [
        {
          description: "3D-printstudio & innovatie-onderneming",
          tags: ["Engineering", "Startup"],
        },
        {
          description: "€150K+ aan keukenverkopen via consultative selling",
          tags: ["Sales", "Commercieel"],
        },
        {
          description: "Werktuigbouwkundig ingenieur bij een Mexicaanse maritieme scheepswerf",
          tags: ["Engineering", "Maritiem"],
        },
      ],
    },
    skills: {
      heading: "Wat ik meebring",
      technical: "Technisch",
      commercial: "Commercieel",
      slidesT: [
        "Op zee, Mexico",
        "Maritieme engineering",
        "LNG golfbrekerherstellingen",
        "Beton 3D-printen",
        "Zware maakindustrie",
        "3D-printstudio",
        "3D-printer probleemoplossing",
        "Staalconstructie",
        "Veldimplementatie",
      ],
      slidesC: [
        "Pitchen aan investeerders",
        "Presenteren aan de Universiteit van Amsterdam",
        "Beyond Bounds pitch",
        "D·LAB panelgesprek",
        "Dutch Design Week",
        "€150K aan omzet",
        "Workshopbegeleiding",
        "Pitchwedstrijd gewonnen",
        "Consultatief keukenontwerp",
      ],
    },
    experience: {
      label: "Ervaring",
      heading: "Waar ik heb gewerkt",
      roles: [
        {
          title: "Werktuigbouwkundig Ingenieur",
          org: "Maritieme industrie",
          bullets: [
            "Ontworpen en onderhouden van mechanische systemen voor commerciële schepen",
            "3D-modellen en technische documentatie geproduceerd in SolidWorks en Fusion 360",
            "Gecoördineerd met multidisciplinaire teams op veiligheids- en compliancevereisten",
          ],
        },
        {
          title: "Medeoprichter",
          org: "3D Printing Studio",
          bullets: [
            "Een product-naar-print studio opgebouwd en gerund van nul tot operationeel",
            "€25.000 RVO-innovatiesubsidie verkregen en een pitchwedstrijd gewonnen",
            "Verantwoordelijk voor bedrijfsontwikkeling, klantrelaties en productieproces",
          ],
        },
        {
          title: "Keukenverkoopadviseur",
          org: "IKEA",
          bullets: [
            "Meer dan €150.000 aan keukenomzet gegenereerd via consultative selling",
            "Gewerkt in het Nederlands, Engels en Spaans met diverse klanten",
            "Het volledige klanttraject beheerd van ontwerpsessie tot afsluiting",
          ],
        },
      ],
    },
    education: {
      label: "Opleiding",
      heading: "Opleiding",
      degrees: [
        {
          degree: "BSc Werktuigbouwkunde",
          note: "Grondslag in thermodynamica, machineontwerp en productie.",
        },
        {
          degree: "MSc Ondernemerschap",
          note: "Focus op ondernemerschap, innovatiemanagement en groeistrategie.",
        },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Neem contact op",
      body: "Bouw je iets technisch, iets commercieels, of iets daartussenin? Laten we praten.",
      emailLabel: "E-mail",
      phoneLabel: "Telefoon",
      linkedinLabel: "LinkedIn",
    },
    cv: {
      back: "← Terug",
      download: "PDF downloaden",
      profileLabel: "Profiel",
      profileText:
        "Mexicaanse werktuigbouwkundig ingenieur en ondernemer gevestigd in Amsterdam. Zeven jaar ervaring in technische en commerciële functies. Medeoprichter van een Nederlands additive manufacturing studio, meer dan €150.000 aan keukenverkopen gegenereerd en mechanische systemen ontworpen voor commerciële schepen. Spaans en Engels als moedertaal, conversationeel Nederlands.",
      skillsLabel: "Vaardigheden",
      skillsTech:
        "SolidWorks · Fusion 360 · CAD · 3D Printing · Bambu Studio · Technische Documentatie · Productieprocessen",
      skillsComm:
        "HubSpot · Consultative Selling · B2B Sales · Pitch & Fondsenwerving · Productstrategie",
      skillsLang: "Spaans (Moedertaal) · Engels (Moedertaal) · Nederlands (Conversationeel)",
      techLabel: "Technisch",
      commLabel: "Commercieel",
      langLabel: "Talen",
    },
  },

  es: {
    nav: {
      work: "Trabajo",
      about: "Sobre mí",
      cv: "CV",
      contact: "Contacto",
      language: "Idioma",
    },
    hero: {
      tagline: "Ingeniero Mecánico & Emprendedor",
      scroll: "Desplazar",
    },
    about: {
      label: "Sobre mí",
      heading: "Ingeniero Mecánico,\nCreador y Vendedor",
      italic:
        "Combino el diseño técnico con la validación orientada al cliente para convertir aplicaciones comerciales en encaje producto-mercado.",
      para1:
        "Ingeniero mexicano y emprendedor radicado en Ámsterdam. Siete años alternando entre trabajo técnico y comercial: cuatro años como gerente en manufactura y dos años y medio cofundando un estudio neerlandés de diseño y fabricación aditiva.",
      para2:
        "Experiencia en consultative selling en tres idiomas. Cómodo en entornos técnicos, ante clientes y en presentaciones públicas. Español e inglés nativos, neerlandés conversacional.",
      tagsLeft: [
        "Trabajo en Equipo",
        "Diseñador de Producto",
        "Consultative Selling",
        "Marketing",
        "AI Skills",
        "Prototipado",
        "Branding",
      ],
      tagsRight: ["Fotografía", "Golf", "Tenis"],
    },
    work: {
      label: "Empresas donde he trabajado",
      items: [
        {
          description: "Estudio de impresión 3D y venture de innovación",
          tags: ["Ingeniería", "Startup"],
        },
        {
          description: "€150K+ en ventas de cocinas mediante consultative selling",
          tags: ["Ventas", "Comercial"],
        },
        {
          description: "Ingeniero mecánico en un astillero marítimo mexicano",
          tags: ["Ingeniería", "Marítimo"],
        },
      ],
    },
    skills: {
      heading: "Lo que aporto",
      technical: "Técnico",
      commercial: "Comercial",
      slidesT: [
        "En el mar, México",
        "Ingeniería marítima",
        "Reparaciones de rompeolas LNG",
        "Impresión 3D en concreto",
        "Manufactura pesada",
        "Estudio de impresión 3D",
        "Resolución de fallas en impresora 3D",
        "Fabricación en acero",
        "Despliegue en campo",
      ],
      slidesC: [
        "Pitch a inversores",
        "Presentación en la Universidad de Ámsterdam",
        "Pitch de Beyond Bounds",
        "Charla en panel D·LAB",
        "Dutch Design Week",
        "€150K en ventas",
        "Facilitación de talleres",
        "Victoria en concurso de pitch",
        "Diseño consultivo de cocinas",
      ],
    },
    experience: {
      label: "Experiencia",
      heading: "Dónde he trabajado",
      roles: [
        {
          title: "Ingeniero Mecánico",
          org: "Industria Marítima",
          bullets: [
            "Diseñé y mantuve sistemas mecánicos para embarcaciones comerciales",
            "Desarrollé modelos 3D y documentación técnica en SolidWorks y Fusion 360",
            "Coordiné con equipos multidisciplinarios en especificaciones de seguridad y cumplimiento",
          ],
        },
        {
          title: "Cofundador",
          org: "3D Printing Studio",
          bullets: [
            "Construí y operé un estudio de producto a impresión desde cero",
            "Obtuve una subvención de innovación RVO de €25.000 y gané una competencia de pitch",
            "Lideré el desarrollo de negocio, relaciones con clientes y flujo de producción",
          ],
        },
        {
          title: "Consultor de Ventas de Cocinas",
          org: "IKEA",
          bullets: [
            "Generé más de €150.000 en ventas de cocinas mediante consultative selling",
            "Operé en neerlandés, inglés y español con clientela diversa",
            "Gestioné el ciclo completo del cliente, desde la sesión de diseño hasta el cierre",
          ],
        },
      ],
    },
    education: {
      label: "Educación",
      heading: "Educación",
      degrees: [
        {
          degree: "Lic. en Ingeniería Mecánica",
          note: "Base en termodinámica, diseño de máquinas y manufactura.",
        },
        {
          degree: "Maestría en Emprendimiento",
          note: "Enfoque en creación de empresas, gestión de la innovación y estrategia de crecimiento.",
        },
      ],
    },
    contact: {
      label: "Contacto",
      heading: "Ponte en contacto",
      body: "¿Estás construyendo algo técnico, algo comercial, o algo intermedio? Hablemos.",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
      linkedinLabel: "LinkedIn",
    },
    cv: {
      back: "← Atrás",
      download: "Descargar PDF",
      profileLabel: "Perfil",
      profileText:
        "Ingeniero mecánico mexicano y emprendedor radicado en Ámsterdam. Siete años de experiencia en roles técnicos y comerciales. Cofundé un estudio neerlandés de fabricación aditiva, vendí más de €150.000 en cocinas y diseñé sistemas mecánicos para embarcaciones comerciales. Español e inglés nativos, neerlandés conversacional.",
      skillsLabel: "Habilidades",
      skillsTech:
        "SolidWorks · Fusion 360 · CAD · Impresión 3D · Bambu Studio · Documentación Técnica · Procesos de Manufactura",
      skillsComm:
        "HubSpot · Consultative Selling · B2B Sales · Pitch & Captación de Fondos · Estrategia de Producto",
      skillsLang: "Español (Nativo) · Inglés (Nativo) · Neerlandés (Conversacional)",
      techLabel: "Técnico",
      commLabel: "Comercial",
      langLabel: "Idiomas",
    },
  },
  ja: {
    nav: {
      work: "仕事",
      about: "自己紹介",
      cv: "履歴書",
      contact: "連絡先",
      language: "言語",
    },
    hero: {
      tagline: "機械エンジニア & 起業家",
      scroll: "スクロール",
    },
    about: {
      label: "自己紹介",
      heading: "機械エンジニア、\n創業者、そして営業マン",
      italic:
        "技術設計と顧客向け検証を組み合わせ、商業機器をプロダクトマーケットフィットへと転換します。",
      para1:
        "アムステルダム在住のメキシコ人エンジニア・起業家。7年間、技術と商業の両分野を行き来してきました：製造業でマネージャーとして4年間、オランダのデザイン・アディティブマニュファクチャリングスタジオを共同設立して2年半。",
      para2:
        "3つの言語でのコンサルティング型営業の経験。技術的な環境、顧客対応、プレゼンテーションいずれにも対応。スペイン語・英語がネイティブ、オランダ語は日常会話レベル。",
      tagsLeft: [
        "チームプレイヤー",
        "プロダクトデザイナー",
        "コンサルティング営業",
        "マーケティング",
        "AIスキル",
        "プロトタイピング",
        "ブランディング",
      ],
      tagsRight: ["写真", "ゴルフ", "テニス"],
    },
    work: {
      label: "職歴企業",
      items: [
        {
          description: "3Dプリンティングスタジオ＆イノベーション事業",
          tags: ["エンジニアリング", "スタートアップ"],
        },
        {
          description: "コンサルティング営業によるキッチン販売€150K以上",
          tags: ["営業", "商業"],
        },
        {
          description: "メキシコの海洋造船所での機械エンジニア",
          tags: ["エンジニアリング", "海洋"],
        },
      ],
    },
    skills: {
      heading: "私が提供するもの",
      technical: "技術",
      commercial: "商業",
      slidesT: [
        "海上にて、メキシコ",
        "海洋エンジニアリング",
        "LNG防波堤修繕",
        "コンクリート3Dプリント",
        "重工業製造",
        "3Dプリンティングスタジオ",
        "3Dプリンタートラブルシューティング",
        "鉄鋼製作",
        "現場展開",
      ],
      slidesC: [
        "投資家へのピッチ",
        "アムステルダム大学でのプレゼン",
        "Beyond Boundsピッチ",
        "D·LABパネルトーク",
        "Dutch Design Week",
        "€150Kの売上",
        "ワークショップ進行",
        "ピッチコンテスト優勝",
        "コンサルティング型キッチン設計",
      ],
    },
    experience: {
      label: "経歴",
      heading: "職歴",
      roles: [
        {
          title: "機械エンジニア",
          org: "海洋産業",
          bullets: [
            "商業船舶の機械システムを設計・保守",
            "SolidWorksとFusion 360で3Dモデルおよび技術文書を作成",
            "安全・コンプライアンス仕様に関して部門横断チームと調整",
          ],
        },
        {
          title: "共同創業者",
          org: "3D Printing Studio",
          bullets: [
            "プロダクト・トゥ・プリントスタジオをゼロから構築・運営",
            "RVOイノベーション助成金€25,000を獲得し、ピッチコンテストで優勝",
            "事業開発、クライアント対応、生産ワークフローをリード",
          ],
        },
        {
          title: "キッチン販売コンサルタント",
          org: "IKEA",
          bullets: [
            "コンサルティング営業によりキッチン販売€150,000以上を達成",
            "多様な顧客層にオランダ語・英語・スペイン語で対応",
            "設計セッションからクロージングまで顧客対応の全工程を管理",
          ],
        },
      ],
    },
    education: {
      label: "学歴",
      heading: "学歴",
      degrees: [
        {
          degree: "機械工学学士",
          note: "熱力学、機械設計、製造の基礎。",
        },
        {
          degree: "起業学修士",
          note: "ベンチャー創業、イノベーション管理、成長戦略に焦点。",
        },
      ],
    },
    contact: {
      label: "連絡先",
      heading: "お問い合わせ",
      body: "技術的なもの、商業的なもの、またはその中間のものを構築していますか？ぜひ話し合いましょう。",
      emailLabel: "メール",
      phoneLabel: "電話",
      linkedinLabel: "LinkedIn",
    },
    cv: {
      back: "← 戻る",
      download: "PDFダウンロード",
      profileLabel: "プロフィール",
      profileText:
        "アムステルダム在住のメキシコ人機械エンジニア・起業家。技術・商業分野で7年の経験。オランダのアディティブマニュファクチャリングスタジオを共同設立し、キッチン販売で€150,000以上を達成、商業船舶の機械システムを設計。スペイン語・英語がネイティブ、オランダ語は日常会話レベル。",
      skillsLabel: "スキル",
      skillsTech:
        "SolidWorks · Fusion 360 · CAD · 3Dプリンティング · Bambu Studio · 技術文書 · 製造プロセス",
      skillsComm:
        "HubSpot · コンサルティング営業 · B2B営業 · ピッチ＆資金調達 · 製品戦略",
      skillsLang: "スペイン語（ネイティブ）· 英語（ネイティブ）· オランダ語（日常会話）",
      techLabel: "技術",
      commLabel: "商業",
      langLabel: "言語",
    },
  },
} satisfies Record<Lang, unknown>;
