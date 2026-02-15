import React from "react";

function FriendsList({setPage}: {setPage: (page: string) => void}) {
    const friends = [
        { id: "1", username: "Alice" },
        { id: "2", username: "Bob" },
        { id: "3", username: "Charlie" },  
    ];
    return (
        <div className="friends-list-container">
            {friends.map(friend => (
                <div onClick={() => setPage("DirectMessage")} className="friend-item" key={friend.id}>
                    <p>{friend.username}</p>
                </div>
            ))}
        </div>
    )
}

export default FriendsList;