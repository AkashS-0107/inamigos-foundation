import { routePaths } from "@/app/routes";
import type {
  CategoryInfo,
  CTAOption,
  FeaturedProject,
  ImpactHighlight,
  Project,
  ProjectsHeaderContent,
  TimelineMilestone,
} from "@/types/projects";

const DEFAULT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80";

export const projectsHeaderData: ProjectsHeaderContent = {
  eyebrow: "Our Major Initiatives",
  title: "Transforming Communities Through Purpose-Driven Projects",
  description:
    "Explore how InAmigos Foundation mobilizes youth volunteers and transparent resources to drive sustainable grassroots change in education, healthcare, environment, and social development.",
};

export const projectCategoriesData: CategoryInfo[] = [
  {
    id: "All",
    title: "All Initiatives",
    description: "Explore our complete portfolio of community transformation projects.",
    iconName: "FolderKanban",
    count: 6,
    badge: "Full Portfolio",
  },
  {
    id: "Education",
    title: "Education",
    description: "Empowering children with quality learning materials, mentorship, and digital hubs.",
    iconName: "GraduationCap",
    count: 2,
    badge: "Flagship Sector",
  },
  {
    id: "Healthcare",
    title: "Healthcare",
    description: "Delivering free diagnostic camps, hygiene kits, and emergency medical assistance.",
    iconName: "HeartPulse",
    count: 1,
    badge: "Essential Service",
  },
  {
    id: "Environment",
    title: "Environment",
    description: "Nationwide tree plantation drives, eco-workshops, and green sustainability zones.",
    iconName: "Leaf",
    count: 1,
    badge: "Eco Action",
  },
  {
    id: "Community Development",
    title: "Community Dev",
    description: "Clean water, solar lighting, sanitation units, and emergency food distribution.",
    iconName: "Users",
    count: 2,
    badge: "Grassroots Scale",
  },
  {
    id: "Skill Development",
    title: "Skill Academy",
    description: "Vocational training, computer literacy, and micro-entrepreneurship for youth & women.",
    iconName: "Sparkles",
    count: 1,
    badge: "Self-Reliance",
  },
];

export const featuredProjectData: FeaturedProject = {
  id: "project-shiksha",
  slug: "shiksha-empowerment-program",
  title: "Shiksha Empowerment Program",
  subtitle: "Bringing quality education & digital literacy to rural children",
  category: "Education",
  status: "Featured",
  isFeatured: true,
  verifiedBadge: "Verified NGO Initiative",
  summary:
    "Our flagship education drive provides free learning kits, evening tutoring hubs, and digital literacy devices to children in underserved villages across India.",
  story:
    "Education is the most powerful catalyst for breaking intergenerational cycles of poverty. Since inception, the Shiksha Empowerment Program has established over 25 grassroots community learning centers equipped with solar power, tablet computers, and dedicated student mentors. We ensure zero children in our partner villages drop out due to lack of study supplies or academic guidance.",
  description:
    "Education is the most powerful tool for breaking intergenerational poverty. Shiksha Empowerment Program operates 25+ community learning centers equipped with books, tablets, and passionate student mentors to ensure every child stays in school and builds foundational academic and digital skills.",
  image: {
    coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    placeholderImage:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==",
    altText: "Group of young students smiling in a rural classroom with open books",
    fallbackImage: DEFAULT_FALLBACK_IMAGE,
  },
  location: "Pan-India Rural & Semi-Urban Hubs",
  startDate: "January 2021",
  metrics: [
    { label: "Students Enrolled", value: "5,000+" },
    { label: "Learning Hubs", value: "25 Centers" },
    { label: "School Retention", value: "98%" },
    { label: "Youth Tutors", value: "400+ Active" },
  ],
  keyAchievements: [
    "Distributed 3,500+ comprehensive learning & stationery kits to primary school students.",
    "Established 25 digital literacy centers equipped with solar power and tablet computers.",
    "Mobilized 400+ university youth volunteers as weekend tutors and academic mentors.",
    "Achieved a 98% school retention rate among program participants in target villages.",
  ],
  ctaLabel: "Support Shiksha Initiative",
  ctaLink: routePaths.volunteer,
  tags: ["Education", "Digital Literacy", "Youth Mentorship", "Rural Hubs"],
};

