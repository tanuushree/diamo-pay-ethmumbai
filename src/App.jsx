import { useState } from "react";
import TicketCard from "./components/TicketCard";
import Checkout from "./components/Checkout";

const tickets = [
  { id: "early", name: "Early Bird", priceUSD: 40, priceINR: 3500, qty: 50 },
  { id: "regular", name: "Regular", priceUSD: 50, priceINR: 4200, qty: 200 },
  { id: "friends", name: "Friends (20% off)", priceUSD: 40, priceINR: 3500, qty: "∞" },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700 drop-shadow-sm">
        EthMumbai Tickets 🎟️
      </h1>
      
      {!selected ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tickets.map((t) => (
            <TicketCard key={t.id} ticket={t} onSelect={() => setSelected(t)} />
          ))}
        </div>
      ) : (
        <Checkout ticket={selected} onBack={() => setSelected(null)} />
      )}
    </div>
  );
}
