import Button from "../../Shared/Button";
import { shoe8 } from "../../assets/images";
export default function QualityShoes(props) {
  return (
    <div className="flex flex-col md:flex-row mt-10 mb-5 justify-between">
      <div className="md:w-1/2 pt-8 lg:pt-12">
        <h2 className="text-3xl sm:text-4xl font-palanquin font-bold">
          We Provide You{" "}
          <span className="text-coral-red">Super Quality Shoes</span> Products
        </h2>
        <div className="md:mb-14 text-slate-gray font-montserrat text-lg leading-8">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </div>
        <div className="mt-5 md:mb-14 text-slate-gray font-montserrat text-lg leading-8">
          Our dedication to detail and excellence ensures your satisfaction
        </div>
        <div className="hidden md:block">
        <Button content="View Details" />
        </div>
      </div>
      <div className="mx-auto md:mt-4">
        <img src={shoe8} alt="Quality Shoe" />
        <div className='block w-fit mx-auto md:hidden mt-4'>
        <Button  content="View Details" />
        </div>
      </div>
    </div>
  );
}
