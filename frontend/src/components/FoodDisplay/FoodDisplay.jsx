import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mb-12">
      <h1 className="text-2xl   font-semibold mt-6 mb-12 ">
        Top Dishes are near you.
      </h1>
      <div className="grid   md:grid-cols-4 gap-8 ">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <div key={item._id}>
                <FoodItem
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
