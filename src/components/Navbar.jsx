import { NavLink, useLocation } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import { getAllWishList } from "../utils";

const Navbar = () => {
  let {pathname} = useLocation();

  const [navbg, setNavBg] = useState("bg-primary");
  const [navText, setNavText] = useState("text-white");
  const [isActive,  setIsActive] = useState(false);
  const paths =  ["/dashboard", "/statistics", "/product/:id", "/branch" ]
  const [wishlist, setWishlist] = useState(0);

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

  useEffect(()=>{
    const wishlist = getAllWishList();
    setWishlist(wishlist.length);
  })

  return (
    <nav
      className={`wrapper flex lg:flex-row flex-col justify-between gap-4 ${!isActive ? "bg-primary": "bg-white"} flex items-center justify-between rounded-lg rounded-b-none py-6 ${!isActive ? "text-white": "text-gray-1"}`}
    >
      {/* Logo */}
      <div>
        <h2 className="text-xl font-bold">Gadget Heaven</h2>
      </div>
      {/* Nav Links */}
      <div>
        <ul className="flex gap-4 text-base font-medium">
          <li>
            <NavLink className={({isActive})=> `${isActive && "underline underline-offset-4 font-bold"}`} to="/category/All">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> `${isActive && "text-primary font-bold"}`} to="/statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> `${isActive && "text-primary font-bold"}`} to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> `${isActive && "text-primary font-bold"}`} to="/branch">Branch</NavLink>
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
