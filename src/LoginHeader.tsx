import React, { FunctionComponent, useCallback, useState } from 'react';
import { useAuth } from "./businessLogic/authGlobalHook";
import useAsyncEffect from "use-async-effect";

const LoginHeader: FunctionComponent<{}> = () => {
    const { login, logout, session, fetch } = useAuth();

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
    
    const [checkedRootApplicationContainer, setCheckedRootApplicationContainer] = useState(false);
    useAsyncEffect(async () => {
        if (!checkedRootApplicationContainer && session.isLoggedIn) {
            // Get path to the root container
            const profileUrl = new URL(session.webId as string);
            const applicationRoot = `${profileUrl.origin}/okh/`;

            // Check to see if root container exists
            const containerExistsResponse = await fetch(applicationRoot);
            if (containerExistsResponse.status === 404) {
                // Create root container if it doesn't exist
                console.log('Container doesnt exist'); 
                const createContainerResponse = await fetch(applicationRoot, {
                    method: "PUT",
                    headers: {
                        link: '<http://www.w3.org/ns/ldp#BasicContainer>; rel="type"'
                    }
                })
                console.log(createContainerResponse.status);
            }
            console.log(containerExistsResponse.status);

            setCheckedRootApplicationContainer(true);
        }
    }, [session, checkedRootApplicationContainer])

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
