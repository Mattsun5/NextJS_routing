export default async function product({params,} : {
    params : Promise<{products: string}>
}){
    const productId = (await params).products;
    return <>
        <h1>Get details for product: {productId}</h1>
    </>
}