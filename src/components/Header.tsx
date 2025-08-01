import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import orangeLogo from '../assets/orange_logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Show loader only on home page
  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1200); // 1.2s loader
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Add Company dropdown with submenus and Products main menu
  const navigationItems = [


    {
      name: 'Products',
      id: 'products',
      path: '/main-product',
    },
    {
      name: 'Company',
      id: 'company',
      items: [
        { name: 'About Us', path: '/about' },
        { name: 'News', path: '/news' },
        { name: 'Events', path: '/events' },
        { name: 'Careers', path: '/careers' },

      ],
    },
    
  ];

  return (
    <>


      {/* Page Loader: Only on Home Page */}
      {loading && location.pathname === "/" && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/95">
          <div className="animate-spin rounded-full border-4 border-[#f2992f] border-t-transparent h-16 w-16"></div>
        </div>
      )}


      <header className="fixed top-0 left-0 right-0 z-50 bg-[#133331] backdrop-blur-md border-b border-[#133331]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={orangeLogo} alt="BNPRS Logo" className="w-40 h-30 " />
          
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${location.pathname === '/' ? 'text-[#f2992f]' : 'text-white'} hover:text-[#f2992f]`}
            >
              Home
            </Link>
            {navigationItems.map((item) => (
              item.items ? (
                <div key={item.id} className="relative">
                  <button
                    className={`flex items-center space-x-1 px-4 py-2 font-medium transition-colors duration-200 ${location.pathname.startsWith('/' + item.id) || activeDropdown === item.id ? 'text-[#f2992f]' : 'text-white'} hover:text-[#f2992f]`}
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === item.id && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-4">
                        <div className="space-y-2">
                          {item.items.map((subItem, idx) => (
                            <Link
                              key={idx}
                              to={subItem.path}
                              className={`block px-4 py-2 rounded-lg hover:bg-[#f2992f]/10 text-slate-800 hover:text-[#f2992f] transition-colors ${location.pathname === subItem.path ? 'text-[#f2992f] font-bold' : ''}`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 px-4 py-2 ${location.pathname === item.path ? 'text-[#f2992f]' : 'text-white'} hover:text-[#f2992f]`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              className={`font-medium transition-colors duration-200 ${location.pathname === '/contact' ? 'text-[#f2992f]' : 'text-white'} hover:text-[#f2992f]`}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200">
              {/* Responsive Toggle Switch: Go to BNPRS.in */}
              <button
                className="relative w-16 h-8 focus:outline-none flex-shrink-0"
                onClick={() => window.open('https://bnprs.in/', '_blank')}
                aria-label="Go to BNPRS.in"
              >
                <span className="absolute inset-0 rounded-full bg-[#f2992f] transition-colors duration-300"></span>
                <span className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300"></span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-white select-none flex items-center justify-center h-6">AI</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#f2992f] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block text-slate-700 hover:text-[#f2992f] font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              {navigationItems.map((item) => (
                item.items ? (
                  <div key={item.id} className="space-y-2">
                    <h3 className="font-semibold text-slate-800">{item.name}</h3>
                    <div className="pl-4 space-y-2">
                      {item.items.map((subItem, idx) => (
                        <Link key={idx} to={subItem.path} className="block text-slate-600 hover:text-[#f2992f] transition-colors" onClick={() => setIsMenuOpen(false)}>
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.id}
                    to={item.path}
                    className="block text-slate-700 hover:text-[#f2992f] font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link to="/contact" className="block text-slate-700 hover:text-[#f2992f] font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
                {/* Responsive Toggle Switch: Go to BNPRS.in (Mobile) */}
                <button
                  className="relative w-16 h-8 focus:outline-none flex-shrink-0 mx-auto"
                  onClick={() => window.open('http://bnprs.ai/', '_blank')}
                  aria-label="Go to BNPRS.in"
                >
                  <span className="absolute inset-0 rounded-full bg-[#f2992f] transition-colors duration-300"></span>
                  <span className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300"></span>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-white select-none flex items-center justify-center h-6">AI</span>
                </button>
                <button className="w-full bg-red text-white px-6 py-3 rounded-lg font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      </header>
    </>
  );
};

export default Header;