const Banner = ({title, desc, padding, children}) => {
    return (
        <div className={` bg-primary flex justify-center items-center flex-col text-white py-8 ${padding} space-y-4`}>
            <h2 className="text-[2rem] font-bold">{title}</h2>
            <p className="max-w-[49.75rem] text-base mx-auto text-center">{desc}</p>
            {children}
        </div>
    );
};

export default Banner;