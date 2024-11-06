import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Banner from "./Banner";
import { FiHeart } from "react-icons/fi";
import { addCartList, addWishList, getAllCartList, getAllWishList } from "../utils";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useLoaderData();
  const [product, setProduct] = useState({});
  const [spec, setSpec] = useState([]);
  const [isWishList, setIsWishList] = useState(false);
  const [isCartList, setIsCartList] = useState(false);
  
  useEffect(() => {
    const findData = products.find((product) => product.product_id == id);
    setProduct(findData);

    const wishlist = getAllWishList();
    const isExist = wishlist.find((item) => item.product_id === id);
    console.log(isExist);
    if(isExist) {
      isExist && setIsWishList(true);
    }

    const cartlist = getAllCartList();
    const isExistedCartList = cartlist.find(item => item.product_id === id);
    if(isExistedCartList) {
      isExistedCartList && setIsCartList(true);
    }

    setSpec(Object.values(findData.specifications));
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

  // handle wishlist
  const handleWishList = product => {
    addWishList(product);
    setIsWishList(true);
  }
  
  // handle cartlist 
  const handleCartList = product => {
    addCartList(product);
    setIsCartList(true)
  }

  return (
    <div className="relative">
      <Banner
        title={"Product Details"}
        desc={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}
        padding={"pb-48"}
      />
      <div className="wrapper relative -top-48 mt-12 flex flex-col lg:flex-row lg:!w-10/12 gap-8 rounded-3xl bg-off-white p-8">
        <div>
          <img className="mix-blend-multiply" src={product_image} alt="" />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-deep-black">{product_name}</h2>
          <p className="text-xl font-semibold text-deep-gray">
            Price: $ {price}
          </p>
          <p
            className={
              stock_availability
                ? "inline-block rounded-full border-2 border-[#309C08] bg-[#EAF5E6] px-4 py-2 text-sm font-medium text-[#309C08]"
                : "inline-block rounded-full border-2 border-gray px-4 py-2"
            }
          >
            {stock_availability ? "In Stock" : "Out of Stock"}
          </p>
          <p className="text-lg text-gray">{description}</p>

          <div>
            <h2 className="text-lg font-bold text-deep-black">Spcification</h2>
            <ul className="ml-8 mt-3 list-decimal space-y-2 text-deep-gray">
              {spec.map((data, idx) => (
                <li key={idx} >{data}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-deep-black">Rating</h2>
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
              <span className="rounded-full border-2 border-gray bg-white px-4 py-2 text-sm font-medium text-deep-black">
                {rating}
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <button disabled={isCartList} onClick={()=>handleCartList(product)} className={!isCartList ? "rounded-full bg-primary px-6 py-3 text-white" : "rounded-full bg-gray-1 px-6 py-3 text-white"}>
              Add To Cart
            </button>
            <button disabled={isWishList} onClick={()=> handleWishList(product)} className={isWishList ? "grid h-10 w-10 place-items-center rounded-full border-2 bg-gray-1 text-white" : "grid h-10 w-10 place-items-center rounded-full border-2 bg-white text-gray-1" }>
              <FiHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
