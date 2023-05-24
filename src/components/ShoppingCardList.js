import { useState, useContext } from "react";
import ShoppingCard from "./ShoppingCard";
import { CartContext } from "./ShoppingCardProvider";

const ShoppingCardList = () => {
  const { addToCart } = useContext(CartContext);
  const [shoppingItems, setShoppingItems] = useState([
    {
      id: 1,
      title: "Shoes",
      description: "Nice shoes...",
    },
    {
      id: 2,
      title: "Sunglasses",
      description: "Cool sunglasses...",
    },
    {
      id: 3,
      title: "Shirt",
      description: "Nice shirt...",
    },
    {
      id: 4,
      title: "Hat",
      description: "Nice hat...",
    },
    {
      id: 5,
      title: "Socks",
      description: "Nice socks...",
    },
    {
      id: 6,
      title: "Pants",
      description: "Nice pants...",
    },
    {
      id: 7,
      title: "Jacket",
      description: "Nice jacket...",
    },
    {
      id: 8,
      title: "Gloves",
      description: "Nice gloves...",
    },
  ]);

  return (
    <div>
      {shoppingItems.map((item) => {
        return (
          <ShoppingCard
            key={item.id}
            title={item.title}
            description={item.description}
            onClick={() =>
              addToCart({
                id: item.id,
                title: item.title,
                description: item.description,
              })
            }
          />
        );
      })}
    </div>
  );
};
export default ShoppingCardList;
