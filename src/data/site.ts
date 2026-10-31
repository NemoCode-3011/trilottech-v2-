export const site = {
  name: "Trilot",
  email: "trilottechnologies@gmail.com",
  whatsapp: "2349043283132",
  location: "Ibadan, Nigeria",
  url: "https://trilottechnologies.vercel.app/",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/trilot.png`,
  description:
    "Trilot designs and hand-codes fast, custom websites and web systems for businesses in Nigeria and beyond.",
  email: site.email,
};
export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/#work" },
  { label: "Pricing", href: "/#pricing" },
];

export const services = [
  {
    slug: "landing",
    title: "Landing pages & business websites",
    description:
      "High-performance, custom-coded web spaces built to turn cold traffic into active inquiries. No rigid templates.",
    bestFor: "Growing businesses, service brands, and launches.",
  },
  {
    slug: "redesign",
    title: "Performance redesign",
    description:
      "We transform slow, outdated layouts into fast, mobile-friendly web presences that are easier to find and easier to use.",
    bestFor: "Upgrading slow site-builder setups into pure code.",
  },
  {
    slug: "software",
    title: "Custom software & digital infrastructure",
    description:
      "Bespoke full-stack web applications, secure database systems, and interactive client portals built from the ground up.",
    bestFor: "Automating operations and scaling complex business logic.",
  },
  {
    slug: "care",
    title: "Active care & growth support",
    description:
      "Continuous performance optimization, secure cloud hosting, and rapid updates so your platform stays secure and grows with you.",
    bestFor: "Founders who want direct engineering support post-launch.",
  },
];

export const processSteps = [
  {
    title: "The discovery chat",
    description:
      // in processSteps[0].description in src/data/site.ts
      "You message us on WhatsApp or submit a quote request. Within 24 hours, we’ll reply and talk through your business goals and requirements. Once the scope is clear, we send a transparent, fixed-price proposal. No hidden fees.",
  },
  {
    title: "Design & engineering",
    description:
      "Once approved, we map your product’s architecture and design a custom visual identity. Then, we write clean, lightweight code from scratch, keeping you updated in a shared channel every step of the way.",
  },
  {
    title: "Testing & launch",
    description:
      "We test security basics and mobile responsiveness, then hand over the keys with a Lighthouse report so you can see the performance for yourself.",
    live: true,
  },
];

export interface Project {
  id: string;
  name: string;
  tag: string;
  problem: string;
  solution: string;
  metricLabel: string;
  metricValue: string;
  liveUrl: string;
  imagePath: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    id: "arcadia",
    name: "Arcadia Homes",
    tag: "Concept build",
    problem:
      "Most property platforms treat homes as lifeless, disconnected listings while burying backend inventory management in clunky software.",
    solution:
      "A nature-led real estate experience with seamless property discovery, paired with a custom multi-role admin dashboard for tracking live sales(demo data) and access permissions.",
    metricLabel: "Lighthouse Performance",
    metricValue: "97 / 100",
    liveUrl: "https://arcadia-homes-wvni.vercel.app/",
    imagePath: "/work/arc1.webp",
    imageAlt: "Arcadia Homes property website homepage",
  },
  {
    id: "knost",
    name: "Knost & Co.",
    tag: "Concept build",
    problem:
      "Civil engineering websites often bury their core capabilities under heavy text walls, losing potential clients before they establish trust.",
    solution:
      "A high-impact landing page that states the company's capabilities instantly, mapping out their production process and past projects onto a single, high-speed line.",
    metricLabel: "Lighthouse Performance",
    metricValue: "89 / 100",
    liveUrl: "https://knost-and-co.vercel.app/",
    imagePath: "/work/knost.webp",
    imageAlt: "Knost & Co. construction website homepage",
  },
  {
    id: "deprime",
    name: "De Prime Barbers",
    tag: "Built for a family barbershop",
    problem:
      "Local service sites often break user momentum by making them click through multiple slow pages just to look up a price or reserve a slot.",
    solution:
      "A fast, single-page interface putting services and pricing details in plain view. If a mobile user likes what they see, a single tap opens a pre-configured booking string on WhatsApp.",
    metricLabel: "Lighthouse Performance",
    metricValue: "90 / 100",
    liveUrl: "https://de-prime-barbers.vercel.app/",
    imagePath: "/work/depp.webp",
    imageAlt: "De Prime Barbers website homepage",
  },
];

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const pricingFactors = [
  {
    title: "Functional complexity",
    description:
      "A single custom-coded landing page needs far less behind the scenes than a multi-role database system or a full-stack web application.",
  },
  {
    title: "Interface scope & scale",
    description:
      "The number of unique page layouts and interactive details we design and build from scratch shapes how long a project takes.",
  },
  {
    title: "Integration requirements",
    description:
      "Connecting to a CRM, payment providers like Paystack or Flutterwave, custom APIs, or an admin panel adds work, and that is reflected in the price.",
  },
];

export const faqs = [
  {
    question:
      "Why should I choose custom code over a template builder like WordPress or Wix?",
    answer:
      "Template builders are a good fit for some businesses. But they often ship extra code you never use, which can slow a site down, and their layouts tend to look alike. A custom Trilot site is built around your business and kept lightweight, which helps it load quickly and gives search engines a clean page to read.",
  },
  {
    question: "How do we handle project payments?",
    answer:
      "Every project has a fixed price, agreed in writing before work starts. You pay in two parts: 50% to begin design, and 50% when the site is ready to launch. If the scope changes along the way, we quote the change first, so there are no surprises.",
  },
  {
    question: "Will I own my website and code completely?",
    answer:
      "Yes. Once the final payment is made, you own the website and its source code. We hand over the code repository and access to your hosting and domain accounts, so you are never locked in to us.",
  },
  {
    question: "How long does a standard project take?",
    answer:
      "A landing page or business website typically goes from first chat to launch in two to four weeks, depending on how quickly content and feedback come in. Custom software takes longer and depends on the scope, which we map out together before you commit.",
  },
];
