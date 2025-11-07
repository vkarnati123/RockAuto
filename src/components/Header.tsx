import { ShoppingCart, User, Search, GitCompare, SlidersHorizontal, Car } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartItemCount: number;
  onSearch: (query: string) => void;
  compareCount?: number;
  onCompareClick?: () => void;
  onCartClick?: () => void;
  onAdvancedSearchClick?: () => void;
  onLogoClick?: () => void;
  onLoginClick?: () => void;
  onSignUpClick?: () => void;
  onProfileClick?: () => void;
  onGarageClick?: () => void;
  vehicleCount?: number;
}

export function Header({ cartItemCount, onSearch, compareCount = 0, onCompareClick, onCartClick, onAdvancedSearchClick, onLogoClick, onLoginClick, onSignUpClick, onProfileClick, onGarageClick, vehicleCount = 0 }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-[#3d3e4f]">
      <div className="max-w-screen-xl mx-auto w-full px-4 py-2">
        <div className="w-full flex justify-between items-center">
          {/* Logo - left */}
          <div className="flex items-center gap-2 flex-none">
            <button
              onClick={onLogoClick}
              className="hover:opacity-80 transition-opacity"
              aria-label="Go to home page"
            >
              <img src="/src/logo.png" alt="RockAuto" className="h-8 p-1 rounded" />
            </button>
          </div>

          {/* Search*/}
          <div className="hidden flex w-full max-w-3xl justify-center px-4">
            <form onSubmit={handleSearch} className="w-full flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for parts by name, model, or part number..."
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#5b5fc7]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-100 rounded transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <button
                type="button"
                onClick={onAdvancedSearchClick}
                className="flex items-center gap-1.5 bg-white hover:bg-gray-100 border border-gray-300 px-3 py-2 rounded transition-colors whitespace-nowrap"
                title="Advanced Search"
              >
                <SlidersHorizontal className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Advanced</span>
              </button>
            </form>
          </div>

          {/* Icons - right */}
          <div className="flex items-center gap-2 flex-none">
            {/* Garage */}
            <button 
              onClick={onGarageClick}
              className="relative bg-[#5b5fc7] rounded-lg size-9 flex items-center justify-center hover:bg-[#4a4db5] transition-colors"
              title="My Garage"
            >
              <Car className="w-5 h-5 text-white" />
              {vehicleCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#10b981] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {vehicleCount}
                </span>
              )}
            </button>

            {/* Compare */}
            <button 
              onClick={onCompareClick}
              className="relative bg-[#5b5fc7] rounded-lg size-9 flex items-center justify-center hover:bg-[#4a4db5] transition-colors"
              title="Compare Products"
            >
              <GitCompare className="w-5 h-5 text-white" />
              {compareCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#f59e0b] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {compareCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button 
              onClick={onCartClick}
              className="relative bg-[#5b5fc7] rounded-lg size-9 flex items-center justify-center hover:bg-[#4a4db5] transition-colors"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ef4444] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* User Profile with Dropdown */}
            <div className="relative group">
              <button 
                onClick={onProfileClick}
                className="bg-[#5b5fc7] rounded-full size-9 flex items-center justify-center hover:bg-[#4a4db5] transition-colors"
                title="User Profile"
              >
                <User className="w-5 h-5 text-white" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden min-w-[160px]">
                  <div className="py-1">
                    <button
                      onClick={onLoginClick}
                      className="w-full text-left px-3 py-2 hover:bg-[#f3f4f6] transition-colors flex items-center gap-2"
                    >
                      <User className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-900">Login</span>
                    </button>
                    <div className="h-px bg-gray-200 mx-2"></div>
                    <button
                      onClick={onSignUpClick}
                      className="w-full text-left px-3 py-2 hover:bg-[#f3f4f6] transition-colors flex items-center gap-2"
                    >
                      <User className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-900">Sign Up</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {mobileSearchOpen && (
          <div className="md:hidden px-4 pb-3 bg-[#3d3e4f]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSearch(searchQuery);
                setMobileSearchOpen(false);
              }}
              className="w-full"
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search parts..."
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#5b5fc7]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-100 rounded transition-colors"
                  aria-label="Search mobile"
                >
                  <Search className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Purple accent bar */}
      <div className="bg-[#5b5fc7] text-white text-center py-2">
        <p className="text-xs leading-tight">ALL THE PARTS YOUR CAR WILL EVER NEED</p>
      </div>
    </header>
  );
}
