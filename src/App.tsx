import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MainProduct from './components/MainProduct';
import News from './pages/News';
import Events from './pages/Events';
import Careers from './pages/Careers';

const MGatePage = lazy(() => import('./all_product_pages/mGate'));
const MPOSPage = lazy(() => import('./all_product_pages/mPOS'));
const BNetPage = lazy(() => import('./all_product_pages/bNet'));
const UTMSPage = lazy(() => import('./all_product_pages/uTMS'));
const BPassPage = lazy(() => import('./all_product_pages/bPass'));
const WGatePage = lazy(() => import('./all_product_pages/wGate'));
const UIdPayPage = lazy(() => import('./all_product_pages/uIdPay'));
const BCWSPage = lazy(() => import('./all_product_pages/bCWS'));
const IBecsPage = lazy(() => import('./all_product_pages/iBecs'));
const SbioidSPage = lazy(() => import('./all_product_pages/sbioidS'));
const CPersoPage = lazy(() => import('./all_product_pages/cPerso'));
const PHSMPage = lazy(() => import('./all_product_pages/pHSM'));

// ✅ Your GA4 ID
const GA_MEASUREMENT_ID = 'G-JKKT7X46YC';

// 🧠 Hook for tracking route changes
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
    console.log('📊 GA Pageview Sent:', location.pathname + location.search);
  }, [location]);
};

// Scroll to top on page change
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

// Scroll To Top Button
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-50 bg-[#f2992f] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-[#133331] focus:outline-none ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

// 🔁 All routes
const AppRoutes: React.FC = () => {
  usePageTracking();

  return (
    <>
      <ScrollToTopOnRouteChange />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<><Hero /><Products /></>} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/main-product" element={<MainProduct />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              <Route path="/careers" element={<Careers />} />
              {/* Product Pages */}
              <Route path="/product/mGate" element={<MGatePage />} />
              <Route path="/all_product_pages/mGate" element={<MGatePage />} />
              <Route path="/product/mPOS" element={<MPOSPage />} />
              <Route path="/all_product_pages/mPOS" element={<MPOSPage />} />
              <Route path="/product/bNet" element={<BNetPage />} />
              <Route path="/all_product_pages/bNet" element={<BNetPage />} />
              <Route path="/product/uTMS" element={<UTMSPage />} />
              <Route path="/all_product_pages/uTMS" element={<UTMSPage />} />
              <Route path="/product/bPass" element={<BPassPage />} />
              <Route path="/all_product_pages/bPass" element={<BPassPage />} />
              <Route path="/product/wGate" element={<WGatePage />} />
              <Route path="/all_product_pages/wGate" element={<WGatePage />} />
              <Route path="/product/uIdPay" element={<UIdPayPage />} />
              <Route path="/all_product_pages/uIdPay" element={<UIdPayPage />} />
              <Route path="/product/bCWS" element={<BCWSPage />} />
              <Route path="/all_product_pages/bCWS" element={<BCWSPage />} />
              <Route path="/product/iBecs" element={<IBecsPage />} />
              <Route path="/all_product_pages/iBecs" element={<IBecsPage />} />
              <Route path="/product/sbioidS" element={<SbioidSPage />} />
              <Route path="/all_product_pages/sbioidS" element={<SbioidSPage />} />
              <Route path="/product/cPerso" element={<CPersoPage />} />
              <Route path="/all_product_pages/cPerso" element={<CPersoPage />} />
              <Route path="/product/pHSM" element={<PHSMPage />} />
              <Route path="/all_product_pages/pHSM" element={<PHSMPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

// 🔁 Initialize Analytics
const App: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    console.log('✅ GA4 initialized with ID:', GA_MEASUREMENT_ID);
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
