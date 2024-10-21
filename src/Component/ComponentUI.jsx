import React from 'react';
import Header from './OrderForm'; // Importiere das OrderForm als Kindkomponente
import OrderForm from './OrderForm';

function ComponentUI() {
  const productImage = ""; // URL für Header Bild, falls benötigt

  return (
    <div className="ComponentUI">
      <Header image={productImage} title="Welcome to the Product Page!" />
      <OrderForm />
    </div>
  );
}

export default ComponentUI;