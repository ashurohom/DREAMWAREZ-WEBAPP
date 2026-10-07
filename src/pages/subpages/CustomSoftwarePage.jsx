// Force Vite dev server cache bust
import React, { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { Monitor, Smartphone, Database, Cloud, Shield, ArrowRight, Settings, Users, Code2, ShieldCheck, Rocket, User, Plus, Heart, Home, DollarSign, ClipboardList, ThumbsUp, ArrowUp, Globe } from 'lucide-react';

const NeedsIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <div className="absolute top-0 left-1 w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center border border-cyan-300"><Plus className="w-3 h-3 text-cyan-600" strokeWidth={3} /></div>
    <div className="absolute top-0 right-1 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center border border-red-300"><Heart className="w-3 h-3 text-red-500" fill="currentColor" /></div>
    <div className="absolute top-5 -left-2 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-300"><Home className="w-3 h-3 text-emerald-600" strokeWidth={2.5} /></div>
    <div className="absolute top-5 -right-2 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center border border-amber-300"><DollarSign className="w-3 h-3 text-amber-600" strokeWidth={2.5} /></div>
    <User className="w-8 h-8 text-blue-600 mt-6" strokeWidth={2} />
  </div>
);

const DesignIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center mt-2">
    <Monitor className="w-12 h-12 text-teal-600" strokeWidth={1.5} />
    <div className="absolute -top-2 left-2"><Settings className="w-7 h-7 text-red-400" strokeWidth={2} /></div>
    <div className="absolute -top-1 right-1"><Settings className="w-6 h-6 text-amber-400" strokeWidth={2} /></div>
    <div className="absolute top-3 left-4 flex gap-1">
      <div className="w-1.5 h-1.5 bg-slate-300 rounded-sm"></div>
      <div className="w-1.5 h-1.5 bg-slate-300 rounded-sm"></div>
      <div className="w-1.5 h-1.5 bg-slate-300 rounded-sm"></div>
    </div>
  </div>
);

const QAIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <ClipboardList className="w-10 h-10 text-slate-700" strokeWidth={1.5} />
    <div className="absolute top-1 right-2 bg-white rounded-full p-0.5 shadow-xs"><Shield className="w-6 h-6 text-blue-500" strokeWidth={2} fill="#ebf8ff" /></div>
    <div className="absolute bottom-1 -right-1 bg-white rounded-full p-1 shadow-xs"><ThumbsUp className="w-5 h-5 text-indigo-500" strokeWidth={2} fill="#e0e7ff" /></div>
  </div>
);

const DeployIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center mt-2">
    <Monitor className="w-12 h-12 text-slate-700" strokeWidth={1.5} />
    <div className="absolute top-4 flex justify-center w-full"><ArrowUp className="w-5 h-5 text-red-500" strokeWidth={3} /></div>
    <div className="absolute -top-4 bg-white rounded-full p-0.5"><Globe className="w-8 h-8 text-emerald-500" strokeWidth={1.5} fill="#ccfbf1" /></div>
  </div>
);
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Import local assets
import csHeroIsometric from '../../assets/custom_software_hero.jpg';
import softwaresSolutions from '../../assets/softwares_solutions.jpg';
import workspaceHands from '../../assets/workspace_hands.png';
import devWoman from '../../assets/dev_woman.png';
import tabletGraphs from '../../assets/tablet_graphs.png';
import coffeeDesk from '../../assets/coffee_desk.png';
import salesDashboard from '../../assets/sales_dashboard.png';
import erpWarehouse from '../../assets/erp_warehouse.png';
import outdoorLaptop from '../../assets/outdoor_laptop.png';
import accountingDashboard from '../../assets/accounting_dashboard.png';
import officeChair from '../../assets/office_chair.png';
import csProcessNeeds from '../../assets/cs_process_needs_1781517456394.png';
import csProcessDesign from '../../assets/cs_process_design_1781517476994.png';
import csProcessQa from '../../assets/cs_process_qa_1781517497068.png';
import csProcessDeploy from '../../assets/cs_process_deploy_1781517517189.png';
import csIndConstruction from '../../assets/cs_industry_construction_elegant.png';
import csIndRetail from '../../assets/cs_industry_retail_elegant.png';
import csIndHealthcare from '../../assets/cs_industry_healthcare_elegant.png';
import csIndLogistics from '../../assets/cs_industry_logistics_elegant.png';
import csIndEducation from '../../assets/cs_industry_education_elegant.png';
import csIndFinance from '../../assets/cs_industry_finance_elegant.png';

