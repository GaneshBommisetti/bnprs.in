import React from 'react';
import EventBg from '../assets/Event_bg.jpg';

const events = [
  {
    title: 'Fintech India Summit 2025',
    date: 'August 2025',
    image: '/src/assets/Products/mgate.jpg',
    description: 'Join us at the Fintech India Summit where BNPRS will present the future of biometric payments and digital identity solutions.',
    gallery: ['/src/assets/Products/bPass.jpg', '/src/assets/Products/wGate.webp'],
  },
  {
    title: 'Smart Tech Expo 2025',
    date: 'May 2025',
    image: '/src/assets/Products/bcws.jpg',
    description: 'BNPRS demonstrated its latest products and networked with industry leaders at the Smart Tech Expo in Mumbai.',
    gallery: ['/src/assets/Products/uTMS.webp', '/src/assets/Products/Uidpay.webp'],
  },
];

const Events: React.FC = () => {
  return (
    <>
     
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
              <span className="inline-block px-4 py-3 rounded-full text-xs font-semibold tracking-wider bg-[#f2992f]/90 text-white mb-4">Events</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">BNPRS Events & Highlights</h1>
            <p className="text-lg text-slate-200 mb-8 max-w-xl">See our participation in industry events, conferences, and exhibitions. Discover our journey and milestones in the world of biometrics and payments.</p>
          </div>
          {/* Right: Overlapping Images */}
          <div className="flex-1 flex justify-center items-center relative w-full max-w-lg">
            {/* Optionally, you can keep the image or remove for pure bg effect */}
            {/* <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="Contact BNPRS" className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover z-20 border-2 border-white" /> */}
          </div>
        </div>
      </section>







      {/* Events List */}
      <section className="min-h-[60vh] py-16 bg-white pt-8">
        <div className="max-w-5xl mx-auto px-4">
          

          {/* YouTube Channel Section */}
          <div className="mt-16 flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#133331] mb-4">Watch Our Event Highlights</h2>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">Catch up on our latest events, product launches, and industry talks on our official YouTube channel.</p>
            <div className="w-full max-w-2xl grid md:grid-cols-2 gap-8 mb-8">
              {/* Video 1 */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-w-16 aspect-h-9 mb-3">
                  <iframe
                    src="https://www.youtube.com/embed/3llMCFxC4Xg"
                    title="BNPRS at Fintech India Summit 2025"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 md:h-56 rounded-lg shadow-lg"
                  ></iframe>
                </div>
                <div className="text-base font-semibold text-[#f2992f] mb-1 text-center">BNPRS's First Workshop</div>
                <div className="text-gray-600 text-sm text-center">BNPRS's First workshop in Yanam on 07-07-2023</div>
              </div>
              {/* Video 2 */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-w-16 aspect-h-9 mb-3">
                  <iframe
                    src="https://www.youtube.com/embed/aWQDxkLNdkA"
                    title="BNPRS Smart Tech Expo 2025"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 md:h-56 rounded-lg shadow-lg"
                  ></iframe>
                </div>
                <div className="text-base font-semibold text-[#f2992f] mb-1 text-center">BNPRS Office at a glance</div>
                <div className="text-gray-600 text-sm text-center">An intimate exploration of our revitalized workspace, enhancing our ability to provide superior service to our clients.</div>
              </div>
              {/* Video 3 */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-w-16 aspect-h-9 mb-3">
                  <iframe
                    src="https://www.youtube.com/embed/pU9Ze0wqGeQ"
                    title="BNPRS Product Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 md:h-56 rounded-lg shadow-lg"
                  ></iframe>
                </div>
                <div className="text-base font-semibold text-[#f2992f] mb-1 text-center">mPOS System and Fuel Dispenser Communication Demo</div>
                <div className="text-gray-600 text-sm text-center">Welcome to our demonstration video showcasing the seamless integration between a point-of-sale (POS) system and a fuel dispenser. This innovative solution streamlines fuel station operations, enhancing efficiency and customer experience.</div>
              </div>
              {/* Video 4 */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-w-16 aspect-h-9 mb-3">
                  <iframe
                    src="https://www.youtube.com/embed/YQhngrVycA0"
                    title="BNPRS Team Event"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 md:h-56 rounded-lg shadow-lg"
                  ></iframe>
                </div>
                <div className="text-base font-semibold text-[#f2992f] mb-1 text-center">BNPRS Annual Day Retreat: A Day of Celebration and Connection</div>
                <div className="text-gray-600 text-sm text-center">Experience the joy and togetherness of BNPRS’s Annual Day Retreat, where our team stepped away from the everyday hustle to create lasting memories in a serene setting. This video captures the spirit of collaboration, laughter, and the special bond that makes the BNPRS family truly unique.</div>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@BNPRS_Official"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#f2992f] hover:bg-[#d17d1b] text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition-all duration-200"
            >
              Visit our YouTube Channel
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
