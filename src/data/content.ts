import { BusinessCategory, BusinessModel, AISolution, DemoProject, ProcessStep, FAQItem } from '../types';

export const COMPANY_INFO = {
  brand: 'Prime Studio',
  director: 'Mohammad Usman Ahmad',
  positioning: 'Websites • Digital Business Systems • AI Solutions',
  coreMessage: "We don't just build websites. We build digital systems around the way your business works.",
  credibilityLine: 'Websites • Lead Systems • E-commerce • Real Estate • Booking • AI • Automation',
  tagline: 'Websites • Digital Systems • AI Solutions',
  closingStatement: 'Your website should do more than exist. It should explain your business, build trust, capture opportunities and help your customers take action.',
  closingSub: 'Prime Studio builds the digital system around your business.',
  finalCta: "Let's Build Your Digital System.",
};

export const BUSINESS_CATEGORIES: BusinessCategory[] = [
  {
    id: 'corporate',
    name: 'Corporate & Business Websites',
    tagline: 'Authority, Trust & Institutional Credibility',
    oneLineDesc: 'Professional digital presence built to establish trust, authority and business credibility.',
    iconName: 'Building2',
    subheadline: 'Professional digital presence built to establish trust, authority and business credibility.',
    description: 'Corporate websites are designed for businesses that need a strong professional online presence and a clear way to explain who they are, what they do and why customers or partners should trust them.',
    suitableBusinesses: [
      'Construction companies',
      'Real estate developers',
      'Manufacturing companies',
      'IT & Software companies',
      'Consulting companies',
      'Marketing agencies',
      'Engineering companies',
      'Logistics companies',
      'Trading companies',
      'Accounting firms',
      'Law firms',
      'B2B companies',
      'Professional service firms'
    ],
    typicalPages: [
      'Home',
      'About Company',
      'Services & Capabilities',
      'Industries Served',
      'Projects / Portfolio',
      'Leadership & Team',
      'Client Testimonials & Case Studies',
      'FAQ',
      'Contact'
    ],
    coreSystems: [
      'Professional consultation inquiry forms',
      'Direct WhatsApp enterprise link',
      'Downloadable company profiles & brochures',
      'Executive team & board profiles',
      'Enterprise contact routing'
    ],
    optionalSystems: [
      'CRM integration (HubSpot, Salesforce, Pipedrive)',
      'Calendar booking for discovery calls',
      'Investor relations / news updates',
      'AI chatbot & lead qualification',
      'Analytics & conversion tracking dashboard'
    ],
    conversionFocus: 'High-trust institutional inquiries, RFP requests, and executive consultations.',
    ctaText: 'Explore Corporate Website Solution'
  },
  {
    id: 'lead-generation',
    name: 'Lead Generation Websites',
    tagline: 'High-Conversion Funnels & Instant Opportunities',
    oneLineDesc: 'Turn website visitors into qualified, high-intent business opportunities.',
    iconName: 'Target',
    subheadline: 'Turn website visitors into qualified business opportunities.',
    description: 'The purpose is not simply to provide passive information. The website is engineered around a specific high-value action: requesting a quote, calling directly, starting a WhatsApp inquiry, booking a consultation, or submitting a detailed project inquiry.',
    suitableBusinesses: [
      'Solar energy companies',
      'HVAC & AC repair companies',
      'Plumbing companies',
      'Roofing contractors',
      'Home builders & remodelers',
      'Commercial cleaning companies',
      'Pest-control companies',
      'Insurance brokers & agencies',
      'Attorneys & legal practices',
      'Private medical & dental clinics',
      'Real estate agents & brokers',
      'Business consultants & advisors',
      'Local specialized service businesses'
    ],
    typicalPages: [
      'Home (Conversion-Focused)',
      'Core Services Overview',
      'Dedicated Individual Service Pages',
      'Service Areas & Local Landing Pages',
      'About & Credentials',
      'Customer Reviews & Social Proof',
      'Projects / Before & After Case Studies',
      'FAQ',
      'Quote / Consultation Request Page',
      'Contact'
    ],
    coreSystems: [
      'Multi-field dynamic quote calculators',
      'Click-to-call & instant WhatsApp triggers',
      'Geo-targeted service area validation',
      'Instant SMS & email notifications upon submission',
      'Google Sheets & webhook integrations'
    ],
    optionalSystems: [
      'Automated CRM lead dispatch (HubSpot, Zapier)',
      'Automated follow-up SMS sequence',
      'AI lead qualification assistant',
      'Conversion tracking with Google Ads & Meta Pixel'
    ],
    conversionFocus: 'Visitor → Landing Page → High-Intent CTA → Instant Capture → Sales Dispatch.',
    ctaText: 'Build a Lead Generation System'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Websites',
    tagline: 'Frictionless Digital Storefronts & Repeat Sales',
    oneLineDesc: 'A complete digital storefront designed to help customers discover, purchase and return.',
    iconName: 'ShoppingBag',
    subheadline: 'A complete digital storefront designed to help customers discover, purchase and return.',
    description: 'Engineered for seamless product browsing, swift checkout velocity, secure payment gateways, inventory synchronization, and post-purchase customer retention.',
    suitableBusinesses: [
      'Apparel & clothing brands',
      'Consumer electronics & gadgets',
      'Furniture & home interior brands',
      'Jewelry & luxury accessories',
      'Cosmetics & skincare labels',
      'Specialty food & gourmet grocery',
      'Sports equipment & fitness gear',
      'Direct-to-consumer (D2C) brands'
    ],
    typicalPages: [
      'Home (Showcase & Collections)',
      'Shop / Catalog',
      'Category & Filter Pages',
      'Product Detail Pages (PDP)',
      'Cart & Quick Drawer',
      'Secure Multi-Step Checkout',
      'Customer Account & Order History',
      'Wishlist',
      'About & Brand Story',
      'Shipping, Returns & Privacy Policies'
    ],
    coreSystems: [
      'Product catalog & variant management (sizes, colors)',
      'Real-time inventory tracking',
      'Secure payment gateway integration (Stripe, PayPal, local gateways)',
      'Shipping zone & tax calculation',
      'Automated order confirmation & tracking emails'
    ],
    optionalSystems: [
      'Discount coupon & promotional rule engine',
      'Abandoned cart recovery workflows',
      'Customer reviews with photo uploads',
      'AI product recommendation assistant',
      'WhatsApp order notifications'
    ],
    conversionFocus: 'Product Discovery → Quick Add → Frictionless Checkout → Upsell & Retention.',
    ctaText: 'Build an E-commerce Experience'
  },
  {
    id: 'real-estate',
    name: 'Real Estate Digital Experiences',
    tagline: 'Immersive Discovery, Floor Plans & Site Visits',
    oneLineDesc: 'Property websites designed around discovery, trust, inquiries and site visits.',
    iconName: 'Building',
    subheadline: 'Property websites designed around discovery, trust, inquiries and site visits.',
    description: 'Built specifically for developers, agencies, and top agents who need to present multi-unit developments, individual luxury listings, master plans, and generate qualified viewing bookings.',
    suitableBusinesses: [
      'Real estate developers',
      'Commercial property firms',
      'Residential brokerage agencies',
      'High-end individual real estate agents',
      'Property investment funds',
      'Luxury vacation rental managers'
    ],
    typicalPages: [
      'Developer / Agency Home',
      'Portfolio & Projects Showcase',
      'Master Plan & Development Vision',
      'Individual Property / Unit Detail Pages',
      'Interactive Amenities & Neighborhood Map',
      'Architectural Floor Plans & Units',
      'Payment Plans & Financial Models',
      'Construction Milestone Updates',
      'Schedule a Private Viewing / Site Visit',
      'Contact & Sales Gallery Location'
    ],
    coreSystems: [
      'Advanced listing search & price/bedroom filters',
      'Interactive floor plan viewers & PDF brochures',
      'Site visit scheduling calendar',
      'Direct agent WhatsApp hotline',
      'Automated lead routing to sales representatives'
    ],
    optionalSystems: [
      '3D virtual tour integration (Matterport / 360)',
      'Mortgage & installment calculators',
      'Multi-currency pricing display',
      'CRM integration with automated investor brochures'
    ],
    conversionFocus: 'Brochure Download → Virtual Preview → Scheduled Site Visit Booking.',
    ctaText: 'Explore Real Estate Solutions'
  },
  {
    id: 'restaurants',
    name: 'Restaurant & Hospitality Websites',
    tagline: 'Sensory Menus, Table Reservations & Ordering',
    oneLineDesc: 'Help customers discover your restaurant, explore your menu and take immediate action.',
    iconName: 'Utensils',
    subheadline: 'Help customers discover your restaurant, explore your menu and take action.',
    description: 'Crafted to tantalize guests with stunning menu visuals, streamline table reservations, support direct online takeout ordering, and provide one-tap directions.',
    suitableBusinesses: [
      'Fine dining restaurants',
      'Bistros & casual dining spots',
      'Cafes & specialty coffee roasters',
      'Steakhouses & seafood bars',
      'Catering companies & banquet halls',
      'Ghost kitchens & food delivery brands'
    ],
    typicalPages: [
      'Atmospheric Home Page',
      'Interactive Digital Menu (Categorized with dietary tags)',
      'Table Reservation Booking Engine',
      'Online Ordering for Pickup & Delivery',
      'Private Events & Catering Inquiries',
      'Chef Story & Philosophy',
      'Food & Interior Photography Gallery',
      'Hours, Location & Interactive Map'
    ],
    coreSystems: [
      'Table reservation booking with time-slot management',
      'Digital responsive menu with dietary filter tags (Vegan, Gluten-Free, Halal)',
      'One-tap "Get Directions" Google Maps link',
      'One-tap phone & WhatsApp reservation buttons',
      'Opening hours indicator (Open Now / Closed)'
    ],
    optionalSystems: [
      'Direct online ordering for curbside pickup or delivery',
      'POS / kitchen printer webhook integrations',
      'Private event inquiry lead capture form',
      'VIP club / dining rewards email signup'
    ],
    conversionFocus: 'Reserve Table → Order Online → Get Directions → Direct Call.',
    ctaText: 'Create a Restaurant Website'
  },
  {
    id: 'service-businesses',
    name: 'Service Business Websites',
    tagline: 'High-Urgency Quotes, Local Trust & Dispatched Calls',
    oneLineDesc: 'Built for businesses where every call, quote and booking matters.',
    iconName: 'Wrench',
    subheadline: 'Built for businesses where every call, quote and booking matters.',
    description: 'Designed specifically for trades, contractors, and local service providers who need immediate inbound phone calls, quote submissions, and transparent service clarity.',
    suitableBusinesses: [
      'HVAC & climate control',
      'AC repair & installation',
      'Emergency plumbing services',
      'Electrical contractors',
      'Roofing & siding contractors',
      'Commercial & residential cleaning',
      'Pest control & exterminators',
      'Landscaping & tree services',
      'Remodeling & flooring specialists',
      'Solar power installations'
    ],
    typicalPages: [
      'Home with Sticky Emergency Call CTA',
      'Service Directory & Dedicated Service Pages',
      'Service Areas & Towns Covered',
      'Verified Client Reviews & Ratings',
      'Before & After Project Proof Gallery',
      'Transparent Pricing / Diagnostic Fee Guide',
      'Instant Quote Request Form',
      'Frequently Asked Questions',
      'Emergency Contact'
    ],
    coreSystems: [
      'Prominent 24/7 emergency click-to-call banners',
      'Quote builder with image upload capability',
      'Service territory zip-code verification',
      'Instant dispatch notification via SMS/Email to technicians',
      'Google Local Service integration'
    ],
    optionalSystems: [
      'Online appointment scheduling system',
      'AI voice receptionist for after-hours calls',
      'AI chatbot for diagnostic inquiry triage',
      'Review request automation after job completion'
    ],
    conversionFocus: 'Direct Call → Instant Quote Request → Scheduled Dispatch.',
    ctaText: 'Build a Service Business System'
  },
  {
    id: 'booking-systems',
    name: 'Booking & Appointment Systems',
    tagline: 'Calendar Sync, Deposits & Automated Reminders',
    oneLineDesc: 'Seamless appointment scheduling woven directly into your custom website architecture.',
    iconName: 'CalendarCheck',
    subheadline: 'Booking systems integrated seamlessly into the website types where they are relevant.',
    description: 'Booking systems are not an isolated standalone site, but rather an essential engine integrated into medical, dental, wellness, consulting, legal, and hospitality digital presences.',
    suitableBusinesses: [
      'Dental clinics & orthodontists',
      'Medical practices & wellness centers',
      'Doctors & specialized surgeons',
      'Hair salons, barbershops & spas',
      'Consultants & financial advisors',
      'Attorneys & legal counsel',
      'Personal trainers & fitness studios',
      'Professional coaches & tutors',
      'Boutique hotels & luxury villas',
      'Home service appointment dispatch'
    ],
    typicalPages: [
      'Integrated Booking Screen',
      'Service & Duration Selection',
      'Staff Member / Practitioner Picker',
      'Live Calendar Date & Time Slot Grid',
      'Patient / Client Intake Questions',
      'Deposit or Full Payment Gateway',
      'Confirmation & Add to Google / Apple Calendar'
    ],
    coreSystems: [
      'Real-time staff availability calendar',
      'Time zone detection and slot duration control',
      'Automated confirmation email and SMS',
      'Google Calendar / Outlook bi-directional sync',
      'Self-service rescheduling and cancellation logic'
    ],
    optionalSystems: [
      'Deposit or prepayment integration (Stripe, PayPal)',
      'Automated 24h & 2h SMS reminders to prevent no-shows',
      'Custom pre-appointment intake questionnaire',
      'Multi-location & multi-practitioner assignment'
    ],
    conversionFocus: 'Select Service → Choose Slot → Confirm Details → Zero No-Show Follow-up.',
    ctaText: 'Add Booking To My Website'
  },
  {
    id: 'content-blog',
    name: 'Content & Blog Websites',
    tagline: 'Editorial Prestige, SEO Dominance & Audience Retention',
    oneLineDesc: 'Scalable editorial platforms engineered for organic search visibility and thought leadership.',
    iconName: 'FileText',
    subheadline: 'Engineered for organic search authority, fast load times and clean reading experiences.',
    description: 'Designed for publications, corporate knowledge bases, thought leaders, educational institutions, and finance or real estate firms seeking high organic search traffic and reader loyalty.',
    suitableBusinesses: [
      'Finance & wealth advisory publications',
      'Technology & software reviews',
      'Educational platforms & institutes',
      'Real estate market analysis blogs',
      'Industry B2B trade journals',
      'Professional news outlets',
      'Corporate thought leadership hubs'
    ],
    typicalPages: [
      'Magazine / Editorial Home',
      'Topic & Category Hubs',
      'High-Readability Article Layouts',
      'Author Profiles & Bios',
      'Newsletter Subscription Page',
      'Search & Tag Archives',
      'Editorial Standards & About',
      'Sponsorship & Contact'
    ],
    coreSystems: [
      'Structured CMS architecture for rapid publishing',
      'Automated Schema.org / SEO markup for Google Rich Results',
      'Social sharing & reading progress indicators',
      'Related articles and editorial recommendation engine',
      'Newsletter capture integration'
    ],
    optionalSystems: [
      'Members-only paywall or gated content',
      'Podcast or audio article player embed',
      'Search with autocomplete & filter taxonomy',
      'Sponsor banner & ad placement management'
    ],
    conversionFocus: 'Organic Discovery → Content Engagement → Newsletter Subscription → Brand Loyalty.',
    ctaText: 'Explore Content Platforms'
  },
  {
    id: 'custom-systems',
    name: 'Custom Digital Systems',
    tagline: 'Tailored Portals, Integrations & Business Automation',
    oneLineDesc: 'Bespoke web applications and connected digital systems built around unique operational workflows.',
    iconName: 'Cpu',
    subheadline: 'Custom digital systems built around the exact way your business operates.',
    description: 'When off-the-shelf templates fail to match your operational logic, Prime Studio develops bespoke client portals, internal dashboards, multi-step configurators, and integrated business pipelines.',
    suitableBusinesses: [
      'Multi-branch franchise networks',
      'Custom manufacturing & quoting workflows',
      'Wholesale & distributor ordering portals',
      'Client document portals & onboarding hubs',
      'Specialized membership platforms',
      'Proprietary booking and dispatch operations'
    ],
    typicalPages: [
      'Secure Client / Partner Login',
      'Interactive Workflow / Configurator',
      'Customer Dashboard',
      'Order / Ticket Tracking Status',
      'Document Upload & Signature',
      'Automated Billing & Statements'
    ],
    coreSystems: [
      'Role-based access control (Admin, Staff, Customer)',
      'Custom API integrations between legacy tools',
      'Automated document generation (PDF quotes, invoices)',
      'Real-time webhook synchronization',
      'Comprehensive audit logs & reporting'
    ],
    optionalSystems: [
      'ERP / Inventory bidirectional sync',
      'Custom AI processing pipelines',
      'Multi-tenant client architectures',
      'Custom payment escrow or milestone releases'
    ],
    conversionFocus: 'Operational efficiency, eliminated manual entry, and friction-free client workflows.',
    ctaText: 'Consult on Custom Systems'
  }
];

