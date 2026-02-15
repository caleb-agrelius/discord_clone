import React from "react";
import SearchBar from "../components/SearchBar.tsx";
import TextChat from "../components/TextChat.tsx";

function DirectMessage() {
    return (
        <div className="direct-message-container">
            <SearchBar placeholderText="Search messages" runSearchFunction={() => console.log("Search function called from direct message")}/>
            <p>Direct Message</p>

            <TextChat />
        </div>
    )
}

export default DirectMessage;