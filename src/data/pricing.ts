export interface PricingPlan {
  id: string;
  setup?: number;
  monthly: number;
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
    plans: [
      { id: 'basic', monthly: 59 },
      { id: 'pro', monthly: 109, highlighted: true },
      { id: 'premium', monthly: 159 },
    ],
  },
  {
    id: 'social',
    plans: [
      { id: 'basic', monthly: 79 },
      { id: 'pro', monthly: 119, highlighted: true },
      { id: 'premium', monthly: 179 },
    ],
  },
  {
    id: 'full',
    plans: [{ id: 'full', monthly: 199, highlighted: true }],
  },
];
