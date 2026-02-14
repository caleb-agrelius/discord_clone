import React from "react";

type Message = {
    id: string;
    author: string;
    content: string;
};

const messages: Message[] = [];

function TextChat() {
    return (
        <div>
            {messages.map((message) => (
                <div key={message.id}>
                    <p>{message.author}</p>
                    <p>{message.content}</p>
                </div>
            ))}
            <input type="text" placeholder="Type a message..." />
        </div>
    );
}

export default TextChat;
