import { FiX } from "react-icons/fi";

const CartListCard = ({ product, handleCartRemove }) => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center gap-8 rounded-2xl bg-off-white p-8">
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
        <div className="absolute right-8 top-4">
          <button onClick={()=> handleCartRemove(product.product_id)} className="text-p[#FF0000] rounded-full border-2 border-[#FF0000] p-2 text-xl">
            <FiX color="#FF0000" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartListCard;
