export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  category: "Cloud" | "AI & ML" | "Software" | "Data Systems";
  summary: string;
  timeline: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  techUsed: string[];
  results: string[];
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "fintech-ledger",
    slug: "fintech-realtime-ledger",
    title: "High-Throughput Financial Transaction Ledger",
    clientType: "Fintech & Digital Payments Institution",
    category: "Software",
    summary:
      "Engineered an immutable, distributed double-entry financial ledger capable of processing 12,000+ concurrent transactions per second with strict consistency.",
    timeline: "6 Months",
    metrics: [
      { label: "Peak Throughput", value: "12,500 tx/sec" },
      { label: "P99 Latency", value: "< 14ms" },
      { label: "Financial Discrepancy", value: "0.00%" },
      { label: "Uptime Achieved", value: "99.995%" },
    ],
    challenge:
      "A fast-growing fintech company was experiencing lock contention and intermittent database timeouts in their legacy relational database during promotional flash-deposit events. They required a resilient, mathematically sound double-entry accounting ledger that guaranteed absolute consistency across accounts without sacrificing real-time checkout latency.",
    solution:
      "We architected an event-sourced distributed ledger service utilizing Go and PostgreSQL with partitioning and optimistic concurrency control. An Apache Kafka messaging backbone handles high-volume transaction ingestion, while Redis distributed locks ensure idempotent operation execution across multi-region server clusters.",
    architectureHighlights: [
      "Strict double-entry accounting guarantees where debits must mathematically equal credits across every atomic entry",
      "Optimistic locking mechanism with automatic backoff retry to eliminate row-level deadlock scenarios",
      "Audit trail immutability using SHA-256 cryptographic chaining of sequential account balance checkpoints",
      "Multi-region read replicas with sub-second replication latency for real-time customer dashboard reporting",
    ],
    techUsed: ["Go (Golang)", "PostgreSQL", "Apache Kafka", "Redis", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    results: [
      "Eliminated transaction timeouts completely during peak holiday traffic surges exceeding 10x normal load",
      "Reduced settlement reconciliation time from 4.5 hours overnight to sub-second continuous streaming reconciliations",
      "Passed rigorous independent financial compliance audits with automated cryptographic ledger verification",
      "Reduced database compute expenses by 38% through efficient binary protocol serialization and query indexing",
    ],
  },
  {
    id: "healthtech-analytics",
    slug: "healthtech-fhir-analytics",
    title: "HIPAA-Compliant Healthcare Analytics Platform",
    clientType: "Healthcare Network & Clinical Research Organization",
    category: "Data Systems",
    summary:
      "Built a secure, HIPAA-compliant patient data analytics platform synchronizing HL7/FHIR hospital streams to provide real-time clinical trial insights.",
    timeline: "8 Months",
    metrics: [
      { label: "Records Ingested", value: "45M+ Patient Records" },
      { label: "Query Speedup", value: "18x Faster" },
      { label: "Compliance Score", value: "100% HIPAA Audit" },
      { label: "Data Freshness", value: "Real-Time (<2 min)" },
    ],
    challenge:
      "Healthcare practitioners and clinical researchers struggled with fragmented Electronic Health Record (EHR) databases spread across 14 hospital systems. Legacy queries took up to 30 minutes to extract cohort data, and disparate data formats made unified epidemiological analysis impossible while maintaining patient data privacy.",
    solution:
      "We engineered a modern, HIPAA-compliant data platform that ingests HL7 v2 and FHIR JSON streams into an encrypted ClickHouse analytical repository. Sensitive Protected Health Information (PHI) is automatically tokenized and pseudonymized via automated data governance policies before reaching researcher analytics dashboards.",
    architectureHighlights: [
      "Automated FHIR resource parsing and normalization into columnar tables for high-speed analytical aggregation",
      "Field-level AES-256 encryption with client-managed KMS keys meeting strict HIPAA and HITECH requirements",
      "Granular role-based access control (RBAC) ensuring researchers access only de-identified cohort groupings",
      "Continuous data lineage tracking allowing audit logs of all queries accessing sensitive health data",
    ],
    techUsed: ["Python", "FastAPI", "ClickHouse", "Apache Airflow", "AWS KMS", "Docker", "Next.js", "TypeScript", "Tailwind CSS"],
    results: [
      "Accelerated clinical research cohort query times from 30+ minutes down to 1.8 seconds across millions of rows",
      "Unified 14 disparate hospital EHR databases into a cohesive, searchable FHIR data interface",
      "Successfully certified with zero findings in third-party HIPAA Type II security and privacy audits",
      "Enabled doctors to identify high-risk clinical deterioration patterns 6 hours earlier than previous workflows",
    ],
  },
  {
    id: "ai-document-engine",
    slug: "ai-autonomous-document-engine",
    title: "Enterprise AI Document Processing Engine",
    clientType: "Global Legal & Insurance Enterprise",
    category: "AI & ML",
    summary:
      "Developed a multimodal RAG engine capable of ingesting, classifying, and extracting compliance obligations from complex multi-hundred-page contractual documents.",
    timeline: "5 Months",
    metrics: [
      { label: "Processing Speed", value: "< 4.2s per 100 pages" },
      { label: "Extraction Accuracy", value: "98.7% Verified" },
      { label: "Manual Effort Reduction", value: "76% Saved" },
      { label: "Monthly Documents", value: "150,000+ Files" },
    ],
    challenge:
      "Legal and insurance underwriters were spending thousands of manual hours reviewing complex commercial lease and policy documents. Traditional OCR failed on tables, handwritten annotations, and multi-column formats, resulting in missed liabilities and slow policy turnaround.",
    solution:
      "We engineered an end-to-end AI document intelligence platform combining high-accuracy OCR, semantic chunking, and fine-tuned open-source LLMs hosted privately inside client VPC infrastructure. The system highlights exact source sentences for every extracted insight to eliminate blind trust.",
    architectureHighlights: [
      "Hybrid dense-and-sparse retrieval utilizing pgvector with BM25 keyword scoring for high precision contract recall",
      "Zero-data-leakage architecture: all models execute in dedicated private GPU clusters with zero external API calls",
      "Interactive audit interface rendering original PDF bounding boxes side-by-side with extracted structured JSON fields",
      "Automated confidence scoring that routes uncertain extractions to human-in-the-loop reviewers automatically",
    ],
    techUsed: ["Python", "PyTorch", "vLLM", "pgvector", "PostgreSQL", "FastAPI", "Next.js", "React", "Docker", "AWS SageMaker"],
    results: [
      "Reduced document review cycles from an average of 4 business days to under 15 minutes per dossier",
      "Saved an estimated 14,000 hours of manual legal auditing within the first six months of production rollout",
      "Achieved 98.7% verified extraction accuracy across complex tabular financial clauses and indemnity stipulations",
      "Enabled instant cross-contract liability search across a historical repository of over 600,000 legacy contracts",
    ],
  },
  {
    id: "ecommerce-headless",
    slug: "ecommerce-headless-microservices",
    title: "Global Headless Commerce Infrastructure",
    clientType: "International Direct-to-Consumer Brand",
    category: "Software",
    summary:
      "Rebuilt a legacy monolithic online store into a headless microservices architecture with edge rendering, sub-second product pages, and dynamic currency localization.",
    timeline: "7 Months",
    metrics: [
      { label: "Page Load Time", value: "0.45s (Sub-Second)" },
      { label: "Core Web Vitals", value: "100/100 Lighthouse" },
      { label: "Checkout Conversion", value: "+28% Increase" },
      { label: "Black Friday Uptime", value: "100% Zero Drops" },
    ],
    challenge:
      "An omni-channel retail brand with customers across 35 countries was plagued by 4+ second page load times and recurrent cart checkout crashes during holiday flash sales. Their monolithic system could not localize currency and inventory rules dynamically without severe performance degradation.",
    solution:
      "We decoupled the storefront using Next.js with incremental static regeneration and edge middleware, connecting to an event-driven Go microservices backend. Catalog data is cached across global CDN edge nodes, while inventory reservation uses distributed Redis locks.",
    architectureHighlights: [
      "Edge-rendered product catalogs localized by geo-IP with zero client-side layout shift (CLS)",
      "High-concurrency cart and inventory reservation engine with automated TTL expiry to prevent overselling",
      "Stripe and multi-currency payment orchestration with automated tax calculation and regional compliance",
      "Real-time webhook synchronization with ERP and automated warehouse fulfillment management systems",
    ],
    techUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Go", "Redis", "PostgreSQL", "Stripe API", "Cloudflare Workers", "AWS"],
    results: [
      "Boosted global checkout conversion rates by 28% following the elimination of page lag and cart latency",
      "Achieved 100% uptime through Black Friday and Cyber Monday surges with over 80,000 simultaneous active shoppers",
      "Reduced infrastructure hosting bills by 42% through aggressive edge static caching and optimized database queries",
      "Expanded support to 24 new country markets with automated tax, language, and currency adaptations",
    ],
  },
  {
    id: "iot-telemetry",
    slug: "iot-telemetry-streaming-platform",
    title: "Industrial IoT Telemetry Ingestion Engine",
    clientType: "Smart Manufacturing & Logistics Provider",
    category: "Data Systems",
    summary:
      "Created an event streaming pipeline handling real-time telemetry from over 100,000 connected factory sensors to predict machinery maintenance needs.",
    timeline: "6 Months",
    metrics: [
      { label: "Events Ingested / Day", value: "40M+ Telemetry Pings" },
      { label: "Anomaly Alert Latency", value: "< 250ms" },
      { label: "Unscheduled Downtime", value: "-64% Reduction" },
      { label: "Data Retention", value: "3+ Years High Res" },
    ],
    challenge:
      "A global manufacturing client was suffering from costly unplanned factory downtime due to unexpected machinery breakdown. Sensor telemetry was stored in siloed CSVs and batch files, preventing proactive anomaly detection before catastrophic machine failure occurred.",
    solution:
      "We engineered a distributed time-series streaming platform using Apache Kafka and TimescaleDB with an anomaly-detection microservice. Real-time sensor metrics are evaluated against predictive thresholds within 250 milliseconds, alerting plant operators instantly via webhooks and SMS.",
    architectureHighlights: [
      "MQTT-to-Kafka gateway handling fluctuating cellular connections from factory floor gateways securely",
      "Time-series database with automated hypertable chunking and data compression saving 85% disk footprint",
      "Real-time statistical anomaly detection algorithm evaluating moving variance and temperature thresholds",
      "Interactive Grafana and custom web dashboards displaying live equipment status maps and heat signatures",
    ],
    techUsed: ["Apache Kafka", "TimescaleDB / PostgreSQL", "Python", "Go", "Docker", "Kubernetes", "Grafana", "React"],
    results: [
      "Decreased unplanned manufacturing downtime by 64% in the first quarter of enterprise deployment",
      "Processed over 40 million continuous sensor telemetry readings daily without a single lost packet",
      "Automated predictive maintenance scheduling, saving approximately $1.2M in avoided catastrophic repairs",
      "Provided factory managers with sub-second visibility into energy consumption and machine wear metrics",
    ],
  },
  {
    id: "cybersecurity-platform",
    slug: "cybersecurity-threat-detection",
    title: "Zero-Trust Threat Monitoring & Access Control",
    clientType: "Enterprise Defense & SaaS Provider",
    category: "Cloud",
    summary:
      "Architected a centralized identity and anomalous access detection framework implementing zero-trust network principles across 200+ microservices.",
    timeline: "5 Months",
    metrics: [
      { label: "Microservices Protected", value: "220+ Services" },
      { label: "Auth Decision Latency", value: "< 3ms" },
      { label: "SOC2 Compliance", value: "Passed (Zero Exceptions)" },
      { label: "Unauthorized Access", value: "Zero Incidents" },
    ],
    challenge:
      "A rapidly scaling enterprise had acquired multiple software companies with disparate identity providers and inconsistent internal network permissions. Internal API-to-API communication lacked uniform mutual TLS and granular authorization, creating significant lateral movement risks.",
    solution:
      "We designed and rolled out a unified zero-trust service mesh architecture with automated mutual TLS (mTLS) and Open Policy Agent (OPA) policy enforcement. All inter-service communications now require cryptographically verifiable SPIFFE/SPIRE identity tokens verified at microsecond latencies.",
    architectureHighlights: [
      "Strict mTLS service mesh using Istio and automated short-lived certificate rotation with HashiCorp Vault",
      "Declarative policy as code using Open Policy Agent (OPA) evaluating RBAC and ABAC rules across all endpoints",
      "Centralized distributed audit logging aggregating security telemetry into a hardened SIEM pipeline",
      "Automated automated penetration testing and static vulnerability gates embedded into all GitHub Actions pipelines",
    ],
    techUsed: ["Kubernetes", "Istio", "Open Policy Agent (OPA)", "HashiCorp Vault", "Go", "Prometheus", "AWS KMS", "Terraform"],
    results: [
      "Achieved SOC2 Type II certification with zero exceptions reported across network security controls",
      "Reduced API authorization evaluation overhead to under 3 milliseconds per request at high scale",
      "Eliminated static shared API keys and secrets in favor of cryptographically verified ephemeral identities",
      "Successfully repelled multiple third-party red team penetration exercises without perimeter penetration",
    ],
  },
];
