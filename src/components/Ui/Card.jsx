//
const BaseCard = ({children}) => {
    return(
        <div className="bg-blue-300 p-2 m-2 rounded-sm transition-all">
            {children}
        </div>
    );
};

export default BaseCard;