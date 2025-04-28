'use client';
import { useEffect, useState } from "react";

interface API {
    name: string
}

export default function UseEffect() {

    const [user, setUser] = useState<API | null>( null );

    useEffect( () => {
        const fetchUser = async () => {
            const res = await fetch( 'https://jsonplaceholder.typicode.com/users/1' );
            const data = await res.json();
            setUser( data );
        };
        fetchUser();
    }, [] ); // [] para que solo se ejecute una vez


    return (
        <>
            {user ? <h1>{user.name}</h1> : <p>Cargando...</p>}
        </>
    );
}
