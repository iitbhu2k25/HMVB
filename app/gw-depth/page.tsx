'use client';

import { motion } from 'framer-motion';
import { Gauge, TrendingDown, BarChart2, LineChart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DepthMonitoringPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-white">
            <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/10" />
                <div className="relative max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-500 rounded-3xl shadow-2xl mb-8"
                    >
                        <Gauge className="w-10 h-10 text-white" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 mb-6"
                    >
                        Groundwater <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500">Depth</span> Monitoring
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto"
                    >
                        Continuous tracking of water table levels, seasonal variations, and long-term trends
                    </motion.p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-500 rounded-xl flex items-center justify-center">
                                    <TrendingDown className="w-5 h-5 text-white" />
                                </div>
                                Overview
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    Groundwater depth monitoring involves continuous measurement of water table elevations to understand aquifer storage dynamics, recharge-discharge patterns, and long-term sustainability of groundwater resources.
                                </p>
                                <p>
                                    Our automated monitoring network provides high-frequency depth measurements from observation wells equipped with pressure transducers and telemetry systems for real-time data transmission.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-xl flex items-center justify-center">
                                    <BarChart2 className="w-5 h-5 text-white" />
                                </div>
                                Monitoring Features
                            </h2>
                            <ul className="space-y-3 text-slate-600">
                                {[
                                    'Automated depth sensors',
                                    'Real-time telemetry systems',
                                    'Seasonal trend analysis',
                                    'Drought impact assessment',
                                    'Recharge event detection',
                                    'Multi-year comparison charts',
                                    'Predictive modeling tools'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <ArrowRight className="w-4 h-4 text-violet-600" />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-violet-600 to-purple-500 rounded-3xl p-12 text-center text-white shadow-2xl"
                    >
                        <LineChart className="w-16 h-16 mx-auto mb-6 opacity-90" />
                        <h3 className="text-3xl sm:text-4xl font-black mb-4">Depth Trends Dashboard</h3>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                            Interactive depth hydrographs, spatial distribution maps, and early warning alerts for critical water levels will be featured here.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
