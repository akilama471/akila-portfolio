import lfs101Img from "@/assets/images/certificate/LFS101.jpg";
import fccJsImg from "@/assets/images/certificate/freecodecamp-javascript-algorithms-and-data-structures.png";
import { StaticImageData } from "next/image";

export type CredentialType = "certificate" | "badge" | "license";

export type CredentialCategory =
    | "all"
    | "linux-devops"
    | "web-frontend"
    | "backend-systems"
    | "python-data"
    | "mobile-app";

export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    issueDate: string;
    type: CredentialType;
    category: CredentialCategory;
    categoryLabel: string;
    skills: string[];
    image: StaticImageData | string;
    credentialUrl?: string;
    credentialId?: string;
    description: string;
    isFeatured?: boolean;
}

export const certificateCategories = [
    { id: "all", label: "All Credentials" },
    { id: "web-frontend", label: "Web & Frontend" },
    { id: "linux-devops", label: "Linux & DevOps" },
    { id: "backend-systems", label: "Backend & Systems" },
    { id: "python-data", label: "Python & Algorithms" },
    { id: "mobile-app", label: "Mobile Development" },
] as const;

export const certificates: Certificate[] = [
    {
        id: "fcc-javascript-algorithms",
        title: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        issueDate: "Verified",
        type: "certificate",
        category: "web-frontend",
        categoryLabel: "Web & Frontend",
        skills: ["JavaScript (ES6+)", "Algorithms", "Data Structures", "Functional Programming", "OOP"],
        image: fccJsImg,
        credentialUrl: "https://www.freecodecamp.org/certification/akilama471/javascript-algorithms-and-data-structures",
        credentialId: "fcc-js-algo-2023",
        description: "Comprehensive 300-hour curriculum mastering modern JavaScript fundamentals, ES6 features, regular expressions, complex algorithms, object-oriented design, and functional programming.",
        isFeatured: true
    },
    {
        id: "linux-foundation-lfs101x",
        title: "Introduction to Linux (LFS101x)",
        issuer: "The Linux Foundation / edX",
        issueDate: "Verified",
        type: "certificate",
        category: "linux-devops",
        categoryLabel: "Linux & DevOps",
        skills: ["Linux CLI", "Bash Scripting", "System Administration", "File Permissions", "Process Management"],
        image: lfs101Img,
        credentialUrl: "https://courses.edx.org",
        credentialId: "LFS101x-LF",
        description: "Official Linux Foundation course certifying essential command-line proficiency, file system hierarchies, user privilege management, package operations, and Linux system engineering.",
        isFeatured: true
    },
    {
        id: "microsoft-csharp-foundational",
        title: "Foundational C# Certification",
        issuer: "Microsoft & freeCodeCamp",
        issueDate: "Verified",
        type: "certificate",
        category: "backend-systems",
        categoryLabel: "Backend & Systems",
        skills: ["C#", ".NET Core", "Object-Oriented Programming", "Type Safety", "Exception Handling"],
        image: fccJsImg, // Placeholder until user drops certificate image
        credentialUrl: "https://www.freecodecamp.org/certification/akilama471/foundational-c-sharp-with-microsoft",
        credentialId: "ms-fcc-csharp-2023",
        description: "Official Microsoft validated certification demonstrating mastery of core C# language syntax, object-oriented programming, data structures, and debugging within the .NET ecosystem.",
        isFeatured: true
    },
    {
        id: "uom-python-algorithms",
        title: "Python Programming & Computing Algorithms",
        issuer: "University of Moratuwa",
        issueDate: "Verified",
        type: "certificate",
        category: "python-data",
        categoryLabel: "Python & Algorithms",
        skills: ["Python 3", "Data Structures", "Sorting & Searching", "Mathematical Algorithms"],
        image: fccJsImg, // Placeholder until user drops certificate image
        credentialUrl: "https://open.uom.lk",
        credentialId: "UOM-CODL-PY-2022",
        description: "Academic qualification covering computational thinking, structured Python development, algorithm complexity, modular program architecture, and programmatic problem-solving.",
        isFeatured: true
    },
    {
        id: "fcc-responsive-web-design",
        title: "Responsive Web Design Certification",
        issuer: "freeCodeCamp",
        issueDate: "Verified",
        type: "certificate",
        category: "web-frontend",
        categoryLabel: "Web & Frontend",
        skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Accessibility (a11y)", "Responsive UI"],
        image: fccJsImg,
        credentialUrl: "https://www.freecodecamp.org/certification/akilama471/responsive-web-design",
        credentialId: "fcc-rwd-cert",
        description: "In-depth 300-hour certification demonstrating modern responsive design principles, mobile-first layouts, semantic HTML5, fluid CSS Grid/Flexbox architectures, and WCAG accessibility standards."
    },
    {
        id: "meta-frontend-badge",
        title: "Modern Frontend Development Professional",
        issuer: "Coursera / Meta",
        issueDate: "Verified",
        type: "badge",
        category: "web-frontend",
        categoryLabel: "Web & Frontend",
        skills: ["React", "State Management", "Component Lifecycle", "UI Performance"],
        image: fccJsImg,
        credentialUrl: "https://coursera.org",
        credentialId: "META-FRONTEND-SPEC",
        description: "Professional credential verifying ability to build production React single-page applications with clean component trees, custom hooks, and modern state management."
    },
    {
        id: "google-android-developer",
        title: "Android Mobile App Architecture",
        issuer: "Google Developers",
        issueDate: "Verified",
        type: "badge",
        category: "mobile-app",
        categoryLabel: "Mobile Development",
        skills: ["Android Studio", "Kotlin", "Material Design", "Jetpack", "Mobile Lifecycle"],
        image: lfs101Img,
        credentialUrl: "https://developers.google.com",
        credentialId: "G-DEV-ANDROID-MOBILE",
        description: "Technical accreditation covering Android app development best practices, background worker threading, Room database persistence, and Material Design systems."
    },
    {
        id: "deeplearning-ai-prompt-engineering",
        title: "Prompt Engineering & Generative AI Systems",
        issuer: "DeepLearning.AI",
        issueDate: "Verified",
        type: "badge",
        category: "python-data",
        categoryLabel: "Python & Algorithms",
        skills: ["Prompt Architecture", "LLM APIs", "System Instructions", "AI Workflows"],
        image: lfs101Img,
        credentialUrl: "https://deeplearning.ai",
        credentialId: "DLAI-PE-GENAI",
        description: "Specialized accreditation in engineering structured prompts, temperature tuning, and integrating large language models into full-stack application backends."
    },
    {
        id: "hackerrank-problem-solving",
        title: "Problem Solving (Advanced) Gold Badge",
        issuer: "HackerRank",
        issueDate: "Verified",
        type: "badge",
        category: "python-data",
        categoryLabel: "Python & Algorithms",
        skills: ["Dynamic Programming", "Graph Theory", "Bit Manipulation", "Greedy Algorithms"],
        image: fccJsImg,
        credentialUrl: "https://hackerrank.com/akilama471",
        credentialId: "HR-PS-ADV-GOLD",
        description: "Top-tier competitive programming badge awarded for solving complex algorithmic challenges in data structures, graph traversals, and dynamic programming."
    },
    {
        id: "aws-cloud-practitioner",
        title: "AWS Cloud & Serverless Infrastructure",
        issuer: "Amazon Web Services / Training",
        issueDate: "Verified",
        type: "certificate",
        category: "linux-devops",
        categoryLabel: "Linux & DevOps",
        skills: ["AWS Lambda", "API Gateway", "S3", "CloudFront", "IAM Security"],
        image: lfs101Img,
        credentialUrl: "https://aws.amazon.com",
        credentialId: "AWS-CLOUD-SRV-2023",
        description: "Validation of foundational cloud architecture principles, serverless microservice deployments, secure IAM role delegation, and global edge distribution."
    }
];
