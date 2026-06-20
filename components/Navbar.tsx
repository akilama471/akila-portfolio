import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import Link from "next/link";

export default function Navbar() {
  return (<nav className="fixed w-full z-50 transition-all duration-300 glass" id="navbar">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold font-mono text-white tracking-tighter">
                AM<span className="text-primary">.</span>
            </a>
            
            <div className="hidden md:flex space-x-8 text-sm font-medium">
                <Link href="#home" className="hover:text-primary transition-colors">Home</Link>
                <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
                <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
                <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                <Link href="#contact" className="bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all">Contact Me</Link>
            </div>

            <button id="menu-btn" className="md:hidden text-white focus:outline-none">
                <FontAwesomeIcon icon={icons.bars} className="text-xl"/>
            </button>
        </div>

        <div id="mobile-menu" className="md:hidden hidden bg-dark-800 border-t border-gray-700">
            <div className="flex flex-col p-4 space-y-4">                
                <Link href="#home" className="block hover:text-primary">Home</Link>
                <Link href="#about" className="block hover:text-primary">About</Link>
                <Link href="#skills" className="block hover:text-primary">Skills</Link>
                <Link href="#projects" className="block hover:text-primary">Projects</Link>
                <Link href="#contact" className="block text-primary">Contact Me</Link>
            </div>
        </div>
    </nav>
  );}