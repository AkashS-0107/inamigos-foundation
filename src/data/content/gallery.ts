import type { FeaturedGalleryItem, GalleryItem } from "@/types/gallery";

/** Featured flagship campaign story for the Gallery Hero section. */
export const featuredGalleryItem: FeaturedGalleryItem = {
  id: "featured-bright-futures-2025",
  title: "Empowering 5,000 Rural Students Through Digital Literacy",
  description:
    "A transformative initiative bridging the educational divide in underserved districts by equipping schools with solar-powered computer labs, digital learning libraries, and interactive STEM kits.",
  category: "Education",
  coverImage:
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=85",
  thumbnail:
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
  altText:
    "Young rural students eagerly engaged in interactive digital learning at a solar-powered school lab",
  eventName: "Shiksha Setu Digital Literacy Drive 2025",
  location: "Pune & Satara Districts, Maharashtra",
  date: "October 14, 2025",
  tags: ["Digital Learning", "Rural Youth", "Solar Education", "STEM Drive"],
  featured: true,
  loadingStrategy: "eager",
  photographer: "InAmigos Media Cell",
  aspectRatio: "wide",
  campaignStory:
    "In 2025, InAmigos Foundation launched the Shiksha Setu Initiative across 32 rural schools. By setting up off-grid solar-powered computer systems and providing interactive vernacular learning software, over 5,000 children gained access to fundamental digital literacy, coding basics, and modern science resources.",
  ctaText: "Explore Educational Initiatives",
  ctaLink: "#projects",
  impactMetrics: [
    { label: "Students Trained", value: "5,000+" },
    { label: "Schools Digitized", value: "32 Labs" },
    { label: "Volunteers Mobilized", value: "180 Youth" },
  ],
};

