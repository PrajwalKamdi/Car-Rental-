import React from "react";
import { assets } from "../assets/assets";
import { dummyCarData } from "../assets/assets";
import { easeOut, motion } from "framer-motion";

const FeatureCard = ({ car }) => (
  <motion.div
    initial={{ opacity: 0, y: -10, scale: 0.8 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 1, ease: easeOut }}
    className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden"
  >
    <img
      src={car.image ? car.image : assets[car.image]}
      alt={car.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4 flex flex-col gap-2 flex-1">
      <div>
        <h3 className="text-lg font-bold text-gray-800">
          {car.brand} {car.model}
        </h3>
        <p className="text-sm text-gray-500">
          {car.category} • {car.year}
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <img src={assets["users_icon"]} alt="" className="w-4" />
          <span>{car.seating_capacity} seats</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={assets["fuel_icon"]} alt="" className="w-4" />
          <span>{car.fuel_type}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={assets["car_icon"]} alt="" className="w-4" />
          <span>{car.transmission}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={assets["location_icon"]} alt="" className="w-4" />
          <span>{car.location}</span>
        </div>
      </div>
    </div>
    <div className="px-4 pb-4">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-150">
        View Details
      </button>
    </div>
  </motion.div>
);

const Featured_vehicle = () => (
  <div className="flex flex-col items-center bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 px-4 py-10 min-h-screen">
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: easeOut }}
      className="text-center mb-8 mt-10"
    >
      <h2 className="font-bold text-3xl md:text-4xl mb-2">Featured Vehicles</h2>
      <p className="text-lg text-gray-700">
        Explore our selection of premium vehicles available for your next
        adventure.
      </p>
    </motion.div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full max-w-6xl">
      {dummyCarData.map((car, idx) => (
        <FeatureCard car={car} key={idx} />
      ))}
      {dummyCarData.map((car, idx) => (
        <FeatureCard car={car} key={idx} />
      ))}
    </div>
  </div>
);

export default Featured_vehicle;
