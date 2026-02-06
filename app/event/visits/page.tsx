'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Plane, Camera } from 'lucide-react';

const visits = [
    {
        title: 'Danish Delegation Visit',
        date: 'Coming Soon',
        location: 'Varanasi',
        description: 'Official visit from Danish research partners for collaborative project discussions.',
        highlights: ['Technology Transfer', 'Research Collaboration', 'Site Inspection']
    },
    {
        title: 'NMCG Officials Visit',
        date: 'Coming Soon',
        location: 'IIT BHU Campus',
        description: 'Review meeting with National Mission for Clean Ganga officials.',
        highlights: ['Progress Review', 'Policy Discussion', 'Future Planning']
    }
];

export default function VisitsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            {/* Hero Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -right-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-teal-400 text-sm font-medium uppercase mb-4 border border-teal-500/30">
                            Events
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">Visits</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Official visits and delegation meetings
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mx-auto mt-6" />
                    </motion.div>
                </div>
            </section>

            {/* Visits Grid */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {visits.map((visit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <div className="h-48 bg-gradient-to-br from-teal-500 to-green-500 relative flex items-center justify-center">
                                    <Plane className="w-20 h-20 text-white/30" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{visit.title}</h3>
                                    <p className="text-gray-600 mb-4">{visit.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {visit.highlights.map((highlight, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-teal-500" />
                                            <span>{visit.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-teal-500" />
                                            <span>{visit.location}</span>
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
