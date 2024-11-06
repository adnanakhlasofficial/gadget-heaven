import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import SingleBranch from "../components/SingleBranch";
import { Helmet } from "react-helmet";

const Branch = () => {
  const { store_branches } = useLoaderData();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Branch - Gadget Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner title={"Branch"} />
      <div className="wrapper my-12 grid grid-cols-2 gap-6">
        {store_branches.map((branch) => (
          <SingleBranch key={branch.branch_id} branch={branch} />
        ))}
      </div>
    </div>
  );
};

export default Branch;
