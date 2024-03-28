import { useState } from "react";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
import Hero from "../components/Hero/Hero";
import FoodDisplay from "../components/FoodDisplay/FoodDisplay";
import AppDownload from "../components/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="max-w-6xl mx-auto">
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <div className=" border-t-2 border-slate-200 pt-12"></div>
      <AppDownload />
    </div>
  );
};

export default Home;
