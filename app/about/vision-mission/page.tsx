'use client';

import { motion } from 'framer-motion';
import { Eye, Rocket } from 'lucide-react';

export default function VisionMissionPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                            Vision & Mission
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Guiding principles that drive SLCR&apos;s commitment to clean river rejuvenation and sustainable water management.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-purple-100 mb-8"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-purple-700">Vision</h2>
                        </div>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                            <p>
                                The vision of the Smart Laboratory on Clean Rivers (SLCR) is to emerge as a <strong className="text-purple-700">globally recognized center of excellence</strong> for clean river rejuvenation and sustainable water resources management, fostering resilient river ecosystems through innovation, collaboration, and science-driven solutions.
                            </p>
                            <p>
                                SLCR envisions a future where rivers are managed as living systems, supported by adaptive governance, technological innovation, and active participation of all stakeholders, ensuring ecological integrity and societal well-being.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-pink-100"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <Rocket className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-pink-700">Mission</h2>
                        </div>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                            <p>
                                The mission of SLCR is to establish a <strong className="text-pink-700">dynamic and inclusive living laboratory</strong> that enables learning, engagement, co-creation, and experimentation in real river environments.
                            </p>
                            <p>
                                SLCR is committed to strengthening the <strong className="text-pink-700">science–policy–practice interface</strong> by integrating research outputs, field observations, and policy frameworks into actionable strategies for river rejuvenation.
                            </p>
                            <p>
                                Through the India–Denmark partnership, SLCR seeks to <strong className="text-pink-700">leverage international expertise and shared knowledge</strong> to address complex water challenges, while ensuring solutions are locally relevant and scalable.
                            </p>
                            <p>
                                The mission further includes supporting national priorities such as river rejuvenation and sustainable water management by generating <strong className="text-pink-700">replicable models, decision-support tools, and institutional knowledge</strong> that can be adopted across river basins in India.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bottom spacing */}
            <div className="h-20" />
        </div>
    );
}
