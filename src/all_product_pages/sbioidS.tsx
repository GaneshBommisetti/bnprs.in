import React from 'react';

import SbioidsLogo from '../assets/Sbioids_Products/Sbioids_Logo.png';
import SbioidsBg from '../assets/Sbioids_Products/Sbioids_Bg.jpg';
import ComprehensiveBiometricIcon from '../assets/Sbioids_Products/Comprehensive Biometric Solutions.png';
import DemographicIcon from '../assets/Sbioids_Products/Precise Demographic Identification.png';
import EmotionIcon from '../assets/Sbioids_Products/Emotion Detection.png';
import MovementIcon from '../assets/Sbioids_Products/Movement-Tracking.png';
import FacialRecognitionIcon from '../assets/Sbioids_Products/Facial Recognition.png';
import SecurityEfficiencyIcon from '../assets/Sbioids_Products/Enhanced Security and Efficiency.png';



const SbioidSPage = () => (
  <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    {/* Hero Section */}
    <section
      className="relative w-full flex items-center justify-center text-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{
        backgroundImage: `url(${SbioidsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8">
        <img
          src={SbioidsLogo}
          alt="Sbioids Logo"
          className="h-16 xs:h-20 sm:h-24 md:h-28 mb-4 mx-auto w-auto max-w-[400px]"
          style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}
        />
        <h2 className="text-lg xs:text-xl md:text-2xl text-white font-medium mb-4">Sbioids</h2>
        <p className="text-white text-sm xs:text-base md:text-lg max-w-2xl mx-auto">
          Sbioids is an innovative AI-driven biometric engine designed to revolutionize security and authentication through advanced multi-modal biometric recognition. Our state-of-the-art system seamlessly integrates the recognition of fingerprints, iris, knuckle, voice, OCR (Optical Character Recognition), and touchless fingerprint technologies, powered by proprietary algorithms developed in-house. Leveraging artificial intelligence, bEngine delivers unparalleled accuracy, speed, and reliability.
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
              src={ComprehensiveBiometricIcon}
              alt="Comprehensive Biometric Solutions"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Comprehensive Biometric Solutions</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Sbioids offers a wide range of biometric capabilities, including demographic identification, emotion detection, movement tracking, and facial recognition.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={DemographicIcon}
              alt="Precise Demographic Identification"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Precise Demographic Identification</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm"> Identify individuals based on various demographic characteristics, facilitating targeted engagement and personalized services.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={EmotionIcon}
              alt="Emotion Detection"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Emotion Detection</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Capture and analyze emotions in real-time, enabling tailored interactions and enhancing customer experiences.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={MovementIcon}
              alt="Movement Tracking"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Movement Tracking</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Track movements accurately for applications in security, healthcare, and other industries requiring precise motion analysis.</p>
        </div>
        {/* Card 5 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={FacialRecognitionIcon}
              alt="Facial Recognition"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Facial Recognition</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Conduct facial recognition with exceptional accuracy, ensuring reliable identity verification for security and access control purposes.</p>
        </div>
        {/* Card 6 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={SecurityEfficiencyIcon}
              alt="Enhanced Security and Efficiency"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Enhanced Security and Efficiency</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">With Sbioids, businesses can bolster security measures while improving operational efficiency through streamlined biometric identification processes.</p>
        </div>
      </div>
    </div>
  </div>
);

export default SbioidSPage;
