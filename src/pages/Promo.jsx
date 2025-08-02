import React from "react";
import { assets } from "../assets/assets";
import { easeOut, motion } from "framer-motion";
const Promo = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-4 md:px-12 py-12 bg-gradient-to-r from-blue-700 to-blue-400 min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: easeOut }}
        className="w-full lg:w-1/2 flex flex-col justify-center items-start mb-10 lg:mb-0 lg:pr-12"
      >
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl capitalize text-white mb-6 leading-tight drop-shadow-lg">
          Do you own a luxury car?
        </h2>
        <p className="text-white/90 font-medium text-base md:text-lg mb-6 max-w-lg">
          Monetize your vehicle effortlessly by listing it on CarRental. We take care of insurance, driver verification, and secure payments — so you can earn passive income, stress-free.
        </p>
        <button
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300"
        >
          List Your Car
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: easeOut }}
        className="w-full lg:w-1/2 flex justify-center items-center"
      >
        <img
          src={assets["banner_car_image"]}
          alt="Luxury Car"
          className="w-full max-w-md rounded-2xl object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Promo;
