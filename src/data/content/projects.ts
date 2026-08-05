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
  id: "project-bachpanshala",
  slug: "project-bachpanshala",
  title: "Project Bachpanshala",
  subtitle: "Nurturing Young Minds, Building Bright Futures",
  category: "Education",
  status: "Featured",
  isFeatured: true,
  verifiedBadge: "Official InAmigos Flagship",
  summary:
    "Ensuring quality education, evening tutoring hubs, study kit distribution, and digital literacy for underprivileged children across India.",
  story:
    "Founded under the core vision of InAmigos Foundation, Project Bachpanshala works at the grassroots level to ensure no child is deprived of education. We set up learning hubs in underprivileged communities, distribute school kits, and engage dedicated student volunteers to mentor young learners.",
  description:
    "Project Bachpanshala provides free academic mentoring, foundational literacy, and learning materials to children in underserved villages and urban slums, building a solid foundation for their future.",
  image: {
    coverImage: "https://www.inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg",
    placeholderImage:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==",
    altText: "InAmigos Project Bachpanshala children studying happily with volunteers",
    fallbackImage: DEFAULT_FALLBACK_IMAGE,
  },
  location: "Bilaspur & Pan-India Community Centers",
  startDate: "September 2020",
  metrics: [
    { label: "Children Educated", value: "14,000+" },
    { label: "Learning Centers", value: "35 Centers" },
    { label: "Retention Rate", value: "98%" },
    { label: "Volunteer Tutors", value: "500+ Active" },
  ],
  keyAchievements: [
    "Distributed over 10,000+ comprehensive stationery and book kits to underprivileged children.",
    "Established 35 community Bachpanshala learning centers with evening mentoring classes.",
    "Mobilized student volunteers across multiple Indian states to mentor primary school children.",
    "Achieved a 98% school retention rate among program participants.",
  ],
  ctaLabel: "Support Bachpanshala",
  ctaLink: routePaths.volunteer,
  tags: ["Education", "Child Development", "Bachpanshala", "Youth Mentorship"],
};

