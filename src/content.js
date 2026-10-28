/**
 * FOUNDERS' HOUSE — CENTRAL CONTENT REPOSITORY
 * All copy, event facts, tracks, stops, perks, and FAQ live here.
 * Any unknown detail is tagged with visible TODOs.
 */

export const content = {
  event: {
    name: "Founders' House",
    tagline: "Build. Validate. Launch.",
    subline: "From Idea to Investment in Three Days",
    dates: "18-20 December 2026",
    venueName: "AIC Techno, Kolkata",
    venueAddress: "EM-4, Salt Lake Sector V, Bidhannagar, Kolkata 700091",
    venueNote: "[TODO: Confirm exact AIC Techno hall / gate number]",
    organizers: "Organized by Hult Prize at Techno India University in collaboration with AIC Techno",
    admission: "Free to apply · Open to students across India · Teams of 3-5",
    topTeams: "Top 10 teams selected for the 3-day residential sprint",
    applyLink: "#apply",
    applyLinkNote: "[TODO: Replace with official Google Form / Devfolio REGISTRATION_LINK]",
    deadline: "30 November 2026",
    deadlineNote: "[TODO: Confirm final DEADLINE]",
    email: "official.hultprize.tiu@gmail.com",
    instagram: "https://www.instagram.com/hustlers_tiu/",
    linkedin: "https://www.linkedin.com/company/hult-prize-tiu/",
    prizePool: "₹50,00,000+ in Seed Access, Incubation & Cloud Credits",
    prizePoolNote: "[TODO: Confirm exact PRIZE_POOL cash breakdown]"
  },

  nav: [
    { label: "ABOUT", href: "#about" },
    { label: "TRACKS", href: "#tracks" },
    { label: "ROUTE", href: "#route" },
    { label: "SCOREBOARD", href: "#scoreboard" },
    { label: "AWARDS", href: "#awards" },
    { label: "SQUAD", href: "#squad" },
    { label: "SPONSORS", href: "#sponsors" },
    { label: "ARCHIVES", href: "#archives" },
    { label: "FAQ", href: "#faq" }
  ],

  hero: {
    badge: "The Ultimate 3-Day Residential Startup Sprint",
    title: "FOUNDERS' HOUSE",
    ribbon: "BUILD. VALIDATE. LAUNCH.",
    subtext: "Case file unlocked: 10 student founder squads locked into Kolkata's premier incubation arena. Like a Satyajit Ray frame — every scene deliberate, every detail purposeful. Feluda's deduction meets Byomkesh's tenacity in a 72-hour cinematic sprint to crack real-world market mysteries, build production MVPs, and pitch live to top investors under the City of Joy's neon lights.",
    ctaApply: "APPLY NOW",
    ctaJourney: "FOLLOW THE JOURNEY",
    stamp: "CASE OPEN · SPRINT CONFIRMED",
    chips: ["FREE ADMISSION", "PAN-INDIA TEAMS", "TEAMS OF 3-5", "10 FINALISTS ONLY"]
  },

  venue: {
    pill: "THE ADDA",
    headingLine1: "WELCOME TO",
    headingLine2: "THE ADDA.",
    desc: "Set inside AIC Techno (Atal Incubation Centre), right in the heart of Sector V — Kolkata's roaring silicon corridor and the IT-ITeS powerhouse of Eastern India. Minutes from the Sector V tech campus strip, surrounded by the same streets where yellow Ambassador taxis weave past hand-pulled rickshaws and heritage trams rattle along their century-old tracks. 24x7 high-speed fiber, hardware bays, sleeping pods, and endless earthen kulhads of steaming Kolkata chai — the same brew that fuels the legendary coffee house addas of College Street.",
    quote: '"Kolkata was built on river trade, printing presses, and late-night Coffee House debates on Bankim Chatterjee Street. From Howrah Bridge\'s iron arches to Sector V\'s glass towers — now we bring the code to AIC Techno."'
  },

  about: {
    pill: "THE ORIGIN STORY",
    headingLine1: "MORE THAN A HACKATHON.",
    headingLine2: "KOLKATA-LEVEL HUSTLE.",
    desc: "Most hackathons end with slides that gather dust. Founders' House is an undercover startup incubator disguised as a 72-hour sprint — born from the same restless adda spirit that powered the Bengal Renaissance. Teams live on-site, receive raw mystery problem statements directly from domain mentors, validate with real users on the street, and pitch to active venture syndicates. This is Kolkata's builder energy — the city that gave the world Bose's radio, Ray's cinema, and Tagore's verse — channeled into venture-grade code.",
    stats: [
      { val: "3", label: "DAYS LOCKED IN" },
      { val: "10", label: "ELITE TEAMS" },
      { val: "3", label: "MISSION TRACKS" },
      { val: "₹0", label: "TO APPLY & LIVE" }
    ],
    hosts: [
      {
        role: "HOST INCUBATOR",
        name: "AIC Techno (Atal Incubation Centre)",
        desc: "Supported by Atal Innovation Mission, NITI Aayog — Eastern India's vanguard tech incubation centre with deep labs and venture networks. Venue host for Founders' House."
      },
      {
        role: "ORGANIZING CHAPTER",
        name: "Hult Prize at Techno India University",
        desc: "The student-led entrepreneurial engine at TIU organizing and running the sprint, transforming campus builders into impact founders."
      }
    ]
  },

  tracks: {
    pill: "MISSION TRACKS",
    headingLine1: "CHOOSE YOUR",
    headingLine2: "CASE TRACK.",
    mentorNote: "Note: Your exact mission problem statement is classified and revealed by your dedicated mentor on Day 1.",
    cases: [
      {
        id: "CASE-01",
        title: "Social Innovation & Social Business",
        tag: "IMPACT INVESTIGATION",
        color: "neonPink",
        borderColor: "#FF2E93",
        desc: "Tackle systemic challenges in circular economy, water security, healthcare accessibility, rural supply chains, and green urban mobility.",
        badge: "SDG MISSION"
      },
      {
        id: "CASE-02",
        title: "Emerging Tech: AI, CS-IT, Cyber & EdTech",
        tag: "ALGORITHM LAB",
        color: "neonCyan",
        borderColor: "#19D3F3",
        desc: "Autonomous agentic workflows, low-latency voice synthesis, tamper-evident decentralized security, and next-gen developer tooling.",
        badge: "DEEP TECH"
      },
      {
        id: "CASE-03",
        title: "Media, Entertainment & Creative Design",
        tag: "CULTURE ENGINE",
        color: "neonLime",
        borderColor: "#7CFF3A",
        desc: "Spatial audio, generative storytelling, creator monetization protocols, dynamic gaming universes, and localized Indic content rails.",
        badge: "CREATIVE PIPELINE"
      }
    ]
  },

  route: {
    pill: "ROADMAP",
    headingLine1: "THE ROUTE &",
    headingLine2: "TRAM LINE.",
    desc: "Hop aboard Tram #26 as Tram Didi guides your venture from classified application screening to investor negotiations.",
    stops: [
      {
        id: "stop-1",
        number: "STOP 01",
        name: "Application Clue Gathering",
        bengali: "দরখাস্ত ও স্ক্রিনিং",
        date: "Open Now",
        status: "ACTIVE",
        desc: "Submit your team dossier, past builds, and founder proof-of-work. Open to all students pan-India.",
        activities: ["Team formation check (3-5 members)", "Deck & prototype screening", "Rolling review calls"]
      },
      {
        id: "stop-2",
        number: "STOP 02",
        name: "The Top 10 Shortlist Dossier",
        bengali: "সেরা দশ নির্বাচন",
        date: "05 Dec 2026 [TODO: Confirm]",
        status: "COMING SOON",
        desc: "Top 10 finalist squads receive encrypted residential boarding passes to AIC Techno campus.",
        activities: ["Shortlist announcement livestream", "Pre-event briefing & mentor pairings", "Packing checklist & travel assistance"]
      },
      {
        id: "stop-3",
        number: "STOP 03 — DAY 1",
        name: "Inspire & Form",
        bengali: "প্রথম দিন · সূত্রপাত",
        date: "18 Dec 2026",
        status: "CLASSIFIED DOSSIER",
        desc: "Check-in at AIC Techno, unlock confidential problem statements, and kick off the 72-hour lock-in.",
        activities: [
          "Opening Ceremony & Keynote Adda",
          "Founder Talks & Veteran Teardowns",
          "Team Introductions & Squad Badging",
          "Classified Problem Reveal from Mentors",
          "Sprint Kickoff & Terminal Lock-in",
          "Ideation & Customer Discovery War Games"
        ]
      },
      {
        id: "stop-4",
        number: "STOP 04 — DAY 2",
        name: "Validate & Build",
        bengali: "দ্বিতীয় দিন · কেস ফাইল",
        date: "19 Dec 2026",
        status: "CASE FILES IN ACTION",
        desc: "The crucible. 24 hours of customer interviews, raw code pushing, midnight mentor interrogations, and live fire tests.",
        activities: [
          "Business Model Canvas Sprint Race",
          "MVP Deep Build Blocks",
          "Mentor Office Hours & Architectural Teardowns",
          "Investor Deck Building Workshop",
          "One Minute CEO Challenge",
          "Bollywood Pitch Masala Drill",
          "Go-To-Market Game Plan Validation",
          "Midnight Campfire Pitch Round"
        ]
      },
      {
        id: "stop-5",
        number: "STOP 05 — DAY 3",
        name: "Demo Day & Josh Awards",
        bengali: "তৃতীয় দিন · মহাযুদ্ধ",
        date: "20 Dec 2026",
        status: "JUDGMENT & LOOT",
        desc: "Deploy freeze. Pitch live on the main stage to institutional VCs, angels, and ecosystem leaders.",
        activities: [
          "Morning Feedback Frenzy & Polish",
          "Escape Negotiation Roleplay",
          "Mock Investor Pitch Gauntlet",
          "Investor Speed Dating Rounds",
          "The Angel Adda (Exclusive Investor Row)",
          "Final Grand Stage Presentations",
          "The Grand Josh Awards Ceremony"
        ]
      }
    ]
  },

  scoreboard: {
    pill: "THE SCOREBOARD",
    headingLine1: "EARN YOUR",
    headingLine2: "FOUNDER POINTS.",
    desc: "We reward rigor, not just showmanship. Talk to real customers, push verified commits, and earn real Founder Points on our Lyons Range style stock ticker.",
    ticker: [
      { sym: "FNDR/KOL", price: "3,140.20", chg: "+18.4%" },
      { sym: "COMMITS/HR", price: "284", chg: "+42.1%" },
      { sym: "USER/INTERVIEWS", price: "156", chg: "+88.0%" },
      { sym: "CHAI/KULHAD", price: "1,240", chg: "+210%" },
      { sym: "MRR/SIM", price: "₹2.8M", chg: "+34.5%" },
      { sym: "RSGLD/PUJA", price: "5,420.75", chg: "+92.3%" },
      { sym: "TRAM/ESPL", price: "872.50", chg: "+15.7%" },
      { sym: "HOWRAH/BRG", price: "1,911.47", chg: "+7.2%" },
      { sym: "ADDA/COFEE", price: "2,065.00", chg: "+33.8%" },
      { sym: "DURGA/NDX", price: "10,847.30", chg: "+108%" }
    ],
    leaderboard: [
      { rank: "01", name: "SleuthAI Systems", caseTrack: "Emerging Tech", score: 9840, points: "+520", status: "BULLISH" },
      { rank: "02", name: "GraminPay Mesh", caseTrack: "Social Innovation", score: 9410, points: "+380", status: "RALLYING" },
      { rank: "03", name: "ChitraKatha Engine", caseTrack: "Creative Design", score: 9020, points: "+290", status: "BULLISH" },
      { rank: "04", name: "Hooghly HydroTech", caseTrack: "Social Innovation", score: 8760, points: "+150", status: "STEADY" },
      { rank: "05", name: "Byomkesh Protocol", caseTrack: "Emerging Tech", score: 8430, points: "+110", status: "STEADY" }
    ],
    perks: [
      { icon: "☕", title: "1:1 Lunch With Guest Founder", desc: "Private sit-down to discuss cap tables, venture debt, and hiring." },
      { icon: "🍽️", title: "Dinner With Chief Guest", desc: "Reserved seat at the grand Kolkata heritage dinner table." },
      { icon: "⚡", title: "Priority Pitch Slot", desc: "Prime presentation timing directly in front of lead VC syndicate partners." },
      { icon: "🎯", title: "Extra Mentor Office Hours", desc: "Dedicated 1-on-1 sprint review with Tier-1 engineering CTOs." },
      { icon: "🤝", title: "Direct Investor Intro", desc: "Curated warm introduction email sent to seed funds with pitch brief." },
      { icon: "🎬", title: "Feature Reel on Social Media", desc: "Professional videographer squad captures your team's build story." }
    ]
  },

  awards: {
    pill: "AWESOME PRIZES",
    headingLine1: "THE JOSH",
    headingLine2: "AWARDS.",
    desc: "Over ₹50,00,000+ in pooled seed capital pipeline, AIC Techno incubation scholarships, cloud grants, and gleaming handcrafted trophies.",
    topTrophies: [
      {
        id: "sherlock",
        rank: "RUNNER-UP",
        name: "Sherlock of Startups",
        tag: "REVEAL",
        prize: "₹40,000 Cash + Cloud Credits",
        desc: "For the team with the sharpest problem-solving deductions and customer validation evidence.",
        pedestalHeight: "h-64",
        glow: "border-neonCyan text-neonCyan"
      },
      {
        id: "startup-sprint",
        rank: "GRAND CHAMPION",
        name: "Startup of the Sprint",
        tag: "GRAND REVEAL",
        prize: "₹1,00,000 Cash + ₹25L Incubation",
        desc: "The supreme honor for the overall most venture-ready, technically ambitious, and relentless squad.",
        pedestalHeight: "h-80",
        glow: "border-neonYellow text-neonYellow shadow-neon-yellow"
      },
      {
        id: "screenplay",
        rank: "SPECIAL JURY",
        name: "Best Screenplay Award",
        tag: "REVEAL",
        prize: "₹35,000 Cash + GTM Package",
        desc: "For unparalleled pitch presentation storytelling, visual identity, and theatrical charisma.",
        pedestalHeight: "h-60",
        glow: "border-neonPink text-neonPink"
      }
    ],
    remainingAwards: [
      { name: "Chanakya Award", category: "Strategy & Unit Economics", prize: "Trophy + Mentorship Tier" },
      { name: "Phoenix Award", category: "Greatest Mid-Sprint Pivot", prize: "Trophy + AWS Cloud Bundle" },
      { name: "Nari Shakti Award", category: "Inspiring Women Founders", prize: "Trophy + Special Grant" },
      { name: "Innovation Ratan", category: "Deep Tech & Algorithmic Grit", prize: "Trophy + GitHub Enterprise Pass" },
      { name: "Sustain-o-ward", category: "Highest Ecological & SDG Impact", prize: "Trophy + Impact Accelerator Slot" },
      { name: "Jury's Choice", category: "Ecosystem Favorite", prize: "Trophy + Hardware Pass" }
    ],
    lootHud: {
      title: "MORE LOOT INCOMING!",
      pool: "[TODO: PRIZE_POOL - ₹50L+ Total Value]",
      note: "Every finalist team walks away with $10,000+ in developer tools, API credits, free accommodation, meals, and investor feedback."
    }
  },

  squad: {
    pill: "THE SQUAD",
    headingLine1: "MEET THE",
    headingLine2: "MENTORS.",
    desc: "Veteran operators, serial startup founders, venture capitalists, and academic luminaries ready to challenge your assumptions.",
    tabs: ["MENTORS", "JURY", "ORGANIZERS"],
    classifiedCount: 6
  },

  sponsors: {
    pill: "OUR SPONSORS",
    headingLine1: "POWERED BY",
    headingLine2: "GREAT TEAMS.",
    desc: "Supported by organizations investing in Kolkata's burgeoning startup landscape.",
    tiers: [
      { name: "GOLD PARTNERS", count: 3, color: "border-neonYellow text-neonYellow" },
      { name: "SILVER PARTNERS", count: 4, color: "border-neonCyan text-neonCyan" },
      { name: "BRONZE & COMMUNITY", count: 6, color: "border-neonLime text-neonLime" }
    ],
    hud: {
      title: "WANT YOUR LOGO HERE?",
      desc: "Partner with Eastern India's most focused residential builder hackathon. Reach 500+ student applicants and the top 10 venture teams.",
      ctaPartner: "INITIATE PARTNERSHIP",
      ctaBrochure: "SPONSORSHIP BROCHURE [TODO: ADD PDF LINK]"
    }
  },

  archives: {
    pill: "THE ENERGY",
    headingLine1: "CAUGHT IN",
    headingLine2: "THE ACT.",
    desc: "Throwback snapshots from previous Hult Prize TIU flagship events, hackathons, and pitch battles.",
    note: "[TODO: Replace with official high-res event gallery photos]",
    cta: "FOLLOW ON INSTAGRAM"
  },

  faq: {
    pill: "ASK THE ADDA",
    headingLine1: "GOT",
    headingLine2: "QUESTIONS?",
    desc: "Everything you need to know about cracking your case at Founders' House.",
    questions: [
      {
        q: "Who can participate in Founders' House?",
        a: "Any enrolled college student (Undergraduate, Postgraduate, or PhD) across India with a passion for software, hardware, design, or business."
      },
      {
        q: "Can I form a team across different colleges?",
        a: "Absolutely! Cross-college and cross-specialization teams (e.g. 2 developers + 1 designer + 1 business lead) are highly encouraged."
      },
      {
        q: "Do I need a team before applying?",
        a: "Yes. Founders' House requires teams of 3 to 5 members. If you're a solo hacker, check our Discord/WhatsApp community to find teammates."
      },
      {
        q: "Is participation free?",
        a: "100% Free! No registration fee, no meal charges, no stay charges. Selected top 10 finalist teams are fully hosted at AIC Techno."
      },
      {
        q: "Do I need a finalized startup idea before coming?",
        a: "No! You need strong skills and builder hunger. Classified problem statements and mission cases will be revealed by mentors on Day 1."
      },
      {
        q: "Is this event in-person or virtual?",
        a: "Founders' House is 100% in-person and fully residential for 72 continuous hours at AIC Techno (Atal Incubation Centre) campus in Salt Lake Sector V, Kolkata."
      },
      {
        q: "What should we bring to the hackathon?",
        a: "Bring your laptops, chargers, extension cords, personal toiletries, and builder energy. We take care of high-speed WiFi, beds, snacks, and tea."
      },
      {
        q: "What happens if our team isn't shortlisted among the Top 10?",
        a: "You'll still receive full access to our online mentor masterclasses, partner credit perks, and an open invite to the Sunday Demo Day audience gallery."
      },
      {
        q: "Which languages can our final pitch be in?",
        a: "English, Hindi, or Bengali. Your deck slides should be in English for pan-India and international jury members."
      }
    ]
  },

  mascots: [
    {
      id: "feluda",
      name: "Feluda (Pradosh C. Mitter)",
      role: "Lead Sleuth & Brainpower (Mogojastro)",
      desc: "Tall, charismatic master sleuth of 21 Rajani Sen Road — the sharp mind who can deduce your TAM from a single customer conversation, the way he'd spot a forged Mughal miniature at a Gariahat stall. Armed with his trusted notebook and Charminar cigarettes, he dissects startup value propositions with the clinical precision of a North Kolkata chess grandmaster.",
      quote: '"Any startup that relies on hype rather than unit economics will crumble at the first inquiry. Jodi bhaalo kaaj na koro, Jatayu-r uponyash-e theke jabe."'
    },
    {
      id: "byomkesh",
      name: "Byomkesh Bakshi",
      role: "The Satyanweshi (Truth-Seeker)",
      desc: "The legendary dhoti-clad truth-seeker of Harrison Road, now Mahatma Gandhi Road — threading through the narrow gullies of Chinabazar and the old Kolkata neighbourhoods to uncover unvarnished customer reality. Over cups of Ajit's hand-brewed cha, he deduces market mysteries, hidden churn metrics, and the real unit economics behind every glossy pitch deck.",
      quote: '"I am not a mere investigator, I seek truth. Show me your actual user retention, not projections. Shotti bolun — asol number ta koto?"'
    },
    {
      id: "satyajitRay",
      name: "Satyajit Ray",
      role: "Chief Director & Visual Storyteller",
      desc: "The legendary auteur of Calcutta — master of framing, light, and narrative economy. From the rain-soaked lanes of Pather Panchali to the neon noir of Pratidwandi, Ray understood that every single frame must earn its place. At Founders' House, he scrutinizes your product demos like rushes in an editing room at Tollygunge Studios — cutting filler, amplifying truth, demanding that your MVP tells a story as honest and compelling as an Apu Trilogy sequence.",
      quote: '"Treat every pitch like a film — frame it beautifully, edit ruthlessly, and never waste your audience\'s time. Ekta kharap frame gota chobi noshto kore dey."'
    },
    {
      id: "topshe",
      name: "Topshe (Tapesh)",
      role: "Chief Chronicler & Sprint Scribe",
      desc: "Feluda's eager cousin and faithful chronicler — the one who turns raw chaos into structured case files with the diligence of a Presidency College honours student. He records every commit, mentor teardown, and pivot decision, documenting the sprint's story the way he captures Feluda's adventures from Darjeeling to Varanasi, always with a fresh Natun Golpo notebook in hand.",
      quote: '"Write down every user interview verbatim before the mentor arrives! Feluda always says — notes-e jodi bhul thake, case-e o bhul thakbe."'
    },
    {
      id: "jatayu",
      name: "Jatayu (Lalmohan Ganguly)",
      role: "Chief Storyteller & Pitch Masala",
      desc: "Best-selling thriller novelist with a heart of gold and the dramatic flair of a Tollywood matinee idol. Fresh from penning 'Sahare Chupi Chupi' at his Park Street den, Jatayu infuses your pitch decks with the kind of dramatic crescendo that makes investors grip their armrests — part Bangla thriller, part boardroom blockbuster, all goosebumps.",
      quote: '"A pitch without goosebumps is like a mystery without a murder! Bring the thrill! Bhai, ektu masala dao — investor-ra ghomiye jabe!"'
    },
    {
      id: "professor-shonku",
      name: "Professor Shonku",
      role: "Deep-Tech & Algorithmic Vanguard",
      desc: "The eccentric genius scientist from Giridih, armed with his Annihilin pistol and Miracurall tablets — a polymath who'd feel right at home in Sector V's deepest server rooms. He challenges AI architectures and system designs with the same fearless curiosity that led him from his Giridih laboratory to the pyramids of Egypt, always scribbling in his tattered diary.",
      quote: '"Miracurall exists only in fiction. In software, you must test every boundary condition. Probondhu Nakur Babu-ke bolechi — shortcut-e kichu hoy na."'
    },
    {
      id: "tenida",
      name: "Tenida (Bhadreshwar Sen)",
      role: "Potoldanga Adda Master & Morale General",
      desc: "The fearless, booming leader of the Potoldanga chaatir adda — part street philosopher, part midnight motivational hurricane. With the swagger of a College Street coffee house regular and an insatiable appetite for Golbari-r kosha mangsho and piping hot shingaras at 3 AM, Tenida keeps team spirits soaring when the codebase is burning and the demo is six hours away.",
      quote: '"Dey shingara! When the bug is stubborn, eat a hot Dacres Lane roll and hit deploy! Ei Palaram-ke bol — chai niye aay!"'
    }
  ]
};
