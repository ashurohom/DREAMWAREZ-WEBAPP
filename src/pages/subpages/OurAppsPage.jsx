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
    { 
      name: 'DW Attendance App', 
      slug: 'dw-attendance-app', 
      desc: 'All-in-one employee management app that lets you track attendance, manage tasks, and handle leave requests effortlessly with real-time updates and accurate reporting.', 
      category: 'Business' 
    },
    { 
      name: 'Construction Quality App', 
      slug: 'qualityconstruction-app', 
      desc: 'Review site structures, quality checklists, and materials audit logs. Built for field inspectors and project managers.', 
      category: 'Business' 
    },
    { 
      name: 'Customize Android App', 
      slug: 'android-app', 
      desc: 'Premium, high-performance native Android apps designed by experts, optimized for scalability and performance.', 
      category: 'Mobile' 
    },
    { 
      name: 'Customize IOS App', 
      slug: 'ios-app', 
      desc: 'Elegant, modern native iOS applications for mobile and iPad devices. Crafted to maximize engagement.', 
      category: 'Mobile' 
    }
  ];

  const filteredApps = appFilter === 'All' ? apps : apps.filter(a => a.category === appFilter);

  return (
    <div className="app-container">
      
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Our Apps" />

      <main className="main-content">
        {/* Hero Section */}
        <section className="min-h-[auto] lg:min-h-[calc(100vh-80px)] pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 bg-white relative overflow-hidden flex items-center">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column: Content */}
              <div className="text-left reveal reveal-fade-left relative">
                <div className="relative z-10">
                  <SectionLabel className="mb-4" align="left">
                    Mobile Hub
                  </SectionLabel>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
                    Our <span className="text-[#0EA5E9]">Applications</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-slate-800 mt-3 sm:mt-4 font-semibold leading-relaxed">
                    Explore Dreamwarez’s diverse range of innovative apps designed to boost productivity.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 mt-2 mb-6 sm:mb-8 max-w-lg">
                    From enterprise attendance to specialized construction inspection, native Android, and iOS solutions — discover the products we build to empower businesses.
                  </p>
                  {/* Hero Action CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <a
                      href="#apps-directory"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center"
                    >
                      Explore Applications &rarr;
                    </a>
                    <a
                      href="/contact/"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold text-sm py-3.5 px-6 rounded-full border border-slate-200 shadow-xs hover:shadow transition-all cursor-pointer text-center"
                    >
                      Request Custom App
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Image */}
              <div className="flex justify-center md:justify-end reveal reveal-fade-right mt-4 md:mt-0">
                <div 
                  className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100 rounded-2xl sm:rounded-3xl"
                >
                  <img 
                    src={ourAppsBg} 
                    alt="Our Applications Showcase" 
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-[1350px] mx-auto text-center reveal reveal-fade-up">
          <SectionLabel align="center">
            APPLICATIONS DIRECTORY
          </SectionLabel>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 font-heading mt-4 sm:mt-6 max-w-5xl mx-auto leading-snug">
            Innovative Mobile &amp; Web Applications designed to enhance user experience and drive business growth across industries.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            We build tailor-made mobile products and systems. Filter our showcase below to explore active development platforms.
          </p>
        </section>

        {/* Showcase Grid with Category Filters */}
        <section id="apps-directory" className="scroll-mt-20 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-[1350px] mx-auto">
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-8 sm:mb-10 reveal reveal-fade-up">
              {['All', 'Mobile', 'Business'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setAppFilter(cat)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-full cursor-pointer transition-all border ${appFilter === cat ? 'bg-[#0EA5E9] border-[#0EA5E9] text-white shadow-md hover:scale-105' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:scale-105 hover:shadow-xs'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredApps.map((app, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xs hover:shadow-xl hover:border-[#0EA5E9]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-[#8B2C2C] uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-[#8B2C2C]" aria-hidden="true" />
                      <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" aria-hidden="true" />
                      {app.category}
                    </span>
                    <h4 className="font-heading font-extrabold text-slate-800 text-base sm:text-lg mt-3">{app.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{app.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a 
                      href={`/${app.slug}/`} 
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-full shadow-[0_4px_12px_rgba(14,165,233,0.2)] transition-all cursor-pointer text-center"
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
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 border-y border-slate-100">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-left text-left">
              <SectionLabel className="mb-4" align="left">
                USER FEEDBACK
              </SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-3 leading-tight">What Our Users Say</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed">
                We continuously iterate on user feedback to improve usability, deliver high-quality updates, and maintain high standards across all applications.
              </p>
            </div>

            <div className="reveal reveal-fade-right flex justify-center lg:justify-end">
              <div className="border border-slate-200/80 p-2 sm:p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-[580px] w-full hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <img src={appReviews} alt="Store Ratings Board" className="w-full h-auto rounded-xl block" />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto z-10 relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading tracking-tight leading-tight">
              Ready to Build Your Next Mobile App?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed">
              Partner with Dreamwarez to design, build, and deploy high-performance applications for your business.
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center">
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