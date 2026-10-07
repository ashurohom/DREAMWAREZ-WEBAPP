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
        <section className="min-h-[calc(100vh-80px)] flex items-center pt-8 pb-10 md:pt-10 md:pb-12 bg-white relative overflow-hidden">
          {/* Background Texture & Patterns */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Top Right Blue Shape */}
            <div 
              className="absolute top--20 right-0 w-full h-full" 
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
                <span className="text-[14px] font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  JOIN US
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[3px] w-12 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-black font-heading mb-4 max-w-[700px]">
                Career <span className="text-[#7A7A7A]">Opportunities</span>
              </h1>

              {/* Paragraphs */}
              <div className="space-y-4">
                <p className="text-lg text-slate-700 font-semibold leading-relaxed max-w-[600px]">
                  Passion. Innovation. Growth.
                </p>
                <p className="text-base text-black leading-relaxed max-w-[600px]">
                  We're a team of passionate innovators, engineers, designers, and thinkers who thrive on solving real-world problems with technology. If you're looking for a place where you can learn, grow, and make a meaningful impact, your journey starts here.
                </p>
                <p className="text-[16px] text-[#8B2C2C] leading-relaxed max-w-[600px] italic font-semibold">
                  "Your Talent. Our Vision. Let's Build the Future Together."
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-end z-0 reveal reveal-fade-left">
              <div className="relative w-full max-w-[550px]">
                {/* Rounded Image */}
                <div className="w-full aspect-[4/3] bg-slate-100 relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
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
        <section className="py-20 px-6 max-w-[1350px] mx-auto text-center reveal reveal-fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading max-w-4xl mx-auto leading-snug">
            Career Opportunities At Dreamwarez
          </h2>
          
          <p className="text-slate-800 text-lg md:text-xl font-bold max-w-4xl mx-auto mt-6">
            "Your Talent. Our Vision. Let's Build The Future Together."
          </p>

          <p className="text-black text-[15px] md:text-base max-w-5xl mx-auto mt-6 leading-relaxed">
            At <strong className="font-semibold text-slate-600">Dreamwarez</strong>, we don't just develop software—we develop <strong className="font-semibold text-slate-600">people</strong>. We believe in creating a culture where innovation, collaboration, and growth are at the core of everything we do.
          </p>

          <p className="text-black text-[15px] md:text-base max-w-5xl mx-auto mt-8 leading-relaxed">
            Whether you're a fresh graduate ready to make your mark, or a seasoned professional looking to elevate your career, Dreamwarez is the place where you can truly thrive.
          </p>

        </section>

        {/* Why Work with Us Section */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
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
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-[14px] font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  OUR ENVIRONMENT
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[3px] w-12 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">Why Work with Us?</h2>
              <h3 className="text-slate-700 font-bold text-lg md:text-xl mt-4">
                At Dreamwarez, we don’t just write code — we craft digital experiences that shape the future.
              </h3>
              <p className="text-black text-sm mt-2 max-w-2xl mx-auto">
                If you're passionate about technology, innovation, and making an impact, Dreamwarez is where your career takes flight.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs reveal reveal-fade-up">
                <img src="https://dreamwarez.in/wp-content/uploads/2025/05/mindset-1024x592.jpg" alt="Startup Spirit, Enterprise Mindset" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-heading font-bold text-slate-850 text-base">Startup Spirit, Enterprise Mindset</h4>
                  <p className="text-black text-xs mt-2 leading-relaxed">
                    We’re agile and innovative, yet robust and scalable.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <img src="https://dreamwarez.in/wp-content/uploads/2025/05/Continuous-Learning-For-The-New-World-Of-Work.jpg" alt="Continuous Learning" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-heading font-bold text-slate-850 text-base">Continuous Learning</h4>
                  <p className="text-black text-xs mt-2 leading-relaxed">
                    Workshops, training, certifications, mentorships.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <img src="https://dreamwarez.in/wp-content/uploads/2025/05/Diverse-Team1.jpg" alt="Diverse Team" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-heading font-bold text-slate-850 text-base">Diverse Team</h4>
                  <p className="text-black text-xs mt-2 leading-relaxed">
                    A community of developers, designers, strategists, thinkers.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs reveal reveal-fade-up">
                <img src="https://dreamwarez.in/wp-content/uploads/2025/05/Flexible-Culture3.jpeg" alt="Flexible Culture" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-heading font-bold text-slate-850 text-base">Flexible Culture</h4>
                  <p className="text-black text-xs mt-2 leading-relaxed">
                    Remote options, hackathons, offsites, and more.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <img src="https://dreamwarez.in/wp-content/uploads/2025/05/Growth-Pathways1.jpg" alt="Growth Pathways" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-heading font-bold text-slate-850 text-base">Growth Pathways</h4>
                  <p className="text-black text-xs mt-2 leading-relaxed">
                    Leadership programs, internal promotions, and skill accelerators.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <img src="https://dreamwarez.in/wp-content/uploads/2025/05/Mission-Driven-1024x682.jpg" alt="Mission-Driven" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-heading font-bold text-slate-850 text-base">Mission-Driven</h4>
                  <p className="text-black text-xs mt-2 leading-relaxed">
                    Be part of something meaningful — we're building products that solve real problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internship & Training Programs */}
        <section className="py-16 px-6 bg-white border-t border-slate-100">
          <div className="max-w-[1350px] mx-auto text-center reveal reveal-fade-up">
            <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-[14px] font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  TRAINING PROGRAMS
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[3px] w-12 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 font-heading mt-4 mb-8">Internship & Training Programs</h2>
            
            <div className="space-y-6 text-black text-base md:text-lg leading-relaxed text-left max-w-3xl mx-auto">
              <p>
                Dreamwarez is passionate about shaping the next generation of tech talent.
              </p>
              <p>
                We offer 3- to 6-month paid internship programs in: Web Development (Python, PHP, HTML/CSS), Mobile App Development (Flutter, iOS, Android), Cybersecurity & Digital Forensics, Business Analysis & Project Coordination.
              </p>
              <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8 w-full">
                <span className="text-3xl hidden sm:block">🚀</span>
                <p className="font-bold text-slate-700 m-0">
                  Interns get a certificate, letter of recommendation, and a chance for a full-time role!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work with Dreamwarez Section */}
        <section className="py-20 px-6 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
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
            <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-[14px] font-bold tracking-[0.2em] text-[#8B2C2C] uppercase relative">
                  WHY DREAMWAREZ
                  <span className="absolute -bottom-2 left-0 flex gap-1.5">
                    <span className="h-[3px] w-12 bg-[#7A7A7A] rounded-full"></span>
                    <span className="h-[3px] w-2 bg-[#7A7A7A] rounded-full"></span>
                  </span>
                </span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">Why Work with Dreamwarez?</h2>
            <h3 className="text-slate-700 font-bold text-lg md:text-xl mt-4">
              We're a company that invests in your growth.
            </h3>
            <p className="text-black text-sm mt-2 max-w-2xl mx-auto mb-12">
              Be part of projects that solve real-world challenges across industries.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-left">
              <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-slate-200 p-5 rounded-xl flex gap-3 items-center shadow-xs">
                <svg className="w-5 h-5 text-[#8B2C2C] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" /></svg>
                <span className="text-sm leading-snug text-slate-600 font-bold">Fast-paced learning environment</span>
              </div>
              <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-slate-200 p-5 rounded-xl flex gap-3 items-center shadow-xs">
                <svg className="w-5 h-5 text-[#8B2C2C] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <span className="text-sm leading-snug text-slate-600 font-bold">Work with modern tech stack</span>
              </div>
              <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-slate-200 p-5 rounded-xl flex gap-3 items-center shadow-xs">
                <svg className="w-5 h-5 text-[#8B2C2C] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" /></svg>
                <span className="text-sm leading-snug text-slate-600 font-bold">Fun, friendly and flexible work culture</span>
              </div>
              <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-slate-200 p-5 rounded-xl flex gap-3 items-center shadow-xs">
                <svg className="w-5 h-5 text-[#8B2C2C] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
                <span className="text-sm leading-snug text-slate-600 font-bold">Performance bonuses and growth paths</span>
              </div>
              <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-slate-200 p-5 rounded-xl flex gap-3 items-center shadow-xs">
                <svg className="w-5 h-5 text-[#8B2C2C] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                <span className="text-sm leading-snug text-slate-600 font-bold">Work that actually matters to real clients</span>
              </div>
            </div>
          </div>
        </section>

        {/* Ready To Join Us Form Section */}
        <section id="ready-to-join" className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[700px] mx-auto text-center mb-10 reveal reveal-fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">Ready To Join Us?</h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base leading-relaxed">
              Whether you're just starting your career or looking to take the next big step, we offer a place where your skills, creativity, and ambition will be valued and nurtured.
            </p>
            <p className="text-black mt-3 text-sm md:text-base">Please fill in your details below</p>
          </div>

          <div className="max-w-[700px] mx-auto bg-white border-2 border-blue-200 rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 reveal reveal-fade-up">
            {isSubmitted ? (
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8 text-center">
                <span className="text-5xl mb-4 block">🎉</span>
                <h4 className="font-bold text-teal-800 font-heading text-xl">Application Submitted!</h4>
                <p className="text-teal-600 text-sm mt-2 leading-relaxed">
                  Thank you, {name}. We have received your application and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
                {formError && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
                    {formError}
                  </div>
                )}
                <div>
                  <label className="text-xs font-bold text-slate-600 mb-2 block">Name</label>
                  <input 
                    type="text" name="user_name" required value={name} onChange={e => { setName(e.target.value); setErrors(prev => ({...prev, name: null})); }}
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50 transition-all`}
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 mb-2 block">Email Address</label>
                  <input 
                    type="email" name="user_email" required value={email} onChange={e => { setEmail(e.target.value); setErrors(prev => ({...prev, email: null})); }}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50 transition-all`}
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 mb-2 block">Phone Number</label>
                  <input 
                    type="tel" name="user_phone" required value={phone} onChange={e => { setPhone(e.target.value); setErrors(prev => ({...prev, phone: null})); }}
                    className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50 transition-all`}
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 mb-2 block">Position Applying For</label>
                  <textarea 
                    name="message" required value={selectedJob} onChange={e => { setSelectedJob(e.target.value); setErrors(prev => ({...prev, selectedJob: null})); }} rows="4"
                    className={`w-full px-4 py-3 border ${errors.selectedJob ? 'border-red-500' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50 transition-all resize-none`}
                  ></textarea>
                  {errors.selectedJob && <span className="text-red-500 text-xs mt-1 block">{errors.selectedJob}</span>}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 mb-2 block">Upload your CV Here</label>
                  <div className="flex flex-wrap items-center gap-4">
                    <label className="flex-shrink-0 bg-[#7A7A7A] hover:bg-[#5A5A5A] text-white text-sm font-semibold py-2.5 px-6 rounded-lg cursor-pointer transition-colors shadow-sm">
                      Choose File
                      <input type="file" name="my_file" onChange={e => { handleFileUpload(e); setErrors(prev => ({...prev, fileName: null})); }} className="hidden" />
                    </label>
                    <span className="text-sm text-slate-500 truncate flex-1 min-w-[120px]">
                      {fileName ? fileName : "No file chosen"}
                    </span>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="font-bold py-2.5 px-8 rounded-lg shadow-md transition-all bg-[#7A7A7A] hover:bg-[#5A5A5A] text-white hover:shadow-lg shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                  {errors.fileName && <span className="text-red-500 text-xs mt-1 block">{errors.fileName}</span>}
                  {isUploading && (
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3 max-w-xs">
                      <div className="bg-[#8B2C2C] h-full transition-all duration-150" style={{ width: `${uploadProgress}%` }}></div>
                    </div>
                  )}
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Connect with us details */}
        <section className="py-20 px-6 bg-white border-t border-slate-100 relative overflow-hidden">
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
            <h2 className="text-3xl font-extrabold text-slate-850 font-heading">Connect with us</h2>
            <p className="text-slate-555 mt-4 text-base">Whether you're just starting your career or looking to take the next big step, we offer a place where your skills, creativity, and ambition will be valued and nurtured.</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
              <a href={`mailto:${careersEmail}`} className="block bg-slate-50 border border-slate-200 p-6 rounded-2xl w-full max-w-xs text-center shadow-xs hover:shadow-md hover:border-blue-200 transition-all group cursor-pointer">
                <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[10px] text-slate-400 font-bold block mb-1">EMAIL APPLICATIONS</span>
                <span className="font-bold text-slate-800 group-hover:text-blue-600 text-sm transition-colors">{careersEmail}</span>
              </a>

              <a href="https://wa.me/919130081817" target="_blank" rel="noopener noreferrer" className="block bg-slate-50 border border-slate-200 p-6 rounded-2xl w-full max-w-xs text-center shadow-xs hover:shadow-md hover:border-green-200 transition-all group cursor-pointer">
                <div className="w-12 h-12 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 2.17.69 4.18 1.87 5.83L3 22l4.31-1.13A9.97 9.97 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.5 14c-.2.57-1.14 1.1-1.57 1.15-.4.04-.93.12-2.83-.67-2.3-1-3.8-3.34-3.92-3.48-.12-.15-.94-1.25-.94-2.38 0-1.12.58-1.67.79-1.9.2-.21.43-.27.57-.27.15 0 .29 0 .41.01.13.01.3-.05.47.36.17.43.59 1.44.64 1.55.05.1.09.23.01.38-.08.15-.12.25-.24.38-.11.13-.24.29-.33.39-.11.11-.23.23-.1.45.13.21.57.94 1.23 1.52.85.75 1.55.98 1.76 1.09.21.11.33.09.46-.05.13-.15.55-.65.7-.87.15-.22.3-.18.5-.1.2.08 1.27.6 1.48.7.22.11.36.17.41.27.05.1.05.58-.15 1.15z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[10px] text-slate-400 font-bold block mb-1">WHATSAPP HIRING</span>
                <span className="font-bold text-slate-800 group-hover:text-green-600 text-sm transition-colors">+91 9130081817</span>
              </a>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-24 px-6 bg-white border-t border-slate-100 text-center">
          <div className="max-w-[1350px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading italic max-w-3xl mx-auto leading-relaxed">
              “At Dreamwarez, we don’t just build software—we build careers.”
            </h2>
            <div className="mt-8">
              <button 
                type="button"
                onClick={scrollToJoinForm}
                className="bg-[#7A7A7A] hover:bg-[#5A5A5A] text-white font-extrabold text-base px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all inline-block hover:scale-[1.02] cursor-pointer"
              >
                apply job now
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