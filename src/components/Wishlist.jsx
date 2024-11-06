import { useEffect, useState } from "react";
import { getAllWishList, removeWishlist } from "../utils";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const wishlist = getAllWishList();
    setProducts(wishlist);
  }, []);

  const handleRemove = id => {
    removeWishlist(id);
    const wishlist = getAllWishList();
    setProducts(wishlist);
  }

  return (
    <div className="wrapper my-12 space-y-6">
      <h2 className="text-3xl text-primary font-bold">Wish List</h2>
    
        {
            products.map(product => <WishlistCard key={product.product_id} product={product} handleRemove={handleRemove} />)
        }
    
    </div>
  );
};

export default Wishlist;
