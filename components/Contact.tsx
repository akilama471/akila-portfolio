"use client";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import Link from "next/link";

type InquiryType = 'project' | 'hire' | 'general';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    const [inquiryType, setInquiryType] = useState<InquiryType>('project');
    const messageInputRef = useRef<HTMLTextAreaElement>(null);
    const formCardRef = useRef<HTMLDivElement>(null);

    const handleStartProjectClick = () => {
        setInquiryType('project');
        if (formCardRef.current) {
            formCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setTimeout(() => {
            messageInputRef.current?.focus();
        }, 400);
    };

    const handleInquiryChange = (type: InquiryType) => {
        setInquiryType(type);
        messageInputRef.current?.focus();
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const emailjs = (await import("@emailjs/browser")).default;
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                e.currentTarget,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
                }
            );
            setSubmitStatus('success');
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const placeholders: Record<InquiryType, string> = {
        project: "Tell me about your product requirements, target platforms (Web, Mobile, Backend), estimated timeline, and goals...",
        hire: "Tell me about the engineering role, team structure, tech stack, and employment terms (Full-Time or Contract)...",
        general: "How can I assist you? Feel free to ask any technical or collaboration question...",
    };

    const buttonLabels: Record<InquiryType, string> = {
        project: "Send Project Inquiry",
        hire: "Send Hiring Inquiry",
        general: "Send Message",
    };

    return (
        <section id="contact" className="py-20 bg-dark-800/50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12" data-aos="fade-up">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-3">
                            Direct Collaboration & Inquiries
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Whether you're looking to hire an experienced Full-Stack Architect or need an enterprise system built from scratch, choose your path below.
                        </p>
                    </div>

                    {/* Dual Conversion CTAs */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12" data-aos="fade-up">
                        {/* For Employers */}
                        <div className="group relative bg-dark-900/90 p-6 md:p-7 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
                                        <FontAwesomeIcon icon={icons.briefcase} className="text-xs" />
                                        For Employers
                                    </span>
                                    <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Hiring & Roles</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                    Looking to Hire a Senior Engineer?
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Review my verified architectural experience across Laravel, Flutter, Next.js, and Cloud systems, along with 57+ completed projects.
                                </p>
                            </div>

                            <div className="space-y-3 pt-2">
                                <a
                                    href="/doc/akila_madusanka_resume.pdf"
                                    download="Akila_Madhushanka_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl bg-dark-800 border border-cyan-500/40 text-white font-semibold text-sm hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all transform hover:-translate-y-0.5"
                                >
                                    <FontAwesomeIcon icon={icons.download} className="text-primary" />
                                    <span>Download Resume (PDF)</span>
                                </a>
                                <div className="flex items-center justify-between text-xs text-gray-400 px-1">
                                    <Link
                                        href="/about"
                                        className="hover:text-primary transition-colors inline-flex items-center gap-1"
                                    >
                                        <span>View Credentials & Story</span>
                                        <FontAwesomeIcon icon={icons.arrowRight} className="text-[10px]" />
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => handleInquiryChange('hire')}
                                        className="hover:text-cyan-300 transition-colors underline decoration-dotted cursor-pointer"
                                    >
                                        Message regarding a role
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* For Businesses */}
                        <div className="group relative bg-dark-900/90 p-6 md:p-7 rounded-2xl border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                                        <FontAwesomeIcon icon={icons.rocket} className="text-xs" />
                                        For Businesses
                                    </span>
                                    <span className="text-[11px] font-mono text-emerald-400/80 uppercase tracking-wider">NextGenWare</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                    Have a System or Product to Build?
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Turn your vision into scalable software. We engineer mission-critical ERPs, POS platforms, custom mobile apps, and robust web solutions.
                                </p>
                            </div>

                            <div className="space-y-3 pt-2">
                                <button
                                    type="button"
                                    onClick={handleStartProjectClick}
                                    className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                                >
                                    <FontAwesomeIcon icon={icons.rocket} />
                                    <span>Start a Project</span>
                                </button>
                                <div className="flex items-center justify-between text-xs text-gray-400 px-1">
                                    <span className="text-gray-500">NDA Protected • Free Scope Review</span>
                                    <Link
                                        href="https://wa.me/94767221025?text=Hello%20Akila,%20I'd%20like%20to%20discuss%20a%20project."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 font-medium"
                                    >
                                        <FontAwesomeIcon icon={icons.whatsapp} className="text-emerald-400" />
                                        <span>WhatsApp Chat</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Contact Card */}
                    <div
                        ref={formCardRef}
                        id="contact-form-card"
                        className="grid md:grid-cols-2 gap-10 bg-dark-900 p-8 md:p-10 rounded-2xl border border-gray-700 shadow-2xl"
                    >
                        {/* Left Column: Direct Info */}
                        <div data-aos="fade-right">
                            <h3 className="text-2xl font-bold text-white mb-2">Direct Contact</h3>
                            <p className="text-sm text-gray-400 mb-6">
                                Reach out via any channel below. All inquiries receive a personal response within 24 hours.
                            </p>

                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <FontAwesomeIcon icon={icons.mapMarkerAlt} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm">Location</h4>
                                        <p className="text-gray-400 text-xs mt-0.5">Wariyapola, Sri Lanka (60400)</p>
                                        <span className="text-[11px] text-emerald-400 font-mono">Available Globally (Remote)</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <FontAwesomeIcon icon={icons.envelope} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm">Email</h4>
                                        <Link href="mailto:developer.akila5@gmail.com" className="text-gray-400 text-xs hover:text-primary break-all">
                                            developer.akila5@gmail.com
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <FontAwesomeIcon icon={icons.phone} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm">Phone / WhatsApp</h4>
                                        <Link href="https://wa.me/94767221025" className="text-gray-400 text-xs hover:text-primary block">
                                            +94 76 722 1025 (Direct & WhatsApp)
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-800">
                                <h4 className="text-white font-semibold text-sm mb-3">Connect on Socials</h4>
                                <div className="flex gap-3">
                                    <Link
                                        href="https://www.linkedin.com/in/akilamadhushanka471"
                                        aria-label="LinkedIn Profile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all"
                                    >
                                        <FontAwesomeIcon icon={icons.linkedin} aria-hidden="true" />
                                    </Link>

                                    <Link
                                        href="https://github.com/akilama471"
                                        aria-label="GitHub Profile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all"
                                    >
                                        <FontAwesomeIcon icon={icons.github} aria-hidden="true" />
                                    </Link>

                                    <Link
                                        href="https://web.facebook.com/akila.madhushanka471"
                                        aria-label="Facebook Profile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all"
                                    >
                                        <FontAwesomeIcon icon={icons.facebook} aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Interactive Form */}
                        <div data-aos="fade-left">
                            {/* Inquiry Type Pills */}
                            <div className="mb-5">
                                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                                    What is your inquiry about?
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => handleInquiryChange('project')}
                                        className={`py-2 px-2 text-xs font-medium rounded-lg border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                            inquiryType === 'project'
                                                ? 'bg-primary/20 border-primary text-cyan-300 font-semibold shadow-sm'
                                                : 'bg-dark-800 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white'
                                        }`}
                                    >
                                        <FontAwesomeIcon icon={icons.rocket} className="text-[10px]" />
                                        <span className="truncate">Project</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => handleInquiryChange('hire')}
                                        className={`py-2 px-2 text-xs font-medium rounded-lg border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                            inquiryType === 'hire'
                                                ? 'bg-primary/20 border-primary text-cyan-300 font-semibold shadow-sm'
                                                : 'bg-dark-800 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white'
                                        }`}
                                    >
                                        <FontAwesomeIcon icon={icons.briefcase} className="text-[10px]" />
                                        <span className="truncate">Hiring</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => handleInquiryChange('general')}
                                        className={`py-2 px-2 text-xs font-medium rounded-lg border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                            inquiryType === 'general'
                                                ? 'bg-primary/20 border-primary text-cyan-300 font-semibold shadow-sm'
                                                : 'bg-dark-800 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white'
                                        }`}
                                    >
                                        <FontAwesomeIcon icon={icons.envelope} className="text-[10px]" />
                                        <span className="truncate">General</span>
                                    </button>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="hidden" name="inquiry_type" value={inquiryType} />

                                <div>
                                    <label htmlFor="contact-name" className="block text-xs font-medium text-gray-300 mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        required
                                        className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Jane Doe or Company Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-email" className="block text-xs font-medium text-gray-300 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        required
                                        className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="jane@company.com"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <label htmlFor="contact-message" className="block text-xs font-medium text-gray-300">
                                            Message
                                        </label>
                                        <span className="text-[11px] text-gray-500 font-mono">
                                            {inquiryType === 'project' ? 'Project Brief' : inquiryType === 'hire' ? 'Role Details' : 'Details'}
                                        </span>
                                    </div>
                                    <textarea
                                        ref={messageInputRef}
                                        rows={4}
                                        id="contact-message"
                                        name="message"
                                        required
                                        className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder={placeholders[inquiryType]}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-dark-900 font-bold py-3 rounded-lg hover:bg-cyan-400 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {isSubmitting ? "Sending..." : buttonLabels[inquiryType]}
                                </button>

                                {submitStatus === 'success' && (
                                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs text-center font-medium">
                                        Thank you! Your message has been sent successfully. I will get back to you within 24 hours.
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs text-center font-medium">
                                        Something went wrong while sending. Please reach out directly at{" "}
                                        <Link href="mailto:developer.akila5@gmail.com" className="underline font-bold">
                                            developer.akila5@gmail.com
                                        </Link>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}