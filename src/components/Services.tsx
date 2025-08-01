import React from 'react';
import { 
  Code, 
  Settings, 
  Search, 
  CreditCard, 
  Fingerprint,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Specialized development in biometrics and fintech solutions tailored to your specific business requirements and industry standards.',
      features: ['Biometric applications', 'Fintech solutions', 'API development', 'Mobile applications'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Settings,
      title: 'System Integration & Deployment',
      description: 'Comprehensive integration services to seamlessly connect our solutions with your existing infrastructure and workflows.',
      features: ['Legacy system integration', 'Cloud deployment', 'Database migration', 'Performance optimization'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Search,
      title: 'R&D in Authentication Technologies',
      description: 'Cutting-edge research and development in authentication technologies, pushing the boundaries of security and user experience.',
      features: ['Biometric research', 'Security protocols', 'Algorithm development', 'Innovation consulting'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: CreditCard,
      title: 'Payment Gateway & Messaging Services',
      description: 'Secure payment processing and reliable messaging solutions designed for high-volume, mission-critical applications.',
      features: ['Payment processing', 'Message delivery', 'Transaction security', 'Real-time monitoring'],
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Fingerprint,
      title: 'Biometric Enrollment & Identity Management',
      description: 'Complete identity management solutions from enrollment to verification, ensuring secure and efficient user authentication.',
      features: ['Identity enrollment', 'Verification systems', 'Access control', 'Compliance management'],
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6">
            <Settings className="h-4 w-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Technology
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From custom development to system integration, we provide end-to-end services 
            that help you leverage the full potential of biometric and payment technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button className="group/btn flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Development Process</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and challenges' },
              { step: '02', title: 'Design', description: 'Creating tailored solutions and architecture' },
              { step: '03', title: 'Development', description: 'Building and testing your custom solution' },
              { step: '04', title: 'Deployment', description: 'Implementation and ongoing support' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{phase.title}</h4>
                <p className="text-slate-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800 via-blue-900 to-purple-900 rounded-2xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expert services can help you implement cutting-edge 
              biometric and payment solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                Start Consultation
              </button>
              <button className="border border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;