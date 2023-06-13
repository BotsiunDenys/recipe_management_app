import ProductList from "../components/ProductList";
import SearchPanel from "../components/SearchPanel";

const Solution = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white mt-10">
      <SearchPanel />
      <ProductList />
    </div>
  );
};

export default Solution;
