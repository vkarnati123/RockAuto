import { CheckCircle, Package, Truck, MapPin, Calendar, User, Mail, Phone, CreditCard, Car, ArrowLeft, Download } from 'lucide-react';
import { Vehicle } from './Garage';
import { CartItem } from './ShoppingCart';
import { ContactInfo } from './CheckoutContact';
import { PaymentInfo } from './CheckoutPayment';

interface OrderConfirmationProps {
  onContinueShopping: () => void;
  selectedVehicle: Vehicle | null;
  cartItems: CartItem[];
  contactInfo: ContactInfo;
  paymentInfo: PaymentInfo;
  orderNumber: string;
  estimatedDelivery: string;
}

export function OrderConfirmation({
  onContinueShopping,
  selectedVehicle,
  cartItems,
  contactInfo,
  paymentInfo,
  orderNumber,
  estimatedDelivery,
}: OrderConfirmationProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="flex-1 bg-[#f5f5f7]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
        {/* Success Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-600" />
          </div>
          <h1 className="text-[28px] md:text-[36px] lg:text-[40px] text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg px-4">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        {/* Order Number & Tracking */}
        <div className="bg-gradient-to-r from-[#6366f1] to-[#4f46e5] rounded-xl p-4 md:p-6 lg:p-8 mb-6 md:mb-8 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-white">
            <div className="text-center">
              <Package className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 opacity-90" />
              <p className="text-white/80 text-xs md:text-sm mb-1">Order Number</p>
              <p className="text-[18px] md:text-[20px] lg:text-[24px]">{orderNumber}</p>
            </div>
            <div className="text-center">
              <Calendar className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 opacity-90" />
              <p className="text-white/80 text-xs md:text-sm mb-1">Estimated Delivery</p>
              <p className="text-[18px] md:text-[20px] lg:text-[24px]">{estimatedDelivery}</p>
            </div>
            <div className="text-center">
              <Truck className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 opacity-90" />
              <p className="text-white/80 text-xs md:text-sm mb-1">Shipping Status</p>
              <p className="text-[18px] md:text-[20px] lg:text-[24px]">Processing</p>
            </div>
          </div>
        </div>

        {/* Order Timeline */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 lg:p-8 mb-6 md:mb-8 shadow-sm">
          <h2 className="text-[20px] md:text-[24px] text-gray-900 mb-4 md:mb-6">Order Timeline</h2>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[15px] md:left-[19px] top-10 bottom-10 w-0.5 bg-gray-300"></div>
            
            {/* Timeline Items */}
            <div className="space-y-6 md:space-y-8">
              {/* Order Placed */}
              <div className="flex gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0 relative z-10">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="flex-1 pt-0.5 md:pt-1">
                  <h3 className="text-sm md:text-base text-gray-900 mb-1">Order Placed</h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {new Date().toLocaleString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit'
                    })}
                  </p>
                  <p className="text-xs md:text-sm text-green-600 mt-1">✓ Completed</p>
                </div>
              </div>

              {/* Processing */}
              <div className="flex gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#6366f1] rounded-full flex items-center justify-center shrink-0 relative z-10 animate-pulse">
                  <Package className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="flex-1 pt-0.5 md:pt-1">
                  <h3 className="text-sm md:text-base text-gray-900 mb-1">Processing Order</h3>
                  <p className="text-xs md:text-sm text-gray-600">Preparing your items for shipment</p>
                  <p className="text-xs md:text-sm text-[#6366f1] mt-1">● In Progress</p>
                </div>
              </div>

              {/* Shipped */}
              <div className="flex gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center shrink-0 relative z-10">
                  <Truck className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                </div>
                <div className="flex-1 pt-0.5 md:pt-1">
                  <h3 className="text-sm md:text-base text-gray-600 mb-1">Shipped</h3>
                  <p className="text-xs md:text-sm text-gray-500">Expected within 1-2 business days</p>
                </div>
              </div>

              {/* Delivered */}
              <div className="flex gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center shrink-0 relative z-10">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                </div>
                <div className="flex-1 pt-0.5 md:pt-1">
                  <h3 className="text-sm md:text-base text-gray-600 mb-1">Delivered</h3>
                  <p className="text-xs md:text-sm text-gray-500">Expected by {estimatedDelivery}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Left Column - Order Details */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Order Items */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm">
              <h2 className="text-[20px] md:text-[24px] text-gray-900 mb-4 md:mb-6">Order Items</h2>
              <div className="space-y-3 md:space-y-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-3 md:gap-4 pb-3 md:pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm md:text-base text-gray-900 mb-1 truncate">{item.product.name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 mb-2">Quantity: {item.quantity}</p>
                      <p className="text-sm md:text-base text-[#6366f1]">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#6366f1]" />
                </div>
                <h2 className="text-[16px] md:text-[20px] text-gray-900">Shipping Address</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                <p className="text-sm md:text-base text-gray-900 mb-1">
                  {contactInfo.firstName} {contactInfo.lastName}
                </p>
                <p className="text-sm md:text-base text-gray-700">{contactInfo.address}</p>
                <p className="text-sm md:text-base text-gray-700">
                  {contactInfo.city}, {contactInfo.state} {contactInfo.zipCode}
                </p>
                <p className="text-sm md:text-base text-gray-700">{contactInfo.country}</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-[#6366f1]" />
                </div>
                <h2 className="text-[16px] md:text-[20px] text-gray-900">Contact Information</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-600 shrink-0" />
                  <span className="text-sm md:text-base text-gray-700 break-all">{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-gray-600 shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">{contactInfo.phone}</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5 text-[#6366f1]" />
                </div>
                <h2 className="text-[16px] md:text-[20px] text-gray-900">Payment Method</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                <p className="text-sm md:text-base text-gray-900 mb-2">Credit Card</p>
                <p className="text-sm md:text-base text-gray-700">
                  •••• •••• •••• {paymentInfo.cardNumber.slice(-4)}
                </p>
                <p className="text-xs md:text-sm text-gray-600 mt-2">{paymentInfo.cardName}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Summary & Actions */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8 space-y-4 md:space-y-6">
              {/* Vehicle Card */}
              {selectedVehicle && (
                <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center shrink-0">
                      <Car className="w-5 h-5 text-[#6366f1]" />
                    </div>
                    <h3 className="text-[16px] md:text-[18px] text-gray-900">Vehicle</h3>
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
                <h3 className="text-[18px] md:text-[20px] text-gray-900 mb-4">Order Summary</h3>

                <div className="space-y-2 md:space-y-3 mb-4">
                  <div className="flex justify-between text-xs md:text-sm text-gray-700">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm text-gray-700">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm text-gray-700">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-4 md:mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[16px] md:text-[18px] text-gray-900">Total Paid</span>
                    <span className="text-[20px] md:text-[24px] text-[#6366f1]">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => window.print()}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2.5 md:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mb-3 text-sm md:text-base"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Download Receipt</span>
                </button>

                <button
                  onClick={onContinueShopping}
                  className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white py-2.5 md:py-3 rounded-lg transition-colors text-sm md:text-base"
                >
                  Continue Shopping
                </button>
              </div>

              {/* Help Card */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 md:p-6">
                <h3 className="text-sm md:text-base text-blue-900 mb-2 md:mb-3">Need Help?</h3>
                <p className="text-xs md:text-sm text-blue-700 mb-3 md:mb-4">
                  If you have any questions about your order, please contact our support team.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-2.5 rounded-lg transition-colors text-xs md:text-sm">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
