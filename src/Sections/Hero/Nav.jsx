import { Link } from "react-router-dom";
import { headerLogo } from "../../assets/images/index";
import { navLinks } from "../../constants/index";
import { hamburger } from "../../assets/icons";
export default function Nav(props) {
  return (
    <header className="py-8">
      <nav className="flex justify-between">
        <div className="w-[129px] h-[29px]">
          <Link to={"/"}>
            <img src={headerLogo} className="w-full" alt="Nike Logo" />
          </Link>
        </div>
        <div className="md:flex hidden md:gap-4 lg:gap-16 justify-center">
            {navLinks.map((link) => {
              return (
                <Link
                  className="text-sm text-center  sm:text-lg text-slate-gray font-montserrat leading-normal"
                  key={link.label}
                  to=""
                >
                  {link.label}
                </Link>
              );
            })}
        </div>
        <div className="md:flex hidden">
          <Link
            className="text-xs sm:text-lg lg:gap-2 font-medium lg:mr-24 leading-normal"
            to=""
          >
            Sign in/ Explore now
          </Link>
        </div>
        <button className="w-[24px] h-[24px] md:hidden flex cursor-pointer">
          <img src={hamburger} alt="more-icon" />
        </button>
      </nav>
    </header>
  );
}
