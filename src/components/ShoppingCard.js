import { useContext } from "react";
import { CartContext } from "./ShoppingCardProvider";

const ShoppingCard = ({ title, description, price, id, onClick }) => {
  const { cartItem } = useContext(CartContext);

  // Finden Sie die Anzahl des Artikels im Warenkorb
  const countInCart = cartItem.find((item) => item.id === id)?.count || 0;

  return (
    <div className="card w-full mx-0.5 sm:w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="" src="/shoes.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p> Anzahl: {countInCart}</p>
        <p>{price} €</p>

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
