"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import Link from "next/link";

export default function Contact() {
    
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Submitted");
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
                                <FontAwesomeIcon icon={icons.mapMarkerAlt} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Location</h4>
                                    <p className="text-gray-400 text-sm">Wariyapola, Sri Lanka (60400)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <FontAwesomeIcon icon={icons.envelope} />
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
                                    <FontAwesomeIcon icon={icons.phone} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Phone</h4>                                                                        
                                    <Link href="tel:+94701108494" className="text-gray-400 text-sm hover:text-primary block">
                                        +94 70 110 8494
                                    </Link>                         
                                    <Link href="https://wa.me/94755224417" className="text-gray-400 text-sm hover:text-primary block">
                                        +94 70 110 8494 (WhatsApp)
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-white font-semibold mb-3">Connect on Socials</h4>
                            <div className="flex gap-4">                            
                                    <Link href="https://www.linkedin.com/in/akilamadhushanka471" className="w-10 h-10 rounded-lg bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
                                        <FontAwesomeIcon icon={icons.linkedin} />
                                    </Link>

                                    <Link href="https://github.com/akilama471" className="w-10 h-10 rounded-lg bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
                                        <FontAwesomeIcon icon={icons.github} />
                                    </Link>

                                    <Link href="https://web.facebook.com/akila.madhushanka471" className="w-10 h-10 rounded-lg bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
                                        <FontAwesomeIcon icon={icons.facebook} />
                                    </Link>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Name</label>
                                <input type="text" className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name"/>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Email</label>
                                <input type="email" className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com"/>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Message</label>
                                <textarea rows={4} className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-cyan-600 transition-colors shadow-lg shadow-primary/20">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </section>
    );
}