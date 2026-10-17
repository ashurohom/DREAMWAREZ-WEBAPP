import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import posHeroBg from '../../assets/pos_hero_bg.png';
import salesDashboard from '../../assets/sales_dashboard.png';
import stickerBrowser from '../../assets/sticker_browser.png';
import stickerTouchscreen from '../../assets/sticker_touchscreen.png';
import stickerPrinter from '../../assets/sticker_printer.png';
import outdoorLaptop from '../../assets/online_offline_moderate.png';
import erpPurchase from '../../assets/ui_simple_moderate.png';
import erpSales from '../../assets/ui_productivity_moderate.png';
import erpWarehouse from '../../assets/ui_search_moderate.png';
import warehouseScaleWms from '../../assets/inventory_mgmt_moderate.png';
import erpMrp from '../../assets/customer_service_moderate.png';
import posAccountingSticker from '../../assets/pos_accounting_sticker.jpg';
import unifiedDataDiagram from '../../assets/unified_data_diagram.png.png';
import teamMeeting from '../../assets/team_meeting.png';

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

const CardHeading = ({ children }) => (
  <h4 className="font-bold text-slate-800 text-base sm:text-lg mb-2 inline-flex items-center justify-center gap-2">
    <span className="inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full border border-[#8B2C2C]/30 text-[#8B2C2C]" aria-hidden="true">
      <span className="h-2 w-2 rounded-sm bg-[#8B2C2C]" />
    </span>
    {children}
  </h4>
);

const UiFeatureHeading = ({ children, icon }) => {
  const icons = {
    sparkle: (
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Zm-6 9l.8 2.2L9 15l-2.2.8L6 18l-.8-2.2L3 15l2.2-.8L6 12Z" />
    ),
    layout: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M4 10h16M10 10v9" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="M15 15l5 5" />
      </>
    )
  };

  return (
    <div className="font-bold text-slate-800 text-base sm:text-lg mb-2 inline-flex items-center justify-center gap-2.5">
      <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center text-sky-600" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icons[icon]}
        </svg>
      </span>
      {children}
    </div>
  );
};

