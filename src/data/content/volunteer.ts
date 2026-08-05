import type {
  JourneyStep,
  VolunteerBenefit,
  VolunteerCTAContent,
  VolunteerFAQ,
  VolunteerHeaderContent,
  VolunteerRole,
  VolunteerTestimonial,
} from "@/types/volunteer";

export const volunteerHeaderData: VolunteerHeaderContent = {
  eyebrow: "Volunteer & Engagement • Join InAmigos Movement",
  title: "Bridge Inspiration into Action &",
  titleHighlight: "Transform Lives Together",
  description:
    "Join over 4,500+ passionate volunteers, mentors, and change-makers giving their time to empower underprivileged communities across education, healthcare, nutrition, and environmental sustainability.",
  primaryCta: {
    label: "Become a Volunteer",
    href: "#volunteer-apply",
  },
  secondaryCta: {
    label: "Explore Open Roles",
    href: "#volunteer-roles",
  },
  badgeText: "ISO 9001:2015 Verified NGO Program",
  quickStats: [
    { label: "Active Volunteers", value: "4,500+" },
    { label: "Hours Contributed", value: "150,000+" },
    { label: "Communities Served", value: "120+" },
    { label: "Volunteer Satisfaction", value: "98%" },
  ],
};

export const volunteerBenefitsData: VolunteerBenefit[] = [
  {
    id: "make-impact",
    title: "Make Real Impact",
    description:
      "Directly uplift underprivileged children and rural families through ground-level initiatives with transparent, measurable social outcomes.",
    icon: "HeartHandshake",
    highlightText: "Ground-Level Change",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "build-leadership",
    title: "Build Leadership",
    description:
      "Lead volunteer squads, organize community drives, and direct real-world projects that develop strategic decision-making and project management abilities.",
    icon: "Sparkles",
    highlightText: "Youth Empowerment",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "gain-experience",
    title: "Gain Practical Experience",
    description:
      "Apply your skills in real environments—from field health operations and educational mentoring to event management and digital media creation.",
    icon: "Briefcase",
    highlightText: "Career Boost",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
  },
  {
    id: "expand-network",
    title: "Expand Your Network",
    description:
      "Connect with like-minded change-makers, CSR executives, academic mentors, and social leaders across our national volunteer network.",
    icon: "Users",
    highlightText: "National Network",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  },
  {
    id: "develop-skills",
    title: "Develop Versatile Skills",
    description:
      "Access specialized training workshops in public speaking, crisis response, child psychology, environmental auditing, and fundraising.",
    icon: "GraduationCap",
    highlightText: "Free Workshops",
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
  },
  {
    id: "official-recognition",
    title: "Official Recognition & Certs",
    description:
      "Earn ISO-certified volunteering certificates, performance awards, and personalized letters of recommendation for higher education or jobs.",
    icon: "Award",
    highlightText: "ISO Certified",
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
  },
];

