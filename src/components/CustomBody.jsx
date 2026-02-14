const CustomBody = (props) => {
    return(
        <div className="max-w-4xl mx-auto px-4 py-4 bg-indigo-500">
            {props.children}
        </div>
    );
}


export default CustomBody;