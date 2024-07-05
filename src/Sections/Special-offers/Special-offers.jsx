import { offer } from "../../assets/images/index";
import Button from "../../Shared/Button";
import { arrowRight } from "../../assets/icons/index";

export default function SpecialOffers(props) {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between mb-20 lg:my-20">
      <div className="sm:flex-1 mt-4">
        <img src={offer} alt="Special-offers-photo" />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl sm:text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <div className=" mt-4 lg:mt-6 text-slate-gray font-montserrat text-lg leading-8">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </div>
        <div className=" mt-4 lg:mt-6 text-slate-gray font-montserrat text-lg leading-8">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </div>
        <div className="flex  gap-4 mt-4">
          <Button content="Shop now" icon={arrowRight} />
          <Button content="Learn more" trans="true" />
        </div>
      </div>
    </div>
  );
}
