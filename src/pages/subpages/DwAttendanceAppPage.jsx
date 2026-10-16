import React, { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import dwAttendanceScreens from '../../assets/dw_attendance_screens.png';

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

export function DwAttendanceAppPage() {
  const [activeTab, setActiveTab] = useState('attendance');
  const [simulatedClockedIn, setSimulatedClockedIn] = useState(false);
  const [clockInTime, setClockInTime] = useState(null);

  const keyFeatures = [
    {
      title: 'Smart Attendance Check-In / Check-Out',
      desc: 'One-tap mobile punch with instant timestamp registration. Quick, accurate, and foolproof for on-site or remote staff.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Real-Time Attendance Tracking',
      desc: 'Live centralized dashboard showing present members, in-progress shifts, and check-in times across all departments in real time.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Task Assignment & Progress Updates',
      desc: 'Assign daily or sprint tasks directly to employees. Monitor real-time progress, task status flags, and team workload balances.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Simple Leave Request & Approval System',
      desc: 'Staff can submit leave applications with dates and reasons in seconds. Managers review, validate, or decline with one click.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Monthly Reports for Performance & Presence',
      desc: 'Generate automated monthly summaries for team presence, cumulative work hours, late check-ins, and performance metrics.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Seamless Integration with Backend Systems',
      desc: 'Effortlessly links into company ERP, payroll software, HRMS databases, and reporting APIs without data duplication.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7zm0 4h16M7 16h3" />
        </svg>
      )
    }
  ];

  const handleTogglePunch = () => {
    if (!simulatedClockedIn) {
      const now = new Date();
      setClockInTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setSimulatedClockedIn(true);
    } else {
      setSimulatedClockedIn(false);
    }
  };

  return (
    <div className="app-container open-sans-scope" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO 
        title="DW Attendance App - Employee Management App | Dreamwarez" 
        description="Dreamwarez Attendance is an all-in-one employee management app that lets you track attendance, manage tasks, and handle leave requests effortlessly."
      />

      <main className="main-content">
        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[auto] lg:min-h-[calc(100vh-80px)] pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 bg-white relative overflow-hidden flex items-center">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Content */}
              <div className="lg:col-span-6 text-left reveal reveal-fade-left">
                <SectionLabel className="mb-4" align="left">
                  Employee Management Hub
                </SectionLabel>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 font-heading tracking-tight leading-[1.1] mb-4 sm:mb-5">
                  DW Attendance <span className="text-[#0EA5E9]">App</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-800 font-semibold mb-3 sm:mb-4 leading-relaxed">
                  Dreamwarez Attendance is an all-in-one employee management app that lets you track attendance, manage tasks, and handle leave requests effortlessly.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                  Designed for modern teams, it ensures real-time updates, smooth workflows, and accurate reporting—all in one place.
                  Whether you&apos;re tracking daily attendance, assigning and managing tasks, or handling leave requests, this app brings everything into one smooth experience.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <a
                    href="/contact/#contact-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center"
                  >
                    <span>Request Live Demo</span>
                    <span>&rarr;</span>
                  </a>
                  <a
                    href="#key-features"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold text-sm sm:text-base py-3.5 px-7 rounded-full border border-slate-200 shadow-xs hover:shadow transition-all text-center"
                  >
                    Explore Features
                  </a>
                </div>

                {/* Quick Spec Pills */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Live Sync Ready
                  </span>
                  <span className="flex items-center gap-1.5 bg-sky-50 text-sky-700 px-3 py-1.5 rounded-full border border-sky-100">
                    ✓ Native Android &amp; iOS
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200">
                    ⚡ ERP &amp; Payroll Integrated
                  </span>
                </div>
              </div>

              {/* Right Column: App Screens Showcase Graphic */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end reveal reveal-fade-right mt-4 lg:mt-0">
                <div className="relative w-full max-w-[620px] group">
                  {/* Outer ambient glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 via-teal-300/20 to-[#8B2C2C]/20 rounded-3xl blur-2xl group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Card wrapper */}
                  <div className="relative bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl shadow-slate-300/60 overflow-hidden">
                    <div className="flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 mb-2 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500 inline-block"></span>
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400 inline-block"></span>
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 inline-block"></span>
                        <span className="text-[11px] sm:text-xs font-bold text-slate-700 ml-1 sm:ml-2 font-mono">Dreamwarez Attendance v2.4</span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md">
                        Official Release
                      </span>
                    </div>

                    <img 
                      src={dwAttendanceScreens} 
                      alt="DW Attendance App Screen Suite - Login, Dashboard, Employees, Attendance Hub, Calendar, and Payroll" 
                      className="w-full h-auto rounded-xl sm:rounded-2xl object-contain shadow-inner group-hover:scale-[1.01] transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT THIS APP INTRO ================= */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200/70 reveal reveal-fade-up">
          <div className="max-w-[1100px] mx-auto text-center">
            <SectionLabel align="center">
              ABOUT THIS APP
            </SectionLabel>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mt-4 sm:mt-5 leading-tight max-w-4xl mx-auto">
              Everything Your Workforce Needs in One Smooth Experience
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mt-4 sm:mt-6 max-w-3xl mx-auto">
              This is a powerful and easy-to-use app for employee management. Whether you&apos;re tracking daily attendance, assigning and managing tasks, or handling leave requests, this app brings everything into one smooth experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 text-left">
              <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-black text-xl mb-4">
                  ⚡
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-2">Streamline Workflows</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Eliminate paperwork, manual registers, and fragmented spreadsheets. Digitize all punch records and approvals.
                </p>
              </div>

              <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xl mb-4">
                  🎯
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-2">Improve Accountability</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Timestamped check-ins, automated leave tracking, and task status milestones ensure absolute transparency across all pods.
                </p>
              </div>

              <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-xl mb-4">
                  ⏱️
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-2">Save Valuable Time</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ideal for businesses looking for efficient employee monitoring and task coordination with instant payroll calculation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= KEY FEATURES SECTION ================= */}
        <section id="key-features" className="scroll-mt-20 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white reveal reveal-fade-up">
          <div className="max-w-[1350px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
              <SectionLabel align="center">
                CORE CAPABILITIES
              </SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mt-3 sm:mt-4">
                Key Features of DW Attendance App
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 sm:mt-3">
                Tailored with intelligent tools that keep workforce management effortless and modern.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 hover:border-[#0EA5E9] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0EA5E9] group-hover:bg-[#0EA5E9] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-4 sm:mb-5">
                      {feat.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#0EA5E9] transition-colors">
                    <span>Feature #{String(idx + 1).padStart(2, '0')}</span>
                    <span>Active In App →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE WORKFLOW PREVIEW ================= */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200/70 reveal reveal-fade-up">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <SectionLabel align="center">
                HANDS-ON SIMULATOR
              </SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mt-3 sm:mt-4">
                Experience the App Modules
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2">
                Click between modules below to preview how staff and supervisors interact with the DW Attendance platform.
              </p>
            </div>

            {/* Tab navigation */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8">
              {[
                { id: 'attendance', label: '1. Smart Attendance Hub' },
                { id: 'dashboard', label: '2. Employee Dashboard' },
                { id: 'leave', label: '3. Leave & Calendar' },
                { id: 'tasks', label: '4. Task Management' },
                { id: 'reports', label: '5. Reports & Payroll' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Interactive Preview Card */}
            <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg max-w-4xl mx-auto">
              {activeTab === 'attendance' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div>
                    <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                      Module: Clock-In &amp; Hub
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading mt-3 mb-2 sm:mb-3">
                      Real-Time Attendance Hub
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6">
                      Employees tap to check in with real-time timestamping. Managers can view team members (Ashitosh, Abhishek, Swami, Disha), punch timings, and download daily attendance logs on demand.
                    </p>

                    <div className="p-3.5 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200/80 mb-4 sm:mb-6">
                      <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Simulated Punch Test</div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900">
                            Status: {simulatedClockedIn ? '🟢 Checked In' : '⚪ Not Clocked In'}
                          </div>
                          <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                            {simulatedClockedIn ? `Timestamp: Today at ${clockInTime}` : 'Tap button to simulate punch'}
                          </div>
                        </div>
                        <button
                          onClick={handleTogglePunch}
                          className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                            simulatedClockedIn
                              ? 'bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100'
                              : 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700'
                          }`}
                        >
                          {simulatedClockedIn ? 'Check Out Now' : 'Check In Now'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200">
                    <div className="text-[11px] sm:text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Live Hub Overview</div>
                    <div className="space-y-2.5 sm:space-y-3">
                      <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/90 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <span className="w-8 h-8 rounded-full bg-sky-100 text-[#0284C7] font-extrabold text-xs flex items-center justify-center">AR</span>
                          <div>
                            <div className="text-xs font-extrabold text-slate-900">Ashitosh</div>
                            <div className="text-[10px] text-emerald-600 font-semibold">Check-In: 09:28:10</div>
                          </div>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">View Report</span>
                      </div>

                      <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/90 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">A</span>
                          <div>
                            <div className="text-xs font-extrabold text-slate-900">Abhishek</div>
                            <div className="text-[10px] text-emerald-600 font-semibold">Check-In: 09:34:40</div>
                          </div>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">View Report</span>
                      </div>

                      <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/90 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">S</span>
                          <div>
                            <div className="text-xs font-extrabold text-slate-900">Swami</div>
                            <div className="text-[10px] text-emerald-600 font-semibold">Check-In: 09:35:11</div>
                          </div>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">View Report</span>
                      </div>

                      <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/90 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">D</span>
                          <div>
                            <div className="text-xs font-extrabold text-slate-900">Disha</div>
                            <div className="text-[10px] text-emerald-600 font-semibold">Check-In: 11:23:45</div>
                          </div>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">View Report</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'dashboard' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div>
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                      Module: Dashboard
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading mt-3 mb-2 sm:mb-3">
                      Clean &amp; Intuitive Employee Dashboard
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      Employees land directly on a clutter-free home screen displaying personalized greeting, profile details, and 4 high-priority action cards: Attendance, Apply Leave, Tasks, and Holidays.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs font-medium text-slate-700">
                      <li className="flex items-center gap-2">✓ Instant access to attendance punching</li>
                      <li className="flex items-center gap-2">✓ Direct one-click leave applications</li>
                      <li className="flex items-center gap-2">✓ Real-time task board synchronization</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200">
                    <div className="text-[11px] sm:text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Dashboard Grid</div>
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                      <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 text-center shadow-xs hover:border-sky-400 transition-colors">
                        <div className="text-xl sm:text-2xl mb-1">👤</div>
                        <div className="text-xs font-bold text-slate-800">Attendance</div>
                      </div>
                      <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 text-center shadow-xs hover:border-sky-400 transition-colors">
                        <div className="text-xl sm:text-2xl mb-1">📋</div>
                        <div className="text-xs font-bold text-slate-800">Apply Leave</div>
                      </div>
                      <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 text-center shadow-xs hover:border-sky-400 transition-colors">
                        <div className="text-xl sm:text-2xl mb-1">✅</div>
                        <div className="text-xs font-bold text-slate-800">Tasks</div>
                      </div>
                      <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 text-center shadow-xs hover:border-sky-400 transition-colors">
                        <div className="text-xl sm:text-2xl mb-1">📅</div>
                        <div className="text-xs font-bold text-slate-800">Holidays</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'leave' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                      Module: Leave &amp; Holidays
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading mt-3 mb-2 sm:mb-3">
                      Holiday Calendar &amp; Leave Approvals
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      Keep teams aligned on upcoming public holidays, regional closures, and approved employee leaves with the integrated monthly calendar view.
                    </p>
                    <div className="text-xs text-slate-500 space-y-1">
                      <p>• Visual calendar with highlighted off-days and corporate milestones</p>
                      <p>• Automatic leave balance calculation against paid/unpaid quotas</p>
                      <p>• Instant push notifications for leave approvals and rejections</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 text-center">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-extrabold text-xs sm:text-sm text-slate-800">July 2025</span>
                      <span className="text-[10px] sm:text-xs font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">Month View</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-[10px] sm:text-[11px] font-bold text-slate-400 mb-2">
                      <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-[11px] sm:text-xs font-semibold text-slate-700">
                      <span className="text-slate-300">29</span><span className="text-slate-300">30</span><span>1</span><span>2</span><span>3</span><span>4</span><span className="bg-sky-500 text-white rounded-full">5</span>
                      <span className="bg-rose-500 text-white rounded-full">6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>
                      <span className="bg-rose-500 text-white rounded-full">13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tasks' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                      Module: Task Coordination
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading mt-3 mb-2 sm:mb-3">
                      Task Assignment &amp; Milestones
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      Assign project objectives, track sprint statuses, and get daily work updates. Helps project leaders distribute assignments and keep delivery timelines on track.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-700">
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Priority Flagging</span>
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span> Real-Time Deadlines</span>
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span> Pod Review</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-2.5">
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                      <div>
                        <div className="text-xs font-bold text-slate-900">Sprint Delivery QA Audit</div>
                        <div className="text-[10px] text-slate-500">Assigned to: Ashitosh (Senior Dev)</div>
                      </div>
                      <span className="self-start sm:self-auto text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">In Progress</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                      <div>
                        <div className="text-xs font-bold text-slate-900">Database Schema Migration</div>
                        <div className="text-[10px] text-slate-500">Assigned to: Backend Team</div>
                      </div>
                      <span className="self-start sm:self-auto text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">Pending Review</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reports' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div>
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                      Module: Reports &amp; Payroll
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading mt-3 mb-2 sm:mb-3">
                      Monthly Reporting &amp; Payroll Sync
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      Export comprehensive reports on attendance rates, total work hours, overtime, and leave deductions. Directly calculate salaries and bonuses with the integrated payroll system.
                    </p>
                    <div className="text-xs font-semibold text-slate-600 space-y-1">
                      <div>✓ One-click PDF &amp; Excel report export</div>
                      <div>✓ Payroll integration with salary &amp; bonus modules</div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200">
                    <div className="text-[11px] sm:text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Payroll Integration</div>
                    <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 space-y-2.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Employee:</span>
                        <span className="font-bold text-slate-900">Ashitosh (Full-Stack)</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Days Present:</span>
                        <span className="font-bold text-emerald-600">22 / 22 Days (100%)</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Payroll Calculation:</span>
                        <span className="font-bold text-slate-900">Calculated &amp; Verified</span>
                      </div>
                      <div className="pt-2 border-t border-slate-100 flex justify-end">
                        <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                          Audit Ready
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= WORK WITH US CTA ================= */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 max-w-[1200px] mx-4 sm:mx-auto relative border border-slate-200 shadow-xl rounded-2xl sm:rounded-3xl mt-12 sm:mt-16 mb-16 sm:mb-20 bg-white reveal reveal-fade-up">
          <div className="max-w-[1000px] mx-auto text-center">
            <SectionLabel align="center" className="mb-4">
              DEPLOY FOR YOUR ORGANIZATION
            </SectionLabel>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-3 sm:mb-4">
              Ready to Streamline Your Team&apos;s Attendance?
            </h2>

            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
              Ideal for businesses looking for efficient employee monitoring, task coordination, and hassle-free payroll records. Connect with our engineering team for deployment and customization.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="/contact/#contact-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm sm:text-base px-8 py-3.5 sm:py-4 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.24)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.35)] transition-all cursor-pointer text-center"
              >
                <span>Deploy DW Attendance App &rarr;</span>
              </a>
              <a
                href="/our-apps/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-700 font-bold text-sm sm:text-base px-7 py-3.5 sm:py-4 rounded-full transition-colors text-center"
              >
                <span>View All Applications</span>
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
export default DwAttendanceAppPage;
