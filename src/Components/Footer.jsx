import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="w-full h-40 bg-blue-800 text-white text-center">
      <div className="w-full bg-gray-700 hover:bg-gray-600 font-bold font-sans">
        <button
          className="w-full h-12 "
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      </div>
      <br />
      <div>
        <p>Contact Us: support@example.com | Phone: +1-123-456-7890</p>
        <p>
          &copy; {new Date().getFullYear()} Your Ecommerce Store. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
