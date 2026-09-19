import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenDiscovery: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDiscovery }) => {
  return (
    <footer id="main-footer" className="relative bg-[#040406] border-t border-[#1d1d26] pt-16 pb-12 overflow-hidden">
      {/* Subtle background ambient gold illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#1b1b24]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1d1d26] to-[#0c0c10] border border-[#d4af37]/40 flex items-center justify-center">
                <span className="font-display font-bold text-sm text-[#d4af37]">P</span>
              </div>
              <span className="font-display font-bold tracking-wider text-xl text-white">
                PRIME STUDIO
              </span>
            </div>
            <p className="text-sm font-medium text-[#d4af37] tracking-wide">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-xs text-[#a1a1aa] leading-relaxed max-w-sm">
              We don&apos;t just build websites. We build digital business systems engineered around how your company operates, captures leads, and scales.
            </p>
            <div className="pt-2">
              <button
                id="footer-start-project-btn"
                onClick={onOpenDiscovery}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[#1a1a24] hover:bg-[#232332] text-[#f3e5ab] border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-200"
              >
                <span>Start Project Discovery</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
              </button>
            </div>
          </div>

          {/* Business Types Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Business
            </h4>
            <ul className="space-y-2 text-xs text-[#a1a1aa]">
              <li>
                <button onClick={() => onNavigate('business-corporate')} className="hover:text-[#f3e5ab] transition-colors">
                  Corporate
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('business-lead-generation')} className="hover:text-[#f3e5ab] transition-colors">
                  Lead Generation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('business-ecommerce')} className="hover:text-[#f3e5ab] transition-colors">
                  E-commerce
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('business-real-estate')} className="hover:text-[#f3e5ab] transition-colors">
                  Real Estate
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('business-restaurants')} className="hover:text-[#f3e5ab] transition-colors">
                  Restaurants
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('business-service-businesses')} className="hover:text-[#f3e5ab] transition-colors">
                  Service Businesses
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-[#a1a1aa]">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#f3e5ab] transition-colors">
                  Websites
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('business-booking-systems')} className="hover:text-[#f3e5ab] transition-colors">
                  Booking Systems
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('business-lead-generation')} className="hover:text-[#f3e5ab] transition-colors">
                  Lead Systems
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-solutions')} className="hover:text-[#f3e5ab] transition-colors">
                  AI Chat Agents
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-solutions')} className="hover:text-[#f3e5ab] transition-colors">
                  AI Voice Receptionist
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-solutions')} className="hover:text-[#f3e5ab] transition-colors">
                  Business Automation
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-[#a1a1aa]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#f3e5ab] transition-colors">
                  About Prime Studio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-[#f3e5ab] transition-colors">
                  10-Step Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('demos')} className="hover:text-[#f3e5ab] transition-colors">
                  Interactive Demos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('what-we-need')} className="hover:text-[#f3e5ab] transition-colors">
                  Client Preparation Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#f3e5ab] transition-colors">
                  Contact Studio
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8f9099]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Prime Studio. All rights reserved.</p>
            <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded bg-[#111117] border border-[#23232f] text-[#d4af37] font-medium">
              <Sparkles className="w-3 h-3" />
              <span>Director — Mohammad Usman Ahmad</span>
            </div>
          </div>
          <p className="text-[11px] text-[#8e8e99] tracking-wider uppercase">
            Websites • Digital Systems • AI Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};
