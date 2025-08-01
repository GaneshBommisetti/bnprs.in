
import wGateLogo from '../assets/wGate_Products/wGate_logo.png';
import wGateBg from '../assets/wGate_Products/wGate_bg.jpg';
import AuthorizationIcon from '../assets/wGate_Products/Authorization.png';
import EmpoweringMerchantsIcon from '../assets/wGate_Products/Empowering-Merchants.png';
import FundsTransferIcon from '../assets/wGate_Products/Funds-Transfer.png';
import PaymentHandlingIcon from '../assets/wGate_Products/Payment-Handling.png';
import TransactionProcessIcon from '../assets/wGate_Products/Transaction-Process.png';
import UncompromisedSecurityIcon from '../assets/wGate_Products/Uncompromised-Security.png';

const WGatePage = () => (
  <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    {/* Hero Section */}
    <section
      className="relative w-full flex items-center justify-center text-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{
        backgroundImage: `url(${wGateBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8">
        <img
          src={wGateLogo}
          alt="wGate Logo"
          className="h-16 xs:h-20 sm:h-24 md:h-28 mb-4 mx-auto w-auto max-w-[350px]"
          style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}
        />
        <h2 className="text-lg xs:text-xl md:text-2xl text-white font-medium mb-4">wGate - Worldwide Payment Gateway
</h2>
        <p className="text-white text-sm xs:text-base md:text-lg max-w-2xl mx-auto">
          Introducing Worldwide Payment Gateway (wGate), the pioneering solution transforming secure payment processing for businesses worldwide. At wGate, we redefine conventional payment management, ensuring seamless transactions while prioritizing security above all else.
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
              src={AuthorizationIcon}
              alt="Authorization"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Comprehensive Payment Handling</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">wGate seamlessly manages various payment channels, including card readers, online checkout pages, and mobile hardware, covering all transaction needs.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={EmpoweringMerchantsIcon}
              alt="Empowering Merchants"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Uncompromised Security</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Our paramount focus is on security, safeguarding customers’ sensitive financial information to prevent unauthorized access and protect against fraud.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={FundsTransferIcon}
              alt="Funds Transfer"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Transaction Process</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">When a customer provides their card details, wGate initiates the transaction, sending the information securely to the bank or card network for authorization.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={PaymentHandlingIcon}
              alt="Payment Handling"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Swift Authorization</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Within moments, we receive authorization, enabling the merchant to complete the transaction promptly and efficiently.</p>
        </div>
        {/* Card 5 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={TransactionProcessIcon}
              alt="Transaction Process"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Funds Transfer</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Once authorized, wGate facilitates the swift transfer of funds from the customer’s account to the merchant’s, ensuring a seamless and secure payment process.</p>
        </div>
        {/* Card 6 */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-4">
            <img
              src={UncompromisedSecurityIcon}
              alt="Uncompromised Security"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Empowering Merchants</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Merchants gain access to their funds promptly, empowering them to expand and grow their businesses with confidence.</p>
        </div>
      </div>
    </div>
  </div>
);

export default WGatePage;
