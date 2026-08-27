import React from "../node_modules/react";
import ReactDOM from "../node_modules/react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
// import logo from "url:./img/logo.jpg";
// import food1 from "url:./img/food1.jpg";
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
root.render(<AppLayout />);
