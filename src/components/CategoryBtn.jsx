import { NavLink } from "react-router-dom";

const CategoryBtn = ({ category }) => {
  return (
    <NavLink
      to={`/category/${category.category_name}`}
      className={({ isActive }) =>
        `${isActive ? "category-btn-active" : "category-btn"}`
      }
    >
      {category.category_name}
    </NavLink>
  );
};

export default CategoryBtn;
