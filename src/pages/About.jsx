import React from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiAward, FiMic, FiEdit3, FiTarget, FiArrowRight} = FiIcons;

const About = () => {
  const experience = [
    {
      title: "First decade in journalism",
      details: [
        "Hosted and produced podcasts for USA TODAY",
        "Reported for NPR affiliate WXXI Public Broadcasting", 
        "Won multiple Associated Press and New York State Broadcaster Awards"
      ]
    },
    {
      title: "Then I moved to the other side",
      details: [
        "Internal Communications Manager and Speechwriter for the City of Rochester",
        "Built communication strategies for ten departments",
        "Wrote for the Mayor during both opportunity and crisis"
      ]
    }
  ];

  const principles = [
    {
      quote: "Your moment is nothing if it is not shared.",
      explanation: "The best insight means nothing if you can't communicate it. Your job is to make people understand and care."
    },
    {
      quote: "Some people are meant to play the piano. Others are meant to carry the piano. Know which role you are in.",
      explanation: "Not every interview is about you being the star. Ego gets in the way more often than skill deficits."
    },
    {
      quote: "Clarity beats complexity every time.",
      explanation: "When you have thirty seconds to make a point, simplicity wins. Say the thing clearly first."
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
              Who I Am
            </h1>
            <h2 className="text-3xl font-bold text-red-700 mb-6">James A. Brown</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Veteran journalist, political speechwriter, and crisis communicator. Twenty years on both sides of the camera.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo and Intro */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-80 h-auto overflow-hidden rounded-lg shadow-xl flex-shrink-0"
            >
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753766899465-blob" 
                alt="James A. Brown"
                className="w-full h-auto object-cover object-center"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h3 className="text-2xl font-bold text-red-900 mb-6">The Experience That Built This:</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-red-800 mb-3">{exp.title}</h4>
                    <ul className="space-y-2">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <SafeIcon icon={FiTarget} className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Approach Works */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-red-900 mb-8 text-center">Why This Approach Works</h2>
            
            <div className="space-y-8 text-lg text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-red-900 mb-4">Most media training is theater.</h3>
                <p>Coaches teach you to memorize soundbites, bridge mechanically, suppress anything real.</p>
                <p className="mt-2 font-medium">That works until pressure hits. Then the script falls apart.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <p className="font-medium text-red-900 mb-2">We don't teach performance. We teach presence.</p>
                <p>The CALM Model isn't about looking calm. It's about being grounded so you can think clearly under pressure. The Storytelling Triangle isn't a messaging trick. It's understanding where you, your audience, and the moment actually intersect.</p>
              </div>
              
              <div>
                <p>When you have frameworks that work at a systems level, you don't need to remember what to say. You navigate in real time based on what's actually happening.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters Now */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-red-900 mb-8 text-center">Why This Matters Now</h2>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p>Modern media doesn't wait. Crises break on Twitter before your PR team wakes up. Livestreams mean no editing. Reporters know how to ask questions that expose preparation gaps.</p>
              
              <p>The executives who thrive aren't the most polished. They're the most present. They know how to find their center under pressure and navigate from there.</p>
              
              <div className="bg-parchment p-6 rounded-lg text-center">
                <blockquote className="text-xl font-medium text-red-900 italic">
                  "The frameworks aren't theory. They're distilled from thousands of interviews—the good ones, the bad ones, and the career-ending ones."
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Principles */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-red-900 mb-12 text-center">Three Principles</h2>
            
            <div className="space-y-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <blockquote className="text-xl font-medium text-red-900 italic mb-4 border-l-4 border-red-300 pl-4">
                    "{principle.quote}"
                  </blockquote>
                  <p className="text-gray-700">{principle.explanation}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Media Presence?</h2>
            <p className="text-xl text-red-100 mb-8">
              This isn't media training. It's communication transformation.
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

export default About;