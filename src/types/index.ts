export type BusinessCategoryKey = 
  | 'corporate'
  | 'lead-generation'
  | 'ecommerce'
  | 'real-estate'
  | 'restaurants'
  | 'service-businesses'
  | 'booking-systems'
  | 'content-blog'
  | 'custom-systems';

export interface BusinessCategory {
  id: BusinessCategoryKey;
  name: string;
  tagline: string;
  oneLineDesc: string;
  iconName: string;
  subheadline: string;
  description: string;
  suitableBusinesses: string[];
  typicalPages: string[];
  coreSystems: string[];
  optionalSystems: string[];
  conversionFocus: string;
  ctaText: string;
}

export type BusinessModelType = 'B2B' | 'B2C' | 'C2C' | 'C2B' | 'B2G';

export interface BusinessModel {
  code: BusinessModelType;
  title: string;
  description: string;
  examples: string[];
  websiteFocus: string[];
}

export interface AISolution {
  id: 'chat' | 'qualification' | 'booking' | 'voice' | 'automation';
  name: string;
  badge: string;
  tagline: string;
  description: string;
  capabilities: string[];
  businessBenefits: string[];
}

export interface DemoProject {
  id: string;
  name: string;
  category: 'Corporate' | 'Lead Generation' | 'E-commerce' | 'Real Estate' | 'Restaurant' | 'Service Business' | 'Healthcare' | 'AI Systems';
  tagline: string;
  description: string;
  keyFeatures: string[];
  systemsIncluded: string[];
  badge: string;
  metricsLabel: string;
  previewColor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ProjectDiscoveryData {
  businessName: string;
  ownerName: string;
  contactPerson: string;
  phone: string;
  email: string;
  businessAddress: string;
  websiteUrl: string;
  businessModel: BusinessModelType;
  servicesProducts: string;
  brandAssetsStatus: string[];
  websiteGoals: string[];
  requiredSystems: string[];
  aiRequirements: string[];
  targetAudience: string;
  leadDeliveryPreference: string[];
  budgetTimeline: string;
  additionalNotes: string;
}
