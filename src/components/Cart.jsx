import { useEffect, useState } from "react";
import { getAllCartList, removeCartList } from "../utils";
import CartListCard from "./CartListCard";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cartlist = getAllCartList();
    setProducts(cartlist);
  }, []);

  const handleCartRemove = (id) => {
    removeCartList(id);
    const cartlist = getAllCartList();
    setProducts(cartlist);
  };
  return (
    <div className="wrapper my-12 space-y-6">
      <h2 className="text-3xl font-bold text-primary">Cart List</h2>

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
