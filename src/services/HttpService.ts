'use server'
import { cache } from "react";
import axios from "axios";

const instance = axios.create({
    headers: { 'Content-Type': 'application/json' }
});

/* instance.interceptors.request.use(
    async (config) => {
        let token = await getToken();
        if (token != null) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => Promise.reject(error),
);
 */
export const get = cache (async (url: string)=> instance.get(url));
export const post = cache (async (url: string, data: object)=> instance.post(url, data));
export const put = cache (async (url: string, data?: object)=> instance.put(url, data));
export const del = cache (async (url: string)=> instance.delete(url));
