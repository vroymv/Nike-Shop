import { star } from "../../assets/icons"
export default function ProductCard(props) {
    

    return (
        <>
            <div className="w-fit mx-auto">
                <img src={props.imgUrl} alt={props.name}/>
                <div className="flex gap-2 mt-2"><img src={star} alt="star" /><span className="text-slate-gray">(4.5)</span></div>
                <h2 className="text-lg font-bold">{props.name}</h2>
                <p className="text-coral-red font-semibold">{props.price}</p>
            </div>
        </>
    )
}
