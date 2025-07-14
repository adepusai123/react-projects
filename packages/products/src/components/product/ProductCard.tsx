import React from 'react';
import '../../products.css';

export interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  quantity: number;
  onQuantityChange: (delta: number) => void;
  onAddToCart: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, quantity, onQuantityChange, onAddToCart }) => (
  <div className="product-card">
    <div className="product-title">{product.name}</div>
    <div>Price: ${product.price.toFixed(2)}</div>
    <div className="product-actions">
      <div className="quantity-controls">
        <button onClick={() => onQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => onQuantityChange(1)}>+</button>
      </div>
      <button className="add-to-cart" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  </div>
);
