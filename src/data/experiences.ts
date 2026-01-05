import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "university of victoria – full stack developer co-op",
    image: "/images/experience/uvic.jpg",
    description:
      "developed an ai meeting intelligence platform and email assistant for non-profit organisations, enabling automated transcription, smart communication, and workflow automation, while working with a community partner, Meaningful.",
    date: "sep 2025 – dec 2025",
    category: "internship",
    skills: [
      "built an ai meeting intelligence platform with automated notetakers, real-time transcription, ai summaries/action-items, and <100ms sse/websocket updates with 99.9% reliable sync across google meet, zoom and teams",
      "architected an ai-based email assistant integrating transcripts, crm data and uploads for context-aware communication, supported by 8+ intelligent tools for search, thread analysis and contact lookups",
      "developed an mcp server that auto-fetches context, injecting it into llm workflows, supporting multi-tenant use & aws-deployed scalability",
      "designed a task and workflow system, with hierarchical projects, meeting-to-task conversion and automated customer.io notifications",
    ],
  },
  {
    title: "ensign infosecurity – full stack developer intern",
    image: "/images/experience/ensign.jpg",
    description:
      "developed enterprise security applications and automated data processing pipelines, contributing to insider threat detection and incident response capabilities.",
    date: "mar 2025 – aug 2025",
    category: "internship",
    skills: [
      "architected insider threat web application (next.js/nest.js/postgresql), reducing incident investigation time by 40%",
      "achieved 100% deployment consistency via docker containerization across development and production environments",
      "developed secure role-based access control to ensure comprehensive data protection",
      "automated processing pipeline for 1000+ data entries (csv/parquet format), with 99.9%+ accuracy, eliminating hours of weekly manual work",
    ],
  },
  {
    title: "the next lap – part-time tutor",
    image: "/images/experience/tutor.jpg",
    description:
      "provided personalized tutoring for primary and secondary students, developing custom lesson plans and supplementary materials to enhance learning outcomes.",
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
    image: "/images/experience/mentor.jpg",
    description:
      "partnered with life community services society to mentor children from underprivileged families through weekly educational sessions.",
    date: "jan 2024 – dec 2024",
    category: "volunteer",
    skills: [
      "mentored children from underprivileged backgrounds, tracking progress through weekly feedback sessions",
      "designed engaging educational activities, improving attendance rates by 25%",
      "collaborated with volunteer members to deliver consistent programming for 50+ weekly sessions",
    ],
  },
  {
    title: "singapore police force – national service",
    image: "/images/experience/spf.jpg",
    description:
      "served in border security and ground operations, demonstrating leadership through welfare initiatives and youth mentorship programs.",
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
