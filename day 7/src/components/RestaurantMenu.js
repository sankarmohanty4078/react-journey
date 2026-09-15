import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [itemsInfo, setitemsInfo] = useState(null);
  const [resInfo, setresInfo] = useState(null);
  //if i dont give this dependency array over here and keep it empty
  //useEffect will be called everytime the component renders
  useEffect(() => {
    fetchMenu();
  }, []);

  // Target:
  // 1. Find the restaurant's grouped menu (filter)
  // 2. Find the menu categories (filter)
  // 3. Extract all itemCards (flatMap)
  // 4. Extract name and price(map)
  const resId = useParams().resId;
  const fetchMenu = async () => {
    const raw_data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/" + resId,
    );
    const data = await raw_data.json();
    console.log(data);
    const resData = data?.data?.cards.filter((infos) => {
      return infos?.card?.card?.info;
    });
    // console.log(resData);
    setresInfo(resData[0].card.card.info);
    const restaurantMenus = data?.data?.cards.filter((resobj) => {
      return resobj?.groupedCard?.cardGroupMap?.REGULAR.cards;
    });
    console.log(restaurantMenus);
    const restaurantMenu =
      restaurantMenus[0]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (cardArray) => cardArray?.card?.card?.itemCards,
      );
    console.log("hi", restaurantMenu);
    const allMenuItems = restaurantMenu.flatMap(
      (item) => item?.card?.card?.itemCards,
    );
    console.log(allMenuItems);
    const menuItems = allMenuItems.map((category) => {
      return category?.card?.info;
    });
    console.log(menuItems[0].name);
    setitemsInfo(menuItems);
  };

  if (resInfo === null) {
    return <Shimmer />;
  } else {
    return (
      <div className="menu">
        <h2>
          {resInfo.name} &nbsp; {resInfo.avgRating}
        </h2>
        <p>
          {resInfo.cuisines.join(",")} &nbsp; <b>{resInfo.costForTwo}</b>
        </p>
        <ul style={{ display: "block" }}>
          {itemsInfo.map((item) => (
            <li key={item.id}>
              {item.name} - Rs. {item.price / 100}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default RestaurantMenu;
