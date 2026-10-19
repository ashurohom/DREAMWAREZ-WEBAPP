import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { Monitor, Shield, Settings, User, Plus, Heart, Home, DollarSign, ClipboardList, ThumbsUp, ArrowUp, Globe } from 'lucide-react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Import local assets
import coffeeDesk from '../../assets/coffee_desk.png';
import csIndConstruction from '../../assets/cs_industry_construction_elegant.png';
import csIndRetail from '../../assets/cs_industry_retail_elegant.png';
import csIndHealthcare from '../../assets/cs_industry_healthcare_elegant.png';
import csIndLogistics from '../../assets/cs_industry_logistics_elegant.png';
import csIndEducation from '../../assets/cs_industry_education_elegant.png';
import csIndFinance from '../../assets/cs_industry_finance_elegant.png';

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

const SectionLabel = ({ children, align = 'left' }) => {
  const isCentered = align === 'center';
  return (
    <div className={`inline-flex flex-col ${isCentered ? 'items-center' : 'items-start'} gap-1.5 mb-4`}>
      <span className="text-[#8B2C2C] font-semibold text-xs sm:text-sm uppercase tracking-wider font-heading leading-tight">
        {children}
      </span>
      <div className="flex gap-1.5">
        <div className="w-10 h-1.5 rounded-full bg-[#7A7A7A]"></div>
        <div className="w-4 h-1.5 rounded-full bg-[#7A7A7A]"></div>
      </div>
    </div>
  );
};

