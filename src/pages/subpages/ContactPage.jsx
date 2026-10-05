import React, { useState, useRef, useEffect } from 'react';
import { SEO } from '../../components/layout/SEO';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import newHeroImage from '../../assets/Contact-UsJPEG-1.jpg';
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
  ShieldCheck,
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

  useEffect(() => {
    if (location.hash === '#contact-form') {
      setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
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
    if (!name.trim() || !/^[a-zA-Z\s]+$/.test(name)) newErrors.name = 'Invalid name';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email';
    if (!phone.trim() || !/^\d{10,15}$/.test(phone)) newErrors.phone = 'Invalid phone number';
    if (!designation) newErrors.designation = 'Invalid designation';
    if (!serviceArea) newErrors.serviceArea = 'Invalid service area';
    if (!message.trim()) newErrors.message = 'Invalid message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!validateForm()) {
      setFormError('Information is invalid. Please check the fields and try again.');
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const sendMailFallback = () => {
      const subject = encodeURIComponent(`New enquiry from ${name || 'website form'}`);
      const body = encodeURIComponent([
        `Name: ${name || 'N/A'}`,
        `Email: ${email || 'N/A'}`,
        `Company: ${company || 'N/A'}`,
        `Phone: ${phone || 'N/A'}`,
        `Designation: ${designation || 'N/A'}`,
        `Service Area: ${serviceArea || 'N/A'}`,
        '',
        `Message: ${message || 'N/A'}`,
      ].join('\n'));

      window.location.href = `mailto:sakshinilwant@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
      setIsSubmitting(false);
    };

    if (serviceId && templateId && publicKey && serviceId !== 'YOUR_SERVICE_ID') {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(
          (result) => {
            console.log('Email successfully sent!', result.text);
            setIsSubmitted(true);
            setIsSubmitting(false);
          },
          (error) => {
            console.error('Failed to send email. Falling back to mail client.', error.text);
            sendMailFallback();
          }
        );
    } else {
      sendMailFallback();
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
        {/* ================= HERO SECTION (PROFESSIONAL & MINIMAL) ================= */}
        <section className="relative pt-8 pb-10 md:pt-12 md:pb-14 lg:pt-14 lg:pb-14 bg-white overflow-hidden border-b border-slate-100">
          {/* Subtle Ambient Backdrops */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute -top-32 right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-[120px]" />
            <div className="absolute top-[30%] -left-24 w-[450px] h-[450px] rounded-full bg-slate-50 blur-[100px]" />
          </div>

          <div className="max-w-[1350px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 flex flex-col justify-center reveal reveal-fade-up">
                
                {/* Subtitle with signature accent pill */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[13px] font-bold tracking-[0.22em] text-[#8B2C2C] uppercase relative">
                    <span className="font-extrabold">CONTACT</span> DREAMWAREZ
                    <span className="absolute -bottom-1.5 left-0 flex gap-1.5">
                      <span className="h-[2.5px] w-7 bg-[#7A7A7A] rounded-full"></span>
                      <span className="h-[2.5px] w-2.5 bg-[#7A7A7A] rounded-full"></span>
                    </span>
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-extrabold text-slate-900 font-heading tracking-tight leading-[1.08] mt-2 mb-4">
                  Contact <span className="text-[#0EA5E9]">Us</span>
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl font-semibold text-slate-800 mb-3 leading-snug">
                  Ready to achieve your vision? We&apos;re here to help.
                </p>

                {/* Paragraph Description */}
                <p className="text-[16px] md:text-[17px] text-slate-600 leading-relaxed max-w-[620px] mb-8">
                  Connect with Dreamwarez to explore simplified software solutions, custom application development, and enterprise strategies tailored to streamline your business operations and achieve your goals.
                </p>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => scrollToSection('contact-form')}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.25)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.35)] transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    Start a Conversation
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => scrollToSection('office-location')}
                    className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm sm:text-base py-3.5 px-6 rounded-full border border-slate-200 shadow-sm hover:shadow transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    Pune Office Directions
                  </button>
                </div>

              </div>

              {/* Right Hero Visual Card - Minimal & Clean */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end reveal reveal-fade-left">
                <div className="relative w-full max-w-[450px] lg:max-w-[480px]">
                  <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/80 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)] transition-all duration-500">
                    <img
                      src={newHeroImage}
                      alt="Dreamwarez Client Support & Technology Consultant"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= DIRECT CONTACT CHANNELS (3 INTERACTIVE CARDS) ================= */}
        <section className="py-16 px-6 bg-white relative z-10 border-y border-slate-200/70">
          <div className="max-w-[1350px] mx-auto">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12 reveal reveal-fade-up">
              <span className="text-xs font-extrabold tracking-widest text-[#0EA5E9] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                Direct Contact Channels
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-3">
                How Would You Like to Connect?
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Choose the direct contact method that works best for your schedule.
              </p>
            </div>

            {/* 3 Interactive Hub Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Card 1: Location */}
              <div className="group bg-slate-50/80 hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-emerald-300 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">Corporate HQ</div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-heading mb-3">Our Location</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Dreamwarez, 518, 5th Floor, Wakad Business Bay, Behind Tip Top International Hotel, Wakad, Pune - 411057, Maharashtra MH, India
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => copyToClipboard('Dreamwarez, 518, 5th Floor, Wakad Business Bay, Behind Tip Top International Hotel, Wakad, Pune - 411057, Maharashtra MH, India', 'address')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-600 transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-emerald-50"
                  >
                    {copiedField === 'address' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => scrollToSection('office-location')}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 cursor-pointer"
                  >
                    View Map <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="group bg-slate-50/80 hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-sky-300 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(14,165,233,0.1)] flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-sky-100/70 text-[#0EA5E9] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0EA5E9] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">Direct Hotline</div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-heading mb-3">Call Us On</h3>
                  <a
                    href="tel:+919130081817"
                    className="text-2xl font-black text-slate-900 hover:text-[#0EA5E9] transition-colors block mb-2 font-heading"
                  >
                    +91 9130081817
                  </a>
                  <p className="text-slate-500 text-xs flex items-center gap-1.5 mt-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Mon – Sat: 9:30 AM – 7:00 PM IST
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between gap-2 mt-6">
                  <button
                    onClick={() => copyToClipboard('+919130081817', 'phone')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-sky-600 transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-sky-50"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-sky-600" />
                        <span className="text-sky-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>

                  <a
                    href="tel:+919130081817"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0EA5E9] hover:text-[#0284C7]"
                  >
                    Call Now <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="group bg-slate-50/80 hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-amber-300 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(245,158,11,0.1)] flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-100/70 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">Written Inquiries</div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-heading mb-3">Email Us</h3>
                  <a
                    href="mailto:info@dreamwarez.in"
                    className="text-xl sm:text-2xl font-black text-slate-900 hover:text-amber-600 transition-colors block mb-2 font-heading break-all"
                  >
                    info@dreamwarez.in
                  </a>
                  <p className="text-slate-500 text-xs flex items-center gap-1.5 mt-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Guaranteed response within 24h
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between gap-2 mt-6">
                  <button
                    onClick={() => copyToClipboard('info@dreamwarez.in', 'email')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-amber-600 transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-amber-50"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-amber-600" />
                        <span className="text-amber-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href="mailto:info@dreamwarez.in"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700"
                  >
                    Send Email <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= MINIMAL & PROFESSIONAL CONSULTATION FORM ================= */}
        <section id="contact-form" className="py-16 md:py-20 px-6 bg-slate-50/70 relative">
          <div className="max-w-[840px] mx-auto relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-10 reveal reveal-fade-up">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-[12px] font-bold tracking-[0.22em] text-[#8B2C2C] uppercase relative">
                  <span className="font-extrabold">LETS WORK</span> TOGETHER
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1.5">
                    <span className="h-[2px] w-6 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[2px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight mt-3">
                Start a Conversation
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Have a project in mind or need software consulting? Fill out the form below and our team will get back to you shortly.
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-[0_15px_45px_rgba(15,23,42,0.05)] reveal reveal-fade-up">
              {isSubmitted ? (
                <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-8 sm:p-10 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-extrabold text-emerald-950 font-heading text-2xl mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-emerald-800 text-sm leading-relaxed max-w-md mx-auto mb-6">
                    Thank you for reaching out, <span className="font-bold">{name || 'there'}</span>. Your inquiry has been submitted and our engineering team will get back to you shortly.
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
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleFormSubmit} noValidate className="space-y-5">
                  {formError && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                          setName(e.target.value);
                          setErrors((prev) => ({ ...prev, name: null }));
                        }}
                        className={`w-full px-4 py-3 border ${
                          errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-slate-50/30'
                        } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400`}
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
                          setEmail(e.target.value);
                          setErrors((prev) => ({ ...prev, email: null }));
                        }}
                        className={`w-full px-4 py-3 border ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-slate-50/30'
                        } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400`}
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
                          setPhone(e.target.value);
                          setErrors((prev) => ({ ...prev, phone: null }));
                        }}
                        className={`w-full px-4 py-3 border ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-slate-50/30'
                        } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400`}
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
                        className="w-full px-4 py-3 border border-slate-200 bg-slate-50/30 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400"
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
                          className={`w-full px-4 py-3 border ${
                            errors.serviceArea ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-slate-50/30'
                          } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all appearance-none ${
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
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
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
                          className={`w-full px-4 py-3 border ${
                            errors.designation ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-slate-50/30'
                          } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all appearance-none ${
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
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                      {errors.designation && (
                        <span className="text-red-500 text-xs mt-1 block font-medium">
                          {errors.designation}
                        </span>
                      )}
                    </div>

                    {/* Message Box */}
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
                          setErrors((prev) => ({ ...prev, message: null }));
                        }}
                        rows={4}
                        className={`w-full px-4 py-3 border ${
                          errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-slate-50/30'
                        } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all resize-none placeholder:text-slate-400`}
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
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2.5 bg-[#0EA5E9] hover:bg-[#0284C7] disabled:bg-slate-400 text-white font-bold py-3.5 px-8 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_10px_25px_rgba(14,165,233,0.4)] transition-all hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Protected by SSL. We respect your confidentiality.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* ================= WHAT HAPPENS NEXT? (3-STEP TIMELINE) ================= */}
        <section className="py-20 px-6 bg-white border-b border-slate-200/70 relative">
          <div className="max-w-[1240px] mx-auto">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
                Transparent Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-3">
                What to Expect After You Reach Out
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                A seamless, consultative path from your initial idea to technical delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              
              {/* Step 1 */}
              <div className="relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-black text-lg mb-6">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                  Requirement Analysis
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our engineering leads review your project requirements, tech stack preferences, and objectives within 2 hours.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center font-black text-lg mb-6">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                  Technical Discovery Call
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A focused 30-minute consultation with senior architects to explore technical constraints, scope, and best-fit architectures.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-lg mb-6">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                  Tailored Solution Proposal
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  You receive a detailed technical proposal, realistic timeline, milestone plan, and transparent pricing roadmap.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= OFFICE LOCATION & MAP SHOWCASE ================= */}
        <section id="office-location" className="py-20 px-6 bg-slate-50 relative overflow-hidden">
          <div className="max-w-[1350px] mx-auto">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-sm font-bold tracking-widest text-[#8B2C2C] uppercase relative">
                  Get Directions
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[3px] w-12 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-4">
                Visit Our Pune Headquarters
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Conveniently situated in Wakad Business Bay, the thriving tech corridor of Pune.
              </p>
            </div>

            {/* Map & Office Card Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Details Card */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">Registered Office</div>
                      <h3 className="text-lg font-extrabold text-slate-900 font-heading">Wakad Business Bay</h3>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-slate-600 leading-relaxed mb-8">
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

                <div className="space-y-3 pt-4 border-t border-slate-200/70">
                  <a
                    href="https://maps.google.com/?q=Dreamwarez,+518,+5th+Floor,+Wakad+Business+Bay,+Behind+Tip+Top+International+Hotel,+Wakad,+Pune+-+411057"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-sm"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => copyToClipboard('Dreamwarez, 518, 5th Floor, Wakad Business Bay, Behind Tip Top International Hotel, Wakad, Pune - 411057, Maharashtra MH, India', 'map-address')}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs py-3 px-6 rounded-xl border border-slate-200 transition-all cursor-pointer"
                  >
                    {copiedField === 'map-address' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Embedded Interactive Map */}
              <div className="lg:col-span-8 rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-slate-200 min-h-[420px] relative">
                <iframe
                  src="https://maps.google.com/maps?q=Dreamwarez,%20Wakad%20Business%20Bay,%20Wakad,%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '420px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dreamwarez Location Map"
                  className="w-full h-full"
                />
              </div>

            </div>

          </div>
        </section>

        {/* ================= INTERACTIVE FAQS ================= */}
        <section className="py-20 px-6 bg-white border-t border-slate-200/70">
          <div className="max-w-[880px] mx-auto">
            
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold tracking-widest text-[#0EA5E9] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-3">
                Common Questions About Working With Us
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base font-heading">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? 'rotate-180 text-[#0EA5E9]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-200/50 pt-4 bg-white">
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
        <section className="py-14 px-6 bg-slate-50 border-t border-slate-200/70 text-center">
          <div className="max-w-[1350px] mx-auto">
            <h3 className="text-xl font-extrabold text-slate-900 font-heading mb-2">
              Connect With Dreamwarez On Social Media
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              Follow our latest technological insights, product releases, and company updates.
            </p>

            <div className="flex justify-center items-center gap-3">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Dreamwarez Facebook"
                className="w-11 h-11 bg-white hover:bg-[#1877F2] text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-slate-200 hover:border-[#1877F2] hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Dreamwarez Twitter / X"
                className="w-11 h-11 bg-white hover:bg-black text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-slate-200 hover:border-black hover:-translate-y-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="Dreamwarez LinkedIn"
                className="w-11 h-11 bg-white hover:bg-[#0A66C2] text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-slate-200 hover:border-[#0A66C2] hover:-translate-y-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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