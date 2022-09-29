import React, { FunctionComponent, useCallback } from 'react';
import { useAuth } from "./businessLogic/authGlobalHook";
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
            <DropdownButton title="Profile" align='end' variant="outline-primary">
                <NavDropdown.ItemText>Logged in as {session.webId}</NavDropdown.ItemText>
                <NavDropdown.Item>
                    <Button onClick={logout} variant="outline-secondary">Logout</Button>
                </NavDropdown.Item>
            </DropdownButton>
        )
    } else {
        return (
            <Button onClick={loginCallBack}>Log into a Solid Pod</Button>
        )
    }
}

export default LoginHeader;
