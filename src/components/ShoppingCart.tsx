import React, { useState } from "react";
import { CartItem } from "../interface/CardItem";
import { Button } from "./Button";
import { Card } from "./Card";
import { Input } from "./Input";
import { Modal } from "./Modal";

type ShoppingCartProps = {
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
};

export const ShoppingCart: React.FC<ShoppingCartProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const [editItem, setEditItem] = useState<CartItem | null>(null);

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      {items.map((item) => (
        <Card key={item.id}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>
            <div>
              <Button onClick={() => setEditItem(item)}>Edit</Button>
              <Button onClick={() => onRemoveItem(item.id)}>Remove</Button>
            </div>
          </div>
        </Card>
      ))}

      <Modal
        isOpen={!!editItem}
        onClose={() => setEditItem(null)}
        title="Edit Item Quantity"
      >
        {editItem && (
          <div>
            <Input
              type="number"
              value={String(editItem.quantity)}
              onChange={(value) => {
                const quantity = parseInt(value);
                if (quantity > 0) {
                  onUpdateQuantity(editItem.id, quantity);
                  setEditItem(null);
                }
              }}
            />
          </div>
        )}
      </Modal>

      <div style={{ marginTop: "20px" }}>
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};