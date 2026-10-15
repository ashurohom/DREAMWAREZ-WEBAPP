import React, { useState, useEffect, useRef } from 'react';
import { SEO } from '../../components/layout/SEO';
import emailjs from '@emailjs/browser';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import hrHeroBg from '../../assets/hr_hero_bg.png';
import teamMeeting from '../../assets/hr_startup_spirit.png';
import officeChair from '../../assets/hr_continuous_learning.png';
import officeWalk from '../../assets/hr_diverse_team.png';
import couchWorkspace from '../../assets/hr_flexible_culture.png';
import tabletGraphs from '../../assets/hr_growth_pathways.png';
import coffeeDesk from '../../assets/hr_mission_driven.png';


export function CareerOpportunitiesPage() {
  const [showSimulator, setShowSimulator] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileBase64, setFileBase64] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaState, setCaptchaState] = useState('unverified');
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const careersEmail = import.meta.env.VITE_CAREERS_EMAIL || import.meta.env.VITE_ADMIN_NOTIFICATION_EMAIL || 'careers@dreamwarez.in';

  const handleCaptchaClick = () => {
    if (captchaState !== 'unverified') return;
    setCaptchaState('verifying');
    setTimeout(() => {
      setCaptchaState('verified');
    }, 1500);
  };

  const scrollToJoinForm = () => {
    const el = document.getElementById('ready-to-join');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (window.location.hash === '#ready-to-join') {
      const el = document.getElementById('ready-to-join');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, fileName: 'File size exceeds 10MB limit' }));
      return;
    }
    
    setFileName(file.name);
    setIsUploading(true);
    setUploadProgress(0);

    const reader = new FileReader();
    reader.onload = () => {
      setFileBase64(reader.result);
    };
    reader.onerror = () => {
      console.warn('Failed to read file as data url');
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!isUploading) return;
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [isUploading]);

  const deleteFile = () => {
    setFileName('');
    setFileBase64(null);
    setUploadProgress(0);
    setIsUploading(false);
  };

  const formRef = useRef();

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim() || !/^[a-zA-Z\s]+$/.test(name)) newErrors.name = 'Invalid name';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email';
    if (!phone.trim() || !/^\d{10,15}$/.test(phone)) newErrors.phone = 'Invalid phone number';
    if (!selectedJob.trim()) newErrors.selectedJob = 'Invalid position';
    if (!fileName) newErrors.fileName = 'Please upload your CV';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
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
      serviceArea: selectedJob,
      designation: selectedJob,
      message: `Position applied: ${selectedJob}. CV attachment: ${fileName}`,
      fileName,
      fileAttachment: fileBase64 ? {
        filename: fileName,
        content: fileBase64
      } : undefined,
      formType: 'Career Opportunities Application Form'
    };

    // 1. Send directly to company notification mail via backend SMTP API (/api/send-email)
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setIsSubmitted(true);
          setIsSubmitting(false);
          return;
        }
      }
    } catch (apiErr) {
      console.warn('Backend email API unavailable, falling back to secondary transport...', apiErr);
    }

    // 2. Secondary fallback via EmailJS if configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const sendMail = () => {
      const adminEmail = import.meta.env.VITE_ADMIN_NOTIFICATION_EMAIL || 'ashitosh@dreamwarez.in';
      const subject = encodeURIComponent(`New Job Application from ${name || 'website form'}`);
      const body = encodeURIComponent([
        `Name: ${name || 'N/A'}`,
        `Email: ${email || 'N/A'}`,
        `Phone: ${phone || 'N/A'}`,
        `Position: ${selectedJob || 'N/A'}`,
        `CV: ${fileName || 'N/A'}`,
      ].join('\n'));

      window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
      setIsSubmitting(false);
    };

    if (serviceId && templateId && publicKey && serviceId !== 'YOUR_SERVICE_ID') {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then((result) => {
          console.log('Email successfully sent via EmailJS!', result.text);
          setIsSubmitted(true);
          setIsSubmitting(false);
        }, (error) => {
          console.error('Failed to send email. Falling back to mail client.', error.text);
          sendMail();
        });
    } else {
      sendMail();
    }
  };

  return (
    <div className="app-container">
  
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Career Opportunities" />

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
                <span className="text-xs sm:text-[14px] font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  JOIN US
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[2.5px] sm:h-[3px] w-10 sm:w-12 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[2.5px] sm:h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-extrabold text-slate-900 font-heading mb-4 max-w-[700px]">
                Career <span className="text-[#0EA5E9]">Opportunities</span>
              </h1>

              {/* Paragraphs */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg text-slate-800 font-bold leading-relaxed max-w-[600px]">
                  Passion. Innovation. Growth.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-[600px]">
                  We're a team of passionate innovators, engineers, designers, and thinkers who thrive on solving real-world problems with technology. If you're looking for a place where you can learn, grow, and make a meaningful impact, your journey starts here.
                </p>
                <p className="text-sm sm:text-[16px] text-[#8B2C2C] leading-relaxed max-w-[600px] italic font-semibold">
                  "Your Talent. Our Vision. Let's Build the Future Together."
                </p>
              </div>

              {/* Action CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={scrollToJoinForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-sm py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.32)] transition-all cursor-pointer text-center"
                >
                  Apply For Openings &rarr;
                </button>
                <a
                  href="/about-us/team-dreamwarez/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold text-sm py-3.5 px-6 rounded-full border border-slate-200 shadow-xs hover:shadow transition-all cursor-pointer text-center"
                >
                  Meet Dreamwarez Team
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 mt-6 sm:mt-8 md:mt-0 flex justify-center md:justify-end z-0 reveal reveal-fade-left w-full">
              <div className="relative w-full max-w-[550px]">
                {/* Rounded Image */}
                <div className="w-full aspect-[4/3] bg-slate-100 relative rounded-2xl sm:rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
                  <img 
                    src="https://dreamwarez.in/wp-content/uploads/2025/05/mindset.jpg" 
                    alt="Career Opportunities" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-[1350px] mx-auto text-center reveal reveal-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading max-w-4xl mx-auto leading-snug">
            Career Opportunities At Dreamwarez
          </h2>
          
          <p className="text-slate-800 text-base sm:text-lg md:text-xl font-bold max-w-4xl mx-auto mt-4 sm:mt-6">
            "Your Talent. Our Vision. Let's Build The Future Together."
          </p>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-4xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            At <strong className="font-semibold text-slate-900">Dreamwarez</strong>, we don't just develop software—we develop <strong className="font-semibold text-slate-900">people</strong>. We believe in creating a culture where innovation, collaboration, and growth are at the core of everything we do.
          </p>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-4xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            Whether you're a fresh graduate ready to make your mark, or a seasoned professional looking to elevate your career, Dreamwarez is the place where you can truly thrive.
          </p>
        </section>

        {/* Why Work with Us Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
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
          <div className="max-w-[1350px] mx-auto relative z-10">
            <div className="text-center mb-10 sm:mb-14">
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <span className="text-xs sm:text-[14px] font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  OUR ENVIRONMENT
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[2.5px] sm:h-[3px] w-10 sm:w-12 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[2.5px] sm:h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-3 sm:mt-4">
                Why Work with Us?
              </h2>
              <h3 className="text-slate-700 font-bold text-base sm:text-lg md:text-xl mt-3 sm:mt-4">
                At Dreamwarez, we don’t just write code — we craft digital experiences that shape the future.
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
                If you're passionate about technology, innovation, and making an impact, Dreamwarez is where your career takes flight.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 reveal reveal-fade-up">
                <img src="https://dreamwarez.in/wp-content/uploads/2025/05/mindset-1024x592.jpg" alt="Startup Spirit, Enterprise Mindset" className="w-full h-44 sm:h-48 object-cover" />
                <div className="p-5 sm:p-6">
                  <h4 className="font-heading font-bold text-slate-900 text-base">Startup Spirit, Enterprise Mindset</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    We’re agile and innovative, yet robust and scalable.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <img src="https://dreamwarez.in/wp-content/uploads/2025/05/Continuous-Learning-For-The-New-World-Of-Work.jpg" alt="Continuous Learning" className="w-full h-44 sm:h-48 object-cover" />
                <div className="p-5 sm:p-6">
                  <h4 className="font-heading font-bold text-slate-900 text-base">Continuous Learning</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    Workshops, training, certifications, mentorships.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <img src="https://dreamwarez.in/wp-content/uploads/2025/05/Diverse-Team1.jpg" alt="Diverse Team" className="w-full h-44 sm:h-48 object-cover" />
                <div className="p-5 sm:p-6">
                  <h4 className="font-heading font-bold text-slate-900 text-base">Diverse Team</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    A community of developers, designers, strategists, thinkers.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 reveal reveal-fade-up">
                <img src="https://dreamwarez.in/wp-content/uploads/2025/05/Flexible-Culture3.jpeg" alt="Flexible Culture" className="w-full h-44 sm:h-48 object-cover" />
                <div className="p-5 sm:p-6">
                  <h4 className="font-heading font-bold text-slate-900 text-base">Flexible Culture</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    Remote options, hackathons, offsites, and more.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <img src="https://dreamwarez.in/wp-content/uploads/2025/05/Growth-Pathways1.jpg" alt="Growth Pathways" className="w-full h-44 sm:h-48 object-cover" />
                <div className="p-5 sm:p-6">
                  <h4 className="font-heading font-bold text-slate-900 text-base">Growth Pathways</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    Leadership programs, internal promotions, and skill accelerators.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <img src="https://dreamwarez.in/wp-content/uploads/2025/05/Mission-Driven-1024x682.jpg" alt="Mission-Driven" className="w-full h-44 sm:h-48 object-cover" />
                <div className="p-5 sm:p-6">
                  <h4 className="font-heading font-bold text-slate-900 text-base">Mission-Driven</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    Be part of something meaningful — we're building products that solve real problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internship & Training Programs */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white border-t border-slate-100">
          <div className="max-w-[1350px] mx-auto text-center reveal reveal-fade-up">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <span className="text-xs sm:text-[14px] font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                TRAINING PROGRAMS
                <span className="absolute -bottom-2 left-0 flex gap-1.5">
                  <span className="h-[2.5px] sm:h-[3px] w-10 sm:w-12 bg-[#7A7A7A] rounded-full"></span>
                  <span className="h-[2.5px] sm:h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                </span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-3 sm:mt-4 mb-6 sm:mb-8">
              Internship &amp; Training Programs
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed text-left max-w-3xl mx-auto">
              <p>
                Dreamwarez is passionate about shaping the next generation of tech talent.
              </p>
              <p>
                We offer 3- to 6-month paid internship programs in: Web Development (Python, PHP, HTML/CSS), Mobile App Development (Flutter, iOS, Android), Cybersecurity &amp; Digital Forensics, Business Analysis &amp; Project Coordination.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 mt-6 sm:mt-8 w-full text-center sm:text-left">
                <span className="text-2xl sm:text-3xl shrink-0">🚀</span>
                <p className="font-bold text-slate-800 text-xs sm:text-sm md:text-base m-0 leading-relaxed">
                  Interns get a certificate, letter of recommendation, and a chance for a full-time role!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work with Dreamwarez Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
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
          <div className="max-w-[1350px] mx-auto text-center relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <span className="text-xs sm:text-[14px] font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                WHY DREAMWAREZ
                <span className="absolute -bottom-2 left-0 flex gap-1.5">
                  <span className="h-[2.5px] sm:h-[3px] w-10 sm:w-12 bg-[#7A7A7A] rounded-full"></span>
                  <span className="h-[2.5px] sm:h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                </span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-3 sm:mt-4">
              Why Work with Dreamwarez?
            </h2>
            <h3 className="text-slate-700 font-bold text-base sm:text-lg md:text-xl mt-3 sm:mt-4">
              We're a company that invests in your growth.
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              Be part of projects that solve real-world challenges across industries.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5 lg:gap-6 text-left">
              <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-xl sm:rounded-2xl flex gap-3.5 items-center shadow-xs hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B2C2C] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" /></svg>
                </div>
                <span className="text-xs sm:text-sm leading-snug text-slate-700 font-bold">Fast-paced learning environment</span>
              </div>
              <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-xl sm:rounded-2xl flex gap-3.5 items-center shadow-xs hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B2C2C] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-xs sm:text-sm leading-snug text-slate-700 font-bold">Work with modern tech stack</span>
              </div>
              <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-xl sm:rounded-2xl flex gap-3.5 items-center shadow-xs hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B2C2C] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-xs sm:text-sm leading-snug text-slate-700 font-bold">Fun, friendly and flexible work culture</span>
              </div>
              <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-xl sm:rounded-2xl flex gap-3.5 items-center shadow-xs hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B2C2C] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
                </div>
                <span className="text-xs sm:text-sm leading-snug text-slate-700 font-bold">Performance bonuses and growth paths</span>
              </div>
              <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-xl sm:rounded-2xl flex gap-3.5 items-center shadow-xs hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B2C2C] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-xs sm:text-sm leading-snug text-slate-700 font-bold">Work that actually matters to real clients</span>
              </div>
              <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-xl sm:rounded-2xl flex gap-3.5 items-center shadow-xs hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B2C2C] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <span className="text-xs sm:text-sm leading-snug text-slate-700 font-bold">Modern infrastructure &amp; mentorship</span>
              </div>
            </div>
          </div>
        </section>

        {/* Ready To Join Us Form Section */}
        <section id="ready-to-join" className="scroll-mt-20 py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[700px] mx-auto text-center mb-8 sm:mb-10 reveal reveal-fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Ready To Join Us?
            </h2>
            <p className="text-slate-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
              Whether you're just starting your career or looking to take the next big step, we offer a place where your skills, creativity, and ambition will be valued and nurtured.
            </p>
            <p className="text-slate-800 font-semibold mt-2 text-xs sm:text-sm">Please fill in your details below</p>
          </div>

          <div className="max-w-[720px] mx-auto bg-white border-2 border-blue-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl sm:shadow-2xl shadow-slate-200/50 reveal reveal-fade-up">
            {isSubmitted ? (
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 sm:p-8 text-center">
                <span className="text-4xl sm:text-5xl mb-4 block">🎉</span>
                <h4 className="font-bold text-teal-800 font-heading text-lg sm:text-xl">Application Submitted!</h4>
                <p className="text-teal-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  Thank you, <span className="font-bold">{name}</span>. We have received your application and will be in touch shortly.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setSelectedJob('');
                      setFileName('');
                      setFileBase64(null);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-full transition-all cursor-pointer text-center"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                {formError && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                    <span>{formError}</span>
                  </div>
                )}
                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="user_name" 
                    required 
                    value={name} 
                    onChange={e => { setName(e.target.value); setErrors(prev => ({...prev, name: null})); }}
                    placeholder="e.g. John Doe"
                    className={`w-full px-3.5 sm:px-4 py-3 border ${errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-slate-50/30'} rounded-xl text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400`}
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block font-medium">{errors.name}</span>}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="user_email" 
                    required 
                    value={email} 
                    onChange={e => { setEmail(e.target.value); setErrors(prev => ({...prev, email: null})); }}
                    placeholder="john@example.com"
                    className={`w-full px-3.5 sm:px-4 py-3 border ${errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-slate-50/30'} rounded-xl text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400`}
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1 block font-medium">{errors.email}</span>}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="user_phone" 
                    required 
                    value={phone} 
                    onChange={e => { setPhone(e.target.value); setErrors(prev => ({...prev, phone: null})); }}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 sm:px-4 py-3 border ${errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-slate-50/30'} rounded-xl text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400`}
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1 block font-medium">{errors.phone}</span>}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                    Position Applying For &amp; Brief Intro <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    name="message" 
                    required 
                    value={selectedJob} 
                    onChange={e => { setSelectedJob(e.target.value); setErrors(prev => ({...prev, selectedJob: null})); }} 
                    rows="3"
                    placeholder="e.g. Full Stack Developer, Mobile App Engineer, UI/UX Designer..."
                    className={`w-full px-3.5 sm:px-4 py-3 border ${errors.selectedJob ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-slate-50/30'} rounded-xl text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-[#0EA5E9] focus:bg-white hover:border-slate-300 transition-all resize-none placeholder:text-slate-400`}
                  ></textarea>
                  {errors.selectedJob && <span className="text-red-500 text-xs mt-1 block font-medium">{errors.selectedJob}</span>}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                    Upload your CV / Resume <span className="text-red-500">*</span>
                  </label>
                  
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-3 sm:p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <label className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#0EA5E9] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-lg cursor-pointer transition-colors shadow-xs text-center shrink-0">
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      Choose File
                      <input type="file" name="my_file" accept=".pdf,.doc,.docx" onChange={e => { handleFileUpload(e); setErrors(prev => ({...prev, fileName: null})); }} className="hidden" />
                    </label>

                    <div className="flex items-center justify-between gap-2 flex-1 min-w-0 px-1">
                      <span className="text-xs sm:text-sm text-slate-600 truncate font-medium">
                        {fileName ? fileName : "No file chosen (PDF, DOC max 10MB)"}
                      </span>
                      {fileName && (
                        <button
                          type="button"
                          onClick={deleteFile}
                          className="text-xs text-red-500 hover:text-red-700 font-bold shrink-0 ml-2 cursor-pointer"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>

                  {errors.fileName && <span className="text-red-500 text-xs mt-1 block font-medium">{errors.fileName}</span>}
                  {isUploading && (
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3 max-w-xs">
                      <div className="bg-[#0EA5E9] h-full transition-all duration-150" style={{ width: `${uploadProgress}%` }}></div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-bold py-3.5 px-9 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_10px_25px_rgba(14,165,233,0.4)] transition-all cursor-pointer text-sm text-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <span>&rarr;</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Connect with us details */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white border-t border-slate-100 relative overflow-hidden">
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
          <div className="max-w-[1350px] mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading">Connect with us</h2>
            <p className="text-slate-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Whether you're just starting your career or looking to take the next big step, we offer a place where your skills, creativity, and ambition will be valued and nurtured.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-6 mt-8 max-w-2xl mx-auto">
              <a href={`mailto:${careersEmail}`} className="block bg-slate-50 border border-slate-200 p-5 sm:p-6 rounded-2xl w-full sm:w-1/2 text-center shadow-xs hover:shadow-md hover:border-blue-300 transition-all group cursor-pointer">
                <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[10px] text-slate-400 font-bold block mb-1 uppercase tracking-wider">EMAIL APPLICATIONS</span>
                <span className="font-bold text-slate-800 group-hover:text-blue-600 text-xs sm:text-sm transition-colors truncate block">{careersEmail}</span>
              </a>

              <a href="https://wa.me/919130081817" target="_blank" rel="noopener noreferrer" className="block bg-slate-50 border border-slate-200 p-5 sm:p-6 rounded-2xl w-full sm:w-1/2 text-center shadow-xs hover:shadow-md hover:border-green-300 transition-all group cursor-pointer">
                <div className="w-12 h-12 mx-auto bg-green-100 text-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 2.17.69 4.18 1.87 5.83L3 22l4.31-1.13A9.97 9.97 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.5 14c-.2.57-1.14 1.1-1.57 1.15-.4.04-.93.12-2.83-.67-2.3-1-3.8-3.34-3.92-3.48-.12-.15-.94-1.25-.94-2.38 0-1.12.58-1.67.79-1.9.2-.21.43-.27.57-.27.15 0 .29 0 .41.01.13.01.3-.05.47.36.17.43.59 1.44.64 1.55.05.1.09.23.01.38-.08.15-.12.25-.24.38-.11.13-.24.29-.33.39-.11.11-.23.23-.1.45.13.21.57.94 1.23 1.52.85.75 1.55.98 1.76 1.09.21.11.33.09.46-.05.13-.15.55-.65.7-.87.15-.22.3-.18.5-.1.2.08 1.27.6 1.48.7.22.11.36.17.41.27.05.1.05.58-.15 1.15z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[10px] text-slate-400 font-bold block mb-1 uppercase tracking-wider">WHATSAPP HIRING</span>
                <span className="font-bold text-slate-800 group-hover:text-green-600 text-xs sm:text-sm transition-colors block">+91 9130081817</span>
              </a>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white border-t border-slate-100 text-center">
          <div className="max-w-[1350px] mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 font-heading italic max-w-3xl mx-auto leading-relaxed">
              “At Dreamwarez, we don’t just build software—we build careers.”
            </h2>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <button 
                type="button"
                onClick={scrollToJoinForm}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0EA5E9] hover:bg-[#0284C7] active:scale-[0.98] text-white font-extrabold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_10px_25px_rgba(14,165,233,0.4)] transition-all cursor-pointer text-center"
              >
                Apply For Jobs Now &rarr;
              </button>
            </div>
          </div>
        </section>
      </main>

      <ChatWidget />
      <SiteFooter variant="black" />
    </div>
  );
}