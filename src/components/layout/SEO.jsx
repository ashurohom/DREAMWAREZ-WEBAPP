import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO({ title, description }) {
  const defaultDesc = "Dreamwarez offers bespoke software development, ERP solutions, cutting-edge digital marketing, and 3D media animations for global businesses.";
  
  return (
    <Helmet>
      <title>{title ? `${title} | Dreamwarez` : 'Dreamwarez | Custom ERP & Enterprise Software Solutions'}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content="ERP Software, Custom Software Development, Digital Marketing, 3D Animation, Web Development, Tech Agency" />
    </Helmet>
  );
}
