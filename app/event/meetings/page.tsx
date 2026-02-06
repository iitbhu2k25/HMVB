'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users2, FileText } from 'lucide-react';

const meetings = [
    {
        title: 'Monthly Project Review Meeting',
        date: 'Coming Soon',
        location: 'SLCR Secretariat',
        description: 'Regular review of ongoing projects and planning sessions.',
        agenda: ['Project Updates', 'Budget Review', 'Next Steps']
    },
    {
        title: 'Steering Committee Meeting',
        date: 'Coming Soon',
        location: 'Virtual',
        description: 'Strategic planning meeting with steering committee members.',
        agenda: ['Policy Decisions', 'Resource Allocation', 'Partnership Updates']
    }
];

export default function MeetingsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            {/* Hero Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-orange-400 text-sm font-medium uppercase mb-4 border border-orange-500/30">
                            Events
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Meetings</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Project coordination and strategic planning meetings
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mt-6" />
                    </motion.div>
                </div>
            </section>

            {/* Meetings Grid */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {meetings.map((meeting, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <div className="h-48 bg-gradient-to-br from-orange-500 to-amber-500 relative flex items-center justify-center">
                                    <Users2 className="w-20 h-20 text-white/30" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{meeting.title}</h3>
                                    <p className="text-gray-600 mb-4">{meeting.description}</p>
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-700 mb-2">Agenda:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {meeting.agenda.map((item, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-orange-500" />
                                            <span>{meeting.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-orange-500" />
                                            <span>{meeting.location}</span>
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
