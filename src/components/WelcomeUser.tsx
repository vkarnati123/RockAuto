import { Car } from 'lucide-react';
import { Product } from './ProductCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WelcomeUserProps {
  userName: string;
  recommendedProducts: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onGoToGarage: () => void;
  vehicleCount: number;
}

export function WelcomeUser({
  userName,
  recommendedProducts,
  onProductClick,
  onAddToCart,
  onGoToGarage,
  vehicleCount,
}: WelcomeUserProps) {
  // Show up to 8 recommendations
  const displayedProducts = recommendedProducts.slice(0, 8);

  return (
    <div className="flex-1 p-8 bg-white">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h1 className="text-[40px] text-gray-900 mb-2">
              Welcome {userName}!
            </h1>
            <h2 className="text-[32px] text-gray-700">
              Your Vehicle Recommendations
            </h2>
          </div>

          {/* Your Garage Button */}
          <button
            onClick={onGoToGarage}
            className="flex items-center gap-3 bg-[#9e9e9e] hover:bg-[#7e7e7e] text-white px-8 py-6 rounded-full transition-colors shadow-[0px_2px_0px_0px_#000000]"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Car className="w-7 h-7 text-gray-900" />
            </div>
            <span className="text-[17px] tracking-[1.25px] uppercase">
              Your Garage
            </span>
          </button>
        </div>

        {/* Recommendations Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#6366f1] transition-all cursor-pointer overflow-hidden group"
              >
                {/* Product Image */}
                <div
                  onClick={() => onProductClick(product)}
                  className="h-[200px] bg-gray-100 overflow-hidden"
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div
                    onClick={() => onProductClick(product)}
                    className="mb-4 cursor-pointer"
                  >
                    <h3 className="text-gray-900 mb-2 group-hover:text-[#6366f1] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {product.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-[20px] text-[#6366f1]">
                        ${product.price.toFixed(2)}
                      </p>
                      {product.inStock ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-green-100 text-green-800 border border-green-200">
                          In Stock
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-red-100 text-red-800 border border-red-200">
                          Out of Stock
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => onAddToCart(product)}
                    disabled={!product.inStock}
                    className="w-full bg-[#6366f1] hover:bg-[#4f46e5] disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-3 rounded-[6px] transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center bg-gray-50 rounded-lg border border-gray-200">
            <Car className="w-16 h-16 text-gray-300 mb-4" />
            <h3 className="text-[24px] text-gray-900 mb-2">
              No Recommendations Yet
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              {vehicleCount === 0
                ? 'Add a vehicle to your garage to get personalized part recommendations.'
                : 'We\'re working on personalized recommendations for your vehicles.'}
            </p>
            <button
              onClick={onGoToGarage}
              className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-4 rounded-[6px] transition-colors"
            >
              {vehicleCount === 0 ? 'Add Your First Vehicle' : 'Go to Garage'}
            </button>
          </div>
        )}

        {/* Info Banner */}
        <div className="mt-12 p-6 bg-[#eef2ff] rounded-lg border border-[#c7d2fe]">
          <h3 className="text-[20px] text-[#4338ca] mb-2">
            Personalized for Your Vehicles
          </h3>
          <p className="text-[#4338ca]">
            {vehicleCount > 0
              ? `These parts are recommended based on your ${vehicleCount} vehicle${vehicleCount !== 1 ? 's' : ''} in the garage. Browse by category for more options.`
              : 'Add vehicles to your garage to see personalized recommendations tailored to your specific makes and models.'}
          </p>
        </div>
      </div>
    </div>
  );
}
