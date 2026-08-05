export interface OfficeHours {
  days: string;
  hours: string;
  timezone: string;
  note?: string;
  isOpenNow?: boolean;
}

export interface ContactMethod {
  id: string;
  type: "email" | "phone" | "address" | "hours";
  title: string;
  value: string;
  detail: string;
  actionLabel: string;
  actionHref: string;
  iconName: "Mail" | "Phone" | "MapPin" | "Clock";
  isPrimary?: boolean;
}

export interface OfficeLocation {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  landmark: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  embedMapUrl: string;
  googleMapsUrl: string;
  hours: OfficeHours;
  phone: string;
  email: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  handle: string;
  href: string;
  iconName: "Instagram" | "Facebook" | "Linkedin" | "Twitter" | "Youtube";
  followerCount?: string;
  ariaLabel: string;
  color: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "Volunteer" | "Donations" | "Partnerships" | "General" | "Certificates";
  iconName?: string;
}

export interface ContactHeaderContent {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  badgeText: string;
}

export interface ContactCTAContent {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  tertiaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonHref: string;
  tertiaryButtonHref: string;
}

export interface ContactInfo {
  header: ContactHeaderContent;
  methods: ContactMethod[];
  officeLocation: OfficeLocation;
  socialLinks: SocialLink[];
  faqs: FAQ[];
  cta: ContactCTAContent;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}
