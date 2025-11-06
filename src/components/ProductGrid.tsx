import { ProductCard, Product } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onProductClick?: (product: Product) => void;
}

export function ProductGrid({ products, onAddToCart, onProductClick }: ProductGridProps) {
  return (
    <div className="mt-8">
      <div className="h-[3px] bg-[#6366f1] mb-6 rounded-full" style={{ width: '60px' }} />
      
      <div className="grid grid-cols-7 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </div>
  );
}
