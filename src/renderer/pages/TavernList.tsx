import React from "react";
import TavernThumbnail from "../components/TavernThumbnail.tsx";

type setPage = React.Dispatch<React.SetStateAction<string>>;
type setTavernName = React.Dispatch<React.SetStateAction<string>>;

function TavernList({ setPage, setTavernName }: { setPage: setPage, setTavernName: setTavernName }) {
    const taverns = [
        { id: 1, tavern_name: "The Drunken Dragon", tavern_description: "A cozy place with a warm fireplace.", patron_count: 12 },
        { id: 2, tavern_name: "The Tipsy Troll", tavern_description: "Famous for its exotic drinks.", patron_count: 8 },
        { id: 3, tavern_name: "The Jolly Giant", tavern_description: "Live music every night.", patron_count: 15 },
    ];

    const openTavern = (tavernId: number, tavernName: string) => {
        setPage("Tavern");
        setTavernName(tavernName);
    };

    return (
        <div>
            <h1>My Taverns</h1>
            <div className="my-taverns-list">
            {taverns.map((tavern) => (
                <div key={tavern.id} onClick={() => openTavern(tavern.id, tavern.tavern_name)}>
                    <TavernThumbnail
                        tavern_name={tavern.tavern_name}
                        tavern_description={tavern.tavern_description}
                        patron_count={tavern.patron_count}
                    />
                </div>
            ))}
            </div>
        </div>
    );
}

export default TavernList;