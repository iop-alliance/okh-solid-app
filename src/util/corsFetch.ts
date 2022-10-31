import { fetch } from "@inrupt/solid-client-authn-browser";
const CORS_HOST = 'https://iopa-cors-anywhere.fly.dev'

export default async function corsFetch(requestInfo: string, requestInit?: RequestInit): Promise<Response> {
    return fetch(`${CORS_HOST}/${requestInfo}`, requestInit);
}