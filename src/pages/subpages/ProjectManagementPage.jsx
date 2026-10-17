import React, { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import mrpScheduling from '../../assets/mrp_scheduling.png';
import mrpBom from '../../assets/mrp_bom.png';
import erpAccounting from '../../assets/erp_accounting.png';
import easyToUseDashboard from '../../assets/easy_to_use_dashboard.png';
import workspaceHands from '../../assets/collab_workspace_ui.png';
import mrpAnalytics from '../../assets/alerts_dashboard_ui.png';
import timesheetsInvoicingSticker from '../../assets/timesheets_invoicing_sticker.jpg';
import bugTrackerSticker from '../../assets/bug_tracker_sticker.jpg';
import projectHeroPhoto from '../../assets/project_hero_photo.jpg';

const SectionLabel = ({ children, align = 'left' }) => {
  const isCentered = align === 'center';
  return (
    <div className={`inline-flex flex-col ${isCentered ? 'items-center' : 'items-start'} gap-1.5 mb-3 sm:mb-4`}>
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

  return (
    <div className="app-container software-theme-page overflow-x-hidden">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO 
        title="Project Management Software | Dreamwarez"
        description="Infinitely flexible, collaborative agile project management with Kanban boards, Gantt charts, timesheets, and issue tracking."
      />

      <main className="main-content">
        {/* Hero Section */}
        <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 min-h-[auto] lg:min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up md:pr-6 text-center md:text-left items-center md:items-start">
              <SectionLabel>AGILE ENGINE</SectionLabel>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-4 sm:mb-6 max-w-[700px]">
                Project <span className="text-[#7A7A7A]">Management</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl font-bold text-slate-800 leading-snug max-w-[600px] mb-2 sm:mb-3">
                Infinitely Flexible. Incredibly Easy to Use.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-[600px] mb-6 sm:mb-8">
                Dreamwarez collaborative and real-time project management helps your team get work done. Keep track of everything, from the big picture to minute details, from customer contacts to billing.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.24)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.35)] transition-all cursor-pointer text-center"
                >
                  Request a Demo &rarr;
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 sm:p-3 shadow-xl border border-slate-100 rounded-2xl sm:rounded-3xl">
                <img 
                  src={projectHeroPhoto} 
                  alt="Project Management Workstation" 
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Designed to Fit Your Own Process Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto text-center relative z-10">
            <div className="reveal reveal-fade-up">
              <SectionLabel align="center">PROCESS CONFIGURATION</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Designed to Fit Your Own Process
              </h2>
              <p className="text-slate-700 text-sm sm:text-base max-w-3xl mx-auto mt-3 sm:mt-4 leading-relaxed">
                Organize projects around your own processes. Work on tasks and issues using the Kanban view, schedule tasks using the Gantt chart, and control deadlines in the calendar view. Every project can have custom stages allowing teams to optimize execution.
              </p>
            </div>

            {/* 3-Column Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm reveal reveal-fade-up">
                <div className="overflow-hidden rounded-xl border border-slate-100 aspect-[4/3] flex items-center justify-center bg-slate-50">
                  <img src={mrpScheduling} alt="Kanban View" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="block mt-4 font-bold text-slate-800 text-base">Kanban View</span>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm reveal reveal-fade-up">
                <div className="overflow-hidden rounded-xl border border-slate-100 aspect-[4/3] flex items-center justify-center bg-slate-50">
                  <img src={mrpBom} alt="Gantt Chart" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="block mt-4 font-bold text-slate-800 text-base">Gantt Chart</span>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm reveal reveal-fade-up sm:col-span-2 md:col-span-1">
                <div className="overflow-hidden rounded-xl border border-slate-100 aspect-[4/3] flex items-center justify-center bg-slate-50">
                  <img src={erpAccounting} alt="Calendar View" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="block mt-4 font-bold text-slate-800 text-base">Calendar View</span>
              </div>
            </div>

            {/* Expandable Simulator Tab */}
            <div className="mt-8 sm:mt-12 reveal reveal-fade-up">
              <button 
                onClick={() => setShowSimulator(!showSimulator)}
                className="w-full sm:w-auto bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-full shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                {showSimulator ? '✕ Hide Live Simulator' : '⚡ Try Interactive Simulator'}
              </button>

              {showSimulator && (
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 text-left bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg max-w-[1350px] mx-auto animate-fade-in">
                  {/* Sprint Board */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 pb-3 border-b border-slate-200 gap-2">
                      <h4 className="font-heading font-bold text-slate-800 text-base sm:text-lg">Sprint Board Sandbox</h4>
                      <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-full">Tap cards to shift stages</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                      {['To Do', 'In Progress', 'Review', 'Done'].map(stage => (
                        <div key={stage} className="bg-white/80 rounded-xl p-2.5 min-h-[140px] sm:min-h-[180px] border border-slate-100">
                          <span className="block text-xs font-bold text-slate-500 uppercase mb-2.5 text-center">{stage}</span>
                          <div className="flex flex-col gap-2">
                            {tasks.filter(t => t.stage === stage).map(t => (
                              <div 
                                key={t.id} 
                                onClick={() => {
                                  const stages = ['To Do', 'In Progress', 'Review', 'Done'];
                                  const nextIdx = (stages.indexOf(t.stage) + 1) % stages.length;
                                  moveTask(t.id, stages[nextIdx]);
                                }}
                                className="bg-white border border-slate-200 p-2.5 rounded-lg shadow-xs cursor-pointer hover:border-blue-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
                              >
                                <span className="block text-xs sm:text-sm font-bold text-slate-700 leading-tight mb-2">{t.title}</span>
                                <div className="flex justify-between items-center">
                                  <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-extrabold flex items-center justify-center">{t.owner}</span>
                                  <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase ${t.priority === 'High' ? 'bg-red-50 text-red-600' : t.priority === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-600'}`}>{t.priority}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gantt Scheduler */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 pb-3 border-b border-slate-200 gap-2">
                        <h4 className="font-heading font-bold text-slate-800 text-base sm:text-lg">Dynamic Gantt Scheduler</h4>
                        <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-full">Total: {totalProjectDays} Days</span>
                      </div>
                      <div className="flex flex-col gap-3 sm:gap-4">
                        {ganttTasks.map(gt => (
                          <div key={gt.id} className="flex flex-col sm:grid sm:grid-cols-12 items-start sm:items-center gap-2 sm:gap-3 p-2 bg-white rounded-xl border border-slate-100">
                            <span className="sm:col-span-3 text-xs sm:text-sm font-bold text-slate-700">{gt.name}</span>
                            <div className="w-full sm:col-span-6 flex items-center bg-slate-100 border border-slate-200 h-6 rounded-md overflow-hidden relative">
                              <div className={`h-full ${gt.color} rounded-md transition-all duration-300`} style={{ width: `${Math.min(100, (gt.duration / 20) * 100)}%` }}></div>
                              <span className="absolute right-2 text-xs font-bold text-slate-700">{gt.duration}d</span>
                            </div>
                            <div className="sm:col-span-3 flex gap-1.5 justify-end self-end sm:self-auto">
                              <button 
                                onClick={() => updateDuration(gt.id, -1)}
                                className="w-7 h-7 border border-slate-200 bg-slate-50 hover:bg-slate-100 active:scale-95 rounded flex items-center justify-center text-sm font-bold cursor-pointer"
                              >-</button>
                              <button 
                                onClick={() => updateDuration(gt.id, 1)}
                                className="w-7 h-7 border border-slate-200 bg-slate-50 hover:bg-slate-100 active:scale-95 rounded flex items-center justify-center text-sm font-bold cursor-pointer"
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

        {/* Section 1: Easy to Use */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start">
              <SectionLabel>PRODUCTIVITY</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Easy to Use
              </h2>
              <p className="text-base sm:text-lg font-bold text-slate-800 mt-2">
                Get organized as fast as you can think.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mt-2 sm:mt-3 leading-relaxed max-w-xl">
                The easy-to-use interface takes no time to learn, and every action is instantaneous, so there's nothing standing between you and your sweet productive flow.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[550px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={easyToUseDashboard} alt="Easy to Use screenshot" className="w-full h-auto rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Work Together */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[550px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={workspaceHands} alt="Work Together screenshot" className="w-full h-auto rounded-xl" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start lg:ml-auto">
              <SectionLabel>COLLABORATION</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Work Together
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Messaging, Document Sharing, E-mail Integration
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Use the chatter to communicate with your team or customers and share comments and documents on tasks and issues. Integrate discussions swiftly with automated email notifications.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Get Work Done */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start">
              <SectionLabel>ALERTS &amp; INDICATORS</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Get Work Done
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Get alerts on followed events to stay up to date with instant green/red visual indicators to scan through what has been completed and what requires your immediate attention.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[550px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={mrpAnalytics} alt="Get Work Done screenshot" className="w-full h-auto rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Time-sheets, Contracts & Invoicing */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[400px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={timesheetsInvoicingSticker} alt="Timesheet illustration" className="w-full h-auto rounded-xl" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start lg:ml-auto">
              <SectionLabel>CONTRACTS &amp; BILLING</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Time-sheets, Contracts &amp; Invoicing
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Projects are automatically integrated with customer contracts allowing you to invoice based on time &amp; materials and record timesheets easily.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Track Issues */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start">
              <SectionLabel>SUPPORT HELP-DESK</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Track Issues
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Support Services, Help-desk, Bug Tracker, etc.
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Single out issues that arise in a project in order to maintain laser focus on resolving them. Integrate customer interactions on every ticket and get accurate reports on team resolution performance.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[400px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={bugTrackerSticker} alt="Track Issues illustration" className="w-full h-auto rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action Section */}
        <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[900px] mx-auto p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50/50 shadow-sm flex flex-col items-center gap-4 sm:gap-6 relative z-10">
            <SectionLabel align="center">GET STARTED</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
              Power Up Your Workflow With Integrations Into Your Favourite Tools
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