import React, { useState } from "react";

const PageState = {
    SIGN_IN: "SIGN_IN",
    REGISTER: "REGISTER",
} as const;

type PageStateType = typeof PageState[keyof typeof PageState];

function SignIn() {
    const [page, setPage] = useState<PageStateType>(PageState.SIGN_IN);
    return (
        <div className="sign-in-page">
            <div className="sign-in-card">
                <input className="sign-in-input" type="text" placeholder="Username" />
                <input className="sign-in-input" type="password" placeholder="Password" />
                <button className="sign-in-submit">{page === PageState.SIGN_IN ? "Sign In" : "Register"}</button>

                <p className="sign-in-switch-text">{page === PageState.SIGN_IN ? "Don't have an account?" : "Already have an account?"}</p>
                <button className="sign-in-switch-button" onClick={() => setPage(page === PageState.SIGN_IN ? PageState.REGISTER : PageState.SIGN_IN)}>
                {page === PageState.SIGN_IN ? "Register" : "Sign In"}
                </button>
            </div>
        </div>
    );
}

export default SignIn;
