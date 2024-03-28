import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="mt-16  border-b-2 pb-16 ">
      <div>
        <h1 className="text-2xl font-bold  text-slate-800 ">
          Explore Our Menu
        </h1>
        <p className="text-md font-[400] mt-4 mb-8 ">
          Choose from a diverse menu featuring delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings elevate your dining experience,
          one delicious meal at a time.
        </p>
      </div>

      <div className="flex items-center gap-8 ">
        {menu_list.map((menuItem, index) => (
          <div
            className={`${
              category === menuItem.menu_name
                ? "border-b-2 border-[#FF4C24] bg-[#F1EB90]"
                : " border-b-2 border-transparent"
            }  cursor-pointer transition ease-in-out duration-200 px-3 pt-4 rounded-xl shadow-xl `}
            onClick={() =>
              setCategory((prev) =>
                prev === menuItem.menu_name ? "All" : menuItem.menu_name
              )
            }
            key={index}
          >
            <img
              className={`${
                category === menuItem.menu_name
                  ? "border-4 rounded-full border-[#FF4C24]"
                  : "border-4 border-transparent rounded-full "
              } transition ease-in-out duration-200`}
              src={menuItem.menu_image}
              alt={menuItem.menu_name}
            />
            <h1 className="text-center mt-4 text-md text-slate-600  mb-2 ">
              {menuItem.menu_name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
