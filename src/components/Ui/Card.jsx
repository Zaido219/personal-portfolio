//
const BaseCard = ({children}) => {
    return(
        <div className="p-1 m-1 rounded-sm transition-all bg-blue-300">
            {children}
        </div>
    );
};

export default BaseCard;