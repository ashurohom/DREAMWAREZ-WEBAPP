import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = 'https://dreamwarez.in/logo.png', 
  ogType = 'website',
  schema 
}) {
  const defaultTitle = 'Dreamwarez | Top Software Development & ERP Software Company in Pune';
  const defaultDesc = 'Dreamwarez is a leading software development and custom ERP software company in Pune. We deliver web development, Android apps, Odoo implementation, inventory management, and digital marketing.';
  const defaultKeywords = 'Software development company in Pune, ERP software company in Pune, Best IT company in Pune, Web development company in Pune, Custom software development company, Odoo implementation partner in Pune, Android app development company in Pune, Inventory management software, Manufacturing ERP software';

  const fullTitle = title 
    ? (title.includes('Dreamwarez') ? title : `${title} | Dreamwarez`)
    : defaultTitle;

  const currentDesc = description || defaultDesc;
  const currentKeywords = keywords || defaultKeywords;
  const canonicalUrl = canonical 
    ? (canonical.startsWith('http') ? canonical : `https://dreamwarez.in${canonical.startsWith('/') ? canonical : `/${canonical}`}`)
    : undefined;

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={currentDesc} />
      <meta name="keywords" content={currentKeywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical Link */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Dreamwarez" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={currentDesc} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={currentDesc} />
      <meta name="twitter:image" content={ogImage} />
      {canonicalUrl && <meta name="twitter:url" content={canonicalUrl} />}

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
