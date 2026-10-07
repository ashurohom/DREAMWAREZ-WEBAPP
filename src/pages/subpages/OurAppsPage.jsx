import React, { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import ourAppsBg from '../../assets/our_apps_3d.png';
import appReviews from '../../assets/app_reviews_clean.jpg';

const SectionLabel = ({ children, className = '', align = 'left' }) => {
  const isCentered = align === 'center';
  return (
    <div className={`inline-flex flex-col ${isCentered ? 'items-center' : 'items-start'} gap-1.5 ${className}`}>
      <span className="text-[#8B2C2C] font-bold text-[14px] uppercase tracking-widest">
        {children}
      </span>
      <div className="flex gap-1.5">
        <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
        <div className="w-4 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
      </div>
    </div>
  );
};

export function OurAppsPage() {
  const [appFilter, setAppFilter] = useState('All');

  const apps = [
    { name: 'Construction Quality App', slug: 'qualityconstruction-app', desc: 'Review site structures, quality checklists, and materials audit logs. Built for field inspectors and project managers.', category: 'Business' },
    { name: 'Android App', slug: 'android-app', desc: 'Premium, high-performance native Android apps designed by experts, optimized for scalability and performance.', category: 'Mobile' },
    { name: 'iOS App', slug: 'ios-app', desc: 'Elegant, modern native iOS applications for mobile and iPad devices. Crafted to maximize engagement.', category: 'Mobile' }
  ];

  const filteredApps = appFilter === 'All' ? apps : apps.filter(a => a.category === appFilter);

  return (
    <div className="app-container">
      
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Our Apps" />

      <main className="main-content">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-80px)] pt-8 pb-10 md:pt-10 md:pb-12 bg-white relative overflow-hidden flex items-center">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 w-full z-10" style={{ maxWidth: '1350px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column: Content */}
              <div className="text-left reveal reveal-fade-left relative">
                <div className="relative z-10">
                <SectionLabel className="mb-4" align="left">
                  Mobile Hub
                </SectionLabel>
                <h1 className="text-[50px] font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
                  Our <span style={{ color: '#7A7A7A' }}>Applications</span>
                </h1>
                <p className="text-lg md:text-xl text-black mt-4 font-semibold">
                  Explore Dreamwarez’s diverse range of innovative apps designed to boost productivity.
                </p>
                </div>
              </div>

              {/* Right Column: Hero Image */}
              <div className="flex justify-center md:justify-end reveal reveal-fade-right">
                <div 
                  className="w-full max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100" 
                  style={{ borderRadius: '24px' }}
                >
                  <img 
                    src={ourAppsBg} 
                    alt="Our Applications Showcase" 
                    className="w-full h-full object-cover" 
                    style={{ borderRadius: '16px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 max-w-[1350px] mx-auto text-center reveal reveal-fade-up">
          <SectionLabel>
            APPLICATIONS DIRECTORY
          </SectionLabel>
          <h2 className="text-[40px] text-black font-heading mt-6 max-w-6xl mx-auto leading-snug">
            Innovative Mobile & Web Applications designed to enhance user experience and drive business growth across industries.
          </h2>
          <p className="text-black text-[16px] max-w-6xl mx-auto mt-6 leading-relaxed">
            We build tailor-made mobile products and systems. Filter our showcase below to explore active development platforms.
          </p>
        </section>

        {/* Showcase Grid with Category Filters */}
        <section className="py-12 px-6 bg-white">
          <div className="mx-auto px-6" style={{ maxWidth: '1350px' }}>
            <div className="flex justify-center gap-4 mb-10 reveal reveal-fade-up">
              {['All', 'Mobile', 'Business'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setAppFilter(cat)}
                  className={`inline-flex items-center gap-2 px-5 py-2 text-[14px] font-bold rounded-full cursor-pointer transition-all border ${appFilter === cat ? 'bg-[#7A7A7A] border-[#7A7A7A] text-white shadow-lg hover:scale-105' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:scale-105 hover:shadow-sm'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApps.map((app, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#7A7A7A] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between min-h-[260px]"
                >
                  <div>
                    <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#8B2C2C] uppercase">
                      <span className="w-2 h-2 rounded-full bg-[#8B2C2C]" aria-hidden="true" />
                      <span className="w-2 h-2 rounded-full bg-[#7A7A7A]" aria-hidden="true" />
                      {app.category}
                    </span>
                    <h4 className="font-heading font-extrabold text-slate-800 text-[16px] mt-3">{app.name}</h4>
                    <p className="text-[14px] text-black mt-2 leading-relaxed">{app.desc}</p>
                  </div>
                  <div className="mt-6">
                    <a 
                      href={`/${app.slug}/`} 
                      className="inline-block bg-transparent border border-[#7A7A7A] text-[#7A7A7A] font-bold text-[14px] px-5 py-2.5 rounded-lg hover:bg-[#7A7A7A] hover:text-white transition-all cursor-pointer hover:scale-105"
                    >
                      Learn More ➔
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive App Store Review Section */}
        <section className="py-20" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1350px', position: 'relative', zIndex: 1 }}>
            <div className="reveal reveal-fade-left">
              <SectionLabel className="mb-4" align="left">
                USER FEEDBACK
              </SectionLabel>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-3 leading-tight">What Our Users Say</h2>
              <p className="text-black text-[16px] mt-4 leading-relaxed">
                We continuously iterate on user feedback to improve usability, deliver high-quality updates, and maintain high standards across all applications.
              </p>
            </div>

            <div className="reveal reveal-fade-right flex justify-center lg:justify-end">
              <div className="border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-[580px] w-full hover:scale-[1.03] transition-transform duration-500 overflow-hidden">
                <img src={appReviews} alt="Store Ratings Board" className="w-full h-auto rounded-xl block" />
              </div>
            </div>
          </div>
        </section>

      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}