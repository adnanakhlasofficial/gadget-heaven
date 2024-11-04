import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useLoaderData();
  const [product, setProduct] = useState({});
  const [spec, setSpec] = useState([]);

  useEffect(() => {
    const findData = products.find((product) => product.product_name == id);
    setProduct(findData);
  }, []);

  const {
    category,
    description,
    price,
    product_id,
    product_name,
    product_image,
    rating,
    speciality,
    stock_availability,
    specifications,
  } = product;

//   if (specifications) {
//     const specs = Object.values(specifications);
//     setSpec(specs);
//   }
  console.log(spec);
  return (
    <div className="wrapper bg-off-white flex gap-8 rounded-3xl p-8">
      <div>
        <img className="mix-blend-multiply" src={product_image} alt="" />
      </div>
      <div className="space-y-4">
        <h2 className="text-deep-black text-3xl font-bold">{product_name}</h2>
        <p className="text-deep-gray text-xl font-semibold">Price: $ {price}</p>
        <p
          className={
            stock_availability
              ? "inline-block rounded-full border-2 border-[#309C08] bg-[#EAF5E6] px-4 py-2 text-sm font-medium text-[#309C08]"
              : "border-gray border-2 px-4 py-2"
          }
        >
          {stock_availability ? "In Stock" : "Out of Stock"}
        </p>
        <p className="text-gray text-lg">{description}</p>

        <div>
          <h2 className="text-deep-black text-lg font-bold">Spcification</h2>
          <ul>
            {
            
            
            }
          </ul>
        </div>
        <div>
          <h2 className="text-deep-black text-lg font-bold">Rating</h2>
          <div className="flex items-center gap-4">
            {rating && (
              <ReactStars
                count={5}
                size={24}
                value={rating}
                activeColor="#F9C004"
                edit={false}
              />
            )}
            <span className="border-gray text-deep-black rounded-full border-2 bg-white px-4 py-2 text-sm font-medium">
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
