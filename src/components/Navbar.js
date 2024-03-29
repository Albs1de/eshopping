import { useContext } from "react";
import { CartContext } from "./ShoppingCardProvider";
import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import AuthDetail from "./auth/AuthDetails";

const Navbar = () => {
  const { cartItem, countAmount, totalPrice, deleteFromCart } =
    useContext(CartContext);

  return (
    <div className="navbar bg-primaryBlue">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
          eShopping
        </Link>
      </div>
      <div className="flex-1">
        <Link
          to="/mylist"
          className="btn btn-ghost normal-case text-xl text-white"
        >
          MyList
        </Link>
      </div>
      <div className="flex-1"></div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle ">
            <div className="indicator text-cartbg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {countAmount}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{countAmount} Items</span>
              {cartItem.map((item, index) => {
                return (
                  <div key={index}>
                    <span className="font-bold text-lg">{item.title}</span>
                    <p>{item.description}</p>
                    <p> Anzahl: {item.count}</p>
                    <p> Preis: {item.price}€</p>
                    <button
                      className="btn btn-primary -mt-0"
                      onClick={() =>
                        deleteFromCart({
                          title: item.title,
                          description: item.description,
                          price: item.price,
                          id: item.id,
                        })
                      }
                    >
                      -
                    </button>
                  </div>
                );
              })}
              <span className="text-info">Subtotal: {totalPrice} €</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end justify-center items-center">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="rounded-full text-cartbg">
              <BiSolidUser size={25} />
            </div>
          </label>
          <div
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <AuthDetail />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
