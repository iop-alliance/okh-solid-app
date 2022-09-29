import React, { FunctionComponent, useCallback } from 'react';
import { useAuth } from "./businessLogic/authGlobalHook";

const LoginHeader: FunctionComponent<{}> = () => {
    const { login, logout, session } = useAuth();

    const loginCallBack = useCallback(() => {
        const oidcIssuer = prompt(
            "Enter your Solid OIDC Issuer (Example: https://solidcommunity.net)",
            "https://solidcommunity.net"
        );
        if (oidcIssuer) {
            login(oidcIssuer);
        } else {
            alert("Please provide an issuer.")
        }
    }, [login]);

    if (session?.isLoggedIn) {
        return (
            <div>
                <p>Logged in as {session.webId}</p>
                <button onClick={logout}>Logout</button>
            </div>
        )
    } else {
        return (
            <button onClick={loginCallBack}>Log into a Solid Pod</button>
        )
    }
}

export default LoginHeader;
