import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Visual Assets
import odooHero from '../../assets/odoo_hero_wide.jpg';
import dashboardMockup from '../../assets/dashboard_mockup.png';
import warehouseOverview from '../../assets/odoo17_inventory_overview.webp';
import salesDashboard from '../../assets/sales_dashboard.png';
import accountingChart from '../../assets/accounting_chart.png';
import mrpBom from '../../assets/mrp_bom.png';

export function OdooPartnerPage() {
  const [activeAppIndex, setActiveAppIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 40 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setMousePos({ x, y });
  };

  const heroApps = [
    {
      id: 0,
      name: 'Enterprise Platform',
      category: 'Core Suite',
      tag: 'Executive Overview',
      url: 'odoo.dreamwarez.com / enterprise',
      img: odooHero,
      accentColor: '#8b5cf6',
      posClass: 'top-0 left-1/2 -translate-x-1/2 w-[460px] lg:w-[540px]',
      baseZ: 10,
      bullets: ['Complete ERP Modernization', 'Cross-Department Workflows', 'Single Unified Database']
    },
    {
      id: 1,
      name: 'CRM & Sales Pipeline',
      category: 'Sales CRM',
      tag: 'Pipelines & Quotes',
      url: 'odoo.dreamwarez.com / crm-sales',
      img: salesDashboard,
      accentColor: '#f59e0b',
      posClass: 'top-6 left-[1%] lg:left-[3%] w-[380px] lg:w-[440px]',
      baseZ: 12,
      bullets: ['Real-Time Stage Funnels', 'Automated Quotation Builder', 'Omnichannel Inbound Tracking']
    },
    {
      id: 2,
      name: 'Manufacturing & MRP',
      category: 'Manufacturing',
      tag: 'Shop Floor & BOM',
      url: 'odoo.dreamwarez.com / manufacturing',
      img: mrpBom,
      accentColor: '#ec4899',
      posClass: 'top-8 right-[1%] lg:right-[3%] w-[380px] lg:w-[440px]',
      baseZ: 12,
      bullets: ['Multi-Level Bill of Materials', 'Work Center Capacity Planning', 'Barcode Work Orders']
    },
    {
      id: 3,
      name: 'Inventory & Logistics',
      category: 'Inventory WMS',
      tag: 'Warehouse & Barcode',
      url: 'odoo.dreamwarez.com / inventory',
      img: warehouseOverview,
      accentColor: '#06b6d4',
      posClass: 'bottom-2 left-[8%] lg:left-[13%] w-[420px] lg:w-[490px]',
      baseZ: 25,
      bullets: ['Double-Entry Stock Tracking', 'Automated Replenishment Rules', 'Multi-Warehouse Routing']
    },
    {
      id: 4,
      name: 'Financial Accounting',
      category: 'Accounting',
      tag: 'Audit & Ledgers',
      url: 'odoo.dreamwarez.com / accounting',
      img: accountingChart,
      accentColor: '#3b82f6',
      posClass: 'bottom-0 right-[8%] lg:right-[13%] w-[420px] lg:w-[490px]',
      baseZ: 25,
      bullets: ['Direct Bank Reconciliation', 'Dynamic P&L and Balance Sheet', 'Tax Localization Ready']
    }
  ];

  const currentActiveApp = activeAppIndex !== null ? heroApps[activeAppIndex] : null;

  const LabelBadge = ({ children, isCentered = false, isLight = false }) => (
    <div style={{ display: 'flex', justifyContent: isCentered ? 'center' : 'flex-start', marginBottom: '20px' }}>
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: isCentered ? 'center' : 'flex-start', gap: '6px' }}>
        <span style={{ 
          color: isLight ? '#fbcfe8' : '#8B2C2C', 
          fontSize: '14px', 
          fontWeight: '700', 
          textTransform: 'uppercase', 
          letterSpacing: '1px', 
          fontFamily: '"Open Sans", sans-serif', 
          lineHeight: '1' 
        }}>
          {children}
        </span>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: isLight ? '#c084fc' : '#7A7A7A' }}></div>
          <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: isLight ? '#c084fc' : '#7A7A7A' }}></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app-container software-theme-page" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO 
        title="Official Odoo Partner | ERP Implementation & Consulting" 
        description="Dreamwarez is an official certified Odoo Partner. We deliver enterprise-grade Odoo implementation, custom module development, data migration, and dedicated support."
      />

      <main className="main-content">
        
        {/* HERO SECTION */}
        <section 
          className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-white select-none"
        >
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto px-6 relative z-10">
            
            {/* Top Text Header (High Contrast, Authoritative, Clean) */}
            <div className="text-center max-w-3xl mx-auto mb-6 reveal reveal-fade-up">
              
              {/* Official Gold/Emerald Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm mb-4 transition-all">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Official Certified Odoo Partner
                </span>
                <span className="text-emerald-600 font-extrabold text-sm">✓</span>
              </div>

              <h1 className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1.14] font-extrabold text-black font-heading mb-4 tracking-tight ">
                One Unified Platform For All Your Business Operations
              </h1>

              <p className="text-[15px] sm:text-[17px] text-black leading-relaxed max-w-2xl mx-auto mb-6 font-sans  font-medium">
                Dreamwarez is recognized as an <strong>Official Certified Odoo Partner</strong>. We implement, customize, and integrate the complete Odoo suite—connecting CRM, warehouse logistics, financial accounting, and manufacturing into one synchronized cloud ecosystem.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-5">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-extrabold text-white bg-[#7a7a7a] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:bg-opacity-90 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Contact Our Experts <span className="ml-2 font-bold">➔</span>
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-bold text-[#7a7a7a] bg-transparent hover:bg-[#7a7a7a] hover:text-white border-2 border-[#7a7a7a] rounded-xl transition-all shadow-sm"
                >
                  Explore Capabilities ↓
                </a>
              </div>

              {/* Interactive App Switcher Pills (Click or hover to spotlight any window) */}
              <div className="pt-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2.5 flex items-center justify-center gap-2">
                  <span>✦</span>
                  <span>Hover or click any app to spotlight</span>
                  <span>✦</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2" onMouseLeave={() => setActiveAppIndex(null)}>
                  {heroApps.map((app) => {
                    const isSelected = activeAppIndex === app.id;
                    return (
                      <button
                        key={app.id}
                        onClick={() => setActiveAppIndex(activeAppIndex === app.id ? null : app.id)}
                        onMouseEnter={() => setActiveAppIndex(app.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                          isSelected
                            ? 'bg-slate-800 text-white shadow-lg scale-105 ring-2 ring-slate-800'
                            : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm'
                        }`}
                      >
                        <span 
                          className="w-2.5 h-2.5 rounded-full shadow-sm" 
                          style={{ backgroundColor: app.accentColor }}
                        />
                        <span>{app.category}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* CASCADING OVERLAPPING BROWSER WINDOWS SHOWCASE (MATCHES USER REFERENCE IMAGE) */}
            <div 
              className="relative mt-6 md:mt-8 w-full reveal reveal-fade-up"
              onMouseLeave={() => setActiveAppIndex(null)}
            >
              
              {/* Desktop & Tablet Layered Composition */}
              <div className="hidden md:block relative h-[560px] lg:h-[620px] w-full max-w-[1260px] mx-auto">
                {heroApps.map((app) => {
                  const isSpotlight = activeAppIndex === app.id;
                  return (
                    <div
                      key={app.id}
                      onClick={() => setActiveAppIndex(activeAppIndex === app.id ? null : app.id)}
                      onMouseEnter={() => setActiveAppIndex(app.id)}
                      style={{
                        zIndex: isSpotlight ? 50 : app.baseZ
                      }}
                      className={`absolute ${app.posClass} rounded-2xl overflow-hidden bg-white cursor-pointer transition-all duration-500 ${
                        isSpotlight
                          ? 'scale-[1.04] ring-4 ring-white shadow-[0_30px_90px_rgba(20,25,60,0.5)] -translate-y-3'
                          : 'shadow-[0_20px_50px_rgba(20,25,60,0.28)] hover:scale-[1.02] hover:-translate-y-1'
                      } border border-white/90`}
                    >
                      {/* macOS Window Top Bar */}
                      <div className="bg-slate-100/95 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                          <span className="text-[11px] font-mono text-slate-600 ml-2 font-semibold">
                            {app.url}
                          </span>
                        </div>
                        <span 
                          className="text-[10px] font-extrabold px-2 py-0.5 rounded border uppercase"
                          style={{ 
                            color: app.accentColor,
                            borderColor: `${app.accentColor}40`,
                            backgroundColor: `${app.accentColor}15`
                          }}
                        >
                          {app.tag}
                        </span>
                      </div>

                      {/* Screen Image with Clean Subtle Gradient Depth */}
                      <div className="relative group overflow-hidden bg-slate-900">
                        <img 
                          src={app.img} 
                          alt={app.name} 
                          className="w-full h-[240px] lg:h-[275px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Fallback: Interactive Snap Carousel */}
              <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory pt-2">
                {heroApps.map((app) => (
                  <div 
                    key={app.id} 
                    className="min-w-[290px] snap-center rounded-2xl overflow-hidden bg-white shadow-2xl border border-white shrink-0 text-slate-900"
                  >
                    <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                        <span className="text-[10px] font-mono text-slate-500 ml-1.5">{app.url}</span>
                      </div>
                      <span 
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded border uppercase"
                        style={{ color: app.accentColor, borderColor: `${app.accentColor}40` }}
                      >
                        {app.tag}
                      </span>
                    </div>
                    <img src={app.img} alt={app.name} className="w-full h-[180px] object-cover" />
                  </div>
                ))}
              </div>

              {/* Interactive Live Feature Tour Bar */}
              <div className="mt-4 max-w-3xl mx-auto p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-800 text-xs">
                <div className="flex items-center gap-3">
                  <span 
                    className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: currentActiveApp ? currentActiveApp.accentColor : '#94a3b8' }}
                  />
                  <div>
                    <span className="font-extrabold text-slate-900 text-sm">
                      {currentActiveApp ? currentActiveApp.name : 'Certified Odoo 17 ERP Ecosystem'}
                    </span>
                    <span className="text-slate-300 mx-1.5">•</span>
                    <span className="text-slate-600 font-medium">
                      {currentActiveApp ? currentActiveApp.tag : 'Enterprise Cloud Suite'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-700">
                  {(currentActiveApp ? currentActiveApp.bullets : ['Official Odoo Partner', 'Full Custom Integration', 'PostgreSQL Cloud SLA']).map((bullet, idx) => (
                    <span key={idx} className="bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                      ✓ {bullet}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Smooth Bottom Gradient Fade */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-slate-50/50 pointer-events-none" />
        </section>


        {/* WHY ODOO & DREAMWAREZ SECTION */}
        <section className="py-20 px-6 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.15] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-purple-500/[0.12] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            
            <div className="reveal reveal-fade-up">
              <LabelBadge>WHY ODOO</LabelBadge>

              <h2 className="text-[32px] sm:text-[40px] font-extrabold text-slate-800 font-heading mb-6 leading-tight">
                One Unified Platform for All Your Business Needs
              </h2>

              <p className="text-black text-[16px] leading-relaxed mb-8">
                Odoo is a fully integrated, customizable suite of business applications. Whether you need ERP, CRM, Accounting, Inventory, or Manufacturing, Odoo brings everything into a single, seamless environment. Partner with Dreamwarez to unlock the full potential of Odoo with verified technical excellence.
              </p>

              <div className="space-y-4">
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-purple-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#714B67] flex items-center justify-center font-bold text-lg shrink-0">
                    💰
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Cost-Effective & Subscription-Smart</h4>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      Eliminate multiple disjointed software subscriptions with a single comprehensive platform that costs significantly less to maintain.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-teal-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#017e84] flex items-center justify-center font-bold text-lg shrink-0">
                    🧩
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Modular & Infinitely Scalable</h4>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      Start with the applications you need today (like Inventory or CRM) and effortlessly activate Accounting, Manufacturing, or HR as your company expands.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-blue-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">
                    🛡️
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Official Certified Implementation</h4>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      Dreamwarez ensures your system follows official Odoo coding standards, clean PostgreSQL schemas, and full upgrade compatibility.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="reveal reveal-fade-up flex justify-center">
              <div className="w-full max-w-[540px] rounded-2xl overflow-hidden bg-white shadow-2xl border border-slate-200 p-2">
                <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 rounded-t-xl mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">Unified Business Intelligence</span>
                  <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    Real-Time Sync
                  </span>
                </div>
                <img 
                  src={dashboardMockup} 
                  alt="Odoo Unified Platform Interface" 
                  className="w-full h-auto object-contain rounded-lg" 
                />
              </div>
            </div>

          </div>
        </section>


        {/* COMPREHENSIVE ODOO PARTNER SERVICES (6 COLORFUL CARDS) */}
        <section className="py-20 px-6 bg-white" id="services">
          <div className="mx-auto" style={{ maxWidth: '1350px' }}>
            
            <div className="text-center mb-16 reveal reveal-fade-up">
              <LabelBadge isCentered={true}>OUR CAPABILITIES</LabelBadge>
              <h2 className="text-[32px] sm:text-[40px] font-extrabold text-slate-800 font-heading mt-4">
                Comprehensive Odoo Solutions
              </h2>
              <p className="text-slate-600 text-base max-w-2xl mx-auto mt-3">
                From initial scoping and quickstart rollouts to deep bespoke development and 24/7 SLA maintenance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1: Implementation */}
              <div className="bg-white border-[1.5px] border-[#714B67] border-t-[5px] border-t-[#714B67] rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 reveal reveal-fade-up">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-[#714B67] text-2xl mb-5 shadow-xs border border-purple-100">
                  🚀
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#714B67] mb-1">01 • DEPLOYMENT</div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Odoo Implementation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  End-to-end setup and deployment of Odoo Community and Enterprise. We configure database parameters, security roles, and initial master data with minimal disruption to your daily operations.
                </p>
              </div>

              {/* Card 2: Customization */}
              <div className="bg-white border-[1.5px] border-[#017e84] border-t-[5px] border-t-[#017e84] rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-[#017e84] text-2xl mb-5 shadow-xs border border-teal-100">
                  ⚙️
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#017e84] mb-1">02 • TAILORED LOGIC</div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Custom Module Development</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We build bespoke Python and OWL frontend modules tailored to your specific business logic, custom workflows, unique approvals, and specialized PDF reports while maintaining upgrade compatibility.
                </p>
              </div>

              {/* Card 3: Migration */}
              <div className="bg-white border-[1.5px] border-[#2563eb] border-t-[5px] border-t-[#2563eb] rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-2xl mb-5 shadow-xs border border-blue-100">
                  🔄
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">03 • DATA TRANSITION</div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Seamless Data Migration</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Reliable database migration from legacy software (Tally, QuickBooks, Excel, Zoho, SAP) or older Odoo versions to Odoo v17/v18 with full ledger integrity and zero data loss.
                </p>
              </div>

              {/* Card 4: Integration */}
              <div className="bg-white border-[1.5px] border-[#f59e0b] border-t-[5px] border-t-[#f59e0b] rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 reveal reveal-fade-up">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 text-2xl mb-5 shadow-xs border border-amber-100">
                  🔌
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">04 • CONNECTIVITY</div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Third-Party Integrations</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Connect Odoo with your existing eCommerce channels (Shopify, WooCommerce), payment gateways, courier shipping APIs, WhatsApp messaging, and hardware barcode scanners.
                </p>
              </div>

              {/* Card 5: Upgrades & Audits */}
              <div className="bg-white border-[1.5px] border-[#e11d48] border-t-[5px] border-t-[#e11d48] rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 text-2xl mb-5 shadow-xs border border-rose-100">
                  📈
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1">05 • OPTIMIZATION</div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Version Upgrades & Audits</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We audit slow or struggling Odoo databases, optimize PostgreSQL indexes, clean bloated server logs, and upgrade deprecated modules to keep your system performing at peak speed.
                </p>
              </div>

              {/* Card 6: Support & Training */}
              <div className="bg-white border-[1.5px] border-[#6366f1] border-t-[5px] border-t-[#6366f1] rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-2xl mb-5 shadow-xs border border-indigo-100">
                  🎧
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">06 • HYPERCARE</div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Training & 24/7 SLA Support</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Comprehensive interactive staff onboarding, recorded operating procedures, and ongoing SLA-backed technical assistance to maximize user adoption across all departments.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ODOO APPLICATIONS SHOWCASE GRID */}
        <section className="py-20 px-6 bg-slate-50/70 border-y border-slate-100">
          <div className="mx-auto" style={{ maxWidth: '1350px' }}>
            
            <div className="text-center mb-16 reveal reveal-fade-up">
              <LabelBadge isCentered={true}>ODOO APPS ECOSYSTEM</LabelBadge>
              <h2 className="text-[32px] sm:text-[40px] font-extrabold text-slate-800 font-heading mt-4">
                Modular Solutions for Every Department
              </h2>
              <p className="text-slate-600 text-base max-w-2xl mx-auto mt-3">
                All Odoo apps share a single database, eliminating duplicate data entry and providing real-time visibility across your company.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* App 1: Inventory */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="h-44 overflow-hidden bg-slate-100">
                  <img src={warehouseOverview} alt="Odoo Inventory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-teal-800 bg-teal-50 border border-teal-200 mb-2">
                    Supply Chain
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1.5">Inventory & Logistics</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Double-entry stock ledger, multi-warehouse routing, automated replenishment, and mobile barcode scanner validation.
                  </p>
                </div>
              </div>

              {/* App 2: CRM & Sales */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="h-44 overflow-hidden bg-slate-100">
                  <img src={salesDashboard} alt="Odoo Sales & CRM" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-purple-800 bg-purple-50 border border-purple-200 mb-2">
                    Revenue
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1.5">CRM & Sales Pipelines</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Visual Kanban pipeline stages, automated quotation emails, electronic signature approvals, and customer 360° views.
                  </p>
                </div>
              </div>

              {/* App 3: Accounting */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="h-44 overflow-hidden bg-slate-100">
                  <img src={accountingChart} alt="Odoo Accounting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-blue-800 bg-blue-50 border border-blue-200 mb-2">
                    Finance
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1.5">Invoicing & Accounting</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Bank synchronization, AI reconciliation, multi-currency ledgers, automatic tax computations, and instant P&L reporting.
                  </p>
                </div>
              </div>

              {/* App 4: MRP */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="h-44 overflow-hidden bg-slate-100">
                  <img src={mrpBom} alt="Odoo Manufacturing MRP" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 mb-2">
                    Operations
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1.5">Manufacturing (MRP)</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Multi-level Bills of Materials (BOM), work center routings, quality control checkpoints, and shopfloor scheduling.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* IMPLEMENTATION WORKFLOW PATHWAY (5 CLEAN STEPS) */}
        <section className="py-20 px-6 bg-white relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="mx-auto px-6 text-center relative z-10" style={{ maxWidth: '1350px' }}>
            
            <div className="mb-16 reveal reveal-fade-up">
              <LabelBadge isCentered={true}>WORKFLOW PATHWAY</LabelBadge>
              <h2 className="text-[32px] sm:text-[40px] font-extrabold text-slate-800 font-heading mt-4">
                Our 5-Stage Implementation Methodology
              </h2>
              <p className="text-slate-600 text-base max-w-2xl mx-auto mt-3">
                A proven, structured roadmap that guarantees on-time deployment and seamless staff adoption.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
              
              <div className="bg-white border-[1.5px] border-[#714B67] border-t-[4px] border-t-[#714B67] rounded-2xl p-6 shadow-sm reveal reveal-fade-up">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-[#714B67] font-bold text-[16px] mb-4">01</div>
                <h3 className="font-heading font-bold text-[16px] text-slate-800">Discovery & Gap Audit</h3>
                <p className="text-black text-[13px] mt-3 leading-relaxed">
                  We analyze your current operations, document pain points, map data flows, and define clear project milestones.
                </p>
              </div>

              <div className="bg-white border-[1.5px] border-[#017e84] border-t-[4px] border-t-[#017e84] rounded-2xl p-6 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-[#017e84] font-bold text-[16px] mb-4">02</div>
                <h3 className="font-heading font-bold text-[16px] text-slate-800">Sandbox Prototyping</h3>
                <p className="text-black text-[13px] mt-3 leading-relaxed">
                  We configure an interactive Odoo sandbox model with your actual master chart of accounts and test data.
                </p>
              </div>

              <div className="bg-white border-[1.5px] border-[#2563eb] border-t-[4px] border-t-[#2563eb] rounded-2xl p-6 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-[16px] mb-4">03</div>
                <h3 className="font-heading font-bold text-[16px] text-slate-800">Customization & API</h3>
                <p className="text-black text-[13px] mt-3 leading-relaxed">
                  Our certified engineers code bespoke modules, connect third-party APIs, and build branded reports.
                </p>
              </div>

              <div className="bg-white border-[1.5px] border-[#f59e0b] border-t-[4px] border-t-[#f59e0b] rounded-2xl p-6 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '300ms' }}>
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 font-bold text-[16px] mb-4">04</div>
                <h3 className="font-heading font-bold text-[16px] text-slate-800">Migration & UAT Testing</h3>
                <p className="text-black text-[13px] mt-3 leading-relaxed">
                  Clean normalization and transfer of legacy records followed by rigorous User Acceptance Testing with your team.
                </p>
              </div>

              <div className="bg-white border-[1.5px] border-[#8B2C2C] border-t-[4px] border-t-[#8B2C2C] rounded-2xl p-6 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '400ms' }}>
                <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-[#8B2C2C] font-bold text-[16px] mb-4">05</div>
                <h3 className="font-heading font-bold text-[16px] text-slate-800">Go-Live & Hypercare</h3>
                <p className="text-black text-[13px] mt-3 leading-relaxed">
                  Smooth cutover to production with on-site or remote assistance, user training, and continuous SLA support.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* CALL TO ACTION SECTION */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', background: 'linear-gradient(180deg, transparent, rgba(113, 75, 103, 0.03))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            
            <LabelBadge isCentered={true}>START YOUR TRANSFORMATION</LabelBadge>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3' }}>
              Ready to Optimize Your Business with Official Odoo Solutions?
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '640px', lineHeight: '1.6' }}>
              Connect with Dreamwarez today to schedule a personalized live demo and learn how our official Odoo implementation services can streamline your business workflows.
            </p>

            <Link 
              to="/contact/" 
              className="cta-button" 
              style={{ padding: '14px 38px', fontSize: '16px', marginTop: '10px' }}
            >
              Contact Our Experts <span style={{ marginLeft: '8px' }}>➔</span>
            </Link>

          </div>
        </section>

      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}
