"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CharacterProps {
    params: {
        idCharacter: string;
    };
}
interface CharacterData {
    id: number;
    name: string;
    image: string;
}

export default function Character( { params }: CharacterProps ) {
    const [character, setCharacter] = useState<CharacterData | null>( null );
    const [error, setError] = useState<string | null>( null );

    useEffect( () => {
        async function fetchCharacter() {
            const { idCharacter } = await params;
            try {
                const res = await fetch( `https://rickandmortyapi.com/api/character/${idCharacter}` );

                if ( !res.ok ) {
                    throw new Error( `Error al obtener el personaje.Código: ${res.status}` );
                }

                const character = await res.json();
                setCharacter( character );
            } catch ( err ) {
                console.error( "Error cargando personaje:", err );
                setError( "No se pudo cargar el personaje." );
            }
        }

        fetchCharacter();
    }, [params] );

    if ( error ) {
        return (
            <>
                <h1>Error</h1>
                <p>{error}</p>
            </>
        );
    }

    if ( !character ) {
        return (
            <>
                <h1>Cargando...</h1>
            </>
        );
    }

    return (
        <>
            <h1>Personaje</h1>
            <p>ID: {character.id}</p>
            <p>Nombre: {character.name}</p>
            <Image
                src={character.image}
                alt={`Imagen de ${character.name}`}
                width={200}
                height={200}
                priority
                style={{ objectFit: "cover" }}
            />
        </>
    );
}
