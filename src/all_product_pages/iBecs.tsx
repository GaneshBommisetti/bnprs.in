import React from 'react';
import IBecsLogo from '../assets/iBecs_Products/Asset-2@0.5x-2.png';
import IBecsBg from '../assets/iBecs_Products/iBecs_bg.jpg';
import BiometricIcon from '../assets/iBecs_Products/Advanced-Biometric-Enrollment.png';
import IdentityIcon from '../assets/iBecs_Products/Secure-Identity-Verification.png';
import UserExperienceIcon from '../assets/iBecs_Products/Simplified-User-Experience.png';
import SecurityIcon from '../assets/iBecs_Products/Boosted-Security.png';
import EfficiencyIcon from '../assets/iBecs_Products/Enhanced-Efficiency.png';
import FutureProofIcon from '../assets/iBecs_Products/Future-Proof-Solution.png';

const IBecsPage = () => (
  <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    {/* Hero Section */}
    <section
      className="relative w-full flex items-center justify-center text-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{
        backgroundImage: `url(${IBecsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8">
        <img
          src={IBecsLogo}
          alt="iBecs Logo"
          className="h-16 xs:h-20 sm:h-24 md:h-28 mb-4 mx-auto w-auto max-w-[350px]"
          style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}
        />
        <h2 className="text-lg xs:text-xl md:text-2xl text-white font-medium mb-4">Integrated Biometric Enrollment and Card System</h2>
        <p className="text-white text-sm xs:text-base md:text-lg max-w-2xl mx-auto">
          Introducing iBecs, your solution for simplified user enrollment through cutting-edge biometric methods. With fingerprint, facial, and IRIS scanning capabilities, our system ensures secure identity verification, enhancing both security and efficiency for businesses.
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
              src={BiometricIcon}
              alt="Advanced Biometric Enrollment"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Advanced Biometric Enrollment</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">iBecs utilizes state-of-the-art biometric technology, including fingerprint, facial, and IRIS scanning, for secure user enrollment.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={IdentityIcon}
              alt="Secure Identity Verification"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">
            Secure Identity Verification</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Enhance security measures with iBecs, as it verifies identities with precision and reliability, mitigating risks associated with traditional authentication methods.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={UserExperienceIcon}
              alt="Simplified User Experience"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Simplified User Experience</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Say goodbye to complex enrollment processes. iBecs streamlines user enrollment, making it convenient and hassle-free for both businesses and users.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={SecurityIcon}
              alt="Boosted Security"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Boosted Security</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Strengthen security protocols with iBecs’ advanced biometric authentication, providing a robust defense against unauthorized access and identity fraud.</p>
        </div>
        {/* Card 5 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={EfficiencyIcon}
              alt="Enhanced Efficiency"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Enhanced Efficiency</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Speed up enrollment processes and reduce administrative burdens with iBecs, improving operational efficiency for businesses.</p>
        </div>
        {/* Card 6 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={FutureProofIcon}
              alt="Future-Proof Solution"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Future-Proof Solution</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Stay ahead of evolving security challenges with iBecs, a versatile and adaptable solution designed to meet the demands of modern authentication requirements.</p>
        </div>
      </div>
    </div>
  </div>
);

export default IBecsPage;
