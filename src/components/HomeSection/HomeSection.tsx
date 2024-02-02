import bgimg from "../../assets/bgimg.png";
import "../../App.css";

const HomeSection = () => {
  return (
    <div className="relative flex flex-col font-medium p-2 m-3 ">
      <div className="min-h-[650px] relative">
        <img
          loading="lazy"
          srcSet={bgimg}
          className="flex object-cover rounded-[40px] px-4 ml-auto inset-0 h-[650px]"
        />
        <div className="gradient-overlay" />
      </div>
      <div className="absolute flex flex-col p-6 mt-6 items-start text-xl font-medium max-md:px-5">
        <div className="mt-20 font-semibold text-[#F3BC4C] tracking-[2px] max-md:mt-10 max-md:max-w-full">
          TECH SERVICES{" "}
        </div>
        <div className="mt-2 text-6xl leading-[75px] text-neutral-700 w-[470px] max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
          TechSynergy: Innovate,<br/>Create, Elevate
        </div>
        <div className="mt-9 text-neutral-600 max-md:max-w-full ">
          Unlocking Possibilities, One Code at a Time
        </div>
        <div className="justify-center px-11 py-3 mt-12 text-base text-white whitespace-nowrap bg-[#66B066] rounded-[50px] max-md:px-5 max-md:mt-10">
          See projects
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
