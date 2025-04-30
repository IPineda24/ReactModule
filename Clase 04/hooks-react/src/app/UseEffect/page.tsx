'use client'

import { useState, useEffect } from 'react';

interface API {
    name: string
}

export default function UseEffect() {
    const [user, setUser] = useState<API | null>( null );

    useEffect( () => {
        // consumir una API
        const fetchUser = async () => {
            const response = await fetch( "https://jsonplaceholder.typicode.com/users/1" )
            const data = await response.json();
            setUser( data );
        }
        fetchUser();

    } )

    return (
        <>
            {user ? <h1>{user.name}</h1> : <p>cargando...</p>}
        </>
    );
}
