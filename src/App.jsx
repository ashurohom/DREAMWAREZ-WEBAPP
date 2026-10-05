import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { AboutUsPage } from './pages/subpages/AboutUsPage';
import { AccountingPage } from './pages/subpages/AccountingPage';
import { AndroidAppPage } from './pages/subpages/AndroidAppPage';
import { ArVrPage } from './pages/subpages/ArVrPage';
import { BusinessIntelligencePage } from './pages/subpages/BusinessIntelligencePage';
import { CareerOpportunitiesPage } from './pages/subpages/CareerOpportunitiesPage';
import { ContactPage } from './pages/subpages/ContactPage';
import { CrmPage } from './pages/subpages/CrmPage';
import { CustomSoftwarePage } from './pages/subpages/CustomSoftwarePage';
import { CybersecurityPage } from './pages/subpages/CybersecurityPage';
import { DigitalMarketingPage } from './pages/subpages/DigitalMarketingPage';
import { EnterpriseSocialNetworkPage } from './pages/subpages/EnterpriseSocialNetworkPage';
import { ErpPage } from './pages/subpages/ErpPage';
import { HumanResourcesPage } from './pages/subpages/HumanResourcesPage';
import { IosAppPage } from './pages/subpages/IosAppPage';
import { LoginPage } from './pages/subpages/LoginPage';
import { MediaAnimationPage } from './pages/subpages/MediaAnimationPage';
import { MrpPage } from './pages/subpages/MrpPage';
import { OurAppsPage } from './pages/subpages/OurAppsPage';
import { OurSoftwaresPage } from './pages/subpages/OurSoftwaresPage';
import { PointOfSalePage } from './pages/subpages/PointOfSalePage';
import { PolicyPage } from './pages/subpages/PolicyPage';
import { ProjectManagementPage } from './pages/subpages/ProjectManagementPage';
import { PurchaseManagementPage } from './pages/subpages/PurchaseManagementPage';
import { QualityConstructionPage } from './pages/subpages/QualityConstructionPage';
import { SalesManagementPage } from './pages/subpages/SalesManagementPage';
import { ServicesDirectoryPage } from './pages/subpages/ServicesDirectoryPage';
import { WarehouseStockManagementPage } from './pages/subpages/WarehouseStockManagementPage';
import { WebsiteDevelopmentPage } from './pages/subpages/WebsiteDevelopmentPage';
import { TeamDreamwarezPage } from './pages/subpages/TeamDreamwarezPage';
import { OdooPartnerPage } from './pages/subpages/OdooPartnerPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Element is visible if its top is above the bottom of the viewport
        // and its bottom is below the top of the viewport
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          el.classList.add('is-revealed');
        } else {
          // Optional: remove attribute if you want them to fade out when scrolling past
          el.classList.remove('is-revealed');
        }
      });
    };

    // Run on initial mount
    setTimeout(handleScroll, 100);
    
    // Listen to scroll on window and root container if it's scrollable
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Some apps use a specific scroll container. Try listening to common ones:
    const rootEl = document.getElementById('root');
    if (rootEl) rootEl.addEventListener('scroll', handleScroll, { passive: true });
    
    const mutationObserver = new MutationObserver(() => {
      handleScroll();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rootEl) rootEl.removeEventListener('scroll', handleScroll);
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white text-purple-400 font-bold">Loading Experience...</div>}>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact/" element={<ContactPage />} />
        <Route path="/contact" element={<Navigate to="/contact/" replace />} />
        
        <Route path="/login/" element={<LoginPage />} />
        <Route path="/login" element={<Navigate to="/login/" replace />} />
        
        <Route path="/about-us/" element={<AboutUsPage />} />
        <Route path="/about-us" element={<Navigate to="/about-us/" replace />} />
        
        <Route path="/about-us/team-dreamwarez/" element={<TeamDreamwarezPage />} />
        <Route path="/about-us/team-dreamwarez" element={<Navigate to="/about-us/team-dreamwarez/" replace />} />
        <Route path="/about-us/team-dreamwarezs/" element={<Navigate to="/about-us/team-dreamwarez/" replace />} />

        <Route path="/our-softwares/" element={<OurSoftwaresPage />} />
        <Route path="/our-softwares" element={<Navigate to="/our-softwares/" replace />} />

        <Route path="/media-animation/" element={<MediaAnimationPage />} />
        <Route path="/media-animation" element={<Navigate to="/media-animation/" replace />} />

        {/* ERP Modules */}
        <Route path="/erp/" element={<ErpPage />} />
        <Route path="/erp" element={<Navigate to="/erp/" replace />} />

        <Route path="/crm/" element={<CrmPage />} />
        <Route path="/crm" element={<Navigate to="/crm/" replace />} />

        {/* Software Modules */}
        <Route path="/purchase-management/" element={<PurchaseManagementPage />} />
        <Route path="/purchase-management" element={<Navigate to="/purchase-management/" replace />} />
        <Route path="/erp/purchase-management/" element={<Navigate to="/purchase-management/" replace />} />
        <Route path="/erp/purchase-management" element={<Navigate to="/purchase-management/" replace />} />

        <Route path="/warehouse-stock-management/" element={<WarehouseStockManagementPage />} />
        <Route path="/warehouse-stock-management" element={<Navigate to="/warehouse-stock-management/" replace />} />
        <Route path="/erp/warehouse-stock-management/" element={<Navigate to="/warehouse-stock-management/" replace />} />
        <Route path="/erp/warehouse-stock-management" element={<Navigate to="/warehouse-stock-management/" replace />} />

        <Route path="/accounting/" element={<AccountingPage />} />
        <Route path="/accounting" element={<Navigate to="/accounting/" replace />} />
        <Route path="/erp/accounting/" element={<Navigate to="/accounting/" replace />} />
        <Route path="/erp/accounting" element={<Navigate to="/accounting/" replace />} />

        <Route path="/mrp/" element={<MrpPage />} />
        <Route path="/mrp" element={<Navigate to="/mrp/" replace />} />
        <Route path="/erp/mrp/" element={<Navigate to="/mrp/" replace />} />
        <Route path="/erp/mrp" element={<Navigate to="/mrp/" replace />} />

        <Route path="/sales-management/" element={<SalesManagementPage />} />
        <Route path="/sales-management" element={<Navigate to="/sales-management/" replace />} />
        <Route path="/erp/sales-management/" element={<Navigate to="/sales-management/" replace />} />
        <Route path="/erp/sales-management" element={<Navigate to="/sales-management/" replace />} />

        <Route path="/business-management/" element={<BusinessIntelligencePage />} />
        <Route path="/business-management" element={<Navigate to="/business-management/" replace />} />
        <Route path="/erp/business-management/" element={<Navigate to="/business-management/" replace />} />
        <Route path="/erp/business-management" element={<Navigate to="/business-management/" replace />} />

        <Route path="/enterprise-social-network/" element={<EnterpriseSocialNetworkPage />} />
        <Route path="/enterprise-social-network" element={<Navigate to="/enterprise-social-network/" replace />} />
        <Route path="/erp/enterprise-social-network/" element={<Navigate to="/enterprise-social-network/" replace />} />
        <Route path="/erp/enterprise-social-network" element={<Navigate to="/enterprise-social-network/" replace />} />

        <Route path="/human-resources/" element={<HumanResourcesPage />} />
        <Route path="/human-resources" element={<Navigate to="/human-resources/" replace />} />

        <Route path="/project-management/" element={<ProjectManagementPage />} />
        <Route path="/project-management" element={<Navigate to="/project-management/" replace />} />

        <Route path="/point-of-sale/" element={<PointOfSalePage />} />
        <Route path="/point-of-sale" element={<Navigate to="/point-of-sale/" replace />} />

        {/* Services & Mobile Apps */}
        <Route path="/digital-marketing/" element={<DigitalMarketingPage />} />
        <Route path="/digital-marketing" element={<Navigate to="/digital-marketing/" replace />} />

        <Route path="/our-apps/" element={<OurAppsPage />} />
        <Route path="/our-apps" element={<Navigate to="/our-apps/" replace />} />

        <Route path="/career-opportunities/" element={<CareerOpportunitiesPage />} />
        <Route path="/career-opportunities" element={<Navigate to="/career-opportunities/" replace />} />

        <Route path="/services/" element={<ServicesDirectoryPage />} />
        <Route path="/services" element={<Navigate to="/services/" replace />} />

        <Route path="/customised-software-development/" element={<CustomSoftwarePage />} />
        <Route path="/customised-software-development" element={<Navigate to="/customised-software-development/" replace />} />

        <Route path="/qualityconstruction-app/" element={<QualityConstructionPage />} />
        <Route path="/qualityconstruction-app" element={<Navigate to="/qualityconstruction-app/" replace />} />

        <Route path="/android-app/" element={<AndroidAppPage />} />
        <Route path="/android-app" element={<Navigate to="/android-app/" replace />} />

        <Route path="/ios-app/" element={<IosAppPage />} />
        <Route path="/ios-app" element={<Navigate to="/ios-app/" replace />} />

        <Route path="/website-development/" element={<WebsiteDevelopmentPage />} />
        <Route path="/website-development" element={<Navigate to="/website-development/" replace />} />

        <Route path="/cybersecurity-digital-forensics/" element={<CybersecurityPage />} />
        <Route path="/cybersecurity-digital-forensics" element={<Navigate to="/cybersecurity-digital-forensics/" replace />} />

        <Route path="/ar-vr/" element={<ArVrPage />} />
        <Route path="/ar-vr" element={<Navigate to="/ar-vr/" replace />} />

        <Route path="/odoo-partner/" element={<OdooPartnerPage />} />
        <Route path="/odoo-partner" element={<Navigate to="/odoo-partner/" replace />} />

        {/* Policies */}
        <Route path="/privacy-policy/" element={<PolicyPage title="Privacy Policy" slug="privacy-policy" />} />
        <Route path="/privacy-policy" element={<Navigate to="/privacy-policy/" replace />} />

        <Route path="/terms-and-condition/" element={<PolicyPage title="Terms &amp; Conditions" slug="terms-and-condition" />} />
        <Route path="/terms-and-condition" element={<Navigate to="/terms-and-condition/" replace />} />

        <Route path="/refund-policy/" element={<PolicyPage title="Refund Policy" slug="refund-policy" />} />
        <Route path="/refund-policy" element={<Navigate to="/refund-policy/" replace />} />

        <Route path="/cancellation-policy/" element={<PolicyPage title="Cancellation Policy" slug="cancellation-policy" />} />
        <Route path="/cancellation-policy" element={<Navigate to="/cancellation-policy/" replace />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
