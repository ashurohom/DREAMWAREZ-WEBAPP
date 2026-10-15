import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import aboutHeroBg from '../../assets/about_hero_bg.png';
import whoWeAreTeam from '../../assets/who_we_are_team.png';



export function AboutUsPage() {

  return (
    <div className="app-container">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="About Us" />

      <main className="main-content">
        {/* Hero Section */}
        <section className="min-h-[auto] lg:min-h-[calc(100vh-80px)] flex items-center py-10 sm:py-14 md:py-16 lg:py-20 bg-white relative overflow-hidden border-b border-slate-100">
          {/* Background Texture & Patterns */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Top Right Blue Shape */}
            <div 
              className="absolute top-0 right-0 w-full h-full" 
              style={{ 
                background: 'linear-gradient(to bottom left, rgba(147, 196, 253, 0.5) 0%, transparent 70%)',
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

          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-10">
            {/* Left Content */}
            <div className="md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up pr-0 md:pr-6 lg:pr-8">
              {/* Subtitle */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  <span className="font-bold">OUR</span> IDENTITY
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[2.5px] sm:h-[3px] w-10 sm:w-12 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[2.5px] sm:h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-slate-900 font-heading mb-4 sm:mb-6 max-w-[700px]">
                About <span className="text-[#0EA5E9]">Us</span>
              </h1>

              {/* Paragraph */}
              <div className="space-y-3.5 sm:space-y-4 max-w-[600px]">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed">
                  Our mission is to impact the lives touched by technology, and empower businesses to realize their ambitious goals through custom digital innovation.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Dreamwarez Software is a technology-driven company specializing in custom software development, web and mobile applications, cloud solutions, and enterprise IT consulting. Our experienced team combines innovation, technical expertise, and a customer-first approach to deliver secure, scalable, and high-performing solutions that help businesses succeed in the digital age.
                </p>
              </div>

              {/* Action CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="/contact/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center"
                >
                  Contact Us &rarr;
                </a>
                <a
                  href="/about-us/team-dreamwarez/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold text-sm py-3.5 px-6 rounded-full border border-slate-200 shadow-xs hover:shadow transition-all cursor-pointer text-center"
                >
                  Meet Our Team
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 mt-6 sm:mt-8 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left w-full">
              <div className="relative w-full max-w-[550px]">
                {/* Rounded Image */}
                <div className="w-full aspect-[4/3] bg-slate-100 relative rounded-2xl sm:rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
                  <img 
                    src={aboutHeroBg} 
                    alt="About Us" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Intro Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 max-w-[1350px] mx-auto reveal reveal-fade-up">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-12 lg:gap-16">
            
            {/* Left Content Column */}
            <div className="w-full md:w-1/2 text-left reveal reveal-fade-right">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-xs sm:text-[14px] font-bold tracking-widest text-[#8B2C2C] uppercase relative">
                  WHO WE ARE
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[2.5px] sm:h-[3px] w-10 sm:w-12 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[2.5px] sm:h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold text-slate-800 font-heading mt-4 sm:mt-6 leading-tight">
                Who We Are?
              </h2>
              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-slate-700 text-sm sm:text-base font-normal leading-relaxed text-left">
                <p>
                  Dreamwarez has a complete suite of business applications covering all business needs, from Website/e-commerce down to manufacturing, inventory and accounting, all seamlessly integrated.
                </p>
                <p>
                  Our mission is to Create Technological tools, that empower people, free them to express their greatest potential and get out of the way by just working, disappearing out of sight.
                </p>
                <p>
                  Our core values attract and unite individuals focused on building a stable, desirable work environment and providing exceptional solutions we are proud of.
                </p>
              </div>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center">
                <a
                  href="/contact/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-8 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center group"
                >
                  <span>Contact Us</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="w-full md:w-1/2 relative group reveal reveal-fade-left">
              {/* Decorative backgrounds */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl sm:rounded-3xl blur-2xl group-hover:bg-blue-600/20 transition-all duration-500 transform translate-y-3 sm:translate-y-4 translate-x-3 sm:translate-x-4"></div>
              
              <img 
                src={whoWeAreTeam} 
                alt="Dreamwarez Software Team" 
                className="w-full h-auto aspect-[4/3.5] object-cover rounded-2xl sm:rounded-3xl shadow-xl relative z-10 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            </div>

          </div>
        </section>

        {/* Company Overview Details */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 reveal reveal-fade-up border-y border-slate-100 relative overflow-hidden">
          {/* Background Texture & Patterns */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Top Right Blue Shape */}
            <div 
              className="absolute top-0 right-0 w-full h-full" 
              style={{ 
                background: 'linear-gradient(to bottom left, rgba(147, 197, 253, 0.25) 0%, transparent 70%)',
                clipPath: 'polygon(20% 0, 100% 0, 100% 80%)' 
              }} 
            />
            {/* Bottom Left #8ACAC0 Shape */}
            <div 
              className="absolute bottom-0 left-0 w-full h-full" 
              style={{ 
                background: 'linear-gradient(to top right, rgba(138, 202, 192, 0.35) 0%, transparent 70%)',
                clipPath: 'polygon(0 20%, 80% 100%, 0 100%)' 
              }} 
            />
          </div>
          <div className="max-w-[1350px] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 items-stretch reveal reveal-fade-up">
              {/* Left Side: About Text */}
              <div className="lg:w-1/2 w-full">
                <h2 className="font-heading font-extrabold text-slate-800 text-xl sm:text-2xl md:text-[28px] lg:text-[32px] mb-6 sm:mb-8 leading-tight capitalize text-left">
                  Leading Software Development Company In Pune
                </h2>
                <div className="space-y-4 sm:space-y-6 text-slate-600 text-sm sm:text-base md:text-[17px] leading-relaxed text-left">
                  <p>
                    Dreamwarez is a trusted software development company in Pune providing innovative digital solutions for startups, enterprises, and growing businesses. Our expert team specializes in custom software development, mobile application development, enterprise ERP solutions, and advanced digital transformation services.
                  </p>
                  <p>
                    We help businesses automate processes, improve operational efficiency, and scale faster through powerful technology solutions. From web applications to AI-driven platforms, our goal is to deliver secure, scalable, and user-friendly software that drives real business growth.
                  </p>
                  <p>
                    With a customer-centric approach and modern technologies, Dreamwarez empowers companies to innovate, optimize workflows, and achieve long-term digital success.
                  </p>
                </div>
              </div>

              {/* Right Side: Services List */}
              <div className="lg:w-1/2 w-full flex flex-col">
                <h3 className="font-heading font-extrabold text-slate-800 text-xl sm:text-2xl md:text-[28px] lg:text-[32px] mb-6 sm:mb-8 leading-tight capitalize">
                  Our services include:
                </h3>
                <div className="flex flex-col justify-between flex-1 gap-3 sm:gap-4">
                  {[
                    "Custom Web Application Development",
                    "Mobile App Development (Android & iOS)",
                    "ERP & CRM Development",
                    "AR/VR Application Development",
                    "Digital Marketing & SEO Services",
                    "Cloud-Based Business Solutions"
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all group cursor-default">
                      <div className="text-[#0EA5E9] shrink-0 transform group-hover:translate-x-1 transition-transform">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5 4L20 12L5 20L10 12Z" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-semibold text-xs sm:text-sm md:text-[15px]">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team teaser */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 reveal reveal-fade-left bg-white text-slate-900 border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <span className="text-xs sm:text-[14px] font-bold tracking-widest text-[#8B2C2C] uppercase relative">
                TEAM DREAMWAREZ
                <span className="absolute -bottom-2 left-0 flex gap-1.5">
                  <span className="h-[2.5px] sm:h-[3px] w-10 sm:w-12 bg-[#7A7A7A] rounded-full"></span>
                  <span className="h-[2.5px] sm:h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                </span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold font-heading mb-3 sm:mb-4 text-slate-900 leading-tight">
              Meet The People Behind Dreamwarez
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              We want to devote a dedicated page to the main driving force behind Dreamwarez: the people who design, build, support, and lead our software work.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center">
              <a
                href="/about-us/team-dreamwarez/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-8 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center group"
              >
                <span>Explore Team Dreamwarez</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Mission fuels section with image */}
        <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12 max-w-[1350px] mx-auto relative overflow-hidden border-2 border-blue-200 rounded-2xl sm:rounded-3xl mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20 bg-white reveal reveal-fade-up shadow-sm">
          {/* Background Texture & Patterns */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Top Right Blue Shape */}
            <div 
              className="absolute top-0 right-0 w-full h-full" 
              style={{ 
                background: 'linear-gradient(to bottom left, rgba(147, 197, 253, 0.25) 0%, transparent 70%)',
                clipPath: 'polygon(20% 0, 100% 0, 100% 80%)' 
              }} 
            />
            {/* Bottom Left #8ACAC0 Shape */}
            <div 
              className="absolute bottom-0 left-0 w-full h-full" 
              style={{ 
                background: 'linear-gradient(to top right, rgba(138, 202, 192, 0.35) 0%, transparent 70%)',
                clipPath: 'polygon(0 20%, 80% 100%, 0 100%)' 
              }} 
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-20 relative z-10">
            <div className="flex-1 lg:max-w-xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2 sm:mb-3">
                <span className="text-xs sm:text-[14px] font-bold tracking-widest text-[#8B2C2C] uppercase relative">
                  OUR MISSION
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[2.5px] sm:h-[3px] w-10 sm:w-12 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[2.5px] sm:h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold text-slate-800 font-heading mt-2.5 sm:mt-3 leading-tight">
                Our mission fuels our actions.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed">
                Everything we do is linked to our mission of making an extraordinary impact on our clients, colleagues, and communities. It permeates how we spend our time, our resources, and our talents.
              </p>
            </div>
            <div className="shrink-0 w-full lg:w-auto flex justify-center">
              <div className="border border-slate-200 p-1.5 rounded-xl sm:rounded-2xl bg-white shadow-sm w-full max-w-[380px]">
                <img src="https://dreamwarez.in/wp-content/uploads/2020/07/furniture.jpg" alt="Our mission fuels our actions" className="w-full aspect-[4/3] object-cover rounded-lg sm:rounded-xl" />
              </div>
            </div>
          </div>
        </section>



       
      </main>

      <ChatWidget />
      <SiteFooter variant="black" />
    </div>
  );
}






