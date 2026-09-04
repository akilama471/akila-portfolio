"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
            disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        });
    }, []);

    // Re-initialize and refresh AOS on every client-side route navigation
    useEffect(() => {
        const refreshAOS = () => {
            AOS.refreshHard();
            window.dispatchEvent(new Event("scroll"));
        };

        // Immediate refresh and delayed refresh to allow React to mount the new DOM nodes
        refreshAOS();
        const timer1 = setTimeout(refreshAOS, 100);
        const timer2 = setTimeout(refreshAOS, 300);

        window.addEventListener("hashchange", refreshAOS);
        window.addEventListener("popstate", refreshAOS);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            window.removeEventListener("hashchange", refreshAOS);
            window.removeEventListener("popstate", refreshAOS);
        };
    }, [pathname]);

    return <>{children}</>;
}