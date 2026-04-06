const BodyCard = (props) => {
    return (
        /* Card Wrapper: Defines the size and style of the card */
        <div className="max-w-6xl mx-auto my-10 p-5 rounded-2xl shadow-lg bg-red-300 flex justify-center"> 
            <div className="p-2">
                {props.children}
            </div>
        </div>
    );
}

export default BodyCard;