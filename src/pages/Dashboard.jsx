import { useState } from "react";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const Dashboard = () => {
  const [isCart, setIsCart] = useState(true);

  const handleCart = (param) => {
    setIsCart(param);
  };

  return (
    <>
      <div>
        <Banner
          title={"Dashboard"}
          desc={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        >
          <div className="!mt-12 flex gap-4">
            <button
              onClick={() => handleCart(true)}
              className={isCart ? "w-48 rounded-full bg-white px-5 py-3 font-bold text-primary" : "w-48 rounded-full bg-transparent border-2 px-5 py-3 font-bold"}
            >
              Cart
            </button>
            <button
              onClick={() => handleCart(false)}
              className={!isCart ? "w-48 rounded-full bg-white px-5 py-3 font-bold text-primary" : "w-48 rounded-full bg-transparent border-2 px-5 py-3 font-bold"}
            >
              Wishlist
            </button>
          </div>
        </Banner>
      </div>
      <div>
        {
            isCart ? <Cart /> : <Wishlist />
        }
      </div>
    </>
  );
};

export default Dashboard;