export const BUSINESS_MODELS: BusinessModel[] = [
  {
    code: 'B2B',
    title: 'Business to Business',
    description: 'One business sells products, services, or solutions to another business entity.',
    examples: ['Enterprise software companies', 'Industrial manufacturers', 'Corporate marketing agencies', 'Wholesale suppliers', 'Management consultants', 'Commercial contractors'],
    websiteFocus: ['Authority & institutional trust', 'Deep technical expertise & whitepapers', 'Documented case studies & client ROI', 'Industry certifications & compliance', 'Executive consultation & RFP generation']
  },
  {
    code: 'B2C',
    title: 'Business to Consumer',
    description: 'A commercial enterprise sells directly to individual retail end-users and consumers.',
    examples: ['Restaurants & dining establishments', 'Dental & wellness clinics', 'Direct-to-consumer apparel brands', 'Hair salons & luxury spas', 'Local residential services'],
    websiteFocus: ['Frictionless convenience & speed', 'Social proof, reviews & ratings', 'Immediate appointment booking', 'Streamlined checkout & payment', 'Location clarity & instant phone contact']
  },
  {
    code: 'C2C',
    title: 'Consumer to Consumer',
    description: 'Platforms facilitating commerce or services directly between individual consumers.',
    examples: ['Peer-to-peer marketplaces', 'Pre-owned luxury resale platforms', 'Community classifieds', 'Short-term accommodation sharing'],
    websiteFocus: ['Platform security & verified user badges', 'Escrow & fraud-prevention messaging', 'Intuitive listing creation interfaces', 'Dispute resolution & safety guidelines']
  },
  {
    code: 'C2B',
    title: 'Consumer to Business',
    description: 'Individual professionals, creators, or contractors offer value to commercial organizations.',
    examples: ['Freelance specialists & fractional executives', 'Content creators & photographers', 'Independent consultants', 'Expert survey panels'],
    websiteFocus: ['High-impact portfolio showcase', 'Clear rate cards & project scope guidelines', 'Client testimonials & brand logos', 'Streamlined booking for discovery calls']
  },
  {
    code: 'B2G',
    title: 'Business to Government',
    description: 'Private enterprises providing goods, technical systems, or infrastructure to public agencies.',
    examples: ['Defense & civil engineering contractors', 'Government IT & security vendors', 'Municipal waste & infrastructure services', 'Public transit suppliers'],
    websiteFocus: ['Government credentials & Cage codes', 'Stringent regulatory compliance & ISO certifications', 'Past performance audits & public references', 'Official capability statements & procurement contact']
  }
];

