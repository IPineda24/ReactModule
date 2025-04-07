import getData from "@/API/getData"

export default async function Characters() {
    const characters = await getData();
    return (
        <>
            <h1>Characters</h1>
            <ul>
                {
                    characters.map( ( result: { id: string, name: string } ) => (

                        <li key={result.id}>

                            <p>{result.name}</p>
                        </li>

                    ) )
                }
            </ul>

        </>
    )
}