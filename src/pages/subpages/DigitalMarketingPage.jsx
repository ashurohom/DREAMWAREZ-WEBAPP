import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

const Target = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>);
const Smartphone = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>);
const MousePointerClick = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></svg>);
const FileText = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>);
const BarChart2 = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>);

// Import local assets
import marketingHeroImg from '../../assets/marketing_hero.jpg';
import tabletGraphs from '../../assets/tablet_graphs.png';
import softwaresMarketing from '../../assets/softwares_marketing.jpg';
import salesIntegration from '../../assets/sales_integration.png';
import workspaceHands from '../../assets/workspace_hands.png';
import accountingChart from '../../assets/accounting_chart.png';
import stickerBrowser from '../../assets/sticker_browser.png';
import socialHeroSticker from '../../assets/social_hero_sticker.png';
import salesHeroSticker from '../../assets/sales_hero_sticker.png';
import contentMarketing3d from '../../assets/ui_ux_ios_1781516956654.png';
import biHeroSticker from '../../assets/bi_hero_sticker.png';

export function DigitalMarketingPage() {
  return (
    <div className="app-container software-theme-page" style={{ fontFamily: "'Open Sans', sans-serif", '--font-heading': "'Open Sans', sans-serif", '--font-sans': "'Open Sans', sans-serif" }}>
 
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Digital Marketing" />

      <main className="main-content">
        {/* Hero Section */}
        <section className="relative bg-white min-h-[calc(100vh-80px)] pt-8 pb-10 md:pt-10 md:pb-12 overflow-hidden flex items-center border-b border-slate-100">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full relative z-10" style={{ maxWidth: '1350px' }}>
            {/* Left Content */}
            <div className="md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up pr-8">
              {/* Subtitle */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>Growth Engine</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-6 max-w-[700px]">
                Digital <span style={{ color: '#7A7A7A' }}>Marketing</span>
              </h1>

              {/* Paragraph */}
              <p className="text-lg text-black leading-relaxed max-w-[600px]">
                Boost your brand's online visibility, increase targeted traffic, and achieve higher sales with our comprehensive digital marketing services.
              </p>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-end z-0 reveal reveal-fade-left">
              <div 
                className="w-full max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100" 
                style={{ borderRadius: '24px' }}
              >
                <img 
                  src={marketingHeroImg} 
                  alt="Digital Marketing" 
                  className="w-full h-full object-cover" 
                  style={{ borderRadius: '24px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-slate-50/50 border-y border-slate-100 text-center py-16 w-full">
          <div className="max-w-[1350px] mx-auto px-6 reveal reveal-fade-up relative z-10 flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <div className="inline-flex flex-col items-start gap-1.5">
                <span className="text-[#8B2C2C] font-bold text-[14px] uppercase tracking-widest">
                  ONLINE STRATEGY
                </span>
                <div className="flex gap-1.5">
                  <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
                  <div className="w-4 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
            </div>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6 max-w-4xl mx-auto leading-snug">
              How Digital Marketing Services helps businesses to grow
            </h2>
            <p className="text-black text-[16px] max-w-4xl mx-auto mt-6 leading-relaxed text-justify">
              Digital marketing has revolutionized the way businesses connect with their customers and grow their brand. By leveraging digital channels such as search engines, social media, and email marketing, businesses can reach their target audience 24/7, enhance brand recognition, and generate leads cost-effectively through digital advertising.
            </p>
            <p className="text-black text-[16px] max-w-4xl mx-auto mt-4 leading-relaxed text-justify">
              Digital marketing companies play a crucial role in helping businesses achieve these goals by providing digital marketing solutions and implementing effective digital marketing strategies.
            </p>
          </div>
        </section>

        {/* Digital Marketing Services list */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto text-center px-6 relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="flex justify-center mb-4">
              <div className="inline-flex flex-col items-start gap-1.5">
                <span className="text-[#8B2C2C] font-bold text-[14px] uppercase tracking-widest">
                  OUR SERVICE SUITE
                </span>
                <div className="flex gap-1.5">
                  <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
                  <div className="w-4 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
            </div>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Our Digital Marketing Services</h2>
            <p className="text-black text-[16px] max-w-3xl mx-auto mt-4 leading-relaxed">
              We offer a wide range of services to help your business succeed online. With our dedicated team of experts and a tailored approach to digital marketing, dreamwarez ensures your business stays ahead in the competitive digital landscape.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex flex-col items-center text-center reveal reveal-fade-up px-2 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
                <div className="mb-6 transition-transform hover:-translate-y-1.5 duration-300">
                  <img src={stickerBrowser} alt="SEO" className="w-28 h-28 object-contain mx-auto" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Search Engine Optimization (SEO)</h3>
                <p className="text-black text-[14px] mt-4 leading-relaxed">
                  Get your business to the top of search results. Our SEO strategies enhance visibility, drive organic traffic, and establish your brand as a trusted authority
                </p>
              </div>

              <div className="flex flex-col items-center text-center reveal reveal-fade-up px-2 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]" style={{ animationDelay: '100ms' }}>
                <div className="mb-6 transition-transform hover:-translate-y-1.5 duration-300">
                  <img src={socialHeroSticker} alt="SMM" className="w-28 h-28 object-contain mx-auto" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Social Media Marketing (SMM)</h3>
                <p className="text-black text-[14px] mt-4 leading-relaxed">
                  Engage, inspire, and grow your audience. From Instagram to LinkedIn, we create impactful social media campaigns that resonate with your target audience.
                </p>
              </div>

              <div className="flex flex-col items-center text-center reveal reveal-fade-up px-2 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]" style={{ animationDelay: '200ms' }}>
                <div className="mb-6 transition-transform hover:-translate-y-1.5 duration-300">
                  <img src={salesHeroSticker} alt="Meta Ads" className="w-28 h-28 object-contain mx-auto" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Meta Ads (Facebook & Instagram)</h3>
                <p className="text-black text-[14px] mt-4 leading-relaxed">
                  Amplify your reach with Meta Ads. We design and execute targeted ad campaigns on Facebook and Instagram that connect with your audience and deliver measurable results.
                </p>
              </div>

              <div className="flex flex-col items-center text-center reveal reveal-fade-up px-2 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
                <div className="mb-6 transition-transform hover:-translate-y-1.5 duration-300">
                  <img src={contentMarketing3d} alt="Content Marketing" className="w-28 h-28 object-contain mx-auto" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Content Marketing</h3>
                <p className="text-black text-[14px] mt-4 leading-relaxed">
                  Content is king, and we help you wear the crown. From blogs and videos to infographics, we create compelling content that informs, engages, and converts.
                </p>
              </div>

              <div className="flex flex-col items-center text-center reveal reveal-fade-up px-2 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]" style={{ animationDelay: '100ms' }}>
                <div className="mb-6 transition-transform hover:-translate-y-1.5 duration-300">
                  <img src={biHeroSticker} alt="Analytics" className="w-28 h-28 object-contain mx-auto" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Analytics & Reporting</h3>
                <p className="text-black text-[14px] mt-4 leading-relaxed">
                  Data is at the heart of everything we do. Our detailed analytics and reporting ensure you're always in the loop on campaign performance and ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(139, 44, 44, 0.02))' }}>
            <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '40px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
                Ready To Grow Your Brand Online ?
              </h2>
              <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#7a7a7a', boxShadow: '0 4px 15px rgba(139, 44, 44, 0.2)' }}>
                Get Started
              </a>
            </div>
          </section>
      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}