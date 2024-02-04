import bgimg from "../../assets/bgimg.png";
import "../../App.css";
import Button from "../Button/Button";

const HomeSection = () => {
  return (
    <div className="relative flex flex-col font-medium p-2 m-3 max-sm:p-0 max-sm:m-0">
      <div className="relative">
        <img
          loading="lazy"
          srcSet={bgimg}
          className="object-cover rounded-[40px] ml-auto p-5 inset-0 h-[650px] max-sm:h-[450px] max-sm:p-0"
        />
        <div className="gradient-overlay" />
      </div>
      <div className="absolute flex flex-col p-6 mt-6 items-start text-xl font-medium max-md:px-5 max-sm:text-sm max-sm:mt-4">
        <div className="mt-10 font-semibold text-[#F3BC4C] tracking-[2px] max-md:mt-10 max-md:max-w-full max-sm:mt-8">
          TECH SERVICES
        </div>
        <div className="mt-8 text-6xl leading-[80px] text-neutral-700 max-md:max-w-full max-md:text-4xl max-md:leading-[55px] max-sm:text-white">
          TechSynergy:
          <br /> Innovate,
          <br />
          Create, Elevate
        </div>
        <div className="mt-9 text-neutral-600 max-md:max-w-full max-sm:text-white">
          Unlocking Possibilities, One Code at a Time
        </div>
        <div>
          <Button
            onClick={() => console.log("See Projects clicked")}
            label="See projects"
            bgColor="#67b367"
            hoverColor="#5a9c5a"
            additionalClasses="mt-12 max-md:px-5 max-md:mt-10 max-sm:px-8 max-sm:mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
