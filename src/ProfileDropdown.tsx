import React, { FunctionComponent, useEffect, useState } from 'react';
import { FoafProfile } from "./ldo/foafProfile.typings";
import { FoafProfileFactory } from "./ldo/foafProfile.ldoFactory";
import { useAuth } from "./businessLogic/authGlobalHook";
import useAsyncEffect from 'use-async-effect';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProfileDropdown: FunctionComponent<{}> = () => {
    const { logout, session, fetch } = useAuth();
    const [profile, setProfile] = useState<FoafProfile | undefined>();
    const [nameField, setNameField] = useState<string>("");

    useEffect(() => {
        async function fetchProfile() {
            if (!session.isLoggedIn) return;
            const profileUrl = new URL(session.webId as string);

            const rawProfile = await (
               await fetch(profileUrl)
            ).text();
            const foafProfile = await FoafProfileFactory.parse(
                `${session.webId}`,
                rawProfile,
                { baseIRI: session.webId }
            );
            setProfile(foafProfile);
            setNameField(foafProfile.name || "");
        }
        fetchProfile();
    }, [session]);

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
            }

            setCheckedRootApplicationContainer(true);
        }
    }, [session, checkedRootApplicationContainer])

    if (session?.isLoggedIn) {
        return (
            <DropdownButton title="Profile" align='end' variant="outline-secondary">
                <NavDropdown.ItemText>
                    <div className='d-block'>
                        Logged in as{' '}
                        <a href={session.webId}>{nameField}</a>
                    </div>
                </NavDropdown.ItemText>
                <NavDropdown.ItemText>
                    <Button onClick={logout} variant="outline-secondary">Logout</Button>
                </NavDropdown.ItemText>
            </DropdownButton>
        )
    } else {
        return (<span></span>)
    }
}

export default ProfileDropdown;
