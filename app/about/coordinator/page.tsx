'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, MessageSquareQuote } from 'lucide-react';

export default function CoordinatorMessagePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
            {/* Header Section */}
            <section className="pt-16 pb-8 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-6 shadow-lg text-white">
                            <MessageSquareQuote className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-slate-800 tracking-tight">
                            Coordinator&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Message</span>
                        </h1>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto" />
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-8 px-4 pb-20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row"
                    >
                        {/* LEFT COLUMN: Image & Profile */}
                        <div className="md:w-1/3 bg-gradient-to-b from-[#0a3d62] to-[#0f5c93] p-8 text-white flex flex-col items-center text-center relative">
                            {/* Decorative Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                            
                            <div className="relative z-10 w-48 h-48 mb-6 mt-4">
                                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden bg-slate-200">
                                    <Image 
                                        src="/persons/sgsir.png" 
                                        alt="Prof. Shishir Gaur"
                                        fill
                                        className="object-contain"
                                        unoptimized // Ensures image loads locally without optimization issues
                                    />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-1">Prof. Shishir Gaur</h3>
                                <p className="text-cyan-200 font-medium mb-4">Coordinator, SLCR</p>
                                <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4"></div>
                                <p className="text-sm text-blue-100 leading-relaxed">
                                    Department of Civil Engineering<br/>
                                    Indian Institute of Technology (BHU)<br/>
                                    Varanasi, India
                                </p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: The Message */}
                        <div className="md:w-2/3 p-8 md:p-12 relative">
                            <Quote className="absolute top-8 left-8 w-16 h-16 text-blue-50 -z-0 rotate-180" />
                            
                            <div className="relative z-10 space-y-6 text-slate-600 text-lg leading-relaxed text-justify">
                                <p>
                                    <span className="font-bold text-blue-700 text-xl float-left mr-2 mt-[-6px]">A</span>
                                    s a coordinator, I have the privilege to lead the <strong>Smart Laboratory on Clean Rivers (SLCR)</strong> under the Dept. of Civil Engg., IIT (BHU) Varanasi, a flagship Indo-Danish initiative advancing sustainable river rejuvenation. SLCR represents a strategic platform for integrating global knowledge, advanced technologies, and ground implemented solutions to address persistent challenges related to river water quality.
                                </p>
                                
                                <p>
                                    SLCR operates as a <strong>living laboratory</strong> for testing and validating innovative management and intervention approaches for small rivers and tributaries, which play a critical role in basin-scale river health. The <span className="text-cyan-600 font-semibold">Varuna River Basin</span> is the pilot site, enabling real-world application of integrated planning, monitoring, and management approaches.
                                </p>

                                <p>
                                    The initiative brings together government agencies, academic institutions, technology providers, and citizens through a collaborative knowledge, ensuring solutions are practical, scalable, and sustainable.
                                </p>

                                <p>
                                    Through collaboration with Danish partners, SLCR is developing decision-support systems, hydrogeological assessment tools, and pollutant monitoring frameworks with potential for replication across Indian river systems and international river networks. The initiative seeks to contribute systematically to national efforts for river restoration by strengthening knowledge generation, institutional capacity, and solution transfer.
                                </p>
                            </div>

                            {/* Sanskrit Quote */}
                            <div className="mt-10 pt-8 border-t border-slate-100 text-center">
                                <h4 className="text-2xl font-bold text-[#0a3d62] font-serif mb-2">
                                    “ आपो हि ष्ठा मयोभुवः ”
                                </h4>
                                <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">
                                    (Ṛigveda 10.9.1)
                                </p>
                                <p className="text-lg text-slate-600 italic mt-3">
                                    “Waters are indeed the source of well-being.”
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}