import React, { useState } from 'react';
import { BUSINESS_MODELS } from '../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const BusinessModelsSection: React.FC<{ onStartProject: () => void }> = ({ onStartProject }) => {
  const [selectedModel, setSelectedModel] = useState<string>('B2B');
  const activeModel = BUSINESS_MODELS.find(m => m.code === selectedModel) || BUSINESS_MODELS[0];

  return (
    <div id="business-models-component" className="rounded-2xl bg-[#0b0b11] border border-[#222232] p-6 sm:p-8 space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase mb-1">
          <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <span>Commercial Archetypes</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          B2B, B2C & Commercial Business Models
        </h3>
        <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1 max-w-2xl">
          Your business model dictates your website’s tone, user journey, conversion milestones, and system integrations.
        </p>
      </div>

      {/* Model Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#1d1d28] pb-4">
        {BUSINESS_MODELS.map((m) => (
          <button
            key={m.code}
            onClick={() => setSelectedModel(m.code)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              selectedModel === m.code
                ? 'bg-[#1b1b28] text-[#d4af37] border border-[#d4af37]/40 shadow-sm'
                : 'text-[#8e8e99] hover:text-white bg-[#0f0f16]'
            }`}
          >
            <span className="font-mono">{m.code}</span> — {m.title}
          </button>
        ))}
      </div>

      {/* Deep-Dive Card */}
      <div className="p-6 rounded-xl bg-[#12121b] border border-[#242436] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1f1f2d] pb-3">
          <div>
            <span className="text-xs font-mono text-[#d4af37]">{activeModel.code} ARCHITECTURE</span>
            <h4 className="text-lg font-bold text-white">{activeModel.title}</h4>
          </div>
          <p className="text-xs text-[#a1a1aa] max-w-md">{activeModel.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#8e8e99] uppercase">Typical Business Examples</span>
            <div className="space-y-1">
              {activeModel.examples.map((ex, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>{ex}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#d4af37] uppercase">Website Engineering Focus</span>
            <div className="space-y-1">
              {activeModel.websiteFocus.map((wf, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#f3e5ab]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>{wf}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-[#1e1e2c] flex justify-end">
          <button
            onClick={onStartProject}
            className="text-xs font-semibold text-[#d4af37] hover:underline inline-flex items-center gap-1"
          >
            <span>Configure a {activeModel.code} System</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
