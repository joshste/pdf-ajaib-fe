import { FetchOptions } from "ofetch";

export const customFetch = <T>(path:string, opts?: FetchOptions) => {
    const config = useRuntimeConfig();
    return $fetch<T>(path, {baseURL: config.public.BASE_URL, ...(opts && {...opts})})
}