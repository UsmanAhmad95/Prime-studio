import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const ProcessTimeline: React.FC<{ onStartProject: () => void }> = ({ onStartProject }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <div id="process-timeline-component" className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span>Operational Methodology</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            From Business Idea to Digital System
          </h3>
          <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1 max-w-xl">
            A rigorous 10-stage execution cycle ensuring zero ambiguity, high architectural quality, and verified commercial conversion.
          </p>
        </div>
        <button
          onClick={onStartProject}
          className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#08080a] hover:bg-[#e2bd46] self-start md:self-end"
        >
          Begin Discovery
        </button>
      </div>

      {/* 10-Step Interactive Horizontal Scroller / Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
        {PROCESS_STEPS.map((step, idx) => {
          const isSelected = activeStepIndex === idx;
          return (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-3 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-28 ${
                isSelected
                  ? 'bg-[#1a1a26] border-2 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                  : 'bg-[#0f0f15] border border-[#1e1e2c] hover:border-[#d4af37]/40'
              }`}
            >
              <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-[#d4af37]' : 'text-[#70707a]'}`}>
                {step.number}
              </span>
              <div>
                <p className="text-xs font-bold text-white line-clamp-1">{step.title}</p>
                <p className="text-[9px] text-[#8e8e99] line-clamp-1 mt-0.5">{step.shortDesc}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep Dive on Active Step */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0b10] border border-[#222232] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#181824] text-[#d4af37] border border-[#252538]">
                Stage {activeStep.number} of 10
              </span>
              <span className="text-xs text-[#8e8e99] font-mono">{activeStep.shortDesc}</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              {activeStep.title} — {activeStep.shortDesc}
            </h4>
            <p className="text-xs sm:text-sm text-[#b8b8c2] leading-relaxed">
              {activeStep.detailedDesc}
            </p>
          </div>

          <div className="lg:col-span-4 p-4 rounded-xl bg-[#12121a] border border-[#222230] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] block">
              Stage Deliverables
            </span>
            <div className="space-y-1.5">
              {activeStep.deliverables.map((del, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
