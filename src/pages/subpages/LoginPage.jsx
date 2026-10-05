import React, { useState } from 'react';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // MOCK LOGIN BEHAVIOR
    alert('Login system is currently in development!');
  };

  return (
    <div className="app-container flex flex-col min-h-screen bg-slate-50 text-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-slate-50 to-slate-50 z-0" />
      <div className="absolute inset-0 bg-radial-gradient from-blue-100 via-transparent to-transparent opacity-60 z-0" />
      
      <SiteHeader />

      <SEO title="Login" />

      <main className="flex-grow flex items-center justify-center py-32 px-6 relative z-10">
        <div className="w-full max-w-[420px] bg-white/70 border border-slate-200/50 backdrop-blur-2xl rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] overflow-hidden reveal reveal-fade-up">
          <div className="p-8 sm:p-10">
            <div className="text-center mb-10">
              <div className="w-16 h-16 mx-auto bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(14,165,233,0.2)]">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading tracking-tight">Welcome Back</h2>
              <p className="text-slate-500 mt-2 text-sm">Log in to your Dreamwarez workspace</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase mb-2 block tracking-widest">Email Address</label>
                <input 
                  type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full px-5 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white/50 text-slate-900 transition-all placeholder-slate-400 shadow-sm"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase block tracking-widest">Password</label>
                  <a href="#" className="text-[10px] text-blue-600 hover:text-blue-500 font-bold transition-colors">Forgot Password?</a>
                </div>
                <input 
                  type="password" required value={password} onChange={e => setPassword(e.target.value)}
                  className="w-full px-5 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white/50 text-slate-900 transition-all placeholder-slate-400 shadow-sm"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center gap-3 pt-1">
                <div className="w-5 h-5 bg-white border border-slate-300 rounded-[6px] flex items-center justify-center cursor-pointer relative hover:border-blue-500 transition-colors">
                  <input type="checkbox" className="opacity-0 absolute inset-0 cursor-pointer peer z-10" />
                  <svg className="w-3.5 h-3.5 text-blue-500 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-xs text-slate-500 font-medium">Remember me for 30 days</span>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-4 rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                >
                  Sign In to Workspace
                </button>
              </div>
            </form>

            <div className="mt-8 text-center border-t border-slate-200 pt-6">
              <p className="text-xs text-slate-500">
                Don't have an account? <a href="/contact/" className="text-blue-600 hover:text-blue-500 font-bold ml-1 transition-colors">Contact Sales</a>
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
