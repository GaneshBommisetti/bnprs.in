import React from 'react';
import bnprsBg from '../assets/bnprs_bg.png';
import OurApproachBg from '../assets/Our Approach_bg.jpg';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play, Fingerprint, CreditCard, Shield, Zap } from 'lucide-react';
import videoPoster from '../assets/video-poster.png';
import videoMp4 from '../assets/video-poster.mp4';





const Hero = () => {
  const keyProducts = [
    { name: 'mGate', icon: Zap },
    { name: 'mPOS', icon: CreditCard },
    { name: 'bPass', icon: Fingerprint },
    { name: 'wGate', icon: Shield },
  ];

  const navigate = useNavigate();
  return (
    <>
      {/* Video Section */}
      <section className="relative w-full flex justify-center items-center min-h-[400px] md:min-h-[500px] overflow-hidden mt-20">
        <video
          className="w-full h-full object-cover shadow-2xl"
          src={videoMp4}
          autoPlay
          loop
          muted
          playsInline
          poster={videoPoster}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-b-3xl" /> */}
      </section>

      {/* Hero Section */}


      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-[#f2992f] rounded-full px-4 py-2">
                  <Fingerprint className="h-4 w-4 text-[#133331]" />
                  <span className="text-sm font-medium text-[#133331]">Since 2015 • Technology Innovation</span>
                </div>

                {/* <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight text-[#f2992f]">
                  Innovating the Future with
                  <span className="block text-[#133331]">
                    Biometrics & Payment Technologies
                  </span>
                </h3> */}


                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight text-[#f2992f]">
                 
                  <span className="block text-[#133331]">
                    Pioneering the Future of Payment Through Biometrics
                  </span>
                </h3>

                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  At BNPRS, we push the frontiers of technology and innovation. From startup research lab to
                  dynamic private limited company, we're shaping the future of biometric authentication and payment solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="group bg-[#133331] text-[#ffff] px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                  onClick={() => navigate('/main-product')}
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* <button className="group flex items-center space-x-3 px-8 py-4 text-slate-700 hover:text-slate-900 transition-colors">
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center group-hover:border-blue-300 transition-colors">
                    <Play className="h-5 w-5 ml-0.5" />
                  </div>
                  <span className="font-semibold">Watch Demo</span>
                </button> */}
              </div>

              {/* Key Products */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm font-medium text-slate-600 mb-4">Key Product Offerings:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {keyProducts.map((product, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/50">
                      <product.icon className="h-5 w-5 text-[#f2992f]" />
                      <span className="text-sm font-medium text-slate-700">{product.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="relative bg-[#133331] rounded-2xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-[#133331] to-transparent rounded-2xl"></div>

                <div className="relative space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Fingerprint className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Biometric Authentication</div>
                      <div className="text-white/70 text-sm">99.9% Accuracy Rate</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-white text-sm">
                      <span>Identity Verification</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full w-[98%]"></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-white text-sm">
                      <span>Payment Processing</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <div className="text-white/70 text-xs">Real-time processing • Secure transactions</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#f2992f]  rounded-full flex items-center justify-center shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>

              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-xl shadow-lg p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-[#f2992f] bg-clip-text text-transparent">2015</div>
                  <div className="text-xs text-slate-600">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Highlighted Article Section (as per image) */}
      <section
        className="relative w-full flex flex-col items-center justify-center py-24 min-h-[480px] z-10 mt-10 md:mt-24 bg-fixed"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(19,51,49,0.92) 60%, rgba(242,153,47,0.85) 100%), url(${OurApproachBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
          <div className="w-full bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl relative border border-white/30 border-t-4 border-[#f2992f]">
            <div className="px-8 py-10 md:py-12 flex flex-col items-center text-center">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-[#f2992f] rounded-full px-14 py-2 mb-6">
                <span className="text-m font-medium text-[#133331]">Our Approach</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
                <span className="text-[#f2992f]"></span>Biometrics at-the-core-of Payments

              </h3>
              <p className="mt-4 text-xs md:text-sm text-white/80  max-w-2xl text-center font-light">
                Despite the wide array of payment systems available, each solution comes with its own set of benefits and limitations. This makes it both time-consuming and challenging to identify a platform that perfectly aligns with our unique needs and security requirements. As the digital landscape continues to evolve, the need for more robust and personalized security solutions has never been greater.<br /><br />
                For us, ensuring the highest level of security at the Authorization host of the payment gateway is non-negotiable. We recognized that biometrics could play a transformative role in enhancing security, offering a more reliable and user-friendly alternative to traditional methods. With this in mind, we were motivated to build a payment ecosystem that places biometrics at the core of its security framework. By integrating this advanced technology, we can deliver a solution that not only meets but exceeds the growing demand for secure, efficient, and customized digital transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose BNPRS Section - visually impressive, animated cards */}
      <section
        className="relative w-full flex flex-col items-center justify-center py-32 min-h-[800px] bg-gradient-to-br from-[#f2992f]/10 via-white to-[#133331]/5"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(242,153,47,0.08) 0%, rgba(19,51,49,0.04) 100%), url(${bnprsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#133331] mb-8">
            Why Choose <span className="text-[#f2992f]">BNPRS?</span>
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
            Discover what sets us apart in biometrics and payment technology. Our commitment to innovation, security, and customer success makes us the trusted partner for organizations worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl shadow-xl border border-[#f2992f]/30 p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Fingerprint className="h-12 w-12 text-[#f2992f] mb-4 " />
              <h3 className="text-xl font-bold text-[#133331] mb-2">Biometrics-driven approach</h3>
              <p className="text-slate-600 mb-4">We leverage cutting-edge biometric technologies to enable seamless and accurate user authentication, ensuring a highly personalized and secure experience.</p>
              <span className="inline-block bg-[#f2992f]/10 text-[#f2992f] px-4 py-1 rounded-full text-xs font-semibold">99.9% Accuracy</span>
            </div>
            {/* Card 2 */}
            <div className="group bg-white rounded-2xl shadow-xl border border-[#f2992f]/30 p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Zap className="h-12 w-12 text-[#f2992f] mb-4 " />
              <h3 className="text-xl font-bold text-[#133331] mb-2">Next-GenAI solutions</h3>
              <p className="text-slate-600 mb-4">Our in-house developed NeuraAgents power intelligent automation and decision-making, delivering scalable, adaptive, and future-ready AI capabilities.</p>
              <span className="inline-block bg-[#133331]/10 text-[#133331] px-4 py-1 rounded-full text-xs font-semibold">PCI & ISO Certified</span>
            </div>
            {/* Card 3 */}
            <div className="group bg-white rounded-2xl shadow-xl border border-[#f2992f]/30 p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">

              <CreditCard className="h-12 w-12 text-[#f2992f] mb-4 " />
              <h3 className="text-xl font-bold text-[#133331] mb-2">Payments</h3>
              <p className="text-slate-600 mb-4">Moving beyond traditional methods, our payment systems are fortified with an advanced security layer, offering enhanced protection, speed, and reliability.</p>
              <span className="inline-block bg-[#f2992f]/10 text-[#f2992f] px-4 py-1 rounded-full text-xs font-semibold">AI Powered</span>
            </div>
            {/* Card 4 - Payments */}
            <div className="group bg-white rounded-2xl shadow-xl border border-[#f2992f]/30 p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              
              <Shield className="h-12 w-12 text-[#f2992f] mb-4 " />
              <h3 className="text-xl font-bold text-[#133331] mb-2">Reliable and Secure transactions</h3>
              <p className="text-slate-600 mb-4">We enforce a strict Zero-Trust Policy, especially in handling biometric data—ensuring integrity, confidentiality, and uncompromised security at every touchpoint.</p>
              <span className="inline-block bg-[#f2992f]/10 text-[#f2992f] px-4 py-1 rounded-full text-xs font-semibold">100% Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Add this to your global CSS for slow spin animation */}
      {/*
      .animate-spin-slow {
        animation: spin 3s linear infinite;
      }
      */}
    </>
  );
};

export default Hero;