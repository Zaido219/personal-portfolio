const BaseSection = ({children}) => {
    return(
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl w-85 md:w-fit md:h-fit  md:min-w-sm p-2 m-2 shadow-sm flex flex-col items-center overflow-hidden">
            {children}
        </div>
        );
}

export default BaseSection;