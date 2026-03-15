//
const BaseCard = ({children}) => {
    return(
        <div className="className=p-6 m-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-emerald-500 transition-all">
            {children}
        </div>
    );
};

export default BaseCard;