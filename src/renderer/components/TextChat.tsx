import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../index.css";

type Message = {
    id: string;
    author: string;
    content: string;
};

function TextChat() {
    const [messages, setMessages] = React.useState<Message[]>([]);
    const [inputValue, setInputValue] = React.useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedValue = inputValue.trim();
        if (!trimmedValue) return;

        const newMessage: Message = {
            id: crypto.randomUUID(),
            author: "User",
            content: trimmedValue,
        };

        setMessages((previousMessages) => [...previousMessages, newMessage]);
        setInputValue("");
    };

    return (
        <div className="text-chat-container">
            {messages.map((message) => (
                <div className="message-item" style={{ color: "white", border: "1px solid white" }} key={message.id}>
                    <p>{message.author}</p>
                    <p>{message.content}</p>
                </div>
            ))}
            <div className="text-input-row">
                <form className="text-input-form" onSubmit={handleSubmit}>
                    <input
                        className="text-input"
                        name="messageInput"
                        type="text"
                        placeholder="Type a message..."
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                    />
                    <button className="text-send-button" type="submit" aria-label="Send message">
                        <FaArrowRight />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default TextChat;
