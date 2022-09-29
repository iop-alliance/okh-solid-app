import { login, ISessionInfo } from '@inrupt/solid-client-authn-browser';
import React, { FunctionComponent, useCallback } from 'react';

const LoginHeader: FunctionComponent<{
    sessionInfo?: ISessionInfo
}> = ({ sessionInfo }) => {
    const loginCallBack = useCallback(() => {
        const oidcIssuer = prompt(
            "Enter your Solid OIDC Issuer (Example: https://solidcommunity.net)",
            "https://solidcommunity.net"
        );
        if (oidcIssuer) {
            login({
                oidcIssuer,
                redirectUrl: window.location.href,
                clientName: "OKH Solid App"
            });
        } else {
            alert("Please provide an issuer.")
        }
    }, []);

    if (sessionInfo?.isLoggedIn) {
        return (
            <p>Logged in as {sessionInfo.webId}</p>
        )
    } else {
        return (
            <button onClick={loginCallBack}>Log into a Solid Pod</button>
        )
    }
}

export default LoginHeader;
