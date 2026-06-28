const BaseSection = ({children}) => {
    return(
        <div className="min-w-sm p-2 m-2 shadow-sm flex flex-col items-center overflow-hidden">
            {children}
        </div>
        );
}

export default BaseSection;