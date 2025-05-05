import getData from "@/API/getData";
import Link from "next/link";
export default async function Characters() {
    const allData = await getData();
    return (
        <>
            <div>Show all characters</div>
            <ul>
                {
                    allData.map( ( data: { id: number, name: string, species: string } ) => (
                        <li key={data.id}>
                            <Link href={`/characters/${data.id}`}>
                                <div className="flex">
                                    <p className="px-3" >-{data.name}</p>
                                    <p>- {data.species}</p>
                                </div>
                            </Link>

                        </li>

                    ) )
                }
            </ul>
        </>
    )
}