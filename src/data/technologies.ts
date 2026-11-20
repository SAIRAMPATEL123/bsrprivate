export interface TechCategory {
  name: string;
  badge: string;
  description: string;
  technologies: {
    name: string;
    description: string;
    tier: "Primary Standard" | "Supported Production" | "Emerging";
    tags: string[];
  }[];
}

export const techStackData: TechCategory[] = [
  {
    name: "Languages & Runtimes",
    badge: "Foundations",
    description: "Type-safe, high-concurrency language ecosystems selected for execution speed and long-term maintainability.",
    technologies: [
      {
        name: "TypeScript",
        description: "Enforced across all client and Node.js backend codebases for end-to-end type safety and contract verification.",
        tier: "Primary Standard",
        tags: ["Type Safety", "Frontend & Node.js", "Enterprise Standard"],
      },
      {
        name: "Go (Golang)",
        description: "Primary choice for high-throughput microservices, network proxies, and low-latency API gateways.",
        tier: "Primary Standard",
        tags: ["Low Latency", "High Concurrency", "Microservices"],
      },
      {
        name: "Python 3.12+",
        description: "Backbone for AI/ML model orchestration, data engineering DAGs, and scientific computing workloads.",
        tier: "Primary Standard",
        tags: ["AI / Machine Learning", "Data Pipelines", "FastAPI"],
      },
      {
        name: "Rust",
        description: "Utilized for performance-critical systems components, cryptographic algorithms, and WebAssembly modules.",
        tier: "Supported Production",
        tags: ["Memory Safety", "Maximum Performance", "Wasm"],
      },
      {
        name: "Java / Spring Boot",
        description: "Maintained for large enterprise integrations, legacy transitions, and core banking infrastructure.",
        tier: "Supported Production",
        tags: ["Enterprise Ecosystem", "JVM", "High Durability"],
      },
    ],
  },
  {
    name: "Frontend & Mobile",
    badge: "Client Experience",
    description: "Modern, reactive UI frameworks prioritizing sub-second load times and accessible user experiences.",
    technologies: [
      {
        name: "Next.js (App Router)",
        description: "Production framework for server-rendered, statically exported, and edge-distributed web applications.",
        tier: "Primary Standard",
        tags: ["SSR & SSG", "Edge Runtime", "SEO Optimized"],
      },
      {
        name: "React 19",
        description: "Component architecture foundation powering modular, reusable, and testable interfaces.",
        tier: "Primary Standard",
        tags: ["Component Driven", "Server Components", "State Flow"],
      },
      {
        name: "React Native & Expo",
        description: "Cross-platform mobile application development targeting iOS and Android with single codebase efficiency.",
        tier: "Primary Standard",
        tags: ["iOS & Android", "Offline First", "Native Bridges"],
      },
      {
        name: "Tailwind CSS v4",
        description: "Utility-first design system engine enabling fast, consistent, and bloat-free design implementations.",
        tier: "Primary Standard",
        tags: ["Design System", "Zero Runtime", "Responsive"],
      },
      {
        name: "Framer Motion",
        description: "Declarative animation engine for physics-based layout transitions and subtle user micro-interactions.",
        tier: "Primary Standard",
        tags: ["Fluid Motion", "Accessibility Aware", "Layout Transitions"],
      },
    ],
  },
  {
    name: "Backend & Distributed Systems",
    badge: "Architecture",
    description: "Decoupled, resilient backend frameworks communicating through strict API contracts and event fabrics.",
    technologies: [
      {
        name: "FastAPI",
        description: "Modern Python web framework with automated OpenAPI schemas, Pydantic type validation, and async I/O.",
        tier: "Primary Standard",
        tags: ["Async Python", "OpenAPI", "High Speed"],
      },
      {
        name: "gRPC & Protocol Buffers",
        description: "High-performance binary RPC protocol for inter-microservice communication with microsecond overhead.",
        tier: "Primary Standard",
        tags: ["Binary Serialization", "Microservices", "Contract Driven"],
      },
      {
        name: "Apache Kafka",
        description: "Distributed event streaming platform for resilient high-throughput publish-subscribe message processing.",
        tier: "Primary Standard",
        tags: ["Event Streaming", "Fault Tolerant", "Million QPS"],
      },
      {
        name: "GraphQL / Apollo",
        description: "Schema-first query language for complex multi-resource client applications and unified data gateways.",
        tier: "Supported Production",
        tags: ["Declarative Data", "Mobile Optimized", "Federation"],
      },
    ],
  },
  {
    name: "Cloud, Containers & DevOps",
    badge: "Infrastructure",
    description: "Automated, reproducible, and observable cloud environments built for zero-downtime releases.",
    technologies: [
      {
        name: "Kubernetes (EKS / GKE)",
        description: "Container orchestration standard for automated scaling, self-healing, and service discovery.",
        tier: "Primary Standard",
        tags: ["Container Mesh", "Auto-Scaling", "Multi-Region"],
      },
      {
        name: "Terraform & OpenTofu",
        description: "Declarative infrastructure as code ensuring deterministic and version-controlled cloud environments.",
        tier: "Primary Standard",
        tags: ["IaC", "Reproducible", "Multi-Cloud"],
      },
      {
        name: "Amazon Web Services (AWS)",
        description: "Comprehensive cloud ecosystem (ECS, EKS, RDS, S3, CloudFront, Lambda, KMS, SQS).",
        tier: "Primary Standard",
        tags: ["Cloud Infrastructure", "Global Network", "Enterprise"],
      },
      {
        name: "Google Cloud Platform (GCP)",
        description: "Preferred platform for advanced Kubernetes workloads (GKE), BigQuery analytics, and Vertex AI.",
        tier: "Primary Standard",
        tags: ["BigQuery", "GKE", "AI / ML Platform"],
      },
      {
        name: "Docker & Containerd",
        description: "Standard containerization runtime ensuring identical development, testing, and production builds.",
        tier: "Primary Standard",
        tags: ["Containers", "Standard Packaging", "Multi-Arch"],
      },
      {
        name: "Prometheus & Grafana",
        description: "Centralized time-series metrics collection, telemetry dashboards, and incident alert paging.",
        tier: "Primary Standard",
        tags: ["Observability", "Telemetry", "SLAs"],
      },
    ],
  },
  {
    name: "Databases & Storage",
    badge: "Persistence",
    description: "ACID-compliant relational, time-series, and analytical storage solutions engineered for durability.",
    technologies: [
      {
        name: "PostgreSQL 16+",
        description: "Primary relational workhorse for mission-critical transactional data with JSONB, partitioning, and pgvector.",
        tier: "Primary Standard",
        tags: ["ACID Relational", "pgvector", "Partitioning"],
      },
      {
        name: "Redis",
        description: "In-memory data structure store for low-latency session caching, rate limiting, and pub/sub queues.",
        tier: "Primary Standard",
        tags: ["In-Memory", "Distributed Locks", "Sub-Millisecond"],
      },
      {
        name: "ClickHouse",
        description: "High-performance columnar database for real-time analytical queries over billions of event rows.",
        tier: "Primary Standard",
        tags: ["Columnar Analytics", "OLAP", "Blazing Fast"],
      },
      {
        name: "Snowflake",
        description: "Enterprise cloud data warehouse for unified organizational business intelligence and reporting.",
        tier: "Supported Production",
        tags: ["Data Warehouse", "Elastic Compute", "BI Modeling"],
      },
    ],
  },
  {
    name: "AI & Machine Learning",
    badge: "Intelligence",
    description: "Production deep learning frameworks, vector retrieval, and private inference infrastructure.",
    technologies: [
      {
        name: "PyTorch",
        description: "Deep learning framework for training, fine-tuning, and evaluating neural network architectures.",
        tier: "Primary Standard",
        tags: ["Deep Learning", "Model Training", "Scientific"],
      },
      {
        name: "vLLM / TensorRT-LLM",
        description: "High-throughput serving engines for self-hosted open-source large language model inference.",
        tier: "Primary Standard",
        tags: ["Model Serving", "PagedAttention", "Sub-Second"],
      },
      {
        name: "pgvector & Pinecone",
        description: "Vector database indexing for similarity search and retrieval-augmented generation (RAG) pipelines.",
        tier: "Primary Standard",
        tags: ["Vector Search", "Embeddings", "RAG"],
      },
      {
        name: "LangChain / LlamaIndex",
        description: "Frameworks for document chunking, prompt pipeline management, and autonomous tool integration.",
        tier: "Supported Production",
        tags: ["Orchestration", "Chunking", "Agents"],
      },
    ],
  },
];
