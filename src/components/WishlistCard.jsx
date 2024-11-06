import { FiX } from "react-icons/fi";

const WishlistCard = ({ product, handleRemove }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 rounded-2xl bg-off-white p-8 relative">
      <div>
        <img
          className="h-28 mix-blend-multiply"
          src={product.product_image}
          alt=""
        />
      </div>
      <div className="space-y-4">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-deep-black">
            {product.product_name}
          </h2>
          <p className="text-lg text-gray">{product.description}</p>
        </div>
        <p className="text-xl font-semibold text-deep-gray">
          Price: ${product.price}
        </p>
        <div className="absolute top-4 right-8">
          <button onClick={()=>handleRemove(product.product_id)} className="text-xl p-2 rounded-full border-2 border-[#FF0000] text-p[#FF0000]"><FiX color="#FF0000" /></button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
