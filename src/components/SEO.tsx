
import { useEffect } from 'react';
import { SEOProps, generateTitle, generateDescription, generateCanonical } from '../utils/seo';

interface SEOComponentProps extends SEOProps {
  children?: React.ReactNode;
  structuredData?: string;
}

const SEO: React.FC<SEOComponentProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  nofollow = false,
  structuredData,
  children
}) => {
  useEffect(() => {
    // Update document title
    document.title = generateTitle(title);

    // Update meta description
    updateMetaTag('description', generateDescription(description));

    // Update keywords if provided
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update robots meta
    const robotsContent = [
      noindex ? 'noindex' : 'index',
      nofollow ? 'nofollow' : 'follow',
      'max-snippet:-1',
      'max-image-preview:large',
      'max-video-preview:-1'
    ].join(', ');
    updateMetaTag('robots', robotsContent);

    // Update canonical link
    if (canonical) {
      updateLinkTag('canonical', generateCanonical(canonical));
    }

    // Update Open Graph tags
    updateMetaProperty('og:title', generateTitle(title));
    updateMetaProperty('og:description', generateDescription(description));
    updateMetaProperty('og:type', ogType);
    
    if (ogImage) {
      updateMetaProperty('og:image', ogImage);
      updateMetaProperty('og:image:alt', `${generateTitle(title)} - Preview Image`);
    }

    if (canonical) {
      updateMetaProperty('og:url', generateCanonical(canonical));
    }

    // Update Twitter Card tags
    updateMetaName('twitter:card', twitterCard);
    updateMetaName('twitter:title', generateTitle(title));
    updateMetaName('twitter:description', generateDescription(description));
    
    if (ogImage) {
      updateMetaName('twitter:image', ogImage);
    }

    // Add structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }

    // Cleanup function
    return () => {
      // Remove any dynamically added structured data
      const existingScript = document.querySelector('script[data-dynamic-seo]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, keywords, canonical, ogImage, ogType, twitterCard, noindex, nofollow, structuredData]);

  return <>{children}</>;
};

// Helper functions
const updateMetaTag = (name: string, content: string) => {
  let metaTag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.name = name;
    document.head.appendChild(metaTag);
  }
  metaTag.content = content;
};

const updateMetaProperty = (property: string, content: string) => {
  let metaTag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute('property', property);
    document.head.appendChild(metaTag);
  }
  metaTag.content = content;
};

const updateMetaName = (name: string, content: string) => {
  let metaTag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.name = name;
    document.head.appendChild(metaTag);
  }
  metaTag.content = content;
};

const updateLinkTag = (rel: string, href: string) => {
  let linkTag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!linkTag) {
    linkTag = document.createElement('link');
    linkTag.rel = rel;
    document.head.appendChild(linkTag);
  }
  linkTag.href = href;
};

const addStructuredData = (data: string) => {
  // Remove existing dynamic structured data
  const existingScript = document.querySelector('script[data-dynamic-seo]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-dynamic-seo', 'true');
  script.textContent = data;
  document.head.appendChild(script);
};

export default SEO;
