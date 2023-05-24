const ShoppingCard = ({ title, description, price, count, onClick }) => {
  return (
    <div className="card w-full mx-0.5 sm:w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="" src="/shoes.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>{price} €</p>
        <p> Anzahl: {count}</p>
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
