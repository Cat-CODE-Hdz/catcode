import { useState, useCallback } from 'react';

export function useFaqAccordion(initialOpen: number | null = null) {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpen);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return { openIndex, toggle, setOpenIndex };
}
