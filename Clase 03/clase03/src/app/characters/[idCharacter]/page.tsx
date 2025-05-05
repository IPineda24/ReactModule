"use client"
import { useState, useEffect, use } from "react";

interface CharactersProps {
    params: Promise<{
        idCharacter: string
    }>;
}

export default function Character( { params }: CharactersProps ) {
    const { idCharacter } = use( params );
    const initialId = parseInt( idCharacter );
    const [characterId, setCharacterId] = useState<number>( initialId );

    useEffect( () => {
        async function getData() {
            const url = `https://rickandmortyapi.com/api/character/${characterId}`;

            try {
                const dataApi = await fetch( url );
                if ( !dataApi.ok ) {
                    throw new Error( `${dataApi.status}` );
                }

                const data = await dataApi.json();
                return data.results;

            } catch ( error ) {
                console.log( error )
            }


        }
        getData();
    } );

    // para mas tarde

    return (
        <>

        </>
    )
}