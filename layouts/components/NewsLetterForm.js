import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

function CustomForm() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    setSuccess(true);
    setEmail("");
  };

  return (
    <>
      <form className="py-6" onSubmit={handleSubmit}>
        <fieldset className="relative">
          <input
            className="newsletter-input form-input h-12 w-full rounded-3xl border-none bg-theme-light px-5 py-3 pr-12 text-dark placeholder:text-xs dark:bg-darkmode-theme-dark"
            type="email"
            placeholder="Type And Hit Enter"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSuccess(false);
            }}
            required
          />

          <FaEnvelope className="absolute top-1/2 right-5 -translate-y-1/2 text-xl" />
        </fieldset>

        <button
          className="d-block btn btn-primary mt-4 w-full"
          type="submit"
        >
          Subscribe Me
        </button>
      </form>

      {success && (
        <div className="mt-4 text-center text-green-700">
          Subscribed successfully!
        </div>
      )}
    </>
  );
}

export default CustomForm;
