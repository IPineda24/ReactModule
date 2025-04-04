// Debemos importar Link
import Link from "next/link";
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/*
      <h1>Home</h1>
      <a href="/about">Ir a About</a>
      */}
      <Link href="/about" >
        Ir a About
      </Link>

      <Image
        src='/next.svg'
        alt="Producto XYZ"
        width={200}
        height={100}
        priority
        style={{ objectFit: 'cover' }}
      />

    </>


  );
}
