import { icons } from "@/data/icons";

export interface SkillItem {
    name: string;
    level: string;
    value?: number;
}

export interface SkillCategory {
    id: number;
    section: string;
    icon: typeof icons[keyof typeof icons];
    color: string;
    items: SkillItem[];
    extra: string[];
}

export const skills: SkillCategory[] = [
    {
        id: 1,
        section: "Frontend & Web",
        icon: icons.code,
        color: "primary",
        items: [
            { name: "Next.js & React", level: "Advanced" },
            { name: "TypeScript / JavaScript", level: "Advanced" },
            { name: "Tailwind CSS & Bootstrap", level: "Expert" },
            { name: "HTML5 & Modern CSS", level: "Expert" },
            { name: "Vue.js", level: "Proficient" }
        ],
        extra: ["REST APIs", "Responsive Design", "UI/UX Optimization"]
    },
    {
        id: 2,
        section: "Backend & Systems",
        icon: icons.server,
        color: "secondary",
        items: [
            { name: "Laravel (PHP)", level: "Expert" },
            { name: "Django (Python)", level: "Proficient" },
            { name: "C# / .NET", level: "Proficient" },
            { name: "MySQL & PostgreSQL", level: "Advanced" },
            { name: "RESTful API Architecture", level: "Expert" }
        ],
        extra: ["Microservices", "Database Optimization", "Auth & Security"]
    },
    {
        id: 3,
        section: "Mobile & Ecosystem",
        icon: icons.mobilealt,
        color: "green-400",
        items: [
            { name: "Flutter (Dart)", level: "Expert" },
            { name: "Android (Java/Kotlin)", level: "Proficient" },
            { name: "React Native", level: "Proficient" },
            { name: "Firebase Suite", level: "Advanced" }
        ],
        extra: ["Git & GitHub", "CI/CD", "Agile / Scrum", "Play Store Deployment"]
    }
];