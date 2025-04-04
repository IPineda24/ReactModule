export default async function Blog( { params }: { params: { id: string } } ) {
    const { id } = await params
    return (
        <>
            <h1>Bienvenido a nuestro Blog</h1>
            <div> ID: {id}</div>
        </>
    )
}