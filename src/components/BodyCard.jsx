const BodyCard = (props) => {
    return (
        /* Card Wrapper: Defines the size and style of the card */
        <div className="w-fit mx-auto my-10 p-4 shadow-lg flex justify-center rounded-sm overflow-x-hidden"> 
            <div className="p-1">
                {props.children}
            </div>
        </div>
    );
}

export default BodyCard;