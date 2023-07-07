import { ListContext } from "../components/MyListProvider";
import { useContext } from "react";
import ShoppingCard from "../components/ShoppingCard";
import { CartContext } from "../components/ShoppingCardProvider";
const MyList = () => {
  const { listItems } = useContext(ListContext);
  const { addToCart, countItems } = useContext(CartContext);

  return (
    <div>
      <h1>Deine gespeicherten Elemente:</h1>
      {listItems.map((item) => {
        return (
          <div key={item.id} className="sm:mx-1 sm:my-1">
            <ShoppingCard
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              count={item.countItems}
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
                  booleanMyList: item.booleanMyList,
                })
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default MyList;
