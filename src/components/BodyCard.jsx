const BodyCard = (props) => {
    return (
        <div className="max-w-sm md:max-w-7xl mx-auto md:my-10 p-4 shadow-lg flex justify-center rounded-sm overflow-x-hidden"> 
            <div className="p-1">
                {props.children}
            </div>
        </div>
    );
}

export default BodyCard;