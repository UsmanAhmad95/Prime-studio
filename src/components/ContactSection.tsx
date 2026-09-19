import React, { useState } from 'react';
import { TIMELINE_ESTIMATES, COMPANY_INFO } from '../data/content';
import { Send, CheckCircle2, Sparkles, Clock, AlertCircle, Mail, UserCheck } from 'lucide-react';

export const ContactSection: React.FC<{ onOpenDiscovery: () => void }> = ({ onOpenDiscovery }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'Corporate & Business',
    website: '',
    whatDoYouNeed: 'Full Website & Digital System',
    message: ''
  });

  const businessTypes = [
    'Corporate & Business',
    'Lead Generation',
    'E-commerce',
    'Real Estate',
    'Restaurants',
    'Service Business',
    'Healthcare & Dental',
    'AI Solutions & Automation',
    'Custom Digital System'
  ];

  const needsOptions = [
    'Full Website & Digital System',
    'Lead Generation & Quote Funnel',
    'E-commerce Storefront',
    'Real Estate Experience & Floor Plans',
    'AI Voice Receptionist & Chat Agents',
    'Custom Demo Concept First'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-section-container" className="space-y-16">
      {/* 1. Project Timeline Estimates Section */}
      <div className="rounded-2xl bg-[#0b0b11] border border-[#222232] p-6 sm:p-8 space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase mb-1">
            <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Project Timeline Expectations</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Typical Production Durations
          </h3>
          <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1 max-w-2xl">
            Timelines are structured around realistic engineering, quality assurance, and system testing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {TIMELINE_ESTIMATES.map((t) => (
            <div
              key={t.type}
              className="p-4 rounded-xl bg-[#12121b] border border-[#1e1e2b] flex flex-col justify-between h-44"
            >
              <div>
                <span className="text-sm font-bold text-[#d4af37] font-mono">{t.duration}</span>
                <h5 className="text-xs font-bold text-white mt-1">{t.type}</h5>
              </div>
              <p className="text-[11px] text-[#8e8e99] leading-tight mt-2">{t.idealFor}</p>
            </div>
          ))}
        </div>

        {/* Timeline Disclaimer */}
        <div className="p-3.5 rounded-xl bg-[#12121c] border border-[#252535] flex items-start gap-2.5 text-xs text-[#a1a1aa]">
          <AlertCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
          <p className="leading-relaxed text-[11px]">
            <strong>Project Timeline Disclaimer:</strong> Actual timelines depend on project scope, content availability, client revisions, and third-party integrations. Final milestone schedules are confirmed during formal project planning.
          </p>
        </div>
      </div>

      {/* 2. Direct Contact Form & Studio Attribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Studio Information */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span>Direct Engagement</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Let&apos;s Build Your Digital System.
            </h2>
            <p className="text-xs sm:text-sm text-[#b0b0ba] mt-2 leading-relaxed">
              Tell us about your business, your current challenges, and what you want your website to accomplish.
            </p>
          </div>

          {/* Director Box */}
          <div className="p-5 rounded-xl bg-[#0e0e14] border border-[#242436] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1a1a26] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] font-bold font-display">
                P
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  Director — Mohammad Usman Ahmad
                </h4>
                <p className="text-xs text-[#d4af37] font-medium">
                  Prime Studio Leadership
                </p>
              </div>
            </div>
            <p className="text-xs text-[#8e8e99] leading-relaxed">
              Every client project is architected and supervised directly under studio leadership, ensuring enterprise-standard code quality, precision design, and verified business conversion.
            </p>
            <div className="pt-2 border-t border-[#1c1c28] flex items-center gap-2 text-xs text-[#d1d1d6]">
              <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>primewebstudio12@gmail.com</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#12121a] border border-[#1f1f2e] space-y-2">
            <h5 className="text-xs font-semibold text-white">Prefer an In-Depth Project Brief?</h5>
            <p className="text-[11px] text-[#8e8e99]">
              If you have specific requirements, launch our interactive 8-step project discovery wizard.
            </p>
            <button
              onClick={onOpenDiscovery}
              className="text-xs font-semibold text-[#d4af37] hover:underline inline-block pt-1"
            >
              Open Interactive Discovery Wizard →
            </button>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 rounded-2xl bg-[#0b0b10] border border-[#222232] p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">
                Initiate Project Consultation
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="contact-name-input" className="text-xs text-[#a1a1aa] block mb-1">Your Name *</label>
                  <input
                    id="contact-name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alexander Vance"
                    className="w-full px-3.5 py-2 text-xs bg-[#12121b] border border-[#20202e] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-business-input" className="text-xs text-[#a1a1aa] block mb-1">Business Name *</label>
                  <input
                    id="contact-business-input"
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Vance Logistics Corp"
                    className="w-full px-3.5 py-2 text-xs bg-[#12121b] border border-[#20202e] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email-input" className="text-xs text-[#a1a1aa] block mb-1">Email Address *</label>
                  <input
                    id="contact-email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alexander@vancelogistics.com"
                    className="w-full px-3.5 py-2 text-xs bg-[#12121b] border border-[#20202e] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone-input" className="text-xs text-[#a1a1aa] block mb-1">Phone / WhatsApp Number</label>
                  <input
                    id="contact-phone-input"
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +1 (555) 392-1084"
                    className="w-full px-3.5 py-2 text-xs bg-[#12121b] border border-[#20202e] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="contact-businesstype-select" className="text-xs text-[#a1a1aa] block mb-1">Business Type</label>
                  <select
                    id="contact-businesstype-select"
                    value={formData.businessType}
                    onChange={e => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-[#12121b] border border-[#20202e] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    {businessTypes.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-website-input" className="text-xs text-[#a1a1aa] block mb-1">Current Website (if active)</label>
                  <input
                    id="contact-website-input"
                    type="text"
                    value={formData.website}
                    onChange={e => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-3.5 py-2 text-xs bg-[#12121b] border border-[#20202e] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-need-select" className="text-xs text-[#a1a1aa] block mb-1">What do you need?</label>
                <select
                  id="contact-need-select"
                  value={formData.whatDoYouNeed}
                  onChange={e => setFormData({ ...formData, whatDoYouNeed: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#12121b] border border-[#20202e] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                >
                  {needsOptions.map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message-input" className="text-xs text-[#a1a1aa] block mb-1">Your Project Message & Goals</label>
                <textarea
                  id="contact-message-input"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your current business operations, customer journey, and what results you expect from your new digital system..."
                  className="w-full p-3 text-xs bg-[#12121b] border border-[#20202e] rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#c5a059] text-[#07070a] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start the Conversation</span>
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-[#162216] border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Message Received by Prime Studio
              </h4>
              <p className="text-xs text-[#b8b8c2] max-w-sm mx-auto">
                Thank you, {formData.name}. Director Mohammad Usman Ahmad will review your request for <strong>{formData.businessName}</strong> and follow up within one business day.
              </p>
              <div className="p-3.5 rounded-lg bg-[#14141e] border border-[#222232] text-left max-w-md mx-auto text-xs text-[#a1a1aa] space-y-1">
                <p><strong className="text-white">Business Type:</strong> {formData.businessType}</p>
                <p><strong className="text-white">Selected Scope:</strong> {formData.whatDoYouNeed}</p>
                <p><strong className="text-white">Contact:</strong> {formData.email}</p>
              </div>
              <button
                type="button"
                onClick={() => { setSubmitted(false); }}
                className="text-xs text-[#d4af37] hover:underline pt-2 block mx-auto cursor-pointer"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
