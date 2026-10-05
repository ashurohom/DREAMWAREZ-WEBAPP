import React from 'react';
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

  // Helper parser to render text content exactly without losing layout structure
  const renderParsedContent = (text) => {
    if (!text) return <p>No content available.</p>;
    const blocks = text.split(/\n\s*\n/);
    return blocks.map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Handle main title duplicates or subheadings
      if (trimmed.startsWith('##')) {
        const headingText = trimmed.replace(/^##\s*/, '');
        if (headingText === 'About Us' || headingText === 'Cancellation Policy' || headingText === 'Privacy Policy' || headingText === 'Refund Policy' || headingText === 'Terms & Conditions') {
          return null; // Skip rendering page title within body
        }
        return <h2 key={idx}>{headingText}</h2>;
      }

      // Handle bullet lists
      if (trimmed.startsWith('*') || trimmed.includes('\n*')) {
        const items = trimmed
          .split('\n')
          .map(item => item.replace(/^\*\s*/, '').trim())
          .filter(Boolean);
        return (
          <ul key={idx}>
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
      }

      return <p key={idx}>{trimmed}</p>;
    });
  };

  return (
    <div className="app-container">
      
      <div className="gradient-overlay" />
      <SiteHeader />

      <SEO title="Policy" />

      <main className="main-content">
        <div className="subpage-container">
          <div className="subpage-hero">
            <h1 className="subpage-title">{title}</h1>
          </div>

          <div className="policies-layout">
            <aside className="policies-sidebar">
              {policySlugs.map((p) => (
                <a 
                  key={p.slug}
                  href={`/${p.slug}/`}
                  className={`sidebar-tab ${slug === p.slug ? 'active' : ''}`}
                >
                  {p.label}
                </a>
              ))}
            </aside>
            <div className="subpage-body markdown-content">
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
