
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const generateTitle = (pageTitle?: string): string => {
  const baseTitle = "EverGrow Digital - AI Chatbots & Automation Platform";
  if (!pageTitle) return baseTitle;
  return `${pageTitle} | EverGrow Digital`;
};

export const generateDescription = (pageDescription?: string): string => {
  const baseDescription = "Transform customer experience with enterprise AI chatbots for WhatsApp, Instagram, Facebook, and web. Reduce support costs by 60% with 24/7 automation.";
  return pageDescription || baseDescription;
};

export const generateCanonical = (path: string): string => {
  const baseUrl = "https://evergrowdigital.com";
  return `${baseUrl}${path}`;
};

export const generateStructuredData = (type: 'WebPage' | 'Service' | 'Organization', data: any) => {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };
  
  return JSON.stringify(baseStructuredData);
};

export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  });
};

export const generateFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  });
};

export const generateServiceStructuredData = (service: {
  name: string;
  description: string;
  provider: string;
  areaServed?: string;
  serviceType?: string;
}) => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": service.provider
    },
    "areaServed": service.areaServed || "Worldwide",
    "serviceType": service.serviceType || "AI Chatbot Development"
  });
};
