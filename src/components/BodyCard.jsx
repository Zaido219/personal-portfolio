const BodyCard = (props) => {
    return (
        <div className="relative max-w-sm md:max-w-7xl mx-auto md:my-10 p-4 shadow-lg flex justify-center rounded-sm overflow-x-hidden"> 
        <div className="absolute inset-0 bg-grid-pattern -z-10 pointer-events-none"></div>
            <div className="p-1">
                {props.children}
            </div>
        </div>
    );
}

export default BodyCard;