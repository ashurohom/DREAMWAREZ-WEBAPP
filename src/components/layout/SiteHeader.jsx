import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isSoftwaresActive = location.pathname.startsWith('/erp') || 
                           location.pathname.startsWith('/crm') || 
                           location.pathname.startsWith('/human-resources') || 
                           location.pathname.startsWith('/project-management') || 
                           location.pathname.startsWith('/point-of-sale') || 
                           location.pathname.startsWith('/media-animation') || 
                           location.pathname.startsWith('/customised-software-development');

  const isAppsActive = ['/qualityconstruction-app', '/android-app', '/ios-app'].some(p => location.pathname.startsWith(p)) ||
                       (location.pathname.startsWith('/customised-software-development') && !isSoftwaresActive);

  const isServicesActive = ['/website-development', '/cybersecurity-digital-forensics', '/ar-vr', '/media-animation'].some(p => location.pathname.startsWith(p));

  const isAboutActive = ['/about-us', '/privacy-policy', '/terms-and-condition', '/refund-policy', '/cancellation-policy'].some(p => location.pathname.startsWith(p));

  const isOdooActive = location.pathname.startsWith('/odoo-partner');


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header static-white">
      <div className="header-inner">
        <Link to="/" className="header-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="Dreamwarez Logo" />
          <span className="logo-subtitle">The Simplified Software Company</span>
        </Link>

        <button className="mobile-nav-toggle" onClick={toggleMobileMenu} aria-label="Toggle Navigation">
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link hover:!text-[#8b2c2c] ${location.pathname === '/' ? 'active !text-[#8b2c2c] !font-semibold' : 'text-slate-800'}`} onClick={closeMobileMenu}>Home</Link>
          </li>
          
          <li className="nav-item dropdown-parent">
            <Link to="/our-softwares/" className={`nav-link hover:!text-[#8b2c2c] ${isSoftwaresActive ? 'active !text-[#8b2c2c] !font-semibold' : 'text-slate-800'}`} onClick={closeMobileMenu}>
              Our Softwares <span style={{ fontSize: '10px', marginLeft: '2px' }}>▼</span>
            </Link>
            <div className="dropdown-menu nested-dropdown">
              
              <Link to="/customised-software-development/" className="dropdown-item" onClick={closeMobileMenu}>Customised Software Development</Link>

              <div className="dropdown-submenu-parent">
                <Link to="/erp/" className="dropdown-item submenu-trigger" onClick={closeMobileMenu}>
                  ERP <span className="submenu-arrow">›</span>
                </Link>
                <div className="dropdown-submenu">
                  <Link to="/purchase-management/" className="dropdown-item" onClick={closeMobileMenu}>Purchase Management</Link>
                  <Link to="/warehouse-stock-management/" className="dropdown-item" onClick={closeMobileMenu}>Warehouse/Stock Management</Link>
                  <Link to="/accounting/" className="dropdown-item" onClick={closeMobileMenu}>Accounting</Link>
                  <Link to="/mrp/" className="dropdown-item" onClick={closeMobileMenu}>MRP</Link>
                  <Link to="/sales-management/" className="dropdown-item" onClick={closeMobileMenu}>Sales Management</Link>
                  <Link to="/business-management/" className="dropdown-item" onClick={closeMobileMenu}>Business Management</Link>
                  <Link to="/enterprise-social-network/" className="dropdown-item" onClick={closeMobileMenu}>Enterprise Social Network</Link>
                </div>
              </div>

              <Link to="/crm/" className="dropdown-item" onClick={closeMobileMenu}>CRM</Link>
              <Link to="/human-resources/" className="dropdown-item" onClick={closeMobileMenu}>Human Resources</Link>
              <Link to="/project-management/" className="dropdown-item" onClick={closeMobileMenu}>Project Management</Link>
              <Link to="/point-of-sale/" className="dropdown-item" onClick={closeMobileMenu}>Point of Sale</Link>
              <Link to="/media-animation/" className="dropdown-item" onClick={closeMobileMenu}>Media & Animation</Link>
              <Link to="/digital-marketing/" className="dropdown-item" onClick={closeMobileMenu}>Digital Marketing</Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/our-apps/" className={`nav-link hover:!text-[#8b2c2c] ${isAppsActive ? 'active !text-[#8b2c2c] !font-semibold' : 'text-slate-800'}`} onClick={closeMobileMenu}>
              Our Apps <span style={{ fontSize: '10px', marginLeft: '2px' }}>▼</span>
            </Link>
            <div className="dropdown-menu">
              <Link to="/qualityconstruction-app/" className="dropdown-item" onClick={closeMobileMenu}>Construction Quality App</Link>
              <Link to="/android-app/" className="dropdown-item" onClick={closeMobileMenu}>Android App</Link>
              <Link to="/ios-app/" className="dropdown-item" onClick={closeMobileMenu}>iOS App</Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/services/" className={`nav-link hover:!text-[#8b2c2c] ${isServicesActive ? 'active !text-[#8b2c2c] !font-semibold' : 'text-slate-800'}`} onClick={closeMobileMenu}>
              Services <span style={{ fontSize: '10px', marginLeft: '2px' }}>▼</span>
            </Link>
            <div className="dropdown-menu">
              <Link to="/website-development/" className="dropdown-item" onClick={closeMobileMenu}>Website Development</Link>
              <Link to="/cybersecurity-digital-forensics/" className="dropdown-item" onClick={closeMobileMenu}>Cybersecurity & Digital Forensics Services</Link>
              <Link to="/ar-vr/" className="dropdown-item" onClick={closeMobileMenu}>AR & VR Solutions</Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/about-us/" className={`nav-link hover:!text-[#8b2c2c] ${isAboutActive ? 'active !text-[#8b2c2c] !font-semibold' : 'text-slate-800'}`} onClick={closeMobileMenu}>
              About Us <span style={{ fontSize: '10px', marginLeft: '2px' }}>▼</span>
            </Link>
            <div className="dropdown-menu">
              <Link to="/career-opportunities/" className="dropdown-item" onClick={closeMobileMenu}>Career Opportunities</Link>
              <Link to="/about-us/team-dreamwarez/" className="dropdown-item" onClick={closeMobileMenu}>Team Dreamwarez</Link>
            </div>
          </li>

          <li className="nav-item">
            <Link 
              to="/odoo-partner/" 
              className={`nav-link hover:!text-[#8b2c2c] ${isOdooActive ? 'active !text-[#8b2c2c] !font-semibold' : 'text-slate-800'}`} 
              onClick={closeMobileMenu}
            >
              <span>Odoo Partner</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact/" className={`nav-link hover:!text-[#8b2c2c] ${location.pathname.startsWith('/contact') ? 'active !text-[#8b2c2c] !font-semibold' : 'text-slate-800'}`} onClick={closeMobileMenu}>Contact Us</Link>
          </li>
        </nav>

        <div className="header-actions">
          <a href="http://143.244.133.157/web/login" className="login-button">Log In</a>
        </div>
      </div>
    </header>
  );
}
