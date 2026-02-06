'use client';

import { motion } from 'framer-motion';
import { BookOpen, Target, Users, Award, CheckCircle2, Eye, Heart, Lightbulb, Shield, Zap } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50">

            <div className="space-y-0">

                {/* ========== OVERVIEW SECTION ========== */}
                <motion.section
                    id="overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative min-h-screen flex items-center scroll-mt-24 py-20"
                >
                    {/* Background Image - Full Screen */}
                    <div className="absolute inset-0">
                        <Image
                            src="/home/varuna-river.png"
                            alt="Varuna River"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-cyan-900/80" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
                        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border border-blue-200">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-black text-slate-800">
                                    Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Overview</span>
                                </h2>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                                <p>
                                    The <strong>Hydrogeological Models of the Varuna Basin (HMVB)</strong> project focuses on
                                    assessing and enhancing River-Aquifer Exchanges (RAE) in the Varuna River Basin,
                                    a tributary of the Ganga, to address declining baseflow and groundwater depletion.
                                </p>
                                <p>
                                    The primary challenge lies in understanding the complex riverbed lithology, which governs
                                    groundwater interactions but remains difficult to map using conventional methods.
                                    To overcome this, the study integrates advanced geophysical techniques (heliborne,
                                    surface-borne and river-borne TEM surveys), real-time IoT-based monitoring and
                                    numerical groundwater modelling to comprehensively assess river-aquifer dynamics.
                                </p>
                            </div>

                            {/* Project Outcomes */}
                            <div className="mt-8 pt-8 border-t border-blue-100">
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Project Outcomes</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Quantifying groundwater contributions to the river and vice versa, assessing pollution plumes.",
                                        "Developing an RAE model for optimized Managed Aquifer Recharge (MAR) site selection.",
                                        "Comparing heliborne and river-borne TEM surveys to refine subsurface characterization methodologies.",
                                        "Enhanced capacity of local stakeholders in technology transfer and wider techniques."
                                    ].map((outcome, idx) => (
                                        <div key={idx} className="flex items-start space-x-3 bg-blue-50/50 p-4 rounded-xl">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                            <p className="text-slate-700 text-sm font-medium">{outcome}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========== OBJECTIVES SECTION ========== */}
                <motion.section
                    id="objectives"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative min-h-screen flex items-center scroll-mt-24 py-20"
                >
                    {/* Background Image - Full Screen */}
                    <div className="absolute inset-0">
                        <Image
                            src="/home/monitoring-station.png"
                            alt="Monitoring Station"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-teal-800/70 to-blue-900/80" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                                Project Objectives
                            </h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: Target,
                                    title: 'Comprehensive Monitoring',
                                    description: 'Establish a robust monitoring network for continuous tracking of groundwater depth and quality parameters.',
                                    gradient: 'from-blue-500 to-blue-600'
                                },
                                {
                                    icon: Users,
                                    title: 'Stakeholder Engagement',
                                    description: 'Facilitate collaboration among government agencies, research institutions, and local communities.',
                                    gradient: 'from-cyan-500 to-cyan-600'
                                },
                                {
                                    icon: Award,
                                    title: 'Scientific Excellence',
                                    description: 'Apply advanced hydrological modelling, TEM surveys, and data analytics for accurate assessment.',
                                    gradient: 'from-teal-500 to-teal-600'
                                },
                                {
                                    icon: Lightbulb,
                                    title: 'MAR Implementation',
                                    description: 'Identify suitable zones for Managed Aquifer Recharge to enhance groundwater sustainability.',
                                    gradient: 'from-emerald-500 to-emerald-600'
                                },
                            ].map((objective, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:border-cyan-200 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${objective.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <objective.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">{objective.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{objective.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* ========== VISION & MISSION SECTION ========== */}
                <motion.section
                    id="vision-mission"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative min-h-screen flex items-center scroll-mt-24 py-20"
                >
                    {/* Background Image - Full Screen */}
                    <div className="absolute inset-0">
                        <Image
                            src="/home/terrain-model.png"
                            alt="Terrain Model"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-emerald-800/70 to-cyan-900/80" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                                Vision & Mission
                            </h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mx-auto" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Vision */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        <Eye className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-black">Our Vision</h3>
                                </div>
                                <p className="text-blue-50 leading-relaxed">
                                    To establish a sustainable and resilient water resource management framework for the Varuna River Basin that ensures long-term groundwater security, enhances river-aquifer connectivity, and empowers communities with knowledge-driven solutions for sustainable water use.
                                </p>
                            </motion.div>

                            {/* Mission */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 text-white shadow-2xl"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-black">Our Mission</h3>
                                </div>
                                <ul className="text-teal-50 leading-relaxed space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Deploy advanced monitoring systems for real-time groundwater tracking</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Develop comprehensive hydrological models using TEM surveys</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Identify and implement Managed Aquifer Recharge (MAR) strategies</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* ========== CORE VALUES SECTION ========== */}
                <motion.section
                    id="core-values"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative min-h-screen flex items-center scroll-mt-24 py-20"
                >
                    {/* Background Image - Full Screen */}
                    <div className="absolute inset-0">
                        <Image
                            src="/home/varuna-river.png"
                            alt="Varuna River"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-indigo-800/70 to-cyan-900/80" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                                Core Values
                            </h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mx-auto" />
                            <p className="text-white/90 mt-4 max-w-2xl mx-auto">
                                Our fundamental principles that guide every aspect of the HMVB project
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: Award,
                                    title: 'Scientific Rigor',
                                    description: 'Evidence-based approaches using cutting-edge technologies and methodologies',
                                    bgClass: 'bg-blue-100',
                                    iconClass: 'text-blue-600'
                                },
                                {
                                    icon: Users,
                                    title: 'Collaboration',
                                    description: 'Partnership with stakeholders for inclusive and participatory development',
                                    bgClass: 'bg-cyan-100',
                                    iconClass: 'text-cyan-600'
                                },
                                {
                                    icon: Shield,
                                    title: 'Sustainability',
                                    description: 'Long-term water security through responsible resource management',
                                    bgClass: 'bg-teal-100',
                                    iconClass: 'text-teal-600'
                                },
                                {
                                    icon: Zap,
                                    title: 'Innovation',
                                    description: 'Pioneering solutions leveraging IoT, AI, and geophysical techniques',
                                    bgClass: 'bg-emerald-100',
                                    iconClass: 'text-emerald-600'
                                },
                                {
                                    icon: Heart,
                                    title: 'Community Focus',
                                    description: 'Prioritizing local needs and empowering communities with knowledge',
                                    bgClass: 'bg-rose-100',
                                    iconClass: 'text-rose-600'
                                },
                                {
                                    icon: Target,
                                    title: 'Results-Oriented',
                                    description: 'Delivering measurable outcomes that create tangible impact',
                                    bgClass: 'bg-indigo-100',
                                    iconClass: 'text-indigo-600'
                                },
                                {
                                    icon: CheckCircle2,
                                    title: 'Transparency',
                                    description: 'Open data sharing and clear communication with all stakeholders',
                                    bgClass: 'bg-purple-100',
                                    iconClass: 'text-purple-600'
                                },
                                {
                                    icon: Lightbulb,
                                    title: 'Knowledge Sharing',
                                    description: 'Building capacity through training and technology transfer',
                                    bgClass: 'bg-amber-100',
                                    iconClass: 'text-amber-600'
                                },
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 group"
                                >
                                    <div className={`w-12 h-12 ${value.bgClass} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <value.icon className={`w-6 h-6 ${value.iconClass}`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">{value.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* ========== EXPECTED IMPACT SECTION ========== */}
                <motion.section
                    id="expected-impact"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative min-h-screen flex items-center scroll-mt-24 py-20"
                >
                    {/* Background Image - Full Screen */}
                    <div className="absolute inset-0">
                        <Image
                            src="/home/monitoring-station.png"
                            alt="Monitoring Station"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-cyan-800/75 to-teal-900/85" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-black">
                                        Expected Impact
                                    </h2>
                                </div>

                                <p className="text-blue-50 text-lg leading-relaxed mb-8">
                                    The HMVB project is expected to significantly contribute to sustainable water resource management in the Varuna River Basin, providing actionable insights for policy-makers, enhancing groundwater resilience, and serving as a model for similar basins facing water scarcity challenges.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { value: '1000+', label: 'Beneficiaries' },
                                        { value: '5+', label: 'Districts Covered' },
                                        { value: '50%', label: 'Water Security Improvement' },
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                                        >
                                            <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                                            <div className="text-sm text-blue-100 mt-1">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            {/* Decorative circles */}
                            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                            <div className="absolute -top-12 -left-12 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
                        </div>
                    </div>
                </motion.section>

            </div>
        </div>
    );
}