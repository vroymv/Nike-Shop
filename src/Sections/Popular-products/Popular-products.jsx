import { products } from "../../constants";
import ProductCard from "./productCard";
export default function PopularProducts(props) {
  return (
    <div className="mt-10 md:mt-10">
      <h2 className="text-3xl sm:text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
      <div className="mt-5 mb-14 text-slate-gray font-montserrat text-lg leading-8">
        Discover stylish Nike arrivals, quality confort, and innovation for your
        active life
      </div>
      <div className="grid grid-auto-flow:row sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
        {
            products.map((product)=>{
                return(
                    <ProductCard key={product.name} name={product.name} imgUrl={product.imgURL} price={product.price}/>
                )
            })
        }
      </div>
    </div>
  );
}
