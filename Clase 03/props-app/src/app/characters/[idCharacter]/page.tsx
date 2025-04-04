interface Props {
    params: {
        idCharacter: string;
    };
}

import Image from "next/image";


export default async function Character( { params }: Props ) {
    const { idCharacter } = await params;
    try {
        const res = await fetch( `https://rickandmortyapi.com/api/character/${idCharacter}` );

        if ( !res.ok ) {
            throw new Error( `Error al obtener el personaje. Código: ${res.status}` );
        }

        const character = await res.json();

        return (
            <>
                <h1>Personaje</h1>
                <p>ID: {character.id}</p>
                <p>Nombre: {character.name}</p>
                <Image
                    src={character.image} // ✅ propiedad correcta
                    alt={`Imagen de ${character.name}`}
                    width={200}
                    height={200}
                    priority
                    style={{ objectFit: "cover" }}
                />
            </>
        );
    } catch ( error ) {
        console.error( "Error cargando personaje:", error );

        return (
            <>
                <h1>Error</h1>
                <p>No se pudo cargar el personaje.</p>
            </>
        );
    }
}
