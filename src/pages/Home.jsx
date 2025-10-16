import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiTarget, FiCheckCircle, FiArrowRight, FiStar, FiClock, FiShield, FiTrendingUp} = FiIcons;

const Home = () => {
  const valueProps = [
    {
      title: "BEFORE BIG MOMENTS",
      description: "Product launches, funding announcements, industry profiles. We help you prepare for media moments that define how people see your work."
    },
    {
      title: "WHEN THINGS BREAK",
      description: "Crisis doesn't wait. We prep executives for pressure interviews in hours, not weeks. Day-of coaching available."
    },
    {
      title: "FOR CONSISTENCY",
      description: "Monthly appearances need monthly improvement. We work with leaders who can't afford unforced errors."
    }
  ];

  const frameworks = [
    {
      name: "Storytelling Triangle",
      description: "You + Them + Now. Land where your expertise meets what the audience actually cares about."
    },
    {
      name: "CALM Model",
      description: "Centering, Active Listening, Logic Over Emotion, Mindful Speaking. Stay grounded when questions turn hostile."
    },
    {
      name: "FIRE Method",
      description: "Flexibility, Insight, Response, Energy. Pivot when interviews go sideways without looking defensive."
    },
    {
      name: "Self-Awareness Matrix",
      description: "What you do well naturally, what you think you do well but don't, where your blind spots hide."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-parchment to-red-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              className="text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-red-900 mb-6 leading-tight">
                Your next high-stakes interview
                <span className="text-red-700 block">is coming.</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                A product launch. An earnings call. A crisis at 6 AM. When the cameras roll, you need more than talking points. You need a system that works when your brain doesn't.
              </p>
              <a
                href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-900 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get Your Analysis
                <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
            <motion.div
              initial={{opacity: 0, scale: 0.95}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.8, delay: 0.2}}
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

      {/* Three Value Props */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
                className="text-center p-6"
              >
                <h3 className="text-lg font-bold text-red-900 mb-4">{prop.title}</h3>
                <p className="text-gray-700 leading-relaxed">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.6}}
              viewport={{once: true}}
            >
              <h2 className="text-4xl font-bold text-red-900 mb-6">
                Why Smart People Stumble on Camera
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>You know the material cold. You've given this presentation a hundred times. Then the interview starts.</p>
                <p>Your sharp insights turn soft. Your three points drift into five rambling ones. The host takes control. The audience forgets your name.</p>
                <p>Most leaders treat media like a performance test. We treat it like navigation. When you have frameworks that work under pressure, you don't need to be perfect. You just need to be present.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.6}}
              viewport={{once: true}}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <blockquote className="text-xl font-medium text-red-900 italic mb-4">
                "Performance is fragile. Navigation is antifragile."
              </blockquote>
              <p className="text-gray-700">
                We don't teach performance. We teach presence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution - Four Frameworks */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-6">Four Frameworks That Fix It</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
                className="bg-parchment p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-red-900 mb-3">{framework.name}</h3>
                <p className="text-gray-700">{framework.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/philosophy"
              className="inline-flex items-center text-red-700 font-semibold hover:text-red-900 transition-colors duration-200"
            >
              See How We Apply These
              <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-8">Why This Works</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-6 font-medium">
                Twenty years on both sides of the camera.
              </p>
              <div className="text-left space-y-4 text-lg text-gray-700">
                <p>
                  <strong>Award-winning journalist and crisis communicator.</strong> USA TODAY podcast host. NPR reporter. Multiple AP and NYS Broadcaster Awards.
                </p>
                <p>
                  <strong>City of Rochester Internal Communications Manager and Speechwriter.</strong> Written for mayors during crisis. Built communication systems for ten departments.
                </p>
                <p>
                  I know what reporters want because I was one. I know what executives face because I've been in that chair at 3 AM when things go wrong.
                </p>
                <p className="font-medium text-red-900">
                  The frameworks aren't theory. They're distilled from thousands of interviews—the good ones, the bad ones, and the career-ending ones.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About James */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
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
                  Veteran journalist, political speechwriter, and crisis communicator. Twenty years on both sides of the camera.
                </p>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg font-medium text-red-900">Three Principles:</p>
                  <blockquote className="italic pl-4 border-l-4 border-red-300">
                    "Your moment is nothing if it is not shared."
                  </blockquote>
                  <blockquote className="italic pl-4 border-l-4 border-red-300">
                    "Some people are meant to play the piano. Others are meant to carry the piano. Know which role you are in."
                  </blockquote>
                  <blockquote className="italic pl-4 border-l-4 border-red-300">
                    "Clarity beats complexity every time."
                  </blockquote>
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
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Your Next Interview Matters</h2>
            <p className="text-xl text-red-100 mb-8">
              One call. One recent clip. Three specific fixes you can use immediately.<br />
              Twenty years of media and communications experience. We offer adaptable systems, not generic advice.
            </p>
            <a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-parchment text-red-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Schedule Your Consultation
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
              <p className="text-gray-400">
                MPI © 2025 |{' '}
                <Link to="/faq" className="text-red-400 hover:text-red-300">
                  FAQ
                </Link>{' '}
                |{' '}
                <a
                  href="https://www.linkedin.com/in/anotherjamesbrown/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300"
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