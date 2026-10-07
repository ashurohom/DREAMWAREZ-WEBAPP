import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/layout/SEO';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ChatWidget } from '../../components/layout/ChatWidget';
import { pagesContent } from '../../data/pagesContent';

export function PolicyPage({ title, slug }) {
  const content = pagesContent[slug] || '';

  const policySlugs = [
    { slug: 'privacy-policy', label: 'Privacy Policy' },
    { slug: 'terms-and-condition', label: 'Terms & Conditions' },
    { slug: 'refund-policy', label: 'Refund Policy' },
    { slug: 'cancellation-policy', label: 'Cancellation Policy' }
  ];

  // Helper parser to render text content matching the screenshot styling
  const renderParsedContent = (text) => {
    if (!text) return <p className="text-slate-500">No content available.</p>;

    const blocks = text.split(/\n\s*\n/);

    return blocks.map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Handle section headings (skip document main title duplicate)
      if (trimmed.startsWith('##')) {
        const headingText = trimmed.replace(/^##\s*/, '').trim();
        const lowerH = headingText.toLowerCase();

        if (
          lowerH === 'terms & conditions' ||
          lowerH === 'privacy policy' ||
          lowerH === 'refund policy' ||
          lowerH === 'cancellation policy'
        ) {
          return null;
        }

        return (
          <div key={idx} className="flex items-center gap-3 mt-10 mb-5 first:mt-0">
            <span className="w-1 h-6 bg-slate-600 rounded-full inline-block shrink-0"></span>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 font-heading tracking-tight">
              {headingText}
            </h2>
          </div>
        );
      }

      // Handle bullet lists starting with *
      if (trimmed.startsWith('*') || trimmed.includes('\n*')) {
        const lines = trimmed.split('\n');
        const items = [];
        const nonBulletLines = [];

        lines.forEach(line => {
          const l = line.trim();
          if (l.startsWith('*')) {
            items.push(l.replace(/^\*\s*/, '').trim());
          } else if (l) {
            nonBulletLines.push(l);
          }
        });

        return (
          <div key={idx} className="my-3.5">
            {nonBulletLines.length > 0 && (
              <p className="text-slate-600 text-[15.5px] leading-relaxed mb-3">
                {nonBulletLines.join(' ')}
              </p>
            )}
            {items.length > 0 && (
              <ul className="space-y-3.5 my-3.5">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-[15.5px] leading-relaxed">
                    <span className="text-blue-500 font-bold text-base shrink-0 select-none leading-tight">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }

      // Handle inline bullet lists separated by • (e.g. Privacy Policy)
      if (trimmed.includes('•')) {
        let introText = null;
        let bulletItems = [];

        if (trimmed.indexOf('•') > 0) {
          const intro = trimmed.substring(0, trimmed.indexOf('•')).trim();
          if (intro) introText = intro;
          bulletItems = trimmed
            .substring(trimmed.indexOf('•'))
            .split('•')
            .map(p => p.trim())
            .filter(Boolean);
        } else {
          bulletItems = trimmed
            .split('•')
            .map(p => p.trim())
            .filter(Boolean);
        }

        return (
          <div key={idx} className="my-3.5">
            {introText && (
              <p className="text-slate-600 text-[15.5px] leading-relaxed mb-3">
                {introText}
              </p>
            )}
            <ul className="space-y-3.5 my-3.5">
              {bulletItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-[15.5px] leading-relaxed">
                  <span className="text-blue-500 font-bold text-base shrink-0 select-none leading-tight">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }

      // Standard paragraphs
      return (
        <p key={idx} className="text-slate-600 text-[15.5px] leading-relaxed my-3.5">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="app-container bg-slate-50/30 min-h-screen">
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title={title} />

      <main className="main-content">
        {/* Main Centered Title */}
        <div className="pt-12 pb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            {title}
          </h1>
        </div>

        {/* Two-Column Policies Layout */}
        <div className="max-w-[1240px] mx-auto px-6 pb-24">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Sidebar Navigation */}
            <aside className="w-full md:w-64 lg:w-72 shrink-0 flex flex-col gap-2.5">
              {policySlugs.map((p) => {
                const isActive = slug === p.slug;
                return (
                  <Link
                    key={p.slug}
                    to={`/${p.slug}/`}
                    className={`px-6 py-3.5 rounded-2xl text-[15px] transition-all text-left block ${
                      isActive
                        ? 'bg-[#EEF2FF] text-slate-900 font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-medium'
                    }`}
                  >
                    {p.label}
                  </Link>
                );
              })}
            </aside>

            {/* Right Content Card */}
            <div className="flex-1 w-full bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm">
              {renderParsedContent(content)}
            </div>
          </div>
        </div>
      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}
