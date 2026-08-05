import { routePaths } from "@/app/routes";

export interface MissionVisionItem {
  id: "mission" | "vision";
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  iconName: "Target" | "Eye";
  accentColor: "emerald" | "amber";
}

export interface CoreValueItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: "Users" | "GraduationCap" | "ShieldCheck" | "Leaf";
  highlightTag: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  keyAchieved: string;
  tag: string;
  iconName: "Award" | "TrendingUp" | "HeartHandshake" | "Building2" | "Compass";
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  statBadge?: string;
  iconName: "ShieldCheck" | "HeartHandshake" | "Leaf" | "Users" | "Scale";
}

export const aboutStoryData = {
  eyebrow: "About InAmigos Foundation",
  headlinePrefix: "Driven by",
  headlineAccent: "Compassion",
  headlineSuffix: ". Dedicated to Sustainable Community Empowerment.",
  storyParagraphs: [
    "InAmigos Foundation was born from a simple yet profound realization: real, lasting change happens when passionate youth and compassionate communities come together to bridge the gap between privilege and opportunity.",
    "Founded with a non-profit mission to serve underserved populations across India, we focus on holistic development—providing quality education for children, healthcare assistance, emergency relief, and vocational skill-building for sustainable self-reliance.",
    "Through active grassroots mobilization and radical financial transparency, we turn small acts of kindness into scalable, transformative social movements.",
  ],
  ctaText: "Learn More About Our Journey",
  ctaPath: routePaths.about,
  secondaryCtaText: "View Mission & Vision",
  secondaryCtaHref: "#mission-vision",
  visualCard: {
    eyebrow: "NGO Impact Focus",
    title: "Building Grassroots Resilience Across India",
    description:
      "Every program we run is shaped directly by local community leaders, ensuring sustainable growth and tangible life transformation.",
    miniStats: [
      { value: "150+", label: "Villages & Hubs" },
      { value: "100%", label: "Fund Transparency" },
      { value: "1,200+", label: "Active Youth" },
      { value: "50,000+", label: "Lives Impacted" },
    ],
  },
};

export interface SectionHeaderContent {
  tag: string;
  title: string;
  description: string;
}

export const missionVisionHeader: SectionHeaderContent = {
  tag: "Core Purpose",
  title: "Our Mission & Vision",
  description:
    "Guiding principles that define our commitment to humanitarian service and social transformation.",
};

export const coreValuesHeader: SectionHeaderContent = {
  tag: "Guiding Ethics",
  title: "Our Core Values",
  description:
    "The foundation of everything we build, every initiative we run, and every relationship we nurture.",
};

export const journeyTimelineHeader: SectionHeaderContent = {
  tag: "Chronicle of Growth",
  title: "Our Journey & Milestones",
  description:
    "Tracing our evolution from a grassroots youth movement into a nationwide network of social impact.",
};

export const whyChooseUsHeader: SectionHeaderContent = {
  tag: "Trust & Integrity",
  title: "Why Choose InAmigos Foundation",
  description:
    "Built on radical financial openness, youth passion, and sustainable grassroots execution.",
};

export const missionVisionData: MissionVisionItem[] = [
  {
    id: "mission",
    badge: "OUR PURPOSE",
    title: "Our Mission",
    subtitle: "Uplifting lives through grassroots action & youth empowerment",
    description:
      "To build an inclusive, equitable society by providing essential resources, access to quality education, relief services, and community mentorship to vulnerable populations.",
    points: [
      "Grassroots community engagement & leadership",
      "Comprehensive education & skill development",
      "Immediate emergency & humanitarian relief",
    ],
    iconName: "Target",
    accentColor: "emerald",
  },
  {
    id: "vision",
    badge: "OUR HORIZON",
    title: "Our Vision",
    subtitle: "A world where every individual thrives with dignity & hope",
    description:
      "To pioneer a nationwide network of self-sustaining communities where poverty no longer limits human potential, and where young leaders drive positive social change.",
    points: [
      "Zero children left without quality education",
      "Self-reliant, resilient local communities",
      "Transparent & accountable non-profit governance",
    ],
    iconName: "Eye",
    accentColor: "amber",
  },
];

