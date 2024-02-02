import logo from "../../assets/Logo.svg";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <>
      <div className="p-2 m-3">
        <div className="flex gap-4 justify-between items-start max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet={logo}
            className="aspect-[0.98 ] pl-6"
            alt="Logo"
          />
          <div className="flex flex-col justify-center self-stretch px-16 text-base font-medium bg-slate-100 rounded-[50px] text-neutral-700 ">
            <div className="flex gap-20 max-md:flex-wrap max-md:mr-2 max-md:max-w-full">
              <div>Home</div>
              <div>About us</div>
              <div>Services</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div className="flex gap-3.5 whitespace-nowrap">
              <Dropdown />
            <button className="grow justify-center px-6 py-3 mr-4 text-base font-medium text-white bg-[#3171de] hover:cursor-pointer hover:bg-[#3971d1] rounded-[50px] max-md:px-5">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
