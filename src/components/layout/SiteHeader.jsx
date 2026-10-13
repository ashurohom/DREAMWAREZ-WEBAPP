import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    softwares: false,
    erp: false,
    apps: false,
    services: false,
    about: false,
  });
  const location = useLocation();

  // Reset mobile menu when pathname changes
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
  }

  const isSoftwaresActive = [
    '/our-softwares',
    '/erp',
    '/crm',
    '/human-resources',
    '/project-management',
    '/point-of-sale',
    '/media-animation',
    '/customised-software-development',
    '/purchase-management',
    '/warehouse-stock-management',
    '/accounting',
    '/mrp',
    '/sales-management',
    '/business-management',
    '/enterprise-social-network',
    '/digital-marketing',
  ].some((p) => location.pathname.startsWith(p));

  const isAppsActive = [
    '/our-apps',
    '/qualityconstruction-app',
    '/android-app',
    '/ios-app',
    '/dw-attendance-app',
  ].some((p) => location.pathname.startsWith(p));

  const isServicesActive = [
    '/services',
    '/website-development',
    '/cybersecurity-digital-forensics',
    '/ar-vr',
  ].some((p) => location.pathname.startsWith(p));

  const isAboutActive = [
    '/about-us',
    '/career-opportunities',
    '/privacy-policy',
    '/terms-and-condition',
    '/refund-policy',
    '/cancellation-policy',
  ].some((p) => location.pathname.startsWith(p));

  const isOdooActive = location.pathname.startsWith('/odoo-partner');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <header className={`site-header static-white ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
        <Link to="/" className="header-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="Dreamwarez Logo" />
          <span className="logo-subtitle">The Simplified Software Company</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link hover:!text-[#8b2c2c] ${location.pathname === '/' ? 'active !text-[#8b2c2c] !font-semibold' : 'text-slate-800'}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            <li className="nav-item dropdown-parent">
              <Link
                to="/our-softwares/"
                className={`nav-link hover:!text-[#8b2c2c] ${isSoftwaresActive ? 'active !text-[#8b2c2c] !font-semibold' : 'text-slate-800'}`}
                onClick={closeMobileMenu}
              >
                Our Softwares <span className="dropdown-caret">▼</span>
              </Link>
              <div className="dropdown-menu nested-dropdown">
                <Link to="/customised-software-development/" className="dropdown-item" onClick={closeMobileMenu}>
                  Customised Software Development
                </Link>

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

            <li className="nav-item dropdown-parent">
              <Link
                to="/our-apps/"
                className={`nav-link hover:!text-[#8b2c2c] ${isAppsActive ? 'active !text-[#8b2c2c] !font-semibold' : 'text-slate-800'}`}
                onClick={closeMobileMenu}
              >
                Our Apps <span className="dropdown-caret">▼</span>
              </Link>
              <div className="dropdown-menu">
                <Link to="/dw-attendance-app/" className="dropdown-item" onClick={closeMobileMenu}>DW Attendance App</Link>
                <Link to="/qualityconstruction-app/" className="dropdown-item" onClick={closeMobileMenu}>Construction Quality App</Link>
                <Link to="/android-app/" className="dropdown-item" onClick={closeMobileMenu}>Customize Android App</Link>
                <Link to="/ios-app/" className="dropdown-item" onClick={closeMobileMenu}>Customize IOS App</Link>
              </div>
            </li>

            <li className="nav-item dropdown-parent">
              <Link
                to="/services/"
                className={`nav-link hover:!text-[#8b2c2c] ${isServicesActive ? 'active !text-[#8b2c2c] !font-semibold' : 'text-slate-800'}`}
                onClick={closeMobileMenu}
              >
                Services <span className="dropdown-caret">▼</span>
              </Link>
              <div className="dropdown-menu">
                <Link to="/website-development/" className="dropdown-item" onClick={closeMobileMenu}>Website Development</Link>
                <Link to="/cybersecurity-digital-forensics/" className="dropdown-item" onClick={closeMobileMenu}>Cybersecurity & Digital Forensics Services</Link>
                <Link to="/ar-vr/" className="dropdown-item" onClick={closeMobileMenu}>AR & VR Solutions</Link>
              </div>
            </li>

            <li className="nav-item dropdown-parent">
              <Link
                to="/about-us/"
                className={`nav-link hover:!text-[#8b2c2c] ${isAboutActive ? 'active !text-[#8b2c2c] !font-semibold' : 'text-slate-800'}`}
                onClick={closeMobileMenu}
              >
                About Us <span className="dropdown-caret">▼</span>
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
              <Link
                to="/contact/"
                className={`nav-link hover:!text-[#8b2c2c] ${location.pathname.startsWith('/contact') ? 'active !text-[#8b2c2c] !font-semibold' : 'text-slate-800'}`}
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Header Actions (Login button + Mobile Toggle) */}
        <div className="header-actions">
          <a
            href="http://143.244.133.157/web/login"
            className="login-button header-login-btn"
          >
            Log In
          </a>

          <button
            className={`mobile-nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile & Tablet Backdrop Overlay */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile & Tablet Drawer with Transparent Blur Background */}
      <nav
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile and Tablet Navigation"
      >
        <div className="mobile-drawer-content">
          <ul className="mobile-menu-list">
            {/* Home */}
            <li className="mobile-menu-item">
              <Link
                to="/"
                className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            {/* Our Softwares Accordion */}
            <li className="mobile-menu-item mobile-accordion-item">
              <div className="mobile-accordion-header">
                <Link
                  to="/our-softwares/"
                  className={`mobile-nav-link ${isSoftwaresActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Our Softwares
                </Link>
                <button
                  type="button"
                  className={`mobile-accordion-toggle ${expandedSections.softwares ? 'expanded' : ''}`}
                  onClick={() => toggleSection('softwares')}
                  aria-label="Toggle Our Softwares dropdown"
                  aria-expanded={expandedSections.softwares}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>

              {expandedSections.softwares && (
                <div className="mobile-accordion-body">
                  <Link to="/our-softwares/" className="mobile-sublink overview-link" onClick={closeMobileMenu}>
                    Overview — All Softwares →
                  </Link>
                  <Link to="/customised-software-development/" className="mobile-sublink" onClick={closeMobileMenu}>
                    Customised Software Development
                  </Link>

                  {/* Nested ERP Accordion */}
                  <div className="mobile-nested-accordion">
                    <div className="mobile-accordion-header nested">
                      <Link to="/erp/" className="mobile-sublink font-semibold" onClick={closeMobileMenu}>
                        ERP
                      </Link>
                      <button
                        type="button"
                        className={`mobile-accordion-toggle small ${expandedSections.erp ? 'expanded' : ''}`}
                        onClick={() => toggleSection('erp')}
                        aria-label="Toggle ERP submenu"
                        aria-expanded={expandedSections.erp}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>

                    {expandedSections.erp && (
                      <div className="mobile-nested-body">
                        <Link to="/erp/" className="mobile-nested-link overview-link" onClick={closeMobileMenu}>
                          ERP Overview →
                        </Link>
                        <Link to="/purchase-management/" className="mobile-nested-link" onClick={closeMobileMenu}>Purchase Management</Link>
                        <Link to="/warehouse-stock-management/" className="mobile-nested-link" onClick={closeMobileMenu}>Warehouse/Stock Management</Link>
                        <Link to="/accounting/" className="mobile-nested-link" onClick={closeMobileMenu}>Accounting</Link>
                        <Link to="/mrp/" className="mobile-nested-link" onClick={closeMobileMenu}>MRP</Link>
                        <Link to="/sales-management/" className="mobile-nested-link" onClick={closeMobileMenu}>Sales Management</Link>
                        <Link to="/business-management/" className="mobile-nested-link" onClick={closeMobileMenu}>Business Management</Link>
                        <Link to="/enterprise-social-network/" className="mobile-nested-link" onClick={closeMobileMenu}>Enterprise Social Network</Link>
                      </div>
                    )}
                  </div>

                  <Link to="/crm/" className="mobile-sublink" onClick={closeMobileMenu}>CRM</Link>
                  <Link to="/human-resources/" className="mobile-sublink" onClick={closeMobileMenu}>Human Resources</Link>
                  <Link to="/project-management/" className="mobile-sublink" onClick={closeMobileMenu}>Project Management</Link>
                  <Link to="/point-of-sale/" className="mobile-sublink" onClick={closeMobileMenu}>Point of Sale</Link>
                  <Link to="/media-animation/" className="mobile-sublink" onClick={closeMobileMenu}>Media & Animation</Link>
                  <Link to="/digital-marketing/" className="mobile-sublink" onClick={closeMobileMenu}>Digital Marketing</Link>
                </div>
              )}
            </li>

            {/* Our Apps Accordion */}
            <li className="mobile-menu-item mobile-accordion-item">
              <div className="mobile-accordion-header">
                <Link
                  to="/our-apps/"
                  className={`mobile-nav-link ${isAppsActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Our Apps
                </Link>
                <button
                  type="button"
                  className={`mobile-accordion-toggle ${expandedSections.apps ? 'expanded' : ''}`}
                  onClick={() => toggleSection('apps')}
                  aria-label="Toggle Our Apps dropdown"
                  aria-expanded={expandedSections.apps}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>

              {expandedSections.apps && (
                <div className="mobile-accordion-body">
                  <Link to="/our-apps/" className="mobile-sublink overview-link" onClick={closeMobileMenu}>
                    Overview — All Apps →
                  </Link>
                  <Link to="/dw-attendance-app/" className="mobile-sublink" onClick={closeMobileMenu}>DW Attendance App</Link>
                  <Link to="/qualityconstruction-app/" className="mobile-sublink" onClick={closeMobileMenu}>Construction Quality App</Link>
                  <Link to="/android-app/" className="mobile-sublink" onClick={closeMobileMenu}>Customize Android App</Link>
                  <Link to="/ios-app/" className="mobile-sublink" onClick={closeMobileMenu}>Customize IOS App</Link>
                </div>
              )}
            </li>

            {/* Services Accordion */}
            <li className="mobile-menu-item mobile-accordion-item">
              <div className="mobile-accordion-header">
                <Link
                  to="/services/"
                  className={`mobile-nav-link ${isServicesActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
                <button
                  type="button"
                  className={`mobile-accordion-toggle ${expandedSections.services ? 'expanded' : ''}`}
                  onClick={() => toggleSection('services')}
                  aria-label="Toggle Services dropdown"
                  aria-expanded={expandedSections.services}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>

              {expandedSections.services && (
                <div className="mobile-accordion-body">
                  <Link to="/services/" className="mobile-sublink overview-link" onClick={closeMobileMenu}>
                    Overview — All Services →
                  </Link>
                  <Link to="/website-development/" className="mobile-sublink" onClick={closeMobileMenu}>Website Development</Link>
                  <Link to="/cybersecurity-digital-forensics/" className="mobile-sublink" onClick={closeMobileMenu}>Cybersecurity & Digital Forensics Services</Link>
                  <Link to="/ar-vr/" className="mobile-sublink" onClick={closeMobileMenu}>AR & VR Solutions</Link>
                </div>
              )}
            </li>

            {/* About Us Accordion */}
            <li className="mobile-menu-item mobile-accordion-item">
              <div className="mobile-accordion-header">
                <Link
                  to="/about-us/"
                  className={`mobile-nav-link ${isAboutActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
                <button
                  type="button"
                  className={`mobile-accordion-toggle ${expandedSections.about ? 'expanded' : ''}`}
                  onClick={() => toggleSection('about')}
                  aria-label="Toggle About Us dropdown"
                  aria-expanded={expandedSections.about}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>

              {expandedSections.about && (
                <div className="mobile-accordion-body">
                  <Link to="/about-us/" className="mobile-sublink overview-link" onClick={closeMobileMenu}>
                    About Dreamwarez →
                  </Link>
                  <Link to="/career-opportunities/" className="mobile-sublink" onClick={closeMobileMenu}>Career Opportunities</Link>
                  <Link to="/about-us/team-dreamwarez/" className="mobile-sublink" onClick={closeMobileMenu}>Team Dreamwarez</Link>
                </div>
              )}
            </li>

            {/* Odoo Partner */}
            <li className="mobile-menu-item">
              <Link
                to="/odoo-partner/"
                className={`mobile-nav-link ${isOdooActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Odoo Partner
              </Link>
            </li>

            {/* Contact Us */}
            <li className="mobile-menu-item">
              <Link
                to="/contact/"
                className={`mobile-nav-link ${location.pathname.startsWith('/contact') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Drawer Footer with Portal Login */}
          <div className="mobile-drawer-footer">
            <a
              href="http://143.244.133.157/web/login"
              className="mobile-login-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              <span>Log In to Portal</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
