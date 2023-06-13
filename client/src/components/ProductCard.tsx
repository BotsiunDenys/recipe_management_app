import { Link } from "react-router-dom";
import { Product } from "../models/ProductModel";
import { useAppDispatch, useAppSelector } from "../store/store";
import { removeFavorite } from "../store/slices/favoriteSlice";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const dispatch = useAppDispatch();
  const isInFavorites = favorites.find(
    (item) => item.idMeal === product.idMeal
  );
  return (
    <div className="flex gap-3 mt-5 border-2 border-orange-500 rounded-lg">
      <img
        className="w-40 h-40 py-3 pl-3"
        src={product.strMealThumb}
        alt={product.strMeal}
      />
      <div className="flex flex-col justify-between py-3 pr-3">
        <p className="text-xl">{product.strMeal}</p>
        {isLogged ? (
          <>
            <Link
              className="bg-transparent p-2 border-2 rounded-md border-orange-400 hover:bg-orange-400 transition-colors w-36 text-xl text-center"
              to={`/recipe/${product.strMeal}`}
            >
              View recipe
            </Link>
            {isInFavorites && (
              <button
                onClick={() => {
                  if (product.idMeal) dispatch(removeFavorite(product.idMeal));
                }}
                className="bg-transparent p-2 border-2 rounded-md border-red-500 hover:bg-red-500 transition-colors text-xl w-36 text-center"
              >
                Remove
              </button>
            )}
          </>
        ) : (
          <p className="text-xl font-bold">Log in to view recipe</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
