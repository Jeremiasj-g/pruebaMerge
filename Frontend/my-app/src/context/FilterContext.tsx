"use client"

// context/FilterContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextProps {
  categories: string[];
  selectedCategory: string;
  priceRange: [number, number];
  setSelectedCategory: (category: string) => void;
  setCategories: (categories: string[]) => void;
  setPriceRange: (range: [number, number]) => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  return (
    <FilterContext.Provider
      value={{
        categories,
        selectedCategory,
        priceRange,
        setSelectedCategory,
        setCategories,
        setPriceRange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

