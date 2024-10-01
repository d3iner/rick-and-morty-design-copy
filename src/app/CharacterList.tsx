'use client'
import { Character } from '@/interfaces/interfaces'
import styles from './CharacterList.module.css'
import * as RickAndMortyEpisodeService from '@/services/RickAndMortyEpisodeService'
import { generateUniqueRandomArray } from '@/services/UtilService'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CharacterStatus } from '@/enums/enums'

export default function CharacterList() {

    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(()=>{
        RickAndMortyEpisodeService.getByIds(...generateUniqueRandomArray(6, 1, 826)).then((res)=>setCharacters(res))
    }, [])

    useEffect(()=>{
        console.log(characters)
    }, [characters])

    return (
        <>
        {characters.map((item, index)=>(
            <CharacterCard key={index} {...item}/>
        ))}
        </>
    )
}

/* interface CharacterCardProps extends Character{

}
 */
function CharacterCard({...props}: Character){
    return(
        <article className={styles.card__container}>
            <Image src={props.image} className={styles.card__image} alt='image' height={200} width={200}/>
            <div className={styles.cart__content__container}>
                <div className='flex flex-col'>
                    <Link href={props.url} className={styles.card__title__link}>
                        <h2>{props.name}</h2>
                    </Link>
                    <span className='flex items-center gap-2'>
                        <span className={`h-3 w-3 rounded-full ${props.status === CharacterStatus.Alive ? 'bg-alive' : 
                            props.status === CharacterStatus.Dead ? 'bg-dead' : 
                            props.status === CharacterStatus.unknown ? 'bg-unknown' : ''}`}/>
                        <span className='capitalize font-semibold'>{`${props.status} - ${props.type || 'Human'}`}</span>
                    </span>
                </div>
                <div className='flex flex-col'>
                    <span className={`${styles.card__subtitle}`}>Last know location:</span>
                    <Link href={props.location.url} className={styles.info__link}>{props.location.name}</Link>
                </div>
                <div className='flex flex-col'>
                    <span className={`${styles.card__subtitle}`}>First seen in:</span>
                    <Link href={props.origin.url} className={styles.info__link}>{props.origin.name}</Link>
                </div>
            </div>
        </article>
    )
}