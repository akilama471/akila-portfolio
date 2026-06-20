import Link from "next/link";

export default function Footer() {
    return (
<footer className="bg-dark-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
            <p className="text-gray-500 text-sm">
                &copy; <span id="year"></span> Akila Madhushanka. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
                Founder of 
                                    <Link href="https://nextgenware.lk" className="hover:text-primary">
                                        NextGenWare Software Solutions
                                    </Link>
            </p>
        </div>
    </footer>
    );
}