import React, { useState } from "react";
import firstImage from "../assets/firstImage.jpg";
import blackWhite from "../assets/blackWhite.jpg";
import ShoppingCardList from "../components/ShoppingCardList";
const Homepage = () => {
  const [showShoppingList, setShowShoppingList] = useState(false);

  return (
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
          <div className="bg-white p-10 flex flex-col items-center">
            <div
              style={{ backgroundImage: `url(${blackWhite})` }}
              className="bg-cover bg-center p-10 flex flex-col items-center"
            ></div>
          </div>
        </>
      )}

      {showShoppingList && <ShoppingCardList />}
    </div>
  );
};

export default Homepage;
