import React, { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import couchWorkspace from '../../assets/couch_workspace.png';
import csWebDesign from '../../assets/cs_process_design_1781517476994.png';
import platformStandardImg from '../../assets/platform standard.png';
import seoImage from '../../assets/global_reach_ios_1781517195521.png';
import webdevHeroNew from '../../assets/webdev_hero.png';

export function WebsiteDevelopmentPage() {
  return (
    <div className="app-container">
    
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Website Development" />

      <main className="main-content">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-24 pb-12 md:pt-24 md:pb-16 bg-white relative overflow-hidden">          {/* Background Texture & Patterns */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Top Right Blue Shape */}
            <div 
              className="absolute top-0 right-0 w-full h-full" 
              style={{ 
                background: 'linear-gradient(to bottom left, rgba(147, 197, 253, 0.5) 0%, transparent 70%)',
                clipPath: 'polygon(20% 0, 100% 0, 100% 80%)' 
              }} 
            />
            {/* Bottom Left Teal Shape */}
            <div 
              className="absolute bottom-20 left-0 w-full h-full" 
              style={{ 
                background: 'linear-gradient(to top right, rgba(138, 202, 192, 0.5) 0%, transparent 70%)',
                clipPath: 'polygon(0 20%, 80% 100%, 0 100%)' 
              }} 
            />
          </div>
          <div className="max-w-[1330px] mx-auto px-6 w-full z-10 relative -mt-12 md:-mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column: Content */}
              <div className="text-left reveal reveal-fade-left">
                <div className="mb-4">
                  <span className="text-[14px] font-bold uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2" style={{ color: '#8b2c2c' }}>
                    Web Systems
                  </span>
                  <div className="flex gap-2">
                    <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                    <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                  </div>
                </div>
                <h1 className="text-[50px] font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
                  Website <span className="text-[#7a7a7a]">Development</span>
                </h1>
                <p className="animate-subtitle text-[16px] leading-[1.625] text-black max-w-[42rem] my-4 font-['Open_Sans',sans-serif]">
                  We build modern, fast, and responsive websites for your business.
                </p>
                <p className="animate-subtitle text-[16px] leading-[1.625] text-black max-w-[42rem] mb-8 font-['Open_Sans',sans-serif]">
                  Your website is your digital storefront. We create high-performing, visually stunning web experiences that captivate your audience, drive conversions, and perfectly represent your brand identity.
                </p>
              </div>

              {/* Right Column: Image */}
              <div className="flex justify-center md:justify-end reveal reveal-fade-right">
                <img 
                  src={webdevHeroNew} 
                  alt="Website Development" 
                  className="w-full max-w-[450px] aspect-square object-cover rounded-3xl" 
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section - 4 Columns */}
        <section className="py-20 px-6 max-w-[1330px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-center hover:scale-[1.05] hover:-translate-y-1 hover:shadow-lg transition-all duration-500 reveal reveal-fade-up delay-[200ms]">
              <span className="text-2xl mb-3 block">🏢</span>
              <h3 className="font-heading font-bold text-slate-800 text-base">Business Website</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                Professional website for companies
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-center hover:scale-[1.05] hover:-translate-y-1 hover:shadow-lg transition-all duration-500 reveal reveal-fade-up delay-[400ms]">
              <span className="text-2xl mb-3 block">🛒</span>
              <h3 className="font-heading font-bold text-slate-800 text-base">E-Commerce Website</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                Online store with payment gateway
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-center hover:scale-[1.05] hover:-translate-y-1 hover:shadow-lg transition-all duration-500 reveal reveal-fade-up delay-[600ms]">
              <span className="text-2xl mb-3 block">⚙️</span>
              <h3 className="font-heading font-bold text-slate-800 text-base">Custom Website</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                Fully custom design & coding
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-center hover:scale-[1.05] hover:-translate-y-1 hover:shadow-lg transition-all duration-500 reveal reveal-fade-up delay-[800ms]">
              <span className="text-2xl mb-3 block">🔄</span>
              <h3 className="font-heading font-bold text-slate-800 text-base">Website Redesign</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                Upgrade your old website
              </p>
            </div>
          </div>
        </section>

        {/* Professional Website Development Services */}
        <section className="py-20 px-6 bg-white border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto text-center reveal reveal-fade-up">
            <div className="mb-4 inline-flex flex-col items-start text-left">
              <span className="text-[14px] font-bold text-slate-900 uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2"style={{ color: '#8b2c2c' }}>
                OUR ENGINEERING STANDARDS
              </span>
              <div className="flex gap-2">
                <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
              </div>
            </div>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Professional Website Development Services</h2>
            
            <p className="text-slate-500 text-sm max-w-3xl mx-auto mt-6 mb-12 leading-relaxed">
              At Dreamwarez, we specialize in high-quality web systems that help your brand stand out. We focus on speed, design, and usability to build the perfect online solution for your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              {[
                {
                  title: "Professional Web Solutions",
                  desc: "Tailored for businesses, startups, and individuals to create modern websites that help your business scale.",
                  icon: (
                    <svg className="w-5 h-5 text-[#8b2c2c] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )
                },
                {
                  title: "Fully Responsive Layouts",
                  desc: "Crafted to deliver a flawless, high-performance user experience on desktops, tablets, and mobile devices.",
                  icon: (
                    <svg className="w-5 h-5 text-[#8b2c2c] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: "SEO Friendly & Fast",
                  desc: "Structured from the ground up using search engine optimization standards to maximize your online visibility.",
                  icon: (
                    <svg className="w-5 h-5 text-[#8b2c2c] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Custom E-Commerce & Apps",
                  desc: "Flexible, scalable architectures built to handle everything from online stores to custom web applications.",
                  icon: (
                    <svg className="w-5 h-5 text-[#8b2c2c] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  )
                }
              ].map((point, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-5 rounded-2xl flex gap-4 items-start shadow-xs hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex shrink-0 items-center justify-center shadow-inner">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-slate-800 font-heading mb-1.5">{point.title}</h3>
                    <p className="text-slate-555 text-[13px] leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Features of Our Websites */}
        <section className="py-20 px-6 max-w-[1330px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal reveal-fade-left lg:order-2 lg:pl-20">
              <div className="mb-4">
                <span className="text-[14px] font-bold text-slate-900 uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2"style={{ color: '#8b2c2c' }}>
                  PLATFORM STANDARDS
                </span>
                <div className="flex gap-2">
                  <span className="w-8 h-1.5 rounded-full bg-[#7a7a7a]"></span>
                  <span className="w-3 h-1.5 rounded-full bg-[#7a7a7a]"></span>
                </div>
              </div>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Features of Our Websites</h2>
              
              <div className="grid grid-cols-1 gap-y-4 mt-8">
                {[
                  'Mobile Responsive Design',
                  'Fast Loading Speed',
                  'SEO Friendly Structure',
                  'Secure Website',
                  'Modern UI Design',
                  'Easy to Manage',
                  'Lifetime Support'
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#8b2c2c] shrink-0 rotate-45" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
                    </svg>
                    <span className="text-slate-800 text-[15px] font-bold leading-tight">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-fade-right lg:order-1 flex justify-center lg:justify-start">
              <div className="w-full max-w-[500px] rounded-2xl shadow-lg border border-slate-200 overflow-hidden h-[400px]">
                <img src={platformStandardImg} alt="Features of Our Websites" className="w-full h-full object-cover scale-110" />
              </div>
            </div>
          </div>
        </section>

        {/* SEO Friendly Section */}
        <section className="py-20 px-6 bg-white border-y border-slate-100">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal reveal-fade-left text-left">
              <div className="mb-4">
                <span className="text-[14px] font-bold text-slate-900 uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2"style={{ color: '#8b2c2c' }}>
                  SEARCH OPTIMIZATION
                </span>
                <div className="flex gap-2">
                  <span className="w-8 h-1.5 rounded-full bg-[#7a7a7a]"></span>
                  <span className="w-3 h-1.5 rounded-full bg-[#7a7a7a]"></span>
                </div>
              </div>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">SEO Friendly Website Development</h2>
              <p className="text-slate-555 text-base mt-6 leading-relaxed">
                We build SEO friendly websites that help your business rank higher on Google. Our websites are optimized for speed, performance, and search engines so that your customers can easily find you online. We follow the latest SEO standards while developing websites to ensure better visibility, more traffic, and more leads.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right flex justify-center lg:justify-end">
              <div className="w-full max-w-[450px]">
                <img src={seoImage} alt="SEO Optimization and Global Reach" className="w-full h-auto object-contain drop-shadow-xl rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Your Business Needs a Website */}
        <section className="py-20 px-6 max-w-[900px] mx-auto text-center reveal reveal-fade-up">
          <div className="mb-4 inline-flex flex-col items-start text-left">
            <span className="text-[14px] font-bold text-slate-900 uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2"style={{ color: '#8b2c2c' }}>
              BUSINESS VISIBILITY
            </span>
            <div className="flex gap-2">
              <span className="w-8 h-1.5 rounded-full bg-[#7a7a7a]"></span>
              <span className="w-3 h-1.5 rounded-full bg-[#7a7a7a]"></span>
            </div>
          </div>
          <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Why Your Business Needs a Website</h2>
          <p className="text-slate-555 text-base mt-6 leading-relaxed">
            A website helps your business grow faster by reaching more customers online. Today every company needs a professional website to build trust and attract new clients.
          </p>
          <p className="text-slate-555 text-base mt-4 leading-relaxed">
            At Dreamwarez, we design websites that are modern, fast, and optimized for search engines. Our goal is to help your business stand out from competitors and get more leads.
          </p>
        </section>

        {/* Our Website Development Process */}
        <section className="py-20 px-6 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto text-center">
            <div className="mb-4 inline-flex flex-col items-start text-left">
              <span className="text-[14px] font-bold text-slate-900 uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2"style={{ color: '#8b2c2c' }}>
                WORKFLOW STAGES
              </span>
              <div className="flex gap-2">
                <span className="w-8 h-1.5 rounded-full bg-[#7a7a7a]"></span>
                <span className="w-3 h-1.5 rounded-full bg-[#7a7a7a]"></span>
              </div>
            </div>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Our Website Development Process</h2>
            <p className="text-slate-555 text-base mt-2">We follow a simple and professional process to create high quality websites for our clients.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-left reveal reveal-fade-up">
                <span className="w-8 h-8 rounded-full bg-[#8b2c2c] text-white flex items-center justify-center font-bold text-sm mb-4">1</span>
                <h4 className="font-heading font-bold text-slate-800 text-base">Planning</h4>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  We understand your business requirements and plan the website structure.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-left reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <span className="w-8 h-8 rounded-full bg-[#8b2c2c] text-white flex items-center justify-center font-bold text-sm mb-4">2</span>
                <h4 className="font-heading font-bold text-slate-800 text-base">Design</h4>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  We create modern and attractive UI design for your website.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-left reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <span className="w-8 h-8 rounded-full bg-[#8b2c2c] text-white flex items-center justify-center font-bold text-sm mb-4">3</span>
                <h4 className="font-heading font-bold text-slate-800 text-base">Development</h4>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  We develop fast, secure, and responsive website using latest technologies.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-left reveal reveal-fade-up" style={{ animationDelay: '300ms' }}>
                <span className="w-8 h-8 rounded-full bg-[#8b2c2c] text-white flex items-center justify-center font-bold text-sm mb-4">4</span>
                <h4 className="font-heading font-bold text-slate-800 text-base">Launch</h4>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  After testing, we launch your website and provide support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto z-10 relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 font-heading tracking-tight leading-tight">
              Start Your Website Today
            </h2>
            <p className="text-slate-555 text-base max-w-xl mx-auto mt-4 leading-relaxed">
              Contact Dreamwarez now to build your professional website.
            </p>
            <div className="mt-8">
              <a 
                href="/contact/" 
                className="bg-[#7a7a7a]  text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all inline-block hover:scale-[1.02] cursor-pointer"
              >
                Get Started
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
