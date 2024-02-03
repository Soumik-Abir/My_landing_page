import simcard from "../../assets/simcard.svg";
import monitor from "../../assets/monitor.svg";
import driver from "../../assets/driver.svg";
import "../../App.css";

const Challenge = () => {
  return (
    <>
      <div>
        <div className="flex justify-center text-3xl mt-4 ml-4 font-medium leading-[50px] text-neutral-700 max-md:max-w-full sm:flex">
          <div>
            We have multidisciplinary teams to meet any{" "}
            <span className="text-gradient">challenge.</span>{" "}
          </div>
        </div>
        <div className="flex flex-col justify-center px-16 mt-2 max-md:px-5 max-md:mt-8 max-md:max-w-full">
          <div className="bg-white shadow-xl rounded-[50px]">
            <div className="flex flex-col justify-center px-8 py-8 max-md:mr-1.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center max-md:mt-10">
                    <img
                      loading="lazy"
                      src={monitor}
                      className="aspect-square w-[50px]"
                    />
                    <div className="mt-9 text-3xl font-medium leading-10 text-neutral-700">
                      Front-end
                    </div>
                    <div className="mt-2 text-base leading-6 text-neutral-600">
                      Our frontend developers understand the delicate balance
                      between aesthetics and functionality.{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center max-md:mt-10">
                    <img
                      loading="lazy"
                      src={simcard}
                      className="aspect-square w-[50px]"
                    />
                    <div className="mt-9 text-3xl font-medium leading-10 text-neutral-700">
                      Back-end
                    </div>
                    <div className="mt-2 text-base leading-6 text-neutral-600">
                      Our backend developers are the architects of efficiency
                      and security. They design and build the databases andAPIs.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center max-md:mt-10">
                    <img
                      loading="lazy"
                      src={driver}
                      className="aspect-square w-[50px]"
                    />
                    <div className="mt-9 text-3xl font-medium leading-10 whitespace-nowrap text-neutral-700">
                      Data Analysts
                    </div>
                    <div className="mt-2 text-base leading-6 text-neutral-600">
                      Our data analytics team is a blend of mathematicians,
                      statisticians, and technology enthusiasts.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenge;
