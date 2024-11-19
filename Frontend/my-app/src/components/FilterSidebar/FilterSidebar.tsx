// components/FilterSidebar.tsx
import { useFilter } from "../../context/FilterContext";

const FilterSidebar = () => {
  const {
    categories,
    selectedCategory,
    priceRange,
    setSelectedCategory,
    setPriceRange,
  } = useFilter();

  return (
    <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Filtrar</h2>

      {/* Categorías */}
      <div className="mt-6">
        <h3 className="font-bold text-lg mb-3">Categorías</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setSelectedCategory("all")}
              className={`w-full text-left px-3 py-2 rounded-md transition ${
                selectedCategory === "all"
                  ? "bg-gray-900 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              Todas
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-3 py-2 rounded-md transition ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Rango de precios */}
      <div className="mt-6">
        <h3 className="font-bold text-lg mb-3">Rango de precios</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm">${priceRange[0]}</span>
          <span className="text-sm">${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="w-full mb-2"
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
