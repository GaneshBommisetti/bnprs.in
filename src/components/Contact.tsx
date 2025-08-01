import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Globe,
  MessageSquare,
  Building
} from 'lucide-react';

const Contact = () => {
  // Web3Forms integration: No need for React state/handlers

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@bnprs.in',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 75694 49657',
      description: 'Available during business hours'
    },
    {
      icon: MapPin,
      title: 'BNPRS Private Limited ',
      value: '#5-216/1-3, AI Technology Park,  Amalapuram',
      description: 'Our project office location'
    },
    // {
    //   icon: Clock,
    //   title: 'Business Hours',
    //   value: 'Sun - Thu: 9AM - 6PM GST',
    //   description: 'Middle East business hours'
    // }
  ];

  return (
    <>
      {/* Modern Consulting Hero Section for Contact Page */}
      <section
        className="w-full py-20 relative bg-[#133331]"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop')",
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
              <span className="inline-block px-4 py-3 rounded-full text-xs font-semibold tracking-wider bg-[#f2992f]/90 text-white mb-4">CONTACT BNPRS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Connect With Our Experts.</h1>
            <p className="text-lg text-slate-200 mb-8 max-w-xl">Reach out for secure biometric authentication, payment solutions, or digital transformation. Our team is ready to help you innovate and grow.</p>
          </div>
          {/* Right: Overlapping Images */}
          <div className="flex-1 flex justify-center items-center relative w-full max-w-lg">
            {/* Optionally, you can keep the image or remove for pure bg effect */}
            {/* <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="Contact BNPRS" className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover z-20 border-2 border-white" /> */}
          </div>
        </div>
      </section>

      



      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6">
              <MessageSquare className="h-4 w-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Get In Touch</span>
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Let's Start a
              <span className="block bg-[#f2992f] bg-clip-text text-transparent">
                Conversation
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to explore the possibilities of biometric and payment technologies? 
              We're here to help you transform your business with innovative solutions.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-[#f2992f]/30">
              <h3 className="text-3xl font-extrabold text-[#133331] mb-8 flex items-center gap-2">
                <Send className="h-7 w-7 text-[#f2992f]" />
                Send us a message
              </h3>
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-7">
                {/* Web3Forms Access Key - replace with your key */}
                <input type="hidden" name="access_key" value="148b4f89-72e2-45db-abff-15c3f8bdbe74" />
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-[#133331]">Full Name <span className="text-[#f2992f]">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-3 border-2 border-[#f2992f]/40 rounded-xl focus:ring-2 focus:ring-[#f2992f] focus:border-[#f2992f] bg-[#f2992f]/5 placeholder:text-[#f2992f]/60 text-[#133331] font-medium transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-[#133331]">Email Address <span className="text-[#f2992f]">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-3 border-2 border-[#f2992f]/40 rounded-xl focus:ring-2 focus:ring-[#f2992f] focus:border-[#f2992f] bg-[#f2992f]/5 placeholder:text-[#f2992f]/60 text-[#133331] font-medium transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-[#133331]">Message <span className="text-[#f2992f]">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-5 py-3 border-2 border-[#f2992f]/40 rounded-xl focus:ring-2 focus:ring-[#f2992f] focus:border-[#f2992f] bg-[#f2992f]/5 placeholder:text-[#f2992f]/60 text-[#133331] font-medium transition-colors resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f2992f] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-md hover:bg-[#d9821f] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="h-6 w-6" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in touch</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  We're always excited to hear from potential clients and partners. 
                  Whether you have a specific project in mind or want to explore the possibilities 
                  of biometric and payment technologies, we're here to help.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-[#f2992f] rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">{info.title}</h4>
                      <p className="text-slate-900 font-medium mb-1">{info.value}</p>
                      <p className="text-slate-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Location Map Section */}
      {/* <section className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-[#133331] mb-6 text-center">Our Location</h3>
          <p className="text-center text-slate-600 mb-8">Visit us at our office or find us on the map below.</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#f2992f]/30">
            <iframe
              title="BNPRS Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4704.968470848417!2d82.01839989999999!3d16.590575299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37ef2c9eac4123%3A0x2baf2687b5647c76!2sBNPRS%20Private%20Limited!5e1!3m2!1sen!2sin!4v1752659511786!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Contact;