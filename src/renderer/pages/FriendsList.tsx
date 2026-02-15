import React from "react";

function FriendsList() {
    const friends = [
        { id: "1", username: "Alice" },
        { id: "2", username: "Bob" },
        { id: "3", username: "Charlie" },  
    ];
    return (
        <div className="friends-list-container">
            {friends.map(friend => (
                <div key={friend.id}>
                    <p>{friend.username}</p>
                </div>
            ))}
        </div>
    )
}

export default FriendsList;