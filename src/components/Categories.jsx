import CategoryBtn from "./CategoryBtn";

const Categories = ({ categories }) => {
  return <div className="flex flex-col gap-4 bg-off-white w-max p-6 rounded-xl h-max">
    {
        categories.map((category, idx ) => <CategoryBtn key={idx} category={category}/>)
    }
  </div>;
};

export default Categories;
