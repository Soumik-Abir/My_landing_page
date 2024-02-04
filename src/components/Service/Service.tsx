// components/Service.tsx
import vector1 from "../../assets/Vector_1.svg";
import vector2 from "../../assets/Vector_2.svg";
import ServiceViewModel from "../../Models/ServiceModels/ServiceViewModel";
import ServiceSectionModel from "../../Models/ServiceModels/ServiceSectionModel";
import ServiceCardModel from "../../Models/ServiceModels/ServiceCardModel";
import Card from "../Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images
import docsvg from "../../assets/document-code.svg";
import settingsvg from "../../assets/setting-5.svg";
import datasvg from "../../assets/data.svg";
import brushsvg from "../../assets/brush.svg";
import mobilesvg from "../../assets/mobile.svg";
import shapesvg from "../../assets/shapes.svg";
import { useEffect, useState } from "react";

const Service = () => {
  // Create your corrected data
  const data: ServiceSectionModel[] = [
    {
      title: "Section 1",
      cards: [
        {
          imageSrc: docsvg,
          title: "Custom Software Development",
          description:
            "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
        },
      ],
    },
    {
      title: "Section 2",
      cards: [
        {
          imageSrc: settingsvg,
          title: "QA and Testing",
          description:
            "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
        },
      ],
    },
    {
      title: "Section 3",
      cards: [
        {
          imageSrc: datasvg,
          title: "AI and Data Science",
          description:
            "Use leading AI, machine learning, and data engineering technologies to unlock business value.",
        },
      ],
    },
    {
      title: "Section 4",
      cards: [
        {
          imageSrc: brushsvg,
          title: "UX/UI Design",
          description:
            "Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.",
        },
      ],
    },
    {
      title: "Section 5",
      cards: [
        {
          imageSrc: mobilesvg,
          title: "Mobile App Development",
          description:
            "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
        },
      ],
    },
    {
      title: "Section 6",
      cards: [
        {
          imageSrc: shapesvg,
          title: "Platform and Infrastructure",
          description:
            "Ensure applications are secure, fault-tolerant and highly available with our DevOps and Security engineers.",
        },
      ],
    },
  ];

  // Initialize ViewModel
  const viewModel = new ServiceViewModel(data);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const [sliderKey, setSliderKey] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds (adjust as needed)
  };

  useEffect(() => {
    const handleResize = () => {
      const newIsSmallScreen = window.innerWidth < 640;
      if (newIsSmallScreen !== isSmallScreen) {
        setIsSmallScreen(newIsSmallScreen);
        setSliderKey((prevKey) => prevKey + 1); // Change the key to trigger a re-render of the Slider
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  return (
    <>
      <div className="flex justify-center gap-2 mt-14 p-4 text-start text-3xl font-medium leading-[40px] text-neutral-700  max-sm:flex ">
        <div className="w-[60px] max-sm:w-[50px] max-sm:ml-3 max-sm:align-top">
          <img loading="lazy" src={vector1} alt="logo" />
        </div>
        <div className="max-md:max-w-full max-sm:text-xl">
          Empowering Your Digital Vision: Our
          {window.innerWidth >= 640 && <br />}Comprehensive Tech Services.
        </div>
      </div>
      <div className="relative h-[450px]">
        <div className="absolute top-[70%] left-[66%] transform -translate-x-1/2 -translate-y-1/2 max-sm:hidden">
          <img loading="lazy" src={vector2} alt="logo" className="w-[170px]" />
        </div>
        <div className="absolute top-[80%] right-[70%] transform translate-x-1/2 translate-y-1/2 max-sm:hidden">
          <img loading="lazy" src={vector1} alt="logo" className="w-[180px]" />
        </div>
        {/* Conditionally render the slider only on small screens */}
        {isSmallScreen ? (
          <Slider key={sliderKey} {...sliderSettings}>
            {viewModel
              .getSections()
              .map((section: ServiceSectionModel, sectionIndex) => (
                <div key={sectionIndex}>
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <div className="flex flex-col h-full">
                      {section.cards.map(
                        (card: ServiceCardModel, cardIndex) => (
                          <Card
                            key={cardIndex}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            description={card.description}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        ) : (
          // Render non-slider version for larger screens
          <div className="flex flex-wrap px-5 w-full">
            {viewModel
              .getSections()
              .map((section: ServiceSectionModel, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"
                >
                  <div className="flex flex-col h-full">
                    {section.cards.map((card: ServiceCardModel, cardIndex) => (
                      <Card
                        key={cardIndex}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Service;
