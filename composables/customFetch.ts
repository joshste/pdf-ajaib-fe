import { FetchOptions } from "ofetch";

export const customFetch = (path:string, opts?: FetchOptions) => {
    const config = useRuntimeConfig();
    return $fetch(path, {baseURL: config.public.BASE_URL, ...(opts && {...opts})})
}