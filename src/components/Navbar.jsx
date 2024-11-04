import { Link, useLocation } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";

const Navbar = () => {
  let location = useLocation();
  const [navbg, setNavBg] = useState("bg-primary");
  const [navText, setNavText] = useState("text-white");

  useEffect(() => {
    if (location.pathname === "/") {
      setNavBg("bg-primary");
      setNavText("text-white");
    } else {
      setNavBg("bg-white");
      setNavText("text-gray-1")
    }
  }, [location]);

  return (
    <nav
      className={`wrapper ${navbg} flex items-center justify-between rounded-lg rounded-b-none py-6 ${navText}`}
    >
      {/* Logo */}
      <div>
        <h2 className="text-xl font-bold">Gadget Heaven</h2>
      </div>
      {/* Nav Links */}
      <div>
        <ul className="flex gap-4 text-base font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Branch</Link>
          </li>
        </ul>
      </div>
      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="text-gray-1 border-2 grid h-10 w-10 place-items-center rounded-full bg-white">
          <FiShoppingCart />
        </button>
        <button className="text-gray-1 border-2 grid h-10 w-10 place-items-center rounded-full bg-white">
          <FiHeart />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
