import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Header from "./components/Headers/Header";
import { UserProvider } from "./context/UserContext/UserState";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App imagen">
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
