import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="">
      <div >
        <h1 className="text-center text-xl font-semibold">
          For Better Experience Download
        </h1>
        <h1 className="uppercase text-[#FF4C24] font-bold text-2xl text-center mt-2">
          Tomato App
        </h1>
        <div className="flex items-center gap-8 mt-8 justify-center ">
          <img
            className="h-16 cursor-pointer shadow-sm hover:shadow-xl "
            src={assets.play_store}
            alt="mobile app"
          />
          <img
            className="h-16 cursor-pointer shadow-sm hover:shadow-xl "
            src={assets.app_store}
            alt="mobile app"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
