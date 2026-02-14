import React from "react";

import SignIn from "./components/SignIn";
import UserSidebar from "./components/UserSidebar";
import TextChat from "./components/TextChat";
import TavernTables from "./components/TavernTables";

export default function App() {
    const [userSignedIn, setUserSignedIn] = React.useState(false);
    return (
        (userSignedIn) ?
        <div>
            <h1>The Yawning Portal</h1>
            <UserSidebar />
            <TextChat />
            <TavernTables />
        </div>
        :
        <div>
            Sign In
            <SignIn />
        </div>
    )
}