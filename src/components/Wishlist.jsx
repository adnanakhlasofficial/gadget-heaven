import { useEffect, useState } from "react";
import { getAllWishList } from "../utils";
import ProductCard from "./ProductCard";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const wishlist = getAllWishList();
    setProducts(wishlist);
    console.log(wishlist);
  }, []);

  return (
    <div className="wrapper mt-12 space-y-6">
    
        {
            products.map(product => <WishlistCard key={product.product_id} product={product} />)
        }
    
    </div>
  );
};

export default Wishlist;
