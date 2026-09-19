import React from 'react';
import { BUSINESS_CATEGORIES } from '../data/content';
import { BusinessCategoryKey } from '../types';
import { Building2, Target, ShoppingBag, Utensils, Wrench, CalendarCheck, FileText, Cpu, ArrowRight, ArrowUpRight } from 'lucide-react';
import { BusinessModelsSection } from './BusinessModelsSection';

interface BusinessTypesOverviewProps {
  onSelectCategory: (id: BusinessCategoryKey) => void;
  onStartProject: () => void;
}

export const BusinessTypesOverview: React.FC<BusinessTypesOverviewProps> = ({
  onSelectCategory,
  onStartProject
}) => {
  const getIcon = (id: string) => {
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
      default: return Building2;
    }
  };

  return (
    <div id="business-types-overview-page" className="py-12 space-y-16">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <span>Tailored Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          What Type of Business Do You Run?
        </h1>
        <p className="text-base sm:text-lg text-[#b0b0ba] leading-relaxed">
          Every business has a different customer journey. Explore the digital systems that can be designed around your business model.
        </p>
      </div>

      {/* 9 Category Interactive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BUSINESS_CATEGORIES.map((cat) => {
          const Icon = getIcon(cat.id);

          return (
            <div
              key={cat.id}
              id={`category-card-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className="group p-6 rounded-2xl bg-[#0b0b10] border border-[#1f1f2d] hover:border-[#d4af37]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.2)] hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top gold accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#14141e] border border-[#232332] group-hover:border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#d4af37] font-medium mt-0.5">
                    {cat.tagline}
                  </p>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed mt-2 line-clamp-2">
                    {cat.oneLineDesc}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#181824] flex items-center justify-between text-xs font-semibold text-[#8e8e99] group-hover:text-[#f3e5ab] transition-colors">
                <span>View Full System Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 text-[#d4af37] transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Commercial Business Models (B2B, B2C, C2C, C2B, B2G) Section */}
      <div className="pt-6">
        <BusinessModelsSection onStartProject={onStartProject} />
      </div>
    </div>
  );
};