export const volunteerJourneyData: JourneyStep[] = [
  {
    stepNumber: 1,
    title: "Simple Application",
    subtitle: "Express Your Passion",
    description:
      "Fill out our streamlined 2-minute volunteer interest form. Select your preferred cause, domain expertise, and weekly availability.",
    icon: "FileText",
    duration: "5 Mins",
    keyActions: [
      "Select cause area (Education, Health, Eco)",
      "Specify preferred location mode (On-Site / Remote / Hybrid)",
      "Instant email confirmation & onboarding link",
    ],
  },
  {
    stepNumber: 2,
    title: "Interactive Orientation",
    subtitle: "Aligning Vision & Values",
    description:
      "Attend a brief online or in-person orientation call to meet our volunteer coordinators, learn our core ethics, and explore open roles.",
    icon: "MessageSquare",
    duration: "15-20 Mins",
    keyActions: [
      "Overview of InAmigos Foundation missions",
      "Q&A session with chapter leads",
      "Role matching based on your schedule",
    ],
  },
  {
    stepNumber: 3,
    title: "Smooth Onboarding",
    subtitle: "Welcome to the Family",
    description:
      "Receive your digital Volunteer Welcome Kit, access shared team drives, and get connected to your localized city chapter or remote squad.",
    icon: "UserCheck",
    duration: "1-2 Days",
    keyActions: [
      "Digital Volunteer ID & Welcome Kit",
      "Access to Slack / WhatsApp chapter groups",
      "Assigned a dedicated volunteer buddy",
    ],
  },
  {
    stepNumber: 4,
    title: "Practical Training",
    subtitle: "Equipping for Excellence",
    description:
      "Participate in domain-specific preparation modules covering safety protocols, beneficiary communication, and activity execution guidelines.",
    icon: "BookOpen",
    duration: "2-3 Hours",
    keyActions: [
      "Safety & child protection guidelines",
      "Activity toolkits & digital learning apps",
      "Mock drive simulation & mentor feedback",
    ],
  },
  {
    stepNumber: 5,
    title: "Field & Remote Action",
    subtitle: "Creating Tangible Impact",
    description:
      "Step into the field or contribute remotely. Participate in weekend drives, teach students, lead tree planting, or craft digital campaigns.",
    icon: "Target",
    duration: "Flexible Schedule",
    keyActions: [
      "Participate in scheduled drives",
      "Log volunteer hours on our portal",
      "Receive ongoing support from squad leads",
    ],
  },
  {
    stepNumber: 6,
    title: "Recognition & Growth",
    subtitle: "Celebrating Your Journey",
    description:
      "Track your impact milestones, earn verified certificates, earn volunteer badges, and unlock leadership roles as squad leaders or chapter leads.",
    icon: "Trophy",
    duration: "Milestone Based",
    keyActions: [
      "ISO-Certified Volunteering Certificate",
      "Letter of Recommendation (for top contributors)",
      "Opportunity to lead future chapters",
    ],
  },
];

