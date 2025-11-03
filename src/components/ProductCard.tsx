import { Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onProductClick }: ProductCardProps) {
  const handleCardClick = () => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-lg w-[150px] h-[120px] overflow-hidden shadow-sm hover:shadow-lg border border-gray-200 transition-all cursor-pointer group"
    >
      <div className="relative w-full h-full p-2 flex flex-col">
        {/* Product Image */}
        <div className="flex-1 flex items-center justify-center mb-1 overflow-hidden rounded">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="flex items-center justify-between gap-1">
          <div className="flex-1 min-w-0">
            <p className="text-xs truncate text-gray-900">{product.name}</p>
            <p className="text-xs text-[#6366f1]">${product.price.toFixed(2)}</p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            disabled={!product.inStock}
            className="shrink-0 bg-[#6366f1] hover:bg-[#4f46e5] disabled:bg-gray-400 text-white rounded-full p-1 transition-colors"
            aria-label="Add to cart"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Out of Stock Badge */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-[#ef4444] text-white px-2 py-1 rounded text-xs">Out of Stock</span>
          </div>
        )}
      </div>
    </div>
  );
}
