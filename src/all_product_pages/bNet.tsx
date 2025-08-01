

// import bNetImg from '../assets/Products/bNet.png';
import bNetBg from '../assets/bNet_Product/bNet_bg.jpg'; // Use your actual background image path
import PrecisionPeopleCountingIcon from '../assets/bNet_Product/Precision-People-Counting.png';
import FacialRecognitionMasteryIcon from '../assets/bNet_Product/Facial-Recognition-Mastery.png';
import AutomatedAttendanceTrackingIcon from '../assets/bNet_Product/Automated-Attendance-Tracking.png';
import VIPAndPotentialCustomerTaggingIcon from '../assets/bNet_Product/VIP-and-Potential-Customer-Tagging.png';
import TheftDetectionIcon from '../assets/bNet_Product/Theft-Detection.png';
import DemographicAnalysisIcon from '../assets/bNet_Product/Demographic-Analysis.png';
import bNetLogo from '../assets/bNet.png'

// --- Video Section ---
const bNetVideoSection = () => (
  <section className="w-full py-16 bg-[#f2992f]/10 flex items-center justify-center">
    <div className="max-w-5xl w-full mx-auto rounded-2xl shadow-2xl overflow-hidden border border-[#f2992f]/30 flex flex-col md:flex-row items-center md:items-stretch">
      {/* Video */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-4 bg-white/60 backdrop-blur-lg">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            className="w-full h-full min-h-[220px] md:min-h-[300px] rounded-2xl"
            src="https://www.youtube.com/embed/BqcFsoJyrUc"
            title="bNet Demo Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Text */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8 bg-[#f2992f]/10">
        <h3 className="text-2xl font-bold text-[#133331] mb-4">bNet Demo Video</h3>
        <p className="text-[#133331] text-base md:text-lg text-center">Watch the demo to see bNet in action.</p>
      </div>
    </div>
  </section>
);


const BNetPage = () => (
  <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    {/* Hero Section with Background Image, Logo, and Text */}
    <section
      className="relative w-full flex items-center justify-center text-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{
        backgroundImage: `url(${bNetBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8">
        <img
          src={bNetLogo}
          alt="bNet Logo"
          className="h-16 xs:h-20 sm:h-24 md:h-28 mb-4 mx-auto w-auto max-w-[350px]"
          style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}
        />
        
        <h2 className="text-lg xs:text-xl md:text-2xl text-white font-medium mb-4">Biometric Network</h2>
        <p className="text-white text-sm xs:text-base md:text-lg max-w-2xl mx-auto">
          Welcome to the future of surveillance technology with bNet Biometric Network. Our revolutionary solution is designed to transform the retail experience and enhance public safety through advanced artificial intelligence integration and facial recognition technology.
        </p>
      </div>
    </section>



    {/* Key Features Section */}
    <div className="max-w-6xl mx-auto px-4 mt-12 pb-16">
      {/* <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-[#133331] tracking-tight">OUR RESEARCH FOOTPRINT</h2> */}
      <div className="flex justify-center mb-4">
        <span className="inline-block w-12 h-1 rounded bg-[#f2992f]" />
      </div>
      {/* <p className="text-center text-[#133331] text-opacity-80 mb-10 max-w-2xl mx-auto text-base sm:text-lg">
        At BNPRS, our research extends across a diverse spectrum of biometric and AI disciplines:
      </p> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={PrecisionPeopleCountingIcon}
              alt="Precision People Counting"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#f2992] mb-1">Precision People Counting</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Gain real-time insights into foot traffic patterns, peak hours, and customer flow throughout your store.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md">
          <div className="w-16 h-16 rounded-full bg-[#f2992f] bg-opacity-20 flex items-center justify-center mb-4">
            <img
              src={FacialRecognitionMasteryIcon}
              alt="Facial Recognition Mastery"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Facial Recognition Mastery</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Understand your customers on a deeper level with advanced facial recognition capabilities. Know who they are, what they like, and how they engage with your brand.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={AutomatedAttendanceTrackingIcon}
              alt="Automated Attendance Tracking"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Automated Attendance Tracking</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Streamline operations and eliminate manual processes with our automated attendance tracking system. Ensure accurate records while optimizing staff allocation and scheduling.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={VIPAndPotentialCustomerTaggingIcon}
              alt="VIP and Potential Customer Tagging"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">VIP Tagging</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Identify potential customers from crowds based on their transaction history, facilitating personalized attention from your sales team.</p>
        </div>
        {/* Card 5 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={TheftDetectionIcon}
              alt="Theft Detection"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Theft Detection</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Safeguard your assets and minimize losses with state-of-the-art theft detection features. Detect suspicious behavior and take proactive measures to protect your merchandise.</p>
        </div>
        {/* Card 6 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md">
          <div className="w-16 h-16 rounded-full bg-[#eaf6f5] flex items-center justify-center mb-4">
            <img
              src={DemographicAnalysisIcon}
              alt="Demographic Analysis"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Demographic Analysis</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Unlock valuable demographic data such as age, gender, and emotions to tailor your offerings and marketing strategies for maximum impact.</p>
        </div>
      </div>
    </div>


    {/* Video Section */}
    {bNetVideoSection()}

    
  </div>
);

export default BNetPage;
