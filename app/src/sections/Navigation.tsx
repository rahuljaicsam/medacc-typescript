import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resourceLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Services', href: 'services' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Library', href: 'library' },
    { name: 'FAQ', href: 'faq' },
    { name: 'Startup Directory', href: 'startup-directory' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg font-display">M</span>
            </div>
            <span className="font-display font-bold text-xl text-slate-900">
              MED<span className="text-medical-blue">/</span>ACC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* About Us - Router Link */}
            <Link
              to="/about"
              className="text-slate-600 hover:text-medical-blue font-medium transition-colors link-underline"
            >
              About Us
            </Link>
            
            {/* Blogs - Anchor Link (only on home page) */}
            {isHomePage ? (
              <a
                href="#blogs"
                className="text-slate-600 hover:text-medical-blue font-medium transition-colors link-underline"
              >
                Blogs
              </a>
            ) : (
              <Link
                to="/#blogs"
                className="text-slate-600 hover:text-medical-blue font-medium transition-colors link-underline"
              >
                Blogs
              </Link>
            )}
            
            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-slate-600 hover:text-medical-blue font-medium transition-colors">
                Resources
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-slate-200 shadow-lg rounded-xl p-2">
                {resourceLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <a
                      href={isHomePage ? link.href : `/${link.href}`}
                      className="px-4 py-2 hover:bg-slate-50 rounded-lg cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login - Anchor Link */}
            {isHomePage ? (
              <a
                href="#login"
                className="text-slate-600 hover:text-medical-blue font-medium transition-colors link-underline"
              >
                Login
              </a>
            ) : (
              <Link
                to="/#login"
                className="text-slate-600 hover:text-medical-blue font-medium transition-colors link-underline"
              >
                Login
              </Link>
            )}
          </div>

          {/* Apply Button */}
          <div className="hidden md:block">
            <Link to="/apply">
              <Button
                size="sm"
                className="bg-medical-blue hover:bg-medical-blue-dark text-white rounded-lg px-6 font-semibold shadow-lg shadow-medical-blue/20 hover:shadow-medical-blue/40 transition-all hover:scale-105"
              >
                Apply
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-slate-100"
          >
            <div className="px-4 py-6 space-y-4">
              {/* About Us - Router Link */}
              <Link
                to="/about"
                className="block text-slate-700 hover:text-medical-blue font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Blogs */}
              <Link
                to="/#blogs"
                className="block text-slate-700 hover:text-medical-blue font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              
              {resourceLinks.map((link) => (
                <Link
                  key={link.name}
                  to={`/${link.href}`}
                  className="block text-slate-600 hover:text-medical-blue py-2 pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                to="/#login"
                className="block text-slate-700 hover:text-medical-blue font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              
              <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white mt-4">
                  Apply
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
