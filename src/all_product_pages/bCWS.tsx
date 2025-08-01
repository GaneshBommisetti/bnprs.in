import React from 'react';
import BCWSLogo from '../assets/bCWS_Products/Asset-6@0.5x-2.png';
import BCWSBg from '../assets/bCWS_Products/bCWS_bg.jpg';
import PortalIcon from '../assets/bCWS_Products/Vigilance-Against-Crime.png';
import MultiChannelIcon from '../assets/bCWS_Products/Empowering-Law-Enforcement.png';
import OTPFeatureIcon from '../assets/bCWS_Products/Community-Engagement.png';
import ScalabilityIcon from '../assets/bCWS_Products/Real-Time-Alerts.png';
import DataAnalysisIcon from '../assets/bCWS_Products/Community-Engagement.png';
import SafetySecurityIcon from '../assets/bCWS_Products/Empowering-Law-Enforcement.png';

const BCWSPage = () => (
  <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    {/* Hero Section */}
    <section
      className="relative w-full flex items-center justify-center text-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{
        backgroundImage: `url(${BCWSBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8">
        <img
          src={BCWSLogo}
          alt="bCWS Logo"
          className="h-16 xs:h-20 sm:h-24 md:h-28 mb-4 mx-auto w-auto max-w-[350px]"
          style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}
        />
        <h2 className="text-lg xs:text-xl md:text-2xl text-white font-medium mb-4">Criminal Watch System</h2>
        <p className="text-white text-sm xs:text-base md:text-lg max-w-2xl mx-auto">
          Introducing bCWS, the Criminal Watch System, a cutting-edge platform designed to keep you vigilant against criminal activity. Empowering both law enforcement agencies and communities, our robust system provides real-time alerts and in-depth data analysis to enhance safety and security measures.
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
              src={PortalIcon}
              alt="Comprehensive Portal Functionality"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Vigilance Against Crime</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">bCWS enables users to stay vigilant by tracking and monitoring criminal activity in real-time.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={MultiChannelIcon}
              alt="Multi-channel Messaging"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Empowering Law Enforcement</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Our platform empowers law enforcement agencies with valuable insights and tools to combat crime effectively.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={OTPFeatureIcon}
              alt="Multi-Channel OTP Feature"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Community Engagement</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Engage with your community to build safer neighborhoods and collaborate in the fight against crime with bCWS.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={ScalabilityIcon}
              alt="Scalability and Performance"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Real-Time Alerts</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Receive instant alerts about suspicious activities and potential threats to take proactive measures.</p>
        </div>
        {/* Card 5 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={DataAnalysisIcon}
              alt="Comprehensive Data Analysis"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Comprehensive Data Analysis</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Utilize our comprehensive data analysis tools to identify trends, patterns, and areas of concern for targeted intervention.</p>
        </div>
        {/* Card 6 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={SafetySecurityIcon}
              alt="Enhancing Safety and Security"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Enhancing Safety and Security</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">With bCWS, bolster safety and security measures to protect individuals, businesses, and communities from criminal elements.</p>
        </div>
      </div>
    </div>
  </div>
);

export default BCWSPage;
