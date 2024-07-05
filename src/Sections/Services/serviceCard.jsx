
export default function ServiceCard(props) {
    

    return (
        <div className="shadow-3xl px-10 py-7 rounded-2xl">
            <div className="w-11 h-11 my-3 mx-auto flex justify-center items-center rounded-full bg-coral-red">
                <img src={props.imgUrl} alt={props.label}/>
            </div>
            <h2 className="font-bold my-3 text-xl" >{props.label}</h2>
            <p className="text-slate-gray font-montserrat text-lg leading-normal">
                {props.subtext}
            </p>
        </div>
    )
}
