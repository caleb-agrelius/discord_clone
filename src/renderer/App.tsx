import React from "react";
import SignIn from "./components/SignIn.tsx";
import UserSidebar from "./components/UserSidebar.tsx";
import TextChat from "./components/TextChat.tsx";
import TavernTables from "./components/TavernTables.tsx";

import { DEV_BYPASS } from "./util/constants.ts";

export default function App() {
    
    const [userSignedIn, setUserSignedIn] = React.useState(DEV_BYPASS);

    return (
        userSignedIn ?
        <div>
            <h1>The Yawning Portal</h1>
            <UserSidebar />
            <TextChat />
            <TavernTables />
        </div>
        :
        <div>
            <SignIn />
        </div>
    );
}
