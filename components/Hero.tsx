"use client";

import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import myProfileImg from "@/assets/images/my-profile-img.webp";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 z-10">
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 space-y-6 animate-project-fade">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-2">
                        💼 Business Systems & Software Architect
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        Akila <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Madhushanka</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-400 font-mono">
                        <Typewriter
                            options={{
                                strings: [
                                    'Business Systems Architect',
                                    'ERP & POS Specialist',
                                    'SaaS & Mobile Engineer',
                                    'Full-Stack Solutions Architect'
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 50,
                            }}
                        />
                    </h2>
                    <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                        <span className="text-white font-semibold">I solve difficult business problems with software.</span> Designing and engineering mission-critical ERPs, fault-tolerant POS systems, scalable SaaS platforms, and mobile apps built for high reliability.
                    </p>

                    {/* Proof of Capability Flow */}
                    <div className="pt-1">
                        <p className="text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold mb-2.5 flex items-center gap-2">
                            <span className="inline-block w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse"></span>
                            <span>Proven Delivery Track:</span>
                        </p>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                            {[
                                { label: "ERP", desc: "Enterprise Workflows & Data Integrity" },
                                { label: "POS", desc: "Zero-Downtime Retail Transactions" },
                                { label: "SaaS", desc: "Multi-Tenant Cloud Platforms" },
                                { label: "Mobile", desc: "Cross-Platform & Offline-Ready" },
                                { label: "APIs", desc: "Integrations & Legacy Sync" },
                                { label: "GitHub", desc: "Clean Architecture & Open Code" }
                            ].map((item, idx, arr) => (
                                <div key={item.label} className="flex items-center gap-2">
                                    <span 
                                        title={item.desc}
                                        className="px-2.5 py-1 rounded-md bg-dark-900 border border-gray-700/80 text-gray-200 hover:text-primary hover:border-primary/60 hover:bg-dark-800 transition-all cursor-default shadow-sm font-medium"
                                    >
                                        {item.label}
                                    </span>
                                    {idx < arr.length - 1 && (
                                        <span className="text-primary/70 select-none text-xs font-bold">➔</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">

                        <Link href="/projects" className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1">
                            View Work
                        </Link>

                        <Link href="https://github.com/akilama471" target="_blank" aria-label="Github Profile" rel="noopener noreferrer" className="px-8 py-3 bg-dark-800 border border-gray-700 text-white font-semibold rounded-lg hover:bg-dark-700 transition-all flex items-center gap-2">
                            <FontAwesomeIcon icon={icons.github} /> GitHub
                        </Link>
                    </div>

                    <div className="flex gap-6 pt-6 text-gray-400">

                        <Link href="https://lk.linkedin.com/in/akilamadhushanka471" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-2xl">
                            <FontAwesomeIcon icon={icons.linkedin} />
                        </Link>
                        <Link href="mailto:developer.akila5@gmail.com" aria-label="Akila's Email" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-2xl">
                            <FontAwesomeIcon icon={icons.envelope} />
                        </Link>
                        <Link href="https://wa.me/94767221025" aria-label="Akila's Whatsapp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-2xl">
                            <FontAwesomeIcon icon={icons.whatsapp} />
                        </Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center relative animate-fade-in">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
                        <Image
                            src={myProfileImg}
                            className="relative w-full h-full object-cover rounded-full border-4 border-dark-800 shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-500"
                            alt="Akila Madhushanka"
                            width={384}
                            height={384}
                            priority
                            placeholder="blur"
                            sizes="(max-width: 768px) 288px, 384px"
                        />

                        <div className="absolute top-10 -right-4 glass px-4 py-2 rounded-lg flex items-center gap-3 animate-bounce shadow-lg z-20">
                            <FontAwesomeIcon icon={icons.laptopcode} className="text-primary text-2xl" />
                            <div>
                                <p className="text-xs text-gray-400">Expertise</p>
                                <p className="text-sm font-bold text-white">ERP & POS</p>
                            </div>
                        </div>

                        <div className="absolute bottom-10 -left-4 glass px-4 py-2 rounded-lg flex items-center gap-3 animate-bounce shadow-lg z-20 delay-150">
                            <FontAwesomeIcon icon={icons.laravel} className="text-red-500 text-2xl" />
                            <div>
                                <p className="text-xs text-gray-400">Backend & Cloud</p>
                                <p className="text-sm font-bold text-white">SaaS & APIs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}