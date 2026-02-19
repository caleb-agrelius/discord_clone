import React from "react";
import SearchBar from "./SearchBar.tsx";
import TextChat from "./TextChat.tsx";

function DirectMessage({ friendId, friendName }: { friendId: string | null, friendName: string | null }) {
    return (
        <div className="direct-message-container">
            <SearchBar placeholderText="Search messages" runSearchFunction={() => console.log("Search function called from direct message")}/>
            <p>{friendName ? `${friendName}` : ""}</p>

            <TextChat />
        </div>
    )
}

export default DirectMessage;