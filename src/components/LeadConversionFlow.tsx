import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Smartphone, Mail, FileSpreadsheet, Share2, Users, Database } from 'lucide-react';

export const LeadConversionFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const funnelSteps = [
    {
      title: 'Targeted Visitor',
      stage: 'Traffic Influx',
      desc: 'High-intent search or ad traffic lands with an urgent need for your service.',
      badge: 'Step 1'
    },
    {
      title: 'High-Conversion Landing',
      stage: 'Authority Page',
      desc: 'Immediate proof, verified reviews, transparent scope, and zero friction.',
      badge: 'Step 2'
    },
    {
      title: 'High-Intent CTA Trigger',
      stage: 'Action Moment',
      desc: 'Visitor clicks "Request Emergency Quote", "Call Hotline", or WhatsApp.',
      badge: 'Step 3'
    },
    {
      title: 'Structured Capture',
      stage: 'Data Collection',
      desc: 'Multi-field quote calculator gathers scope, budget, location & photos.',
      badge: 'Step 4'
    },
    {
      title: 'Instant Dispatch',
      stage: 'Automated Routing',
      desc: 'Dispatches in <5 seconds to CRM, SMS, WhatsApp, and Google Sheets.',
      badge: 'Step 5'
    },
    {
      title: 'Rapid Sales Follow-up',
      stage: 'Closing Loop',
      desc: 'Sales rep contacts informed prospect while buying intent is at peak.',
      badge: 'Step 6'
    },
    {
      title: 'Paying Customer',
      stage: 'Revenue Realized',
      desc: 'Deal closed, contract signed, and review invitation dispatched.',
      badge: 'Goal'
    }
  ];

  return (
    <div className="rounded-2xl bg-[#0b0b10] border border-[#20202e] p-6 sm:p-8 space-y-8">
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase mb-1">
          <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <span>Interactive Conversion Architecture</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          The Lead Conversion Pipeline
        </h3>
        <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1 max-w-2xl">
          We don&apos;t just ask for an email. We engineer a frictionless pipeline that converts visitors into qualified, scheduled opportunities for your sales team.
        </p>
      </div>

      {/* Funnel Visual Pipeline */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {funnelSteps.map((step, idx) => {
          const isSelected = activeStep === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl text-left transition-all duration-200 cursor-pointer relative flex flex-col justify-between h-32 ${
                isSelected
                  ? 'bg-[#1a1a26] border-2 border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                  : 'bg-[#101016] border border-[#1e1e2b] hover:border-[#d4af37]/40 hover:bg-[#14141d]'
              }`}
            >
              <div>
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-[#d4af37] text-[#07070a]' : 'bg-[#1c1c28] text-[#8e8e99]'
                }`}>
                  {step.badge}
                </span>
                <p className="text-xs font-bold text-white mt-2 line-clamp-2">
                  {step.title}
                </p>
              </div>
              <p className="text-[10px] text-[#8e8e99] font-medium">
                {step.stage}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Step Deep-Dive Box */}
      <div className="p-5 rounded-xl bg-[#12121a] border border-[#252535] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#d4af37]">
              {funnelSteps[activeStep].badge} — {funnelSteps[activeStep].stage}
            </span>
          </div>
          <h4 className="text-base font-bold text-white">
            {funnelSteps[activeStep].title}
          </h4>
          <p className="text-xs text-[#b8b8c2] max-w-xl">
            {funnelSteps[activeStep].desc}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {activeStep > 0 && (
            <button
              onClick={() => setActiveStep(prev => prev - 1)}
              className="px-3 py-1.5 rounded-lg text-xs bg-[#1a1a24] text-[#a1a1aa] hover:text-white"
            >
              Previous
            </button>
          )}
          {activeStep < funnelSteps.length - 1 && (
            <button
              onClick={() => setActiveStep(prev => prev + 1)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#08080a] hover:bg-[#e2bd46]"
            >
              Next Step →
            </button>
          )}
        </div>
      </div>

      {/* Lead Delivery Channels Demonstration */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-[#0f0f15] border border-[#1e1e28] flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1a1a26] text-[#d4af37] flex items-center justify-center">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-semibold text-white">Instant Email Alert</h5>
            <p className="text-[11px] text-[#8e8e99]">Structured lead summary in inbox</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#0f0f15] border border-[#1e1e28] flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1a1a26] text-[#d4af37] flex items-center justify-center">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-semibold text-white">SMS & WhatsApp</h5>
            <p className="text-[11px] text-[#8e8e99]">Immediate phone ping to sales rep</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#0f0f15] border border-[#1e1e28] flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1a1a26] text-[#d4af37] flex items-center justify-center">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-semibold text-white">CRM Sync</h5>
            <p className="text-[11px] text-[#8e8e99]">HubSpot, Salesforce, Pipedrive</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#0f0f15] border border-[#1e1e28] flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1a1a26] text-[#d4af37] flex items-center justify-center">
            <FileSpreadsheet className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-semibold text-white">Google Sheets Backup</h5>
            <p className="text-[11px] text-[#8e8e99]">Automated timestamped logging</p>
          </div>
        </div>
      </div>
    </div>
  );
};
