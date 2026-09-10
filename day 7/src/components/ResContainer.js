import { useState, useEffect } from "react";
import { Thumbnails } from "../utils/Constants.js";
import Shimmer from "./Shimmer.js";

const ResCard = (props) => {
  const { resData } = props;
  //more destructuring to make the following code beautiful
  const { name, cuisines, avgRating, deliveryTime, costForTwo } = resData;
  //As swiggy's cloudinary account is disabled ,using clodinaryImageId is pointless
  return (
    <div className="res-card">
      <img
        src={
          "https://i.pinimg.com/1200x/" +
          Thumbnails[Math.floor(Math.random() * 3)] +
          ".jpg"
        }
        alt=""
      />
      <div className="card-desc">
        <div className="name">{resData.name}</div>
        <p>{cuisines.join(", ")}</p>
      </div>
      <hr />
      <div className="one-block">
        <div className="rating">{resData.avgRating}</div>-
        <div className="del-time">{resData.deliveryTime}</div>-
        <div className="price">{resData.costForTwo}</div>
      </div>
      <hr />
      <button>Order Now</button>
    </div>
  );
};

export const ResContainer = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  const [restaurants, setRestaurants] = useState([]);
  // We keep 2 state variables because
  // listOfRestaurants can be changed by filtering/searching,
  // while restaurants keeps the original response from the fetch.
  const [query, setQuery] = useState("");

  console.log(listOfRestaurants.length);
  console.log(listOfRestaurants.length == 0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiData = await fetch(
        // Using CORSFix so the user doesn't need a CORS extension.
        "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59430&lng=85.13520&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
      );

      const jon = await apiData.json();

      const restaurant = jon.data.cards
        .map((c) => c?.card?.card?.info)
        .filter(Boolean)
        .map((info) => ({
          name: info.name,
          cuisines: info.cuisines,
          avgRating: info.avgRating,
          deliveryTime: info.sla?.deliveryTime,
          costForTwo: info.costForTwo,
        }));

      console.log(restaurant);

      setlistOfRestaurants(restaurant);
      setRestaurants(restaurant);
    } catch (e) {
      console.log(e.message);
    }
  };

  // Conditional rendering
  if (listOfRestaurants.length == 0) return <Shimmer />;

  return (
    <div className="body-container">
      <div className="search-bar">
        <input
          placeholder="Search Restaurant Name"
          type="text"
          id="searchText"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />

        <button
          onClick={() => {
            let interMediate = restaurants.filter((res) =>
              res.name.toLowerCase().includes(query.toLowerCase()),
            );

            console.log(interMediate);
            setlistOfRestaurants(interMediate);
          }}
        >
          Search
        </button>
      </div>

      <button
        className="filter"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.avgRating > 4.0,
          );

          setlistOfRestaurants(filteredList);
        }}
      >
        Filter
      </button>

      <div className="res-container">
        <br />

        {listOfRestaurants.map((restaurant, id) => (
          <ResCard key={id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
