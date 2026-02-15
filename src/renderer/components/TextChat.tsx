import React from "react";
import "../index.css";
type Message = {
    id: string;
    author: string;
    content: string;
};

const messages: Message[] = [];

function TextChat() {
    return (
        <div className="text-chat-container">
            {messages.map((message) => (
                <div key={message.id}>
                    <p>{message.author}</p>
                    <p>{message.content}</p>
                </div>
            ))}
            <input className="text-input" type="text" placeholder="Type a message..." />
        </div>
    );
}

export default TextChat;
