import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import TicketsPage from "./pages/TicketCard.jsx";
import CartPage from "./pages/CartPage.jsx";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}