import React from 'react';
import TavernTables from "../components/TavernTables.tsx";
import TextChat from "../components/TextChat.tsx";
import UserSidebar from '../components/UserSidebar.tsx';

function TavernPage({ tavernName }: { tavernName: string }) {

    return (
        <div className="tavern-page">
            <h1>{tavernName}</h1>
            <div className='tavern-layout'>
            <TavernTables />
            <TextChat />
            <UserSidebar />
            </div>
        </div>
    )
}

export default TavernPage;