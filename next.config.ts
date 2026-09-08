import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  env: {
    // EmailJS Configuration (fallback defaults ensure GitHub Actions build succeeds)
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "d7UEUKh07dRm7355v",
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_0d4n0hw",
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_01vewck",

    // Application & Asset Config
    NEXT_PUBLIC_IMAGE_VERSION: process.env.NEXT_PUBLIC_IMAGE_VERSION || "20260801",
    NEXT_PUBLIC_EXPERIENCE_START_YEAR: process.env.NEXT_PUBLIC_EXPERIENCE_START_YEAR || "2019",

    // Social & Profile Links
    NEXT_PUBLIC_PINTEREST_URL: "https://www.pinterest.com/akila_madusanka_471/",
    NEXT_PUBLIC_FIVERR_URL: "https://www.fiverr.com/alilamadus471",
    NEXT_PUBLIC_GITHUB_URL: "https://github.com/akilama471",
    NEXT_PUBLIC_LINKEDIN_URL: "https://lk.linkedin.com/in/akilamadhushanka471",
    NEXT_PUBLIC_WHATSAPP_URL: "https://wa.me/94767221025",
    NEXT_PUBLIC_EMAIL: "developer.akila5@gmail.com",
  },
  images: {
    unoptimized: true, // Required for static export with next/image
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
