import { icons } from "@/data/icons";

export interface SkillItem {
    name: string;
    tag?: string;
}

export interface SkillTier {
    id: number;
    title: string;
    level: "Core" | "Strong" | "Familiar";
    subtitle: string;
    description: string;
    icon: typeof icons[keyof typeof icons];
    color: "primary" | "secondary" | "green-400";
    items: SkillItem[];
    highlight?: boolean;
}

export const skills: SkillTier[] = [
    {
        id: 1,
        title: "Core Expertise",
        level: "Core",
        subtitle: "Primary Architecture & Daily Mastery",
        description: "Where my deepest architectural expertise lies, backed by multi-year production ownership of high-concurrency systems.",
        icon: icons.layers,
        color: "primary",
        highlight: true,
        items: [
            { name: "Laravel", tag: "Backend & API" },
            { name: "PHP", tag: "Core Language" },
            { name: "Flutter", tag: "Cross-Platform Mobile" },
            { name: "React", tag: "Frontend Ecosystem" },
            { name: "MySQL & PostgreSQL", tag: "Relational DBs" }
        ]
    },
    {
        id: 2,
        title: "Strong Production",
        level: "Strong",
        subtitle: "Active Delivery & Scalable Systems",
        description: "Technologies used regularly in production environments for enterprise web applications, reactive UIs, and cloud deployments.",
        icon: icons.code,
        color: "secondary",
        items: [
            { name: "Next.js", tag: "SSR & App Router" },
            { name: "TypeScript", tag: "Type-Safe Architecture" },
            { name: "Vue.js", tag: "Modern Web" },
            { name: "AWS", tag: "Cloud Infrastructure" },
            { name: "Firebase", tag: "Realtime & BaaS" },
            { name: "Tailwind CSS", tag: "Design Systems" }
        ]
    },
    {
        id: 3,
        title: "Familiar & Versatile",
        level: "Familiar",
        subtitle: "Cross-Platform Adaptability",
        description: "Project-tested frameworks and platforms enabling rapid polyglot problem solving and seamless legacy modernization.",
        icon: icons.wrench,
        color: "green-400",
        items: [
            { name: "Django (Python)", tag: "Backend Framework" },
            { name: "C# / .NET", tag: "Enterprise Services" },
            { name: "React Native", tag: "Mobile Framework" },
            { name: "Android (Kotlin/Java)", tag: "Native Mobile" }
        ]
    }
];

export const engineeringPractices = [
    "RESTful API Architecture",
    "Microservices & Clean Architecture",
    "Database Optimization & Indexing",
    "CI/CD Automation",
    "Git & GitHub Workflows",
    "Auth & Security (OAuth/JWT/RBAC)",
    "Agile / Scrum Delivery",
    "Linux Server Administration"
];