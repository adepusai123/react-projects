import { useState } from 'react';

export const DUMMY_PRODUCTS = [
  { id: 1, name: 'Product A', price: 29.99 },
  { id: 2, name: 'Product B', price: 49.99 },
  { id: 3, name: 'Product C', price: 19.99 },
  { id: 4, name: 'Product D', price: 99.99 },
];

export function useProductList() {
  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});

  const handleQuantity = (id: number, delta: number) => {
    setQuantities(q => ({
      ...q,
      [id]: Math.max(1, (q[id] || 1) + delta),
    }));
  };

  const handleAddToCart = (id: number) => {
    alert(`Added ${quantities[id] || 1} of product ${id} to cart!`);
  };

  return {
    products: DUMMY_PRODUCTS,
    quantities,
    handleQuantity,
    handleAddToCart,
  };
}
