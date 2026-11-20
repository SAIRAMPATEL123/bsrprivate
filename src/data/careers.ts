export interface JobOpening {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experienceLevel: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  preferred: string[];
}

export const jobOpeningsData: JobOpening[] = [
  {
    id: "staff-distributed-systems",
    slug: "staff-distributed-systems-engineer",
    title: "Staff Distributed Systems Engineer",
    department: "Backend & Systems",
    location: "Remote (Americas / EMEA)",
    type: "Full-Time",
    experienceLevel: "Staff / Principal (7+ years)",
    description:
      "We are seeking an experienced Distributed Systems Engineer to design, implement, and benchmark fault-tolerant event backbones, financial ledgers, and low-latency microservice architectures.",
    responsibilities: [
      "Architect high-concurrency microservices in Go and Rust handling thousands of concurrent requests with strict latency SLAs",
      "Design resilient database schemas and partitioning strategies on PostgreSQL, Redis, and Apache Kafka",
      "Lead technical design reviews, establishing company-wide coding guidelines, telemetry standards, and test suites",
      "Collaborate directly with client enterprise tech leads during architectural discovery sprints",
    ],
    requirements: [
      "7+ years of professional backend software engineering experience with deep fluency in Go or Rust",
      "Proven track record building event-driven systems using Apache Kafka, RabbitMQ, or AWS Kinesis",
      "Strong understanding of database internals, concurrency controls, isolation levels, and indexing strategies",
      "Experience with Docker, Kubernetes, and automated CI/CD deployment pipelines",
    ],
    preferred: [
      "Prior experience in financial technology, cryptographic ledgers, or time-series data engines",
      "Active contributor to open-source distributed systems or developer tooling",
    ],
  },
  {
    id: "senior-fullstack-engineer",
    slug: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer (Next.js / TypeScript)",
    department: "Product Engineering",
    location: "Remote (Global)",
    type: "Full-Time",
    experienceLevel: "Senior (5+ years)",
    description:
      "Join our product engineering squad building responsive web applications, enterprise client dashboards, and design systems with Next.js, React 19, and TypeScript.",
    responsibilities: [
      "Develop high-performance, accessible, and responsive user interfaces using Next.js, Tailwind CSS, and Framer Motion",
      "Build robust Node.js and Python API endpoints with end-to-end type safety and validated schemas",
      "Optimize Core Web Vitals, server-side caching, and bundle sizes to maintain sub-second page performance",
      "Work closely with UI/UX designers to translate Figma design systems into pixel-perfect, reusable code components",
    ],
    requirements: [
      "5+ years of software development experience with extensive knowledge of TypeScript, React, and Next.js",
      "Deep understanding of browser rendering performance, state management, and modern CSS methodologies",
      "Experience writing automated tests with Jest, React Testing Library, and Playwright",
      "Strong communication skills and proficiency in asynchronous, distributed team workflows",
    ],
    preferred: [
      "Experience with React Native or cross-platform mobile development",
      "Familiarity with Tailwind CSS v4 and headless UI component libraries (Radix UI)",
    ],
  },
  {
    id: "senior-ai-solutions-engineer",
    slug: "senior-ai-solutions-engineer",
    title: "Senior AI / ML Solutions Engineer",
    department: "Artificial Intelligence",
    location: "Remote (US / Europe / Hybrid Options)",
    type: "Full-Time",
    experienceLevel: "Senior (5+ years)",
    description:
      "Lead the implementation of private LLM pipelines, domain-specific RAG knowledge graphs, and agentic workflows for enterprise clients.",
    responsibilities: [
      "Design and deploy production RAG architectures combining dense vector retrieval (pgvector/Pinecone) with keyword search",
      "Fine-tune open-source models (Llama, Mistral) and optimize inference latency using vLLM and TensorRT",
      "Build comprehensive evaluation benchmark harnesses measuring retrieval precision, context recall, and factual accuracy",
      "Deploy containerized AI microservices on private cloud VPCs with strict security guardrails",
    ],
    requirements: [
      "5+ years of engineering experience with at least 3 years focused on machine learning and NLP in Python",
      "Hands-on experience deploying open-source LLMs and vector search engines into production environments",
      "Proficiency with PyTorch, Hugging Face Transformers, FastAPI, and Docker",
      "Solid understanding of mathematical principles behind embeddings, attention mechanisms, and prompt optimization",
    ],
    preferred: [
      "Experience with CUDA kernel optimization or Triton inference server",
      "Published research or open-source libraries in NLP or information retrieval",
    ],
  },
  {
    id: "cloud-devops-architect",
    slug: "cloud-devops-architect",
    title: "Cloud Infrastructure & DevOps Architect",
    department: "Cloud & Reliability",
    location: "Remote (Americas / EMEA)",
    type: "Full-Time",
    experienceLevel: "Lead / Architect (6+ years)",
    description:
      "Architect secure, multi-region Kubernetes clusters, automated Terraform infrastructure, and zero-downtime deployment pipelines for mission-critical client systems.",
    responsibilities: [
      "Author modular, reusable Terraform modules managing complex VPC networks, IAM policies, and managed databases",
      "Provision and maintain multi-tenant Kubernetes (EKS/GKE) clusters with automated node autoscaling and Istio service mesh",
      "Implement zero-downtime CI/CD deployment pipelines incorporating automated vulnerability scans and canary releases",
      "Establish observability architectures with Prometheus, Grafana, and Datadog to guarantee tight SLA commitments",
    ],
    requirements: [
      "6+ years of DevOps and cloud architecture experience with advanced expertise in AWS or GCP",
      "Extensive production experience administering Kubernetes and writing Helm charts",
      "Strong command of Infrastructure as Code using Terraform or OpenTofu",
      "Proficiency in scripting with Bash, Python, or Go",
    ],
    preferred: [
      "AWS Certified Solutions Architect Professional or CKA (Certified Kubernetes Administrator)",
      "Experience implementing SOC2 or HIPAA compliant cloud infrastructures",
    ],
  },
];

