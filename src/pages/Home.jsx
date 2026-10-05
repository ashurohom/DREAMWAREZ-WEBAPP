import React, { useState, useEffect } from 'react';
import { SiteHeader } from '../components/layout/SiteHeader';
import { SiteFooter } from '../components/layout/SiteFooter';
import { ChatWidget } from '../components/layout/ChatWidget';
import { NetworkGlobe } from '../components/layout/NetworkGlobe';
import { Helmet } from 'react-helmet-async';
import dashboardMockup from '../assets/dashboard_mockup.png';
import herokaBg from '../assets/hero_bg.jpg';
import warehouseAgvImg from '../assets/erp_opt1_large.jpg';
import ruggedTabletImg from '../assets/rugged_tablet_dashboard.jpg';
import mobileDevImg from '../assets/mobile_dev_tablet_phone.jpg';
import './styles/Home.css';
import './styles/OurSoftwaresPage.css';

// Client collaboration logos
import logoEasylight from '../assets/logo_easylight.jpg';
import logoPurviAgro from '../assets/logo_purvi_agro.png';
import logoVenkatesh from '../assets/logo_venkatesh.png';
import logoDenler from '../assets/logo_denler.png';
import logoSanjivani from '../assets/logo_sanjivani.png';
import logoDeccan from '../assets/logo_deccan.jpg';
import logoVj from '../assets/logo_vj.png';
import logoVishwasBuilder from '../assets/logo_vishwas_builder.jpg';
import logoViswasSales from '../assets/logo_viswas_sales.png';
import logoDuisport from '../assets/logo_duisport.jpg';
import logoAdvance from '../assets/logo_advance.png';

const clientLogos = [
  { img: logoVj, alt: "VJ" },
  { img: logoVishwasBuilder, alt: "Vishwas Builder" },
  { img: logoViswasSales, alt: "Viswas Sales" },
  { img: logoDuisport, alt: "Duisport" },
  { img: logoEasylight, alt: "Easylight" },
  { img: logoPurviAgro, alt: "Purvi Agro" },
  { img: logoVenkatesh, alt: "Venkatesh" },
  { img: logoSanjivani, alt: "Sanjivani" },
  { img: logoDenler, alt: "Denler" },
  { img: logoAdvance, alt: "Advance Hydrau-Tech" },
  { img: logoDeccan, alt: "Deccan" }
];

