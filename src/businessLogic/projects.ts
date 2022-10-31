import { Module } from "../ldo/okhProject.typings";
import { LoaderFunctionArgs } from "react-router-dom";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { ModuleFactory } from "../ldo/okhProject.ldoFactory";

export async function projectLoader({ request, params } : LoaderFunctionArgs): Promise<Module> {
  const { projectId } = params;
  if (!projectId) {
    // TODO: Handle case where there isn't a project Id.
    throw new Error('No project id');
  }
  const response = await fetch(projectId);
  if (response.status === 200) {
    const rawText = await response.text();
    const module = await ModuleFactory.parse(projectId, rawText, { baseIRI: projectId });
    return module;
  } else {
    // TODO: Handle Error
    throw new Error('Something happened');
  }
}
