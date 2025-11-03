import { ArrowLeft, CreditCard, Lock, Calendar, Shield, Car, Package, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Vehicle } from './Garage';
import { CartItem } from './ShoppingCart';
import { ContactInfo } from './CheckoutContact';

interface CheckoutPaymentProps {
  onBack: () => void;
  onContinue: (paymentInfo: PaymentInfo) => void;
  selectedVehicle: Vehicle | null;
  cartItems: CartItem[];
  contactInfo: ContactInfo;
}

export interface PaymentInfo {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
  billingAddress: string;
  billingCity: string;
  billingState: string;
  billingZipCode: string;
  sameAsShipping: boolean;
}

export function CheckoutPayment({ onBack, onContinue, selectedVehicle, cartItems, contactInfo }: CheckoutPaymentProps) {
  const [formData, setFormData] = useState<PaymentInfo>({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZipCode: '',
    sameAsShipping: true,
  });

  const [errors, setErrors] = useState<Partial<PaymentInfo>>({});

  const handleChange = (field: keyof PaymentInfo, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }

    // If "same as shipping" is checked, clear billing errors
    if (field === 'sameAsShipping' && value === true) {
      setErrors({
        ...errors,
        billingAddress: undefined,
        billingCity: undefined,
        billingState: undefined,
        billingZipCode: undefined,
      });
    }
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const chunks = cleaned.match(/.{1,4}/g);
    return chunks ? chunks.join(' ') : cleaned;
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const validateForm = () => {
    const newErrors: Partial<PaymentInfo> = {};

    if (!formData.cardNumber.replace(/\s/g, '')) {
      newErrors.cardNumber = 'Card number is required';
    } else if (formData.cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = 'Invalid card number';
    }

    if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required';

    if (!formData.expiryDate) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Invalid expiry date (MM/YY)';
    }

    if (!formData.cvv) {
      newErrors.cvv = 'CVV is required';
    } else if (formData.cvv.length !== 3) {
      newErrors.cvv = 'Invalid CVV';
    }

    if (!formData.sameAsShipping) {
      if (!formData.billingAddress.trim()) newErrors.billingAddress = 'Billing address is required';
      if (!formData.billingCity.trim()) newErrors.billingCity = 'City is required';
      if (!formData.billingState.trim()) newErrors.billingState = 'State is required';
      if (!formData.billingZipCode.trim()) {
        newErrors.billingZipCode = 'ZIP code is required';
      } else if (!/^\d{5}(-\d{4})?$/.test(formData.billingZipCode)) {
        newErrors.billingZipCode = 'Invalid ZIP code';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onContinue(formData);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div className="flex-1 bg-[#f5f5f7]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4 md:mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm md:text-base">Back to Contact Info</span>
        </button>

        {/* Progress Indicator */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-sm md:text-base">
                ✓
              </div>
              <span className="text-green-600 text-xs md:text-base whitespace-nowrap">Contact</span>
            </div>
            <div className="w-8 md:w-16 h-0.5 bg-[#6366f1] shrink-0"></div>
            <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#6366f1] text-white rounded-full flex items-center justify-center text-sm md:text-base">
                2
              </div>
              <span className="text-[#6366f1] text-xs md:text-base whitespace-nowrap">Payment</span>
            </div>
            <div className="w-8 md:w-16 h-0.5 bg-gray-300 shrink-0"></div>
            <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm md:text-base">
                3
              </div>
              <span className="text-gray-600 text-xs md:text-base whitespace-nowrap">Confirm</span>
            </div>
          </div>
          <h1 className="text-[24px] md:text-[32px] lg:text-[36px] text-gray-900 text-center px-4">Payment Information</h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Payment Method Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center shrink-0">
                    <CreditCard className="w-5 h-5 text-[#6366f1]" />
                  </div>
                  <h2 className="text-[20px] md:text-[24px] text-gray-900">Payment Method</h2>
                </div>

                <div className="space-y-4">
                  {/* Card Number */}
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm md:text-base">Card Number *</label>
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => {
                        const formatted = formatCardNumber(e.target.value.replace(/\s/g, '').slice(0, 16));
                        handleChange('cardNumber', formatted);
                      }}
                      className={`w-full px-3 md:px-4 py-2.5 md:py-3 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] text-sm md:text-base`}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                    {errors.cardNumber && (
                      <p className="text-red-600 text-xs md:text-sm mt-1">{errors.cardNumber}</p>
                    )}
                  </div>

                  {/* Cardholder Name */}
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm md:text-base">Cardholder Name *</label>
                    <input
                      type="text"
                      value={formData.cardName}
                      onChange={(e) => handleChange('cardName', e.target.value.toUpperCase())}
                      className={`w-full px-3 md:px-4 py-2.5 md:py-3 border ${errors.cardName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] text-sm md:text-base`}
                      placeholder="JOHN DOE"
                    />
                    {errors.cardName && (
                      <p className="text-red-600 text-xs md:text-sm mt-1">{errors.cardName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Expiry Date */}
                    <div>
                      <label className="block text-gray-700 mb-2 text-sm md:text-base">Expiry Date *</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.expiryDate}
                          onChange={(e) => {
                            const formatted = formatExpiryDate(e.target.value);
                            handleChange('expiryDate', formatted);
                          }}
                          className={`w-full px-3 md:px-4 py-2.5 md:py-3 border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] text-sm md:text-base pr-10`}
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                        <Calendar className="w-4 h-4 md:w-5 md:h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
                      </div>
                      {errors.expiryDate && (
                        <p className="text-red-600 text-xs md:text-sm mt-1">{errors.expiryDate}</p>
                      )}
                    </div>

                    {/* CVV */}
                    <div>
                      <label className="block text-gray-700 mb-2 text-sm md:text-base">CVV *</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.cvv}
                          onChange={(e) => handleChange('cvv', e.target.value.replace(/\D/g, '').slice(0, 3))}
                          className={`w-full px-3 md:px-4 py-2.5 md:py-3 border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] text-sm md:text-base pr-10`}
                          placeholder="123"
                          maxLength={3}
                        />
                        <Lock className="w-4 h-4 md:w-5 md:h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
                      </div>
                      {errors.cvv && (
                        <p className="text-red-600 text-xs md:text-sm mt-1">{errors.cvv}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="mt-4 md:mt-6 bg-green-50 border border-green-200 rounded-lg p-3 md:p-4">
                  <div className="flex items-start gap-2 md:gap-3">
                    <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs md:text-sm text-green-900 mb-1">Your payment is secure</p>
                      <p className="text-xs text-green-700">
                        We use industry-standard encryption to protect your payment information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing Address Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm">
                <h2 className="text-[20px] md:text-[24px] text-gray-900 mb-4 md:mb-6">Billing Address</h2>

                {/* Same as Shipping Checkbox */}
                <label className="flex items-center gap-2 md:gap-3 mb-4 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.sameAsShipping}
                    onChange={(e) => handleChange('sameAsShipping', e.target.checked)}
                    className="w-4 h-4 md:w-5 md:h-5 text-[#6366f1] border-gray-300 rounded focus:ring-[#6366f1] shrink-0"
                  />
                  <span className="text-sm md:text-base text-gray-700">Same as shipping address</span>
                </label>

                {!formData.sameAsShipping && (
                  <div className="space-y-4">
                    {/* Billing Street Address */}
                    <div>
                      <label className="block text-gray-700 mb-2 text-sm md:text-base">Street Address *</label>
                      <input
                        type="text"
                        value={formData.billingAddress}
                        onChange={(e) => handleChange('billingAddress', e.target.value)}
                        className={`w-full px-3 md:px-4 py-2.5 md:py-3 border ${errors.billingAddress ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] text-sm md:text-base`}
                        placeholder="123 Main Street"
                      />
                      {errors.billingAddress && (
                        <p className="text-red-600 text-xs md:text-sm mt-1">{errors.billingAddress}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {/* City */}
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-gray-700 mb-2 text-sm md:text-base">City *</label>
                        <input
                          type="text"
                          value={formData.billingCity}
                          onChange={(e) => handleChange('billingCity', e.target.value)}
                          className={`w-full px-3 md:px-4 py-2.5 md:py-3 border ${errors.billingCity ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] text-sm md:text-base`}
                          placeholder="New York"
                        />
                        {errors.billingCity && (
                          <p className="text-red-600 text-xs md:text-sm mt-1">{errors.billingCity}</p>
                        )}
                      </div>

                      {/* State */}
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm md:text-base">State *</label>
                        <input
                          type="text"
                          value={formData.billingState}
                          onChange={(e) => handleChange('billingState', e.target.value)}
                          className={`w-full px-3 md:px-4 py-2.5 md:py-3 border ${errors.billingState ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] text-sm md:text-base`}
                          placeholder="NY"
                        />
                        {errors.billingState && (
                          <p className="text-red-600 text-xs md:text-sm mt-1">{errors.billingState}</p>
                        )}
                      </div>

                      {/* ZIP Code */}
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm md:text-base">ZIP *</label>
                        <input
                          type="text"
                          value={formData.billingZipCode}
                          onChange={(e) => handleChange('billingZipCode', e.target.value)}
                          className={`w-full px-3 md:px-4 py-2.5 md:py-3 border ${errors.billingZipCode ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] text-sm md:text-base`}
                          placeholder="10001"
                        />
                        {errors.billingZipCode && (
                          <p className="text-red-600 text-xs md:text-sm mt-1">{errors.billingZipCode}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {formData.sameAsShipping && (
                  <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                    <p className="text-sm md:text-base text-gray-700">
                      {contactInfo.address}, {contactInfo.city}, {contactInfo.state} {contactInfo.zipCode}
                    </p>
                  </div>
                )}
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white py-3 md:py-4 rounded-lg transition-all hover:shadow-lg flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Lock className="w-4 h-4 md:w-5 md:h-5" />
                <span>Place Order</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8 space-y-4 md:space-y-6">
              {/* Vehicle Card */}
              {selectedVehicle && (
                <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center shrink-0">
                      <Car className="w-5 h-5 text-[#6366f1]" />
                    </div>
                    <h3 className="text-[16px] md:text-[18px] text-gray-900">Your Vehicle</h3>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                    <p className="text-sm md:text-base text-gray-900 mb-1">
                      {selectedVehicle.year} {selectedVehicle.make}
                    </p>
                    <p className="text-sm md:text-base text-gray-900 mb-1">
                      {selectedVehicle.model}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">{selectedVehicle.engine}</p>
                  </div>
                </div>
              )}

              {/* Order Summary */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center shrink-0">
                    <Package className="w-5 h-5 text-[#6366f1]" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] text-gray-900">Order Summary</h3>
                </div>

                <div className="space-y-2 md:space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-xs md:text-sm">
                      <span className="text-gray-700 line-clamp-1 pr-2">
                        {item.product.name} x{item.quantity}
                      </span>
                      <span className="text-gray-900 shrink-0">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between text-xs md:text-sm text-gray-700 mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm text-gray-700 mb-2">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm text-gray-700">
                    <span>Tax</span>
                    <span>${(subtotal * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[16px] md:text-[18px] text-gray-900">Total</span>
                    <span className="text-[20px] md:text-[24px] text-[#6366f1]">
                      ${(subtotal + subtotal * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
