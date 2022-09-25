import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SigninPage from "./pages/Signin";
import AccountPage from "./pages/Account";
import SearchAppBar from "./components/navbar";
import ProductPage from "./pages/productPage";
import AllUsersPage from "./pages/AllUsers";
import Chat from "./pages/Chat";
import UserDetailsPage from "./pages/UserDetails";
import MyAccountPage from "./pages/MyAccountPage";
import AddAuctionPage from "./pages/AddAuctionPage";
import EditAuctionPage from "./pages/EditAuctionPage";


function App() {
  return (
    <div>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/allusers" element={<AllUsersPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/myaccount" element={<MyAccountPage />} />
        <Route path="/addauction" element={<AddAuctionPage />} />
        <Route path="/editauction" element={<EditAuctionPage />} />
        <Route path="/userdetails" element={<UserDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
