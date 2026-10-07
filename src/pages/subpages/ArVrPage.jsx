import React, { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import couchWorkspace from '../../assets/couch_workspace.png';
import warehouseScaleWms from '../../assets/warehouse_scale_wms.png';
import outdoorLaptop from '../../assets/outdoor_laptop.png';
import devWoman from '../../assets/dev_woman.png';

export function ArVrPage() {


  return (
    <div className="app-container">
  
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="AR & VR Solutions" />

      <main className="main-content">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-80px)] flex items-center pt-8 pb-10 md:pt-10 md:pb-12 bg-white relative overflow-hidden">
          {/* Background Texture & Patterns */}
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
          <div className="max-w-[1330px] mx-auto px-6 w-full z-10 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column: Content */}
              <div className="text-left reveal reveal-fade-left">
                <div className="mb-4">
                  <span className="text-[14px] font-bold uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2" style={{ color: '#8b2c2c' }}>
                    AR & VR Solutions
                  </span>
                  <div className="flex gap-2">
                    <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                    <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                  </div>
                </div>
                <h1 className="animate-title" style={{ fontSize: '56px', lineHeight: '1.2', fontWeight: '800', fontFamily: '"Open Sans", sans-serif', color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.025em' }}>
                  AR & <span className="text-[#7a7a7a]">VR</span>
                </h1>
                <p className="animate-subtitle text-[16px] leading-[1.625] text-black max-w-[42rem] my-4 font-['Open_Sans',sans-serif]">
                  Innovate with Immersion.
                </p>
                <p className="animate-subtitle text-[16px] leading-[1.625] text-black max-w-[42rem] mb-8 font-['Open_Sans',sans-serif]">
                  Elevate your digital presence with next-generation AR and VR technologies. Whether you need immersive training environments or interactive 3D product visualizers, we build the tools that bring your vision to life.
                </p>
              </div>

              {/* Right Column: Image */}
              <div className="flex justify-center md:justify-end reveal reveal-fade-right">
                <img 
                  src="/stickers/ar_vr_hero_light.png" 
                  alt="AR VR Solutions" 
                  className="w-full max-w-[450px] aspect-square object-cover rounded-[2rem] shadow-2xl animate-float" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Intro Section */}
        <section className="py-20 px-6 max-w-[1200px] mx-auto text-center">
          <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6 max-w-4xl mx-auto leading-snug reveal reveal-fade-up">
            AR & VR Solutions By Dreamwarez
          </h2>
          <h3 className="text-slate-800 font-bold text-base mt-4 max-w-3xl mx-auto reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
            Immersive Innovation For Real-World Impact
          </h3>
          
          <div className="text-slate-500 text-sm max-w-5xl mx-auto mt-10 leading-relaxed space-y-6 reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
            <p>
              Welcome to the future of engagement.
            </p>
            <p>
              At Dreamwarez, we help companies bridge the gap between digital and reality with our advanced Augmented Reality (AR) and Virtual Reality (VR) solutions. These immersive technologies are transforming the way people learn, shop, experience, and interact with the world.
            </p>
            <p>
              Whether you're looking to train employees through simulations, enhance eCommerce experiences, or launch interactive educational tools— we build it all.
            </p>
          </div>
        </section>

        {/* We Build AR & VR Applications */}
        <section className="py-20 px-6 bg-white border-y border-slate-100">
          <div className="max-w-[1290px] mx-auto text-center reveal reveal-fade-up">
            <div className="mb-4 inline-flex flex-col items-start text-left">
              <span className="text-[14px] font-bold text-slate-900 uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2"style={{ color: '#8b2c2c' }}>
                OUR APPLICATION
              </span>
              <div className="flex gap-2">
                <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
              </div>
            </div>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6 mb-12">We Build AR & VR Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up">
                <div className="overflow-hidden rounded-xl border border-slate-150 mb-4 h-40">
                  <img src={couchWorkspace} alt="AR in Retail & E-Commerce" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-base">AR in Retail & E-Commerce</h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  ● Try-before-you-buy tools <span className="block">● 3D product visualizers</span> <span className="block">● AR-powered catalogs and mirror apps</span>
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="overflow-hidden rounded-xl border border-slate-150 mb-4 h-40">
                  <img src={warehouseScaleWms} alt="VR for Industrial & Healthcare Training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-base">VR for Industrial & Healthcare Training</h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  ● Hazard-free virtual training environments <span className="block">● Emergency response drills</span> <span className="block">● Skill development simulations</span>
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="overflow-hidden rounded-xl border border-slate-150 mb-4 h-40">
                  <img src={outdoorLaptop} alt="360° Virtual Tours" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-base">360° Virtual Tours</h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  ● Real estate walkthroughs <span className="block">● Hospitality previews</span> <span className="block">● University campus navigation</span>
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '300ms' }}>
                <div className="overflow-hidden rounded-xl border border-slate-150 mb-4 h-40">
                  <img src={devWoman} alt="AR Learning for Education" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-base">AR Learning for Education</h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  ● Interactive learning modules <span className="block">● Science lab simulations</span> <span className="block">● AR flashcards and AR textbooks</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
       <section className="py-20 px-6 bg-white border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto text-center reveal reveal-fade-up">
            <div className="mb-4 inline-flex flex-col items-start text-left">
              <span className="text-[14px] font-bold text-slate-900 uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2"style={{ color: '#8b2c2c' }}>
               VERTICAL ARCHITECTURE 
              </span>
              <div className="flex gap-2">
                <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
              </div>
            </div>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6 mb-8">Industries We Serve</h2>
            <h3 className="text-slate-500 text-sm max-w-5xl mx-auto mb-12 leading-relaxed">
              Our software company brings the power of Augmented Reality (AR) and Virtual Reality (VR) to a wide range of industries, helping businesses enhance user experience, streamline operations, improve training, and create immersive digital environments.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {[
                { title: 'Education & E-Learning', icon: <svg className="w-10 h-10 text-[#8b2c2c] mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg> },
                { title: 'Healthcare & Medical', icon: <svg className="w-10 h-10 text-[#8b2c2c] mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
                { title: 'Retail & Fashion', icon: <svg className="w-10 h-10 text-[#8b2c2c] mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> },
                { title: 'System Integration', icon: <svg className="w-10 h-10 text-[#8b2c2c] mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg> },
                { title: 'Travel & Tourism', icon: <svg className="w-10 h-10 text-[#8b2c2c] mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                { title: 'Manufacturing & Industrial', icon: <svg className="w-10 h-10 text-[#8b2c2c] mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-purple-300 transition-all text-center reveal reveal-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  {item.icon}
                  <span className="block text-sm font-bold text-slate-800">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Dreamwarez */}
       <section className="py-20 px-6 bg-white border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto text-center reveal reveal-fade-up">
            <div className="mb-4 inline-flex flex-col items-start text-left">
              <span className="text-[14px] font-bold text-slate-900 uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2"style={{ color: '#8b2c2c' }}>
                OUR STANDARDS
              </span>
              <div className="flex gap-2">
                <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
              </div>
            </div>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6 mb-12">Why Choose Dreamwarez?</h2>
            <p className="text-slate-500 text-sm mb-8">
              We’re not just developers — we’re your strategic technology partner. Your success is our mission. Choosing the right technology partner can make all the difference.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
              {[
                "Cross-platform apps (iOS, Android, Web)",
                "Fully customizable & scalable solutions",
                "Rich graphics and real-time rendering",
                "Affordable development cycles",
                "End-to-end development and post-deployment support",
                "Dedicated Quality Assurance & Testing"
              ].map((text, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl flex gap-3 items-center shadow-xs reveal reveal-fade-up" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <svg className="w-5 h-5 text-[#8b2c2c] flex-shrink-0 rotate-45" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
                  </svg>
                  <span className="text-sm text-slate-750 font-semibold mt-0.5">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto z-10 relative">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 font-heading italic max-w-3xl mx-auto leading-relaxed">
              “We don’t just create AR/VR apps—we create unforgettable experiences.”
            </h2>
            <div className="mt-8">
              <a 
                href="/contact/" 
                className="bg-[#7a7a7a]  text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all inline-block hover:scale-[1.02] cursor-pointer"
              >
                Contact Us Today
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
