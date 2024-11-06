import { useEffect, useState } from "react";
import { getAllWishList, removeWishlist } from "../utils";
import ProductCard from "./ProductCard";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const wishlist = getAllWishList();
    setProducts(wishlist);
    console.log(wishlist);
  }, []);

  const handleRemove = id => {
    removeWishlist(id);
    const wishlist = getAllWishList();
    setProducts(wishlist);
  }

  return (
    <div className="wrapper my-12 space-y-6">
    
        {
            products.map(product => <WishlistCard key={product.product_id} product={product} handleRemove={handleRemove} />)
        }
    
    </div>
  );
};

export default Wishlist;