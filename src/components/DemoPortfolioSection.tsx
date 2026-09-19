import React, { useState, useEffect, useRef } from 'react';
import { DEMO_PROJECTS } from '../data/content';
import { DemoProject } from '../types';
import { Eye, ArrowUpRight, CheckCircle2, X, Sparkles, Layers, ShieldCheck, Monitor } from 'lucide-react';

export const DemoPortfolioSection: React.FC<{ onStartProject: () => void }> = ({ onStartProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeDemoModal, setActiveDemoModal] = useState<DemoProject | null>(null);
  const modalBackdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeDemoModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDemoModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDemoModal]);

  const categories = ['All', 'Lead Generation', 'Real Estate', 'Restaurant', 'Healthcare', 'Service Business', 'Corporate'];

  const filteredDemos = selectedCategory === 'All'
    ? DEMO_PROJECTS
    : DEMO_PROJECTS.filter(d => d.category === selectedCategory);

  return (
    <div id="demo-portfolio-component" className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#1f1f2b] pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-[#1b1b28] text-[#d4af37] border border-[#d4af37]/40 shadow-sm'
                : 'text-[#8e8e99] hover:text-white bg-[#0f0f15] border border-transparent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Demo Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDemos.map((demo) => (
          <div
            key={demo.id}
            id={`demo-card-${demo.id}`}
            className="group rounded-2xl bg-[#0b0b10] border border-[#1f1f2d] hover:border-[#d4af37]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.15)] hover:-translate-y-1"
          >
            {/* Mockup Preview Area */}
            <div 
              className="h-44 p-4 flex flex-col justify-between relative overflow-hidden"
              style={{ backgroundColor: demo.previewColor }}
            >
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#09090d]/80 text-[#d4af37] border border-[#d4af37]/30">
                  {demo.badge}
                </span>
                <span className="text-[10px] text-[#a1a1aa] font-medium bg-black/40 px-2 py-0.5 rounded">
                  {demo.category}
                </span>
              </div>

              <div className="relative z-10">
                <h4 className="text-lg font-bold text-white tracking-wide group-hover:text-[#f3e5ab] transition-colors">
                  {demo.name}
                </h4>
                <p className="text-xs text-[#b8b8c2] line-clamp-1">{demo.tagline}</p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-xs text-[#a1a1aa] leading-relaxed line-clamp-2">
                  {demo.description}
                </p>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#8e8e99] uppercase">Key Features</span>
                  <div className="space-y-1">
                    {demo.keyFeatures.slice(0, 2).map((kf, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-[#d1d1d6]">
                        <CheckCircle2 className="w-3 h-3 text-[#d4af37] shrink-0" />
                        <span className="line-clamp-1">{kf}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-3 border-t border-[#1a1a24] flex items-center justify-between">
                <button
                  onClick={() => setActiveDemoModal(demo)}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-[#14141e] group-hover:bg-[#1a1a28] text-[#f3e5ab] border border-[#232332] group-hover:border-[#d4af37]/40 transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Inspect Demo Architecture</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Demo Detail Inspection Modal */}
      {activeDemoModal && (
        <div 
          ref={modalBackdropRef}
          onClick={(e) => {
            if (e.target === modalBackdropRef.current) {
              setActiveDemoModal(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeDemoModal.name} concept details`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#0a0a0f] border border-[#262638] p-6 sm:p-8 space-y-6 text-white max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveDemoModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#8e8e99] hover:text-white hover:bg-[#161622] cursor-pointer transition-colors"
              aria-label="Close demo details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-[#171722]">
                  {activeDemoModal.badge}
                </span>
                <span className="text-xs text-[#8e8e99] font-mono">{activeDemoModal.category}</span>
              </div>
              <h3 className="text-2xl font-bold">{activeDemoModal.name}</h3>
              <p className="text-xs text-[#b8b8c2]">{activeDemoModal.tagline}</p>
            </div>

            <p className="text-xs sm:text-sm text-[#d1d1d6] leading-relaxed">
              {activeDemoModal.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#12121a] border border-[#20202e] space-y-2">
                <h5 className="text-xs font-bold text-[#d4af37] uppercase font-mono">
                  Engineered Features
                </h5>
                <div className="space-y-1.5">
                  {activeDemoModal.keyFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#12121a] border border-[#20202e] space-y-2">
                <h5 className="text-xs font-bold text-[#d4af37] uppercase font-mono">
                  Integrated Systems
                </h5>
                <div className="space-y-1.5">
                  {activeDemoModal.systemsIncluded.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                      <Layers className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-[#14141e] to-[#0f0f18] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-white">Need a system like {activeDemoModal.name}?</p>
                <p className="text-[11px] text-[#a1a1aa]">We build custom concepts tailored to your exact market and brand.</p>
              </div>
              <button
                onClick={() => {
                  setActiveDemoModal(null);
                  onStartProject();
                }}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#08080a] hover:bg-[#e2bd46] whitespace-nowrap"
              >
                Request Concept for Your Business →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