export const projectsData: Project[] = [
  featuredProjectData,
  {
    id: "project-swasthya",
    slug: "swasthya-healthcare-outreach",
    title: "Swasthya Rural Healthcare Outreach",
    subtitle: "Free health screenings, hygiene awareness & preventive care",
    category: "Healthcare",
    status: "Active",
    summary:
      "Organizing mobile medical camps, preventive diagnostic checkups, and sanitary napkin distribution drives for vulnerable rural populations.",
    description:
      "Access to basic healthcare remains out of reach for millions in remote areas. Swasthya Healthcare Outreach bridges this gap by bringing qualified doctors, essential diagnostic tests, and health awareness directly to remote village squares.",
    image: {
      coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      placeholderImage:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiNlZjQ0NDQiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==",
      altText: "Volunteer healthcare doctor consulting a rural elder patient at a health camp",
      fallbackImage: DEFAULT_FALLBACK_IMAGE,
    },
    location: "Maharashtra & Madhya Pradesh Villages",
    startDate: "March 2022",
    metrics: [
      { label: "Health Screenings", value: "12,000+" },
      { label: "Camps Conducted", value: "40+" },
      { label: "Free Diagnostics", value: "100%" },
    ],
    keyAchievements: [
      "Conducted 40+ free medical screening camps covering general medicine, eye care, and dental hygiene.",
      "Distributed 8,000+ hygiene and maternal care kits to women in low-income clusters.",
      "Partnered with local hospital trusts to fund specialized emergency treatments.",
    ],
    ctaLabel: "Sponsor a Health Camp",
    ctaLink: routePaths.volunteer,
    tags: ["Healthcare", "Preventive Care", "Women Hygiene", "Medical Camps"],
  },
  {
    id: "project-green-earth",
    slug: "green-earth-plantation-drive",
    title: "Green Earth Plantation Drive",
    subtitle: "Planting native trees & building community eco-zones",
    category: "Environment",
    status: "Active",
    summary:
      "A youth-led environmental campaign focused on urban afforestation, sapling maintenance, and climate resilience workshops.",
    description:
      "Combatting climate change requires grassroots ecological restoration. Green Earth Plantation Drive mobilizes volunteers to plant native fruit and shade trees while empowering local communities to care for them for long-term survival.",
    image: {
      coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      placeholderImage:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==",
      altText: "Hands holding a green tree sapling being planted in fertile soil",
      fallbackImage: DEFAULT_FALLBACK_IMAGE,
    },
    location: "15+ Major Indian Cities & Town Outskirts",
    startDate: "June 2021",
    metrics: [
      { label: "Trees Planted", value: "25,000+" },
      { label: "Cities Covered", value: "15+" },
      { label: "Sapling Survival", value: "85%" },
    ],
    keyAchievements: [
      "Planted over 25,000 native shade and fruit-bearing trees across urban parks and village corridors.",
      "Achieved an 85% sapling survival rate through community ownership and drip-irrigation setups.",
      "Engaged 2,000+ school students in interactive eco-workshops on biodiversity.",
    ],
    ctaLabel: "Plant a Tree Today",
    ctaLink: routePaths.volunteer,
    tags: ["Environment", "Afforestation", "Climate Resilience", "Eco Action"],
  },
  {
    id: "project-gram-vikas",
    slug: "gram-vikas-community-hub",
    title: "Gram Vikas Community Development",
    subtitle: "Clean water, solar lighting & sustainable village infrastructure",
    category: "Community Development",
    status: "Active",
    summary:
      "Transforming village infrastructure through community clean water filtration units, solar streetlights, and youth committees.",
    description:
      "Gram Vikas focuses on holistic village development by providing foundational infrastructure. We install community water purifiers, illuminate unlit streets with solar panels, and foster youth leadership to maintain village assets.",
    image: {
      coverImage: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80",
      placeholderImage:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiMzYjgydjYiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==",
      altText: "Rural villagers gathered around clean water supply point in a developed village",
      fallbackImage: DEFAULT_FALLBACK_IMAGE,
    },
    location: "Rural Districts of Western & Central India",
    startDate: "August 2022",
    metrics: [
      { label: "Villages Supported", value: "18 Villages" },
      { label: "Clean Water Access", value: "5,000+" },
      { label: "Solar Street Lights", value: "120 Units" },
    ],
    keyAchievements: [
      "Installed community RO water purification plants serving 5,000+ villagers with safe drinking water.",
      "Set up 120 solar-powered street lamps in dark village transit pathways for safety.",
      "Formed 18 village youth committees to maintain local infrastructure independently.",
    ],
    ctaLabel: "Support Village Dev",
    ctaLink: routePaths.volunteer,
    tags: ["Infrastructure", "Clean Water", "Solar Energy", "Rural Dev"],
  },
  {
    id: "project-kaushal",
    slug: "kaushal-women-youth-skill-academy",
    title: "Kaushal Women & Youth Skill Academy",
    subtitle: "Vocational computer training, tailoring & micro-entrepreneurship",
    category: "Skill Development",
    status: "Active",
    summary:
      "Empowering young women and youth with market-relevant vocational skills, digital tools, and micro-business launch assistance.",
    description:
      "Economic independence breaks dependency cycles. Kaushal Skill Academy offers certified short courses in basic computing, digital tools, tailoring, and micro-business management, enabling rural women to generate independent income.",
    image: {
      coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      placeholderImage:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiNhODVkNTAiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==",
      altText: "Young women engaged in digital computer skill workshop in a training center",
      fallbackImage: DEFAULT_FALLBACK_IMAGE,
    },
    location: "Semi-Urban Community Centers",
    startDate: "January 2023",
    metrics: [
      { label: "Trainees Graduated", value: "1,800+" },
      { label: "Employment Rate", value: "75%" },
      { label: "Micro-Enterprises", value: "150+" },
    ],
    keyAchievements: [
      "Graduated 1,800+ women and youth from certified 3-month digital and tailoring courses.",
      "Assisted 150+ women in starting home-based micro-enterprises and artisan cooperatives.",
      "Placed 400+ youth in local computer operator and administrative roles.",
    ],
    ctaLabel: "Empower a Learner",
    ctaLink: routePaths.volunteer,
    tags: ["Skill Training", "Women Empowerment", "Digital Skills", "Entrepreneurship"],
  },
  {
    id: "project-aahar",
    slug: "aahar-annadaan-food-relief",
    title: "Aahar Annadaan Food Relief Drive",
    subtitle: "Emergency nutrition & warm meal distribution for vulnerable families",
    category: "Community Development",
    status: "Completed",
    summary:
      "Rapid emergency nutrition distribution serving freshly cooked warm meals and monthly grocery ration kits to daily wage families.",
    description:
      "No one should go to bed hungry. Aahar Annadaan is our dedicated nutrition initiative that steps in during economic hardships and natural disasters to distribute balanced, wholesome food to low-income families.",
    image: {
      coverImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
      placeholderImage:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiNmMjk3MGQiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==",
      altText: "Volunteers serving fresh nutritious meals during a community food drive",
      fallbackImage: DEFAULT_FALLBACK_IMAGE,
    },
    location: "Urban Slums & Migrant Shelters",
    startDate: "April 2020",
    metrics: [
      { label: "Meals Served", value: "50,000+" },
      { label: "Ration Kits Given", value: "3,200+" },
      { label: "Volunteers Mobilized", value: "1,200+" },
    ],
    keyAchievements: [
      "Distributed over 50,000 freshly cooked nutritious meals to daily wage workers.",
      "Delivered 3,200+ monthly dry ration packages to elderly and disabled individuals.",
      "Mobilized 1,200+ youth volunteers across 10 distribution hubs with zero food wastage.",
    ],
    ctaLabel: "View Relief Impact",
    ctaLink: routePaths.impact,
    tags: ["Food Relief", "Emergency Aid", "Zero Hunger", "Community Support"],
  },
];

