import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, Send, Facebook, Linkedin, Instagram, Twitter, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#0A192F] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Company Info & Socials */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#0A192F] flex items-center justify-center shadow-md">
                <ShieldCheck className="w-6 h-6 text-[#0A192F]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider text-white">
                  APEX <span className="text-[#00E5FF]">GLOBAL</span>
                </span>
                <span className="text-[10px] tracking-widest text-gray-400 uppercase -mt-1 font-medium">
                  Logistics
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering the Future, Today. Apex Global Logistics provides premier end-to-end cargo and logistics solutions across air, sea, road, and project freight worldwide.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#facebook" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#00E5FF] hover:text-[#0A192F] text-gray-300 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#00E5FF] hover:text-[#0A192F] text-gray-300 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#instagram" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#00E5FF] hover:text-[#0A192F] text-gray-300 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#twitter" aria-label="Twitter" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#00E5FF] hover:text-[#0A192F] text-gray-300 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-l-4 border-[#00E5FF] pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center space-x-2">
                  <span>›</span> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center space-x-2">
                  <span>›</span> <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center space-x-2">
                  <span>›</span> <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/offices" className="text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center space-x-2">
                  <span>›</span> <span>Our Offices</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center space-x-2">
                  <span>›</span> <span>Insights & Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center space-x-2">
                  <span>›</span> <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center space-x-2">
                  <span>›</span> <span>Get a Quote</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Office Locations */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-l-4 border-[#00E5FF] pl-3">
              Global Headquarters
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
                <span>1234 Trade Center Drive, Chicago, IL 60607, USA</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#00E5FF] shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#00E5FF] shrink-0" />
                <span>chicago@apexgloballogistics.com</span>
              </li>
              <li className="pt-2 text-xs text-gray-400">
                <span className="font-semibold text-white">Other Hubs:</span> China (Guangzhou/Yiwu), Dubai (UAE), Philippines (Manila)
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 border-l-4 border-[#00E5FF] pl-3">
              Newsletter
            </h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our weekly newsletter for global shipping updates, customs alerts, and logistics trends.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00E5FF]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#00E5FF] text-[#0A192F] font-semibold py-2.5 rounded-lg hover:bg-[#33edff] transition-colors flex items-center justify-center space-x-2 text-sm shadow-md"
              >
                <span>Subscribe Now</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <div className="flex items-center space-x-2 text-emerald-400 text-xs mt-2 animate-pulse">
                <CheckCircle2 className="w-4 h-4" />
                <span>Successfully subscribed to Apex Insights!</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>© 2026 Apex Global Logistics. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-[#00E5FF] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-[#00E5FF] transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#sitemap" className="hover:text-[#00E5FF] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
