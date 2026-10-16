import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "pca company services – project manager, previously software engineering & devops intern",
    description:
      "Leading delivery of Operis (ERP v2), which rebuilds PCA's ERP on a fork of Open Mercato, after building PCA's first multi-tenant SaaS ERP from scratch as its sole engineer for launch to client companies in Vietnam.",
    date: "may 2026 – present",
    category: "work",
    skills: [
      "run delivery for operis across one-week sprints and qa cycles, with several teams working from a shared repository tracked in github projects",
      "own the integration scope: bringing the legacy erp modules onto the new platform and building a workflow to selectively pull upstream patches",
      "as sole engineer, shipped a multi-tenant erp with 8 business modules, 352 rest endpoints and 99 data models, isolated across 12 postgresql schemas",
      "led the move to zitadel oidc single sign-on with pkce, replacing json web tokens with revocable redis-backed sessions",
      "engineered a dag workflow automation engine with distributed run leasing, a transactional outbox and four layers of idempotency",
      "automated an 8-stage github actions pipeline running 2,862 tests, migration replay and container vulnerability scanning",
    ],
  },
  {
    title: "inspire – full stack developer",
    description:
      "Built Action Hub, an AI platform for non-profit organisations, through the University of Victoria's INSPIRE program in partnership with Meaningful.",
    date: "sep 2025 – dec 2025",
    category: "internship",
    skills: [
      "built an ai meeting intelligence platform with automated notetakers, transcription, summaries and action items, with sub-100ms sse/websocket updates and 99.9% sync across google meet, zoom and teams",
      "architected a context-aware ai email assistant grounded in meeting transcripts, crm records and uploads, powered by 8+ tools including semantic search, thread analysis and contact lookup",
      "developed an mcp server and workflow system that auto-injects context into llm pipelines, supports multi-tenant usage, scales on aws and triggers customer.io notifications",
      "worked directly with non-profit partners to identify the real user problem before writing code",
    ],
  },
  {
    title: "ensign infosecurity – full stack developer intern",
    description:
      "Built an insider-threat detection and investigation platform for a security operations centre, covering alert ingestion, incident correlation and analyst workflow.",
    date: "feb 2025 – aug 2025",
    category: "internship",
    skills: [
      "architected and shipped the platform end to end with next.js, nestjs and postgresql, mapping alerts to mitre att&ck and reducing investigation time by 40%",
      "engineered an ingestion pipeline for 1,000+ csv and parquet records at 99%+ accuracy, removing around 15 hours of manual work each week",
      "implemented role-based access control with case-level scoping, so analysts only open investigations assigned to them",
      "built an analytics dashboard across 10+ dimensions and containerised the app with docker for consistent releases",
    ],
  },
  {
    title: "the next lap – tutor",
    description:
      "Provided personalized tutoring for primary and secondary students, developing custom lesson plans and supplementary materials to enhance learning outcomes.",
    date: "may 2024 – apr 2025",
    category: "education",
    skills: [
      "tutored 10+ students (mathematics, science, english), achieving average grade improvement of 80%",
      "designed personalized lesson plans for primary 1-6 and secondary 1-4 students, accelerating concept mastery by 30%",
      "created supplementary learning material that raised student engagement and attendance by 60%",
    ],
  },
  {
    title: "friends2gather community service – mentor",
    description:
      "Partnered with Life Community Services Society to mentor children from underprivileged families through weekly educational sessions.",
    date: "jan 2024 – dec 2024",
    category: "volunteer",
    skills: [
      "mentored children from underprivileged backgrounds, tracking progress through weekly feedback sessions",
      "designed engaging educational activities, improving attendance rates by 25%",
      "collaborated with volunteer members to deliver consistent programming for 50+ weekly sessions",
    ],
  },
  {
    title: "singapore police force – police officer",
    description:
      "Checkpoint officer at Woodlands Checkpoint, then Ground Response Force officer at Woodlands West NPC, where the interest in security that led to my insider-threat work began.",
    date: "apr 2021 – aug 2023",
    category: "service",
    skills: [
      "received 5 commander's awards for operational excellence",
      "coordinated with 6 government agencies on border security operations",
      "led youth mentorship initiatives supporting 30+ at-risk youths",
      "achieved the 183rd intake valedictorian, ranking 1st among 50+ officers",
    ],
  },
];
