import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error_about from "./components/Error_about";
import Error_home from "./components/Error_home";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import logo from "url:./img/logo.jpg";
// import food1 from "url:./img/food1.jpg";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    //path for home page
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        //Path for About page
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/about/*",
        element: <Error_about />,
      },
      {
        //Path for Contact page
        path: "/contact",
        element: <Contact />,
      },
      {
        //path for restaurants with unique resId
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    //http://localhost:1234/kfjhdh will throw an error which is well handled by the react router
    //now we design our own error page for any gibberish link on that page(e.g for the above link)
    errorElement: <Error_home />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
