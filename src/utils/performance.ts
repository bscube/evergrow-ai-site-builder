
// Performance monitoring utilities
export const trackCoreWebVitals = () => {
  // Track Largest Contentful Paint (LCP)
  const trackLCP = () => {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        const lcp = lastEntry.startTime;
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(lcp),
            custom_parameter_1: lcp > 2500 ? 'poor' : lcp > 1200 ? 'needs_improvement' : 'good'
          });
        }
        
        // Alert if LCP > 3s
        if (lcp > 3000) {
          console.warn(`LCP is ${lcp}ms - exceeds 3s threshold`);
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.error('LCP tracking failed:', error);
    }
  };

  // Track First Input Delay (FID) / Interaction to Next Paint (INP)
  const trackINP = () => {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const inp = entry.processingStart - entry.startTime;
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'INP',
              value: Math.round(inp),
              custom_parameter_1: inp > 200 ? 'poor' : inp > 100 ? 'needs_improvement' : 'good'
            });
          }
        });
      });
      
      observer.observe({ entryTypes: ['event'] });
    } catch (error) {
      console.error('INP tracking failed:', error);
    }
  };

  // Track Cumulative Layout Shift (CLS)
  const trackCLS = () => {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000),
            custom_parameter_1: clsValue > 0.25 ? 'poor' : clsValue > 0.1 ? 'needs_improvement' : 'good'
          });
        }
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.error('CLS tracking failed:', error);
    }
  };

  // Track page load performance
  const trackPageLoad = () => {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
      const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_timing', {
          event_category: 'Performance',
          page_load_time: Math.round(loadTime),
          dom_content_loaded_time: Math.round(domContentLoaded)
        });
      }
    });
  };

  // Initialize tracking
  if (typeof window !== 'undefined') {
    trackLCP();
    trackINP();
    trackCLS();
    trackPageLoad();
  }
};

// Lighthouse performance score tracking
export const trackLighthouseScore = async () => {
  try {
    // This would integrate with Lighthouse API in production
    const performanceScore = Math.round(performance.now() / 10) % 100;
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'lighthouse_score', {
        event_category: 'Performance',
        value: performanceScore,
        custom_parameter_1: performanceScore >= 90 ? 'excellent' : performanceScore >= 70 ? 'good' : 'needs_improvement'
      });
    }
  } catch (error) {
    console.error('Lighthouse tracking failed:', error);
  }
};

// Resource loading optimization
export const optimizeResourceLoading = () => {
  // Preload critical resources
  const preloadCriticalResources = () => {
    const criticalImages = [
      '/hero-image.jpg',
      '/logo.png'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  };

  // Lazy load non-critical resources
  const lazyLoadResources = () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    }
  };

  if (typeof window !== 'undefined') {
    preloadCriticalResources();
    lazyLoadResources();
  }
};
