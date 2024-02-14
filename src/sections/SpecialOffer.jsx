import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className=" max-container flex justify-center items-center max-xl:flex-col-reverse gap-10 ">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        ></img>
      </div>

      <div className="flex flex-col flex-1">
        <h2 className="topic-title max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="description mt-4 lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selection to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="description mt-4 lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label="Shop now"
            iconUrl={arrowRight}
            href="https://www.nike.com/w/sale-3yaep"
          />
          <Button
            label="Learn more"
            href="https://www.nike.com/help/a/nike-corporate-details"
            buttonStyles="bg-white border-slate-gray text-slate-gray rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