/** Verified photo gallery dataset representing active InAmigos Foundation drives & events. */
export const galleryItems: GalleryItem[] = [
  {
    id: "gal-edu-1",
    title: "Youth STEM Workshop & Science Fair",
    description:
      "Hands-on robotics and renewable energy projects for high school students from economically weaker backgrounds.",
    category: "Education",
    coverImage:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    thumbnail:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    altText: "Students collaborating on a solar robot project during the science workshop",
    eventName: "Annual Youth STEM Conclave",
    location: "PCMC Community Hall, Pune",
    date: "November 22, 2025",
    tags: ["STEM", "Youth Power", "Practical Learning"],
    featured: false,
    loadingStrategy: "lazy",
    aspectRatio: "landscape",
  },
  {
    id: "gal-health-1",
    title: "Free Community Eye Care & Health Camp",
    description:
      "Comprehensive vision testing, prescription spectacles distribution, and general medical checkups for senior citizens.",
    category: "Healthcare",
    coverImage:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=85",
    thumbnail:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    altText: "Doctor performing an eye examination during the rural health drive",
    eventName: "Arogya Sanjeevani Medical Drive",
    location: "Wai Rural Health Center, Satara",
    date: "December 05, 2025",
    tags: ["Free Healthcare", "Senior Vision", "Medical Camp"],
    featured: false,
    loadingStrategy: "lazy",
    aspectRatio: "landscape",
  },
  {
    id: "gal-env-1",
    title: "5,000 Native Trees Plantation Campaign",
    description:
      "Community afforestation drive planting native banyan, neem, and peepal trees to restore degraded urban corridors.",
    category: "Tree Plantation",
    coverImage:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85",
    thumbnail:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    altText: "Volunteers planting saplings together in an urban green zone",
    eventName: "Green Roots Mega Plantation",
    location: "Viman Nagar Bio-Park, Pune",
    date: "July 18, 2025",
    tags: ["Tree Plantation", "Afforestation", "Climate Action"],
    featured: false,
    loadingStrategy: "lazy",
    aspectRatio: "portrait",
  },
  {
    id: "gal-food-1",
    title: "Zero-Hunger Daily Meal Distribution",
    description:
      "Freshly prepared hot meals served daily to daily-wage workers, homeless individuals, and shelter homes.",
    category: "Food Relief",
    coverImage:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
    thumbnail:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
    altText: "Volunteers serving nutritious meals to children and families",
    eventName: "Annapurna Food Relief Mission",
    location: "Hadapsar & Swargate, Pune",
    date: "January 10, 2026",
    tags: ["Food Relief", "Nutrition", "Zero Hunger"],
    featured: false,
    loadingStrategy: "lazy",
    aspectRatio: "landscape",
  },
  {
    id: "gal-comm-1",
    title: "Women Empowerment Craft & Skill Center",
    description:
      "Vocational training in artisan tailoring, handicraft creation, and micro-business management for rural women.",
    category: "Community",
    coverImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85",
    thumbnail:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    altText: "Women participating proudly in a textile and tailoring skills workshop",
    eventName: "Swayam Shakti Vocational Drive",
    location: "Bhor District, Maharashtra",
    date: "September 08, 2025",
    tags: ["Women Empowerment", "Skill Training", "Livelihood"],
    featured: false,
    loadingStrategy: "lazy",
    aspectRatio: "square",
  },
  {
    id: "gal-med-1",
    title: "Pediatric & Maternal Health Screening",
    description:
      "Specialist doctors and nutrition experts offering free maternal checkups, pediatric immunization, and vitamin supplements.",
    category: "Medical Camps",
    coverImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    altText: "Pediatric specialist attending to a young child with mother at the medical camp",
    eventName: "Matru-Chhaya Health Pavilion",
    location: "Khadki Community Health Center",
    date: "August 15, 2025",
    tags: ["Medical Camps", "Pediatric Care", "Maternal Health"],
    featured: false,
    loadingStrategy: "lazy",
    aspectRatio: "landscape",
  },
  {
    id: "gal-event-1",
    title: "Annual Volunteer Excellence Conclave",
    description:
      "Celebrating the dedication of 500+ student and professional volunteers who led community initiatives across the year.",
    category: "Events",
    coverImage:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
    thumbnail:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
    altText: "Volunteers holding awards and cheering at the annual foundation conclave",
    eventName: "InAmigos Impact Awards 2025",
    location: "Balewadi Convention Center, Pune",
    date: "December 20, 2025",
    tags: ["Volunteer Appreciation", "Events", "Annual Conclave"],
    featured: false,
    loadingStrategy: "lazy",
    aspectRatio: "wide",
  },
  {
    id: "gal-celeb-1",
    title: "Joy of Giving Festival & Cultural Utsav",
    description:
      "A vibrant celebration bringing together shelter children, volunteers, and artists for music, dance, and gift distribution.",
    category: "Celebrations",
    coverImage:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85",
    thumbnail:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    altText: "Children laughing and enjoying festival performance activities",
    eventName: "Deepotsav & Joy of Giving Utsav",
    location: "Kothrud Grounds, Pune",
    date: "November 01, 2025",
    tags: ["Celebrations", "Joy of Giving", "Culture"],
    featured: false,
    loadingStrategy: "lazy",
    aspectRatio: "landscape",
  },
  {
    id: "gal-env-2",
    title: "Riverbed Cleanup & Micro-Plastic Removal",
    description:
      "Over 300 youth volunteers cleared 2.5 tons of plastic and waste from the Mutha riverbanks ahead of the monsoon season.",
    category: "Environment",
    coverImage:
      "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1200&q=85",
    thumbnail:
      "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=600&q=80",
    altText: "Youth volunteers picking up plastic waste along river banks during clean drive",
    eventName: "Clean River Ecosystem Project",
    location: "Mutha Riverfront, Pune",
    date: "June 05, 2025",
    tags: ["Environment", "Clean River", "Youth Action"],
    featured: false,
    loadingStrategy: "lazy",
    aspectRatio: "landscape",
  },
  {
    id: "gal-edu-2",
    title: "Library Books Distribution for Slum Schools",
    description:
      "Donating 3,000 storybooks, encyclopedias, and study tables to set up mini-libraries in underprivileged community centers.",
    category: "Education",
    coverImage:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85",
    thumbnail:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    altText: "Young girl happily holding newly gifted storybooks from the community library",
    eventName: "Kitab Setu Book Drive",
    location: "Dharavi, Mumbai & Yerwada, Pune",
    date: "October 02, 2025",
    tags: ["Education", "Libraries", "Book Drive"],
    featured: false,
    loadingStrategy: "lazy",
    aspectRatio: "square",
  },
  {
    id: "gal-med-2",
    title: "Mobile Health Clinic & Blood Donation Camp",
    description:
      "In partnership with city hospitals, collecting 180+ units of voluntary blood and providing free diagnostic tests.",
    category: "Medical Camps",
    coverImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
    thumbnail:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    altText: "Donor giving blood in modern mobile clinic vehicle",
    eventName: "Rakta-Daan Mahotsav",
    location: "Shivajinagar Bus Station Plaza",
    date: "September 28, 2025",
    tags: ["Blood Donation", "Medical Camps", "Healthcare"],
    featured: false,
    loadingStrategy: "lazy",
    aspectRatio: "landscape",
  },
  {
    id: "gal-tree-2",
    title: "Urban Miyawaki Forest Plantation Drive",
    description:
      "Establishing dense urban micro-forests using Miyawaki method to boost local biodiversity and combat rising temperatures.",
    category: "Tree Plantation",
    coverImage:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=85",
    thumbnail:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
    altText: "Lush green young trees growing in an urban Miyawaki micro forest plot",
    eventName: "Miyawaki Urban Jungle Mission",
    location: "Magarpatta Green Corridor, Pune",
    date: "August 24, 2025",
    tags: ["Miyawaki Forest", "Tree Plantation", "Urban Canopy"],
    featured: false,
    loadingStrategy: "lazy",
    aspectRatio: "portrait",
  },
];
