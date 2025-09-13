import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Modal } from './Modal';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (name: string, price: number) => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    if (name && price) {
      onAdd(name, parseFloat(price));
      setName('');
      setPrice('');
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Product">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label>Product Name</label>
          <Input 
            value={name}
            onChange={setName}
            placeholder="Enter product name"
          />
        </div>
        <div>
          <label>Price</label>
          <Input 
            value={price}
            onChange={setPrice}
            type="number"
            placeholder="Enter price"
          />
        </div>
        <Button onClick={handleSubmit}>Add Product</Button>
      </div>
    </Modal>
  );
};