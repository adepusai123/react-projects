import React from 'react';
import './products.css';
import { ProductCard } from './ProductCard';
import { useProductList } from './useProductList';

export const ProductContainer: React.FC = () => {
  const { products, quantities, handleQuantity, handleAddToCart } = useProductList();

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          quantity={quantities[product.id] || 1}
          onQuantityChange={delta => handleQuantity(product.id, delta)}
          onAddToCart={() => handleAddToCart(product.id)}
        />
      ))}
    </div>
  );
};
