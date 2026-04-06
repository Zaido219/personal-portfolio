const BaseSection = ({children}) => {
    return(
        <div className="max-w-lg  p-2 m-2 shadow-sm flex flex-col items-center bg-indigo-300">
            {children}
        </div>
        );
}

export default BaseSection;