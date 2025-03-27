import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const defaultResumeData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    title: "",
    summary: "",
  },
  education: [
    {
      school: "",
      degree: "",
      graduation: "",
      startDate: "",
      endDate: "",
      location: "",
      gpa: "",
      coursework: "",
    },
  ],
  skills: [
    {
      technical: [""], // technical is an array, initialized with an empty string
      soft: [""], // soft is also an array, initialized with an empty string
      industry: [""], // industry is also an array, initialized with an empty string
    },
  ],
  experience: [
    {
      title: "",
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    },
  ],
  certifications: [
    {
      name: "",
      org: "",
      date: "",
      id: "",
    },
  ],
  projects: [
    {
      title: "",
      role: "",
      dates: "",
      description: "",
      tools: "",
      impact: "",
    },
  ],
  //Awards & Achievemnents
  awards: [
    {
      name: "",
      organization: "",
      date: "",
      description: "",
    },
  ],
  volunteer: [
    {
      role: "",
      organization: "",
      dates: "",
      responsibilities: "",
    },
  ],
  languages: [
    {
      name: "",
      profienceny: "",
    },
  ],
  publications: [
    {
      title: "",
      journal: "",
      date: "",
      description: "",
    },
  ],
};
