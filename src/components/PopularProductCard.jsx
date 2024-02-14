import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {rating}
        </p>
      </div>

      <p className="mt-2 text-xl font-palanquin font-medium leading-normal">
        {name}
      </p>
      <p className=" mt-2 font-montserrat text-coral-red text-lg leading-normal font-semibold">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
