'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Partner Institute data
const indianInstitutes = [
  {
    name: 'IIT (BHU) Varanasi',
    description: 'IIT (BHU) Varanasi serves as the host institution for SLCR, providing academic leadership, technical expertise, and coordination support for research, innovation, and implementation in river rejuvenation.',
    logo: '/about/Picture1.png',
    link: 'https://www.iitbhu.ac.in'
  },
  {
    name: 'IIT Delhi',
    description: 'IIT Delhi contributes advanced research expertise in water resources engineering, environmental systems, and sustainable infrastructure to support evidence-based river management.',
    logo: '/about/Picture2.png',
    link: 'https://home.iitd.ac.in'
  },
  {
    name: 'IIT Bombay',
    description: 'IIT Bombay supports SLCR through interdisciplinary research in hydrology, data analytics, and environmental modeling for smart and scalable river solutions.',
    logo: '/about/Picture3.png',
    link: null
  },
  {
    name: 'IIT Madras',
    description: 'IIT Madras brings strong capabilities in water systems modeling, urban water management, and technological innovation for sustainable river basin planning.',
    logo: '/about/Picture4.png',
    link: 'https://www.iitm.ac.in'
  },
  {
    name: 'IIT Guwahati',
    description: 'IIT Guwahati contributes expertise in river hydraulics, geomorphology, and environmental monitoring, particularly relevant for river systems in diverse climatic regions.',
    logo: '/about/Picture5.png',
    link: 'https://www.iitg.ac.in'
  },
  {
    name: 'Banaras Hindu University',
    description: 'Banaras Hindu University provides multidisciplinary academic support and regional knowledge to strengthen research, outreach, and capacity-building initiatives under SLCR.',
    logo: '/about/Picture7.png',
    link: 'https://www.bhu.ac.in'
  },
  {
    name: 'Central Ground Water Board',
    description: 'CGWB supports SLCR by providing groundwater data, technical guidance, and regulatory insights essential for integrated surface water–groundwater management.',
    logo: '/about/Picture8.png',
    link: 'https://cgwb.gov.in'
  }
];

const internationalInstitutes = [
  {
    name: 'Aarhus University',
    description: 'Aarhus University contributes international expertise in water governance, environmental science, and sustainability, strengthening the India–Denmark knowledge partnership.',
    logo: '/about/Picture10.png',
    link: 'https://www.au.dk'
  },
  {
    name: 'Université de Lyon',
    description: 'Université de Lyon supports SLCR through collaborative research in environmental sciences, urban ecology, and sustainable water management practices.',
    logo: '/about/Picture11.png',
    link: 'https://www.universite-lyon.fr'
  },
  {
    name: 'University of Copenhagen',
    description: 'The University of Copenhagen brings strong research capabilities in hydrology, climate science, and ecosystem-based water management to SLCR initiatives.',
    logo: '/about/Picture6.svg',
    link: 'https://www.ku.dk'
  },
  {
    name: 'VetAgro Sup',
    description: 'VetAgro Sup contributes expertise in environmental health, water quality, and ecosystem interactions relevant to riverine and watershed sustainability.',
    logo: '/about/Picture12.png',
    link: 'https://www.vetagro-sup.fr'
  },
  {
    name: 'Hokkaido University',
    description: 'Hokkaido University supports SLCR with advanced research in cold-region hydrology, river processes, and climate-resilient water systems.',
    logo: '/about/Picture9.jpg',
    link: 'https://www.hokudai.ac.jp'
  }
];

// Institute Card Component
function InstituteCard({ institute }: { institute: typeof indianInstitutes[0] }) {
  const CardContent = (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col"
    >
      <div className="h-28 flex items-center justify-center mb-4">
        <Image
          src={institute.logo}
          alt={institute.name}
          width={100}
          height={100}
          className="object-contain max-h-24"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800 text-center mb-3">{institute.name}</h3>
      <p className="text-sm text-gray-600 text-center leading-relaxed flex-grow">{institute.description}</p>
      {institute.link && (
        <p className="text-xs text-blue-500 text-center mt-4 flex items-center justify-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Visit Website
        </p>
      )}
    </motion.div>
  );

  if (institute.link) {
    return (
      <a href={institute.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}

export default function PartnerInstitutesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600">
              Partner Institutes
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SLCR collaborates with leading academic institutions and research organizations across India and internationally, bringing together expertise in water management, environmental science, and sustainable development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Indian Institutions */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Indian Institutions</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {indianInstitutes.map((institute, index) => (
                <motion.div
                  key={institute.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <InstituteCard institute={institute} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* International Institutions */}
      <section className="py-12 px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">International Institutions</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {internationalInstitutes.map((institute, index) => (
                <motion.div
                  key={institute.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <InstituteCard institute={institute} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
