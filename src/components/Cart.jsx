import { useEffect, useState } from "react";
import { getAllCartList, removeCartList } from "../utils";
import CartListCard from "./CartListCard";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartlist = getAllCartList();
    setProducts(cartlist);
    
  }, []);

  const handleSort = () => {
    const cartlist = getAllCartList();
    const sortCartList = cartlist.sort((a,b)=> a.price - b.price);
    setProducts(sortCartList);
  }

  const handlePurchase =() => {
    setProducts([])
    localStorage.setItem("cartlist", JSON.stringify([]))
  }

  const handleCartRemove = (id) => {
    removeCartList(id);
    const cartlist = getAllCartList();
    setProducts(cartlist);
  };
  return (
    <div className="wrapper my-12 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-primary">Cart List</h2>
        <div className="flex items-center gap-4">
            <p className="text-2xl text-deep-black font-bold">Total Cost: {totalPrice}</p>
            <button onClick={handleSort} disabled={products.length > 0 ? false : true} className={products.length > 0 ? "px-5 py-3 border-primary border-2 rounded-full text-primary": "px-5 py-3 border-2 rounded-full bg-gray text-white"}>Sort By Price</button>
            <button onClick={handlePurchase} disabled={products.length > 0 ? false : true} className={products.length > 0 ? "px-5 py-3 border-primary border-2 rounded-full text-primary": "px-5 py-3 border-2 rounded-full bg-gray text-white"}>Purchase</button>
        </div>
      </div>

      {products.map((product) => (
        <CartListCard
          key={product.product_id}
          product={product}
          handleCartRemove={handleCartRemove}
        />
      ))}
    </div>
  );
};

export default Cart;
