import { useAppSelector } from "../store/store";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = useAppSelector((state) => state.products.products);
  const loading = useAppSelector((state) => state.products.loading);
  const error = useAppSelector((state) => state.products.error);
  if (error)
    return (
      <p className="text-2xl text-center font-bold my-5">
        Something went wrong...
      </p>
    );
  return (
    <>
      {loading && (
        <p className="text-2xl text-center font-bold my-5">Searching...</p>
      )}
      <main className="grid grid-cols-3 gap-5 mb-10 mx-52">
        {products.map((product) => (
          <ProductCard key={product.idMeal} product={product} />
        ))}
      </main>
    </>
  );
};

export default ProductList;
