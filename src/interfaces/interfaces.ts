import { CharacterGender, CharacterStatus } from "@/enums/enums"

export interface Character{
    id: number,
    name: string,
    status: CharacterStatus,
    species: string,
    type?: string,
    gender: CharacterGender,
    origin: Location,
    location: Location,
    episode: string[],
    image: string,
    url: string
}

export interface Location{
    name: string,
    url: string
}