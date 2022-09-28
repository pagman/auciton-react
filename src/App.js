import "./App.css";
import * as React from "react";
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
  const [showingAdmin, setShowingAdmin] = React.useState(false);
  const [showing, setShowing] = React.useState(false);

  return (
    <div>      
      <SearchAppBar showing={showing} showingAdmin={showingAdmin} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account/" element={<AccountPage />} />
        <Route path="/signin" element={<SigninPage setShowing={setShowing}  setShowingAdmin={setShowingAdmin}/>} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/allusers" element={<AllUsersPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/myaccount" element={<MyAccountPage />} />
        <Route path="/addauction" element={<AddAuctionPage />} />
        <Route path="/editauction" element={<EditAuctionPage />} />
        <Route exact path="/userdetails/:id" element={<UserDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
