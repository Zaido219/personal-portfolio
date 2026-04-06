const BodyCard = (props) => {
    return (
        /* Card Wrapper: Defines the size and style of the card */
        <div className="w-fit mx-auto my-10 p-5 shadow-lg flex justify-center rounded-sm"> 
            <div className="p-2">
                {props.children}
            </div>
        </div>
    );
}

export default BodyCard;