import React from 'react';
import TavernTables from "../components/TavernTables.tsx";
import TextChat from "../components/TextChat.tsx";

function TavernPage({ tavernName }: { tavernName: string }) {

    return (
        <div className="tavern-page">
            <h1>{tavernName}</h1>
            <TavernTables />
            <TextChat />
        </div>
    )
}

export default TavernPage;