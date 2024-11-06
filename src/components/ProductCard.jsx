import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { product_id, product_name, price, product_image} = product;
  return (
    <div className="bg-off-white rounded-2xl p-5 flex h-max flex-col">
      <div>
        <img
          className="rounded-lg mix-blend-multiply"
          src={product_image}
          alt=""
        />
      </div>
      <div className="flex-grow h-28 my-4 space-y-2">
        <h2 className="text-deep-black text-2xl font-semibold">
          {product_name}
        </h2>
        <p className="text-gray text-xl font-medium">{price}</p>
      </div>
      <div>
        <Link to={`/product/${product_id}`} className="border-primary rounded-[2rem] inline-block text-center border-2 w-full py-3 hover:bg-primary hover:text-white text-deep-black duration-300">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
