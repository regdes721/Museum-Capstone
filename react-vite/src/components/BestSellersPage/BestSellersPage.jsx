import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { thunkLoadProducts } from "../../redux/products"
import './BestSellersPage.css'

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
        <div className="all-museums-container">
            <div className="all-museums-header">
                <p><NavLink to="/" className='no-underline font-text'><span> <i className="fa-solid fa-angle-left"></i> Home</span></NavLink></p>
                <h1 className="font-header all-museums-header-title">Best Sellers</h1>
            </div>
            <div className="best-sellers-preview-grid font-text">
                {sortedBestSellers && sortedBestSellers.length > 0 && sortedBestSellers.map((product) =>
                <NavLink to={`/products/${product.id}/details`} className='no-underline'><div className="best-sellers-preview-container">
                    <img src={product?.product_images[0].image_url} className="best-sellers-preview-img" />
                    <div className="best-sellers-preview-name">
                        <h3>{product?.name}</h3>
                    </div>
                    <p>€{product?.price.toFixed(2)}</p>
                </div></NavLink>
                )}
            </div>
            <div className="product-guarantees-infocard-container font-text">
                <div className="product-guarantees-infocard-details">
                    <h3><i className="fa-solid fa-check"></i> Delivery</h3>
                    <p>Shipping in 1-2 business days according to the method of delivery chosen</p>
                </div>
                <div>
                    <h3><i className="fa-solid fa-check"></i> Satisfied?</h3>
                    <p>14 days to change your mind</p>
                </div>
                <div>
                    <h3><i className="fa-solid fa-check"></i> Secure payment</h3>
                    <p>Secure payment solution by Banque Postale</p>
                </div>
                <div>
                    <h3><i className="fa-solid fa-check"></i> Contact us</h3>
                    <p>Our team is available for any questions or requests.</p>
                </div>
            </div>
        </div>
    )
}
