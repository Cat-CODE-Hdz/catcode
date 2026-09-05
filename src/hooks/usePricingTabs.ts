import { useState, useCallback } from 'react';

export function usePricingTabs(defaultTab: string) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const switchTab = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  return { activeTab, switchTab };
}
