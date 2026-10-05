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

export function HumanResourcesPage() {



  return (
    <div className="app-container" style={{ '--text-secondary': '#000000' }}>
    
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Human Resources" />

      <main className="main-content">
        <section className="relative bg-white min-h-screen pt-32 pb-16 overflow-hidden flex items-center border-b border-slate-100">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full relative z-10" style={{ maxWidth: '1350px' }}>
            {/* Left Content */}
            <div className="md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up pr-8">
              {/* Subtitle */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '12px', fontWeight: '750', textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>DREAMWAREZ HRMS</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-12 max-w-[700px]">
                Human <span style={{ color: '#7A7A7A' }}>Resources</span>
              </h1>

              {/* Paragraph */}
              <p className="text-lg text-black leading-relaxed max-w-[600px]">
                HRMS Human Resource Software is a widely demanded software designed to streamline and automate diverse HR processes within an organization.
              </p>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-end z-0 reveal reveal-fade-left">
              <div className="relative w-full max-w-[450px]">
                <img 
                  src={hrHero3d} 
                  alt="Human Resources" 
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Intro Section */}
        <section className="py-20 bg-slate-50/40 border-b border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0ea5e9]/[0.08] to-transparent [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
          </div>
          
          <div className="mx-auto px-6 relative z-10 text-center" style={{ maxWidth: '900px' }}>
            <div className="flex justify-center mb-6">
              <div className="inline-flex flex-col items-center gap-1.5">
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '750', textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>
                  SYSTEM OVERVIEW
                </span>
                <div className="flex gap-1.5">
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
            </div>
            
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-slate-900 font-heading leading-tight mb-8">
              Streamline & Automate Your HR Workflow
            </h2>
            
            <div className="flex flex-col gap-6 text-[16px] text-black leading-relaxed max-w-4xl mx-auto">
              <p className="font-semibold text-lg text-slate-800">
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
              <p className="font-medium text-slate-800">
                This software facilitates effective communication, enhances employee engagement, and promotes organizational transparency. We have gained high rising appreciation for its user friendliness.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Manage Your Employees */}
        <section className="sales-page-section-redesign !py-8 md:!py-12">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '45px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '40px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Manage Your Employees</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Keep Your Corporate Directory Structured</p>
          </div>

          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '0 24px', maxWidth: '1350px', margin: '0 auto' }}>
            {/* Left Column: Manage Your Employees Image */}
            <div className="sales-page-image-col reveal reveal-fade-left">
              <div className="border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-full hover:scale-[1.03] transition-transform duration-500 overflow-hidden">
                <img src={hrEmployeeProfile} alt="Employee Profile Showcase" className="w-full h-auto rounded-xl block" />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-right" style={{ justifyContent: 'center' }}>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6' }}>
                Oversee all important information in your company address book.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6', marginTop: '10px' }}>
                Some information are restricted to HR managers, others are public to easily look colleagues.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6', marginTop: '10px' }}>
                Record employee contracts and get alerts when they have to be renewed.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Leave Management */}
        <section className="sales-page-section-redesign alternate !py-8 md:!py-12" style={{ background: 'rgba(255,255,255,0.02)', position: 'relative', overflow: 'hidden' }}>
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="section-header centered relative z-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '45px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '40px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Leave Management</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Manage Holidays, Legal Leaves And Sick Days</p>
          </div>

          <div className="sales-page-grid-redesign relative z-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '0 24px', maxWidth: '1350px', margin: '0 auto' }}>
            {/* Left Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-left" style={{ justifyContent: 'center' }}>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6' }}>
                Keep track of vacation day accrued by each employee.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6', marginTop: '10px' }}>
                Employees enter their request (paid holidays, sick leave, etc.), for managers to approve and validate. Its all done in just a few clicks.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6', marginTop: '10px' }}>
                The agenda of each employee is updated accordingly.
              </p>
            </div>

            {/* Right Column: Leave Management Image */}
            <div className="sales-page-image-col lg:justify-end reveal reveal-fade-right">
              <div className="border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-full hover:scale-[1.03] transition-transform duration-500 overflow-hidden">
                <img src={hrLeaveManagement} alt="Leave Management Showcase" className="w-full h-auto rounded-xl block" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Track Time And Attendances */}
        <section className="sales-page-section-redesign !py-8 md:!py-12">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '45px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '40px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Track Time And Attendances</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Weekly Or Monthly Time-Sheets With Optional Attendance Tracking</p>
          </div>

          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '0 24px', maxWidth: '1350px', margin: '0 auto' }}>
            {/* Left Column: Timesheet Image */}
            <div className="sales-page-image-col reveal reveal-fade-left">
              <div className="border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-full hover:scale-[1.03] transition-transform duration-500 overflow-hidden">
                <img src={hrTimesheetsImage} alt="Timesheet Showcase" className="w-full h-auto rounded-xl block" />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-right" style={{ justifyContent: 'center' }}>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6' }}>
                Keep track of the time spent by project, client or task.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6', marginTop: '10px' }}>
                It's easy to record timesheets or check attendances for each employee.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Keep Track Of Employee Expenses */}
        <section className="sales-page-section-redesign alternate !py-8 md:!py-12" style={{ background: 'rgba(255,255,255,0.02)', position: 'relative', overflow: 'hidden' }}>
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="section-header centered relative z-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '45px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '40px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Keep Track Of Employee Expenses</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Expenses submission and validation flow</p>
          </div>

          <div className="sales-page-grid-redesign relative z-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '0 24px', maxWidth: '1350px', margin: '0 auto' }}>
            {/* Left Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-left" style={{ justifyContent: 'center' }}>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6' }}>
                Get rid of the paper work and follow employee expenses directly in Dreamwarez.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6', marginTop: '10px' }}>
                Don't loose time or money by controlling the full flow: expense, validation, reimbursement of employees, posting in the accounting and re-invoicing to customers.
              </p>
            </div>

            {/* Right Column: Expense Image */}
            <div className="sales-page-image-col reveal reveal-fade-right" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div className="border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-full hover:scale-[1.03] transition-transform duration-500 overflow-hidden">
                <img src={hrExpensesImage} alt="Expenses Showcase" className="w-full h-auto rounded-xl block" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Enterprise Social Network */}
        <section className="sales-page-section-redesign !py-8 md:!py-12">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '45px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '40px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Enterprise Social Network</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Collaborate Across Departments, Geographies And Business Applications</p>
          </div>

          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '0 24px', maxWidth: '1350px', margin: '0 auto' }}>
            {/* Left Column: Social Collaborative Screenshot */}
            <div className="sales-page-image-col reveal reveal-fade-left">
              <div className="border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-full hover:scale-[1.03] transition-transform duration-500 overflow-hidden">
                <img src={hrSocialNetwork} alt="Enterprise Social Network Feed" className="w-full h-auto rounded-xl block" />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-right" style={{ justifyContent: 'center' }}>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6' }}>
                Break down information silos.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6', marginTop: '10px' }}>
                Share knowledge and best practices among all employees.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6', marginTop: '10px' }}>
                Follow specific people or documents and join groups of interests to share expertise and documents.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
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