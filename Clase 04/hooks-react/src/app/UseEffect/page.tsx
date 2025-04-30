'use client'

import { useState, useEffect, JSX } from 'react';

interface API {
    map( arg0: ( users: { id: string; name: string; } ) => JSX.Element ): import( "react" ).ReactNode;

    id: string
    name: string
}

export default function UseEffect() {
    const [user, setUser] = useState<API | null>( null );

    useEffect( () => {
        // consumir una API
        const fetchUser = async () => {
            const response = await fetch( "https://jsonplaceholder.typicode.com/users" )
            const data = await response.json();
            setUser( data );
        }
        fetchUser();

    }, [] )

    return (
        <>
            {user ? <h1>{user.map( ( users: { id: string, name: string } ) => (
                <li key={users.id}>
                    <p>{users.name}</p>
                </li>
            ) )}</h1> : <p>cargando...</p>}
        </>
    );
}
