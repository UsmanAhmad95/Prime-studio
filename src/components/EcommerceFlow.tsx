import React, { useState } from 'react';
import { ShoppingBag, CreditCard, PackageCheck, Truck, BellRing, ArrowRight, ShieldCheck } from 'lucide-react';

export const EcommerceFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const ecomFlow = [
    { title: 'Discover Product', desc: 'Fast category filtering, faceted search & high-res lifestyle visuals.', icon: ShoppingBag },
    { title: 'Product Detail', desc: 'Size & color variants, real-time inventory count & verified reviews.', icon: ShoppingBag },
    { title: 'Add to Cart', desc: 'Slide-out quick cart, cross-sell bundles & free shipping tier bar.', icon: ShoppingBag },
    { title: 'Checkout', desc: 'One-page streamlined checkout with guest option and auto-address.', icon: CreditCard },
    { title: 'Secure Payment', desc: 'Stripe, Apple Pay, Google Pay, and localized bank rails.', icon: ShieldCheck },
    { title: 'Order Confirmation', desc: 'Instant order ID generation, PDF invoice & clear timeline.', icon: PackageCheck },
    { title: 'Fulfillment', desc: 'Automated warehouse dispatch, barcode scanning & carrier label.', icon: Truck },
    { title: 'Customer Notification', desc: 'Real-time tracking link dispatched via SMS & branded email.', icon: BellRing }
  ];

  return (
    <div className="rounded-2xl bg-[#0b0b10] border border-[#20202e] p-6 sm:p-8 space-y-8">
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-wider uppercase mb-1">
          <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <span>Frictionless Commerce Pipeline</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          The 8-Stage E-commerce Customer Journey
        </h3>
        <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1 max-w-2xl">
          Engineered for swift checkout velocity, minimal abandoned carts, and immediate order fulfillment updates.
        </p>
      </div>

      {/* Interactive Step Track */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {ecomFlow.map((step, idx) => {
          const isSelected = activeStep === idx;
          const Icon = step.icon;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-28 ${
                isSelected
                  ? 'bg-[#1b1b26] border-2 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                  : 'bg-[#0f0f15] border border-[#1e1e2b] hover:border-[#d4af37]/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#8e8e99]">0{idx + 1}</span>
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#d4af37]' : 'text-[#70707a]'}`} />
              </div>
              <p className="text-[11px] font-bold text-white line-clamp-2">
                {step.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detail Display */}
      <div className="p-5 rounded-xl bg-[#12121a] border border-[#232333] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-mono text-[#d4af37]">Stage 0{activeStep + 1} System Architecture</span>
          <h4 className="text-base font-bold text-white">{ecomFlow[activeStep].title}</h4>
          <p className="text-xs text-[#b8b8c2] max-w-xl">{ecomFlow[activeStep].desc}</p>
        </div>

        <div className="flex items-center gap-2">
          {activeStep > 0 && (
            <button
              onClick={() => setActiveStep(prev => prev - 1)}
              className="px-3 py-1.5 rounded-lg text-xs bg-[#191923] text-[#a1a1aa] hover:text-white"
            >
              Back
            </button>
          )}
          {activeStep < ecomFlow.length - 1 && (
            <button
              onClick={() => setActiveStep(prev => prev + 1)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#d4af37] text-[#07070a] hover:bg-[#e2bd46]"
            >
              Next Stage →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
