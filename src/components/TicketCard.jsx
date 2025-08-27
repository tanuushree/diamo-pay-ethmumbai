export default function TicketCard({ ticket, onSelectCrypto, onSelectFiat }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col justify-between border border-gray-100">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">{ticket.name}</h2>
        <p className="mt-2 text-gray-600">
          <span className="font-bold text-indigo-600">${ticket.priceUSD}</span> / ₹{ticket.priceINR}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Available: {ticket.qty}
        </p>
      </div>
      <div className="mt-6 flex gap-3">
        <button
          onClick={onSelectCrypto}
          className="flex-1 bg-purple-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-purple-700 transition"
        >
          Buy with Crypto
        </button>
        <button
          onClick={onSelectFiat}
          className="flex-1 bg-green-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-green-700 transition"
        >
          Buy in INR
        </button>
      </div>
    </div>
  );
}
