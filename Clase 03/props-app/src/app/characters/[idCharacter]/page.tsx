"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";

interface CharacterProps {
    params: Promise<{
        idCharacter: string;
    }>;
}
interface CharacterData {
    id: number;
    name: string;
    image: string;
}

export default function Character( { params }: CharacterProps ) {
    const { idCharacter } = use( params ); // <-- usa `use(params)`
    const initialId = parseInt( idCharacter, 10 );
    const [characterId, setCharacterId] = useState<number>( initialId );
    const [character, setCharacter] = useState<CharacterData | null>( null );
    const [error, setError] = useState<string | null>( null );

    useEffect( () => {
        async function fetchCharacter() {
            try {
                const res = await fetch( `https://rickandmortyapi.com/api/character/${characterId}` );

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
    }, [characterId] );

    if ( error ) {
        return (
            <>
                <h1>Error</h1>
                <p>{error}</p>
                <Link href={`/characters/`}>
                    Go to characters
                </Link>
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
    const handleNext = () => {
        setCharacterId( ( prevId ) => prevId + 1 );
    };

    const handlePrev = () => {
        if ( characterId > 1 ) {
            setCharacterId( ( prevId ) => prevId - 1 );
        }
    };

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
            <button onClick={handlePrev} disabled={characterId === 1}>
                Anterior
            </button>
            <button onClick={handleNext}>
                Siguiente
            </button>

        </>
    );
}