import React, { useState } from 'react';
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

export function PointOfSalePage() {
  const [showSandbox, setShowSandbox] = useState(false);
  const [cart, setCart] = useState([]);
  const [isOnline, setIsOnline] = useState(true);
  const [offlineQueue, setOfflineQueue] = useState(0);
  const [receipt, setReceipt] = useState(null);

  const menuItems = [
    { id: 1, name: 'Espresso Macchiato', price: 2.75, category: 'Beverages' },
    { id: 2, name: 'Club Turkey Sandwich', price: 6.50, category: 'Food' },
    { id: 3, name: 'Butter Croissant', price: 3.25, category: 'Food' },
    { id: 4, name: 'Cold Brew Coffee', price: 3.50, category: 'Beverages' },
    { id: 5, name: 'Chocolate Muffin', price: 3.00, category: 'Food' }
  ];

  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(cart.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    if (!isOnline) {
      setOfflineQueue(prev => prev + 1);
      alert('Offline transaction recorded locally in database queue.');
      clearCart();
      return;
    }

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    setReceipt({
      id: Math.floor(Math.random() * 90000) + 10000,
      items: [...cart],
      subtotal,
      tax,
      total,
      time: new Date().toLocaleTimeString()
    });
    clearCart();
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  const SectionLabel = ({ children, className = '' }) => {
    const isCenter = className.includes('center') || className.includes('items-center');
    return (
      <div className={`flex ${isCenter ? 'justify-center' : 'justify-start'} w-full mb-4 ${className}`}>
        <div className="flex flex-col items-start gap-1.5">
          <span className="text-[#8B2C2C] font-bold text-[14px] uppercase tracking-widest text-left">
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
  const CardHeading = ({ children }) => (
    <h4 className="font-bold text-slate-800 text-[16px] mb-2 inline-flex items-center justify-center gap-2">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#8B2C2C]/30 text-[#8B2C2C]" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-sm bg-[#8B2C2C]" />
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
      <div className="font-bold text-slate-800 text-[16px] mb-2 inline-flex items-center justify-center gap-3">
        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center text-green-600" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {icons[icon]}
          </svg>
        </span>
        {children}
      </div>
    );
  };

  return (
    <div className="app-container">
      
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Point of Sale" />

      <main className="main-content">
        <section className="relative bg-white min-h-screen pt-32 pb-16 overflow-hidden flex items-center border-b border-slate-100">
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
              {/* Subtitle */}
              <div className="flex flex-col items-start gap-1.5 mb-8">
                <span className="text-xs font-bold tracking-[0.2em] text-[#8B2C2C] uppercase">
                  RETAIL ENGINE
                </span>
                <div className="flex gap-1.5">
                  <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
                  <div className="w-4 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-12 max-w-[700px]">
                Point Of <span style={{ color: '#7A7A7A' }}>Sale</span>
              </h1>

              {/* Paragraph */}
              <p className="text-[16px] text-black font-semibold leading-relaxed max-w-[600px] mb-4">
                Set up in second, sell in a minute
              </p>
              <p className="text-[16px] text-black leading-relaxed max-w-[600px]">
                Dreamwarez's Point of Sale introduces a super clean interface with no installation required that runs online and offline on modern hardwares.
              </p>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-end z-0 reveal reveal-fade-left">
              <div className="relative w-full max-w-[450px]">
                <img 
                  src={posHeroBg} 
                  alt="Point Of Sale" 
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: User Friendly Point of Sale */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100">
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-right">
              <SectionLabel>CLEAN INTERFACE</SectionLabel>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">User Friendly Point of Sale</h2>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Dreamwarez's Point of Sale introduces a super clean interface with no installation required that runs online and offline on modern hardwares.
              </p>
              <p className="text-[16px] text-black mt-3 leading-relaxed">
                It's full integration with the company inventory and accounting, gives you real time statistics and consolidations amongst all shops without the hassle of integrating several applications.
              </p>
            </div>
            
            <div className="reveal reveal-fade-left" style={{ transitionDelay: '200ms' }}>
              <div className="flex justify-center lg:justify-end hover:-translate-y-2 transition-transform duration-500 w-full">
                <div className="max-w-[450px] w-full">
                  <img src={salesDashboard} alt="User Friendly Point of Sale screenshot" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Work with hardware you already have */}
        <section className="py-20 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up text-left">
              <SectionLabel className="tracking-widest">
                DEVICE FLEXIBILITY
              </SectionLabel>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Work with hardware you already have</h2>
              <h3 className="text-[16px] font-bold text-black mt-2">Desktop, laptops, tablets, it run on everything</h3>
            </div>

            {/* 3 Column Hardware Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center mb-4">
                  <img src={stickerBrowser} alt="In your web browser" className="w-24 h-24 object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                </div>
                <CardHeading>In your web browser</CardHeading>
                <p className="text-black text-[14px] leading-relaxed">
                  Dreamwarez’s POS is a web application that can run on any device that can display website with little to no setup required.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center mb-4">
                  <img src={stickerTouchscreen} alt="Touchscreen or Keyboard?" className="w-24 h-24 object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                </div>
                <CardHeading>Touchscreen or Keyboard?</CardHeading>
                <p className="text-black text-[14px] leading-relaxed">
                  The Point of sale work perfectly on any kind of touch enabled device, whether its multi-touch tablets like an iPad or keyboard less resistive touchscreen terminals.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-up" style={{ animationDelay: '300ms' }}>
                <div className="flex justify-center mb-4">
                  <img src={stickerPrinter} alt="Scale and Printers" className="w-24 h-24 object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                </div>
                <CardHeading>Scale and Printers</CardHeading>
                <p className="text-black text-[14px] leading-relaxed">
                  Barcode scanner and printers are supported out of the box with no setup required. Scales, cashboxes, and other peripherals can be used with the proxy API.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Online and Offline */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100">
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-left">
              <SectionLabel>HYBRID CONNECTIVITY</SectionLabel>
              <h2 className="text-[40px]  font-extrabold text-slate-800 font-heading mt-4">Online and Offline</h2>
              <h3 className="text-[16px]  font-bold text-slate-700 mt-2">Dreamwarez's POS stays reliable even if your connection isn't</h3>
              <p className="text-[16px] text-black  mt-4 leading-relaxed">
                Deploy new stores with just an internet connection: no installation, no specific hardware required. It works with any iPad, Tablet PC, laptop or industrial POS machine.
              </p>
              <p className="text-[16px] text-black mt-3 leading-relaxed">
                While an internet connection is required to start the Point of Sale, it will stay operational even after a complete disconnection.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right">
              <div className="flex justify-center lg:justify-end w-full">
                <div className="max-w-[450px] w-full">
                  <img src={outdoorLaptop} alt="Online Offline simulator screenshot" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: A super clean user interface */}
        <section className="py-10 md:py-12 lg:py-14 bg-white relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up text-left">
              <SectionLabel className="tracking-widest">
                UI & AESTHETICS
              </SectionLabel>
              <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold text-slate-800 font-heading mt-4 md:mt-5">A super clean user interface</h2>
              <h3 className="text-[15px] md:text-[16px] font-bold text-black mt-1 md:mt-2">The Point Of Sale software Retailers love to use</h3>
            </div>

            {/* 3 Column Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-10">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 lg:p-5 shadow-sm text-center reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="overflow-hidden rounded-lg border border-slate-100 mb-3 h-[130px] sm:h-[150px] md:h-[125px] lg:h-[150px] xl:h-[175px] flex items-center justify-center bg-slate-50">
                  <img src={erpPurchase} alt="Simple and Beautiful" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <UiFeatureHeading icon="sparkle">Simple and Beautiful</UiFeatureHeading>
                <p className="text-black text-[14px] leading-relaxed">
                  Say goodbye to ugly, outdated POS software and enjoy the Dreamwarez web interface designed for modern retailer.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 lg:p-5 shadow-sm text-center reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="overflow-hidden rounded-lg border border-slate-100 mb-3 h-[130px] sm:h-[150px] md:h-[125px] lg:h-[150px] xl:h-[175px] flex items-center justify-center bg-slate-50">
                  <img src={erpSales} alt="Design for Productivity" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <UiFeatureHeading icon="layout">Design for Productivity</UiFeatureHeading>
                <p className="text-black text-[14px] leading-relaxed">
                  Whether it’s for a restaurant or a shop, you can activate the multiple tickets in parallel to not make your customers wait.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 lg:p-5 shadow-sm text-center reveal reveal-fade-up [&>h4]:hidden" style={{ animationDelay: '300ms' }}>
                <div className="overflow-hidden rounded-lg border border-slate-100 mb-3 h-[130px] sm:h-[150px] md:h-[125px] lg:h-[150px] xl:h-[175px] flex items-center justify-center bg-slate-50">
                  <img src={erpWarehouse} alt="Blazing fast search" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <UiFeatureHeading icon="search">Blazing fast search</UiFeatureHeading>
                <h4 className="font-bold text-slate-800 text-[16px] mb-2">Blazing fast search​</h4>
                <p className="text-black text-[14px] leading-relaxed">
                  Scan products, browse through hierarchical categories or get quick information about products with the blasting fast filter across all your products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Integrated Inventory Management */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100">
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-left lg:order-2">
              <SectionLabel>INVENTORY CONTROL</SectionLabel>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Integrated Inventory Management</h2>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Consolidate all your sales channels in real time: stores, ecommerce, sales teams. Get real time control of the inventory and accurate forecasts to manage procurements.
              </p>
              <p className="text-[16px] text-black mt-3 leading-relaxed">
                A full warehouse management system at your fingertips: get information about products availability, trigger procurement requests, etc.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[450px] w-full">
                <img src={warehouseScaleWms} alt="Integrated Inventory screenshot" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Delivery Store Customer Services */}
        <section className="py-20 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-left">
              <SectionLabel>CUSTOMER SERVICE</SectionLabel>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Delivery Store Customer Services</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Repairs, Warrantees, Deliveries, etc.</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Give your shoppers a strong experience by integrating in-store customer services. Handle Reparation, track warantees, follow customer claims, plan delivery orders, etc.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right">
              <div className="flex justify-center lg:justify-end w-full">
                <div className="max-w-[450px] w-full">
                  <img src={erpMrp} alt="Customer Service screenshot" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Invoicing & Accounting Integration */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-left lg:order-2">
              <SectionLabel>LEDGER SYNC</SectionLabel>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Invoicing & Accounting Integration</h2>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Produce customer invoices in just a few clicks. Control sales and cash in real time and use Dreamwarez's powerful reporting to make smarter decisions to improve your store's efficiency.
              </p>
              <p className="text-[16px] text-black mt-3 leading-relaxed">
                No more hassle of having to integrate softwares: get all your sales and inventory operations automatically posted in your G/L.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[380px] w-full">
                <img src={posAccountingSticker} alt="Accounting integration illustration" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Unified Data Amongst All Shops */}
        <section className="py-20 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-left">
              <SectionLabel>MULTI-STORE SYNC</SectionLabel>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Unified Data Amongst All Shops</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Sync products, price, customers with no efforts</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Get new products, pricing strategies and promotions applied automatically to selected stores. Work on a unified customer base. No complex interface is required to pilot a global strategy amongst all your stores.
              </p>
              <p className="text-[16px] text-black mt-3 leading-relaxed">
                With Dreamwarez as a backend, you have a system proven to be perfectly suitable for small stores or large companies.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right">
              <div className="flex justify-center lg:justify-end w-full">
                <div className="border border-slate-200 p-2 rounded-2xl bg-[#F4F7FC] shadow-sm max-w-[450px] w-full overflow-hidden">
                  <div className="relative w-full pb-[80%] rounded-xl overflow-hidden">
                    <img 
                      src={unifiedDataDiagram} 
                      alt="Unified Data diagram" 
                      className="absolute top-0 right-0 w-[165%] h-[120%] max-w-none object-cover object-right" 
                      style={{ transform: 'translate(5%, -10%)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Know Your Customers - IN Store and Out */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-left lg:order-2">
              <SectionLabel>CUSTOMER RELATIONS</SectionLabel>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4 font-semibold leading-snug">
                “Know Your Customers - IN Store and Out”
              </h2>
              <h4 className="text-[16px] font-bold text-slate-700 mt-4">“With our POS, you’re not just selling—you’re learning. Every transaction builds a smarter, more loyal customer base.”</h4>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Successful brands integrates all their customer relationship accross all their channels to develop accurate customer profile and communicate with shoppers as they make buying decisions, in store or online.
              </p>
              <p className="text-[16px] text-black mt-3 leading-relaxed">
                With Dreamwarez, you get a 360° customer view, including cross-channel sales, interaction history, profiles, and more.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="max-w-[450px] w-full">
                <img src={teamMeeting} alt="Customer Insights screenshot" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section>


        {/* Bottom Call to Action Section */}
         <section className="purchase-cta-section reveal reveal-fade-up" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.02))' }}>
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="glass-card relative z-10" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '40px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
                Power Up Your Workflow With Integrations Into Your Favourite Tools
              </h2>
              <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#7A7A7A', boxShadow: '0 4px 15px rgba(122, 122, 122, 0.2)' }}>
                Contact Us
              </a>
            </div>
          </section>
      </main>

      <SiteFooter />
      <ChatWidget />
    </div>
  );
}