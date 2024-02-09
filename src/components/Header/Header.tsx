// Header.tsx
import logo from "../../assets/Logo.svg";
import Button from "../Button/Button";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <>
      <div className="p-2 m-3">
        <div className="flex gap-4 justify-between items-start max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet={logo}
            className="pl-6 max-sm:pl-4"
            alt="Logo"
          />
          <div className="flex flex-col justify-center self-stretch px-16 text-base font-medium bg-slate-100 rounded-[50px] text-neutral-700 max-sm:hidden">
            <div className="flex gap-20 max-md:flex-wrap max-md:mr-2 max-md:max-w-full">
              <div>Home</div>
              <div>About us</div>
              <div>Services</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div className="flex gap-3.5 whitespace-nowrap max-sm:hidden">
              <Dropdown/>
              <div>
                <Button
                  onClick={() => console.log('Button clicked')} // Add your click handler here
                  label="Schedule a Call"
                  bgColor="#3171DE"
                  hoverColor="#376cc7"
                />
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
