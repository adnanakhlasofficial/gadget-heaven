const WishlistCard = ({ product }) => {
  return (
    <div className="flex items-center gap-8 rounded-2xl bg-off-white p-8">
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
      </div>
    </div>
  );
};

export default WishlistCard;
