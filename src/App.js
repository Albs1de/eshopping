import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Home";
import { CartProvider } from "./components/ShoppingCardProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyList from "./pages/MyList";
import { ListProvider } from "./components/MyListProvider";
import ShoppingCardList from "./components/ShoppingCardList";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ListProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/mylist" element={<MyList />} />
          </Routes>
        </ListProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
