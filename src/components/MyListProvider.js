import { useState, createContext } from "react";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [listItems, setListItems] = useState([]);

  const addToList = (item) => {
    setListItems([...listItems, item]);
  };

  return (
    <ListContext.Provider value={{ addToList, listItems }}>
      {children}
    </ListContext.Provider>
  );
};
