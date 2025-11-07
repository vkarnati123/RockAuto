import { X, Lock, Car, ShoppingBag, ArrowLeft, ChevronDown, Truck, Shield, Tag, AlertCircle } from 'lucide-react';
import { Product } from '../ProductCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Vehicle } from './Garage';
import { useState } from 'react';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface ShoppingCartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onContinueShopping: () => void;
  onCheckout: () => void;
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  onSelectVehicle: (vehicleId: number) => void;
  onGoToGarage: () => void;
}

export function ShoppingCart({ 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onContinueShopping,
  onCheckout,
  vehicles,
  selectedVehicle,
  onSelectVehicle,
  onGoToGarage
}: ShoppingCartProps) {
  const [showVehicleDropdown, setShowVehicleDropdown] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const freeShippingThreshold = 50;
  const shipping = subtotal >= freeShippingThreshold ? 0 : 9.99;
  const promoDiscount = promoApplied ? subtotal * 0.1 : 0; // 10% discount
  const estimatedTax = (subtotal - promoDiscount) * 0.08;
  const total = subtotal - promoDiscount + shipping + estimatedTax;

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'save10') {
      setPromoApplied(true);
    }
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="flex-1 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 py-12">
          {/* Back Button */}
          <button
            onClick={onContinueShopping}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Continue Shopping</span>
          </button>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-[32px] text-gray-900 mb-3">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8 max-w-md text-center">
              Looks like you haven't added any parts to your cart yet. Start shopping to find the perfect parts for your vehicle.
            </p>
            <button
              onClick={onContinueShopping}
              className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-4 rounded-lg transition-colors"
            >
              Browse Products
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-600">Free Shipping Over $50</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">Secure Checkout</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Car className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Quality Parts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#f5f5f7]">
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onContinueShopping}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Continue Shopping</span>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[40px] text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {/* Vehicle Card - Prominent at top */}
        {selectedVehicle && (
          <div className="bg-gradient-to-r from-[#6366f1] to-[#4f46e5] rounded-xl p-6 mb-8 shadow-lg">
            <div className="flex items-center gap-6">
              {/* Vehicle Image */}
              <div className="w-48 h-32 bg-white/10 rounded-lg overflow-hidden border-2 border-white/20 backdrop-blur-sm shrink-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1686074449582-6374eaebacf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGNpdmljJTIwY2FyfGVufDF8fHx8MTc2MTQyMTQ2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={`${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Vehicle Details */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Car className="w-5 h-5 text-white/80" />
                  <span className="text-sm text-white/80">Ordering for</span>
                </div>
                <h2 className="text-[28px] text-white mb-1">
                  {selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model}
                </h2>
                <p className="text-white/90 mb-3">
                  {selectedVehicle.engine}
                </p>
                {selectedVehicle.nickname && (
                  <p className="text-sm text-white/80 italic mb-3">"{selectedVehicle.nickname}"</p>
                )}
                
                {/* Switch Vehicle Button */}
                {vehicles.length > 1 && (
                  <div className="relative inline-block">
                    <button
                      onClick={() => setShowVehicleDropdown(!showVehicleDropdown)}
                      className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-5 py-2.5 rounded-lg transition-all border border-white/30"
                    >
                      <Car className="w-4 h-4" />
                      <span>Switch Vehicle</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${showVehicleDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {showVehicleDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-[320px] bg-white rounded-lg border border-gray-200 shadow-2xl z-50 max-h-[300px] overflow-y-auto">
                        {vehicles.filter(v => v.id !== selectedVehicle.id).map((vehicle) => (
                          <button
                            key={vehicle.id}
                            onClick={() => {
                              onSelectVehicle(vehicle.id);
                              setShowVehicleDropdown(false);
                            }}
                            className="w-full p-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 group"
                          >
                            <p className="text-gray-900 group-hover:text-[#6366f1] transition-colors mb-1">
                              {vehicle.year} {vehicle.make} {vehicle.model}
                            </p>
                            <p className="text-sm text-gray-600">{vehicle.engine}</p>
                            {vehicle.nickname && (
                              <p className="text-xs text-[#6366f1] mt-1">"{vehicle.nickname}"</p>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Badge */}
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <p className="text-xs text-white/80 mb-1">Vehicle Cart</p>
                  <p className="text-white">{cartItems.length} {cartItems.length === 1 ? 'part' : 'parts'}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No Vehicle Selected Message */}
        {!selectedVehicle && vehicles.length > 0 && (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-orange-900 mb-2">No Vehicle Selected</h3>
                <p className="text-orange-700 mb-4">
                  Please select a vehicle to ensure you're ordering the correct parts.
                </p>
                <button
                  onClick={onGoToGarage}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg transition-colors"
                >
                  Go to Garage
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items - Left Column (2/3) */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div 
                key={item.product.id}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all group"
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                    <ImageWithFallback
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    {/* Header Row */}
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-[22px] text-gray-900 mb-1 group-hover:text-[#6366f1] transition-colors">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                          Part #: {String(item.product.id).padStart(6, '0')}
                        </p>
                        <p className="text-sm text-gray-500">
                          Category: {item.product.category}
                        </p>
                      </div>
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        aria-label="Remove item"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Stock Status */}
                    <div className="mb-4">
                      {item.product.inStock ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-green-100 text-green-800 border border-green-200">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                          In Stock
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-red-100 text-red-800 border border-red-200">
                          <AlertCircle className="w-3 h-3" />
                          Out of Stock
                        </span>
                      )}
                    </div>

                    {/* Bottom Row - Quantity and Price */}
                    <div className="flex justify-between items-center mt-auto">
                      {/* Quantity Selector */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600">Quantity:</span>
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <div className="w-12 h-10 flex items-center justify-center border-x border-gray-300">
                            <span className="text-gray-900">{item.quantity}</span>
                          </div>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-[24px] text-[#6366f1]">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-gray-500">
                            ${item.product.price.toFixed(2)} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Free Shipping Banner */}
            {subtotal < freeShippingThreshold && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-blue-900 mb-1">Almost there!</h4>
                    <p className="text-sm text-blue-700">
                      Add <span className="font-semibold">${(freeShippingThreshold - subtotal).toFixed(2)}</span> more to your order to qualify for <span className="font-semibold">FREE shipping</span>!
                    </p>
                    <div className="mt-3 bg-white rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-blue-500 h-full transition-all duration-500"
                        style={{ width: `${Math.min((subtotal / freeShippingThreshold) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary - Right Column (1/3) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Order Summary Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-[20px] text-gray-900 mb-6">Order Summary</h3>

                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Promo code"
                        disabled={promoApplied}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] disabled:bg-gray-100 disabled:text-gray-500"
                      />
                      <Tag className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
                    </div>
                    {!promoApplied ? (
                      <button
                        onClick={handleApplyPromo}
                        className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors whitespace-nowrap"
                      >
                        Apply
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setPromoApplied(false);
                          setPromoCode('');
                        }}
                        className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors whitespace-nowrap"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  {promoApplied && (
                    <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      Promo code applied successfully!
                    </p>
                  )}
                </div>

                {/* Summary Items */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Promo Discount</span>
                      <span>-${promoDiscount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-700">
                    <span className="flex items-center gap-2">
                      Shipping
                      {shipping === 0 && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">FREE</span>
                      )}
                    </span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-gray-700">
                    <span>Estimated Tax</span>
                    <span>${estimatedTax.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[20px] text-gray-900">Total</span>
                    <span className="text-[28px] text-[#6366f1]">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={onCheckout}
                  className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white py-4 rounded-lg transition-all hover:shadow-lg flex items-center justify-center gap-2 mb-4"
                >
                  <Lock className="w-5 h-5" />
                  <span>Proceed to Checkout</span>
                </button>

                {/* Security Message */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-700 mb-1">Secure Checkout</p>
                      <p className="text-xs text-gray-600">
                        Your payment information is encrypted and secure
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <Truck className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-700">Free Shipping</p>
                  <p className="text-xs text-gray-500">Orders over $50</p>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-700">Secure Payment</p>
                  <p className="text-xs text-gray-500">SSL Encrypted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
