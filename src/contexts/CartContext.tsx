import React, { createContext, useContext, useState } from 'react';
import { toast } from 'sonner';
import { Product } from '../components/ProductCard';

export type CartItem = {
  product: Product;
  quantity: number;
};

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const addToCart = (product: Product) => {
    const existing = cartItems.find(i => i.product.id === product.id);
    if (existing) {
      setCartItems(cartItems.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i));
      toast.success(`Added another ${product.name} to cart!`, { duration: 2000 });
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
      toast.success(`${product.name} added to cart!`, { duration: 2000 });
    }
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(i => i.product.id === productId ? { ...i, quantity: newQuantity } : i));
  };

  const removeFromCart = (productId: number) => {
    const item = cartItems.find(i => i.product.id === productId);
    setCartItems(cartItems.filter(i => i.product.id !== productId));
    if (item) {
      toast.info(`${item.product.name} removed from cart`);
    }
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}
