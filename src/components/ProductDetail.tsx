import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Product } from './ProductCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
  // Product-specific descriptions
  const getProductDescription = (name: string) => {
    const descriptions: { [key: string]: string } = {
      'Brake Pads': 'Premium ceramic brake pads designed for superior stopping power and reduced brake dust. Engineered with advanced friction materials that provide consistent performance in all weather conditions.',
      'Engine Filter': 'High-efficiency engine air filter featuring multi-layer filtration technology to protect your engine from harmful contaminants. Designed to maximize airflow while capturing 99.5% of dust, dirt, and debris particles.',
      'Suspension Kit': 'Complete suspension upgrade kit including premium gas-charged shock absorbers and heavy-duty coil springs. Engineered to restore your vehicle\'s original ride height while improving handling and stability.',
      'Car Battery': 'Maintenance-free AGM battery with 800 cold cranking amps for reliable starts in any weather. Features advanced lead-calcium technology for enhanced durability and vibration resistance.',
      'Oil Filter': 'Premium spin-on oil filter with synthetic media for superior filtration and extended service intervals. Features a silicone anti-drainback valve to prevent dry starts and a heavy-duty steel canister for maximum durability.',
      'LED Headlight': 'Ultra-bright LED headlight assembly with 6000K color temperature for enhanced visibility. Features precision-aimed projector lens design for a focused beam pattern that won\'t blind oncoming traffic.',
      'Tire Set': 'Performance all-season tire set with advanced tread compound for excellent grip in wet and dry conditions. Features wide circumferential grooves for superior water evacuation and reduced hydroplaning risk.',
      'Brake Rotors': 'Precision-machined brake rotors with directional vane design for optimal heat dissipation. Made from high-carbon cast iron for superior durability and resistance to warping.',
      'Air Filter': 'Premium cabin air filter with activated carbon layer to eliminate odors and harmful gases. Multi-layer design filters out pollen, dust, and allergens for improved air quality inside your vehicle.',
      'Spark Plugs': 'Iridium-tipped spark plugs engineered for maximum performance and fuel efficiency. Features fine-wire center electrode for improved ignitability and reduced voltage requirements.',
      'Alternator': 'High-output alternator delivering consistent charging power for modern electrical systems. Features heavy-duty brushes and bearings for extended service life, plus voltage regulator for stable output.',
      'Wiper Blades': 'Beam-style wiper blades with graphite-coated rubber for streak-free performance. Aerodynamic design reduces wind lift at highway speeds while providing even pressure across the entire windshield.',
      'Coolant': 'Extended-life antifreeze/coolant formulated with organic acid technology for superior protection. Provides excellent heat transfer and corrosion protection for all engine metals including aluminum.',
      'Brake Fluid': 'DOT 3/4 brake fluid with high boiling point for fade-resistant braking performance. Advanced formula protects against corrosion and prevents moisture absorption that can compromise braking efficiency.',
    };
    
    return descriptions[name] || `High-quality ${name.toLowerCase()} designed for reliable performance and long-lasting durability. This premium automotive part meets or exceeds OEM specifications.`;
  };

  const getProductSpecs = (name: string) => {
    const specs: { [key: string]: { title: string; description: string }[] } = {
      'Brake Pads': [
        { title: 'Premium Ceramic Compound', description: 'Advanced ceramic friction material provides superior stopping power with minimal dust and noise' },
        { title: 'Temperature Resistant', description: 'Engineered to perform consistently in extreme temperatures from -40°F to 600°F' },
        { title: 'Easy Installation', description: 'Direct OEM replacement design installs in 30 minutes with basic hand tools' },
        { title: '3-Year Warranty', description: 'Backed by manufacturer warranty covering defects in materials and workmanship' },
      ],
      'Engine Filter': [
        { title: 'Multi-Layer Filtration', description: 'Advanced media captures 99.5% of contaminants while maximizing airflow to the engine' },
        { title: 'Long Service Life', description: 'Designed to last up to 15,000 miles under normal driving conditions' },
        { title: 'Tool-Free Installation', description: 'Simple snap-in design allows replacement in under 5 minutes without any tools' },
        { title: 'Improves Performance', description: 'Clean air filter can improve fuel economy by up to 10% and increase horsepower' },
      ],
      'Suspension Kit': [
        { title: 'Complete Kit', description: 'Includes premium gas-charged shocks and heavy-duty coil springs for both front and rear' },
        { title: 'Restores Ride Height', description: 'Brings your vehicle back to factory specifications for improved handling and appearance' },
        { title: 'Corrosion Resistant', description: 'Zinc-plated components resist rust and corrosion for long-lasting performance' },
        { title: 'Precision Tuned', description: 'Dampening rates calibrated for optimal comfort and control in all driving conditions' },
      ],
      'Car Battery': [
        { title: 'Maintenance-Free AGM', description: 'Absorbed Glass Mat technology eliminates the need for adding water or checking levels' },
        { title: '800 CCA Rating', description: 'High cold cranking amps ensure reliable starts even in extreme cold weather' },
        { title: 'Spill-Proof Design', description: 'Can be mounted in any position without risk of acid leakage or damage' },
        { title: '3-Year Warranty', description: 'Full replacement warranty covers defects and performance issues for three years' },
      ],
      'Oil Filter': [
        { title: 'Synthetic Filter Media', description: 'Premium synthetic material provides superior filtration efficiency and extended service life' },
        { title: 'Anti-Drainback Valve', description: 'Silicone valve prevents dry starts by keeping oil in the filter when engine is off' },
        { title: 'Heavy-Duty Construction', description: 'Reinforced steel canister withstands high pressures and extreme temperatures' },
        { title: '99% Filtration Rate', description: 'Captures harmful contaminants while maintaining optimal oil flow for engine protection' },
      ],
      'LED Headlight': [
        { title: '6000K Color Temperature', description: 'Bright white light output provides superior visibility compared to halogen bulbs' },
        { title: 'Projector Lens Design', description: 'Precision-aimed beam pattern delivers focused light without blinding oncoming drivers' },
        { title: 'Waterproof Construction', description: 'IP67 rated housing protects against water, dust, and extreme weather conditions' },
        { title: 'Integrated Cooling', description: 'Advanced thermal management system ensures long-lasting LED performance and reliability' },
      ],
      'Tire Set': [
        { title: 'All-Season Compound', description: 'Advanced tread formulation provides excellent grip in both wet and dry conditions' },
        { title: 'Hydroplaning Resistance', description: 'Wide circumferential grooves effectively channel water away from the contact patch' },
        { title: 'Low Noise Design', description: 'Optimized tread pattern reduces road noise for a quieter, more comfortable ride' },
        { title: 'Fuel Efficient', description: 'Low rolling resistance design helps improve fuel economy without sacrificing performance' },
      ],
      'Brake Rotors': [
        { title: 'Precision Machined', description: 'Computer-controlled manufacturing ensures perfect balance and smooth braking performance' },
        { title: 'Directional Vane Design', description: 'Optimized internal vanes maximize heat dissipation and prevent brake fade' },
        { title: 'High-Carbon Cast Iron', description: 'Premium material provides superior durability and resistance to warping under heat' },
        { title: 'Mill-Balanced', description: 'Factory balanced to eliminate vibration and ensure smooth, consistent braking' },
      ],
    };

    return specs[name] || [
      { title: 'Premium Quality', description: 'Manufactured to meet or exceed OEM specifications for reliable performance' },
      { title: 'Durable Construction', description: 'Built with high-quality materials for long-lasting service life' },
      { title: 'Easy Installation', description: 'Direct fit replacement installs quickly with common hand tools' },
      { title: 'Warranty Included', description: 'Backed by manufacturer warranty for your peace of mind' },
    ];
  };

  const description = getProductDescription(product.name);
  const specs = getProductSpecs(product.name);

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
            
            {/* Description */}
            <div className="mb-8">
              <p className="text-[20px] text-gray-700 leading-relaxed">{description}</p>
            </div>

            {/* Specifications */}
            <ul className="space-y-4 mb-12">
              {specs.map((spec, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-[15px] h-[15px] rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-[20px] text-gray-900 mb-1">{spec.title}</p>
                    <p className="text-[18px] text-gray-600">{spec.description}</p>
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
                  <p className="text-[18px] text-gray-900 line-clamp-2">{item.name}</p>
                  <p className="text-[20px] text-[#6366f1]">${item.price.toFixed(2)}</p>
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
