import React from "react";
import SignIn from "./pages/SignIn.tsx";
import FriendsList from "./pages/FriendsList.tsx";

import UserSidebar from "./components/UserSidebar.tsx";
import TavernTables from "./components/TavernTables.tsx";

import { DEV_BYPASS } from "./util/constants.ts";

import { FaUserFriends, FaHouseUser } from "react-icons/fa";

export default function App() {
    const [userSignedIn, setUserSignedIn] = React.useState(DEV_BYPASS);
    const [page, setPage] = React.useState("Taverns");

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
                <p>The Yawning Portal</p>
                <div className="header-buttons">
                <button onClick={() => setPage("Taverns")}><FaHouseUser /></button>
                <button onClick={() => setPage("FriendsList")} ><FaUserFriends /></button>
                </div>
            </div>
            <div className="main-layout">
                
                <div className="main-content">
                    {page === "Taverns" && <TavernTables />}
                    {page === "FriendsList" && <FriendsList />}
                </div>
                <UserSidebar />
            </div>
        </div>
    );
}
