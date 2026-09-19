import React, { useState } from 'react';
import { CheckSquare, Square, ChevronDown, ChevronUp, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import { WHAT_WE_NEED_CHECKLIST } from '../data/content';

export const WhatWeNeedSection: React.FC<{ onStartDiscovery: () => void }> = ({ onStartDiscovery }) => {
  // Track checked items for interactive readiness score
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'Business Information': true,
    'Products & Services': true,
    'Brand Identity': true
  });

  const toggleCheck = (itemName: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  const toggleCategory = (catName: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catName]: !prev[catName]
    }));
  };

  // Calculate readiness count
  const allItems = WHAT_WE_NEED_CHECKLIST.flatMap(c => c.items);
  const totalItems = allItems.length;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const readinessPercentage = Math.round((completedCount / totalItems) * 100);

  const handleCopyChecklist = () => {
    const text = WHAT_WE_NEED_CHECKLIST.map(cat => {
      const itemsList = cat.items.map(item => `[${checkedItems[item.name] ? 'x' : ' '}] ${item.name} (${item.required ? 'Required' : 'Optional'}) - ${item.desc}`).join('\n');
      return `### ${cat.category}\n${itemsList}`;
    }).join('\n\n');

    navigator.clipboard.writeText(`PRIME STUDIO — CLIENT ONBOARDING & ASSETS CHECKLIST\n\n${text}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Header & Readiness Tracker */}
      <div className="rounded-2xl bg-[#0d0d14] border border-[#232332] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span>Interactive Client Readiness Guide</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            What We Need From Your Business
          </h3>
          <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
            A great website starts with accurate business information, real brand assets and a clear understanding of your goals. Use this interactive checklist to prepare for your project.
          </p>
        </div>

        {/* Readiness Meter Card */}
        <div className="p-4 rounded-xl bg-[#14141e] border border-[#252538] w-full md:w-64 space-y-3 shrink-0">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#a1a1aa] font-medium">Assets Prepared</span>
            <span className="font-mono font-bold text-[#d4af37]">{completedCount} of {totalItems}</span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#20202e] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#c5a059] to-[#d4af37] transition-all duration-300"
              style={{ width: `${readinessPercentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={handleCopyChecklist}
              className="inline-flex items-center gap-1.5 text-[11px] text-[#d4af37] hover:underline"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Checklist Copied!' : 'Copy Full Checklist'}</span>
            </button>
            <button
              onClick={onStartDiscovery}
              className="text-[11px] font-semibold text-white hover:text-[#f3e5ab]"
            >
              Start Brief →
            </button>
          </div>
        </div>
      </div>

      {/* Accordion List of 9 Categories */}
      <div className="space-y-4">
        {WHAT_WE_NEED_CHECKLIST.map((cat) => {
          const isExpanded = !!expandedCategories[cat.category];
          const catItems = cat.items;
          const catCompleted = catItems.filter(i => checkedItems[i.name]).length;

          return (
            <div
              key={cat.category}
              className="rounded-xl bg-[#0a0a0f] border border-[#1f1f2d] overflow-hidden transition-all duration-200"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(cat.category)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-[#12121c] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                    {cat.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#d4af37] px-2 py-0.5 rounded bg-[#181824] border border-[#262638]">
                    {catCompleted}/{catItems.length} items
                  </span>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-[#a1a1aa]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#a1a1aa]" />
                )}
              </button>

              {/* Items List */}
              {isExpanded && (
                <div className="px-4 pb-5 sm:px-6 pt-1 border-t border-[#171722] grid grid-cols-1 md:grid-cols-2 gap-3">
                  {catItems.map((item) => {
                    const isChecked = !!checkedItems[item.name];

                    return (
                      <div
                        key={item.name}
                        onClick={() => toggleCheck(item.name)}
                        className={`p-3 rounded-lg border cursor-pointer transition-all duration-150 flex items-start gap-3 ${
                          isChecked
                            ? 'bg-[#151a15] border-emerald-500/40 text-[#f4f4f6]'
                            : 'bg-[#101017] border-[#1e1e2b] hover:border-[#2f2f42] text-[#d1d1d6]'
                        }`}
                      >
                        <div className="pt-0.5 shrink-0">
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Square className="w-4 h-4 text-[#666675]" />
                          )}
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-white">
                              {item.name}
                            </span>
                            {item.required ? (
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-300 font-mono">
                                Required
                              </span>
                            ) : (
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#20202c] text-[#8e8e99] font-mono">
                                If available
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-[#8e8e99] leading-tight">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#12121c] via-[#101018] to-[#0c0c12] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-white">
            Ready to Submit Your Project Information?
          </h4>
          <p className="text-xs text-[#a1a1aa] mt-0.5">
            Use our 8-step interactive discovery form to outline your business and receive a custom solution proposal.
          </p>
        </div>
        <button
          onClick={onStartDiscovery}
          className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#07070a] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all flex items-center gap-2 whitespace-nowrap"
        >
          <span>Launch Project Discovery Form</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
