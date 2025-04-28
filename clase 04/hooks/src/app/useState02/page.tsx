'use client';

import { useState } from "react";

export default function InputExample() {
    const [name, setName] = useState<string>( "" );

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={( e ) => setName( e.target.value )}
                placeholder="Escribe tu nombre"
            />
            <p>Hola, {name}!</p>
        </div>
    );
}
