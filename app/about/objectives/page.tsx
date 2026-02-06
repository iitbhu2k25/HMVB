'use client';

import { motion } from 'framer-motion';
import { Target, CheckCircle } from 'lucide-react';

export default function ObjectivesPage() {
    const objectives = [
        {
            title: 'Smart Living Laboratory',
            description: 'SLCR aims to function as a Smart Living Laboratory that integrates scientific research, policy evaluation, technological innovation, and field-level implementation within actual river systems. By combining virtual platforms with on-field experimentation, SLCR seeks to bridge the gap between theory and practice in river basin management.'
        },
        {
            title: 'Multi-stakeholder Engagement',
            description: 'A key objective of SLCR is to facilitate multi-stakeholder engagement by bringing together central and state government agencies, urban local bodies, academic institutions, research organizations, industries, and local communities. This collaborative ecosystem enables collective problem identification, solution co-creation, and coordinated action for clean river initiatives.'
        },
        {
            title: 'Global Best Practices',
            description: 'SLCR also focuses on the evaluation and localization of global best practices, including advanced technologies, governance frameworks, and sustainable policies in water resources management. These solutions are assessed for their applicability in Indian conditions, particularly for small and medium river systems.'
        },
        {
            title: 'Data-driven Decision Making',
            description: 'Another major objective is to promote data-driven and evidence-based decision-making by developing hydrological models, analytical tools, and decision support systems that support river health assessment, planning, and management.'
        },
        {
            title: 'Pilot-scale Solutions',
            description: 'SLCR aims to demonstrate pilot-scale solutions through its on-field Living Lab component, using selected river stretches as experimental sites. Successful interventions are further refined and prepared for upscaling at basin and national levels.'
        },
        {
            title: 'Capacity Building',
            description: 'In addition, SLCR is committed to capacity building and knowledge dissemination, supporting learning, training, and exchange of expertise among practitioners, policymakers, and researchers engaged in river rejuvenation and water management.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
                            <Target className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                            Objectives of SLCR
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            The Smart Laboratory on Clean Rivers (SLCR) has been established as a pioneering initiative under the India–Denmark partnership to support sustainable river rejuvenation through innovation, collaboration, and real-world experimentation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Objectives Grid */}
            <section className="py-12 px-4 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {objectives.map((objective, index) => (
                            <motion.div
                                key={objective.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-blue-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{objective.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-justify">{objective.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
