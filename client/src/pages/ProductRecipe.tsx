import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getRecipeByName } from "../store/slices/productSlice";
import { addFavorite } from "../store/slices/favoriteSlice";

const ProductRecipe = () => {
  const { name } = useParams();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.products.loading);
  const error = useAppSelector((state) => state.products.error);
  const products = useAppSelector((state) => state.products.products);
  const favorites = useAppSelector(
    (state) => state.favorites.favorites
  );
  const productDetails = products.find((item) => item.strMeal == name);
  const fullIngredientsList: Array<string> = [];
  const fullMeasureList: Array<string> = [];
  if (productDetails) {
    Object.entries(productDetails).forEach(([key, value]) => {
      if (key.startsWith("strIngredient")) {
        fullIngredientsList.push(value);
      }
      if (key.startsWith("strMeasure")) {
        fullMeasureList.push(value);
      }
    });
  } else {
    if (name) dispatch(getRecipeByName(name));
  }
  if (error)
    return (
      <p className="text-white text-3xl font-bold text-center my-20">
        Something went wrong...
      </p>
    );
  if (loading)
    return (
      <p className="text-white text-3xl font-bold text-center my-20">
        Loading...
      </p>
    );
  return (
    <main className="flex flex-col justify-center items-center text-white mx-28 my-10">
      <header className="text-3xl">{productDetails?.strMeal}</header>
      <div className="flex gap-10 my-20">
        <img
          className="h-[500px] w-[500px]"
          src={productDetails?.strMealThumb}
          alt={productDetails?.strMeal}
        />
        <div className="flex flex-col gap-5">
          <p>{productDetails?.strInstructions}</p>
          <div className="flex gap-20">
            <ul>
              <strong>Ingredients:</strong>{" "}
              {fullIngredientsList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <ul>
              <strong>Measures:</strong>{" "}
              {fullMeasureList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => {
              const isInFavorites = favorites.find(
                (product) => product.strMeal === name
              );
              if (productDetails && !isInFavorites) dispatch(addFavorite(productDetails));
            }}
            className="bg-transparent p-2 border-2 rounded-md border-orange-400 hover:bg-orange-400 transition-colors w-36 text-xl text-center"
          >
            Add to favourites
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductRecipe;
