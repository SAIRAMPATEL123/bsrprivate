export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  badge: string;
  iconName: string;
  summary: string;
  overview: string[];
  capabilities: {
    name: string;
    description: string;
  }[];
  techStack: string[];
  deliverables: string[];
  process: {
    phase: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "custom-software",
    slug: "custom-software-engineering",
    title: "Custom Software Engineering",
    badge: "Core Engineering",
    shortDesc: "End-to-end bespoke software architecture, microservices, robust API backends, and full-lifecycle system implementation.",
    iconName: "Code2",
    summary:
      "We design and build bespoke software tailored strictly to your operational goals, eliminating off-the-shelf software constraints with high-performance architectures.",
    overview: [
      "Modern software must handle heavy loads, adapt quickly to evolving business requirements, and remain maintainable over decades. We engineer domain-driven backend systems, reactive frontends, and modular microservices designed for longevity.",
      "From monolithic decomposition to Greenfield platform architecture, our senior engineers apply SOLID design principles, comprehensive automated test suites, and strict type safety across your entire codebase.",
    ],
    capabilities: [
      {
        name: "Enterprise Web Applications",
        description: "Responsive, high-speed single-page and server-rendered web applications built on React, Next.js, and modern TypeScript frameworks.",
      },
      {
        name: "Microservices & Distributed Systems",
        description: "Decoupled, event-driven services utilizing gRPC, REST, and Apache Kafka messaging queues for independent horizontal scaling.",
      },
      {
        name: "API Design & Integration",
        description: "Comprehensive OpenAPI/Swagger documented endpoints with OAuth2/JWT security, rate limiting, and robust idempotency controls.",
      },
      {
        name: "Legacy System Modernization",
        description: "Incremental migration of legacy monoliths to modular architectures using the strangler fig pattern with zero downtime.",
      },
    ],
    techStack: ["TypeScript", "Next.js", "React", "Node.js", "Python / FastAPI", "Go (Golang)", "PostgreSQL", "Docker", "Redis"],
    deliverables: [
      "Production-grade, fully commented source code with 100% intellectual property transfer",
      "Automated CI/CD pipelines with test and lint verification",
      "Interactive Swagger/OpenAPI documentation and Postman collections",
      "Comprehensive system architecture diagrams and deployment blueprints",
      "Production deployment runbooks and automated monitoring configuration",
    ],
    process: [
      {
        phase: "01",
        title: "Technical Discovery & Scoping",
        description: "We analyze business requirements, user stories, existing legacy data structures, and define system boundaries.",
      },
      {
        phase: "02",
        title: "Architectural Design & Prototyping",
        description: "Creation of database schemas, entity relationship diagrams, API contracts, and low-latency proof-of-concepts.",
      },
      {
        phase: "03",
        title: "Sprint-Driven Development",
        description: "Bi-weekly sprint delivery with automated test coverage, staging environment deploys, and ongoing code reviews.",
      },
      {
        phase: "04",
        title: "Verification & Security Audit",
        description: "End-to-end integration testing, load/stress simulation, dependency vulnerability scanning, and performance profiling.",
      },
      {
        phase: "05",
        title: "Production Deployment & Handover",
        description: "Blue-green release orchestration, metrics dashboard provisioning, and structured engineering knowledge transfer.",
      },
    ],
    faqs: [
      {
        question: "Who owns the intellectual property (IP) of the developed code?",
        answer: "You maintain 100% ownership of all source code, architecture schemas, and assets created during the project upon milestone sign-offs.",
      },
      {
        question: "How do you ensure code maintainability for internal teams?",
        answer: "We mandate strict TypeScript type definitions, consistent linting configurations, comprehensive inline documentation, and detailed onboarding guides.",
      },
      {
        question: "Can your team integrate with our existing engineering squad?",
        answer: "Yes, our engineers frequently embed directly into client product teams, adopting your existing Jira boards, Slack channels, and code review workflows.",
      },
    ],
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops-orchestration",
    title: "Cloud & DevOps Orchestration",
    badge: "Infrastructure",
    shortDesc: "Scalable cloud infrastructures, automated Kubernetes clustering, Terraform infrastructure-as-code, and zero-downtime CI/CD.",
    iconName: "Cloud",
    summary:
      "Modernize your cloud presence with resilient, automated, and observable cloud environments across AWS, GCP, and Azure.",
    overview: [
      "Infrastructures should be repeatable, secure, and self-healing. We eliminate manual cloud management by encoding your entire environment into version-controlled Terraform scripts and GitOps workflows.",
      "We design multi-region Kubernetes clusters, automated auto-scaling groups, and immutable artifact release pipelines that allow your team to ship code multiple times a day with complete confidence.",
    ],
    capabilities: [
      {
        name: "Infrastructure as Code (IaC)",
        description: "Declarative infrastructure management using Terraform, OpenTofu, and Pulumi for fully reproducible staging and production environments.",
      },
      {
        name: "Kubernetes & Container Orchestration",
        description: "Production-grade EKS, GKE, and self-hosted Kubernetes clusters with Helm charts, ingress controllers, and service meshes.",
      },
      {
        name: "Continuous Delivery Pipelines",
        description: "Zero-downtime GitHub Actions, GitLab CI, and ArgoCD deployment pipelines with automated blue-green and canary rollouts.",
      },
      {
        name: "Observability & Alerting",
        description: "Centralized logging and metrics stacks using Prometheus, Grafana, Datadog, and OpenTelemetry distributed tracing.",
      },
    ],
    techStack: ["AWS", "Google Cloud (GCP)", "Kubernetes (EKS/GKE)", "Terraform", "Docker", "ArgoCD", "Prometheus", "Grafana", "GitHub Actions"],
    deliverables: [
      "Version-controlled Terraform / OpenTofu infrastructure repository",
      "Automated CI/CD pipelines configured with secret management and scanning",
      "Hardened Kubernetes cluster manifests and Helm packages",
      "Configured Grafana monitoring dashboards with incident alert thresholds",
      "Disaster recovery runbook with automated backup and restore testing",
    ],
    process: [
      {
        phase: "01",
        title: "Infrastructure Assessment & FinOps Audit",
        description: "Review current cloud architecture, compute utilization, security posture, and monthly spend inefficiencies.",
      },
      {
        phase: "02",
        title: "Target Architecture Design",
        description: "Drafting scalable VPC topology, least-privilege IAM roles, container strategy, and disaster recovery objectives (RTO/RPO).",
      },
      {
        phase: "03",
        title: "IaC Implementation & CI/CD Setup",
        description: "Authoring declarative Terraform scripts, setting up container registries, and building automated release pipelines.",
      },
      {
        phase: "04",
        title: "Zero-Downtime Migration",
        description: "Orchestrating progressive DNS cutovers, database replication syncs, and staging cluster performance validation.",
      },
      {
        phase: "05",
        title: "Monitoring & Operational Readiness",
        description: "Deploying observability agents, configuring paging alerts, and holding incident response walkthroughs.",
      },
    ],
    faqs: [
      {
        question: "How do you help reduce monthly cloud infrastructure costs?",
        answer: "We perform comprehensive FinOps audits: right-sizing instances, implementing auto-scaling policies, utilizing spot/preemptible instances for non-critical workloads, and auditing unused disk storage.",
      },
      {
        question: "Can you assist with migration from on-premise servers to cloud?",
        answer: "Yes, we specialize in hybrid and cloud migration strategies, ensuring data replication and minimal service disruption throughout the transition.",
      },
    ],
  },
  {
    id: "ai-ml",
    slug: "ai-machine-learning-solutions",
    title: "AI & Machine Learning Solutions",
    badge: "Intelligent Systems",
    shortDesc: "Enterprise LLM integrations, retrieval-augmented generation (RAG), computer vision, and autonomous agent workflows.",
    iconName: "Brain",
    summary:
      "Transform business data into operational intelligence with production-ready AI models, vector search, and custom agentic pipelines.",
    overview: [
      "Generative and predictive AI must deliver concrete business value rather than experimental demos. We engineer production-grade AI systems with strict prompt safeguards, latency budgets, and verified response accuracy.",
      "From domain-specific RAG knowledge graphs to fine-tuned open-source LLMs deployed in your private cloud, we enable secure enterprise intelligence while ensuring confidential data never leaks.",
    ],
    capabilities: [
      {
        name: "Enterprise RAG & Knowledge Bases",
        description: "Hybrid vector and keyword search pipelines utilizing pgvector, Pinecone, and Qdrant to power accurate contextual document search.",
      },
      {
        name: "Private LLM Deployment & Fine-Tuning",
        description: "Self-hosted Llama, Mistral, and DeepSeek deployments inside your VPC using vLLM and TensorRT-LLM for privacy and speed.",
      },
      {
        name: "Autonomous Agent Workflows",
        description: "Multi-agent task orchestration, automated reasoning, function-calling pipelines, and reliable tool-integration layers.",
      },
      {
        name: "Computer Vision & OCR",
        description: "Automated document digitization, defect detection, and image classification pipelines using tailored deep neural networks.",
      },
    ],
    techStack: ["Python", "PyTorch", "Hugging Face", "LangChain / LlamaIndex", "vLLM", "pgvector", "Pinecone", "FastAPI", "OpenAI / Anthropic APIs"],
    deliverables: [
      "Containerized AI inference API microservices with sub-second response times",
      "Vector indexing pipeline with automated document ingestion and embedding sync",
      "Evaluation framework measuring response precision, recall, and hallucination rates",
      "Data anonymization and PII scrubbing middleware",
      "Interactive evaluation benchmark playground for internal testing",
    ],
    process: [
      {
        phase: "01",
        title: "Data Audit & Feasibility Study",
        description: "Assessing data quality, formatting, volume, and establishing measurable evaluation metrics for AI performance.",
      },
      {
        phase: "02",
        title: "Proof of Concept & Evaluation",
        description: "Prototyping embedding strategies, chunking algorithms, prompt architectures, and comparing model benchmarks.",
      },
      {
        phase: "03",
        title: "Pipeline Engineering & Safety Guardrails",
        description: "Building production RAG infrastructure, latency optimizations, fallback logic, and output validation guardrails.",
      },
      {
        phase: "04",
        title: "VPC Deployment & Integration",
        description: "Deploying AI inference services within private subnets and integrating with upstream frontend and business applications.",
      },
      {
        phase: "05",
        title: "Continuous Monitoring & Drift Detection",
        description: "Tracking query latency, token consumption, user feedback signals, and semantic drift over time.",
      },
    ],
    faqs: [
      {
        question: "How do you protect proprietary corporate data when using AI?",
        answer: "We deploy models entirely within your dedicated private cloud infrastructure (VPC), ensuring training and inference data never travel to third-party providers unless explicitly desired.",
      },
      {
        question: "What steps are taken to minimize hallucinations?",
        answer: "We combine hybrid search retrieval (sparse + dense), strict citation constraints, cross-encoder re-ranking, and automated validation filters to guarantee factual responses.",
      },
    ],
  },
  {
    id: "data-engineering",
    slug: "data-engineering-analytics",
    title: "Data Engineering & Analytics",
    badge: "Data Systems",
    shortDesc: "Real-time streaming pipelines, modern data warehousing, Apache Kafka event architectures, and scalable analytics models.",
    iconName: "Database",
    summary:
      "Construct reliable data pipelines that centralize disjointed business records into clean, actionable, high-speed analytical databases.",
    overview: [
      "Disjointed databases and batch job failures stall corporate decision-making. We build unified, real-time data architectures that ingest, cleanse, and transform petabyte-scale data streams.",
      "Whether powering executive dashboards or real-time feature stores for machine learning, our data engineering services ensure data consistency, high availability, and complete auditability.",
    ],
    capabilities: [
      {
        name: "Real-Time Event Streaming",
        description: "Fault-tolerant messaging fabrics built on Apache Kafka, AWS Kinesis, and RabbitMQ handling millions of events per second.",
      },
      {
        name: "Modern Data Warehousing",
        description: "High-speed columnar analytical warehouses on Snowflake, ClickHouse, BigQuery, and Amazon Redshift.",
      },
      {
        name: "ETL / ELT Orchestration",
        description: "Automated DAG pipelines managed with Apache Airflow, Prefect, and dbt for reliable data transformation and testing.",
      },
      {
        name: "Data Governance & Quality Monitoring",
        description: "Data contract enforcement, Great Expectations test suites, and schema evolution tracking.",
      },
    ],
    techStack: ["Apache Kafka", "ClickHouse", "Snowflake", "PostgreSQL", "dbt", "Apache Airflow", "Python", "Spark / PySpark", "DuckDB"],
    deliverables: [
      "Fully documented dimensional data warehouse schemas and ER diagrams",
      "Automated dbt transformation pipelines with automated data quality test suites",
      "Real-time Kafka consumer/producer microservices",
      "Executive BI metrics integration and semantic modeling layer",
      "Data lineage documentation and governance policies",
    ],
    process: [
      {
        phase: "01",
        title: "Data Source Ingestion Mapping",
        description: "Cataloging all primary databases, third-party APIs, and event streams to map data dependencies and schemas.",
      },
      {
        phase: "02",
        title: "Schema & Warehouse Architecture",
        description: "Designing star/snowflake schemas, partitioning keys, and clustering strategies for optimal analytical query latency.",
      },
      {
        phase: "03",
        title: "Pipeline & Transformation Setup",
        description: "Developing ingestion connectors, dbt models, data cleansing routines, and reconciliation tests.",
      },
      {
        phase: "04",
        title: "Quality Verification & Backfill",
        description: "Historical data backfill, anomaly detection testing, and end-to-end reconciliation against source systems.",
      },
      {
        phase: "05",
        title: "BI Integration & Handover",
        description: "Connecting downstream analytics tools, configuring scheduled refreshes, and training team analysts.",
      },
    ],
    faqs: [
      {
        question: "Can you handle real-time streaming alongside batch historical data?",
        answer: "Yes, we implement Kappa and Lambda architectures that handle sub-second streaming events alongside large-scale nightly batch reconciliations seamlessly.",
      },
      {
        question: "How do you prevent data pipeline downtime during schema changes?",
        answer: "We enforce schema registries (like Avro/Protobuf) and backward-compatible data contract practices that alert engineers before breaking changes reach downstream pipelines.",
      },
    ],
  },
  {
    id: "mobile-web",
    slug: "mobile-web-applications",
    title: "Mobile & Web Applications",
    badge: "Product Engineering",
    shortDesc: "High-performance React Native mobile apps, responsive web frontends, offline-first sync, and frictionless user experiences.",
    iconName: "Smartphone",
    summary:
      "Craft fluid, accessible, and high-conversion client-side applications with modern frameworks and native capabilities.",
    overview: [
      "User expectations for speed, responsiveness, and aesthetic polish have never been higher. We engineer responsive web and native mobile applications that feel instant, operate offline, and deliver exceptional engagement.",
      "We avoid cross-platform clunkiness by using React Native with custom native modules, paired with Next.js edge-rendered web frontends sharing clean design tokens and shared business logic.",
    ],
    capabilities: [
      {
        name: "Cross-Platform Mobile Apps",
        description: "Native iOS and Android applications written in React Native and Expo with native bridge modules for hardware access.",
      },
      {
        name: "High-Performance Web Frontends",
        description: "Next.js and React web apps optimized for Core Web Vitals, sub-second initial load, and progressive enhancement.",
      },
      {
        name: "Offline-First Synchronization",
        description: "Local SQLite/WatermelonDB storage with robust bidirectional sync engines ensuring uninterrupted work without connectivity.",
      },
      {
        name: "Design Systems & Component Libraries",
        description: "Accessible, themeable Figma-to-code design system components using Tailwind CSS and Radix UI primitives.",
      },
    ],
    techStack: ["React Native", "Expo", "Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "SQLite", "Jest / Playwright"],
    deliverables: [
      "Production-ready iOS and Android app bundles ready for App Store and Google Play review",
      "Responsive, SEO-optimized web application deployed to global CDN edge locations",
      "Shared UI component library with Storybook documentation",
      "End-to-end automated UI test suites covering critical customer journeys",
      "App store compliance and submission assistance",
    ],
    process: [
      {
        phase: "01",
        title: "UX/UI Architecture & Design Review",
        description: "Translating wireframes and user flows into modular component architecture and responsive design tokens.",
      },
      {
        phase: "02",
        title: "Core Client Foundation",
        description: "Setting up state management, local database schemas, API client wrappers, and authentication flows.",
      },
      {
        phase: "03",
        title: "Feature Implementation & Animation",
        description: "Building responsive screens, smooth micro-interactions, hardware integrations (camera/biometrics), and forms.",
      },
      {
        phase: "04",
        title: "Cross-Device QA & Performance Tuning",
        description: "Testing across iOS/Android device matrices, optimizing bundle sizes, and tuning 60fps animation frames.",
      },
      {
        phase: "05",
        title: "App Store Launch & Release Orchestration",
        description: "Managing signing certificates, app store submission listings, crash telemetry setup, and OTA update pipelines.",
      },
    ],
    faqs: [
      {
        question: "Do you build single-codebase apps for iOS and Android?",
        answer: "Yes, we leverage React Native with Expo to share over 85% of code between platforms, while writing custom Swift and Kotlin modules when direct native API access is necessary.",
      },
      {
        question: "How do you optimize mobile performance and battery efficiency?",
        answer: "We minimize background polling via push notifications, implement lazy component mounting, optimize re-render cycles with immutable state, and profile memory usage continuously.",
      },
    ],
  },
  {
    id: "security-compliance",
    slug: "security-compliance-architecture",
    title: "Cybersecurity & Compliance Engineering",
    badge: "Security & Trust",
    shortDesc: "SOC2, HIPAA, and PCI-DSS compliance architecture, zero-trust network design, and automated vulnerability scanning.",
    iconName: "ShieldCheck",
    summary:
      "Safeguard your digital assets and achieve regulatory compliance with defense-in-depth infrastructure and secure coding standards.",
    overview: [
      "Security cannot be bolted on as an afterthought. We embed rigorous defensive security practices directly into your architecture, source control, and deployment pipelines.",
      "From achieving SOC2 Type II certification to securing HIPAA patient health information or PCI-DSS credit card flows, we engineer verifiable compliance rails that pass third-party security audits.",
    ],
    capabilities: [
      {
        name: "Compliance Readiness (SOC2 / HIPAA / ISO27001)",
        description: "Technical gap analysis, infrastructure hardening, policy enforcement, and audit evidence automation.",
      },
      {
        name: "Zero-Trust Identity & Access Architecture",
        description: "Multi-factor authentication, role-based access control (RBAC), fine-grained permissions, and temporary credential rotation.",
      },
      {
        name: "DevSecOps & Automated Code Analysis",
        description: "Static analysis (SAST), software composition analysis (SCA), and dynamic container vulnerability scanning in CI/CD.",
      },
      {
        name: "Data Encryption & Key Management",
        description: "Field-level encryption, TLS 1.3 enforcement, and automated key rotation utilizing AWS KMS, HashiCorp Vault, and GCP KMS.",
      },
    ],
    techStack: ["HashiCorp Vault", "AWS KMS", "SonarQube", "Snyk", "Trivy", "OpenVPN / WireGuard", "WAF / Cloudflare", "PostgreSQL (pgcrypto)"],
    deliverables: [
      "Technical compliance remediation matrix with verified audit proof",
      "Automated CI/CD security gate configurations blocking vulnerable dependencies",
      "Hardened cloud network configurations (private subnets, bastionless access, WAF)",
      "Incident response plan and simulated disaster recovery audit report",
      "Certificate of engineering security best-practice alignment",
    ],
    process: [
      {
        phase: "01",
        title: "Threat Modeling & Vulnerability Scan",
        description: "Mapping all attack surfaces, reviewing third-party dependencies, and analyzing network exposure.",
      },
      {
        phase: "02",
        title: "Compliance Gap Analysis",
        description: "Benchmarking current technical configurations against target compliance frameworks (SOC2, HIPAA, PCI).",
      },
      {
        phase: "03",
        title: "Remediation & Infrastructure Hardening",
        description: "Enforcing encrypted storage, least-privilege IAM, secret rotation, and automated patching routines.",
      },
      {
        phase: "04",
        title: "CI/CD Security Gate Integration",
        description: "Adding automated vulnerability scanners into deployment pipelines to block insecure commits automatically.",
      },
      {
        phase: "05",
        title: "Audit Support & Continuous Monitoring",
        description: "Generating auditor-ready evidence packs and configuring 24/7 security event telemetry alerts.",
      },
    ],
    faqs: [
      {
        question: "Can your team help us pass an upcoming SOC2 or HIPAA audit?",
        answer: "Yes, we specialize in technical remediation for SOC2 Type I/II and HIPAA, collaborating directly with your auditors to provide technical evidence and configuration proofs.",
      },
      {
        question: "How do you protect applications against common OWASP vulnerabilities?",
        answer: "We implement strict input sanitization, parameterized queries, CSRF protections, strict Content Security Policies (CSP), and automated SAST/DAST testing before deployment.",
      },
    ],
  },
];
