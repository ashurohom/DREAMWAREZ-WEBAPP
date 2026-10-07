import React, { useState } from 'react';
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

export function EnterpriseSocialNetworkPage() {
  const [selectedExpert, setSelectedExpert] = useState('');
  const [expertQuestion, setExpertQuestion] = useState('');
  const [expertMessage, setExpertMessage] = useState('');

  const [subscribedChannels, setSubscribedChannels] = useState({
    'Engineering Team': true,
    'Marketing Updates': false,
    'Company Announcements': true,
    'Sales Pipeline': false
  });
  const [notifications, setNotifications] = useState(3);

  const [inboxEmails, setInboxEmails] = useState([
    { id: 1, from: 'CEO Updates', subject: 'Q3 Targets Reached', done: false },
    { id: 2, from: 'HR Dept', subject: 'New Policy Doc', done: false },
    { id: 3, from: 'System Alert', subject: 'Server Maintenance', done: true }
  ]);

  const [pollVotes, setPollVotes] = useState({
    'Morning Standup at 9AM': 15,
    'Async Status Updates': 28,
    'Weekly Full Sync': 12
  });
  const [hasVoted, setHasVoted] = useState(false);

  const [securityPolicy, setSecurityPolicy] = useState('Invitation');

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSiloSearch = (val) => {
    setSearchQuery(val);
    if (!val) {
      setSearchResults([]);
      return;
    }
    const mockDb = [
      { title: 'Project Alpha Requirements', category: 'Files', snippet: '...breakdown of module requirements for Alpha...' },
      { title: 'Ronit Wagh', category: 'Directory', snippet: 'Managing Director, Dreamwarez...' },
      { title: 'Invoice #1024', category: 'Accounting', snippet: '...payment pending for new server hardware...' },
      { title: 'Customer rules update', category: 'CRM', snippet: '...new automation rules for lead scoring...' }
    ];
    setSearchResults(mockDb.filter(r => r.title.toLowerCase().includes(val.toLowerCase()) || r.snippet.toLowerCase().includes(val.toLowerCase())));
  };

  const [socialFeedLikes, setSocialFeedLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [socialFeedComments, setSocialFeedComments] = useState([
    { author: 'Disha Khachane', text: 'Looks amazing! Great job team. 👏' },
    { author: 'Kanchan Kate', text: 'Love the new spacing.' }
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  const LabelBadge = ({ children, className = '' }) => {
    const isCentered = className.includes('center') || className.includes('mx-auto') || className.includes('justify-center');
    return (
      <div className={`flex ${isCentered ? 'justify-center' : 'justify-start'} mb-4 ${className}`}>
        <div className="inline-flex flex-col items-start gap-1.5">
          <span className="text-[#8B2C2C] font-bold text-[14px] uppercase tracking-widest">
            {children}
          </span>
          <div className="flex gap-1.5">
            <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
            <div className="w-4 h-1.5 rounded-full" style={{ backgroundColor: '#7A7A7A' }}></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container software-theme-page">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Enterprise Social Network" />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="relative bg-white pt-8 pb-10 md:pt-10 md:pb-12 min-h-[calc(100vh-80px)] overflow-hidden flex items-center border-b border-slate-100">
          <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full" style={{ maxWidth: '1350px' }}>
            {/* Left Content */}
            <div className="md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up pr-8">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginBottom: '20px' }}>
  <span style={{ color: '#8B2C2C',  fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1'  }}>TEAM COLLABORATION</span>
  <div style={{ display: 'flex', gap: '6px' }}>
    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
    <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
  </div>
</div>
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-6 max-w-[700px]">
                Enterprise Social <span style={{ color: '#7A7A7A' }}>Network</span>
              </h1>
              <p className="text-[16px] text-black leading-relaxed max-w-[600px] mb-4">
                A private social network for your company.
              </p>
              <p className="text-[16px] text-black leading-relaxed max-w-[600px]">
                Collaborate without boundaries. Share updates, exchange ideas, and work together in real time.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left">
              <div 
                className="w-full max-w-[420px] aspect-square overflow-hidden bg-slate-50 p-2 shadow-xl border border-slate-100" 
                style={{ borderRadius: '24px' }}
              >
                <img 
                  src={socialHeroPhoto} 
                  alt="Enterprise Social Network Workspace" 
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '24px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="pt-28 pb-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-x-0 bottom-0 top-20 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          
          <div className="mx-auto px-6 text-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                  <span style={{ color: '#8B2C2C', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Open Sans", sans-serif', lineHeight: '1' }}>COLLABORATION NETWORK</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                    <div style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: '#7A7A7A' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-[#000000] text-[18px] font-bold max-w-4xl mx-auto mt-4 leading-relaxed mb-12">
                Connect with experts, follow what interests you, share documents and promote best practices. Get work done with effective collaboration across departments, geographies, documents and business applications. All of this while decreasing email overload.
              </p>
            </div>
            
            <div className="reveal reveal-fade-up flex justify-center mt-8">
              <div className="w-full max-w-[420px] border border-slate-200/80 p-3 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:scale-[1.01] transition-transform duration-500">
                <img src={socialFeedDashboard} alt="Social Feed Dashboard" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Connect With Experts */}
        <section className="py-20">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full lg:max-w-[580px]">
              <LabelBadge>NETWORK</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Connect With Experts</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Get the right information when you need it</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Next time you have a question for the marketing, sales, R&D or any other department, don’t send an email blast-post the question to Dreamwarez and get answers from the right persons.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full">
                  <img src={expertCollaboration} alt="Connect with experts" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Follow what Interest you */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full">
                  <img src={socialCoffeeDesk} alt="Follow what interest you" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full lg:max-w-[580px] lg:ml-auto">
              <LabelBadge>INFORMATION FLOW</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Follow what Interest you</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Make the information flow across your company</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Want to get informed about new product features, hot deals, bottleneck in projects or any other event? Just follow what interest you to get the information you need; what you need; no more; no less.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Get Things Done */}
        <section className="py-20">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full lg:max-w-[580px]">
              <LabelBadge>EFFICIENCY</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Get Things Done</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Your inbox is a todo list</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                You can process (not only read) the inbox and easily mark messages for future actions. Start feeling the pleasure of having an empty inbox every day; no more overload of information.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full">
                  <img src={socialInboxEmail} alt="Get Things Done" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Promote Best Practice */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full">
                  <img src={socialWorkspaceHands} alt="Promote Best Practice" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full lg:max-w-[580px] lg:ml-auto">
              <LabelBadge>BEST PRACTICE</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Promote Best Practice</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Discussion groups at your fingertips</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Cut back on meeting and email chains by working together in group of interests. Create a group to let people share files, discuss ideas, and vote to promote best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Collaborate Securely */}
        <section className="py-20">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full lg:max-w-[580px]">
              <LabelBadge>SECURITY</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Collaborate Securely</h2>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Set the right security policy; private or on invitation only — according to the information sensitivity. Protect company knowledge, restrict access to critical discussions, and ensure that only authorized team members can view or participate in sensitive project updates.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full">
                  <img src={socialCouchWorkspace} alt="Collaborate Securely" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Improve Access to Information and Expertise */}
        <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up lg:order-1 mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-start hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full">
                  <img src={socialSofaLaptop} alt="Easily find the information you need" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>

            <div className="reveal reveal-fade-up lg:order-2 flex flex-col justify-center w-full lg:max-w-[580px] lg:ml-auto">
              <LabelBadge>KNOWLEDGE MANAGEMENT</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">Improve Access to Information and Expertise</h2>
              <h3 className="text-[16px] font-bold text-slate-700 mt-2">Easily find the information you need</h3>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Break down information silos. Search across your existing systems to find the answer and expertise you need to complete projects quickly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: A Twitter/Facebook-like Network For Your Company */}
        <section className="py-20">
          <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1350px' }}>
            <div className="reveal reveal-fade-up flex flex-col justify-center w-full lg:max-w-[580px]">
              <LabelBadge>ENGAGEMENT</LabelBadge>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-4">A Twitter/Facebook-like Network For Your Company</h2>
              <p className="text-[16px] text-black mt-4 leading-relaxed">
                Make every employee feel more connected and engaged with twitter-like features for your own company. Follow people, share best practices, ‘like’ top ideas, etc.
              </p>
            </div>

            <div className="reveal reveal-fade-up mx-auto w-full flex justify-center">
              <div className="flex justify-center lg:justify-end hover:scale-[1.02] transition-transform duration-500 w-full">
                <div className="max-w-[480px] w-full">
                  <img src={socialOutdoorLaptop} alt="Twitter/Facebook-like Network" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', background: 'linear-gradient(180deg, transparent, rgba(14, 165, 233, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '30px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
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
