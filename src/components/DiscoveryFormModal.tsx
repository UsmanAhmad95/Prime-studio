import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Send, Check, AlertCircle, Copy } from 'lucide-react';
import { ProjectDiscoveryData, BusinessModelType } from '../types';

interface DiscoveryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscoveryFormModal: React.FC<DiscoveryFormModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [stepError, setStepError] = useState<string | null>(null);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const [formData, setFormData] = useState<ProjectDiscoveryData>({
    businessName: '',
    ownerName: '',
    contactPerson: '',
    phone: '',
    email: '',
    businessAddress: '',
    websiteUrl: '',
    businessModel: 'B2B',
    servicesProducts: '',
    brandAssetsStatus: ['Logo Available'],
    websiteGoals: ['Professional Presence', 'Lead Generation'],
    requiredSystems: ['Website', 'Lead Forms', 'WhatsApp'],
    aiRequirements: ['AI Chat Agent'],
    targetAudience: '',
    leadDeliveryPreference: ['Email', 'WhatsApp'],
    budgetTimeline: '2–4 Weeks (Standard)',
    additionalNotes: ''
  });

  if (!isOpen) return null;

  const totalSteps = 8;

  const goalOptions = [
    'Professional Presence',
    'Lead Generation',
    'Online Sales',
    'Booking',
    'Property Showcase',
    'Restaurant Reservations',
    'Customer Support',
    'Automation',
    'Other'
  ];

  const systemOptions = [
    'Website',
    'Lead Forms',
    'CRM',
    'Booking',
    'Payments',
    'WhatsApp',
    'AI Chat Agent',
    'AI Voice Agent',
    'Email Automation',
    'SMS',
    'Google Sheets',
    'Analytics'
  ];

  const modelOptions: BusinessModelType[] = ['B2B', 'B2C', 'C2C', 'C2B', 'B2G'];

  const toggleArrayItem = (key: keyof ProjectDiscoveryData, item: string) => {
    const list = (formData[key] as string[]) || [];
    if (list.includes(item)) {
      setFormData(prev => ({
        ...prev,
        [key]: list.filter(i => i !== item)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [key]: [...list, item]
      }));
    }
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !formData.businessName.trim()) {
      setStepError('Please enter your official business name to proceed to Step 2.');
      return;
    }
    setStepError(null);
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStepError(null);
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.contactPerson.trim()) {
      setStepError('Please provide your name and contact email address to submit the brief.');
      return;
    }
    setStepError(null);
    setIsSubmitted(true);
  };

  const handleCopySummary = () => {
    const summaryText = `PRIME STUDIO — PROJECT DISCOVERY BRIEF
Business: ${formData.businessName}
Contact: ${formData.contactPerson} (${formData.email} / ${formData.phone || 'N/A'})
Model: ${formData.businessModel}
Goals: ${formData.websiteGoals.join(', ')}
Required Systems: ${formData.requiredSystems.join(', ')}
AI Features: ${formData.aiRequirements.join(', ')}
Lead Routing: ${formData.leadDeliveryPreference.join(', ')}
Timeline: ${formData.budgetTimeline}
Notes: ${formData.additionalNotes || 'None'}`;

    navigator.clipboard.writeText(summaryText);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setStepError(null);
    onClose();
  };

  return (
    <div 
      ref={backdropRef}
      onClick={(e) => {
        if (e.target === backdropRef.current) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Project Discovery Brief Form"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div 
        id="discovery-form-modal-container"
        className="relative w-full max-w-3xl rounded-2xl bg-[#09090e] border border-[#262638] shadow-2xl p-6 sm:p-8 my-8 text-left text-white"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#8e8e99] hover:text-white hover:bg-[#161622] transition-colors"
          aria-label="Close discovery form"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header with Step Progress */}
            <div className="border-b border-[#1c1c28] pb-4 mb-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#d4af37] mb-2">
                <span>PROJECT DISCOVERY BRIEF</span>
                <span>STEP {currentStep} OF {totalSteps}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Start Your Project Discovery
              </h2>
              <div className="w-full h-1.5 bg-[#171722] rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#c5a059] to-[#d4af37] transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Step Form Screens */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STEP 1: Business Information */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <h3 className="text-base font-semibold text-[#f3e5ab]">
                    Step 1: Business Identification
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-[#a1a1aa] block mb-1">Official Business Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Global Energy"
                        className="w-full px-3.5 py-2 text-xs bg-[#12121a] border border-[#222230] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#a1a1aa] block mb-1">Owner / Director Name</label>
                      <input
                        type="text"
                        value={formData.ownerName}
                        onChange={e => setFormData({ ...formData, ownerName: e.target.value })}
                        placeholder="e.g. Robert Mitchell"
                        className="w-full px-3.5 py-2 text-xs bg-[#12121a] border border-[#222230] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#a1a1aa] block mb-1">Operating Location / Headquarters</label>
                      <input
                        type="text"
                        value={formData.businessAddress}
                        onChange={e => setFormData({ ...formData, businessAddress: e.target.value })}
                        placeholder="e.g. London, UK / Dubai, UAE / Dallas, TX"
                        className="w-full px-3.5 py-2 text-xs bg-[#12121a] border border-[#222230] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#a1a1aa] block mb-1">Current Website URL (if any)</label>
                      <input
                        type="text"
                        value={formData.websiteUrl}
                        onChange={e => setFormData({ ...formData, websiteUrl: e.target.value })}
                        placeholder="e.g. https://currentsite.com"
                        className="w-full px-3.5 py-2 text-xs bg-[#12121a] border border-[#222230] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Business Model */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <h3 className="text-base font-semibold text-[#f3e5ab]">
                    Step 2: Primary Business Model
                  </h3>
                  <p className="text-xs text-[#a1a1aa]">
                    Which commercial model best represents how you generate business?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {modelOptions.map(m => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setFormData({ ...formData, businessModel: m })}
                        className={`p-4 rounded-xl text-left border transition-all ${
                          formData.businessModel === m
                            ? 'bg-[#1a1a26] border-[#d4af37] text-white shadow-sm'
                            : 'bg-[#12121b] border-[#222230] text-[#a1a1aa] hover:border-[#38384d]'
                        }`}
                      >
                        <span className="text-xs font-mono font-bold text-[#d4af37]">{m}</span>
                        <p className="text-xs font-bold text-white mt-1">
                          {m === 'B2B' && 'Business to Business'}
                          {m === 'B2C' && 'Business to Consumer'}
                          {m === 'C2C' && 'Consumer to Consumer'}
                          {m === 'C2B' && 'Consumer to Business'}
                          {m === 'B2G' && 'Business to Government'}
                        </p>
                        <p className="text-[11px] text-[#70707a] mt-1">
                          {m === 'B2B' && 'Selling to corporate clients & enterprise buyers'}
                          {m === 'B2C' && 'Selling directly to retail consumers & diners'}
                          {m === 'C2C' && 'Peer-to-peer or community marketplace'}
                          {m === 'C2B' && 'Independent consultants & creators'}
                          {m === 'B2G' && 'Public tenders, government and defense'}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Services / Products */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <h3 className="text-base font-semibold text-[#f3e5ab]">
                    Step 3: Services & Core Offerings
                  </h3>
                  <div>
                    <label className="text-xs text-[#a1a1aa] block mb-1">
                      Briefly describe what services or products your business sells:
                    </label>
                    <textarea
                      rows={4}
                      value={formData.servicesProducts}
                      onChange={e => setFormData({ ...formData, servicesProducts: e.target.value })}
                      placeholder="e.g. Commercial HVAC repairs, rooftop chiller servicing, emergency diagnostics, preventative seasonal maintenance contracts..."
                      className="w-full p-3 text-xs bg-[#12121a] border border-[#222230] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: Brand Assets */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <h3 className="text-base font-semibold text-[#f3e5ab]">
                    Step 4: Existing Brand Assets
                  </h3>
                  <p className="text-xs text-[#a1a1aa]">Select what materials you already have prepared:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Vector Logo (SVG, AI, PNG)',
                      'Established Brand Color Codes',
                      'Professional Photography / Headshots',
                      'Customer Reviews & Testimonials',
                      'Domain Name Purchased',
                      'Product Catalog / Price List'
                    ].map(asset => {
                      const isSelected = formData.brandAssetsStatus.includes(asset);
                      return (
                        <button
                          key={asset}
                          type="button"
                          onClick={() => toggleArrayItem('brandAssetsStatus', asset)}
                          className={`p-3 rounded-lg text-left text-xs border transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#181824] border-[#d4af37] text-white'
                              : 'bg-[#101017] border-[#222230] text-[#a1a1aa]'
                          }`}
                        >
                          <span>{asset}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 5: Website Goals */}
              {currentStep === 5 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <h3 className="text-base font-semibold text-[#f3e5ab]">
                    Step 5: Primary Website Goals
                  </h3>
                  <p className="text-xs text-[#a1a1aa]">Select the primary functions this platform must accomplish:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {goalOptions.map(goal => {
                      const isSelected = formData.websiteGoals.includes(goal);
                      return (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => toggleArrayItem('websiteGoals', goal)}
                          className={`p-3 rounded-lg text-left text-xs border transition-all ${
                            isSelected
                              ? 'bg-[#181824] border-[#d4af37] text-white'
                              : 'bg-[#101017] border-[#222230] text-[#a1a1aa]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{goal}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 6: Required Systems */}
              {currentStep === 6 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <h3 className="text-base font-semibold text-[#f3e5ab]">
                    Step 6: Required Digital Systems
                  </h3>
                  <p className="text-xs text-[#a1a1aa]">Which functional systems should be integrated?</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {systemOptions.map(sys => {
                      const isSelected = formData.requiredSystems.includes(sys);
                      return (
                        <button
                          key={sys}
                          type="button"
                          onClick={() => toggleArrayItem('requiredSystems', sys)}
                          className={`p-3 rounded-lg text-left text-xs border transition-all ${
                            isSelected
                              ? 'bg-[#181824] border-[#d4af37] text-white'
                              : 'bg-[#101017] border-[#222230] text-[#a1a1aa]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{sys}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 7: AI Requirements */}
              {currentStep === 7 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <h3 className="text-base font-semibold text-[#f3e5ab]">
                    Step 7: AI & Automation Needs
                  </h3>
                  <p className="text-xs text-[#a1a1aa]">How would you like AI to assist your operations?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'AI Chat Agent (24/7 Web Inquiries)',
                      'AI Lead Qualification (Budget & Timeline Triage)',
                      'AI Voice Receptionist (Phone Answering & Booking)',
                      'AI Automated Calendar Scheduling',
                      'Not needed at this stage'
                    ].map(aiNeed => {
                      const isSelected = formData.aiRequirements.includes(aiNeed);
                      return (
                        <button
                          key={aiNeed}
                          type="button"
                          onClick={() => toggleArrayItem('aiRequirements', aiNeed)}
                          className={`p-3 rounded-lg text-left text-xs border transition-all ${
                            isSelected
                              ? 'bg-[#181824] border-[#d4af37] text-white'
                              : 'bg-[#101017] border-[#222230] text-[#a1a1aa]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{aiNeed}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 8: Contact Information & Submission */}
              {currentStep === 8 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <h3 className="text-base font-semibold text-[#f3e5ab]">
                    Step 8: Contact Information & Delivery
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-[#a1a1aa] block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="e.g. Michael Vance"
                        className="w-full px-3.5 py-2 text-xs bg-[#12121a] border border-[#222230] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#a1a1aa] block mb-1">Direct Business Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. michael@apexenergy.com"
                        className="w-full px-3.5 py-2 text-xs bg-[#12121a] border border-[#222230] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#a1a1aa] block mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +1 (555) 019-2831"
                        className="w-full px-3.5 py-2 text-xs bg-[#12121a] border border-[#222230] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#a1a1aa] block mb-1">Where Should Leads Be Delivered?</label>
                      <input
                        type="text"
                        value={formData.leadDeliveryPreference.join(', ')}
                        onChange={e => setFormData({ ...formData, leadDeliveryPreference: e.target.value.split(', ') })}
                        placeholder="Email, WhatsApp, CRM..."
                        className="w-full px-3.5 py-2 text-xs bg-[#12121a] border border-[#222230] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step Error Notice */}
              {stepError && (
                <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/40 flex items-center gap-2 text-xs text-red-200 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{stepError}</span>
                </div>
              )}

              {/* Navigation controls */}
              <div className="flex items-center justify-between pt-4 border-t border-[#1c1c28]">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[#151520] text-[#a1a1aa] hover:text-white cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#08080a] hover:bg-[#e2bd46] cursor-pointer"
                  >
                    <span>Continue to Step {currentStep + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#c5a059] text-[#07070a] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Project Brief</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
            <div className="w-12 h-12 rounded-full bg-[#182618] border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Project Discovery Brief Submitted!
            </h3>
            <p className="text-xs sm:text-sm text-[#b0b0ba] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.contactPerson || 'Client'}</strong>. Your business specification for <strong className="text-white">{formData.businessName || 'Your Business'}</strong> has been securely logged.
            </p>

            <div className="p-4 rounded-xl bg-[#12121a] border border-[#232333] max-w-md mx-auto text-left space-y-1.5 text-xs text-[#a1a1aa]">
              <p><strong className="text-white">Business Model:</strong> {formData.businessModel}</p>
              <p><strong className="text-white">Selected Goals:</strong> {formData.websiteGoals.join(', ')}</p>
              <p><strong className="text-white">Key Systems:</strong> {formData.requiredSystems.join(', ')}</p>
              <p><strong className="text-white">Lead Delivery:</strong> {formData.leadDeliveryPreference.join(', ')}</p>
            </div>

            <p className="text-xs text-[#8e8e99] pt-2">
              Director Mohammad Usman Ahmad and the Prime Studio team will review your requirements and follow up with a tailored architectural proposal.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <button
                type="button"
                onClick={handleCopySummary}
                className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#161622] text-[#d4af37] border border-[#d4af37]/30 hover:bg-[#1f1f2e] flex items-center gap-2 cursor-pointer"
              >
                {copiedBrief ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedBrief ? 'Brief Copied to Clipboard!' : 'Copy Brief Summary'}</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#08080a] hover:bg-[#e2bd46] cursor-pointer"
              >
                Done & Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
