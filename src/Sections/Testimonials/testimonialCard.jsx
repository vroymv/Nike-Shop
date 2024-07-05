import { star } from "../../assets/icons";

export default function TestimonialCard(props) {
  return (
    <div className="lg:w-4/12">
      <div className="w-28 h-28 mx-auto">
        <img
          className="w-full rounded-full object-cover"
          src={props.imgUrl}
          alt="customer image"
        />
      </div>
      <div className="text-center">
        <div className="font-montserrat  text-slate-gray mt-4">{props.feedback}</div>
        <div className="flex text-slate-gray  text-lg justify-center gap-4">
          <img src={star} alt="star-icon" />
          {props.rating}
        </div>
        <h1 className="font-bold mt-3 text-lg">{props.customerName}</h1>
      </div>
      <hr className="block mt-4 sm:hidden"></hr>
    </div>
  );
}
