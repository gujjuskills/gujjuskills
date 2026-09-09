"use client";

import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

export default function CustomForm() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    // Open email app
    window.location.href =
      "mailto:YOUR_EMAIL@gmail.com?subject=New Newsletter Subscriber&body=New subscriber email: " +
      encodeURIComponent(email);

    setEmail("");
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="py-6">
        <fieldset className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="newsletter-input form-input h-12 w-full rounded-3xl border-none bg-theme-light px-5 py-3 pr-12 text-dark"
          />

          <FaEnvelope className="absolute top-1/2 right-5 -translate-y-1/2 text-xl" />
        </fieldset>

        <button
          type="submit"
          className="btn btn-primary mt-4 w-full"
        >
          Sign In
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
            <div className="text-5xl text-green-600">✓</div>

            <h2 className="mt-3 text-xl font-bold">
              Subscribed Successfully!
            </h2>

            <p className="mt-2 text-gray-600">
              Thank you for subscribing.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
