import React, { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

const ClipboardCheck = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"/><path d="m9 14 2 2 4-4"/></svg>);
const Bug = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M17.47 9c1.93-.2 3.53-1.9 3.53-4"/><path d="M8 14H4"/><path d="M20 14h-4"/><path d="M16 18c1.5 0 3.5-1.5 3.5-3.5"/><path d="M8 18c-1.5 0-3.5-1.5-3.5-3.5"/></svg>);
const FolderOpen = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M12 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-3"/><path d="M2 13h15.2a2 2 0 0 0 1.9-1.3l2.8-7.7A2 2 0 0 0 20 2H12l-2 2"/></svg>);
const ListTodo = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="6" height="6" rx="1"/><path d="m3 17 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/></svg>);
const ShieldCheck = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.92 0 5.14.86 7 2a1 1 0 0 1 1 1v7z"/><path d="m9 12 2 2 4-4"/></svg>);
const TrendingUp = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>);
const MinusCircle = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" x2="16" y1="12" y2="12"/></svg>);
const MessageCircle = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>);
const BarChart2 = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>);

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

// Import local assets
import warehouseReporting from '../../assets/warehouse_reporting.png';
import mrpScheduling from '../../assets/mrp_scheduling.png';
import warehouseDoubleEntry from '../../assets/warehouse_double_entry.png';
import purchaseControl from '../../assets/purchase_control.png';
import accountingInvoicing from '../../assets/accounting_invoicing.png';
import workspaceHands from '../../assets/workspace_hands.png';
import mrpAnalytics from '../../assets/mrp_analytics.png';
import teamMeeting from '../../assets/team_meeting.png';
import tabletGraphs from '../../assets/tablet_graphs.png';
import constructionHeroImg from '../../assets/construction_hero.jpg';

