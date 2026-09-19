import React from 'react';
import { BusinessCategory, BusinessCategoryKey } from '../types';
import { BUSINESS_CATEGORIES } from '../data/content';
import { CheckCircle2, ArrowRight, Layers, ArrowLeft, Globe, Target, Building2, ShoppingBag, Utensils, Wrench, CalendarCheck, FileText, Cpu } from 'lucide-react';
import { LeadConversionFlow } from './LeadConversionFlow';
import { EcommerceFlow } from './EcommerceFlow';
import { RealEstateTabs } from './RealEstateTabs';
import { BookingSystemFlow } from './BookingSystemFlow';

interface CategoryDetailViewProps {
  categoryId: BusinessCategoryKey;
  onBack: () => void;
  onSelectCategory: (id: BusinessCategoryKey) => void;
  onStartProject: () => void;
}

export const CategoryDetailView: React.FC<CategoryDetailViewProps> = ({
  categoryId,
  onBack,
  onSelectCategory,
  onStartProject
}) => {
  const category = BUSINESS_CATEGORIES.find(c => c.id === categoryId) || BUSINESS_CATEGORIES[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'corporate': return Building2;
      case 'lead-generation': return Target;
      case 'ecommerce': return ShoppingBag;
      case 'real-estate': return Building2;
      case 'restaurants': return Utensils;
      case 'service-businesses': return Wrench;
      case 'booking-systems': return CalendarCheck;
      case 'content-blog': return FileText;
      case 'custom-systems': return Cpu;
      default: return Globe;
    }
  };

  const Icon = getCategoryIcon(category.id);

  return (
    <div id="category-detail-page" className="py-12 space-y-12">
      {/* Top Breadcrumb & Back */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1c1c28] pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#a1a1aa] hover:text-[#f3e5ab] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Business Types</span>
        </button>

        {/* Quick sibling category switcher */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {BUSINESS_CATEGORIES.map(c => (
            <button
              key={c.id}
              onClick={() => onSelectCategory(c.id)}
              className={`px-2.5 py-1 rounded text-[11px] font-medium whitespace-nowrap transition-colors ${
                c.id === category.id
                  ? 'bg-[#1e1e2d] text-[#d4af37] border border-[#d4af37]/40'
                  : 'text-[#8e8e99] hover:text-white bg-[#0e0e14]'
              }`}
            >
              {c.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Header for this Category */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono">
          <Icon className="w-3.5 h-3.5" />
          <span>Specialized Digital Business Solution</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {category.name}
        </h1>
        <p className="text-base sm:text-lg text-[#d4af37] font-medium">
          {category.subheadline}
        </p>
        <p className="text-sm sm:text-base text-[#b8b8c2] leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Main Structural Breakdown Grid: Suitable Businesses vs Typical Pages vs Core Systems */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 1. Suitable Businesses */}
        <div className="p-6 rounded-2xl bg-[#0b0b11] border border-[#20202e] space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#1c1c28] pb-3 mb-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Suitable Businesses
              </h3>
              <span className="text-xs text-[#d4af37] font-mono">{category.suitableBusinesses.length} Verticals</span>
            </div>
            <div className="space-y-2">
              {category.suitableBusinesses.map((biz, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#d1d1d6]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                  <span>{biz}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4 border-t border-[#1a1a26]">
            <p className="text-[11px] text-[#8e8e99]">
              Engineered to meet the exact customer trust and workflow requirements for these sectors.
            </p>
          </div>
        </div>

        {/* 2. Typical Pages */}
        <div className="p-6 rounded-2xl bg-[#0b0b11] border border-[#20202e] space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#1c1c28] pb-3 mb-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Typical Pages Included
              </h3>
              <span className="text-xs text-[#d4af37] font-mono">{category.typicalPages.length} Templates</span>
            </div>
            <div className="space-y-2">
              {category.typicalPages.map((page, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>{page}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4 border-t border-[#1a1a26]">
            <p className="text-[11px] text-[#8e8e99]">
              Every page is designed with clear content hierarchy, fast loading speeds, and responsive typography.
            </p>
          </div>
        </div>

        {/* 3. Core & Optional Systems */}
        <div className="p-6 rounded-2xl bg-[#0b0b11] border border-[#20202e] space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#1c1c28] pb-3 mb-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Integrated Systems
              </h3>
              <span className="text-xs text-[#d4af37] font-mono">Connected Tools</span>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#d4af37] block mb-1.5">Core Features</span>
                <div className="space-y-1.5">
                  {category.coreSystems.map((sys, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#d1d1d6]">
                      <Layers className="w-3 h-3 text-[#d4af37] mt-0.5 shrink-0" />
                      <span>{sys}</span>
                    </div>
                  ))}
                </div>
              </div>

              {category.optionalSystems.length > 0 && (
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase text-[#8e8e99] block mb-1.5">Optional Automations</span>
                  <div className="space-y-1.5">
                    {category.optionalSystems.map((sys, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#a1a1aa]">
                        <span className="text-[#686878]">+</span>
                        <span>{sys}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-[#1a1a26]">
            <p className="text-[11px] text-[#8e8e99]">
              Connected via secure APIs, Webhooks, and direct CRM integrations.
            </p>
          </div>
        </div>
      </div>

      {/* Dynamic Sub-Component for Category-Specific Workflows */}
      {category.id === 'lead-generation' && (
        <div className="pt-4">
          <LeadConversionFlow />
        </div>
      )}

      {category.id === 'ecommerce' && (
        <div className="pt-4">
          <EcommerceFlow />
        </div>
      )}

      {category.id === 'real-estate' && (
        <div className="pt-4">
          <RealEstateTabs onStartProject={onStartProject} />
        </div>
      )}

      {(category.id === 'booking-systems' || category.id === 'service-businesses') && (
        <div className="pt-4">
          <BookingSystemFlow onAddBooking={onStartProject} />
        </div>
      )}

      {/* Bottom Conversion Action Bar */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-[#141420] via-[#101018] to-[#0b0b12] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-mono text-[#d4af37] uppercase">Conversion Outcome</span>
          <h4 className="text-lg sm:text-xl font-bold text-white">
            {category.conversionFocus}
          </h4>
          <p className="text-xs text-[#a1a1aa]">
            Prime Studio engineers this complete digital system around how your company operates.
          </p>
        </div>

        <button
          onClick={onStartProject}
          className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#c5a059] text-[#07070a] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all whitespace-nowrap cursor-pointer"
        >
          {category.ctaText} →
        </button>
      </div>
    </div>
  );
};
