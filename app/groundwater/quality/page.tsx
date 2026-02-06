'use client';

import { motion } from 'framer-motion';
import { FlaskConical, Droplets, AlertTriangle, CheckCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export default function QualityPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader
                title="Groundwater Quality"
                subtitle="Comprehensive water quality monitoring and analysis for the Varuna River Basin"
                breadcrumb="Home / GroundWater Depth Quality / Quality"
                icon={<FlaskConical className="w-8 h-8 text-white" />}
                gradient="from-cyan-600 to-teal-600"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                {/* Overview */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-cyan-100">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">
                            Overview
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Groundwater quality monitoring is essential for ensuring safe drinking water, protecting public health, and maintaining ecosystem integrity. The HMVB project conducts comprehensive analysis of physical, chemical, and biological parameters across the Varuna River Basin to assess water suitability for various uses.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Regular sampling and laboratory analysis help identify contamination sources, track pollution trends, and support evidence-based water quality management and remediation strategies.
                        </p>
                    </div>
                </motion.section>

                {/* Key Parameters */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-black text-slate-800 mb-6 text-center">
                        Monitored Parameters
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                category: 'Physical Parameters',
                                items: ['pH', 'Temperature', 'Turbidity', 'Total Dissolved Solids (TDS)', 'Electrical Conductivity'],
                                color: 'blue',
                                icon: Droplets
                            },
                            {
                                category: 'Chemical Parameters',
                                items: ['Nitrate', 'Fluoride', 'Arsenic', 'Iron', 'Chloride', 'Hardness', 'Heavy Metals'],
                                color: 'cyan',
                                icon: FlaskConical
                            },
                            {
                                category: 'Biological Parameters',
                                items: ['Total Coliform', 'E. coli', 'Fecal Streptococci', 'Biological Oxygen Demand'],
                                color: 'teal',
                                icon: AlertTriangle
                            },
                        ].map((group, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-gradient-to-br from-${group.color}-50 to-white rounded-2xl p-6 shadow-lg border border-${group.color}-100`}
                            >
                                <div className={`w-12 h-12 bg-gradient-to-br from-${group.color}-500 to-${group.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                                    <group.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">{group.category}</h3>
                                <ul className="space-y-2">
                                    {group.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                            <CheckCircle className={`w-4 h-4 text-${group.color}-500 flex-shrink-0`} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Water Quality Index */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-12"
                >
                    <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl p-8 sm:p-10">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">
                            Water Quality Classification
                        </h2>

                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                { label: 'Excellent', range: '0-25', color: 'green', description: 'Safe for all uses' },
                                { label: 'Good', range: '26-50', color: 'blue', description: 'Suitable for drinking' },
                                { label: 'Poor', range: '51-75', color: 'yellow', description: 'Requires treatment' },
                                { label: 'Very Poor', range: '76-100', color: 'red', description: 'Unfit for direct use' },
                            ].map((category, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-xl p-5 text-center shadow-md border-2 border-${category.color}-200`}
                                >
                                    <div className={`text-2xl font-black text-${category.color}-600 mb-2`}>
                                        {category.label}
                                    </div>
                                    <div className="text-lg font-bold text-gray-700 mb-2">
                                        {category.range}
                                    </div>
                                    <p className="text-sm text-gray-600">{category.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Sampling & Analysis */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-12"
                >
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-cyan-100">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">
                            Sampling & Analysis Protocol
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: 'Sample Collection',
                                    description: 'Systematic water sampling from monitoring wells, hand pumps, and surface water-groundwater interaction zones following standard protocols for preservation and transport.',
                                },
                                {
                                    title: 'Laboratory Analysis',
                                    description: 'Advanced analytical techniques including atomic absorption spectroscopy, ion chromatography, and microbiological culture methods ensure accurate parameter quantification.',
                                },
                                {
                                    title: 'Quality Assurance',
                                    description: 'Rigorous QA/QC protocols including duplicate samples, blanks, and certified reference materials ensure data reliability and analytical accuracy.',
                                },
                                {
                                    title: 'Data Interpretation',
                                    description: 'Comparison with national and international drinking water standards (BIS, WHO) to assess water suitability and identify exceedances requiring intervention.',
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-6 shadow-md border border-cyan-100"
                                >
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Key Findings */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-12"
                >
                    <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-3xl p-8 sm:p-10 shadow-2xl">
                        <h2 className="text-3xl font-black mb-6">
                            Key Quality Concerns
                        </h2>

                        <ul className="space-y-3">
                            {[
                                'Elevated nitrate concentrations in agricultural areas due to fertilizer application',
                                'High fluoride levels in certain geological formations affecting dental health',
                                'Bacterial contamination near urban settlements lacking proper sanitation',
                                'Increasing salinity trends in over-exploited zones',
                                'Trace metal contamination from industrial activities in specific localities',
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.section>

                {/* Related Pages */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                >
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Related Sections</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { title: 'Depth', href: '/groundwater/depth' },
                            { title: 'Potential Zone', href: '/groundwater/potential-zone' },
                            { title: 'Aquifer Type', href: '/groundwater/aquifer-type' },
                        ].map((link, index) => (
                            <Link key={index} href={link.href}>
                                <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
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
