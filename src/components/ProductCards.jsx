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
      {gadget.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default ProductCards;
