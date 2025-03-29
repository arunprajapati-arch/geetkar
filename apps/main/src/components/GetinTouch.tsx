"use client"
import React from 'react';

const GetinTouch: React.FC = () => {
    return (
        <section className="py-12 bg-black text-gray-100">
            <div className="container mx-auto px-4">
                {/* Landscape business card with glass morphism effect */}
                <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-[0_0_15px_rgba(255,215,0,0.3)] overflow-hidden transform transition-all hover:scale-105 duration-300 border border-yellow-600/30 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row">
                        {/* Left section with logo and branding */}
                        <div className="w-full md:w-1/3 bg-gradient-to-br from-yellow-900/70 to-black flex items-center justify-center p-6 relative overflow-hidden">
                            {/* Decorative circles */}
                            <div className="absolute top-12 left-8 w-24 h-24 rounded-full bg-yellow-600/10 blur-xl"></div>
                            <div className="absolute bottom-10 right-12 w-20 h-20 rounded-full bg-amber-600/10 blur-xl"></div>
                            
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-yellow-500 to-amber-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 p-1 shadow-lg">
                                    <div className="bg-black w-full h-full rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                        </svg>
                                    </div>
                                </div>
                                
                                <h2 className="text-2xl font-bold text-center mb-1 text-white">Geetkar</h2>
                                <p className="text-center text-yellow-300 text-sm tracking-wider font-light">MUSIC & PRODUCTION</p>
                            </div>
                        </div>
                        
                        {/* Right section with contact info */}
                        <div className="w-full md:w-2/3 p-6 flex flex-col justify-between relative">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-yellow-600/10 to-transparent rounded-full blur-xl"></div>
                            
                            <div className="mb-4 relative z-10">
                                <div className="flex items-center mb-4">
                                    <div className="bg-gradient-to-r from-yellow-500 to-amber-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-yellow-300 text-xs font-medium uppercase tracking-wider">Phone</p>
                                        <p className="text-white text-base">+1 (123) 456-7890</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center">
                                    <div className="bg-gradient-to-r from-yellow-500 to-amber-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-yellow-300 text-xs font-medium uppercase tracking-wider">Email</p>
                                        <p className="text-white text-base">contact@geetkar.com</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Website */}
                            <div className="relative z-10">
                                <div className="flex items-center justify-center md:justify-start mb-3">
                                    <div className="h-[1px] w-10 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mr-3"></div>
                                    <span className="text-yellow-300 text-xs font-medium uppercase tracking-wider">Connect With Us</span>
                                    <div className="h-[1px] w-10 bg-gradient-to-r from-transparent via-yellow-500 to-transparent ml-3"></div>
                                </div>
                                
                                <div className="flex justify-center md:justify-start space-x-4 mb-4">
                                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                                        <span className="sr-only">Facebook</span>
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    
                                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                                        <span className="sr-only">Instagram</span>
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    
                                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                    
                                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                                        <span className="sr-only">YouTube</span>
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    
                                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                </div>
                                
                                {/* Website URL with glow effect */}
                                <a href="#" className="group flex justify-center md:justify-start items-center gap-2">
                                    <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent text-base font-medium group-hover:text-white transition-all duration-300">www.geetkar.com</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetinTouch;