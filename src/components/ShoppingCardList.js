import { useState, useContext } from "react";
import ShoppingCard from "./ShoppingCard";
import { CartContext } from "./ShoppingCardProvider";

const ShoppingCardList = () => {
  const { addToCart } = useContext(CartContext);
  const [shoppingItems] = useState([
    {
      id: 1,
      title: "Shoes",
      description: "Nice shoes...",
      originalPrice: 25,
      price: 25,
      count: 0,
    },
    {
      id: 2,
      title: "Sunglasses",
      description: "Cool sunglasses...",
      originalPrice: 50,
      price: 50,
      count: 0,
    },
    {
      id: 3,
      title: "Shirt",
      description: "Nice shirt...",
      originalPrice: 75,
      price: 75,
      count: 0,
    },
    {
      id: 4,
      title: "Hat",
      description: "Nice hat...",
      originalPrice: 100,
      price: 100,
      count: 0,
    },
    {
      id: 5,
      title: "Socks",
      description: "Nice socks...",
      originalPrice: 125,
      price: 125,
      count: 0,
    },
    {
      id: 6,
      title: "Pants",
      description: "Nice pants...",
      originalPrice: 150,
      price: 150,
      count: 0,
    },
    {
      id: 7,
      title: "Jacket",
      description: "Nice jacket...",
      originalPrice: 25,
      price: 25,
      count: 0,
    },
    {
      id: 8,
      title: "Gloves",
      description: "Nice gloves...",
      originalPrice: 175,
      price: 175,
      count: 0,
    },
  ]);

  return (
    <div className="flex flex-wrap justify-center">
      {shoppingItems.map((item) => {
        return (
          <div key={item.id} className="sm:mx-1 sm:my-1">
            <ShoppingCard
              title={item.title}
              description={item.description}
              price={item.price}
              count={item.count}
              onClick={() =>
                addToCart({
                  id: item.id,
                  title: item.title,
                  description: item.description,
                  price: item.price,
                  count: item.count,
                  originalPrice: item.originalPrice,
                })
              }
            />
          </div>
        );
      })}
    </div>
  );
};
export default ShoppingCardList;
