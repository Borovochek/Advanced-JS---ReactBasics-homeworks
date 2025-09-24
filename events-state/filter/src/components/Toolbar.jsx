
function Toolbar({ filters, selected, onSelectFilter }) {

    return (
        <div className="toolbar">
            {filters.map((filter, index) => (
                <button
                    key={index}
                    className={filter === selected ? "active" : ""}
                    onClick={() => onSelectFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    )
}

export default Toolbar;


