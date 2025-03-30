import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black mt-auto py-6 md:py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <div className="w-full md:w-auto text-center md:text-left">
                        <Link href="/" className="text-xl font-bold text-yellow-400">
                            Geetkar
                        </Link>
                        <p className="text-sm  mt-2">
                            © {new Date().getFullYear()} Geetkar. All rights reserved.
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
                        {/* <Link href="/about" className=" hover:text-yellow-400 text-sm md:text-base">
                            About
                        </Link>
                        <Link href="/contact" className=" hover:text-yellow-400 text-sm md:text-base">
                            Contact
                        </Link>
                        <Link href="/privacy" className=" hover:text-yellow-400 text-sm md:text-base">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className=" hover:text-yellow-400 text-sm md:text-base">
                            Terms of Service
                        </Link> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;