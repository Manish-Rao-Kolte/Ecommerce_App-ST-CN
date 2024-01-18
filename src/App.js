import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./pages/app/product/Products";
import { useLayoutEffect } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Products /> },
        { path: "add", element: null },
      ],
    },
  ]);
  const path = process.env.REACT_APP_DB_URL;
  console.log(path);
  useLayoutEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
