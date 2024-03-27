import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto mt-10 ">
      <div
        className="h-[34vw] w-full bg-cover bg-no-repeat rounded-lg relative bg-blend-darken "
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className="absolute md:mt-60 px-20 ">
          <h1 className="text-[60px] text-white font-bold  mb-6 tracking-wide">
            Order Your Favorite Food Here
          </h1>
          <p className="text-xl text-white  leading-6 ">
            Choose from a diverse menu featuring delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings elevate your dining experience,
            one delicious meal at a time.{" "}
          </p>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-8 py-3 text-center me-2 mb-2 mt-6 text-md "
          >
            View Here
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
