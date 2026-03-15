//
const BaseCard = ({children}) => {
    return(
        <div className="border border-slate-400 rounded-sm transition-all">
            {children}
        </div>
    );
};

export default BaseCard;