export const projectsData: Project[] = [
  featuredProjectData,
  {
    id: "project-udaan",
    slug: "project-udaan",
    title: "Project Udaan",
    subtitle: "Soaring Towards a Brighter Future — Women Empowerment",
    category: "Skill Development",
    status: "Active",
    summary:
      "Empowering women through vocational skill development, financial literacy, tailoring workshops, and self-reliance guidance.",
    description:
      "Project Udaan focuses on empowering women from low-income families by training them in artisan crafts, tailoring, micro-entrepreneurship, and digital literacy to help them achieve financial independence and dignity.",
    image: {
      coverImage: "https://www.inamigosfoundation.org.in/public/storage/slideshow/1738235638.jpg",
      placeholderImage:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiNlZjQ0NDQiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==",
      altText: "InAmigos Project Udaan women empowerment skill workshop",
      fallbackImage: DEFAULT_FALLBACK_IMAGE,
    },
    location: "Chhattisgarh & Multi-State Skill Hubs",
    startDate: "January 2021",
    metrics: [
      { label: "Women Empowered", value: "2,500+" },
      { label: "Skill Workshops", value: "60+" },
      { label: "Self-Reliant", value: "85%" },
    ],
    keyAchievements: [
      "Trained 2,500+ women in vocational skills and financial management.",
      "Provided micro-enterprise tools and sewing machines to skill graduates.",
      "Established community support networks for women entrepreneurs.",
    ],
    ctaLabel: "Support Women Empowerment",
    ctaLink: routePaths.volunteer,
    tags: ["Women Empowerment", "Udaan", "Skill Training", "Financial Independence"],
  },
  {
    id: "project-jeev",
    slug: "project-jeev",
    title: "Project Jeev",
    subtitle: "Empowering Lives, Spreading Compassion — Animal Welfare",
    category: "Community Development",
    status: "Active",
    summary:
      "Animal welfare initiatives including stray feeding drives, emergency rescues, medical care, and community compassion awareness.",
    description:
      "Project Jeev is dedicated to animal welfare and protection. Volunteers distribute daily food to stray animals, conduct medical treatment drives, and build community awareness for humane treatment of all living beings.",
    image: {
      coverImage: "https://www.inamigosfoundation.org.in/public/storage/slideshow/1738235697.jpg",
      placeholderImage:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==",
      altText: "InAmigos Project Jeev volunteers feeding and caring for stray animals",
      fallbackImage: DEFAULT_FALLBACK_IMAGE,
    },
    location: "Urban & Semi-Urban Hubs",
    startDate: "March 2021",
    metrics: [
      { label: "Animals Fed Daily", value: "1,000+" },
      { label: "Rescues Handled", value: "450+" },
      { label: "Care Volunteers", value: "200+" },
    ],
    keyAchievements: [
      "Organized regular daily feeding drives for stray animals in partner cities.",
      "Facilitated emergency veterinary treatments and vaccination drives.",
      "Built localized volunteer squads for stray animal rescue and care.",
    ],
    ctaLabel: "Support Animal Welfare",
    ctaLink: routePaths.volunteer,
    tags: ["Animal Welfare", "Jeev", "Compassion", "Stray Care"],
  },
  {
    id: "project-seva",
    slug: "project-seva",
    title: "Project Sewa",
    subtitle: "Serving Humanity with Compassion — Food & Ration Relief",
    category: "Community Development",
    status: "Active",
    summary:
      "Direct distribution of nutritious meals, dry ration packages, and clothing to underprivileged daily wage workers and shelter families.",
    description:
      "Project Sewa represents InAmigos' unwavering commitment to humanitarian relief. Through regular food distribution drives and winter clothes donation, we support vulnerable populations with dignity and care.",
    image: {
      coverImage: "https://www.inamigosfoundation.org.in/public/storage/slideshow/1738236132.jpg",
      placeholderImage:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiMzYjgydjYiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==",
      altText: "InAmigos Project Sewa volunteers distributing food meals to families",
      fallbackImage: DEFAULT_FALLBACK_IMAGE,
    },
    location: "Slums, Shelters & Rural Clusters",
    startDate: "September 2020",
    metrics: [
      { label: "Meals Distributed", value: "50,000+" },
      { label: "Ration Kits Given", value: "5,000+" },
      { label: "Clothes Donated", value: "12,000+" },
    ],
    keyAchievements: [
      "Distributed over 50,000 freshly prepared meals to daily wage families.",
      "Provided monthly grocery ration kits to elderly and needy households.",
      "Conducted seasonal winter clothing and blanket distribution drives.",
    ],
    ctaLabel: "Support Food Relief",
    ctaLink: routePaths.volunteer,
    tags: ["Food Distribution", "Sewa", "Humanitarian Aid", "Ration Relief"],
  },
  {
    id: "project-prakriti",
    slug: "project-prakriti",
    title: "Project Prakriti",
    subtitle: "Plant for a Better Tomorrow — Environmental Conservation",
    category: "Environment",
    status: "Active",
    summary:
      "Tree plantation campaigns, eco-awareness workshops, riverfront cleanups, and green sustainability initiatives across India.",
    description:
      "Project Prakriti is InAmigos' environmental wing. We mobilize youth volunteers for massive tree plantation drives, sapling care, plastic waste cleanup, and ecological education in schools.",
    image: {
      coverImage: "https://www.inamigosfoundation.org.in/public/storage/slideshow/1738236201.jpg",
      placeholderImage:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiNhODVkNTAiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==",
      altText: "InAmigos Project Prakriti tree plantation drive with youth volunteers",
      fallbackImage: DEFAULT_FALLBACK_IMAGE,
    },
    location: "15+ Cities & Green Corridors",
    startDate: "June 2021",
    metrics: [
      { label: "Trees Planted", value: "25,000+" },
      { label: "Cities Covered", value: "15+" },
      { label: "Survival Rate", value: "88%" },
    ],
    keyAchievements: [
      "Planted over 25,000 native shade and fruit trees across urban and rural sites.",
      "Organized clean riverbank and plastic-free community campaigns.",
      "Engaged thousands of school students in environmental workshops.",
    ],
    ctaLabel: "Plant a Tree",
    ctaLink: routePaths.volunteer,
    tags: ["Tree Plantation", "Prakriti", "Environment", "Eco Action"],
  },
  {
    id: "project-vikas",
    slug: "project-vikas",
    title: "Project Vikas",
    subtitle: "Enhancing Employability Through Youth Skill Programs",
    category: "Skill Development",
    status: "Active",
    summary:
      "Computer literacy, professional communication, resume building, and career guidance workshops for youth.",
    description:
      "Project Vikas aims to bridge the employability gap for college students and youth from low-income backgrounds by providing market-aligned digital skills, communication training, and job interview prep.",
    image: {
      coverImage: "https://www.inamigosfoundation.org.in/public/storage/settings/1738236437.jpg",
      placeholderImage:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiNmMjk3MGQiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==",
      altText: "InAmigos Project Vikas youth skill development workshop",
      fallbackImage: DEFAULT_FALLBACK_IMAGE,
    },
    location: "Universities & Youth Training Hubs",
    startDate: "January 2022",
    metrics: [
      { label: "Youth Trained", value: "3,200+" },
      { label: "Job Placements", value: "70%" },
      { label: "Skill Modules", value: "12 Courses" },
    ],
    keyAchievements: [
      "Trained 3,200+ young individuals in digital tools and office software.",
      "Hosted career placement drives in collaboration with local employers.",
      "Provided career mentorship and resume guidance for first-generation graduates.",
    ],
    ctaLabel: "Support Youth Skills",
    ctaLink: routePaths.volunteer,
    tags: ["Youth Skills", "Vikas", "Employability", "Career Growth"],
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
