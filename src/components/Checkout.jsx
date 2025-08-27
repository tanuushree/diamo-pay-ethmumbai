import { useState } from "react";

export default function Checkout({ ticket, onBack }) {
  const [status, setStatus] = useState("idle");

  async function handlePayment() {
    setStatus("processing");

    try {
      // Mock Daimo Pay (replace later with API call)
      setTimeout(() => setStatus("success"), 2000);
    } catch (err) {
      console.error(err);
      setStatus("failed");
    }
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Checkout</h2>
      <div className="space-y-2">
        <p className="text-gray-700">Ticket: <span className="font-semibold">{ticket.name}</span></p>
        <p className="text-gray-700">Price: 
          <span className="font-semibold text-indigo-600"> ${ticket.priceUSD}</span> 
          {" "} / ₹{ticket.priceINR}
        </p>
      </div>

      {status === "idle" && (
        <button
          onClick={handlePayment}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
        >
          Pay with Daimo
        </button>
      )}

      {status === "processing" && (
        <p className="mt-6 text-blue-600 font-medium text-center">⏳ Processing payment...</p>
      )}
      {status === "success" && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 text-green-700 text-center font-medium">
          ✅ Payment successful! <br/> Your ticket is confirmed 🎟️
        </div>
      )}
      {status === "failed" && (
        <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-center font-medium">
          ❌ Payment failed. Please try again.
        </div>
      )}

      <button
        onClick={onBack}
        className="mt-6 block text-gray-500 hover:text-gray-700 text-sm"
      >
        ← Back to tickets
      </button>
    </div>
  );
}
