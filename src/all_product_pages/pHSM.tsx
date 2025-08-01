import React from 'react';

import pHSM_Logo from '../assets/pHSM.png';
import pHSM_Bg from '../assets/Hero_bg.jpg';

const PHSMPage = () => (
  <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    {/* Hero Section */}
    <section
      className="relative w-full flex items-center justify-center text-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{
        backgroundImage: `url(${pHSM_Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8">
        <img
          src={pHSM_Logo}
          alt="pHSM Logo"
          className="h-16 xs:h-20 sm:h-24 md:h-28 mb-4 mx-auto w-auto max-w-[350px]"
          style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}
        />
        <h2 className="text-lg xs:text-xl md:text-2xl text-white font-medium mb-4">pHSM</h2>
        <p className="text-white text-sm xs:text-base md:text-lg max-w-2xl mx-auto">
         Our Payment HSM securely manages LMKs, ZMKs, and PEKs, ensuring PCI‑DSS and PCI‑PIN compliance. It performs PIN translations and MAC validations within a secure environment, never exposing plaintext data. Dual-control, split-knowledge, and signed clearing files ensure full confidentiality and audit compliance.
        </p>
      </div>
    </section>

    {/* Coming Soon Section */}
    <section className="w-full flex items-center justify-center text-center py-16 bg-gradient-to-r from-[#FFFF] to-[#fff]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#133331] mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>pHSM Coming Soon</h2>
        <p className="text-[#133331] text-lg sm:text-xl opacity-80">Stay tuned for more updates and features on our Payment HSM platform!</p>
      </div>
    </section>

    
  </div>
);

export default PHSMPage;
