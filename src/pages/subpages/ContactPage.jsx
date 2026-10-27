import React, { useState, useRef, useEffect } from 'react';
import { SEO } from '../../components/layout/SEO';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import contactHeroBg from '../../assets/new_contact_hero.png';
import {
  validateEmail,
  validatePhone,
  validateName,
  validateRequired,
  validateSelect
} from '../../utils/validation';
import { submitFormEmail } from '../../utils/sendEmail';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  Sparkles,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  Headphones,
  ArrowUpRight
} from 'lucide-react';

const SERVICE_OPTIONS = [
  'Custom Software Development',
  'ERP / CRM Solutions',
  'Mobile App Development',
  'Website Development',
  'Cybersecurity',
  'Other',
];

const DESIGNATION_OPTIONS = [
  { value: 'CEO/Founder', label: 'CEO / Founder' },
  { value: 'CTO/CIO', label: 'CTO / CIO' },
  { value: 'Manager/Director', label: 'Manager / Director' },
  { value: 'Developer/Engineer', label: 'Developer / Engineer' },
  { value: 'Other', label: 'Other' },
];

const FAQS = [
  {
    q: 'How quickly will your team respond to my inquiry?',
    a: 'We understand time-to-market is critical. Our technical solutions team typically responds within 2 to 4 business hours to acknowledge your request and schedule a discovery consultation.',
  },
  {
    q: 'Can we sign a Non-Disclosure Agreement (NDA) before sharing details?',
    a: 'Yes, absolutely. We treat your intellectual property with the highest confidentiality. We can execute a mutual NDA before you share technical specifications or business logic.',
  },
  {
    q: 'What engagement models do you offer for software development?',
    a: 'We provide flexible engagement models tailored to your business needs: dedicated engineering teams, time & material agile sprints, and fixed-scope milestone-based delivery.',
  },
  {
    q: 'Can I visit your office in person for a project meeting?',
    a: 'We warmly welcome clients and partners to our headquarters at Wakad Business Bay in Pune. Feel free to give us a call or book a slot through the form to coordinate an in-person meeting.',
  },
];

