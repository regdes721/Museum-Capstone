import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { thunkLoadProducts } from "../../redux/products"

export default function BestSellersPage() {
    const dispatch = useDispatch()
    const productObj = useSelector(state => state.products.allProducts)
    const products = Object.values(productObj)
    let sortedProducts;
    let bestSellers;
    let sortedBestSellers;
    if (products.length > 0) {
        sortedProducts = products.sort((a, b) => b.num_sold - a.num_sold)
    }
    if (sortedProducts) {
        bestSellers = [sortedProducts[0], sortedProducts[1], sortedProducts[2], sortedProducts[3], sortedProducts[4], sortedProducts[5], sortedProducts[6], sortedProducts[7], sortedProducts[8], sortedProducts[9], sortedProducts[10], sortedProducts[11], sortedProducts[12], sortedProducts[13], sortedProducts[14], sortedProducts[15], sortedProducts[16], sortedProducts[17], sortedProducts[18], sortedProducts[19]]
    }
    if (bestSellers) {
        sortedBestSellers = bestSellers.filter((product) => product !== undefined)
    }

    useEffect(() => {
        dispatch(thunkLoadProducts())
    }, [dispatch])

    return (
        <div>
            <div>
                <p><NavLink to="/"><span> <i className="fa-solid fa-angle-left"></i> Home</span></NavLink></p>
                <h1>Best Sellers</h1>
            </div>
            {sortedBestSellers && sortedBestSellers.length > 0 && sortedBestSellers.map((product) =>
                <div>
                    <img src={product?.product_images[0].image_url} />
                    <h3>{product?.name}</h3>
                    <p>€{product?.price}</p>
                </div>
                )}
        </div>
    )
}