export const AI_SOLUTIONS: AISolution[] = [
  {
    id: 'chat',
    name: 'AI Chat Agent',
    badge: '24/7 Intelligent Engagement',
    tagline: 'Conversational lead qualification and customer support that never sleeps.',
    description: 'An AI chat agent handles common customer inquiries with domain-specific accuracy, collects visitor details, qualifies inquiries based on your criteria, and smoothly guides prospects to call or book.',
    capabilities: [
      'Instant answers to service questions, pricing ranges, and business policies',
      'Context-aware lead qualification matching your business criteria',
      'Seamless calendar scheduling directly within the chat interface',
      'Smooth escalation and routing to human team members when required',
      'Multi-language customer communication with brand tone consistency'
    ],
    businessBenefits: [
      '24/7 immediate response time with zero delay',
      'Eliminates repetitive inquiry fatigue for your staff',
      'Captures high-intent visitors before they leave for a competitor',
      'Direct synchronization into your CRM or email inbox'
    ]
  },
  {
    id: 'qualification',
    name: 'AI Lead Qualification Agent',
    badge: 'Automated Opportunity Triage',
    tagline: 'Filter prospects, evaluate budgets, and dispatch only high-intent opportunities.',
    description: 'Stop wasting sales hours on tire-kickers. The AI Qualification Agent interviews incoming prospects with natural questions, establishes project urgency, estimates scope, and categorizes leads for your team.',
    capabilities: [
      'Gathers customer type, specific service requirements, and project location',
      'Validates budget suitability and expected project start timeline',
      'Detects emergency requests versus casual inquiries',
      'Assigns lead priority scores for immediate sales dispatch',
      'Compiles structured summaries sent directly to Slack, CRM, or WhatsApp'
    ],
    businessBenefits: [
      'Sales team focuses only on qualified, high-ticket prospects',
      'Immediate qualification within seconds of visitor engagement',
      'Standardized lead criteria across all customer touchpoints',
      'Higher close rates through pre-informed sales conversations'
    ]
  },
  {
    id: 'booking',
    name: 'AI Booking Agent',
    badge: 'Zero-Friction Scheduling',
    tagline: 'Conversational scheduling that syncs with real calendar availability.',
    description: 'Enables customers to book appointments using natural conversation or a frictionless visual widget, confirming time slots, collecting intake requirements, and triggering automated reminders.',
    capabilities: [
      'Understands conversational date and time requests ("How about next Tuesday morning?")',
      'Checks live calendar availability across multiple staff members',
      'Collects pre-appointment intake details and notes',
      'Dispatches calendar invites (.ics) to customer and business',
      'Integrates automated cancellation and rescheduling self-service'
    ],
    businessBenefits: [
      'Completely eliminates back-and-forth email scheduling ping-pong',
      'Allows clients to schedule appointments after normal office hours',
      'Reduces no-shows through automated confirmation protocols',
      'Frees administrative personnel to handle client care'
    ]
  },
  {
    id: 'voice',
    name: 'AI Voice / Call Agent',
    badge: 'Your AI Receptionist',
    tagline: 'Human-sounding telephone receptionist answering every call day or night.',
    description: 'Never miss an after-hours emergency call or lost revenue opportunity. Positioned as your business’s AI Receptionist, it answers incoming calls, answers routine FAQs, captures caller details, and schedules visits.',
    capabilities: [
      'Warm, professional voice greeting customized to your brand persona',
      'Handles routine questions regarding hours, services, and location',
      'Identifies caller intent and captures name, phone number, and issue',
      'Books appointments directly during the phone conversation',
      'Transfers urgent emergency callers to on-duty staff phones',
      'Emails an audio recording and text transcript immediately after each call'
    ],
    businessBenefits: [
      '100% answer rate with zero busy signals or missed call losses',
      'Full coverage during lunch hours, weekends, and late nights',
      'Consistent customer service experience on every single interaction',
      'Significant cost savings compared to traditional call center services'
    ]
  },
  {
    id: 'automation',
    name: 'AI Business Automation System',
    badge: 'Connected Operations Pipeline',
    tagline: 'Connecting your website, AI agents, CRM, email, SMS, and team into one synchronized workflow.',
    description: 'Digital systems are only as powerful as their connections. Prime Studio builds end-to-end automation pipelines that route leads, dispatch notifications, create CRM records, and update team calendars automatically.',
    capabilities: [
      'Bi-directional synchronization between web forms and your CRM',
      'Automated multi-step email nurture and customer onboarding sequences',
      'Immediate SMS alerts sent to service technicians or sales reps',
      'Google Sheets or database logging for backup and reporting',
      'Webhook triggers connecting third-party payment, invoicing, and fulfillment tools'
    ],
    businessBenefits: [
      'Drastically cuts manual data entry and spreadsheet copy-pasting',
      'Ensures leads are followed up within minutes, not days',
      'Total visibility across all customer pipeline stages',
      'Scales effortlessly as your lead and order volume multiplies'
    ]
  }
];

