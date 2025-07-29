import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiTarget, FiTrendingUp, FiUsers, FiCheckCircle, FiArrowRight, FiStar } = FiIcons;

const Home = () => {
  const roadblocks = [
    "Expertise that does not carry in broadcast",
    "Missed chances to lead when answers drift",
    "Low connection when language is dense",
    "Hoping for the best instead of following a method"
  ];

  const lenses = [
    {
      name: "Storytelling Triangle",
      purpose: "Aligns your message with what the audience cares about and the moment demands."
    },
    {
      name: "Persuasion Compass",
      purpose: "Balances credibility, feeling, and logic so people listen and believe."
    },
    {
      name: "FIRE Method",
      purpose: "Keeps you flexible when plans break and questions turn."
    },
    {
      name: "Self‑Awareness Matrix",
      purpose: "Surfaces strengths and blind spots to reveal your strongest on‑air self."
    }
  ];

  const services = [
    {
      title: "Media Performance Analysis",
      subtitle: "Your last interview could have gone better. Your next one will.",
      receive: [
        "Timestamped breakdown of wins and misses",
        "Written report with clear fixes",
        "One‑hour review call"
      ],
      improves: "Message clarity, concise answers, control under interruption, recall of three points.",
      bestFor: "Best for leaders facing more media or a major announcement.",
      cta: "Schedule a consultation"
    },
    {
      title: "Mock Media Interviews",
      subtitle: "Practice with working journalists. Real questions. Real time. Real stakes.",
      receive: [
        "Live drills that match your event",
        "Immediate coaching notes",
        "Replay clips for self‑review"
      ],
      improves: "Composure, pivots, bridge lines, credibility‑feeling‑logic balance.",
      bestFor: "Best for earnings calls, launches, sensitive topics, crisis prep.",
      cta: "Book your practice session"
    },
    {
      title: "Media Performance Partnership",
      subtitle: "Ongoing support for leaders in the spotlight.",
      receive: [
        "Monthly planning calls",
        "Quick turnaround when timing is tight",
        "Scheduled mocks",
        "Guidance on reporter outreach"
      ],
      improves: "Consistency, faster prep, reduced unforced errors, stronger coverage tone.",
      bestFor: "Best for C‑suite leaders, regulated industries, major change.",
      cta: "Let's plan your next quarter"
    }
  ];

  const testimonials = [
    {
      quote: "He turns complex material into clear, audience‑ready messages.",
      author: "Brand manager, corporate sector"
    },
    {
      quote: "Our engagement numbers rose in ways we could measure.",
      author: "Chief marketing officer"
    },
    {
      quote: "Moved our brand ahead by leaps and bounds.",
      author: "Program director, nonprofit"
    }
  ];

  const whyMPI = [
    {
      title: "Real experience",
      description: "Award‑winning journalist and crisis communicator who knows reporter psychology and executive risk."
    },
    {
      title: "Strategy first",
      description: "We create opportunity, not just damage control. Relationships, timing, follow‑through."
    },
    {
      title: "Proven methods",
      description: "Influence principles tested over centuries, matched to modern media reality."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-parchment to-red-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-red-900 mb-6 leading-tight">
                Your last media interview 
                <span className="text-red-700 block"> could have gone better.</span>
                Your next one will.
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Stop wondering why your expertise stalls on camera. We show you exactly what works, 
                what fails, and how to fix it—fast.
              </p>
              <a
                href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-900 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get Performance Insights Today
                <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753766398980-blob"
                alt="Media Performance"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Smart Leaders Slip */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-red-900 mb-6">
                Why Smart Leaders Slip in Media
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                You know the facts. Then the red light comes on and your sharp insights turn soft. 
                The host gets the quote. The audience forgets your name.
              </p>
              <h3 className="text-xl font-semibold text-red-900 mb-4">Common roadblocks</h3>
              <ul className="space-y-3">
                {roadblocks.map((roadblock, index) => (
                  <li key={index} className="flex items-start">
                    <SafeIcon icon={FiTarget} className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{roadblock}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-parchment p-8 rounded-2xl"
            >
              <p className="text-lg font-medium text-red-900 mb-4">
                Strategic media performance is not talent. It is a system.
              </p>
              <p className="text-red-800 text-lg">
                We give you that system.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Fix It */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-6">How We Fix It</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We review one recent appearance. We mark the seconds you held attention and the seconds you lost it. 
              No guesswork. Clear reasons. Clear fixes.
            </p>
          </motion.div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-red-900 mb-8 text-center">The four lenses</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-parchment">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-red-900">Lens</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-red-900">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {lenses.map((lens, index) => (
                    <tr key={index} className="border-t border-red-100">
                      <td className="px-6 py-4 font-medium text-red-900">{lens.name}</td>
                      <td className="px-6 py-4 text-gray-700">{lens.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-700 font-semibold hover:text-red-900 transition-colors duration-200"
            >
              See how it works → Schedule Consultation
              <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* The Ladder */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-8">The Ladder</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Analysis", description: "Find the gaps. Get the fixes." },
              { title: "Mock Interviews", description: "Test under real pressure. Lock the habits." },
              { title: "Partnership", description: "Plan the calendar. Respond quickly. Build press relationships." }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-parchment rounded-lg"
              >
                <div className="w-12 h-12 bg-red-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-red-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-8">Services</h2>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <h3 className="text-2xl font-bold text-red-900 mb-2">{service.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{service.subtitle}</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-red-900 mb-3">You receive</h4>
                    <ul className="space-y-2">
                      {service.receive.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-900 mb-3">Improves</h4>
                    <p className="text-gray-700 mb-4">{service.improves}</p>
                    <p className="text-red-700 font-medium">{service.bestFor}</p>
                  </div>
                </div>
                
                <a
                  href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-red-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-900 transition-colors duration-200"
                >
                  {service.cta}
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-8">Who Benefits</h2>
            <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-700">
              {["C‑suite executives", "Industry experts", "Public‑company leaders", "Authors and speakers", "Crisis teams"].map((group, index) => (
                <span key={index} className="bg-parchment text-red-800 px-4 py-2 rounded-full font-medium">
                  {group}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Voices */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-8">Client Voices</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-sm text-gray-600 font-medium">— {testimonial.author}</cite>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MPI */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-8">Why MPI</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {whyMPI.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-red-900 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <blockquote className="text-2xl font-medium text-red-900 italic">
              "Don't just tell a story. Start a fire."
            </blockquote>
          </div>
        </div>
      </section>

      {/* About James */}
      <section className="py-20 bg-red-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-red-900 mb-10 text-center">About James A. Brown</h2>
            
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
              <div className="w-80 h-auto overflow-hidden rounded-lg shadow-xl flex-shrink-0">
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753766899465-blob" 
                  alt="James A. Brown"
                  className="w-full h-auto object-cover object-center"
                />
              </div>
              <div className="max-w-xl">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Veteran journalist, political speechwriter, and crisis communicator.
                  Guides leaders from reactive answers to strategic advantage.
                </p>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg font-medium text-red-900">Favorite principles:</p>
                  <blockquote className="italic pl-4 border-l-4 border-red-300">"Your moment is nothing if it is not shared."</blockquote>
                  <blockquote className="italic pl-4 border-l-4 border-red-300">"Some people are meant to play the piano. Others are meant to carry the piano. Know which role you are in."</blockquote>
                  <blockquote className="italic pl-4 border-l-4 border-red-300">"Clarity beats complexity every time."</blockquote>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to lead every interview?</h2>
            <p className="text-xl text-red-100 mb-8">
              One twenty‑minute call. One recent clip. Three concrete fixes.<br />
              Your next media moment is coming. Be ready.
            </p>
            <a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-parchment text-red-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Schedule your consultation
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">MPI © 2025 | Privacy | Terms | FAQ | 
                <a 
                  href="https://www.linkedin.com/in/anotherjamesbrown/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 ml-1"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;