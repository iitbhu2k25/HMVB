'use client';

import { motion } from 'framer-motion';
import { Target, Map, Droplets, TrendingUp } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export default function PotentialZonePage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader
                title="Groundwater Potential Zones"
                subtitle="Mapping and characterization of high-potential groundwater zones in the Varuna River Basin"
                breadcrumb="Home / GroundWater Depth Quality / Potential Zone"
                icon={<Target className="w-8 h-8 text-white" />}
                gradient="from-teal-600 to-emerald-600"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-teal-100">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">Overview</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Groundwater potential zone mapping is crucial for identifying areas with high groundwater availability, recharge capacity, and sustainable extraction potential. This analysis combines geological, hydrological, geophysical, and remote sensing data to delineate zones suitable for groundwater development.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The HMVB project employs multi-criteria decision analysis, GIS-based modeling, and field validation to generate accurate potential zone maps that guide water resource planning and MAR site selection.
                        </p>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
                    <h2 className="text-3xl font-black text-slate-800 mb-6 text-center">Zone Classification</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { label: 'Very High', color: 'emerald', percentage: '15%', description: 'Excellent recharge & storage' },
                            { label: 'High', color: 'teal', percentage: '28%', description: 'Good groundwater prospects' },
                            { label: 'Moderate', color: 'yellow', percentage: '35%', description: 'Fair potential with limitations' },
                            { label: 'Low', color: 'red', percentage: '22%', description: 'Limited groundwater availability' },
                        ].map((zone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-gradient-to-br from-${zone.color}-50 to-white rounded-2xl p-6 shadow-lg border-2 border-${zone.color}-200`}
                            >
                                <div className="text-2xl font-black text-${zone.color}-600 mb-2">{zone.label}</div>
                                <div className="text-3xl font-black text-slate-800 mb-2">{zone.percentage}</div>
                                <p className="text-sm text-gray-600">{zone.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
                    <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 sm:p-10">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">Analysis Factors</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: 'Geology & Lithology', description: 'Rock type, porosity, permeability, and aquifer formation characteristics.' },
                                { title: 'Geomorphology', description: 'Landforms, slope, drainage patterns, and surface water features.' },
                                { title: 'Soil Properties', description: 'Soil texture, infiltration capacity, and water retention characteristics.' },
                                { title: 'Land Use & Cover', description: 'Vegetation cover, urbanization, and anthropogenic impacts on recharge.' },
                                { title: 'Rainfall & Climate', description: 'Precipitation patterns, evapotranspiration, and seasonal variations.' },
                                { title: 'Lineament Density', description: 'Structural features like faults and fractures enhancing groundwater flow.' },
                            ].map((factor, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-teal-100">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">{factor.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{factor.description}</p>
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
                            { title: 'Aquifer Type', href: '/groundwater/aquifer-type' },
                        ].map((link, index) => (
                            <Link key={index} href={link.href}>
                                <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
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
