import mPOSLogo from '../assets/mPOS_Product/Asset 3ldpi.png';
import mPOSBg from '../assets/mPOS_Product/mPOSbg.jpg';
import UniversalTerminalIcon from '../assets/mPOS_Product/Universal-Terminal-Management-150x150.png';
import SmartNotificationsIcon from '../assets/mPOS_Product/Smart-Notifications-150x150.png';
import SeamlessTransactionIcon from '../assets/mPOS_Product/Seamless-Transaction-Ecosystem-150x150.png';
import RapidAdoptionIcon from '../assets/mPOS_Product/Rapid Adoption.png';
import MultiBiometricIcon from '../assets/mPOS_Product/Multi-Biometric-Authentication.png';
import ModernPaymentIcon from '../assets/mPOS_Product/Modern-Payment-Methods-150x150.png';

// --- Video Section ---
const MPOSVideoSection = () => (
  <section className="w-full py-16 bg-[#f2992f]/10 flex items-center justify-center">
    <div className="max-w-5xl w-full mx-auto rounded-2xl shadow-2xl overflow-hidden border border-[#f2992f]/30 flex flex-col md:flex-row items-center md:items-stretch">
      {/* Video */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-4 bg-white/60 backdrop-blur-lg">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            className="w-full h-full min-h-[220px] md:min-h-[300px] rounded-2xl"
            src="https://www.youtube.com/embed/wN3O81uralQ"
            title="mPOS Demo Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Text */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8 bg-[#f2992f]/10">
        <h3 className="text-2xl font-bold text-[#133331] mb-4">mPOS Demo Video</h3>
        <p className="text-[#133331] text-base md:text-lg text-center">Watch the demo to see mPOS in action.</p>
      </div>
    </div>
  </section>
);

const MPOSPage = () => (
  <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    {/* Hero Section */}
    <section
      className="relative w-full flex items-center justify-center text-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{
        backgroundImage: `url(${mPOSBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8">
        <img
          src={mPOSLogo}
          alt="mPOS Logo"
          className="h-16 xs:h-20 sm:h-24 md:h-28 mb-4 mx-auto w-auto max-w-[350px]"
          style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}
        />
        <h2 className="text-lg xs:text-xl md:text-2xl text-white font-medium mb-4">Mobile Point of Sale</h2>
        <p className="text-white text-sm xs:text-base md:text-lg max-w-2xl mx-auto">
          Welcome to the future of point-of-sale solutions with the mPOS application. Our Android-based solution is revolutionizing the payment landscape by offering unmatched versatility and security through multi-biometric authentication and seamless integration across diverse sectors.
        </p>
      </div>
    </section>

   

    {/* Key Features Section */}
    <div className="max-w-6xl mx-auto px-4 mt-12 pb-16">
      {/* <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-[#133331] tracking-tight">OUR RESEARCH FOOTPRINT</h2> */}
      <div className="flex justify-center mb-4">
        <span className="inline-block w-16 h-1 rounded bg-[#f2992f]" />
      </div>
      {/* <p className="text-center text-[#133331] text-opacity-80 mb-10 max-w-2xl mx-auto text-base sm:text-lg">
        At BNPRS, our research extends across a diverse spectrum of biometric and AI disciplines:
      </p> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md ">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={UniversalTerminalIcon}
              alt="Universal Terminal Management"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Universal Terminal Management</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Pioneer secure transactions with fingerprints and facial recognition, setting new standards in POS security.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md ">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={SmartNotificationsIcon}
              alt="Smart Notifications"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Smart Notifications</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Elevate customer experience with smart notifications delivering transaction details via In-App, WhatsApp, Viber, or SMS, ensuring seamless communication.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md ">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={SeamlessTransactionIcon}
              alt="Seamless Transaction Ecosystem"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Seamless Transaction Ecosystem</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Thrive within closed-loop payment ecosystems, ensuring seamless transactions across diverse environments.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md ">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={RapidAdoptionIcon}
              alt="Rapid Adoption"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Rapid Adoption</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Within just three months, our application has reached over 15,000 terminals from different vendors, including renowned models such as Sunmi P2, Feitian F20/F300/F310, Wizar Q2, and Pax A90.</p>
        </div>
        {/* Card 5 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md ">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={MultiBiometricIcon}
              alt="Multi-Biometric Authentication"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Multi-Biometric Authentication</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Pioneer secure transactions with fingerprints and facial recognition, setting new standards in POS security.</p>
        </div>
        {/* Card 6 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md ">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={ModernPaymentIcon}
              alt="Modern Payment Methods"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Modern Payment Methods</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Embrace modern payment methods including QR Code-based transactions, catering to the preferences of today’s consumers.</p>
        </div>
      </div>
    </div>
    
     {/* Video Section */}
    <MPOSVideoSection />
  </div>
);



export default MPOSPage;
