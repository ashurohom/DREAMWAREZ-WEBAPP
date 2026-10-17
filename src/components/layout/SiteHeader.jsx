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

    {/* Header placeholder spacer to prevent content overlap when header is fixed */}
    <div className="site-header-spacer" aria-hidden="true" />

    {/* Mobile & Tablet Backdrop Overlay */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile & Tablet Drawer with iOS / Teams Sheet Card Aesthetic */}
      <nav
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile and Tablet Navigation"
      >
        <div className="mobile-drawer-sheet">
          {/* Brand Profile Card (Mirrors Teams profile card in reference) */}
          <Link to="/about-us/" className="mobile-profile-card" onClick={closeMobileMenu}>
            <div className="mobile-profile-avatar">
              <img src={logo} alt="Dreamwarez" className="mobile-avatar-img" />
            </div>
            <div className="mobile-profile-info">
              <div className="mobile-profile-name-row">
                <span className="mobile-profile-name">Dreamwarez</span>
                <span className="mobile-profile-chevron">›</span>
              </div>
              <span className="mobile-profile-subtitle">The Simplified Software Company</span>
            </div>
          </Link>

          {/* Status Row (Mirrors "✓ Available" in reference) */}
          <div className="mobile-status-row">
            <span className="mobile-status-dot">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span className="mobile-status-text">Available for Enterprise Solutions</span>
          </div>

          <div className="mobile-sheet-divider" />

          {/* Primary Navigation Items with Outline Icons */}
          <div className="mobile-menu-group">
            {/* Home */}
            <Link
              to="/"
              className={`mobile-menu-row ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <div className="mobile-menu-row-left">
                <span className="mobile-menu-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </span>
                <span className="mobile-menu-label">Home</span>
              </div>
            </Link>

            {/* Our Softwares Accordion */}
            <div className={`mobile-menu-accordion ${expandedSections.softwares ? 'expanded' : ''}`}>
              <div
                className={`mobile-menu-row ${isSoftwaresActive ? 'active' : ''}`}
                onClick={() => toggleSection('softwares')}
                role="button"
                tabIndex={0}
              >
                <div className="mobile-menu-row-left">
                  <span className="mobile-menu-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </span>
                  <span className="mobile-menu-label">Our Softwares</span>
                </div>
                <button
                  type="button"
                  className={`mobile-chevron-btn ${expandedSections.softwares ? 'rotate' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSection('softwares');
                  }}
                  aria-label="Toggle Our Softwares dropdown"
                  aria-expanded={expandedSections.softwares}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {expandedSections.softwares && (
                <div className="mobile-sub-body">
                  <Link to="/our-softwares/" className="mobile-sublink overview-link" onClick={closeMobileMenu}>
                    Overview — All Softwares →
                  </Link>
                  <Link to="/customised-software-development/" className="mobile-sublink" onClick={closeMobileMenu}>
                    Customised Software Development
                  </Link>

                  {/* Nested ERP Accordion */}
                  <div className={`mobile-nested-accordion ${expandedSections.erp ? 'expanded' : ''}`}>
                    <div
                      className="mobile-nested-header"
                      onClick={() => toggleSection('erp')}
                      role="button"
                      tabIndex={0}
                    >
                      <span className="mobile-nested-title">ERP</span>
                      <button
                        type="button"
                        className={`mobile-chevron-btn small ${expandedSections.erp ? 'rotate' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection('erp');
                        }}
                        aria-label="Toggle ERP submenu"
                        aria-expanded={expandedSections.erp}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                    </div>

                    {expandedSections.erp && (
                      <div className="mobile-nested-sub-body">
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
            </div>

            {/* Our Apps Accordion */}
            <div className={`mobile-menu-accordion ${expandedSections.apps ? 'expanded' : ''}`}>
              <div
                className={`mobile-menu-row ${isAppsActive ? 'active' : ''}`}
                onClick={() => toggleSection('apps')}
                role="button"
                tabIndex={0}
              >
                <div className="mobile-menu-row-left">
                  <span className="mobile-menu-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  </span>
                  <span className="mobile-menu-label">Our Apps</span>
                </div>
                <button
                  type="button"
                  className={`mobile-chevron-btn ${expandedSections.apps ? 'rotate' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSection('apps');
                  }}
                  aria-label="Toggle Our Apps dropdown"
                  aria-expanded={expandedSections.apps}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {expandedSections.apps && (
                <div className="mobile-sub-body">
                  <Link to="/our-apps/" className="mobile-sublink overview-link" onClick={closeMobileMenu}>
                    Overview — All Apps →
                  </Link>
                  <Link to="/dw-attendance-app/" className="mobile-sublink" onClick={closeMobileMenu}>DW Attendance App</Link>
                  <Link to="/qualityconstruction-app/" className="mobile-sublink" onClick={closeMobileMenu}>Construction Quality App</Link>
                  <Link to="/android-app/" className="mobile-sublink" onClick={closeMobileMenu}>Customize Android App</Link>
                  <Link to="/ios-app/" className="mobile-sublink" onClick={closeMobileMenu}>Customize IOS App</Link>
                </div>
              )}
            </div>

            {/* Services Accordion (Mirrors Settings Gear Icon) */}
            <div className={`mobile-menu-accordion ${expandedSections.services ? 'expanded' : ''}`}>
              <div
                className={`mobile-menu-row ${isServicesActive ? 'active' : ''}`}
                onClick={() => toggleSection('services')}
                role="button"
                tabIndex={0}
              >
                <div className="mobile-menu-row-left">
                  <span className="mobile-menu-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </span>
                  <span className="mobile-menu-label">Services</span>
                </div>
                <button
                  type="button"
                  className={`mobile-chevron-btn ${expandedSections.services ? 'rotate' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSection('services');
                  }}
                  aria-label="Toggle Services dropdown"
                  aria-expanded={expandedSections.services}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {expandedSections.services && (
                <div className="mobile-sub-body">
                  <Link to="/services/" className="mobile-sublink overview-link" onClick={closeMobileMenu}>
                    Overview — All Services →
                  </Link>
                  <Link to="/website-development/" className="mobile-sublink" onClick={closeMobileMenu}>Website Development</Link>
                  <Link to="/cybersecurity-digital-forensics/" className="mobile-sublink" onClick={closeMobileMenu}>Cybersecurity & Digital Forensics Services</Link>
                  <Link to="/ar-vr/" className="mobile-sublink" onClick={closeMobileMenu}>AR & VR Solutions</Link>
                </div>
              )}
            </div>

            {/* About Us Accordion */}
            <div className={`mobile-menu-accordion ${expandedSections.about ? 'expanded' : ''}`}>
              <div
                className={`mobile-menu-row ${isAboutActive ? 'active' : ''}`}
                onClick={() => toggleSection('about')}
                role="button"
                tabIndex={0}
              >
                <div className="mobile-menu-row-left">
                  <span className="mobile-menu-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <span className="mobile-menu-label">About Us</span>
                </div>
                <button
                  type="button"
                  className={`mobile-chevron-btn ${expandedSections.about ? 'rotate' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSection('about');
                  }}
                  aria-label="Toggle About Us dropdown"
                  aria-expanded={expandedSections.about}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {expandedSections.about && (
                <div className="mobile-sub-body">
                  <Link to="/about-us/" className="mobile-sublink overview-link" onClick={closeMobileMenu}>
                    About Dreamwarez →
                  </Link>
                  <Link to="/career-opportunities/" className="mobile-sublink" onClick={closeMobileMenu}>Career Opportunities</Link>
                  <Link to="/about-us/team-dreamwarez/" className="mobile-sublink" onClick={closeMobileMenu}>Team Dreamwarez</Link>
                </div>
              )}
            </div>

            {/* Odoo Partner (Second to last item, after About Us) */}
            <Link
              to="/odoo-partner/"
              className={`mobile-menu-row ${isOdooActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <div className="mobile-menu-row-left">
                <span className="mobile-menu-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h12l4 6-10 12L2 9z" />
                    <path d="M2 9h20" />
                    <path d="M12 21L8 9l4-6 4 6-4 12z" />
                  </svg>
                </span>
                <span className="mobile-menu-label">Odoo Partner</span>
              </div>
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact/"
              className={`mobile-menu-row ${location.pathname.startsWith('/contact') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <div className="mobile-menu-row-left">
                <span className="mobile-menu-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <span className="mobile-menu-label">Contact Us</span>
              </div>
            </Link>
          </div>

          <div className="mobile-sheet-divider" />

          {/* Bottom Action: "+ Log In to Portal" (Mirrors "+ Add account" in reference) */}
          <div className="mobile-bottom-action">
            <a
              href="http://143.244.133.157/web/login"
              className="mobile-add-account-row"
            >
              <span className="mobile-menu-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
              <span className="mobile-menu-label">Log In to Portal</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
