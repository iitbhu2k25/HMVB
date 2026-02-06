'use client';

import { motion } from 'framer-motion';
import { Droplets, Cloud, Waves, TrendingUp } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export default function WaterAvailablePage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader
                title="Water Available for MAR"
                subtitle="Assessment of source water availability for Managed Aquifer Recharge in Varuna Basin"
                breadcrumb="Home / MAR Suitable Zones / Water Available"
                icon={<Droplets className="w-8 h-8 text-white" />}
                gradient="from-blue-600 to-cyan-600"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-100">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">Overview</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Successful MAR implementation depends on adequate availability of good quality source water. The Varuna River Basin offers various potential water sources including monsoon runoff, surplus river flows, treated wastewater, and harvested rainwater for aquifer recharge interventions.
                        </p>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
                    <h2 className="text-3xl font-black text-slate-800 mb-6 text-center">Water Source Categories</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Cloud,
                                title: 'Rainfall Harvesting',
                                availability: 'High (Monsoon)',
                                volume: '~850 mm/year',
                                quality: 'Excellent',
                                seasonality: 'June-September',
                                color: 'blue'
                            },
                            {
                                icon: Waves,
                                title: 'Surface Runoff',
                                availability: 'Moderate to High',
                                volume: '35-40% of rainfall',
                                quality: 'Good with treatment',
                                seasonality: 'Monsoon period',
                                color: 'cyan'
                            },
                            {
                                icon: Droplets,
                                title: 'River Water',
                                availability: 'Seasonal',
                                volume: 'Variable',
                                quality: 'Fair to Good',
                                seasonality: 'Post-monsoon',
                                color: 'teal'
                            },
                        ].map((source, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-gradient-to-br from-${source.color}-50 to-white rounded-2xl p-6 shadow-lg border border-${source.color}-100`}
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br from-${source.color}-500 to-${source.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                                    <source.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">{source.title}</h3>
                                <div className="space-y-2 text-sm">
                                    <div><span className="font-semibold text-gray-700">Availability:</span> <span className="text-gray-600">{source.availability}</span></div>
                                    <div><span className="font-semibold text-gray-700">Volume:</span> <span className="text-gray-600">{source.volume}</span></div>
                                    <div><span className="font-semibold text-gray-700">Quality:</span> <span className="text-gray-600">{source.quality}</span></div>
                                    <div><span className="font-semibold text-gray-700">Seasonality:</span> <span className="text-gray-600">{source.seasonality}</span></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-10">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">Water Quality Requirements for MAR</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { parameter: 'Turbidity', acceptable: '< 10 NTU', optimal: '< 5 NTU' },
                                { parameter: 'Total Dissolved Solids', acceptable: '< 1500 mg/L', optimal: '< 1000 mg/L' },
                                { parameter: 'pH', acceptable: '6.5 - 8.5', optimal: '7.0 - 8.0' },
                                { parameter: 'Nitrate', acceptable: '< 45 mg/L', optimal: '< 20 mg/L' },
                                { parameter: 'Total Coliform', acceptable: '< 500 MPN/100ml', optimal: '< 50 MPN/100ml' },
                                { parameter: 'Heavy Metals', acceptable: 'Below BIS limits', optimal: 'Minimal' },
                            ].map((req, index) => (
                                <div key={index} className="bg-white rounded-xl p-5 shadow-md">
                                    <h4 className="font-bold text-slate-800 mb-3">{req.parameter}</h4>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Acceptable</div>
                                            <div className="text-sm font-semibold text-blue-600">{req.acceptable}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Optimal</div>
                                            <div className="text-sm font-semibold text-emerald-600">{req.optimal}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mb-12">
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">Seasonal Availability Pattern</h2>
                        <p className="text-gray-700 mb-4">
                            Water availability for MAR in the Varuna Basin shows strong seasonal variation with peak availability during monsoon months (June-September) when rainfall harvesting and surface runoff capture are most feasible.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Pre-monsoon (March-May): Limited availability, primarily treated wastewater',
                                'Monsoon (June-September): High availability from rainfall and surface runoff',
                                'Post-monsoon (October-November): Moderate availability from residual runoff',
                                'Winter (December-February): Low availability, focus on stored water',
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Related Sections</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { title: 'Implementation Issues', href: '/mar/implementation-issues' },
                            { title: 'MAR Sites', href: '/mar/sites' },
                            { title: 'Techniques of MAR', href: '/mar/techniques' },
                        ].map((link, index) => (
                            <Link key={index} href={link.href}>
                                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                                    <h4 className="font-bold text-lg">{link.title}</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
