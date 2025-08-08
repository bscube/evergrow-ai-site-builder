import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { trackCTAClick } from '../utils/performance';

// Tracking route configurations
const TRACKING_ROUTES = {
  'ai-audit-hero': {
    destination: '/contact#consultation-form',
    ctaName: 'Get Free AI Audit',
    location: 'Hero CTA Section'
  },
  'ai-audit-floating': {
    destination: '/contact#consultation-form',
    ctaName: 'Book AI Audit',
    location: 'Floating CTA'
  },
  'ai-audit-nav': {
    destination: '/contact#consultation-form',
    ctaName: 'Book AI Audit',
    location: 'Navigation'
  },
  'whatsapp-hero': {
    destination: 'https://wa.me/971554966233',
    ctaName: 'Chat on WhatsApp',
    location: 'Hero CTA Section'
  },
  'demo-request': {
    destination: '/contact#consultation-form',
    ctaName: 'Book Live Demo',
    location: 'Demo Request'
  },
  'case-studies': {
    destination: '/case-studies',
    ctaName: 'See Full Results',
    location: 'Quick Stats Section'
  },
  'ai-builder-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'Start Building',
    location: 'AI Agent Builder Section'
  },
  'voice-agents-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'Book Live Demo',
    location: 'AI Voice Agents Section'
  },
  'analytics-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'Get Demo',
    location: 'Analytics Dashboard Section'
  },
  'collaboration-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'See How It Works',
    location: 'AI Human Collaboration Section'
  },
  'private-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'Book Private Demo',
    location: 'Webinars Section'
  },
  'ai-bots-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'Get Demo',
    location: 'AI Bots Page'
  },
  'resources-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'Get Demo',
    location: 'Resources Page'
  },
  'testimonials-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'Get Demo',
    location: 'Testimonials Page'
  },
  'showcase-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'Get Demo',
    location: 'Customer Showcase'
  },
  'tech-blog-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'Get Demo',
    location: 'Tech Blog'
  },
  'company-blog-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'Get Demo',
    location: 'Company Blog'
  },
  'conversations-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'Get Demo',
    location: 'Conversations on AI'
  },
  'case-study-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'Get Demo',
    location: 'Case Study'
  },
  'reports-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'Get Demo',
    location: 'Reports & Research'
  },
  'haptik-partnership-demo': {
    destination: '/contact#consultation-form',
    ctaName: 'Explore Partnership Solutions',
    location: 'Haptik Partnership Section'
  }
};

const TrackingRedirect: React.FC = () => {
  const { trackingId } = useParams<{ trackingId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (trackingId && TRACKING_ROUTES[trackingId as keyof typeof TRACKING_ROUTES]) {
      const route = TRACKING_ROUTES[trackingId as keyof typeof TRACKING_ROUTES];
      
      // Track the CTA click
      trackCTAClick(route.ctaName, route.location, `/track/${trackingId}`);
      
      // Redirect to destination
      if (route.destination.startsWith('http')) {
        // External link
        window.location.href = route.destination;
      } else {
        // Internal route
        navigate(route.destination);
      }
    } else {
      // Invalid tracking ID, redirect to home
      navigate('/');
    }
  }, [trackingId, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-green-500 mx-auto"></div>
        <p className="mt-4 text-grey-600">Redirecting...</p>
      </div>
    </div>
  );
};

export default TrackingRedirect;