import React from "react";

function SearchBar({ placeholderText, runSearchFunction }: { placeholderText: string, runSearchFunction: () => any }) {
    return (
        <div className="search-bar-container">
            <input className="search-input" type="text" placeholder={placeholderText} onChange={() => runSearchFunction()}/>
        </div>
    )
}

export default SearchBar;