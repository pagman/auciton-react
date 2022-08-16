import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SigninPage from "./pages/Signin";
import AccountPage from "./pages/Account";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </div>
  );
}

export default App;
