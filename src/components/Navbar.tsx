import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onOpenDiscovery: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView, onOpenDiscovery }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const [mobileBusinessExpanded, setMobileBusinessExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setBusinessDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { label: 'Home', view: 'home' },
    { 
      label: 'Business Types', 
      view: 'business-types',
      hasDropdown: true
    },
    { label: 'Services', view: 'services' },
    { label: 'AI Solutions', view: 'ai-solutions' },
    { label: 'What We Need', view: 'what-we-need' },
    { label: 'Process', view: 'process' },
    { label: 'Demos', view: 'demos' },
    { label: 'Contact', view: 'contact' },
  ];

  const businessCategories = [
    { name: 'Corporate & Business', id: 'corporate' },
    { name: 'Lead Generation', id: 'lead-generation' },
    { name: 'E-commerce', id: 'ecommerce' },
    { name: 'Real Estate', id: 'real-estate' },
    { name: 'Restaurants & Hospitality', id: 'restaurants' },
    { name: 'Service Businesses', id: 'service-businesses' },
    { name: 'Booking Systems', id: 'booking-systems' },
    { name: 'Content & Blog', id: 'content-blog' },
    { name: 'Custom Digital Systems', id: 'custom-systems' }
  ];

  const handleNavClick = (view: string) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    setBusinessDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060608]/90 backdrop-blur-md border-b border-[#23232b]/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3'
          : 'bg-[#060608]/60 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1b1b22] to-[#0c0c0f] border border-[#d4af37]/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#d4af37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)]">
            <span className="font-display font-bold text-base tracking-tighter text-[#d4af37]">P</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] ml-0.5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold tracking-wider text-base sm:text-lg text-white group-hover:text-[#f3e5ab] transition-colors">
                PRIME STUDIO
              </span>
            </div>
            <p className="text-[10px] tracking-widest text-[#a1a1aa] font-medium uppercase hidden sm:block">
              Websites • Systems • AI
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeView === item.view || (item.hasDropdown && activeView.startsWith('business-'));

            if (item.hasDropdown) {
              return (
                <div 
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setBusinessDropdownOpen(true)}
                  onMouseLeave={() => setBusinessDropdownOpen(false)}
                >
                  <button
                    id={`nav-link-${item.view}`}
                    onClick={() => {
                      setBusinessDropdownOpen(prev => !prev);
                    }}
                    aria-haspopup="true"
                    aria-expanded={businessDropdownOpen}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all cursor-pointer ${
                      isActive
                        ? 'text-[#f3e5ab] bg-[#1a1a24]/60 border border-[#d4af37]/30'
                        : 'text-[#d1d1d6] hover:text-white hover:bg-[#121217]/50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-[#a1a1aa] transition-transform duration-200 ${businessDropdownOpen ? 'rotate-180 text-[#d4af37]' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {businessDropdownOpen && (
                    <div 
                      id="business-types-dropdown"
                      className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-[#0d0d12]/95 backdrop-blur-xl border border-[#262633] p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                    >
                      <div className="px-3 py-2 border-b border-[#21212c] mb-1">
                        <p className="text-[11px] font-semibold tracking-wider text-[#d4af37] uppercase">
                          Tailored Digital Systems
                        </p>
                        <p className="text-xs text-[#a1a1aa]">Explore by business model</p>
                      </div>
                      <div className="space-y-0.5">
                        {businessCategories.map((cat) => (
                          <button
                            key={cat.id}
                            id={`dropdown-item-${cat.id}`}
                            onClick={() => handleNavClick(`business-${cat.id}`)}
                            className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-[#d4d4dc] hover:text-[#f3e5ab] hover:bg-[#1c1c27] flex items-center justify-between group transition-colors"
                          >
                            <span>{cat.name}</span>
                            <ArrowUpRight className="w-3 h-3 text-[#a1a1aa] group-hover:text-[#d4af37] opacity-0 group-hover:opacity-100 transition-all" />
                          </button>
                        ))}
                      </div>
                      <div className="mt-2 pt-2 border-t border-[#21212c] px-2">
                        <button
                          onClick={() => handleNavClick('business-types')}
                          className="w-full text-center py-1.5 text-xs text-[#d4af37] hover:underline font-medium"
                        >
                          View All Categories Overview →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.label}
                id={`nav-link-${item.view}`}
                onClick={() => handleNavClick(item.view)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                  isActive
                    ? 'text-[#f3e5ab] bg-[#1a1a24]/60 border border-[#d4af37]/30'
                    : 'text-[#d1d1d6] hover:text-white hover:bg-[#121217]/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            id="nav-primary-cta"
            onClick={onOpenDiscovery}
            className="hidden sm:inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-300 bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#c5a059] text-[#08080a] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Mobile menu trigger */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-[#d1d1d6] hover:text-white hover:bg-[#171720] border border-[#23232f] cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden absolute inset-x-0 top-full bg-[#08080c]/98 backdrop-blur-2xl border-b border-[#242430] p-5 shadow-2xl max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => {
              const isActive = activeView === item.view || (item.hasDropdown && activeView.startsWith('business-'));

              if (item.hasDropdown) {
                return (
                  <div key={item.label} className="space-y-1">
                    <div className="flex items-center gap-1">
                      <button
                        id={`mobile-nav-${item.view}`}
                        onClick={() => handleNavClick(item.view)}
                        className={`flex-1 flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-[#1b1b24] text-[#d4af37] border border-[#d4af37]/30'
                            : 'text-[#e2e2e8] hover:bg-[#121217]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#a1a1aa]" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setMobileBusinessExpanded(prev => !prev)}
                        className="px-3 py-3 rounded-lg bg-[#14141e] border border-[#232332] text-[#d4af37] hover:bg-[#1c1c28]"
                        aria-label="Toggle business categories submenu"
                        aria-expanded={mobileBusinessExpanded}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileBusinessExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Submenu for Business Types on mobile */}
                    {mobileBusinessExpanded && (
                      <div className="pl-3 pr-1 py-2 space-y-1 border-l-2 border-[#d4af37]/30 ml-3 bg-[#0d0d14] rounded-r-lg">
                        {businessCategories.map((cat) => (
                          <button
                            key={cat.id}
                            id={`mobile-subnav-${cat.id}`}
                            onClick={() => handleNavClick(`business-${cat.id}`)}
                            className={`w-full text-left px-3 py-2 rounded text-xs transition-colors flex items-center justify-between ${
                              activeView === `business-${cat.id}`
                                ? 'text-[#d4af37] font-semibold bg-[#1a1a26]'
                                : 'text-[#a1a1aa] hover:text-white'
                            }`}
                          >
                            <span>{cat.name}</span>
                            <ArrowUpRight className="w-3 h-3 opacity-60" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  id={`mobile-nav-${item.view}`}
                  onClick={() => handleNavClick(item.view)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#1b1b24] text-[#d4af37] border border-[#d4af37]/30'
                      : 'text-[#e2e2e8] hover:bg-[#121217]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#a1a1aa]" />
                </button>
              );
            })}

            <div className="pt-3 border-t border-[#20202a]">
              <button
                id="mobile-nav-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDiscovery();
                }}
                className="w-full py-3 px-4 rounded-lg text-center text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#09090b] shadow-lg flex items-center justify-center gap-2"
              >
                <span>Start Your Project</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
