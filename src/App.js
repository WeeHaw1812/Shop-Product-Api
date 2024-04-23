import "./App.css";
import Product from "./components/product/Product";
import Products from "./components/products/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/products/id/:id" element={<Product />}></Route>
      <Route path="/products/category/:id" element={<Products />}></Route>
    </Routes>
  );
}

export default App;
