import React from "react";
import { FaPlus } from "react-icons/fa";
type Table = {
    id: string;
    name: string;
};
type Chennel = {
    id: string;
    name: string;
};

const tables: Table[] = [
    { id: "1", name: "Table 1" },
    { id: "2", name: "Table 2" },
];

const textChannels: Chennel[] = [
    { id: "1", name: "General" },
    { id: "2", name: "Off-topic" },
];

function TavernTables() {
    return (
        <div className="tavern-tables-container">
            <div className="tavern-tables-header">
                <h1 className="tavern-tables-title">Tables</h1>
                <button className="create-table-button"><FaPlus /></button>
            </div>
            <div className="text-channels-container">
                <h2 className="text-channels-title">Text Channels</h2>
                <div className="text-channels-list">
                {textChannels.map(channel => (
                    <button className="text-channel-item-button" key={channel.id}>
                        <h3>{channel.name}</h3>
                    </button>
                ))}
                </div>
            </div>
            <div className="voice-channels-container">
                <h2 className="voice-channels-title">Voice Channels</h2>
                <div className="voice-channels-list">
                {tables.map(table => (
                    <button className="voice-channel-item-button" key={table.id}>
                        <h2>{table.name}</h2>
                    </button>
                ))}
                </div>
            </div>
        </div>
    );
}

export default TavernTables;
