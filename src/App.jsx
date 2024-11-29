import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./components/Product/Product.jsx";

function App() {
  return (
    <>
    <Product/>
    <ToastContainer/>
    </>
  );
}

export default App;
