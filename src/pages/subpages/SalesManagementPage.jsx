import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Sales custom assets
import salesDashboard from '../../assets/sales_dashboard.png';
import salesQuotation from '../../assets/sales_quotation.png';
import erpSales from '../../assets/erp_sales.png';
import salesIntegration from '../../assets/sales_integration.png';
import erpBi from '../../assets/tablet_graphs.png';
import salesHeroPhoto from '../../assets/sales_hero_photo.jpg';
import salesInvoicing from '../../assets/sales_invoicing.png';

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

export function SalesManagementPage() {
  return (
    <div className="app-container software-theme-page min-h-screen flex flex-col bg-white overflow-x-hidden font-sans">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Sales Management" />

      <main className="main-content flex-grow">
        {/* Custom Hero Section */}
        <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 min-h-[auto] lg:min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up md:pr-6 text-center md:text-left items-center md:items-start">
              <SectionLabel>SALES MODULE</SectionLabel>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-4 sm:mb-6 max-w-[700px]">
                Sales <span className="text-[#0EA5E9]">Management</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-800 leading-relaxed max-w-[600px] mb-2 sm:mb-3 font-bold">
                Quotations, Orders, Invoicing, and Contracts.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-[600px] mb-6 sm:mb-8">
                Streamline your sales pipeline from initial quote to final cash receipt. Dreamwarez helps you manage professional quotations, automate sales orders, handle upsells, and process recurring subscriptions effortlessly.
              </p>

              {/* Dual Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="/contact/#contact-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center"
                >
                  Start Sales Demo &rarr;
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
                  src={salesHeroPhoto} 
                  alt="Sales Management Workspace" 
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
              <SectionLabel align="center">SALES MANAGEMENT SYSTEM</SectionLabel>
              <p className="text-black text-base sm:text-lg md:text-xl font-bold max-w-4xl mx-auto mt-2 sm:mt-4 leading-relaxed mb-8 sm:mb-10">
                Drive your sales from quotes to invoices with all the information you need, easily accessible. Keep track of orders, automate invoicing and notify sales when they have nothing to do.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up flex justify-center mt-4">
              <div className="w-full max-w-[450px] border border-slate-200/80 p-2 sm:p-3 rounded-2xl bg-white shadow-xl hover:scale-[1.01] transition-transform duration-500">
                <img src={salesDashboard} alt="Sales Dashboard" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Create Professional Quotations */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full">
              <SectionLabel>QUOTATIONS</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-2 leading-tight">
                Create Professional Quotations
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mb-3">
                Spend the extra time focusing on selling, not recording data
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Create quotations in a matter of seconds. Send quotes by email or get a professional PDF. Track quotations, and convert them to sales order in one click.
              </p>
            </div>

            <div className="reveal reveal-fade-up flex justify-center lg:justify-end w-full">
              <div className="max-w-[480px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={salesQuotation} alt="Create Professional Quotations" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Fully Integrated */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[480px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={erpSales} alt="Fully Integrated Info" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full">
              <SectionLabel>INTEGRATION</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-2 leading-tight">
                Fully Integrated
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mb-3">
                The Information You Need, Where You Need It
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                Don’t lose time looking for customer, products or contact related information; they are all conveniently accessible when creating quotations.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Get access to stock availabilities in the different warehouses, to customers specific prices, to the history of preceding offers for the prospect, etc.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Your Address Book */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full">
              <SectionLabel>ADDRESS BOOK</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-2 leading-tight">
                Your Address Book
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mb-3">
                So Many Features, So Easy To Use
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Load customer data, assign tags to your prospects, manage relationships between contacts and store all customer’s preferences including pricing, billing conditions, addresses, payment terms, etc.
              </p>
            </div>

            <div className="reveal reveal-fade-up flex justify-center lg:justify-end w-full">
              <div className="max-w-[480px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={salesIntegration} alt="Your Address Book" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Fully Integrated Invoicing */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[480px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={salesInvoicing} alt="Invoicing Methods & Automation" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full">
              <SectionLabel>INVOICING</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-2 leading-tight">
                Fully Integrated Invoicing
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mb-3">
                All The Invoicing Methods You Need
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                Whether you invoiced based on time and material, on delivery orders or fixed price, Dreamwarez supports all possible methods.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Get recurring invoices produced automatically, create advances in just a few clicks, re-invoices expenses easily, etc.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Communicate Efficiently With Customers */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full">
              <SectionLabel>COMMUNICATION</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-3 leading-tight">
                Communicate Efficiently With Customers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                The chatter feature enables you to communicate faster and more efficiently with your customer. This takes place directly on a quotation or sale order from within Dreamwarez or via email.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Get all the negotiations and discussions attached to the right document and relevant managers notified on specific events.
              </p>
            </div>

            <div className="reveal reveal-fade-up flex justify-center lg:justify-end w-full">
              <div className="max-w-[480px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={erpSales} alt="Communicate Efficiently & Chatter" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Have Clear Pricing Strategies */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[480px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={erpBi} alt="Pricing Strategies & Promotions" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full">
              <SectionLabel>PRICING</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-3 leading-tight">
                Have Clear Pricing Strategies
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                Use pricelists to record special conditions for a specific customer or to define prices for a segment of customers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Define promotions and have them applied automatically for all your sales teams.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Work Best with CRM System */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full">
              <SectionLabel>CRM INTEGRATION</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-3 leading-tight">
                Work Best with Dreamwarez's CRM System
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                Use Dreamwarez’ CRM along with sales to manage your funnel of opportunities, attract leads, log calls, schedule meetings and launch marketing campaigns.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Opportunities can be converted into quotations in just one single click.
              </p>
            </div>

            <div className="reveal reveal-fade-up flex justify-center lg:justify-end w-full">
              <div className="max-w-[480px] w-full border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl">
                <img src={salesDashboard} alt="Work Best with CRM System" className="w-full h-auto object-contain rounded-xl" />
              </div>
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
