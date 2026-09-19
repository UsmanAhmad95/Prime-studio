import React from 'react';
import { WEBSITE_FUNDAMENTALS, MARKETING_ECOSYSTEM_STEPS } from '../data/content';
import { Layers, Share2, ArrowRight } from 'lucide-react';

export const WebsiteFundamentals: React.FC = () => {
  return (
    <div id="website-fundamentals-component" className="space-y-16">
      {/* 1. Website Fundamentals */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span>Technical Foundations</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            What Makes a Professional Website?
          </h3>
          <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1 max-w-2xl">
            A high-performing digital system requires more than visual styling. It is built on ten synchronized technical and architectural fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {WEBSITE_FUNDAMENTALS.map((f) => (
            <div
              key={f.term}
              className="p-4 rounded-xl bg-[#0c0c12] border border-[#1d1d2b] hover:border-[#d4af37]/40 transition-all duration-200 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#d4af37]">{f.term}</span>
                <span className="text-[10px] text-[#70707a] font-mono">Standard</span>
              </div>
              <h5 className="text-xs font-bold text-white">{f.label}</h5>
              <p className="text-[11px] text-[#8e8e99] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Marketing Systems Ecosystem */}
      <div className="rounded-2xl bg-[#0b0b11] border border-[#222232] p-6 sm:p-8 space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span>Ecosystem Integration</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Your Website Is Part of Your Marketing System
          </h3>
          <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1 max-w-2xl">
            A website does not operate in a vacuum. It coordinates with your Google Business Profile, SEO, paid ads, CRM, and sales pipelines to maximize commercial return.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {MARKETING_ECOSYSTEM_STEPS.map((s, idx) => (
            <div
              key={s.step}
              className="p-4 rounded-xl bg-[#12121c] border border-[#20202e] flex flex-col justify-between h-36"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#d4af37]">{s.step}</span>
                <h5 className="text-xs font-bold text-white mt-1.5">{s.name}</h5>
              </div>
              <p className="text-[10px] text-[#8e8e99] leading-tight">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
