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

export function BusinessIntelligencePage() {
  return (
    <div className="app-container software-theme-page overflow-x-hidden">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO 
        title="Business Intelligence Solutions | Dreamwarez"
        description="Empower your business with real-time analytics, dynamic custom dashboards, and intelligent reporting built into your workflows."
      />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 min-h-[auto] lg:min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up md:pr-6 text-center md:text-left items-center md:items-start">
              <SectionLabel>BI ENGINE</SectionLabel>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-4 sm:mb-6 max-w-[700px]">
                Business <span className="text-[#7A7A7A]">Intelligence</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-[600px] mb-6 sm:mb-8">
                Business Intelligence is a widely demanded system designed to collect, analyze, and visualize business data across all modules in real time.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.24)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.35)] transition-all cursor-pointer text-center"
                >
                  Request a Demo &rarr;
                </a>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 sm:p-3 shadow-xl border border-slate-100 rounded-2xl sm:rounded-3xl">
                <img 
                  src={biHeroPhoto} 
                  alt="Business Intelligence Dashboard" 
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto text-center relative z-10">
            <div className="reveal reveal-fade-up">
              <SectionLabel align="center">DATA-DRIVEN</SectionLabel>
              <p className="text-slate-900 text-base sm:text-lg md:text-xl font-bold max-w-4xl mx-auto mt-2 leading-relaxed mb-8 sm:mb-10">
                To enable data-driven decision-making by collecting, analyzing, and visualizing business data across departments such as sales, finance, operations, inventory, and customer service.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up flex justify-center mt-4">
              <div className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] border border-slate-200/80 p-2 sm:p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:scale-[1.01] transition-transform duration-500">
                <img src={warehouseReporting} alt="BI Dashboard Preview" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Generate Graphs & Charts */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start">
              <SectionLabel>BUSINESS INTELLIGENCE</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Generate Graphs and Charts In Just A Click
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Create detailed reports and graphs in any format you like without the need of an external program.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={erpBi} alt="Generate Graphs & Charts" className="w-full h-auto object-contain rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Information You Need */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={mrpAnalytics} alt="Filter Results" className="w-full h-auto object-contain rounded-xl" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start lg:ml-auto">
              <SectionLabel>BUSINESS INTELLIGENCE</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                The Information You Need The Way You Need It
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Filter all results to fit your field of research
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Filter and group each analysis using built-in filters, and create custom filters to gather only the information you are looking for. Save the filters you created in your favorites to access them anytime in just a click.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Dashboards */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start">
              <SectionLabel>BUSINESS INTELLIGENCE</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Dashboards
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Birds Eye View of Everything That Matters
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed font-semibold max-w-xl">
                Dreamwarez comes pre-configured with several dashboards to get you started, to show you what's going on and what needs action. All of which updates dynamically.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mt-2 sm:mt-3 leading-relaxed max-w-xl">
                You can create your own dashboards from any of the tree, graph or calendar views with custom filters and group-bys if necessary.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={accountingDashboard} alt="Pre-configured Dashboards" className="w-full h-auto object-contain rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: The Most Advance Report Engine */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={customReportBuilderUi} alt="Custom Reports On The Fly" className="w-full h-auto object-contain rounded-xl" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start lg:ml-auto">
              <SectionLabel>BUSINESS INTELLIGENCE</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                The Most Advance Report Engine
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Generate New Custom Reports On The Fly
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Slice and Dice to get the data that you want to export the current tree view with the printscreen function (current screen to excel). Or just with a few clicks choose the fields or headers that you wish to see on the report and click exports. It’s that easy!
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[900px] mx-auto p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50/50 shadow-sm flex flex-col items-center gap-4 sm:gap-6 relative z-10">
            <SectionLabel align="center">GET STARTED</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
              Power Up Your Workflow With Integrations Into Your Favourite Tools
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
