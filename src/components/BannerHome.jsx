import bannerImg from "../assets/banner.jpg";

const BannerHome = () => {
  return (
    <div className="wrapper bg-primary relative flex py-12 pb-52 flex-col items-center justify-center gap-8 rounded-lg rounded-t-none text-center text-white">
      <div className="space-y-6">
        <h1 className="heading">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="desc mx-auto max-w-[49.75rem]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div>
        <button className="btn-secondary">Shop Now</button>
      </div>
      {/* Banner Image */}
      <div className="absolute top-[75%] w-8/12 h-[32rem] rounded-xl border-2 border-white bg-white/30 p-4 backdrop-blur-lg">
        <img className="w-full h-full object-cover object-center rounded-lg" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default BannerHome;
