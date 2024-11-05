const SingleBranch = ({branch}) => {

    const {branch_name, location, hotline_number} = branch
    return (
        <div className="p-8 bg-off-white rounded-2xl h-full space-y-4">
            <h2 className="text-deep-black text-2xl font-bold">{branch_name}</h2>
            <p className="text-gray text-lg">{location}</p>
            <p className="text-deep-gray text-xl font-semibold">Contact: {hotline_number}</p>
        </div>
    );
};

export default SingleBranch;