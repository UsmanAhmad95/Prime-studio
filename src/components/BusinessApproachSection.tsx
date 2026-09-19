import React, { useState } from 'react';
import { Utensils, Building, Sparkles, SunMedium, Factory, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ComparisonItem {
  id: string;
  business: string;
  icon: React.ComponentType<{ className?: string }>;
  contrastWith: string;
  journey: string;
  prioritySystem: string;
  primaryConversion: string;
  whyDifferent: string;
}

export const BusinessApproachSection: React.FC<{ onExploreCategory: (id: string) => void }> = ({ onExploreCategory }) => {
  const comparisons: ComparisonItem[] = [
    {
      id: 'restaurants',
      business: 'Restaurant & Hospitality',
      icon: Utensils,
      contrastWith: 'Real Estate Developer',
      journey: 'Hungry diner looks at photos → Scans digital menu with dietary tags → Books table or places pickup order in 60 seconds.',
      prioritySystem: 'Live table booking, mobile menu, one-tap Google directions & phone call.',
      primaryConversion: 'Immediate table reservation or online takeaway order.',
      whyDifferent: 'A restaurant lives on immediate sensory desire, fast table turnover, and location proximity—not lengthy multi-page investor brochures.'
    },
    {
      id: 'real-estate',
      business: 'Real Estate Developer',
      icon: Building,
      contrastWith: 'Restaurant',
      journey: 'High-net-worth investor reviews master plan → Examines unit floor plans & payment milestones → Schedules a private VIP site tour.',
      prioritySystem: 'Interactive master plan, downloadable architectural specs, WhatsApp VIP concierge & CRM routing.',
      primaryConversion: 'High-intent private viewing booking & brochure download.',
      whyDifferent: 'A developer sells six-figure to seven-figure investments requiring deep institutional credibility, interactive master plans, and sales agent routing.'
    },
    {
      id: 'booking-systems',
      business: 'Dental & Wellness Clinic',
      icon: Sparkles,
      contrastWith: 'E-commerce Brand',
      journey: 'Patient searches symptom or cosmetic procedure → Inspects verified doctor credentials & before-after proofs → Selects available slot on calendar.',
      prioritySystem: 'Direct calendar integration, intake questionnaires, automated SMS appointment reminders.',
      primaryConversion: 'Confirmed appointment on the doctor’s schedule with zero no-shows.',
      whyDifferent: 'A clinic requires trust, patient intake privacy, and strict calendar availability—not discount coupon carousels or shopping carts.'
    },
    {
      id: 'lead-generation',
      business: 'Solar Energy Contractor',
      icon: SunMedium,
      contrastWith: 'Corporate Manufacturer',
      journey: 'Homeowner lands on page → Inputs monthly electric bill in dynamic calculator → Uploads roof address → Dispatched to solar engineer.',
      prioritySystem: 'Interactive savings calculator, address eligibility verification, automated SMS dispatch to field sales.',
      primaryConversion: 'Pre-qualified quote request with utility bill data.',
      whyDifferent: 'A solar business needs aggressive lead qualification and immediate phone follow-up before the prospect calls another local contractor.'
    },
    {
      id: 'corporate',
      business: 'Corporate Manufacturer',
      icon: Factory,
      contrastWith: 'Solar Contractor',
      journey: 'Procurement officer verifies international ISO certifications & manufacturing tolerances → Reads case studies → Requests formal RFP.',
      prioritySystem: 'Technical capability spec sheets, compliance documentation, enterprise inquiry routing.',
      primaryConversion: 'Formal RFP submission & executive partnership consultation.',
      whyDifferent: 'A manufacturer sells on technical compliance, production capacity, and supply-chain reliability through a multi-month sales cycle.'
    }
  ];

  const [activeTab, setActiveTab] = useState<string>(comparisons[0].id);
  const activeItem = comparisons.find(c => c.id === activeTab) || comparisons[0];

  return (
    <section id="business-approach-section" className="py-20 bg-[#060608] relative overflow-hidden">
      {/* Divider line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-[#d4af37]" />
          <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
            Architectural Philosophy
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white max-w-3xl">
          We Don&apos;t Build Every Business the Same Way.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#a1a1aa] max-w-3xl leading-relaxed">
          A restaurant doesn&apos;t need the same digital system as a real estate developer. 
          A dental clinic doesn&apos;t need the same customer journey as an e-commerce brand. 
          A solar company doesn&apos;t need the same website as a corporate manufacturer.
          <br className="hidden sm:inline" />
          <span className="text-[#f3e5ab] font-medium"> Your website should be built around your business — not the other way around.</span>
        </p>
      </div>

      {/* Interactive Switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal tabs on desktop, scrolling on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-[#1f1f2a]">
          {comparisons.map((item) => {
            const Icon = item.icon;
            const isSelected = item.id === activeTab;
            return (
              <button
                key={item.id}
                id={`approach-tab-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1c1c27] text-[#d4af37] border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                    : 'text-[#8e8e99] hover:text-[#d1d1d6] hover:bg-[#121217]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.business}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Business Contrast Detail View */}
        <div className="mt-8 rounded-2xl bg-[#0b0b10] border border-[#222230] p-6 sm:p-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left summary */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181822] border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono">
                <span>Contrast vs. {activeItem.contrastWith}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {activeItem.business}
              </h3>
              <p className="text-sm text-[#b0b0ba] leading-relaxed">
                {activeItem.whyDifferent}
              </p>
              
              <div className="pt-2">
                <button
                  id={`approach-explore-${activeItem.id}`}
                  onClick={() => onExploreCategory(activeItem.id)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] hover:text-[#f3e5ab] group"
                >
                  <span>Explore {activeItem.business} Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right comparison metrics */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4.5 rounded-xl bg-[#12121a] border border-[#20202e] space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-wider font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>The Real Customer Journey</span>
                </div>
                <p className="text-xs text-[#d1d1d6] leading-relaxed">
                  {activeItem.journey}
                </p>
              </div>

              <div className="p-4.5 rounded-xl bg-[#12121a] border border-[#20202e] space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-wider font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Essential Integrated Systems</span>
                </div>
                <p className="text-xs text-[#d1d1d6] leading-relaxed">
                  {activeItem.prioritySystem}
                </p>
              </div>

              <div className="sm:col-span-2 p-4.5 rounded-xl bg-gradient-to-r from-[#14141e] to-[#0f0f17] border border-[#d4af37]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-[#a1a1aa] uppercase">
                    Primary Conversion Metric
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    {activeItem.primaryConversion}
                  </p>
                </div>
                <button
                  onClick={() => onExploreCategory(activeItem.id)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#1e1e2c] hover:bg-[#252538] text-[#f3e5ab] border border-[#d4af37]/30 transition-colors whitespace-nowrap self-start sm:self-center"
                >
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
