


export default function Filter({ filterItem, setFilterItem }) {

    function removeFilter(index) {
        let updateFilterArr = filterItem.filter((_, i) => i !== index);
        setFilterItem(updateFilterArr);
    }
    
    return (
        <header>
        <div className="container">
                {filterItem.length > 0 && (
                    <div className="search-container">
                        <div className="filter-search">
                                {filterItem && filterItem.map((item, index) => (
                                    <div key={index}>
                                        <p>{item}</p>
                                        <div className="close-icon" onClick={() => removeFilter(index)}></div>
                                    </div>
                                ))}
                        </div>
                    <div className="clear-btn" onClick={() => setFilterItem([])}>clear</div>
                </div>
            )}
        </div>
    </header>
    )
}