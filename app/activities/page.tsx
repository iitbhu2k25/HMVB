'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

// Activities data - Icons removed
const activities = [
  {
    id: 'A1',
    title: 'Holistic River Plan',
    color: 'from-blue-500 to-blue-600',
    items: [
      'River Rejuvenation Plan including Revenue Generation model',
      'Storm & wastewater management plan',
      'Integration of Cultural heritage and Recreational sites'
    ]
  },
  {
    id: 'A2',
    title: 'Decision Support System',
    color: 'from-cyan-500 to-cyan-600',
    items: [
      'Development of a Hydrological and Hydrodynamic Model-based system',
      'Decision-making and planning support tools',
      'Basin-wide water dynamics analysis'
    ]
  },
  {
    id: 'A3',
    title: 'Smart Monitoring',
    color: 'from-teal-500 to-teal-600',
    items: [
      'Data collection using emerging technologies',
      'Fingerprint analysis for characterization of non-targeted chemical and microbial/emerging pollutants',
      'Real-time monitoring systems'
    ]
  },
  {
    id: 'A4',
    title: 'Innovative Technologies',
    color: 'from-green-500 to-green-600',
    items: [
      'Refurbishing of existing STPs to increase hydraulic and pollutant removal capacity',
      'Reuse of STP treated wastewater/Sludge',
      'Wastewater as a resource for revenue generation'
    ]
  },
  {
    id: 'A5',
    title: 'Sustainable Groundwater Management',
    color: 'from-sky-500 to-sky-600',
    items: [
      'River-Aquifer (RA) exchanges study',
      'Interaction of small rivers with groundwater',
      'Role in overall water budgeting of the basin'
    ]
  },
  {
    id: 'A6',
    title: 'Carbon-Neutral & Water-Positive Principles',
    color: 'from-emerald-500 to-emerald-600',
    items: [
      'Carbon and Water footprint evaluation for all SLCR interventions',
      'Contribution to carbon sequestration and water budget',
      'Achieving carbon neutrality and water positive environment'
    ]
  },
  {
    id: 'A7',
    title: 'Capacity Building & Outreach',
    color: 'from-indigo-500 to-indigo-600',
    items: [
      'Development of courses with focus on global sustainable solutions',
      'International exposure programs',
      'Knowledge sharing and training initiatives'
    ]
  }
];

export default function ActivitiesPage() {
  const topRow = activities.slice(0, 4);
  const bottomRow = activities.slice(4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Simple Heading */}
      <div className="pt-8 pb-4 px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Activities</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Comprehensive activities driving the holistic rejuvenation of rivers
          </p>
          <div className="w-28 h-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto mt-5" />
        </motion.div>
      </div>

      {/* Activities Grid */}
      <section className="py-8 px-4 sm:px-6">
        <div className="w-[95%] max-w-[1800px] mx-auto">
          
          {/* Top Row - 4 blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {topRow.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // Added min-h-[320px] to increase height
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col min-h-[320px]"
              >
                {/* Header - Icon Removed */}
                <div className={`p-5 bg-gradient-to-r ${activity.color} relative`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-black text-white">{activity.id}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white leading-tight">{activity.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-start">
                  <ul className="space-y-3"> {/* Increased space-y for better vertical spread */}
                    {activity.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 3 blocks centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-3/4">
              {bottomRow.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 4) * 0.1 }}
                  // Added min-h-[320px] to increase height
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col min-h-[320px]"
                >
                  {/* Header - Icon Removed */}
                  <div className={`p-5 bg-gradient-to-r ${activity.color} relative`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-black text-white">{activity.id}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white leading-tight">{activity.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col justify-start">
                    <ul className="space-y-3">
                      {activity.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-1.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-16 px-4 bg-white">
        <div className="w-[95%] max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Implementation</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our phased approach to river rejuvenation from project outcomes to nationwide implementation
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-4" />
          </motion.div>

          {/* Implementation Stages Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 mb-12 border border-blue-100"
          >
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { stage: 'Stage 1', title: 'Project Outcomes/Results', desc: 'Initial research findings and pilot implementations' },
                { stage: 'Stage 2', title: 'Field Demonstration', desc: 'On-ground testing and validation of solutions' },
                { stage: 'Stage 3', title: 'Scaleup: Basin Level', desc: 'Expansion to entire river stretch and basin' },
                { stage: 'Stage 4', title: 'Secretariat Expansion', desc: 'Technology transfer and implementation on other rivers' }
              ].map((item, index) => (
                <motion.div
                  key={item.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Implementation Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-4 border border-gray-100">
              <h4 className="text-lg font-bold text-gray-800 mb-3 text-center">Varuna Basin Elevation Model</h4>
              <Image
                src="/activities/activities3.png"
                alt="Elevation Model of Varuna Basin"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl"
              />
              <p className="text-sm text-gray-600 mt-3 text-center">
                Digital elevation model showing the topographical features of the Varuna River basin
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-4 border border-gray-100">
              <h4 className="text-lg font-bold text-gray-800 mb-3 text-center">Conceptual Model</h4>
              <Image
                src="/activities/activities4.png"
                alt="Conceptual Model"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl"
              />
              <p className="text-sm text-gray-600 mt-3 text-center">
                Conceptual model showing real-time observation wells, piezometers, and extraction wells network
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}