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

export function WarehouseStockManagementPage() {
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

      <SEO title="Warehouse & Stock Management" />

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
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>INVENTORY MANAGEMENT</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-6 max-w-[700px]">
                Warehouse/Stock <span style={{ color: '#7A7A7A' }}>Management</span>
              </h1>
              <p className="text-[16px] text-black leading-relaxed max-w-[600px] mb-4">
                Inventory, Logistics, Storage.
              </p>
              <p className="text-[16px] text-black leading-relaxed max-w-[600px]">
                Smart warehouse solutions that keep your business moving.
              </p>
            </div>
            
            {/* Right Image: Inventory Overview Dashboard Mockup */}
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div className="relative w-full max-w-[560px]">
                {/* Status Badge */}
                <div className="absolute -top-3.5 -right-2 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-lg flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-800 tracking-wide">Live Operations</span>
                </div>

                {/* Browser-style frame */}
                <div className="rounded-2xl overflow-hidden bg-white shadow-2xl border border-slate-200/90 transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.14)]">
                  <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                      <span className="text-[11px] font-mono text-slate-500 ml-2">warehouse / inventory-overview</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      Live WMS
                    </span>
                  </div>
                  <img 
                    src={warehouseInventoryOverview} 
                    alt="Inventory Overview Operations Dashboard" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating Stats / Feature Chip */}
                <div className="absolute -bottom-3.5 -left-2 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-md flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-800">⚡ Double-Entry Stock Engine</span>
                </div>
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
                  <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>WMS ARCHITECTURE</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                    <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  </div>
                </div>
              </div>
              <h2 style={{ marginBottom: '20px', fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)' }} className="text-slate-800">A revolutionary double entry inventory system</h2>
              <p className="text-[#000000] text-[18px] font-bold max-w-4xl mx-auto mt-4 leading-relaxed mb-12">
                Decrease your process times, automate transactions, maintain your stock level and get complete traceability on all operations with the Dreamwarez double entry inventory system.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up flex justify-center mt-8">
              <div className="w-full max-w-[980px] border border-slate-200/90 rounded-2xl bg-white shadow-[0_15px_45px_rgba(0,0,0,0.06)] overflow-hidden hover:scale-[1.01] transition-transform duration-500">
                <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="text-xs font-mono text-slate-500 ml-2">warehouse / replenishment & stock-rules</span>
                  </div>
                  <span className="text-[11px] font-semibold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
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

        {/* Module Sections */}

        {/* Section 1: Double Entry Inventory Management */}
        <section className="py-20 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[540px] w-full rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200 p-2">
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
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full lg:max-w-[580px] lg:ml-auto">
              <LabelBadge>LEDGER ENGINE</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Double Entry Inventory Management</h2>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Nothing is lost, everything is moved. Based on the concept of double entry that revolutionized accounting, Dreamwarez’s inventory management isn’t about consumption, loss or missing products; products are just moved from one location to another. This allows full traceability (from customer to supplier, not limited to your warehouse), advanced reporting (e.g. inventory valuation on manufacturing counter-parts locations) and a very simple user interface.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Get Full Traceability */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full lg:max-w-[580px]">
              <LabelBadge>TRACEABILITY</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Get Full Traceability</h2>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Keep an eye on all your stock by tracking all your past and future inventory transactions.
              </p>
              <p className="text-[16px] text-black mt-3 leading-relaxed">
                Track in detail all stock moves, not only in your warehouse but also in counter-parts of the double entry moves (customers, suppliers or manufacturing locations).
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[540px] w-full rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200 p-2">
                  <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 rounded-t-xl mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600">Stock Moves History & Serial Tracking</span>
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
          </div>
        </section>

        {/* Section 3: Reduce your stock level */}
        <section className="py-20 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[540px] w-full rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200 p-2">
                  <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 rounded-t-xl mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600">Dynamic Stock Forecast & Reservation</span>
                    <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Smart Procurement</span>
                  </div>
                  <img 
                    src={warehouseInventoryAnalytics} 
                    alt="Stock Forecast and Procurement" 
                    className="w-full h-auto object-contain rounded-lg" 
                  />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full lg:max-w-[580px] lg:ml-auto">
              <LabelBadge>STOCK OPTIMIZATION</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Reduce your stock level</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Fine-tune procurement methods according to your need</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Reduce your stock while always staying replenished! You can setup minimum stock rules to have automatic procurements with the right quantities computed to get to the optimum level specified. Get rid of the stress of your stock and let the system help you with fullfilment propositions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Scale Your WMS easily */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full lg:max-w-[580px]">
              <LabelBadge>SCALABILITY</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Scale Your WMS easily</h2>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Manage your own internal and external locations, customers, suppliers or manufacturing inventories with the Dreamwarez multi-warehouse management system based on a hierarchical location structure.
              </p>
              <p className="text-[16px] text-black mt-3 leading-relaxed">
                Dreamwarez Warehouse Management is designed to scale from a few thousands operations to several millions of transactions.
              </p>
              
              {/* Barcode scanner feature block */}
              <div className="mt-6 flex items-center gap-4 p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm max-w-md">
                <img src={warehouseBarcodeScanner} alt="Mobile Barcode Scanner" className="w-12 h-12 object-contain shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-800">Mobile Barcode Scanning App</div>
                  <div className="text-xs text-slate-500">Scan barcodes, serial numbers, lots, and packages on the go with zero latency.</div>
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[540px] w-full rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200 p-2">
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
          </div>
        </section>

        {/* Section 5: Reporting and Dashboards */}
        <section className="py-20 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[540px] w-full rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200 p-2">
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
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full lg:max-w-[580px] lg:ml-auto">
              <LabelBadge>ANALYTICS & REPORTING</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Reporting and Dashboards</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Analyse your warehouse efficiency to improve performance</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Get the insights you need to make smarter decisions. Design custom dashboards to get a picture of your warehouse efficiency at a glance. Dig deeper with real-time reports that anyone can create and share.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', background: 'linear-gradient(180deg, transparent, rgba(14, 165, 233, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ color: '#8B2C2C',  fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1'  }}>INTEGRATIONS HUB</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3' }}>
              Power up your workflow with integrations into your favourite tools
            </h2>
            <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px' }}>
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
