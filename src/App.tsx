import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CategorySidebar } from './components/CategorySidebar';
import { FeaturedCarousel } from './components/FeaturedCarousel';
import { ProductGrid } from './components/ProductGrid';
import { DealsSection } from './components/DealsSection';
import { ProductDetail } from './components/ProductDetail';
import { ProductCompare } from './components/ProductCompare';
import { ShoppingCart, CartItem } from './components/ShoppingCart';
import { AdvancedSearch } from './components/AdvancedSearch';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { ForgotPassword } from './components/ForgotPassword';
import { Garage, Vehicle } from './components/Garage';
import { WelcomeUser } from './components/WelcomeUser';
import { CheckoutContact, ContactInfo } from './components/CheckoutContact';
import { CheckoutPayment, PaymentInfo } from './components/CheckoutPayment';
import { OrderConfirmation } from './components/OrderConfirmation';
import { Product } from './components/ProductCard';
import { toast, Toaster } from 'sonner@2.0.3';

// Mock product data
const allProducts: Product[] = [
  {
    id: 1,
    name: 'Brake Pads',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1750019487267-47568f388dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBicmFrZSUyMHBhZHN8ZW58MXx8fHwxNzYwNzgzMjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Brakes',
    inStock: true,
  },
  {
    id: 2,
    name: 'Engine Filter',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1758381358962-efc41be53986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBwYXJ0c3xlbnwxfHx8fDE3NjA5MDcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Engine Parts',
    inStock: true,
  },
  {
    id: 3,
    name: 'Suspension Kit',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1669136048337-5daa3adef7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzdXNwZW5zaW9ufGVufDF8fHx8MTc2MDkwNzE0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Engine Parts',
    inStock: true,
  },
  {
    id: 4,
    name: 'Car Battery',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1597766325363-f5576d851d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBiYXR0ZXJ5fGVufDF8fHx8MTc2MDgyODg5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electrical',
    inStock: true,
  },
  {
    id: 5,
    name: 'Oil Filter',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1657644049321-4c3aa2e8aba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBvaWwlMjBmaWx0ZXJ8ZW58MXx8fHwxNzYwOTA3MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fluids & Oils',
    inStock: true,
  },
  {
    id: 6,
    name: 'LED Headlight',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1598586958772-8bf368215c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBoZWFkbGlnaHR8ZW58MXx8fHwxNzYwODU5NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Lighting',
    inStock: true,
  },
  {
    id: 7,
    name: 'Tire Set',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1580053852056-f3992ab1e5e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB0aXJlJTIwd2hlZWx8ZW58MXx8fHwxNzYwODYwMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Engine Parts',
    inStock: false,
  },
  {
    id: 8,
    name: 'Brake Rotors',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1750019487267-47568f388dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBicmFrZSUyMHBhZHN8ZW58MXx8fHwxNzYwNzgzMjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Brakes',
    inStock: true,
  },
  {
    id: 9,
    name: 'Air Filter',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1758381358962-efc41be53986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBwYXJ0c3xlbnwxfHx8fDE3NjA5MDcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Engine Parts',
    inStock: true,
  },
  {
    id: 10,
    name: 'Spark Plugs',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1637640125496-31852f042a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtZWNoYW5pYyUyMHRvb2xzfGVufDF8fHx8MTc2MDg4OTk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Engine Parts',
    inStock: true,
  },
  {
    id: 11,
    name: 'Alternator',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1597766325363-f5576d851d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBiYXR0ZXJ5fGVufDF8fHx8MTc2MDgyODg5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electrical',
    inStock: true,
  },
  {
    id: 12,
    name: 'Wiper Blades',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1637640125496-31852f042a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtZWNoYW5pYyUyMHRvb2xzfGVufDF8fHx8MTc2MDg4OTk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Lighting',
    inStock: true,
  },
  {
    id: 13,
    name: 'Coolant',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1657644049321-4c3aa2e8aba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBvaWwlMjBmaWx0ZXJ8ZW58MXx8fHwxNzYwOTA3MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fluids & Oils',
    inStock: true,
  },
  {
    id: 14,
    name: 'Brake Fluid',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1657644049321-4c3aa2e8aba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBvaWwlMjBmaWx0ZXJ8ZW58MXx8fHwxNzYwOTA3MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fluids & Oils',
    inStock: true,
  },
];

