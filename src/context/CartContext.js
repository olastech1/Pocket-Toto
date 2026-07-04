'use client';

import { createContext, useContext, useReducer, useEffect, useState } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    case 'HYDRATE':
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });
  const [hydrated, setHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('pocket-toto-cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          dispatch({ type: 'HYDRATE', payload: parsed });
        }
      }
    } catch (e) {
      console.warn('Failed to load cart from localStorage:', e);
    }
    setHydrated(true);
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    if (hydrated) {
      try {
        localStorage.setItem('pocket-toto-cart', JSON.stringify(state.items));
      } catch (e) {
        console.warn('Failed to save cart to localStorage:', e);
      }
    }
  }, [state.items, hydrated]);

  const addItem = (product) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id || product.slug,
        name: product.name,
        price: parseFloat(product.price),
        imageUrl: product.imageUrl,
        slug: product.slug,
      },
    });
  };

  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const updateQuantity = (id, quantity) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });
  const openCart = () => dispatch({ type: 'OPEN_CART' });
  const closeCart = () => dispatch({ type: 'CLOSE_CART' });

  const cartCount = hydrated
    ? state.items.reduce((sum, item) => sum + item.quantity, 0)
    : 0;
  const cartTotal = hydrated
    ? state.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
    : '0.00';

  return (
    <CartContext.Provider
      value={{
        items: hydrated ? state.items : [],
        isOpen: state.isOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        openCart,
        closeCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
