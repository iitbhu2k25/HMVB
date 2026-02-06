'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Lock, User, Eye, EyeOff, CheckCircle, MapPin, Calendar, Activity } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export default function DataAccessPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState<any>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate API call delay
        setTimeout(() => {
            if (loginData.email === 'admin@gmail.com' && loginData.password === 'admin@gmail.com') {
                setIsAuthenticated(true);
                setError('');
            } else {
                setError('Invalid credentials. Please use admin@gmail.com for both email and password.');
            }
            setIsLoading(false);
        }, 800);
    };

    const fetchData = () => {
        setIsLoading(true);

        // Simulate data fetching from HMVB app
        setTimeout(() => {
            setFetchedData({
                timestamp: new Date().toISOString(),
                location: {
                    latitude: 25.3176,
                    longitude: 82.9739,
                    place: 'Varanasi, Uttar Pradesh'
                },
                measurements: [
                    { parameter: 'Groundwater Depth', value: '12.5 m', status: 'Normal', trend: 'stable' },
                    { parameter: 'Water Quality Index', value: '72.3', status: 'Good', trend: 'improving' },
                    { parameter: 'TDS Level', value: '450 ppm', status: 'Acceptable', trend: 'stable' },
                    { parameter: 'pH Level', value: '7.2', status: 'Optimal', trend: 'stable' },
                    { parameter: 'Temperature', value: '22.5°C', status: 'Normal', trend: 'stable' },
                    { parameter: 'Dissolved Oxygen', value: '6.8 mg/L', status: 'Good', trend: 'improving' }
                ],
                surveyInfo: {
                    totalPoints: 156,
                    activeStations: 12,
                    lastUpdate: '5 minutes ago'
                }
            });
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen relative">
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/home/monitoring-station.png"
                    alt="HMVB Data Access"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-cyan-900/85 to-teal-900/90" />
            </div>

            <div className="relative z-10">
                <PageHeader
                    title="HMVB Data Access"
                    subtitle="Secure access to real-time hydrological data from Varuna River Basin"
                    breadcrumb="Home / Data Access"
                    icon={<Database className="w-8 h-8 text-white" />}
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
                    <AnimatePresence mode="wait">
                        {!isAuthenticated ? (
                            // LOGIN FORM
                            <motion.div
                                key="login"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="max-w-md mx-auto"
                            >
                                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-200">
                                    {/* Login Header */}
                                    <div className="text-center mb-8">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <Lock className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-2xl font-black text-slate-800 mb-2">Login Required</h2>
                                        <p className="text-gray-600 text-sm">Enter your credentials to access HMVB data</p>
                                    </div>

                                    {/* Login Form */}
                                    <form onSubmit={handleLogin} className="space-y-5">
                                        {/* Email Field */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="email"
                                                    value={loginData.email}
                                                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                                    placeholder="admin@gmail.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Password Field */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Password
                                            </label>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    value={loginData.password}
                                                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                                    className="w-full pl-11 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                                    placeholder="••••••••"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Error Message */}
                                        {error && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm"
                                            >
                                                {error}
                                            </motion.div>
                                        )}

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-xl transition-all hover:shadow-lg disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Authenticating...
                                                </>
                                            ) : (
                                                'Login to Access Data'
                                            )}
                                        </button>
                                    </form>

                                    {/* Hint */}
                                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                        <p className="text-xs text-blue-800 font-medium text-center">
                                            <strong>Demo Credentials:</strong> admin@gmail.com / admin@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            // DATA DISPLAY SECTION
                            <motion.div
                                key="data"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-6"
                            >
                                {/* Welcome Header */}
                                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-blue-200">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                                                <CheckCircle className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-800">Access Granted</h3>
                                                <p className="text-sm text-gray-600">Welcome, Admin</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                setIsAuthenticated(false);
                                                setFetchedData(null);
                                                setLoginData({ email: '', password: '' });
                                            }}
                                            className="px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>

                                {/* Fetch Data Button */}
                                {!fetchedData && (
                                    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-blue-200 text-center">
                                        <Database className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Ready to Fetch Data</h3>
                                        <p className="text-gray-600 mb-6">Click below to retrieve the latest data from HMVB app</p>
                                        <button
                                            onClick={fetchData}
                                            disabled={isLoading}
                                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-xl transition-all hover:shadow-lg disabled:cursor-not-allowed inline-flex items-center gap-2"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Fetching Data...
                                                </>
                                            ) : (
                                                'Fetch Latest Data from HMVB App'
                                            )}
                                        </button>
                                    </div>
                                )}

                                {/* Fetched Data Display */}
                                {fetchedData && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="space-y-6"
                                    >
                                        {/* Metadata */}
                                        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-blue-200">
                                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                                <Activity className="w-6 h-6 text-blue-600" />
                                                Data Retrieved Successfully
                                            </h3>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div className="bg-blue-50 rounded-xl p-4">
                                                    <Calendar className="w-5 h-5 text-blue-600 mb-2" />
                                                    <div className="text-xs text-gray-600">Timestamp</div>
                                                    <div className="text-sm font-bold text-slate-800">{new Date(fetchedData.timestamp).toLocaleString()}</div>
                                                </div>
                                                <div className="bg-cyan-50 rounded-xl p-4">
                                                    <MapPin className="w-5 h-5 text-cyan-600 mb-2" />
                                                    <div className="text-xs text-gray-600">Location</div>
                                                    <div className="text-sm font-bold text-slate-800">{fetchedData.location.place}</div>
                                                </div>
                                                <div className="bg-teal-50 rounded-xl p-4">
                                                    <Database className="w-5 h-5 text-teal-600 mb-2" />
                                                    <div className="text-xs text-gray-600">Survey Points</div>
                                                    <div className="text-sm font-bold text-slate-800">{fetchedData.surveyInfo.totalPoints} Active</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Measurements */}
                                        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-blue-200">
                                            <h3 className="text-xl font-bold text-slate-800 mb-4">Measurement Data</h3>
                                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {fetchedData.measurements.map((measurement: any, index: number) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.05 }}
                                                        className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-4 border border-gray-200"
                                                    >
                                                        <div className="text-xs font-semibold text-gray-600 mb-1">{measurement.parameter}</div>
                                                        <div className="text-2xl font-black text-slate-800 mb-2">{measurement.value}</div>
                                                        <div className="flex items-center gap-2">
                                                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${measurement.status === 'Good' || measurement.status === 'Optimal' ? 'bg-green-100 text-green-700' :
                                                                    measurement.status === 'Normal' || measurement.status === 'Acceptable' ? 'bg-blue-100 text-blue-700' :
                                                                        'bg-yellow-100 text-yellow-700'
                                                                }`}>
                                                                {measurement.status}
                                                            </span>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Refresh Button */}
                                        <div className="text-center">
                                            <button
                                                onClick={fetchData}
                                                disabled={isLoading}
                                                className="px-6 py-3 bg-white/80 hover:bg-white border-2 border-blue-200 hover:border-blue-300 text-blue-700 font-bold rounded-xl transition-all inline-flex items-center gap-2"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-blue-300 border-t-blue-700 rounded-full animate-spin" />
                                                        Refreshing...
                                                    </>
                                                ) : (
                                                    'Refresh Data'
                                                )}
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
