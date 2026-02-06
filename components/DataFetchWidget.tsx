'use client';

import { useState } from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface FetchedData {
    timestamp: string;
    latitude: number;
    longitude: number;
    location: string;
}

export default function DataFetchWidget() {
    const [data, setData] = useState<FetchedData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            // Simulate API call - Replace with actual API endpoint when available
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mock data - Replace with actual API response
            const mockData: FetchedData = {
                timestamp: new Date().toISOString(),
                latitude: 25.2677,
                longitude: 82.9913,
                location: 'Varuna River Basin Monitoring Station - VRB-01'
            };

            setData(mockData);
        } catch (err) {
            setError('Failed to fetch data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatTime = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl p-8 shadow-xl border-2 border-blue-100">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Real-Time HMVB Data
                </h3>
                <p className="text-gray-600">
                    Access live data from our monitoring network
                </p>
            </div>

            <div className="flex justify-center mb-6">
                <button
                    onClick={handleFetchData}
                    disabled={loading}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                    {loading ? (
                        <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Fetching Data...
                        </span>
                    ) : (
                        'Fetch Latest Data from HMVB App'
                    )}
                </button>
            </div>

            {error && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-center"
                >
                    {error}
                </motion.div>
            )}

            {data && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                >
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Date & Time */}
                        <div className="bg-white rounded-xl p-5 shadow-md border border-blue-100">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 font-medium">Date</div>
                                    <div className="text-lg font-bold text-slate-800">
                                        {formatDate(data.timestamp)}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-5 shadow-md border border-cyan-100">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 font-medium">Time</div>
                                    <div className="text-lg font-bold text-slate-800">
                                        {formatTime(data.timestamp)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coordinates */}
                    <div className="bg-white rounded-xl p-5 shadow-md border border-blue-100">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm text-gray-500 font-medium mb-2">Coordinates</div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-xs text-gray-500">Latitude</span>
                                        <div className="text-lg font-bold text-slate-800">{data.latitude}°</div>
                                    </div>
                                    <div>
                                        <span className="text-xs text-gray-500">Longitude</span>
                                        <div className="text-lg font-bold text-slate-800">{data.longitude}°</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-5 shadow-md text-white">
                        <div className="text-sm font-medium mb-1 opacity-90">Monitoring Station</div>
                        <div className="text-lg font-bold">{data.location}</div>
                    </div>
                </motion.div>
            )}

            {!data && !error && !loading && (
                <div className="text-center text-gray-500 py-8">
                    <svg className="w-16 h-16 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p>Click the button above to fetch latest data</p>
                </div>
            )}
        </div>
    );
}
