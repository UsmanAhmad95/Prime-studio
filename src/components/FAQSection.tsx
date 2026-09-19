import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq-section-component" className="space-y-6">
      <div className="max-w-2xl space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase">
          <HelpCircle className="w-4 h-4 text-[#d4af37]" />
          <span>Client Inquiries & Clear Answers</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          Frequently Asked Questions
        </h3>
        <p className="text-xs sm:text-sm text-[#a1a1aa]">
          Straightforward answers about our digital systems, custom demos, timelines, and business integrations.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="rounded-xl bg-[#0b0b10] border border-[#1f1f2d] overflow-hidden transition-all duration-200"
            >
              <button
                id={`faq-toggle-${idx}`}
                onClick={() => toggleFAQ(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#12121b] transition-colors"
              >
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-[#d4af37] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#70707a] shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 pt-1 border-t border-[#171722] text-xs sm:text-sm text-[#b8b8c2] leading-relaxed animate-in fade-in duration-150">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
