import React from "react";

import SignIn from "./pages/SignIn.tsx";
import FriendsList from "./pages/FriendsList.tsx";
import TavernPage from "./pages/TavernPage.tsx";
import TavernList from "./pages/TavernList.tsx";

import { DEV_BYPASS } from "./util/constants.ts";

import { FaUserFriends, FaHouseUser } from "react-icons/fa";
import "./index.css";

export default function App() {
    const [userSignedIn, setUserSignedIn] = React.useState(DEV_BYPASS);
    const [page, setPage] = React.useState("FriendsList");
    const [tavernName, setTavernName] = React.useState("");

    if (!userSignedIn) {
        return (
            <div>
                <SignIn />
            </div>
        );
    }

    return (
        <div className="app-container">
            <div className="header">
                <p className="app-title">The Yawning Portal</p>
                <div className="header-buttons">
                    <button className="taverns-page-button" onClick={() => setPage("TavernList")}><FaHouseUser /></button>
                    <button className="friendslist-page-button" onClick={() => setPage("FriendsList")} ><FaUserFriends /></button>
                </div>
            </div>
            <div className="main-layout">
                <div className="main-content">
                    {page === "FriendsList" && <FriendsList />}
                    {page === "Tavern" && <TavernPage tavernName={tavernName} />}
                    {page === "TavernList" && <TavernList setPage={setPage} setTavernName={setTavernName}/>}
                </div>
            </div>
        </div>
    );
}
