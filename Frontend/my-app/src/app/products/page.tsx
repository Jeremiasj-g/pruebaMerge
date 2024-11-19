import { FilterProvider } from "@/context/FilterContext";
import ProductsPage from "./ProductsPage";

export default function PageWrapper() {
  return (
    <FilterProvider>
      <ProductsPage />
    </FilterProvider>
  );
}