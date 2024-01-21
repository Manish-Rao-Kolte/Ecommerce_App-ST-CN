import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./pages/app/product/Products";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import AddProduct from "./pages/app/addProduct/AddProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Products /> },
        { path: "add", element: <AddProduct /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
