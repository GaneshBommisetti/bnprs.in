
import uTMSLogo from '../assets/uTMS_Products/uTMS_Logo.png';
import uTMSBg from '../assets/uTMS_Products/uTMS_bg.jpg';
import EffortlessManagementIcon from '../assets/uTMS_Products/Effortless-Management.png';
import FlexibilitySupportIcon from '../assets/uTMS_Products/Flexibility-and-Support.png';
import GlobalAuditLogIcon from '../assets/uTMS_Products/Global-Audit-Log.png';
import RealTimeInsightsIcon from '../assets/uTMS_Products/Real-time-Insights.png';
import RemoteKeyInjectionIcon from '../assets/uTMS_Products/Remote-Key-Injection.png';
import RemoteUpdatesIcon from '../assets/uTMS_Products/Remote-Updates.png';

// --- Video Section ---
const uTMSVideoSection = () => (
  <section className="w-full py-16 bg-[#f2992f]/10 flex items-center justify-center">
    <div className="max-w-5xl w-full mx-auto rounded-2xl shadow-2xl overflow-hidden border border-[#f2992f]/30 flex flex-col md:flex-row items-center md:items-stretch">
      {/* Video */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-4 bg-white/60 backdrop-blur-lg">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            className="w-full h-full min-h-[220px] md:min-h-[300px] rounded-2xl"
            src="https://www.youtube.com/embed/58gp2CYZ_Qk"
            title="uTMS Demo Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Text */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8 bg-[#f2992f]/10">
        <h3 className="text-2xl font-bold text-[#133331] mb-4">uTMS Demo Video</h3>
        <p className="text-[#133331] text-base md:text-lg text-center">Watch the demo to see uTMS in action.</p>
      </div>
    </div>
  </section>
);


const UTMSPage = () => (
  <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    {/* Hero Section */}
    <section
      className="relative w-full flex items-center justify-center text-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{
        backgroundImage: `url(${uTMSBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8">
        <img
          src={uTMSLogo}
          alt="uTMS Logo"
          className="h-16 xs:h-20 sm:h-24 md:h-28 mb-4 mx-auto w-auto max-w-[350px]"
          style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}
        />
        <h2 className="text-lg xs:text-xl md:text-2xl text-white font-medium mb-4">Universal Terminal Management System (uTMS)</h2>
        <p className="text-white text-sm xs:text-base md:text-lg max-w-2xl mx-auto">
          Welcome to uTMS, the Universal Terminal Management System revolutionizing how businesses manage their payment terminals. In a world where seamless terminal management is essential, uTMS provides an efficient, versatile, and powerful solution, putting control right at your fingertips.
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
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={EffortlessManagementIcon}
              alt="Effortless Management"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Effortless Management</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Simplify device management and app configuration with uTMS. Whether you operate in retail, hospitality, or any industry, uTMS caters to your unique needs, making managing devices and payment apps easier than ever.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={RemoteKeyInjectionIcon}
              alt="Remote Key Injection"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Remote Updates</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Bid farewell to manual updates. uTMS enables remote distribution of various apps, ensuring your terminals are always up-to-date and ready to serve, saving time and hassle.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={RemoteUpdatesIcon}
              alt="Remote Updates"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Global Audit Log</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm"> Gain peace of mind with our global Audit log system. Every action is monitored, offering remote assistance and continuous oversight, ensuring security and accountability.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={RealTimeInsightsIcon}
              alt="Real-time Insights"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Real-time Insights</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Stay informed with real-time alerts and comprehensive statistics on all connected terminals. uTMS empowers you with the insights you need to make informed decisions, enhancing operational efficiency.</p>
        </div>
        {/* Card 5 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <img
              src={GlobalAuditLogIcon}
              alt="Global Audit Log"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Remote Key Injection</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Unlock the power of remote key injection and effortlessly manage licenses for diverse biometric SDKs, all at your fingertips. Ensure security and compliance with ease.</p>
        </div>
        {/* Card 6 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={FlexibilitySupportIcon}
              alt="Flexibility and Support"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Flexibility and Support</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Whether you use Ingenico terminals or Android POS devices, uTMS supports both traditional and mobile TMS configurations, ensuring flexibility for your business. Seamlessly adapt to changing requirements without hassle.</p>
        </div>
      </div>
    </div>

     {/* Video Section */}
    {uTMSVideoSection()}
  </div>
);

export default UTMSPage;
