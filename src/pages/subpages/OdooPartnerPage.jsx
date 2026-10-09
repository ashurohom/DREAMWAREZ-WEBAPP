import React from 'react';
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
  const LabelBadge = ({ children, isCentered = false }) => (
    <div style={{ display: 'flex', justifyContent: isCentered ? 'center' : 'flex-start', marginBottom: '20px' }}>
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: isCentered ? 'center' : 'flex-start', gap: '6px' }}>
        <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>
          {children}
        </span>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
          <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
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
        <section className="relative bg-white pt-8 pb-12 md:pt-12 md:pb-16 min-h-[calc(100vh-80px)] flex items-center overflow-hidden border-b border-slate-100">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-purple-500/[0.12] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#017e84]/[0.12] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full relative z-10" style={{ maxWidth: '1350px' }}>
            
            {/* Left Content */}
            <div className="md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up pr-4 md:pr-8">
              <LabelBadge>OFFICIAL ODOO PARTNER</LabelBadge>

              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-6 max-w-[700px]">
                Official Odoo <span style={{ color: '#714B67' }}>Implementation Partner</span>
              </h1>

              <p className="text-[17px] text-slate-800 leading-relaxed max-w-[600px] mb-6">
                Transform your business operations with Dreamwarez. As an <strong>Official Certified Odoo Partner</strong>, we deliver scalable ERP solutions, bespoke integrations, and seamless data migrations tailored to your unique workflows.
              </p>

              {/* Colorful feature chips */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-purple-100 text-[#714B67] border border-purple-200">
                  <span className="w-2 h-2 rounded-full bg-[#714B67]"></span>
                  Certified Odoo Specialists
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-teal-100 text-[#017e84] border border-teal-200">
                  <span className="w-2 h-2 rounded-full bg-[#017e84]"></span>
                  Odoo v17 & v18 Ready
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Zero-Downtime Migration
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-bold text-white bg-gradient-to-r from-[#714B67] to-[#8B2C2C] rounded-xl hover:shadow-[0_10px_25px_rgba(113,75,103,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Contact Our Experts <span className="ml-2">➔</span>
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-bold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-all shadow-sm"
                >
                  Explore Services ↓
                </a>
              </div>
            </div>

            {/* Right Image Frame */}
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div className="relative w-full max-w-[500px]">
                
                {/* Floating Status Badge */}
                <div className="absolute -top-3.5 -right-2 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-purple-200 shadow-lg flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-[#714B67] tracking-wide">Official Partner Verified ✓</span>
                </div>

                {/* macOS Style Window Frame */}
                <div className="rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-200 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(113,75,103,0.18)]">
                  <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                      <span className="text-[11px] font-mono text-slate-500 ml-2">dreamwarez / official-odoo-partner</span>
                    </div>
                    <span className="text-[10px] font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full uppercase">
                      Certified
                    </span>
                  </div>

                  <img 
                    src={odooHero} 
                    alt="Dreamwarez Official Odoo Implementation Team" 
                    className="w-full h-[360px] object-cover"
                  />
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute -bottom-3.5 -left-2 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-md flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-800">⭐ 100+ Successful Deployments</span>
                </div>

              </div>
            </div>

          </div>
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
