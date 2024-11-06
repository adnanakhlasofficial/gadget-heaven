import { useEffect, useState } from "react";
import { getAllCartList, removeCartList } from "../utils";
import CartListCard from "./CartListCard";
import success from "../assets/success.svg"
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const cartlist = getAllCartList();
    // console.log(cartlist);
    const total = cartlist.reduce((prev,curr) => {
        console.log(prev);
        console.log(curr);
        return prev + curr.price
    }, 0)
    setTotalPrice(total.toFixed(2));
    setProducts(cartlist);
}, []);

const handleSort = () => {
    const cartlist = getAllCartList();
    const sortCartList = cartlist.sort((a, b) => b.price - a.price);
    setProducts(sortCartList);
  };

  const handlePurchase = () => {
    document.getElementById("my_modal_1").showModal()
    setProducts([]);
    localStorage.setItem("cartlist", JSON.stringify([]));
    
  };

  const handleClose = () => {
    setTotalPrice(0)
    setTimeout(() => {
      navigate("/")
    }, 300);
  }

  const handleCartRemove = (id) => {
    removeCartList(id);
    const cartlist = getAllCartList();
    setProducts(cartlist);
    const total = cartlist.reduce((prev,curr) => {
        console.log(prev);
        console.log(curr);
        return prev + curr.price
    }, 0)
    setTotalPrice(total.toFixed(2));
  };
  return (
    <div className="wrapper my-12 space-y-6">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h2 className="text-3xl font-bold text-primary">Cart List</h2>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <p className="text-2xl font-bold text-deep-black">
            Total Cost: ${totalPrice}
          </p>
          <button
            onClick={handleSort}
            disabled={products.length > 0 ? false : true}
            className={
              products.length > 0
                ? "rounded-full border-2 border-primary px-5 py-3 text-primary"
                : "rounded-full border-2 bg-gray px-5 py-3 text-white"
            }
          >
            Sort By Price
          </button>
          <button
            onClick={handlePurchase}
            disabled={products.length > 0 ? false : true}
            className={
              products.length > 0
                ? "rounded-full border-2 border-primary px-5 py-3 text-primary"
                : "rounded-full border-2 bg-gray px-5 py-3 text-white"
            }
          >
            Purchase
          </button>
        </div>
      </div>

      {products.map((product) => (
        <CartListCard
          key={product.product_id}
          product={product}
          handleCartRemove={handleCartRemove}
        />
      ))}

      {/* Open the modal using document.getElementById('ID').showModal() method */}
     
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box p-8">
          <div className="text-center">
            <div className="grid place-items-center mb-6">
                <img src={success} alt="" />
            </div>
            <h3 className="text-deep-black text-2xl font-bold pb-3 border-b-2 border-[#09080F1A]">Payment Successfully</h3>
            <p className="text-base text-gray pt-3">Thanks for purchasing.</p>
            <p className="text-base text-gray mt-2">Total: {totalPrice}</p>
          </div>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleClose} className="block py-2 rounded-full w-full bg-[#EBE9E9] text-deep-black">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
