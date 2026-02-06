'use client';

import { motion } from 'framer-motion';
import { Gauge, TrendingDown, TrendingUp, MapPin, Calendar } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export default function DepthPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader
                title="Groundwater Depth"
                subtitle="Real-time monitoring and analysis of groundwater depth levels across the Varuna River Basin"
                breadcrumb="Home / GroundWater Depth Quality / Depth"
                icon={<Gauge className="w-8 h-8 text-white" />}
                gradient="from-blue-600 to-blue-700"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                {/* Overview */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-100">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">
                            Overview
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Groundwater depth monitoring is a critical component of the HMVB project, providing essential data on water table levels, seasonal fluctuations, and long-term trends across the Varuna River Basin. Continuous monitoring helps identify areas of depletion, recharge zones, and supports sustainable water resource management.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our monitoring network employs automated sensors, manual measurements, and satellite-based remote sensing to track groundwater depth variations across different aquifer systems, geological formations, and land use patterns.
                        </p>
                    </div>
                </motion.section>

                {/* Key Metrics */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-black text-slate-800 mb-6 text-center">
                        Key Monitoring Metrics
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: TrendingDown,
                                title: 'Water Table Depth',
                                value: '12.5 - 45.8 m',
                                description: 'Current depth to water table across monitoring stations',
                                color: 'blue'
                            },
                            {
                                icon: Calendar,
                                title: 'Seasonal Variation',
                                value: '±3.2 - 8.5 m',
                                description: 'Annual fluctuation range in different zones',
                                color: 'cyan'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Long-term Trend',
                                description: 'Declining at 0.8m/year in critical areas',
                                color: 'orange'
                            },
                        ].map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-gradient-to-br from-${metric.color}-50 to-white rounded-2xl p-6 shadow-lg border border-${metric.color}-100`}
                            >
                                <div className={`w-12 h-12 bg-gradient-to-br from-${metric.color}-500 to-${metric.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                                    <metric.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{metric.title}</h3>
                                {metric.value && (
                                    <div className="text-2xl font-black text-blue-600 mb-2">{metric.value}</div>
                                )}
                                <p className="text-gray-600 text-sm">{metric.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Monitoring Methodology */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-12"
                >
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-10">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">
                            Monitoring Methodology
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: 'Automated Sensors',
                                    description: 'Pressure transducers and data loggers installed in monitoring wells provide continuous, real-time groundwater level measurements with hourly to daily data recording intervals.',
                                },
                                {
                                    title: 'Manual Measurements',
                                    description: 'Field teams conduct periodic manual depth measurements using water level meters for calibration and validation of automated sensor data across the monitoring network.',
                                },
                                {
                                    title: 'Spatial Coverage',
                                    description: 'Strategic placement of monitoring stations across different geological units, land use zones, and hydrological settings ensures comprehensive spatial representation.',
                                },
                                {
                                    title: 'Data Analysis',
                                    description: 'Advanced statistical methods, time series analysis, and GIS-based spatial interpolation generate actionable insights from raw depth measurements.',
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-md border border-blue-100"
                                >
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Applications */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-12"
                >
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-100">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">
                            Applications & Insights
                        </h2>

                        <ul className="space-y-4">
                            {[
                                'Identification of groundwater depletion zones requiring immediate intervention',
                                'Assessment of seasonal recharge patterns and aquifer response to monsoon rainfall',
                                'Validation of groundwater flow models and hydrological simulations',
                                'Early warning system for over-exploitation and critical water table decline',
                                'Supporting MAR site selection by identifying zones with sufficient storage capacity',
                                'Monitoring the impact of land use changes on groundwater levels',
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-blue-100 flex items-center justify-center">
                                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                                    </span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.section>

                {/* Related Pages */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Related Sections</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { title: 'Quality', href: '/groundwater/quality' },
                            { title: 'Potential Zone', href: '/groundwater/potential-zone' },
                            { title: 'Aquifer Type', href: '/groundwater/aquifer-type' },
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
