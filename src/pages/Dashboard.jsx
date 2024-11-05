import Banner from "../components/Banner";

const Dashboard = () => {
    return (
        <div>
            <Banner title={"Dashboard"} desc={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}>
                <div className="flex gap-4 !mt-12">
                    <button className="py-3 px-5 w-48 bg-white rounded-full text-primary  font-bold ">Cart</button>
                    <button className="py-3 px-5 w-48 bg-white rounded-full text-primary  font-bold ">Wishlist</button>
                </div>
            </Banner>
        </div>
    );
};

export default Dashboard;