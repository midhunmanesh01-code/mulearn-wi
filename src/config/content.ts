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
    name:    'Web & Apps',
    track:   'FULL-STACK & MOBILE',
    tagline: 'Production webapps, cross-platform mobile, distributed backends',
    blurb:   'We skip dummy tutorials and build real webapps with real users. From React and Next.js backends to cross-platform Flutter apps, everything is deployed publicly.',
    members: 48,
    cadence: 'Wednesdays · 4:30 PM Standup',
    output:  'Campus utilities, open-source packages, hackathon MVPs',
    tags:    ['Next.js', 'React', 'TypeScript', 'Flutter', 'PostgreSQL', 'Tailwind'],
  },
  {
    id:      '02',
    name:    'AI & Machine Learning',
    track:   'NEURAL NETS & APPLIED ML',
    tagline: 'Computer vision, RAG pipelines, fine-tuned models',
    blurb:   'From mathematical foundations to fine-tuning local models on GPUs. We dissect modern research papers, run training benchmarks, and build practical AI tools.',
    members: 36,
    cadence: 'Thursdays · 4:30 PM Paper Lab',
    output:  'Domain fine-tunes, RAG search pipelines, vision benchmarks',
    tags:    ['PyTorch', 'HuggingFace', 'LangChain', 'Python', 'Ollama', 'CUDA'],
  },
  {
    id:      '03',
    name:    'Cloud & Security',
    track:   'INFRASTRUCTURE & CYBERSEC',
    tagline: 'Linux kernels, AWS architectures, offensive security labs',
    blurb:   'Master systems engineering from bare metal to the cloud. We build scalable Docker clusters, configure automated cloud CI/CD, and train for statewide CTF competitions.',
    members: 29,
    cadence: 'Tuesdays · 4:30 PM CTF Session',
    output:  'Self-hosted infrastructure, CTF challenge writeups, cloud labs',
    tags:    ['AWS', 'Docker', 'Linux', 'Kubernetes', 'CTF', 'Wireshark'],
  },
  {
    id:      '04',
    name:    'Design & Product',
    track:   'PRODUCT UI/UX & MOTION',
    tagline: 'Design systems, Figma tokens, motion graphics',
    blurb:   'Obsessed with pixel-perfection, design tokens, and user psychology. We prototype production interfaces in Figma, create motion graphics, and establish the visual identity for every release.',
    members: 24,
    cadence: 'Fridays · 4:00 PM Critique',
    output:  'Production design systems, component libraries, motion reels',
    tags:    ['Figma', 'UI Tokens', 'After Effects', 'Design Systems', 'Blender'],
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
    body:    'Squads of 4–6 meeting weekly. No lectures, no teachers — just peer momentum and shared progress.',
    tags:    ['Weekly Standups', 'Shared Roadmaps'],
    metric:  '4–6 peers / circle',
  },
  {
    id:      '02',
    badge:   'PROOF OF WORK',
    title:   'Karma Economy',
    body:    'No paper certificates. Earn statewide Karma points by shipping live repos, pull requests, and real products.',
    tags:    ['GitHub PRs', 'Live Leaderboard'],
    metric:  '100% verifiable',
  },
  {
    id:      '03',
    badge:   'CAMPUS GUILD',
    title:   'Radical Openness',
    body:    'Zero gatekeeping. First years build directly alongside final years. Curiosity is the only entry pass.',
    tags:    ['Cross-Batch', 'Open to All'],
    metric:  'All years & domains',
  },
]

export const loopSteps = [
  {
    step:    '01',
    label:   'Assemble',
    tagline: 'Cohort',
    desc:    'Form a squad of 4–6 peers.',
  },
  {
    step:    '02',
    label:   'Build',
    tagline: 'Execution',
    desc:    'Tackle real roadmaps and code.',
  },
  {
    step:    '03',
    label:   'Ship',
    tagline: 'Proof',
    desc:    'Deploy live repos in public.',
  },
  {
    step:    '04',
    label:   'Earn',
    tagline: 'Karma',
    desc:    'Collect statewide Karma points.',
  },
]

export const karmaLedger = [
  {
    type:     'PR MERGED',
    title:    'cec-makers/attendance-portal',
    points:   '+200 KP',
    reviewer: 'Peer-reviewed by @arjun-s',
    domain:   'Web & Apps',
    time:     '2h ago',
  },
  {
    type:     'LIVE DEPLOY',
    title:    'cec-bot.vercel.app',
    points:   '+400 KP',
    reviewer: 'Validated by µLearn Core',
    domain:   'AI & Data',
    time:     'Yesterday',
  },
  {
    type:     'CIRCLE SPRINT',
    title:    'Cloud Security CTF Milestone 02',
    points:   '+300 KP',
    reviewer: 'Lab verified · 4 flags solved',
    domain:   'Cloud & Sec',
    time:     '2d ago',
  },
]

export const karmaChannels = [
  {
    id:    '01',
    title: 'Open Source & PRs',
    yield: '+100 to +400 KP',
    desc:  'Push production bugfixes to public repositories, author community documentation, or deploy campus software.',
    tags:  ['GitHub PRs', 'Live Deployments'],
  },
  {
    id:    '02',
    title: 'Circle Milestones',
    yield: '+200 to +500 KP',
    desc:  'Complete structured roadmap modules with your learning circle squad and showcase projects at public Demo Days.',
    tags:  ['Weekly Standups', 'Demo Days'],
  },
  {
    id:    '03',
    title: 'Hackathons & Bounties',
    yield: '+400 to +1,000 KP',
    desc:  'Build functional end-to-end prototypes during 24-hour sprints or complete high-priority platform challenges.',
    tags:  ['24-Hour Sprints', 'Statewide Bounties'],
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
