import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface AdvancedSearchFormProps {
  onBack: () => void;
  onSearch: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  year: string;
  make: string;
  model: string;
  trim: string;
  partType: string;
  colors: string[];
  priceRange: number;
}

const colorOptions = [
  { name: 'White', value: 'white', color: '#ffffff', border: '#d1d5db' },
  { name: 'Black', value: 'black', color: '#000000', border: '#000000' },
  { name: 'Silver', value: 'silver', color: '#c0c0c0', border: '#9ca3af' },
  { name: 'Brown', value: 'brown', color: '#92400e', border: '#92400e' },
  { name: 'Blue', value: 'blue', color: '#2563eb', border: '#2563eb' },
  { name: 'Navy', value: 'navy', color: '#1e3a8a', border: '#1e3a8a' },
  { name: 'Green', value: 'green', color: '#16a34a', border: '#16a34a' },
  { name: 'Pink', value: 'pink', color: '#ec4899', border: '#ec4899' },
  { name: 'Red', value: 'red', color: '#dc2626', border: '#dc2626' },
  { name: 'Orange', value: 'orange', color: '#ea580c', border: '#ea580c' },
  { name: 'Yellow', value: 'yellow', color: '#eab308', border: '#eab308' },
];

export function AdvancedSearchForm({ onBack, onSearch }: AdvancedSearchFormProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    year: '',
    make: '',
    model: '',
    trim: '',
    partType: '',
    colors: [],
    priceRange: 2,
  });

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
      year: '',
      make: '',
      model: '',
      trim: '',
      partType: '',
      colors: [],
      priceRange: 2,
    });
    toast.info('Filters cleared');
  };

  const handleSearch = () => {
    // Check if at least one filter is set
    const hasFilters = filters.year || filters.make || filters.model || 
                       filters.trim || filters.partType || filters.colors.length > 0;
    
    if (!hasFilters) {
      toast.error('Please set at least one search filter');
      return;
    }

    onSearch(filters);
    toast.success('Searching products...');
  };

  const priceLabels = ['$', '$$', '$$$', '$$$$', '$$$$$'];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 overflow-y-auto">
      {/* Modal Card */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-[680px] my-8">
        {/* Header */}
        <div className="bg-[#6366f1] rounded-t-xl py-6 px-6 relative">
          <h2 className="text-white text-center text-2xl md:text-3xl">Advanced Search</h2>
          <button
            onClick={onBack}
            className="absolute right-4 top-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Vehicle Information */}
          <div>
            <h3 className="text-lg mb-4 text-gray-900">Vehicle Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Year</label>
                <input
                  type="text"
                  placeholder="e.g., 2020"
                  value={filters.year}
                  onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                  className="w-full h-[48px] bg-white border-2 border-gray-300 rounded-lg px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Make</label>
                <input
                  type="text"
                  placeholder="e.g., Toyota"
                  value={filters.make}
                  onChange={(e) => setFilters({ ...filters, make: e.target.value })}
                  className="w-full h-[48px] bg-white border-2 border-gray-300 rounded-lg px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Model</label>
                <input
                  type="text"
                  placeholder="e.g., Camry"
                  value={filters.model}
                  onChange={(e) => setFilters({ ...filters, model: e.target.value })}
                  className="w-full h-[48px] bg-white border-2 border-gray-300 rounded-lg px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Trim</label>
                <input
                  type="text"
                  placeholder="e.g., LE"
                  value={filters.trim}
                  onChange={(e) => setFilters({ ...filters, trim: e.target.value })}
                  className="w-full h-[48px] bg-white border-2 border-gray-300 rounded-lg px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Part Type */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Part Type</label>
            <input
              type="text"
              placeholder="e.g., Brake Pads, Oil Filter..."
              value={filters.partType}
              onChange={(e) => setFilters({ ...filters, partType: e.target.value })}
              className="w-full h-[48px] bg-white border-2 border-gray-300 rounded-lg px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
            />
          </div>

          {/* Color for Body Parts */}
          <div>
            <h3 className="text-lg mb-3 text-gray-900">Color (for body parts)</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleColorToggle(color.value)}
                  className="size-[36px] sm:size-[40px] rounded-lg border-2 transition-all hover:scale-110 relative"
                  style={{
                    backgroundColor: color.color,
                    borderColor: filters.colors.includes(color.value) ? '#6366f1' : color.border,
                    boxShadow: filters.colors.includes(color.value) 
                      ? '0 0 0 3px rgba(99, 102, 241, 0.3)' 
                      : 'none',
                  }}
                  title={color.name}
                  aria-label={color.name}
                >
                  {filters.colors.includes(color.value) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-[#6366f1] rounded-full border-2 border-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-lg mb-3 text-gray-900">Price</h3>
            <div className="space-y-4">
              {/* Price labels */}
              <div className="flex justify-between items-center px-2">
                <span className="text-base text-gray-700">$</span>
                <span className="text-base text-gray-700">$$$$$</span>
              </div>
              
              {/* Slider */}
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({ ...filters, priceRange: Number(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#6366f1] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#6366f1] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-lg"
                />
              </div>
              
              {/* Current price indicator */}
              <div className="text-center">
                <span className="text-lg text-[#6366f1]">
                  {priceLabels[filters.priceRange]}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <button
              onClick={handleClearFilters}
              className="h-[52px] bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-700 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
            <button
              onClick={handleSearch}
              className="h-[52px] bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>

          {/* Back to Home link */}
          <div className="text-center pt-2">
            <button
              onClick={onBack}
              className="text-sm text-gray-600 hover:text-[#6366f1] underline transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
