import { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import mediaHeroPhoto from '../../assets/media_hero_photo.jpg';
import mediaPresence from '../../assets/media_presence_new.jpg';
import mediaPost from '../../assets/media_post_new.jpg';
import mediaPromo from '../../assets/media_promo_new.jpg';
import anim2d from '../../assets/m_2d_sketch_photo.jpg';
import anim3d from '../../assets/m_3d_render_white.jpg';
import videoShoots from '../../assets/team_meeting.png';
import careersHeroBg from '../../assets/careers_hero_bg.png';

const GlobeIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>);
const PenToolIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>);
const MegaphoneIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>);
const MonitorPlayIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/><path d="m10 8 6 4-6 4Z"/></svg>);
const CuboidIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>);
const VideoIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>);

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

export function MediaAnimationPage() {
  const [showSandbox, setShowSandbox] = useState(false);
  const [activeTab, setActiveTab] = useState('online-presence');
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [renderProgress, setRenderProgress] = useState(0);
  const [isRendering, setIsRendering] = useState(false);

  const startPlayback = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    const interval = setInterval(() => {
      setCurrentFrame(f => {
        if (f >= 120) {
          clearInterval(interval);
          setIsPlaying(false);
          return 0;
        }
        return f + 1;
      });
    }, 40);
  };

  const startRender = () => {
    if (isRendering) return;
    setIsRendering(true);
    setRenderProgress(0);
    const interval = setInterval(() => {
      setRenderProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setIsRendering(false);
          alert('Render complete! Saved output frames to cache.');
          return 100;
        }
        return p + 2;
      });
    }, 60);
  };

  return (
    <div className="app-container software-theme-page overflow-x-hidden">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO 
        title="Media & Animation Services | Dreamwarez"
        description="Boost your market presence with professional 2D and 3D animated videos, social media campaigns, brand assets, and creative studio services."
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
              <SectionLabel>CREATIVE STUDIO</SectionLabel>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-black font-heading mb-4 sm:mb-6 max-w-[700px]">
                Media &amp; <span className="text-[#7A7A7A]">Animation</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-[600px] mb-6 sm:mb-8">
                Boost your online and offline market presence with high-impact corporate videos, 2D/3D animations, and social brand campaigns.
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
                  src={mediaHeroPhoto} 
                  alt="Media and Animation Workstation" 
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Social Media Management */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto text-center relative z-10">
            <div className="reveal reveal-fade-up">
              <SectionLabel align="center">PROMOTION LAYERS</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                Social Media Management
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Manage and promote all kinds of social media platforms
              </h3>
            </div>

            {/* 3 Column Social Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm reveal reveal-fade-right">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 overflow-hidden rounded-2xl shadow-md border-2 border-slate-100 mb-4 sm:mb-6">
                  <img src={mediaPresence} alt="Online Presence Management" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <h4 className="font-bold text-slate-800 text-base sm:text-lg mb-2">Online Presence Management</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[280px]">
                  We handle and maintain your social media channels to ensure constant brand visibility.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm reveal reveal-fade-up">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 overflow-hidden rounded-2xl shadow-md border-2 border-slate-100 mb-4 sm:mb-6">
                  <img src={mediaPost} alt="Post Creation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <h4 className="font-bold text-slate-800 text-base sm:text-lg mb-2">Post Creation</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[280px]">
                  We create engaging graphics and reels tailored to your requirements and schedules.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm reveal reveal-fade-left sm:col-span-2 md:col-span-1">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 overflow-hidden rounded-2xl shadow-md border-2 border-slate-100 mb-4 sm:mb-6">
                  <img src={mediaPromo} alt="Campaign Management" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <h4 className="font-bold text-slate-800 text-base sm:text-lg mb-2">Campaign Management</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[280px]">
                  We launch and manage targeted ad campaigns to boost leads and customer acquisition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 2D and 3D Videos Creation */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-[1350px] mx-auto text-center">
            <div className="reveal reveal-fade-right">
              <SectionLabel align="center">VIDEO FABRICATION</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-2 sm:mt-3 leading-tight">
                2D and 3D Video Creation
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                Animated videos for product branding, tutorials, company profiles, and commercials
              </h3>
            </div>

            {/* 3 Column Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm reveal reveal-fade-right">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 mb-4 sm:mb-6 flex items-center justify-center hover:scale-105 transition-transform duration-300 bg-white rounded-2xl shadow-md border-2 border-slate-100 overflow-hidden">
                  <img src={anim2d} alt="2D Animation" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-slate-800 text-base sm:text-lg mb-2">2D Animation</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[280px]">
                  We create 2D ads, educational tutorials, product explainer videos, and infographic animations.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm reveal reveal-fade-up">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 mb-4 sm:mb-6 flex items-center justify-center hover:scale-105 transition-transform duration-300 bg-white rounded-2xl shadow-md border-2 border-slate-100 overflow-hidden">
                  <img src={anim3d} alt="3D Animation" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-slate-800 text-base sm:text-lg mb-2">3D Renderings</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[280px]">
                  We render 3D company showcases, industrial manufacturing processes, and photorealistic product models.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm reveal reveal-fade-left sm:col-span-2 md:col-span-1">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 mb-4 sm:mb-6 overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-white border-2 border-slate-100">
                  <video 
                    poster={videoShoots}
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-videographer-with-a-camera-gimbal-42861-large.mp4" type="video/mp4" />
                    <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
                  </video>
                </div>
                <h4 className="font-bold text-slate-800 text-base sm:text-lg mb-2">Video Shoots</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[280px]">
                  Professional on-site video production, corporate interviews, and promotional commercials.
                </p>
              </div>
            </div>

            {/* Expandable Animation Sandbox */}
            <div className="mt-10 sm:mt-16 reveal reveal-fade-left">
              <button 
                onClick={() => setShowSandbox(!showSandbox)}
                className="w-full sm:w-auto bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-full shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                {showSandbox ? '✕ Hide Creative Studio' : '🎬 Open Creative Studio Suite'}
              </button>

              {showSandbox && (
                <div className="mt-8 text-left bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg max-w-[1350px] mx-auto animate-fade-in">
                  
                  {/* Top Navigation Tabs */}
                  <div className="flex overflow-x-auto gap-2 pb-3 mb-6 border-b border-slate-100 no-scrollbar touch-pan-x">
                    {[
                      { id: 'online-presence', label: 'Online Presence', icon: <GlobeIcon /> },
                      { id: 'post-creation', label: 'Post Creation', icon: <PenToolIcon /> },
                      { id: 'campaign-management', label: 'Ad Campaigns', icon: <MegaphoneIcon /> },
                      { id: '2d-animation', label: '2D Animation', icon: <MonitorPlayIcon /> },
                      { id: '3d-animation', label: '3D Render', icon: <CuboidIcon /> },
                      { id: 'video-shoots', label: 'Video Grading', icon: <VideoIcon /> }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                          activeTab === tab.id 
                            ? 'bg-[#0EA5E9] text-white shadow-md' 
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        <span className="w-4 h-4">{tab.icon}</span>
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Contents */}
                  <div className="min-h-[300px]">
                    
                    {/* 1. Online Presence */}
                    {activeTab === 'online-presence' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                        <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100">
                          <h4 className="font-heading font-bold text-slate-800 mb-4 text-sm sm:text-base">Audience Growth</h4>
                          <div className="flex items-end gap-2 h-36 sm:h-40 border-b border-l border-slate-200 p-2">
                            {[40, 60, 45, 80, 65, 95, 120].map((h, i) => (
                              <div key={i} className="flex-1 bg-sky-500 rounded-t-sm hover:bg-sky-600 transition-all cursor-pointer" style={{ height: `${(h/120)*100}%` }}></div>
                            ))}
                          </div>
                          <div className="flex justify-between text-xs text-slate-400 mt-2 font-bold uppercase">
                            <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
                          </div>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100 flex flex-col justify-center">
                           <div className="text-center mb-6">
                             <div className="text-3xl sm:text-4xl font-black text-sky-600 mb-1">+24%</div>
                             <div className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-widest">Engagement Rate</div>
                           </div>
                           <div className="space-y-3">
                             <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                               <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs sm:text-sm">f</div>
                               <div className="flex-1"><div className="h-2 bg-slate-100 rounded-full w-full"><div className="h-full bg-blue-500 rounded-full w-[70%]"></div></div></div>
                             </div>
                             <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                               <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs sm:text-sm">ig</div>
                               <div className="flex-1"><div className="h-2 bg-slate-100 rounded-full w-full"><div className="h-full bg-pink-500 rounded-full w-[85%]"></div></div></div>
                             </div>
                           </div>
                        </div>
                      </div>
                    )}

                    {/* 2. Post Creation */}
                    {activeTab === 'post-creation' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Post Caption</label>
                            <textarea 
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 outline-none resize-none h-24"
                              placeholder="Write a captivating caption..."
                              defaultValue="Excited to announce our new media suite! 🚀 #Creative"
                              id="post-caption-input"
                              onChange={(e) => {
                                const preview = document.getElementById('post-caption-preview');
                                if (preview) preview.innerText = e.target.value;
                              }}
                            ></textarea>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Brand Color</label>
                            <div className="flex gap-2">
                              {['#f43f5e', '#a855f7', '#0ea5e9', '#10b981', '#f59e0b'].map(color => (
                                <button 
                                  key={color} 
                                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform"
                                  style={{ backgroundColor: color }}
                                  onClick={() => {
                                    const preview = document.getElementById('post-preview-bg');
                                    if (preview) preview.style.backgroundColor = color;
                                  }}
                                ></button>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="w-[260px] sm:w-[280px] bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden">
                            <div id="post-preview-bg" className="h-[180px] sm:h-[200px] bg-sky-500 flex items-center justify-center transition-colors duration-300">
                              <span className="text-white text-3xl sm:text-4xl font-black opacity-50">IMAGE</span>
                            </div>
                            <div className="p-4">
                              <div className="flex gap-2 mb-2">
                                <div className="w-5 h-5 rounded-full bg-slate-200"></div>
                                <div className="h-3 w-20 bg-slate-200 rounded-full mt-1"></div>
                              </div>
                              <p id="post-caption-preview" className="text-xs sm:text-sm text-slate-800 font-medium">Excited to announce our new media suite! 🚀 #Creative</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 3. Campaign Management */}
                    {activeTab === 'campaign-management' && (
                      <div className="space-y-4 sm:space-y-6 animate-fade-in">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-50 p-4 rounded-xl border border-slate-200 gap-3">
                          <div>
                            <h4 className="font-bold text-slate-800 text-sm sm:text-base">Summer Sale Campaign</h4>
                            <span className="text-xs text-slate-500">Targeting: 18-35, Tech Enthusiasts</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span id="ad-status-text" className="text-xs font-bold text-emerald-600 uppercase">Active</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked onChange={(e) => {
                                const status = document.getElementById('ad-status-text');
                                if (status) {
                                  if (e.target.checked) {
                                    status.innerText = 'Active';
                                    status.className = 'text-xs font-bold text-emerald-600 uppercase';
                                  } else {
                                    status.innerText = 'Paused';
                                    status.className = 'text-xs font-bold text-slate-400 uppercase';
                                  }
                                }
                              }}/>
                              <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                            </label>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                          <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs text-center">
                            <div className="text-xs font-bold text-slate-400 uppercase mb-1">Total Spend</div>
                            <div className="text-base sm:text-lg font-black text-slate-800">$1,245<span className="text-xs text-slate-400 font-medium">.50</span></div>
                          </div>
                          <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs text-center">
                            <div className="text-xs font-bold text-slate-400 uppercase mb-1">Click-Through</div>
                            <div className="text-base sm:text-lg font-black text-sky-600">4.8%</div>
                          </div>
                          <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs text-center">
                            <div className="text-xs font-bold text-slate-400 uppercase mb-1">Cost Per Click</div>
                            <div className="text-base sm:text-lg font-black text-slate-800">$0.82</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 4. 2D Animation */}
                    {activeTab === '2d-animation' && (
                      <div className="animate-fade-in flex flex-col gap-4">
                        <div className="bg-slate-50 border border-slate-200 rounded-xl h-[160px] sm:h-[200px] relative overflow-hidden flex items-center p-4">
                          <div id="anim-target-2d" className="w-14 h-14 sm:w-16 sm:h-16 bg-sky-500 rounded-xl shadow-lg flex items-center justify-center text-white font-bold transition-all duration-1000 ease-in-out absolute left-4">
                            2D
                          </div>
                        </div>
                        <div>
                          <button 
                            className="w-full sm:w-auto bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-95 text-white font-bold px-4 py-2.5 rounded-lg text-xs sm:text-sm cursor-pointer shadow-sm"
                            onClick={() => {
                              const el = document.getElementById('anim-target-2d');
                              if (el) {
                                el.style.left = 'calc(100% - 70px)';
                                el.style.transform = 'rotate(360deg)';
                                el.style.backgroundColor = '#ec4899';
                                setTimeout(() => {
                                  el.style.left = '16px';
                                  el.style.transform = 'rotate(0deg)';
                                  el.style.backgroundColor = '#0ea5e9';
                                }, 1500);
                              }
                            }}
                          >
                            Play 2D Sequence
                          </button>
                        </div>
                      </div>
                    )}

                    {/* 5. 3D Animation */}
                    {activeTab === '3d-animation' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 animate-fade-in">
                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5">
                          <h4 className="font-heading font-bold text-slate-800 mb-1 text-sm sm:text-base">3D Render Timelines</h4>
                          <span className="block text-xs text-slate-400 mb-3 uppercase">Scrub through animation frames</span>
                          <div className="flex flex-col gap-3">
                            <div className="bg-white border border-slate-200 h-24 sm:h-28 rounded-xl flex items-center justify-center relative overflow-hidden shadow-inner">
                              <div className="text-center z-10">
                                <span className="block text-sm sm:text-base font-bold text-sky-600">Frame {currentFrame}</span>
                                <span className="text-xs text-slate-400">Angle: {(currentFrame * 3) % 360}°</span>
                              </div>
                              <div 
                                className="absolute w-12 h-12 border-2 border-sky-500 bg-sky-50 rounded-lg transition-transform duration-75 shadow-lg"
                                style={{ transform: `rotate(${currentFrame * 3}deg) rotateX(${currentFrame * 2}deg)` }}
                              ></div>
                            </div>
                            <div className="flex gap-2">
                              <button 
                                onClick={startPlayback}
                                disabled={isPlaying}
                                className="flex-1 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-95 text-white font-bold px-3 py-2 rounded-lg text-xs cursor-pointer disabled:bg-slate-200"
                              >
                                {isPlaying ? 'Playing...' : 'Play Sequence'}
                              </button>
                              <button 
                                onClick={() => setCurrentFrame(0)}
                                className="border border-slate-200 bg-white hover:bg-slate-50 active:scale-95 text-slate-700 font-bold px-3 py-2 rounded-lg text-xs cursor-pointer"
                              >
                                Reset
                              </button>
                            </div>
                            <input 
                              type="range" min="0" max="120" value={currentFrame} 
                              onChange={(e) => setCurrentFrame(parseInt(e.target.value))}
                              className="w-full accent-sky-600 cursor-pointer"
                            />
                          </div>
                        </div>

                        {/* Render Log Queue */}
                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
                          <div>
                            <h4 className="font-heading font-bold text-slate-800 mb-1 text-sm sm:text-base">Render Engine Log</h4>
                            <span className="block text-xs text-slate-400 mb-3 uppercase">Track pipeline export jobs</span>
                            <div className="flex flex-col gap-3">
                              <div className="bg-white border border-slate-200 rounded-xl p-3">
                                <div className="flex justify-between items-center text-xs text-slate-800 mb-2">
                                  <span className="truncate pr-2">Job: Product_Walkthrough.mp4</span>
                                  <span className="font-bold">{renderProgress}%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                  <div className="bg-sky-600 h-full transition-all duration-100" style={{ width: `${renderProgress}%` }}></div>
                                </div>
                              </div>
                              {isRendering && (
                                <div className="font-mono text-xs text-slate-500 bg-white border border-slate-200 p-2.5 rounded-xl max-h-[80px] overflow-y-auto">
                                  <div>[INFO] Initializing render engine...</div>
                                  <div>[INFO] Allocating GPU threads...</div>
                                  {renderProgress > 10 && <div>[INFO] Rendered keyframe 1-12...</div>}
                                  {renderProgress > 40 && <div>[INFO] Compositing shadow layers...</div>}
                                  {renderProgress > 80 && <div>[INFO] Writing MPEG container...</div>}
                                </div>
                              )}
                            </div>
                          </div>
                          <button 
                            onClick={startRender}
                            disabled={isRendering}
                            className="w-full mt-4 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-95 text-white font-bold py-2.5 rounded-lg text-xs sm:text-sm shadow-sm cursor-pointer disabled:bg-slate-200 disabled:text-slate-400 transition-all"
                          >
                            {isRendering ? 'Rendering Sequence...' : 'Start Job Render'}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* 6. Video Shoots */}
                    {activeTab === 'video-shoots' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                        <div className="bg-slate-100 border border-slate-200 rounded-xl overflow-hidden flex flex-col min-h-[180px]">
                           <div id="video-preview-mock" className="flex-1 bg-cover bg-center transition-all duration-100 min-h-[140px]" style={{ backgroundImage: `url(${careersHeroBg})` }}></div>
                           <div className="bg-slate-800 p-2.5 flex justify-center gap-4 text-white text-xs">
                             <span>▶ Play</span><span>⏸ Pause</span><span>⏹ Stop</span>
                           </div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
                          <h4 className="font-bold text-slate-800 mb-1 text-sm sm:text-base">Color Grading</h4>
                          
                          <div>
                            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1"><span>Brightness</span></div>
                            <input type="range" min="50" max="150" defaultValue="100" className="w-full accent-sky-600" onChange={(e) => {
                               const el = document.getElementById('video-preview-mock');
                               if (el) {
                                 el.style.filter = `brightness(${e.target.value}%) sepia(var(--tw-sepia, 0)) saturate(var(--tw-saturate, 100%))`;
                                 el.style.setProperty('--tw-brightness', `${e.target.value}%`);
                               }
                            }}/>
                          </div>

                          <div>
                            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1"><span>Saturation</span></div>
                            <input type="range" min="0" max="200" defaultValue="100" className="w-full accent-sky-600" onChange={(e) => {
                               const el = document.getElementById('video-preview-mock');
                               if (el) {
                                 el.style.filter = `brightness(var(--tw-brightness, 100%)) sepia(var(--tw-sepia, 0)) saturate(${e.target.value}%)`;
                                 el.style.setProperty('--tw-saturate', `${e.target.value}%`);
                               }
                            }}/>
                          </div>

                          <div>
                            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1"><span>Cinematic Look</span></div>
                            <input type="range" min="0" max="100" defaultValue="0" className="w-full accent-sky-600" onChange={(e) => {
                               const el = document.getElementById('video-preview-mock');
                               if (el) {
                                 el.style.filter = `brightness(var(--tw-brightness, 100%)) sepia(${e.target.value}%) saturate(var(--tw-saturate, 100%))`;
                                 el.style.setProperty('--tw-sepia', `${e.target.value}%`);
                               }
                            }}/>
                          </div>
                          
                          <button 
                            className="w-full bg-slate-200 hover:bg-slate-300 active:scale-95 text-slate-700 font-bold py-2 rounded-lg text-xs mt-2 transition-colors cursor-pointer" 
                            onClick={() => {
                              const el = document.getElementById('video-preview-mock');
                              if (el) {
                                el.style.filter = 'none';
                                el.style.setProperty('--tw-brightness', '100%');
                                el.style.setProperty('--tw-saturate', '100%');
                                el.style.setProperty('--tw-sepia', '0%');
                              }
                            }}
                          >
                            Reset Grades
                          </button>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Bottom Call to Action Section */}
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

      <SiteFooter />
      <ChatWidget />
    </div>
  );
}