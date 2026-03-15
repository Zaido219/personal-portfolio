const BodyCard = (props) => {
    return (
        /* Card Wrapper: Defines the size and style of the card */
        <div className="max-w-6xl mx-auto my-10 p-8 bg-purple-800 rounded-2xl shadow-lg"> 
            <div className="p-2">
                {props.children}
            </div>
        </div>
    );
}

export default BodyCard;