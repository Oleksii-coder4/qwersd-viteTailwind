import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between max-lg:flex-col items-center gap-10 w-full max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="topic-title max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes{" "}
        </h2>
        <p className="description mt-4 max-lg:max-w-[36rem] lg:max-w-lg">
          {" "}
          Ensuring premium comfort and style, our meticulously crafter footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance
        </p>
        <p className="description mt-4 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <Button
            label="View details"
            href="https://www.nike.com/w/best-76m50"
          />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe collection"
          width={570}
          height={510}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
