import re

file_path = r"D:\DW Website\dreamwarez\src\pages\subpages\OdooPartnerPage.jsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Replace the top hero section <section> and backdrop
hero_start_pattern = re.compile(r"\{\/\*\s*HERO SECTION\s*\*\/\}.*?<div className=\"max-w-\[1350px\] mx-auto px-6 relative z-10\">", re.DOTALL)

new_hero_start = '''{/* HERO SECTION */}
        <section 
          className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-white select-none"
        >
          {/* Background decorative diagonal polygons (Microsoft/IBM style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* Top-Left Polygon */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(0_0,100%_0,0_70%)]" />
            {/* Bottom-Right Polygon */}
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#0ea5e9]/[0.18] to-transparent [clip-path:polygon(100%_30%,100%_100%,0_100%)]" />
          </div>

          <div className="max-w-[1350px] mx-auto px-6 relative z-10">'''

content = hero_start_pattern.sub(new_hero_start, content, count=1)


# 2. Update the Text Header
# Replace the gold/emerald badge
badge_pattern = re.compile(r"\{\/\*\s*Official Gold/Emerald Badge\s*\*\/\}.*?<\/div>", re.DOTALL)
new_badge = '''{/* Official Gold/Emerald Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm mb-4 transition-all">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Official Certified Odoo Partner
                </span>
                <span className="text-emerald-600 font-extrabold text-sm">✓</span>
              </div>'''
content = badge_pattern.sub(new_badge, content, count=1)

# Replace the h1 text color
content = content.replace('text-white font-heading', 'text-black font-heading')
content = content.replace('drop-shadow-md', '')

# Replace the p text color
content = content.replace('text-white/95', 'text-black')
content = content.replace('drop-shadow-sm', '')


# 3. Update the Action Buttons
buttons_pattern = re.compile(r"\{\/\*\s*Action Buttons\s*\*\/\}.*?<\/div>", re.DOTALL)
new_buttons = '''{/* Action Buttons */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-5">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-extrabold text-white bg-[#7a7a7a] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:bg-opacity-90 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Contact Our Experts <span className="ml-2 font-bold">➔</span>
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-bold text-[#7a7a7a] bg-transparent hover:bg-[#7a7a7a] hover:text-white border-2 border-[#7a7a7a] rounded-xl transition-all shadow-sm"
                >
                  Explore Capabilities ↓
                </a>
              </div>'''
content = buttons_pattern.sub(new_buttons, content, count=1)

# 4. Update the App Switcher Pills
pills_pattern = re.compile(r"\{\/\*\s*Interactive App Switcher Pills.*?<\/div>\s*<\/div>\s*<\/div>", re.DOTALL)
new_pills = '''{/* Interactive App Switcher Pills (Click or hover to spotlight any window) */}
              <div className="pt-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2.5 flex items-center justify-center gap-2">
                  <span>✦</span>
                  <span>Hover or click any app to spotlight</span>
                  <span>✦</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2" onMouseLeave={() => setActiveAppIndex(null)}>
                  {heroApps.map((app) => {
                    const isSelected = activeAppIndex === app.id;
                    return (
                      <button
                        key={app.id}
                        onClick={() => setActiveAppIndex(activeAppIndex === app.id ? null : app.id)}
                        onMouseEnter={() => setActiveAppIndex(app.id)}
                        className={px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-300 cursor-pointer flex items-center gap-2 }
                      >
                        <span 
                          className="w-2.5 h-2.5 rounded-full shadow-sm" 
                          style={{ backgroundColor: app.accentColor }}
                        />
                        <span>{app.category}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>'''
content = pills_pattern.sub(new_pills, content, count=1)

# 5. Update the Feature Tour Bar (from dark text-white bg-white/15 to light bg-white)
feature_bar_pattern = re.compile(r"\{\/\*\s*Interactive Live Feature Tour Bar.*?</section>", re.DOTALL)
new_feature_bar = '''{/* Interactive Live Feature Tour Bar */}
              <div className="mt-4 max-w-3xl mx-auto p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-800 text-xs">
                <div className="flex items-center gap-3">
                  <span 
                    className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: currentActiveApp ? currentActiveApp.accentColor : '#94a3b8' }}
                  />
                  <div>
                    <span className="font-extrabold text-slate-900 text-sm">
                      {currentActiveApp ? currentActiveApp.name : 'Certified Odoo 17 ERP Ecosystem'}
                    </span>
                    <span className="text-slate-300 mx-1.5">•</span>
                    <span className="text-slate-600 font-medium">
                      {currentActiveApp ? currentActiveApp.tag : 'Enterprise Cloud Suite'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-700">
                  {(currentActiveApp ? currentActiveApp.bullets : ['Official Odoo Partner', 'Full Custom Integration', 'PostgreSQL Cloud SLA']).map((bullet, idx) => (
                    <span key={idx} className="bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                      ✓ {bullet}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Smooth Bottom Gradient Fade */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-slate-50/50 pointer-events-none" />
        </section>'''
content = feature_bar_pattern.sub(new_feature_bar, content, count=1)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Replacement successful")
