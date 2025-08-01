// import React from 'react';
// import aboutHero from '../assets/cPerso.webp';
// import { Link } from 'react-router-dom';

import { useState } from "react";
import { PlayCircle } from "lucide-react"; // or any icon library you use

import {
 Rocket,
  // Building
} from 'lucide-react';

import about_bg from '../assets/aboutbg.jpg';
import aboutUsImg7 from '../assets/Aboutus_img7.jpg';

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  

  const milestones = [
    {
      year: '2015',
      title: 'Founded as a Research Lab',
      description: 'Began our journey as a dedicated research lab focused on advancing biometric technologies and innovation.'
    },
    {
      year: '2022',
      title: 'Transitioned into a Private Limited Company',
      description: 'Evolved into a private limited company, expanding our capabilities and moving towards scalable tech-driven solutions.'
    },
    {
      year: '2023',
      title: 'Strengthened Global Operations',
      description: 'Expanded our operational reach by setting up strategic project offices to support international projects and enterprise-grade deployments.'
    },
    {
      year: '2024',
      title: 'Established TRP Office at IIT Hyderabad',
      description: 'Opened our Technology Research & Product (TRP) office at IIT Hyderabad, reinforcing our commitment to deep tech research and continuous innovation.'
    },
    {
      year: '2025',
      title: 'Recognized as a Technology Leader',
      description: 'Positioned as a leading provider of biometric and payment technology solutions, driving digital transformation through secure, intelligent systems.'
    }
  ];

  return (
    <>

      {/* Modern Consulting Hero Section */}
      <section
        className="w-full bg-[#133331] py-20 relative"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(19,51,49,0.92) 60%, rgba(242,153,47,0.08) 100%), url(${about_bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white/10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center min-h-[600px] gap-10 md:gap-0">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start text-left py-12">
            <div className="mb-4">
              <span className="inline-block px-4 py-3 rounded-full text-xs font-semibold tracking-wider bg-[#f2992f]/90 text-white mb-4">BIOMETRIC & PAYMENT EXPERTS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Unique Technology Consulting.</h1>
            <p className="text-lg text-slate-200 mb-8 max-w-xl">We help clients succeed with secure biometric authentication, payment solutions, and digital transformation. Discover how BNPRS can empower your business with innovation and trust.</p>
            {/* <Link to="/about" className="inline-block px-6 py-2 rounded-lg border border-white text-white font-medium hover:bg-[#f2992f] hover:text-white transition">About Us</Link> */}
          </div>
          {/* Right: Overlapping Images */}
          <div className="flex-1 flex justify-center items-center relative w-full max-w-lg">
            <img src={about_bg} alt="About BNPRS" className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover z-20 border-2 border-white" />
          </div>
        </div>
      </section>



      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center space-x-2 bg-[#f2992f] border border-[#f2992f] rounded-full px-4 py-2 mb-6">
            <Eye className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">About BNPRS</span>
          </div> */}

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Pioneering Technology
              <span className="block bg-[#f2992f] bg-clip-text text-transparent">
                Innovation Since 2015
              </span>
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From startup research lab to technology leader, we've been at the forefront of
              biometric and payment technology innovation for nearly a decade.
            </p>
            {/* <div className="mt-8 flex justify-center gap-6">
            <Link to="/" className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">Home</Link>
            <Link to="/contact" className="px-6 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition">Contact</Link>
          </div> */}
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">Our Journey</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  At BNPRS, we embark on a journey that transcends boundaries, pushing the frontiers
                  of technology and innovation. Founded in 2015 as a startup research lab, we've evolved
                  into a dynamic private limited company, and serve as a project office for IT Partners
                  DWC-LLC in Dubai, UAE.
                </p>
                <p>
                  Our passion lies in exploring the boundless possibilities of biometrics and payment
                  technologies. With our roots deeply embedded in cutting-edge research, we've had the
                  privilege of presenting our findings at esteemed conferences.
                </p>
                <p>
                  Explore our website to discover the intersection of groundbreaking ideas and real-world
                  applications. Join us on this exciting journey as we continue to shape the future of technology.
                </p>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                {/* <div className="flex items-center space-x-2">
                <Building className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium text-slate-700">Dubai, UAE Office</span>
              </div> */}
                <div className="flex items-center space-x-2">
                  <Rocket className="h-5 w-5 text-purple-500" />
                  <span className="text-sm font-medium text-slate-700">Research & Innovation</span>
                </div>
              </div>
            </div>

            
            



 
    <div className="relative rounded-2xl shadow-2xl overflow-hidden">
      {!isVideoPlaying ? (
        <div
          className="cursor-pointer"
          onClick={() => setIsVideoPlaying(true)}
        >
          {/* 📸 Background Image */}
          <img
            src={aboutUsImg7}
            alt="Technology Innovation"
            className="w-full h-auto rounded-2xl"
          />

          {/* 🌈 Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl"></div>

          {/* ▶️ Play Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 hover:bg-white rounded-full p-3 transition-all">
              <PlayCircle className="text-black h-12 w-12" />
            </div>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full aspect-video rounded-2xl"
          src="https://www.youtube.com/embed/YQhngrVycA0?autoplay=1&rel=0&controls=1&playsinline=1"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>








          </div>



          {/* Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-4">Our Milestones</h3>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Key moments in our journey from research lab to technology innovation leader
            </p>

            <div className="relative">
              {/* Desktop vertical line, mobile horizontal line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#f2992f] rounded-full"></div>
              <div className="md:hidden absolute left-0 top-0 w-full h-1 bg-[#f2992f] rounded-full"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index}
                    className={`md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col items-center`}
                  >
                    {/* Card for mobile: full width, stacked, centered; desktop: original design */}
                    <div className={`w-full md:w-1/2 px-2 md:px-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center md:text-inherit`}
                    >
                      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200">
                        <div className="text-xl md:text-2xl font-bold bg-[#f2992f] bg-clip-text text-transparent mb-2">{milestone.year}</div>
                        <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{milestone.title}</h4>
                        <p className="text-slate-600 text-sm md:text-base">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot: centered for mobile, normal for desktop */}
                    <div className="relative z-10 flex items-center justify-center md:block mx-0 md:mx-auto my-2 md:my-0">
                      <div className="w-5 h-5 md:w-4 md:h-4 bg-[#f2992f] rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    {/* Spacer for desktop only */}
                    <div className="hidden md:block w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </section>


      {/* Modern Consulting Hero Section */}
      {/* New Section: Company Mission & Vision */}
      <section className="w-full bg-[#f2992f]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center min-h-[400px] gap-10 md:gap-0">
          {/* Left: Mission Statement */}
          <div className="flex-1 flex flex-col justify-center items-start text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#133331] mb-4">Our Mission</h2>
            <p className="text-lg text-[#133331] mb-6 max-w-xl">To empower businesses and governments with secure, innovative biometric and payment solutions that drive digital transformation and build trust in every transaction.</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#133331] mb-4 mt-8">Our Vision</h2>
            <p className="text-lg text-[#133331] max-w-xl">To be the global leader in biometric and payment technology, setting new standards for security, convenience, and innovation worldwide.</p>
          </div>
          {/* Right: Vision Image */}
          <div className="flex-1 flex justify-center items-center">
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&fit=crop&w=600&q=80" alt="Mission Vision" className="rounded-2xl shadow-xl w-full max-w-sm object-cover border-2 border-[#f2992f]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;