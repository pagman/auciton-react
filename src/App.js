import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SigninPage from "./pages/Signin";
import AccountPage from "./pages/Account";
import SearchAppBar from "./components/navbar";
import ProductPage from "./pages/productPage";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
