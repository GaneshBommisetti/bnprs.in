import React from 'react';
import {
  Fingerprint,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Globe
} from 'lucide-react';

import footerlogo from '../assets/orange_logo.png';


const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/BNPRS-Pvt-Ltd/100095172830422/', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/Bnprs__Official', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/bnprs/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/bnprs_official/', label: 'Instagram' }
  ];

  return (
    <footer className="bg-slate-900 text-white">


      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-start">

          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
            <img
              src={footerlogo}
              alt="BNPRS Logo"
              className="w-40 h-auto mb-2"
            />
            <p className="text-slate-300 text-sm md:text-base">
              BNPRS integrates Biometrics, Next-Gen AI, and Payment technologies to enable secure, reliable, and seamless digital transactions—redefining the future of identity and payments.
            </p>
          </div>

          {/* R&D Office */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f2992f]">BNPRS AI Hub</h4>
            <div className="text-slate-300 space-y-1 leading-relaxed">
              <p>BNPRS Research Lab,</p>
              <p>Tower F – 4th Floor – Office No. 1,</p>
              <p>Technology Research Park (TRP),</p>
              <p>IIT Hyderabad Campus,</p>
              <p>Kandi, Sangareddy – 502285.</p>
              <p>Telangana, INDIA.</p>
            </div>
          </div>

          {/* Tech Office */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f2992f]">BNPRS Tech Hub</h4>
            <div className="text-slate-300 space-y-1 leading-relaxed">
              <p>BNPRS Private Limited</p>
              <p>#5-216/1-3,</p>
              <p>AI Technology Park, Amalapuram</p>
              <p>Konaseema – 533201</p>
              <p>Andhra Pradesh, INDIA.</p>
              <p>Tel. No.: +91 75694 49657</p>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div
            className="flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0"
          >
            <div className="text-slate-400 text-sm w-full md:w-auto">
              © 2025 BNPRS Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex items-center justify-center w-full md:w-auto space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 hover:bg-[#f2992f] rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
      @media (max-width: 768px) {
        footer .max-w-7xl > div.flex {
          flex-direction: column !important;
          align-items: center !important;
          text-align: center !important;
        }
        footer .max-w-7xl > div.flex > div {
          width: 100% !important;
          justify-content: center !important;
          align-items: center !important;
          text-align: center !important;
        }
      }
    `}</style>
    </footer>
  );
};

export default Footer;