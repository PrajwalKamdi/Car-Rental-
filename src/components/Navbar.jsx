import React, { useState } from "react";
import logo from "/src/assets/logo.svg";
import { assets } from "../assets/assets";
import { easeOut, motion } from "framer-motion";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  // Prevent background scroll and hide other content when menu is open
  React.useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <nav className="flex justify-between items-center px-4 md:px-16 py-4 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 shadow-md sticky top-0 z-40">
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="hidden md:flex gap-8 items-center"
        >
          <ul className="flex gap-8 font-medium text-gray-700">
            <li className="hover:text-sky-600 cursor-pointer transition">Home</li>
            <li className="hover:text-sky-600 cursor-pointer transition">Cars</li>
            <li className="hover:text-sky-600 cursor-pointer transition">MyBookings</li>
          </ul>
          <div>
            <input
              type="text"
              placeholder="Search car"
              className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400 transition w-40"
            />
          </div>
          <button className="bg-sky-500 text-white rounded-full py-2 px-5 font-semibold shadow hover:bg-sky-600 transition">
            List Cars
          </button>
          <button className="bg-white border border-sky-500 text-sky-500 rounded-full py-2 px-5 font-semibold shadow hover:bg-sky-500 hover:text-white transition">
            Login
          </button>
        </motion.div>

        <button className="block md:hidden focus:outline-none">
          <img
            src={menu ? assets.close_icon : assets.menu_icon}
            alt="menu"
            onClick={handleMenu}
            className="h-8 w-8"
          />
        </button>
      </nav>
      {menu && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md shadow-lg p-6 flex flex-col md:hidden animate-slideDown">
          <div className="flex justify-between items-center mb-6">
            <img src={logo} alt="logo" className="h-10 w-auto" />
            <button className="focus:outline-none">
              <img
                src={assets.close_icon}
                alt="close"
                onClick={handleMenu}
                className="h-8 w-8"
              />
            </button>
          </div>
          <ul className="flex flex-col gap-6 font-medium text-gray-700">
            <li className="hover:text-sky-600 cursor-pointer transition">Home</li>
            <li className="hover:text-sky-600 cursor-pointer transition">Cars</li>
            <li className="hover:text-sky-600 cursor-pointer transition">MyBookings</li>
          </ul>
          <input
            type="text"
            placeholder="Search car"
            className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400 transition mt-6 mb-4 w-full"
          />
          <button className="bg-sky-500 text-white rounded-full py-2 px-5 font-semibold shadow hover:bg-sky-600 transition mb-3 w-full">
            List Cars
          </button>
          <button className="bg-white border border-sky-500 text-sky-500 rounded-full py-2 px-5 font-semibold shadow hover:bg-sky-500 hover:text-white transition w-full">
            Login
          </button>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .animate-slideDown {
            animation: slideDown 0.3s ease;
          }
          @keyframes slideDown {
            from { transform: translateY(-30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
