import React, { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import crmHeroPhoto from '../../assets/crm_hero_photo.jpg';
import salesDashboard from '../../assets/sales_dashboard.png';
import crmCalendar from '../../assets/crm_calendar.jpg';

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

export function CrmPage() {
  const [crmActiveTab, setCrmActiveTab] = useState('emails');
  const [crmCalendarMember, setCrmCalendarMember] = useState('All');

  const [crmCards, setCrmCards] = useState([
    { id: 1, title: 'Standard Software License', value: 5000, contact: 'J. Smith', column: 'Qualification' },
    { id: 2, title: 'ERP Implementation', value: 12500, contact: 'Deco Addict', column: 'Proposition' },
    { id: 3, title: 'Annual Support Contract', value: 2400, contact: 'TechCorp', column: 'Proposition' },
    { id: 4, title: 'Custom Analytics Module', value: 8500, contact: 'DataFlow Inc', column: 'Negotiation' },
    { id: 5, title: 'Basic Website Package', value: 1200, contact: 'Local Shop', column: 'Won' },
    { id: 6, title: 'Cloud Hosting Setup', value: 3500, contact: 'CloudWays', column: 'Won' }
  ]);

  return (
    <div className="app-container min-h-screen flex flex-col bg-white overflow-x-hidden font-sans">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="CRM" />

      <main className="main-content flex-grow">
        {/* Custom Hero Section */}
        <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 min-h-[auto] lg:min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up md:pr-6 text-center md:text-left items-center md:items-start">
              <SectionLabel>RELATIONSHIP ENGINE</SectionLabel>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-4 sm:mb-6 max-w-[700px]">
                Customer Relationship <span className="text-[#0EA5E9]">Management</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-[600px] mb-6 sm:mb-8">
                Boost sales productivity, improve win rates &amp; grow revenue with smart, automated pipeline tracking.
              </p>

              {/* Dual Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="/contact/#contact-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center"
                >
                  Start with CRM &rarr;
                </a>
                <a
                  href="#funnel"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold text-sm py-3.5 px-6 rounded-full border border-slate-200 shadow-xs hover:shadow transition-all cursor-pointer text-center"
                >
                  View Sales Funnel
                </a>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100 rounded-2xl sm:rounded-3xl">
                <img 
                  src={crmHeroPhoto} 
                  alt="CRM Analytics Dashboard" 
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section: Manage Your Sales Funnel With No Effort */}
        <section id="funnel" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1100px] mx-auto text-center relative z-10">
            <SectionLabel align="center">SALES FUNNEL</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-4 leading-tight">
              Manage Your Sales Funnel With No Effort.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
              Attract leads, follow-up on phone calls and meetings. Analyse the quality of your leads to make informed decisions and save time by integrating emails directly into the application.
            </p>
            
            {/* Odoo Style CRM Opportunity Details Mockup */}
            <div className="reveal reveal-fade-up flex justify-center w-full overflow-x-auto pb-4">
              <div className="w-full max-w-[850px] min-w-[320px] bg-slate-50 shadow-2xl border border-slate-200 overflow-hidden text-left font-sans rounded-2xl sm:rounded-3xl">
                {/* Purple Header Bar */}
                <div style={{ backgroundColor: '#714B67', color: 'white', padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <span style={{ fontWeight: '800', letterSpacing: '0.5px' }}>CRM</span>
                    <span style={{ opacity: 0.85 }}>Sales</span>
                    <span style={{ opacity: 0.85 }}>Reporting</span>
                    <span style={{ opacity: 0.85 }}>Configuration</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.9 }}>
                    <span>💬</span>
                    <span>🔔</span>
                    <span style={{ fontWeight: '600' }}>My Company</span>
                  </div>
                </div>

                {/* Sub-bar / Stage Tracker */}
                <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e2e8f0', padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button style={{ backgroundColor: '#714B67', color: 'white', border: 'none', padding: '5px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>New</button>
                    <span style={{ color: '#64748b', fontSize: '11px' }}>Pipeline / Quote for 12 Tables</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                    <span style={{ backgroundColor: '#e2e8f0', color: '#475569', padding: '4px 8px', fontSize: '10px', fontWeight: 'bold' }}>New</span>
                    <span style={{ color: '#64748b', padding: '4px 8px', fontSize: '10px' }}>Qualified</span>
                    <span style={{ color: '#64748b', padding: '4px 8px', fontSize: '10px' }}>Proposition</span>
                    <span style={{ color: '#64748b', padding: '4px 8px', fontSize: '10px' }}>Won</span>
                  </div>
                </div>

                {/* Buttons subbar */}
                <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '8px 16px', display: 'flex', gap: '6px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                  <button style={{ backgroundColor: 'white', border: '1px solid #cbd5e1', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '600', color: '#334155' }}>New Quotation</button>
                  <button style={{ backgroundColor: 'white', border: '1px solid #cbd5e1', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '600', color: '#334155' }}>Won</button>
                  <button style={{ backgroundColor: 'white', border: '1px solid #cbd5e1', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '600', color: '#334155' }}>Lost</button>
                  <button style={{ backgroundColor: 'white', border: '1px solid #cbd5e1', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '600', color: '#334155' }}>Enrich</button>
                </div>

                {/* Main Content Area Grid (responsive 1 col on mobile, 2 col on md) */}
                <div className="grid grid-cols-1 md:grid-cols-12 bg-white">
                  {/* Left Column: Form Sheet */}
                  <div className="md:col-span-7 p-4 sm:p-5 border-b md:border-b-0 md:border-r border-slate-200">
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', margin: '0 0 12px 0' }}>Quote for 12 Tables</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: '2px' }}>Expected Revenue</span>
                          <span style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>$ 40,000.00</span>
                          <span style={{ fontSize: '11px', color: '#64748b', marginLeft: '6px' }}>at 10% prob.</span>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: '2px' }}>Customer</span>
                          <span style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic' }}>Not specified</span>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: '2px' }}>Email</span>
                          <span style={{ fontSize: '11px', color: '#2563eb', wordBreak: 'break-all' }}>willmac@rediffmail.example.com</span>
                        </div>
                      </div>
                      <div>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: '2px' }}>Salesperson</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 'bold', color: '#475569' }}>MA</div>
                            <span style={{ fontSize: '12px', fontWeight: '600', color: '#334155' }}>Mitchell Admin</span>
                          </div>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: '2px' }}>Expected Closing</span>
                          <span style={{ fontSize: '12px', color: '#334155' }}>03/05/2025</span>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: '2px' }}>Tags</span>
                          <span style={{ backgroundColor: '#fdf2f8', border: '1px solid #fbcfe8', color: '#db2777', padding: '1px 6px', borderRadius: '100px', fontSize: '10px', fontWeight: '600' }}>Product</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom tabs inside form */}
                    <div style={{ borderBottom: '1px solid #e2e8f0', display: 'flex', gap: '16px', fontSize: '11px', fontWeight: 'bold', color: '#64748b' }}>
                      <span style={{ color: '#714B67', borderBottom: '2px solid #714B67', paddingBottom: '6px' }}>Internal Notes</span>
                      <span style={{ paddingBottom: '6px', opacity: 0.7 }}>Extra Information</span>
                    </div>
                  </div>

                  {/* Right Column: Chatter Sidebar */}
                  <div className="md:col-span-5 bg-slate-50 p-4">
                    <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', flexWrap: 'wrap' }}>
                      <button style={{ backgroundColor: '#714B67', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>Send message</button>
                      <button style={{ backgroundColor: 'white', border: '1px solid #cbd5e1', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '600', color: '#475569' }}>Log note</button>
                      <button style={{ backgroundColor: 'white', border: '1px solid #cbd5e1', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '600', color: '#475569' }}>Activities</button>
                    </div>

                    <h4 style={{ margin: '0 0 8px 0', fontSize: '10px', fontWeight: 'bold', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Planned Activities</h4>
                    
                    <div style={{ display: 'flex', gap: '8px', backgroundColor: '#fff1f2', border: '1px solid #ffe4e6', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                      <span style={{ fontSize: '14px' }}>📞</span>
                      <div>
                        <p style={{ margin: '0', fontSize: '11px', fontWeight: 'bold', color: '#991b1b' }}>59 days overdue</p>
                        <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#334155' }}>Meeting to review pricing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Your Sales Funnel, The Way You Like It */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel align="center">KANBAN VISUALIZATION</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-3 leading-tight">
                Your Sales Funnel, The Way You Like It
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Track your opportunities pipeline with the revolutionary kanban view. Work inside your sales funnel and get instant visual information about next actions and expected revenue.
              </p>
            </div>

            {/* Kanban Board */}
            <div className="crm-kanban-board flex gap-4 sm:gap-5 overflow-x-auto pb-4">
              {['Qualification', 'Proposition', 'Negotiation', 'Won'].map(colName => {
                const colCards = crmCards.filter(c => c.column === colName);
                const totalVal = colCards.reduce((acc, c) => acc + c.value, 0);
                const borderColors = {
                  'Qualification': '#0ea5e9',
                  'Proposition': '#f59e0b',
                  'Negotiation': '#8b5cf6',
                  'Won': '#10b981'
                };
                return (
                  <div key={colName} className="glass-card crm-kanban-col flex-1 min-w-[240px] p-4 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col gap-3" style={{ borderTop: `4px solid ${borderColors[colName]}` }}>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-800 text-sm">{colName}</span>
                      <span className="text-xs font-bold bg-slate-200/60 px-2 py-0.5 rounded-full text-slate-600">{colCards.length}</span>
                    </div>
                    <div className="text-xs font-bold" style={{ color: borderColors[colName] }}>
                      Expected: ${totalVal.toLocaleString()}
                    </div>
                    
                    <div className="flex flex-col gap-2.5 min-h-[160px]">
                      {colCards.map(card => (
                        <div key={card.id} className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs flex flex-col gap-2">
                          <div className="text-xs font-bold text-slate-800 leading-snug">{card.title}</div>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs font-extrabold text-emerald-600">${card.value.toLocaleString()}</span>
                            <span className="text-[11px] text-slate-500">{card.contact}</span>
                          </div>
                          
                          {colName !== 'Won' && (
                            <button 
                              onClick={() => {
                                const stages = ['Qualification', 'Proposition', 'Negotiation', 'Won'];
                                const currentIdx = stages.indexOf(card.column);
                                if (currentIdx < stages.length - 1) {
                                  setCrmCards(prev => prev.map(c => c.id === card.id ? { ...c, column: stages[currentIdx + 1] } : c));
                                }
                              }}
                              className="self-end bg-slate-100 hover:bg-slate-200 w-6 h-6 rounded-full flex items-center justify-center text-xs text-slate-600 transition-colors cursor-pointer"
                              title="Move to next stage"
                            >
                              →
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Lead Management Made Easy */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Column: Text Content */}
              <div className="reveal reveal-fade-left">
                <SectionLabel>LEAD HUB</SectionLabel>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-4 leading-tight">
                  Lead Management Made Easy
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  Create leads automatically from incoming emails. Analyse leads efficiency and compare performance by campaigns, channels or sales team.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Find duplicates, merge leads and assign them to the right salesperson in one operation. Spend less time on administration and more time on qualifying leads.
                </p>
              </div>

              {/* Right Column: Visual Dashboard of charts */}
              <div className="flex justify-center lg:justify-end reveal reveal-fade-right">
                <div className="w-full max-w-[500px] p-3 sm:p-4 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl">
                  {/* Dashboard Grid (responsive 1 col on mobile, 2 col on sm) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {/* Chart 1: Opportunities by Categories */}
                    <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-3 flex flex-col h-[180px]">
                      <div className="flex justify-between text-[11px] font-bold text-slate-600 border-b border-slate-200 pb-1 mb-2">
                        <span>OPPORTUNITIES</span>
                        <span>✕</span>
                      </div>
                      <div className="relative flex-grow flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-20 h-20">
                          <polygon points="50,10 88,38 73,82 27,82 12,38" fill="none" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="2,2" />
                          <polygon points="50,10 75,46 58,68 45,78 22,46" fill="rgba(14, 165, 233, 0.25)" stroke="#0ea5e9" strokeWidth="1.5" />
                        </svg>
                        <span className="absolute top-0 text-[10px] text-slate-500 font-bold">Services</span>
                        <span className="absolute bottom-0 text-[10px] text-slate-500 font-bold">Web Design</span>
                      </div>
                    </div>

                    {/* Chart 2: Planned Revenue */}
                    <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-3 flex flex-col h-[180px]">
                      <div className="flex justify-between text-[11px] font-bold text-slate-600 border-b border-slate-200 pb-1 mb-2">
                        <span>PLANNED REVENUE</span>
                        <span>✕</span>
                      </div>
                      <div className="flex justify-around items-end flex-grow pb-1">
                        {[
                          { label: 'Lost', h: 65, color: '#38bdf8' },
                          { label: 'New', h: 20, color: '#38bdf8' },
                          { label: 'Qual', h: 80, color: '#ca8a04' },
                          { label: 'Won', h: 95, color: '#10b981' }
                        ].map((col, idx) => (
                          <div key={idx} className="flex flex-col items-center h-full justify-end w-5">
                            <div style={{ height: `${col.h}%`, backgroundColor: col.color }} className="w-full rounded-xs"></div>
                            <span className="text-[9px] text-slate-500 mt-1 font-bold">{col.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Chart 3: Opportunities by Stage */}
                    <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-3 flex flex-col h-[180px]">
                      <div className="flex justify-between text-[11px] font-bold text-slate-600 border-b border-slate-200 pb-1 mb-2">
                        <span>BY STAGE</span>
                        <span>✕</span>
                      </div>
                      <div className="relative flex-grow flex items-center justify-center">
                        <svg viewBox="0 0 100 50" className="w-24 h-14">
                          <path d="M 10 50 A 40 40 0 0 1 30 15" fill="none" stroke="#38bdf8" strokeWidth="12" />
                          <path d="M 30 15 A 40 40 0 0 1 50 10" fill="none" stroke="#a3e635" strokeWidth="12" />
                          <path d="M 50 10 A 40 40 0 0 1 78 22" fill="none" stroke="#f87171" strokeWidth="12" />
                          <path d="M 78 22 A 40 40 0 0 1 90 50" fill="none" stroke="#4ade80" strokeWidth="12" />
                        </svg>
                      </div>
                    </div>

                    {/* Chart 4: Sales by Category */}
                    <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-3 flex flex-col h-[180px]">
                      <div className="flex justify-between text-[11px] font-bold text-slate-600 border-b border-slate-200 pb-1 mb-2">
                        <span>BY CATEGORY</span>
                        <span>✕</span>
                      </div>
                      <div className="relative flex-grow flex items-center justify-center">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                          <polygon points="0,55 45,10 90,40 100,55" fill="rgba(14, 165, 233, 0.25)" />
                          <polyline points="0,55 45,10 90,40 100,55" fill="none" stroke="#0ea5e9" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Email Integration And Automation */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Column: Text */}
              <div className="reveal reveal-fade-left">
                <SectionLabel>EMAIL SYNC</SectionLabel>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-4 leading-tight">
                  Email Integration And Automation
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  Work with the email applications you already use every day. Whether your company uses Microsoft Outlook or Gmail, no one needs to change the way they work, so everyone stays productive.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Route, sort and filter incoming emails automatically. Dreamwarez CRM handles incoming emails and routes them to the right opportunities or sales team.
                </p>
              </div>

              {/* Right Column: Email thread mockup client */}
              <div className="flex justify-center lg:justify-end reveal reveal-fade-right">
                <div className="w-full max-w-[500px] p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col gap-3">
                  <div className="text-xs font-bold text-slate-600 pb-2 border-b border-slate-200 flex items-center justify-between">
                    <span>📥 INBOX INTEGRATION</span>
                    <span className="text-[#0ea5e9]">Outlook / Gmail Synced</span>
                  </div>
                  
                  {/* Email 1 */}
                  <div className="bg-white border border-slate-200 rounded-xl p-3 flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">R</div>
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-800">Ronit Wagh (Deco Addict)</span>
                        <span className="text-slate-500 text-[11px]">9:15 AM</span>
                      </div>
                      <span className="text-xs font-semibold text-[#0ea5e9]">Re: Demo request for inventory module</span>
                      <p className="text-xs text-slate-600 leading-relaxed m-0">
                        "We plan to upgrade our backup servers within the next 2 months. I think someone should contact our IT department..."
                      </p>
                    </div>
                  </div>

                  {/* Email 2 */}
                  <div className="bg-white border border-slate-200 rounded-xl p-3 flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">C</div>
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-800">Contact Clinic</span>
                        <span className="text-slate-500 text-[11px]">Yesterday</span>
                      </div>
                      <span className="text-xs font-semibold text-slate-800">New lead generated via website form</span>
                      <p className="text-xs text-slate-600 leading-relaxed m-0">
                        "The next version of our products catalog is scheduled for next month. Please send over updated pricing tiers..."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Collaborative Agenda */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Column: Calendar Image (order-2 on mobile, order-1 on lg) */}
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start reveal reveal-fade-left">
                <div className="border border-slate-200/80 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white shadow-xl max-w-[500px] w-full overflow-hidden">
                  <img src={crmCalendar} alt="Collaborative Agenda" className="w-full h-auto rounded-xl block object-contain" />
                </div>
              </div>

              {/* Right Column: Text Content */}
              <div className="order-1 lg:order-2 reveal reveal-fade-right">
                <SectionLabel>CALENDAR SYNC</SectionLabel>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-4 leading-tight">
                  Collaborative Agenda
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  Schedule your meetings and phone calls using the integrated calendar. You can see your agenda and your colleagues' in one view. As a manager, it's easy to see what your team is busy with.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Keep everyone aligned with real-time calendar synchronization. Sync seamlessly with external calendar providers like Google Calendar and Microsoft Outlook, enabling automatic timezone adjustments and status updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Customize Your Sales Cycle */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Column: Text Content */}
              <div className="reveal reveal-fade-left">
                <SectionLabel>CYCLE BUILDER</SectionLabel>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-4 leading-tight">
                  Customize Your Sales Cycle
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  Customize your sales cycle by configuring sales stages that perfectly fit your sales approach.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Control statistics to get accurate forecasts to improve your sales performance at every stage of your customer relationship.
                </p>
              </div>

              {/* Right Column: Dashboard Image */}
              <div className="flex justify-center lg:justify-end reveal reveal-fade-right">
                <div className="w-full max-w-[500px]">
                  <img 
                    src={salesDashboard} 
                    alt="Sales Pipeline Dashboard" 
                    className="w-full h-auto object-contain rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[900px] mx-auto p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50/50 shadow-sm flex flex-col items-center gap-4 sm:gap-6 relative z-10">
            <SectionLabel align="center">POWER YOUR WORKFLOW</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
              Power Up Your Workflow With Integrations Into Your Favourite Tools
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Ready to take complete control of your leads, sales funnel, and customer interactions? Connect with our team today.
            </p>
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