export const WHAT_WE_NEED_CHECKLIST = [
  {
    category: 'Business Information',
    icon: 'Briefcase',
    items: [
      { name: 'Official Registered Business Name', required: true, desc: 'Your exact legal and public trading entity name.' },
      { name: 'Owner & Contact Person Name', required: true, desc: 'Primary decision-maker and project liaison.' },
      { name: 'Direct Phone & Email', required: true, desc: 'For project communication and public business listings.' },
      { name: 'Physical Address & Service Locations', required: true, desc: 'Headquarters or service area coverage radius.' },
      { name: 'Operating Hours', required: true, desc: 'Standard business hours, weekend schedules, or 24/7 emergency availability.' },
      { name: 'Industry & Business Overview', required: true, desc: 'Short description of what makes your business unique in your market.' }
    ]
  },
  {
    category: 'Products & Services',
    icon: 'Layers',
    items: [
      { name: 'Complete List of Services / Products', required: true, desc: 'Everything you offer to your clients or customers.' },
      { name: 'Service Descriptions & Deliverables', required: true, desc: 'Clear explanation of what is included in each package or service.' },
      { name: 'Pricing Structure or Starting Rates', required: false, desc: 'Fixed prices, price ranges, or "request a quote" preferences.' },
      { name: 'Special Packages or Offers', required: false, desc: 'Seasonal promotions, bundled tiers, or first-time client deals.' },
      { name: 'Frequently Asked Questions', required: false, desc: 'Common questions clients always ask before hiring or buying.' }
    ]
  },
  {
    category: 'Brand Identity',
    icon: 'Palette',
    items: [
      { name: 'Vector Logo Files (SVG, AI, or High-Res PNG)', required: true, desc: 'Dark and light versions of your brand logo.' },
      { name: 'Brand Colors (Hex Codes)', required: false, desc: 'If you have established brand colors, or we can establish a refined palette.' },
      { name: 'Typography Preferences / Fonts', required: false, desc: 'Any existing corporate font guidelines.' },
      { name: 'Brand Tagline & Positioning', required: true, desc: 'Your core commercial promise or slogan.' }
    ]
  },
  {
    category: 'Photos & Videos',
    icon: 'Camera',
    items: [
      { name: 'Real Business & Facility Photos', required: true, desc: 'Exterior, interior, showroom, fleet, or office photos.' },
      { name: 'Professional Team Headshots', required: false, desc: 'Builds massive trust with prospective clients.' },
      { name: 'Product Photography', required: false, desc: 'Clean, high-resolution product angles on white or lifestyle setups.' },
      { name: 'Before & After Project Photos', required: false, desc: 'Essential proof for service, construction, and clinic businesses.' },
      { name: 'Video Assets & Walkthroughs', required: false, desc: 'Introductions, project tours, or client video interviews.' }
    ]
  },
  {
    category: 'Social Proof & Credentials',
    icon: 'Award',
    items: [
      { name: 'Google Business Profile / Reviews Link', required: true, desc: 'Real customer feedback to embed or cite.' },
      { name: 'Client Testimonials & Case Studies', required: false, desc: 'Written quotes from satisfied clients.' },
      { name: 'Industry Licenses & Certifications', required: false, desc: 'State licenses, trade affiliations, ISO standards, or awards.' },
      { name: 'Client Logos or Partner Badges', required: false, desc: 'Recognizable brands you have serviced or partnered with.' }
    ]
  },
  {
    category: 'Existing Digital Assets',
    icon: 'Globe',
    items: [
      { name: 'Current Website Domain (URL)', required: false, desc: 'If redesigning an existing web property.' },
      { name: 'Domain Registrar Login Access', required: true, desc: 'Where your domain is registered (GoDaddy, Namecheap, Cloudflare, etc.).' },
      { name: 'Google Business Profile Access', required: false, desc: 'For map integration and local SEO alignment.' },
      { name: 'Social Media Links', required: false, desc: 'LinkedIn, Instagram, Facebook, YouTube, or X profiles.' }
    ]
  },
  {
    category: 'Lead Delivery Preferences',
    icon: 'Send',
    items: [
      { name: 'Primary Lead Destination', required: true, desc: 'Where should incoming inquiries go? (Email, WhatsApp, CRM, SMS, Google Sheet).' },
      { name: 'Sales Team Notification Contact', required: true, desc: 'The phone numbers and emails that need immediate alerts.' },
      { name: 'CRM Integration Preference', required: false, desc: 'HubSpot, Salesforce, Pipedrive, GoHighLevel, Zoho, or webhook.' }
    ]
  },
  {
    category: 'Booking & Payment Needs',
    icon: 'CreditCard',
    items: [
      { name: 'Bookable Services & Durations', required: false, desc: 'Which services can clients self-schedule and how long they take.' },
      { name: 'Staff Availability Schedules', required: false, desc: 'Working days, shift hours, and buffer times between slots.' },
      { name: 'Payment Gateway Account', required: false, desc: 'Stripe, PayPal, or merchant processor details if collecting payments.' },
      { name: 'Deposit / Payment Policy', required: false, desc: 'Full payment up front, percentage deposit, or pay-at-location.' }
    ]
  }
];

