import React from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiTarget, FiUsers, FiMic, FiShield, FiZap, FiArrowRight, FiCheckCircle, FiClock} = FiIcons;

const Services = () => {
  const services = [
    {
      id: 'analysis',
      title: 'Media Performance Analysis',
      subtitle: 'Walk Away with a Clear Roadmap',
      icon: FiTarget,
      description: 'Send us one recent appearance. We analyze it through four lenses, mark every moment you gained or lost attention, then show you exactly what to fix.',
      includes: [
        'Timestamped video breakdown',
        'Written analysis',
        'One-hour strategy call', 
        'Custom playbook'
      ],
      bestFor: 'Leaders preparing for major announcements. Anyone who knows they could have done better.',
      cta: 'Request Analysis'
    },
    {
      id: 'workshop',
      title: 'Executive Media Workshop',
      subtitle: 'Train Your Whole Team at Once',
      icon: FiUsers,
      description: 'Half-day or full-day intensive. We teach the four core frameworks. Everyone practices with real scenarios. We record everything and provide individual feedback.',
      includes: [
        '4-8 hour workshop',
        'Core framework training',
        'Individual practice sessions',
        'Video recordings',
        'Written playbooks',
        '30-day follow-up'
      ],
      bestFor: 'C-suite teams preparing for roadshows. Leadership teams with inconsistent media performance.',
      cta: 'Book Workshop'
    },
    {
      id: 'mock',
      title: 'Mock Media Interviews', 
      subtitle: 'Practice with Real Journalists. Real Pressure.',
      icon: FiMic,
      description: 'Custom interview scenarios matched to your event. Working journalists ask the questions. You practice the frameworks. We coach in real-time.',
      includes: [
        '3-5 live drills',
        'Immediate feedback',
        'Video replay',
        'Written playbook with strongest responses'
      ],
      bestFor: 'Earnings calls. Product launches. Crisis preparation. Congressional testimony.',
      cta: 'Book Practice Session'
    },
    {
      id: 'partnership',
      title: 'Media Performance Partnership',
      subtitle: 'Ongoing Support for Leaders in the Spotlight',
      icon: FiShield,
      description: 'We become part of your team. Monthly planning. Quarterly deep dives. Fast turnaround when timing is tight.',
      includes: [
        'Monthly planning calls',
        'Quarterly analysis sessions',
        'Priority scheduling for mock interviews',
        '24-hour crisis turnaround',
        'Annual narrative audit'
      ],
      bestFor: 'C-suite executives at public companies. Leaders who can\'t afford unforced errors.',
      commitment: '6-month minimum',
      cta: 'Plan Your Partnership'
    },
    {
      id: 'emergency',
      title: 'Emergency Media Prep',
      subtitle: 'When You Need to Be Ready Tomorrow',
      icon: FiZap,
      description: 'Crisis doesn\'t wait. We compress full prep into rapid intensive sessions. Focus only on your exact scenario. Day-of support available.',
      includes: [
        'Scheduling within 24 hours',
        'Intensive 2-4 hour session',
        'Custom crisis playbook',
        'Mock interview',
        'Availability during actual interview'
      ],
      bestFor: 'Sudden crisis response. Unexpected high-stakes opportunities. "Oh shit" moments that can\'t wait.',
      cta: 'Schedule Emergency Prep'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-parchment to-red-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-red-900 mb-6">
              Four Ways to Work Together 
              <span className="text-red-700 block">Plus Emergency Support</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              One-time deep dive. Team training. Mock interviews. Full partnership. Emergency prep. Pick what matches where you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-red-50'} p-8 rounded-2xl shadow-sm`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-800 text-white rounded-lg flex items-center justify-center mr-4">
                        <SafeIcon icon={service.icon} className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-red-900">{service.title}</h3>
                        <p className="text-lg text-red-700 font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-red-900 mb-3">You Get:</h4>
                      <ul className="space-y-2">
                        {service.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-parchment p-6 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-3">Best For:</h4>
                    <p className="text-gray-700 mb-6">{service.bestFor}</p>
                    
                    {service.commitment && (
                      <p className="text-sm text-red-700 font-medium mb-6">
                        Commitment: {service.commitment}
                      </p>
                    )}
                    
                    <a
                      href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-red-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-900 transition-colors duration-200 w-full justify-center"
                    >
                      {service.cta}
                      <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Not Sure Which Service Fits?</h2>
            <p className="text-xl text-red-100 mb-8">
              Schedule a twenty-minute consultation. We'll talk through your situation and recommend what actually fits. No pressure, no pitch.
            </p>
            <a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-parchment text-red-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Book Consultation Call
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;