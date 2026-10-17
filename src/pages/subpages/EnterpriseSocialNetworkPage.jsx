import React from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Social Network custom assets
import socialCoffeeDesk from '../../assets/coffee_desk.png';
import socialInboxEmail from '../../assets/collab_workspace_ui.png';
import socialWorkspaceHands from '../../assets/workspace_hands.png';
import socialCouchWorkspace from '../../assets/couch_workspace.png';
import socialSofaLaptop from '../../assets/office_walk.png';
import socialOutdoorLaptop from '../../assets/outdoor_laptop.png';
import socialFeedDashboard from '../../assets/social_feed_dashboard.png';
import socialHeroPhoto from '../../assets/social_hero_photo.jpg';
import expertCollaboration from '../../assets/expert_collaboration.png';

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

export function EnterpriseSocialNetworkPage() {
  return (
    <div className="app-container software-theme-page overflow-x-hidden">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO 
        title="Enterprise Social Network | Dreamwarez"
        description="A private, secure enterprise social network for your company to collaborate without boundaries, share updates, and streamline communication."
      />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 min-h-[auto] lg:min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          {/* Background decorative diagonal polygons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up md:pr-6 text-center md:text-left items-center md:items-start">
              <SectionLabel>TEAM COLLABORATION</SectionLabel>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-4 sm:mb-6 max-w-[700px]">
                Enterprise Social <span className="text-[#7A7A7A]">Network</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-bold text-slate-800 leading-snug max-w-[600px] mb-2 sm:mb-3">
                A private social network for your company.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-[600px] mb-6 sm:mb-8">
                Collaborate without boundaries. Share updates, exchange ideas, and work together in real time.
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
                  src={socialHeroPhoto} 
                  alt="Enterprise Social Network Workspace" 
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          
          <div className="max-w-[1350px] mx-auto text-center relative z-10">
            <div className="reveal reveal-fade-up">
              <SectionLabel align="center">COLLABORATION NETWORK</SectionLabel>
              <p className="text-slate-900 text-base sm:text-lg md:text-xl font-bold max-w-4xl mx-auto mt-2 leading-relaxed mb-8 sm:mb-10">
                Connect with experts, follow what interests you, share documents and promote best practices. Get work done with effective collaboration across departments, geographies, documents and business applications. All of this while decreasing email overload.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up flex justify-center mt-4">
              <div className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] border border-slate-200/80 p-2 sm:p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:scale-[1.01] transition-transform duration-500">
                <img src={socialFeedDashboard} alt="Social Feed Dashboard" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Connect With Experts */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start">
              <SectionLabel>NETWORK</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Connect With Experts
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Get the right information when you need it
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Next time you have a question for marketing, sales, R&amp;D or any other department, don’t send an email blast — post the question to Dreamwarez and get answers from the right persons.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={expertCollaboration} alt="Connect with experts" className="w-full h-auto object-contain rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Follow what Interest you */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={socialCoffeeDesk} alt="Follow what interest you" className="w-full h-auto object-contain rounded-xl" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start lg:ml-auto">
              <SectionLabel>INFORMATION FLOW</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Follow what Interest you
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Make the information flow across your company
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Want to get informed about new product features, hot deals, bottleneck in projects or any other event? Just follow what interests you to get the information you need; what you need; no more; no less.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Get Things Done */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start">
              <SectionLabel>EFFICIENCY</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Get Things Done
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Your inbox is a todo list
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                You can process (not only read) the inbox and easily mark messages for future actions. Start feeling the pleasure of having an empty inbox every day; no more overload of information.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={socialInboxEmail} alt="Get Things Done" className="w-full h-auto object-contain rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Promote Best Practice */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={socialWorkspaceHands} alt="Promote Best Practice" className="w-full h-auto object-contain rounded-xl" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start lg:ml-auto">
              <SectionLabel>BEST PRACTICE</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Promote Best Practice
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Discussion groups at your fingertips
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Cut back on meetings and email chains by working together in groups of interests. Create a group to let people share files, discuss ideas, and vote to promote best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Collaborate Securely */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start">
              <SectionLabel>SECURITY</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Collaborate Securely
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Set the right security policy; private or on invitation only — according to the information sensitivity. Protect company knowledge, restrict access to critical discussions, and ensure that only authorized team members can view or participate in sensitive project updates.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={socialCouchWorkspace} alt="Collaborate Securely" className="w-full h-auto object-contain rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Improve Access to Information and Expertise */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={socialSofaLaptop} alt="Easily find the information you need" className="w-full h-auto object-contain rounded-xl" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start lg:ml-auto">
              <SectionLabel>KNOWLEDGE MANAGEMENT</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Improve Access to Information and Expertise
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Easily find the information you need
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Break down information silos. Search across your existing systems to find the answer and expertise you need to complete projects quickly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: A Twitter/Facebook-like Network For Your Company */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full text-center lg:text-left items-center lg:items-start">
              <SectionLabel>ENGAGEMENT</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                A Twitter/Facebook-like Network For Your Company
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mt-3 sm:mt-4 leading-relaxed max-w-xl">
                Make every employee feel more connected and engaged with modern social features tailored for enterprise. Follow people, share best practices, and collaborate in real-time.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full rounded-2xl bg-white border border-slate-100 shadow-lg p-2 sm:p-3">
                  <img src={socialOutdoorLaptop} alt="Twitter/Facebook-like Network" className="w-full h-auto object-contain rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
