export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  foundedYear: string;
  email: string;
  supportEmail: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    formatted: string;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  corePillars: {
    title: string;
    description: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "SERENIQ",
  legalName: "SERENIQ Technologies",
  tagline: "Engineering Intelligent Software, Cloud Systems & High-Throughput Architectures",
  description:
    "SERENIQ is a modern software engineering consultancy. We design, develop, and scale mission-critical applications, cloud-native infrastructures, and intelligent automation systems for forward-thinking organizations worldwide.",
  foundedYear: "2021",
  email: "Hr@sereniqinfo.com",
  supportEmail: "Hr@sereniqinfo.com",
  phone: "+91 7824894408",
  address: {
    street: "Peddapur (V)",
    city: "Sangareddy (D)",
    state: "Telangana (S)",
    country: "India",
    postalCode: "502001",
    formatted: "Peddapur (V), Sangareddy (D), Telangana (S), Pin Code: 502001",
  },
  socials: {
    github: "https://github.com/sereniq",
    linkedin: "https://linkedin.com/company/sereniq",
    twitter: "https://twitter.com/sereniq_tech",
  },
  stats: [
    { label: "Engineering Disciplines", value: "6 Core", description: "From low-latency backends to AI automation" },
    { label: "Average Production Uptime", value: "99.98%", description: "Architected for high resilience & zero downtime" },
    { label: "Code Quality Standard", value: "Strict Type Safety", description: "100% typed, automated linting & peer code audits" },
    { label: "Global Coverage", value: "24/7 Deployment", description: "Distributed engineering teams & delivery squads" },
  ],
  corePillars: [
    {
      title: "Architectural Precision",
      description: "We build systems with high cohesion, loose coupling, and clean interfaces designed to scale cleanly without technical debt.",
    },
    {
      title: "Pragmatic Modernity",
      description: "We adopt proven modern technologies that provide real performance and maintainability dividends over fleeting industry trends.",
    },
    {
      title: "Transparent Collaboration",
      description: "Direct access to senior engineers, transparent sprint boards, and continuous automated deployment visibility.",
    },
    {
      title: "Enterprise Rigor",
      description: "Every deliverable undergoes strict static analysis, unit and integration testing, and comprehensive security vulnerability scanning.",
    },
  ],
};

export const mainNavLinks = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Technologies", href: "/technologies" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export const secondaryNavLinks = [
  { name: "Outsourcing", href: "/outsourcing" },
  { name: "Hire Recruiter", href: "/hire-recruiter" },
  { name: "Industries", href: "/industries" },
];
