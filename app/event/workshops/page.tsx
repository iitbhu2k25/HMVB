'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import Image from 'next/image';

// Placeholder event data - can be updated with real content
const workshops = [
    {
        title: 'Water Quality Monitoring Workshop',
        date: 'Coming Soon',
        location: 'IIT BHU Campus',
        description: 'Hands-on training on advanced water quality monitoring techniques and equipment.',
        image: '/event/workshop1.jpg',
        participants: '50+'
    },
    {
        title: 'Data Analytics for River Management',
        date: 'Coming Soon',
        location: 'Virtual',
        description: 'Workshop on using data analytics tools for effective river basin management.',
        image: '/event/workshop2.jpg',
        participants: '100+'
    }
];

export default function WorkshopsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            {/* Hero Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-cyan-400 text-sm font-medium uppercase mb-4 border border-cyan-500/30">
                            Events
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Workshops</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Hands-on training sessions and capacity building programs
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto mt-6" />
                    </motion.div>
                </div>
            </section>

            {/* Workshops Grid */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    {workshops.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-8">
                            {workshops.map((workshop, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                                >
                                    <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 relative flex items-center justify-center">
                                        <Users className="w-20 h-20 text-white/30" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                                                {workshop.participants} Participants
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{workshop.title}</h3>
                                        <p className="text-gray-600 mb-4">{workshop.description}</p>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-blue-500" />
                                                <span>{workshop.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-blue-500" />
                                                <span>{workshop.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                                <Calendar className="w-12 h-12 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Workshops Coming Soon</h3>
                            <p className="text-gray-600">Stay tuned for upcoming workshop announcements</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
