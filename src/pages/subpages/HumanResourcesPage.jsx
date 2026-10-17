import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import hrHero3d from '../../assets/hr_hero_3d.png';
import hrLeaveManagement from '../../assets/hr_leave_management.jpg';
import hrTimesheetsImage from '../../assets/hr_timesheets.jpg';
import hrExpensesImage from '../../assets/hr_expenses_clean.jpg';
import hrEmployeeProfile from '../../assets/hr_employee_profile.png';
import hrSocialNetwork from '../../assets/hr_social_network.png';

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

export function HumanResourcesPage() {
  return (
    <div className="app-container software-theme-page overflow-x-hidden">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO 
        title="Human Resources Management System (HRMS) | Dreamwarez"
        description="Streamline corporate directories, leave management, time tracking, employee expenses, and internal collaboration with Dreamwarez HRMS software."
      />

      <main className="main-content">
        {/* Hero Section */}
        <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 min-h-[auto] lg:min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up md:pr-6 text-center md:text-left items-center md:items-start">
              <SectionLabel>DREAMWAREZ HRMS</SectionLabel>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-4 sm:mb-6 max-w-[700px]">
                Human <span className="text-[#7A7A7A]">Resources</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-[600px] mb-6 sm:mb-8">
                HRMS Human Resource Software is a widely demanded platform designed to streamline and automate diverse HR processes across your organization.
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
              <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px]">
                <img 
                  src={hrHero3d} 
                  alt="Human Resources Dashboard" 
                  className="w-full h-auto object-contain rounded-2xl drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Intro Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0ea5e9]/[0.08] to-transparent [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
          </div>
          
          <div className="max-w-[900px] mx-auto relative z-10 text-center">
            <div className="reveal reveal-fade-up">
              <SectionLabel align="center">SYSTEM OVERVIEW</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading leading-tight mb-6 sm:mb-8">
                Streamline &amp; Automate Your HR Workflow
              </h2>
            </div>
            
            <div className="flex flex-col gap-4 sm:gap-6 text-sm sm:text-base text-slate-700 leading-relaxed text-center sm:text-left reveal reveal-fade-up">
              <p className="font-semibold text-base sm:text-lg text-slate-900 text-center">
                HRMS Human Resource Software is a widely demanded software designed to streamline and automate diverse HR processes within an organization.
              </p>
              <p>
                It provides a centralized platform for managing employee data, onboarding, recruitment, leave management, time and attendance tracking, training, performance evaluation, and payroll.
              </p>
              <p>
                HRMS Human Resource Software helps in simplifying HR administrative tasks, improves efficiency, and also ensures compliance with labor regulations.
              </p>
              <p>
                It allows HR professionals to access accurate employee information, analyze data and generate reports, to make informed decisions.
              </p>
              <p className="font-medium text-slate-800 text-center">
                This software facilitates effective communication, enhances employee engagement, and promotes organizational transparency with recognized user-friendliness.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Manage Your Employees */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column: Image */}
            <div className="reveal reveal-fade-left flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[480px] rounded-2xl bg-white border border-slate-200/80 p-2 sm:p-3 shadow-md hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <img src={hrEmployeeProfile} alt="Employee Profile Showcase" className="w-full h-auto rounded-xl block" />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="reveal reveal-fade-right flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-1 lg:order-2">
              <SectionLabel>EMPLOYEE DIRECTORY</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mt-2 sm:mt-3 leading-tight">
                Manage Your Employees
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Keep Your Corporate Directory Structured
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Oversee all important information in your company address book. Some information are restricted to HR managers, others are public to easily look colleagues.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mt-2 sm:mt-3 leading-relaxed max-w-xl">
                Record employee contracts and get alerts when they have to be renewed.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Leave Management */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            {/* Left Column: Text */}
            <div className="reveal reveal-fade-left flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <SectionLabel>LEAVE &amp; VACATION</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mt-2 sm:mt-3 leading-tight">
                Leave Management
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Manage Holidays, Legal Leaves And Sick Days
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Keep track of vacation days accrued by each employee. Employees enter their requests (paid holidays, sick leave, etc.) for managers to approve and validate in just a few clicks.
              </p>
              <p className="text-sm sm:text-base text-slate-700 mt-2 sm:mt-3 leading-relaxed max-w-xl">
                The corporate agenda and calendar of each employee is automatically updated accordingly.
              </p>
            </div>

            {/* Right Column: Leave Management Image */}
            <div className="reveal reveal-fade-right flex justify-center lg:justify-end">
              <div className="w-full max-w-[480px] rounded-2xl bg-white border border-slate-200/80 p-2 sm:p-3 shadow-md hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <img src={hrLeaveManagement} alt="Leave Management Showcase" className="w-full h-auto rounded-xl block" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Track Time And Attendances */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column: Timesheet Image */}
            <div className="reveal reveal-fade-left flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[480px] rounded-2xl bg-white border border-slate-200/80 p-2 sm:p-3 shadow-md hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <img src={hrTimesheetsImage} alt="Timesheet Showcase" className="w-full h-auto rounded-xl block" />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="reveal reveal-fade-right flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-1 lg:order-2">
              <SectionLabel>TIME TRACKING</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mt-2 sm:mt-3 leading-tight">
                Track Time And Attendances
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Weekly Or Monthly Time-Sheets With Optional Attendance Tracking
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Keep track of the time spent by project, client, or task. It's effortless to record timesheets or check attendances for every member of your team.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Keep Track Of Employee Expenses */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            {/* Left Column: Text */}
            <div className="reveal reveal-fade-left flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <SectionLabel>EXPENSE WORKFLOW</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mt-2 sm:mt-3 leading-tight">
                Keep Track Of Employee Expenses
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Expenses submission and validation flow
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Get rid of paperwork and follow employee expenses directly in Dreamwarez. Don't lose time or money by controlling the complete workflow: expense submission, validation, reimbursement, accounting posting, and client re-invoicing.
              </p>
            </div>

            {/* Right Column: Expense Image */}
            <div className="reveal reveal-fade-right flex justify-center lg:justify-end">
              <div className="w-full max-w-[480px] rounded-2xl bg-white border border-slate-200/80 p-2 sm:p-3 shadow-md hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <img src={hrExpensesImage} alt="Expenses Showcase" className="w-full h-auto rounded-xl block" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Enterprise Social Network */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column: Social Collaborative Screenshot */}
            <div className="reveal reveal-fade-left flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[480px] rounded-2xl bg-white border border-slate-200/80 p-2 sm:p-3 shadow-md hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <img src={hrSocialNetwork} alt="Enterprise Social Network Feed" className="w-full h-auto rounded-xl block" />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="reveal reveal-fade-right flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-1 lg:order-2">
              <SectionLabel>INTERNAL NETWORK</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mt-2 sm:mt-3 leading-tight">
                Enterprise Social Network
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Collaborate Across Departments, Geographies And Business Applications
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Break down information silos and share knowledge and best practices among all employees. Follow colleagues or important documents, and join special interest channels to share expertise seamlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
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