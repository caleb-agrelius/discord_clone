import React from "react";
import SignIn from "./components/SignIn.tsx";
import UserSidebar from "./components/UserSidebar.tsx";
import TextChat from "./components/TextChat.tsx";
import TavernTables from "./components/TavernTables.tsx";

import { DEV_BYPASS } from "./util/constants.ts";

import { FaUserFriends, FaHouseUser } from "react-icons/fa";

export default function App() {
    const [userSignedIn, setUserSignedIn] = React.useState(DEV_BYPASS);

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
                <FaHouseUser><button /></FaHouseUser>
                <FaUserFriends><button /></FaUserFriends>
                </div>
            </div>
            <div className="main-layout">
                
                <div className="main-content">
                    <TavernTables />
                    <TextChat />
                </div>
                <UserSidebar />
            </div>
        </div>
    );
}
