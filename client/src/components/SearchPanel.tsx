import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch } from "../store/store";
import {
  getRandomRecipe,
  getRecipeByFirstLetter,
  getRecipeByName,
} from "../store/slices/productSlice";
import "react-toastify/dist/ReactToastify.css";

const SearchPanel = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchByName, setSearchByName] = useState(true);
  const dispatch = useAppDispatch();
  const handleToast = (msg: string) => {
    toast(msg);
  };

  const handleSearch = () => {
    if (searchValue) {
      searchByName
        ? dispatch(getRecipeByName(searchValue))
        : dispatch(getRecipeByFirstLetter(searchValue[0]));
    } else {
      handleToast("Enter search value");
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <header className="text-3xl">Recipe management app</header>
        <section className="flex flex-col gap-5 justify-center items-center">
          <select
            className="text-black outline-none text-2xl p-1 rounded-md mt-5"
            name="searchOption"
            onChange={() => setSearchByName((prev) => !prev)}
          >
            <option value="name">by name</option>
            <option value="letter">by first letter</option>
          </select>
          <input
            className="text-2xl text-black p-1 outline-none"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={`Search by ${searchByName ? "name" : "first letter"}`}
          />
          <button
            onClick={() => dispatch(getRandomRecipe())}
            className="bg-transparent p-2 border-2 rounded-md border-orange-400 hover:bg-orange-400 transition-colors w-50 text-xl text-center"
          >
            Search random
          </button>
          <button
            onClick={handleSearch}
            className="bg-transparent p-2 border-2 rounded-md border-orange-400 hover:bg-orange-400 transition-colors w-50 text-xl text-center"
          >
            Search product
          </button>
        </section>
      </div>
      <ToastContainer theme="dark" />
    </>
  );
};

export default SearchPanel;
