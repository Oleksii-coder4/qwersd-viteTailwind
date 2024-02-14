import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { useState } from "react";
const Hero = () => {
  const [currentShoe, setCurrentShoe] = useState(bigShoe1);

  return (
    <section
      id="#home"
      className="w-full flex xl:flex-row flex-col gap-10 min-h-screen max-container"
    >
      <div className="relative max-xl:padding-l xl:w-2/5 flex flex-col justify-center items-start w-full pt-28">
        <p className="max-md:text-base max-md:w-24  text-coral-red text-lg md:pt-16">
          Our Summer Collection
        </p>
        <h1 className="max-md:text-[64px] max-sm:text-[45px] max-md:leading-[82px] max-md:mt-20 text-8xl mt-10 font-palanquin font-bold">
          <p className="xl:bg-white xl:whitespace-nowrap relative z-10 inline-block ">
            The New Arrival{" "}
          </p>
          <br />
          <span className="text-coral-red "> Nike </span> Shoes
        </h1>
        <p className="description mb-16 mt-6 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button
          label="Show now"
          iconUrl={arrowRight}
          href="https://www.nike.com/"
        />
        <div className="flex flex-wrap justify-start items-start w-full mt-20 gap-16">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-palanquin font-bold">
                {" "}
                {item.value}{" "}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {" "}
                {item.label}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 max-xl:max-h-[95vh] bg-primary bg-hero bg-cover bg-center xl:rounded-bl-[4rem] shadow-lg">
        <img
          src={currentShoe}
          alt="shoe collection"
          width={500}
          height={500}
          className=" object-contain relative z-10"
        />
        <div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] max-xl:-bottom-[8%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              {
                <ShoeCard
                  shoe={shoe}
                  currentShoeImg={currentShoe}
                  changeCurrentShoeImg={(shoe) => setCurrentShoe(shoe)}
                />
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
