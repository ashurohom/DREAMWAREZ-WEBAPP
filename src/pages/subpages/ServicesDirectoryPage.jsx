import React, { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import iosUserExperience from '../../assets/ios_user_experience.png';
import iosCustomSolutions from '../../assets/ios_custom_solutions.png';
import androidScalableArch from '../../assets/android_scalable_arch.png';
import erpOpt1Large from '../../assets/erp_opt1_large.jpg';
import erpOpt1Small from '../../assets/erp_opt1_small.jpg';

export function ServicesDirectoryPage() {
  const [showSimulator, setShowSimulator] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);

  const servicesList = [
    'System Integration',
    'Custom Web Development',
    'Custom UI/UX Design',
    'API Development',
    'Software Consulting',
    'Implementation & Deployment',
    'Custom Application Development',
    'Mobile App Development',
    'Maintenance & Management'
  ];

  const faqs = [
    {
      q: 'How long does software development take?',
      a: 'We cannot possibly answer this question precisely because there are projects finished in 2 to 3 weeks, but there are also tasks that take several years to complete. To provide you with a precise answer, we have to evaluate the project complexity and the work scope. Knowing this information, we can provide you with the estimated time frame.'
    },
    {
      q: 'How does the project work process take place?',
      a: 'Each project is unique and requires a customized approach, but most of the development stages are relevant to all of them. However, the very process of their implementation may differ somewhat. We recommend you read more about our work processes on our website.'
    },
    {
      q: 'What information do you need from me to start work?',
      a: 'Share the details of your project – like scope, timeframes, or business challenges you’d like to solve.'
    },
    {
      q: 'Do you provide product support services after the app development is complete?',
      a: 'Yes, we are always glad to provide technical support and service the apps we have developed. We can also further develop your software product if you need to implement new features or integrate third-party services.'
    }
  ];

  const toggleService = (serv) => {
    if (selectedServices.includes(serv)) {
      setSelectedServices(selectedServices.filter(s => s !== serv));
    } else {
      setSelectedServices([...selectedServices, serv]);
    }
  };

  return (
    <div className="app-container">
  
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Services" />

      <main className="main-content">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-80px)] flex items-center pt-8 pb-10 md:pt-10 md:pb-12 bg-white relative overflow-hidden">
          {/* Background Texture & Patterns */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Top Right Blue Shape */}
            <div 
              className="absolute top-0 right-0 w-full h-full" 
              style={{ 
                background: 'linear-gradient(to bottom left, rgba(147, 196, 253, 0.5) 0%, transparent 70%)',
                clipPath: 'polygon(20% 0, 100% 0, 100% 80%)' 
              }} 
            />
            {/* Bottom Left Teal Shape */}
            <div 
              className="absolute bottom-20 left-0 w-full h-full" 
              style={{ 
                background: 'linear-gradient(to top right, rgba(138, 202, 192, 0.5) 0%, transparent 70%)',
                clipPath: 'polygon(0 20%, 80% 100%, 0 100%)' 
              }} 
            />
          </div>
          <div className="max-w-[1330px] mx-auto px-6 w-full z-10 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column: Content */}
              <div className="text-left reveal reveal-fade-left">
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', fontSize: '14px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: '#8b2c2c', marginBottom: '16px' }}>
                  SERVICES DIRECTORY
                  <span style={{ display: 'flex', gap: '4px', alignItems: 'center', marginTop: '2px' }}>
                    <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                    <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                  </span>
                </div>
                <h1 className="animate-title" style={{ fontSize: '56px', lineHeight: '1.2', fontWeight: '800', fontFamily: '"Open Sans", sans-serif', color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.025em' }}>
                  Services
                </h1>
                <p className="animate-subtitle" style={{ fontSize: '16px', lineHeight: '1.625', color: '#000000', maxWidth: '42rem', marginBottom: '16px', marginTop: '16px', fontFamily: '"Open Sans", sans-serif' }}>
                  Take Your business to the Next Level with Dreamwarez Solutions.
                </p>
                <p className="animate-subtitle" style={{ fontSize: '16px', lineHeight: '1.625', color: '#000000', maxWidth: '42rem', marginBottom: '32px', fontFamily: '"Open Sans", sans-serif' }}>
                  Explore our comprehensive suite of professional services. We combine industry expertise with cutting-edge technology to build, maintain, and secure the software that powers your success.
                </p>
              </div>

              {/* Right Column: Image */}
              <div className="flex justify-center md:justify-end reveal reveal-fade-right">
                <img 
                  src="/stickers/services_hero_specific_3.png" 
                  alt="Services Directory" 
                  className="w-full max-w-[450px] aspect-square object-cover rounded-3xl shadow-2xl animate-float" 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1280px] mx-auto text-center">
            <div className="reveal reveal-fade-left">
              <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', fontSize: '14px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: '#8b2c2c', marginBottom: '16px' }}>
                OPERATIONAL EXCELLENCE
                <span style={{ display: 'flex', gap: '4px', alignItems: 'center', marginTop: '2px' }}>
                  <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                  <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                </span>
              </div>
              <h2 className="text-[46px] font-extrabold text-slate-800 font-heading mt-6 mb-12">How We Can Help</h2>
              <p className="text-black text-base max-w-7xl mx-auto mb-12 leading-relaxed">
                Dreamwarez has what you need and scales as you grow. Our services cover the deep breadth of what we can deliver. For easy, we have all-in-one professional services management. We work with clients to understand the type of support they need and combine it with industry expertise to ensure the right, tailored solution is offered.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-lg transition-all reveal reveal-zoom-in flex flex-col overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img src={iosUserExperience} alt="Easy to use" className="w-full h-full object-cover" />

                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-start">
                  <h3 className="font-heading font-bold text-slate-800 text-lg mb-3">Easy to use</h3>
                  <p className="text-black text-sm leading-relaxed">
                    With an intuitive interface, start streamlining your professional services processes today!
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-lg transition-all reveal reveal-zoom-in flex flex-col overflow-hidden" style={{ animationDelay: '100ms' }}>
                <div className="h-48 relative overflow-hidden">
                  <img src={iosCustomSolutions} alt="Fully customizable" className="w-full h-full object-cover" />

                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-start">
                  <h3 className="font-heading font-bold text-slate-800 text-lg mb-3">Fully customizable</h3>
                  <p className="text-black text-sm leading-relaxed">
                    Software that works the way you need it to and is essential for everyday use. Dreamwarez's flexible platform adapts to your processes so you can deliver your unique services more efficiently and profitably.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-lg transition-all reveal reveal-zoom-in flex flex-col overflow-hidden" style={{ animationDelay: '200ms' }}>
                <div className="h-48 relative overflow-hidden">
                  <img src={androidScalableArch} alt="Infinitely scalable" className="w-full h-full object-cover" />

                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-start">
                  <h3 className="font-heading font-bold text-slate-800 text-lg mb-3">Infinitely scalable</h3>
                  <p className="text-black text-sm leading-relaxed">
                    Dreamwarez brings everyone and everything together in one hub for seamless management.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>



        {/* Services We Are providing */}
        <section className="py-20 px-6 max-w-[1330px] mx-auto">
          <div className="text-center mb-12 reveal reveal-fade-right">
            <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', fontSize: '14px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: '#8b2c2c', marginBottom: '16px' }}>
              SERVICE PORTFOLIO
              <span style={{ display: 'flex', gap: '4px', alignItems: 'center', marginTop: '2px' }}>
                <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
              </span>
            </div>
            <h2 className="text-[46px] font-extrabold text-slate-800 font-heading mt-6">Services We Are providing</h2>
            <h3 className="text-black text-base max-w-7xl mx-auto mt-4 leading-relaxed">
              These services span the entire software development lifecycle — from ideation and design to development, deployment, and maintenance.
            </h3>
            <p className="text-black text-base max-w-8xl mx-auto mt-2 leading-relaxed">
              We are a leading technology solutions provider, offering a wide range of services to help your business thrive in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'System Integration', 
                icon: <svg className="w-8 h-8 text-[#8b2c2c] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              },
              { 
                title: 'Custom Web Development', 
                icon: <svg className="w-8 h-8 text-[#8b2c2c] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              },
              { 
                title: 'Custom UI/UX Design', 
                icon: <svg className="w-8 h-8 text-[#8b2c2c] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              },
              { 
                title: 'API Development', 
                icon: <svg className="w-8 h-8 text-[#8b2c2c] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              },
              { 
                title: 'Software Consulting', 
                icon: <svg className="w-8 h-8 text-[#8b2c2c] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
              },
              { 
                title: 'Implementation & Deployment', 
                icon: <svg className="w-8 h-8 text-[#8b2c2c] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              },
              { 
                title: 'Custom Application Development', 
                icon: <svg className="w-8 h-8 text-[#8b2c2c] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              },
              { 
                title: 'Mobile App Development', 
                icon: <svg className="w-8 h-8 text-[#8b2c2c] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              },
              { 
                title: 'Maintenance & Management', 
                icon: <svg className="w-8 h-8 text-[#8b2c2c] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              }
            ].map((serv, index) => (
              <div key={index} className={`bg-white border border-slate-200 p-6 rounded-2xl shadow-xs hover:shadow-md hover:border-[#3bba9c] transition-all reveal ${index % 3 === 0 ? 'reveal-fade-right' : index % 3 === 2 ? 'reveal-fade-left' : 'reveal-zoom-in'}`} style={{ animationDelay: `${(index % 3) * 100}ms` }}>
                {serv.icon}
                <h4 className="font-heading font-extrabold text-slate-800 text-base mb-2">{serv.title}</h4>
                <p className="text-black text-sm leading-relaxed">
                  Tailored {serv.title.toLowerCase()} engineered with next-generation coding paradigms to optimize execution efficiency and security.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-[1330px] mx-auto w-full flex flex-col md:flex-row items-center gap-16 reveal reveal-zoom-in py-16">
            {/* Left Image Section */}
            <div className="w-full md:w-1/2 flex justify-start py-8">
              <div className="relative group/images cursor-pointer">
                <img src={erpOpt1Large} alt="Corporate ERP Analytics" className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover/images:scale-[1.02] transition-transform duration-500 ease-out" />
                <img src={erpOpt1Small} alt="ERP Dashboard" className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] object-cover rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] absolute -bottom-12 -right-8 md:-bottom-16 md:-right-16 z-20 border border-white/40 group-hover/images:translate-x-3 group-hover/images:-translate-y-3 transition-transform duration-500 ease-out" />
              </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
              <div className="relative z-10 max-w-[500px]">
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', fontSize: '14px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: '#8b2c2c', marginBottom: '24px' }}>
                  ENTERPRISE SOLUTION
                  <span style={{ display: 'flex', gap: '4px', alignItems: 'center', marginTop: '2px' }}>
                    <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                    <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                  </span>
                </div>
                
                <h3 className="font-heading font-extrabold text-[#0f172a] text-[36px] md:text-[42px] mb-6 leading-tight">
                  Run A Smooth Business With ERP Intact.
                </h3>
                
                <p className="text-slate-500 text-base leading-relaxed mb-10">
                  Manage your complete business software flow from multiple warehouses and manufacturing to sales and purchasing—all right from a single, unified solution.
                </p>
                
                <div>
                  <a href="/contact/" className="bg-[#7a7a7a] text-white font-bold text-base text-sm px-8 py-4 rounded-full hover:bg-2d9e84 transition-all duration-300 group/btn">
                    Explore More <span className="text-lg font-bold group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-24 px-6 bg-white relative">

          <div className="max-w-[900px] mx-auto relative z-10">
            <div className="text-center mb-16 reveal reveal-fade-up">
              <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', fontSize: '14px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: '#8b2c2c', marginBottom: '16px' }}>
                COMMON QUESTIONS
                <span style={{ display: 'flex', gap: '4px', alignItems: 'center', marginTop: '2px' }}>
                  <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                  <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                </span>
              </div>
              <h2 className="text-[36px] md:text-[42px] font-extrabold text-black font-heading leading-tight mb-4">
                FAQ
              </h2>
              <p className="text-black text-lg max-w-2xl mx-auto">
                Find answers to the most common questions about our software development services and processes.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white border transition-all duration-300 rounded-2xl overflow-hidden ${activeFaq === idx ? 'border-[#8b2c2c] shadow-lg shadow-blue-900/5' : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'}`}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full text-left px-6 py-5 font-heading font-bold text-slate-800 flex justify-between items-center cursor-pointer group"
                  >
                    <span className="text-[17px] text-black">
                      {faq.q}
                    </span>
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-black transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}>
                      {activeFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-black leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 px-6 bg-white text-center relative overflow-hidden">
          <div className="max-w-[1270px] mx-auto z-10 relative">
            <h2 className="text-[46px] font-extrabold text-slate-800 font-heading tracking-tight">
              Want to start a project?
            </h2>
            <p className="text-black text-base max-w-xl mx-auto mt-4 leading-relaxed">
              Our team is ready to implement your ideas.
            </p>
            <div className="mt-8">
              <a 
                href="/contact/" 
                className="bg-[#7a7a7a] text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all inline-block hover:scale-[1.02] cursor-pointer"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}

