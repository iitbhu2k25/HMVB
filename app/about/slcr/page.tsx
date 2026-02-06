'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Globe, Target, Building2, ChevronRight, ChevronDown, Lightbulb, Eye, Heart, MessageCircle } from 'lucide-react';
import { useState } from 'react';

// Accordion Section Component
function AccordionSection({
  title,
  icon: Icon,
  children,
  isOpen,
  onToggle,
  gradientFrom = 'from-blue-500',
  gradientTo = 'to-teal-500'
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  gradientFrom?: string;
  gradientTo?: string;
}) {
  return (
    <div className="mb-4 rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-5 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white font-semibold text-lg hover:opacity-95 transition-opacity`}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6" />
          <span>{title}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-white">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutSLCRPage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    objectives: false,
    vision: false,
    coreValues: false,
    partners: false,
    coordinator: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <section className="py-12 bg-white">
        {/* CHANGED: Replaced 'max-w-7xl mx-auto px-4' with 'w-[95%] max-w-[1800px] mx-auto' 
            to match the wider layout of the Activities page. */}
        <div className="w-[95%] max-w-[1800px] mx-auto">
          {/* Fabulous Header */}
          <div className="text-center mb-16 pt-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-teal-500 drop-shadow-sm tracking-tight"
            >
              SLCR at a Glance
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Intro Section - Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 items-start">
              <div className="text-gray-700 leading-relaxed text-lg text-justify">
                <h2 className="text-3xl font-bold text-primary mb-6">Indo - Denmark Partnership</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    <span className="float-left text-7xl font-bold text-primary mr-3 leading-none mt-[-8px]">E</span>
                    stablishment of Secretariat for Smart Laboratory on Clean Rivers in Varanasi (SLCR) is the initiative discussed between the Hon&apos;ble Prime Minister of India,
                    H.E. Shri. Narendra Modi and the Prime Minister of Denmark, H.E. Ms Mette Frederiksen, on 09th October 2021 during the latter&apos;s visit to India.
                    SLCR was also mention in the India–Denmark Joint Statement released on 3rd May 2021 during the Visit of Hon&apos;ble Prime Minister of India, H.E. Shri.
                    Narendra Modi On 03rd May 2022 as one the initiatives both the countries looked forward eagerly to be launched. On 12th September 2022 during the
                    Hon&apos;ble Minister of Jal Sakti&apos;s visit to Denmark, a Memorandum of Understanding was signed between the Ministry of Jal Shakti and the Danish
                    Environment Ministry as a broad-based framework in the field of Water Resources Development and Management including the SLCR initiative.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] w-full rounded-xl overflow-hidden shadow-md bg-white p-2 border border-gray-100 flex flex-col">
                <div className="relative flex-grow w-full">
                  <Image
                    src="/about/pm.jpg"
                    alt="Prime Ministers of India and Denmark"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2 italic flex-shrink-0">
                  Hon&apos;ble Prime Minister of India and Prime Minister of Denmark
                </p>
              </div>
            </div>

            {/* Concept Section - Image */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                Concept of Smart Living Lab on Clean River (SLCR) <br className="hidden md:block" />
                Small River Rejuvenation
              </h2>
              <div className="flex justify-center mb-16">
                <Image
                  src="/about/lab_component.png"
                  alt="Concept of SLCR Components"
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-sm"
                />
              </div>

              {/* Hybrid Lab Detail Section */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                <div className="text-gray-700 leading-relaxed text-justify space-y-4">
                  <p>
                    SLCR is more than a laboratory; it is an ecosystem of learning, engagement, co-creation, and experimentation in the real environment. SLCR consists of two major components:
                  </p>
                  <p>
                    <strong>Hybrid Lab (Virtual + Secretariat):</strong> Provides the platform to bring all Govt. Dept., Stakeholders, Academician, Industries and Community to engage to evaluate the Global sustainable solutions (technologies, Policies, frameworks) and enable their implementation in local context through Engagement, Learning and Co-creation. The Hybrid lab will also enable the upscaling of the solutions to the basin level and other rivers.
                  </p>
                  <p>
                    The second component consists of the <strong>On-field Living Lab</strong> having the real field area as an experimental site and is used to demonstrate the co-creation on the field.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/about/flowchart2.avif"
                    alt="Hybrid Lab Flowchart"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              </div>

              {/* Structure Section */}
              <h2 className="flex justify-center text-2xl md:text-3xl font-bold text-primary mb-8">Structure of SLCR</h2>

              {/* Partnership Image + Structure Image side by side */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div className="relative h-full min-h-[400px] w-full rounded-xl overflow-hidden shadow-lg bg-white p-2 border border-gray-100">
                  <Image
                    src="/about/partnership2.jpg"
                    alt="Indo-Denmark Partnership"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/about/structure.avif"
                    alt="Structure of SLCR"
                    width={900}
                    height={600}
                    className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
                  />
                </div>
              </div>

              {/* JSC, PRC, MSWG Cards below */}
              <div className="space-y-4 mb-8">
                {/* JSC and PRC side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-blue-50/50 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-primary mb-2">Joint Steering Committee</h3>
                    <p className="text-gray-700 text-xs leading-relaxed text-justify">
                      National level committee with high-level representatives from both Denmark and India. To provide strategic guidance and review the progress activities which are identified by the Multi Stake Holder Working Group. To explore and secure funding for new projects, if necessary.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50/50 border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-purple-700 mb-2">Project Review Committee</h3>
                    <p className="text-gray-700 text-xs leading-relaxed text-justify">
                      To review the progress of the ongoing projects to assist the JSC. Quality control of the proposed new projects by the Multistakeholder Working group and share recommendation with the JSC. The PRC can request for a JSC meeting if new projects are to be reapproved or if they need strategic direction.
                    </p>
                  </div>
                </div>
                {/* MSWG full width */}
                <div className="p-4 rounded-xl bg-teal-50/50 border-l-4 border-teal-500 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-teal-700 mb-2">The Multi Stakeholder Working Group</h3>
                  <p className="text-gray-700 text-xs leading-relaxed text-justify">
                    It is the platform to bring the different Central and State Government agencies, Urban Local Bodies (ULBs), District Administrations and state and central missions that are relevant for the Varuna. Share the challenges in their respective areas to SLCR. Inform the ongoing activities in their respective areas to SLCR. Establish synergy and convergence with the other schemes/initiatives. Give strategic inputs if any during framing of the individual projects to SLCR.
                  </p>
                </div>
              </div>
            </div>

            {/* ============ DROPDOWN SECTIONS ============ */}
            <div className="mt-16 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                About SLCR Details
              </h2>

              {/* Dropdown 1: Objectives */}
              <AccordionSection
                title="Objectives of SLCR"
                icon={Target}
                isOpen={openSections.objectives}
                onToggle={() => toggleSection('objectives')}
                gradientFrom="from-blue-600"
                gradientTo="to-blue-400"
              >
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The Smart Laboratory on Clean Rivers (SLCR) has been established as a pioneering initiative under the India–Denmark partnership to support sustainable river rejuvenation through innovation, collaboration, and real-world experimentation. The core objectives of SLCR are outlined below:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      SLCR aims to function as a <strong>Smart Living Laboratory</strong> that integrates scientific research, policy evaluation, technological innovation, and field-level implementation within actual river systems. By combining virtual platforms with on-field experimentation, SLCR seeks to bridge the gap between theory and practice in river basin management.
                    </li>
                    <li>
                      A key objective of SLCR is to <strong>facilitate multi-stakeholder engagement</strong> by bringing together central and state government agencies, urban local bodies, academic institutions, research organizations, industries, and local communities. This collaborative ecosystem enables collective problem identification, solution co-creation, and coordinated action for clean river initiatives.
                    </li>
                    <li>
                      SLCR also focuses on the <strong>evaluation and localization of global best practices</strong>, including advanced technologies, governance frameworks, and sustainable policies in water resources management. These solutions are assessed for their applicability in Indian conditions, particularly for small and medium river systems.
                    </li>
                    <li>
                      Another major objective is to promote <strong>data-driven and evidence-based decision-making</strong> by developing hydrological models, analytical tools, and decision support systems that support river health assessment, planning, and management.
                    </li>
                    <li>
                      SLCR aims to <strong>demonstrate pilot-scale solutions</strong> through its on-field Living Lab component, using selected river stretches as experimental sites. Successful interventions are further refined and prepared for upscaling at basin and national levels.
                    </li>
                    <li>
                      In addition, SLCR is committed to <strong>capacity building and knowledge dissemination</strong>, supporting learning, training, and exchange of expertise among practitioners, policymakers, and researchers engaged in river rejuvenation and water management.
                    </li>
                  </ul>
                </div>
              </AccordionSection>

              {/* Dropdown 2: Vision and Mission */}
              <AccordionSection
                title="Vision and Mission"
                icon={Eye}
                isOpen={openSections.vision}
                onToggle={() => toggleSection('vision')}
                gradientFrom="from-purple-600"
                gradientTo="to-purple-400"
              >
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-bold text-purple-700 mb-3">Vision</h3>
                    <p>
                      The vision of the Smart Laboratory on Clean Rivers (SLCR) is to emerge as a <strong>globally recognized center of excellence</strong> for clean river rejuvenation and sustainable water resources management, fostering resilient river ecosystems through innovation, collaboration, and science-driven solutions.
                    </p>
                    <p className="mt-3">
                      SLCR envisions a future where rivers are managed as living systems, supported by adaptive governance, technological innovation, and active participation of all stakeholders, ensuring ecological integrity and societal well-being.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-700 mb-3">Mission</h3>
                    <p>
                      The mission of SLCR is to establish a <strong>dynamic and inclusive living laboratory</strong> that enables learning, engagement, co-creation, and experimentation in real river environments.
                    </p>
                    <p className="mt-3">
                      SLCR is committed to strengthening the <strong>science–policy–practice interface</strong> by integrating research outputs, field observations, and policy frameworks into actionable strategies for river rejuvenation.
                    </p>
                    <p className="mt-3">
                      Through the India–Denmark partnership, SLCR seeks to <strong>leverage international expertise and shared knowledge</strong> to address complex water challenges, while ensuring solutions are locally relevant and scalable.
                    </p>
                    <p className="mt-3">
                      The mission further includes supporting national priorities such as river rejuvenation and sustainable water management by generating <strong>replicable models, decision-support tools, and institutional knowledge</strong> that can be adopted across river basins in India.
                    </p>
                  </div>
                </div>
              </AccordionSection>

              {/* Dropdown 3: Core Values */}
              <AccordionSection
                title="Core Values"
                icon={Heart}
                isOpen={openSections.coreValues}
                onToggle={() => toggleSection('coreValues')}
                gradientFrom="from-rose-600"
                gradientTo="to-rose-400"
              >
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The Smart Laboratory on Clean Rivers (SLCR) operates on a strong foundation of values that guide its activities, partnerships, and long-term impact.
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Sustainability</strong> lies at the core of SLCR&apos;s approach, emphasizing environmentally sound, socially inclusive, and economically viable solutions for river and water resource management.
                    </li>
                    <li>
                      <strong>Collaboration and Partnership</strong> are central to SLCR&apos;s functioning. The laboratory promotes active cooperation among government bodies, academic institutions, industries, and communities, recognizing that complex river challenges require collective action.
                    </li>
                    <li>
                      <strong>Innovation and Experimentation</strong> drive SLCR&apos;s work culture. The laboratory encourages testing, learning, and refinement of innovative ideas through real-time field experimentation and adaptive management practices.
                    </li>
                    <li>
                      <strong>Scientific Integrity and Excellence</strong> guide all research and analytical activities at SLCR. Decisions and recommendations are grounded in robust data, rigorous analysis, and transparent methodologies.
                    </li>
                    <li>
                      <strong>Inclusivity and Community Engagement</strong> ensure that local knowledge, stakeholder perspectives, and societal needs are integrated into solution design and implementation.
                    </li>
                    <li>
                      <strong>Transparency and Accountability</strong> underpin governance and project implementation, fostering trust, responsible decision-making, and measurable outcomes.
                    </li>
                  </ul>
                </div>
              </AccordionSection>

              {/* Dropdown 4: Partner Institutes */}
              <AccordionSection
                title="Partner Institutes"
                icon={Building2}
                isOpen={openSections.partners}
                onToggle={() => toggleSection('partners')}
                gradientFrom="from-teal-600"
                gradientTo="to-teal-400"
              >
                <div className="space-y-8">
                  {/* Indian Institutions */}
                  <div>
                    <h3 className="text-xl font-bold text-teal-700 mb-6 border-b pb-2">Indian Institutions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* IIT BHU */}
                      <a href="https://www.iitbhu.ac.in" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-teal-300">
                          <div className="h-24 flex items-center justify-center mb-3">
                            <Image src="/about/Picture1.png" alt="IIT BHU" width={80} height={80} className="object-contain max-h-20 group-hover:scale-105 transition-transform" />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm">IIT (BHU) Varanasi</h4>
                          <p className="text-xs text-gray-600 mt-1">Host institution for SLCR</p>
                        </div>
                      </a>
                      {/* IIT Delhi */}
                      <a href="https://home.iitd.ac.in" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-teal-300">
                          <div className="h-24 flex items-center justify-center mb-3">
                            <Image src="/about/Picture2.png" alt="IIT Delhi" width={80} height={80} className="object-contain max-h-20 group-hover:scale-105 transition-transform" />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm">IIT Delhi</h4>
                          <p className="text-xs text-gray-600 mt-1">Water resources engineering</p>
                        </div>
                      </a>
                      {/* IIT Bombay */}
                      <div className="group">
                        <div className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-100">
                          <div className="h-24 flex items-center justify-center mb-3">
                            <Image src="/about/Picture3.png" alt="IIT Bombay" width={80} height={80} className="object-contain max-h-20 group-hover:scale-105 transition-transform" />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm">IIT Bombay</h4>
                          <p className="text-xs text-gray-600 mt-1">Hydrology & data analytics</p>
                        </div>
                      </div>
                      {/* IIT Madras */}
                      <a href="https://www.iitm.ac.in" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-teal-300">
                          <div className="h-24 flex items-center justify-center mb-3">
                            <Image src="/about/Picture4.png" alt="IIT Madras" width={80} height={80} className="object-contain max-h-20 group-hover:scale-105 transition-transform" />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm">IIT Madras</h4>
                          <p className="text-xs text-gray-600 mt-1">Water systems modeling</p>
                        </div>
                      </a>
                      {/* IIT Guwahati */}
                      <a href="https://www.iitg.ac.in" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-teal-300">
                          <div className="h-24 flex items-center justify-center mb-3">
                            <Image src="/about/Picture5.png" alt="IIT Guwahati" width={80} height={80} className="object-contain max-h-20 group-hover:scale-105 transition-transform" />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm">IIT Guwahati</h4>
                          <p className="text-xs text-gray-600 mt-1">River hydraulics & geomorphology</p>
                        </div>
                      </a>
                      {/* BHU */}
                      <a href="https://www.bhu.ac.in" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-teal-300">
                          <div className="h-24 flex items-center justify-center mb-3">
                            <Image src="/about/Picture7.png" alt="BHU" width={80} height={80} className="object-contain max-h-20 group-hover:scale-105 transition-transform" />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm">Banaras Hindu University</h4>
                          <p className="text-xs text-gray-600 mt-1">Multidisciplinary academic support</p>
                        </div>
                      </a>
                      {/* CGWB */}
                      <a href="https://cgwb.gov.in" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-teal-300">
                          <div className="h-24 flex items-center justify-center mb-3">
                            <Image src="/about/Picture8.png" alt="CGWB" width={80} height={80} className="object-contain max-h-20 group-hover:scale-105 transition-transform" />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm">Central Ground Water Board</h4>
                          <p className="text-xs text-gray-600 mt-1">Groundwater data & guidance</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* International Institutions */}
                  <div>
                    <h3 className="text-xl font-bold text-teal-700 mb-6 border-b pb-2">International Institutions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Aarhus University */}
                      <a href="https://www.au.dk" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-teal-300">
                          <div className="h-24 flex items-center justify-center mb-3">
                            <Image src="/about/Picture10.png" alt="Aarhus University" width={120} height={80} className="object-contain max-h-20 group-hover:scale-105 transition-transform" />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm">Aarhus University</h4>
                          <p className="text-xs text-gray-600 mt-1">Denmark - Water governance</p>
                        </div>
                      </a>
                      {/* Université de Lyon */}
                      <a href="https://www.universite-lyon.fr" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-teal-300">
                          <div className="h-24 flex items-center justify-center mb-3">
                            <Image src="/about/Picture11.png" alt="Université de Lyon" width={120} height={80} className="object-contain max-h-20 group-hover:scale-105 transition-transform" />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm">Université de Lyon</h4>
                          <p className="text-xs text-gray-600 mt-1">France - Environmental sciences</p>
                        </div>
                      </a>
                      {/* University of Copenhagen */}
                      <a href="https://www.ku.dk" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-teal-300">
                          <div className="h-24 flex items-center justify-center mb-3">
                            <Image src="/about/Picture6.svg" alt="University of Copenhagen" width={140} height={80} className="object-contain max-h-20 group-hover:scale-105 transition-transform" />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm">University of Copenhagen</h4>
                          <p className="text-xs text-gray-600 mt-1">Denmark - Hydrology & climate</p>
                        </div>
                      </a>
                      {/* VetAgro Sup */}
                      <a href="https://www.vetagro-sup.fr" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-teal-300">
                          <div className="h-24 flex items-center justify-center mb-3">
                            <Image src="/about/Picture12.png" alt="VetAgro Sup" width={100} height={80} className="object-contain max-h-20 group-hover:scale-105 transition-transform" />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm">VetAgro Sup</h4>
                          <p className="text-xs text-gray-600 mt-1">France - Environmental health</p>
                        </div>
                      </a>
                      {/* Hokkaido University */}
                      <a href="https://www.hokudai.ac.jp" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-teal-300">
                          <div className="h-24 flex items-center justify-center mb-3">
                            <Image src="/about/Picture9.jpg" alt="Hokkaido University" width={80} height={80} className="object-contain max-h-20 group-hover:scale-105 transition-transform" />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm">Hokkaido University</h4>
                          <p className="text-xs text-gray-600 mt-1">Japan - Cold-region hydrology</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </AccordionSection>

              {/* Dropdown 5: Coordinator's Message */}
              <AccordionSection
                title="Coordinator's Message"
                icon={MessageCircle}
                isOpen={openSections.coordinator}
                onToggle={() => toggleSection('coordinator')}
                gradientFrom="from-amber-600"
                gradientTo="to-amber-400"
              >
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="italic text-gray-500">
                    The Coordinator&apos;s message will be updated soon with insights into SLCR&apos;s journey, achievements, and future aspirations.
                  </p>
                </div>
              </AccordionSection>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}