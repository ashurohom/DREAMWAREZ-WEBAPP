import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

import softwaresSolutions from '../../assets/softwares_solutions.jpg';
import softwaresMarketing from '../../assets/softwares_marketing.jpg';
import softwaresGlobal from '../../assets/softwares_global.jpg';

import softwaresPricing from '../../assets/softwares_pricing_raw.jpg';
import software3DSticker from '../../assets/software_hero_dashboard.png';
import doubleChevronOrange from '../../assets/double_chevron_orange.png';
import { Interactive3DSticker } from '../../components/layout/Interactive3DSticker';
import '../styles/OurSoftwaresPage.css';


export function OurSoftwaresPage() {
  return (
    <div className="app-container software-theme-page">

      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Our Softwares" />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="pt-24 pb-12 md:pt-36 md:pb-20 bg-white relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full relative z-10" style={{ maxWidth: '1350px' }}>
            {/* Left Content */}
            <div className="md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up pr-8 relative">
              <div className="relative z-10">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                  <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>ENTERPRISE ECOSYSTEM</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                    <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  </div>
                </div>
                <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-12 max-w-[700px]">
                  Our <span style={{ color: '#7A7A7A' }}>Software</span>
                </h1>
                <p className="text-[16px] text-black font-bold leading-relaxed max-w-[600px] mb-4">With Us, You Can Grow Your Business</p>
                <p className="text-[16px] text-black leading-relaxed max-w-[600px]">
                  Discover a powerful ecosystem of modern business applications. Automate the mundane, connect your departments, and focus on what truly matters: scaling your vision.
                </p>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div 
                className="w-full max-w-[420px] aspect-[4/5] overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100" 
                style={{ borderRadius: '24px' }}
              >
                <img 
                  src={software3DSticker} 
                  alt="Our Software Solutions" 
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '24px' }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* Intro Section */}
        <section className="purchase-intro-section reveal reveal-fade-up" style={{ marginBottom: '60px' }}>
          <div className="section-inner" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ color: '#8B2C2C',  fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1'  }}>OPPORTUNITY</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: '800', fontFamily: '"Open Sans", sans-serif', marginBottom: '20px', lineHeight: '1.2', color: '#000000' }}>Every challenge brings opportunity</h2>
            <p style={{ fontSize: '16px', fontFamily: '"Open Sans", sans-serif', color: '#000000', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>Dreamwarez all about connecting those who need support with those who are best prepared to provide it. Your users get direct access to advanced technicians who provide better, faster solutions that work every time – anytime, anywhere.</p>
          </div>
        </section>

        {/* Section 1: Smart Solutions */}
        <section className="erp-promo-section w-full py-20" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="section-glow-radial erp-radial"></div>
          <div className="mx-full " style={{ maxWidth: '1350px' }}>
            <div className="erp-grid-redesign">
              {/* Left Column: Text & Bullets */}
              <div className="erp-text-content-new reveal reveal-fade-left">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '16px' }}>
                 <span style={{ color: '#8B2C2C',  fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1'  }}>INTEGRATED APPLICATIONS</span>
              <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
              <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
            </div>
          </div>
                <h2 style={{ fontSize: '40px', fontWeight: '800', fontFamily: '"Open Sans", sans-serif', marginBottom: '20px', lineHeight: '1.2', color: '#000000' }}>Dreamwarez Software: Smart Solutions for Smarter Businesses</h2>
                <p style={{ fontSize: '16px', fontFamily: '"Open Sans", sans-serif', color: '#000000', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>We specialize in developing innovative software solutions that accelerate business growth. From conceptualizing cutting-edge digital products to deploying robust enterprise systems, our expertise covers the entire software development lifecycle.</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, marginTop: '10px', display: 'grid', gap: '10px', width: '100%' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: '600' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ display: 'inline-block' }}><path d="M8 5v14l11-7z"/></svg>
                    Web & Mobile Applications
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: '600' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ display: 'inline-block' }}><path d="M8 5v14l11-7z"/></svg>
                    Enterprise Solutions
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: '600' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ display: 'inline-block' }}><path d="M8 5v14l11-7z"/></svg>
                    Access to Professional Network
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: '600' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ display: 'inline-block' }}><path d="M8 5v14l11-7z"/></svg>
                    24x7x365 Hardware and Software Support
                  </li>
                </ul>

              </div>

              {/* Right Column: Flat Image stack */}
              <div className="erp-visual-content-new reveal reveal-fade-right lg:!justify-end" style={{ minHeight: '450px' }}>
                <div className="strategies-media-box" style={{ maxWidth: '450px', height: '450px' }}>
                  <div className="media-backdrop-circle"></div>
                  <div className="strategies-img-wrapper" style={{ width: '450px', height: '450px' }}>
                    <img src={softwaresSolutions} alt="Smart Solutions" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Digital Marketing */}
        <section className="promo-layout-section section-digital-strategies w-full" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="section-glow-radial strategies-radial"></div>
          <div className="mx-9 px-6" style={{ maxWidth: '1350px' }}>
            <div className="android-grid-redesign" style={{ gridTemplateColumns: '0.9fr 1.1fr', gap: '60px' }}>
              {/* Left Column: 3D Stack */}
              <div className="android-visual-new reveal reveal-fade-left lg:!justify-start">
                <div className="android-media-box" style={{ width: '450px', height: '450px', borderRadius: '40px' }}>
                  <div className="media-backdrop-square"></div>
                  <div className="android-img-wrapper" style={{ width: '450px', height: '450px', borderRadius: '40px' }}>
                    <img src={softwaresMarketing} alt="Digital Marketing Solutions" />
                  </div>
                </div>
              </div>

              {/* Right Column: Text & Bullets */}
              <div className="android-text-new reveal reveal-fade-right" style={{ paddingLeft: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '16px' }}>
  <span style={{ color: '#8B2C2C',  fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1'  }}>GROWTH MARKETING</span>
  <div style={{ display: 'flex', gap: '6px' }}>
    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
    <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
  </div>
</div>
                <h2 style={{ fontSize: '40px', fontWeight: '800', fontFamily: '"Open Sans", sans-serif', marginBottom: '20px', lineHeight: '1.2', color: '#000000' }}>Expert Data-Driven Digital Marketing Solutions</h2>
                <p style={{ fontSize: '16px', fontFamily: '"Open Sans", sans-serif', color: '#000000', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>We empower your digital marketing goals and enhance your brand presence as if it were our own. At Dreamwarez, we blend marketing expertise with technical proficiency to deliver exceptional value.</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, marginTop: '10px', display: 'grid', gap: '10px', width: '100%' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: '600' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ display: 'inline-block' }}><path d="M8 5v14l11-7z"/></svg>
                    Digital Strategy
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: '600' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ display: 'inline-block' }}><path d="M8 5v14l11-7z"/></svg>
                    Content Marketing
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: '600' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ display: 'inline-block' }}><path d="M8 5v14l11-7z"/></svg>
                    Social Media Marketing
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: '600' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ display: 'inline-block' }}><path d="M8 5v14l11-7z"/></svg>
                    Search Engine Optimization (SEO)
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Global Reach */}
        <section className="promo-layout-section alternate section-android-app w-full py-20" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="section-glow-radial android-radial"></div>
          <div className="mx-12 px-4" style={{ maxWidth: '1350px' }}>
            <div className="strategies-grid-redesign">
              {/* Left Column: Text & Bullets */}
              <div className="strategies-text-new reveal reveal-fade-left">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '16px' }}>
  <span style={{ color: '#8b2c2c',  fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1'  }}>GLOBAL IMPACT</span>
  <div style={{ display: 'flex', gap: '6px' }}>
    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#9ca3af' }}></div>
    <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#9ca3af' }}></div>
  </div>
</div>
              <h2 style={{ fontSize: '40px', fontWeight: '800', fontFamily: '"Open Sans", sans-serif', marginBottom: '20px', lineHeight: '1.2', color: '#000000' }}>From Local to Global: Transforming Businesses Digitally</h2>
              <p className="strategies-desc-new" style={{ fontWeight: '700', color: '#000000' }}>
                50+ Projects Delivered & Counting...
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, marginTop: '10px', display: 'grid', gap: '10px', width: '100%' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: '600' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ display: 'inline-block' }}><path d="M8 5v14l11-7z"/></svg>
                  Healthcare | Wellness
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: '600' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ display: 'inline-block' }}><path d="M8 5v14l11-7z"/></svg>
                  E-commerce
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: '600' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ display: 'inline-block' }}><path d="M8 5v14l11-7z"/></svg>
                  Transportation
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: '600' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B2C2C" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ display: 'inline-block' }}><path d="M8 5v14l11-7z"/></svg>
                  Education
                </li>
              </ul>

            </div>

            {/* Right Column: Image rotated stack & Projects hub widget */}
            <div className="strategies-visual-new reveal reveal-fade-right lg:!justify-end">
              <div className="strategies-media-box">
                <div className="media-backdrop-circle"></div>
                <div className="strategies-img-wrapper" style={{ width: '450px', height: '450px' }}>
                  <img src={softwaresGlobal} alt="Transforming Businesses" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Delivering Excellence Banner */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', background: 'linear-gradient(180deg, transparent, rgba(14, 165, 233, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ color: '#8B2C2C',  fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1'  }}>PARTNER FOR SUCCESS</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: '800', fontFamily: '"Open Sans", sans-serif', marginBottom: '20px', lineHeight: '1.2', color: '#000000' }}>Delivering Excellence, Partnering for Success</h2>
            <p style={{ fontSize: '16px', fontFamily: '"Open Sans", sans-serif', color: '#000000', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>We are the best value digital solutions company. A claim that our clients have gladly endorsed.</p>
            <a href="/contact/#contact-form" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px' }}>
              Contact Us <span style={{ marginLeft: '8px' }}>➔</span>
            </a>
          </div>
        </section>

      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}