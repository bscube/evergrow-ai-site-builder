import { useState, useEffect } from 'react';

export const useLeadCapture = (delaySeconds: number = 15) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown in this session
    const popupShown = sessionStorage.getItem('leadCaptureShown');
    
    if (popupShown) {
      setHasShown(true);
      return;
    }

    const timer = setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true);
        sessionStorage.setItem('leadCaptureShown', 'true');
      }
    }, delaySeconds * 1000);

    return () => clearTimeout(timer);
  }, [delaySeconds, hasShown]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return {
    showPopup,
    closePopup,
    hasShown
  };
};