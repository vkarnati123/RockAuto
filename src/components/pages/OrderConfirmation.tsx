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
      <div className="max-w-[1200px] mx-auto px-8 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-[40px] text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 text-lg">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        {/* Order Number & Tracking */}
        <div className="bg-gradient-to-r from-[#6366f1] to-[#4f46e5] rounded-xl p-8 mb-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <Package className="w-8 h-8 mx-auto mb-2 opacity-90" />
              <p className="text-white/80 text-sm mb-1">Order Number</p>
              <p className="text-[24px]">{orderNumber}</p>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 opacity-90" />
              <p className="text-white/80 text-sm mb-1">Estimated Delivery</p>
              <p className="text-[24px]">{estimatedDelivery}</p>
            </div>
            <div className="text-center">
              <Truck className="w-8 h-8 mx-auto mb-2 opacity-90" />
              <p className="text-white/80 text-sm mb-1">Shipping Status</p>
              <p className="text-[24px]">Processing</p>
            </div>
          </div>
        </div>

        {/* Order Timeline */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8 shadow-sm">
          <h2 className="text-[24px] text-gray-900 mb-6">Order Timeline</h2>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-10 bottom-10 w-0.5 bg-gray-300"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {/* Order Placed */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0 relative z-10">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-gray-900 mb-1">Order Placed</h3>
                  <p className="text-sm text-gray-600">
                    {new Date().toLocaleString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit'
                    })}
                  </p>
                  <p className="text-sm text-green-600 mt-1">✓ Completed</p>
                </div>
              </div>

              {/* Processing */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#6366f1] rounded-full flex items-center justify-center shrink-0 relative z-10 animate-pulse">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-gray-900 mb-1">Processing Order</h3>
                  <p className="text-sm text-gray-600">Preparing your items for shipment</p>
                  <p className="text-sm text-[#6366f1] mt-1">● In Progress</p>
                </div>
              </div>

              {/* Shipped */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center shrink-0 relative z-10">
                  <Truck className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-gray-600 mb-1">Shipped</h3>
                  <p className="text-sm text-gray-500">Expected within 1-2 business days</p>
                </div>
              </div>

              {/* Delivered */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center shrink-0 relative z-10">
                  <MapPin className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-gray-600 mb-1">Delivered</h3>
                  <p className="text-sm text-gray-500">Expected by {estimatedDelivery}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Items */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-[24px] text-gray-900 mb-6">Order Items</h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{item.product.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">Quantity: {item.quantity}</p>
                      <p className="text-[#6366f1]">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#6366f1]" />
                </div>
                <h2 className="text-[20px] text-gray-900">Shipping Address</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-900 mb-1">
                  {contactInfo.firstName} {contactInfo.lastName}
                </p>
                <p className="text-gray-700">{contactInfo.address}</p>
                <p className="text-gray-700">
                  {contactInfo.city}, {contactInfo.state} {contactInfo.zipCode}
                </p>
                <p className="text-gray-700">{contactInfo.country}</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-[#6366f1]" />
                </div>
                <h2 className="text-[20px] text-gray-900">Contact Information</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">{contactInfo.phone}</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-[#6366f1]" />
                </div>
                <h2 className="text-[20px] text-gray-900">Payment Method</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-900 mb-2">Credit Card</p>
                <p className="text-gray-700">
                  •••• •••• •••• {paymentInfo.cardNumber.slice(-4)}
                </p>
                <p className="text-sm text-gray-600 mt-2">{paymentInfo.cardName}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Summary & Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Vehicle Card */}
              {selectedVehicle && (
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#6366f1] bg-opacity-10 rounded-full flex items-center justify-center">
                      <Car className="w-5 h-5 text-[#6366f1]" />
                    </div>
                    <h3 className="text-[18px] text-gray-900">Vehicle</h3>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-900 mb-1">
                      {selectedVehicle.year} {selectedVehicle.make}
                    </p>
                    <p className="text-gray-900 mb-1">
                      {selectedVehicle.model}
                    </p>
                    <p className="text-sm text-gray-600">{selectedVehicle.engine}</p>
                  </div>
                </div>
              )}

              {/* Order Summary */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-[20px] text-gray-900 mb-4">Order Summary</h3>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[18px] text-gray-900">Total Paid</span>
                    <span className="text-[24px] text-[#6366f1]">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => window.print()}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mb-3"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Receipt</span>
                </button>

                <button
                  onClick={onContinueShopping}
                  className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white py-3 rounded-lg transition-colors"
                >
                  Continue Shopping
                </button>
              </div>

              {/* Help Card */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-blue-900 mb-3">Need Help?</h3>
                <p className="text-sm text-blue-700 mb-4">
                  If you have any questions about your order, please contact our support team.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors text-sm">
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
