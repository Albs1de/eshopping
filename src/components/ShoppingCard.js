import { useContext } from "react";
import { CartContext } from "./ShoppingCardProvider";
import { AiOutlineHeart } from "react-icons/ai";
import { ListContext } from "./MyListProvider";
const ShoppingCard = ({
  title,
  description,
  price,
  id,
  onClick,
  image,
  icon,
}) => {
  const { cartItem } = useContext(CartContext);
  const { listItems, addToList } = useContext(ListContext);

  // Finden Sie die Anzahl des Artikels im Warenkorb
  const countInCart = cartItem.find((item) => item.id === id)?.count || 0;

  return (
    <div className="card w-full mx-0.5 sm:w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-96 h-96 object-hover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p> Anzahl: {countInCart}</p>
        <p>{price} €</p>
        <div>
          <button
            className="btn btn-square"
            onClick={() =>
              addToList({ title, description, price, id, onClick, image })
            }
          >
            Add to MyList
          </button>
        </div>
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
