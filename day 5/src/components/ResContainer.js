import { useState } from "react";
import { IMG_URL, resList } from "../utils/Constants.js";
const ResCard = (props) => {
  const { resData } = props;
  //more destructuring to make the following code beautiful
  const { pinterestId, name, cuisines, avgRating, deliveryTime, costForTwo } =
    resData?.data;
  return (
    <div className="res-card">
      <img src={IMG_URL + pinterestId + ".jpg"} alt="" />
      <div className="card-desc">
        <div className="name">{name}</div>
        <p>{cuisines.join(", ")}</p>
      </div>
      <hr />
      <div className="one-block">
        <div className="rating">{avgRating}</div>-
        <div className="del-time">{deliveryTime}</div>-
        <div className="price">{costForTwo / 100 + " for Two"}</div>
      </div>
      <hr />
      <button>Order Now</button>
    </div>
  );
};

export const ResContainer = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
  return (
    <div className="res-container">
      <button
        className="filter"
        onClick={() => {
          const filteredList = resList.filter(
            (res) => res.data.avgRating > 4.0,
          );
          setlistOfRestaurants(filteredList);
        }}
      >
        Filter
      </button>
      {listOfRestaurants.map((restaurant, id) => (
        <ResCard key={id} resData={restaurant} />
      ))}
    </div>
  );
};
