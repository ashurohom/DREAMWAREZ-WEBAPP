import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Warehouse Assets
import warehouseInventoryOverview from '../../assets/odoo17_inventory_overview.webp';
import warehouseReplenishment from '../../assets/odoo17_warehouse_replenishment.webp';
import warehouseDoubleEntryFlow from '../../assets/odoo17_double_entry_flow.webp';
import warehouseMovesHistory from '../../assets/odoo17_moves_history.png';
import warehouseInventoryAnalytics from '../../assets/odoo17_inventory_analytics.webp';
import warehouseMultiWarehouseStock from '../../assets/odoo17_multi_warehouse_stock.png';
import warehouseTransfers from '../../assets/odoo17_warehouse_transfers.webp';
import warehouseBarcodeScanner from '../../assets/odoo17_barcode_scanner.png';

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

export function WarehouseStockManagementPage() {
  return (
    <div className="app-container software-theme-page min-h-screen flex flex-col bg-white overflow-x-hidden font-sans">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Warehouse & Stock Management" />

      <main className="main-content flex-grow">
        {/* Custom Hero Section */}
        <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 min-h-[auto] lg:min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up md:pr-6 text-center md:text-left items-center md:items-start">
              <SectionLabel>INVENTORY MANAGEMENT</SectionLabel>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-4 sm:mb-6 max-w-[700px]">
                Warehouse/Stock <span className="text-[#0EA5E9]">Management</span>
              </h1>

              <p className="text-base sm:text-lg text-black font-bold leading-relaxed max-w-[600px] mb-2 sm:mb-3">
                Inventory, Logistics, Storage.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-[600px] mb-6 sm:mb-8">
                Smart warehouse solutions that keep your business moving with automated double-entry ledger tracing.
              </p>

              {/* Dual Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="/contact/#contact-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center"
                >
                  Request WMS Demo &rarr;
                </a>
                <a
                  href="#overview"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold text-sm py-3.5 px-6 rounded-full border border-slate-200 shadow-xs hover:shadow transition-all cursor-pointer text-center"
                >
                  Explore Capabilities
                </a>
              </div>
            </div>
            
            {/* Right Image: Inventory Overview Dashboard Mockup */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[540px]">
                {/* Status Badge */}
                <div className="absolute -top-3 -right-2 z-20 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide">Live Operations</span>
                </div>

                {/* Browser-style frame */}
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-200/90 transition-all duration-300">
                  <div className="bg-slate-100/90 px-3 sm:px-4 py-2 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                      <span className="text-[10px] font-mono text-slate-500 ml-1.5 hidden sm:inline">warehouse / inventory-overview</span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      Live WMS
                    </span>
                  </div>
                  <img 
                    src={warehouseInventoryOverview} 
                    alt="Inventory Overview Operations Dashboard" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section id="overview" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto text-center relative z-10">
            <div className="reveal reveal-fade-up">
              <SectionLabel align="center">WMS ARCHITECTURE</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-3 sm:mb-4 leading-tight">
                A revolutionary double entry inventory system
              </h2>
              <p className="text-black text-sm sm:text-base md:text-lg font-bold max-w-4xl mx-auto mt-2 leading-relaxed mb-8 sm:mb-10">
                Decrease your process times, automate transactions, maintain your stock level and get complete traceability on all operations with the Dreamwarez double entry inventory system.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up flex justify-center mt-4">
              <div className="w-full max-w-[980px] border border-slate-200/90 rounded-2xl bg-white shadow-xl overflow-hidden hover:scale-[1.01] transition-transform duration-500">
                <div className="bg-slate-100/90 border-b border-slate-200 px-3 sm:px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    <span className="text-xs font-mono text-slate-500 ml-1.5 hidden sm:inline">warehouse / replenishment &amp; stock-rules</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
                    Replenishment Engine
                  </span>
                </div>
                <img 
                  src={warehouseReplenishment} 
                  alt="Replenishment Command Center and Location Rules" 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Double Entry Inventory Management */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[540px] w-full rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200 p-2 sm:p-2.5">
                <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 rounded-t-xl mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">Double-Entry Movement Architecture</span>
                  <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">Hierarchical Flow</span>
                </div>
                <img 
                  src={warehouseDoubleEntryFlow} 
                  alt="Double Entry Inventory Movement Flow" 
                  className="w-full h-auto object-contain rounded-lg" 
                />
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full">
              <SectionLabel>LEDGER ENGINE</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-3 leading-tight">
                Double Entry Inventory Management
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Nothing is lost, everything is moved. Based on the concept of double entry that revolutionized accounting, Dreamwarez’s inventory management isn’t about consumption, loss or missing products; products are just moved from one location to another. This allows full traceability (from customer to supplier, not limited to your warehouse), advanced reporting and a very simple user interface.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Get Full Traceability */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full">
              <SectionLabel>TRACEABILITY</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-3 leading-tight">
                Get Full Traceability
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                Keep an eye on all your stock by tracking all your past and future inventory transactions.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Track in detail all stock moves, not only in your warehouse but also in counter-parts of the double entry moves (customers, suppliers or manufacturing locations).
              </p>
            </div>

            <div className="reveal reveal-fade-up flex justify-center lg:justify-end w-full">
              <div className="max-w-[540px] w-full rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200 p-2 sm:p-2.5">
                <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 rounded-t-xl mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">Stock Moves History &amp; Serial Tracking</span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">100% Traceability</span>
                </div>
                <img 
                  src={warehouseMovesHistory} 
                  alt="Stock Moves Traceability" 
                  className="w-full h-auto object-contain rounded-lg" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Reduce your stock level */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[540px] w-full rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200 p-2 sm:p-2.5">
                <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 rounded-t-xl mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">Dynamic Stock Forecast &amp; Reservation</span>
                  <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Smart Procurement</span>
                </div>
                <img 
                  src={warehouseInventoryAnalytics} 
                  alt="Stock Forecast and Procurement" 
                  className="w-full h-auto object-contain rounded-lg" 
                />
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full">
              <SectionLabel>STOCK OPTIMIZATION</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-2 leading-tight">
                Reduce your stock level
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mb-3">
                Fine-tune procurement methods according to your need
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Reduce your stock while always staying replenished! You can setup minimum stock rules to have automatic procurements with the right quantities computed to get to the optimum level specified. Get rid of the stress of your stock and let the system help you with fullfilment propositions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Scale Your WMS easily */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full">
              <SectionLabel>SCALABILITY</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-3 leading-tight">
                Scale Your WMS easily
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                Manage your own internal and external locations, customers, suppliers or manufacturing inventories with the Dreamwarez multi-warehouse management system based on a hierarchical location structure.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Dreamwarez Warehouse Management is designed to scale from a few thousands operations to several millions of transactions.
              </p>
              
              {/* Barcode scanner feature block */}
              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm max-w-md">
                <img src={warehouseBarcodeScanner} alt="Mobile Barcode Scanner" className="w-12 h-12 object-contain shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-800">Mobile Barcode Scanning App</div>
                  <div className="text-xs text-slate-500 mt-0.5">Scan barcodes, serial numbers, lots, and packages on the go with zero latency.</div>
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up flex justify-center lg:justify-end w-full">
              <div className="max-w-[540px] w-full rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200 p-2 sm:p-2.5">
                <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 rounded-t-xl mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">Multi-Warehouse Stock Hierarchy</span>
                  <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">Multi-Location</span>
                </div>
                <img 
                  src={warehouseMultiWarehouseStock} 
                  alt="Multi Warehouse Management" 
                  className="w-full h-auto object-contain rounded-lg" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Reporting and Dashboards */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[540px] w-full rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200 p-2 sm:p-2.5">
                <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 rounded-t-xl mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">Multi-Stage Transfers Tracking</span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Real-Time Status</span>
                </div>
                <img 
                  src={warehouseTransfers} 
                  alt="Warehouse Operations and Transfers" 
                  className="w-full h-auto object-contain rounded-lg" 
                />
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full">
              <SectionLabel>ANALYTICS &amp; REPORTING</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-2 leading-tight">
                Reporting and Dashboards
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mb-3">
                Analyse your warehouse efficiency to improve performance
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Get the insights you need to make smarter decisions. Design custom dashboards to get a picture of your warehouse efficiency at a glance. Dig deeper with real-time reports that anyone can create and share.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[900px] mx-auto p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50/50 shadow-sm flex flex-col items-center gap-4 sm:gap-6 relative z-10">
            <SectionLabel align="center">INTEGRATIONS HUB</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
              Power up your workflow with integrations into your favourite tools
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
