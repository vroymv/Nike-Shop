import { services } from "../../constants";
import ServiceCard from "./serviceCard"

export default function Services(props) {
    

    return (
        <div className=" my-20 grid grid-flow-row sm:grid-cols-3 gap-2">
            {
                services.map((service)=>{
                    console.log(service);
                    return(
                        <ServiceCard imgUrl={service.imgURL} label={service.label} subtext={service.subtext} />
                    )
                })
            }
        </div>
    )
}