export function QualityConstructionPage() {
  const [showSimulator, setShowSimulator] = useState(false);
  const [checklist, setChecklist] = useState([
    { id: 1, task: 'ASTM C39 Concrete Compressive Strength Test', status: 'Pending' },
    { id: 2, task: 'Foundation Reinforcement Bars Rebar Spacing', status: 'Passed' },
    { id: 3, task: 'Scaffolding Safety Harnesses & Anchorage', status: 'Pending' },
    { id: 4, task: 'Electrical Main Grounding & Conduits Check', status: 'Passed' },
    { id: 5, task: 'High-Pressure Hydrostatic Plumbing Test', status: 'Pending' }
  ]);

  const toggleCheck = (id) => {
    setChecklist(checklist.map(item => {
      if (item.id === id) {
        const nextStatus = item.status === 'Passed' ? 'Failed' : item.status === 'Failed' ? 'Pending' : 'Passed';
        return { ...item, status: nextStatus };
      }
      return item;
    }));
  };

  const totalPassed = checklist.filter(c => c.status === 'Passed').length;
  const progressPercent = Math.round((totalPassed / checklist.length) * 100);

  return (
    <div className="app-container open-sans-scope">
      
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Quality Construction App" />

      <main className="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-53 md:pb-28 bg-white relative overflow-hidden flex items-center">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom--0 right-0 w-full h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 w-full z-10" style={{ maxWidth: '1350px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column: Content */}
              <div className="text-left reveal reveal-fade-left">
                <SectionLabel className="mb-4" align="left">
                  Quality Inspections
                </SectionLabel>
                <h1 className="text-[40px] md:text-[50px] font-extrabold text-slate-900 font-heading tracking-tight leading-tight mb-6 md:whitespace-nowrap">
                  Construction <span className="text-[#7A7A7A]">Quality App</span>
                </h1>
                <p className="text-[16px] text-black font-normal leading-relaxed mb-0 max-w-lg" style={{ fontFamily: '"Open Sans", sans-serif' }}>
                  Revolutionize Your Construction Projects with Dreamwarez Quality App. Streamline operations, manage compliance, and ensure high quality delivery.
                </p>
              </div>

              {/* Right Column: Hero Image Card */}
              <div className="flex justify-center md:justify-end reveal reveal-fade-right">
                <div 
                  className="w-full max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100" 
                  style={{ borderRadius: '24px' }}
                >
                  <img 
                    src={constructionHeroImg} 
                    alt="Construction Quality" 
                    className="w-full h-full object-cover" 
                    style={{ borderRadius: '24px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro / Vision Section */}
        <section className="py-20 max-w-[1350px] mx-auto text-center reveal reveal-fade-up">
          <SectionLabel>
            COMPLIANCE DIGITIZATION
          </SectionLabel>
          <p className="text-black text-[16px] max-w-6xl mx-auto mt-6 leading-relaxed">
            We understand the challenges construction professionals face—managing quality, ensuring compliance, and staying on schedule.
          </p>
          <p className="text-black text-[16px] max-w-8xl mx-auto mt-4 leading-relaxed">
            Our Construction Quality App is designed to empower builders, engineers, and site managers with cutting-edge technology to streamline operations, enhance productivity, and ensure impeccable project delivery.
          </p>
        </section>

        {/* Features List Section */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="mx-auto px-6 text-center" style={{ maxWidth: '1350px' }}>
            <SectionLabel>
              PLATFORM FEATURES
            </SectionLabel>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6 mb-12">Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up">
                <div className="flex justify-center p-8 border border-slate-100 rounded-xl bg-red-50 mb-4 text-[#8B2C2C] transition-transform hover:scale-105">
                  <ClipboardCheck size={64} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Real-Time Quality Inspections</h3>
                <p className="text-black text-[14px] mt-3 leading-relaxed">
                  Conduct inspections on the go with intuitive checklists and real-time reporting to ensure all tasks meet quality benchmarks.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center p-8 border border-slate-100 rounded-xl bg-red-50 mb-4 text-[#8B2C2C] transition-transform hover:scale-105">
                  <Bug size={64} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Issue Tracking & Resolution</h3>
                <p className="text-black text-[14px] mt-3 leading-relaxed">
                  Identify defects or deviations, assign tasks to team members, and track resolution progress effortlessly.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center p-8 border border-slate-100 rounded-xl bg-red-50 mb-4 text-[#8B2C2C] transition-transform hover:scale-105">
                  <FolderOpen size={64} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Document Management</h3>
                <p className="text-black text-[14px] mt-3 leading-relaxed">
                  Store blueprints, certifications, and reports in a centralized, cloud-based repository for easy access.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up">
                <div className="flex justify-center p-8 border border-slate-100 rounded-xl bg-red-50 mb-4 text-[#8B2C2C] transition-transform hover:scale-105">
                  <ListTodo size={64} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Customizable Checklists</h3>
                <p className="text-black text-[14px] mt-3 leading-relaxed">
                  Tailor inspection checklists to suit project-specific requirements, ensuring no detail is overlooked.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center p-8 border border-slate-100 rounded-xl bg-red-50 mb-4 text-[#8B2C2C] transition-transform hover:scale-105">
                  <ShieldCheck size={64} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Compliance & Standards</h3>
                <p className="text-black text-[14px] mt-3 leading-relaxed">
                  Maintain compliance with industry standards and regulations through automated alerts and seamless reporting.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center p-8 border border-slate-100 rounded-xl bg-red-50 mb-4 text-[#8B2C2C] transition-transform hover:scale-105">
                  <BarChart2 size={64} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Analytics & Reporting</h3>
                <p className="text-black text-[14px] mt-3 leading-relaxed">
                  Generate comprehensive quality reports, track performance metrics, and gain actionable insights to improve project quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expectation Benefits */}
        <section className="py-20 bg-white">
          <div className="mx-auto px-6 text-center" style={{ maxWidth: '1350px' }}>
            <SectionLabel>
              EXPECTED YIELD
            </SectionLabel>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6 mb-12">What can you expect?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up">
                <div className="flex justify-center p-6 bg-white border border-slate-100 rounded-xl mb-4 text-[#8B2C2C] transition-transform hover:scale-105">
                  <TrendingUp size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Boost Productivity</h3>
                <p className="text-black text-[14px] mt-2 leading-relaxed">
                  Reduce manual tasks and focus on what truly matters—building excellence.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center p-6 bg-white border border-slate-100 rounded-xl mb-4 text-[#8B2C2C] transition-transform hover:scale-105">
                  <MinusCircle size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Reduce Errors</h3>
                <p className="text-black text-[14px] mt-2 leading-relaxed">
                  Detect and address issues early to avoid costly rework.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center p-6 bg-white border border-slate-100 rounded-xl mb-4 text-[#8B2C2C] transition-transform hover:scale-105">
                  <MessageCircle size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Improve Communication</h3>
                <p className="text-black text-[14px] mt-2 leading-relaxed">
                  Foster seamless collaboration between teams with real-time updates.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '300ms' }}>
                <div className="flex justify-center p-6 bg-white border border-slate-100 rounded-xl mb-4 text-[#8B2C2C] transition-transform hover:scale-105">
                  <BarChart2 size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Data-Driven Decisions</h3>
                <p className="text-black text-[14px] mt-2 leading-relaxed">
                  Utilize analytics to gain insights into performance and improve future projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto px-6 text-center reveal reveal-fade-up" style={{ maxWidth: '1350px' }}>
            <SectionLabel>
              TAILORED FOR PROFESSIONALS
            </SectionLabel>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Tailored for Every Construction Professional</h2>
            <p className="text-black text-[16px] max-w-3xl mx-auto mt-4 leading-relaxed">
              Whether you're an engineer, project manager, or site inspector, our app adapts to your workflow, making your construction journey smoother and more efficient.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="mx-auto px-6 z-10 relative" style={{ maxWidth: '1350px' }}>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading tracking-tight">
              Ready to Elevate Your Construction Quality?
            </h2>
            <p className="text-black text-[16px] max-w-xl mx-auto mt-4 leading-relaxed">
              Embrace innovation with Dreamwarez Construction Quality App and take the first step towards transforming your construction processes.
            </p>
            <div className="mt-8">
              <a 
                href="/contact/" 
                className="bg-[#7A7A7A] hover:bg-[#616161] text-white font-bold text-[16px] px-8 py-3.5 rounded-lg shadow-lg hover:shadow-gray-500/20 transition-all inline-block hover:scale-[1.02] cursor-pointer"
              >
                We're Here for You – Reach Out Today!
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