export const WEBSITE_FUNDAMENTALS = [
  { term: 'Domain', label: 'The Web Address', desc: 'The unique digital address of your business (e.g., yourcompany.com) that customers type to reach your site.' },
  { term: 'Hosting', label: 'Infrastructure & Deployment', desc: 'The secure cloud environment where your website files, databases, and server scripts reside with high uptime.' },
  { term: 'Frontend', label: 'Client Experience', desc: 'The visual layout, typography, animations, and interactive controls that your customer sees and touches in their browser.' },
  { term: 'Backend', label: 'Server-Side Intelligence', desc: 'The server logic powering secure forms, database lookups, business rules, APIs, and authentication behind the scenes.' },
  { term: 'Database', label: 'Structured Data Storage', desc: 'Secure repository where customer inquiries, product catalogs, user accounts, and appointment records are organized.' },
  { term: 'APIs', label: 'Connected Communications', desc: 'Secure communication bridges enabling your website to talk directly to payment processors, CRMs, WhatsApp, and Google Maps.' },
  { term: 'SSL', label: 'HTTPS Security', desc: 'Cryptographic encryption that shields customer data in transit, eliminates browser security warnings, and secures transactions.' },
  { term: 'SEO', label: 'Search Visibility', desc: 'Technical architecture, metadata, schema markup, and speed optimization that helps Google rank your business on top.' },
  { term: 'UX', label: 'User Experience', desc: 'The deliberate information flow and logical journey that makes browsing effortless, intuitive, and conversion-friendly.' },
  { term: 'UI', label: 'User Interface Craft', desc: 'The refined visual hierarchy, typographic scale, metallic gold accents, spacing math, and premium aesthetic execution.' }
];

