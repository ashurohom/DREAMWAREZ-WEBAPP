import { Link } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader';
import { SiteFooter } from '../components/layout/SiteFooter';
import { ChatWidget } from '../components/layout/ChatWidget';
import { NetworkGlobe } from '../components/layout/NetworkGlobe';
import { Helmet } from 'react-helmet-async';
import herokaBg from '../assets/hero_bg.jpg';
import warehouseAgvImg from '../assets/erp_opt1_large.jpg';
import ruggedTabletImg from '../assets/rugged_tablet_dashboard.jpg';
import mobileDevImg from '../assets/mobile_dev_tablet_phone.jpg';
import couchWorkspaceImg from '../assets/couch_workspace.png';
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
          className="hero-section relative overflow-hidden flex items-start md:items-center py-5 sm:py-12 md:py-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${herokaBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            imageRendering: 'high-quality',
          }}
        >
          {/* Subtle mobile contrast gradient for enhanced readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 md:from-black/50 md:via-black/25 md:to-transparent z-0 pointer-events-none" />

          <div className="hero-inner max-w-[1440px] mx-auto px-5 sm:px-8 xl:px-12 relative z-10 w-full flex flex-col md:flex-row justify-between items-center">
            <div className="hero-content max-w-xl flex flex-col items-start text-left p-2 sm:p-6 md:p-8 w-full ml-0 md:ml-4 lg:ml-8">
              {/* Premium Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 mb-4 text-xs sm:text-sm font-medium text-white shadow-sm reveal reveal-fade-up">
                <span className="w-2 h-2 rounded-full bg-[#8b2c2c] animate-pulse"></span>
                The Simplified Software Company
              </div>

              <h1 className="hero-title text-white text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.12] font-extrabold tracking-tight mb-4 reveal reveal-fade-up text-left font-['Open_Sans']">
                Your Pathway <span className="block mt-2 sm:mt-3 text-[#d1d5db] md:text-[#7a7a7a]">To Innovation</span>
              </h1>
              <p className="hero-subtitle text-[14.5px] sm:text-[16px] text-white/90 max-w-md mb-6 leading-relaxed reveal reveal-fade-up text-left font-['Open_Sans']" style={{ transitionDelay: '100ms' }}>
                Streamlining Business Through Technology. Empowering You with Digital Solutions revolutionizing with Every Click.
              </p>
              <div className="hero-actions flex flex-col sm:flex-row justify-start w-full sm:w-auto gap-3.5 sm:gap-4 reveal reveal-fade-up" style={{ transitionDelay: '200ms' }}>
                <Link to="/contact/" className="inline-flex items-center justify-center w-full sm:w-auto px-7 sm:px-8 py-3.5 text-[15px] sm:text-[16px] font-semibold text-white bg-[#7a7a7a] rounded-full hover:bg-opacity-90 active:scale-95 transition-all shadow-md">
                  Contact Us <span style={{ marginLeft: '8px' }}>➔</span>
                </Link>
                <Link to="/our-softwares/" className="inline-flex items-center justify-center w-full sm:w-auto px-7 sm:px-8 py-3.5 text-[15px] sm:text-[16px] font-semibold rounded-full transition-all border-2 border-white/70 sm:border-[#7a7a7a] text-white sm:text-[#7a7a7a] bg-white/10 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none hover:bg-[#7a7a7a] hover:text-white active:scale-95">
                  Explore Softwares <span style={{ marginLeft: '8px' }}>➔</span>
                </Link>
              </div>

              {/* Mobile-Only Round Shape Logo Badges below Explore Softwares */}
              <div className="mt-5 flex md:hidden items-center gap-2.5 sm:gap-3.5 w-full overflow-x-auto no-scrollbar py-1 pl-3.5 sm:pl-4 reveal reveal-fade-up" style={{ transitionDelay: '250ms' }}>
                {/* Round Badge 1: Odoo Partner */}
                <Link 
                  to="/odoo-partner/"
                  className="relative w-[72px] h-[72px] sm:w-[78px] sm:h-[78px] shrink-0 rounded-full bg-white/10 backdrop-blur-md border border-white/25 ring-2 ring-white/15 ring-offset-2 ring-offset-black/30 shadow-[0_8px_20px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center text-center p-1 transition-transform active:scale-95 no-underline"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/60 flex items-center justify-center text-emerald-400 text-[9px] sm:text-[10px] font-black shadow-sm">
                    ✓
                  </div>
                  <span className="text-[11px] sm:text-[11.5px] font-extrabold text-white leading-tight tracking-tight">Odoo</span>
                  <span className="text-[8px] sm:text-[8.5px] font-bold uppercase tracking-wider text-emerald-300 leading-none mt-0.5">Partner</span>
                </Link>

                {/* Round Badge 2: 100+ Clients */}
                <div className="relative w-[72px] h-[72px] sm:w-[78px] sm:h-[78px] shrink-0 rounded-full bg-white/10 backdrop-blur-md border border-white/25 ring-2 ring-white/15 ring-offset-2 ring-offset-black/30 shadow-[0_8px_20px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center text-center p-1 transition-transform active:scale-95">
                  <span className="text-[15px] sm:text-[16px] font-black text-white leading-none tracking-tight">100+</span>
                  <span className="text-[8px] sm:text-[8.5px] font-bold uppercase tracking-wider text-slate-200 leading-none mt-0.5">Clients</span>
                  <div className="flex gap-0.5 mt-1 text-amber-400 text-[7px] sm:text-[8px] leading-none">
                    ★★★★★
                  </div>
                </div>

                {/* Round Badge 3: Cloud ERP */}
                <Link 
                  to="/erp/"
                  className="relative w-[72px] h-[72px] sm:w-[78px] sm:h-[78px] shrink-0 rounded-full bg-white/10 backdrop-blur-md border border-white/25 ring-2 ring-white/15 ring-offset-2 ring-offset-black/30 shadow-[0_8px_20px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center text-center p-1 transition-transform active:scale-95 no-underline"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/60 flex items-center justify-center text-emerald-400 text-[9px] sm:text-[10px] shadow-sm">
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                    </svg>
                  </div>
                  <span className="text-[11px] sm:text-[11.5px] font-extrabold text-white leading-tight tracking-tight">Cloud</span>
                  <span className="text-[8px] sm:text-[8.5px] font-bold uppercase tracking-wider text-emerald-300 leading-none mt-0.5">ERP</span>
                </Link>

                {/* Round Badge 4: 24/7 Support */}
                <Link 
                  to="/contact/"
                  className="relative w-[72px] h-[72px] sm:w-[78px] sm:h-[78px] shrink-0 rounded-full bg-white/10 backdrop-blur-md border border-white/25 ring-2 ring-white/15 ring-offset-2 ring-offset-black/30 shadow-[0_8px_20px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center text-center p-1 transition-transform active:scale-95 no-underline"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/60 flex items-center justify-center text-emerald-400 text-[9px] sm:text-[10px] shadow-sm">
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <span className="text-[11px] sm:text-[11.5px] font-extrabold text-white leading-tight tracking-tight">24/7</span>
                  <span className="text-[8px] sm:text-[8.5px] font-bold uppercase tracking-wider text-emerald-300 leading-none mt-0.5">Support</span>
                </Link>
              </div>
            </div>

            {/* Interactive Network Globe (Desktop only) */}
            <div className="hidden md:flex items-center justify-center mr-0 lg:mr-8 reveal reveal-fade-left relative" style={{ transitionDelay: '300ms', width: '540px', height: '540px', overflow: 'hidden' }}>
              <NetworkGlobe size={650} />
            </div>
          </div>
        </section>

        {/* Section: Simplify Work (Smart Solutions) */}
        <section className="section simplify-section py-12 md:py-16">
          <div className="section-header centered reveal reveal-fade-up flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
            <div className="inline-flex flex-col items-center gap-2 mb-4">
              <span className="text-[13px] sm:text-[14px] font-bold tracking-[1.5px] uppercase text-[#8b2c2c] leading-none">
                SIMPLIFY WORK
              </span>
              <div className="flex gap-1.5">
                <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
              </div>
            </div>
            <h2 className="section-title text-[24px] sm:text-[30px] md:text-[36px] font-bold mb-3 sm:mb-4 leading-tight text-slate-900">
              Smart Solutions For Every Business &amp; Individual
            </h2>
            <p className="section-desc text-[14px] sm:text-[16px] text-gray-600 max-w-2xl mb-6 leading-relaxed">
              As a Software Company, we recognize that brilliant ideas demand exceptional executions. We boost your success with our expertise and innovative cutting edge IT solutions. It's our passion, process, &amp; integrity that guarantees your success.
            </p>
            <Link to="/about-us/" className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 text-[15px] sm:text-[16px] font-semibold text-white bg-[#7a7a7a] rounded-full hover:bg-opacity-90 active:scale-95 transition-all shadow-md">
              About Us <span style={{ marginLeft: '8px' }}>➔</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-6 max-w-[1300px] mx-auto px-4 w-full mt-10">
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
            
            <div className="glass-card feature-card col-span-2 sm:col-span-1 reveal reveal-scale" style={{ transitionDelay: '400ms' }}>
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
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-white overflow-hidden">
          <div className="max-w-[1350px] mx-auto text-center mb-8 sm:mb-12">
            <div className="reveal reveal-fade-up">
              <div className="inline-flex flex-col items-center gap-2 mb-4">
                <span className="text-[13px] sm:text-[14px] font-bold tracking-[1.5px] uppercase text-[#8b2c2c] leading-none">
                  OUR ECOSYSTEM
                </span>
                <div className="flex gap-1.5">
                  <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                  <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                </div>
              </div>
              <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-extrabold font-['Open_Sans'] mb-3 sm:mb-4 leading-tight text-black">
                Our Valued Clients &amp; Collaborations
              </h2>
              <p className="text-[14px] sm:text-[16px] font-['Open_Sans'] text-black/80 leading-relaxed max-w-3xl mx-auto px-2">
                We are constantly searching and testing for the best tools and services on the market. We partner with these organizations to provide the best service and value for our clients.
              </p>
            </div>
          </div>
          
          <div className="logo-slider-container reveal reveal-fade-up w-screen -mx-[calc(50vw-50%)]" style={{ transitionDelay: '200ms' }}>
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
        <section className="erp-promo-section relative overflow-hidden">
          <div className="section-glow-radial erp-radial"></div>
          <div className="erp-section-inner">  
            <div className="erp-grid-redesign">
              {/* Left Column: 3D Interactive Isometric Collage */}
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

              {/* Right Column: Text & CTA */}
              <div className="erp-text-content-new reveal reveal-fade-left">
                <div className="inline-flex flex-col items-center md:items-start gap-2 mb-2 sm:mb-4">
                  <span className="text-[13px] sm:text-[14px] font-bold tracking-[1.5px] uppercase text-[#8b2c2c] leading-none">
                    ENTERPRISE PLATFORM
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                    <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                  </div>
                </div>
                <h2 className="erp-title-new text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-extrabold leading-tight">
                  Optimize Your Business With Dreamwarez's Powerful ERP Solution
                </h2>
                <p className="erp-desc-new text-[14px] sm:text-[16px] leading-relaxed">
                  Manage your complete business software flow from multiple warehouse, manufacturing to sales and purchase right from a single software solution.
                </p>
                <div className="erp-btn-wrapper-new w-full sm:w-auto flex justify-center md:justify-start">
                  <Link to="/erp/" className="inline-flex items-center justify-center w-full sm:w-auto px-7 sm:px-8 py-3.5 text-[15px] sm:text-[16px] font-semibold text-white bg-[#7a7a7a] rounded-full hover:bg-opacity-90 active:scale-95 transition-all shadow-[0_0_15px_rgba(122,122,122,0.3)] hover:shadow-[0_0_25px_rgba(122,122,122,0.5)]">
                    Explore More <span className="ml-2">➔</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Digital Strategies - Redesigned Offset Layout */}
        <section className="section promo-layout-section section-digital-strategies relative overflow-hidden">
          <div className="section-glow-radial strategies-radial"></div>
          <div className="strategies-grid-redesign">
            
            {/* Left Column: Typography */}
            <div className="strategies-text-new reveal reveal-fade-right">
              <div className="inline-flex flex-col items-center md:items-start gap-2 mb-2 sm:mb-4">
                <span className="text-[13px] sm:text-[14px] font-bold tracking-[1.5px] uppercase text-[#8b2c2c] leading-none">
                  GROWTH HUB
                </span>
                <div className="flex gap-1.5">
                  <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                  <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                </div>
              </div>
              <h2 className="strategies-title-new text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-extrabold leading-tight">
                Driving Business Growth Through Smart Digital Strategies
              </h2>
              <p className="strategies-desc-new text-[14px] sm:text-[16px] leading-relaxed">
                Empower your business online with our comprehensive marketing solutions. From paid advertising to organic strategies, and design to web development – the power is in your hands.
              </p>
              <div className="strategies-btn-wrapper-new w-full sm:w-auto flex justify-center md:justify-start">
                <Link to="/customised-software-development/" className="inline-flex items-center justify-center w-full sm:w-auto px-7 sm:px-8 py-3.5 text-[15px] sm:text-[16px] font-semibold text-white bg-[#7a7a7a] rounded-full hover:bg-opacity-90 active:scale-95 transition-all shadow-[0_0_15px_rgba(122,122,122,0.3)] hover:shadow-[0_0_25px_rgba(122,122,122,0.5)]">
                  Explore Services <span className="ml-2">➔</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Layered Media Circular Frame */}
            <div className="strategies-visual-new reveal reveal-fade-left">
              <div className="strategies-media-box">
                <div className="media-backdrop-circle"></div>
                <div className="strategies-img-wrapper">
                  <img src={couchWorkspaceImg} alt="Digital Strategies Workspace" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Android App Development - Redesigned Offset Layout */}
        <section className="section promo-layout-section alternate section-android-app relative overflow-hidden">
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
              <div className="inline-flex flex-col items-center md:items-start gap-2 mb-2 sm:mb-4">
                <span className="text-[13px] sm:text-[14px] font-bold tracking-[1.5px] uppercase text-[#8b2c2c] leading-none">
                  MOBILE PLATFORMS
                </span>
                <div className="flex gap-1.5">
                  <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                  <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                </div>
              </div>
              <h2 className="android-title-new text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-extrabold leading-tight">
                Bringing Your Ideas To Life With Dreamwarez Custom Android Apps
              </h2>
              <p className="android-desc-new text-[14px] sm:text-[16px] leading-relaxed">
                We offer a range of Android development services that are fully capable of supporting established companies. We deliver scalability with expertise in everything related to what is android app development.
              </p>
              <div className="android-btn-wrapper-new w-full sm:w-auto flex justify-center md:justify-start">
                <Link to="/android-app/" className="inline-flex items-center justify-center w-full sm:w-auto px-7 sm:px-8 py-3.5 text-[15px] sm:text-[16px] font-semibold text-white bg-[#7a7a7a] rounded-full hover:bg-opacity-90 active:scale-95 transition-all shadow-[0_0_15px_rgba(122,122,122,0.3)] hover:shadow-[0_0_25px_rgba(122,122,122,0.5)]">
                  Explore More <span className="ml-2">➔</span>
                </Link>
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
