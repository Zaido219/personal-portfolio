//
const BaseCard = ({children}) => {
    return(
        <div className="p-1 m-1 rounded-sm transition-all">
            {children}
        </div>
    );
};

export default BaseCard;