export const coreValuesData: CoreValueItem[] = [
  {
    id: "community",
    title: "Community First",
    subtitle: "Grassroots Engagement",
    description:
      "We listen directly to the communities we serve, co-creating solutions tailored to their specific cultural and socio-economic needs.",
    iconName: "Users",
    highlightTag: "Grassroots Action",
  },
  {
    id: "education",
    title: "Education & Growth",
    subtitle: "Empowering Next Gens",
    description:
      "Education is our strongest lever for permanent progress. We fund schools, distribute learning kits, and mentor youth to break cycles of poverty.",
    iconName: "GraduationCap",
    highlightTag: "Transformative",
  },
  {
    id: "transparency",
    title: "Radical Transparency",
    subtitle: "100% Accountability",
    description:
      "Every contribution is tracked, verified, and reported. We hold ourselves to the highest standards of financial integrity and openness.",
    iconName: "ShieldCheck",
    highlightTag: "Verified Integrity",
  },
  {
    id: "sustainability",
    title: "Sustainable Impact",
    subtitle: "Long-Term Solutions",
    description:
      "Instead of quick temporary fixes, we build scalable infrastructure and self-sustaining programs that thrive for generations.",
    iconName: "Leaf",
    highlightTag: "Eco & Social Focus",
  },
];

export const journeyTimelineData: JourneyMilestone[] = [
  {
    year: "2020",
    title: "Foundation & Inception",
    subtitle: "A spark of youth-led compassion",
    description:
      "InAmigos Foundation was established by a core group of young visionaries during critical humanitarian challenges to deliver emergency aid to families in need.",
    keyAchieved: "5,000+ Meals & Emergency Supplies Distributed",
    tag: "Inception",
    iconName: "Award",
  },
  {
    year: "2021 - 2022",
    title: "Regional Expansion",
    subtitle: "Scaling relief & healthcare drives",
    description:
      "Expanded our operational footprint across 10+ regions, mobilizing hundreds of youth volunteers for healthcare awareness, food security, and cloth donation drives.",
    keyAchieved: "15,000+ Beneficiaries Supported Across 10 Regions",
    tag: "Growth",
    iconName: "TrendingUp",
  },
  {
    year: "2023",
    title: "Educational Initiatives",
    subtitle: "Empowering children & digital literacy",
    description:
      "Launched flagship education drives, distributing school supplies, setting up evening learning centers, and offering digital literacy workshops to underprivileged students.",
    keyAchieved: "2,500+ Students Enrolled in Learning Programs",
    tag: "Projects",
    iconName: "HeartHandshake",
  },
  {
    year: "2024 - 2025",
    title: "Community Expansion",
    subtitle: "A nationwide network of 1,200+ volunteers",
    description:
      "Reached major milestones with 150+ communities supported and a dedicated volunteer network operating across multiple major cities in India.",
    keyAchieved: "50,000+ Lives Impacted & 1,200+ Active Volunteers",
    tag: "Scale",
    iconName: "Building2",
  },
  {
    year: "2026+",
    title: "Future Vision & Innovation",
    subtitle: "Pioneering sustainable community hubs",
    description:
      "Building permanent community centers, green solar micro-grids, and digital skill hubs to empower future generations with sustainable opportunities.",
    keyAchieved: "Goal: 100,000+ Lives Transformed Nationally",
    tag: "Horizon",
    iconName: "Compass",
  },
];

export const whyChooseUsData: WhyChooseItem[] = [
  {
    id: "transparent",
    title: "100% Financial Transparency",
    description:
      "Every single rupee donated is audited and visible. We provide clear, itemized impact reports so you know exactly how your support changes lives.",
    statBadge: "Audited & Verified",
    iconName: "ShieldCheck",
  },
  {
    id: "volunteer-driven",
    title: "Youth & Volunteer Driven",
    description:
      "Powered by over 1,200+ passionate volunteers who bring energy, empathy, and innovation directly to grassroots field operations.",
    statBadge: "1,200+ Volunteers",
    iconName: "HeartHandshake",
  },
  {
    id: "sustainable",
    title: "Sustainable Program Design",
    description:
      "We focus on creating self-sustaining community structures, local leadership, and long-term educational foundations rather than one-off aid.",
    statBadge: "Long-Term Impact",
    iconName: "Leaf",
  },
  {
    id: "community-focused",
    title: "Community-Centered Action",
    description:
      "Programs are designed in collaboration with local community elders, schools, and families to ensure high resonance and maximum utility.",
    statBadge: "150+ Communities",
    iconName: "Users",
  },
  {
    id: "professional-management",
    title: "Professional Governance",
    description:
      "Led with institutional rigour, structured project management, strict safety guidelines, and performance metrics to guarantee execution excellence.",
    statBadge: "Structured Leadership",
    iconName: "Scale",
  },
];