export function PointOfSalePage() {
  return (
    <div className="app-container software-theme-page overflow-x-hidden">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO 
        title="Point of Sale (POS) Software | Dreamwarez"
        description="Modern web-based POS software that works online and offline with touchscreens, receipt printers, barcode scanners, and inventory sync."
      />

      <main className="main-content">
        {/* Hero Section */}
        <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 min-h-[auto] lg:min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up md:pr-6 text-center md:text-left items-center md:items-start">
              <SectionLabel>RETAIL ENGINE</SectionLabel>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-4 sm:mb-6 max-w-[700px]">
                Point Of <span className="text-[#7A7A7A]">Sale</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl font-bold text-slate-800 leading-snug max-w-[600px] mb-2 sm:mb-3">
                Set up in seconds, sell in a minute.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-[600px] mb-6 sm:mb-8">
                Dreamwarez Point of Sale introduces a super clean interface with no installation required that runs online and offline on modern hardware.
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
              <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px]">
                <img 
                  src={posHeroBg} 
                  alt="Point Of Sale terminal" 
                  className="w-full h-auto object-contain rounded-2xl drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: User Friendly Point of Sale */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-fade-right flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <SectionLabel>CLEAN INTERFACE</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                User Friendly Point of Sale
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Dreamwarez Point of Sale introduces a super clean interface with no complex installation required that runs seamlessly online and offline on modern hardware.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mt-2 sm:mt-3 leading-relaxed max-w-xl">
                Its full integration with company inventory and accounting gives you real-time statistics and consolidations across all shops without the hassle of integrating multiple disconnected applications.
              </p>
            </div>
            
            <div className="reveal reveal-fade-left flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={salesDashboard} alt="User Friendly Point of Sale screenshot" className="w-full h-auto rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Work with hardware you already have */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto relative z-10 text-center lg:text-left">
            <div className="reveal reveal-fade-up">
              <SectionLabel>DEVICE FLEXIBILITY</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Work with hardware you already have
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Desktop, laptops, tablets, it runs on everything
              </h3>
            </div>

            {/* 3 Column Hardware Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm text-center reveal reveal-fade-up">
                <div className="flex justify-center mb-4">
                  <img src={stickerBrowser} alt="In your web browser" className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                </div>
                <CardHeading>In your web browser</CardHeading>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Dreamwarez POS is a modern web application that runs on any device that can display websites with little to no setup required.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm text-center reveal reveal-fade-up">
                <div className="flex justify-center mb-4">
                  <img src={stickerTouchscreen} alt="Touchscreen or Keyboard?" className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                </div>
                <CardHeading>Touchscreen or Keyboard</CardHeading>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  The Point of Sale works smoothly on any touch-enabled device, whether iPad tablets or dedicated touchscreen checkout registers.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm text-center reveal reveal-fade-up sm:col-span-2 md:col-span-1">
                <div className="flex justify-center mb-4">
                  <img src={stickerPrinter} alt="Scales and Printers" className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                </div>
                <CardHeading>Scales &amp; Printers</CardHeading>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Barcode scanners and receipt printers are supported out of the box. Scales, cashboxes, and other peripherals connect via simple proxy APIs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Online and Offline */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-fade-left flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <SectionLabel>HYBRID CONNECTIVITY</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Online and Offline
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Dreamwarez POS stays reliable even if your connection isn't
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Deploy new stores with just an internet connection: no complicated installation, no specific hardware vendor lock-in. It works with any iPad, tablet, laptop, or industrial POS machine.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mt-2 sm:mt-3 leading-relaxed max-w-xl">
                While internet connectivity is used to sync data, the Point of Sale stays fully operational even during network dropouts or complete offline periods.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right flex justify-center">
              <div className="flex justify-center lg:justify-end w-full">
                <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={outdoorLaptop} alt="Online Offline reliable POS" className="w-full h-auto rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: A super clean user interface */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto relative z-10 text-center lg:text-left">
            <div className="reveal reveal-fade-up">
              <SectionLabel>UI &amp; AESTHETICS</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                A super clean user interface
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                The Point Of Sale software retailers love to use
              </h3>
            </div>

            {/* 3 Column Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-10">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 lg:p-5 shadow-sm text-center reveal reveal-fade-up">
                <div className="overflow-hidden rounded-xl border border-slate-100 mb-3 h-[140px] sm:h-[160px] flex items-center justify-center bg-slate-50">
                  <img src={erpPurchase} alt="Simple and Beautiful" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <UiFeatureHeading icon="sparkle">Simple &amp; Beautiful</UiFeatureHeading>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Say goodbye to ugly, outdated POS software and enjoy the sleek Dreamwarez web interface built for modern retail.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 lg:p-5 shadow-sm text-center reveal reveal-fade-up">
                <div className="overflow-hidden rounded-xl border border-slate-100 mb-3 h-[140px] sm:h-[160px] flex items-center justify-center bg-slate-50">
                  <img src={erpSales} alt="Design for Productivity" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <UiFeatureHeading icon="layout">Designed for Speed</UiFeatureHeading>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Whether for a boutique or restaurant, activate multiple active tickets in parallel so customers never have to wait.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 lg:p-5 shadow-sm text-center reveal reveal-fade-up sm:col-span-2 md:col-span-1">
                <div className="overflow-hidden rounded-xl border border-slate-100 mb-3 h-[140px] sm:h-[160px] flex items-center justify-center bg-slate-50">
                  <img src={erpWarehouse} alt="Blazing fast search" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <UiFeatureHeading icon="search">Blazing Fast Search</UiFeatureHeading>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Scan barcodes, browse hierarchical categories, or filter instantly across tens of thousands of SKUs in milliseconds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Integrated Inventory Management */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-fade-left lg:order-2 flex flex-col justify-center text-center lg:text-left items-center lg:items-start lg:ml-auto">
              <SectionLabel>INVENTORY CONTROL</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Integrated Inventory Management
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Consolidate all your sales channels in real time: physical retail, e-commerce, and field sales teams. Get real-time stock counts and accurate forecasts to optimize replenishment.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mt-2 sm:mt-3 leading-relaxed max-w-xl">
                Full warehouse management at your fingertips: check multi-store availability, trigger automatic procurement requests, and reduce stock-outs.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                <img src={warehouseScaleWms} alt="Integrated Inventory screenshot" className="w-full h-auto rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Delivery Store Customer Services */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-left flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <SectionLabel>CUSTOMER SERVICE</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                In-Store Customer Services
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Repairs, Warranties, Deliveries &amp; Claims
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Deliver an outstanding retail experience with integrated in-store services. Manage product repairs, track warranties, handle returns, and schedule customer deliveries directly from the register.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right flex justify-center">
              <div className="flex justify-center lg:justify-end w-full">
                <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={erpMrp} alt="Customer Service screenshot" className="w-full h-auto rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Invoicing & Accounting Integration */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-fade-left lg:order-2 flex flex-col justify-center text-center lg:text-left items-center lg:items-start lg:ml-auto">
              <SectionLabel>LEDGER SYNC</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Invoicing &amp; Accounting Integration
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Produce customer invoices in just a few clicks. Control sales and cash drawers in real time and leverage automated financial reporting to improve branch margins.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mt-2 sm:mt-3 leading-relaxed max-w-xl">
                No third-party accounting sync headaches: all sales and inventory operations are automatically reconciled directly into your General Ledger.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[400px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                <img src={posAccountingSticker} alt="Accounting integration illustration" className="w-full h-auto rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Unified Data Amongst All Shops */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-left flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <SectionLabel>MULTI-STORE SYNC</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Unified Data Amongst All Shops
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Sync products, prices, and customers effortlessly
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Roll out new catalog items, pricing tiers, and promotional campaigns automatically across selected stores. Manage loyalty and buyer history in one centralized, high-speed database.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right flex justify-center">
              <div className="flex justify-center lg:justify-end w-full">
                <div className="border border-slate-200 p-2 sm:p-3 rounded-2xl bg-white shadow-md max-w-[480px] w-full overflow-hidden">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center">
                    <img 
                      src={unifiedDataDiagram} 
                      alt="Unified Data diagram" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Know Your Customers */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-fade-left lg:order-2 flex flex-col justify-center text-center lg:text-left items-center lg:items-start lg:ml-auto">
              <SectionLabel>CUSTOMER RELATIONS</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Know Your Customers — In Store &amp; Out
              </h2>
              <p className="text-sm sm:text-base font-semibold text-slate-800 mt-3 italic max-w-xl">
                "With our POS, you're not just selling — you're learning. Every transaction builds a smarter, more loyal customer base."
              </p>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Integrate all customer relationship touchpoints across channels to build accurate buyer personas and connect with shoppers in-store or online.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                <img src={teamMeeting} alt="Customer Insights screenshot" className="w-full h-auto rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action Section */}
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

      <SiteFooter />
      <ChatWidget />
    </div>
  );
}