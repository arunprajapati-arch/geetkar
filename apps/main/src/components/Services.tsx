"use client"
import { Music, Video, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceInfo {
    icon: ReactNode;
    description: string;
    features: string[];
}

interface ServicesData {
    [key: string]: ServiceInfo;
}

export const Services = () => {
    const [activeTab, setActiveTab] = useState("Music Production");

    const services: ServicesData = {
        "Music Production": {
            icon: <Music className="w-6 h-6" />,
            description: "State-of-the-art recording facilities and experienced producers to bring your musical vision to life.",
            features: [
                "Professional recording studios",
                "Expert mixing and mastering",
                "Arrangement and composition",
                "Vocal production and tuning",
                "Custom instrumentals",
            ],
        },
        "Video Production": {
            icon: <Video className="w-6 h-6" />,
            description: "High-quality video production to visually enhance your music and brand.",
            features: [
                "Music video direction",
                "Cinematography and editing",
                "Storyboarding and scripting",
                "Post-production effects",
                "Custom animations",
            ],
        },
        "Artist Management": {
            icon: <User className="w-6 h-6" />,
            description: "Comprehensive artist management services to help you grow your career.",
            features: [
                "Brand development",
                "Tour planning and logistics",
                "Social media strategy",
                "Contract negotiation",
                "Industry networking",
            ],
        },
    };

    return (
        <div id="services" className=" p-4 sm:p-8 py-16 sm:py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto">
                
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {Object.keys(services).map((service) => (
                        <button
                            key={service}
                            onClick={() => setActiveTab(service)}
                            className={`flex items-center px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
                                activeTab === service
                                    ? "bg-yellow-500 text-black"
                                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                            }`}
                        >
                            {services[service]?.icon}
                            <span className="ml-2 text-sm sm:text-base">{service}</span>
                        </button>
                    ))}
                </div>

                <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12"
                >
                    <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeTab}</h3>
                        <p className="text-gray-400 mb-6">{services[activeTab]?.description}</p>
                        <ul className="space-y-3 text-gray-400">
                            {services[activeTab]?.features.map((feature, index) => (
                                <motion.li 
                                    key={index} 
                                    className="flex items-center"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></span>
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <button className="mt-8 px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-colors shadow-lg font-medium">
                            Learn More About {activeTab}
                        </button>
                    </div>
                    <div className="w-full lg:flex-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-2xl">
                        <div className="aspect-video flex justify-center items-center relative">
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <button 
                                className="w-16 h-16 bg-yellow-500 hover:bg-yellow-400 rounded-full flex justify-center items-center z-10 transition-all duration-300 transform hover:scale-110 focus:outline-none" 
                                aria-label="Play video"
                            >
                                <span className="text-black text-2xl ml-1">▶</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};