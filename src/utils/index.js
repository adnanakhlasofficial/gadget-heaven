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
  const isExist = wishList.find(
    (item) => item.product_id === product.product_id,
  );
  if (isExist) return toast.error("Product already exists in wishlist!");
  wishList.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishList));
  toast.success("Successfully added to wishlist!");
};

// remove a product to local storage
const removeWishlist = (id) => {
  const wishList = getAllWishList();
  const remaining = wishList.filter((product) => product.product_id != id);
  localStorage.setItem("wishlist", JSON.stringify(remaining));
  toast.success("Successfully removed from wishlist!");
};

// get all product from local storage
const getAllCartList = () => {
  const allCartList = localStorage.getItem("cartlist");
  if(allCartList) {
    const cartList = JSON.parse(allCartList);
    return cartList;
  } else {
    return [];
  }

}

// add a product to local storage
const addCartList = (product) => {
  const cartList = getAllCartList();
  const isExist = cartList.find(item => item.product_id === product.product_id)
  if (isExist) return toast.error("Product already exists in cart list!");
  cartList.push(product);
  localStorage.setItem("cartlist", JSON.stringify(cartList));
  toast.success("Successfully added to cartlist!");
};

// remove a product to local storage
const removeCartList = id => {
  const cartList = getAllCartList()
  const remaining = cartList.filter((product) => product.product_id != id);
  localStorage.setItem("cartlist", JSON.stringify(remaining));
  toast.success("Successfully removed from cart list!");
}

export { addWishList, getAllWishList, removeWishlist, addCartList, getAllCartList, removeCartList };
