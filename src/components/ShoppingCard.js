import { useContext } from "react";
import { CartContext } from "./ShoppingCardProvider"; // Context für den Einkaufswagen
import { ListContext } from "./MyListProvider"; // Context für die persönliche Liste

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
}) => {
  const { cartItem } = useContext(CartContext); // Zugriff auf den Warenkorb über den Context
  const { addToList, listItems } = useContext(ListContext); // Zugriff auf die persönliche Liste über den Context

  // Finden Sie die Anzahl des Artikels im Warenkorb
  const countInCart = cartItem.find((item) => item.id === id)?.count || 0;

  // Prüfen ob das Element bereits in der Liste ist um dann später den button zu de/aktivieren
  const isInList = listItems.find((item) => item.id === id);

  // Die Rückgabefunktion rendert die ShoppingCard Komponente mit den übergebenen Daten.
  return (
    <div className="card w-full mx-0.5 sm:w-96 bg-base-100 shadow-xl">
      {/* Hier werden das Bild und der Titel des Artikels angezeigt */}
      <figure>
        <img className="w-96 h-96 object-hover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        <p>Anzahl: {countInCart}</p>

        <p>{price} €</p>
        <div>
          {/* Button zum Hinzufügen des Artikels zur persönlichen Liste */}
          <button
            className="btn btn-square"
            disabled={isInList}
            onClick={() =>
              addToList({ title, description, price, id, onClick, image })
            }
          >
            Add to MyList
          </button>
        </div>
        {/* Button zum Kaufen / Hinzufügen des Artikels zum Warenkorb */}
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={onClick}>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
