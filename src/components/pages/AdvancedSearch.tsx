import { useState } from 'react';
import { ArrowLeft, ChevronDown, ShoppingCart, GitCompare } from 'lucide-react';
import { Product } from '../ProductCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Slider } from '../ui/slider';
import { toast } from 'sonner';

interface AdvancedSearchProps {
  products: Product[];
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onAddToCompare: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

interface Filters {
  make: string;
  model: string;
  trim: string;
  year: string;
  colors: string[];
  priceRange: [number, number];
}

const colorOptions = [
  { name: 'White', value: 'white', color: '#ffffff' },
  { name: 'Black', value: 'black', color: '#000000' },
  { name: 'Silver', value: 'silver', color: '#c0c0c0' },
  { name: 'Red', value: 'red', color: '#dc2626' },
  { name: 'Blue', value: 'blue', color: '#2563eb' },
  { name: 'Green', value: 'green', color: '#16a34a' },
  { name: 'Gray', value: 'gray', color: '#6b7280' },
  { name: 'Yellow', value: 'yellow', color: '#eab308' },
  { name: 'Orange', value: 'orange', color: '#ea580c' },
];

export function AdvancedSearch({ 
  products, 
  onBack, 
  onAddToCart, 
  onAddToCompare,
  onProductClick 
}: AdvancedSearchProps) {
  const [filters, setFilters] = useState<Filters>({
    make: '',
    model: '',
    trim: '',
    year: '',
    colors: [],
    priceRange: [0, 500],
  });

  const [expandedSections, setExpandedSections] = useState({
    vehicle: true,
    color: false,
    price: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleColorToggle = (color: string) => {
    setFilters(prev => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color],
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      make: '',
      model: '',
      trim: '',
      year: '',
      colors: [],
      priceRange: [0, 500],
    });
    toast.info('Filters cleared');
  };

  const handleApplyFilters = () => {
    toast.success('Filters applied');
  };

  // Filter products based on criteria
  const filteredProducts = products.filter(product => {
    const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    return matchesPrice;
  });

  return (
    <div className="bg-[#f5f5f7] relative w-full min-h-screen flex">
      {/* Filters Sidebar */}
      <div className="w-[309px] bg-white border-r border-gray-200 shrink-0 shadow-sm">
        {/* Back Button */}
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={onBack}
            className="flex items-center gap-2 bg-white hover:bg-gray-50 px-4 py-2 rounded-lg border border-gray-300 transition-colors w-full justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
            <span className="text-[16px] text-gray-700">Back to Shop</span>
          </button>
        </div>

        {/* Filters Title */}
        <div className="bg-[#6366f1] py-4">
          <h2 className="text-[25px] text-white text-center">Filters</h2>
        </div>

        {/* Vehicle Information Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('vehicle')}
            className="w-full flex items-center justify-between px-[21px] py-4 hover:bg-gray-50 transition-colors"
          >
            <p className="text-[18px] text-gray-900">Vehicle Information</p>
            <ChevronDown
              className={`w-5 h-5 text-gray-600 transition-transform ${
                expandedSections.vehicle ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedSections.vehicle && (
            <div className="px-4 pb-4 space-y-3 bg-gray-50">
              <input
                type="text"
                placeholder="Make"
                value={filters.make}
                onChange={(e) => setFilters({ ...filters, make: e.target.value })}
                className="w-full h-[40px] bg-white border border-gray-300 rounded-lg px-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Model"
                value={filters.model}
                onChange={(e) => setFilters({ ...filters, model: e.target.value })}
                className="w-full h-[40px] bg-white border border-gray-300 rounded-lg px-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Trim"
                value={filters.trim}
                onChange={(e) => setFilters({ ...filters, trim: e.target.value })}
                className="w-full h-[40px] bg-white border border-gray-300 rounded-lg px-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Year"
                value={filters.year}
                onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                className="w-full h-[40px] bg-white border border-gray-300 rounded-lg px-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
              />
            </div>
          )}
        </div>

        {/* Color Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('color')}
            className="w-full flex items-center justify-between px-[21px] py-4 hover:bg-gray-50 transition-colors"
          >
            <p className="text-[18px] text-gray-900">Color</p>
            <ChevronDown
              className={`w-5 h-5 text-gray-600 transition-transform ${
                expandedSections.color ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedSections.color && (
            <div className="px-4 pb-4 bg-gray-50">
              <div className="grid grid-cols-3 gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => handleColorToggle(color.value)}
                    className="size-[32px] rounded-lg border-2 transition-all hover:scale-110"
                    style={{
                      backgroundColor: color.color,
                      borderColor: filters.colors.includes(color.value) ? '#6366f1' : '#d1d5db',
                      opacity: filters.colors.includes(color.value) ? 1 : 0.6,
                      boxShadow: filters.colors.includes(color.value) ? '0 0 0 2px rgba(99, 102, 241, 0.2)' : 'none',
                    }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Price Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('price')}
            className="w-full flex items-center justify-between px-[21px] py-4 hover:bg-gray-50 transition-colors"
          >
            <p className="text-[18px] text-gray-900">Price Range</p>
            <ChevronDown
              className={`w-5 h-5 text-gray-600 transition-transform ${
                expandedSections.price ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedSections.price && (
            <div className="px-4 pb-4 space-y-4 bg-gray-50">
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <label className="text-[12px] text-gray-600 mb-1 block">Min</label>
                  <input
                    type="number"
                    value={filters.priceRange[0]}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        priceRange: [Number(e.target.value), filters.priceRange[1]],
                      })
                    }
                    className="w-full h-[40px] bg-white border border-gray-300 rounded-lg px-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                    placeholder="$0"
                  />
                </div>
                <span className="text-gray-400 mt-5">-</span>
                <div className="flex-1">
                  <label className="text-[12px] text-gray-600 mb-1 block">Max</label>
                  <input
                    type="number"
                    value={filters.priceRange[1]}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        priceRange: [filters.priceRange[0], Number(e.target.value)],
                      })
                    }
                    className="w-full h-[40px] bg-white border border-gray-300 rounded-lg px-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                    placeholder="$500"
                  />
                </div>
              </div>
              <div className="text-[14px] text-gray-600 text-center">
                ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="p-4 space-y-3 mt-4">
          <button
            onClick={handleApplyFilters}
            className="w-full h-[44px] bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-lg transition-colors"
          >
            <span className="text-[16px]">Apply Filters</span>
          </button>
          <button
            onClick={handleClearFilters}
            className="w-full h-[44px] bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 rounded-lg transition-colors"
          >
            <span className="text-[16px]">Clear Filters</span>
          </button>
        </div>
      </div>

      {/* Search Results */}
      <div className="flex-1 p-8 overflow-y-auto bg-[#f5f5f7]">
        <div className="max-w-[1200px]">
          <div className="mb-8">
            <h1 className="text-[48px] text-gray-900 mb-2">Search Results</h1>
            <p className="text-[18px] text-gray-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 text-center py-20 px-8">
              <div className="max-w-md mx-auto">
                <p className="text-[24px] text-gray-900 mb-2">No products found</p>
                <p className="text-[16px] text-gray-600 mb-6">Try adjusting your filters to find what you're looking for</p>
                <button
                  onClick={handleClearFilters}
                  className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-6 items-start">
                    {/* Product Image */}
                    <button
                      onClick={() => onProductClick(product)}
                      className="bg-gray-100 size-[150px] shrink-0 overflow-hidden rounded-lg hover:ring-2 hover:ring-[#6366f1] transition-all"
                    >
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </button>

                    {/* Product Info */}
                    <div className="flex-1">
                      <button
                        onClick={() => onProductClick(product)}
                        className="text-left hover:text-[#6366f1] transition-colors group"
                      >
                        <h3 className="text-[28px] text-gray-900 mb-2 group-hover:text-[#6366f1]">{product.name}</h3>
                      </button>
                      
                      <div className="inline-block mb-3">
                        <span className="text-[14px] text-[#6366f1] bg-[#eef2ff] px-3 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>

                      <p className="text-[16px] text-gray-600 leading-[1.6] max-w-[600px] mb-4">
                        Premium quality {product.category.toLowerCase()} component designed for
                        reliability and performance. Manufactured to OEM specifications with rigorous
                        quality control standards.
                      </p>

                      {/* Stock Status */}
                      {product.inStock ? (
                        <p className="text-[14px] text-green-600 mb-4">✓ In Stock</p>
                      ) : (
                        <p className="text-[14px] text-red-600 mb-4">Out of Stock</p>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => onAddToCart(product)}
                          disabled={!product.inStock}
                          className="flex items-center gap-2 bg-[#6366f1] hover:bg-[#4f46e5] disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-lg transition-colors"
                        >
                          <ShoppingCart className="w-5 h-5" />
                          <span className="text-[15px]">Add to Cart</span>
                        </button>

                        <button
                          onClick={() => onAddToCompare(product)}
                          className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg transition-colors"
                        >
                          <GitCompare className="w-5 h-5" />
                          <span className="text-[15px]">Compare</span>
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-[32px] text-gray-900 mb-1">${product.price.toFixed(2)}</p>
                      <p className="text-[14px] text-gray-500">Free Shipping</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
