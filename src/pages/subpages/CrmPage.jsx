import React, { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import crmHeroPhoto from '../../assets/crm_hero_photo.jpg';
import salesDashboard from '../../assets/sales_dashboard.png';
import crmCalendar from '../../assets/crm_calendar.jpg';

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
    <div className="app-container">
      
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="CRM" />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="relative bg-white pt-32 pb-16 min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full" style={{ maxWidth: '1350px' }}>
            {/* Left Content */}
            <div className="md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up pr-8">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>RELATIONSHIP ENGINE</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-12 max-w-[700px]">
                Customer <span className="inline-block whitespace-nowrap">Relationship <span style={{ color: '#7A7A7A' }}>Management</span></span>
              </h1>
              <p className="text-lg text-black leading-relaxed max-w-[600px]">Boost sales productivity, improve win rates & grow revenue</p>
            </div>
            
            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div 
                className="w-full max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100" 
                style={{ borderRadius: '24px' }}
              >
                <img 
                  src={crmHeroPhoto} 
                  alt="CRM Analytics Dashboard" 
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '24px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section: Manage Your Sales Funnel With No Effort. */}
        <section className="purchase-intro-section reveal reveal-fade-up" style={{ position: 'relative', overflow: 'hidden', padding: '80px 24px', marginBottom: '60px', width: '100%', maxWidth: 'none' }}>
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="section-inner relative z-10" style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>SALES FUNNEL</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '16px' }}>Manage Your Sales Funnel With No Effort.</h2>
            <p className="purchase-intro-text" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7', maxWidth: '850px', margin: '0 auto 40px' }}>
              Attract leads, follow-up on phone calls and meetings. Analyse the quality of your leads to make informed decisions and save time by integrating emails directly into the application.
            </p>
            
            {/* Odoo Style CRM Opportunity Details Mockup */}
            <div className="reveal reveal-fade-up flex justify-center w-full">
              <div 
                className="w-full max-w-[850px] bg-slate-50 shadow-2xl border border-slate-200 overflow-hidden text-left font-sans" 
                style={{ borderRadius: '24px' }}
              >
                {/* Purple Header Bar */}
                <div style={{ backgroundColor: '#714B67', color: 'white', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <span style={{ fontWeight: '800', letterSpacing: '0.5px' }}>CRM</span>
                    <span style={{ opacity: 0.85, cursor: 'pointer' }}>Sales</span>
                    <span style={{ opacity: 0.85, cursor: 'pointer' }}>Reporting</span>
                    <span style={{ opacity: 0.85, cursor: 'pointer' }}>Configuration</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center', opacity: 0.9 }}>
                    <span>💬</span>
                    <span>🔔</span>
                    <span style={{ fontWeight: '600' }}>My Company (San Francisco)</span>
                  </div>
                </div>

                {/* Sub-bar / Stage Tracker */}
                <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e2e8f0', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button style={{ backgroundColor: '#714B67', color: 'white', border: 'none', padding: '6px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>New</button>
                    <span style={{ color: '#64748b', fontSize: '13px' }}>Pipeline / Quote for 12 Tables</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                    <span style={{ backgroundColor: '#e2e8f0', color: '#475569', padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}>New</span>
                    <span style={{ color: '#64748b', padding: '6px 12px', fontSize: '12px' }}>Qualified</span>
                    <span style={{ color: '#64748b', padding: '6px 12px', fontSize: '12px' }}>Proposition</span>
                    <span style={{ color: '#64748b', padding: '6px 12px', fontSize: '12px' }}>Won</span>
                  </div>
                </div>

                {/* Buttons subbar */}
                <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '8px 20px', display: 'flex', gap: '8px' }}>
                  <button style={{ backgroundColor: 'white', border: '1px solid #cbd5e1', padding: '5px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: '#334155' }}>New Quotation</button>
                  <button style={{ backgroundColor: 'white', border: '1px solid #cbd5e1', padding: '5px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: '#334155' }}>Won</button>
                  <button style={{ backgroundColor: 'white', border: '1px solid #cbd5e1', padding: '5px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: '#334155' }}>Lost</button>
                  <button style={{ backgroundColor: 'white', border: '1px solid #cbd5e1', padding: '5px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: '#334155' }}>Enrich</button>
                </div>

                {/* Main Content Area Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', backgroundColor: 'white' }}>
                  {/* Left Column: Form Sheet */}
                  <div style={{ padding: '20px', borderRight: '1px solid #e2e8f0' }}>
                    <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#1e293b', margin: '0 0 12px 0' }}>Quote for 12 Tables</h1>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                      <div>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Expected Revenue</span>
                          <span style={{ fontSize: '18px', fontWeight: '850', color: '#0f172a' }}>$ 40,000.00</span>
                          <span style={{ fontSize: '12px', color: '#64748b', marginLeft: '6px' }}>at 10.00% prob.</span>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Customer</span>
                          <span style={{ fontSize: '13px', color: '#94a3b8', fontStyle: 'italic' }}>Not specified</span>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Email</span>
                          <span style={{ fontSize: '13px', color: '#2563eb' }}>willmac@rediffmail.example.com</span>
                        </div>
                      </div>
                      <div>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Salesperson</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', color: '#475569' }}>MA</div>
                            <span style={{ fontSize: '13px', fontWeight: '600', color: '#334155' }}>Mitchell Admin</span>
                          </div>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Expected Closing</span>
                          <span style={{ fontSize: '13px', color: '#334155' }}>03/05/2025</span>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Tags</span>
                          <span style={{ backgroundColor: '#fdf2f8', border: '1px solid #fbcfe8', color: '#db2777', padding: '2px 6px', borderRadius: '100px', fontSize: '11px', fontWeight: '600' }}>Product</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom tabs inside form */}
                    <div style={{ borderBottom: '1px solid #e2e8f0', display: 'flex', gap: '20px', fontSize: '13px', fontWeight: 'bold', color: '#64748b' }}>
                      <span style={{ color: '#714B67', borderBottom: '2px solid #714B67', paddingBottom: '8px', cursor: 'pointer' }}>Internal Notes</span>
                      <span style={{ paddingBottom: '8px', cursor: 'pointer', opacity: 0.7 }}>Extra Information</span>
                    </div>
                    <div style={{ paddingTop: '10px', color: '#94a3b8', fontStyle: 'italic', fontSize: '13px' }}>
                      Add a description...
                    </div>
                  </div>

                  {/* Right Column: Chatter Sidebar */}
                  <div style={{ backgroundColor: '#f8fafc', padding: '20px' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                      <button style={{ backgroundColor: '#714B67', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>Send message</button>
                      <button style={{ backgroundColor: 'white', border: '1px solid #cbd5e1', padding: '5px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: '#475569' }}>Log note</button>
                      <button style={{ backgroundColor: 'white', border: '1px solid #cbd5e1', padding: '5px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: '#475569' }}>Activities</button>
                    </div>

                    <h4 style={{ margin: '0 0 10px 0', fontSize: '11px', fontWeight: 'bold', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Planned Activities</h4>
                    
                    {/* Activity Item 1 */}
                    <div style={{ display: 'flex', gap: '10px', backgroundColor: '#fff1f2', border: '1px solid #ffe4e6', padding: '10px', borderRadius: '12px', marginBottom: '12px' }}>
                      <span style={{ fontSize: '16px' }}>📞</span>
                      <div>
                        <p style={{ margin: '0', fontSize: '12px', fontWeight: 'bold', color: '#991b1b' }}>59 days overdue</p>
                        <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#334155' }}>"Meeting to go over pricing information." for Mitchell Admin</p>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '6px', fontSize: '11px' }}>
                          <span style={{ color: '#16a34a', fontWeight: 'bold', cursor: 'pointer' }}>✓ Mark Done</span>
                          <span style={{ color: '#2563eb', cursor: 'pointer' }}>✏ Edit</span>
                          <span style={{ color: '#dc2626', cursor: 'pointer' }}>✕ Cancel</span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Log */}
                    <div style={{ borderLeft: '2px solid #e2e8f0', paddingLeft: '14px', marginLeft: '6px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '-19px', top: '2px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></div>
                        <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>February 5, 2025</span>
                        <span style={{ fontSize: '12px', fontWeight: '600', color: '#334155' }}>OdooBot</span>
                        <span style={{ fontSize: '12px', color: '#64748b', marginLeft: '6px' }}>created the lead/opportunity</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Your Sales Funnel, The Way You Like It */}
        <section className="sales-page-section-redesign alternate">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="erp-page-title-new">Your Sales Funnel, The Way You Like It</h2>
            <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', marginTop: '8px', marginBottom: '0' }}>Track your opportunities pipeline with the revolutionary kanban view.</p>
          </div>

          <div style={{ maxWidth: '1350px', margin: '0 auto', padding: '0 24px' }}>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '30px', maxWidth: '800px', margin: '0 auto' }}>
              Work inside your sales funnel and get instant visual information about next action, new messages, opportunities and expected revenue. Click the arrow button on cards to move them down the funnel.
            </p>

            {/* Kanban Grid */}
            <div className="crm-kanban-board" style={{ display: 'flex', gap: '20px', marginTop: '20px', overflowX: 'auto', paddingBottom: '10px' }}>
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
                  <div key={colName} className="glass-card crm-kanban-col" style={{ flex: '1', minWidth: '240px', padding: '16px', borderRadius: '20px', border: '1.5px solid #1e3a8a', background: 'rgba(255, 255, 255, 0.4)', display: 'flex', flexDirection: 'column', gap: '16px', borderTop: `4px solid ${borderColors[colName]}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '15px' }}>{colName}</span>
                      <span style={{ fontSize: '11px', fontWeight: '700', background: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: '100px', color: 'var(--text-secondary)' }}>{colCards.length}</span>
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: borderColors[colName] }}>
                      Expected: ${totalVal.toLocaleString()}
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '200px' }}>
                      {colCards.map(card => (
                        <div key={card.id} className="crm-kanban-card" style={{ background: '#ffffff', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
                          <div style={{ fontSize: '13px', fontWeight: '850', color: 'var(--text-primary)', lineHeight: '1.4' }}>{card.title}</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                            <span style={{ fontSize: '13px', fontWeight: '800', color: '#10b981' }}>${card.value.toLocaleString()}</span>
                            <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{card.contact}</span>
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
                              style={{ alignSelf: 'flex-end', background: 'rgba(0, 0, 0, 0.03)', border: 'none', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-secondary)' }}
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
        <section className="sales-page-section-redesign relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="sales-page-grid-redesign relative z-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '60px 24px', maxWidth: '1350px', margin: '0 auto' }}>
            {/* Left Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-left">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>LEAD HUB</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
              <h2 className="erp-page-title-new">Lead Management Made Easy</h2>
              <p className="sales-page-desc-new" style={{ marginTop: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Create leads automatically from incoming emails. Analyse leads efficiency and compare performance by campaigns, channels or sales team.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Find duplicates, merge leads and assign them to the right salesperson in one operation. Spend less time on administration and more time on qualifying leads.
              </p>
            </div>

            {/* Right Column: Visual Dashboard of charts */}
            {/* Right Column: Visual Dashboard of charts */}
            <div className="sales-page-image-col lg:justify-end reveal reveal-fade-right">
              <div className="relative w-full max-w-[500px] group">
                <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-2xl group-hover:bg-blue-600/20 transition-all duration-500 transform translate-y-4 translate-x-4"></div>
                
                {/* Dashboard Grid */}
                <div className="glass-card lead-dashboard-widget relative z-10 group-hover:scale-[1.01] transition-transform duration-500 ease-out" style={{ padding: '16px', borderRadius: '24px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', boxShadow: '0 12px 30px rgba(0,0,0,0.04)', width: '100%' }}>
                  
                  {/* Chart 1: Opportunities by Categories */}
                  <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '10px', display: 'flex', flexDirection: 'column', height: '190px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 'bold', color: '#475569', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px', marginBottom: '6px' }}>
                      <span>OPPORTUNITIES BY CATEGORIES</span>
                      <span>✕</span>
                    </div>
                    <div style={{ position: 'relative', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {/* Concentric pentagons */}
                      <svg viewBox="0 0 100 100" style={{ width: '55%', height: '55%' }}>
                        <polygon points="50,10 88,38 73,82 27,82 12,38" fill="none" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2,2" />
                        <polygon points="50,25 78,46 67,73 33,73 22,46" fill="none" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2,2" />
                        <polygon points="50,40 69,54 61,65 39,65 31,54" fill="none" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2,2" />
                        {/* Data shape */}
                        <polygon points="50,10 75,46 58,68 45,78 22,46" fill="rgba(14, 165, 233, 0.25)" stroke="#0ea5e9" strokeWidth="1.5" />
                      </svg>
                      {/* Custom labels around the radar */}
                      <span style={{ position: 'absolute', top: '1px', left: '50%', transform: 'translateX(-50%)', fontSize: '14px', color: '#64748b', fontWeight: 'bold' }}>Need Services</span>
                      <span style={{ position: 'absolute', top: '35%', right: '1px', fontSize: '14px', color: '#64748b', fontWeight: 'bold' }}>Interest in Com</span>
                      <span style={{ position: 'absolute', bottom: '1px', left: '50%', transform: 'translateX(-50%)', fontSize: '14px', color: '#64748b', fontWeight: 'bold' }}>Interest in Accessories</span>
                      <span style={{ position: 'absolute', bottom: '30%', left: '1px', fontSize: '14px', color: '#64748b', fontWeight: 'bold' }}>Website Design</span>
                    </div>
                  </div>

                  {/* Chart 2: Planned Revenue by Stage and User */}
                  <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '10px', display: 'flex', flexDirection: 'column', height: '190px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 'bold', color: '#475569', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px', marginBottom: '6px' }}>
                      <span>PLANNED REVENUE</span>
                      <span>✕</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', flexGrow: 1, padding: '6px 0' }}>
                      {[
                        { label: 'Lost', admin: 25, demo: 40 },
                        { label: 'New', admin: 2, demo: 0 },
                        { label: 'Qual', admin: 10, demo: 70 },
                        { label: 'Prop', admin: 100, demo: 0 },
                        { label: 'Won', admin: 55, demo: 0 },
                        { label: 'Neg', admin: 0, demo: 45 }
                      ].map((col, idx) => (
                        <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', width: '12%' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '80px', width: '100%', background: '#f8fafc', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ height: `${col.demo}%`, width: '100%', backgroundColor: '#ca8a04', opacity: 0.8 }} />
                            <div style={{ height: `${col.admin}%`, width: '100%', backgroundColor: '#38bdf8' }} />
                          </div>
                          <span style={{ fontSize: '14px', color: '#64748b', marginTop: '3px', fontWeight: 'bold' }}>{col.label}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold', marginTop: '2px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#38bdf8' }}><span style={{ width: '5px', height: '5px', background: '#38bdf8' }}></span>Admin</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#ca8a04' }}><span style={{ width: '5px', height: '5px', background: '#ca8a04' }}></span>Demo</span>
                    </div>
                  </div>

                  {/* Chart 3: Opportunities by Stage */}
                  <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '10px', display: 'flex', flexDirection: 'column', height: '190px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 'bold', color: '#475569', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px', marginBottom: '6px' }}>
                      <span>OPPORTUNITIES BY STAGE</span>
                      <span>✕</span>
                    </div>
                    <div style={{ position: 'relative', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {/* Semi-circle chart */}
                      <svg viewBox="0 0 100 50" style={{ width: '70%', height: '70%', transform: 'translateY(6px)' }}>
                        <path d="M 10 50 A 40 40 0 0 1 30 15" fill="none" stroke="#38bdf8" strokeWidth="15" />
                        <path d="M 30 15 A 40 40 0 0 1 50 10" fill="none" stroke="#a3e635" strokeWidth="15" />
                        <path d="M 50 10 A 40 40 0 0 1 78 22" fill="none" stroke="#f87171" strokeWidth="15" />
                        <path d="M 78 22 A 40 40 0 0 1 90 50" fill="none" stroke="#4ade80" strokeWidth="15" />
                      </svg>
                      
                      {/* Absolute legends over chart */}
                      <span style={{ position: 'absolute', bottom: '10px', left: '6px', fontSize: '14px', color: '#334155', fontWeight: '800' }}>20%</span>
                      <span style={{ position: 'absolute', top: '10px', left: '16px', fontSize: '14px', color: '#334155', fontWeight: '800' }}>10%</span>
                      <span style={{ position: 'absolute', top: '10px', right: '16px', fontSize: '14px', color: '#334155', fontWeight: '800' }}>20%</span>
                      <span style={{ position: 'absolute', bottom: '10px', right: '6px', fontSize: '14px', color: '#334155', fontWeight: '800' }}>20%</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', fontSize: '14px', fontWeight: 'bold', marginTop: '2px' }}>
                      <span style={{ color: '#38bdf8' }}>■ New</span>
                      <span style={{ color: '#a3e635' }}>■ Qual</span>
                      <span style={{ color: '#f87171' }}>■ Prop</span>
                      <span style={{ color: '#4ade80' }}>■ Neg</span>
                    </div>
                  </div>

                  {/* Chart 4: Sales by Product's Category */}
                  <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '10px', display: 'flex', flexDirection: 'column', height: '190px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 'bold', color: '#475569', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px', marginBottom: '6px' }}>
                      <span>SALES BY CATEGORY</span>
                      <span>✕</span>
                    </div>
                    <div style={{ position: 'relative', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {/* Area chart */}
                      <svg viewBox="0 0 100 60" style={{ width: '100%', height: '100%' }}>
                        {/* Grid lines */}
                        <line x1="0" y1="15" x2="100" y2="15" stroke="#f1f5f9" strokeWidth="0.5" />
                        <line x1="0" y1="30" x2="100" y2="30" stroke="#f1f5f9" strokeWidth="0.5" />
                        <line x1="0" y1="45" x2="100" y2="45" stroke="#f1f5f9" strokeWidth="0.5" />
                        
                        {/* Area path */}
                        <polygon points="0,55 45,10 90,40 100,55" fill="rgba(14, 165, 233, 0.25)" />
                        <polyline points="0,55 45,10 90,40 100,55" fill="none" stroke="#0ea5e9" strokeWidth="1.5" />
                      </svg>
                      {/* Labels on x-axis */}
                      <span style={{ position: 'absolute', bottom: '1px', left: '2px', fontSize: '14px', color: '#64748b', fontWeight: 'bold' }}>Comp</span>
                      <span style={{ position: 'absolute', bottom: '1px', left: '42%', fontSize: '14px', color: '#64748b', fontWeight: 'bold' }}>PC Stuff</span>
                      <span style={{ position: 'absolute', bottom: '1px', right: '2px', fontSize: '14px', color: '#64748b', fontWeight: 'bold' }}>Interv</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Organize Your Opportunities */}
        <section className="sales-page-section-redesign alternate">

          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
            <h2 className="erp-page-title-new">Organize Your Opportunities</h2>
            <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', marginTop: '8px', marginBottom: '0' }}>A Clean User Interface With Everything In One Screen</p>
          </div>

          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '0 24px', maxWidth: '1350px', margin: '0 auto' }}>
            {/* Left Column: Interactive Opportunity Sheet */}
            <div className="sales-page-image-col lg:justify-start reveal reveal-fade-left">
              <div className="relative w-full max-w-[420px] group">
                <div className="absolute inset-0 bg-purple-600/10 rounded-3xl blur-2xl group-hover:bg-purple-600/20 transition-all duration-500 transform translate-y-4 translate-x-4"></div>
                
                {/* Odoo Opportunity Form View */}
                <div className="glass-card crm-opportunity-detail-widget relative z-10 group-hover:scale-[1.01] transition-transform duration-500 ease-out" style={{ borderRadius: '24px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.04)', width: '100%' }}>
                  
                  {/* Top Header Bar */}
                  <div style={{ background: '#714B67', padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', fontSize: '11px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ fontSize: '11px' }}>⣿</span> CRM
                      </span>
                      <span style={{ opacity: 0.9 }}>Sales</span>
                      <span style={{ opacity: 0.9 }}>Reporting</span>
                      <span style={{ opacity: 0.9 }}>Configuration</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>💬 <span style={{ background: '#dc2626', borderRadius: '50%', padding: '0px 4px', fontSize: '10px' }}>5</span></span>
                      <span>🔔</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" style={{ width: '14px', height: '14px', borderRadius: '50%' }} alt="Admin" />
                        <span style={{ fontSize: '11px' }}>Mitchell Admin</span>
                      </div>
                    </div>
                  </div>

                  {/* Subheader / Breadcrumb Bar */}
                  <div style={{ background: '#f8fafc', padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', fontSize: '11px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: '#64748b' }}>Pipeline</span>
                      <span style={{ color: '#94a3b8' }}>/</span>
                      <span style={{ fontWeight: 'bold', color: '#1e293b' }}>Modern Open Space</span>
                      <button style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '2px 6px', borderRadius: '4px', cursor: 'default', fontWeight: 'bold', marginLeft: '4px', fontSize: '11px' }}>Edit</button>
                      <button style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '2px 6px', borderRadius: '4px', cursor: 'default', fontWeight: 'bold', fontSize: '11px' }}>Create</button>
                    </div>
                    {/* Pipeline Stage Badges */}
                    <div style={{ display: 'flex', border: '1px solid #cbd5e1', borderRadius: '4px', overflow: 'hidden', background: '#f1f5f9' }}>
                      {['New', 'Qualified', 'Proposition', 'Won'].map((stage, idx) => {
                        const isActive = stage === 'Proposition';
                        return (
                          <span 
                            key={stage} 
                            style={{ 
                              padding: '2px 6px', 
                              background: isActive ? '#714B67' : 'transparent', 
                              color: isActive ? 'white' : '#475569', 
                              fontWeight: isActive ? 'bold' : 'normal',
                              borderRight: idx < 3 ? '1px solid #cbd5e1' : 'none',
                              fontSize: '10px'
                            }}
                          >
                            {stage}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Main Form Body */}
                  <div style={{ padding: '10px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    
                    {/* Form Buttons */}
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <button style={{ background: '#714B67', color: 'white', border: 'none', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold', fontSize: '11px', cursor: 'default' }}>New Quotation</button>
                      <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', cursor: 'default' }}>Won</button>
                      <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', cursor: 'default' }}>Lost</button>
                      <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', cursor: 'default' }}>Enrich</button>
                    </div>

                    {/* Sheet Card */}
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '10px', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', position: 'relative' }}>
                      
                      {/* Smart Buttons Top Right */}
                      <div style={{ position: 'absolute', top: '8px', right: '8px', display: 'flex', gap: '4px' }}>
                        <div style={{ border: '1px solid #cbd5e1', borderRadius: '4px', padding: '2px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '10px', background: '#f8fafc', width: '55px' }}>
                          <span style={{ fontWeight: 'bold', color: '#714B67' }}>📅 0</span>
                          <span style={{ fontSize: '9px', color: '#64748b' }}>Meeting</span>
                        </div>
                        <div style={{ border: '1px solid #cbd5e1', borderRadius: '4px', padding: '2px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '10px', background: '#f8fafc', width: '55px' }}>
                          <span style={{ fontWeight: 'bold', color: '#714B67' }}>📄 0</span>
                          <span style={{ fontSize: '9px', color: '#64748b' }}>Quotations</span>
                        </div>
                      </div>

                      {/* Title Header */}
                      <div style={{ marginBottom: '10px' }}>
                        <div style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: 'bold' }}>Opportunity</div>
                        <h3 style={{ margin: '2px 0 4px 0', fontSize: '12px', fontWeight: 'bold', color: '#1e293b' }}>Modern Open Space</h3>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                          <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#1e293b' }}>₹ 4,500.00</span>
                          <span style={{ fontSize: '10px', color: '#64748b' }}>at</span>
                          <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#714B67' }}>60.00 %</span>
                        </div>
                      </div>

                      {/* Fields Table */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '10px', fontSize: '11px' }}>
                        {/* Left Fields Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '65px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Customer</span>
                            <span style={{ color: '#cbd5e1' }}>—</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '65px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Email</span>
                            <a href="mailto:henry@elight.com" style={{ color: '#714B67', textDecoration: 'none', fontWeight: 'bold' }}>henry@elight.com</a>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '65px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Phone</span>
                            <span style={{ color: '#cbd5e1' }}>—</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '65px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Salesperson</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" style={{ width: '12px', height: '12px', borderRadius: '50%' }} alt="Salesperson" />
                              <span>Mitchell Admin</span>
                            </div>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '65px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Sales Team</span>
                            <span>Sales</span>
                          </div>
                        </div>

                        {/* Right Fields Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Expected Closing</span>
                            <span style={{ color: '#cbd5e1' }}>—</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Priority</span>
                            <span style={{ color: '#eab308', letterSpacing: '1px', fontSize: '11px' }}>★★☆</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Tags</span>
                            <span style={{ alignSelf: 'flex-start', background: '#e0f2fe', color: '#0369a1', padding: '1px 5px', borderRadius: '99px', fontSize: '10px', fontWeight: 'bold' }}>Information</span>
                          </div>
                        </div>
                      </div>

                      {/* Sheet Tabs */}
                      <div style={{ display: 'flex', gap: '10px', borderBottom: '1px solid #e2e8f0', marginTop: '12px', paddingBottom: '3px', fontSize: '11px' }}>
                        <span style={{ fontWeight: 'bold', color: '#714B67', borderBottom: '2px solid #714B67', paddingBottom: '3px', cursor: 'default' }}>Internal Notes</span>
                        <span style={{ color: '#64748b', paddingBottom: '3px', cursor: 'default' }}>Extra Information</span>
                      </div>

                    </div>

                  </div>

                  {/* Form Footer */}
                  <div style={{ background: '#f8fafc', padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', fontSize: '11px', color: '#64748b' }}>
                    <div style={{ display: 'flex', gap: '8px', fontWeight: 'bold' }}>
                      <span style={{ cursor: 'default', color: '#714B67' }}>Send message</span>
                      <span style={{ cursor: 'default' }}>Log note</span>
                      <span style={{ cursor: 'default' }}>📅 Schedule activity</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>📎 0</span>
                      <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✔ Following</span>
                      <span>👤 2</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-right">
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Give your opportunities organised to stay focused on the best deals. Manage all your user interaction from the opportunity like emails, phone calls, internal notes, meetings and quotations.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Follow opportunities that interest you to get notified upon specific events: deal won or lost, stage changed, new customer demand, etc.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Email Integration And Automation */}
        <section className="sales-page-section-redesign relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="sales-page-grid-redesign relative z-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '60px 24px', maxWidth: '1350px', margin: '0 auto' }}>
            {/* Left Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-left">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>EMAIL SYNC</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
              <h2 className="erp-page-title-new">Email Integration And Automation</h2>
              <p className="sales-page-desc-new" style={{ marginTop: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Work with the email applications you already use every day. Whether your company uses Microsoft Outlook or Gmail, no one needs to change the way they work, so everyone stays productive.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Route, sort and filter incoming emails automatically.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Dreamwarez CRM handles incoming emails and route them to the right opportunities or sales team. New leads are created on the fly and interested salespersons are notified automatically.
              </p>
            </div>

            {/* Right Column: Email thread mockup client */}
            <div className="sales-page-image-col lg:justify-end reveal reveal-fade-right">
              <div className="glass-card crm-email-thread" style={{ padding: '20px', borderRadius: '24px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 12px 30px rgba(0,0,0,0.04)', maxWidth: '500px', width: '100%' }}>
                <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-secondary)', paddingBottom: '10px', display: 'flex', justifyItems: 'center', gap: '8px' }}>
                  <span>📥 INBOX INTEGRATION</span>
                  <span style={{ color: '#0ea5e9' }}>• Outlook / Gmail Synced</span>
                </div>
                
                {/* Email 1 */}
                <div style={{ background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-glass)', borderRadius: '14px', padding: '12px', display: 'flex', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '12px', flexShrink: 0 }}>R</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: '800' }}>
                      <span style={{ color: 'var(--text-primary)' }}>Ronit Wagh (Deco Addict)</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>9:15 AM</span>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: '750', color: '#0ea5e9' }}>Re: Demo request for inventory module</span>
                    <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      "I have a friend working at Topic Technologies. He told me they plan to upgrade their backup servers within the next 2 months. I think someone should contact them..."
                    </p>
                  </div>
                </div>

                {/* Email 2 */}
                <div style={{ background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-glass)', borderRadius: '14px', padding: '12px', display: 'flex', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#8b5cf6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '12px', flexShrink: 0 }}>C</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: '800' }}>
                      <span style={{ color: 'var(--text-primary)' }}>Contact Clinic</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Yesterday</span>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: '750', color: 'var(--text-primary)' }}>New lead generated via website form</span>
                    <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      "The next version of our products catalog is scheduled for next month. Our product team sent me their updated document listing the prices and costs, and I updated our catalog..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Collaborative Agenda */}
        <section className="sales-page-section-redesign alternate">

          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
            <h2 className="erp-page-title-new">Collaborative Agenda</h2>
            <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', marginTop: '8px', marginBottom: '0' }}>Calendar synchronization across team members</p>
          </div>

          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '0 24px', maxWidth: '1350px', margin: '0 auto' }}>
            {/* Left Column: Calendar Image */}
            <div className="sales-page-image-col lg:justify-start reveal reveal-fade-left">
              <div className="border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-full hover:scale-[1.03] transition-transform duration-500 overflow-hidden">
                <img src={crmCalendar} alt="Collaborative Agenda" className="w-full h-auto rounded-xl block" />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-right">
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Schedule your meetings and phone calls using the integrated calendar. You can see your agenda and your colleagues' in one view. As a manager, it's easy to see what your team is busy with.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Keep everyone aligned with real-time calendar synchronization. Sync seamlessly with external calendar providers like Google Calendar and Microsoft Outlook, enabling automatic timezone adjustments and status updates.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Boost sales efficiency by triggering automatic reminders and client notification alerts directly from opportunities, ensuring no lead is missed.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Customize Your Sales Cycle */}
        <section className="sales-page-section-redesign relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="sales-page-grid-redesign relative z-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '60px 24px', maxWidth: '1350px', margin: '0 auto' }}>
            {/* Left Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-left">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>CYCLE BUILDER</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
              <h2 className="erp-page-title-new">Customize Your Sales Cycle</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', marginTop: '8px', marginBottom: '0' }}>It Fits Your Sales Approach</p>
              <p className="sales-page-desc-new" style={{ marginTop: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Customize your sales cycle by configuring sales stages that perfectly fit your sales approach.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Control statistics to get accurate forecasts to improve your sales performance at every stage of your customer relationship.
              </p>
            </div>

            <div className="sales-page-image-col lg:justify-end reveal reveal-fade-right">
              <div className="w-full max-w-[500px]">
                <img 
                  src={salesDashboard} 
                  alt="Sales Pipeline Dashboard" 
                  className="w-full h-auto object-contain rounded-3xl" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', background: 'linear-gradient(180deg, transparent, rgba(16, 185, 129, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
              Power Up Your Workflow With Integrations Into Your Favourite Tools
            </h2>
            <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#7A7A7A', boxShadow: '0 4px 15px rgba(122, 122, 122, 0.2)' }}>
              Contact Us
            </a>
          </div>
        </section>

      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}