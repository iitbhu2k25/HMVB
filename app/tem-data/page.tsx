'use client';

import { motion } from 'framer-motion';
import { Activity, Zap, Layers, TrendingDown } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export default function TEMDataPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader
                title="TEM Data Visualization"
                subtitle="Transient Electromagnetic Method survey results and subsurface characterization"
                breadcrumb="Home / TEM Data Visualization"
                icon={<Activity className="w-8 h-8 text-white" />}
                gradient="from-amber-600 to-orange-600"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                {/* Overview */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-amber-100">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">
                            About TEM Surveys
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Transient Electromagnetic Method (TEM) is an advanced geophysical technique used to map subsurface electrical resistivity variations. In the HMVB project, TEM surveys provide crucial information about aquifer geometry, lithological variations, groundwater quality zones, and potential contamination pathways.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            TEM data visualization enables interpretation of complex subsurface features, delineation of aquifer boundaries, identification of clay/sand interfaces, and characterization of groundwater-bearing formations critical for sustainable water resource management.
                        </p>
                    </div>
                </motion.section>

                {/* Survey Statistics */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-black text-slate-800 mb-6 text-center">
                        Survey Statistics
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Zap,
                                label: 'Survey Points',
                                value: '156',
                                description: 'Across the basin',
                                color: 'amber'
                            },
                            {
                                icon: TrendingDown,
                                label: 'Max Depth',
                                value: '250 m',
                                description: 'Investigation depth',
                                color: 'orange'
                            },
                            {
                                icon: Layers,
                                label: 'Resistivity Range',
                                value: '5-500 Ωm',
                                description: 'Observed values',
                                color: 'red'
                            },
                            {
                                icon: Activity,
                                label: 'Data Points',
                                value: '12,480',
                                description: 'Total measurements',
                                color: 'rose'
                            },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-gradient-to-br from-${stat.color}-50 to-white rounded-2xl p-6 shadow-lg border border-${stat.color}-100 text-center`}
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                    <stat.icon className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-3xl font-black text-slate-800 mb-1">{stat.value}</div>
                                <div className="text-sm font-bold text-gray-700 mb-1">{stat.label}</div>
                                <div className="text-xs text-gray-500">{stat.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Resistivity Interpretation */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-12"
                >
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 sm:p-10">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">
                            Resistivity Interpretation Guide
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    range: '< 10 Ωm',
                                    interpretation: 'Clay/Shale',
                                    characteristics: 'Poor aquifer, low permeability, potential aquitard',
                                    waterQuality: 'May indicate saline water',
                                    color: 'slate'
                                },
                                {
                                    range: '10-30 Ωm',
                                    interpretation: 'Clayey Sand',
                                    characteristics: 'Moderate aquifer, mixed permeability',
                                    waterQuality: 'Fair quality groundwater',
                                    color: 'gray'
                                },
                                {
                                    range: '30-100 Ωm',
                                    interpretation: 'Sandy Aquifer',
                                    characteristics: 'Good aquifer, high permeability',
                                    waterQuality: 'Fresh groundwater',
                                    color: 'blue'
                                },
                                {
                                    range: '100-300 Ωm',
                                    interpretation: 'Coarse Sand/Gravel',
                                    characteristics: 'Excellent aquifer, very high permeability',
                                    waterQuality: 'High quality fresh water',
                                    color: 'cyan'
                                },
                                {
                                    range: '> 300 Ωm',
                                    interpretation: 'Consolidated Rock',
                                    characteristics: 'Fractured rock aquifer, variable yield',
                                    waterQuality: 'Depends on fracture connectivity',
                                    color: 'teal'
                                },
                            ].map((category, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl p-6 shadow-md border-l-4 border-${category.color}-500`}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-lg font-bold text-slate-800">{category.interpretation}</h3>
                                        <span className={`px-3 py-1 bg-${category.color}-100 text-${category.color}-700 text-xs font-bold rounded-full`}>
                                            {category.range}
                                        </span>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div>
                                            <span className="font-semibold text-gray-700">Aquifer Characteristics:</span>
                                            <p className="text-gray-600">{category.characteristics}</p>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-gray-700">Water Quality:</span>
                                            <p className="text-gray-600">{category.waterQuality}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Key Findings */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-12"
                >
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-amber-100">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">
                            Key Findings from TEM Surveys
                        </h2>

                        <div className="space-y-4">
                            {[
                                {
                                    title: 'Aquifer Delineation',
                                    description: 'Identified three major aquifer zones with varying thickness (15-80m) and lateral continuity across the basin.',
                                },
                                {
                                    title: 'Clay Layer Mapping',
                                    description: 'Mapped extensive clay layers at depths of 30-50m acting as aquitards, separating shallow and deep aquifer systems.',
                                },
                                {
                                    title: 'High Resistivity Zones',
                                    description: 'Detected zones with resistivity >200 Ωm indicating fresh groundwater potential and favorable recharge conditions.',
                                },
                                {
                                    title: 'Saline Water Intrusion',
                                    description: 'Low resistivity zones (<10 Ωm) in specific localities suggest possible saline water influence or clay-rich formations.',
                                },
                                {
                                    title: 'MAR Site Validation',
                                    description: 'TEM data confirms suitability of proposed MAR sites by revealing permeable formations and adequate aquifer thickness.',
                                },
                                {
                                    title: 'Fracture Zone Detection',
                                    description: 'Identified potential fracture zones in consolidated formations that may serve as preferential groundwater pathways.',
                                },
                            ].map((finding, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100"
                                >

                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                                        <Layers className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-1">{finding.title}</h4>
                                        <p className="text-gray-600 text-sm">{finding.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Applications */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-3xl p-8 sm:p-10 shadow-2xl">
                        <h2 className="text-3xl font-black mb-6">
                            Applications in HMVB Project
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                'Groundwater potential zone mapping and aquifer characterization',
                                'MAR site selection and feasibility assessment',
                                'Hydrogeological model development and calibration',
                                'Groundwater quality zonation and contamination risk assessment',
                                'Well site selection and optimal drilling depth determination',
                                'Integration with other geophysical and hydrogeological data',
                            ].map((application, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Activity className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span>{application}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
