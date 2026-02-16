import { ArrowRight, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const programs = [
    { name: 'Med/Acc Program', href: '#' },
    { name: 'Startup School', href: '#' },
    { name: 'Work at a Startup', href: '#' },
    { name: 'Co-Founder Matching', href: '/co-founder-matching' },
  ];

  const company = [
    { name: 'Med/Acc Blog', href: '#blogs' },
    { name: 'Contact', href: '/contact' },
    { name: 'Press', href: '#' },
    { name: 'People', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Use', href: '/terms-of-use' },
  ];

  const resources = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Library', href: '/library' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Startup Directory', href: '/startup-directory' },
    { name: 'Startup Library', href: '#' },
    { name: 'Investors', href: '#' },
    { name: 'Global Startups', href: '#' },
    { name: 'Launch Med/Acc', href: '#' },
    { name: 'Med/Acc Deals', href: '#' },
  ];

  const socials = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl font-display">M</span>
              </div>
              <span className="font-display font-bold text-2xl">
                MED<span className="text-medical-blue">/</span>ACC
              </span>
            </a>
            <p className="text-slate-400 text-lg mb-6 max-w-sm">
              Make something that cures people. We accelerate healthtech and biotech 
              ventures from idea to impact.
            </p>
            <Button
              size="lg"
              className="bg-medical-blue hover:bg-medical-blue-dark text-white px-8 py-6 rounded-xl font-semibold group animate-pulse-glow"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-white mb-4">Programs</h3>
            <ul className="space-y-3">
              {programs.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-medical-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 Med/Acc. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-medical-blue hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
