'use client';

import { motion } from 'framer-motion';
import { Layers, Droplets, Mountain, Waves } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export default function AquiferTypePage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader
                title="Aquifer Type Classification"
                subtitle="Geological characterization of aquifer systems in the Varuna River Basin"
                breadcrumb="Home / GroundWater Depth Quality / Aquifer Type"
                icon={<Layers className="w-8 h-8 text-white" />}
                gradient="from-indigo-600 to-purple-600"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-indigo-100">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">Overview</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Understanding aquifer types is fundamental to groundwater resource assessment and management. The Varuna River Basin hosts diverse aquifer systems with varying hydraulic properties, storage capacities, and groundwater flow characteristics.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Aquifer classification based on geological formations, lithology, and hydrogeological properties enables targeted groundwater development strategies and sustainable extraction planning.
                        </p>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
                    <h2 className="text-3xl font-black text-slate-800 mb-6 text-center">Major Aquifer Types</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: Mountain,
                                title: 'Alluvial Aquifers',
                                description: 'Unconsolidated sediments including sand, gravel, and clay deposits. High porosity and permeability. Primary aquifer system in river valleys and flood plains.',
                                properties: ['High Yield', 'Good Recharge', 'Unconfined to Semi-confined'],
                                color: 'blue'
                            },
                            {
                                icon: Layers,
                                title: 'Fractured Rock Aquifers',
                                description: 'Hard rock formations with groundwater storage in fractures, joints, and weathered zones. Common in basement rocks and consolidated sedimentary formations.',
                                properties: ['Moderate Yield', 'Localized Storage', 'Unconfined'],
                                color: 'indigo'
                            },
                            {
                                icon: Droplets,
                                title: 'Sandstone Aquifers',
                                description: 'Porous sedimentary rocks with intergranular porosity. Good storage and transmission properties. Often form multi-layered aquifer systems.',
                                properties: ['Good Yield', 'Extensive', 'Confined to Unconfined'],
                                color: 'purple'
                            },
                            {
                                icon: Waves,
                                title: 'Weathered Zone Aquifers',
                                description: 'Shallow aquifers in weathered mantle over hard rocks. Limited thickness but important for shallow wells and local water supply.',
                                properties: ['Low to Moderate Yield', 'Seasonal Variation', 'Unconfined'],
                                color: 'violet'
                            },
                        ].map((aquifer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-gradient-to-br from-${aquifer.color}-50 to-white rounded-2xl p-6 shadow-lg border border-${aquifer.color}-100`}
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br from-${aquifer.color}-500 to-${aquifer.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                                    <aquifer.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{aquifer.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">{aquifer.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {aquifer.properties.map((prop, i) => (
                                        <span key={i} className={`px-3 py-1 bg-${aquifer.color}-100 text-${aquifer.color}-700 text-xs font-semibold rounded-full`}>
                                            {prop}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 sm:p-10">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">Hydraulic Characteristics</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: 'Transmissivity', description: 'Ability to transmit water horizontally', range: '10 - 500 m²/day' },
                                { title: 'Specific Yield', description: 'Volume of water released per unit area', range: '5 - 25%' },
                                { title: 'Hydraulic Conductivity', description: 'Rate of water movement through aquifer', range: '0.1 - 50 m/day' },
                            ].map((param, index) => (
                                <div key={index} className="bg-white rounded-xl p-5 shadow-md">
                                    <h4 className="font-bold text-slate-800 mb-2">{param.title}</h4>
                                    <p className="text-sm text-gray-600 mb-2">{param.description}</p>
                                    <div className="text-lg font-bold text-indigo-600">{param.range}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Related Sections</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { title: 'Depth', href: '/groundwater/depth' },
                            { title: 'Quality', href: '/groundwater/quality' },
                            { title: 'Potential Zone', href: '/groundwater/potential-zone' },
                        ].map((link, index) => (
                            <Link key={index} href={link.href}>
                                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
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
