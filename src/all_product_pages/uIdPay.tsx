
import uIdPayLogo from '../assets/uIdPay_Products/Asset-9@0.5x-1.png';
import uIdPayBg from '../assets/uIdPay_Products/uIDpay_bg.jpg';
import AnalyticsDashboardIcon from '../assets/uIdPay_Products/Analytics-Dashboard.png';
import AutomatedOrderIcon from '../assets/uIdPay_Products/Automated-Order-Management.png';
import InventoryManagementIcon from '../assets/uIdPay_Products/Inventory-Management.png';
import MobilePOSIcon from '../assets/uIdPay_Products/Mobile-Point-of-Sale.png';
import MultiUserAccessIcon from '../assets/uIdPay_Products/Multi-User-Access.png';


// --- Video Section ---
const uIdPayVideoSection = () => (
  <section className="w-full py-16 bg-[#f2992f]/10 flex items-center justify-center">
    <div className="max-w-5xl w-full mx-auto rounded-2xl shadow-2xl overflow-hidden border border-[#f2992f]/30 flex flex-col md:flex-row items-center md:items-stretch">
      {/* Video */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-4 bg-white/60 backdrop-blur-lg">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            className="w-full h-full min-h-[220px] md:min-h-[300px] rounded-2xl"
            src="https://www.youtube.com/embed/brMBlZeXOh0"
            title="uIdPay Demo Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Text */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8 bg-[#f2992f]/10">
        <h3 className="text-2xl font-bold text-[#133331] mb-4">uIdPay Demo Video</h3>
        <p className="text-[#133331] text-base md:text-lg text-center">Watch the demo to see uIdPay in action.</p>
      </div>
    </div>
  </section>
);import ReservationHandlingIcon from '../assets/uIdPay_Products/Reservation-Handling.png';




const UIdPayPage = () => (
  <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    {/* Hero Section */}
    <section
      className="relative w-full flex items-center justify-center text-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{
        backgroundImage: `url(${uIdPayBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8">
        <img
          src={uIdPayLogo}
          alt="uIdPay Logo"
          className="h-16 xs:h-20 sm:h-24 md:h-28 mb-4 mx-auto w-auto max-w-[350px]"
          style={{ filter: 'drop-shadow(0 2px 8px #0008)' }}
        />
        <h2 className="text-lg xs:text-xl md:text-2xl text-white font-medium mb-4">uIdPay - Unique ID Payment </h2>
        <p className="text-white text-sm xs:text-base md:text-lg max-w-2xl mx-auto">
         Discover the uIdPay Restaurant Hub, a groundbreaking solution revolutionizing restaurant management. This innovative platform offers a comprehensive suite of tools to streamline operations, enhance customer experiences, and drive business growth for restaurant owners and operators.
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
        {/* Card 1: Automated Order Management */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <img
              src={AutomatedOrderIcon}
              alt="Automated Order Management"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Automated Order Management</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">uIdPay Restaurant Hub automates the order process, ensuring seamless and efficient handling from placement to fulfillment.</p>
        </div>
        {/* Card 2: Reservation Handling */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <img
              src={ReservationHandlingIcon}
              alt="Reservation Handling"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Reservation Handling</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Easily manage reservations and optimize table turnover with UidPay’s intuitive reservation management system.</p>
        </div>
        {/* Card 3: Inventory Management */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <img
              src={InventoryManagementIcon}
              alt="Inventory Management"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Inventory Management</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Keep track of stock levels, streamline purchasing processes, and minimize waste with uIdPay‘s robust inventory management features.</p>
        </div>
        {/* Card 4: Mobile Point of Sale (mPOS) Integration */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <img
              src={MobilePOSIcon}
              alt="Mobile Point of Sale"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Mobile Point of Sale (mPOS) Integration</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Seamlessly integrate mobile POS systems to facilitate convenient and flexible payment processing for customers.</p>
        </div>
        {/* Card 5: Multi-User Access */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <img
              src={MultiUserAccessIcon}
              alt="Multi-User Access"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Multi-User Access</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Enable multiple staff members to access and utilize the UidPay Restaurant Hub, promoting collaboration and efficiency across the team.</p>
        </div>
        {/* Card 6: Analytics Dashboard */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl shadow-sm flex flex-col items-center p-8 transition-all duration-200 hover:shadow-md hover:border-[#f2992f]">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <img
              src={AnalyticsDashboardIcon}
              alt="Analytics Dashboard"
              className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-[#133331] mb-1">Analytics Dashboard</h3>
          <p className="text-[#133331] text-opacity-70 text-center text-sm">Gain valuable insights into sales trends, customer preferences, and operational performance with UidPay’s comprehensive analytics dashboard.</p>
        </div>
      </div>
    </div>


{/* Video Section */}
    {uIdPayVideoSection()}



  </div>
);

export default UIdPayPage;
