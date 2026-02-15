import React from "react";
import {FaPlus} from "react-icons/fa";
type Table = {
    id: string;
    name: string;
};

const tables: Table[] = [];

function TavernTables() {
    return (
        <div className="tavern-tables-container">
            <div className="tavern-tables-header">
                <h1 className="tavern-tables-title">Tables</h1>
                <button className="create-table-button"><FaPlus /></button>
            </div>
            {tables.map(table => (
                <div key={table.id}>
                    <p>going to make each of these a brown circle with the user pfp's around the edge</p>
                    <h2>{table.name}</h2>
                </div>
            ))}
        </div>
    );
}

export default TavernTables;
