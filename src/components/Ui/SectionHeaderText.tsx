const SectionHeader = ({title="Default Header Title"}) => {
    return (
        <header className="w-fit p-1 m-2 self-start">
            <h2 className="text-md md:text-xl dark:text-zinc-200 font-semibold tracking-tight"> {title} </h2>
        </header>
    )
}

export default SectionHeader;