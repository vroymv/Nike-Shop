
export default function Button(props) {
    

    return (
        <>
            <button type="submit" className={`flex font-montserrat md:text-lg ${props.trans?"border-2 border-black text-slate-gray":"bg-coral-red text-white"} px-3 md:px-7 py-2 md:py-4 rounded-full gap-3 items-center justify-center`}>
                { props.content }
                {props.icon && <img src={props.icon} alt="rigt arrow" />}
            </button>
        </>
    )
}
