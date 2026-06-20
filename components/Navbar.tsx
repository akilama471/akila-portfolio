"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav aria-label="Main navigation" className="fixed w-full z-50 transition-all duration-300 glass" id="navbar">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="#home" className="text-2xl font-bold font-mono text-white tracking-tighter">
                    AM<span className="text-primary">.</span>
                </Link>
                
                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    <Link href="#home" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
                    <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
                    <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                    <Link href="#contact" className="bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all">Contact Me</Link>
                </div>

                <button
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    <FontAwesomeIcon icon={isOpen ? icons.xmark : icons.bars} className="text-xl" aria-hidden="true" />
                </button>
            </div>

            {isOpen && (
                <div id="mobile-menu" className="md:hidden bg-dark-800 border-t border-gray-700">
                    <div className="flex flex-col p-4 space-y-4">                
                        <Link href="#home" onClick={() => setIsOpen(false)} className="block hover:text-primary">Home</Link>
                        <Link href="#about" onClick={() => setIsOpen(false)} className="block hover:text-primary">About</Link>
                        <Link href="#skills" onClick={() => setIsOpen(false)} className="block hover:text-primary">Skills</Link>
                        <Link href="#services" onClick={() => setIsOpen(false)} className="block hover:text-primary">Services</Link>
                        <Link href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-primary">Projects</Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)} className="block text-primary">Contact Me</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}