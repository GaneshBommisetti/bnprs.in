import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mgateImg from '../assets/Products/mgate.jpg';
import mPOSImg from '../assets/Products/mPOS.jpg';
import bNetImg from '../assets/Products/bNet.png';
import uTMSImg from '../assets/Products/uTMS.png';
import bPassImg from '../assets/Products/bPass.jpg';
import wGateImg from '../assets/Products/wGate.png';
import uIdPayImg from '../assets/Products/Uidpay.png';
import bCWSImg from '../assets/Products/bcws.jpg';
import iBecsImg from '../assets/Products/ibecs.jpg';
import sbioidsImg from '../assets/Products/Sbioids.jpg';
import cPersoImg from '../assets/Products/cPerso.jpg';
import pHSMImg from '../assets/Products/pHSM.jpg';

// Logo imports
import mGateLogo from '../assets/mGate.png';
import mPOSLogo from '../assets/mPOS.png';
import bNetLogo from '../assets/bNet.png';
import uTMSLogo from '../assets/uTMS.png';
import bPassLogo from '../assets/bPASS.png';
import wGateLogo from '../assets/wGate.png';
import uIdPayLogo from '../assets/uIdpay.png';
import bCWSLogo from '../assets/bCWS.png';
import iBecsLogo from '../assets/iBecs.webp';
import sbioidSLogo from '../assets/Sbioids.png';
import cPersoLogo from '../assets/cPerso.png';
import pHSMLogo from '../assets/pHSM.png';

const carouselData = [
    {
        img: mgateImg,
        logo: mGateLogo,
        title: 'mGate',
        desc: "Robust gateway ensuring message delivery via multi-channel routing, fallback, and real-time tracking.",
        btn: 'Read more',
        page: '/all_product_pages/mGate',
    },
    {
        img: mPOSImg,
        logo: mPOSLogo,
        title: 'mPOS',
        desc: 'Smart mobile POS solution with inventory tools, payment support, and analytics for growing businesses.',
        btn: 'Read more',
        page: '/all_product_pages/mPOS',
    },
    {
        img: bNetImg,
        logo: bNetLogo,
        title: 'bNet',
        desc: 'AI-based facial recognition platform enabling real-time identity verification and secure access control.',
        btn: 'Read more',
        page: '/all_product_pages/bNet',
    },
    {
        img: uTMSImg,
        logo: uTMSLogo,
        title: 'uTMS',
        desc: "Centralized solution for monitoring, updating, and managing devices across enterprise networks.",
        btn: 'Read more',
        page: '/all_product_pages/uTMS',
    },
    {
        img: bPassImg,
        logo: bPassLogo,
        title: 'bPass',
        desc: 'QR and face-based authentication system offering secure, contactless, multi-factor access control.',
        btn: 'Read more',
        page: '/all_product_pages/bPass',
    },
    {
        img: wGateImg,
        logo: wGateLogo,
        title: 'wGate',
        desc: 'Secure payment gateway supporting multiple methods, fraud prevention, and real-time transaction processing.',
        btn: 'Read more',
        page: '/all_product_pages/wGate',
    },
    {
        img: uIdPayImg,
        logo: uIdPayLogo,
        title: 'uIdPay',
        desc: 'Interactive self-service kiosk designed for fast ordering, integrated payments, and queue management.',
        btn: 'Read more',
        page: '/all_product_pages/uIdPay',
    },
    {
        img: bCWSImg,
        logo: bCWSLogo,
        title: 'bCWS',
        desc: 'Real-time criminal monitoring system with facial recognition, alerts, and detailed report generation.',
        btn: 'Read more',
        page: '/all_product_pages/bCWS',
    },
    {
        img: iBecsImg,
        logo: iBecsLogo,
        title: 'iBecs',
        desc: 'Comprehensive identity platform supporting multi-modal enrollment and high-quality data capture.',
        btn: 'Read more',
        page: '/all_product_pages/iBecs',
    },
    {
        img: sbioidsImg,
        logo: sbioidSLogo,
        title: 'sbioids',
        desc: 'AI-driven engine combining various biometric methods for adaptive, high-security user authentication.',
        btn: 'Read more',
        page: '/all_product_pages/sbioidS',
    },
    {
        img: cPersoImg,
        logo: cPersoLogo,
        title: 'cPerso',
        desc: 'End-to-end card issuance system for designing, encoding, and managing secure ID and access cards.',
        btn: 'Read more',
        page: '/all_product_pages/cPerso',
    },
    {
        img: pHSMImg,
        logo: pHSMLogo,
        title: 'pHSM',
        desc: 'Trusted hardware unit for secure cryptographic key and PIN handling in financial environments.',
        btn: 'Read more',
        page: '/all_product_pages/pHSM',
    },
];

const ProductCarousel = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const next = () => setIndex((prev) => (prev + 1) % carouselData.length);

    const { img, logo, title, desc, btn, page } = carouselData[index];

    return (
        <section className="w-full flex flex-col items-center justify-center py-16 bg-white min-h-[420px]">
            {/* Section Title & Direction */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between mb-10 px-4 md:px-0">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#133331] mb-2">Explore Our Products</h2>
                    <p className="text-base text-gray-500">Browse through our innovative biometric and payment solutions. Click a product to learn more.</p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-[#f2992f] font-semibold text-lg">
                    <span>Scroll for more</span>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-x">
                        <path d="M5 12h14M13 18l6-6-6-6" />
                    </svg>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center">
                {/* Main Image */}
                <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
                    <img
                        src={img}
                        alt={title}
                        className="w-[820px] h-[450px] bg-white object-contain"
                        style={{ background: '#f8fafc' }}
                    />
                </div>
                {/* Content Side */}
                <div className="flex-1 flex flex-col justify-center items-start max-w-xl px-4 md:px-12">
                <div className="flex items-center mb-4">
                    <div className="w-1 h-16 bg-[#f2992f] mr-6 rounded-full"></div>
                    <img 
                        src={logo} 
                        alt={title + ' logo'} 
                        className="w-12 h-12 md:w-20 md:h-20 object-contain rounded transition-all duration-200"
                        style={{ maxWidth: '180px', maxHeight: '180px', minWidth: '136px', minHeight: '136px' }}
                    />
                </div>
                    <p className="text-lg text-gray-500 mb-6">{desc}</p>

                    <div className="flex items-center w-full">
                        <button
                            className="flex-1 md:flex-none md:w-60 bg-[#353543] hover:bg-[#23232b] text-white font-semibold py-4 rounded-full text-lg shadow transition-all duration-200"
                            onClick={() => navigate(page)}
                        >
                            {btn}
                        </button>
                        <button
                            onClick={next}
                            className="ml-6 w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-full bg-white hover:bg-[#f2992f]/10 transition-all duration-200"
                            aria-label="Next"
                        >
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-[#f2992f]">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Thumbnails Row */}
            <div className="w-full flex flex-row items-center justify-center gap-4 mt-10 overflow-x-auto pb-2">
                {carouselData.map((item, idx) => (
                    <button
                        key={item.title}
                        onClick={() => setIndex(idx)}
                        className={`border-2 ${idx === index ? 'border-[#f2992f] shadow-lg' : 'border-gray-200'} rounded-md bg-white p-1 transition-all duration-200 focus:outline-none`}
                        style={{ minWidth: 80, minHeight: 60 }}
                        aria-label={item.title}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-20 h-14 object-contain rounded"
                        />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default ProductCarousel;
