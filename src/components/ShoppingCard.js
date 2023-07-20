import { useContext } from "react";
import { CartContext } from "./ShoppingCardProvider"; // Context für den Einkaufswagen
import { ListContext } from "./MyListProvider"; // Context für die persönliche Liste
import { BsBookmark } from "react-icons/bs";

// Dies ist die Komponente für einzelne Shopping Cards, die in der ShoppingCardList angezeigt werden.
// Sie nimmt verschiedene Props an, darunter title, description, price, id usw.
const ShoppingCard = ({
  title,
  description,
  price,
  id,
  onClick,
  image,
  icon,
  deleteHandler,
}) => {
  const { cartItem, decreaseAmount } = useContext(CartContext); // Zugriff auf den Warenkorb über den Context
  const { addToList, listItems } = useContext(ListContext); // Zugriff auf die persönliche Liste über den Context

  // Finden Sie die Anzahl des Artikels im Warenkorb
  const countInCart = cartItem.find((item) => item.id === id)?.count || 0;

  // Prüfen ob das Element bereits in der Liste ist um dann später den button zu de/aktivieren
  const isInList = listItems.find((item) => item.id === id);

  // Die Rückgabefunktion rendert die ShoppingCard Komponente mit den übergebenen Daten.
  return (
    <div className="card my-4 h-40 w-full  card-side  bg-base-100 shadow-xl">
      {/* Hier werden das Bild und der Titel des Artikels angezeigt */}
      <figure>
        <img className="-mt-2 object-hover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body w-full h-24 text-sm ">
        <h2 className="card-title -mb-5 -mt-5">{title}</h2>
        <p className="mt-4 mb-1">{description}</p>

        <p className="-mb-1 -mt-3">Anzahl: {countInCart}</p>

        <p className="-mb-1 -mt-1">{price} €</p>
        <div className="flex flex-row">
          {/* Button zum Hinzufügen des Artikels zur persönlichen Liste */}
          <button
            className="btn btn-square mr-3 btn-s mx-2 my-0  text-xs"
            disabled={isInList}
            onClick={() =>
              addToList({ title, description, price, id, onClick, image })
            }
          >
            <BsBookmark />
          </button>

          {/* Button zum Kaufen / Hinzufügen des Artikels zum Warenkorb */}
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary -mt-0"
              onClick={() =>
                decreaseAmount({
                  title,
                  description,
                  price,
                  id,
                  onClick,
                  image,
                })
              }
            >
              -
            </button>

            <button
              className="btn btn-primary  -mt-0 px-4 py-1  text-xs btn-s"
              onClick={onClick}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
