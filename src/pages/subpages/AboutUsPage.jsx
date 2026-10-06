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
        <section className="min-h-screen flex items-center pt-24 pb-12 md:pt-24 md:pb-16 bg-white relative overflow-hidden">
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

          <div className="max-w-[1350px] mx-25 px-6 flex flex-col md:flex-row items-center justify-between w-full relative z-10">
            {/* Left Content */}
            <div className="md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up pr-8">
              {/* Subtitle */}
              <div className="flex items-center gap-2 mb-8">
                <span className="text-xs font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  <span className="font-bold">OUR</span> IDENTITY
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[3px] w-12 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-12 max-w-[700px]">
                About <span className="text-[#7A7A7A]">Us</span>
              </h1>

              {/* Paragraph */}
              <div className="space-y-4 max-w-[600px]">
                <p className="text-lg text-black leading-relaxed">
                  Our mission is to impact the lives touched by technology. And help businesses to realize their goals through technology.
                </p>
                <p className="text-lg text-black leading-relaxed text-justify">
                  Dreamwarez Software is a technology-driven company specializing in custom software development, web and mobile applications, cloud solutions, and IT consulting. Our experienced team combines innovation, technical expertise, and a customer-first approach to deliver secure, scalable, and high-performing solutions that help businesses succeed in the digital age.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-end z-0 reveal reveal-fade-left">
              <div className="relative w-full max-w-[550px]">
                {/* Rounded Image */}
                <div className="w-full aspect-[4/3] bg-slate-100 relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
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
        <section className="py-24 px-6 max-w-[1350px] mx-auto reveal reveal-fade-up">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            
            {/* Left Content Column */}
            <div className="w-full md:w-1/2 text-left reveal reveal-fade-right">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[14px] font-bold tracking-widest text-[#8B2C2C] uppercase relative">
                  WHO WE ARE
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[3px] w-12 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>
              <h2 className="text-[46px] font-extrabold text-slate-800 font-heading mt-6 leading-tight">
                Who We Are?
              </h2>
              <div className="mt-8 space-y-6 text-black text-[16px] font-normal leading-relaxed text-left">
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
              <div className="mt-10">
                <a href="/contact/" className="inline-flex items-center gap-3 bg-[#7A7A7A] text-white font-bold text-[14px] px-8 py-4 rounded-xl shadow-lg shadow-[#7A7A7A]/30 hover:bg-[#5A5A5A] hover:scale-[1.02] transition-all duration-300 group">
                  contact us <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="w-full md:w-1/2 relative group reveal reveal-fade-left">
              {/* Decorative backgrounds */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-2xl group-hover:bg-blue-600/20 transition-all duration-500 transform translate-y-4 translate-x-4"></div>
              
              <img 
                src={whoWeAreTeam} 
                alt="Dreamwarez Software Team" 
                className="w-full h-auto aspect-[4/3.5] object-cover rounded-3xl shadow-xl relative z-10 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            </div>

          </div>
        </section>

        {/* Company Overview Details */}
        <section className="py-24 bg-slate-50 reveal reveal-fade-up border-y border-slate-100 relative overflow-hidden">
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
          <div className="max-w-[1350px] mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch reveal reveal-fade-up">
              {/* Left Side: About Text */}
              <div className="lg:w-1/2 w-full">
                <h2 className="font-heading font-extrabold text-slate-800 text-[24px] sm:text-[32px] mb-8 leading-tight capitalize text-left">
                  Leading Software Development Company In Pune
                </h2>
                <div className="space-y-6 text-black text-[18px] leading-relaxed text-left">
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
                <h3 className="font-heading font-extrabold text-slate-800 text-[24px] sm:text-[32px] mb-8 leading-tight capitalize">
                  Our services include:
                </h3>
                <div className="flex flex-col justify-between flex-1 gap-4">
                  {[
                    "Custom Web Application Development",
                    "Mobile App Development (Android & iOS)",
                    "ERP & CRM Development",
                    "AR/VR Application Development",
                    "Digital Marketing & SEO Services",
                    "Cloud-Based Business Solutions"
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#2D9E84]/40 transition-all group cursor-default">
                      <div className="text-[#8B2C2C] shrink-0 transform group-hover:translate-x-1 transition-transform">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5 4L20 12L5 20L10 12Z" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-semibold text-[15px]">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team teaser */}
        <section className="py-20 reveal reveal-fade-left bg-white text-slate-900">
          <div className="max-w-[1350px] mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-[14px] font-bold tracking-widest text-[#8B2C2C] uppercase relative">
                TEAM DREAMWAREZ
                <span className="absolute -bottom-2 left-0 flex gap-1.5">
                  <span className="h-[3px] w-12 bg-[#7A7A7A] rounded-full"></span>
                  <span className="h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                </span>
              </span>
            </div>
            <h2 className="text-[46px] font-extrabold font-heading mb-4 text-black">Meet The People Behind Dreamwarez</h2>
            <p className="text-black text-[16px] max-w-2xl mx-auto leading-relaxed">
              We want to devote a dedicated page to the main driving force behind Dreamwarez: the people who design, build, support, and lead our software work.
            </p>
            <div className="mt-10">
              <a href="/about-us/team-dreamwarezs/" className="inline-flex items-center gap-3 bg-[#7A7A7A] text-white font-bold text-[14px] px-8 py-4 rounded-xl shadow-lg shadow-[#7A7A7A]/30 hover:bg-[#5A5A5A] hover:scale-[1.02] transition-all duration-300 group">
                Explore Team Dreamwarez <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Mission fuels section with image */}
        <section className="py-16 px-6 lg:px-12 max-w-[1350px] mx-auto relative overflow-hidden border-2 border-blue-200 rounded-3xl mb-20 bg-white reveal reveal-fade-up">
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 relative z-10">
            <div className="flex-1 lg:max-w-xl">
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-bold tracking-widest text-[#8B2C2C] uppercase relative">
                  OUR MISSION
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[3px] w-12 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>
              <h2 className="text-[46px] font-extrabold text-slate-800 font-heading mt-3 leading-tight">Our mission fuels our actions.</h2>
              <p className="text-black text-[16px] mt-4 leading-relaxed">
                Everything we do is linked to our mission of making an extraordinary impact on our clients, colleagues, and communities. It permeates how we spend our time, our resources, and our talents.
              </p>
            </div>
            <div className="shrink-0">
              <div className="border border-slate-200 p-1.5 rounded-xl bg-white shadow-sm w-[300px] sm:w-[380px]">
                <img src="https://dreamwarez.in/wp-content/uploads/2020/07/furniture.jpg" alt="Our mission fuels our actions" className="w-full aspect-[4/3] object-cover rounded-lg" />
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