import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-grey-900">
            Get Your Free AI Consultation
          </DialogTitle>
          <p className="text-grey-600 mt-2">
            Tell us about your business and we'll show you exactly how AI agents can boost your results.
          </p>
        </DialogHeader>
        
        <div className="px-6 pb-6">
          <iframe 
            aria-label="Book AI consultation" 
            frameBorder="0" 
            style={{height: '400px', width: '100%', border: 'none'}} 
            src="https://forms.zohopublic.com/evergrowdigitalcom1/form/BookAIconsultation/formperma/TY0C9i99YK6kAdGAWm9byI0EeOlwuv-BT0tW8AZ3lfk"
            title="Book AI Consultation Form"
          />
          
          <p className="text-sm text-grey-500 text-center mt-4">
            We'll respond within 2 hours during business hours
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;