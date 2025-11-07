"use client";

import { FormEvent, useState } from "react";

const BookEvent = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // TODO: add form validation
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // TODO: add submit functionality
    console.log(email);

    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div id="book-event">
      {submitted ? (
        <p className="text-sm">Thank you for signing up!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="email"
              placeholder="Enter your email address"
            />

            <button type="submit" className="button-submit mt-3">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default BookEvent;
