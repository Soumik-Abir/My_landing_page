import Button from "../Button/Button";
import intersect from "../../assets/Intersect.svg"

const Transform = () => {
  return (
    <>
      <div className="flex flex-col items-center my-8 mx-10 p-16 bg-gradient-to-t from-blue-300 via-blue-400 to-blue-500 rounded-[20px] h-[580px] max-sm:h-[550px]">
        <div className="flex justify-center text-5xl font-semibold text-center text-white leading-[68px] max-w-[852px] max-md:text-4xl max-md:leading-[63px] max-sm:leading-[50px] max-sm:text-3xl">
          Ready to Transform Your Vision into Reality? Let's Get Started!
        </div>
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => console.log("Button clicked")}
            label="Schedule a Call"
            bgColor="white"
            hoverColor=""
            additionalClasses="color mt-6 mb-6 text-blue-600 max-md:px-5 max-md:mt-10 max-sm:px-8 max-sm:mt-4 max-sm:p-2 max-sm:text-sm"
          />
        </div>
        <div className="flex justify-center max-sm:mt-16 sm:w-[400px]">
        <img loading="lazy" src={intersect} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Transform;
