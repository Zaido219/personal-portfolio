const SectionHeader = ({title="Default Header Title"}) => {
    return (
        <header className="w-fit  p-2 m-2">
            <h2 className="text-lg font-semibold tracking-tight"> {title} </h2>
        </header>
    )
}

export default SectionHeader;