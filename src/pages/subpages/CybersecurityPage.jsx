import React, { useState, useEffect } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import cybersecurity3dShield from '../../assets/cybersecurity_hero.png';
import cyberHeroBg from '../../assets/cyber_hero_bg.png';
import erpHeroBgNew from '../../assets/erp_hero_bg.png';
import coffeeDesk from '../../assets/coffee_desk.png';
import teamMeeting from '../../assets/team_meeting.png';
import alertsDashboard from '../../assets/alerts_dashboard_ui.png';
import sofaLaptop from '../../assets/sofa_laptop.png';
import accountingInvoice from '../../assets/accounting_invoice_moderate.png';
import cyberHeroIsometric from '../../assets/cyber_hero_isometric.png';
import cyberHeroDark from '../../assets/cyber_hero_dark.jpg';

export function CybersecurityPage() {
  return (
    <div className="app-container">
      
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Cybersecurity & Digital Forensics" />

      <main className="main-content">
        {/* Hero Section */}
        <section className="min-h-[auto] lg:min-h-[calc(100vh-80px)] flex items-center pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 bg-white relative overflow-hidden">
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
          <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
               {/* Left Column: Content */}
               <div className="text-left reveal reveal-fade-left md:col-span-7">
                 <div className="mb-4">
                   <span className="text-xs sm:text-[14px] font-bold uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2" style={{ color: '#8b2c2c' }}>
                     Security Solutions
                   </span>
                   <div className="flex gap-2">
                     <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                     <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
                   </div>
                 </div>
                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
                   Cybersecurity & <br className="hidden md:inline" /> <span className="text-[#0EA5E9]">Digital Forensics Services</span>
                 </h1>
                 <p className="text-base sm:text-lg text-slate-800 mt-3 sm:mt-4 font-semibold">
                   Protect. Prevent. Respond.
                 </p>
                 <p className="animate-subtitle text-sm sm:text-base leading-[1.625] text-slate-600 max-w-[42rem] mt-3 sm:mt-4 mb-6 sm:mb-8 font-['Open_Sans',sans-serif]">
                   Security isn't just an option—it's a necessity. We build resilient defenses to protect your sensitive information and keep your business running securely.
                 </p>
                 {/* Hero CTAs */}
                 <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                   <a
                     href="/contact/"
                     className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center"
                   >
                     Request Security Audit &rarr;
                   </a>
                   <a
                     href="#digital-forensics"
                     className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold text-sm py-3.5 px-6 rounded-full border border-slate-200 shadow-xs hover:shadow transition-all cursor-pointer text-center"
                   >
                     Forensics Services
                   </a>
                 </div>
               </div>

               {/* Right Column: Image */}
               <div className="flex justify-center md:justify-end reveal reveal-fade-right md:col-span-5 mt-4 md:mt-0">
                 <div className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[450px]">
                   <img 
                     src={cyberHeroDark} 
                     alt="Cybersecurity & Digital Forensics" 
                     className="w-full aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-xl" 
                   />
                 </div>
               </div>
             </div>
          </div>
        </section>


        {/* Cybersecurity Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading reveal reveal-fade-up">Cybersecurity & Digital Forensics</h2>
              <h3 className="text-slate-800 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-3 sm:mt-4 leading-relaxed font-bold reveal reveal-fade-up" style={{ transitionDelay: '100ms' }}>
                Building A Safer Digital World, One Layer At A Time.
              </h3>
              
              <div className="text-slate-600 text-sm sm:text-[15px] max-w-5xl mx-auto mt-6 sm:mt-8 space-y-4 sm:space-y-6 leading-relaxed text-left reveal reveal-fade-up" style={{ transitionDelay: '200ms' }}>
                <p>
                  In today's ever-evolving digital landscape, cyber threats are more sophisticated, frequent, and damaging than ever before. At Dreamwarez, we believe security is not an option—it's a necessity.
                </p>
                <p>
                  Whether you're a small startup, an enterprise, or a government body, your data, systems, and privacy must be protected against cyberattacks, breaches, malware, and insider threats. That's why we offer comprehensive, customizable Cybersecurity and Digital Forensics services tailored to your unique infrastructure.
                </p>
                <p>
                  Our goal is simple: To proactively protect your organization, respond effectively to incidents, and empower you to operate without fear.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-16">
              {/* Card 1: Penetration Testing */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all reveal reveal-fade-up flex flex-col overflow-hidden">
                <div className="h-36 sm:h-40 relative overflow-hidden">
                  <img src={cyberHeroBg} alt="Penetration Testing" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 sm:p-5 text-center flex-1 flex flex-col justify-start">
                  <h3 className="text-[15px] sm:text-base font-bold text-slate-800 font-heading mb-2 sm:mb-3">Penetration Testing (Ethical Hacking)</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    We simulate real-world cyberattacks to uncover vulnerabilities before malicious actors do. Our ethical hackers perform black-box, white-box, and grey-box penetration tests on:
                    <br/><br/>
                    Web & mobile applications, Networks & infrastructure, IoT and cloud platforms.
                  </p>
                </div>
              </div>

              {/* Card 2: Network & Endpoint Security */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all reveal reveal-fade-up flex flex-col overflow-hidden" style={{ transitionDelay: '300ms' }}>
                <div className="h-36 sm:h-40 relative overflow-hidden">
                  <img src={erpHeroBgNew} alt="Network & Endpoint Security" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 sm:p-5 text-center flex-1 flex flex-col justify-start">
                  <h3 className="text-[15px] sm:text-base font-bold text-slate-800 font-heading mb-2 sm:mb-3">Network & Endpoint Security</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Secure every node in your system—from servers to smartphones. We offer:
                    <br/><br/>
                    Intrusion detection & prevention systems (IDS/IPS), Next-gen firewalls configuration, Zero Trust Architecture, Secure access protocols.
                  </p>
                </div>
              </div>

              {/* Card 3: Email Security */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all reveal reveal-fade-up flex flex-col overflow-hidden" style={{ transitionDelay: '600ms' }}>
                <div className="h-36 sm:h-40 relative overflow-hidden">
                  <img src={coffeeDesk} alt="Email Security & Phishing Protection" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 sm:p-5 text-center flex-1 flex flex-col justify-start">
                  <h3 className="text-[15px] sm:text-base font-bold text-slate-800 font-heading mb-2 sm:mb-3">Email Security & Phishing Protection</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Combat phishing, business email compromise (BEC), and ransomware threats with:
                    <br/><br/>
                    Advanced spam filters, Email encryption & authentication (SPF, DKIM, DMARC), Threat intelligence integrations.
                  </p>
                </div>
              </div>

              {/* Card 4: Audits & Compliance */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all reveal reveal-fade-up flex flex-col overflow-hidden" style={{ transitionDelay: '900ms' }}>
                <div className="h-36 sm:h-40 relative overflow-hidden">
                  <img src={teamMeeting} alt="Cybersecurity Audits & Compliance" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 sm:p-5 text-center flex-1 flex flex-col justify-start">
                  <h3 className="text-[15px] sm:text-base font-bold text-slate-800 font-heading mb-2 sm:mb-3">Cybersecurity Audits & Compliance</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Ensure your organization meets industry and government regulations like:
                    <br/><br/>
                    ISO 27001, GDPR, HIPAA, SOC 2. We perform thorough audits and guide you to full compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Forensics Services */}
        <section id="digital-forensics" className="scroll-mt-20 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-[1280px] mx-auto text-center">
            <div className="mb-4 inline-flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-xs sm:text-[14px] font-bold uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2" style={{ color: '#8b2c2c' }}>
                POST-INCIDENT FORENSICS
              </span>
              <div className="flex gap-2">
                <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-800 font-heading mt-3 sm:mt-6">Digital Forensics Services</h2>
            <h3 className="text-slate-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-3 sm:mt-4 leading-relaxed font-bold">
              When a cyber incident occurs, our Digital Forensics experts step in to analyze, contain, and trace the breach or attack.
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto mt-2 leading-relaxed">
              When a breach or cyber incident occurs, speed and precision are everything. Our digital forensics experts uncover the who, what, when, and how behind every incident.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
              <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-xs reveal reveal-fade-up">
                <div className="flex justify-center items-center mb-4 sm:mb-6 mx-auto">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#8b2c2c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h4 className="font-heading font-extrabold text-slate-800 text-[15px] sm:text-base">Incident Response & Breach Investigation</h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed">
                  Immediate on-site or remote investigation into cybersecurity events. We identify breach origins, mitigate active threats, and secure your infrastructure.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center items-center mb-4 sm:mb-6 mx-auto">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#8b2c2c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m-4-8.5v2m0 0l-2-2m2 2l2-2" />
                  </svg>
                </div>
                <h4 className="font-heading font-extrabold text-slate-800 text-[15px] sm:text-base">Data Recovery & Preservation</h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed">
                  Using advanced tools, we recover deleted or encrypted files, reconstruct compromised systems, and preserve digital evidence for legal or disciplinary action.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-xs reveal reveal-fade-up sm:col-span-2 lg:col-span-1" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center items-center mb-4 sm:mb-6 mx-auto">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#8b2c2c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-heading font-extrabold text-slate-800 text-[15px] sm:text-base">Legal & Regulatory Reporting</h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed">
                  Detailed forensic reports with clear timelines, evidence logs, and impact analysis to support legal proceedings, insurance claims, or internal audits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Dreamwarez Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100">
          <div className="max-w-[900px] mx-auto text-center">
            <div className="mb-4 inline-flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-xs sm:text-[14px] font-bold uppercase tracking-widest font-['Open_Sans',sans-serif] block mb-2" style={{ color: '#8b2c2c' }}>
                TRUST &amp; CERTIFICATIONS
              </span>
              <div className="flex gap-2">
                <span className="w-8 h-1 rounded-full bg-[#7a7a7a]"></span>
                <span className="w-3 h-1 rounded-full bg-[#7a7a7a]"></span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-800 font-heading mt-3 sm:mt-6 mb-8 sm:mb-12">Why Choose Dreamwarez?</h2>
            
            <div className="grid grid-cols-1 gap-3 sm:gap-4 text-left max-w-xl mx-auto">
              {[
                "Certified Cybersecurity Professionals (CEH, CISSP, CHFI)",
                "24/7 Threat Monitoring & Response Team",
                "Proven Track Record with Corporate and Government Clients",
                "Tools like Wireshark, FTK, EnCase, and Metasploit Framework",
                "100% Confidentiality and Data Integrity Guaranteed"
              ].map((text, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-3.5 sm:p-4 rounded-xl flex gap-3 items-center shadow-xs">
                  <svg className="w-5 h-5 text-[#8b2c2c] flex-shrink-0 rotate-45" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
                  </svg>
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold mt-0.5">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto z-10 relative">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-800 font-heading italic max-w-3xl mx-auto leading-relaxed">
              "You can’t control when a cyberattack happens. But with Dreamwarez, you can control how prepared you are."
            </h2>
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
