import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import mGateImg from '../assets/mGate.png';
import mPOSImg from '../assets/mPOS.png';
import bNetImg from '../assets/bNet.png';
import uTMSImg from '../assets/uTMS.png';
import bPassImg from '../assets/bPASS.png';
import wGateImg from '../assets/wGate.png';
import uIdPayImg from '../assets/uIdpay.png';
import bCWSImg from '../assets/bCWS.png';
import iBecsImg from '../assets/iBecs.webp';
import sbioidSImg from '../assets/Sbioids.png';
import cPersoImg from '../assets/cPerso.png';
import pHSMImg from '../assets/pHSM.png';

const Products = () => {
  const navigate = useNavigate();
  const products = [
    {
      icon: mGateImg,
      size: { width: 90, height: 60 },
      description: 'A reliable messaging gateway with fallback delivery ensuring your messages reach their destination every time.',
      features: ['Multi-channel delivery', 'Fallback mechanisms', 'Real-time tracking', 'API integration'],
      color: 'from-blue-500 to-blue-600',
      isImage: true
    },
    {
      icon: mPOSImg,
      size: { width: 80, height: 60 },
      description: 'Mobile point-of-sale app with comprehensive inventory management and payment support for modern businesses.',
      features: ['Inventory management', 'Payment processing', 'Sales analytics', 'Mobile-first design'],
      color: 'from-green-500 to-green-600',
      isImage: true
    },
    {
      icon: bNetImg,
      size: { width: 75, height: 60 },
      description: 'Advanced face recognition technology for secure identity verification and access control systems.',
      features: ['Real-time recognition', 'Liveness detection', 'Multi-face tracking', 'High accuracy'],
      color: 'from-purple-500 to-purple-600',
      isImage: true
    },
    {
      icon: uTMSImg,
      size: { width: 70, height: 55 },
      description: 'Universal terminal management system for efficiently managing and monitoring workstations across your network.',
      features: ['Remote management', 'System monitoring', 'Automated updates', 'Performance analytics'],
      color: 'from-indigo-500 to-indigo-600',
      isImage: true
    },
    {
      icon: bPassImg,
      size: { width: 90, height: 60 },
      description: 'Biometric SmartPass with QR code and face-based authentication for seamless access control.',
      features: ['QR code generation', 'Face authentication', 'Access logging', 'Multi-factor auth'],
      color: 'from-red-500 to-red-600',
      isImage: true
    },
    {
      icon: wGateImg,
      size: { width: 80, height: 60 },
      description: 'Secure and seamless payment gateway solution for safe online transactions and payment processing.',
      features: ['PCI compliance', 'Multiple payment methods', 'Fraud detection', 'Real-time processing'],
      color: 'from-amber-500 to-amber-600',
      isImage: true
    },
    {
      icon: uIdPayImg,
      size: { width: 90, height: 60 },
      description: 'Self-ordering terminal system designed for fast customer interaction and streamlined service delivery.',
      features: ['Touch interface', 'Order management', 'Payment integration', 'Queue optimization'],
      color: 'from-cyan-500 to-cyan-600',
      isImage: true
    },
    {
      icon: bCWSImg,
      size: { width: 80, height: 60 },
      description: 'Real-time criminal tracking and alert platform for enhanced security and law enforcement support.',
      features: ['Real-time alerts', 'Database integration', 'Facial matching', 'Report generation'],
      color: 'from-rose-500 to-rose-600',
      isImage: true
    },
    {
      icon: iBecsImg,
      size: { width: 70, height: 60 },
      description: 'Advanced biometric enrollment system for comprehensive identity management and registration processes.',
      features: ['Multi-modal enrollment', 'Quality assessment', 'Template generation', 'Database integration'],
      color: 'from-teal-500 to-teal-600',
      isImage: true
    },
    {
      icon: sbioidSImg,
      size: { width: 80, height: 60 },
      description: 'AI-powered multimodal biometric engine combining multiple authentication methods for maximum security.',
      features: ['AI algorithms', 'Multi-modal fusion', 'Machine learning', 'Adaptive authentication'],
      isImage: true
    },
    {
      icon: cPersoImg,
      size: { width: 90, height: 60 },
      description: 'Comprehensive card personalization platform for creating and managing secure identification cards.',
      features: ['Card design', 'Data encoding', 'Security features', 'Batch processing'],
      isImage: true
    },
    {
      icon: pHSMImg,
      size: { width: 70, height: 60 },
      description: 'Hardware Security Module for secure key and PIN management in payment processing environments.',
      features: ['Key generation', 'PIN verification', 'Cryptographic operations', 'Compliance standards'],
      isImage: true
    }
  ];


  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-[#f2992f] rounded-full px-4 py-2 mb-6">
            <CheckCircle className="h-4 w-4 text-[#133331]" />
            <span className="text-sm font-medium text-[#133331]">Our Products</span>
          </div> */}

          <h2 className="text-4xl md:text-5xl font-bold text-[#f2992f] mb-6">
            Our Core Offerings
            <span className="block bg-[#f2992f] bg-clip-text text-transparent">

            </span>
          </h2>

          {/* <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
           In addition to our core products, we offer more cutting-edge solutions to enhance security, efficiency, and seamless operations.
          </p> */}

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our suite of advanced technology solutions designed to streamline operations, enhance security, and deliver intelligent identity and payment experiences. Each product is built with innovation at its core—driven by biometrics, AI, and secure digital infrastructure.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon or Image */}
              {product.isImage ? (
                <div className="flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-transparent" style={{ width: product.size?.width || 60, height: product.size?.height || 60 }}>
                  <img
                    src={product.icon}
                    alt="Product"
                    style={{ width: product.size?.width || 60, height: product.size?.height || 60, objectFit: 'contain' }}
                  />
                </div>
              ) : (
                <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {/* If you want to use an icon component, place it here */}
                </div>
              )}

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {/* Removed product title as requested */}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button
                    className="group/btn flex items-center space-x-2 text-[#133331] hover:text-[#f2992f] font-semibold transition-colors"
                    onClick={() => {
                      const pages = [
                        'mGate', 'mPOS', 'bNet', 'uTMS', 'bPass', 'wGate', 'uIdPay', 'bCWS', 'iBecs', 'sbioidS', 'cPerso', 'pHSM'
                      ];
                      navigate(`/product/${pages[index]}`);
                    }}
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Products;