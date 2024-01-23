import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import AddProduct from "./pages/app/addProduct/AddProduct";
import { Suspense, lazy } from "react";
import Loader from "./Components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page404 from "./pages/misc/Page404";

//using lazy loading.
const Products = lazy(() => import("./pages/app/product/Products"));
const Cart = lazy(() => import("./pages/app/cart/Cart"));

function App() {
  //creating different routes.
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Products /> },
        { path: "cart", element: <Cart /> },
        { path: "add", element: <AddProduct /> },
      ],
    },
    { path: "*", element: <Page404 /> },
  ]);

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </Suspense>
      <ToastContainer limit={3} autoClose={700} />
    </div>
  );
}

export default App;
