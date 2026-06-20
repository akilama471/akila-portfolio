import { icons } from "@/data/icons";

export const skills = [
    {
        id: 1,
        section: "Frontend & Web",
        icon: icons.code,
        color: "primary",
        items: [
            { name: "HTML/CSS/Bootstrap", level: "Expert", value: 95 },
            { name: "JavaScript/jQuery", level: "Advanced", value: 85 },
            { name: "React & Vue.js", level: "Intermediate", value: 60 }
        ],
        extra: []
    },
    {
        id: 2,
        section: "Backend",
        icon: icons.server,
        color: "secondary",
        items: [
            { name: "Laravel (PHP)", level: "Expert", value: 95 },
            { name: "Django (Python)", level: "Proficient", value: 80 },
            { name: "C# / .NET", level: "Proficient", value: 75 }
        ],
        extra: []
    },
    {
        id: 3,
        section: "Mobile & Others",
        icon: icons.mobilealt,
        color: "green-400",
        items: [
            { name: "Android (Java/Kotlin)", level: "Intermediate", value: 60 },
            { name: "React Native", level: "Intermediate", value: 65 },
            { name: "Database Management", level: "Proficient", value: 75 }
        ],
        extra: ["Firebase", "MySql", "Git", "Agile", "Bitbucket"]
    }
]