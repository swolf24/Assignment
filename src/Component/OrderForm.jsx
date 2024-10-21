import React, { useState } from 'react';
import QuantitySelector from './OrderInfo'; // Für die Mengenanzeige
import OrderInfo from './OrderInfo';

function OrderForm() {
  const nameProducts = ['AMD Ryzen 5 3600', 'Intel i5 10400', 'AMD Ryzen 7 3700X'];
  const priceProducts = [245, 190, 330];

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (event) => {
    setSelectedProductIndex(Number(event.target.value));
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const selectedProductPrice = priceProducts[selectedProductIndex];
  const total = selectedProductPrice * quantity;

  return (
    <div className="order-form">
      <h2>Select product</h2>

      <div className="product-selection">
        <label>Product: </label>
        <select value={selectedProductIndex} onChange={handleProductChange}>
          {nameProducts.map((product, index) => (
            <option key={index} value={index}>
              {product} ({priceProducts[index]}€)
            </option>
          ))}
        </select>
      </div>

      <QuantitySelector 
        quantity={quantity} 
        incrementQuantity={incrementQuantity} 
        decrementQuantity={decrementQuantity} 
      />

      <OrderInfo 
        selectedProduct={nameProducts[selectedProductIndex]} 
        quantity={quantity} 
        total={total} 
      />
    </div>
  );

  
}

export default OrderForm;