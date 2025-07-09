export default async function review({params,}:{
    params: Promise <{products: string; reviewId: string}>
}){
    const {products, reviewId} = await params;
    return <>
        <h1>the product {products} has the review {reviewId}</h1>
    </>
}