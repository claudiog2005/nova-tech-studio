export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  tag: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  clientLocation?: string;
  description: string;
  imageUrl: string;
  metrics?: string;
  timeline?: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  demoUrl?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tier: string;
  initialDop: number;
  monthlyDop: number;
  isQuoteOnly?: boolean;
  featured?: boolean;
  description: string;
  features: string[];
  deliveryTime: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}
