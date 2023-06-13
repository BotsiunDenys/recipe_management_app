import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../models/ProductModel";
import { recipes } from "../../data/initialRecipesList";
import ProductsService from "../services/ProductsService";

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string;
}

const initialProductsState: ProductsState = {
  products: recipes,
  loading: false,
  error: "",
};

export const getRecipeByName = createAsyncThunk(
  "products/getByName",
  async (name: string) => {
    const response = await ProductsService.getByName(name);
    return response.data.meals;
  }
);

export const getRecipeByFirstLetter = createAsyncThunk(
  "products/getByFirstLetter",
  async (letter: string) => {
    const response = await ProductsService.getByFirstLetter(letter);
    return response.data.meals;
  }
);

export const getRandomRecipe = createAsyncThunk(
  "products/getRandomRecipe",
  async () => {
    const response = await ProductsService.getRandom();
    return response.data.meals;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipeByName.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getRecipeByName.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getRecipeByName.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) state.error = action.error.message;
    });
    builder.addCase(getRecipeByFirstLetter.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getRecipeByFirstLetter.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getRecipeByFirstLetter.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) state.error = action.error.message;
    });
    builder.addCase(getRandomRecipe.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getRandomRecipe.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getRandomRecipe.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
