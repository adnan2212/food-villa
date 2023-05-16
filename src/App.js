import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Profile from "./components/Profile";
import Shimmer from "./components/shimmer";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import FoodItem from "./components/FoodItem";
// import Instamart from "./components/Instamart";

import "react-toastify/dist/ReactToastify.css";

//lazy loading
const Instamart = lazy(() => import("./components/Instamart")); //Dynamic Import

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />,
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
