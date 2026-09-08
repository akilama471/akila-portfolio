/**
 * Centralized, reusable social links configuration.
 * Values fallback to defaults or are populated from environment variables configured in next.config.ts.
 */
export const socialLinks = {
    pinterest: process.env.NEXT_PUBLIC_PINTEREST_URL || "https://www.pinterest.com/akila_madusanka_471/",
    fiverr: process.env.NEXT_PUBLIC_FIVERR_URL || "https://www.fiverr.com/alilamadus471",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/akilama471",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://lk.linkedin.com/in/akilamadhushanka471",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/94767221025",
    email: process.env.NEXT_PUBLIC_EMAIL || "developer.akila5@gmail.com",
    emailMailto: `mailto:${process.env.NEXT_PUBLIC_EMAIL || "developer.akila5@gmail.com"}`,
} as const;
