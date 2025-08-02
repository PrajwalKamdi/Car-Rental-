import React from "react";
import { assets } from "../assets/assets";
import { easeOut, motion } from "framer-motion";

const Testomonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      state: "Maharashtra",
      country: "India",
      experience:
        "I loved the convenience and flexibility. The booking process was quick and the car exceeded my expectations.",
    },
    {
      name: "Amit Patel",
      state: "Gujarat",
      country: "India",
      experience:
        "Renting a car was easy and affordable. The service was prompt and the car was in great condition.",
    },
    {
      name: "Sneha Reddy",
      state: "Telangana",
      country: "India",
      experience:
        "Excellent experience! The staff was helpful and the car made my journey smooth and enjoyable.",
    },
  ];

  const TestimonialCard = ({ testimonial, imgIdx }) => (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-4"
    >
      <div className="flex items-center gap-4">
        <img
          src={assets[`testimonial_image_${imgIdx + 1}`] || assets["testimonial_image_1"]}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 shadow"
        />
        <div>
          <p className="font-bold text-lg text-gray-800">{testimonial.name}</p>
          <p className="text-sm text-gray-500">
            {testimonial.state}, {testimonial.country}
          </p>
        </div>
      </div>
      <div>
        <div className="flex text-yellow-400 mb-2">
          {[...Array(5)].map((_, idx) => (
            <svg
              key={idx}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 text-base leading-relaxed">{testimonial.experience}</p>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: easeOut }}
      className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-4"
    >
      <div className="text-center max-w-xl mx-auto mt-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 font-medium text-lg md:text-xl">
          Discover why discerning travelers choose StayVenture for their luxury accommodations around the world.
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((test, idx) => (
          <TestimonialCard testimonial={test} imgIdx={idx} key={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default Testomonials;
