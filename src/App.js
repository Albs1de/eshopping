import "./App.css";
import Navbar from "./components/Navbar";
import ShoppingCardList from "./components/ShoppingCardList";
import { CartProvider } from "./components/ShoppingCardProvider";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <ShoppingCardList />
    </CartProvider>
  );
}

export default App;
