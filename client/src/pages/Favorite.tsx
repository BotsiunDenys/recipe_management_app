import ProductCard from "../components/ProductCard";
import { clearFavorites } from "../store/slices/favoriteSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

const Favorite = () => {
  const products = useAppSelector((state) => state.favorites.favorites);
  const dispatch = useAppDispatch();
  if (!products.length) {
    return (
      <p className="text-3xl text-white my-36 text-center">
        Add products to favorites to see them here.
      </p>
    );
  }
  return (
    <div className="flex flex-col items-center">
      <main className="grid text-white grid-cols-3 gap-5 mb-10 mx-52">
        {products.map((product) => (
          <ProductCard key={product.idMeal} product={product} />
        ))}
      </main>
      <button
        onClick={() => dispatch(clearFavorites())}
        className="bg-transparent p-2 border-2 rounded-md border-red-500 hover:bg-red-500 text-white transition-colors text-xl w-36 text-center"
      >
        Clear all
      </button>
    </div>
  );
};

export default Favorite;
