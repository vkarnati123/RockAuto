import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Product } from '../ProductCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import svgPaths from '../../imports/svg-sr8qy2cz33';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  similarProducts: Product[];
  onProductClick: (product: Product) => void;
  onAddToCompare?: (product: Product) => void;
}

export function ProductDetail({ 
  product, 
  onBack, 
  onAddToCart, 
  similarProducts,
  onProductClick,
  onAddToCompare
}: ProductDetailProps) {
  const specs = [
    'Compatible with most vehicle models',
    'Premium quality materials',
    'Manufacturer warranty included',
    'Easy installation process'
  ];

  const deals = [
    {
      id: 1,
      title: 'Free Shipping on Orders Over $50',
      description: 'Get your parts delivered fast with no extra cost',
    },
    {
      id: 2,
      title: 'Winter Sale - Up to 40% Off',
      description: 'Premium brake pads, rotors, and suspension components',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute left-[161px] top-[128px] w-[50px] h-[50px] flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors z-10"
        aria-label="Go back"
      >
        <ArrowLeft className="w-8 h-8 text-gray-900" />
      </button>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-6 pt-32 pb-16">
        <div className="grid grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-[508px] object-cover rounded"
            />
            <div className="mt-8">
              <h1 className="text-[40px] mb-2">{product.name}</h1>
              <div className="flex items-center gap-4">
                <p className="text-[32px] text-gray-600">Pricing</p>
                <div className="h-px w-[172px] bg-gray-300" />
              </div>
              <p className="text-[36px] text-[#6366f1] mt-4">${product.price.toFixed(2)}</p>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-[40px] mb-6">Product info and specifications</h2>
            
            {/* Description placeholder */}
            <div className="mb-8 space-y-2">
              <div className="h-[24px] w-full bg-gray-200 rounded" />
              <div className="h-[24px] w-full bg-gray-200 rounded" />
              <div className="h-[24px] w-3/4 bg-gray-200 rounded" />
            </div>

            {/* Specifications */}
            <ul className="space-y-4 mb-12">
              {specs.map((spec, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-[15px] h-[15px] rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-[24px] w-full bg-gray-200 rounded" />
                    <div className="h-[24px] w-4/5 bg-gray-200 rounded" />
                  </div>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex gap-6">
              <button 
                onClick={() => onAddToCompare?.(product)}
                className="bg-[#3d3e4f] hover:bg-[#2d2e3f] text-white px-8 py-6 rounded-full transition-colors shadow-[0px_2px_0px_0px_#000000] min-w-[284px]"
              >
                <span className="text-[32px] uppercase tracking-wider">Compare</span>
              </button>
              <button
                onClick={() => onAddToCart(product)}
                className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-6 rounded-full transition-colors shadow-[0px_2px_0px_0px_#000000] min-w-[284px] flex items-center justify-center gap-3"
              >
                <ShoppingCart className="w-7 h-7" />
                <span className="text-[32px] uppercase tracking-wider">Add to cart</span>
              </button>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div id="similar-products" className="mt-16 scroll-mt-24">
          <h3 className="text-[32px] mb-8">Similar Products</h3>
          <div className="grid grid-cols-6 gap-6">
            {similarProducts.slice(0, 6).map((item) => (
              <div key={item.id} className="flex flex-col gap-4">
                <button
                  onClick={() => onProductClick(item)}
                  className="bg-white rounded-lg h-[159px] overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#6366f1] transition-all"
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </button>
                <div className="space-y-2">
                  <div className="h-[24px] w-full bg-gray-200 rounded" />
                  <div className="h-[24px] w-3/4 bg-gray-200 rounded" />
                </div>
                <button 
                  onClick={() => onAddToCompare?.(item)}
                  className="bg-[#3d3e4f] hover:bg-[#2d2e3f] text-white px-4 py-3 rounded-full transition-colors shadow-[0px_2px_0px_0px_#000000]"
                >
                  <span className="text-[20px] uppercase tracking-wider">Compare</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Great Deals */}
        <div className="mt-16">
          <h3 className="text-[32px] mb-8">Great Deals</h3>
          <div className="grid grid-cols-2 gap-8">
            {deals.map((deal) => (
              <div
                key={deal.id}
                className="bg-white border border-gray-200 rounded-lg h-[272px] p-8 hover:border-[#6366f1] hover:shadow-md transition-all cursor-pointer flex flex-col justify-center"
              >
                <h4 className="text-[28px] mb-3">{deal.title}</h4>
                <p className="text-[20px] text-gray-600">{deal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
