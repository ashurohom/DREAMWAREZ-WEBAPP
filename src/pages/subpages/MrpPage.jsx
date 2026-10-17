import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

// MRP custom assets
import erpMrp from '../../assets/erp_mrp.png';
import mrpScheduling from '../../assets/mrp_scheduling.png';
import mrpBom from '../../assets/mrp_bom.png';
import warehouseReduceStock from '../../assets/warehouse_reduce_stock.png';
import erpBi from '../../assets/tablet_graphs.png';
import mrpHeroPhoto from '../../assets/mrp_hero_photo.jpg';

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

export function MrpPage() {
  return (
    <div className="app-container software-theme-page min-h-screen flex flex-col bg-white overflow-x-hidden font-sans">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="MRP" />

      <main className="main-content flex-grow">
        {/* Custom Hero Section */}
        <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 min-h-[auto] lg:min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up md:pr-6 text-center md:text-left items-center md:items-start">
              <SectionLabel>MRP MODULE</SectionLabel>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-4 sm:mb-6 max-w-[700px]">
                MRP <span className="text-[#0EA5E9]">Manufacturing</span>
              </h1>

              <p className="text-base sm:text-lg text-black font-bold leading-relaxed max-w-[600px] mb-2 sm:mb-3">
                BOM, Routing, Planning.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-[600px] mb-6 sm:mb-8">
                Optimize your production processes and material planning with an integrated manufacturing engine.
              </p>

              {/* Dual Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="/contact/#contact-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center"
                >
                  Request MRP Demo &rarr;
                </a>
                <a
                  href="#overview"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold text-sm py-3.5 px-6 rounded-full border border-slate-200 shadow-xs hover:shadow transition-all cursor-pointer text-center"
                >
                  Explore Capabilities
                </a>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100 rounded-2xl sm:rounded-3xl">
                <img 
                  src={mrpHeroPhoto} 
                  alt="MRP Manufacturing Planning Workspace" 
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section id="overview" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto text-center relative z-10">
            <div className="reveal reveal-fade-up">
              <SectionLabel align="center">MRP ARCHITECTURE</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-3 sm:mb-4 leading-tight">
                Manage Bill of Material, Plan Manufacturing Orders, Track Work Orders
              </h2>
              <p className="text-black text-sm sm:text-base md:text-lg font-bold max-w-4xl mx-auto mt-2 leading-relaxed mb-8 sm:mb-10">
                To streamline the planning and procurement of materials, ensuring timely availability for production while minimizing overstock and inventory carrying costs.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up flex justify-center mt-4">
              <div className="w-full max-w-[450px] border border-slate-200/80 p-2 sm:p-3 rounded-2xl bg-white shadow-xl hover:scale-[1.01] transition-transform duration-500">
                <img src={erpMrp} alt="MRP Dashboard" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Schedule Manufacturing Orders Efficiently */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full">
              <SectionLabel>SCHEDULING</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-3 leading-tight">
                Schedule Manufacturing Orders Efficiently
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Get manufacturing orders and work orders scheduled automatically based on your procurement rules, quantities, forecasted and dependent demand (demand for this part based on another part consuming it).
              </p>
            </div>

            <div className="reveal reveal-fade-up flex justify-center lg:justify-end w-full">
              <div className="max-w-[480px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={mrpScheduling} alt="Schedule Manufacturing Orders Efficiently" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Define Flexible Master Data */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[480px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={mrpBom} alt="Define Flexible Master Data" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full">
              <SectionLabel>MASTER DATA</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-2 leading-tight">
                Define Flexible Master Data
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mb-3">
                Products, Bill of Materials, Routing
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Get the flexibility to create multi-level bill of materials and optional routing. You can use BoM for manufacturing orders with complete variant management.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Get Flexibility In All Operations */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full">
              <SectionLabel>OPERATIONS</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-3 leading-tight">
                Get Flexibility In All Operations
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Edit manually all proposed operations at any level of progress. With Dreamwarez, you will not be frustrated by a rigid system; easily re-route production flows dynamically.
              </p>
            </div>

            <div className="reveal reveal-fade-up flex justify-center lg:justify-end w-full">
              <div className="max-w-[480px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={warehouseReduceStock} alt="Get Flexibility In All Operations" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Flexibility in Views */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[480px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={erpBi} alt="Flexibility in Views" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full">
              <SectionLabel>ANALYTICS</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-3 leading-tight">
                Flexibility in Views
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Dreamwarez provides clean and user-friendly Kanban view, calendar view and Gantt view to check operations sequence, track progress, and manage machine capacities.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[900px] mx-auto p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50/50 shadow-sm flex flex-col items-center gap-4 sm:gap-6 relative z-10">
            <SectionLabel align="center">INTEGRATIONS HUB</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
              Power up your workflow with manufacturing analytics and routing logs
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
