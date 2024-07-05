import Button from "../../Shared/Button";
import { arrowRight } from "../../assets/icons/index";
import { statistics } from "../../constants/index";
import Nav from "./Nav";

export default function Hero(props) {
  return (
    <div className="mb-10 md:mb-10">
      <Nav />
      <p className="text-xl w-fit my-5 font-montserrat text-coral-red">
        Our Summer collections
      </p>
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="lg:w-2/5">
          <div className="text-4xl md:lg:pr-10 lg:text-8xl lg:pr-10 font-palanquin font-bold mt-10 ">
            <span className="lg:whitespace-nowrap lg:bg-white lg:z-10 lg:pr-10">
              The New Arrival
            </span>
            <span className="text-coral-red md:inline-block"> Nike</span> Shoes
          </div>

          <div className="mt-5 mb-8 lg:mb-10 text-slate-gray font-montserrat text-lg leading-8">
            Discover stylish Nike arrivals, quality confort, and innovation for
            your active life
          </div>

          <Button content="Shop now" icon={arrowRight} />

          <div className="flex gap-8 sm:gap-16 mt-10">
            {statistics.map((stat) => {
              return (
                <div key={stat.value}>
                  <h1 className="font-semibold text-3xl font-palanquin">
                    {stat.value}
                  </h1>
                  <p className="font-montserrat text-slate-gray">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
