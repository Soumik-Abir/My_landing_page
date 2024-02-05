import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useOrganizationViewModel from "../../Models/Organization/OrganizationViewModel";
import vector2 from "../../assets/Vector_2.svg";
import Button from "../Button/Button";
import OrganizationCard from "./OrganizationCard";

const Organization = () => {
  const { organizations } = useOrganizationViewModel();

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    variableWidth: false,
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center m-10 bg-slate-100 rounded-[20px] h-full">
      <div className="m-8 self-start max-sm:w-[50px]">
        <img loading="lazy" src={vector2} alt="Logo" />
      </div>
      <div className="flex flex-col">
        <div className="text-4xl leading-[70px] text-center font-medium text-neutral-700 max-md:max-w-full max-sm:text-3xl max-sm:font-semibold">
          Trusted by Leading Organizations
        </div>
        <div className="self-center mt-2 text-md leading-8 text-center text-neutral-600 max-md:max-w-full max-sm:text-sm max-sm:mt-4">
          Our 4,000+ team has expertise in almost every programming language.
        </div>
      </div>
      <div className="mt-10 w-full">
        {isSmallScreen ? (
          <div className="flex flex-wrap justify-center gap-4">
            {organizations.map((organization) => (
              <div
                key={organization.id}
                className="flex justify-center items-center mb-4"
                style={{ maxWidth: "150px" }} // Adjust the max width as needed
              >
                <OrganizationCard organization={organization} />
              </div>
            ))}
          </div>
        ) : (
          <Slider {...sliderSettings}>
            {organizations.map((organization) => (
              <div key={organization.id} className="px-4">
                <OrganizationCard organization={organization} />
              </div>
            ))}
          </Slider>
        )}
      </div>
      <div>
        <Button
          onClick={() => console.log("See Projects clicked")}
          label="Our full repertoire"
          bgColor="#3171DE"
          hoverColor="#376cc7"
          additionalClasses="mt-8 mb-6 max-md:px-5 max-md:mt-10 max-sm:px-8 max-sm:mt-8 max-sm:p-2 max-sm:text-sm "
        />
      </div>
    </div>
  );
};

export default Organization;
