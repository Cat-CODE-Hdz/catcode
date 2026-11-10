export interface PricingPlan {
  id: string;
  setup?: number;
  monthly?: number;
  oneTime?: number;
  highlighted?: boolean;
}

export interface PricingCategory {
  id: string;
  plans: PricingPlan[];
}

export const pricingCategories: PricingCategory[] = [
  {
    id: 'custom',
    plans: [
      { id: 'basic', setup: 149, monthly: 19 },
      { id: 'pro', setup: 249, monthly: 29, highlighted: true },
      { id: 'premium', setup: 449, monthly: 49 },
    ],
  },
  {
    id: 'weekly',
    plans: [{ id: 'weekly', monthly: 109, highlighted: true }],
  },
  {
    id: 'social',
    plans: [{ id: 'social', monthly: 119, highlighted: true }],
  },
  {
    id: 'full',
    plans: [{ id: 'full', monthly: 199, highlighted: true }],
  },
  {
    id: 'arranque',
    plans: [{ id: 'arranque', oneTime: 59, highlighted: true }],
  },
];
