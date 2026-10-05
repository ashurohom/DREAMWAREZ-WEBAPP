import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { WhatsAppWidget } from './WhatsAppWidget';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 Welcome to Dreamwarez. How can we help you today?", isBot: true }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Lead Generation State Machine
  const [leadState, setLeadState] = useState('IDLE'); // IDLE, ASKING_NAME, ASKING_EMAIL, ASKING_PHONE, LEAD_COMPLETE
  const [leadInfo, setLeadInfo] = useState({ name: '', email: '', phone: '', query: '' });
  const [showServiceOptions, setShowServiceOptions] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  // Auto-focus input when chat opens or bot finishes typing
  useEffect(() => {
    if (isOpen && !isTyping) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100); // small delay to let CSS transition happen
    }
  }, [isOpen, isTyping]);

  const sendEmailJS = (leadData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS keys missing. Lead not sent:", leadData);
      return;
    }

    const templateParams = {
      user_name: leadData.name,
      user_email: leadData.email,
      user_phone: leadData.phone,
      message: `[CHATBOT LEAD]\nQuery: ${leadData.query}`
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(res => console.log('Lead sent via chat!', res.status))
      .catch(err => console.error('Failed to send lead', err));
  };

  const simulateBotTyping = (callback, delay = 1200) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleSend = (text) => {
    if (!text.trim()) return;
    
    // Hide service options if they send any message
    setShowServiceOptions(false);
    
    // Add user message
    const userMsg = { id: Date.now(), text, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');

    const lower = text.toLowerCase();
    const isJobRelated = lower.includes('job') || lower.includes('career') || lower.includes('hiring') || lower.includes('internship');

    // Handle Lead Generation Flow (unless they explicitly ask about a job)
    if (!isJobRelated && leadState === 'ASKING_NAME') {
      setLeadInfo(prev => ({ ...prev, name: text }));
      setLeadState('ASKING_EMAIL');
      simulateBotTyping(() => {
        setMessages(prev => [...prev, { id: Date.now(), text: `Nice to meet you, ${text}! What's the best email address to reach you at?`, isBot: true }]);
      });
      return;
    }

    if (!isJobRelated && leadState === 'ASKING_EMAIL') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(text)) {
        simulateBotTyping(() => {
          setMessages(prev => [...prev, { id: Date.now(), text: `That doesn't look like a valid email address. Could you please double-check and enter a valid email?`, isBot: true }]);
        });
        return;
      }

      setLeadInfo(prev => ({ ...prev, email: text }));
      setLeadState('ASKING_PHONE');
      simulateBotTyping(() => {
        setMessages(prev => [...prev, { id: Date.now(), text: `Thanks! Lastly, could you provide your phone number so our experts can call you?`, isBot: true }]);
      });
      return;
    }

    if (!isJobRelated && leadState === 'ASKING_PHONE') {
      const phoneRegex = /^[\d\s\+\-\(\)]{7,20}$/;
      const digitsOnly = text.replace(/\D/g, '');
      if (!phoneRegex.test(text) || digitsOnly.length < 7 || digitsOnly.length > 15) {
        simulateBotTyping(() => {
          setMessages(prev => [...prev, { id: Date.now(), text: `Please provide a valid phone number (e.g. +91 9130081817).`, isBot: true }]);
        });
        return;
      }

      const finalLead = { ...leadInfo, phone: text };
      setLeadInfo(finalLead);
      setLeadState('LEAD_COMPLETE');
      
      simulateBotTyping(() => {
        setMessages(prev => [...prev, { id: Date.now(), text: `Perfect! We have your details. One of our senior representatives will be in touch with you very soon! 🚀`, isBot: true }]);
        sendEmailJS(finalLead);
        
        // Show service options after a short delay
        setTimeout(() => setShowServiceOptions(true), 500);
      });
      return;
    }

    // Normal AI Matcher Flow (if IDLE or LEAD_COMPLETE)
    simulateBotTyping(() => {
      let replyText = "Thank you for reaching out! To better assist you, may I have your full name?";
      let startLeadCapture = true; // Default to capturing lead for unknown queries
      const lower = text.toLowerCase();
      
      if (lower.includes('quote') || lower.includes('price') || lower.includes('cost')) {
        replyText = "We'd love to provide a custom quote for your project! To get started, may I have your full name?";
      } else if (lower.includes('erp') || lower.includes('module')) {
        replyText = "Our ERP system consists of modules like Purchase, Warehouse, MRP, Accounting, and HR. Would you like to schedule a demo? May I have your name?";
      } else if (lower.includes('crm') || lower.includes('customer')) {
        replyText = "Our CRM solution helps you manage leads, customers, and sales pipelines efficiently. To discuss your requirements, may I have your full name?";
      } else if (lower.includes('hr') || lower.includes('human resources') || lower.includes('payroll')) {
        replyText = "We offer comprehensive Human Resources and payroll management software tailored to your needs. May I have your full name to connect you with an expert?";
      } else if (lower.includes('marketing') || lower.includes('seo') || lower.includes('digital')) {
        replyText = "Our Digital Marketing services include SEO, social media, and brand growth strategies. To explore how we can help you grow, may I have your full name?";
      } else if (lower.includes('app') || lower.includes('android') || lower.includes('ios') || lower.includes('mobile')) {
        replyText = "We build high-performance mobile apps for both Android and iOS, including our specialized Construction Quality App. Could I have your full name to get started?";
      } else if (lower.includes('pos') || lower.includes('point of sale') || lower.includes('retail')) {
        replyText = "Our Point of Sale (POS) systems are fast, reliable, and perfect for retail businesses. To schedule a demo, may I have your full name?";
      } else if (lower.includes('security') || lower.includes('cyber') || lower.includes('forensics')) {
        replyText = "We provide robust Cybersecurity & Digital Forensics solutions to keep your business safe. May I have your full name to connect you with our security team?";
      } else if (lower.includes('ar') || lower.includes('vr') || lower.includes('virtual reality') || lower.includes('augmented')) {
        replyText = "We create immersive AR/VR experiences for various industries. Let's discuss your vision! May I have your full name?";
      } else if (lower.includes('web development') || lower.includes('website')) {
        replyText = "We build fast, responsive, and stunning websites tailored to your brand, using the latest modern frameworks. May I have your full name to get started?";
      } else if (lower.includes('custom software') || lower.includes('software')) {
        replyText = "We develop scalable, secure, and custom software solutions perfectly aligned with your business workflows. May I have your full name?";
      } else if (lower.includes('services')) {
        replyText = "We offer Web Development, Mobile Apps, Custom Software, Cybersecurity, ERP, CRM, and much more. To discuss further, may I have your full name?";
      } else if (lower.includes('job') || lower.includes('career') || lower.includes('hiring') || lower.includes('internship')) {
        replyText = "We are always looking for talented individuals! You can apply on our Career Opportunities page. May I have your name?";
        startLeadCapture = false; // Usually don't want to capture job seekers as sales leads, but let's keep it simple
      } else if (lower.includes('about') || lower.includes('company') || lower.includes('who are you')) {
        replyText = "Dreamwarez is a Simplified Software Company dedicated to delivering top-tier tech solutions. May I have your full name so we can get to know you?";
      } else if (lower.includes('contact') || lower.includes('support') || lower.includes('sales')) {
        replyText = "You can reach us at sales@dreamwarez.com or +91 9130081817. I can also connect you with our team! What is your full name?";
      } else if (lower.includes('address') || lower.includes('location')) {
        replyText = "Our address is: 518, 5th Floor, Wakad Business Bay, Pune - 411057, Maharashtra, India. To help us assist you better, may I have your full name?";
      } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        replyText = "Hello! How can I assist you with your software development needs today?";
        startLeadCapture = false; // Don't ask for name just on a greeting
      } else if (lower === 'yes' || lower === 'yeah' || lower === 'sure' || lower === 'yep' || lower === 'yes please' || lower === 'y') {
        if (leadState === 'LEAD_COMPLETE') {
          replyText = "Great! Here are some of our core services. What would you like to learn about?";
          setTimeout(() => setShowServiceOptions(true), 500);
        } else {
          replyText = "Awesome! We offer Web Development, Mobile Apps, Custom Software, ERP, and Cybersecurity. May I have your full name to connect you with an expert?";
        }
      }

      if (leadState === 'LEAD_COMPLETE') {
        startLeadCapture = false;
        replyText = replyText.replace(/(To better assist you, |To get started, )?may I have your (full )?name.*?\?/gi, "Would you like to explore more of our services?");
        replyText = replyText.replace(/What is your full name\?/gi, "Would you like to explore more of our services?");
        replyText = replyText.replace(/Could I have your full name.*?\?/gi, "Would you like to explore more of our services?");
      }

      setMessages(prev => [...prev, { id: Date.now(), text: replyText, isBot: true }]);
      
      if (startLeadCapture && leadState !== 'LEAD_COMPLETE') {
        setLeadState('ASKING_NAME');
        setLeadInfo(prev => ({ ...prev, query: text }));
      }
    });
  };

  return (
    <>
      <div className="chat-widget-btn group" onClick={toggleChat} title="Chat with support">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>

      <WhatsAppWidget />

      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header relative overflow-hidden">
          {/* Subtle gradient animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] bg-[length:200%_auto] animate-gradient"></div>
          
          <div className="chat-header-info relative z-10">
            <div className="chat-avatar bg-gradient-to-tr from-[#3bba9c] to-blue-400 shadow-md">D</div>
            <div>
              <div className="chat-title text-white tracking-wide">Dreamwarez Assistant</div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
                Online & Ready
              </div>
            </div>
          </div>
          <button className="chat-close relative z-10 hover:rotate-90 transition-transform duration-300" onClick={toggleChat}>×</button>
        </div>

        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.isBot ? 'bot' : 'user'} animate-slide-up`}>
              {msg.text}
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot typing-indicator animate-fade-in">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          {messages.length === 1 && !isTyping && leadState === 'IDLE' && (
            <div className="quick-actions-container hide-scrollbar mt-2">
              <button className="action-chip" onClick={() => handleSend("I want to get a quote")}>
                💼 Get a Quote
              </button>
              <button className="action-chip" onClick={() => handleSend("Tell me about ERP modules")}>
                ⚙️ ERP Modules
              </button>
              <button className="action-chip" onClick={() => handleSend("Contact Sales")}>
                📞 Contact Sales
              </button>
              <button className="action-chip" onClick={() => handleSend("Where are you located?")}>
                📍 Location
              </button>
            </div>
          )}

          {showServiceOptions && !isTyping && (
            <div className="flex flex-wrap gap-2 mt-3 w-full pb-2">
              <button className="bg-white border-[1.5px] border-[#60a5fa] text-[#3b82f6] rounded-full px-3 py-1.5 text-[13.5px] font-medium hover:bg-blue-50 transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm whitespace-nowrap" onClick={() => handleSend("Tell me about Web Development")}>
                🌐 Web Development
              </button>
              <button className="bg-white border-[1.5px] border-[#60a5fa] text-[#3b82f6] rounded-full px-3 py-1.5 text-[13.5px] font-medium hover:bg-blue-50 transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm whitespace-nowrap" onClick={() => handleSend("Tell me about Mobile Apps")}>
                📱 Mobile Apps
              </button>
              <button className="bg-white border-[1.5px] border-[#60a5fa] text-[#3b82f6] rounded-full px-3 py-1.5 text-[13.5px] font-medium hover:bg-blue-50 transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm whitespace-nowrap" onClick={() => handleSend("Tell me about Custom Software")}>
                💻 Custom Software
              </button>
              <button className="bg-white border-[1.5px] border-[#60a5fa] text-[#3b82f6] rounded-full px-3 py-1.5 text-[13.5px] font-medium hover:bg-blue-50 transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm whitespace-nowrap" onClick={() => handleSend("Tell me about ERP")}>
                ⚙️ ERP Solutions
              </button>
              <button className="bg-white border-[1.5px] border-[#60a5fa] text-[#3b82f6] rounded-full px-3 py-1.5 text-[13.5px] font-medium hover:bg-blue-50 transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm whitespace-nowrap" onClick={() => handleSend("Tell me about Cybersecurity")}>
                🛡️ Cybersecurity
              </button>
              <button className="bg-white border-[1.5px] border-[#60a5fa] text-[#3b82f6] rounded-full px-3 py-1.5 text-[13.5px] font-medium hover:bg-blue-50 transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm whitespace-nowrap" onClick={() => handleSend("Tell me about CRM")}>
                🤝 CRM Systems
              </button>
              <button className="bg-white border-[1.5px] border-[#60a5fa] text-[#3b82f6] rounded-full px-3 py-1.5 text-[13.5px] font-medium hover:bg-blue-50 transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm whitespace-nowrap" onClick={() => handleSend("Tell me about HR & Payroll")}>
                👥 HR & Payroll
              </button>
              <button className="bg-white border-[1.5px] border-[#60a5fa] text-[#3b82f6] rounded-full px-3 py-1.5 text-[13.5px] font-medium hover:bg-blue-50 transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm whitespace-nowrap" onClick={() => handleSend("Tell me about Digital Marketing")}>
                📈 Digital Marketing
              </button>
              <button className="bg-white border-[1.5px] border-[#60a5fa] text-[#3b82f6] rounded-full px-3 py-1.5 text-[13.5px] font-medium hover:bg-blue-50 transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm whitespace-nowrap" onClick={() => handleSend("Tell me about POS")}>
                🏪 POS Systems
              </button>
              <button className="bg-white border-[1.5px] border-[#60a5fa] text-[#3b82f6] rounded-full px-3 py-1.5 text-[13.5px] font-medium hover:bg-blue-50 transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm whitespace-nowrap" onClick={() => handleSend("Tell me about AR/VR")}>
                👓 AR / VR
              </button>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleSend(inputVal); }} className="chat-input-area bg-slate-50 border-t border-slate-200 p-3">
          <input 
            ref={inputRef}
            type="text" 
            placeholder={
              leadState === 'ASKING_NAME' ? "Enter your full name..." :
              leadState === 'ASKING_EMAIL' ? "Enter your email address..." :
              leadState === 'ASKING_PHONE' ? "Enter your phone number..." :
              "Type a message..."
            }
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="chat-input focus:ring-2 focus:ring-[#3bba9c]/50 transition-all border-slate-300 bg-white"
            disabled={isTyping}
          />
          <button type="submit" className="chat-send-btn bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center w-10 h-10 p-0 rounded-full shrink-0 disabled:opacity-50" disabled={isTyping || !inputVal.trim()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[-1px] translate-y-[1px]">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
