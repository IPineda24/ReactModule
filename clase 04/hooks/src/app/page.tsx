'use client';

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>( 0 );

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount( count + 1 )}>Incrementar</button>
    </div>
  );
}