export const impactHighlightsData: ImpactHighlight[] = [
  {
    id: "communities",
    value: 150,
    suffix: "+",
    label: "Communities Reached",
    description: "Villages, semi-urban clusters, and educational hubs actively served.",
    iconName: "Building2",
  },
  {
    id: "beneficiaries",
    value: 50000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Children educated, patients screened, and families provided relief.",
    iconName: "Users",
  },
  {
    id: "volunteers",
    value: 1200,
    suffix: "+",
    label: "Active Volunteers",
    description: "Passionate youth driving on-ground execution with dedication.",
    iconName: "HeartHandshake",
  },
  {
    id: "campaigns",
    value: 120,
    suffix: "+",
    label: "Campaigns Executed",
    description: "High-impact drives completed in education, health, and eco action.",
    iconName: "Award",
  },
];

export const projectTimelineData: TimelineMilestone[] = [
  {
    id: "timeline-launch",
    year: "2020",
    phase: "Phase 1 - Emergency Response",
    title: "Foundation & Inception",
    subtitle: "A spark of youth-led relief action",
    description:
      "InAmigos Foundation was established by a core group of youth volunteers during critical humanitarian challenges to distribute food and medical supplies.",
    impactMetric: "5,000+ Meals Distributed",
    status: "Completed",
    iconName: "Rocket",
  },
  {
    id: "timeline-expansion",
    year: "2021 - 2022",
    phase: "Phase 2 - Program Expansion",
    title: "Regional Growth & Shiksha Launch",
    subtitle: "Scaling education hubs & healthcare drives",
    description:
      "Launched our flagship Shiksha Empowerment Program and expanded healthcare outreach across 10+ regions, mobilizing hundreds of college volunteers.",
    impactMetric: "15,000+ Beneficiaries Reached",
    status: "Completed",
    iconName: "TrendingUp",
  },
  {
    id: "timeline-reach",
    year: "2023 - 2024",
    phase: "Phase 3 - Sustainable Infrastructure",
    title: "Community Reach & Skill Academy",
    subtitle: "Clean water, solar hubs & women skill centers",
    description:
      "Pioneered Gram Vikas village water purification systems and launched Kaushal Skill Academy to empower young women with vocational computer skills.",
    impactMetric: "150+ Communities & 1,200+ Volunteers",
    status: "Completed",
    iconName: "Globe",
  },
  {
    id: "timeline-volunteer",
    year: "2025",
    phase: "Phase 4 - Nationwide Scale",
    title: "Youth Leadership & Institutional CSR",
    subtitle: "Building national university chapters",
    description:
      "Mobilized student chapters across 25+ universities in India, forming dedicated volunteer squads for environmental and educational drives.",
    impactMetric: "50,000+ Lives Impacted Nationally",
    status: "Ongoing",
    iconName: "Users",
  },
  {
    id: "timeline-future",
    year: "2026+",
    phase: "Phase 5 - Future Vision",
    title: "Sustainable Community Eco-Hubs",
    subtitle: "Permanent solar learning centers & green micro-grids",
    description:
      "Establishing permanent community centers powered by clean energy, digital innovation, and local micro-entrepreneurship.",
    impactMetric: "Goal: 100,000+ Lives Transformed",
    status: "Upcoming",
    iconName: "Sparkles",
  },
];