export const culturePrinciples = [
  {
    title: "Engineering Autonomy & Trust",
    description: "We hire elite practitioners and give them the autonomy to make architectural decisions. We prioritize clear tickets, clean code, and asynchronous milestone delivery over micromanagement.",
  },
  {
    title: "Code Craftsmanship as Standard",
    description: "We treat code quality as an operational feature. Strict type safety, clean abstractions, comprehensive automated tests, and peer code reviews are non-negotiable.",
  },
  {
    title: "Continuous Learning Budget",
    description: "Technology evolves rapidly. Every team member receives an annual learning stipend for conferences, technical certifications, and engineering literature.",
  },
  {
    title: "Transparent & Pragmatic Culture",
    description: "No corporate politics or technical dogma. We choose tools because they solve real client problems efficiently, and we speak with candid transparency.",
  },
];

export const benefitsData = [
  {
    title: "Remote-First Flexibility",
    description: "Work from wherever you are most productive. We operate with high trust and flexible hours across matched time zones.",
    iconName: "Globe",
  },
  {
    title: "Top-Tier Compensation",
    description: "Competitive salaries benchmarked against top tech hubs, transparent compensation bands, and performance bonuses.",
    iconName: "DollarSign",
  },
  {
    title: "Comprehensive Health & Wellness",
    description: "Premium health, dental, and vision coverage for you and your dependents, plus mental health support.",
    iconName: "HeartPulse",
  },
  {
    title: "Premium Hardware Stipend",
    description: "Up to $3,500 dedicated budget on day one for your choice of workstation, 4K displays, and ergonomic office setup.",
    iconName: "Laptop",
  },
  {
    title: "Generous Paid Time Off",
    description: "25 days of annual paid vacation, local public holidays, and flexible wellness days whenever you need them.",
    iconName: "Calendar",
  },
  {
    title: "Annual Learning & Conferences",
    description: "$2,000 yearly stipend to attend global tech conferences, purchase technical books, or attain certifications.",
    iconName: "GraduationCap",
  },
];
