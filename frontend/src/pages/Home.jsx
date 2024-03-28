import { useState } from "react";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
import Hero from "../components/Hero/Hero";
import FoodDisplay from "../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="max-w-6xl mx-auto">
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
