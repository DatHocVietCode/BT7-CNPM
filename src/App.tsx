import React, { useState } from 'react';
import { AddProductModal } from './components/AddProductModal';
import { Button } from './components/Button';
import { ShoppingCart } from './components/ShoppingCart';
import { CartItem } from './interface/CardItem';

const App: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: "Product 1", price: 10.99, quantity: 1 },
    { id: 2, name: "Product 2", price: 20.99, quantity: 2 },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleAddProduct = (name: string, price: number) => {
    const newItem: CartItem = {
      id: Math.max(0, ...items.map(item => item.id)) + 1,
      name,
      price,
      quantity: 1
    };
    setItems([...items, newItem]);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Shopping Cart</h1>
        <Button onClick={() => setIsAddModalOpen(true)}>Add Product</Button>
      </div>
      
      <ShoppingCart 
        items={items}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <AddProductModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddProduct}
      />
    </div>
  );
};

export default App;