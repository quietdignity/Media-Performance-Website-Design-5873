import React from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiTarget, FiArrowRight, FiCheckCircle, FiX, FiNavigation, FiShield} = FiIcons;

const Philosophy = () => {
  const principles = [
    {
      title: "Presence Beats Performance",
      description: "You don't need to be perfect. You need to be grounded. When you're actually centered (not performing confidence), your message lands clearer, your body language aligns naturally, and tough questions don't rattle you."
    },
    {
      title: "Your Moment Is Neutral",
      description: "That tough question isn't an attack until you make it one. Every communication moment is completely neutral until your response defines it. You're navigating conditions, not fighting disasters."
    },
    {
      title: "Systems Beat Scripts",
      description: "Scripts work in the right circumstance. Interviews aren't one of them. Systems allow your to think and adapt on your feet. Our frameworks work whether you're facing a friendly podcast or a hostile hearing. You're learning how to think under pressure."
    }
  ];

  const frameworks = [
    "CALM Model: Centering, Active Listening, Logic Over Emotion, Mindful Speaking",
    "Storytelling Triangle: You + Them + Now (situational intelligence)",
    "FIRE Method: Flexibility, Insight, Response, Energy",
    "Self-Awareness Matrix: Your strengths, blind spots, and gaps"
  ];

  const results = [
    "Real Systems, Not Theory",
    "Four Core Frameworks",
    "Beyond Individual Performance",
    "Both Sides of the Camera"
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
              Why This Approach
              <span className="text-red-700 block">Works</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Problem with Traditional Training */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-red-900 mb-8 text-center">The Problem With Traditional Media Training</h2>
            <div className="space-y-8 text-lg text-gray-700">
              <p>Most coaches teach you to approach an interview like a speech. Memorize soundbites. Practice pivots. Look confident.</p>
              <p className="font-medium text-red-900">That breaks the moment pressure hits.</p>
              <div className="bg-red-50 p-8 rounded-lg text-center">
                <p className="text-xl font-semibold text-red-900 mb-4">
                  Speeches are monologues you control. Interviews are conversations you navigate.
                </p>
                <p>We don't teach performance. We teach navigation. Systems that work when your brain doesn't. Presence that holds when plans fall apart.</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-medium text-red-900">
                  The difference: Performance is fragile. Navigation is antifragile.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Core Principles */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-red-900 mb-12 text-center">Three Core Principles</h2>
            <div className="space-y-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, delay: index * 0.1}}
                  viewport={{once: true}}
                  className="bg-white p-8 rounded-lg shadow-sm"
                >
                  <h3 className="text-2xl font-bold text-red-900 mb-4">{index + 1}. {principle.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-red-900 mb-12 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-parchment p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-900 mb-4">Time tested systems</h3>
                <p className="text-gray-700 mb-4">
                  Media Performance Workbook: 46 pages of frameworks and templates. Tough Question Response System. Competitive Positioning Scripts. Crisis Communication Timeline. 20+ storytelling structures.
                </p>
              </div>
              <div className="bg-parchment p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-900 mb-4">Four Core Frameworks:</h3>
                <ul className="space-y-2">
                  {frameworks.map((framework, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{framework}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-900 mb-4">Beyond Individual Performance</h3>
                <p className="text-gray-700">
                  We've built communication systems for entire city departments. If you need organizational transformation alongside personal development, we speak that language.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-900 mb-4">Both Sides of the Camera</h3>
                <p className="text-gray-700">
                  Twenty years as journalist and speechwriter. I know what reporters want because I was one. I know what executives face because I've written speeches at 3 AM during crisis.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Real Result */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-8">Real Results</h2>
            <div className="space-y-6 text-lg text-gray-700 mb-12">
              <p>The frameworks that work on camera work in boardrooms, investor calls, and crisis moments.</p>
              <p>You're not learning to perform for media. You're learning to communicate with clarity and presence under any pressure.</p>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-red-900">
                  This isn't media training. It's communication transformation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Want to See If This Fits?</h2>
            <p className="text-xl text-red-100 mb-8">
              Twenty-minute consultation. No pressure, no pitch.
            </p>
            <a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-parchment text-red-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Book Your Call
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;