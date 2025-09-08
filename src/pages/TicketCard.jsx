import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

export default function Tickets() {
  return (
    <div className="min-h-screen bg-red-600 flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-extrabold text-white mb-10">Tickets on Sale Now</h1>
      
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        
        {/* Standard Ticket */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between border-4 border-black">
          <h2 className="text-3xl font-extrabold text-black mb-4">Standard</h2>
          <ul className="space-y-2 text-lg text-black">
            <li>✔ Full access to conference talks & workshops</li>
            <li>✔ Food & drinks during the event</li>
            <li>✔ Networking areas</li>
            <li>✔ Unique conference swag</li>
          </ul>
          <div className="mt-6 space-y-3">
            <Link to="/cart">
            <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-900">
              Buy with Ticket
            </button>
            </Link>
          </div>
        </div>

        {/* Student Ticket */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between border-4 border-black">
          <h2 className="text-3xl font-extrabold text-black mb-4">Student</h2>
          <ul className="space-y-2 text-lg text-black">
            <li>✔ Full access to conference talks & workshops</li>
            <li>✔ Food & drinks during the event</li>
            <li>✔ Networking areas</li>
            <li>✔ Fill form for Scholarship</li>
          </ul>
          <div className="mt-6 space-y-3">
            <Link to="/cart">
            <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-900">
              Fill the Form
            </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}