type ViewMode = 'list' | 'detail' | 'compare' | 'cart' | 'advancedSearch' | 'login' | 'signup' | 'forgotPassword' | 'garage' | 'welcome' | 'checkoutContact' | 'checkoutPayment' | 'orderConfirmation';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>('welcome');
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(null);
  const [userName, setUserName] = useState<string>('Guest');
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [estimatedDelivery, setEstimatedDelivery] = useState<string>('');

  // Reset compare list when navigating away from compare page
  useEffect(() => {
    if (viewMode !== 'compare' && compareList.length > 0) {
      setCompareList([]);
    }
  }, [viewMode]);

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      toast.success(`Added another ${product.name} to cart!`, {
        duration: 2000,
      });
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
      toast.success(`${product.name} added to cart!`, {
        duration: 2000,
      });
    }
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item =>
      item.product.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const handleRemoveFromCart = (productId: number) => {
    const item = cartItems.find(i => i.product.id === productId);
    setCartItems(cartItems.filter(i => i.product.id !== productId));
    if (item) {
      toast.info(`${item.product.name} removed from cart`);
    }
  };

  const handleShowCart = () => {
    setViewMode('cart');
    window.scrollTo(0, 0);
  };

  const handleContinueShopping = () => {
    setViewMode('list');
    window.scrollTo(0, 0);
  };

  const handleCheckout = () => {
    setViewMode('checkoutContact');
    window.scrollTo(0, 0);
  };

  const handleContactContinue = (info: ContactInfo) => {
    setContactInfo(info);
    setViewMode('checkoutPayment');
    window.scrollTo(0, 0);
  };

  const handlePaymentContinue = (info: PaymentInfo) => {
    setPaymentInfo(info);
    
    // Generate order number and estimated delivery
    const orderNum = 'ORD-' + Date.now().toString().slice(-8);
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);
    const formattedDelivery = deliveryDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
    
    setOrderNumber(orderNum);
    setEstimatedDelivery(formattedDelivery);
    setViewMode('orderConfirmation');
    window.scrollTo(0, 0);
    
    // Clear cart after order is placed
    setTimeout(() => {
      setCartItems([]);
    }, 100);
  };

  const handleBackToCart = () => {
    setViewMode('cart');
    window.scrollTo(0, 0);
  };

  const handleBackToContact = () => {
    setViewMode('checkoutContact');
    window.scrollTo(0, 0);
  };

  const handleCategorySelect = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory(null);
    if (query) {
      setViewMode('list');
      window.scrollTo(0, 0);
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setViewMode('detail');
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
    setViewMode('list');
  };

  const handleAddToCompare = (product: Product) => {
    if (compareList.find(p => p.id === product.id)) {
      toast.info(`${product.name} is already in comparison list`);
      return;
    }
    if (compareList.length >= 3) {
      toast.error('Maximum 3 products can be compared at once');
      return;
    }
    
    const newCompareList = [...compareList, product];
    setCompareList(newCompareList);
    
    // If this is the first product added from detail view, scroll to similar products
    if (compareList.length === 0 && viewMode === 'detail') {
      toast.success(`${product.name} added! Select another product to compare`, {
        duration: 3000,
      });
      // Scroll to similar products section
      setTimeout(() => {
        const similarSection = document.getElementById('similar-products');
        if (similarSection) {
          similarSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } 
    // If this is the second product, go directly to compare page
    else if (compareList.length === 1) {
      toast.success(`${product.name} added! Opening comparison...`, {
        duration: 2000,
      });
      setTimeout(() => {
        setViewMode('compare');
        window.scrollTo(0, 0);
      }, 500);
    } 
    // Third product added from compare page
    else if (compareList.length === 2) {
      toast.success(`${product.name} added to comparison!`, {
        duration: 2000,
      });
      // Scroll to top to see all three products
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    // First product from non-detail view
    else {
      toast.success(`${product.name} added to comparison!`, {
        duration: 2000,
      });
    }
  };

  const handleRemoveFromCompare = (productId: number) => {
    setCompareList(compareList.filter(p => p.id !== productId));
    toast.info('Product removed from comparison');
  };

  const handleShowCompare = () => {
    setViewMode('compare');
    window.scrollTo(0, 0);
  };

  const handleBackFromCompare = () => {
    setViewMode('list');
    setSelectedProduct(null);
  };

  const handleShowAdvancedSearch = () => {
    setViewMode('advancedSearch');
    window.scrollTo(0, 0);
  };

  const handleBackFromAdvancedSearch = () => {
    setViewMode('list');
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    setViewMode('welcome');
    setSelectedProduct(null);
    setSelectedCategory(null);
    setSearchQuery('');
    window.scrollTo(0, 0);
  };

  const handleBrowseProducts = () => {
    setViewMode('list');
    window.scrollTo(0, 0);
  };

  const handleShowLogin = () => {
    setViewMode('login');
    window.scrollTo(0, 0);
  };

  const handleShowSignUp = () => {
    setViewMode('signup');
    window.scrollTo(0, 0);
  };

  const handleShowForgotPassword = () => {
    setViewMode('forgotPassword');
    window.scrollTo(0, 0);
  };

  const handleProfileClick = () => {
    setViewMode('welcome');
    window.scrollTo(0, 0);
  };

  const handleBackFromAuth = () => {
    setViewMode('list');
    window.scrollTo(0, 0);
  };

  const handleShowGarage = () => {
    setViewMode('garage');
    window.scrollTo(0, 0);
  };

  const handleAddVehicle = (vehicle: Omit<Vehicle, 'id'>) => {
    const newVehicle: Vehicle = {
      ...vehicle,
      id: Date.now(),
    };
    setVehicles([...vehicles, newVehicle]);
    
    // Set as default if it's the first vehicle
    if (vehicles.length === 0) {
      setSelectedVehicleId(newVehicle.id);
    }
  };

  const handleUpdateVehicle = (id: number, updatedVehicle: Omit<Vehicle, 'id'>) => {
    setVehicles(vehicles.map(v => v.id === id ? { ...updatedVehicle, id } : v));
  };

  const handleDeleteVehicle = (id: number) => {
    setVehicles(vehicles.filter(v => v.id !== id));
    if (selectedVehicleId === id) {
      const remainingVehicles = vehicles.filter(v => v.id !== id);
      setSelectedVehicleId(remainingVehicles.length > 0 ? remainingVehicles[0].id : null);
    }
  };

  const handleSetDefaultVehicle = (id: number) => {
    setSelectedVehicleId(id);
    setVehicles(vehicles.map(v => ({
      ...v,
      isDefault: v.id === id
    })));
  };

  const handleSelectVehicleInCart = (vehicleId: number) => {
    setSelectedVehicleId(vehicleId);
    setVehicles(vehicles.map(v => ({
      ...v,
      isDefault: v.id === vehicleId
    })));
    toast.success('Vehicle switched successfully!');
  };

  // Filter products based on search and category
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  // Show top 14 products for the grid
  const displayedProducts = filteredProducts.slice(0, 14);

  // Get similar products for detail view (same category, excluding selected product)
  const similarProducts = selectedProduct
    ? allProducts.filter(
        (p) => p.category === selectedProduct.category && p.id !== selectedProduct.id
      )
    : [];

  // Calculate total cart item count
  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Get selected vehicle
  const selectedVehicle = vehicles.find(v => v.id === selectedVehicleId) || null;

  // Get recommended products (mix of popular items from different categories)
  const recommendedProducts = [
    allProducts[0], // Brake Pads
    allProducts[1], // Engine Filter
    allProducts[4], // Oil Filter
    allProducts[5], // LED Headlight
    allProducts[7], // Brake Rotors
    allProducts[9], // Spark Plugs
    allProducts[11], // Wiper Blades
    allProducts[12], // Coolant
  ];

  // Show welcome view
  if (viewMode === 'welcome') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        <Toaster position="top-right" />
        
        {/* Header */}
        <Header 
          cartItemCount={totalCartItems}
          onSearch={handleSearch}
          compareCount={compareList.length}
          onCompareClick={handleShowCompare}
          onCartClick={handleShowCart}
          onAdvancedSearchClick={handleShowAdvancedSearch}
          onLogoClick={handleLogoClick}
          onLoginClick={handleShowLogin}
          onSignUpClick={handleShowSignUp}
          onProfileClick={handleProfileClick}
          onGarageClick={handleShowGarage}
          vehicleCount={vehicles.length}
        />

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Category Sidebar */}
          <CategorySidebar
            onCategorySelect={(category) => {
              handleCategorySelect(category);
              setViewMode('list');
            }}
            selectedCategory={selectedCategory}
          />

          {/* Welcome User */}
          <WelcomeUser
            userName={userName}
            recommendedProducts={recommendedProducts}
            onProductClick={handleProductClick}
            onAddToCart={handleAddToCart}
            onGoToGarage={handleShowGarage}
            vehicleCount={vehicles.length}
          />
        </div>
      </div>
    );
  }

  // Show garage view
  if (viewMode === 'garage') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        <Toaster position="top-right" />
        
        {/* Header */}
        <Header 
          cartItemCount={totalCartItems}
          onSearch={handleSearch}
          compareCount={compareList.length}
          onCompareClick={handleShowCompare}
          onCartClick={handleShowCart}
          onAdvancedSearchClick={handleShowAdvancedSearch}
          onLogoClick={handleLogoClick}
          onLoginClick={handleShowLogin}
          onSignUpClick={handleShowSignUp}
          onProfileClick={handleProfileClick}
          onGarageClick={handleShowGarage}
          vehicleCount={vehicles.length}
        />

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Category Sidebar */}
          <CategorySidebar
            onCategorySelect={handleCategorySelect}
            selectedCategory={selectedCategory}
          />

          {/* Garage */}
          <Garage
            vehicles={vehicles}
            onAddVehicle={handleAddVehicle}
            onUpdateVehicle={handleUpdateVehicle}
            onDeleteVehicle={handleDeleteVehicle}
            onSetDefault={handleSetDefaultVehicle}
            onBack={handleBackToList}
          />
        </div>
      </div>
    );
  }

  // Show login view
  if (viewMode === 'login') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        <Toaster position="top-right" />
        
        {/* Header */}
        <Header 
          cartItemCount={totalCartItems}
          onSearch={handleSearch}
          compareCount={compareList.length}
          onCompareClick={handleShowCompare}
          onCartClick={handleShowCart}
          onAdvancedSearchClick={handleShowAdvancedSearch}
          onLogoClick={handleLogoClick}
          onLoginClick={handleShowLogin}
          onSignUpClick={handleShowSignUp}
          onProfileClick={handleProfileClick}
          onGarageClick={handleShowGarage}
          vehicleCount={vehicles.length}
        />

        <Login
          onForgotPassword={handleShowForgotPassword}
          onSignUp={handleShowSignUp}
          onBack={handleBackFromAuth}
        />
      </div>
    );
  }

  // Show sign up view
  if (viewMode === 'signup') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        <Toaster position="top-right" />
        
        {/* Header */}
        <Header 
          cartItemCount={totalCartItems}
          onSearch={handleSearch}
          compareCount={compareList.length}
          onCompareClick={handleShowCompare}
          onCartClick={handleShowCart}
          onAdvancedSearchClick={handleShowAdvancedSearch}
          onLogoClick={handleLogoClick}
          onLoginClick={handleShowLogin}
          onSignUpClick={handleShowSignUp}
          onProfileClick={handleProfileClick}
          onGarageClick={handleShowGarage}
          vehicleCount={vehicles.length}
        />

        <SignUp
          onLogin={handleShowLogin}
          onBack={handleBackFromAuth}
        />
      </div>
    );
  }

  // Show forgot password view
  if (viewMode === 'forgotPassword') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        <Toaster position="top-right" />
        
        {/* Header */}
        <Header 
          cartItemCount={totalCartItems}
          onSearch={handleSearch}
          compareCount={compareList.length}
          onCompareClick={handleShowCompare}
          onCartClick={handleShowCart}
          onAdvancedSearchClick={handleShowAdvancedSearch}
          onLogoClick={handleLogoClick}
          onLoginClick={handleShowLogin}
          onSignUpClick={handleShowSignUp}
          onProfileClick={handleProfileClick}
          onGarageClick={handleShowGarage}
          vehicleCount={vehicles.length}
        />

        <ForgotPassword
          onBack={handleShowLogin}
          onLogin={handleShowLogin}
        />
      </div>
    );
  }

  // Show advanced search view
  if (viewMode === 'advancedSearch') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Toaster position="top-right" />
        
        {/* Header */}
        <Header 
          cartItemCount={totalCartItems}
          onSearch={handleSearch}
          compareCount={compareList.length}
          onCompareClick={handleShowCompare}
          onCartClick={handleShowCart}
          onAdvancedSearchClick={handleShowAdvancedSearch}
          onLogoClick={handleLogoClick}
          onLoginClick={handleShowLogin}
          onSignUpClick={handleShowSignUp}
          onProfileClick={handleProfileClick}
          onGarageClick={handleShowGarage}
          vehicleCount={vehicles.length}
        />

        {/* Advanced Search */}
        <AdvancedSearch
          products={allProducts}
          onBack={handleBackFromAdvancedSearch}
          onAddToCart={handleAddToCart}
          onAddToCompare={handleAddToCompare}
          onProductClick={handleProductClick}
        />
      </div>
    );
  }

  // Show cart view
  if (viewMode === 'cart') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        <Toaster position="top-right" />
        
        {/* Header */}
        <Header 
          cartItemCount={totalCartItems}
          onSearch={handleSearch}
          compareCount={compareList.length}
          onCompareClick={handleShowCompare}
          onCartClick={handleShowCart}
          onAdvancedSearchClick={handleShowAdvancedSearch}
          onLogoClick={handleLogoClick}
          onLoginClick={handleShowLogin}
          onSignUpClick={handleShowSignUp}
          onProfileClick={handleProfileClick}
          onGarageClick={handleShowGarage}
          vehicleCount={vehicles.length}
        />

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Category Sidebar */}
          <CategorySidebar
            onCategorySelect={handleCategorySelect}
            selectedCategory={selectedCategory}
          />

          {/* Shopping Cart */}
          <ShoppingCart
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromCart}
            onContinueShopping={handleContinueShopping}
            onCheckout={handleCheckout}
            vehicles={vehicles}
            selectedVehicle={selectedVehicle}
            onSelectVehicle={handleSelectVehicleInCart}
            onGoToGarage={handleShowGarage}
          />
        </div>
      </div>
    );
  }

  // Show checkout contact view
  if (viewMode === 'checkoutContact') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        <Toaster position="top-right" />
        
        {/* Header */}
        <Header 
          cartItemCount={totalCartItems}
          onSearch={handleSearch}
          compareCount={compareList.length}
          onCompareClick={handleShowCompare}
          onCartClick={handleShowCart}
          onAdvancedSearchClick={handleShowAdvancedSearch}
          onLogoClick={handleLogoClick}
          onLoginClick={handleShowLogin}
          onSignUpClick={handleShowSignUp}
          onProfileClick={handleProfileClick}
          onGarageClick={handleShowGarage}
          vehicleCount={vehicles.length}
        />

        {/* Checkout Contact */}
        <CheckoutContact
          onBack={handleBackToCart}
          onContinue={handleContactContinue}
          selectedVehicle={selectedVehicle}
          cartItems={cartItems}
        />
      </div>
    );
  }

  // Show checkout payment view
  if (viewMode === 'checkoutPayment' && contactInfo) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        <Toaster position="top-right" />
        
        {/* Header */}
        <Header 
          cartItemCount={totalCartItems}
          onSearch={handleSearch}
          compareCount={compareList.length}
          onCompareClick={handleShowCompare}
          onCartClick={handleShowCart}
          onAdvancedSearchClick={handleShowAdvancedSearch}
          onLogoClick={handleLogoClick}
          onLoginClick={handleShowLogin}
          onSignUpClick={handleShowSignUp}
          onProfileClick={handleProfileClick}
          onGarageClick={handleShowGarage}
          vehicleCount={vehicles.length}
        />

        {/* Checkout Payment */}
        <CheckoutPayment
          onBack={handleBackToContact}
          onContinue={handlePaymentContinue}
          selectedVehicle={selectedVehicle}
          cartItems={cartItems}
          contactInfo={contactInfo}
        />
      </div>
    );
  }

  // Show order confirmation view
  if (viewMode === 'orderConfirmation' && contactInfo && paymentInfo) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        <Toaster position="top-right" />
        
        {/* Header */}
        <Header 
          cartItemCount={totalCartItems}
          onSearch={handleSearch}
          compareCount={compareList.length}
          onCompareClick={handleShowCompare}
          onCartClick={handleShowCart}
          onAdvancedSearchClick={handleShowAdvancedSearch}
          onLogoClick={handleLogoClick}
          onLoginClick={handleShowLogin}
          onSignUpClick={handleShowSignUp}
          onProfileClick={handleProfileClick}
          onGarageClick={handleShowGarage}
          vehicleCount={vehicles.length}
        />

        {/* Order Confirmation */}
        <OrderConfirmation
          onContinueShopping={handleContinueShopping}
          selectedVehicle={selectedVehicle}
          cartItems={cartItems}
          contactInfo={contactInfo}
          paymentInfo={paymentInfo}
          orderNumber={orderNumber}
          estimatedDelivery={estimatedDelivery}
        />
      </div>
    );
  }

  // Show comparison view
  if (viewMode === 'compare') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        <Toaster position="top-right" />
        
        {/* Header */}
        <Header 
          cartItemCount={totalCartItems}
          onSearch={handleSearch}
          compareCount={compareList.length}
          onCompareClick={handleShowCompare}
          onCartClick={handleShowCart}
          onAdvancedSearchClick={handleShowAdvancedSearch}
          onLogoClick={handleLogoClick}
          onLoginClick={handleShowLogin}
          onSignUpClick={handleShowSignUp}
          onProfileClick={handleProfileClick}
          onGarageClick={handleShowGarage}
          vehicleCount={vehicles.length}
        />

        {/* Product Compare - Full Width */}
        <ProductCompare
          products={compareList}
          onBack={handleBackFromCompare}
          onRemoveProduct={handleRemoveFromCompare}
          onAddToCart={handleAddToCart}
          onAddToCompare={handleAddToCompare}
          availableProducts={allProducts}
        />
      </div>
    );
  }

  // Show product detail view if a product is selected
  if (viewMode === 'detail' && selectedProduct) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        <Toaster position="top-right" />
        
        {/* Header */}
        <Header 
          cartItemCount={totalCartItems}
          onSearch={handleSearch}
          compareCount={compareList.length}
          onCompareClick={handleShowCompare}
          onCartClick={handleShowCart}
          onAdvancedSearchClick={handleShowAdvancedSearch}
          onLogoClick={handleLogoClick}
          onLoginClick={handleShowLogin}
          onSignUpClick={handleShowSignUp}
          onProfileClick={handleProfileClick}
          onGarageClick={handleShowGarage}
          vehicleCount={vehicles.length}
        />

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Category Sidebar */}
          <CategorySidebar
            onCategorySelect={handleCategorySelect}
            selectedCategory={selectedCategory}
          />

          {/* Product Detail */}
          <ProductDetail
            product={selectedProduct}
            onBack={handleBackToList}
            onAddToCart={handleAddToCart}
            similarProducts={similarProducts}
            onProductClick={handleProductClick}
            onAddToCompare={handleAddToCompare}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <Toaster position="top-right" />
      
      {/* Header */}
      <Header 
        cartItemCount={totalCartItems}
        onSearch={handleSearch}
        compareCount={compareList.length}
        onCompareClick={handleShowCompare}
        onCartClick={handleShowCart}
        onAdvancedSearchClick={handleShowAdvancedSearch}
        onLogoClick={handleLogoClick}
        onLoginClick={handleShowLogin}
        onSignUpClick={handleShowSignUp}
        onProfileClick={handleProfileClick}
        onGarageClick={handleShowGarage}
        vehicleCount={vehicles.length}
      />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Category Sidebar */}
        <CategorySidebar
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          {/* Search/Filter Info */}
          {(searchQuery || selectedCategory) && (
            <div className="mb-6 p-4 bg-[#eef2ff] rounded-lg border border-[#c7d2fe]">
              <p className="text-[#4338ca]">
                {searchQuery && `Showing results for "${searchQuery}"`}
                {selectedCategory && ` in category "${selectedCategory}"`}
                {filteredProducts.length === 0 && ' - No products found'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
                className="mt-2 text-[#6366f1] hover:text-[#4f46e5] underline text-sm"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Featured Carousel */}
          <FeaturedCarousel />

          {/* Product Grid */}
          <ProductGrid products={displayedProducts} onAddToCart={handleAddToCart} onProductClick={handleProductClick} />

          {/* Deals Section */}
          <DealsSection />
        </main>
      </div>
    </div>
  );
}
