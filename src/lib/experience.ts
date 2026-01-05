import { Briefcase, GraduationCap, Heart, Shield } from "lucide-react";
import type { ExperienceCategory } from "@/types";
import type { LucideIcon } from "lucide-react";

export const CATEGORY_ICONS: Record<ExperienceCategory, LucideIcon> = {
  internship: Briefcase,
  education: GraduationCap,
  volunteer: Heart,
  service: Shield,
  header: Briefcase,
};

export const CATEGORY_LABELS: Record<ExperienceCategory, string> = {
  internship: "internship",
  education: "education",
  volunteer: "volunteer",
  service: "national service",
  header: "",
};
