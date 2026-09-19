import React, { useState } from 'react';
import { Building, Home, MapPin, Calendar, FileText, CheckCircle2, PhoneCall } from 'lucide-react';

export const RealEstateTabs: React.FC<{ onStartProject: () => void }> = ({ onStartProject }) => {
  const [activeTab, setActiveTab] = useState<'developers' | 'agencies' | 'projects'>('developers');

  return (
    <div className="rounded-2xl bg-[#0b0b10] border border-[#20202e] p-6 sm:p-8 space-y-6">
      {/* Subcategory Switcher */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#1f1f2a] pb-4">
        <button
          onClick={() => setActiveTab('developers')}
          className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'developers'
              ? 'bg-[#1a1a26] text-[#d4af37] border border-[#d4af37]/40 shadow-sm'
              : 'text-[#8e8e99] hover:text-white'
          }`}
        >
          Real Estate Developers
        </button>
        <button
          onClick={() => setActiveTab('agencies')}
          className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'agencies'
              ? 'bg-[#1a1a26] text-[#d4af37] border border-[#d4af37]/40 shadow-sm'
              : 'text-[#8e8e99] hover:text-white'
          }`}
        >
          Agencies & Top Agents
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'projects'
              ? 'bg-[#1a1a26] text-[#d4af37] border border-[#d4af37]/40 shadow-sm'
              : 'text-[#8e8e99] hover:text-white'
          }`}
        >
          Property Projects & Management
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'developers' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-in fade-in duration-200">
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#d4af37] tracking-wider uppercase">
              Large-Scale Master Planned Developments
            </span>
            <h4 className="text-xl font-bold text-white">
              Institutional Authority for Multi-Unit Communities
            </h4>
            <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed">
              Designed for luxury residential towers, commercial parks, and community developments. Emphasizes architectural vision, neighborhood master plans, unit layouts, construction milestones, and private sales gallery tours.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Interactive master plan & unit availability grids</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Gated architectural floor plan & PDF brochure downloads</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>VIP private site visit booking system synced with sales team</span>
              </div>
            </div>
            <button
              onClick={onStartProject}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#08080a] hover:bg-[#e2bd46]"
            >
              Build Developer Experience
            </button>
          </div>

          <div className="p-5 rounded-xl bg-[#12121b] border border-[#232333] space-y-3">
            <h5 className="text-xs font-mono text-[#d4af37] uppercase tracking-wider">Required Pages & Systems</h5>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#a1a1aa]">
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Master Plan</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Floor Plans (PDF)</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Amenities Map</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Payment Milestone Plans</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Construction Updates</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Site Visit Scheduler</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'agencies' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-in fade-in duration-200">
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#d4af37] tracking-wider uppercase">
              Brokerages & Elite Realtors
            </span>
            <h4 className="text-xl font-bold text-white">
              Search, High-Definition Tours & Instant Valuation Leads
            </h4>
            <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed">
              Engineered to showcase residential and commercial listings with advanced multi-parameter search (price, beds, neighborhood), virtual walkthrough embeds, and instant property valuation request funnels.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Fast search by price, property type, beds & square footage</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Instant property valuation request form for sellers</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>One-tap WhatsApp & phone consultation with designated listing agent</span>
              </div>
            </div>
            <button
              onClick={onStartProject}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#08080a] hover:bg-[#e2bd46]"
            >
              Build Agency Platform
            </button>
          </div>

          <div className="p-5 rounded-xl bg-[#12121b] border border-[#232333] space-y-3">
            <h5 className="text-xs font-mono text-[#d4af37] uppercase tracking-wider">Required Pages & Systems</h5>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#a1a1aa]">
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Buy / Sell / Rent</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Property Listings Catalog</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Property Valuation Funnel</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Agent Directory & Reviews</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Schedule Viewing Calendar</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Direct Agent WhatsApp</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'projects' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-in fade-in duration-200">
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#d4af37] tracking-wider uppercase">
              Property Management & Investor Portals
            </span>
            <h4 className="text-xl font-bold text-white">
              Operations, Maintenance & Investor Communications
            </h4>
            <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed">
              Digital hubs for asset managers and landlord portfolios. Supports tenant maintenance requests, lease inquiry funnels, financial return reporting, and investor document distribution.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Tenant onboarding and emergency maintenance reporting</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Investor financial dashboards and quarterly statement downloads</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#d1d1d6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Automated vacant unit leasing applications and background intake</span>
              </div>
            </div>
            <button
              onClick={onStartProject}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#08080a] hover:bg-[#e2bd46]"
            >
              Build Asset Management Portal
            </button>
          </div>

          <div className="p-5 rounded-xl bg-[#12121b] border border-[#232333] space-y-3">
            <h5 className="text-xs font-mono text-[#d4af37] uppercase tracking-wider">Required Pages & Systems</h5>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#a1a1aa]">
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Tenant Portal Login</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Maintenance Ticket System</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Investor Report Library</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Vacancy Application Form</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Automated Rent Reminders</div>
              <div className="p-2 rounded bg-[#171722] border border-[#21212f]">Emergency Dispatch Line</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
