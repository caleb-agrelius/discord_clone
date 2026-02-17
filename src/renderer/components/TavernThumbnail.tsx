import React from "react";

function TavernThumbnail({ 
    tavern_name, 
    tavern_description,
    patron_count 
} : { 
    tavern_name: string, 
    tavern_description: string, 
    patron_count: number 
}) {
    return (
        <div className="tavern-thumbnail-card">
            <h1>{tavern_name}</h1>
            <p>{tavern_description}</p>
            <p>{patron_count} patrons</p>
        </div>
    )
}

export default TavernThumbnail;