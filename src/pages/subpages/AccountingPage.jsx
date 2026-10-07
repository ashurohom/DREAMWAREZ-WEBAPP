import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Accounting custom assets
import accountingDashboard from '../../assets/accounting_dashboard.png';
import accountingInvoicing from '../../assets/accounting_invoicing.png';
import accountingVouchers from '../../assets/purchase_control.png';
import accountingChart from '../../assets/accounting_chart.png';
import accountingEmail from '../../assets/purchase_email.png';
import accountingHeroPhoto from '../../assets/accounting_hero_photo.jpg';

export function AccountingPage() {
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

      <SEO title="Accounting" />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="relative bg-white pt-8 pb-10 md:pt-10 md:pb-12 min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full" style={{ maxWidth: '1350px' }}>
            {/* Left Content */}
            <div className="md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up pr-8">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '16px' }}>
  <span style={{ color: '#8B2C2C',  fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1'  }}>ACCOUNTING MODULE</span>
  <div style={{ display: 'flex', gap: '6px' }}>
    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
    <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
  </div>
</div>
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-6 max-w-[700px]">
                Accounting & <span style={{ color: '#7A7A7A' }}>E-Invoicing</span>
              </h1>
              <p className="text-[16px] text-black leading-relaxed max-w-[600px] mb-4">
                General Ledger, Chart of Accounts, Tax Filing.
              </p>
              <p className="text-[16px] text-black leading-relaxed max-w-[600px]">
                Fully integrated with sales, purchasing, and inventory to automate financial reporting.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div 
                className="w-full max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100" 
                style={{ borderRadius: '24px' }}
              >
                <img 
                  src={accountingHeroPhoto} 
                  alt="Accounting Management Workspace" 
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
                  <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>FINANCIAL ENGINE</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                    <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-[#000000] text-[18px] font-bold max-w-4xl mx-auto mt-4 leading-relaxed mb-12">
                Analyse your sales and financials in real-time, invoice customers automatically, file taxes, configure multi-currency books and coordinate multi-company workflows.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up flex justify-center mt-8">
              <div className="w-full max-w-[420px] border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:scale-[1.01] transition-transform duration-500">
                <img src={accountingDashboard} alt="Accounting Dashboard" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Invoicing & Payment Tracking */}
        <section className="py-20">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full lg:max-w-[580px]">
              <LabelBadge>ACCOUNTING SYSTEM</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Invoicing & Payment Tracking</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Fully Integrated Invoicing</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed font-bold">
                All the invoicing methods you need
              </p>
              <p className="text-[16px] text-black mt-2 leading-relaxed">
                Whether you invoice based on time and materials, on delivery orders or fixed price; Dreamwarez supports all possible methods.
              </p>
              <p className="text-[16px] text-black mt-2 leading-relaxed">
                Create Invoices and track Customer and Supplier Payments. Set Credit limit for Customers. Track overdue payments and generate auto overdue statement PDF for Customers.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[550px] w-full">
                  <img src={accountingInvoicing} alt="Invoicing & Payment Tracking" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Journal Vouchers */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
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
                <div className="max-w-[550px] w-full">
                  <img src={accountingVouchers} alt="Journal Vouchers" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full lg:max-w-[580px] lg:ml-auto">
              <LabelBadge>ACCOUNTING SYSTEM</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Journal Vouchers</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Sales, Purchase, Payment, Receipt</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Create accounting vouchers to track payments, sales, purchase & receipts.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Charts */}
        <section className="py-20">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full lg:max-w-[580px]">
              <LabelBadge>ACCOUNTING SYSTEM</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Charts</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Chart Of Accounts & Taxes</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Manage your company balance sheet using Dreamwarez chart of accounts & taxes. Chart of accounts are configured as per Schedule VI of Indian Accounting.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full">
                  <img src={accountingChart} alt="Chart of Accounts & Taxes" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: E-Mail Integration */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
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
                <div className="max-w-[650px] w-full">
                  <img src={accountingEmail} alt="E-Mail Integration" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full lg:max-w-[580px] lg:ml-auto">
              <LabelBadge>ACCOUNTING SYSTEM</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">E-Mail Integration</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Integrated Communications</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Integrate all communications directly onto invoices to get strong traceability for negotiation and after-sales service issues. Track emails effortlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', background: 'linear-gradient(180deg, transparent, rgba(14, 165, 233, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
              Power Up Your Workflow With Integrations Into Your Favourite Tools
            </h2>
            <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px' }}>
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
