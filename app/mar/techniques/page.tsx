'use client';

import { motion } from 'framer-motion';
import { Layers, Droplets, Activity, Construction } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export default function TechniquesPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader
                title="Techniques of MAR"
                subtitle="Various Managed Aquifer Recharge methods applicable to the Varuna River Basin"
                breadcrumb="Home / MAR Suitable Zones / Techniques of MAR"
                icon={<Construction className="w-8 h-8 text-white" />}
                gradient="from-violet-600 to-purple-600"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-violet-100">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">Overview</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Managed Aquifer Recharge techniques can be broadly classified into surface spreading methods and direct injection methods. Selection of appropriate technique depends on site-specific hydrogeological conditions, water availability, quality requirements, and cost considerations.
                        </p>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
                    <h2 className="text-3xl font-black text-slate-800 mb-6 text-center">MAR Technique Categories</h2>

                    <div className="space-y-8">
                        {/* Surface Spreading Methods */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Surface Spreading Methods</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Droplets,
                                        title: 'Percolation Tanks',
                                        description: 'Surface impoundments constructed to facilitate water infiltration through the basin floor into underlying aquifers.',
                                        suitability: 'Areas with permeable soils, gentle slopes, and adequate storage capacity',
                                        advantages: ['Simple design', 'Low cost', 'Natural filtration'],
                                        color: 'blue'
                                    },
                                    {
                                        icon: Layers,
                                        title: 'Recharge Basins',
                                        description: 'Excavated or leveed structures designed to spread water over permeable surfaces for enhanced infiltration.',
                                        suitability: 'Flat terrain, high permeability soils, proximity to water source',
                                        advantages: ['Large recharge volumes', 'Multiple uses', 'Flexible operation'],
                                        color: 'cyan'
                                    },
                                    {
                                        icon: Activity,
                                        title: 'Check Dams',
                                        description: 'Small barriers across streams to reduce flow velocity and promote infiltration along the stream bed.',
                                        suitability: 'Seasonal streams, consolidated rocks with fractures, hilly terrain',
                                        advantages: ['Low cost', 'Soil conservation', 'Distributed recharge'],
                                        color: 'teal'
                                    },
                                    {
                                        icon: Construction,
                                        title: 'Subsurface Dams',
                                        description: 'Underground barriers constructed to impound subsurface flow and increase groundwater storage.',
                                        suitability: 'River beds, alluvial valleys, shallow bedrock',
                                        advantages: ['Minimal evaporation', 'No land acquisition', 'Sustained base flow'],
                                        color: 'emerald'
                                    },
                                ].map((technique, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`bg-gradient-to-br from-${technique.color}-50 to-white rounded-2xl p-6 shadow-lg border border-${technique.color}-100`}
                                    >
                                        <div className={`w-12 h-12 bg-gradient-to-br from-${technique.color}-500 to-${technique.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                                            <technique.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-800 mb-2">{technique.title}</h4>
                                        <p className="text-gray-600 text-sm mb-3">{technique.description}</p>
                                        <div className="mb-3">
                                            <span className="text-xs font-semibold text-gray-500 uppercase">Suitability:</span>
                                            <p className="text-sm text-gray-700 mt-1">{technique.suitability}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold text-gray-500 uppercase">Key Advantages:</span>
                                            <ul className="mt-1 space-y-1">
                                                {technique.advantages.map((adv, i) => (
                                                    <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                                                        <span className="w-1 h-1 rounded-full bg-${technique.color}-500" />
                                                        {adv}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Direct Injection Methods */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Direct Injection Methods</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: 'Injection Wells',
                                        description: 'Direct injection of water into confined or semi-confined aquifers through boreholes equipped with pumps.',
                                        suitability: 'Deep aquifers, limited surface area, urban settings',
                                        advantages: ['Targeted recharge', 'Space efficient', 'High recharge rates'],
                                        color: 'violet'
                                    },
                                    {
                                        title: 'Recharge Shafts',
                                        description: 'Large diameter vertical shafts backfilled with permeable material to facilitate direct aquifer recharge.',
                                        suitability: 'Shallow aquifers, urban areas, post-monsoon storage',
                                        advantages: ['Cost-effective', 'Rapid recharge', 'Minimal clogging'],
                                        color: 'purple'
                                    },
                                    {
                                        title: 'Aquifer Storage & Recovery (ASR)',
                                        description: 'Injection and subsequent extraction of water from the same well system for storage and later use.',
                                        suitability: 'Confined aquifers, good quality source water, demand management',
                                        advantages: ['Water banking', 'Quality protection', 'Demand buffering'],
                                        color: 'fuchsia'
                                    },
                                    {
                                        title: 'Recharge Trenches',
                                        description: 'Linear excavations filled with filter media to enhance infiltration in weathered and fractured zones.',
                                        suitability: 'Hard rock areas, shallow water table, limited space',
                                        advantages: ['Simple construction', 'Low maintenance', 'Local recharge'],
                                        color: 'pink'
                                    },
                                ].map((technique, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`bg-gradient-to-br from-${technique.color}-50 to-white rounded-2xl p-6 shadow-lg border border-${technique.color}-100`}
                                    >
                                        <h4 className="text-lg font-bold text-slate-800 mb-2">{technique.title}</h4>
                                        <p className="text-gray-600 text-sm mb-3">{technique.description}</p>
                                        <div className="mb-3">
                                            <span className="text-xs font-semibold text-gray-500 uppercase">Suitability:</span>
                                            <p className="text-sm text-gray-700 mt-1">{technique.suitability}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold text-gray-500 uppercase">Key Advantages:</span>
                                            <ul className="mt-1 space-y-1">
                                                {technique.advantages.map((adv, i) => (
                                                    <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                                                        <span className={`w-1 h-1 rounded-full bg-${technique.color}-500`} />
                                                        {adv}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
                    <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-3xl p-8 sm:p-10 shadow-2xl">
                        <h2 className="text-3xl font-black mb-6">Best Practices</h2>
                        <ul className="space-y-3">
                            {[
                                'Conduct detailed site investigations before selecting MAR technique',
                                'Ensure adequate pre-treatment of source water to prevent clogging',
                                'Design structures with appropriate hydraulic loading rates',
                                'Implement regular monitoring and maintenance schedules',
                                'Engage local communities in planning and operation',
                                'Integrate MAR with broader water resource management strategies',
                            ].map((practice, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Droplets className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span>{practice}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Related Sections</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { title: 'Implementation Issues', href: '/mar/implementation-issues' },
                            { title: 'Water Available', href: '/mar/water-available' },
                            { title: 'MAR Sites', href: '/mar/sites' },
                        ].map((link, index) => (
                            <Link key={index} href={link.href}>
                                <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
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
