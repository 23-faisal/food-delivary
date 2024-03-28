import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className=" mb-12">
      <div className="w-full   hover:scale-105 transition ease-in-out duration-200 hover:shadow-md rounded-lg cursor-pointer shadow-sm shadow-[#FF4C24] hover:shadow-[#FF4C24] ">
        <div className="relative">
          <img
            className="object-fit rounded-t-lg w-full    "
            src={image}
            alt={name}
          />
          <div className="absolute right-4 bottom-4 ">
            {!cartItem[id] ? (
              <>
                <img
                  onClick={() => addToCart(id)}
                  className="bg-white rounded-full h-12"
                  src={assets.add_icon_white}
                  alt=""
                />
              </>
            ) : (
              <div className="flex items-center gap-3 bg-white px-2 py-2 rounded-full transition duration-150 ease-in-out ">
                <img
                  onClick={() => removeFromCart(id)}
                  src={assets.remove_icon_red}
                  alt=""
                />
                <p className=" font-semibold text-md  text-center w-4">
                  {cartItem[id]}
                </p>
                <img
                  onClick={() => addToCart(id)}
                  src={assets.add_icon_green}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
        <div className="px-4 ">
          <div className="mb-4  flex items-center justify-between mt-6">
            <p className=" font-[500] text-md   ">{name}</p>
            <img className="" src={assets.rating_starts} alt={id} />
          </div>
          <div className="pb-8">
            <p className="text-slate-600 text-sm ">{description}</p>

            <p className="font-bold text-2xl text-[#FF4C24] mt-6"> ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