export const volunteerRolesData: VolunteerRole[] = [
  {
    id: "role-education-mentor",
    title: "Education Mentor",
    category: "Education",
    icon: "BookOpen",
    shortDescription:
      "Teach foundational math, English literacy, and digital skills to underprivileged children at community learning centers.",
    fullDescription:
      "As an Education Mentor, you will conduct weekend or evening learning sessions for primary and secondary school children. You will use solar-powered learning tablets, fun activity kits, and interactive games to make learning enjoyable and effective.",
    requiredSkills: ["Teaching", "Patience", "Basic English & Math", "Empathy"],
    timeCommitment: "3-5 hrs / week",
    location: "Hybrid",
    spotsAvailable: 18,
    ctaText: "Apply as Education Mentor",
    urgent: true,
    impactSummary: "Directly mentor 15-20 underprivileged students toward academic success.",
  },
  {
    id: "role-event-volunteer",
    title: "Event & Drive Coordinator",
    category: "Events",
    icon: "Calendar",
    shortDescription:
      "Coordinate ground logistics, beneficiary registration, kit distribution, and crowd management during health & food drives.",
    fullDescription:
      "Event Volunteers are the backbone of our drive operations. You will assist in setting up distribution desks, welcoming beneficiaries, ensuring safety compliance, and coordinating with local village leaders during major campaigns.",
    requiredSkills: ["Event Management", "Communication", "Teamwork", "Problem Solving"],
    timeCommitment: "Weekend Drives (4 hrs)",
    location: "On-Site",
    spotsAvailable: 30,
    ctaText: "Apply as Event Coordinator",
    impactSummary: "Ensure smooth execution for drives impacting 500+ beneficiaries per event.",
  },
  {
    id: "role-healthcare-support",
    title: "Healthcare Support Specialist",
    category: "Healthcare",
    icon: "HeartPulse",
    shortDescription:
      "Assist doctors and medical teams during free rural health checkups, eye screening camps, and medicine distribution drives.",
    fullDescription:
      "Support our medical volunteers by maintaining patient records, assisting with basic triage measurements (BP, pulse, height/weight), guiding senior citizens through screening stalls, and distributing free hygiene kits.",
    requiredSkills: ["Basic First Aid", "Organization", "Compassion", "Record Keeping"],
    timeCommitment: "1-2 Days / Month",
    location: "On-Site",
    spotsAvailable: 12,
    ctaText: "Apply as Healthcare Support",
    urgent: true,
    impactSummary: "Help provide free medical consultations to 800+ rural patients per camp.",
  },
  {
    id: "role-community-outreach",
    title: "Community Outreach Lead",
    category: "Outreach",
    icon: "Megaphone",
    shortDescription:
      "Engage local neighborhoods, map family needs, conduct door-to-door awareness campaigns, and build grassroots trust.",
    fullDescription:
      "Outreach Leads bridge the gap between InAmigos and local communities. You will visit suburban clusters and rural hamlets to identify out-of-school children, families needing clean water filters, and elderly citizens requiring health aid.",
    requiredSkills: ["Public Speaking", "Local Languages", "Active Listening", "Field Work"],
    timeCommitment: "4 hrs / week",
    location: "On-Site",
    spotsAvailable: 15,
    ctaText: "Apply as Outreach Lead",
    impactSummary: "Map and connect 50+ underserved families to foundation aid programs.",
  },
  {
    id: "role-content-creator",
    title: "Digital Content & Storyteller",
    category: "Media",
    icon: "Camera",
    shortDescription:
      "Capture impactful photos, edit video reels, write beneficiary success stories, and manage social media campaigns remotely.",
    fullDescription:
      "Bring social impact stories to life! As a Digital Storyteller, you will produce engaging visual content, design posters, edit short reels, and craft newsletter stories that inspire donors and recruit fellow volunteers globally.",
    requiredSkills: ["Photography / Video Editing", "Graphic Design", "Copywriting", "Social Media"],
    timeCommitment: "2-4 hrs / week",
    location: "Remote",
    spotsAvailable: 8,
    ctaText: "Apply as Content Creator",
    impactSummary: "Amplify NGO stories to reach over 250,000+ digital supporters worldwide.",
  },
  {
    id: "role-environment-campaigner",
    title: "Eco & Plantation Campaigner",
    category: "Environment",
    icon: "Trees",
    shortDescription:
      "Lead urban mini-forest creation, geotag native tree saplings, organize plastic cleanup drives, and advocate sustainability.",
    fullDescription:
      "Eco Campaigners organize tree plantation drives across degraded urban & rural sites. You will help dig soil, plant native saplings, install protective guards, and geotag plants on our digital tracking app to monitor 95%+ survival rates.",
    requiredSkills: ["Passion for Environment", "Physical Stamina", "Geotagging Apps", "Team Leadership"],
    timeCommitment: "Weekend Drives",
    location: "On-Site",
    spotsAvailable: 25,
    ctaText: "Apply as Eco Campaigner",
    impactSummary: "Plant and nurture 500+ native saplings to restore local ecosystems.",
  },
];

