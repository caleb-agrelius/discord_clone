import React from "react";

type User = {
    id: string;
    username: string;
};

const users: User[] = [];

export default function UserSidebar() {
    return (
        <div>
            <h1>Patrons</h1>
            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        <p>{user.username}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
