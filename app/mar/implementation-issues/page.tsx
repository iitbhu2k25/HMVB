'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Construction, Users, Coins } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export default function ImplementationIssuesPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader
                title="MAR Implementation Issues"
                subtitle="Challenges and solutions for Managed Aquifer Recharge implementation in Varuna Basin"
                breadcrumb="Home / MAR Suitable Zones / Implementation Issues"
                icon={<AlertCircle className="w-8 h-8 text-white" />}
                gradient="from-orange-600 to-red-600"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-orange-100">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">Overview</h2>
                        <p className="text-gray-700 leading-relaxed">
                            While Managed Aquifer Recharge (MAR) offers significant potential for groundwater sustainability, successful implementation faces various technical, socio-economic, institutional, and environmental challenges that require careful planning and stakeholder collaboration to overcome.
                        </p>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
                    <h2 className="text-3xl font-black text-slate-800 mb-6 text-center">Key Implementation Challenges</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: Construction,
                                title: 'Technical Challenges',
                                color: 'orange',
                                issues: [
                                    'Site-specific hydrogeological complexity and heterogeneity',
                                    'Clogging of recharge structures due to suspended sediments',
                                    'Quality degradation of source water affecting aquifer',
                                    'Inadequate understanding of subsurface conditions',
                                    'Lack of standardized design guidelines for local conditions',
                                ]
                            },
                            {
                                icon: Users,
                                title: 'Social & Institutional',
                                color: 'red',
                                issues: [
                                    'Limited community awareness and acceptance of MAR',
                                    'Land ownership and access rights conflicts',
                                    'Weak institutional coordination among agencies',
                                    'Inadequate policy and regulatory frameworks',
                                    'Lack of trained personnel for operations and maintenance',
                                ]
                            },
                            {
                                icon: Coins,
                                title: 'Financial Constraints',
                                color: 'amber',
                                issues: [
                                    'High initial capital costs for infrastructure development',
                                    'Limited funding mechanisms and financial incentives',
                                    'Uncertainty in cost-benefit analysis and returns',
                                    'Operation and maintenance expenses',
                                    'Difficulty in establishing sustainable financing models',
                                ]
                            },
                            {
                                icon: AlertCircle,
                                title: 'Environmental Concerns',
                                color: 'yellow',
                                issues: [
                                    'Risk of aquifer contamination from poor quality recharge water',
                                    'Potential mobilization of naturally occurring contaminants',
                                    'Impact on existing ecosystems and water bodies',
                                    'Climate variability affecting water availability',
                                    'Long-term sustainability and monitoring challenges',
                                ]
                            },
                        ].map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-gradient-to-br from-${category.color}-50 to-white rounded-2xl p-6 shadow-lg border border-${category.color}-100`}
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                                    <category.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.issues.map((issue, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-${category.color}-500 mt-2" />
                                            <span>{issue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 sm:p-10">
                        <h2 className="text-3xl font-black text-slate-800 mb-6">Recommended Solutions</h2>
                        <div className="space-y-4">
                            {[
                                { title: 'Comprehensive Site Assessment', description: 'Conduct detailed hydrogeological investigations including TEM surveys, aquifer tests, and water quality analysis before site selection.' },
                                { title: 'Community Engagement', description: 'Involve local stakeholders from planning to implementation stages to ensure ownership and long-term sustainability.' },
                                { title: 'Pilot Projects', description: 'Start with small-scale demonstration projects to validate technical feasibility and build confidence before scaling up.' },
                                { title: 'Capacity Building', description: 'Training programs for engineers, administrators, and local communities on MAR technologies and management.' },
                                { title: 'Integrated Planning', description: 'Coordinate MAR interventions with other water resource management strategies including demand management and conservation.' },
                                { title: 'Monitoring Framework', description: 'Establish robust monitoring systems to track performance, water quality, and environmental impacts.' },
                            ].map((solution, index) => (
                                <div key={index} className="bg-white rounded-xl p-5 shadow-md border-l-4 border-emerald-500">
                                    <h4 className="font-bold text-slate-800 mb-2">{solution.title}</h4>
                                    <p className="text-gray-600 text-sm">{solution.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Related Sections</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { title: 'Water Available', href: '/mar/water-available' },
                            { title: 'MAR Sites', href: '/mar/sites' },
                            { title: 'Techniques of MAR', href: '/mar/techniques' },
                        ].map((link, index) => (
                            <Link key={index} href={link.href}>
                                <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
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
