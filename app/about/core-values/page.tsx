'use client';

import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Lightbulb, Shield, Eye, Scale } from 'lucide-react';

const coreValues = [
    {
        icon: Leaf,
        title: 'Sustainability',
        description: 'Sustainability lies at the core of SLCR\'s approach, emphasizing environmentally sound, socially inclusive, and economically viable solutions for river and water resource management.',
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
    },
    {
        icon: Users,
        title: 'Collaboration and Partnership',
        description: 'Collaboration and Partnership are central to SLCR\'s functioning. The laboratory promotes active cooperation among government bodies, academic institutions, industries, and communities, recognizing that complex river challenges require collective action.',
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
    },
    {
        icon: Lightbulb,
        title: 'Innovation and Experimentation',
        description: 'Innovation and Experimentation drive SLCR\'s work culture. The laboratory encourages testing, learning, and refinement of innovative ideas through real-time field experimentation and adaptive management practices.',
        color: 'from-amber-500 to-orange-500',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200'
    },
    {
        icon: Shield,
        title: 'Scientific Integrity and Excellence',
        description: 'Scientific Integrity and Excellence guide all research and analytical activities at SLCR. Decisions and recommendations are grounded in robust data, rigorous analysis, and transparent methodologies.',
        color: 'from-purple-500 to-violet-500',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200'
    },
    {
        icon: Heart,
        title: 'Inclusivity and Community Engagement',
        description: 'Inclusivity and Community Engagement ensure that local knowledge, stakeholder perspectives, and societal needs are integrated into solution design and implementation.',
        color: 'from-rose-500 to-pink-500',
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-200'
    },
    {
        icon: Scale,
        title: 'Transparency and Accountability',
        description: 'Transparency and Accountability underpin governance and project implementation, fostering trust, responsible decision-making, and measurable outcomes.',
        color: 'from-teal-500 to-cyan-500',
        bgColor: 'bg-teal-50',
        borderColor: 'border-teal-200'
    }
];

export default function CoreValuesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
                            <Heart className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-500">
                            Core Values
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            The Smart Laboratory on Clean Rivers (SLCR) operates on a strong foundation of values that guide its activities, partnerships, and long-term impact.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-12 px-4 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`${value.bgColor} rounded-2xl p-6 border ${value.borderColor} hover:shadow-xl transition-all`}
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                                    <value.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-justify">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
