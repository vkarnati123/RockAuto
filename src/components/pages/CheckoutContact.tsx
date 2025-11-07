import { ArrowLeft, User, Mail, Phone, MapPin, ChevronRight, Car, Package } from 'lucide-react';
import { useState } from 'react';
import { Vehicle } from './Garage';
import { CartItem } from './ShoppingCart';

interface CheckoutContactProps {
  onBack: () => void;
  onContinue: (contactInfo: ContactInfo) => void;
  selectedVehicle: Vehicle | null;
  cartItems: CartItem[];
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export function CheckoutContact({ onBack, onContinue, selectedVehicle, cartItems }: CheckoutContactProps) {
  const [formData, setFormData] = useState<ContactInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
  });

  const [errors, setErrors] = useState<Partial<ContactInfo>>({});

  const handleChange = (field: keyof ContactInfo, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const validateForm = () => {
    const newErrors: Partial<ContactInfo> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Invalid ZIP code';
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
      <div className="max-w-[1200px] mx-auto px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Cart</span>
        </button>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#6366f1] text-white rounded-full flex items-center justify-center">
                1
              </div>
              <span className="text-[#6366f1]">Contact</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                2
              </div>
              <span className="text-gray-600">Payment</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                3
              </div>
              <span className="text-gray-600">Confirm</span>
            </div>
          </div>
          <h1 className="text-[36px] text-gray-900 text-center">Contact & Shipping Information</h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-[#6366f1]" />
                  </div>
                  <h2 className="text-[24px] text-gray-900">Contact Information</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label className="block text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Shipping Address Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#6366f1]" />
                  </div>
                  <h2 className="text-[24px] text-gray-900">Shipping Address</h2>
                </div>

                <div className="space-y-4">
                  {/* Street Address */}
                  <div>
                    <label className="block text-gray-700 mb-2">Street Address *</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]`}
                      placeholder="123 Main Street, Apt 4B"
                    />
                    {errors.address && (
                      <p className="text-red-600 text-sm mt-1">{errors.address}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* City */}
                    <div>
                      <label className="block text-gray-700 mb-2">City *</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleChange('city', e.target.value)}
                        className={`w-full px-4 py-3 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]`}
                        placeholder="New York"
                      />
                      {errors.city && (
                        <p className="text-red-600 text-sm mt-1">{errors.city}</p>
                      )}
                    </div>

                    {/* State */}
                    <div>
                      <label className="block text-gray-700 mb-2">State *</label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => handleChange('state', e.target.value)}
                        className={`w-full px-4 py-3 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]`}
                        placeholder="NY"
                      />
                      {errors.state && (
                        <p className="text-red-600 text-sm mt-1">{errors.state}</p>
                      )}
                    </div>

                    {/* ZIP Code */}
                    <div>
                      <label className="block text-gray-700 mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        value={formData.zipCode}
                        onChange={(e) => handleChange('zipCode', e.target.value)}
                        className={`w-full px-4 py-3 border ${errors.zipCode ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]`}
                        placeholder="10001"
                      />
                      {errors.zipCode && (
                        <p className="text-red-600 text-sm mt-1">{errors.zipCode}</p>
                      )}
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-gray-700 mb-2">Country *</label>
                      <select
                        value={formData.country}
                        onChange={(e) => handleChange('country', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Mexico">Mexico</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white py-4 rounded-lg transition-all hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Continue to Payment</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Vehicle Card */}
              {selectedVehicle && (
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center">
                      <Car className="w-5 h-5 text-[#6366f1]" />
                    </div>
                    <h3 className="text-[18px] text-gray-900">Your Vehicle</h3>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-900 mb-1">
                      {selectedVehicle.year} {selectedVehicle.make}
                    </p>
                    <p className="text-gray-900 mb-1">
                      {selectedVehicle.model}
                    </p>
                    <p className="text-sm text-gray-600">{selectedVehicle.engine}</p>
                    {selectedVehicle.nickname && (
                      <p className="text-xs text-[#6366f1] mt-2">"{selectedVehicle.nickname}"</p>
                    )}
                  </div>
                </div>
              )}

              {/* Order Summary */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-[#6366f1]" />
                  </div>
                  <h3 className="text-[18px] text-gray-900">Order Summary</h3>
                </div>

                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span className="text-gray-700">
                        {item.product.name} x{item.quantity}
                      </span>
                      <span className="text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax (estimated)</span>
                    <span>${(subtotal * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[18px] text-gray-900">Total</span>
                    <span className="text-[24px] text-[#6366f1]">
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
