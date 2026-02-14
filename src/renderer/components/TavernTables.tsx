import React from "react";

type Table = {
    id: string;
    name: string;
};

const tables: Table[] = [];

function TavernTables() {
    return (
        <div>
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
