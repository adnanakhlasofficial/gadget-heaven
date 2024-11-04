const ProductCard = ({ product }) => {
  const { product_name, price, product_image } = product;
  console.log(product);
  return (
    <div className="bg-off-white rounded-2xl  p-5 flex flex-col gap-5">
      <div>
        <img
          className="rounded-lg mix-blend-multiply"
          src={product_image}
          alt=""
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-deep-black text-2xl font-semibold">
          {product_name}
        </h2>
        <p className="text-gray text-xl font-medium">{price}</p>
      </div>
      <div>
        <button className="border-primary rounded-[2rem] border-2 px-6 py-3">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
