import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay/FoodDisplay";

const Menu = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <ExploreMenu />
      <FoodDisplay />
    </section>
  );
};

export default Menu;
