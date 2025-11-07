import React, { createContext, useContext, useState } from 'react';
import { Product } from '../components/ProductCard';

export type CompareContextValue = {
  compareList: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: number) => void;
  clearCompare: () => void;
  compareCount: number;
};

const CompareContext = createContext<CompareContextValue | undefined>(undefined);

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error('useCompare must be used within CompareProvider');
  return ctx;
}

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [compareList, setCompareList] = useState<Product[]>([]);

  const addToCompare = (product: Product) => {
    if (compareList.find(p => p.id === product.id)) {
      return;
    }
    if (compareList.length >= 3) {
      return;
    }

    setCompareList(prev => [...prev, product]);
  };

  const removeFromCompare = (productId: number) => {
    setCompareList(prev => prev.filter(p => p.id !== productId));
  };

  const clearCompare = () => setCompareList([]);

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare, clearCompare, compareCount: compareList.length }}>
      {children}
    </CompareContext.Provider>
  );
}
