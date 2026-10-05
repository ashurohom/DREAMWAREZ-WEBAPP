import React, { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import androidCustomSolutions from '../../assets/android_custom_solutions.png';
import androidUserCentric from '../../assets/android_user_centric.png';
import androidRobustPerf from '../../assets/android_robust_perf.png';
import androidFeatureRich from '../../assets/android_feature_rich.png';
import androidScalableArch from '../../assets/android_scalable_arch.png';
import androidRobustSecurity from '../../assets/android_robust_security.png';
import androidHeroBg from '../../assets/android_hero.png';
import devWoman from '../../assets/dev_woman.png';
import androidReqAnalysis from '../../assets/req_analysis_ios_1781516934814.png';
import androidUiUx from '../../assets/ui_ux_ios_1781516956654.png';
import androidDevIntegration from '../../assets/dev_integration_ios_1781516976696.png';
import androidQaTesting from '../../assets/qa_testing_ios_1781516996394.png';
import androidLaunchMaint from '../../assets/launch_maint_ios_1781517017797.png';

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

export function AndroidAppPage() {
  return (
    <div className="app-container">
     
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Android App Development" />

      <main className="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-53 md:pb-28 bg-white relative overflow-hidden flex items-center">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom--0 right-0 w-full h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 w-full z-10" style={{ maxWidth: '1350px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column: Content */}
              <div className="text-left reveal reveal-fade-left">
                <SectionLabel className="mb-4" align="left">
                  Android Ecosystem
                </SectionLabel>
                <h1 className="text-[40px] md:text-[50px] font-extrabold text-slate-900 font-heading tracking-tight leading-tight mb-6 md:whitespace-nowrap">
                  Android App <span style={{ color: '#7A7A7A' }}>Development</span>
                </h1>
                <p className="text-[16px] text-black font-normal leading-relaxed mb-0 max-w-lg" style={{ fontFamily: '"Open Sans", sans-serif' }}>
                  Transform Your Vision into a Dynamic Android App. We build custom, user-friendly, and high-performance applications designed to align with your business goals.
                </p>
              </div>

              {/* Right Column: Floating Blob Image */}
              <div className="flex justify-center md:justify-end reveal reveal-fade-right">
                <div 
                  className="w-full max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100" 
                  style={{ borderRadius: '24px' }}
                >
                  <img 
                    src={devWoman} 
                    alt="Android Developer" 
                    className="w-full h-full object-cover" 
                    style={{ borderRadius: '24px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-white reveal reveal-fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>
              MOBILE ARCHITECTURE
            </SectionLabel>
            <p className="text-black text-[16px] mt-4 leading-relaxed max-w-2xl mx-auto">
              We specialize in crafting cutting-edge Android applications that cater to your business needs, delivering seamless, innovative, and highly functional apps tailored to your goals.
            </p>
          </div>
        </section>

        {/* Why Choose Section with Alternating layout grids */}
        <section className="py-12 bg-slate-50 border-b border-slate-100">
          <div className="mx-auto px-6" style={{ maxWidth: '1350px' }}>
            <div className="text-center mb-12">
              <SectionLabel>
                DEVELOPMENT BENEFITS
              </SectionLabel>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Why Choose Dreamwarez for Android App Development?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Custom Solutions */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-xs text-center overflow-hidden flex flex-col reveal reveal-fade-up transition-transform hover:-translate-y-1 max-w-[360px] mx-auto w-full">
                <img src={androidCustomSolutions} alt="Custom Solutions" className="w-full h-36 object-cover" />
                <div className="p-5 flex-1 flex flex-col justify-center">
                  <h3 className="text-[16px] font-extrabold text-slate-800 font-heading">Custom Solutions</h3>
                  <h4 className="text-slate-700 font-bold text-[14px] mt-2">Every business is unique, and so are its challenges.</h4>
                  <p className="text-black text-[14px] mt-3 leading-relaxed">
                    We build Android apps designed specifically to align with your business objectives and streamline operations.
                  </p>
                </div>
              </div>

              {/* Card 2: User-Centric Design */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-xs text-center overflow-hidden flex flex-col reveal reveal-fade-up transition-transform hover:-translate-y-1 max-w-[360px] mx-auto w-full" style={{ animationDelay: '100ms' }}>
                <img src={androidUserCentric} alt="User-Centric Design" className="w-full h-36 object-cover" />
                <div className="p-5 flex-1 flex flex-col justify-center">
                  <h3 className="text-[16px] font-extrabold text-slate-800 font-heading">User-Centric Design</h3>
                  <p className="text-black text-[14px] mt-3 leading-relaxed">
                    Our designs focus on providing intuitive navigation and a superior user experience, ensuring your customers love using your app.
                  </p>
                </div>
              </div>

              {/* Card 3: Robust Performance */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-xs text-center overflow-hidden flex flex-col reveal reveal-fade-up transition-transform hover:-translate-y-1 max-w-[360px] mx-auto w-full" style={{ animationDelay: '200ms' }}>
                <img src={androidRobustPerf} alt="Robust Performance" className="w-full h-36 object-cover" />
                <div className="p-5 flex-1 flex flex-col justify-center">
                  <h3 className="text-[16px] font-extrabold text-slate-800 font-heading">Robust Performance</h3>
                  <p className="text-black text-[14px] mt-3 leading-relaxed">
                    Reliability is key. We ensure your app operates smoothly across devices, with fast loading times and minimal downtime.
                  </p>
                </div>
              </div>

              {/* Card 4: Feature-Rich Functionality */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-xs text-center overflow-hidden flex flex-col reveal reveal-fade-up transition-transform hover:-translate-y-1 max-w-[360px] mx-auto w-full">
                <img src={androidFeatureRich} alt="Feature-Rich Functionality" className="w-full h-36 object-cover" />
                <div className="p-5 flex-1 flex flex-col justify-center">
                  <h3 className="text-[16px] font-extrabold text-slate-800 font-heading">Feature-Rich Functionality</h3>
                  <p className="text-black text-[14px] mt-3 leading-relaxed">
                    From e-commerce to real-time analytics, our apps come packed with features that elevate your business operations and customer engagement.
                  </p>
                </div>
              </div>

              {/* Card 5: Scalable Architecture */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-xs text-center overflow-hidden flex flex-col reveal reveal-fade-up transition-transform hover:-translate-y-1 max-w-[360px] mx-auto w-full" style={{ animationDelay: '100ms' }}>
                <img src={androidScalableArch} alt="Scalable Architecture" className="w-full h-36 object-cover" />
                <div className="p-5 flex-1 flex flex-col justify-center">
                  <h3 className="text-[16px] font-extrabold text-slate-800 font-heading">Scalable Architecture</h3>
                  <p className="text-black text-[14px] mt-3 leading-relaxed">
                    Dreamwarez apps are designed to grow with your business.
                  </p>
                </div>
              </div>

              {/* Card 6: Enterprise Security */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-xs text-center overflow-hidden flex flex-col reveal reveal-fade-up transition-transform hover:-translate-y-1 max-w-[360px] mx-auto w-full" style={{ animationDelay: '200ms' }}>
                <img src={androidRobustSecurity} alt="Enterprise Security" className="w-full h-36 object-cover" />
                <div className="p-5 flex-1 flex flex-col justify-center">
                  <h3 className="text-[16px] font-extrabold text-slate-800 font-heading">Enterprise Security</h3>
                  <p className="text-black text-[14px] mt-3 leading-relaxed">
                    Security is paramount. We implement robust encryption, secure APIs, and compliance standards to protect your sensitive data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Industries We Serve */}
        <section className="pt-20 pb-10 bg-white">
          <div className="mx-auto px-6 text-center max-w-3xl" style={{ maxWidth: '1350px' }}>
            <SectionLabel>
              VERTICAL EXPERIENCE
            </SectionLabel>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Industries We have Served for</h2>
            <p className="text-black text-[16px] mt-4 leading-relaxed">
              From retail and healthcare to education and entertainment, we have built transformative Android apps for businesses across diverse industries.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="pt-10 pb-20 bg-slate-50 border-y border-slate-100">
          <div className="mx-auto px-6 text-center" style={{ maxWidth: '1350px' }}>
            <SectionLabel>
              WORKFLOW PIPELINE
            </SectionLabel>
            <h2 className="text-[28px] font-extrabold text-slate-800 font-heading mt-4 mb-8">Our Android App Development Process</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Step 1 */}
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs text-left reveal reveal-fade-up transition-all hover:border-[#8B2C2C]/30">
                <div className="text-[32px] font-extrabold text-[#8B2C2C] mb-2 leading-none">01</div>
                <h4 className="font-heading font-bold text-slate-800 text-[15px]">Requirement Analysis</h4>
                <p className="text-slate-550 text-[12px] mt-2 leading-relaxed">
                  We work closely with you to understand your vision and objectives, laying the foundation for a successful app.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs text-left reveal reveal-fade-up transition-all hover:border-[#8B2C2C]/30" style={{ animationDelay: '100ms' }}>
                <div className="text-[32px] font-extrabold text-[#8B2C2C] mb-2 leading-none">02</div>
                <h4 className="font-heading font-bold text-slate-800 text-[15px]">UI/UX Design</h4>
                <p className="text-slate-550 text-[12px] mt-2 leading-relaxed">
                  Our design experts create visually stunning and highly functional interfaces that captivate your audience.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs text-left reveal reveal-fade-up transition-all hover:border-[#8B2C2C]/30" style={{ animationDelay: '200ms' }}>
                <div className="text-[32px] font-extrabold text-[#8B2C2C] mb-2 leading-none">03</div>
                <h4 className="font-heading font-bold text-slate-800 text-[15px]">Development & Integration</h4>
                <p className="text-slate-550 text-[12px] mt-2 leading-relaxed">
                  Leveraging the latest technologies, we bring your ideas to life, ensuring seamless integration with your existing systems.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs text-left reveal reveal-fade-up transition-all hover:border-[#8B2C2C]/30" style={{ animationDelay: '300ms' }}>
                <div className="text-[32px] font-extrabold text-[#8B2C2C] mb-2 leading-none">04</div>
                <h4 className="font-heading font-bold text-slate-800 text-[15px]">Testing & QA</h4>
                <p className="text-slate-550 text-[12px] mt-2 leading-relaxed">
                  Every app undergoes rigorous testing to ensure flawless performance, security, and compatibility across Android devices.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs text-left reveal reveal-fade-up transition-all hover:border-[#8B2C2C]/30" style={{ animationDelay: '400ms' }}>
                <div className="text-[32px] font-extrabold text-[#8B2C2C] mb-2 leading-none">05</div>
                <h4 className="font-heading font-bold text-slate-800 text-[15px]">Launch & Support</h4>
                <p className="text-slate-550 text-[12px] mt-2 leading-relaxed">
                  From Google Play Store submission to ongoing updates, we’re with you at every step to ensure continued success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="mx-auto px-6 z-10 relative" style={{ maxWidth: '1350px' }}>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading tracking-tight">
              Ready to start your app journey?
            </h2>
            <p className="text-black text-[16px] max-w-xl mx-auto mt-4 leading-relaxed">
              Whether you’re looking to optimize business processes or create a unique customer experience, our Android solutions are here to make it happen. Let’s create an app that puts your business ahead.
            </p>
            <div className="mt-8">
              <a 
                href="/contact/" 
                className="bg-[#7A7A7A] hover:bg-[#616161] text-white font-bold text-[16px] px-8 py-3.5 rounded-lg shadow-lg hover:shadow-gray-500/20 transition-all inline-block hover:scale-[1.02] cursor-pointer"
              >
                Contact Us Today to Get Started!
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