'use client';

import { motion } from 'framer-motion';
import { Droplets, TrendingUp, MapPin, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GroundwaterPotentialPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
            {/* Hero Section */}
            <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10" />
                <div className="relative max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl shadow-2xl mb-8"
                    >
                        <Droplets className="w-10 h-10 text-white" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 mb-6"
                    >
                        Groundwater <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Potential</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto"
                    >
                        Comprehensive mapping and analysis of groundwater reserves, aquifer capacity, and recharge zones
                    </motion.p>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            </section>

            {/* Content Grid */}
            <section className="py-16 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Overview Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                                    <Database className="w-5 h-5 text-white" />
                                </div>
                                Overview
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    Groundwater potential assessment involves the evaluation of subsurface water reserves and the capacity of aquifer systems to store and transmit water. This critical analysis helps in sustainable water resource planning and management.
                                </p>
                                <p>
                                    Our advanced monitoring system uses geological surveys, geophysical investigations, and remote sensing data to map groundwater availability across different regions.
                                </p>
                            </div>
                        </motion.div>

                        {/* Key Features Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-white" />
                                </div>
                                Key Features
                            </h2>
                            <ul className="space-y-3 text-slate-600">
                                {[
                                    'Aquifer characterization and mapping',
                                    'Groundwater recharge zone identification',
                                    'Storage capacity assessment',
                                    'Yield potential analysis',
                                    'Sustainable extraction limits',
                                    'Seasonal variation tracking'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <ArrowRight className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Data Coming Soon */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 text-center text-white shadow-2xl"
                    >
                        <MapPin className="w-16 h-16 mx-auto mb-6 opacity-90" />
                        <h3 className="text-3xl sm:text-4xl font-black mb-4">Interactive Maps & Data</h3>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                            Detailed groundwater potential maps, aquifer models, and analytical tools will be available here soon.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                        >
                            Back to Home
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
