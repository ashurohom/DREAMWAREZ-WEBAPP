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


  return (
    <div className="app-container" style={{ fontFamily: "'Open Sans', sans-serif" }}>

      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Team Dreamwarez" />

      <main className="main-content">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-80px)] flex items-center pt-8 pb-10 md:pt-10 md:pb-12 bg-white relative overflow-hidden">
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

          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between w-full relative z-10">
            {/* Left Content */}
            <div className="md:w-1/2 z-10 flex flex-col justify-center reveal reveal-fade-up pr-8">
              {/* Subtitle */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  About Us
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[3px] w-8 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[3px] w-3 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-6 max-w-[700px]">
                Team <span className="text-[#7A7A7A]">Dreamwarez</span>
              </h1>

              {/* Paragraph */}
              <div className="space-y-4 max-w-[600px]">
                <p className="text-lg text-black leading-relaxed">
                  Meet the people who turn ideas into practical software, mobile apps, business tools, and client-ready digital solutions.
                </p>
                <p className="text-lg text-black leading-relaxed">
                  We build reliable, scalable digital solutions tailored to real business needs.
                  Our team blends creativity with technology to deliver impactful results.
                  Driven by innovation, we turn ideas into powerful, user-focused experiences.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-end z-0 reveal reveal-fade-left">
              <div className="relative w-full max-w-[550px]">
                {/* Rounded Image */}
                <div className="w-full aspect-[4/3] bg-slate-100 relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
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

        <section className="py-20 px-6 bg-white reveal reveal-fade-up">
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-24 lg:gap-32 items-stretch">
            <div className="relative group w-[380px] h-[380px] mx-auto shrink-0">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-2xl translate-y-5 translate-x-5 group-hover:bg-blue-600/20 transition-all duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/70 bg-slate-100 w-full h-full">
                <img
                  src={managingDirector.src}
                  alt={managingDirector.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </div>

            <div className="reveal reveal-fade-left flex flex-col justify-center gap-6 py-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  Leadership
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[3px] w-8 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[3px] w-3 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>

              <div>
                <h2 className="text-[52px] font-black text-[#0f172a] leading-[1.1] mb-3">
                  Mr. Ronit Wagh
                </h2>
                <p className="text-[#707793] font-bold text-[20px]">
                  Managing Director
                </p>
              </div>

              <p className="text-slate-500 text-[18px] leading-[1.9] max-w-[500px]">
                Ronit drives the technological vision and operations at Dreamwarez, ensuring our clients receive world-class solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100 relative overflow-hidden reveal reveal-fade-up">
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

          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-xs font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  Our People
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[3px] w-8 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[3px] w-3 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>
              <h2 className="text-[46px] font-extrabold text-slate-900">
                The <span className="text-[#7A7A7A]">Dreamwarez</span> Team
              </h2>
              <p className="text-black text-[16px] mt-4 leading-relaxed">
                A focused group of developers and builders working across mobile, web, backend systems, dashboards, and business applications.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-7">
              {employees.map((member) => (
                <div key={member.name} className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] xl:w-[calc(25%-21px)] reveal reveal-fade-up">
                  <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group h-full">
                    <div className="aspect-square bg-slate-100 overflow-hidden">
                      <img
                        src={member.src}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-[16px] font-extrabold text-slate-900">{member.name}</h3>
                      <p className="text-[#0EA5E9] text-[14px] font-bold uppercase tracking-wide mt-1">{member.role}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 max-w-[1200px] mx-auto relative border-2 border-blue-200 rounded-3xl mt-16 mb-20 bg-white reveal reveal-fade-up">
          <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  Work Together
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[3px] w-8 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[3px] w-3 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>
              <h2 className="text-[46px] font-extrabold text-slate-900 leading-tight">
                People-first software delivery
              </h2>
              <p className="text-black text-[16px] leading-relaxed mt-5">
                Our strength is a practical team culture: clear ownership, fast collaboration, and solutions shaped around real business needs.
              </p>
              <div className="mt-8">
                <a href="/contact/#contact-form" className="inline-flex items-center gap-3 bg-[#7A7A7A] text-white font-bold text-[14px] px-8 py-4 rounded-xl shadow-lg shadow-[#7A7A7A]/30 hover:bg-[#5A5A5A] hover:scale-[1.02] transition-all duration-300 group">
                  Work With Our Team <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-xl bg-slate-100">
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