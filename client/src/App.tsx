import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import Auth from "./pages/Auth";
import ProductResipe from "./pages/ProductRecipe";
import Favourite from "./pages/Favorite";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/app" element={<Solution />} />
          <Route path="/authorization" element={<Auth />} />
          <Route path="/saved" element={<Favourite />} />
          <Route path="/recipe/:name" element={<ProductResipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
