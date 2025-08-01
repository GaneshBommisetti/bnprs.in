import React from 'react';

import CPersoLogo from '../assets/cPerso_Products/cPerso_log.png';
import CPersoBg from '../assets/cPerso_Products/cPerso_bg.jpg';
import ComprehensivePlatformIcon from '../assets/cPerso_Products/Comprehensive Platform.png';
import TailoredDesignsIcon from '../assets/cPerso_Products/Tailored Designs.png';
import UniqueSecureIcon from '../assets/cPerso_Products/Unique and Secure.png';
import BrandEnhancementIcon from '../assets/cPerso_Products/Brand Enhancement.png';
import InnovativeTechIcon from '../assets/cPerso_Products/Innovative-Technology.png';
import AutomatedOrderIcon from '../assets/cPerso_Products/Automated-Order-Management.png';

const CPersoPage = () => (
 <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    {/* Hero Section */}
    <section
      className="relative w-full flex items-center justify-center text-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{
        backgroundImage: `url(${CPersoBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8">
        <img
          src={CPersoLogo}
          alt="cPerso Logo"
          className="h-16 xs:h-20 sm:h-24 md:h-28 mb-4 mx-auto w-auto max-w-[420px]"
          style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}
        />
        <h2 className="text-lg xs:text-xl md:text-2xl text-white font-medium mb-4">Card Personalization</h2>
        <p className="text-white text-sm xs:text-base md:text-lg max-w-2xl mx-auto">
          Introducing cPerso, the ultimate solution for card personalization. With our comprehensive platform, tailor cards to perfection, ensuring unique and secure designs. Elevate your brand and enhance security with our innovative technology.
        </p>
      </div>
    </section>

    {/* Key Features Section */}
    <div className="max-w-6xl mx-auto px-4 mt-12 pb-16">
      {/* <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-[#133331] tracking-tight">OUR RESEARCH FOOTPRINT</h2> */}
      <div className="flex justify-center mb-4">
        <span className="inline-block w-16 h-1 rounded bg-[#f2992f]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={ComprehensivePlatformIcon}
              alt="Comprehensive Platform"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Comprehensive Platform</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">cPerso offers a complete suite of tools for card personalization, providing flexibility and customization options.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={TailoredDesignsIcon}
              alt="Tailored Designs"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Tailored Designs</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Create cards that reflect your brand identity and resonate with your audience, thanks to cPerso’s seamless customization capabilities.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={UniqueSecureIcon}
              alt="Unique and Secure"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Unique and Secure</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Ensure the security of your cards with personalized designs that make duplication difficult, enhancing fraud prevention measures</p>
        </div>
        {/* Card 4 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={BrandEnhancementIcon}
              alt="Brand Enhancement"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Brand Enhancement</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Elevate your brand presence with customized cards that leave a lasting impression on customers and clients.</p>
        </div>
        {/* Card 5 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={InnovativeTechIcon}
              alt="Innovative Technology"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Innovative Technology</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">cPerso leverages cutting-edge technology to deliver efficient and precise card personalization, keeping pace with industry standards.</p>
        </div>
        {/* Card 6 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={AutomatedOrderIcon}
              alt="Seamless Integration"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Seamless Integration</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Integrate cPerso seamlessly into your existing workflow, streamlining the card personalization process for optimal efficiency and convenience.</p>
        </div>
      </div>
    </div>
  </div>
);

export default CPersoPage;
