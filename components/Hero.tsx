"use client";

import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 z-10">
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 space-y-6" data-aos="fade-right">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-2">
                        👋 Hello, I'm
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        Akila <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Madhushanka</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-400 font-mono">
                        <Typewriter
                            options={{
                                strings: ['Full-Stack Developer', 'Mobile App Expert', 'Solutions Architect', 'Tech Enthusiast'],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 50,
                            }}
                        />
                    </h2>
                    <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                        Transforming ideas into digital reality. I craft robust solutions across Web, Mobile, and Backend systems with a focus on scalability and user experience.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">

                        <Link href="#projects" className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1">
                            View Work
                        </Link>

                        <Link href="https://github.com/akilama471" target="_blank" className="px-8 py-3 bg-dark-800 border border-gray-700 text-white font-semibold rounded-lg hover:bg-dark-700 transition-all flex items-center gap-2">
                         <FontAwesomeIcon icon={icons.github} /> GitHub
                        </Link>
                    </div>

                    <div className="flex gap-6 pt-8 text-gray-400">

                        <Link href="https://lk.linkedin.com/in/akilamadhushanka471" className="hover:text-primary transition-colors text-2xl">
                            <FontAwesomeIcon icon={icons.linkedin} />
                        </Link>
                        <Link href="mailto:developer.akila5@gmail.com" className="hover:text-primary transition-colors text-2xl">
                            <FontAwesomeIcon icon={icons.envelope} />
                        </Link>
                        <Link href="https://wa.me/+94767221025" className="hover:text-primary transition-colors text-2xl">
                            <FontAwesomeIcon icon={icons.whatsapp} />
                        </Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center relative" data-aos="zoom-in">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
                        <Image
                            src="https://cdn.jsdelivr.net/gh/akilama471/akilama471.github.io@main/assets/img/my-profile-img.webp"
                            className="relative w-full h-full object-cover rounded-full border-4 border-dark-800 shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-500"
                            alt="Akila Madhushanka"
                            width={400}
                            height={400}
                            priority
                        />

                        <div className="absolute top-10 -right-4 glass px-4 py-2 rounded-lg flex items-center gap-3 animate-bounce shadow-lg z-20">
                            <FontAwesomeIcon icon={icons.flutter} className="text-primary text-2xl" />
                            <div>
                                <p className="text-xs text-gray-400">Expertise</p>
                                <p className="text-sm font-bold text-white">Flutter Dev</p>
                            </div>
                        </div>

                        <div className="absolute bottom-10 -left-4 glass px-4 py-2 rounded-lg flex items-center gap-3 animate-bounce shadow-lg z-20 delay-150">
                            <FontAwesomeIcon icon={icons.laravel} className="text-red-500 text-2xl" />
                            <div>
                                <p className="text-xs text-gray-400">Backend</p>
                                <p className="text-sm font-bold text-white">Laravel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}