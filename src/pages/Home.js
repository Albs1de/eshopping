import React, { useState } from "react";
import firstImage from "../assets/firstImage.jpg";
import ShoppingCardList from "../components/ShoppingCardList";
const Homepage = () => {
  const [showShoppingList, setShowShoppingList] = useState(false);

  return (
    <div className="bg-gray-200 p-2 flex flex-col items-center">
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
          <button
            className="ml-2 px-2 py-2 bg-black text-white rounded w-20"
            type="submit"
          >
            Jetzt beitreten
          </button>
        </div>
      </div>
      <div className="bg-gray-200 p-10 w-full flex flex-col items-center text-center mx-20">
        <h2 className="text-lg my-2 font-bold">Bestsellers</h2>
        <p className="text-base my-2 text-slate-500 ">
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
      <div className="bg-white w-full flex flex-col items-center">
        <p className="text-lg">Sei immer up to date und trage dich ein</p>
        <div className="flex flex-row my-4 items-center">
          <input
            className="rounded px-4 py-2 "
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
        <div className="flex flex-row  ">
          <div className="ml-2 py-5">
            {" "}
            <h1 className="font-bold mt-10 text-xl">eShopping</h1>
            <h1 className="font-bold">Hilfe</h1>
            <p className="text-slate-500">FAQ</p>
            <p className="text-slate-500">Customer Service</p>
            <p className="text-slate-500">Kontaktiere uns</p>
          </div>
          <div className="ml-10 px-2 py-5 mt-16">
            <h1 className="font-bold">Andere</h1>
            <p className="text-slate-500">Privacy Policy</p>
            <p className="text-slate-500">Sitemap</p>
            <p className="text-slate-500">Mitgliedschaft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
