import React from "react";
import SearchBar from "../components/SearchBar.tsx";
import DirectMessage from "../components/DirectMessage.tsx";

function FriendsList() {
    const friends = [
        { id: "1", username: "Alice" },
        { id: "2", username: "Bob" },
        { id: "3", username: "Charlie" },  
    ];
    const [dmOpen, setDmOpen] = React.useState(false);
    const [friendId, setFriendId] = React.useState<string | null>(null);

    const openDM = (id: string) => {
        setFriendId(id);
        setDmOpen(true);
    };
    return (
        <div className="friends-list-container">
            <div className="friends-list">
                <SearchBar placeholderText="Add a friend" runSearchFunction={() => console.log("Search function called from friends list")}/>
                {friends.map(friend => (
                    <div onClick={() => openDM(friend.id)} className="friend-item" key={friend.id}>
                        <p>{friend.username}</p>
                    </div>
                ))}
            </div>
            {dmOpen && <DirectMessage friendId={friendId} />}
        </div>
    )
}

export default FriendsList;