import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start px-4">
        {/* Logo and Rights */}
        <div className="flex-1 min-w-[200px] mb-4">
          <img src={assets["logo"]} alt="Logo" className="w-32 mb-2" />
          <div>© {new Date().getFullYear()} All rights reserved.</div>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[150px] mb-4">
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="list-none p-0 space-y-1">
            <li>
              <a href="/" className="text-gray-300 hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-300 hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-gray-300 hover:text-white transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-300 hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Resources */}
        <div className="flex-1 min-w-[150px] mb-4">
          <h4 className="text-white font-semibold mb-2">Resources</h4>
          <ul className="list-none p-0 space-y-1">
            <li>
              <a
                href="/blog"
                className="text-gray-300 hover:text-white transition"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="text-gray-300 hover:text-white transition"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="text-gray-300 hover:text-white transition"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
        {/* Contact & Social */}
        <div className="flex-1 min-w-[200px] mb-4">
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <div className="text-gray-300">
            Nagpur, Maharashtra, India
            <br />
            Email:{" "}
            <a
              href="mailto:info@realme.com"
              className="text-gray-300 hover:text-white"
            >
              info@realme.com
            </a>
            <br />
            Phone:{" "}
            <a
              href="tel:+911234567890"
              className="text-gray-300 hover:text-white"
            >
              +91 12345 67890
            </a>
          </div>
          <div className="mt-2 flex space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white flex items-center space-x-1"
            >
              <span className="fab fa-facebook-f"></span>
              <span>Facebook</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white flex items-center space-x-1"
            >
              <span className="fab fa-twitter"></span>
              <span>Twitter</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white flex items-center space-x-1"
            >
              <span className="fab fa-instagram"></span>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
