import { assets } from "../assets/assets";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="w-full bg-[#111827] mt-16 ">
      <div className="max-w-6xl mx-auto py-2">
        <div className="flex flex-row gap-16 border-b pb-12 pt-12">
          <div className="basis-2/4">
            <img src={assets.logo} alt="Tomato" />
            <p className="mt-6 text-white ">
              Choose from a diverse menu featuring delectable array of dishes
              crafted with the finest ingredients and culinary expertise. Our
              mission is to satisfy your cravings elevate your dining
              experience, one delicious meal at a time.
            </p>
          </div>
          <div className="basis-1/4">
            <h1 className="uppercase text-3xl font-bold text-white ">
              Company
            </h1>
            <ul className="mt-6 text-white flex  flex-col gap-2">
              <li>
                <span>Delivery</span>
              </li>
              <li>
                <span>Privacy Policy </span>
              </li>
            </ul>
          </div>
          <div className="basis-1/4">
            <h1 className="uppercase text-3xl font-bold text-white ">
              Get In Touch
            </h1>
            <ul className="mt-6 text-white flex  flex-col gap-2">
              <li>
                <span>+158-543-80076</span>
              </li>
              <li>
                <span>tomato@tomato.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center mt-12 gap-2 ">
          <span className="text-white text-sm  ">
            Made with love by{" "}
            <span className="font-titleFont text-teal-500">@</span>
            <a
              className="font-titleFont text-teal-500 hover:underline"
              href="https://faisal23.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAISAL
            </a>{" "}
          </span>
          <span className="text-white text-xs ">
            Copyright© {currentYear} Tomato - All rights reserved.{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