export function Home() {
  const [modulesSelected, setModulesSelected] = useState({
    erp: true,
    crm: false,
    accounting: false,
    warehouse: false,
    pos: false,
  });
  const [usersCount, setUsersCount] = useState(10);
  const [cloudHosting, setCloudHosting] = useState(true);



  const calculateQuote = () => {
    let baseRate = 0;
    if (modulesSelected.erp) baseRate += 50;
    if (modulesSelected.crm) baseRate += 30;
    if (modulesSelected.accounting) baseRate += 25;
    if (modulesSelected.warehouse) baseRate += 20;
    if (modulesSelected.pos) baseRate += 15;

    const userMultiplier = usersCount <= 5 ? 1.0 : usersCount <= 20 ? 1.2 : 1.5;
    const hostingCost = cloudHosting ? 20 : 0;
    return Math.round((baseRate * userMultiplier) + hostingCost);
  };

  const handleModuleToggle = (mod) => {
    setModulesSelected(prev => ({ ...prev, [mod]: !prev[mod] }));
  };

  return (
    <div className="app-container home-page">
      <Helmet>
        <title>Dreamwarez | Custom ERP & Enterprise Software Solutions</title>
        <meta name="description" content="Dreamwarez offers bespoke software development, ERP solutions, cutting-edge digital marketing, and 3D media animations for global businesses." />
        <meta name="keywords" content="ERP Software, Custom Software Development, Digital Marketing, 3D Animation, Web Development, Tech Agency" />
      </Helmet>
      
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section - Left Aligned Layout */}
        <section 
          className="hero-section relative overflow-hidden flex items-center pt-24 pb-8 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${herokaBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            imageRendering: 'high-quality',
          }}
        >
          <div className="hero-inner max-w-[1440px] mx-auto px-6 xl:px-8 relative z-10 w-full flex flex-row justify-between items-center min-h-[500px] -mt-16 md:-mt-24">
            <div className="hero-content max-w-xl flex flex-col items-start text-left p-8 w-full ml-0 md:ml-4 lg:ml-8 -mt-8 md:-mt-12">
              <h1 className="hero-title text-white text-[60px] leading-[1.1] font-extrabold tracking-tight mb-4 reveal reveal-fade-up text-left font-['Open_Sans']">
                Your Pathway <span className="block mt-4 text-[#7a7a7a]">To Innovation</span>
              </h1>
              <p className="hero-subtitle text-[16px] text-white max-w-md mb-2 leading-relaxed reveal reveal-fade-up text-left font-['Open_Sans']" style={{ transitionDelay: '100ms' }}>
                Streamlining Business Through Technology. Empowering You with Digital Solutions revolutionizing with Every Click.
              </p>
              <div className="hero-actions flex flex-wrap justify-start w-full gap-4 reveal reveal-fade-up -mt-2" style={{ transitionDelay: '200ms' }}>
                <a href="/contact/#contact-form" className="inline-flex items-center justify-center px-8 py-3.5 text-[16px] font-semibold text-white bg-[#7a7a7a] rounded-full hover:bg-opacity-90 transition-all">
                  Contact Us <span style={{ marginLeft: '8px' }}>➔</span>
                </a>
                <a href="/our-softwares/" className="inline-flex items-center justify-center px-8 py-3.5 text-[16px] font-semibold rounded-full transition-all border-2 border-[#7a7a7a] text-[#7a7a7a] bg-transparent hover:bg-[#7a7a7a] hover:text-white">
                  Explore Softwares <span style={{ marginLeft: '8px' }}>➔</span>
                </a>
              </div>
            </div>
            {/* Interactive Network Globe */}
            <div className="hidden md:flex items-center justify-center mr-0 lg:mr-8 -mt-16 reveal reveal-fade-left relative" style={{ transitionDelay: '300ms', width: '570px', height: '570px', overflow: 'hidden' }}>
              <NetworkGlobe size={700} />
            </div>
          </div>
        </section>

        {/* Section: Simplify Work (Smart Solutions) */}
        <section className="section simplify-section" style={{ paddingBottom: '20px' }}>
          <div className="section-header centered reveal reveal-fade-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div className="inline-flex flex-col items-start gap-2 mb-4">
              <span className="text-[14px] font-bold tracking-[1.5px] uppercase text-[#8b2c2c] leading-none">
                SIMPLIFY WORK
              </span>
              <div className="flex gap-1.5">
                <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
              </div>
            </div>
            <h2 className="section-title" style={{ fontWeight: '700', marginBottom: '16px' }}>Smart Solutions For Every Business & Individual</h2>
            <p className="section-desc" style={{ color: 'var(--text-secondary)', maxWidth: '700px', marginBottom: '24px', lineHeight: '1.6' }}>
              As a Software Company, we recognize that brilliant ideas demand exceptional executions. We boost your success with our expertise and innovative cutting edge IT solutions. It's our passion, process, & integrity that guarantees your success.
            </p>
            <a href="/about-us/" className="inline-flex items-center justify-center px-8 py-3.5 text-[16px] font-semibold text-white bg-[#7a7a7a] rounded-full hover:bg-opacity-90 transition-all mt-4">
              About Us <span style={{ marginLeft: '8px' }}>➔</span>
            </a>
          </div>
        </section>

        <section className="section simplify-section" style={{ paddingTop: '20px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-[1300px] mx-auto px-4 w-full mt-8">
            <div className="glass-card feature-card reveal reveal-scale" style={{ transitionDelay: '0ms' }}>
              <div className="feature-icon-circle text-[#8b2c2c]">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="feature-card-title">Experienced Developers</div>
            </div>
            
            <div className="glass-card feature-card reveal reveal-scale" style={{ transitionDelay: '100ms' }}>
              <div className="feature-icon-circle text-[#8b2c2c]">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="feature-card-title">Cost-Effective Services</div>
            </div>
            
            <div className="glass-card feature-card reveal reveal-scale" style={{ transitionDelay: '200ms' }}>
              <div className="feature-icon-circle text-[#8b2c2c]">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="feature-card-title">Daily/Weekly/Monthly Reporting</div>
            </div>
            
            <div className="glass-card feature-card reveal reveal-scale" style={{ transitionDelay: '300ms' }}>
              <div className="feature-icon-circle text-[#8b2c2c]">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="feature-card-title">24/7 Dedicated Support</div>
            </div>
            
            <div className="glass-card feature-card reveal reveal-scale" style={{ transitionDelay: '400ms' }}>
              <div className="feature-icon-circle text-[#8b2c2c]">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="feature-card-title">100% Assurance</div>
            </div>
          </div>
        </section>

        {/* Valued Clients Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal reveal-fade-up">
              <div className="inline-flex flex-col items-start gap-2 mb-4">
                <span className="text-[14px] font-bold tracking-[1.5px] uppercase text-[#8b2c2c] leading-none">
                  OUR ECOSYSTEM
                </span>
                <div className="flex gap-1.5">
                  <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                  <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                </div>
              </div>
              <h2 style={{ fontSize: '40px', fontWeight: '800', fontFamily: '"Open Sans", sans-serif', marginBottom: '20px', lineHeight: '1.2', color: '#000000' }}>Our Valued Clients &amp; Collaborations</h2>
              <p style={{ fontSize: '16px', fontFamily: '"Open Sans", sans-serif', color: '#000000', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>We are constantly searching and testing for the best tools and services on the market. We partner with these organizations to provide the best service and value for our clients.</p>
            </div>
          </div>
          
          <div className="logo-slider-container reveal reveal-fade-up" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', transitionDelay: '200ms' }}>
            <div className="logo-slider-track">
              {/* First set of logos */}
              {clientLogos.map((client, i) => (
                <div key={`logo-1-${i}`} className="client-logo-slide">
                  <img src={client.img} alt={client.alt} />
                </div>
              ))}
              {/* Duplicated set for infinite scroll effect */}
              {clientLogos.map((client, i) => (
                <div key={`logo-2-${i}`} className="client-logo-slide" aria-hidden="true">
                  <img src={client.img} alt={client.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Powerful ERP Solution - Redesigned Asymmetric Open Layout */}
        <section className="erp-promo-section" style={{ position: 'relative', overflow: 'hidden' }}>

          <div className="section-glow-radial erp-radial"></div>
          <div className="erp-section-inner">  
          <div className="erp-grid-redesign">
            {/* Left Column: 3D Interactive Isometric Collage (Formerly Right) */}
            <div className="erp-visual-content-new reveal reveal-fade-right">
              <div className="collage-3d-stack">
                <div className="collage-glow"></div>
                <div className="img-container-3d main-img-3d" style={{ zIndex: 1 }}>
                  <img src={warehouseAgvImg} alt="Modern High-Tech Warehouse" />
                </div>
                <div className="img-container-3d secondary-img-3d" style={{ zIndex: 2 }}>
                  <img src={ruggedTabletImg} alt="Industrial ERP Dashboard" />
                </div>

              </div>
            </div>

            {/* Right Column: Text & CTA (Formerly Left) */}
            <div className="erp-text-content-new reveal reveal-fade-left">
              <div className="inline-flex flex-col items-start gap-2 mb-4">
                <span className="text-[14px] font-bold tracking-[1.5px] uppercase text-[#8b2c2c] leading-none">
                  ENTERPRISE PLATFORM
                </span>
                <div className="flex gap-1.5">
                  <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                  <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                </div>
              </div>
              <h2 className="erp-title-new" style={{ fontSize: '40px' }}>
                Optimize Your Business With Dreamwarez's Powerful ERP Solution
              </h2>
              <p className="erp-desc-new">
                Manage your complete business software flow from multiple warehouse, manufacturing to sales and purchase right from a single software solution.
              </p>
              <div className="erp-btn-wrapper-new">
                <a href="/erp/" className="inline-flex items-center justify-center px-8 py-3.5 text-[16px] font-semibold text-white bg-[#7a7a7a] rounded-full hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(122,122,122,0.3)] hover:shadow-[0_0_25px_rgba(122,122,122,0.5)]">
                  Explore More <span className="ml-2">➔</span>
                </a>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Section: Digital Strategies - Redesigned Offset Layout */}
        <section className="section promo-layout-section section-digital-strategies" style={{ position: 'relative', overflow: 'hidden' }}>

          <div className="section-glow-radial strategies-radial"></div>
          <div className="strategies-grid-redesign">
            
            {/* Left Column: Typography */}
            <div className="strategies-text-new reveal reveal-fade-right">
              <div className="inline-flex flex-col items-start gap-2 mb-4">
                <span className="text-[14px] font-bold tracking-[1.5px] uppercase text-[#8b2c2c] leading-none">
                  GROWTH HUB
                </span>
                <div className="flex gap-1.5">
                  <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                  <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                </div>
              </div>
              <h2 className="strategies-title-new">
                Driving Business Growth Through Smart Digital Strategies
              </h2>
              <p className="strategies-desc-new">
                Empower your business online with our comprehensive marketing solutions. From paid advertising to organic strategies, and design to web development – the power is in your hands.
              </p>
              <div className="strategies-btn-wrapper-new">
                <a href="/customised-software-development/" className="inline-flex items-center justify-center px-8 py-3.5 text-[16px] font-semibold text-white bg-[#7a7a7a] rounded-full hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(122,122,122,0.3)] hover:shadow-[0_0_25px_rgba(122,122,122,0.5)]">
                  Explore Services <span className="ml-2">➔</span>
                </a>
              </div>
            </div>

            {/* Right Column: Layered Media Circular Frame */}
            <div className="strategies-visual-new reveal reveal-fade-left">
              <div className="strategies-media-box">
                <div className="media-backdrop-circle"></div>
                <div className="strategies-img-wrapper">
                  <img src="/src/assets/couch_workspace.png" alt="Digital Strategies Workspace" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Android App Development - Redesigned Offset Layout */}
        <section className="section promo-layout-section alternate section-android-app" style={{ position: 'relative', overflow: 'hidden' }}>

          <div className="section-glow-radial android-radial"></div>
          <div className="android-grid-redesign">
            
            {/* Left Column: Android Interface Mockup */}
            <div className="android-visual-new reveal reveal-fade-right">
              <div className="android-media-box">
                <div className="media-backdrop-square"></div>
                <div className="android-img-wrapper">
                  <img src={mobileDevImg} alt="Android Development Workspace" />
                </div>

              </div>
            </div>

            {/* Right Column: Text & Actions */}
            <div className="android-text-new reveal reveal-fade-left">
              <div className="inline-flex flex-col items-start gap-2 mb-4">
                <span className="text-[14px] font-bold tracking-[1.5px] uppercase text-[#8b2c2c] leading-none">
                  MOBILE PLATFORMS
                </span>
                <div className="flex gap-1.5">
                  <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                  <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                </div>
              </div>
              <h2 className="android-title-new">
                Bringing Your Ideas To Life<br />With Dreamwarez<br />Custom Android Apps
              </h2>
              <p className="android-desc-new">
                We offer a range of Android development services that are fully capable of supporting established companies. We deliver scalability with expertise in everything related to what is android app development.
              </p>
              <div className="android-btn-wrapper-new">
                <a href="/android-app/" className="inline-flex items-center justify-center px-8 py-3.5 text-[16px] font-semibold text-white bg-[#7a7a7a] rounded-full hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(122,122,122,0.3)] hover:shadow-[0_0_25px_rgba(122,122,122,0.5)]">
                  Explore More <span className="ml-2">➔</span>
                </a>
              </div>
            </div>

          </div>
        </section>




      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}
