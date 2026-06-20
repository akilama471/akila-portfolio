"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
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

    return (
        <section id="contact" className="py-20 bg-dark-800/50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                        <p className="text-gray-400">Let's collaborate to bring your vision to life.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 bg-dark-900 p-8 rounded-2xl border border-gray-700 shadow-2xl">

                        <div data-aos="fade-right">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <FontAwesomeIcon icon={icons.mapMarkerAlt} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Location</h4>
                                        <p className="text-gray-400 text-sm">Wariyapola, Sri Lanka (60400)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <FontAwesomeIcon icon={icons.envelope} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Email</h4>
                                        <Link href="mailto:developer.akila5@gmail.com" className="text-gray-400 text-sm hover:text-primary">
                                            developer.akila5@gmail.com
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <FontAwesomeIcon icon={icons.phone} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Phone</h4>
                                        <Link href="https://wa.me/94767221025" className="text-gray-400 text-sm hover:text-primary block">
                                            +94 76 722 1025 (WhatsApp)
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-white font-semibold mb-3">Connect on Socials</h4>
                                <div className="flex gap-4">
                                    <Link href="https://www.linkedin.com/in/akilamadhushanka471" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
                                        <FontAwesomeIcon icon={icons.linkedin} aria-hidden="true" />
                                    </Link>

                                    <Link href="https://github.com/akilama471" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
                                        <FontAwesomeIcon icon={icons.github} aria-hidden="true" />
                                    </Link>

                                    <Link href="https://web.facebook.com/akila.madhushanka471" aria-label="Facebook Profile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
                                        <FontAwesomeIcon icon={icons.facebook} aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm text-gray-400 mb-1">Name</label>
                                    <input type="text" id="contact-name" name="name" required className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block text-sm text-gray-400 mb-1">Email</label>
                                    <input type="email" id="contact-email" name="email" required className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-sm text-gray-400 mb-1">Message</label>
                                    <textarea rows={4} id="contact-message" name="message" required className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tell me about your project..."></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-cyan-600 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                                {submitStatus === 'success' && (
                                    <p className="text-green-400 text-sm mt-4 text-center">
                                        Message sent successfully! I'll get back to you soon.
                                    </p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="text-red-400 text-sm mt-4 text-center">
                                        Something went wrong. Please try again or email directly.
                                    </p>
                                )}
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}