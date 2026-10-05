import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import { Interactive3DSticker } from '../../components/layout/Interactive3DSticker';

// ERP custom assets
import erpHeroBg from '../../assets/erp_hero_bg.png';
import erpHeroImg from '../../assets/erp_hero.jpg';
import erpSales from '../../assets/erp_sales.png';
import erpPurchase from '../../assets/erp_purchase.png';
import erpWarehouse from '../../assets/erp_warehouse.png';
import erpAccounting from '../../assets/erp_accounting.png';
import erpMrp from '../../assets/erp_mrp.png';
import erpBi from '../../assets/tablet_graphs.png';
import erpSocial from '../../assets/team_meeting.png';

export function ErpPage() {
  return (
    <div className="app-container software-theme-page">
      
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="ERP Solutions" />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="relative bg-white pt-48 pb-16 overflow-hidden flex items-center border-b border-slate-100">
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
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C',  fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1'  }}>CORE PLATFORM</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-12 max-w-[700px]">
                Enterprise <span style={{ color: '#7A7A7A' }}>Management System</span>
              </h1>
              <p className="text-lg text-black leading-relaxed max-w-[600px]">
                Build, manage, automate, and integrate custom ERP solutions that reflect your organization's unique business processes.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-end z-0 reveal reveal-fade-left">
              <div 
                className="w-full max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100" 
                style={{ borderRadius: '24px' }}
              >
                <img 
                  src={erpHeroImg} 
                  alt="Enterprise Management System" 
                  className="w-full h-full object-cover" 
                  style={{ borderRadius: '24px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="erp-features-section reveal reveal-fade-up" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
          <div className="erp-features-container">
            <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                  <span style={{ color: '#8B2C2C',  fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1'  }}>CAPABILITIES</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                    <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  </div>
                </div>
              </div>
              <h2 className="section-title" style={{ fontSize: '40px', fontWeight: '800', fontFamily: '"Open Sans", sans-serif', marginBottom: '20px', lineHeight: '1.2', color: '#000000' }}>Features</h2>
            </div>
            <div className="erp-features-grid" style={{ position: 'relative', zIndex: 1 }}>
              <div className="erp-feature-card reveal reveal-scale" style={{ transitionDelay: '0ms' }}>
                <div className="erp-feature-icon browser-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
                    <line x1="2" y1="8" x2="22" y2="8" />
                    <line x1="6" y1="5" x2="6" y2="5.01" />
                    <line x1="10" y1="5" x2="10" y2="5.01" />
                    <line x1="14" y1="5" x2="14" y2="5.01" />
                  </svg>
                </div>
                <h3>Works In Your Web Browser</h3>
                <p>Can run on any device that can display websites with little to no setup required.</p>
              </div>

              <div className="erp-feature-card reveal reveal-scale" style={{ transitionDelay: '100ms' }}>
                <div className="erp-feature-icon offline-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3>No Internet Required</h3>
                <p>If installed on premise you can access in full offline mode in your LAN or wifi.</p>
              </div>

              <div className="erp-feature-card reveal reveal-scale" style={{ transitionDelay: '200ms' }}>
                <div className="erp-feature-icon cloud-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.5 19A4.5 4.5 0 0 0 22 14.5c0-2.25-1.66-4.12-3.88-4.44A7 7 0 0 0 4.56 12.06A4.5 4.5 0 0 0 5.5 21h12c.34 0 .67-.04 1-.12" />
                  </svg>
                </div>
                <h3>Cloud Based Option</h3>
                <p>Faster updates, access from anywhere in the world with internet connection, hassle free backups.</p>
              </div>

              <div className="erp-feature-card reveal reveal-scale" style={{ transitionDelay: '300ms' }}>
                <div className="erp-feature-icon mobile-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12" y2="18.01" />
                  </svg>
                </div>
                <h3>Mobile Compatible</h3>
                <p>Responsive design allows the system to adapt to any screen size.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Module Sections */}
        
        {/* Sales Management */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10" style={{ maxWidth: '1350px' }}>
            {/* Left Column: Text Content */}
            <div className="erp-page-text-col reveal reveal-fade-left">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>SALES MODULE</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
              <h2 className="erp-page-title-new">Sales Management</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', marginTop: '8px', marginBottom: '0' }}>Quotation, Sales Order And Invoicing</p>
              <p className="erp-page-desc-new">
                This application allows you to manage your goals in an effective and efficient manner by keeping track of all sales and order in history.
              </p>
              <p className="erp-page-desc-new">It handles full scale workflow.</p>
              <p className="erp-page-desc-new" style={{ marginTop: '10px', fontSize: '18px', fontWeight: '800', color: '#000000' }}>Quotations ➔ Sales order ➔ Invoice</p>
              <div style={{ marginTop: '15px' }}>
                <a href="/erp/sales-management/" className="cta-button">Explore More</a>
              </div>
            </div>

            <div className="w-full flex items-center justify-center lg:justify-end reveal reveal-fade-right">
              <div className="border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-[500px] w-full hover:scale-[1.03] transition-transform duration-500 overflow-hidden">
                {/* Odoo Sales Order View */}
                <div style={{ borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', width: '100%', fontFamily: '"Open Sans", sans-serif', position: 'relative' }}>
                  
                  {/* Top Header Bar */}
                  <div style={{ background: '#714B67', padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', fontSize: '11px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ fontSize: '13px' }}>⣿</span> Sales
                      </span>
                      <span style={{ opacity: 0.9 }}>Orders</span>
                      <span style={{ opacity: 0.9 }}>To Invoice</span>
                      <span style={{ opacity: 0.9 }}>Products</span>
                      <span style={{ opacity: 0.9 }}>Reporting</span>
                      <span style={{ opacity: 0.9 }}>Configuration</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>💬 <span style={{ background: '#dc2626', borderRadius: '50%', padding: '0px 3px', fontSize: '8px' }}>5</span></span>
                      <span>🔔</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" style={{ width: '14px', height: '14px', borderRadius: '50%' }} alt="Admin" />
                        <span style={{ fontSize: '9px' }}>Mitchell Admin</span>
                      </div>
                    </div>
                  </div>

                  {/* Subheader Bar */}
                  <div style={{ background: '#f8fafc', padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', fontSize: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: '#64748b' }}>Quotations</span>
                      <span style={{ color: '#94a3b8' }}>/</span>
                      <span style={{ fontWeight: 'bold', color: '#1e293b' }}>S00043</span>
                      <button style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '2px 6px', borderRadius: '3px', cursor: 'default', fontWeight: 'bold', marginLeft: '4px', fontSize: '9px' }}>Edit</button>
                      <button style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '2px 6px', borderRadius: '3px', cursor: 'default', fontWeight: 'bold', fontSize: '9px' }}>Create</button>
                    </div>
                    {/* Pipeline Stage Badges */}
                    <div style={{ display: 'flex', border: '1px solid #cbd5e1', borderRadius: '3px', overflow: 'hidden', background: '#f1f5f9' }}>
                      {['Quotation', 'Quotation Sent', 'Sales Order'].map((stage, idx) => {
                        const isActive = stage === 'Sales Order';
                        return (
                          <span 
                            key={stage} 
                            style={{ 
                              padding: '2px 8px', 
                              background: isActive ? '#714B67' : 'transparent', 
                              color: isActive ? 'white' : '#475569', 
                              fontWeight: isActive ? 'bold' : 'normal',
                              borderRight: idx < 2 ? '1px solid #cbd5e1' : 'none',
                              fontSize: '9px'
                            }}
                          >
                            {stage}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Main Form Body */}
                  <div style={{ padding: '10px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
                    
                    {/* Action buttons */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>Create Invoice</button>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>Send by Email</button>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>Cancel</button>
                      </div>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>🖨 Print</button>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>⚙ Action</button>
                      </div>
                    </div>

                    {/* Sheet Card */}
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', position: 'relative', overflow: 'hidden' }}>
                      
                      {/* Customer Preview button */}
                      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                        <div style={{ border: '1px solid #cbd5e1', borderRadius: '4px', padding: '3px 6px', display: 'flex', gap: '4px', alignItems: 'center', fontSize: '9px', background: '#f8fafc' }}>
                          <span>🌐</span>
                          <span style={{ fontSize: '8px', color: '#64748b' }}>Customer Preview</span>
                        </div>
                      </div>

                      {/* Title Header */}
                      <div style={{ marginBottom: '12px' }}>
                        <h3 style={{ margin: '2px 0 6px 0', fontSize: '15px', fontWeight: 'bold', color: '#1e293b' }}>
                          S00043
                        </h3>
                      </div>

                      {/* Fields Table */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '10px', fontSize: '9px', marginBottom: '14px' }}>
                        {/* Left Fields Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'flex-start' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Customer</span>
                            <div>
                              <span style={{ color: '#0284c7', fontWeight: 'bold', display: 'block' }}>Erk N. French</span>
                              <span style={{ color: '#475569', display: 'block' }}>1920 Del Dew Drive</span>
                              <span style={{ color: '#475569', display: 'block' }}>Chevy Chase</span>
                              <span style={{ color: '#475569', display: 'block' }}>Australia</span>
                            </div>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Invoice Address</span>
                            <span style={{ color: '#475569' }}>Erk N. French</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Delivery Address</span>
                            <span style={{ color: '#475569' }}>Erk N. French</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Quotation Template</span>
                            <span style={{ color: '#cbd5e1' }}>—</span>
                          </div>
                        </div>

                        {/* Right Fields Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Order Date</span>
                            <span>03/30/2025 11:39:20</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Pricelist</span>
                            <span>Public Pricelist (INR)</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Payment Terms</span>
                            <span style={{ color: '#cbd5e1' }}>—</span>
                          </div>
                        </div>
                      </div>

                      {/* Sheet Tabs */}
                      <div style={{ display: 'flex', gap: '12px', borderBottom: '1px solid #e2e8f0', marginTop: '10px', paddingBottom: '3px', fontSize: '10px' }}>
                        <span style={{ fontWeight: 'bold', color: '#714B67', borderBottom: '2px solid #714B67', paddingBottom: '3px', cursor: 'default' }}>Order Lines</span>
                        <span style={{ color: '#64748b', paddingBottom: '3px', cursor: 'default' }}>Other Info</span>
                      </div>

                      {/* Order Lines Table */}
                      <div style={{ marginTop: '8px', fontSize: '9px', width: '100%', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                          <thead>
                            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 'bold' }}>
                              <th style={{ padding: '4px' }}>Product</th>
                              <th style={{ padding: '4px' }}>Description</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>Quantity</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>Delivered</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>Invoiced</th>
                              <th style={{ padding: '4px' }}>UoM</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>Unit Price</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>Taxes</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>Subtotal</th>
                              <th style={{ padding: '4px', width: '20px' }}></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ padding: '6px 4px', color: '#475569' }}>Service on Timesheet</td>
                              <td style={{ padding: '6px 4px', color: '#64748b' }}>Service on Timesheet</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right' }}>1.00</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right', color: '#64748b' }}>0.00</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right', color: '#64748b' }}>0.00</td>
                              <td style={{ padding: '6px 4px', color: '#64748b' }}>Hours</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right' }}>1,000.00</td>
                              <td style={{ padding: '6px 4px', color: '#94a3b8', textAlign: 'right' }}>—</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right', fontWeight: 'bold' }}>$ 1,000.00</td>
                              <td style={{ padding: '6px 4px', textAlign: 'center', color: '#ef4444', cursor: 'default' }}>🗑</td>
                            </tr>
                          </tbody>
                        </table>
                        <div style={{ display: 'flex', gap: '8px', color: '#0284c7', marginTop: '6px', fontSize: '8px' }}>
                          <span style={{ cursor: 'default' }}>Add a product</span>
                          <span>|</span>
                          <span style={{ cursor: 'default' }}>Add a section</span>
                          <span>|</span>
                          <span style={{ cursor: 'default' }}>Add a note</span>
                        </div>
                      </div>

                      {/* Totals Section */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '10px', fontSize: '9px' }}>
                        <div style={{ color: '#64748b' }}>
                          Terms & Conditions: http://159.65.148.9:8080/terms
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '150px', fontWeight: 'bold', fontSize: '11px' }}>
                          <span style={{ marginRight: '8px' }}>Total:</span>
                          <span>$ 1,000.00</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Purchase Management */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="w-full flex items-center justify-center lg:justify-start reveal reveal-fade-left">
              <div className="border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-[500px] w-full hover:scale-[1.03] transition-transform duration-500 overflow-hidden">
                {/* Odoo Purchase Order View */}
                <div style={{ borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', width: '100%', fontFamily: '"Open Sans", sans-serif', position: 'relative' }}>
                  
                  {/* Top Header Bar */}
                  <div style={{ background: '#714B67', padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', fontSize: '11px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ fontSize: '13px' }}>⣿</span> Purchase
                      </span>
                      <span style={{ opacity: 0.9 }}>Orders</span>
                      <span style={{ opacity: 0.9 }}>Products</span>
                      <span style={{ opacity: 0.9 }}>Reporting</span>
                      <span style={{ opacity: 0.9 }}>Configuration</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>💬 <span style={{ background: '#dc2626', borderRadius: '50%', padding: '0px 3px', fontSize: '8px' }}>5</span></span>
                      <span>🔔</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" style={{ width: '14px', height: '14px', borderRadius: '50%' }} alt="Admin" />
                        <span style={{ fontSize: '9px' }}>Mitchell Admin</span>
                      </div>
                    </div>
                  </div>

                  {/* Subheader Bar */}
                  <div style={{ background: '#f8fafc', padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', fontSize: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: '#64748b' }}>Requests for Quotation</span>
                      <span style={{ color: '#94a3b8' }}>/</span>
                      <span style={{ fontWeight: 'bold', color: '#1e293b' }}>P00007</span>
                      <button style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '2px 6px', borderRadius: '3px', cursor: 'default', fontWeight: 'bold', marginLeft: '4px', fontSize: '9px' }}>Edit</button>
                      <button style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '2px 6px', borderRadius: '3px', cursor: 'default', fontWeight: 'bold', fontSize: '9px' }}>Create</button>
                    </div>
                    {/* Pipeline Stage Badges */}
                    <div style={{ display: 'flex', border: '1px solid #cbd5e1', borderRadius: '3px', overflow: 'hidden', background: '#f1f5f9' }}>
                      {['RFQ', 'RFQ Sent', 'Purchase Order'].map((stage, idx) => {
                        const isActive = stage === 'RFQ';
                        return (
                          <span 
                            key={stage} 
                            style={{ 
                              padding: '2px 8px', 
                              background: isActive ? '#714B67' : 'transparent', 
                              color: isActive ? 'white' : '#475569', 
                              fontWeight: isActive ? 'bold' : 'normal',
                              borderRight: idx < 2 ? '1px solid #cbd5e1' : 'none',
                              fontSize: '9px'
                            }}
                          >
                            {stage}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Main Form Body */}
                  <div style={{ padding: '10px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
                    
                    {/* Action buttons */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button style={{ background: '#714B67', color: 'white', border: 'none', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', fontWeight: 'bold', cursor: 'default' }}>Send by Email</button>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>Print RFQ</button>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>Confirm Order</button>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>Cancel</button>
                      </div>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>🖨 Print</button>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>⚙ Action</button>
                      </div>
                    </div>

                    {/* Sheet Card */}
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', position: 'relative', overflow: 'hidden' }}>
                      
                      {/* Title Header */}
                      <div style={{ marginBottom: '12px' }}>
                        <div style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: 'bold' }}>Request for Quotation</div>
                        <h3 style={{ margin: '2px 0 6px 0', fontSize: '15px', fontWeight: 'bold', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span style={{ color: '#94a3b8' }}>☆</span> P00007
                        </h3>
                      </div>

                      {/* Fields Table */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '10px', fontSize: '9px', marginBottom: '14px' }}>
                        {/* Left Fields Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Vendor</span>
                            <span style={{ color: '#0284c7', fontWeight: 'bold' }}>Ready Mat</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Vendor Reference</span>
                            <span style={{ color: '#cbd5e1' }}>—</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Currency</span>
                            <span style={{ color: '#0284c7' }}>EUR</span>
                          </div>
                        </div>

                        {/* Right Fields Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Order Deadline</span>
                            <span>03/27/2025 18:33:04</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Receipt Date</span>
                            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                              <span>03/27/2025 18:33:04</span>
                              <span style={{ color: '#714B67', fontSize: '8px' }}>No On-time Delivery Data</span>
                            </div>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}></span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                              <input type="checkbox" readOnly checked={false} style={{ pointerEvents: 'none' }} />
                              <span style={{ color: '#64748b' }}>Ask confirmation</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sheet Tabs */}
                      <div style={{ display: 'flex', gap: '12px', borderBottom: '1px solid #e2e8f0', marginTop: '10px', paddingBottom: '3px', fontSize: '10px' }}>
                        <span style={{ fontWeight: 'bold', color: '#714B67', borderBottom: '2px solid #714B67', paddingBottom: '3px', cursor: 'default' }}>Products</span>
                        <span style={{ color: '#64748b', paddingBottom: '3px', cursor: 'default' }}>Other Information</span>
                      </div>

                      {/* Products Table */}
                      <div style={{ marginTop: '8px', fontSize: '9px', width: '100%', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                          <thead>
                            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 'bold' }}>
                              <th style={{ padding: '4px' }}>Product</th>
                              <th style={{ padding: '4px' }}>Description</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>Quantity</th>
                              <th style={{ padding: '4px' }}>UoM</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>Unit Price</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>Taxes</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>Subtotal</th>
                              <th style={{ padding: '4px', width: '20px' }}></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                              <td style={{ padding: '6px 4px', color: '#475569' }}>[FURN_0269] Office Chair Black</td>
                              <td style={{ padding: '6px 4px', color: '#64748b' }}>[FURN_0269] Office Chair Black</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right' }}>5.00</td>
                              <td style={{ padding: '6px 4px', color: '#64748b' }}>Units</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right' }}>130.50</td>
                              <td style={{ padding: '6px 4px', color: '#94a3b8', textAlign: 'right' }}>—</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right', fontWeight: 'bold' }}>652.50 €</td>
                              <td style={{ padding: '6px 4px', textAlign: 'center', color: '#ef4444', cursor: 'default' }}>🗑</td>
                            </tr>
                            <tr>
                              <td style={{ padding: '6px 4px', color: '#475569' }}>[FURN_8888] Office Lamp</td>
                              <td style={{ padding: '6px 4px', color: '#64748b' }}>[FURN_8888] Office Lamp</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right' }}>15.00</td>
                              <td style={{ padding: '6px 4px', color: '#64748b' }}>Units</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right' }}>38.00</td>
                              <td style={{ padding: '6px 4px', color: '#94a3b8', textAlign: 'right' }}>—</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right', fontWeight: 'bold' }}>570.00 €</td>
                              <td style={{ padding: '6px 4px', textAlign: 'center', color: '#ef4444', cursor: 'default' }}>🗑</td>
                            </tr>
                          </tbody>
                        </table>
                        <div style={{ display: 'flex', gap: '8px', color: '#0284c7', marginTop: '6px', fontSize: '8px' }}>
                          <span style={{ cursor: 'default' }}>Add a product</span>
                          <span>|</span>
                          <span style={{ cursor: 'default' }}>Add a section</span>
                          <span>|</span>
                          <span style={{ cursor: 'default' }}>Add a note</span>
                        </div>
                      </div>

                      {/* Totals Section */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', fontSize: '9px' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '150px', fontWeight: 'bold', fontSize: '11px' }}>
                          <span style={{ marginRight: '8px' }}>Total:</span>
                          <span>1,222.50 €</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="erp-page-text-col reveal reveal-fade-right">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>PROCUREMENT</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
              <h2 className="erp-page-title-new">Purchase Management</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', marginTop: '8px', marginBottom: '0' }}>Purchase Orders, Receptions, Supplier Invoices</p>
              <p className="erp-page-desc-new">
                Purchase management enables you to track your suppliers’ price quotations and convert them into purchase orders if necessary.
              </p>
              <p className="erp-page-desc-new">
                Dreamwarez has several methods of monitoring invoices and tracking the receipt of ordered goods.
              </p>
              <p className="erp-page-desc-new">
                Dreamwarez’s replenishment management rules enable the system to generate draft purchase orders automatically, or you can configure it to run a lean process driven entirely by current production needs.
              </p>
              <div style={{ marginTop: '15px' }}>
                <a href="/erp/purchase-management/" className="cta-button">Explore More</a>
              </div>
            </div>
          </div>
        </section>

        {/* Warehouse/Stock Management */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10" style={{ maxWidth: '1350px' }}>
            {/* Left Column: Text Content */}
            <div className="erp-page-text-col reveal reveal-fade-left">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>INVENTORY MODULE</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
              <h2 className="erp-page-title-new">Warehouse/Stock Management</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', marginTop: '8px', marginBottom: '0' }}>Inventory, Logistic, Storage</p>
              <p className="erp-page-desc-new">
                The warehouse and inventory management is based on a hierarchical location structure, from warehouses to storage bins. The double entry inventory system allows you to manage customers, suppliers as well as manufacturing inventories.
              </p>
              <ul className="erp-bullets-list" style={{ margin: '10px 0', paddingLeft: '0px' }}>
                <li style={{ marginBottom: '6px', color: 'var(--text-secondary)' }}>Key Features</li>
                <li style={{ marginBottom: '6px', color: 'var(--text-secondary)' }}>Moves history and planning</li>
                <li style={{ marginBottom: '6px', color: 'var(--text-secondary)' }}>Stock valuation (standard or average price, …)</li>
                <li style={{ marginBottom: '6px', color: 'var(--text-secondary)' }}>Robustness faced with Inventory differences</li>
                <li style={{ marginBottom: '6px', color: 'var(--text-secondary)' }}>Automatic reordering rules</li>
              </ul>
              <div style={{ marginTop: '15px' }}>
                <a href="/erp/warehouse-stock-management/" className="cta-button">Explore More</a>
              </div>
            </div>

            <div className="w-full flex items-center justify-center lg:justify-end reveal reveal-fade-right">
              <div 
                className="w-full max-w-[500px] bg-slate-50 shadow-2xl border border-slate-200 overflow-hidden text-left font-sans" 
                style={{ borderRadius: '24px' }}
              >
                {/* Purple Header Bar */}
                <div style={{ backgroundColor: '#714B67', color: 'white', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center', fontWeight: '500' }}>
                    <span style={{ cursor: 'pointer', opacity: 0.8 }}>Warehouse</span>
                    <span style={{ fontWeight: '700', borderBottom: '2px solid white', paddingBottom: '2px' }}>Inward</span>
                    <span style={{ cursor: 'pointer', opacity: 0.8 }}>Configuration</span>
                    <span style={{ cursor: 'pointer', opacity: 0.8 }}>Sample Product Tracking</span>
                    <span style={{ cursor: 'pointer', opacity: 0.8 }}>Products</span>
                    <span style={{ cursor: 'pointer', opacity: 0.8 }}>Warehouse</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', opacity: 0.9 }}>
                    <span>💬 <span style={{ backgroundColor: '#10b981', color: 'white', borderRadius: '50%', padding: '1px 5px', fontSize: '9px' }}>9</span></span>
                    <span>🔔 <span style={{ backgroundColor: '#10b981', color: 'white', borderRadius: '50%', padding: '1px 5px', fontSize: '9px' }}>20</span></span>
                    <span style={{ fontWeight: '600' }}>My Company (San Francisco)</span>
                  </div>
                </div>

                {/* Sub-bar / Search / Action controls */}
                <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e2e8f0', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button style={{ backgroundColor: '#714B67', color: 'white', border: 'none', padding: '6px 14px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>New</button>
                    <span style={{ color: '#1e293b', fontSize: '13px', fontWeight: '600' }}>Inward <span style={{ fontSize: '11px', color: '#64748b' }}>⚙️</span></span>
                  </div>
                  
                  {/* Search bar */}
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '3px 8px', width: '200px', backgroundColor: '#f8fafc' }}>
                    <span style={{ color: '#94a3b8', fontSize: '12px', marginRight: '6px' }}>🔍</span>
                    <input type="text" placeholder="Search..." disabled style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '12px', width: '100%', color: '#475569' }} />
                    <span style={{ color: '#94a3b8', fontSize: '10px' }}>▼</span>
                  </div>

                  {/* Pagination & Layout toggles */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>1-4 / 10</span>
                    <div style={{ display: 'flex', border: '1px solid #cbd5e1', borderRadius: '4px', overflow: 'hidden' }}>
                      <button disabled style={{ border: 'none', padding: '4px 8px', background: 'white', color: '#64748b', fontSize: '11px' }}>&lt;</button>
                      <button disabled style={{ border: 'none', padding: '4px 8px', background: 'white', color: '#64748b', fontSize: '11px', borderLeft: '1px solid #cbd5e1' }}>&gt;</button>
                    </div>
                    <div style={{ display: 'flex', border: '1px solid #cbd5e1', borderRadius: '4px', overflow: 'hidden' }}>
                      <button disabled style={{ border: 'none', padding: '4px 8px', background: '#f1f5f9', color: '#475569' }}>☰</button>
                      <button disabled style={{ border: 'none', padding: '4px 8px', background: 'white', color: '#94a3b8', borderLeft: '1px solid #cbd5e1' }}>📅</button>
                    </div>
                  </div>
                </div>

                {/* Table Data view with horizontal scrolling */}
                <div style={{ overflowX: 'auto', backgroundColor: 'white' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', minWidth: '1050px' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', textAlign: 'left', color: '#475569' }}>
                        <th style={{ padding: '10px 12px', width: '30px' }}><input type="checkbox" disabled style={{ cursor: 'not-allowed' }} /></th>
                        <th style={{ padding: '10px 12px', fontWeight: '600' }}>Supplier Name</th>
                        <th style={{ padding: '10px 12px', fontWeight: '600' }}>Creation Datetime</th>
                        <th style={{ padding: '10px 12px', fontWeight: '600' }}>Supplier Invoice No.</th>
                        <th style={{ padding: '10px 12px', fontWeight: '600' }}>Supplier Challan No.</th>
                        <th style={{ padding: '10px 12px', fontWeight: '600' }}>Inward Type</th>
                        <th style={{ padding: '10px 12px', fontWeight: '600' }}>Sending Depo</th>
                        <th style={{ padding: '10px 12px', fontWeight: '600' }}>LR No</th>
                        <th style={{ padding: '10px 12px', fontWeight: '600' }}>Transporter</th>
                        <th style={{ padding: '10px 12px', fontWeight: '600' }}>Driver</th>
                        <th style={{ padding: '10px 12px', fontWeight: '600' }}>Checker Name</th>
                        <th style={{ padding: '10px 12px', fontWeight: '600' }}>Transferred By</th>
                        <th style={{ padding: '10px 12px', fontWeight: '600' }}>State</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Azure Interior', time: '02/28/2025 16:02:48', inv: 'IN0001', chal: '', type: 'Inward Through Invoice', depo: 'SELF', lr: '1', trans: 'ram', driver: 'ramu', checker: 'Abhishek', by: 'Abhishek', state: 'Invoiced', color: '#16a34a', link: true },
                        { name: 'Azure Interior', time: '02/28/2025 14:29:40', inv: '11', chal: '1', type: 'Inward Through Invoice', depo: 'SELF', lr: '', trans: 'ram', driver: 'ramu', checker: 'Swami', by: 'Swami', state: 'Invoiced', color: '#16a34a', link: true },
                        { name: 'Azure Interior', time: '02/28/2025 12:18:26', inv: '1111', chal: '12', type: '', depo: '', lr: '', trans: '', driver: '', checker: '', by: '', state: 'Draft', color: '#2563eb', link: true },
                        { name: 'Azure Interior', time: '02/27/2025 12:07:29', inv: 'IN54', chal: '45', type: 'Inward Through Challan', depo: 'SELF', lr: '4455', trans: 'ram', driver: 'ramu', checker: 'Mitchell Admin', by: 'Mitchell Admin', state: 'Invoiced', color: '#16a34a', link: true },
                        { name: 'Uruli Devachi', time: '02/27/2025 11:42:25', inv: 'IN54', chal: '45', type: 'Inward Through Challan', depo: 'SELF', lr: '4455', trans: 'ram', driver: 'ramu', checker: 'Mitchell Admin', by: '', state: 'Checked', color: '#b45309', link: false },
                        { name: 'Azure Interior', time: '02/18/2025 15:42:43', inv: 'IN987', chal: '5445', type: 'Inward Through Invoice', depo: 'SELF', lr: '654', trans: 'ram', driver: 'ramu', checker: 'Mitchell Admin', by: '', state: 'Checked', color: '#b45309', link: true },
                        { name: 'Uruli Devachi', time: '02/18/2025 15:34:44', inv: 'IN4545', chal: '45454', type: 'Inward Through Invoice', depo: 'SELF', lr: '4545', trans: 'ram', driver: 'ramu', checker: 'Mitchell Admin', by: '', state: 'Checked', color: '#b45309', link: false },
                        { name: 'cri', time: '08/22/2024 13:06:40', inv: '123', chal: '', type: 'Inward Through Challan', depo: 'SELF', lr: '2225', trans: 'ram', driver: 'ramu', checker: 'Mitchell Admin', by: '', state: 'Checked', color: '#b45309', link: false },
                        { name: 'Uruli Devachi', time: '08/07/2024 11:51:27', inv: '67', chal: '67', type: 'Inward Through Invoice', depo: 'SELF', lr: '25', trans: 'ram', driver: 'ramu', checker: 'Mitchell Admin', by: '', state: 'Checked', color: '#b45309', link: false },
                        { name: 'Uruli Devachi', time: '08/02/2024 11:35:20', inv: '1212', chal: '1212', type: 'Inward Through Invoice', depo: 'SELF', lr: '', trans: 'ram', driver: 'ramu', checker: 'Mitchell Admin', by: '', state: 'Checked', color: '#b45309', link: false }
                      ].slice(0, 4).map((row, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: idx % 2 === 1 ? '#fafafa' : 'white' }}>
                          <td style={{ padding: '8px 12px' }}><input type="checkbox" disabled style={{ cursor: 'not-allowed' }} /></td>
                          <td style={{ padding: '8px 12px', fontWeight: '600', color: row.link ? '#2563eb' : row.color }}>
                            {row.name}
                          </td>
                          <td style={{ padding: '8px 12px', color: row.color }}>{row.time}</td>
                          <td style={{ padding: '8px 12px', color: row.color }}>{row.inv}</td>
                          <td style={{ padding: '8px 12px', color: row.color }}>{row.chal}</td>
                          <td style={{ padding: '8px 12px', color: row.color }}>{row.type}</td>
                          <td style={{ padding: '8px 12px', color: row.color }}>{row.depo}</td>
                          <td style={{ padding: '8px 12px', color: row.color }}>{row.lr}</td>
                          <td style={{ padding: '8px 12px', color: row.color }}>{row.trans}</td>
                          <td style={{ padding: '8px 12px', color: row.color }}>{row.driver}</td>
                          <td style={{ padding: '8px 12px', color: row.color }}>{row.checker}</td>
                          <td style={{ padding: '8px 12px', color: row.color }}>{row.by}</td>
                          <td style={{ padding: '8px 12px', fontWeight: '700', color: row.color }}>{row.state}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accounting And E-Invoicing */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="w-full flex items-center justify-center lg:justify-start reveal reveal-fade-left">
              <div className="border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-[500px] w-full hover:scale-[1.03] transition-transform duration-500 overflow-hidden">
                {/* Odoo Invoice Detail View */}
                <div style={{ borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', width: '100%', fontFamily: '"Open Sans", sans-serif', position: 'relative' }}>
                  
                  {/* Top Header Bar */}
                  <div style={{ background: '#714B67', padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', fontSize: '11px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ fontSize: '13px' }}>⣿</span> Invoicing
                      </span>
                      <span style={{ opacity: 0.9 }}>Customers</span>
                      <span style={{ opacity: 0.9 }}>Vendors</span>
                      <span style={{ opacity: 0.9 }}>Reporting</span>
                      <span style={{ opacity: 0.9 }}>Configuration</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>💬 <span style={{ background: '#dc2626', borderRadius: '50%', padding: '0px 3px', fontSize: '8px' }}>5</span></span>
                      <span>🔔</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" style={{ width: '14px', height: '14px', borderRadius: '50%' }} alt="Admin" />
                        <span style={{ fontSize: '9px' }}>Mitchell Admin</span>
                      </div>
                    </div>
                  </div>

                  {/* Subheader Bar */}
                  <div style={{ background: '#f8fafc', padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', fontSize: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: '#64748b' }}>Invoices</span>
                      <span style={{ color: '#94a3b8' }}>/</span>
                      <span style={{ fontWeight: 'bold', color: '#1e293b' }}>INV/2025/00007</span>
                      <button style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '2px 6px', borderRadius: '3px', cursor: 'default', fontWeight: 'bold', marginLeft: '4px', fontSize: '9px' }}>Edit</button>
                      <button style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '2px 6px', borderRadius: '3px', cursor: 'default', fontWeight: 'bold', fontSize: '9px' }}>Create</button>
                    </div>
                    {/* Pipeline Stage Badges */}
                    <div style={{ display: 'flex', border: '1px solid #cbd5e1', borderRadius: '3px', overflow: 'hidden', background: '#f1f5f9' }}>
                      {['Draft', 'Posted'].map((stage, idx) => {
                        const isActive = stage === 'Posted';
                        return (
                          <span 
                            key={stage} 
                            style={{ 
                              padding: '2px 8px', 
                              background: isActive ? '#714B67' : 'transparent', 
                              color: isActive ? 'white' : '#475569', 
                              fontWeight: isActive ? 'bold' : 'normal',
                              borderRight: idx < 1 ? '1px solid #cbd5e1' : 'none',
                              fontSize: '9px'
                            }}
                          >
                            {stage}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Main Form Body */}
                  <div style={{ padding: '10px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
                    
                    {/* Action buttons */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button style={{ background: '#714B67', color: 'white', border: 'none', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', fontWeight: 'bold', cursor: 'default' }}>Send & Print</button>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>Preview</button>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>Add Credit Note</button>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>Reset to Draft</button>
                      </div>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>🖨 Print</button>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>⚙ Action</button>
                      </div>
                    </div>

                    {/* Sheet Card */}
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', position: 'relative', overflow: 'hidden' }}>
                      
                      {/* PAID green ribbon */}
                      <div style={{ position: 'absolute', top: '14px', right: '-24px', background: '#22c55e', color: 'white', fontWeight: 'bold', fontSize: '9px', padding: '3px 26px', transform: 'rotate(45deg)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', letterSpacing: '0.5px' }}>
                        PAID
                      </div>

                      {/* Title Header */}
                      <div style={{ marginBottom: '12px' }}>
                        <div style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: 'bold' }}>Customer Invoice</div>
                        <h3 style={{ margin: '2px 0 6px 0', fontSize: '15px', fontWeight: 'bold', color: '#1e293b' }}>
                          INV/2025/00007
                        </h3>
                      </div>

                      {/* Fields Table */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '10px', fontSize: '9px', marginBottom: '14px' }}>
                        {/* Left Fields Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'flex-start' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Customer</span>
                            <div>
                              <span style={{ color: '#0284c7', fontWeight: 'bold', display: 'block' }}>Azure Interior, Brandon Freeman</span>
                              <span style={{ color: '#475569', display: 'block' }}>4557 De Silva St</span>
                              <span style={{ color: '#475569', display: 'block' }}>Fremont CA 94538</span>
                              <span style={{ color: '#475569', display: 'block' }}>United States</span>
                            </div>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Delivery Address</span>
                            <span style={{ color: '#475569' }}>Azure Interior, Brandon Freeman</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Payment Reference</span>
                            <span style={{ color: '#475569' }}>INV/2025/00007</span>
                          </div>
                        </div>

                        {/* Right Fields Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Invoice Date</span>
                            <span>04/03/2025</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Due Date</span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                              <span>End of Following Month</span>
                              <span style={{ color: '#64748b' }}>in INR</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sheet Tabs */}
                      <div style={{ display: 'flex', gap: '12px', borderBottom: '1px solid #e2e8f0', marginTop: '10px', paddingBottom: '3px', fontSize: '10px' }}>
                        <span style={{ fontWeight: 'bold', color: '#714B67', borderBottom: '2px solid #714B67', paddingBottom: '3px', cursor: 'default' }}>Invoice Lines</span>
                        <span style={{ color: '#64748b', paddingBottom: '3px', cursor: 'default' }}>Other Info</span>
                      </div>

                      {/* Invoice Lines Table */}
                      <div style={{ marginTop: '8px', fontSize: '9px', width: '100%', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                          <thead>
                            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 'bold' }}>
                              <th style={{ padding: '4px' }}>Product</th>
                              <th style={{ padding: '4px' }}>Label</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>Quantity</th>
                              <th style={{ padding: '4px' }}>UoM</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>Price</th>
                              <th style={{ padding: '4px' }}>Taxes</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>Subtotal</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ padding: '6px 4px', color: '#475569' }}>[E-COM08] Corner Desk Right Sit</td>
                              <td style={{ padding: '6px 4px', color: '#64748b' }}>[E-COM08] Corner Desk Right Sit</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right' }}>1.00</td>
                              <td style={{ padding: '6px 4px', color: '#64748b' }}>Units</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right' }}>147.00</td>
                              <td style={{ padding: '6px 4px', color: '#94a3b8' }}>—</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right', fontWeight: 'bold' }}>₹ 147.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Totals Section */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '10px', fontSize: '9px' }}>
                        <div style={{ color: '#0284c7', textDecoration: 'underline', cursor: 'default' }}>
                          Terms & Conditions: http://159.65.148.9:8080/terms
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end', width: '150px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontWeight: 'bold', fontSize: '11px', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px' }}>
                            <span>Total:</span>
                            <span>₹ 147.00</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: '#64748b' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}><span style={{ color: '#8b5cf6' }}>🟣</span> Paid on 04/03/2025</span>
                            <span>₹ 147.00</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontWeight: 'bold', color: '#1e293b' }}>
                            <span>Amount Due:</span>
                            <span>₹ 0.00</span>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="erp-page-text-col reveal reveal-fade-right">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>FINANCE MODULE</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
              <h2 className="erp-page-title-new">Accounting And E-Invoicing</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', marginTop: '8px', marginBottom: '0' }}>Send Invoices And Track Payments</p>
              <p className="erp-page-desc-new">
                The specific and easy-to-use Invoicing system in Dreamwarez allows you to keep track of your accounting, even when you are not an accountant. It provides an easy way to follow up on your suppliers and customers.
              </p>
              <p className="erp-page-desc-new">
                You could use this simplified accounting in case you work with an (external) account to keep your books, and you still want to keep track of payments.
              </p>
              <p className="erp-page-desc-new">
                You can also track Invoicing & Payments by Accounting Voucher & Receipts.
              </p>
              <div style={{ marginTop: '15px' }}>
                <a href="/erp/accounting/" className="cta-button">Explore More</a>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing And Resource Planning */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10" style={{ maxWidth: '1350px' }}>
            {/* Left Column: Text Content */}
            <div className="erp-page-text-col reveal reveal-fade-left">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>MRP MODULE</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
              <h2 className="erp-page-title-new">Manufacturing And Resource Planning</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', marginTop: '8px', marginBottom: '0' }}>Manage Bill Of Materials, Plan & Track Manufacturing Orders</p>
              <p className="erp-page-desc-new">
                MRP Module covers planning, ordering, stocks and manufacturing or assembly of products from raw materials and components.
              </p>
              <p className="erp-page-desc-new">
                It handles the consumption and production of products according to Bill of materials.
              </p>
              <div style={{ marginTop: '15px' }}>
                <a href="/erp/mrp/" className="cta-button">Explore More</a>
              </div>
            </div>

            <div className="w-full flex items-center justify-center lg:justify-end reveal reveal-fade-right">
              <div className="border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-[500px] w-full hover:scale-[1.03] transition-transform duration-500 overflow-hidden">
                {/* Odoo Manufacturing Order View */}
                <div style={{ borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', width: '100%', fontFamily: '"Open Sans", sans-serif' }}>
                  
                  {/* Top Header Bar */}
                  <div style={{ background: '#714B67', padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', fontSize: '11px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ fontSize: '13px' }}>⣿</span> Manufacturing
                      </span>
                      <span style={{ opacity: 0.9 }}>Operations</span>
                      <span style={{ opacity: 0.9 }}>Planning</span>
                      <span style={{ opacity: 0.9 }}>Products</span>
                      <span style={{ opacity: 0.9 }}>Reporting</span>
                      <span style={{ opacity: 0.9 }}>Configuration</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>💬 <span style={{ background: '#dc2626', borderRadius: '50%', padding: '0px 3px', fontSize: '8px' }}>1</span></span>
                      <span>🔔</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" style={{ width: '14px', height: '14px', borderRadius: '50%' }} alt="Admin" />
                        <span style={{ fontSize: '9px' }}>Mitchell Admin</span>
                      </div>
                    </div>
                  </div>

                  {/* Subheader Bar */}
                  <div style={{ background: '#f8fafc', padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', fontSize: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: '#64748b' }}>Manufacturing Orders</span>
                      <span style={{ color: '#94a3b8' }}>/</span>
                      <span style={{ fontWeight: 'bold', color: '#1e293b' }}>WH/MO/00002</span>
                      <button style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '2px 6px', borderRadius: '3px', cursor: 'default', fontWeight: 'bold', marginLeft: '4px', fontSize: '9px' }}>Edit</button>
                      <button style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '2px 6px', borderRadius: '3px', cursor: 'default', fontWeight: 'bold', fontSize: '9px' }}>Create</button>
                    </div>
                    {/* Pipeline Stage Badges */}
                    <div style={{ display: 'flex', border: '1px solid #cbd5e1', borderRadius: '3px', overflow: 'hidden', background: '#f1f5f9' }}>
                      {['Draft', 'Confirmed', 'In Progress', 'Done'].map((stage, idx) => {
                        const isActive = stage === 'Done';
                        return (
                          <span 
                            key={stage} 
                            style={{ 
                              padding: '2px 8px', 
                              background: isActive ? '#714B67' : 'transparent', 
                              color: isActive ? 'white' : '#475569', 
                              fontWeight: isActive ? 'bold' : 'normal',
                              borderRight: idx < 3 ? '1px solid #cbd5e1' : 'none',
                              fontSize: '9px'
                            }}
                          >
                            {stage}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Main Form Body */}
                  <div style={{ padding: '10px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    
                    {/* Form Action Buttons */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>Scrap</button>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>Unlock</button>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>Unbuild</button>
                      </div>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>🖨 Print</button>
                        <button style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#475569', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'default' }}>⚙ Action</button>
                      </div>
                    </div>

                    {/* Sheet Card */}
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', position: 'relative' }}>
                      
                      {/* Smart Buttons Top Right */}
                      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                        <div style={{ border: '1px solid #cbd5e1', borderRadius: '4px', padding: '3px 6px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '9px', background: '#f8fafc', width: '90px' }}>
                          <span style={{ fontWeight: 'bold', color: '#714B67' }}>⇆ Product Moves</span>
                        </div>
                      </div>

                      {/* Title Header */}
                      <div style={{ marginBottom: '12px' }}>
                        <h3 style={{ margin: '2px 0 6px 0', fontSize: '15px', fontWeight: 'bold', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span style={{ color: '#94a3b8' }}>☆</span> WH/MO/00002
                        </h3>
                      </div>

                      {/* Fields Table */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '10px', fontSize: '10px', marginBottom: '14px' }}>
                        {/* Left Fields Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '70px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Product</span>
                            <span style={{ color: '#0284c7', fontWeight: 'bold' }}>[DESK0005] Customizable Desk (Custom, White)</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '70px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Quantity</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <span>1.00 / 1.00 Units</span>
                              <span style={{ fontWeight: 'bold', color: '#475569' }}>To Produce</span>
                              <span style={{ color: '#dc2626' }}>📈</span>
                            </div>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '70px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Bill of Material</span>
                            <span style={{ color: '#0284c7' }}>Customizable Desk</span>
                          </div>
                        </div>

                        {/* Right Fields Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Scheduled Date</span>
                            <span>04/08/2025 16:21:20</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Responsible</span>
                            <span style={{ color: '#0284c7' }}>Mitchell Admin</span>
                          </div>
                        </div>
                      </div>

                      {/* Sheet Tabs */}
                      <div style={{ display: 'flex', gap: '12px', borderBottom: '1px solid #e2e8f0', marginTop: '10px', paddingBottom: '3px', fontSize: '10px' }}>
                        <span style={{ fontWeight: 'bold', color: '#714B67', borderBottom: '2px solid #714B67', paddingBottom: '3px', cursor: 'default' }}>Components</span>
                        <span style={{ color: '#64748b', paddingBottom: '3px', cursor: 'default' }}>Miscellaneous</span>
                      </div>

                      {/* Components List Table */}
                      <div style={{ marginTop: '8px', fontSize: '9px', width: '100%' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                          <thead>
                            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 'bold' }}>
                              <th style={{ padding: '4px' }}>Product</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>To Consume</th>
                              <th style={{ padding: '4px' }}>UoM</th>
                              <th style={{ padding: '4px', textAlign: 'right' }}>Consumed</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                              <td style={{ padding: '6px 4px', color: '#0284c7' }}>[DESK0006] Customizable Desk (Custom, Black)</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right' }}>1.00</td>
                              <td style={{ padding: '6px 4px', color: '#64748b' }}>Units</td>
                              <td style={{ padding: '6px 4px', textAlign: 'right' }}>1.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Intelligence */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="w-full flex items-center justify-center lg:justify-start reveal reveal-fade-left">
              <div className="border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-[500px] w-full hover:scale-[1.03] transition-transform duration-500">
                <img src={erpBi} alt="Business Intelligence" className="w-full h-auto rounded-xl object-contain" />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="erp-page-text-col reveal reveal-fade-right">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>ANALYTICS MODULE</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
              <h2 className="erp-page-title-new">Business Intelligence</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', marginTop: '8px', marginBottom: '0' }}>Statistics About Your Data</p>
              <p className="erp-page-desc-new">
                Dreamwarez gives you an easy way to see the statistics about any of your important data.
              </p>
              <p className="erp-page-desc-new">
                You can create detailed reports and graphs in any format you need – all that in few simple clicks.
              </p>
              <p className="erp-page-desc-new">
                No need for specialized program to create graphs and charts.
              </p>
              <div style={{ marginTop: '15px' }}>
                <a href="/erp/business-management/" className="cta-button">Explore More</a>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Social Network */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10" style={{ maxWidth: '1350px' }}>
            {/* Left Column: Text Content */}
            <div className="erp-page-text-col reveal reveal-fade-left">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>SOCIAL NETWORK</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                </div>
              </div>
              <h2 className="erp-page-title-new">Enterprise Social Network</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', marginTop: '8px', marginBottom: '0' }}>Your Company's Own Facebook/Twitter And A Complete E-Mail Client</p>
              <p className="erp-page-desc-new">
                Connect with experts, follows what interests you, share documents and promote best practices.
              </p>
              <p className="erp-page-desc-new">
                Get work done with effective collaboration across departments, geographies, documents and business applications. All of this while decreasing email overload.
              </p>
              <div style={{ marginTop: '15px' }}>
                <a href="/erp/enterprise-social-network/" className="cta-button">Explore More</a>
              </div>
            </div>

            <div className="w-full flex items-center justify-center lg:justify-end reveal reveal-fade-right">
              <div className="border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-[500px] w-full hover:scale-[1.03] transition-transform duration-500">
                <img src={erpSocial} alt="Enterprise Social Network" className="w-full h-auto rounded-xl object-contain" />
              </div>
            </div>
          </div>
        </section>

      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}