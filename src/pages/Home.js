import React, { useState } from "react";
import firstImage from "../assets/firstImage.jpg";
import ShoppingCardList from "../components/ShoppingCardList";
const Homepage = () => {
  const [showShoppingList, setShowShoppingList] = useState(false);

  return (
    <div className="bg-gray-200 p-10 flex flex-col items-center">
      <div className="bg-gray-200 p-10 flex flex-col items-center">
        {!showShoppingList && (
          <>
            <img alt="first Clothing" src={firstImage} className="mx-auto" />
            <h1 className="text-xl font-bold my-4">Willkommen auf eShopping</h1>
            <h2 className="text-lg my-2">Wir verkaufen hochwertige Kleidung</h2>
            <p className="text-base my-2">
              Bei eShopping setzen wir auf Qualität und Langlebigkeit...
              {/* Der restliche Text wurde hier ausgelassen, um Platz zu sparen. */}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded"
              onClick={() => setShowShoppingList(true)}
            >
              Shoppen
            </button>
          </>
        )}

        {showShoppingList && <ShoppingCardList />}
      </div>
      <div className="bg-white w-full p-10 flex flex-col items-center text-center ">
        <h1 className="text-xl font-bold my-2">Lieben Sie unseren Stil?</h1>
        <p>
          Schließen Sie sich unserem exklusiven Club an, profitieren Sie von 40%
          Rabatt und erhalten Sie ein Bonusgeschenk mit jeder Bestellung
        </p>
        <div className="flex items-center justify-center">
          <input
            className="rounded px-4 py-2 w-full"
            type="email"
            placeholder="Deine Email..."
          ></input>
          <button
            className="ml-2 px-2 py-2 bg-black text-white rounded w-20"
            type="submit"
          >
            Eintragen
          </button>
        </div>
      </div>
      <div className="bg-gray-200 p-10 w-full flex flex-col items-center text-center mx-20">
        <h2 className="text-lg my-2 font-bold">Bestsellers</h2>
        <p className="text-base my-2 ">
          Erleben Sie die Raffinesse unserer sorgfältig kuratierten Kollektion
          hochwertiger Kleidungsstücke. Verwöhnen Sie sich in Stil und Eleganz
          auf unserer E-Commerce-Plattform, die für jeden Anlass das passende
          Outfit bietet
        </p>
        <button
          className="mt-4 px-4 py-2 bg-black text-white rounded"
          onClick={() => setShowShoppingList(true)}
        >
          Shoppen
        </button>
      </div>
    </div>
  );
};

export default Homepage;
