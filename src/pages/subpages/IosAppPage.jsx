import React, { useState, useEffect } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import iosHeroPhoto from '../../assets/ios_hero_photo.jpg';

const AppleLogo = () => (
  <svg className="w-5 h-5 text-[#8B2C2C] shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.61.7-1.15 1.84-1.01 2.96 1.12.09 2.27-.58 2.96-1.4z" />
  </svg>
);

const SectionLabel = ({ children, className = '', align = 'left' }) => {
  const isCentered = align === 'center';
  return (
    <div className={`inline-flex flex-col ${isCentered ? 'items-center' : 'items-start'} gap-1.5 ${className}`}>
      <span className="text-[#8B2C2C] font-bold text-[14px] uppercase tracking-widest">
        {children}
      </span>
      <div className="flex gap-1.5">
        <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
        <div className="w-4 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
      </div>
    </div>
  );
};

export function IosAppPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const processSteps = [
    {
      number: "01",
      title: "Requirement Analysis",
      description: "We work closely with you to understand your vision and objectives, laying the foundation for a successful app."
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Our design experts create visually stunning and highly functional interfaces that captivate your audience."
    },
    {
      number: "03",
      title: "Development & Integration",
      description: "Leveraging the latest technologies, we bring your ideas to life, ensuring seamless integration with your existing systems."
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "Every app undergoes rigorous testing to ensure flawless performance, security, and compatibility across Apple devices."
    },
    {
      number: "05",
      title: "Launch & Maintenance",
      description: "From app store submission to ongoing updates, we’re with you at every step to ensure continued success."
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="app-container">
      <style>{`
        @keyframes localFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .local-fade-in {
          animation: localFadeIn 0.4s ease-out forwards;
        }
      `}</style>
     
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="iOS App Development" />

      <main className="main-content">

        {/* Hero Section */}
        <section className="min-h-[auto] lg:min-h-[calc(100vh-80px)] pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 bg-white relative overflow-hidden flex items-center">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column: Content */}
              <div className="text-left reveal reveal-fade-left">
                <SectionLabel className="mb-4" align="left">
                  iOS Ecosystem
                </SectionLabel>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-slate-900 font-heading tracking-tight leading-tight mb-4 sm:mb-6">
                  iOS App <span className="text-[#0EA5E9]">Development</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-800 font-semibold mb-3 leading-relaxed">
                  Innovative iOS Apps Tailored to Your Business Needs.
                </p>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 sm:mb-8 max-w-lg">
                  We design intuitive, secure, and high-performance applications that provide your customers with a flawless and engaging Apple experience.
                </p>
                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <a
                    href="/contact/#contact-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center"
                  >
                    Start iOS Project &rarr;
                  </a>
                  <a
                    href="#workflow"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold text-sm py-3.5 px-6 rounded-full border border-slate-200 shadow-xs hover:shadow transition-all cursor-pointer text-center"
                  >
                    Explore Workflow
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Image Card */}
              <div className="flex justify-center md:justify-end reveal reveal-fade-right mt-4 md:mt-0">
                <div 
                  className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100 rounded-2xl sm:rounded-3xl"
                >
                  <img 
                    src={iosHeroPhoto} 
                    alt="iOS Development Workstation" 
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto text-center reveal reveal-fade-up">
          <SectionLabel align="center">
            PREMIUM MOBILE PRODUCTS
          </SectionLabel>
          <p className="text-slate-800 font-semibold text-base sm:text-lg max-w-4xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            We specialize in crafting cutting-edge iOS applications that combine functionality, aesthetics, and performance.
          </p>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto mt-3 sm:mt-4 leading-relaxed">
            Whether you’re a startup looking to make a mark or an established business aiming to expand your digital footprint, our custom iOS apps help you achieve your goals.
          </p>
        </section>

        {/* Why Choose Section with Alternating layout grids */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1350px] mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel align="center">
                DEVELOPMENT BENEFITS
              </SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-3 sm:mt-6">Why Choose Our iOS App Development Services?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto text-left mt-6 sm:mt-10">
              {/* Point 1: Seamless User Experience */}
              <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl flex gap-3.5 sm:gap-4 items-start shadow-xs hover:shadow-md transition-all reveal reveal-fade-up">
                <AppleLogo />
                <div>
                  <h3 className="text-base font-bold text-slate-800 font-heading mb-1 sm:mb-1.5">Seamless User Experience</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    We design intuitive and user-friendly apps that provide your customers with a smooth and engaging experience.
                  </p>
                </div>
              </div>

              {/* Point 2: Custom Solutions for Every Industry */}
              <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl flex gap-3.5 sm:gap-4 items-start shadow-xs hover:shadow-md transition-all reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <AppleLogo />
                <div>
                  <h3 className="text-base font-bold text-slate-800 font-heading mb-1 sm:mb-1.5">Custom Solutions for Every Industry</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    From retail and e-commerce to healthcare and finance, our iOS apps are tailored to meet the unique demands of your industry.
                  </p>
                </div>
              </div>

              {/* Point 3: Robust Security */}
              <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl flex gap-3.5 sm:gap-4 items-start shadow-xs hover:shadow-md transition-all reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <AppleLogo />
                <div>
                  <h3 className="text-base font-bold text-slate-800 font-heading mb-1 sm:mb-1.5">Robust Security</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Protect your users’ data with high-end security features and compliance with Apple’s stringent standards.
                  </p>
                </div>
              </div>

              {/* Point 4: High-Performance Applications */}
              <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl flex gap-3.5 sm:gap-4 items-start shadow-xs hover:shadow-md transition-all reveal reveal-fade-up">
                <AppleLogo />
                <div>
                  <h3 className="text-base font-bold text-slate-800 font-heading mb-1 sm:mb-1.5">High-Performance Applications</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Our iOS apps are optimized for speed, scalability, and reliability, ensuring superior performance on all Apple devices.
                  </p>
                </div>
              </div>

              {/* Point 5: App Store Approval Guarantee */}
              <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl flex gap-3.5 sm:gap-4 items-start shadow-xs hover:shadow-md transition-all reveal reveal-fade-up md:col-span-2 max-w-md md:mx-auto w-full" style={{ animationDelay: '100ms' }}>
                <AppleLogo />
                <div>
                  <h3 className="text-base font-bold text-slate-800 font-heading mb-1 sm:mb-1.5">App Store Approval Guarantee</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    We ensure your app meets Apple’s guidelines, streamlining the submission process and guaranteeing approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="workflow" className="scroll-mt-20 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto text-center">
            <SectionLabel align="center">
              WORKFLOW PIPELINE
            </SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-3 sm:mt-6 mb-8 sm:mb-12">Our iOS App Development Process</h2>

            {/* Desktop layout: Rotating Wheel + Details */}
            <div className="hidden md:flex items-center justify-center gap-12 lg:gap-16 max-w-5xl mx-auto mt-8 sm:mt-12 min-h-[400px]">
              {/* Left: Rotating Wheel */}
              <div className="relative w-[340px] h-[340px] lg:w-[360px] lg:h-[360px] flex items-center justify-center select-none"
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}>
                {/* Inner static center card */}
                <div className="absolute w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-slate-50 border border-slate-200/60 shadow-inner flex flex-col items-center justify-center z-10">
                  <AppleLogo />
                  <span className="text-[11px] font-extrabold text-[#8B2C2C] uppercase tracking-widest leading-none mt-1">Stage</span>
                  <span className="text-2xl lg:text-[32px] font-extrabold text-[#8B2C2C] mt-1 leading-none">{processSteps[activeStep].number}</span>
                </div>
                
                {/* Rotating Outer Track */}
                <div className="w-[260px] h-[260px] lg:w-[280px] lg:h-[280px] rounded-full border-2 border-dashed border-slate-200/80 flex items-center justify-center transition-transform duration-700 ease-in-out"
                     style={{ transform: `rotate(-${activeStep * 72}deg)` }}>
                  {processSteps.map((step, idx) => {
                    const stepAngle = idx * 72;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`absolute w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center font-bold text-sm lg:text-base transition-all duration-500 cursor-pointer shadow-md border-2
                          ${activeStep === idx 
                            ? 'bg-[#0EA5E9] border-[#0EA5E9] text-white ring-8 ring-sky-500/10 scale-110' 
                            : 'bg-white border-slate-200 text-slate-500 hover:border-[#0EA5E9]/50 hover:text-[#0EA5E9]'
                          }`}
                        style={{
                          transform: `rotate(${stepAngle}deg) translate(130px) rotate(${activeStep * 72 - stepAngle}deg)`,
                        }}
                      >
                        {step.number}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right: Step Details Card */}
              <div className="flex-1 max-w-md text-left bg-slate-50 border border-slate-200 p-6 lg:p-8 rounded-3xl shadow-sm min-h-[260px] flex flex-col justify-center transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sky-500/5 to-transparent rounded-bl-full pointer-events-none" />
                <span className="text-xs font-bold text-[#8B2C2C] uppercase tracking-widest mb-2 block">
                  Step {processSteps[activeStep].number} of 05
                </span>
                <div key={activeStep} className="local-fade-in">
                  <h3 className="text-xl lg:text-2xl font-extrabold text-slate-800 font-heading mb-3">
                    {processSteps[activeStep].title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {processSteps[activeStep].description}
                  </p>
                </div>
                
                {/* Navigation dots */}
                <div className="flex gap-2 mt-6">
                  {processSteps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer
                        ${activeStep === idx ? 'bg-[#0EA5E9] w-6' : 'bg-slate-300 hover:bg-slate-400 w-2.5'}`}
                      aria-label={`Go to step ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile layout: Linear list with active focus slider */}
            <div className="md:hidden flex flex-col gap-4 max-w-lg mx-auto mt-6">
              {/* Horizontal progress buttons */}
              <div className="flex justify-between items-center bg-slate-50 border border-slate-200 p-2 rounded-2xl">
                {processSteps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 cursor-pointer
                      ${activeStep === idx 
                        ? 'bg-[#0EA5E9] text-white shadow-md' 
                        : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-100'
                      }`}
                  >
                    {step.number}
                  </button>
                ))}
              </div>

              {/* Active Step Details */}
              <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 rounded-2xl text-left shadow-xs min-h-[160px] flex flex-col justify-center relative overflow-hidden">
                <span className="text-[10px] sm:text-xs font-bold text-[#8B2C2C] uppercase tracking-widest mb-1.5 block">
                  Step {processSteps[activeStep].number} of 05
                </span>
                <div key={activeStep} className="local-fade-in">
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 font-heading mb-1.5">
                    {processSteps[activeStep].title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {processSteps[activeStep].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why iOS Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1350px] mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel align="center">
                PLATFORM REACH
              </SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-3 sm:mt-6">Why iOS for Your Business?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mt-6 sm:mt-10">
              {/* Point 1: Global Reach */}
              <div className="flex gap-3.5 sm:gap-4 items-start bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-xs reveal reveal-fade-up">
                <AppleLogo />
                <div>
                  <h3 className="text-base font-bold text-slate-800 font-heading mb-1 sm:mb-1.5">Global Reach</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Tap into Apple’s premium user base with an app that reflects your brand’s excellence.
                  </p>
                </div>
              </div>

              {/* Point 2: Higher ROI */}
              <div className="flex gap-3.5 sm:gap-4 items-start bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <AppleLogo />
                <div>
                  <h3 className="text-base font-bold text-slate-800 font-heading mb-1 sm:mb-1.5">Higher ROI</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    iOS users are known for higher engagement and spending, making it a lucrative platform for businesses.
                  </p>
                </div>
              </div>

              {/* Point 3: Advanced Features */}
              <div className="flex gap-3.5 sm:gap-4 items-start bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <AppleLogo />
                <div>
                  <h3 className="text-base font-bold text-slate-800 font-heading mb-1 sm:mb-1.5">Advanced Features</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Leverage the latest iOS capabilities, including AR, Siri, and Apple Pay, to create unique user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-[1100px] mx-auto text-center reveal reveal-fade-up">
            <SectionLabel align="center">
              STRATEGIC COOPERATION
            </SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-3 sm:mt-6">Partner with Dreamwarez</h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto mt-3 sm:mt-4 leading-relaxed">
              With a team of experienced developers, designers, and strategists, Dreamwarez Software delivers iOS applications that drive results and elevate your business. Let’s transform your ideas into a world-class app that stands out in the competitive Apple ecosystem.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto z-10 relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading tracking-tight leading-tight max-w-3xl mx-auto">
              Let’s build an iOS app that redefines your business. Contact us today!
            </h2>
            <div className="mt-6 sm:mt-8 flex justify-center">
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