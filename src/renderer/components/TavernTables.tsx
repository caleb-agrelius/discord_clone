import React from "react";
import { FaPlus } from "react-icons/fa";
type Table = {
    id: number;
    name: string;
};
type Channel = {
    id: number;
    name: string;
};

type SetTables = React.Dispatch<React.SetStateAction<Table[]>>;
type SetTextChannels = React.Dispatch<React.SetStateAction<Channel[]>>;

function TableModal({ setTables, setTextChannels }: { setTables: SetTables, setTextChannels: SetTextChannels }) {
    const [newTableType, setNewTableType] = React.useState<"text" | "voice">("text");
    const [newTableName, setNewTableName] = React.useState("");

    const addTableOrTextChannel = (type: "text" | "voice", name: string) => {
        const newId = Math.floor(Math.random() * 100000);
        if (type === "text") {
            setTextChannels(prev => [...prev, { id: newId, name }]);
        } else {
            setTables(prev => [...prev, { id: newId, name }]);
        }
    };
    
    return (
        <div className="table-modal">
            <h2>Create a new table</h2>
            <p>Text or Voice</p>
            <div>
                <input type="radio" id="text" name="channelType" value="text" onChange={() => setNewTableType("text")} />
                <label htmlFor="text">Text</label>
            </div>
            <div>
                <input type="radio" id="voice" name="channelType" value="voice" onChange={() => setNewTableType("voice")} />
                <label htmlFor="voice">Voice</label>
            </div>
            <input type="text" placeholder="Table Name" value={newTableName} onChange={(e) => setNewTableName(e.target.value)} />
            <button onClick={() => addTableOrTextChannel(newTableType, newTableName)}>Create</button>
        </div>
    );
}

function TavernTables() {
    const [tables, setTables] = React.useState<Table[]>([
        { id: 1, name: "Table 1" },
        { id: 2, name: "Table 2" },
    ]);
    const [textChannels, setTextChannels] = React.useState<Channel[]>([
        { id: 1, name: "General" },
        { id: 2, name: "Off-topic" },
    ]);

    const [showTableModal, setShowTableModal] = React.useState(false);
    return (
        <div className="tavern-tables-container">
            <div className="tavern-tables-header">
                <h1 className="tavern-tables-title">Tables</h1>
                <button onClick={() => setShowTableModal(!showTableModal)} className="create-table-button"><FaPlus /></button>
            </div>
                {showTableModal && <TableModal setTables={setTables} setTextChannels={setTextChannels} />}
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
