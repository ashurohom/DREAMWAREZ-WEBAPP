import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Purchase custom assets
import purchaseDashboard from '../../assets/purchase_dashboard.png';
import purchaseReordering from '../../assets/purchase_reordering.png';
import purchaseEmail from '../../assets/purchase_email.png';
import purchaseControl from '../../assets/purchase_control.png';
import purchaseHeroPhoto from '../../assets/purchase_hero_photo.jpg';

export function PurchaseManagementPage() {
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

      <SEO title="Purchase Management" />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="relative bg-white pt-8 pb-10 md:pt-10 md:pb-12 min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full" style={{ maxWidth: '1350px' }}>
            {/* Left Content */}
            <div className="md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up pr-8">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
  <span style={{ color: '#8B2C2C',  fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1'  }}>PURCHASE MODULE</span>
  <div style={{ display: 'flex', gap: '6px' }}>
    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
    <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
  </div>
</div>
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-6 max-w-[700px]">
                Purchase <span style={{ color: '#7A7A7A' }}>Management</span>
              </h1>
              <p className="text-[16px] text-black leading-relaxed max-w-[600px] mb-4">
                Optimize procurement workflows with automated purchase orders and invoice processing.
              </p>
              <p className="text-[16px] text-black leading-relaxed max-w-[600px]">
                Gain complete visibility into spending, suppliers, and inventory.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div 
                className="w-full max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100" 
                style={{ borderRadius: '24px' }}
              >
                <img 
                  src={purchaseHeroPhoto} 
                  alt="Purchase Management Workspace" 
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '24px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="pt-28 pb-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-x-0 bottom-0 top-20 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          
          <div className="mx-auto px-6 text-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                  <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>PROCUREMENT SYSTEM</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                    <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-[#000000] text-[18px] font-bold max-w-4xl mx-auto mt-4 leading-relaxed mb-12">
                Automate Procurement Propositions, launch Request for Quotations, track Purchase Orders, manage Suppliers Information, control Products Reception and check Suppliers Invoices.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up flex justify-center mt-8">
              <div className="w-1200 max-w-[500px] border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:scale-[1.01] transition-transform duration-500">
                <img src={purchaseDashboard} alt="Purchase Order Dashboard" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Automated Procurement Propositions */}
        <section className="py-20">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[600px] w-full">
                  <img src={purchaseReordering} alt="Automated Procurement Rules" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full lg:max-w-[580px] lg:ml-auto">
              <LabelBadge>PROCUREMENT PROPOSITIONS</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Automated Procurement Propositions</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Maintain Inventory Level with Procurement Rules</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Get the right purchase proposition at the right time to maintain your inventory level. Improve your purchase and inventory performance with procurement rules depending on stock levels, logistic rules, sales orders, forecasted manufacturing orders, etc.
              </p>
              <p className="text-[16px] text-black mt-3 leading-relaxed">
                Send requests for quotations or purchase orders to your supplier in one click. Get access to product receptions and invoices from your purchase order.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Email Integration */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full lg:max-w-[580px]">
              <LabelBadge>COMMUNICATIONS</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Email Integration</h2>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Integrate all supplier’s communications on the purchase orders (or RfQs) to get a strong traceability on the negotiation or after sales service issues.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[650px] w-full">
                  <img src={purchaseEmail} alt="Email Integration" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Control Products and Invoices */}
        <section className="py-20">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[550px] w-full">
                  <img src={purchaseControl} alt="Invoice and Product Control" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full lg:max-w-[580px] lg:ml-auto">
              <LabelBadge>FINANCIAL CONTROL</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Control Products & Invoices</h2>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                No product or order is left behind, the inventory control allows you to manage back orders, refunds, product reception and quality control. Choose the right control method according to your need.
              </p>
              <p className="text-[16px] text-black mt-3 leading-relaxed">
                Control supplier invoices with no effort. Choose the right method according to your need: pre-generate draft invoices based on purchase orders, on products receptions, create invoices manually and import lines from purchase orders, etc.
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
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3' }}>
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
