import { Helmet } from "react-helmet";
import Banner from "../components/Banner";

const Statistics = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Statistics - Gadget Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner
        title={"Statistics"}
        desc={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      />
      <div className="wrapper mt-12">
        <h2 className="text-5xl font-bold text-primary">
          No Statistics For Now
        </h2>
      </div>
    </>
  );
};

export default Statistics;
