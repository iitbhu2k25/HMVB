'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Presentation, Clock } from 'lucide-react';

const seminars = [
    {
        title: 'River Restoration Technologies',
        date: 'Coming Soon',
        location: 'IIT BHU Campus',
        description: 'Expert lectures on cutting-edge technologies for river health restoration.',
        speaker: 'International Experts',
    },
    {
        title: 'Sustainable Water Management',
        date: 'Coming Soon',
        location: 'Virtual',
        description: 'Seminars on sustainable approaches to water resource management.',
        speaker: 'SLCR Faculty',
    }
];

export default function SeminarsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            {/* Hero Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-purple-400 text-sm font-medium uppercase mb-4 border border-purple-500/30">
                            Events
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Seminars</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Expert lectures and knowledge sharing sessions
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-6" />
                    </motion.div>
                </div>
            </section>

            {/* Seminars Grid */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {seminars.map((seminar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative flex items-center justify-center">
                                    <Presentation className="w-20 h-20 text-white/30" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{seminar.title}</h3>
                                    <p className="text-gray-600 mb-4">{seminar.description}</p>
                                    <p className="text-purple-600 font-medium mb-4">Speaker: {seminar.speaker}</p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-purple-500" />
                                            <span>{seminar.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-purple-500" />
                                            <span>{seminar.location}</span>
                                        </div>
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
