'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  AnimatePresence
} from 'framer-motion';
import {
  Droplets,
  MapPin,
  Activity,
  ArrowRight,
  ChevronRight,
  Target,
} from 'lucide-react';
import DataFetchWidget from '@/components/DataFetchWidget';

// ===== BACKGROUND IMAGES FOR SLIDER =====
const backgroundImages = [
  {
    src: '/home/varuna5.png',
    title: 'Varuna River Basin',
    subtitle: 'Comprehensive watershed analysis and monitoring'
  },
  {
    src: '/home/varuna3.png',
    title: 'Advanced Monitoring',
    subtitle: 'Real-time groundwater data collection systems'
  },
  {
    src: '/home/varuna2.jpg',
    title: '3D Terrain Modeling',
    subtitle: 'GIS-based hydrological visualization'
  },
  {
    src: '/home/varuna7.png',
    title: '3D Terrain Modeling',
    subtitle: 'GIS-based hydrological visualization'
  },
  {
    src: '/home/varuna1.png',
    title: '3D Terrain Modeling',
    subtitle: 'GIS-based hydrological visualization'
  },
];

// 4 Feature cards with high-visibility photos and descriptions
const heroFeatures = [
  { 
    text: 'Groundwater Analysis', 
    img: '/home/GW.png',
    description: 'Monitoring depth levels and quality parameters across the basin.'
  },
  { 
    text: 'MAR Zones', 
    img: '/home/MAR.png',
    description: 'Identifying Managed Aquifer Recharge sites for water sustainability.'
  },
  { 
    text: 'TEM Surveys', 
    img: '/home/TEM.jpeg',
    description: 'Deep subsurface resistivity mapping using electromagnetic tech.'
  },
  { 
    text: 'Potential Mapping', 
    img: '/home/MAPPING.png',
    description: 'Visualizing high-yield zones for future resource planning.'
  },
];

// ===== HERO SECTION =====
function HeroSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const imageIndex = Math.abs(page % backgroundImages.length);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, paginate]);

  const variants = {
    enter: () => ({ opacity: 0, scale: 1.1 }),
    center: { opacity: 1, scale: 1 },
    exit: () => ({ opacity: 0, scale: 0.95 })
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ opacity: { duration: 1 }, scale: { duration: 8 } }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[imageIndex].src}
              alt={backgroundImages[imageIndex].title}
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-4"
            >
              Hydrological
              <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">
                Modelling
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-cyan-100 mb-6"
            >
              of Varuna River Basin
            </motion.div>

            <motion.div
              key={imageIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-1 h-12 bg-cyan-400 rounded-full" />
              <p className="text-xl text-gray-200 font-medium">{backgroundImages[imageIndex].subtitle}</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl"
            >
              Comprehensive groundwater analysis, MAR zone identification, and TEM data visualization
              for sustainable water resource management in the Varuna Basin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#about" className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 rounded-xl font-bold text-white transition-all hover:scale-105">
                Explore Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/data-access" className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl font-bold text-white shadow-2xl shadow-cyan-500/50 transition-all hover:scale-105">
                <ChevronRight className="w-5 h-5" />
                Access Data from map
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20"
            >
              {[{ value: '150+', label: 'Survey Points' }, { value: '250m', label: 'Max Depth' }, { value: '24/7', label: 'Monitoring' }].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-black text-cyan-300">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE: CARDS WITH DESCRIPTIONS */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:gap-6">
            {heroFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 1 + (index * 0.1) }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative h-64 xl:h-72 flex flex-col overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl"
              >
                {/* Image Section */}
                <div className="relative h-2/3 w-full overflow-hidden">
                  <Image 
                    src={item.img} 
                    alt={item.text} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                {/* Text Content Section */}
                <div className="h-1/3 flex flex-col justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-3">
                  <span className="text-[10px] sm:text-[11px] font-black text-cyan-300 uppercase tracking-widest mb-1">
                    {item.text}
                  </span>
                  <p className="text-[10px] leading-tight text-gray-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage([index, index > imageIndex ? 1 : -1])}
            className={`w-3 h-3 rounded-full transition-all ${index === imageIndex ? 'bg-cyan-400 w-8' : 'bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </section>
  );
}

// ===== ABOUT SECTION =====
function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 mb-4">
            Hydrological Modelling for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">Varuna River Basin</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-blue-100/50 hover:border-cyan-200 transition-all duration-300 h-full">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <Droplets className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-blue-600 uppercase tracking-wider">Project</div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-800">Overview</h3>
                  </div>
                </div>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
              </div>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                  </span>
                  <span>The <strong className="text-slate-800">Hydrological Modelling for Varuna River Basin (HMVB)</strong> is a comprehensive initiative to understand and manage the complex hydrological systems through scientific methods.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-cyan-100 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-600" />
                  </span>
                  <span>This project integrates <strong className="text-slate-800">groundwater monitoring</strong> with advanced geophysical TEM techniques to identify optimal recharge zones.</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-cyan-100/50 hover:border-blue-200 h-full">
              <h3 className="text-2xl font-black text-slate-800 mb-6">Key Components</h3>
              <div className="space-y-4">
                {[
                  { title: 'Groundwater Depth & Quality', icon: '💧', color: 'from-blue-500 to-cyan-500' },
                  { title: 'TEM Data Visualization', icon: '📡', color: 'from-cyan-500 to-teal-500' },
                  { title: 'MAR Suitable Zones', icon: '📍', color: 'from-teal-500 to-emerald-500' },
                  { title: 'Integrated Modelling', icon: '📊', color: 'from-emerald-500 to-green-500' },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${f.color} flex items-center justify-center text-xl text-white`}>{f.icon}</div>
                    <span className="font-bold text-slate-700 text-sm">{f.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ===== QUICK LINKS SECTION =====
const quickLinks = [
  { title: 'Groundwater Analysis', description: 'Monitor depth, quality, potential zones, and aquifer classifications', href: '/groundwater/depth', image: '/home/GW.png', color: 'from-blue-600 to-cyan-500' },
  { title: 'MAR Zones', description: 'Managed aquifer recharge sites and implementation strategies', href: '/mar/sites', image: '/home/MAR.png', color: 'from-emerald-600 to-teal-500' },
  { title: 'TEM Surveys', description: 'Electromagnetic survey data and subsurface resistivity analysis', href: '/tem-data', image: '/home/TEM.jpeg', color: 'from-purple-600 to-pink-500' },
  { title: 'Potential Mapping', description: 'Groundwater potential zones and resource assessment', href: '/groundwater/potential-zone', image: '/home/MAPPING.png', color: 'from-orange-600 to-red-500' },
];

function QuickLinksSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-black text-slate-800 mb-12">Explore <span className="text-blue-600">HMVB Modules</span></h2>
        <div className="grid md:grid-cols-2 gap-6">
          {quickLinks.map((link, idx) => (
            <Link key={idx} href={link.href}>
              <div className="group bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-blue-400 transition-all flex items-center gap-4 overflow-hidden">
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600">{link.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{link.description}</p>
                  <div className="flex items-center gap-1 text-blue-600 font-bold text-sm">Explore <ArrowRight className="w-4 h-4" /></div>
                </div>
                <div className="relative w-28 h-28 rounded-xl overflow-hidden shadow-md">
                  <Image src={link.image} alt={link.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <HeroSection />
      <AboutSection />
      <QuickLinksSection />
    </div>
  );
}