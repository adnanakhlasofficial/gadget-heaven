import toast from "react-hot-toast";

// get all product from local storage
const getAllWishList = () => {
  const all = localStorage.getItem("wishlist");
  if (all) {
    const wishList = JSON.parse(all);
    return wishList;
  } else {
    return [];
  }
};

// add a product to local storage
const addWishList = (product) => {
//   console.log(product);
  const wishList = getAllWishList();
  console.log(wishList);
  const isExist = wishList.find((item) => item.product_id === product.product_id);
  console.log(isExist);
  if (isExist) return toast.error('Product already exists!');
  wishList.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishList));
  toast.success('Successfully added!');
};

// remove a product to local storage

export { addWishList, getAllWishList };
