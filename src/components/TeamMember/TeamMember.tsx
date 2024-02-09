import vector1 from "../../assets/Vector_1.svg";
import vector2 from "../../assets/Vector_2.svg";
import Button from "../Button/Button";
import TeamMemberImg from "./TeamMemberImg";
import img1 from "../../assets/Frame 3254.png";
import img2 from "../../assets/Frame 3254-1.png";
import img3 from "../../assets/Organization.png";
import img4 from "../../assets/Frame_3254-2.png";
import img5 from "../../assets/Frame 3254-3.png";

const teamMembers = [
  { imgSrc: img1, text: "Software", role: "Software Developers", zIndex: 3 },
  { imgSrc: img2, text: "QA", role: "QA Engineers", zIndex: 3 },
  { imgSrc: img3, text: "UI/UX", role: "UX Designer", zIndex: 3 },
  { imgSrc: img4, text: "Data Scientists", role: "Data Scientists", zIndex: 3 },
  { imgSrc: img5, text: "Project Managers", role: "Project Managers", zIndex: 3 },
];

const TeamMember = () => {
  return (
    <>
      <div className="relative h-full mb-6">
        <div className="absolute left-[26%] -translate-x-1/2 translate-y-1/2 max-sm:hidden">
          <img loading="lazy" src={vector2} alt="logo" className="w-[100px]" />
        </div>
        <div className="absolute top-[20%] right-[21%] transform -translate-x-1/2 translate-y-[25%] max-sm:hidden">
          <img loading="lazy" src={vector1} alt="logo" className="w-[100px]" />
        </div>
        <div className="absolute flex justify-center w-full">
          {teamMembers.map((member, index) => (
            <TeamMemberImg key={index} {...member} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mt-16 p-16">
        <div className="mt-12 text-4xl text-center leading-[62px] text-neutral-700 max-md:mt-10 max-md:max-w-full max-sm:text-2xl">
          Let's Form Your Crew.
        </div>
        <div>
          <Button
            onClick={() => console.log("Button clicked")}
            label="Schedule a Call"
            bgColor="#3171DE"
            hoverColor="#376cc7"
            additionalClasses="mt-6 mb-6 max-md:px-5 max-md:mt-10 max-sm:px-8 max-sm:mt-8 max-sm:p-2 max-sm:text-sm"
          />
        </div>
      </div>
    </>
  );
};

export default TeamMember;
