import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center  px-4 py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-blue-700 text-center">
          Never Miss a Deal!
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8 text-center">
          Subscribe to get the latest offers, new arrivals, and exclusive discounts.
        </p>
        <form className="w-full flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            className="flex-1 rounded-full px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Your Email"
          />
          <button
            type="submit"
            className="rounded-full px-6 py-3 bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
