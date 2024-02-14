import { star } from "../assets/icons";

const ReviewCard = ({ imgUrl, customerName, rating, feedback }) => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <img
        src={imgUrl}
        alt="customer"
        className="rounded-full w-[120px] h-[120px]"
      />
      <p className="description mt-6 max-w-sm text-center">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
        <h3 className="mt-1 font-palanquin max-sm:text-xl max-md:text-2xl text-3xl text-center font-bold">
          {customerName}
        </h3>
      </div>
    </div>
  );
};

export default ReviewCard;
