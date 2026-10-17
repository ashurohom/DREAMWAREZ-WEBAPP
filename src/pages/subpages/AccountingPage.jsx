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

export function AccountingPage() {
  return (
    <div className="app-container software-theme-page min-h-screen flex flex-col bg-white overflow-x-hidden font-sans">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Accounting" />

      <main className="main-content flex-grow">
        {/* Custom Hero Section */}
        <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 min-h-[auto] lg:min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up md:pr-6 text-center md:text-left items-center md:items-start">
              <SectionLabel>ACCOUNTING MODULE</SectionLabel>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-4 sm:mb-6 max-w-[700px]">
                Accounting &amp; <span className="text-[#0EA5E9]">E-Invoicing</span>
              </h1>

              <p className="text-base sm:text-lg text-black font-bold leading-relaxed max-w-[600px] mb-2 sm:mb-3">
                General Ledger, Chart of Accounts, Tax Filing.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-[600px] mb-6 sm:mb-8">
                Fully integrated with sales, purchasing, and inventory to automate financial reporting.
              </p>

              {/* Dual Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="/contact/#contact-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center"
                >
                  Start Accounting &rarr;
                </a>
                <a
                  href="#overview"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold text-sm py-3.5 px-6 rounded-full border border-slate-200 shadow-xs hover:shadow transition-all cursor-pointer text-center"
                >
                  View Features
                </a>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100 rounded-2xl sm:rounded-3xl">
                <img 
                  src={accountingHeroPhoto} 
                  alt="Accounting Management Workspace" 
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section id="overview" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          
          <div className="max-w-[1350px] mx-auto text-center relative z-10">
            <div className="reveal reveal-fade-up">
              <SectionLabel align="center">FINANCIAL ENGINE</SectionLabel>
              <p className="text-black text-base sm:text-lg md:text-xl font-bold max-w-4xl mx-auto mt-2 sm:mt-4 leading-relaxed mb-8 sm:mb-10">
                Analyse your sales and financials in real-time, invoice customers automatically, file taxes, configure multi-currency books and coordinate multi-company workflows.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up flex justify-center mt-4">
              <div className="w-full max-w-[450px] border border-slate-200/80 p-2 sm:p-3 rounded-2xl bg-white shadow-xl hover:scale-[1.01] transition-transform duration-500">
                <img src={accountingDashboard} alt="Accounting Dashboard" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Invoicing & Payment Tracking */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full">
              <SectionLabel>ACCOUNTING SYSTEM</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-2 leading-tight">
                Invoicing &amp; Payment Tracking
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mb-3">Fully Integrated Invoicing</h3>
              <p className="text-sm sm:text-base text-black font-bold mb-2">
                All the invoicing methods you need
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                Whether you invoice based on time and materials, on delivery orders or fixed price; Dreamwarez supports all possible methods.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Create Invoices and track Customer and Supplier Payments. Set Credit limit for Customers. Track overdue payments and generate auto overdue statement PDF for Customers.
              </p>
            </div>

            <div className="reveal reveal-fade-up flex justify-center lg:justify-end w-full">
              <div className="max-w-[550px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={accountingInvoicing} alt="Invoicing &amp; Payment Tracking" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Journal Vouchers */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[550px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={accountingVouchers} alt="Journal Vouchers" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full">
              <SectionLabel>ACCOUNTING SYSTEM</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-2 leading-tight">
                Journal Vouchers
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mb-3">
                Sales, Purchase, Payment, Receipt
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Create accounting vouchers to track payments, sales, purchase &amp; receipts effortlessly with automatic double-entry journal balance reconciliations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Charts */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full">
              <SectionLabel>ACCOUNTING SYSTEM</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-2 leading-tight">
                Charts
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mb-3">
                Chart Of Accounts &amp; Taxes
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Manage your company balance sheet using Dreamwarez chart of accounts &amp; taxes. Chart of accounts are configured as per Schedule VI of Indian Accounting.
              </p>
            </div>

            <div className="reveal reveal-fade-up flex justify-center lg:justify-end w-full">
              <div className="max-w-[480px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={accountingChart} alt="Chart of Accounts &amp; Taxes" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: E-Mail Integration */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[650px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={accountingEmail} alt="E-Mail Integration" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full">
              <SectionLabel>ACCOUNTING SYSTEM</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-2 leading-tight">
                E-Mail Integration
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mb-3">
                Integrated Communications
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Integrate all communications directly onto invoices to get strong traceability for negotiation and after-sales service issues. Track emails effortlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[900px] mx-auto p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50/50 shadow-sm flex flex-col items-center gap-4 sm:gap-6 relative z-10">
            <SectionLabel align="center">INTEGRATIONS HUB</SectionLabel>
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
