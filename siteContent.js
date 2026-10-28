/**
 * Founders' House — Content File
 * All copy and text content centralized for easy editing.
 */
export const siteContent = {
  meta: {
    title: "Founders' House — Kolkata, The Original City of Business",
    description: "3 days. 10 teams. One launchpad. Residential startup hackathon on 18-20 Dec 2026 at AIC Techno, Kolkata.",
    dates: "18 – 20 DEC 2026",
    venue: "AIC Techno, Salt Lake Sector V, Kolkata",
    bengaliTagline: "কলকাতা · বাণিজ্যের আঁতুড়ঘর"
  },
  nav: {
    brandText: "FOUNDERS' HOUSE",
    edition: "KOLKATA '26",
    applyText: "APPLY NOW",
    applySub: "Chol, shuru kori",
    links: [
      { label: "The 3 Days", href: "#three-days" },
      { label: "Leaderboard", href: "#leaderboard" },
      { label: "Perks", href: "#perks" },
      { label: "Josh Awards", href: "#josh-awards" },
      { label: "Getting Here", href: "#ghoomi" },
      { label: "FAQ", href: "#faq" }
    ]
  },
  hero: {
    kicker: "THE ORIGINAL CITY OF BUSINESS",
    bengaliKicker: "ব্যবসার শহর",
    headlinePart1: "WHERE FOUNDERS BUILD",
    headlinePart2: "THE NEXT CENTURY.",
    subtext: "72 hours. 10 elite builder teams locked in. Zero noise, pure signal. Live on-site at AIC Techno, build production software, and pitch straight to top venture partners.",
    stats: [
      { label: "Selected Teams", val: "10" },
      { label: "Intense Hours", val: "72H" },
      { label: "Incubation & Grants", val: "₹50L+" },
      { label: "Entry Fee", val: "₹0" }
    ],
    ctaPrimary: "APPLY FOR FOUNDERS' HOUSE",
    ctaMicrocopy: "Chol, shuru kori",
    clockTitle: "HOWRAH STATION CLOCK — DEPARTURE IN"
  },
  threeDays: {
    tag: "THE 3 DAYS ROUTE",
    title: "A Tram Ride Through Relentless Execution",
    subtitle: "From Esplanade to Sector V: hop on Kolkata's historic electric tram line as your startup takes form over 72 intense residential hours.",
    stations: [
      {
        day: "DAY 01",
        name: "Esplanade Junction: The Genesis",
        bengali: "ধর্মতলা · সূত্রপাত",
        time: "09:00 AM onwards",
        desc: "Check-in at AIC Techno, team lock-in, breakfast adda with mentors, architecture review, and sprint kickoff.",
        bullets: [
          "Private team workstations & high-speed fiber setup",
          "One-on-one architectural teardown with CTO mentors",
          "Midnight chai & misti sprint"
        ]
      },
      {
        day: "DAY 02",
        name: "College Street: The Crucible",
        bengali: "কলেজ স্ট্রিট · তৈরি",
        time: "Around the clock",
        desc: "Headphones down, terminals glowing. Live user testing, real-world customer discovery, API integrations, and product refinement.",
        bullets: [
          "Zero-bullshit mid-point code & traction checkpoint",
          "Customer interview feedback blitz",
          "Overnight debugging sessions with lead engineers"
        ]
      },
      {
        day: "DAY 03",
        name: "Sector V: The Grand Pitch & Launch",
        bengali: "সল্টলেক সেক্টর ৫ · মহাযুদ্ধ",
        time: "03:00 PM Demo Day",
        desc: "Final deploy freeze. Pitch live on the main stage to institutional investors, angels, and ecosystem leaders.",
        bullets: [
          "Closed-door live demo to Tier-1 VC & angel syndicates",
          "Instant incubation offers from AIC Techno",
          "Durga Puja style Josh Awards ceremony"
        ]
      }
    ]
  },
  leaderboard: {
    tag: "CALCUTTA STOCK EXCHANGE TICKER",
    bengaliTag: "শেয়ার বাজার লাইভ",
    title: "Founder Points Index (FPI)",
    subtitle: "Real-time sprint velocity, commits shipped, customer validations, and community votes tracked live like the historic Lyons Range exchange.",
    marqueeTicker: [
      { sym: "FNDR/KOL", price: "2,480.50", change: "+14.2%" },
      { sym: "TIU/HULT", price: "1,920.00", change: "+8.6%" },
      { sym: "COMMITS/HR", price: "142", change: "+24.0%" },
      { sym: "CHAI/CUPS", price: "890", change: "+112%" },
      { sym: "MRR/SIM", price: "₹1.4M", change: "+19.5%" },
      { sym: "CODE/PUSH", price: "99.8%", change: "+0.4%" }
    ],
    teams: [
      { rank: "01", name: "Team CyberBangla", track: "Agentic AI / Voice", score: "9,850", trend: "up", change: "+420 pts", badge: "Bullish" },
      { rank: "02", name: "Lyons Labs", track: "FinTech & B2B Rail", score: "9,420", trend: "up", change: "+310 pts", badge: "Bullish" },
      { rank: "03", name: "Hooghly River Protocol", track: "DePIN / Web3 Identity", score: "8,990", trend: "down", change: "-40 pts", badge: "Consolidating" },
      { rank: "04", name: "Sutanuti Cloud", track: "Developer Tooling", score: "8,750", trend: "up", change: "+180 pts", badge: "Rallying" },
      { rank: "05", name: "Babu AI", track: "Indic LLM Systems", score: "8,310", trend: "up", change: "+95 pts", badge: "Steady" }
    ]
  },
  perks: {
    tag: "NEW MARKET & GARIAHAT STALLS",
    title: "Market Stalls of Perks & Munificence",
    subtitle: "Lift the traditional striped awnings to uncover high-octane credits, cloud infrastructure, legal setup, and warm kulhad chai.",
    items: [
      {
        stallNo: "Stall #01",
        title: "Cloud & Compute Grants",
        bengali: "কম্পিউট ভাণ্ডার",
        icon: "☁️",
        awningColor: "striped-terracotta",
        desc: "$100,000+ in pooled cloud credits across AWS, Google Cloud, and OpenAI APIs for your venture.",
        perk: "$100k+ Credits"
      },
      {
        stallNo: "Stall #02",
        title: "Residential Food & Living",
        bengali: "থাকা ও খাওয়া",
        icon: "🛏️",
        awningColor: "striped-yellow",
        desc: "All 3 days fully covered: private beds, power workspaces, endless steaming kulhad chai, mishti, and hearty Kolkata meals.",
        perk: "100% Free & Sponsored"
      },
      {
        stallNo: "Stall #03",
        title: "AIC Techno Fast-Track",
        bengali: "ইনকিউবেশন টিকিট",
        icon: "🚀",
        awningColor: "striped-blue",
        desc: "Direct interview-free fast track entry into AIC Techno incubation facility with government grants & seed networks.",
        perk: "₹25L+ Seed Access"
      },
      {
        stallNo: "Stall #04",
        title: "Lyons Range Legal & Cap Table",
        bengali: "আইন ও ক্যালিবার",
        icon: "⚖️",
        awningColor: "striped-terracotta",
        desc: "Incorporation support, Delaware or India C-Corp setup, IP protection, and founder vesting docs completely handled.",
        perk: "Turnkey Incorporation"
      },
      {
        stallNo: "Stall #05",
        title: "Adda With Veteran Operators",
        bengali: "ঘাটের বৈকালিক আড্ডা",
        icon: "☕",
        awningColor: "striped-yellow",
        desc: "Unfiltered, private closed-room sessions with founders who have built $100M+ businesses from Eastern India.",
        perk: "1:1 Operator Access"
      },
      {
        stallNo: "Stall #06",
        title: "Global Hult Prize Pipeline",
        bengali: "আন্তর্জাতিক মঞ্চ",
        icon: "🌍",
        awningColor: "striped-blue",
        desc: "Representation slot for global accelerator rounds with direct international venture mentorship and global spotlight.",
        perk: "Global Demo Stage"
      }
    ]
  },
  joshAwards: {
    tag: "DURGA PUJA PANDAL CEREMONY",
    title: "The Josh Awards & Trophies",
    subtitle: "Draped in festive pandal bamboo craftsmanship, glowing neon marquee bulbs, and sacred Dhunuchi fire — Kolkata's highest founder honors.",
    awards: [
      {
        trophy: "🥇 Maha Josh Trophy (Grand Winner)",
        bengali: "মহাজোশ সেরার সেরা",
        prize: "₹1,50,000 Cash + ₹25L Incubation",
        desc: "Awarded to the overall top team exhibiting breakthrough technical innovation, market feasibility, and sheer sprint velocity.",
        highlight: "Gold Shimmer Edition"
      },
      {
        trophy: "⚡ Shonar Bangla Tech Excellence",
        bengali: "সোনার বাংলা টেকনোলজি",
        prize: "₹50,000 Cash + Cloud Infra Tier",
        desc: "For the cleanest engineering architecture, deepest AI/systems execution, and hardest code shipped during the 72 hours.",
        highlight: "Marquee Blinking Bulbs"
      },
      {
        trophy: "💡 Parar Adda Best Pitch Award",
        bengali: "পাড়ার সেরা পিচ",
        prize: "₹50,000 Cash + Investor Syndicate Connect",
        desc: "For the most compelling, charismatic storytelling that convinced the room of angels and industry stalwarts.",
        highlight: "Audience Favorite"
      }
    ]
  },
  ghoomi: {
    tag: "GETTING TO SECTOR V",
    bengaliTag: "ঘুরি ঘুরি সল্টলেক",
    title: "Ghoomi Ghoomi: How to Reach Us",
    subtitle: "AIC Techno India University, EM-4, Sector V, Salt Lake, Kolkata — right in the tech heartbeat of Eastern India.",
    routes: [
      {
        from: "Kolkata Airport (CCU)",
        mode: "Yellow Ambassador or Prepaid Cab",
        time: "~25-30 Mins",
        desc: "Hop into an iconic yellow taxi right outside Terminal 2 via New Town Rajarhat Expressway straight into Sector V."
      },
      {
        from: "Howrah Station (HWH)",
        mode: "Green Line Metro / Maa Flyover",
        time: "~35 Mins",
        desc: "Take the underwater Green Line Metro or an Ambassador taxi crossing the majestic Howrah Bridge and Maa Flyover."
      },
      {
        from: "Sealdah Railway Station (SDAH)",
        mode: "Green Line Rapid Metro",
        time: "~15 Mins",
        desc: "Direct high-frequency metro line right into Salt Lake Sector V station. 3 minutes walking distance to AIC Techno."
      },
      {
        from: "The Venue Itself",
        mode: "AIC Techno Campus",
        time: "Gate No. 2",
        desc: "EM-4, Salt Lake Sector V, Bidhannagar, Kolkata 700091. 24x7 security check-in for registered builders."
      }
    ]
  },
  faq: {
    tag: "CHAI ADDA & CLARIFICATIONS",
    title: "Frequently Asked Questions",
    subtitle: "Grab a steaming kulhad of freshly brewed Kolkata street chai while we answer everything about Founders' House.",
    items: [
      {
        q: "Who can apply for Founders' House Kolkata?",
        a: "Passionate student founders, engineers, designers, and serial hackers! You can apply as an existing team of 2–4 members, or as an exceptional solo hacker looking to be paired with other high-caliber builders."
      },
      {
        q: "Is there any participation fee or equity taken?",
        a: "Zero fee, zero equity taken. Founders' House is 100% free. Accommodation, workstation setup, food, mentorship, and high-speed internet are fully sponsored by AIC Techno and our partners."
      },
      {
        q: "Do we have to stay on campus for the entire 72 hours?",
        a: "Yes! Founders' House is a true residential experience. Living together, debating architectures over midnight chai, and collaborating through the night is where the real magic happens. Safe, comfortable dorms and resting pods are provided."
      },
      {
        q: "What if our prototype is already partially built?",
        a: "You may bring pre-existing domain research or early architectural sketches, but all code judged for the Josh Awards must be shipped or meaningfully transformed during the sprint window. Pre-built turnkey white-labels are strictly barred."
      },
      {
        q: "What do winners receive after Sunday's Demo Day?",
        a: "Direct grants, institutional incubation at AIC Techno, office spaces in Salt Lake Sector V, cloud infrastructure packages ($100k+), and immediate introductions to angel and VC syndicates across India."
      }
    ]
  },
  footer: {
    title: "FOUNDERS' HOUSE KOLKATA",
    tagline: "The original city of business. Where founders return to build.",
    bengaliSignoff: "আবার দেখা হবে · জয় বাংলা",
    copyright: "© 2026 Founders' House · Organized by Hult Prize TIU & AIC Techno. All rights reserved.",
    socials: [
      { name: "Instagram", link: "https://www.instagram.com/hustlers_tiu/", handle: "@hustlers_tiu" },
      { name: "LinkedIn", link: "https://www.linkedin.com/company/hult-prize-tiu/", handle: "Hult Prize TIU" },
      { name: "Email", link: "mailto:official.hultprize.tiu@gmail.com", handle: "official.hultprize.tiu@gmail.com" }
    ]
  }
};
