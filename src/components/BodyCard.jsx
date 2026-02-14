const BodyCard = (props) => {
    return (
        /* Card Wrapper: Defines the size and style of the card */
        <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-2xl shadow-lg"> 
            <div className="">
                {props.children}
            </div>
        </div>
    );
}

export default BodyCard;