import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { validateEmail, validatePassword } from '../../utils/validation';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [authNotice, setAuthNotice] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setAuthNotice(null);

    const newErrors = {};
    const emailRes = validateEmail(email);
    if (!emailRes.isValid) newErrors.email = emailRes.error;

    const passRes = validatePassword(password, 6);
    if (!passRes.isValid) newErrors.password = passRes.error;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setAuthNotice({
        type: 'info',
        message: 'Workspace single-sign-on is currently restricted to authorized Dreamwarez staff and enterprise clients. Please contact your administrator or project manager for workspace credentials.'
      });
    }
  };

  return (
    <div className="app-container flex flex-col min-h-screen bg-slate-50 text-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-slate-50 to-slate-50 z-0" />
      <div className="absolute inset-0 bg-radial-gradient from-blue-100 via-transparent to-transparent opacity-60 z-0" />
      
      <SiteHeader />

      <SEO title="Login | Dreamwarez Workspace" />

      <main className="flex-grow flex items-center justify-center py-20 sm:py-28 md:py-32 px-4 sm:px-6 relative z-10">
        <div className="w-full max-w-[440px] bg-white/80 border border-slate-200/80 backdrop-blur-2xl rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden reveal reveal-fade-up">
          <div className="p-6 sm:p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(14,165,233,0.15)]">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">Welcome Back</h2>
              <p className="text-slate-500 mt-1.5 text-xs sm:text-sm">Log in to your Dreamwarez workspace</p>
            </div>

            {authNotice && (
              <div className="mb-6 p-4 rounded-xl bg-sky-50 border border-sky-200 text-sky-900 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0 mt-1.5" />
                <span>{authNotice.message}</span>
              </div>
            )}

            <form onSubmit={handleLogin} noValidate className="space-y-5">
              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase mb-1.5 block tracking-wider">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    const val = e.target.value;
                    setEmail(val);
                    if (errors.email) {
                      const res = validateEmail(val);
                      if (res.isValid) setErrors(prev => ({ ...prev, email: null }));
                    }
                  }}
                  onBlur={() => {
                    if (email.trim()) {
                      const res = validateEmail(email);
                      if (!res.isValid) setErrors(prev => ({ ...prev, email: res.error }));
                    }
                  }}
                  className={`w-full px-4 py-3 border ${
                    errors.email ? 'border-red-500 bg-red-50/20 ring-1 ring-red-400' : 'border-slate-200 bg-slate-50/40'
                  } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 focus:bg-white text-slate-900 transition-all placeholder-slate-400`}
                  placeholder="name@company.com"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1 block font-medium">
                    {errors.email}
                  </span>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[11px] font-bold text-slate-700 uppercase block tracking-wider">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <a href="/contact/#contact-form" className="text-[11px] text-blue-600 hover:text-blue-500 font-bold transition-colors">
                    Need Help?
                  </a>
                </div>
                <input 
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    const val = e.target.value;
                    setPassword(val);
                    if (errors.password) {
                      const res = validatePassword(val, 6);
                      if (res.isValid) setErrors(prev => ({ ...prev, password: null }));
                    }
                  }}
                  onBlur={() => {
                    if (password) {
                      const res = validatePassword(password, 6);
                      if (!res.isValid) setErrors(prev => ({ ...prev, password: res.error }));
                    }
                  }}
                  className={`w-full px-4 py-3 border ${
                    errors.password ? 'border-red-500 bg-red-50/20 ring-1 ring-red-400' : 'border-slate-200 bg-slate-50/40'
                  } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 focus:bg-white text-slate-900 transition-all placeholder-slate-400`}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <span className="text-red-500 text-xs mt-1 block font-medium">
                    {errors.password}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2.5 pt-0.5">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
                />
                <label htmlFor="remember-me" className="text-xs text-slate-600 font-medium cursor-pointer select-none">
                  Remember me for 30 days
                </label>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-extrabold py-3.5 px-6 rounded-xl shadow-[0_4px_16px_rgba(14,165,233,0.3)] hover:shadow-[0_6px_22px_rgba(14,165,233,0.4)] transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0 text-sm"
                >
                  Sign In to Workspace
                </button>
              </div>
            </form>

            <div className="mt-8 text-center border-t border-slate-100 pt-6">
              <p className="text-xs text-slate-500">
                Don't have an enterprise account?{' '}
                <Link to="/contact/" className="text-blue-600 hover:text-blue-500 font-bold ml-1 transition-colors">
                  Contact Sales &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-10">
        <SiteFooter />
      </div>
    </div>
  );
}