export const MARKETING_ECOSYSTEM_STEPS = [
  { step: '01', name: 'Targeted Traffic', desc: 'Google Search, Local SEO, Google Ads, Meta Ads, and direct referrals direct high-intent prospects.', icon: 'Radio' },
  { step: '02', name: 'Prime Website', desc: 'High-speed, luxury black-and-gold presentation immediately builds deep institutional trust.', icon: 'Monitor' },
  { step: '03', name: 'Intent Conversion', desc: 'Strategic CTAs, dynamic quote calculators, and interactive widgets guide the visitor to act.', icon: 'CheckCircle' },
  { step: '04', name: 'Lead & Data Capture', desc: 'Detailed specifications, project parameters, and contact info are captured securely.', icon: 'Inbox' },
  { step: '05', name: 'CRM & Dispatch', desc: 'Instant multi-channel notifications sent to sales team via SMS, Email, and CRM.', icon: 'Share2' },
  { step: '06', name: 'Follow-Up & Close', desc: 'Automated reminders and prompt sales engagement convert prospects into paying clients.', icon: 'UserCheck' }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    shortDesc: 'Deep operational understanding',
    detailedDesc: 'We sit down with you to understand your exact business model, target clientele, current operational bottlenecks, and primary commercial goals.',
    deliverables: ['Business model audit', 'Customer journey mapping', 'Project scope definition']
  },
  {
    number: '02',
    title: 'Research',
    shortDesc: 'Market & competitor study',
    detailedDesc: 'We study your local and international competitors, dissect what industry leaders are doing right, and uncover conversion gaps we can exploit.',
    deliverables: ['Competitive benchmark report', 'Keyword & search demand review', 'Opportunity matrix']
  },
  {
    number: '03',
    title: 'Strategy',
    shortDesc: 'Architecture & systems blueprint',
    detailedDesc: 'We define the exact pages, lead capture mechanisms, booking modules, and AI automations necessary to power your digital system.',
    deliverables: ['Sitemap architecture', 'System integration blueprint', 'Conversion funnel map']
  },
  {
    number: '04',
    title: 'Custom Demo',
    shortDesc: 'Interactive concept presentation',
    detailedDesc: 'For qualified prospects, we build an interactive visual prototype of your core website experience before committing to full production. We show, we don’t just tell.',
    deliverables: ['Interactive concept preview', 'Brand alignment review', 'Client feedback session']
  },
  {
    number: '05',
    title: 'UX / UI Design',
    shortDesc: 'Bespoke interface craftsmanship',
    detailedDesc: 'We craft a high-end black-and-gold aesthetic with mathematical spacing, refined typography, and purposeful motion that speaks to premium clientele.',
    deliverables: ['High-fidelity desktop & mobile UI', 'Micro-interaction designs', 'Design system token setup']
  },
  {
    number: '06',
    title: 'Development',
    shortDesc: 'Modern code engineering',
    detailedDesc: 'We engineer your website using modern, clean React, TypeScript, and Tailwind CSS. Ultra-fast, GPU-accelerated, responsive, and lightweight.',
    deliverables: ['Component-based clean code', '100% responsive execution', 'Accessibility & speed compliance']
  },
  {
    number: '07',
    title: 'Integrations',
    shortDesc: 'CRM, AI & API connections',
    detailedDesc: 'We connect your lead capture forms, WhatsApp direct hotlines, booking calendars, Stripe payment gateways, and AI agents into a unified pipeline.',
    deliverables: ['CRM webhook setup', 'Calendar bi-directional sync', 'AI agent configuration & testing']
  },
  {
    number: '08',
    title: 'Testing',
    shortDesc: 'Rigorous quality assurance',
    detailedDesc: 'Every button, form, responsive screen size, cross-browser state, and automated notification is rigorously verified across real devices.',
    deliverables: ['Cross-device responsiveness audit', 'Form submission & email deliverability check', 'Security & speed validation']
  },
  {
    number: '09',
    title: 'Launch',
    shortDesc: 'Flawless production deployment',
    detailedDesc: 'We point your domain, configure HTTPS SSL certificates, set up search engine indexing, verify Google Analytics, and push live.',
    deliverables: ['Zero-downtime deployment', 'Search Console indexing submission', 'Full administrative handoff']
  },
  {
    number: '10',
    title: 'Support',
    shortDesc: 'Continuous optimization & growth',
    deliverables: ['Post-launch warranty', 'Performance monitoring', 'Scheduled updates & system scaling'],
    detailedDesc: 'We provide maintenance, performance monitoring, security patches, and iterative improvements as your business expands.'
  }
];

