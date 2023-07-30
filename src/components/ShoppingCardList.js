import { useState, useContext } from "react";
import ShoppingCard from "./ShoppingCard";
import { CartContext } from "./ShoppingCardProvider";
import shoesImage from "../assets/shoes.jpg";
import glovesImage from "../assets/gloves.jpg";
import jacketImage from "../assets/jacket.jpg";
import pantsImage from "../assets/pants.jpg";
import socksImage from "../assets/socks.jpg";
import sunglassesImage from "../assets/sunglasses.jpg";
import tshirtImage from "../assets/tshirt.jpg";
import hatImage from "../assets/hat.jpg";
import { AiOutlineHeart } from "react-icons/ai";

const ShoppingCardList = () => {
  const { addToCart, decreaseAmount } = useContext(CartContext);
  const [selectedOption, setSelectedOption] = useState("Sortieren nach...");

  /* ... */

  const handleSortChange = (event) => {
    setSelectedOption(event.target.value);
    switch (event.target.value) {
      case "Sort Items from A to Z":
        sortItemsFromAtoZ();
        break;
      case "Sort Items from Z to A":
        sortItemsFromZtoA();
        break;
      case "Sort Items price X to Y":
        sortItemsPriceXtoY();
        break;
      case "Sort Items price Y to X":
        sortItemsPriceYtoA();
        break;
      default:
        break;
    }
  };

  const [shoppingItems, setShoppingItems] = useState([
    {
      id: 1,
      title: "Shoes",
      description: "Nice shoes...",
      originalPrice: 25,
      price: 25,
      count: 0,
      image: shoesImage,
      icon: AiOutlineHeart,
      booleanMyList: false,
    },
    {
      id: 2,
      title: "Sunglasses",
      description: "Cool sunglasses...",
      originalPrice: 50,
      price: 50,
      count: 0,
      image: sunglassesImage,
      booleanMyList: false,
      icon: AiOutlineHeart,
    },
    {
      id: 3,
      title: "Shirt",
      description: "Nice shirt...",
      originalPrice: 75,
      price: 75,
      count: 0,
      image: tshirtImage,
      icon: AiOutlineHeart,
      booleanMyList: false,
    },
    {
      id: 4,
      title: "Hat",
      description: "Nice hat...",
      originalPrice: 100,
      price: 100,
      count: 0,
      image: hatImage,
      icon: AiOutlineHeart,
      booleanMyList: false,
    },
    {
      id: 5,
      title: "Socks",
      description: "Nice socks...",
      originalPrice: 125,
      price: 125,
      count: 0,
      image: socksImage,
      icon: AiOutlineHeart,
      booleanMyList: false,
    },
    {
      id: 6,
      title: "Pants",
      description: "Nice pants...",
      originalPrice: 150,
      price: 150,
      count: 0,
      image: pantsImage,
      icon: AiOutlineHeart,
      booleanMyList: false,
    },
    {
      id: 7,
      title: "Jacket",
      description: "Nice jacket...",
      originalPrice: 25,
      price: 25,
      count: 0,
      image: jacketImage,
      icon: AiOutlineHeart,
      booleanMyList: false,
    },
    {
      id: 8,
      title: "Gloves",
      description: "Nice gloves...",
      originalPrice: 175,
      price: 175,
      count: 0,
      image: glovesImage,
      icon: AiOutlineHeart,
      booleanMyList: false,
    },
  ]);

  const sortItemsFromAtoZ = () => {
    const newSortedItems = [...shoppingItems].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setShoppingItems(newSortedItems);
  };

  const sortItemsFromZtoA = () => {
    const newSortedItems = [...shoppingItems].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    setShoppingItems(newSortedItems);
  };

  const sortItemsPriceXtoY = () => {
    const newSortedItems = [...shoppingItems].sort((a, b) => {
      return a.price - b.price;
    });
    setShoppingItems(newSortedItems);
  };

  const sortItemsPriceYtoA = () => {
    const newSortedItems = [...shoppingItems].sort((a, b) => {
      return b.price - a.price;
    });
    setShoppingItems(newSortedItems);
  };

  return (
    <div className="flex flex-wrap  justify-center ">
      <div className="flex flex-wrap justify-center ">
        <select
          id="sortOptions"
          value={selectedOption}
          onChange={handleSortChange}
        >
          <option disabled>Sortieren nach...</option>
          <option>Sort Items from A to Z</option>
          <option>Sort Items from Z to A</option>
          <option>Sort Items price X to Y</option>
          <option>Sort Items price Y to X</option>
        </select>
      </div>

      <div className="flex flex-wrap md:grid md:grid-cols-1 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3">
        {shoppingItems.map((item) => {
          return (
            <div key={item.id} className="sm:mx-1 sm:my-1">
              <ShoppingCard
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                count={item.count}
                image={item.image}
                icon={item.icon}
                onClick={() =>
                  addToCart({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    count: item.count,
                    originalPrice: item.originalPrice,
                    image: item.image,
                    icon: item.icon,
                  })
                }
                deleteHandler={() =>
                  decreaseAmount({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    count: item.count,
                    originalPrice: item.originalPrice,
                    image: item.image,
                    icon: item.icon,
                  })
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ShoppingCardList;
