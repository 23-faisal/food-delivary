import { assets } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const pages = [
  {
    page: "Home",
    href: "/",
  },
  {
    page: "Menu",
    href: "/menu",
  },
  {
    page: "Mobile App",
    href: "/mobile-app",
  },
  {
    page: "Contact Us",
    href: "/contact-us",
  },
];

const Navbar = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const isActive = "text-[#FF4C24] border-b-2 border-[#FF4C24] ";
  const notActive = "text-slate-800  ";

  return (
    <nav className=" ">
      <div className="flex items-center justify-between max-w-6xl mx-auto py-4">
        <div>
          <img src={assets.logo} alt="Logo Image" />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10 text-lg ">
            {pages.map((page) => (
              <li key={page.href}>
                <Link
                  className={`${
                    location.pathname === page.href ? isActive : notActive
                  }  transition ease-in-out duration-200 `}
                  to={page.href}
                >
                  {page.page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center  gap-6">
          <img
            className="h-6 w-6 cursor-pointer "
            src={assets.search_icon}
            alt="Search Bar"
          />

          <img
            onClick={() => navigate("/cart")}
            className="h-6 w-6 cursor-pointer "
            src={assets.basket_icon}
            alt="Cart"
          />

          <button className="px-6 py-2  border-2 border-[#FEC7B4] text-[#F7418F]  rounded-full hover:bg-[#FFF3C7] focus:shadow-md hover:border-white transition ease-in-out duration-200">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
