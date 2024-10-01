'use server'
import { Constants } from "@/constants/constants"
import { get } from "./HttpService";
import { Character } from "@/interfaces/interfaces";
import { cache } from "react";

export const getAll = cache(
    async (page?: number)=>{
        const promise = new Promise<Character[]>((resolve, reject) => {
            get(`${Constants.RICK_AND_MORTY_API_BASE_URL}/character/${page ? `?page=${page}` : ''}`)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
        })
        return promise;
    }
)

export const getById = cache(
    async (id: number)=>{
        const promise = new Promise<Character>((resolve, reject) => {
            get(`${Constants.RICK_AND_MORTY_API_BASE_URL}/character/${id}`)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
        })
        return promise;
    }
)

export const getByIds = cache(
    async (...ids: number[])=>{
        const promise = new Promise<Character[]>((resolve, reject) => {
            get(`${Constants.RICK_AND_MORTY_API_BASE_URL}/character/${ids.join(',')}`)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
        })
        return promise;
    }
)