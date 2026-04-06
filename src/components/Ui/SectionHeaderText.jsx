const SectionHeader = ({title="Default Header Title"}) => {
    return (
        <header className="w-fit p-1 m-1">
            <h2 className="text-lg font-semibold tracking-tight"> {title} </h2>
        </header>
    )
}

export default SectionHeader;