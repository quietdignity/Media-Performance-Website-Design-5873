import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronRight } = FiIcons;

const TopBar = () => {
  return (
    <div className="bg-red-800 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <span className="font-medium">Free 5-Minute Media Checklist</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="text-red-100 block sm:inline">Master your next media interview in minutes</span>
          </motion.div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="https://sendfox.com/lp/1j4pj6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 sm:mt-0 inline-flex items-center bg-parchment text-red-900 px-4 py-1 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors duration-200"
          >
            Get Free Checklist
            <SafeIcon icon={FiChevronRight} className="ml-1 w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;