export const projectCtaOptions: CTAOption[] = [
  {
    id: "volunteer",
    title: "Join as a Volunteer",
    subtitle: "Lead Local Drives & Mentor Youth",
    description:
      "Become part of our 1,200+ strong youth volunteer network. Teach children, lead tree plantation drives, or manage health camps.",
    buttonText: "Join Volunteer Network",
    buttonLink: routePaths.volunteer,
    variant: "primary",
    iconName: "HandHeart",
    badge: "Grassroots Action",
  },
  {
    id: "donate",
    title: "Donate & Fund Impact",
    subtitle: "100% Transparent Non-Profit Funding",
    description:
      "Sponsor a child's annual education kit, fund a rural healthcare camp, or plant native trees with itemized financial accountability.",
    buttonText: "Make a Contribution",
    buttonLink: routePaths.contact,
    variant: "secondary",
    iconName: "Heart",
    badge: "100% Verified",
  },
  {
    id: "partner",
    title: "Partner With Us",
    subtitle: "CSR & Institutional Collaboration",
    description:
      "Collaborate with InAmigos Foundation on high-impact Corporate Social Responsibility (CSR) programs, sustainability initiatives, and community hubs.",
    buttonText: "Become a Partner",
    buttonLink: routePaths.contact,
    variant: "outline",
    iconName: "Building2",
    badge: "CSR & Govt Alliances",
  },
  {
    id: "explore",
    title: "Explore More Impact",
    subtitle: "Audited Metrics & Historical Milestones",
    description:
      "Download our financial transparency audits, read detailed project case studies, and see how your support changes lives nationwide.",
    buttonText: "View Full Impact Report",
    buttonLink: routePaths.impact,
    variant: "ghost",
    iconName: "Compass",
    badge: "Transparency",
  },
];
