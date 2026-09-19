import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroVisual } from './components/HeroVisual';
import { BusinessApproachSection } from './components/BusinessApproachSection';
import { BusinessTypesOverview } from './components/BusinessTypesOverview';
import { CategoryDetailView } from './components/CategoryDetailView';
import { ServicesView } from './components/ServicesView';
import { InteractiveAIPlayground } from './components/InteractiveAIPlayground';
import { WhatWeNeedSection } from './components/WhatWeNeedSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { CustomDemoSection } from './components/CustomDemoSection';
import { DemoPortfolioSection } from './components/DemoPortfolioSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { DiscoveryFormModal } from './components/DiscoveryFormModal';
import { BUSINESS_CATEGORIES, COMPANY_INFO } from './data/content';
import { BusinessCategoryKey } from './types';
import { ArrowRight, Sparkles, ArrowUpRight, ShieldCheck, CheckCircle2, ChevronRight, Layers, Bot, Zap, Globe, Target, Building2 } from 'lucide-react';

const VALID_VIEWS = new Set([
  'home',
  'business-types',
  'services',
  'ai-solutions',
  'what-we-need',
  'process',
  'demos',
  'contact',
  'business-corporate',
  'business-lead-generation',
  'business-ecommerce',
  'business-real-estate',
  'business-restaurants',
  'business-service-businesses',
  'business-booking-systems',
  'business-content-blog',
  'business-custom-systems',
]);

