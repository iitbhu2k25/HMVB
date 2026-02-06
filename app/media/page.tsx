'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const gallerySections = [
  
  {
    id: 'site-visits',
    title: 'Site Visits',
    description: 'Field surveys and site investigations',
    images: [
      '/gallery/site_visits/image2.jpg',
      '/gallery/site_visits/visit1.avif',
      '/gallery/site_visits/visit2.avif',
      '/gallery/site_visits/BLW_STP.jpeg',
      '/gallery/site_visits/VARUNAPUL_NADESAR.jpeg',
      '/gallery/site_visits/new.avif',
    ],
    coverImage: '/gallery/site_visits/image2.jpg',
  },
  {
    id: 'events',
    title: 'Events',
    description: 'Workshops, conferences and activities',
    images: [
      '/gallery/Events/pic2.jpg',
      '/gallery/Events/pic1.jpg',
      '/gallery/Events/pic3.png',
      '/gallery/Events/pic4.jpg',
      '/gallery/Events/pic5.jpg',
      '/gallery/Events/pic6.jpg',
      '/gallery/Events/pic7.jpg',
      '/gallery/Events/pic8.jpg',
      '/gallery/Events/pic9.jpg',
    ],
    coverImage: '/gallery/Events/pic2.jpg',
  },
  {
    id: 'visitors',
    title: 'Visitors',
    description: 'Distinguished visitors and collaborators',
    images: [
      '/gallery/visitors/Mr_Dheeraj_Joshi_Director_NMCG.png',
      '/gallery/visitors/pic1.png',
      '/gallery/visitors/ISRO_MEMBERS.png',
    ],
    coverImage: '/gallery/visitors/Mr_Dheeraj_Joshi_Director_NMCG.png',
  },
  {
    id: 'field_work',
    title: 'Field work',
    description: 'Data sampling and collection',
    images: [
      '/gallery/field_work/new1.jpg',
      '/gallery/field_work/new2.jpg',
      '/gallery/field_work/new3.jpg',
      '/gallery/field_work/new4.jpg',
      '/gallery/field_work/new5.jpg',
      '/gallery/field_work/Picture1.jpg',
      '/gallery/field_work/Picture2.jpg',
      '/gallery/field_work/Picture3.jpeg',
      '/gallery/field_work/Picture5.jpg',
      '/gallery/field_work/Picture6.jpg',
      '/gallery/field_work/Picture7.jpeg',
      '/gallery/field_work/Picture8.jpg',
      '/gallery/field_work/slcr14.jpg',
      '/gallery/field_work/slcr10.jpg',
      '/gallery/field_work/slcr18.jpg',
      '/gallery/field_work/new.avif',
    ],
    coverImage: '/gallery/field_work/new.avif',
  },
  {
    id: 'ganga',
    title: 'Ganga at Varanasi',
    description: 'The sacred Ganga River flowing through Varanasi',
    images: [
      '/gallery/ganga/gangavns2.jpg',
      '/gallery/ganga/gangavns3.jpg',
      '/gallery/ganga/gangavns4.jpg',
    ],
    coverImage: '/gallery/gangavns.jpg',
  },
  {
    id: 'varuna',
    title: 'Varuna at Varanasi',
    description: 'The Varuna River - a tributary of Ganga',
    images: [
      '/gallery/varuna/varuna1.png',
      '/gallery/varuna/varuna3.png',
      '/gallery/varuna/varuna5.png',
      '/gallery/varuna/varuna7.png',
      '/gallery/varuna/Varuna_riverfront.jpeg',
      '/gallery/varuna/Picture16.jpeg',
      '/gallery/varuna/Isarwar.jpg',
    ],
    coverImage: '/gallery/varuna/varuna3.png',
  },
  {
    id: 'assi',
    title: 'Assi at Varanasi',
    description: 'The Assi River - a tributary of Ganga',
    images: [
      '/gallery/Assi/assi1.png',
      '/gallery/Assi/assi2.png',
      '/gallery/Assi/assi3.png',
      '/gallery/Assi/assi4.png',
    ],
    coverImage: '/gallery/Assi/assi3.png',
  },
];

export default function MediaGalleryPage() {
  const [activeSection, setActiveSection] = useState<string>(gallerySections[0].id);

  const activeSectionData = gallerySections.find(s => s.id === activeSection) || gallerySections[0];

  return (
    <div className="min-h-screen bg-white py-12">
      {/* Container restricted to 90% width */}
      <div className="w-[90%] mx-auto">
        
        {/* Simplified Header */}
        <div className="text-center mb-12">
          <motion.h1 
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-3xl md:text-4xl font-bold text-[#003366] uppercase tracking-tight"
          >
            SLCR Media Gallery
          </motion.h1>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Navigation (Tabs) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {gallerySections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
                activeSection === section.id
                  ? 'bg-[#003366] text-white border-[#003366] shadow-lg scale-105'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Image Grid - 4 columns on large screens to match reference */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {activeSectionData.images.map((img, idx) => (
              <motion.div
                key={`${activeSection}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={img}
                  alt={`${activeSectionData.title} ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state or Footer padding */}
        <div className="mt-20 text-center text-gray-400 text-sm">
         
        </div>
      </div>
    </div>
  );
}