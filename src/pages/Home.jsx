import BannerHome from "../components/BannerHome";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet";

const Home = () => {
  const { categories } = useLoaderData();

  return (
    <div className="wrapper !px-0">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Gadget Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <BannerHome></BannerHome>
      <h2 className="mt-[30rem] text-center text-[2.5rem] font-bold text-deep-black">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="mt-12 flex gap-12 rounded-3xl border-2 border-off-white p-8">
        <Categories categories={categories} />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
