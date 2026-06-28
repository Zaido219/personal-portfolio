//
const BaseCard = ({children}) => {
    return(
        <div className="p-1 m-1 rounded-sm transition-all w-full">
            {children}
        </div>
    );
};

export default BaseCard;