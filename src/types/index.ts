export interface Experience {
  title: string;
  image: string;
  description: string;
  date: string;
  category: "header" | "internship" | "education" | "volunteer" | "service";
  skills?: string[];
}
