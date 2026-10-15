import { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import teamHeroBg from '../../assets/team_meeting.png';
import workspaceHands from '../../assets/workspace_hands.png';
import { teamMembers } from '../../data/teamMembers';

export function TeamDreamwarezPage() {
  const managingDirector = teamMembers[0];
  const employees = teamMembers.slice(1);
  const [hoveredMember, setHoveredMember] = useState(null);

  // Symmetrical 3x3 layout of all 9 current Dreamwarez employees (no repetition)
  const displayEmployees = [
    employees.find((m) => m.name.includes('Disha')) || employees[1],
    employees.find((m) => m.name.includes('Ashitosh')) || employees[4],
    employees.find((m) => m.name.includes('Abhishek')) || employees[5],
    employees.find((m) => m.name.includes('Ishika')) || employees[3],
    employees.find((m) => m.name.includes('Kanchan')) || employees[0],
    employees.find((m) => m.name.includes('Swami')) || employees[7],
    employees.find((m) => m.name.includes('Shruti')) || employees[6],
    employees.find((m) => m.name.includes('Rushikesh')) || employees[2],
    employees.find((m) => m.name.includes('Gayatri')) || employees[8]
  ];

  return (
    <div className="app-container" style={{ fontFamily: "'Open Sans', sans-serif" }}>

      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Team Dreamwarez" />

      <main className="main-content">
        {/* Hero Section */}
        <section className="min-h-[auto] lg:min-h-[calc(100vh-80px)] flex items-center py-10 sm:py-14 md:py-16 lg:py-20 bg-white relative overflow-hidden border-b border-slate-100">
          {/* Background Texture & Patterns */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Top Right Blue Shape */}
            <div
              className="absolute top-0 right-0 w-full h-full"
              style={{
                background: 'linear-gradient(to bottom left, rgba(147, 196, 253, 0.5) 0%, transparent 70%)',
                clipPath: 'polygon(20% 0, 100% 0, 100% 80%)'
              }}
            />
            {/* Bottom Left Teal Shape */}
            <div
              className="absolute bottom-20 left-0 w-full h-full"
              style={{
                background: 'linear-gradient(to top right, rgba(138, 202, 192, 0.5) 0%, transparent 70%)',
                clipPath: 'polygon(0 20%, 80% 100%, 0 100%)'
              }}
            />
          </div>

          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-10">
            {/* Left Content */}
            <div className="md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up pr-0 md:pr-6 lg:pr-8">
              {/* Subtitle */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  About Us
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[2.5px] sm:h-[3px] w-8 sm:w-10 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[2.5px] sm:h-[3px] w-2 sm:w-2.5 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-slate-900 font-heading mb-4 sm:mb-6 max-w-[700px]">
                Team <span className="text-[#0EA5E9]">Dreamwarez</span>
              </h1>

              {/* Paragraph */}
              <div className="space-y-3.5 sm:space-y-4 max-w-[600px]">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed">
                  Meet the people who turn ideas into practical software, mobile apps, business tools, and client-ready digital solutions.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We build reliable, scalable digital solutions tailored to real business needs.
                  Our team blends creativity with technology to deliver impactful results.
                  Driven by innovation, we turn ideas into powerful, user-focused experiences.
                </p>
              </div>

              {/* Action CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="#leadership-team"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center"
                >
                  Meet Leadership &rarr;
                </a>
                <a
                  href="/career-opportunities/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold text-sm py-3.5 px-6 rounded-full border border-slate-200 shadow-xs hover:shadow transition-all cursor-pointer text-center"
                >
                  Join Our Team
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 mt-6 sm:mt-8 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left w-full">
              <div className="relative w-full max-w-[550px]">
                {/* Rounded Image */}
                <div className="w-full aspect-[4/3] bg-slate-100 relative rounded-2xl sm:rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
                  <img
                    src={teamHeroBg}
                    alt="Team Dreamwarez"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section - Preserving Mr. Ronit Wagh photo */}
        <section id="leadership-team" className="scroll-mt-20 py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white reveal reveal-fade-up">
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] gap-8 sm:gap-10 md:gap-16 lg:gap-24 items-center">
            <div className="relative group w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] aspect-square mx-auto shrink-0">
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl sm:rounded-3xl blur-2xl translate-y-3 sm:translate-y-5 translate-x-3 sm:translate-x-5 group-hover:bg-blue-600/20 transition-all duration-500"></div>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 shadow-xl sm:shadow-2xl shadow-slate-200/70 bg-slate-100 w-full h-full">
                <img
                  src={managingDirector.src}
                  alt={managingDirector.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </div>

            <div className="reveal reveal-fade-left flex flex-col justify-center gap-4 sm:gap-6 py-2 sm:py-4 text-center md:text-left items-center md:items-start">
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  Leadership
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[2.5px] sm:h-[3px] w-8 sm:w-10 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[2.5px] sm:h-[3px] w-2 sm:w-2.5 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] font-black text-slate-900 leading-[1.1] mb-2 sm:mb-3">
                  Mr. Ronit Wagh
                </h2>
                <p className="text-[#0EA5E9] font-bold text-base sm:text-lg md:text-[20px]">
                  Managing Director
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base md:text-[18px] leading-relaxed max-w-[500px]">
                Ronit drives the technological vision and operations at Dreamwarez, ensuring our clients receive world-class solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our People / The Dreamwarez Team Section - 1 Row Layout with Tailwind CSS Circular Mosaic */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-slate-50 border-y border-slate-100 relative overflow-hidden reveal reveal-fade-up">
          {/* Background Texture & Patterns */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Top Right Blue Shape */}
            <div
              className="absolute top-0 right-0 w-full h-full"
              style={{
                background: 'linear-gradient(to bottom left, rgba(147, 197, 253, 0.25) 0%, transparent 70%)',
                clipPath: 'polygon(20% 0, 100% 0, 100% 80%)'
              }}
            />
            {/* Bottom Left #8ACAC0 Shape */}
            <div
              className="absolute bottom-0 left-0 w-full h-full"
              style={{
                background: 'linear-gradient(to top right, rgba(138, 202, 192, 0.35) 0%, transparent 70%)',
                clipPath: 'polygon(0 20%, 80% 100%, 0 100%)'
              }}
            />
          </div>

          <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 sm:gap-12 md:gap-16 lg:gap-24 items-center relative z-10">
            {/* Left Side: Tailwind CSS Dynamic Circular Team Stage */}
            <div className="relative group w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] max-w-full mx-auto shrink-0 reveal reveal-fade-right">
              {/* Outer ambient glow */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-tr from-[#2D9E84]/20 via-sky-400/20 to-[#8B2C2C]/20 blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700" />

              {/* Concentric rotating dashed orbital ring */}
              <div
                className="absolute -inset-2.5 sm:-inset-4 rounded-full border-2 border-dashed border-[#8B2C2C]/30 pointer-events-none"
                style={{ animation: 'spin 60s linear infinite' }}
              />

              {/* Second sleek concentric ring */}
              <div className="absolute -inset-5 sm:-inset-7 rounded-full border border-sky-300/40 pointer-events-none" />

              {/* Main Circular Glass Stage */}
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-slate-300/80 bg-white/90 backdrop-blur-md w-full h-full p-3 sm:p-4 md:p-5 flex items-center justify-center">
                {/* Inner 3x3 Grid of Employee Photo Tiles */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-2.5 w-full h-full">
                  {displayEmployees.map((member) => {
                    const isHovered = hoveredMember?.name === member.name;
                    return (
                      <div
                        key={member.name}
                        onClick={() => setHoveredMember(hoveredMember?.name === member.name ? null : member)}
                        onMouseEnter={() => setHoveredMember(member)}
                        onMouseLeave={() => setHoveredMember(null)}
                        className={`relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border-2 transition-all duration-300 cursor-pointer aspect-square bg-slate-100 group/tile ${
                          isHovered
                            ? 'scale-110 z-30 shadow-2xl border-[#8B2C2C] ring-2 ring-[#8B2C2C]/50'
                            : 'border-white/90 shadow-sm hover:shadow-xl hover:scale-105 hover:z-20'
                        }`}
                      >
                        <img
                          src={member.src}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover/tile:scale-115 transition-transform duration-500"
                        />
                        {/* Live active dot */}
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white shadow-sm" />

                        {/* Hover name/role overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-1.5 sm:p-2 text-center pointer-events-none">
                          <span className="text-[10px] sm:text-[11px] font-extrabold text-white leading-tight drop-shadow-sm truncate">
                            {member.name.split(' ')[0]}
                          </span>
                          <span className="text-[8px] sm:text-[9px] font-bold text-teal-300 uppercase tracking-wider truncate">
                            {member.role.replace(' Developer', '')}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side: Team Dreamwarez Heading, Short Info & Live Spotlight */}
            <div className="reveal reveal-fade-left flex flex-col justify-center gap-4 sm:gap-6 py-2 sm:py-4 text-center md:text-left items-center md:items-start">
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  Our People
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[2.5px] sm:h-[3px] w-8 sm:w-10 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[2.5px] sm:h-[3px] w-2 sm:w-2.5 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-black text-slate-900 leading-[1.1] mb-2 sm:mb-3">
                  The <span className="text-[#0EA5E9]">Dreamwarez</span> Team
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base md:text-[18px] leading-relaxed max-w-[500px]">
                A focused group of developers and builders working across mobile, web, backend systems, dashboards, and business applications to deliver impactful, user-focused experiences.
              </p>

              {/* Interactive Member Spotlight Bar in Tailwind CSS */}
              <div className="p-3.5 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white/95 border border-slate-200/90 shadow-md shadow-slate-200/50 w-full max-w-[500px] text-left transition-all duration-300">
                {hoveredMember ? (
                  <div className="flex items-center gap-3.5 sm:gap-4 transition-all duration-300">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#8B2C2C] shadow-md shrink-0">
                      <img src={hoveredMember.src} alt={hoveredMember.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base sm:text-[17px] font-extrabold text-slate-900 truncate">{hoveredMember.name}</div>
                      <div className="text-xs sm:text-[13px] font-bold text-[#0EA5E9] uppercase tracking-wide truncate">{hoveredMember.role}</div>
                      {hoveredMember.quote && (
                        <div className="text-xs sm:text-[12.5px] text-slate-500 italic truncate mt-0.5">&ldquo;{hoveredMember.quote}&rdquo;</div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-slate-600">
                    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-sm shrink-0">
                      ✨
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-[14px] font-bold text-slate-900 truncate">Core Engineering Team</div>
                      <div className="text-[11px] sm:text-[12px] text-slate-500 truncate">Tap or hover any teammate to view spotlight</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Work Together Section */}
        <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-8 lg:px-12 max-w-[1200px] mx-auto relative border-2 border-blue-200 rounded-2xl sm:rounded-3xl mt-12 sm:mt-16 mb-12 sm:mb-20 bg-white reveal reveal-fade-up shadow-sm">
          <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 sm:mb-6">
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  Work Together
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[2.5px] sm:h-[3px] w-8 sm:w-10 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[2.5px] sm:h-[3px] w-2 sm:w-2.5 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold text-slate-900 leading-tight">
                People-first software delivery
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4 sm:mt-5">
                Our strength is a practical team culture: clear ownership, fast collaboration, and solutions shaped around real business needs.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start">
                <a
                  href="/contact/#contact-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-8 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center group"
                >
                  <span>Work With Our Team</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 shadow-xl bg-slate-100 w-full max-w-[500px] mx-auto lg:max-w-none">
              <img src={workspaceHands} alt="Dreamwarez team collaboration" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </section>
      </main>

      <ChatWidget />
      <SiteFooter variant="black" />
    </div>
  );
}