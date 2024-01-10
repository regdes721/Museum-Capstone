import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { thunkLoadProducts } from "../../redux/products"
import "./LandingPage.css"

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
            <div>
                <img src="https://www.boutiquesdemusees.fr/uploads/animation/5981_homel.jpg?m=1703261556" />
            </div>
            <div className="all-museums-container font-text">
                <h2>Best Sellers</h2>
                <div className="best-sellers-preview-grid">
                    {bestSellers.length > 0 && bestSellers.map((product) =>
                    <NavLink to={`/products/${product?.id}/details`} className='no-underline'><div className="best-sellers-preview-container">
                        <img src={product?.product_images[0].image_url} className="best-sellers-preview-img" />
                        <div className="best-sellers-preview-name">
                            <h3>{product?.name}</h3>
                        </div>
                        <p>€{product?.price}</p>
                    </div></NavLink>
                    )}
                </div>
                <NavLink to="/best-sellers"><button className="best-sellers-button">BEST SELLERS</button></NavLink>
                <div className="landing-page-infocard-container">
                    <img src="https://www.boutiquesdemusees.fr/img/reassure.jpg" />
                    <div>
                        <div>
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
             </div>
        </div>
    )
}
