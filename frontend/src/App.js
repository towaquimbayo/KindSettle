import { Route, Routes } from "react-router-dom";
import "./css/global.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AlimonyClaim from "./pages/AlimonyClaim";
import AlimonyCalculator from "./pages/AlimonyCalculator";
import TransactionHistory from "./pages/TransactionHistory";
import LandingPage from "./components/LandingPage/LandingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landingPage" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/alimony-claim" element={<AlimonyClaim />} />
      <Route path="/alimony-calculator" element={<AlimonyCalculator />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
    </Routes>
  );
}
