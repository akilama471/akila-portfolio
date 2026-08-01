import type { Metadata } from "next";
import AOSProvider from "@/components/widget/AOSProvider";
import "../styles/custom.css";
import "./globals.css";
import Script from "next/script";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import ogImage from "@/assets/images/og-image.webp";
import twitterImage from "@/assets/images/twitter-image.webp";
import myProfileImg from "@/assets/images/my-profile-img.webp";


config.autoAddCss = false;

const ogVersion = process.env.NEXT_PUBLIC_IMAGE_VERSION;
export const metadata = {
  title: "Akila Madhushanka | Full-Stack Developer & Solutions Architect",
  description:
    "Akila Madhushanka – Full-Stack Developer specializing in Flutter, Laravel, Next.js and Android development. Explore my portfolio of scalable web and mobile applications built for modern businesses.",
  keywords: [
    "Akila Madhushanka",
    "Ai Expert",
    "Full-Stack Developer",
    "Flutter Developer",
    "Laravel Expert",
    "Mobile App Development",
    "NextGenWare",
  ],
  metadataBase: new URL("https://akilama471.github.io"),
  openGraph: {
    title: "Akila Madhushanka | Full-Stack Developer",
    description:
      "Portfolio of Akila Madhushanka - Flutter, Laravel, Web Development",
    url: "https://akilama471.github.io",
    siteName: "Akila Portfolio",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akila Madhushanka | Full-Stack Developer",
    description:
      "Portfolio of Akila Madhushanka - Flutter & Laravel Developer",
    images: [
      twitterImage.src,
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="bg-dark-900 text-gray-300 font-sans antialiased overflow-x-hidden relative">
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Akila Madhushanka",
              url: "https://akilama471.github.io",
              image:
                `https://cdn.jsdelivr.net/gh/akilama471/akilama471.github.io@main/images/my-profile-img.webp?v=${ogVersion}`,
              jobTitle: "Full-Stack Developer",
              description: "Akila Madhushanka is a full-stack developer based in Sri Lanka specializing in building modern web and mobile applications using Laravel, Flutter, and Next.js. His portfolio showcases scalable software solutions, UI/UX-focused web apps, and freelance development services for businesses and startups.",
              worksFor: {
                "@type": "Organization",
                name: "NextGenWare",
                url: "https://www.nextgenware.lk"
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Moratuwa"
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Wariyapola",
                addressCountry: "Sri Lanka"
              },
              sameAs: [
                "https://github.com/akilama471",
                "https://linkedin.com/in/akilamadhushanka471",
                "https://web.facebook.com/akila.madhushanka471"
              ],
              knowsAbout: [
                "Flutter Development",
                "Laravel Framework",
                "Web Development",
                "Mobile Application Development",
                "Software Architecture",
                "Database Design"
              ]
            }),
          }}
        />

        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>
        </div>

        <AOSProvider>{children}</AOSProvider>

        <footer className="bg-dark-900 border-t border-gray-800 py-8">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500 text-sm">
                    &copy; <span>{new Date().getFullYear()}</span> Akila Madhushanka. All rights reserved.
                </p>
                <p className="text-gray-600 text-xs mt-2">
                    <Link href="https://www.nextgenware.lk" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    Founder & Full Stack Software Engineer at NextGenWare
                    </Link>                    
                </p>
            </div>
        </footer>

        </body>
    </html>
  );
}
