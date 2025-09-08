import React, { useState } from "react";

function CartPage() {
  const [cart, setCart] = useState(1);
  const [step, setStep] = useState(1); // 1 = cart, 2 = buyer info
  const [showPayment, setShowPayment] = useState(false);
  const ticketPrice = 50;
  const CartTotal = cart * ticketPrice;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* STEP 1: CART PAGE */}
      {step === 1 && (
        <div className="w-full max-w-2xl bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-4 text-xl font-bold">
            Ticket Portal
          </div>

          {/* Ticket Row */}
          <div className="flex items-center justify-between border-b p-6">
            <div>
              <h2 className="font-bold text-lg">Conference Ticket</h2>
              <p className="text-sm text-gray-600">General Admission</p>
            </div>
            <div className="text-right">
              <p className="text-gray-800">US${ticketPrice}</p>
              <p className="font-semibold">US${CartTotal}</p>
            </div>
            <div>
              <select
                value={cart}
                onChange={(e) => setCart(parseInt(e.target.value))}
                className="border rounded p-2"
              >
                {[...Array(10).keys()].map((n) => (
                  <option key={n + 1} value={n + 1}>
                    {n + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setStep(2)}
              className="px-8 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: BUYER INFO */}
      {step === 2 && (
        <div className="w-full max-w-2xl bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-4 text-xl font-bold">
            Buyer Information
          </div>

          <div className="p-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Organization / University"
              className="w-full p-3 border rounded"
            />

            {/* Total */}
            <p className="text-right font-semibold text-lg">
              Final Amount: US${CartTotal}
            </p>

            {/* Actions */}
            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
              >
                ← Back
              </button>

              <button
                onClick={() => setShowPayment(true)}
                className="px-8 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PAYMENT POPUP */}
      {showPayment && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowPayment(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-2 text-center">
              Complete Your Purchase
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Final Amount: <span className="font-semibold">US${CartTotal}</span>
            </p>

            {/* Options */}
            <div className="grid grid-cols-2 gap-6">
              {/* Pay with INR */}
              <button
                onClick={() => window.open("https://razorpay.com", "_blank")}
                className="flex flex-col items-center justify-center p-6 border rounded-xl shadow-sm hover:shadow-md hover:border-blue-500 transition"
              >
                <p className="font-semibold">Pay with INR</p>
                <span className="text-sm text-gray-500">UPI / Card / Netbanking</span>
              </button>

              {/* Pay with Crypto */}
              <button
                onClick={() => window.open("https://pay.daimo.com", "_blank")}
                className="flex flex-col items-center justify-center p-6 border rounded-xl shadow-sm hover:shadow-md hover:border-purple-500 transition"
              >
                <p className="font-semibold">Pay with Crypto</p>
                <span className="text-sm text-gray-500">Powered by Daimo Pay</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
