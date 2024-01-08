import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { thunkLoadProducts } from "../../redux/products"

export default function LandingPage() {
    const dispatch = useDispatch()
    const productObj = useSelector(state => state.products.allProducts)
    const products = Object.values(productObj)
    const sortedProducts = products.sort((a, b) => b.num_sold - a.num_sold)
    const bestSellers = [sortedProducts[0], sortedProducts[1], sortedProducts[2], sortedProducts[3]]

    useEffect(() => {
        dispatch(thunkLoadProducts())
    }, [dispatch])

    return (
        <div>
            <h2>Best Sellers</h2>
            {bestSellers.length > 0 && bestSellers.map((product) =>
                <div>
                    <img src={product?.product_images[0].image_url} />
                    <h3>{product?.name}</h3>
                    <p>€{product?.price}</p>
                </div>
            )}
            <NavLink to="/best-sellers"><button>BEST SELLERS</button></NavLink>
        </div>
    )
}