export function CustomSoftwarePage() {
  return (
    <div className="app-container software-theme-page min-h-screen flex flex-col bg-white overflow-x-hidden font-sans">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO 
        title="Custom Software Development Company | Bespoke Web Application Solutions"
        description="Dreamwarez is a premier custom software development company and web application development firm in Pune. We engineer scalable, secure, enterprise-grade software."
        keywords="Custom software development company, Custom web application development company, Software development company in Pune, Software development company, Bespoke software solutions"
        canonical="/customised-software-development/"
      />

      <main className="main-content flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 min-h-[auto] lg:min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up md:pr-6 text-center md:text-left items-center md:items-start">
              <SectionLabel>Bespoke Systems</SectionLabel>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-4 sm:mb-6 max-w-[700px]">
                Customized <span className="text-[#0EA5E9]">Software Development</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-[600px] mb-6 sm:mb-8">
                Empowering Businesses with Tailored Software Solutions
              </p>

              {/* Dual Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="/contact/#contact-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center"
                >
                  Start Project &rarr;
                </a>
                <a
                  href="#features"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold text-sm py-3.5 px-6 rounded-full border border-slate-200 shadow-xs hover:shadow transition-all cursor-pointer text-center"
                >
                  Core Features
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px]">
                <img 
                  src={coffeeDesk} 
                  alt="Customized Software Development" 
                  className="w-full h-auto object-contain rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50/50 border-b border-slate-100 text-center">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[850px] mx-auto reveal reveal-fade-up relative z-10">
            <SectionLabel align="center">TAILORED SOLUTIONS</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-4 sm:mb-6 leading-tight">
              Why Choose Customized Software?
            </h2>
            <p className="text-sm sm:text-base md:text-[17px] text-slate-700 leading-relaxed max-w-3xl mx-auto">
              As a software company, we believe that every business is unique, and so are its challenges. That’s why we specialize in developing customized software solutions designed to address your specific needs, streamline your operations, and drive sustainable growth.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <SectionLabel align="center">CORE CAPABILITIES</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                Features
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {[
                {
                  id: '01',
                  title: 'Tailored for Your Business',
                  desc: 'Unlike off-the-shelf software, our solutions are designed to integrate seamlessly with your workflows, ensuring maximum efficiency and minimal disruption.'
                },
                {
                  id: '02',
                  title: 'Enhanced Flexibility',
                  desc: 'Your business is dynamic, and so should your software be. Our custom solutions adapt to your growth and changing requirements.'
                },
                {
                  id: '03',
                  title: 'Cost-Efficiency',
                  desc: 'With a focus on delivering value, we ensure that you pay for only the features you need, avoiding unnecessary extras that come with generic software.'
                },
                {
                  id: '04',
                  title: 'Improved Security',
                  desc: 'We implement robust security measures tailored to your industry’s needs, keeping your sensitive data safe and compliant with regulations.'
                },
                {
                  id: '05',
                  title: 'Scalable Architecture',
                  desc: 'Whether you’re a startup or an established enterprise, our software solutions grow with you, supporting your journey to success.'
                },
                {
                  id: '06',
                  title: 'Seamless Integration',
                  desc: 'We design custom software to fit directly into your existing ecosystem. Our solutions connect easily with your current databases, CRM, ERP, and API services.'
                }
              ].map((feature, idx) => (
                <div 
                  key={feature.id} 
                  className="bg-white border-[1.5px] border-[#1e3a8a] border-t-[4px] border-t-[#1e3a8a] rounded-2xl p-5 sm:p-6 shadow-sm reveal reveal-fade-up hover:shadow-md transition-shadow"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#8B2C2C] font-bold text-sm sm:text-base mb-4">
                    {feature.id}
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Development Process Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto text-center relative z-10">
            <SectionLabel align="center">WORKFLOW PATHWAY</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-8 sm:mb-12 leading-tight">
              Our Development Process
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: <NeedsIcon />,
                  title: 'Understanding Your Needs',
                  desc: 'We start by diving deep into your business, identifying pain points, and gathering insights to ensure the software aligns with your goals.'
                },
                {
                  icon: <DesignIcon />,
                  title: 'Design & Development',
                  desc: 'Our expert team combines innovation with technical expertise to design intuitive and feature-rich software tailored to your requirements.'
                },
                {
                  icon: <QAIcon />,
                  title: 'Testing & Quality Assurance',
                  desc: 'We leave no room for errors. Every solution undergoes rigorous testing to ensure flawless performance and user satisfaction.'
                },
                {
                  icon: <DeployIcon />,
                  title: 'Deployment & Support',
                  desc: 'From smooth implementation to ongoing support, we’re with you every step of the way, ensuring your software continues to perform at its best.'
                }
              ].map((step, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center text-center reveal reveal-fade-up p-5 sm:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-50 flex items-center justify-center mb-5 border border-slate-200/60 shadow-xs">
                    {step.icon}
                  </div>
                  <h3 className="font-heading font-bold text-slate-800 text-base sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-[1350px] mx-auto text-center">
            <SectionLabel align="center">INDUSTRIES SERVED</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-3 sm:mb-4 leading-tight">
              Industries We have Served for
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-12">
              Our customized software solutions cater to a wide range of industries
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {[
                { title: 'Construction', img: csIndConstruction },
                { title: 'Retail & E-commerce', img: csIndRetail },
                { title: 'Healthcare', img: csIndHealthcare },
                { title: 'Logistics & Supply Chain', img: csIndLogistics },
                { title: 'Education', img: csIndEducation },
                { title: 'Finance & Accounting', img: csIndFinance }
              ].map((ind, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border-[1px] border-t-[4px] border-[#1e3a8a] rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center gap-3 shadow-xs hover:shadow-md transition-shadow reveal reveal-fade-up"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <img src={ind.img} alt={ind.title} className="w-28 h-28 sm:w-36 sm:h-36 object-contain" />
                  <h4 className="font-heading text-slate-800 text-sm sm:text-base font-bold mt-1">
                    {ind.title}
                  </h4>
                </div>
              ))}
            </div>

            <p className="text-slate-700 text-sm sm:text-base mt-10 sm:mt-14 max-w-3xl mx-auto leading-relaxed reveal reveal-fade-up">
              Beyond these industries, we serve businesses across diverse sectors by delivering innovative, scalable, and customized software solutions tailored to their unique requirements.
            </p>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[900px] mx-auto p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50/50 shadow-sm flex flex-col items-center gap-4 sm:gap-6 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
              Your business deserves a solution as unique as you are. Let’s build it together!
            </h2>
            <div className="mt-2 w-full sm:w-auto">
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