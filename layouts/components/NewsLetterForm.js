import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

function CustomForm({ status, message, onValidated }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (onValidated) {
      onValidated({
        EMAIL: email,
      });
    }

    setEmail("");
  };

  return (
    <>
      <form className="py-6" onSubmit={handleSubmit}>
        <fieldset className="relative">
          <input
            className="newsletter-input form-input h-12 w-full rounded-3xl border-none bg-theme-light px-5 py-3 pr-12 text-dark placeholder:text-xs dark:bg-darkmode-theme-dark"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <FaEnvelope className="absolute top-1/2 right-5 -translate-y-1/2 text-xl" />
        </fieldset>

        <button
          className="d-block btn btn-primary mt-4 w-full"
          type="submit"
        >
          Sign In
        </button>
      </form>

      {status === "sending" && (
        <div className="mt-4 text-primary">
          Submitting...
        </div>
      )}

      {status === "error" && (
        <div
          className="mt-4 text-red-700"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-[90%] max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
            <div className="mb-4 text-5xl">✓</div>

            <h3 className="mb-2 text-2xl font-bold text-green-600">
              Subscribed Successfully!
            </h3>

            <p className="text-gray-600">
              Thank you for subscribing to our newsletter.
            </p>

            <button
              type="button"
              className="btn btn-primary mt-6"
              onClick={() => window.location.reload()}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomForm;
