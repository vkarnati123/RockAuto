import { ArrowLeft, Plus, X, ShoppingCart } from 'lucide-react';
import { Product } from '../ProductCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProductCompareProps {
  products: Product[];
  onBack: () => void;
  onRemoveProduct: (productId: number) => void;
  onAddToCart: (product: Product) => void;
  onAddToCompare?: (product: Product) => void;
  availableProducts?: Product[];
}

export function ProductCompare({ 
  products, 
  onBack, 
  onRemoveProduct,
  onAddToCart,
  onAddToCompare,
  availableProducts = []
}: ProductCompareProps) {
  // Filter available products to exclude already compared products
  const productsToAdd = availableProducts.filter(
    p => !products.find(cp => cp.id === p.id)
  ).slice(0, 6);

  // Empty state when no products
  if (products.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[600px] p-8">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-[32px] text-gray-900 mb-4">No products to compare</h2>
          <p className="text-[18px] text-gray-600 mb-8">
            Add products to comparison by clicking the "Compare" button on any product
          </p>
          <button
            onClick={onBack}
            className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-4 rounded-[6px] transition-colors"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    
    <div className="flex-1 bg-white">
      {/* Header Section */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="w-6 h-6 text-gray-900" />
              </button>
              <div>
                <h1 className="text-[32px] text-gray-900">Product Comparison</h1>
                <p className="text-gray-600">
                  Comparing {products.length} product{products.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-8 py-12">
        {/* Product Cards Grid */}
        <div className={`grid ${products.length === 1 ? 'grid-cols-1 max-w-md mx-auto' : products.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-8 mb-12`}>
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              {/* Product Image */}
              <div className="relative h-[300px] bg-gray-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Remove Button */}
                <button
                  onClick={() => onRemoveProduct(product.id)}
                  className="absolute top-4 right-4 w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Remove product"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-[24px] text-gray-900 mb-4">{product.name}</h3>
                
                <div className="space-y-4 mb-6">
                  {/* Part Number */}
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Part #</span>
                    <span className="text-gray-900">{product.id}</span>
                  </div>

                  {/* Manufacturer */}
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Manufacturer</span>
                    <span className="text-gray-900">AutoParts Co.</span>
                  </div>

                  {/* Category */}
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Category</span>
                    <span className="text-gray-900">{product.category}</span>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Price</span>
                    <span className="text-[#6366f1] text-[20px]">${product.price.toFixed(2)}</span>
                  </div>

                  {/* Availability */}
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Availability</span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                      product.inStock 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  {/* Shipping */}
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">2-3 Business Days</span>
                  </div>

                  {/* Compatible Vehicles */}
                  <div className="py-3">
                    <span className="text-gray-600 block mb-2">Compatible Vehicles</span>
                    <span className="text-gray-900 text-sm">Most {product.category} applications</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Premium quality {product.category.toLowerCase()} component designed for reliability and performance. 
                    Manufactured to OEM specifications with rigorous quality control standards.
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => onAddToCart(product)}
                  disabled={!product.inStock}
                  className="w-full bg-[#6366f1] hover:bg-[#4f46e5] disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-4 rounded-[6px] transition-colors flex items-center justify-center gap-3 shadow-sm"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}

          {/* Add Another Product Card (when only 1 product) */}
          {products.length === 1 && (
            <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Plus className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-[20px] text-gray-900 mb-2">Add Another Product</h3>
                <p className="text-gray-600 mb-6">
                  Add one more product to see a side-by-side comparison
                </p>
                <button
                  onClick={onBack}
                  className="bg-[#3d3e4f] hover:bg-[#2d2e3f] text-white px-6 py-3 rounded-[6px] transition-colors"
                >
                  Browse Products
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Comparison Table */}
        {products.length > 1 && (
          <div className="mb-12">
            <h2 className="text-[28px] text-gray-900 mb-6">Detailed Comparison</h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-4 px-6 text-gray-900 w-[200px]">Specification</th>
                    {products.map((product) => (
                      <th key={product.id} className="py-4 px-6 text-gray-900">
                        {product.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-600">Price</td>
                    {products.map((product) => (
                      <td key={product.id} className="py-4 px-6 text-center">
                        <span className="text-[#6366f1] text-[18px]">${product.price.toFixed(2)}</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-600">Part Number</td>
                    {products.map((product) => (
                      <td key={product.id} className="py-4 px-6 text-center text-gray-900">
                        {product.id}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-600">Category</td>
                    {products.map((product) => (
                      <td key={product.id} className="py-4 px-6 text-center text-gray-900">
                        {product.category}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-600">Manufacturer</td>
                    {products.map((product) => (
                      <td key={product.id} className="py-4 px-6 text-center text-gray-900">
                        AutoParts Co.
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-600">Availability</td>
                    {products.map((product) => (
                      <td key={product.id} className="py-4 px-6 text-center">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                          product.inStock 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : 'bg-red-100 text-red-800 border border-red-200'
                        }`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-600">Shipping Time</td>
                    {products.map((product) => (
                      <td key={product.id} className="py-4 px-6 text-center text-gray-900">
                        2-3 Business Days
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-600">Compatibility</td>
                    {products.map((product) => (
                      <td key={product.id} className="py-4 px-6 text-center text-gray-900">
                        Most {product.category} applications
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add Third Product Section */}
        {products.length === 2 && productsToAdd.length > 0 && onAddToCompare && (
          <div className="border-t border-gray-200 pt-12">
            <div className="text-center mb-8">
              <h2 className="text-[28px] text-gray-900 mb-3">Add a Third Product</h2>
              <p className="text-gray-600 text-[18px]">
                Select another product to add to your comparison
              </p>
            </div>
            
            {/* Available Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {productsToAdd.map((product) => (
                <div key={product.id} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#6366f1] transition-all overflow-hidden group">
                  <div className="h-[140px] bg-gray-100 overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <h4 className="text-sm text-gray-900 truncate mb-1">
                        {product.name}
                      </h4>
                      <p className="text-[16px] text-[#6366f1]">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                    <button 
                      onClick={() => onAddToCompare(product)}
                      className="w-full bg-[#3d3e4f] hover:bg-[#2d2e3f] text-white px-3 py-2 rounded-[6px] transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
