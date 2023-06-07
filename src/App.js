import "./App.css";
import Navbar from "./components/Navbar";
import ShoppingCardList from "./components/ShoppingCardList";
import { CartProvider } from "./components/ShoppingCardProvider";
import UserLogin from "./components/Login";
function App() {
  return (
    <>
      <UserLogin />
      <CartProvider>
        <Navbar />
        <ShoppingCardList />
      </CartProvider>
    </>
  );
}

export default App;
