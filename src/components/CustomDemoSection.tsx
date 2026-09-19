import React from 'react';
import { Sparkles, Eye, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export const CustomDemoSection: React.FC<{ onNavigateDemos: () => void; onOpenDiscovery: () => void }> = ({
  onNavigateDemos,
  onOpenDiscovery
}) => {
  const demoSteps = [
    { num: '01', title: 'Business Research', desc: 'We analyze your local market, services, and pricing model.' },
    { num: '02', title: 'Brand Analysis', desc: 'We evaluate your logos, assets, and visual positioning.' },
    { num: '03', title: 'Custom Concept', desc: 'We build a tailored visual system reflecting your brand.' },
    { num: '04', title: 'Interactive Demo', desc: 'You experience a clickable prototype before full build.' },
    { num: '05', title: 'Client Presentation', desc: 'We present the solution and confirm your feedback.' },
  ];

  return (
    <section id="custom-demo-feature" className="py-16 bg-[#08080c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#11111a] via-[#0d0d14] to-[#07070b] border border-[#d4af37]/30 p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle gold ambient glow */}
          <div className="absolute -right-24 -top-24 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181824] border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Prime Studio Sales Differentiator</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              We Show. We Don&apos;t Just Tell.
            </h2>

            <p className="text-sm sm:text-base text-[#b8b8c2] leading-relaxed">
              For qualified prospects, Prime Studio can prepare a custom website concept based on your exact business, brand assets, service offerings, geographic location, and specific customer journey.
              <span className="text-[#f3e5ab] font-medium"> See how your digital system will look and perform before committing to production.</span>
            </p>
          </div>

          {/* 5-Step Visual Demo Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 my-8">
            {demoSteps.map((step, idx) => (
              <div
                key={step.num}
                className="p-4 rounded-xl bg-[#14141e]/90 border border-[#222232] space-y-1 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#d4af37]">{step.num}</span>
                  {idx < demoSteps.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-[#555566] hidden lg:block" />
                  )}
                </div>
                <h4 className="text-xs font-bold text-white mt-1">{step.title}</h4>
                <p className="text-[11px] text-[#8e8e99] leading-tight">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={onNavigateDemos}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#08080a] hover:bg-[#e2bd46] flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>See Demo Examples</span>
            </button>
            <button
              onClick={onOpenDiscovery}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#1a1a26] text-white hover:bg-[#222232] border border-[#2c2c3e] transition-all"
            >
              Request Custom Demo for Your Business
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