export const DEMO_PROJECTS: DemoProject[] = [
  {
    id: 'apex-solar',
    name: 'Apex Solar',
    category: 'Lead Generation',
    tagline: 'Residential & Commercial Clean Energy Systems',
    description: 'High-conversion solar lead generation platform featuring a dynamic savings calculator, utility bill photo upload, and instant quote dispatch to sales engineers.',
    keyFeatures: ['Interactive Solar Savings Calculator', 'Instant Address & Roof Feasibility Check', 'Multi-Step Quote Funnel', 'Direct WhatsApp Hotline'],
    systemsIncluded: ['Lead Capture Funnel', 'Google Sheets Lead Logger', 'Automated SMS Alerts', 'CRM Webhook'],
    badge: 'Demo Concept',
    metricsLabel: 'Conversion-Engineered Funnel',
    previewColor: '#17202a'
  },
  {
    id: 'horizon-properties',
    name: 'Horizon Properties',
    category: 'Real Estate',
    tagline: 'Master-Planned Waterfront Developments',
    description: 'Luxury real estate developer portal showcasing multi-tower luxury residences, interactive master plans, floor plan downloads, and private VIP site visit booking.',
    keyFeatures: ['Interactive Master Plan & Amenities Map', 'Unit Floor Plan Viewer & Brochure Download', 'VIP Private Site Visit Scheduler', 'Investor Financial Plan Request'],
    systemsIncluded: ['Property Showcase Engine', 'Calendar Booking', 'WhatsApp Direct VIP Concierge', 'Lead Qualification Form'],
    badge: 'Demo Concept',
    metricsLabel: 'Luxury Showcase Architecture',
    previewColor: '#181b20'
  },
  {
    id: 'urban-table',
    name: 'Urban Table',
    category: 'Restaurant',
    tagline: 'Modern Gastronomy & Artisanal Dining',
    description: 'Sensory dining website with interactive categorized menu, real-time table reservation system, online takeout ordering, and instant Google Maps directions.',
    keyFeatures: ['Live Table Reservation System', 'Digital Menu with Dietary Filters', 'Takeout Ordering with Curbside Pickup', 'One-Tap Call & Navigation'],
    systemsIncluded: ['Table Booking Engine', 'Menu Management', 'Open/Closed Status Engine', 'SMS Booking Confirmation'],
    badge: 'Demo Concept',
    metricsLabel: 'High-Table-Turnover Booking',
    previewColor: '#1e1a17'
  },
  {
    id: 'prime-dental',
    name: 'Prime Dental Clinic',
    category: 'Healthcare',
    tagline: 'Advanced Aesthetic & Restorative Dentistry',
    description: 'Medical and dental patient portal focusing on clinical credibility, before-and-after smile transformations, insurance verification, and online appointment booking.',
    keyFeatures: ['Before/After Interactive Smile Slider', 'Patient Online Appointment Booking', 'Dental Insurance Verification Form', 'AI Emergency Triage Chatbot'],
    systemsIncluded: ['HIPAA-Minded Intake Forms', 'Staff Calendar Sync', 'SMS Appointment Reminders', 'Review Showcase'],
    badge: 'Demo Concept',
    metricsLabel: 'Zero No-Show Calendar Sync',
    previewColor: '#141c1e'
  },
  {
    id: 'summit-hvac',
    name: 'Summit HVAC & Cooling',
    category: 'Service Business',
    tagline: '24/7 Commercial & Residential Climate Control',
    description: 'Urgency-driven HVAC contractor platform with sticky emergency dispatch buttons, zip-code service area validation, diagnostic fee transparency, and phone conversion.',
    keyFeatures: ['24/7 Emergency Sticky Dispatch Bar', 'Instant Zip-Code Service Territory Checker', 'Diagnostic Quote Request Builder', 'Technician On-Call Tracker'],
    systemsIncluded: ['Instant Click-to-Call', 'Multi-Field Quote Generator', 'Twilio SMS Dispatch', 'Google Local Map Integration'],
    badge: 'Demo Concept',
    metricsLabel: 'High-Urgency Inbound Engine',
    previewColor: '#1c1c1f'
  },
  {
    id: 'aegis-capital',
    name: 'Aegis Capital Partners',
    category: 'Corporate',
    tagline: 'Institutional Asset Management & Private Equity',
    description: 'Authoritative B2B corporate presence engineered for institutional investors, displaying portfolio companies, executive board profiles, and confidential inquiries.',
    keyFeatures: ['Executive Leadership Bios & Governance', 'Portfolio Case Studies & Growth Metrics', 'Confidential Institutional Inquiry Portal', 'Bilingual Language Switcher'],
    systemsIncluded: ['Enterprise Contact Routing', 'Downloadable Annual Report Gates', 'Analytics Dashboard', 'SSL Hardening'],
    badge: 'Demo Concept',
    metricsLabel: 'Institutional Trust Standard',
    previewColor: '#131419'
  }
];

