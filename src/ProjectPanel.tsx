import { FormEvent, FunctionComponent, useCallback, useEffect, useState } from "react";
import { LinkedDataObject } from "ldo";
import { Module } from './ldo/okhProject.typings';
import { ModuleFactory } from './ldo/okhProject.ldoFactory';
import { fetch } from "@inrupt/solid-client-authn-browser";

const ProjectPanel: FunctionComponent<{ webId: string }> = ({ webId }) => {
    useEffect(() => {
    }, [webId]);


    return (
        <>
            <h2>Projects Panel</h2>
        </>
    )
}

export default ProjectPanel;
