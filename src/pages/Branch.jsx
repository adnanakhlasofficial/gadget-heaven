import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import SingleBranch from "../components/SingleBranch";

const Branch = () => {
    const {store_branches} = useLoaderData();
    console.log(store_branches);
    return (
        <div>
            <Banner title={"Branch"} />
            <div className="wrapper gap-6 my-12 grid grid-cols-2">
                {
                    store_branches.map(branch => <SingleBranch key={branch.branch_id} branch={branch} />)
                }
            </div>         
        </div>
    );
};

export default Branch;