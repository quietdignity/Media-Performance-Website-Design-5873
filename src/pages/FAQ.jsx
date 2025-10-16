import React from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiHelpCircle, FiArrowRight, FiCheckCircle} = FiIcons;

const FAQ = () => {
  const serviceQuestions = [
    {
      category: "Analysis",
      question: "You Need Analysis If:",
      answer: "You have a big media moment in 2-8 weeks. You recently did media and know something was off. You're comfortable on camera but recognize there's another level. You want concrete feedback you can implement immediately."
    },
    {
      category: "Workshop",
      question: "You Need the Workshop If:",
      answer: "You have multiple executives who all need the same foundation. Your leadership team's media performance is inconsistent. You want to build internal capacity and shared language. You're preparing for a roadshow, M&A announcement, or major company transition where multiple leaders will face media."
    },
    {
      category: "Mock Interviews",
      question: "You Need Mock Interviews If:",
      answer: "You have a specific high-stakes event coming up. The stakes are high enough that mistakes have real consequences. You need to practice the actual scenario under realistic pressure. You want to fail in practice where it costs nothing."
    },
    {
      category: "Partnership",
      question: "You Need Partnership If:",
      answer: "You're doing media monthly or more. Your role demands consistent presence. You need someone who understands your business and can prep you quickly. You recognize mistakes damage your company in measurable ways."
    },
    {
      category: "Emergency",
      question: "You Need Emergency Prep If:",
      answer: "There's been a crisis and you're doing media in 24-48 hours. An unexpected opportunity appeared with short turnaround. Normal timeline doesn't work. The stakes are too high to wing it."
    }
  ];

  const generalFAQs = [
    {
      question: "What happens in the consultation?",
      answer: "Thirty minutes on a video call. Bring one recent clip or a short phone video. We pinpoint three wins, three gaps, and outline next steps."
    },
    {
      question: "How fast is delivery?",
      answer: "Standard work lands within ten business days after we receive your materials. Rush service is available."
    },
    {
      question: "Do I need a past interview?",
      answer: "Yes, if possible. A two‑ to five‑minute clip is enough. No clip? Record a quick phone video with likely questions."
    },
    {
      question: "Is everything confidential?",
      answer: "Yes. NDA on request. We never share clips or notes without written permission."
    },
    {
      question: "How much does it cost?",
      answer: "Price depends on scope and urgency. You receive a clear proposal after the consultation—no surprises."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-parchment to-red-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-red-900 mb-6">
              Which Service
              <span className="text-red-700 block">Do You Need?</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              The choice depends on your timeline, your frequency of media exposure, and what you need to improve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Selection Guide */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {serviceQuestions.map((item, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
                className="bg-parchment rounded-lg p-8"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-800 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <SafeIcon icon={FiCheckCircle} className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-900 mb-2">{item.question}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Still Not Sure */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="mt-16 text-center bg-white border-2 border-red-200 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-red-900 mb-4">Still Not Sure?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Schedule a twenty-minute consultation. We'll talk through your situation and recommend what actually fits. No pressure, no pitch.
            </p>
            <a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-900 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Book Consultation Call
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* General FAQ */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-6">General Questions</h2>
          </motion.div>
          <div className="space-y-6">
            {generalFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
                className="bg-white border border-red-100 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-red-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="text-center bg-parchment rounded-2xl p-12"
          >
            <SafeIcon icon={FiHelpCircle} className="w-16 h-16 text-red-700 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Email{' '}
              <a
                href="mailto:hello@mediaperformanceinsights.com"
                className="text-red-700 hover:text-red-800 font-medium"
              >
                hello@mediaperformanceinsights.com
              </a>{' '}
              and we will reply by the next business day.
            </p>
            <a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-900 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;