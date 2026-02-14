import React, { useState } from "react";

const PageState = {
    SIGN_IN: "SIGN_IN",
    REGISTER: "REGISTER",
} as const;

type PageStateType = typeof PageState[keyof typeof PageState];

function SignIn() {
    const [page, setPage] = useState<PageStateType>(PageState.SIGN_IN);
    return (
        <div>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>{page === PageState.SIGN_IN ? "Sign In" : "Register"}</button>

            <p>{page === PageState.SIGN_IN ? "Don't have an account?" : "Already have an account?"}</p>
            <button onClick={() => setPage(page === PageState.SIGN_IN ? PageState.REGISTER : PageState.SIGN_IN)}>
                {page === PageState.SIGN_IN ? "Register" : "Sign In"}
            </button>
        </div>
    );
}

export default SignIn;