export function ContactPage() {
  const location = useLocation();
  const formRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [serviceArea, setServiceArea] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [copiedField, setCopiedField] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const publicContactEmail = import.meta.env.VITE_PUBLIC_CONTACT_EMAIL || 'info@dreamwarez.in';

  useEffect(() => {
    if (location.hash === '#contact-form') {
      setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.hash]);

  const copyToClipboard = (text, fieldName) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedField(fieldName);
        setTimeout(() => setCopiedField(null), 2500);
      });
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};

    const nameRes = validateName(name);
    if (!nameRes.isValid) newErrors.name = nameRes.error;

    const emailRes = validateEmail(email);
    if (!emailRes.isValid) newErrors.email = emailRes.error;

    const phoneRes = validatePhone(phone);
    if (!phoneRes.isValid) newErrors.phone = phoneRes.error;

    const serviceRes = validateSelect(serviceArea, 'a service area');
    if (!serviceRes.isValid) newErrors.serviceArea = serviceRes.error;

    const desigRes = validateSelect(designation, 'your designation / role');
    if (!desigRes.isValid) newErrors.designation = desigRes.error;

    const msgRes = validateRequired(message, 'Project requirements', 10);
    if (!msgRes.isValid) newErrors.message = msgRes.error;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    if (!validateForm()) {
      setFormError('Information is invalid. Please check the fields and try again.');
      return;
    }

    setIsSubmitting(true);

    const formData = {
      name,
      email,
      phone,
      company,
      serviceArea,
      designation,
      message,
      formType: 'Website Consultation Form'
    };

    try {
      await submitFormEmail(formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
    } catch (err) {
      console.error('Failed to submit consultation form:', err);
      setFormError(err.message || 'Failed to submit form directly to email. Please check your connection and try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="app-container"
      style={{
        fontFamily: "'Open Sans', sans-serif",
        '--font-heading': "'Open Sans', sans-serif",
        '--font-sans': "'Open Sans', sans-serif",
      }}
    >
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Contact Us | Dreamwarez Software Solutions" />

      <main className="main-content">
        {/* ================= HERO SECTION WITH INTEGRATED DIRECT CONTACT CHANNELS ================= */}
        <section className="relative min-h-[auto] lg:min-h-[calc(100vh-80px)] flex items-center py-8 sm:py-10 md:py-12 lg:py-14 bg-white overflow-hidden border-b border-slate-200/80">
          {/* Subtle Ambient Backdrops */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute -top-32 right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-[120px]" />
            <div className="absolute top-[30%] -left-24 w-[450px] h-[450px] rounded-full bg-slate-50 blur-[100px]" />
          </div>

          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Brand & Hero Messaging */}
              <div className="lg:col-span-5 flex flex-col justify-center reveal reveal-fade-up">
                
                {/* Subtitle with signature accent pill */}
                <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                  <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] sm:tracking-[0.22em] text-[#8B2C2C] uppercase relative">
                    <span className="font-extrabold">CONTACT</span> DREAMWAREZ
                    <span className="absolute -bottom-1.5 left-0 flex gap-1.5">
                      <span className="h-[2.5px] w-7 bg-[#7A7A7A] rounded-full"></span>
                      <span className="h-[2.5px] w-2.5 bg-[#7A7A7A] rounded-full"></span>
                    </span>
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 font-heading tracking-tight leading-[1.15] mt-2 mb-2.5">
                  Contact <span className="text-[#0EA5E9]">Us</span>
                </h1>

                {/* Tagline */}
                <p className="text-base sm:text-lg font-semibold text-slate-800 mb-2.5 leading-snug">
                  Ready to achieve your vision? We&apos;re here to help.
                </p>

                {/* Paragraph Description */}
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-6">
                  Connect with Dreamwarez to explore simplified software solutions, custom application development, and enterprise strategies tailored to streamline your business operations and achieve your goals.
                </p>

                {/* Action CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
                  <button
                    onClick={() => scrollToSection('contact-form')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-6 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all hover:-translate-y-0.5 cursor-pointer text-center"
                  >
                    Start a Conversation
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>

                  <button
                    onClick={() => scrollToSection('office-location')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold text-sm py-3.5 px-5 rounded-full border border-slate-200 shadow-xs hover:shadow transition-all hover:-translate-y-0.5 cursor-pointer text-center"
                  >
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    Pune Office Directions
                  </button>
                </div>

              </div>

              {/* Right Column: Direct Contact Channels */}
              <div className="lg:col-span-7 reveal reveal-fade-left">
                
                {/* Header Tag */}
                <div className="mb-4">
                  <span className="text-xs font-extrabold tracking-widest text-[#0EA5E9] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                    Direct Contact Channels
                  </span>
                </div>

                {/* Modern 2+1 Interactive Contact Hub */}
                <div className="grid grid-cols-1 gap-4">
                  
                  {/* Top Row: 2 Primary Channels Side-by-Side (Phone & Email) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Channel 1: Phone Hotline */}
                    <div className="group bg-white hover:bg-slate-50/70 rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-sky-300 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0EA5E9] flex items-center justify-center border border-sky-100/80 group-hover:scale-105 group-hover:bg-[#0EA5E9] group-hover:text-white transition-all shrink-0">
                            <Phone className="w-5 h-5" />
                          </div>
                          <button
                            onClick={() => copyToClipboard('+919130081817', 'phone')}
                            title="Copy phone number"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0EA5E9] py-1.5 px-2.5 rounded-lg border border-slate-200/80 hover:border-sky-200 hover:bg-sky-50 transition-colors cursor-pointer active:scale-95"
                          >
                            {copiedField === 'phone' ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                                <span className="text-sky-600 font-bold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 shrink-0" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>

                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Direct Hotline
                        </span>
                        <a
                          href="tel:+919130081817"
                          className="text-base sm:text-lg font-black text-slate-900 hover:text-[#0EA5E9] transition-colors block mt-0.5 font-heading"
                        >
                          +91 9130081817
                        </a>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1 text-[11px] text-slate-400 truncate">
                          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" /> Mon–Sat, 9:30AM–7PM
                        </span>
                        <a
                          href="tel:+919130081817"
                          className="font-bold text-[#0EA5E9] hover:text-[#0284C7] inline-flex items-center gap-0.5 text-xs group-hover:translate-x-0.5 transition-transform shrink-0"
                        >
                          Call Now <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Channel 2: Email Inquiries */}
                    <div className="group bg-white hover:bg-slate-50/70 rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-amber-300 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100/80 group-hover:scale-105 group-hover:bg-amber-600 group-hover:text-white transition-all shrink-0">
                            <Mail className="w-5 h-5" />
                          </div>
                          <button
                            onClick={() => copyToClipboard(publicContactEmail, 'email')}
                            title="Copy email address"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-600 py-1.5 px-2.5 rounded-lg border border-slate-200/80 hover:border-amber-200 hover:bg-amber-50 transition-colors cursor-pointer active:scale-95"
                          >
                            {copiedField === 'email' ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                                <span className="text-amber-600 font-bold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 shrink-0" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>

                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Written Inquiries
                        </span>
                        <a
                          href={`mailto:${publicContactEmail}`}
                          className="text-base sm:text-lg font-black text-slate-900 hover:text-amber-600 transition-colors block mt-0.5 font-heading truncate"
                        >
                          {publicContactEmail}
                        </a>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1 text-[11px] text-slate-400 truncate">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Reply within 24h
                        </span>
                        <a
                          href={`mailto:${publicContactEmail}`}
                          className="font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-0.5 text-xs group-hover:translate-x-0.5 transition-transform shrink-0"
                        >
                          Send Email <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Row: Full-width Corporate Headquarters Card */}
                  <div className="group bg-white hover:bg-slate-50/70 rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-emerald-300 transition-all duration-200 shadow-xs hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-3 sm:gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/80 shrink-0 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Corporate Headquarters
                          </span>
                          <h4 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading mt-0.5">
                            Wakad Business Bay, Pune
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                            518, 5th Floor, Behind Tip Top International Hotel, Wakad, Pune - 411057
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 w-full sm:w-auto">
                        <button
                          onClick={() => copyToClipboard('Dreamwarez, 518, 5th Floor, Wakad Business Bay, Behind Tip Top International Hotel, Wakad, Pune - 411057, Maharashtra MH, India', 'address')}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-600 py-2 sm:py-1.5 px-3 rounded-lg border border-slate-200/80 hover:border-emerald-200 hover:bg-emerald-50 transition-colors cursor-pointer active:scale-95 text-center"
                        >
                          {copiedField === 'address' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span className="text-emerald-600 font-bold">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 shrink-0" />
                              <span>Copy Address</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => scrollToSection('office-location')}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-[#0EA5E9] py-2 sm:py-1.5 px-3.5 rounded-lg shadow-xs hover:shadow transition-all cursor-pointer active:scale-95 text-center"
                        >
                          View Map <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE CONSULTATION FORM ================= */}
        <section id="contact-form" className="scroll-mt-20 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
          
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px]" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100/40 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-[1240px] mx-auto relative z-10">
            
            {/* Form Card Shell */}
            <div className="flex flex-col lg:flex-row bg-white rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,23,42,0.06)] border border-slate-200/80 overflow-hidden">
              
              {/* Left Panel: Brand & Value Proposition (Image + Content) */}
              <div
                className="lg:w-[42%] relative flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 text-white overflow-hidden bg-slate-950"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.94) 0%, rgba(15, 23, 42, 0.88) 100%), url(${contactHeroBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Floating Glow Orbs */}
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/25 rounded-full filter blur-3xl pointer-events-none animate-pulse" />
                <div className="absolute bottom-10 -right-20 w-72 h-72 bg-cyan-400/20 rounded-full filter blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Decorative bar */}
                  <div className="w-16 h-1 bg-gradient-to-r from-[#0EA5E9] to-cyan-400 mb-6 sm:mb-8 rounded-full" />
                  
                  <span className="text-cyan-400 text-xs font-extrabold uppercase tracking-widest block mb-2">
                    Enterprise Engineering
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading mb-3 sm:mb-4 leading-tight">
                    Let's Build the Future Together
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                    Accelerating your digital transformation with proven technological expertise and custom-tailored software solutions.
                  </p>

                  {/* Feature Checklist - 1 col on mobile/desktop, 3 cols on tablet */}
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-4 md:space-y-0 space-y-4 mb-6 sm:mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Full-Lifecycle Engineering</div>
                        <div className="text-xs text-slate-300 mt-0.5">From concept and UX design to production architecture &amp; scale.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Dedicated Tech Advisory</div>
                        <div className="text-xs text-slate-300 mt-0.5">Direct collaboration with senior architects without layers of management.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Guaranteed Confidentiality</div>
                        <div className="text-xs text-slate-300 mt-0.5">Signed mutual Non-Disclosure Agreement before technical discovery.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Contact in Dark Panel */}
                <div className="relative z-10 pt-5 sm:pt-6 border-t border-white/10 text-xs text-slate-300 flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-start gap-2.5 sm:gap-6 lg:gap-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Wakad Business Bay, Pune - 411057</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>+91 9130081817</span>
                  </div>
                </div>

              </div>

              {/* Right Panel: The Form */}
              <div className="lg:w-[58%] p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center bg-white">
                
                {/* Header Tag */}
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#8B2C2C] uppercase relative">
                    Lets Work Together
                    <span className="absolute -bottom-2 left-0 flex gap-1.5">
                      <span className="h-[2px] w-6 bg-[#7A7A7A] rounded-full"></span>
                      <span className="h-[2px] w-2 bg-[#7A7A7A] rounded-full"></span>
                    </span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-2 tracking-tight mt-2">
                  Start a Conversation
                </h2>
                <p className="text-slate-600 mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
                  Let's discuss your software development and enterprise technology needs.
                </p>

                {isSubmitted ? (
                  <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center shadow-sm animate-fade-in">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-sm">
                      <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <h3 className="font-extrabold text-emerald-950 font-heading text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-emerald-800 text-xs sm:text-sm md:text-base leading-relaxed max-w-md mx-auto mb-6">
                      Thank you for reaching out, <span className="font-bold">{name || 'there'}</span>. Your request has been successfully submitted and our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName('');
                        setEmail('');
                        setCompany('');
                        setPhone('');
                        setDesignation('');
                        setServiceArea('');
                        setMessage('');
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all cursor-pointer text-center"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleFormSubmit} noValidate className="space-y-4">
                    {formError && (
                      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                        <span>{formError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-4.5">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="user_name"
                          required
                          value={name}
                          onChange={(e) => {
                            const val = e.target.value;
                            setName(val);
                            if (errors.name) {
                              const res = validateName(val);
                              if (res.isValid) setErrors((prev) => ({ ...prev, name: null }));
                            }
                          }}
                          onBlur={() => {
                            if (name.trim()) {
                              const res = validateName(name);
                              if (!res.isValid) setErrors((prev) => ({ ...prev, name: res.error }));
                            }
                          }}
                          className={`w-full px-3.5 sm:px-4 py-3 border ${
                            errors.name ? 'border-red-500 bg-red-50/20 ring-1 ring-red-400' : 'border-slate-200 bg-slate-50/30'
                          } rounded-xl text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400`}
                          placeholder="e.g. John Doe"
                        />
                        {errors.name && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          required
                          value={email}
                          onChange={(e) => {
                            const val = e.target.value;
                            setEmail(val);
                            if (errors.email) {
                              const res = validateEmail(val);
                              if (res.isValid) setErrors((prev) => ({ ...prev, email: null }));
                            }
                          }}
                          onBlur={() => {
                            if (email.trim()) {
                              const res = validateEmail(email);
                              if (!res.isValid) setErrors((prev) => ({ ...prev, email: res.error }));
                            }
                          }}
                          className={`w-full px-3.5 sm:px-4 py-3 border ${
                            errors.email ? 'border-red-500 bg-red-50/20 ring-1 ring-red-400' : 'border-slate-200 bg-slate-50/30'
                          } rounded-xl text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400`}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.email}
                          </span>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="user_phone"
                          required
                          value={phone}
                          onChange={(e) => {
                            const val = e.target.value;
                            // Allow digits, spaces, hyphens, plus, parentheses, and dots
                            if (/^[0-9+\s\-().]*$/.test(val)) {
                              setPhone(val);
                              if (errors.phone) {
                                const res = validatePhone(val);
                                if (res.isValid) setErrors((prev) => ({ ...prev, phone: null }));
                              }
                            }
                          }}
                          onBlur={() => {
                            if (phone.trim()) {
                              const res = validatePhone(phone);
                              if (!res.isValid) setErrors((prev) => ({ ...prev, phone: res.error }));
                            }
                          }}
                          className={`w-full px-3.5 sm:px-4 py-3 border ${
                            errors.phone ? 'border-red-500 bg-red-50/20 ring-1 ring-red-400' : 'border-slate-200 bg-slate-50/30'
                          } rounded-xl text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400`}
                          placeholder="+91 98765 43210"
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.phone}
                          </span>
                        )}
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Company Name <span className="text-slate-400 text-[11px]">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="company_name"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full px-3.5 sm:px-4 py-3 border border-slate-200 bg-slate-50/30 rounded-xl text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400"
                          placeholder="Your Organization"
                        />
                      </div>

                      {/* Service Area */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Service Area <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="service_area"
                            value={serviceArea}
                            onChange={(e) => {
                              setServiceArea(e.target.value);
                              setErrors((prev) => ({ ...prev, serviceArea: null }));
                            }}
                            className={`w-full px-3.5 sm:px-4 pr-10 py-3 border ${
                              errors.serviceArea ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-slate-50/30'
                            } rounded-xl text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all appearance-none ${
                              !serviceArea ? 'text-slate-400' : 'text-slate-900'
                            }`}
                          >
                            <option value="" disabled>Select Service Area *</option>
                            {SERVICE_OPTIONS.map((srv) => (
                              <option key={srv} value={srv} className="text-slate-900">
                                {srv}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                        {errors.serviceArea && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.serviceArea}
                          </span>
                        )}
                      </div>

                      {/* Designation */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Your Designation <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="designation"
                            value={designation}
                            onChange={(e) => {
                              setDesignation(e.target.value);
                              setErrors((prev) => ({ ...prev, designation: null }));
                            }}
                            className={`w-full px-3.5 sm:px-4 pr-10 py-3 border ${
                              errors.designation ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-slate-50/30'
                            } rounded-xl text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all appearance-none ${
                              !designation ? 'text-slate-400' : 'text-slate-900'
                            }`}
                          >
                            <option value="" disabled>Select your role / designation *</option>
                            {DESIGNATION_OPTIONS.map((opt) => (
                              <option key={opt.value} value={opt.value} className="text-slate-900">
                                {opt.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                        {errors.designation && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.designation}
                          </span>
                        )}
                      </div>

                      {/* Project Requirements */}
                      <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Project Requirements <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          name="message"
                          value={message}
                          onChange={(e) => {
                            handleMessageChange(e);
                            if (errors.message) {
                              const res = validateRequired(e.target.value, 'Project requirements', 10);
                              if (res.isValid) setErrors((prev) => ({ ...prev, message: null }));
                            }
                          }}
                          onBlur={() => {
                            if (message.trim()) {
                              const res = validateRequired(message, 'Project requirements', 10);
                              if (!res.isValid) setErrors((prev) => ({ ...prev, message: res.error }));
                            }
                          }}
                          rows={4}
                          className={`w-full px-3.5 sm:px-4 py-3 border ${
                            errors.message ? 'border-red-500 bg-red-50/20 ring-1 ring-red-400' : 'border-slate-200 bg-slate-50/30'
                          } rounded-xl text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all resize-none placeholder:text-slate-400`}
                          placeholder="Tell us about your project requirements, scope, timeline, or objectives... *"
                        />
                        {errors.message && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] disabled:bg-slate-400 text-white font-bold py-3.5 px-9 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_10px_25px_rgba(14,165,233,0.4)] transition-all hover:-translate-y-0.5 cursor-pointer text-sm text-center"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                            <span>Sending Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Inquiry</span>
                            <Send className="w-4 h-4 shrink-0" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>

          </div>
        </section>

        {/* ================= WHAT HAPPENS NEXT? (3-STEP TIMELINE) ================= */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/70 relative">
          <div className="max-w-[1240px] mx-auto">
            
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
              <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
                Transparent Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-3">
                What to Expect After You Reach Out
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed">
                A seamless, consultative path from your initial idea to technical delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative">
              
              {/* Step 1 */}
              <div className="relative bg-slate-50/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-black text-base sm:text-lg mb-4 sm:mb-6">
                  01
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-1.5 sm:mb-2">
                  Requirement Analysis
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Our engineering leads review your project requirements, tech stack preferences, and objectives within 2 hours.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative bg-slate-50/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center font-black text-base sm:text-lg mb-4 sm:mb-6">
                  02
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-1.5 sm:mb-2">
                  Technical Discovery Call
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  A focused 30-minute consultation with senior architects to explore technical constraints, scope, and best-fit architectures.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative bg-slate-50/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-base sm:text-lg mb-4 sm:mb-6">
                  03
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-1.5 sm:mb-2">
                  Tailored Solution Proposal
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  You receive a detailed technical proposal, realistic timeline, milestone plan, and transparent pricing roadmap.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= OFFICE LOCATION & MAP SHOWCASE ================= */}
        <section id="office-location" className="scroll-mt-20 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-14">
              <div className="flex items-center justify-center gap-3 mb-2.5 sm:mb-3">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#8B2C2C] uppercase relative">
                  Get Directions
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[2.5px] sm:h-[3px] w-10 sm:w-12 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[2.5px] sm:h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading mt-3 sm:mt-4">
                Visit Our Pune Headquarters
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
                Conveniently situated in Wakad Business Bay, the thriving tech corridor of Pune.
              </p>
            </div>

            {/* Map & Office Card Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              
              {/* Left Details Card */}
              <div className="lg:col-span-5 xl:col-span-4 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                      <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">Registered Office</div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading">Wakad Business Bay</h3>
                    </div>
                  </div>

                  <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 sm:mb-8">
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Address:</span>
                      518, 5th Floor, Wakad Business Bay, Behind Tip Top International Hotel, Wakad, Pune - 411057, Maharashtra MH, India
                    </div>

                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Accessibility &amp; Transit:</span>
                      Located right off the Mumbai-Bengaluru Highway, minutes from Hinjewadi Rajiv Gandhi Infotech Park.
                    </div>

                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Visiting Hours:</span>
                      Monday – Saturday: 9:30 AM to 7:00 PM IST
                    </div>
                  </div>
                </div>

                {/* Action buttons: 1-col on mobile, 2-cols on tablet, 1-col on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3 pt-4 sm:pt-5 border-t border-slate-200/70">
                  <a
                    href="https://maps.google.com/?q=Dreamwarez,+518,+5th+Floor,+Wakad+Business+Bay,+Behind+Tip+Top+International+Hotel,+Wakad,+Pune+-+411057"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl transition-all shadow-sm text-center"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>

                  <button
                    onClick={() => copyToClipboard('Dreamwarez, 518, 5th Floor, Wakad Business Bay, Behind Tip Top International Hotel, Wakad, Pune - 411057, Maharashtra MH, India', 'map-address')}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 active:scale-[0.98] text-slate-700 font-bold text-xs py-3.5 px-5 rounded-xl border border-slate-200 transition-all cursor-pointer text-center"
                  >
                    {copiedField === 'map-address' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="text-emerald-600 font-semibold">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 shrink-0" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Embedded Interactive Map */}
              <div className="lg:col-span-7 xl:col-span-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-slate-100 min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] relative">
                <iframe
                  src="https://maps.google.com/maps?q=Dreamwarez,%20Wakad%20Business%20Bay,%20Wakad,%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dreamwarez Location Map"
                  className="w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]"
                />
              </div>

            </div>

          </div>
        </section>

        {/* ================= INTERACTIVE FAQS ================= */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white border-t border-slate-200/70">
          <div className="max-w-[880px] mx-auto">
            
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-xs font-extrabold tracking-widest text-[#0EA5E9] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2.5 sm:mt-3">
                Common Questions About Working With Us
              </h2>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 md:p-6 text-left flex items-start sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer active:bg-slate-100/70"
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base font-heading leading-snug">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 mt-0.5 sm:mt-0 ${
                          isOpen ? 'rotate-180 text-[#0EA5E9]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 pt-3.5 sm:px-6 sm:pb-6 sm:pt-4 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/50 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= SOCIAL CONNECT SECTION ================= */}
        <section className="py-10 sm:py-14 px-4 sm:px-6 bg-slate-50 border-t border-slate-200/70 text-center">
          <div className="max-w-[1350px] mx-auto">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading mb-2">
              Connect With Dreamwarez On Social Media
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6 max-w-lg mx-auto leading-relaxed">
              Follow our latest technological insights, product releases, and company updates.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/dreamwarez/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dreamwarez LinkedIn"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-white hover:bg-[#0A66C2] text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-slate-200 hover:border-[#0A66C2] hover:-translate-y-1 active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dreamwarez/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dreamwarez Instagram"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-white hover:bg-[#E4405F] text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-slate-200 hover:border-[#E4405F] hover:-translate-y-1 active:scale-95 cursor-pointer"
              >
                <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/dreamwarez.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dreamwarez Facebook"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-white hover:bg-[#1877F2] text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-slate-200 hover:border-[#1877F2] hover:-translate-y-1 active:scale-95 cursor-pointer"
              >
                <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@dreamwarezsoftware"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dreamwarez YouTube"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-white hover:bg-[#FF0000] text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-slate-200 hover:border-[#FF0000] hover:-translate-y-1 active:scale-95 cursor-pointer"
              >
                <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <ChatWidget />
      <SiteFooter variant="black" />
    </div>
  );
}