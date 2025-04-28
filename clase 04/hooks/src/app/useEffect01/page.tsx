'use client';

import { useEffect, useState } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState<number>( 0 );

    useEffect( () => {
        const interval = setInterval( () => {
            setSeconds( prev => prev + 1 );
        }, 1000 );

        return () => clearInterval( interval ); // limpieza
    }, [] );

    return (
        <h2>Han pasado {seconds} segundos</h2>
    );
}
