import React from 'react';
import { Globe, Layers, Zap, Bot, ShieldCheck, Database, CalendarCheck, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WebsiteFundamentals } from './WebsiteFundamentals';

interface ServicesViewProps {
  onSelectCategory: (id: string) => void;
  onOpenDiscovery: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onSelectCategory, onOpenDiscovery }) => {
  const coreServices = [
    {
      title: 'High-Performance Websites',
      tagline: 'Speed, Visual Hierarchy & Institutional Trust',
      desc: 'Bespoke front-end engineering with black-and-gold aesthetic standards, zero layout lag, and mathematical typography that reflects international quality.',
      features: ['GPU-Accelerated Smooth Animations', 'Mobile-First Responsive Layouts', 'Enterprise SEO & Structured Data', 'Zero-Downtime Cloud Deployment'],
      actionCategory: 'corporate'
    },
    {
      title: 'Lead Generation & Funnel Systems',
      tagline: 'High-Intent Inquiries & Immediate Dispatches',
      desc: 'Engineered conversion flows, multi-field quote calculators, address verification, and instant notifications to your sales reps via SMS and CRM.',
      features: ['Dynamic Cost & Savings Calculators', 'Geo-Targeted Service Area Validation', 'Sub-5-Second Lead Notifications', 'Google Ads & Meta Pixel Tracking'],
      actionCategory: 'lead-generation'
    },
    {
      title: 'Integrated Booking Engines',
      tagline: 'Real-Time Calendars & No-Show Elimination',
      desc: 'Frictionless appointment scheduling with real-time staff calendar sync, automated SMS and email reminders, and optional upfront deposits.',
      features: ['Bi-Directional Google/Outlook Sync', 'Custom Pre-Intake Questionnaires', 'Automated 24h & 2h SMS Reminders', 'Deposit & Payment Gateway Integration'],
      actionCategory: 'booking-systems'
    },
    {
      title: 'E-commerce & Storefront Architecture',
      tagline: 'Fast Catalog Discovery & Frictionless Checkout',
      desc: 'Complete digital storefronts with variant management, real-time inventory count, secure payment processing, and post-purchase tracking updates.',
      features: ['Instant Slide-Out Cart Experience', 'Multi-Payment Processing (Stripe, PayPal)', 'Automated Shipping & Tax Calculation', 'Abandoned Cart Recovery Pipelines'],
      actionCategory: 'ecommerce'
    },
    {
      title: 'AI Agents & Business Automation',
      tagline: '24/7 Telephone Receptionists & Smart Triage',
      desc: 'Domain-trained AI agents that answer phone calls, qualify high-ticket web visitors, triage inquiries, and schedule visits around the clock.',
      features: ['AI Voice Receptionist with Audio Logs', 'Conversational Lead Qualification', 'CRM & Google Sheets Auto-Sync', 'Automated Multi-Step Email Follow-ups'],
      actionCategory: 'ai-solutions'
    },
    {
      title: 'Custom Portals & Bespoke Systems',
      tagline: 'Tailored Workflows & Legacy Tool Bridges',
      desc: 'When generic platforms fall short, we build secure client portals, contractor management hubs, document upload vaults, and custom APIs.',
      features: ['Role-Based Authentication (RBAC)', 'Custom Webhook & API Middleware', 'Automated PDF Quote & Invoice Engines', 'Secure Multi-Tenant Architecture'],
      actionCategory: 'custom-systems'
    }
  ];

  return (
    <div id="services-page" className="py-12 space-y-16">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <span>Complete Solutions Spectrum</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Websites, Systems & Connected Automations
        </h1>
        <p className="text-base sm:text-lg text-[#b0b0ba] leading-relaxed">
          We don’t just create static pages. We architect interconnected digital ecosystems that capture demand, automate operational tasks, and empower your team.
        </p>
      </div>

      {/* 6 Core Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreServices.map((svc, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-[#0b0b10] border border-[#1f1f2d] hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.15)]"
          >
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#d4af37] tracking-wider uppercase">
                Capability 0{i + 1}
              </span>
              <h3 className="text-lg font-bold text-white">{svc.title}</h3>
              <p className="text-xs text-[#d4af37] font-medium">{svc.tagline}</p>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">{svc.desc}</p>

              <div className="space-y-1.5 pt-2">
                {svc.features.map((f, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#181824]">
              <button
                onClick={() => onSelectCategory(svc.actionCategory)}
                className="text-xs font-semibold text-[#f3e5ab] hover:text-[#d4af37] inline-flex items-center gap-1.5 group"
              >
                <span>Explore Solution Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Website Fundamentals & Marketing Ecosystem */}
      <div className="pt-4">
        <WebsiteFundamentals />
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-[#141420] via-[#101018] to-[#09090e] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white">
            Need a Tailored Combination of Systems?
          </h3>
          <p className="text-xs text-[#a1a1aa]">
            We frequently combine web frontends, booking calendars, CRM sync, and AI voice agents into a unified bespoke package.
          </p>
        </div>
        <button
          onClick={onOpenDiscovery}
          className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#c5a059] text-[#07070a] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all whitespace-nowrap"
        >
          Start Project Discovery →
        </button>
      </div>
    </div>
  );
};
