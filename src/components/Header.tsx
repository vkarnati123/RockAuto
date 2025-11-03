import { ShoppingCart, User, Search, GitCompare, SlidersHorizontal, Car, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-[#3d3e4f]">
      <div className="flex items-center gap-2 md:gap-4 lg:gap-6 px-3 md:px-5 py-3 md:py-4">
        {/* Logo */}
        <div className="shrink-0">
          <button
            onClick={onLogoClick}
            className="hover:opacity-80 transition-opacity"
            aria-label="Go to home page"
          >
            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] whitespace-nowrap text-white">RockAuto</h1>
          </button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-4xl flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for parts by name, model, or part number..."
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#6366f1] text-sm md:text-base"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 md:p-2 hover:bg-gray-100 rounded transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
            </button>
          </div>
          
          {/* Advanced Search Button - Desktop Only */}
          <button
            type="button"
            onClick={onAdvancedSearchClick}
            className="hidden lg:flex items-center gap-2 bg-white hover:bg-gray-100 border border-gray-300 px-4 py-3 rounded transition-colors whitespace-nowrap"
            title="Advanced Search"
          >
            <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            <span className="text-[14px] text-gray-700">Advanced</span>
          </button>
        </form>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
          {/* Garage */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                onClick={onGarageClick}
                className="relative bg-[#6366f1] rounded-lg size-[50px] lg:size-[60px] flex items-center justify-center hover:bg-[#4f46e5] transition-colors"
              >
                <Car className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                {vehicleCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 lg:-top-2 lg:-right-2 bg-[#10b981] text-white rounded-full w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center text-xs lg:text-sm">
                    {vehicleCount}
                  </span>
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-white text-gray-900 border border-gray-200 shadow-lg">
              <p className="max-w-[200px]">
                {vehicleCount > 0 
                  ? `My Garage (${vehicleCount} vehicle${vehicleCount !== 1 ? 's' : ''}) - Add your vehicles to get personalized parts`
                  : 'My Garage - Add your vehicles to get personalized parts'}
              </p>
            </TooltipContent>
          </Tooltip>

          {/* Compare */}
          <button 
            onClick={onCompareClick}
            className="relative bg-[#6366f1] rounded-lg size-[50px] lg:size-[60px] flex items-center justify-center hover:bg-[#4f46e5] transition-colors"
            title="Compare Products"
          >
            <GitCompare className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            {compareCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 lg:-top-2 lg:-right-2 bg-[#f59e0b] text-white rounded-full w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center text-xs lg:text-sm">
                {compareCount}
              </span>
            )}
          </button>

          {/* Cart */}
          <button 
            onClick={onCartClick}
            className="relative bg-[#6366f1] rounded-lg size-[50px] lg:size-[60px] flex items-center justify-center hover:bg-[#4f46e5] transition-colors"
            title="Shopping Cart"
          >
            <ShoppingCart className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 lg:-top-2 lg:-right-2 bg-[#ef4444] text-white rounded-full w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center text-xs lg:text-sm">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* User Profile with Dropdown */}
          <div className="relative group">
            <button 
              onClick={onProfileClick}
              className="bg-[#6366f1] rounded-full size-[50px] lg:size-[60px] flex items-center justify-center hover:bg-[#4f46e5] transition-colors"
              title="User Profile"
            >
              <User className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden min-w-[200px]">
                <div className="py-1">
                  <button
                    onClick={onLoginClick}
                    className="w-full text-left px-4 py-3 hover:bg-[#f3f4f6] transition-colors flex items-center gap-3"
                  >
                    <User className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900">Login</span>
                  </button>
                  <div className="h-px bg-gray-200 mx-2"></div>
                  <button
                    onClick={onSignUpClick}
                    className="w-full text-left px-4 py-3 hover:bg-[#f3f4f6] transition-colors flex items-center gap-3"
                  >
                    <User className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900">Sign Up</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden shrink-0">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative bg-[#6366f1] rounded-lg size-[44px] flex items-center justify-center hover:bg-[#4f46e5] transition-colors"
            title="Menu"
            aria-label="Open menu"
          >
            <MoreVertical className="w-6 h-6 text-white" />
            {(cartItemCount > 0 || compareCount > 0 || vehicleCount > 0) && (
              <span className="absolute -top-1 -right-1 bg-[#ef4444] w-3 h-3 rounded-full"></span>
            )}
          </button>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black/20 z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              ></div>
              
              {/* Menu */}
              <div className="absolute right-3 top-full mt-2 bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden min-w-[220px] z-50">
                <div className="py-1">
                  <button
                    onClick={() => {
                      onGarageClick?.();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-[#f3f4f6] transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-900">My Garage</span>
                    </div>
                    {vehicleCount > 0 && (
                      <span className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                        {vehicleCount}
                      </span>
                    )}
                  </button>
                  
                  <div className="h-px bg-gray-200 mx-2"></div>
                  
                  <button
                    onClick={() => {
                      onCompareClick?.();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-[#f3f4f6] transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <GitCompare className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-900">Compare</span>
                    </div>
                    {compareCount > 0 && (
                      <span className="bg-[#f59e0b] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                        {compareCount}
                      </span>
                    )}
                  </button>
                  
                  <div className="h-px bg-gray-200 mx-2"></div>
                  
                  <button
                    onClick={() => {
                      onCartClick?.();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-[#f3f4f6] transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <ShoppingCart className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-900">Cart</span>
                    </div>
                    {cartItemCount > 0 && (
                      <span className="bg-[#ef4444] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                        {cartItemCount}
                      </span>
                    )}
                  </button>
                  
                  <div className="h-px bg-gray-200 mx-2"></div>
                  
                  <button
                    onClick={() => {
                      onAdvancedSearchClick?.();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-[#f3f4f6] transition-colors flex items-center gap-3 lg:hidden"
                  >
                    <SlidersHorizontal className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900">Advanced Search</span>
                  </button>
                  
                  <div className="h-px bg-gray-200 mx-2"></div>
                  
                  <button
                    onClick={() => {
                      onLoginClick?.();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-[#f3f4f6] transition-colors flex items-center gap-3"
                  >
                    <User className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900">Login</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      onSignUpClick?.();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-[#f3f4f6] transition-colors flex items-center gap-3"
                  >
                    <User className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900">Sign Up</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Purple accent bar */}
      <div className="bg-[#5b5fc7] text-white text-center py-2 md:py-3">
        <p className="text-xs md:text-sm lg:text-base px-2">ALL THE PARTS YOUR CAR WILL EVER NEED</p>
      </div>
    </header>
  );
}