export default function App() {
  const [activeView, setActiveView] = useState<string>(() => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (!hash) return 'home';
    if (VALID_VIEWS.has(hash)) return hash;
    return 'not-found';
  });
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState<boolean>(false);

  // Synchronize hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setActiveView('home');
      } else if (VALID_VIEWS.has(hash)) {
        setActiveView(hash);
      } else {
        setActiveView('not-found');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update dynamic page title
  useEffect(() => {
    const titles: Record<string, string> = {
      'home': 'Prime Studio — Websites, Digital Business Systems & AI Solutions',
      'services': 'Engineering Services & Systems | Prime Studio',
      'business-types': 'Digital Systems by Business Model | Prime Studio',
      'ai-solutions': 'AI Solutions & Autonomous Workflows | Prime Studio',
      'what-we-need': 'What We Need From You | Prime Studio',
      'process': 'Production Process & Methodology | Prime Studio',
      'demos': 'Interactive Demo Portfolio & Concepts | Prime Studio',
      'contact': 'Project Consultation & Inquiry | Prime Studio',
      'not-found': 'Route Not Found | Prime Studio',
    };

    if (activeView.startsWith('business-')) {
      const catId = activeView.replace('business-', '');
      const foundCat = BUSINESS_CATEGORIES.find(c => c.id === catId);
      if (foundCat) {
        document.title = `${foundCat.name} Systems | Prime Studio`;
        return;
      }
    }

    document.title = titles[activeView] || 'Prime Studio — Websites, Digital Business Systems & AI Solutions';
  }, [activeView]);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const handleNavigate = (view: string) => {
    setActiveView(view);
    if (view === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = view;
    }
  };

  const handleSelectCategory = (id: string) => {
    handleNavigate(`business-${id}`);
  };

  const handleOpenDiscovery = () => {
    setIsDiscoveryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#060608] text-[#f4f4f7] flex flex-col selection:bg-[#d4af37]/25 selection:text-[#f3e5ab]">
      {/* Sticky Global Navigation */}
      <Navbar
        activeView={activeView}
        setActiveView={handleNavigate}
        onOpenDiscovery={handleOpenDiscovery}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-20">
        {/* VIEW: HOME */}
        {activeView === 'home' && (
          <div>
            {/* HERO SECTION */}
            <section id="hero-section" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
              {/* Subtle gold ambient glow in background */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#d4af37]/5 blur-[140px] rounded-full pointer-events-none" />
              <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Left Column: Headlines & Primary Pitch */}
                  <div className="lg:col-span-6 space-y-6 text-left">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151520] border border-[#d4af37]/35 text-[#d4af37] text-xs font-mono tracking-wide">
                      <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Websites • Digital Business Systems • AI Solutions</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                      Your Business Deserves More Than Just a Website.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-base sm:text-lg text-[#b8b8c2] leading-relaxed max-w-xl">
                      We build professional websites, digital business systems and AI-powered experiences designed around the way your business actually works.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                      <button
                        id="hero-explore-solutions-btn"
                        onClick={() => handleNavigate('services')}
                        className="px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#c5a059] text-[#08080a] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Explore Our Solutions</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        id="hero-view-business-types-btn"
                        onClick={() => handleNavigate('business-types')}
                        className="px-6 py-3.5 rounded-lg text-xs font-semibold bg-[#14141d] hover:bg-[#1c1c28] text-white border border-[#272738] hover:border-[#d4af37]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>View Business Types</span>
                        <ChevronRight className="w-4 h-4 text-[#d4af37]" />
                      </button>
                    </div>

                    {/* Credibility Line */}
                    <div className="pt-6 border-t border-[#1b1b26]">
                      <p className="text-xs text-[#8e8e99] font-mono tracking-wider uppercase">
                        {COMPANY_INFO.credibilityLine}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Hero Visual — Abstract 3D Connected Ecosystem */}
                  <div className="lg:col-span-6">
                    <HeroVisual />
                  </div>
                </div>
              </div>
            </section>

            {/* BUSINESS APPROACH SECTION ("We Don't Build Every Business the Same Way") */}
            <BusinessApproachSection onExploreCategory={handleSelectCategory} />

            {/* BUSINESS TYPES INTERACTIVE PREVIEW */}
            <section id="home-business-types" className="py-20 bg-[#07070a] relative border-t border-[#161622]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase">
                      <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                      <span>Dedicated Business Architectures</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                      Built Around Your Exact Commercial Model
                    </h2>
                    <p className="text-xs sm:text-sm text-[#a1a1aa]">
                      Explore the specialized digital systems engineered for each industry vertical.
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigate('business-types')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:underline whitespace-nowrap self-start md:self-end"
                  >
                    <span>View All Business Models</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 9 Category Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {BUSINESS_CATEGORIES.map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.id)}
                      className="group p-6 rounded-2xl bg-[#0b0b10] border border-[#1e1e2c] hover:border-[#d4af37]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.2)] hover:-translate-y-1"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-[#d4af37] tracking-wider uppercase">
                            Vertical
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-[#70707a] group-hover:text-[#d4af37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                          {cat.name}
                        </h3>
                        <p className="text-xs text-[#a1a1aa] line-clamp-2 leading-relaxed">
                          {cat.oneLineDesc}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#181824] flex items-center justify-between text-xs font-medium text-[#8e8e99] group-hover:text-[#f3e5ab]">
                        <span>View System Details</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CUSTOM DEMO SYSTEM ("We Show. We Don't Just Tell.") */}
            <CustomDemoSection
              onNavigateDemos={() => handleNavigate('demos')}
              onOpenDiscovery={handleOpenDiscovery}
            />

            {/* AI SOLUTIONS PREVIEW SECTION */}
            <section id="home-ai-section" className="py-20 bg-[#060609] relative border-t border-[#161622]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase">
                      <Bot className="w-4 h-4 text-[#d4af37]" />
                      <span>Applied Artificial Intelligence</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                      AI That Works With Your Business
                    </h2>
                    <p className="text-xs sm:text-sm text-[#a1a1aa]">
                      AI should do more than answer questions. It should help your business respond, qualify, book, organize and follow up.
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigate('ai-solutions')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:underline self-start md:self-end"
                  >
                    <span>Open Interactive AI Playground</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <InteractiveAIPlayground onStartAIProject={handleOpenDiscovery} />
              </div>
            </section>

            {/* 10-STEP PROCESS SECTION */}
            <section id="home-process" className="py-20 bg-[#07070b] relative border-t border-[#161622]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ProcessTimeline onStartProject={handleOpenDiscovery} />
              </div>
            </section>

            {/* DEMO PORTFOLIO PREVIEW */}
            <section id="home-demos" className="py-20 bg-[#060609] relative border-t border-[#161622]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase">
                      <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                      <span>Interactive Demonstrations</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                      Explore Our Demo Concepts
                    </h2>
                    <p className="text-xs sm:text-sm text-[#a1a1aa]">
                      Browse concept platforms demonstrating conversion funnels, floor plan viewers, and live booking architectures.
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigate('demos')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:underline self-start md:self-end"
                  >
                    <span>View All Portfolio Demos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <DemoPortfolioSection onStartProject={handleOpenDiscovery} />
              </div>
            </section>

            {/* FAQS */}
            <section id="home-faq" className="py-20 bg-[#07070a] relative border-t border-[#161622]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FAQSection />
              </div>
            </section>

            {/* FINAL BRAND STATEMENT (Prompt requirement #46) */}
            <section id="final-brand-statement" className="py-24 bg-gradient-to-b from-[#09090f] to-[#040407] border-t border-[#1a1a26] text-center relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none" />

              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
                <div className="w-10 h-10 rounded-xl bg-[#14141e] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mx-auto">
                  <Sparkles className="w-5 h-5" />
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Your website should do more than exist.
                </h2>

                <p className="text-base sm:text-xl text-[#d4af37] max-w-2xl mx-auto font-medium">
                  It should explain your business, build trust, capture opportunities and help your customers take action.
                </p>

                <p className="text-sm sm:text-base text-[#a1a1aa] max-w-xl mx-auto">
                  {COMPANY_INFO.closingSub}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleOpenDiscovery}
                    className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#c5a059] text-[#07070a] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <span>Start Your Project</span>
                  </button>

                  <button
                    onClick={() => handleNavigate('contact')}
                    className="px-6 py-4 rounded-xl text-xs font-semibold bg-[#12121b] text-white hover:bg-[#1a1a26] border border-[#272738] transition-all cursor-pointer"
                  >
                    <span>Direct Studio Inquiry</span>
                  </button>
                </div>
              </div>
            </section>

            {/* DIRECT CONTACT SECTION & PROJECT TIMELINE */}
            <section id="home-contact" className="py-20 bg-[#050508] relative border-t border-[#181824]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ContactSection onOpenDiscovery={handleOpenDiscovery} />
              </div>
            </section>
          </div>
        )}

        {/* VIEW: BUSINESS TYPES OVERVIEW */}
        {activeView === 'business-types' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BusinessTypesOverview
              onSelectCategory={handleSelectCategory}
              onStartProject={handleOpenDiscovery}
            />
          </div>
        )}

        {/* VIEW: SPECIFIC CATEGORY DETAIL */}
        {activeView.startsWith('business-') && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CategoryDetailView
              categoryId={activeView.replace('business-', '') as BusinessCategoryKey}
              onBack={() => handleNavigate('business-types')}
              onSelectCategory={handleSelectCategory}
              onStartProject={handleOpenDiscovery}
            />
          </div>
        )}

        {/* VIEW: SERVICES */}
        {activeView === 'services' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesView
              onSelectCategory={handleSelectCategory}
              onOpenDiscovery={handleOpenDiscovery}
            />
          </div>
        )}

        {/* VIEW: AI SOLUTIONS */}
        {activeView === 'ai-solutions' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase">
                <Bot className="w-4 h-4 text-[#d4af37]" />
                <span>AI Engineering & Business Systems</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                AI That Works With Your Business
              </h1>
              <p className="text-base sm:text-lg text-[#b8b8c2] leading-relaxed">
                AI should do more than answer questions. It should help your business respond, qualify, book, organize and follow up.
              </p>
            </div>

            <InteractiveAIPlayground onStartAIProject={handleOpenDiscovery} />
          </div>
        )}

        {/* VIEW: WHAT WE NEED */}
        {activeView === 'what-we-need' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <WhatWeNeedSection onStartDiscovery={handleOpenDiscovery} />
          </div>
        )}

        {/* VIEW: PROCESS */}
        {activeView === 'process' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
            <ProcessTimeline onStartProject={handleOpenDiscovery} />
            <CustomDemoSection
              onNavigateDemos={() => handleNavigate('demos')}
              onOpenDiscovery={handleOpenDiscovery}
            />
          </div>
        )}

        {/* VIEW: DEMOS */}
        {activeView === 'demos' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                <span>Interactive Concept Portfolio</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Demo Portfolio & Concepts
              </h1>
              <p className="text-base sm:text-lg text-[#b8b8c2] leading-relaxed">
                Every project concept demonstrates specific conversion flows, interactive modules, floor plan viewers, and live booking architectures.
              </p>
            </div>

            <DemoPortfolioSection onStartProject={handleOpenDiscovery} />
          </div>
        )}

        {/* VIEW: CONTACT */}
        {activeView === 'contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <ContactSection onOpenDiscovery={handleOpenDiscovery} />
          </div>
        )}

        {/* VIEW: 404 NOT FOUND */}
        {activeView === 'not-found' && (
          <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono">
              <span>SYSTEM CODE 404</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Requested Studio Route Not Found
            </h1>
            <p className="text-sm sm:text-base text-[#a1a1aa] max-w-lg mx-auto leading-relaxed">
              The digital architecture path you requested does not exist or has been relocated. Return to the home overview or select a core system area below.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => handleNavigate('home')}
                className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#c5a059] text-[#07070a] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
              >
                Return to Home
              </button>
              <button
                onClick={() => handleNavigate('services')}
                className="px-6 py-3 rounded-lg text-xs font-semibold bg-[#12121b] border border-[#272738] text-white hover:border-[#d4af37]/40 cursor-pointer"
              >
                View Services
              </button>
              <button
                onClick={() => handleNavigate('business-types')}
                className="px-6 py-3 rounded-lg text-xs font-semibold bg-[#12121b] border border-[#272738] text-white hover:border-[#d4af37]/40 cursor-pointer"
              >
                Explore Business Models
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDiscovery={handleOpenDiscovery}
      />

      {/* Interactive 8-Step Discovery Form Modal */}
      <DiscoveryFormModal
        isOpen={isDiscoveryOpen}
        onClose={() => setIsDiscoveryOpen(false)}
      />
    </div>
  );
}
