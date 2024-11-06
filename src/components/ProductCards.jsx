import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const ProductCards = () => {
  const { product } = useParams();
  const { products } = useLoaderData();
  const [gadget, setGadget] = useState([]);

  useEffect(() => {
    if (product === "All") {
        setGadget(products)
    } else {
      const filterData = products.filter(
        (gadget) => gadget.category == product,
      );
      setGadget(filterData);
    }
  }, [product, products]);
  return (
    <div className="grid grid-cols-3 gap-4">
      {
      gadget.length > 0 ? gadget.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      )) : <h2 className="text-5xl text-primary font-bold text-nowrap">No Product Found</h2>
      }
    </div>
  );
};

export default ProductCards;
