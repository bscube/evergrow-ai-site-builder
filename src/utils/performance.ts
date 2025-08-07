
// Performance monitoring and optimization utilities
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Core Web Vitals tracking
export const trackWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Track LCP (Largest Contentful Paint)
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    
    // Send to analytics if gtag is available
    if (window.gtag && lastEntry) {
      window.gtag('event', 'web_vitals', {
        name: 'LCP',
        value: Math.round(lastEntry.startTime),
        metric_id: 'lcp'
      });
    }
  });

  if ('PerformanceObserver' in window) {
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('Performance observer not supported');
    }
  }
};

// Image lazy loading optimization
export const initLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  if (window.gtag) {
    window.gtag('event', 'form_submit', {
      form_name: formName,
      engagement_time_msec: Date.now()
    });
  }
};

// Track CTA clicks with required thank you URL
export const trackCTAClick = (ctaName: string, location: string, thankYouUrl: string) => {
  if (window.gtag) {
    window.gtag('event', 'cta_click', {
      cta_name: ctaName,
      cta_location: location,
      thank_you_url: thankYouUrl,
      engagement_time_msec: Date.now()
    });
  }
};

// Performance budget monitoring
export const monitorPerformance = () => {
  if (typeof window === 'undefined') return;

  // Monitor page load time
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    
    // Alert if load time exceeds 3 seconds
    if (loadTime > 3000) {
      console.warn(`Page load time exceeded 3s: ${loadTime}ms`);
      
      if (window.gtag) {
        window.gtag('event', 'performance_issue', {
          issue_type: 'slow_load',
          load_time: Math.round(loadTime),
          page_url: window.location.pathname
        });
      }
    }
  });
};

// Initialize all performance monitoring
export const initPerformanceMonitoring = () => {
  trackWebVitals();
  initLazyLoading();
  monitorPerformance();
};
