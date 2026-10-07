import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Business Intelligence custom assets
import warehouseReporting from '../../assets/warehouse_reporting.png';
import erpBi from '../../assets/tablet_graphs.png';
import mrpAnalytics from '../../assets/mrp_analytics.png';
import accountingDashboard from '../../assets/accounting_dashboard.png';
import customReportBuilderUi from '../../assets/custom_report_builder_ui.png';
import biHeroPhoto from '../../assets/bi_hero_photo.jpg';

export function BusinessIntelligencePage() {
  const LabelBadge = ({ children, className = '' }) => {
    const isCentered = className.includes('center') || className.includes('mx-auto') || className.includes('justify-center');
    return (
      <div className={`flex ${isCentered ? 'justify-center' : 'justify-start'} mb-4 ${className}`}>
        <div className="inline-flex flex-col items-start gap-1.5">
          <span className="text-[#8B2C2C] font-bold text-[14px] uppercase tracking-widest">
            {children}
          </span>
          <div className="flex gap-1.5">
            <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
            <div className="w-4 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container software-theme-page">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Business Intelligence" />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="relative bg-white pt-8 pb-10 md:pt-10 md:pb-12 min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
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
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '16px' }}>
  <span style={{ color: '#8B2C2C',  fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1'  }}>BI ENGINE</span>
  <div style={{ display: 'flex', gap: '6px' }}>
    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
    <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
  </div>
</div>
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-6 max-w-[700px]">
                Business <span style={{ color: '#7A7A7A' }}>Intelligence</span>
              </h1>
              <p className="text-[16px] text-black leading-relaxed max-w-[600px]">
                Business Intelligence is a widely demanded system designed to collect, analyze, and visualize business data across all modules.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div 
                className="w-full max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100" 
                style={{ borderRadius: '24px' }}
              >
                <img 
                  src={biHeroPhoto} 
                  alt="Business Intelligence Dashboard" 
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '24px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="pt-28 pb-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          <div className="mx-auto px-6 text-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                  <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>DATA-DRIVEN</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                    <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-[#000000] text-[18px] font-bold max-w-4xl mx-auto mt-4 leading-relaxed mb-12">
                To enable data-driven decision-making by collecting, analyzing, and visualizing business data across departments such as sales, finance, operations, inventory, and customer service.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up flex justify-center mt-8">
              <div className="w-full max-w-[420px] border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:scale-[1.01] transition-transform duration-500">
                <img src={warehouseReporting} alt="BI Dashboard Preview" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Generate Graphs & Charts */}
        <section className="py-20 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full lg:max-w-[580px]">
              <LabelBadge>BUSINESS INTELLIGENCE</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Generate Graphs and Charts In Just A Click</h2>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Create detailed reports and graphs in any format you like without the need of an external program.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full">
                  <img src={erpBi} alt="Generate Graphs & Charts" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Information You Need */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full">
                  <img src={mrpAnalytics} alt="Filter Results" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full lg:max-w-[580px] lg:ml-auto">
              <LabelBadge>BUSINESS INTELLIGENCE</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">The Information You Need The Way You Need It</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Filter all results to fit your field of research</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Filter and group each analysis using built-in filters, and create custom filters to gather only the information you are looking for. Save the filters you created in your favorites to access them anytime in just a click.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Dashboards */}
        <section className="py-20 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full lg:max-w-[580px]">
              <LabelBadge>BUSINESS INTELLIGENCE</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Dashboards</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Birds Eye View of Everything That Matters</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed font-semibold">
                Dreamwarez comes pre-configured with several dashboards to get you started, to show you whats going on and what needs action. All of which updates dynamically.
              </p>
              <p className="text-[16px] text-black mt-3 leading-relaxed">
                You can create your own dashboards from any of the tree,graph or calendar views with custom filters and group-bys if necessary.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full">
                  <img src={accountingDashboard} alt="Pre-configured Dashboards" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: The Most Advance Report Engine */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full">
                  <img src={customReportBuilderUi} alt="Custom Reports On The Fly" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full lg:max-w-[580px] lg:ml-auto">
              <LabelBadge>BUSINESS INTELLIGENCE</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">The Most Advance Report Engine</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Generate New Custom Reports On The Fly</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Slice and Dice to get the data that you want to export the current tree view with the printscreen function (current screen to excel). Or just with a few clicks choose the fields or headers that you wish to see on the report and click exports. It’s that easy!
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', background: 'linear-gradient(180deg, transparent, rgba(14, 165, 233, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '30px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
              Power Up Your Workflow With Integrations Into Your Favourite Tools
            </h2>
            <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#7A7A7A', boxShadow: '0 4px 15px rgba(122, 122, 122, 0.2)' }}>
              Contact Us
            </a>
          </div>
        </section>

      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}
