import React, { useState } from 'react';
import { ShoppingCart } from './components/ShoppingCart';
import { CartItem } from './interface/CardItem';

const App: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: "Product 1", price: 10.99, quantity: 1 },
    { id: 2, name: "Product 2", price: 20.99, quantity: 2 },
  ]);

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Shopping Cart</h1>
      <ShoppingCart 
        items={items}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default App;