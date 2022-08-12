import { api } from "../config";

export function endpoint(uri) {
    return `${api}${uri}`;
}