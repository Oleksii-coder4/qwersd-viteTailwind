import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="topic-title text-center mb-4">
        What Our <span className="text-coral-red"> Customers </span> Say?
      </h3>
      <p className="description  m-auto max-w-lg text-center mb-24">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgUrl={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;