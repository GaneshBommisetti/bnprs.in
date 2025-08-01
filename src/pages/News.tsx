import React from 'react';
import EventBg from '../assets/News_bg.jpg';

const newsItems = [
  {
    title: 'BNPRS Launches Next-Gen Biometric Device',
    date: 'July 2025',
    image: '/src/assets/Products/bNet.webp',
    summary: 'Our new device combines facial recognition and secure payment for seamless transactions. Now available for enterprise clients.',
  },
  {
    title: 'BNPRS at Hyderabad Tech Expo',
    date: 'June 2025',
    image: '/src/assets/Products/mPOS.jpg',
    summary: 'We showcased our latest innovations in biometrics and fintech at the Hyderabad Tech Expo. Thank you to everyone who visited our booth!',
  },
  {
    title: 'AI in Payments: BNPRS Panel Discussion',
    date: 'May 2025',
    image: '/src/assets/Products/uTMS.webp',
    summary: 'Our CTO joined a panel on the future of AI in payments at the Smart Tech Conference.',
  },
];

const News: React.FC = () => {
  return (
    <>
      {/* Hero Section */}

      {/* <section className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center bg-slate-900 overflow-hidden gap-10 md:gap-0">
        <img
          src="/src/assets/Hero_bg.jpg"
          alt="Events Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <span className="bg-[#f2992f] text-white font-semibold px-5 py-2 rounded-full mb-4 text-sm tracking-widest">BNPRS News</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">BNPRS News & Announcements
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">Get the latest updates, product launches, and company news from BNPRS. Stay ahead with our innovations in biometrics and payment technology.</p>
        </div>
        <div className="absolute inset-0 bg-slate-900/60" />
      </section> */}


{/* Modern Consulting Hero Section for Contact Page */}
      <section
        className="w-full py-20 relative bg-[#133331]"
        style={{
          backgroundImage: `url(${EventBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-[#133331]/80 z-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center min-h-[600px] gap-10 md:gap-0 z-10">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start text-left py-12">
            <div className="mb-4">
              <span className="inline-block px-4 py-3 rounded-full text-xs font-semibold tracking-wider bg-[#f2992f]/90 text-white mb-4">News</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">BNPRS News & Announcements</h1>
            <p className="text-lg text-slate-200 mb-8 max-w-xl">Get the latest updates, product launches, and company news from BNPRS. Stay ahead with our innovations in biometrics and payment technology.</p>
          </div>
          {/* Right: Overlapping Images */}
          <div className="flex-1 flex justify-center items-center relative w-full max-w-lg">
            {/* Optionally, you can keep the image or remove for pure bg effect */}
            {/* <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="Contact BNPRS" className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover z-20 border-2 border-white" /> */}
          </div>
        </div>
      </section>






      {/* News List - Coming Soon */}
      <section className="min-h-[40vh] flex items-center justify-center bg-white pt-8 pb-20">
        <div className="text-center">
          <span className="inline-block bg-[#f2992f] text-white font-semibold px-6 py-2 rounded-full mb-6 text-lg tracking-widest">COMING SOON</span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4">Exciting News & Announcements are on the way!</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">Stay tuned for the latest updates, product launches, and company news from BNPRS. We are preparing something special for you.</p>
        </div>
      </section>
    </>
  );
};

export default News;
