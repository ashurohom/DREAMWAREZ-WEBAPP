import React, { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import odooHero from '../../assets/odoo_hero_wide.jpg';
import dashboardMockup from '../../assets/dashboard_mockup.png';

export function OdooPartnerPage() {
  return (
    <div className="app-container">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Odoo Partner" />

      <main className="main-content">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-80px)] flex items-center pt-8 pb-10 md:pt-10 md:pb-12 bg-white relative overflow-hidden">
          {/* Background Texture & Patterns */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div 
              className="absolute top-0 right-0 w-full h-full" 
              style={{ 
                background: 'linear-gradient(to bottom left, rgba(147, 197, 253, 0.5) 0%, transparent 70%)',
                clipPath: 'polygon(20% 0, 100% 0, 100% 80%)' 
              }} 
            />
            <div 
              className="absolute bottom-20 left-0 w-full h-full" 
              style={{ 
                background: 'linear-gradient(to top right, rgba(138, 202, 192, 0.5) 0%, transparent 70%)',
                clipPath: 'polygon(0 20%, 80% 100%, 0 100%)' 
              }} 
            />
          </div>
          
          <div className="max-w-[1330px] mx-auto px-6 w-full z-10 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column: Content */}
              <div className="text-left reveal reveal-fade-left">
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', fontSize: '14px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: '#8b2c2c', marginBottom: '16px' }}>
                  CERTIFIED EXPERTISE
                  <span style={{ display: 'flex', gap: '4px', alignItems: 'center', marginTop: '2px' }}>
                    <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                    <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                  </span>
                </div>
                <h1 className="animate-title" style={{ fontSize: '56px', lineHeight: '1.2', fontWeight: '800', fontFamily: '"Open Sans", sans-serif', color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.025em' }}>
                  Odoo Implementation Partner
                </h1>
                <p className="animate-subtitle" style={{ fontSize: '16px', lineHeight: '1.625', color: '#000000', maxWidth: '42rem', marginBottom: '16px', marginTop: '16px', fontFamily: '"Open Sans", sans-serif' }}>
                  Transform your business operations with Dreamwarez. As a certified Odoo Partner, we deliver scalable ERP solutions tailored to your unique workflows.
                </p>
                <div className="mt-8 flex gap-4 reveal reveal-fade-up" style={{ animationDelay: '300ms' }}>
                   <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 text-[16px] font-semibold text-white bg-[#7a7a7a] rounded-full hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(122,122,122,0.3)] hover:shadow-[0_0_25px_rgba(122,122,122,0.5)]">
                     Get Free Consultation <span className="ml-2">➔</span>
                   </a>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="flex justify-center md:justify-end reveal reveal-fade-right">
                <img 
                  src={odooHero} 
                  alt="Odoo ERP Partner" 
                  className="w-full max-w-[450px] aspect-square object-cover rounded-3xl shadow-2xl animate-float" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="reveal reveal-fade-left">
              <div className="inline-flex flex-col items-start text-left mb-6">
                <span className="text-[14px] font-bold text-slate-900 uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2" style={{ color: '#8b2c2c' }}>
                  WHY ODOO
                </span>
                <div className="flex gap-2">
                  <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                  <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                </div>
              </div>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mb-6 leading-tight">
                One Platform for All Your Business Needs
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Odoo is a fully integrated, customizable, and open-source suite of business applications. Whether you need an ERP, CRM, Accounting, Inventory, or eCommerce solution, Odoo provides it all in a single, unified environment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1 mr-4">✓</div>
                  <p className="text-slate-700"><strong>Cost-Effective:</strong> Eliminate the need for multiple expensive software subscriptions.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1 mr-4">✓</div>
                  <p className="text-slate-700"><strong>Highly Customizable:</strong> Tailored completely to fit your operational workflows.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1 mr-4">✓</div>
                  <p className="text-slate-700"><strong>Scalable Architecture:</strong> Add new apps and features as your business grows.</p>
                </li>
              </ul>
            </div>
            <div className="reveal reveal-fade-right">
              <img src={dashboardMockup} alt="Odoo Dashboard Interface" className="w-full rounded-2xl shadow-xl border border-slate-200" />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1280px] mx-auto text-center reveal reveal-fade-up">
            <div className="mb-4 inline-flex flex-col items-start text-left">
              <span className="text-[14px] font-bold text-slate-900 uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2"style={{ color: '#8b2c2c' }}>
                OUR SERVICES
              </span>
              <div className="flex gap-2">
                <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
              </div>
            </div>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6 mb-12">Comprehensive Odoo Solutions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all text-left">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-xl mb-3">Implementation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  End-to-end Odoo setup and deployment, ensuring a smooth transition with minimal disruption to your daily operations.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all text-left">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-xl mb-3">Customization</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We tailor Odoo modules to perfectly align with your specific industry requirements and unique business logic.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all text-left">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-xl mb-3">Integration</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Seamlessly connect Odoo with your existing third-party applications, payment gateways, and legacy software.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all text-left">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                  <span className="text-2xl">🎧</span>
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-xl mb-3">Support & Training</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ongoing technical support and comprehensive team training to maximize adoption and system proficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-6 text-black text-center">
          <div className="max-w-[800px] mx-auto reveal reveal-fade-up">
            <h2 className="text-[40px] font-extrabold font-heading mb-6">Ready to Optimize with Odoo?</h2>
            <p className="text-slate-600 text-lg mb-10">
              Contact Dreamwarez today to schedule a demo and see how Odoo can revolutionize your business management.
            </p>
            <a   
                href="/contact/" 
                className="bg-[#7a7a7a]  text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all inline-block hover:scale-[1.02] cursor-pointer">              
                Contact Our Experts
            </a>
          </div>
        </section>

      </main>

      <SiteFooter />
      <ChatWidget />
    </div>
  );
}
