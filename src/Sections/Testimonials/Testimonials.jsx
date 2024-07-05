import { reviews } from "../../constants";
import TestimonialCard from "./testimonialCard";

export default function Testimonials(props) {
  return (
    <div className="p-14 bg-pale-blue">
      <h2 className="text-3xl sm:text-4xl font-palanquin font-bold">
        What Our
        <span className="text-coral-red"> Customers</span> Offer
      </h2>
      <div className=" mt-4 lg:mt-6 text-slate-gray font-montserrat text-lg leading-8">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </div>
      <div className="flex flex-col gap-4 sm:flex-row mt-8 justify-evenly">
        {reviews.map((review) => {
          return (
            <TestimonialCard
              imgUrl={review.imgURL}
              feedback={review.feedback}
              rating={review.rating}
              customerName={review.customerName}
            />
          );
        })}
        
      </div>
    </div>
  );
}
