import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Header from "./components/Headers/Header";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import { UserProvider } from "./context/UserContext/UserState";
import { ProductsProvider } from "./context/ProductContext/ProductState";
import { OrderProvider } from "./context/OrderContext/OrderState";
import Cart from "./components/Cart/Cart";
// import Registration from "./components/Registration/Registration";

function App() {
  return (
    <div className="App imagen">
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <OrderProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                {/* <Route path="/Registration" element={<Registration />} /> */}
              </Routes>
              <Footer />
            </OrderProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
