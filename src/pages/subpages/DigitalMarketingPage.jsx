import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Import local assets
import marketingHeroImg from '../../assets/marketing_hero.jpg';
import stickerBrowser from '../../assets/sticker_browser.png';
import socialHeroSticker from '../../assets/social_hero_sticker.png';
import salesHeroSticker from '../../assets/sales_hero_sticker.png';
import contentMarketing3d from '../../assets/ui_ux_ios_1781516956654.png';
import biHeroSticker from '../../assets/bi_hero_sticker.png';

const SectionLabel = ({ children, align = 'left' }) => {
  const isCentered = align === 'center';
  return (
    <div className={`inline-flex flex-col ${isCentered ? 'items-center' : 'items-start'} gap-1.5 mb-3 sm:mb-4`}>
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

export function DigitalMarketingPage() {
  return (
    <div className="app-container software-theme-page overflow-x-hidden">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO 
        title="Digital Marketing Services | Dreamwarez"
        description="Accelerate brand growth, capture high-intent leads, and scale conversions with comprehensive SEO, SMM, Meta Ads, and content marketing."
      />

      <main className="main-content">
        {/* Hero Section */}
        <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 min-h-[auto] lg:min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up md:pr-6 text-center md:text-left items-center md:items-start">
              <SectionLabel>GROWTH ENGINE</SectionLabel>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-4 sm:mb-6 max-w-[700px]">
                Digital <span className="text-[#7A7A7A]">Marketing</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-[600px] mb-6 sm:mb-8">
                Boost your brand's online visibility, increase targeted customer traffic, and achieve higher ROI with our data-driven digital marketing solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.24)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.35)] transition-all cursor-pointer text-center"
                >
                  Request a Proposal &rarr;
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 sm:p-3 shadow-xl border border-slate-100 rounded-2xl sm:rounded-3xl">
                <img 
                  src={marketingHeroImg} 
                  alt="Digital Marketing Strategy" 
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[1000px] mx-auto reveal reveal-fade-up relative z-10 flex flex-col items-center">
            <SectionLabel align="center">ONLINE STRATEGY</SectionLabel>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
              How Digital Marketing Services Help Businesses Grow
            </h2>
            <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 mt-6 text-center sm:text-left">
              <p>
                Digital marketing has revolutionized the way businesses connect with their customers and scale brand equity. By leveraging digital channels such as search engines, social media networks, and email marketing, modern companies can reach their target audience 24/7, cultivate trust, and generate leads cost-effectively.
              </p>
              <p>
                Dreamwarez delivers end-to-end digital marketing solutions, executing strategic data-backed campaigns that continuously lower customer acquisition costs while maximizing lifetime value.
              </p>
            </div>
          </div>
        </section>

        {/* Digital Marketing Services list */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto text-center relative z-10">
            <div className="reveal reveal-fade-up">
              <SectionLabel align="center">OUR SERVICE SUITE</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Our Digital Marketing Services
              </h2>
              <p className="text-slate-700 text-sm sm:text-base max-w-3xl mx-auto mt-3 sm:mt-4 leading-relaxed">
                We offer a wide range of services to help your business succeed online. With our dedicated team of digital strategists, Dreamwarez ensures your brand stays ahead in an increasingly competitive digital landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {/* Service 1 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 reveal reveal-fade-up">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 flex items-center justify-center">
                  <img src={stickerBrowser} alt="SEO" className="w-full h-full object-contain mx-auto" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-base sm:text-lg">Search Engine Optimization (SEO)</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  Get your business to the top of Google search results. Our technical and content SEO strategies enhance search visibility, drive high-intent organic traffic, and establish brand authority.
                </p>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 reveal reveal-fade-up">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 flex items-center justify-center">
                  <img src={socialHeroSticker} alt="SMM" className="w-full h-full object-contain mx-auto" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-base sm:text-lg">Social Media Marketing (SMM)</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  Engage, inspire, and grow your audience. From Instagram to LinkedIn, we craft impactful social media campaigns that resonate with your community and spark active brand conversations.
                </p>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 reveal reveal-fade-up">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 flex items-center justify-center">
                  <img src={salesHeroSticker} alt="Meta Ads" className="w-full h-full object-contain mx-auto" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-base sm:text-lg">Meta Ads (Facebook &amp; Instagram)</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  Amplify your reach with high-converting Meta Ads. We design and manage precision-targeted paid ad campaigns on Facebook and Instagram that deliver measurable return on ad spend.
                </p>
              </div>

              {/* Service 4 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 reveal reveal-fade-up">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 flex items-center justify-center">
                  <img src={contentMarketing3d} alt="Content Marketing" className="w-full h-full object-contain mx-auto" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-base sm:text-lg">Content Marketing</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  Content builds lasting connections. From informative blogs and case studies to infographics and whitepapers, we create compelling assets that inform, persuade, and convert.
                </p>
              </div>

              {/* Service 5 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 reveal reveal-fade-up sm:col-span-2 lg:col-span-1">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 flex items-center justify-center">
                  <img src={biHeroSticker} alt="Analytics" className="w-full h-full object-contain mx-auto" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-base sm:text-lg">Analytics &amp; Reporting</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  Data guides every decision we make. Our granular analytics dashboards and performance reporting guarantee complete transparency on conversion metrics and campaign ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action Section */}
        <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50/50 border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[900px] mx-auto p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white shadow-sm flex flex-col items-center gap-4 sm:gap-6 relative z-10">
            <SectionLabel align="center">GET STARTED</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
              Ready To Grow Your Brand Online?
            </h2>
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