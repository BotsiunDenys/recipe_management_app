import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/ProductModel";

interface favoriteProductsState {
  favorites: Product[];
}

const initialFavoriteProducts: favoriteProductsState = {
  favorites: [],
};

const favoriteProductsSlice = createSlice({
  name: "favoriteProducts",
  initialState: initialFavoriteProducts,
  reducers: {
    addFavorite: (state, action: PayloadAction<Product>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (product) => product.idMeal !== action.payload
      );
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export default favoriteProductsSlice.reducer;
export const { addFavorite, removeFavorite, clearFavorites } =
  favoriteProductsSlice.actions;