export function CustomSoftwarePage() {
  return (
    <div className="app-container software-theme-page" style={{ fontFamily: "'Open Sans', sans-serif", '--font-heading': "'Open Sans', sans-serif", '--font-sans': "'Open Sans', sans-serif" }}>
 
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Custom Software Development" />

      <main className="main-content">
        {/* Hero Section */}
        <section className="relative bg-white pt-8 pb-10 md:pt-10 md:pb-12 min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full" style={{ maxWidth: '1350px' }}>
            {/* Left Content */}
            <div className="md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up pr-8">
              {/* Subtitle */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>Bespoke Systems</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-6 max-w-[700px]">
                Customized <span style={{ color: '#7A7A7A' }}>Software Development</span>
              </h1>

              {/* Paragraph */}
              <p className="text-lg text-black leading-relaxed max-w-[600px]">
                Empowering Businesses with Tailored Software Solutions
              </p>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-end z-0 reveal reveal-fade-left">
              <div className="relative w-full max-w-[450px]">
                <img 
                  src={coffeeDesk} 
                  alt="Customized Software Development" 
                  className="w-full h-auto object-contain rounded-3xl shadow-2xl border border-slate-100/50"
                />
              </div>
            </div>
          </div>
        </section>

    

        {/* Why Choose Section */}
        <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-slate-50/50 border-y border-slate-100 text-center py-16">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[800px] mx-auto px-6 reveal reveal-fade-up relative z-10">
            <div className="flex justify-center mb-4">
              <div className="inline-flex flex-col items-start gap-1.5">
                <span className="text-[#8B2C2C] font-bold text-[14px] uppercase tracking-widest">
                  TAILORED SOLUTIONS
                </span>
                <div className="flex gap-1.5">
                  <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
                  <div className="w-4 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
            </div>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Why Choose Customized Software?</h2>
            <p className="text-black text-[16px] mt-6 leading-relaxed">
              As a software company, we believe that every business is unique, and so are its challenges. That’s why we specialize in developing customized software solutions designed to address your specific needs, streamline your operations, and drive sustainable growth.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="mx-auto px-6" style={{ maxWidth: '1350px' }}>
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="inline-flex flex-col items-start gap-1.5">
                  <span className="text-[#8B2C2C] font-bold text-[14px] uppercase tracking-widest">
                    CORE CAPABILITIES
                  </span>
                  <div className="flex gap-1.5">
                    <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
                    <div className="w-4 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
                  </div>
                </div>
              </div>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border-[1.5px] border-[#1e3a8a] border-t-[4px] border-t-[#1e3a8a] rounded-2xl p-6 shadow-sm reveal reveal-fade-up">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#8B2C2C] font-bold text-[16px] mb-4">01</div>
                <h3 className="font-heading font-bold text-[16px] text-slate-800">Tailored for Your Business</h3>
                <p className="text-black text-[14px] mt-3 leading-relaxed">
                  Unlike off-the-shelf software, our solutions are designed to integrate seamlessly with your workflows, ensuring maximum efficiency and minimal disruption.
                </p>
              </div>

              <div className="bg-white border-[1.5px] border-[#1e3a8a] border-t-[4px] border-t-[#1e3a8a] rounded-2xl p-6 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#8B2C2C] font-bold text-[16px] mb-4">02</div>
                <h3 className="font-heading font-bold text-[16px] text-slate-800">Enhanced Flexibility</h3>
                <p className="text-black text-[14px] mt-3 leading-relaxed">
                  Your business is dynamic, and so should your software be. Our custom solutions adapt to your growth and changing requirements.
                </p>
              </div>

              <div className="bg-white border-[1.5px] border-[#1e3a8a] border-t-[4px] border-t-[#1e3a8a] rounded-2xl p-6 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#8B2C2C] font-bold text-[16px] mb-4">03</div>
                <h3 className="font-heading font-bold text-[16px] text-slate-800">Cost-Efficiency</h3>
                <p className="text-black text-[14px] mt-3 leading-relaxed">
                  With a focus on delivering value, we ensure that you pay for only the features you need, avoiding unnecessary extras that come with generic software.
                </p>
              </div>

              <div className="bg-white border-[1.5px] border-[#1e3a8a] border-t-[4px] border-t-[#1e3a8a] rounded-2xl p-6 shadow-sm reveal reveal-fade-up">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#8B2C2C] font-bold text-[16px] mb-4">04</div>
                <h3 className="font-heading font-bold text-[16px] text-slate-800">Improved Security</h3>
                <p className="text-black text-[14px] mt-3 leading-relaxed">
                  We implement robust security measures tailored to your industry’s needs, keeping your sensitive data safe and compliant with regulations.
                </p>
              </div>

              <div className="bg-white border-[1.5px] border-[#1e3a8a] border-t-[4px] border-t-[#1e3a8a] rounded-2xl p-6 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#8B2C2C] font-bold text-[16px] mb-4">05</div>
                <h3 className="font-heading font-bold text-[16px] text-slate-800">Scalable Architecture</h3>
                <p className="text-black text-[14px] mt-3 leading-relaxed">
                  Whether you’re a startup or an established enterprise, our software solutions grow with you, supporting your journey to success.
                </p>
              </div>

              <div className="bg-white border-[1.5px] border-[#1e3a8a] border-t-[4px] border-t-[#1e3a8a] rounded-2xl p-6 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#8B2C2C] font-bold text-[16px] mb-4">06</div>
                <h3 className="font-heading font-bold text-[16px] text-slate-800">Seamless Integration</h3>
                <p className="text-black text-[14px] mt-3 leading-relaxed">
                  We design custom software to fit directly into your existing ecosystem. Our solutions connect easily with your current databases, CRM, ERP, and API services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Development Process Section */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="mx-auto text-center px-6 relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="flex justify-center mb-4">
              <div className="inline-flex flex-col items-start gap-1.5">
                <span className="text-[#8B2C2C] font-bold text-[14px] uppercase tracking-widest">
                  WORKFLOW PATHWAY
                </span>
                <div className="flex gap-1.5">
                  <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
                  <div className="w-4 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
            </div>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Our Development Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center text-center reveal reveal-fade-up px-2">
                <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100/60 shadow-xs">
                  <NeedsIcon />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[18px]">Understanding Your Needs</h3>
                <p className="text-black text-[14px] mt-4 leading-relaxed">
                  We start by diving deep into your business, identifying pain points, and gathering insights to ensure the software aligns with your goals.
                </p>
              </div>

              <div className="flex flex-col items-center text-center reveal reveal-fade-up px-2" style={{ animationDelay: '100ms' }}>
                <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100/60 shadow-xs">
                  <DesignIcon />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[18px]">Design & Development</h3>
                <p className="text-black text-[14px] mt-4 leading-relaxed">
                  Our expert team combines innovation with technical expertise to design intuitive and feature-rich software tailored to your requirements.
                </p>
              </div>

              <div className="flex flex-col items-center text-center reveal reveal-fade-up px-2" style={{ animationDelay: '200ms' }}>
                <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100/60 shadow-xs">
                  <QAIcon />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[18px]">Testing & Quality Assurance</h3>
                <p className="text-black text-[14px] mt-4 leading-relaxed">
                  We leave no room for errors. Every solution undergoes rigorous testing to ensure flawless performance and user satisfaction.
                </p>
              </div>

              <div className="flex flex-col items-center text-center reveal reveal-fade-up px-2" style={{ animationDelay: '300ms' }}>
                <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100/60 shadow-xs">
                  <DeployIcon />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[18px]">Deployment & Support</h3>
                <p className="text-black text-[14px] mt-4 leading-relaxed">
                  From smooth implementation to ongoing support, we’re with you every step of the way, ensuring your software continues to perform at its best.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto text-center px-6" style={{ maxWidth: '1350px' }}>
            <div className="flex justify-center mb-4">
              <div className="inline-flex flex-col items-start gap-1.5">
                <span className="text-[#8B2C2C] font-bold text-[14px] uppercase tracking-widest">
                  INDUSTRIES SERVED
                </span>
                <div className="flex gap-1.5">
                  <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
                  <div className="w-4 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
            </div>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Industries We have Served for</h2>
            <p className="text-black text-[16px] mt-4 max-w-2xl mx-auto">
              Our customized software solutions cater to a wide range of industries
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border-[1px] border-t-[4px] border-[#1e3a8a] rounded-[24px] p-6 flex flex-col items-center text-center gap-4 shadow-sm reveal reveal-fade-up">
                <img src={csIndConstruction} alt="Construction" className="w-40 h-40 object-contain" />
                <h4 className="font-heading text-black text-[16px] font-semibold mt-2">Construction</h4>
              </div>

              <div className="bg-white border-[1px] border-t-[4px] border-[#1e3a8a] rounded-[24px] p-6 flex flex-col items-center text-center gap-4 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <img src={csIndRetail} alt="Retail & E-commerce" className="w-40 h-40 object-contain" />
                <h4 className="font-heading text-black text-[16px] font-semibold mt-2">Retail & E-commerce</h4>
              </div>

              <div className="bg-white border-[1px] border-t-[4px] border-[#1e3a8a] rounded-[24px] p-6 flex flex-col items-center text-center gap-4 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <img src={csIndHealthcare} alt="Healthcare" className="w-40 h-40 object-contain" />
                <h4 className="font-heading text-black text-[16px] font-semibold mt-2">Healthcare</h4>
              </div>

              <div className="bg-white border-[1px] border-t-[4px] border-[#1e3a8a] rounded-[24px] p-6 flex flex-col items-center text-center gap-4 shadow-sm reveal reveal-fade-up">
                <img src={csIndLogistics} alt="Logistics & Supply Chain" className="w-40 h-40 object-contain" />
                <h4 className="font-heading text-black text-[16px] font-semibold mt-2">Logistics & Supply Chain</h4>
              </div>

              <div className="bg-white border-[1px] border-t-[4px] border-[#1e3a8a] rounded-[24px] p-6 flex flex-col items-center text-center gap-4 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <img src={csIndEducation} alt="Education" className="w-40 h-40 object-contain" />
                <h4 className="font-heading text-black text-[16px] font-semibold mt-2">Education</h4>
              </div>

              <div className="bg-white border-[1px] border-t-[4px] border-[#1e3a8a] rounded-[24px] p-6 flex flex-col items-center text-center gap-4 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <img src={csIndFinance} alt="Finance & Accounting" className="w-40 h-40 object-contain" />
                <h4 className="font-heading text-black text-[16px] font-semibold mt-2">Finance & Accounting</h4>
              </div>
            </div>

            <p className="text-black text-[16px] mt-16 max-w-4xl mx-auto leading-relaxed reveal reveal-fade-up">
              Beyond these industries, we serve businesses across diverse sectors by delivering innovative, scalable, and customized software solutions tailored to their unique requirements.
            </p>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(139, 44, 44, 0.02))' }}>
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="glass-card relative z-10" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '40px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
                Your business deserves a solution as unique as you are. Let’s build it together!
              </h2>
              <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#7A7A7A', boxShadow: '0 4px 15px rgba(122, 122, 122, 0.2)' }}>
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