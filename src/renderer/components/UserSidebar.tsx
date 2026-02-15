import React from "react";

type User = {
    id: string;
    username: string;
};

const users: User[] = [
    { id: "1", username: "Alice" },
    { id: "2", username: "Bob" },
    { id: "3", username: "Charlie" },
];

export default function UserSidebar() {
    return (
        <div className="user-sidebar">
            <h1>Patrons</h1>
            <div className="user-list">
                {users.map((user) => (
                    <div className="user-item" key={user.id}>
                        <p>{user.username}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
