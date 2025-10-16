import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiMenu, FiX} = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {name: 'Home', path: '/'},
    {name: 'Services', path: '/services'},
    {name: 'Philosophy', path: '/philosophy'},
    {name: 'About', path: '/about'},
    {name: 'FAQ', path: '/faq'},
    {name: 'Contact', path: '/contact'}
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-parchment shadow-sm border-b border-red-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-700 to-red-900 rounded-lg flex items-center justify-center">
              <span className="text-parchment font-bold text-sm">MPI</span>
            </div>
            <span className="font-semibold text-red-900 text-lg">Media Performance Insights</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-red-800 border-b-2 border-red-800'
                    : 'text-red-700 hover:text-red-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-900 transition-colors duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-red-700 hover:text-red-900 transition-colors duration-200"
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            className="md:hidden py-4 border-t border-red-100"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-red-800 bg-red-50 rounded-lg'
                      : 'text-red-700 hover:text-red-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-900 transition-colors duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;