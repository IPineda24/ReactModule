'use client'

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState( 0 );
  return (
    <>
      <h1>Hello world!</h1>
      <h1>Contador: {count}</h1>
      <button onClick={() => { setCount( count + 1 ) }} >Agregar +1</button>
    </>
  );
}
