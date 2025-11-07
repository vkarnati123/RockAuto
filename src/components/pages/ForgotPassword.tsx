import { useState } from 'react';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

interface ForgotPasswordProps {
  onBack: () => void;
  onLogin: () => void;
}

export function ForgotPassword({ onBack, onLogin }: ForgotPasswordProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 bg-[#f5f5f7]">
        <div className="w-full max-w-[480px]">
          {/* Success Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-[#10b981] px-8 py-8 text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-[32px] text-white mb-2">Check Your Email</h1>
            </div>

            {/* Content */}
            <div className="px-8 py-8">
              <div className="text-center mb-6">
                <p className="text-[16px] text-gray-700 mb-4">
                  We've sent password reset instructions to:
                </p>
                <p className="text-[18px] text-[#6366f1] mb-6">{email}</p>
                <p className="text-[14px] text-gray-600">
                  Didn't receive the email? Check your spam folder or try again.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full h-[48px] bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[16px]">Try Another Email</span>
                </button>
                <button
                  onClick={onLogin}
                  className="w-full h-[48px] bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-lg transition-colors"
                >
                  <span className="text-[16px]">Back to Sign In</span>
                </button>
              </div>

              {/* Support Link */}
              <div className="mt-6 text-center">
                <p className="text-[14px] text-gray-600">
                  Need help?{' '}
                  <a href="#" className="text-[#6366f1] hover:text-[#4f46e5] transition-colors">
                    Contact Support
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex items-center justify-center p-8 bg-[#f5f5f7]">
      <div className="w-full max-w-[480px]">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[#6366f1] px-8 py-8 text-center">
            <h1 className="text-[32px] text-white mb-2">Reset Password</h1>
            <p className="text-[16px] text-white/90">
              Enter your email to receive reset instructions
            </p>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            {/* Back Button */}
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-[14px] text-gray-600 hover:text-gray-800 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to sign in
            </button>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-[14px] text-blue-800">
                  We'll send you an email with instructions to reset your password. Make sure to
                  check your spam folder if you don't see it in your inbox.
                </p>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="reset-email" className="block text-[14px] text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="reset-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[48px] pl-10 pr-4 bg-white border border-gray-300 rounded-lg text-[16px] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-[48px] bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-lg transition-colors"
              >
                <span className="text-[16px]">Send Reset Link</span>
              </button>
            </form>

            {/* Additional Help */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-[14px] text-gray-900 mb-2">Having trouble?</h3>
              <ul className="space-y-1 text-[13px] text-gray-600">
                <li>• Make sure you're using the email associated with your account</li>
                <li>• Check your spam or junk folder</li>
                <li>• The reset link expires after 24 hours</li>
              </ul>
            </div>

            {/* Support Link */}
            <div className="mt-6 text-center">
              <p className="text-[14px] text-gray-600">
                Still need help?{' '}
                <a href="#" className="text-[#6366f1] hover:text-[#4f46e5] transition-colors">
                  Contact our support team
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
