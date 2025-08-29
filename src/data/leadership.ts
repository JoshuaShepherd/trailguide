export type Person = {
  id: string;
  name: string;
  role: string;           // "Director of Transformation"
  org: string;            // "Kansas City National Security Campus (Honeywell FM&T)"
  location?: string;
  headshotUrl?: string;
  tags?: string[];        // e.g., ["Manufacturing", "Gov/Defense"]
  shortBio: string;       // 1–2 sentences for the card
  longBioMd: string;      // markdown for dialog
  links?: { label: string; href: string }[];
  group: 'board' | 'advisor';
  badge?: 'Early Board' | null;
};

export const leadership: Person[] = [
  // Board Members
  {
    id: 'adam-christensen',
    name: 'Adam Christensen',
    role: 'Director of Transformation',
    org: 'Kansas City National Security Campus (Honeywell FM&T)',
    tags: ['Manufacturing', 'Gov/Defense', 'Transformation', 'Operations'],
    shortBio: 'Director of Transformation at Honeywell FM&T\'s Kansas City National Security Campus; helps lead change across advanced engineering and precision manufacturing.',
    longBioMd: `Adam is Director of Transformation at the Kansas City National Security Campus (KCNSC), managed by Honeywell FM&T for the U.S. Department of Energy. His work focuses on change leadership and operational excellence in an advanced engineering and precision-manufacturing environment. He is a member of Kansas City Tomorrow (Class 47) and is active in regional leadership circles. Adam brings a practical builder's mindset to TrailGuide's governance.`,
    links: [
      { label: 'KC Tomorrow', href: '#' },
      { label: 'KCNSC', href: '#' }
    ],
    group: 'board',
    badge: 'Early Board'
  },
  {
    id: 'courtney-christensen',
    name: 'Courtney Christensen',
    role: 'Philanthropy Department Administrator & Project Specialist',
    org: 'Kansas City Public Library',
    tags: ['Community', 'Public Sector', 'Philanthropy', 'Programs'],
    shortBio: 'Library philanthropy administrator and project specialist; leads community-facing initiatives and "reimagining" efforts with broad stakeholder input.',
    longBioMd: `Courtney serves in the Kansas City Public Library's philanthropy department as an administrator and project specialist. She has led city-facing projects during the library's 150th year and is part of strategic planning to 'reimagine' the library with trustees, staff, and community partners. She brings inclusive, practical community-engagement experience to TrailGuide.`,
    links: [
      { label: 'KCPL Bookworm', href: '#' },
      { label: 'KCUR Interview', href: '#' }
    ],
    group: 'board',
    badge: 'Early Board'
  },
  {
    id: 'david-gordon',
    name: 'David Gordon',
    role: 'Project Manager — Honeywell FM&T; Board Member',
    org: 'Kansas City Public Schools Education Foundation',
    tags: ['Project Management', 'Education', 'Manufacturing'],
    shortBio: 'Project manager at Honeywell FM&T serving on the KCPS Education Foundation board; connects engineering execution with education impact.',
    longBioMd: `David is a project manager at Honeywell FM&T and volunteers as a board member for the Kansas City Public Schools Education Foundation. He brings disciplined delivery, risk management, and a heart for education to TrailGuide's early board.`,
    links: [
      { label: 'KCPS Foundation', href: '#' }
    ],
    group: 'board',
    badge: 'Early Board'
  },
  {
    id: 'brady-voth',
    name: 'Brady Voth',
    role: 'Head of Go-to-Market',
    org: 'EdApp by SafetyCulture (Kansas City)',
    tags: ['GTM', 'SaaS', 'Partnerships', 'Growth'],
    shortBio: 'GTM leader at EdApp; previously at Camunda and SafetyCulture sales leadership. Focused on repeatable growth, customer outcomes, and partnerships.',
    longBioMd: `Brady is Head of GTM at EdApp by SafetyCulture with prior roles at SafetyCulture and Camunda. He has 15+ years in SaaS go-to-market, building high-performing teams and durable revenue engines. Locally engaged and Kansas City-based, he brings practical GTM and partner experience to TrailGuide.`,
    links: [
      { label: 'Public Profile', href: '#' }
    ],
    group: 'board',
    badge: 'Early Board'
  },

  // Advisors
  {
    id: 'alan-hirsch',
    name: 'Alan Hirsch',
    role: 'Founder — 100Movements & Forge Mission Training Network',
    org: 'Author',
    tags: ['Formation', 'Systems', 'Strategy', 'Movements'],
    shortBio: 'Mission strategist and author (e.g., The Forgotten Ways); founder of 100Movements and Forge. Co-founded/teaches in missional leadership programs.',
    longBioMd: `Alan is a widely regarded mission strategist and author, founder of 100Movements and Forge Mission Training Network. His writing (The Forgotten Ways, 5Q, and more) and decades of movement leadership inform TrailGuide's 'AI + formation' posture.`,
    group: 'advisor',
    badge: null
  },
  {
    id: 'brad-brisco',
    name: 'Brad Brisco',
    role: 'Strategy Development — North American Mission Board',
    org: 'Church Planting Strategist (Kansas City network)',
    tags: ['Strategy', 'Coaching', 'Multiplication', 'Training'],
    shortBio: 'Missional strategist who directs strategy development for NAMB; co-author of Missional Essentials; KC-based church planting strategist and trainer.',
    longBioMd: `Brad directs strategy development for the North American Mission Board, serves on the national leadership team for Forge America, and has coached church planters across North America. Co-author of Missional Essentials, he brings practical change leadership to TrailGuide's advisory bench.`,
    group: 'advisor',
    badge: null
  }
];
