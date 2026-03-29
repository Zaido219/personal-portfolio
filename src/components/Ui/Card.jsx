//
const BaseCard = ({children}) => {
    return(
        <div className="p-2 m-2 rounded-sm transition-all">
            {children}
        </div>
    );
};

export default BaseCard;