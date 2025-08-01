
import bPassLogo from '../assets/bPass_Products/bPass_logo.png';
import bPassBg from '../assets/bPass_Products/bPass_bg.jpg';
import CompatibilityIcon from '../assets/bPass_Products/Compatibility.png';
import EmpoweringBusinessesIcon from '../assets/bPass_Products/Empowering-Businesses.png';
import IntegrationWalletsIcon from '../assets/bPass_Products/Integration-with-Mobile-Wallets.png';
import OfflineProtectionIcon from '../assets/bPass_Products/Offline-Protection.webp';
import SeamlessIntegrationIcon from '../assets/bPass_Products/Seamless-Integration.png';
import SwiftSecureIcon from '../assets/bPass_Products/Swift-and-Secure-Transactions.png';

const BPassPage = () => (
  <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    {/* Hero Section */}
    <section
      className="relative w-full flex items-center justify-center text-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{
        backgroundImage: `url(${bPassBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8">
        <img
          src={bPassLogo}
          alt="bPass Logo"
          className="h-16 xs:h-20 sm:h-24 md:h-28 mb-4 mx-auto w-auto max-w-[350px]"
          style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}
        />
        <h2 className="text-lg xs:text-xl md:text-2xl text-white font-medium mb-4">bPass - Biometric SmartPass</h2>
        <p className="text-white text-sm xs:text-base md:text-lg max-w-2xl mx-auto">
          Experience next-generation access and transaction security with bPass. Enjoy seamless integration, offline protection, and compatibility with mobile wallets for swift, secure, and empowering business operations.
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
              src={SwiftSecureIcon}
              alt="Swift and Secure Transactions"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Seamless Integration</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">bPass integrates your payment information and biometric data into a single QR code, ensuring seamless and secure transactions.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={OfflineProtectionIcon}
              alt="Offline Protection"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Empowering Businesses</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Beyond solutions, bPAY provides opportunities for businesses to excel, enhancing customer experiences and streamlining operations.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={IntegrationWalletsIcon}
              alt="Integration with Mobile Wallets"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Offline Protection</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">With offline biometric verification and a liveness check, bPass guarantees your transactions are protected even without an internet connection, providing peace of mind wherever you are.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={SeamlessIntegrationIcon}
              alt="Seamless Integration"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Compatibility</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm"> bPass is compatible with Android POS terminals equipped with the mPos application, allowing you to utilize its benefits whether you’re shopping in-store or online.</p>
        </div>
        {/* Card 5 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={EmpoweringBusinessesIcon}
              alt="Empowering Businesses"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Integration with Mobile Wallets</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Experience enhanced convenience as bPass seamlessly integrates with popular mobile wallet apps like Apple and Samsung, streamlining the payment process for you.</p>
        </div>
        {/* Card 6 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={CompatibilityIcon}
              alt="Compatibility"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Swift and Secure Transactions</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Bid farewell to the hassle of entering OTPs with bPass, as your payments become faster and more secure, ensuring a seamless transaction experience every time.</p>
        </div>
      </div>
    </div>
  </div>
);

export default BPassPage;
