import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

import softwaresSolutions from '../../assets/softwares_solutions.jpg';
import softwaresMarketing from '../../assets/softwares_marketing.jpg';
import softwaresGlobal from '../../assets/softwares_global.jpg';
import software3DSticker from '../../assets/software_hero_dashboard.png';
import '../styles/OurSoftwaresPage.css';

const SectionLabel = ({ children, align = 'left' }) => {
  const isCentered = align === 'center';
  return (
    <div className={`inline-flex flex-col ${isCentered ? 'items-center' : 'items-start'} gap-1.5 mb-4`}>
      <span className="text-[#8B2C2C] font-semibold text-xs sm:text-sm uppercase tracking-wider font-heading leading-tight">
        {children}
      </span>
      <div className="flex gap-1.5">
        <div className="w-10 h-1.5 rounded-full bg-[#7A7A7A]"></div>
        <div className="w-4 h-1.5 rounded-full bg-[#7A7A7A]"></div>
      </div>
    </div>
  );
};

export function OurSoftwaresPage() {
  return (
    <div className="app-container software-theme-page min-h-screen flex flex-col bg-white overflow-x-hidden">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Our Softwares" />

      <main className="main-content flex-grow">
        {/* Custom Hero Section */}
        <section className="min-h-[auto] lg:min-h-[calc(100vh-80px)] flex items-center pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 bg-white relative overflow-hidden border-b border-slate-100">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up md:pr-6 text-center md:text-left items-center md:items-start">
              <SectionLabel>ENTERPRISE ECOSYSTEM</SectionLabel>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-4 sm:mb-6 max-w-[700px]">
                Our <span className="text-[#0EA5E9]">Software</span>
              </h1>

              <p className="text-base sm:text-lg text-black font-bold leading-relaxed max-w-[600px] mb-3 sm:mb-4">
                With Us, You Can Grow Your Business
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-[600px] mb-6 sm:mb-8">
                Discover a powerful ecosystem of modern business applications. Automate the mundane, connect your departments, and focus on what truly matters: scaling your vision.
              </p>

              {/* Responsive Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="/contact/#contact-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center"
                >
                  Explore Softwares &rarr;
                </a>
                <a
                  href="/customised-software-development/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold text-sm py-3.5 px-6 rounded-full border border-slate-200 shadow-xs hover:shadow transition-all cursor-pointer text-center"
                >
                  Custom Software
                </a>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-[4/5] overflow-hidden bg-slate-50 p-2 sm:p-2.5 shadow-xl border border-slate-100 rounded-2xl sm:rounded-3xl">
                <img 
                  src={software3DSticker} 
                  alt="Our Software Solutions" 
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 reveal reveal-fade-up bg-slate-50/50">
          <div className="max-w-[850px] mx-auto text-center">
            <SectionLabel align="center">OPPORTUNITY</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black font-heading mb-4 sm:mb-6 leading-tight">
              Every challenge brings opportunity
            </h2>
            <p className="text-sm sm:text-base md:text-[17px] text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Dreamwarez all about connecting those who need support with those who are best prepared to provide it. Your users get direct access to advanced technicians who provide better, faster solutions that work every time – anytime, anywhere.
            </p>
          </div>
        </section>

        {/* Section 1: Smart Solutions */}
        <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white border-t border-slate-100">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Column: Text & Bullets */}
              <div className="reveal reveal-fade-left">
                <SectionLabel>INTEGRATED APPLICATIONS</SectionLabel>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black font-heading mb-4 leading-tight">
                  Dreamwarez Software: Smart Solutions for Smarter Businesses
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  We specialize in developing innovative software solutions that accelerate business growth. From conceptualizing cutting-edge digital products to deploying robust enterprise systems, our expertise covers the entire software development lifecycle.
                </p>
                <ul className="grid gap-3 w-full">
                  {[
                    'Web & Mobile Applications',
                    'Enterprise Solutions',
                    'Access to Professional Network',
                    '24x7x365 Hardware and Software Support'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-black text-sm sm:text-base font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Visual */}
              <div className="flex justify-center lg:justify-end reveal reveal-fade-right">
                <div className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[450px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100 rounded-2xl sm:rounded-3xl">
                  <img 
                    src={softwaresSolutions} 
                    alt="Smart Solutions" 
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Digital Marketing */}
        <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50/50 border-t border-slate-100">
          <div className="max-w-[1350px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Column: Visual (order-last on mobile, order-first on desktop) */}
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start reveal reveal-fade-left">
                <div className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[450px] aspect-square overflow-hidden bg-white p-2 shadow-xl border border-slate-100 rounded-2xl sm:rounded-3xl">
                  <img 
                    src={softwaresMarketing} 
                    alt="Digital Marketing Solutions" 
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  />
                </div>
              </div>

              {/* Right Column: Text & Bullets */}
              <div className="order-1 lg:order-2 reveal reveal-fade-right">
                <SectionLabel>GROWTH MARKETING</SectionLabel>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black font-heading mb-4 leading-tight">
                  Expert Data-Driven Digital Marketing Solutions
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  We empower your digital marketing goals and enhance your brand presence as if it were our own. At Dreamwarez, we blend marketing expertise with technical proficiency to deliver exceptional value.
                </p>
                <ul className="grid gap-3 w-full">
                  {[
                    'Digital Strategy',
                    'Content Marketing',
                    'Social Media Marketing',
                    'Search Engine Optimization (SEO)'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-black text-sm sm:text-base font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Global Reach */}
        <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white border-t border-slate-100">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Column: Text & Bullets */}
              <div className="reveal reveal-fade-left">
                <SectionLabel>GLOBAL IMPACT</SectionLabel>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black font-heading mb-4 leading-tight">
                  From Local to Global: Transforming Businesses Digitally
                </h2>
                <p className="font-bold text-black text-base sm:text-lg mb-4">
                  50+ Projects Delivered &amp; Counting...
                </p>
                <ul className="grid gap-3 w-full">
                  {[
                    'Healthcare | Wellness',
                    'E-commerce',
                    'Transportation',
                    'Education'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-black text-sm sm:text-base font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Visual */}
              <div className="flex justify-center lg:justify-end reveal reveal-fade-right">
                <div className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[450px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100 rounded-2xl sm:rounded-3xl">
                  <img 
                    src={softwaresGlobal} 
                    alt="Transforming Businesses" 
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivering Excellence Banner / CTA */}
        <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[900px] mx-auto p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50/50 shadow-sm flex flex-col items-center gap-4 sm:gap-6 relative z-10">
            <SectionLabel align="center">PARTNER FOR SUCCESS</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black font-heading leading-tight">
              Delivering Excellence, Partnering for Success
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              We are the best value digital solutions company. A claim that our clients have gladly endorsed.
            </p>
            <div className="mt-2 w-full sm:w-auto">
              <a 
                href="/contact/" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm sm:text-base px-8 py-3.5 sm:py-4 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.24)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.35)] transition-all cursor-pointer text-center"
              >
                Contact Us Today &rarr;
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