export const volunteerTestimonialsData: VolunteerTestimonial[] = [
  {
    id: "vtest-1",
    name: "Faiz Khan",
    role: "Volunteer Supervisor",
    avatarUrl:
      "https://www.inamigosfoundation.org.in/public/storage/volunteers/1738081237.jpg",
    quote:
      "Volunteering with InAmigos Foundation completely redefined my leadership journey. Supervising grassroots drives across Uttar Pradesh and seeing children master reading and digital skills gives me a deep sense of purpose.",
    tenure: "Volunteer Supervisor (UP Chapter)",
    impactHighlight: "Supervised 40+ Community Drives",
    location: "Uttar Pradesh Chapter",
    rating: 5,
  },
  {
    id: "vtest-2",
    name: "Manavi Jaiswal",
    role: "Junior Volunteer Associate",
    avatarUrl:
      "https://www.inamigosfoundation.org.in/public/storage/volunteers/1738127845.jpg",
    quote:
      "The level of transparency, squad camaraderie, and ground-level execution at InAmigos is extraordinary. Mentoring young students under Project Bachpanshala makes you feel part of a national movement.",
    tenure: "Junior Volunteer Associate",
    impactHighlight: "Mentored 150+ Children",
    location: "Central India Chapter",
    rating: 5,
  },
  {
    id: "vtest-3",
    name: "Akash",
    role: "Volunteer Associate",
    avatarUrl:
      "https://www.inamigosfoundation.org.in/public/storage/volunteers/1738080678.jpg",
    quote:
      "InAmigos mobilizes youth like no other non-profit. Whether we are conducting Project Sewa ration drives or Project Prakriti tree plantations, every action is structured, transparent, and high-impact.",
    tenure: "Volunteer Associate",
    impactHighlight: "Participated in 25+ Field Drives",
    location: "Chhattisgarh Chapter",
    rating: 5,
  },
];

export const volunteerFAQsData: VolunteerFAQ[] = [
  {
    id: "faq-who-can-volunteer",
    question: "Who can volunteer with InAmigos Foundation?",
    answer:
      "Anyone aged 16 and above with a heart for service can join! We welcome high school & college students, working professionals, homemakers, doctors, corporate workers, and active senior citizens. No prior NGO experience is required.",
    category: "General",
  },
  {
    id: "faq-remote-options",
    question: "Are remote volunteering opportunities available?",
    answer:
      "Yes, absolutely! We have dedicated remote squads for Digital Content Creation, Graphic Design, Video Editing, Social Media Management, Grant Writing, Curriculum Development, and Online Student Mentoring.",
    category: "Flexibility",
  },
  {
    id: "faq-time-commitment",
    question: "What is the minimum time commitment required?",
    answer:
      "We offer flexible volunteer commitments tailored to your schedule: Weekend Drives (3-4 hours on weekends), Regular Mentoring (2-4 hours per week), or Project-Based Remote Contribution. You can choose what fits your lifestyle best.",
    category: "Flexibility",
  },
  {
    id: "faq-certificates",
    question: "Will I receive an official volunteer certificate & recommendation letter?",
    answer:
      "Yes. All volunteers who complete a minimum of 20 hours of service receive an official ISO 9001:2015 verified Certificate of Volunteering. High-performing volunteers and squad leaders also receive personalized Letters of Recommendation signed by our foundation leadership.",
    category: "Recognition",
  },
  {
    id: "faq-training-provided",
    question: "Is training provided before going to field drives?",
    answer:
      "Yes! Every volunteer completes a brief orientation and safety training session before stepping into the field. You will also be paired with an experienced squad leader or buddy during your first 3 field drives.",
    category: "Training",
  },
  {
    id: "faq-corporate-groups",
    question: "Can corporate teams or college clubs volunteer together?",
    answer:
      "Definitely. We frequently partner with corporate CSR teams, university student clubs, and community groups for customized single-day or weekend volunteering drives such as tree plantations, school painting, or health camps.",
    category: "Partnerships",
  },
];

export const volunteerCTAData: VolunteerCTAContent = {
  headline: "Ready to Turn Your Passion into Real Social Impact?",
  subheadline: "Join 4,500+ Change-Makers Uplifting Lives Across India",
  description:
    "Whether you give 2 hours a week as a mentor, lead weekend plantation drives, or contribute remotely — your dedication creates lasting hope for children and families.",
  primaryCta: {
    label: "Become a Volunteer",
    href: "#volunteer-apply",
  },
  secondaryCta: {
    label: "Partner With Us",
    href: "#partner-us",
  },
  tertiaryCta: {
    label: "Donate Now",
    href: "#donate",
  },
  stats: [
    { value: "4,500+", label: "Active Volunteers" },
    { value: "120+", label: "Communities Transformed" },
    { value: "100%", label: "ISO-Verified Impact" },
  ],
};
