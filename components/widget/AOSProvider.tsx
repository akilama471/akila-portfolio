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
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            // Remove data-aos attributes on newly mounted DOM nodes so no AOS inline/CSS hides content
            document.querySelectorAll("[data-aos]").forEach((el) => {
                el.removeAttribute("data-aos");
                el.removeAttribute("data-aos-delay");
                el.removeAttribute("data-aos-duration");
                el.removeAttribute("data-aos-easing");
            });
            return;
        }

        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
        });

        const syncAOS = () => {
            AOS.refreshHard();
            window.dispatchEvent(new Event("scroll"));
        };

        // Sync immediately and with slight delays to allow React to mount new DOM nodes
        syncAOS();
        const t1 = setTimeout(syncAOS, 100);
        const t2 = setTimeout(syncAOS, 300);

        window.addEventListener("hashchange", syncAOS);
        window.addEventListener("popstate", syncAOS);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            window.removeEventListener("hashchange", syncAOS);
            window.removeEventListener("popstate", syncAOS);
        };
    }, [pathname]);

    return <>{children}</>;
}