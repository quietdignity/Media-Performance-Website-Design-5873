import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiMail, FiUsers, FiArrowRight, FiClock, FiShield, FiTrendingUp } = FiIcons;

const Contact = () => {
  const contactMethods = [
    {
      title: "Schedule Consultation",
      description: "Book your strategic media performance consultation",
      icon: FiCalendar,
      action: "Schedule Now",
      link: "https://tidycal.com/jamesbrowntv/media-performance-insights-consultations",
      color: "red"
    },
    {
      title: "General Inquiries",
      description: "For general questions about services and partnerships",
      icon: FiMail,
      action: "Send Message",
      link: "mailto:james@themodernfire.com",
      color: "brown"
    },
    {
      title: "Press Contact",
      description: "Media inquiries, speaking engagements, and press requests",
      icon: FiUsers,
      action: "Contact Press Team",
      link: "mailto:press@mediaperformanceinsights.com",
      color: "maroon"
    }
  ];

  const benefits = [
    {
      icon: FiClock,
      title: "Quick Response",
      description: "We respond to all inquiries within one business day"
    },
    {
      icon: FiShield,
      title: "Confidential",
      description: "All consultations and communications are strictly confidential"
    },
    {
      icon: FiTrendingUp,
      title: "Proven Results",
      description: "Track record of improving media performance for leaders"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: "bg-red-800 hover:bg-red-900 text-white",
      brown: "bg-amber-800 hover:bg-amber-900 text-white",
      maroon: "bg-red-900 hover:bg-red-950 text-white"
    };
    return colors[color] || colors.red;
  };

  const getIconColorClasses = (color) => {
    const colors = {
      red: "text-red-800 bg-red-50",
      brown: "text-amber-800 bg-amber-50",
      maroon: "text-red-900 bg-red-50"
    };
    return colors[color] || colors.red;
  };

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
              Let's Transform Your <span className="text-red-700">Media Presence</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to turn your expertise into commanding media presence? Schedule your strategic consultation today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ready to transform your media presence? Choose the best way to connect with us based on your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-red-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 text-center"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${getIconColorClasses(method.color)}`}>
                  <SafeIcon icon={method.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-red-900 mb-4">{method.title}</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">{method.description}</p>
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${getColorClasses(method.color)}`}
                >
                  {method.action}
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 bg-parchment text-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={benefit.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-red-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to get started?</h2>
            <p className="text-xl text-red-100 mb-8">
              Your next media moment is coming. Be ready with the right strategy and training.
            </p>
            <a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-parchment text-red-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Book Your Consultation Now
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-900">
            Email{' '}
            <a href="mailto:info@mediaperformanceinsights.com" className="text-red-700 hover:text-red-900 font-medium">
              info@mediaperformanceinsights.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;