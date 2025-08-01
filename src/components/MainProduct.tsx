import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductCarousel from './ProductCarousel';

const MainProduct = () => {
  return (
    <>
      {/* <Header /> */}
      
      {/* Modern Product Hero Section */}
      <section
        className="w-full py-20 relative bg-[#133331]"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop') ",
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
              <span className="inline-block px-4 py-3 rounded-full text-xs font-semibold tracking-wider bg-[#f2992f]/90 text-white mb-4">PRODUCTS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Next-Gen Biometric & Payment Solution</h1>
            <p className="text-lg text-slate-200 mb-8 max-w-xl">Our flagship product combines advanced biometrics, seamless payments, and robust security—empowering your business for the digital future.</p>
          </div>
          {/* Right: Product Image or Illustration */}
          {/* <div className="flex-1 flex justify-center items-center relative w-full max-w-lg">
            <img src="https://images.pexels.com/photos/11035396/pexels-photo-11035396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Main Product" className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover z-20 border-2 border-white" />
          </div> */}
        </div>
      </section>


      <ProductCarousel/>








      
      
    </>
  );
};

export default MainProduct;