export const TIMELINE_ESTIMATES = [
  {
    type: 'Basic Business Website',
    duration: '1–2 Weeks',
    idealFor: 'Local businesses, professionals, or simple authority presence needing clean presentation, core pages, and contact capture.'
  },
  {
    type: 'Corporate / Lead Generation Website',
    duration: '2–4 Weeks',
    idealFor: 'Contractors, B2B firms, and service companies requiring tailored quote funnels, service landing pages, and CRM integrations.'
  },
  {
    type: 'E-commerce Digital Storefront',
    duration: '3–6 Weeks',
    idealFor: 'Retail brands needing full catalog management, inventory sync, secure payment gateways, cart flows, and order notifications.'
  },
  {
    type: 'Advanced Real Estate / Custom Platform',
    duration: '3–6+ Weeks',
    idealFor: 'Property developers, multi-agent brokerages, and custom web apps with floor plans, filter engines, and booking systems.'
  },
  {
    type: 'AI Agents & Automation Add-ons',
    duration: '1–2 Additional Weeks',
    idealFor: 'Adding AI voice receptionists, custom qualification chat agents, or complex multi-software Zapier/API pipelines.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Do you build websites for different types of businesses?',
    answer: 'Yes, absolutely. Prime Studio designs digital systems tailored specifically around your business model, customer journey, and required operational tools. A restaurant website is built completely differently from a corporate manufacturer or a solar contractor.',
    category: 'General'
  },
  {
    question: 'Do you only build informational websites?',
    answer: 'No. The majority of our projects are functional digital business systems. This includes high-conversion lead funnels, real-time appointment booking engines, e-commerce storefronts, payment gateways, CRM integrations, AI chat agents, and automated dispatch workflows.',
    category: 'Capabilities'
  },
  {
    question: 'Can you build a custom demo before the project?',
    answer: 'For qualified prospects, Prime Studio can prepare a custom website concept based on your specific business, brand assets, services, and market location. This allows you to experience our proposed visual direction and system architecture before full production starts.',
    category: 'Process'
  },
  {
    question: 'Can AI be integrated into an existing website?',
    answer: 'Where technically appropriate, yes. We can integrate AI chat agents, AI lead qualification workflows, and automated voice receptionists into existing web properties and CRM systems without requiring a complete website rebuild.',
    category: 'AI Solutions'
  },
  {
    question: 'Can my website collect and dispatch leads automatically?',
    answer: 'Yes. Every lead generation site we build includes structured capture forms that immediately dispatch data to your email, phone via SMS, WhatsApp, Google Sheets, or CRM (such as HubSpot or Salesforce) within seconds of submission.',
    category: 'Capabilities'
  },
  {
    question: 'Can customers book appointments directly on the website?',
    answer: 'Yes. We build integrated scheduling engines with live calendar availability, automated email and SMS confirmations, calendar invite downloads (.ics), and optional deposit payment requirements.',
    category: 'Capabilities'
  },
  {
    question: 'Can the website accept payments and deposits?',
    answer: 'Yes, where a suitable payment gateway (such as Stripe, PayPal, or regional authorized processors) is supported for your business jurisdiction. We support one-time purchases, subscriptions, and booking deposits.',
    category: 'E-commerce'
  },
  {
    question: 'Is every website fully mobile responsive?',
    answer: 'Yes. Every project is meticulously engineered for fluid responsiveness across desktop displays, laptops, tablets, and smartphones, with touch-optimized controls and fast load times.',
    category: 'Technical'
  },
  {
    question: 'How long does a website project take to complete?',
    answer: 'Basic business websites typically take 1–2 weeks; corporate and lead generation platforms require 2–4 weeks; e-commerce and real estate platforms require 3–6+ weeks. Actual timelines depend on project scope, content readiness, and revision cycles.',
    category: 'Timeline'
  },
  {
    question: 'Who will lead and supervise my project at Prime Studio?',
    answer: 'Every project is directly overseen by Director Mohammad Usman Ahmad, ensuring strict adherence to architectural standards, design craft, technical precision, and on-time delivery.',
    category: 'Company'
  }
];
