import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LeadCapturePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
}

const LeadCapturePopup: React.FC<LeadCapturePopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const { toast } = useToast();

  // Validate form whenever formData changes
  useEffect(() => {
    const isValid = 
      formData.name.trim().length > 0 &&
      formData.phone.trim().length > 0 &&
      formData.email.trim().length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    
    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDownload = () => {
    if (!isFormValid) return;

    try {
      // Create a blob with sample PDF content (in real implementation, this would be your actual PDF)
      const pdfContent = `
5 Things You Should Know While Deploying AI Chatbot

Thank you ${formData.name} for your interest!

This guide covers essential considerations for AI chatbot deployment.

Contact us for more information.
      `;
      
      const blob = new Blob([pdfContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = '5-things-ai-chatbot-deployment.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Download Started",
        description: "Your guide is downloading now. Thank you for your interest!",
      });

      // Close popup after successful download
      onClose();
      
      // Reset form
      setFormData({ name: '', phone: '', email: '' });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error downloading the guide. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md w-[90vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            aria-label="Close popup"
          >
            <X className="h-4 w-4" />
          </button>
          <DialogTitle className="text-xl font-bold text-center text-gray-900 pr-8">
            5 Things You Should Know While Deploying AI Chatbot
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6 space-y-4">
          <p className="text-sm text-gray-600 text-center mb-6">
            Download our comprehensive guide to successful AI chatbot deployment
          </p>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="mt-1"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="mt-1"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="mt-1"
                required
              />
            </div>
          </div>
          
          <Button
            onClick={handleDownload}
            disabled={!isFormValid}
            className="w-full mt-6 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Download
          </Button>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            By downloading this guide, you agree to receive communications from Evergrow Digital.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCapturePopup;