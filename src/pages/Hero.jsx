import { assets } from "../assets/assets";
import { easeOut, motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="flex flex-col bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 px-4 md:px-12 py-8 mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: easeOut }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-gray-800 drop-shadow-lg">
          Luxury Cars for Rent
        </h2>
        {/* <p className="text-center text-gray-600 text-base md:text-lg max-w-xl mx-auto">
          Choose from the finest selection of cars for your next journey. Easy booking, flexible dates, and premium service.
        </p> */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: easeOut }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white/90 md:p-8 md:mx-24 md:rounded-full mb-10 p-4 rounded-2xl shadow-lg items-center"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="pick" className="font-semibold text-gray-700">
            Pickup Location
          </label>
          <select
            name="pick-up"
            id="pick"
            className="font-light rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select location for pickup</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bengalore">Bengalore</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="pickup-date" className="font-semibold text-gray-700">
            Pickup Date
          </label>
          <input
            type="date"
            name="pick-up-date"
            id="pickup-date"
            className="font-light rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="return-date" className="font-semibold text-gray-700">
            Return Date
          </label>
          <input
            type="date"
            name="return-date"
            id="return-date"
            className="font-light rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex justify-center items-end h-full">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl shadow transition duration-200">
            Search
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: easeOut }}
        className="w-full flex justify-center items-center"
      >
        <img
          src={assets.main_car}
          alt="car-image"
          className="md:max-w-3xl object-cover max-w-md px-8"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
