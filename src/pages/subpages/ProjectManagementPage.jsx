import React, { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import officeWalk from '../../assets/office_walk.png';
import mrpScheduling from '../../assets/mrp_scheduling.png';
import mrpBom from '../../assets/mrp_bom.png';
import erpAccounting from '../../assets/erp_accounting.png';
import easyToUseDashboard from '../../assets/easy_to_use_dashboard.png';
import workspaceHands from '../../assets/collab_workspace_ui.png';
import mrpAnalytics from '../../assets/alerts_dashboard_ui.png';
import timesheetsInvoicingSticker from '../../assets/timesheets_invoicing_sticker.jpg';
import bugTrackerSticker from '../../assets/bug_tracker_sticker.jpg';
import projectHeroPhoto from '../../assets/project_hero_photo.jpg';

export function ProjectManagementPage() {
  const [showSimulator, setShowSimulator] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Database Migration', stage: 'To Do', owner: 'R', priority: 'High' },
    { id: 2, title: 'UI Redesign & Tailwind', stage: 'In Progress', owner: 'I', priority: 'Medium' },
    { id: 3, title: 'API Gateway Integration', stage: 'Review', owner: 'D', priority: 'High' },
    { id: 4, title: 'Write Walkthrough Docs', stage: 'Done', owner: 'S', priority: 'Low' },
  ]);

  const [ganttTasks, setGanttTasks] = useState([
    { id: 1, name: 'Planning', duration: 4, color: 'bg-blue-500' },
    { id: 2, name: 'Design', duration: 6, color: 'bg-purple-500' },
    { id: 3, name: 'Development', duration: 12, color: 'bg-emerald-500' },
    { id: 4, name: 'Testing', duration: 5, color: 'bg-cyan-500' }
  ]);

  const moveTask = (taskId, newStage) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, stage: newStage } : t));
  };

  const updateDuration = (taskId, increment) => {
    setGanttTasks(ganttTasks.map(t => {
      if (t.id === taskId) {
        const nextDur = Math.max(1, t.duration + increment);
        return { ...t, duration: nextDur };
      }
      return t;
    }));
  };

  const totalProjectDays = ganttTasks.reduce((acc, t) => acc + t.duration, 0);
  const LabelBadge = ({ children, className = '' }) => {
    const isCentered = className.includes('center') || className.includes('mx-auto') || className.includes('justify-center');
    return (
      <div className={`flex ${isCentered ? 'justify-center' : 'justify-start'} mb-4 ${className}`}>
        <div className="inline-flex flex-col items-start gap-1.5">
          <span className="text-[#8B2C2C] font-bold text-[14px] uppercase tracking-widest">
            {children}
          </span>
          <div className="flex gap-1.5">
            <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
            <div className="w-4 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container software-theme-page">
      
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Project Management" />

      <main className="main-content">
        <section className="relative bg-white pt-8 pb-10 md:pt-10 md:pb-12 min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full" style={{ maxWidth: '1350px' }}>
            {/* Left Content */}
            <div className="md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up pr-8">
              <LabelBadge className="mb-8 left">
                AGILE ENGINE
              </LabelBadge>

              {/* Title */}
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-6 max-w-[700px]">
                Project <span style={{ color: '#7A7A7A' }}>Management</span>
              </h1>

              {/* Paragraph */}
              <p className="text-[16px] text-black font-semibold leading-relaxed max-w-[600px] mb-4">
                Infinitely Flexible. Incredibly Easy to Use.
              </p>
              <p className="text-[16px] text-black leading-relaxed max-w-[600px]">
                Dreamwarez collaborative and real time project management helps your team gets work done. Keep track of everything, from big picture to minute details, from customer contacts to the billing.
              </p>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-end z-0 reveal reveal-fade-left">
              <div 
                className="w-full max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100" 
                style={{ borderRadius: '24px' }}
              >
                <img 
                  src={projectHeroPhoto} 
                  alt="Project Management Workstation" 
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '24px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Designed to Fit Your Own Process Section */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 text-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up">
              <LabelBadge className="tracking-widest justify-center">
                PROCESS CONFIGURATION
              </LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Designed to Fit Your Own Process</h2>
              <p className="text-black text-[16px] max-w-3xl mx-auto mt-4 leading-relaxed">
                Organize projects around your own processes. Work on tasks and issues using the kanban view, schedule tasks using the gantt chart and control deadlines in the calendar view. Every project may have it's own stages allowing teams to optimize their job.
              </p>
            </div>

            {/* Original 3-Column Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="overflow-hidden rounded-lg border border-slate-100">
                  <img src={mrpScheduling} alt="Kanban View" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="block mt-4 font-bold text-slate-700">Kanban View</span>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="overflow-hidden rounded-lg border border-slate-100">
                  <img src={mrpBom} alt="Gantt Chart" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="block mt-4 font-bold text-slate-700">Gantt Chart</span>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '300ms' }}>
                <div className="overflow-hidden rounded-lg border border-slate-100">
                  <img src={erpAccounting} alt="Calender View" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="block mt-4 font-bold text-slate-700">Calender View</span>
              </div>
            </div>

            {/* Expandable Simulator Tab */}
            <div className="mt-12 reveal reveal-fade-up">
              <button 
                onClick={() => setShowSimulator(!showSimulator)}
                className="bg-[#7A7A7A] hover:bg-[#616161] text-white font-bold px-6 py-3 rounded-full shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
              >
                {showSimulator ? 'Hide Live Simulator' : '⚡ Try Interactive Simulator'}
              </button>

              {showSimulator && (
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 text-left bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-lg max-w-[1350px] mx-auto animate-fade-in px-6">
                  {/* Sprint Board */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                    <div className="flex justify-between items-center mb-6 pb-3 border-b border-slate-200">
                      <h4 className="font-heading font-bold text-slate-800">Sprint Board Sandbox</h4>
                      <span className="text-[14px] text-blue-500 font-bold bg-blue-50 px-2 py-0.5 rounded">Click cards to shift stages</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2.5">
                      {['To Do', 'In Progress', 'Review', 'Done'].map(stage => (
                        <div key={stage} className="bg-white/60 rounded-xl p-2 min-h-[180px]">
                          <span className="block text-[14px] font-bold text-slate-400 uppercase mb-3 text-center">{stage}</span>
                          <div className="flex flex-col gap-2">
                            {tasks.filter(t => t.stage === stage).map(t => (
                              <div 
                                key={t.id} 
                                onClick={() => {
                                  const stages = ['To Do', 'In Progress', 'Review', 'Done'];
                                  const nextIdx = (stages.indexOf(t.stage) + 1) % stages.length;
                                  moveTask(t.id, stages[nextIdx]);
                                }}
                                className="bg-white border border-slate-200 p-2 rounded-lg shadow-xs cursor-pointer hover:border-blue-500 transition-all hover:scale-[1.02]"
                              >
                                <span className="block text-[14px] font-bold text-slate-700 leading-tight mb-1">{t.title}</span>
                                <div className="flex justify-between items-center mt-2">
                                  <span className="w-4 h-4 rounded-full bg-blue-500 text-white text-[14px] font-extrabold flex items-center justify-center">{t.owner}</span>
                                  <span className={`text-[14px] font-extrabold px-1 rounded-sm uppercase ${t.priority === 'High' ? 'bg-red-50 text-red-600' : t.priority === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-black'}`}>{t.priority}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gantt Scheduler */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-6 pb-3 border-b border-slate-200">
                        <h4 className="font-heading font-bold text-slate-800">Dynamic Gantt Scheduler</h4>
                        <span className="text-[14px] text-blue-500 font-bold bg-blue-50 px-2 py-0.5 rounded">Total: {totalProjectDays} Days</span>
                      </div>
                      <div className="flex flex-col gap-4">
                        {ganttTasks.map(gt => (
                          <div key={gt.id} className="grid grid-cols-12 items-center gap-3">
                            <span className="col-span-3 text-[14px] font-bold text-slate-700">{gt.name}</span>
                            <div className="col-span-6 flex items-center bg-white border border-slate-200 h-5 rounded-md overflow-hidden relative">
                              <div className={`h-full ${gt.color} rounded-md`} style={{ width: `${(gt.duration / 20) * 100}%` }}></div>
                              <span className="absolute right-2 text-[14px] font-extrabold text-black">{gt.duration}d</span>
                            </div>
                            <div className="col-span-3 flex gap-1 justify-end">
                              <button 
                                onClick={() => updateDuration(gt.id, -1)}
                                className="w-6 h-6 border border-slate-250 bg-white hover:bg-slate-50 rounded flex items-center justify-center text-[14px] font-bold cursor-pointer"
                              >-</button>
                              <button 
                                onClick={() => updateDuration(gt.id, 1)}
                                className="w-6 h-6 border border-slate-250 bg-white hover:bg-slate-50 rounded flex items-center justify-center text-[14px] font-bold cursor-pointer"
                              >+</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Alternating Sections matching Slide 1 & 2 */}

        {/* Easy to Use */}
        <section className="py-20">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full lg:max-w-[580px]" style={{ transitionDelay: '150ms' }}>
              <LabelBadge>PRODUCTIVITY</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Easy to Use</h2>
              <p className="text-[16px] text-black mt-4 leading-relaxed font-semibold">
                Get organized as fast as you can think.
              </p>
              <p className="text-[16px] text-black mt-3 leading-relaxed">
                The easy-to-use interface taken no time to learn, and every action is instantaneous, so there's nothing standing between you and your sweet productive flow.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center" style={{ transitionDelay: '300ms' }}>
              {/* Premium Browser Mockup */}
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[550px] w-full">
                  <img src={easyToUseDashboard} alt="Easy to Use screenshot" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Together */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full lg:max-w-[580px] lg:ml-auto" style={{ transitionDelay: '100ms' }}>
              <LabelBadge>COLLABORATION</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Work Together</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Messaging, Document Sharing, E-mail Integration</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Use the chatter to communicate with your team or customers and share comments and documents on tasks and issues.
              </p>
              <p className="text-[16px] text-black mt-3 leading-relaxed">
                Integrate discussion fast with the email integration.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center" style={{ transitionDelay: '250ms' }}>
              <div className="flex justify-center lg:justify-start hover:-translate-y-2 transition-transform duration-500 w-full">
                <div className="max-w-[550px] w-full">
                  <img src={workspaceHands} alt="Work Together screenshot" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Work Done */}
        <section className="py-20">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-right flex flex-col justify-center w-full lg:max-w-[580px]" style={{ transitionDelay: '150ms' }}>
              <LabelBadge>ALERTS & INDICATORS</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Get Work Done</h2>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Get alerts on followed events to stay up to date with what instant green/red visual indicators to scan through what has been done what requires your attention.
              </p>
            </div>
            
            <div className="reveal reveal-fade-left mx-auto w-full flex justify-center" style={{ transitionDelay: '300ms' }}>
              <div className="flex justify-center lg:justify-end hover:scale-[1.03] transition-transform duration-500 w-full">
                <div className="max-w-[550px] w-full">
                  <img src={mrpAnalytics} alt="Get Work Done screenshot" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Time-sheets, Contracts & Invoicing */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full lg:max-w-[580px] lg:ml-auto" style={{ transitionDelay: '100ms' }}>
              <LabelBadge>CONTRACTS & BILLING</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Time-sheets, Contracts & Invoicing</h2>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Projects are automatically integrated with customer contracts allowing you to invoice based on time & materials and record timesheets easily.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center" style={{ transitionDelay: '250ms' }}>
              <div className="flex justify-center lg:justify-start hover:-translate-y-2 transition-transform duration-500 w-full">
                <div className="max-w-[380px] w-full">
                  <img src={timesheetsInvoicingSticker} alt="Timesheet illustration" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Track Issues */}
        <section className="py-20">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-right flex flex-col justify-center w-full lg:max-w-[580px]" style={{ transitionDelay: '150ms' }}>
              <LabelBadge>SUPPORT HELP-DESK</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Track Issues</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Support Services ,Help-desk, Bug Tracker, etc.</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Single out the issue that arise in a project in order to have better focus on resolving them. Integrate customer interactions on every issue and get accurate report on your team's performance.
              </p>
            </div>
            
            <div className="reveal reveal-fade-left mx-auto w-full flex justify-center" style={{ transitionDelay: '300ms' }}>
              {/* Illustration alignment */}
              <div className="flex justify-center lg:justify-end hover:scale-[1.03] transition-transform duration-500 w-full">
                <div className="max-w-[380px] w-full">
                  <img src={bugTrackerSticker} alt="Track Issues illustration" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action Section */}
      <section className="purchase-cta-section reveal reveal-fade-up" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.02))' }}>
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="glass-card relative z-10" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '40px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
                Power Up Your Workflow With Integrations Into Your Favourite Tools
              </h2>
              <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#7a7a7a', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)' }}>
                Contact Us
              </a>
            </div>
          </section>
      </main>

      <SiteFooter />
      <ChatWidget />
    </div>
  );
}