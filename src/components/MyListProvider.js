import { useState, createContext, useContext } from "react";
import { CartContext } from "./ShoppingCardProvider";
export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [listItems, setListItems] = useState([]);
  const [countItems, setCountItems] = useState(0);
  const { cartItem } = useContext(CartContext);

  const addToList = (item) => {
    const isItemInList = listItems.some((listItem) => listItem.id === item.id);
    const itemInCart = cartItem.find((cartItem) => cartItem.id === item.id);

    if (!isItemInList) {
      // Wenn Element nicht in MyList ist, dann wird es hinzugefügt und count wird auf 1 gesetzt.
      const count = itemInCart ? itemInCart.count : 1;
      // setCountAmount(countAmount + 1);
      setListItems([...listItems, { ...item, count }]);
    } else {
      setCountItems(countItems + 1);
      setListItems((listItem) =>
        listItem.id === item.id
          ? {
              ...listItem,
              count: listItem.count + 1,
            }
          : listItem
      );
    }
  };

  return (
    <ListContext.Provider value={{ addToList, listItems, countItems }}>
      {children}
    </ListContext.Provider>
  );
};
