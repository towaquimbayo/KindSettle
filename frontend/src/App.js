import { Route, Routes } from "react-router-dom";
import "./css/global.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AlimonyClaim from "./pages/AlimonyClaim";
import AlimonyCalculator from "./pages/AlimonyCalculator";
import TransactionHistory from "./pages/TransactionHistory";
import Profile from "./pages/Profile";
import MyClaims from "./pages/MyClaims";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/alimony-claim" element={<AlimonyClaim />} />
      <Route path="/alimony-calculator" element={<AlimonyCalculator />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-claims" element={<MyClaims />} />
    </Routes>
  );
}
