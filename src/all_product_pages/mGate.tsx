
import mGateLogo from '../assets/mGate_Products/mGate_logo.png';
import mGateBg from '../assets/mGate_Products/mGate_bg.jpg';
import PortalIcon from '../assets/mGate_products/Comprehensive-Portal-Functionality-150x150.png';
import MultiChannelIcon from '../assets/mGate_products/Multi-channel-Messaging-150x150.png';
import OTPFeatureIcon from '../assets/mGate_products/Multi-Channel-OTP-MC-OTP-Feature-150x150.png';
import ScalabilityIcon from '../assets/mGate_products/Scalability-and-Performance-150x150.png';
import SeamlessTransactionIcon from '../assets/mGate_products/Seamless-Transaction-Ecosystem-150x150.png';
import ZeroDowntimeIcon from '../assets/mGate_products/Zero-Downtime-Policy-150x150.png';


// --- Video Section ---
const MGateVideoSection = () => (
  <section className="w-full py-16 bg-[#f2992f]/10 flex items-center justify-center">
    <div className="max-w-5xl w-full mx-auto rounded-2xl shadow-2xl overflow-hidden border border-[#f2992f]/30 flex flex-col md:flex-row items-center md:items-stretch">
      {/* Video */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-4 bg-white/60 backdrop-blur-lg">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            className="w-full h-full min-h-[220px] md:min-h-[300px] rounded-2xl"
            src="https://www.youtube.com/embed/z6HZUEjmGdk"
            title="mGateDemo Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Text */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8 bg-[#f2992f]/10">
        <h3 className="text-2xl font-bold text-[#133331] mb-4">mGate Demo Video</h3>
        <p className="text-[#133331] text-base md:text-lg text-center">Watch the demo to see mGate in action.</p>
      </div>
    </div>
  </section>
);

const MGatePage = () => (
  <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    {/* Hero Section */}
    <section
      className="relative w-full flex items-center justify-center text-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{
        backgroundImage: `url(${mGateBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8">
        <img
          src={mGateLogo}
          alt="mGate Logo"
          className="h-16 xs:h-20 sm:h-24 md:h-28 mb-4 mx-auto w-auto max-w-[350px]"
          style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}
        />
        <h2 className="text-lg xs:text-xl md:text-2xl text-white font-medium mb-4">Messaging Gateway (mGate)</h2>
        <p className="text-white text-sm xs:text-base md:text-lg max-w-2xl mx-auto">
          Step into the future of messaging with mGate – your smart notification system.
          Say goodbye to outdated methods and connect seamlessly, efficiently, and affordably.
          Experience the power of mGate – reach your audience smarter and faster.
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
          <h3 className="font-bold text-lg text-[#133331] mb-1">Multi-channel Messaging:</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Reach your audience through In-App notifications, WhatsApp, Viber, SMS, and social media platforms, all from one platform.</p>
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
          <h3 className="font-bold text-lg text-[#133331] mb-1">Zero-Downtime Policy</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Enjoy uninterrupted service with mGate’s zero-downtime policy.</p>
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
          <h3 className="font-bold text-lg text-[#133331] mb-1">Scalability and Performance</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Process a staggering 16,000 messages per minute with billions processed effortlessly in just three years.</p>
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
          <h3 className="font-bold text-lg text-[#133331] mb-1">Seamless Transaction Ecosystem</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Thrive within closed-loop payment ecosystems, ensuring seamless transactions across diverse environments.</p>
        </div>
        {/* Card 5 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={SeamlessTransactionIcon}
              alt="Seamless Transaction Ecosystem"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Multi-Channel OTP (MC-OTP) Feature</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Deliver messages swiftly with dynamic channel priorities.</p>
        </div>
        {/* Card 6 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={ZeroDowntimeIcon}
              alt="Zero Downtime Policy"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Comprehensive Portal Functionality</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Access a powerful portal with user management, bulk alerts, real-time updates, history tracking, and spam control.</p>
        </div>
      </div>
    </div>
    {/* Video Section */}
    <MGateVideoSection />
  </div>
);

export default MGatePage;
