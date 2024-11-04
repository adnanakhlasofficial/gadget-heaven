import BannerHome from "../components/BannerHome";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";

const Home = () => {
  const { categories } = useLoaderData();

  return (
    <div className="wrapper !px-0">
      <BannerHome></BannerHome>
      <h2 className="text-deep-black mt-96 text-center text-[2.5rem] font-bold">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-12 mt-12 border-2 border-off-white p-8 rounded-3xl">
        <Categories categories={categories} />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
