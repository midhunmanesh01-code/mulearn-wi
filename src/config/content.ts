// µLearn CEC – site content
export const chapter = {
  name:     'µLearn CEC',
  fullName: 'College of Engineering, Chengannur',
  tagline:  'No textbooks. No hierarchies. Just students learning together, writing real code, and proving skill by shipping in public.',
  joinUrl:  'https://app.mulearn.org',
  discord:  'https://discord.gg/mulearn',
  instagram:'https://instagram.com/mulearncec',
  linkedin: 'https://linkedin.com/company/mulearncec',
  linktree: 'https://linktr.ee/mulearncec',
}

export const stats = [
  { value: '137+', label: 'Members',    sub: 'active learners'      },
  { value: '4',    label: 'Circles',    sub: 'active domains'       },
  { value: '12',   label: 'Events',     sub: 'this academic year'   },
  { value: '2.4K', label: 'Karma',      sub: 'points earned'        },
]

export const circles = [
  {
    id:      '01',
    emoji:   '⚡',
    name:    'Web & Apps',
    blurb:   'Ship real products with React, TypeScript and Flutter. Weekly standups, real codebases, real users.',
    members: 48,
    tags:    ['React', 'TypeScript', 'Flutter', 'Node'],
  },
  {
    id:      '02',
    emoji:   '🧠',
    name:    'AI & Data',
    blurb:   'From your first ML model to production deployment. Study groups, paper readings, build weeks.',
    members: 36,
    tags:    ['PyTorch', 'HuggingFace', 'SQL', 'LLMs'],
  },
  {
    id:      '03',
    emoji:   '🔐',
    name:    'Cloud & Security',
    blurb:   'Hands-on labs, CTF competitions, cloud certifications, and security research that matters.',
    members: 29,
    tags:    ['AWS', 'CTF', 'Docker', 'DevSecOps'],
  },
  {
    id:      '04',
    emoji:   '🎨',
    name:    'Design & Media',
    blurb:   'Product design, motion graphics, and content creation that makes every event look right.',
    members: 24,
    tags:    ['Figma', 'Motion', 'Brand', 'UI/UX'],
  },
]

export const events = [
  { when: 'Jan', title: 'Chapter Induction',  note: 'Meet the community. Pick your circle. Start your karma journey.', year: '2025', type: 'Community' },
  { when: 'Mar', title: 'Campus Hackathon',   note: '24 hours. Teams of four. One impossible problem statement.',      year: '2025', type: 'Hackathon' },
  { when: 'Jun', title: 'Summer of Code',     note: 'Open-source sprints with industry mentors. Ship something real.', year: '2025', type: 'Sprint'    },
  { when: 'Sep', title: 'Demo Day',           note: 'Circles present what they built all year. Public. Brutal. Real.', year: '2025', type: 'Showcase'  },
]

export const pillars = [
  {
    id:      '01',
    badge:   'MICRO-COHORTS',
    title:   'Learning Circles',
    tagline: 'Self-governed squads, zero lectures',
    body:    'Self-directed peer groups of 4–6 members meeting weekly to crack a shared topic and ship together. No professor, no syllabus constraints — just pure peer accountability and mutual progress.',
    tags:    ['Weekly Standups', 'Shared Roadmaps', 'Peer Feedback'],
    metric:  '4–6 learners per circle',
  },
  {
    id:      '02',
    badge:   'VERIFIABLE REPUTATION',
    title:   'Proof of Work',
    tagline: 'Karma points over paper diplomas',
    body:    'We don’t believe in paper participation certificates. You earn karma by shipping publicly verifiable output — open-source commits, design prototypes, and technical teardowns reviewed by the statewide community.',
    tags:    ['GitHub PRs', 'Karma Leaderboard', 'Public Demos'],
    metric:  '100% public & verifiable',
  },
  {
    id:      '03',
    badge:   'CAMPUS GUILD',
    title:   'Radical Openness',
    tagline: 'Zero gatekeeping, full agency',
    body:    'Curiosity is the only prerequisite. First-year novices build right beside final-year seniors. You can initiate a circle, host an open-source sprint, or challenge senior members on Day 1.',
    tags:    ['Cross-Batch Guilds', 'Inter-College Network', 'All Domains'],
    metric:  'Open to all years & branches',
  },
]

export const loopSteps = [
  {
    step: '01',
    label: 'Assemble',
    tagline: 'Find your circle',
    desc: 'Pick an interest track or gather 3–5 peers who share your hunger to learn and build.',
  },
  {
    step: '02',
    label: 'Build',
    tagline: 'Tackle real roadmaps',
    desc: 'Follow curated industry roadmaps, write production code, and debug together every week.',
  },
  {
    step: '03',
    label: 'Ship',
    tagline: 'Publish in public',
    desc: 'Deploy live projects, push GitHub commits, and share public progress with the community.',
  },
  {
    step: '04',
    label: 'Earn',
    tagline: 'Accumulate Karma',
    desc: 'Get peer-reviewed, claim verified Karma points, and unlock internships and opportunities.',
  },
]

export const karmaSteps = [
  { step: '01', label: 'Pick a task',      desc: 'Browse open tasks and challenges on the µLearn platform. Pick what interests you.'   },
  { step: '02', label: 'Build & submit',   desc: 'Work on it. Ship it publicly — a repo, a post, a Figma link. Proof must be verifiable.' },
  { step: '03', label: 'Get peer reviewed', desc: 'Community members validate your work. No gatekeeping — just honest feedback.'          },
  { step: '04', label: 'Earn karma',        desc: 'Karma points added to your profile. They build your public proof-of-work résumé.'      },
]

export const communityMoments = [
  { label: 'Campus Hackathon',       desc: '24-hour build sprint',    aspect: 'wide'   },
  { label: 'Learning Circle Meetup', desc: 'Weekly peer session',     aspect: 'square' },
  { label: 'Demo Day 2024',          desc: 'Projects presented live', aspect: 'square' },
  { label: 'Summer of Code',         desc: 'Open-source week',        aspect: 'wide'   },
]

// Navigation config - Levelled-up high-agency naming
export const NAVIGATION_LINKS = [
  { href: '#about',   label: 'Manifesto',     badge: null,  desc: 'Why peer learning compounds' },
  { href: '#circles', label: 'Circles',       badge: '04',  desc: 'Active student learning cohorts' },
  { href: '#karma',   label: 'Proof of Work', badge: 'KP',  desc: 'Verifiable karma leaderboard' },
  { href: '#events',  label: 'Timeline',      badge: "'25", desc: 'Hackathons, sprints & demo days' },
] as const

export const NAV_CONFIG = {
  brandName:      'µLearn',
  brandSuffix:    'CEC',
  chapterTag:     'CAMPUS CHAPTER',
  organizerBadge: 'BUILDERS COLLECTIVE · CHENGANNUR',
  ctaText:        'Build With Us',
  ctaHref:        '#join',
}
