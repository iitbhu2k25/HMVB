'use client';

import { motion } from 'framer-motion';
import { MapPin, CheckCircle, Activity, Target } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export default function SitesPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader
                title="MAR Sites"
                subtitle="Identified Managed Aquifer Recharge sites across the Varuna River Basin"
                breadcrumb="Home / MAR Suitable Zones / MAR Sites"
                icon={<MapPin className="w-8 h-8 text-white" />}
                gradient="from-emerald-600 to-green-600"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-emerald-100">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">Site Selection Overview</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Based on comprehensive hydrogeological assessment, TEM surveys, groundwater potential zone mapping, and water availability analysis, multiple suitable sites have been identified across the Varuna River Basin for implementing various MAR techniques.
                        </p>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
                    <h2 className="text-3xl font-black text-slate-800 mb-6 text-center">Priority MAR Sites</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                id: 'VRB-MAR-01',
                                name: 'Site 1: Riverbank Recharge Zone',
                                type: 'Surface Spreading',
                                potential: 'Very High',
                                area: '12.5 hectares',
                                color: 'emerald'
                            },
                            {
                                id: 'VRB-MAR-02',
                                name: 'Site 2: Urban Recharge Basin',
                                type: 'Percolation Tank',
                                potential: 'High',
                                area: '8.3 hectares',
                                color: 'teal'
                            },
                            {
                                id: 'VRB-MAR-03',
                                name: 'Site 3: Agricultural Zone',
                                type: 'Check Dams',
                                potential: 'High',
                                area: '15.2 hectares',
                                color: 'green'
                            },
                            {
                                id: 'VRB-MAR-04',
                                name: 'Site 4: Fractured Rock Area',
                                type: 'Injection Wells',
                                potential: 'Moderate',
                                area: '6.8 hectares',
                                color: 'lime'
                            },
                            {
                                id: 'VRB-MAR-05',
                                name: 'Site 5: Shallow Aquifer Zone',
                                type: 'Recharge Shafts',
                                potential: 'High',
                                area: '10.1 hectares',
                                color: 'emerald'
                            },
                            {
                                id: 'VRB-MAR-06',
                                name: 'Site 6: Nallah Confluence',
                                type: 'Subsurface Dams',
                                potential: 'Very High',
                                area: '18.7 hectares',
                                color: 'green'
                            },
                        ].map((site, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-gradient-to-br from-${site.color}-50 to-white rounded-2xl p-6 shadow-lg border border-${site.color}-100 hover:shadow-xl transition-all`}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className={`w-10 h-10 bg-gradient-to-br from-${site.color}-500 to-${site.color}-600 rounded-lg flex items-center justify-center`}>
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-xs font-bold text-gray-500">{site.id}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-3">{site.name}</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-500">Type:</span>
                                        <span className="font-semibold text-gray-700">{site.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-500">Potential:</span>
                                        <span className={`font-semibold text-${site.color}-600`}>{site.potential}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-500">Area:</span>
                                        <span className="font-semibold text-gray-700">{site.area}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 sm:p-10">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">Site Selection Criteria</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: 'Hydrogeological Suitability', description: 'Presence of permeable formations, favorable aquifer characteristics, sufficient thickness' },
                                { title: 'Water Availability', description: 'Proximity to reliable water sources, adequate water quality, seasonal flow patterns' },
                                { title: 'Land Availability', description: 'Accessible land parcels, minimal land use conflicts, community acceptance' },
                                { title: 'Infrastructure Access', description: 'Proximity to roads, availability of power, ease of construction' },
                                { title: 'Environmental Impact', description: 'Minimal ecological disturbance, no sensitive habitats, sustainable practices' },
                                { title: 'Cost-Effectiveness', description: 'Reasonable construction costs, manageable O&M, favorable benefit-cost ratio' },
                            ].map((criterion, index) => (
                                <div key={index} className="bg-white rounded-xl p-5 shadow-md flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-1">{criterion.title}</h4>
                                        <p className="text-gray-600 text-sm">{criterion.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Related Sections</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { title: 'Implementation Issues', href: '/mar/implementation-issues' },
                            { title: 'Water Available', href: '/mar/water-available' },
                            { title: 'Techniques of MAR', href: '/mar/techniques' },
                        ].map((link, index) => (
                            <Link key={index} href={link.href}>
                                <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
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
