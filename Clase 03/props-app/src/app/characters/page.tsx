import Link from "next/link";

export default async function Characters() {
    const data = await fetch( 'https://rickandmortyapi.com/api/character' )
    const posts = await data.json();
    const results = posts.results;
    return (
        <>
            <div> all characters</div>
            <ul>
                {results.map( ( result: { id: string, name: string } ) => (
                    <li key={result.id}>
                        <div className="flex ">
                            <p className="px-2">{result.id}</p>
                            <Link href={`/characters/${result.id}`}>
                                <p className="text-blue-500 underline cursor-pointer">{result.name}</p>
                            </Link>
                        </div>
                    </li>
                ) )}
            </ul>
        </>
    )
}