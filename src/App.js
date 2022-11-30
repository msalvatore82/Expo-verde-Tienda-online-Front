import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import { UserProvider } from "./context/UserContext/UserState";
import { Header } from "antd/es/layout/layout";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <UserProvider>
        
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="=/home" element={<Home/> }/>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
