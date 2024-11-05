import { NavLink, useLocation } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";

const Navbar = () => {
  let {pathname} = useLocation();
  console.log(pathname);
  const [navbg, setNavBg] = useState("bg-primary");
  const [navText, setNavText] = useState("text-white");
  const [isActive,  setIsActive] = useState(false);
  const paths =  ["/dashboard", "/statistics", "/product/:id"]
  useEffect(() => {
    const include = paths.includes(pathname)
    setIsActive(include)
    // if (location.pathname === "/") {
    //   setNavBg("bg-primary");
    //   setNavText("text-white");
    // } else {
    //   setNavBg("bg-white");
    //   setNavText("text-gray-1")
    // }
  }, [pathname]);

  return (
    <nav
      className={`wrapper ${!isActive ? "bg-primary": "bg-white"} flex items-center justify-between rounded-lg rounded-b-none py-6 ${!isActive ? "text-white": "text-gray-1"}`}
    >
      {/* Logo */}
      <div>
        <h2 className="text-xl font-bold">Gadget Heaven</h2>
      </div>
      {/* Nav Links */}
      <div>
        <ul className="flex gap-4 text-base font-medium">
          <li>
            <NavLink className={({isActive})=> `${isActive && "underline underline-offset-4"}`} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> `${isActive && "underline underline-offset-4"}`} to="/statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> `${isActive && "underline underline-offset-4"}`} to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> `${isActive && "underline underline-offset-4"}`} to="/">Branch</NavLink>
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
