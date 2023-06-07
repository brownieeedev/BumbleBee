import "./App.css";
import Login from "./components/Login/Login.component";
import Categories from "./components/Categories/Categories.component";
import Items from "./components/Items/Item.component";
import Cart from "./components/Cart/Cart.component";
import ShopContextProvider from "./context/shop-context";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ShopContextProvider>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/kategoriak" element={<Categories></Categories>}></Route>
        <Route path="/kosar" element={<Cart></Cart>}></Route>
      </Routes>
    </ShopContextProvider>
  );
}

export default App;
