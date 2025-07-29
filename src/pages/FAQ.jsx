import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiArrowRight } = FiIcons;

const FAQ = () => {
  const faqs = [
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-red-900 mb-6">
              Frequently Asked <span className="text-red-700">Questions</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Get answers to common questions about our media performance services and consultation process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-red-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold text-red-900 mb-4">
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
      <section className="py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-2xl p-12 shadow-sm"
          >
            <SafeIcon icon={FiMail} className="w-16 h-16 text-red-700 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Email{' '}
              <a href="mailto:info@mediaperformanceinsights.com" className="text-red-700 hover:text-red-800 font-medium">
                info@mediaperformanceinsights.com
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