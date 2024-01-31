import { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { thunkLoadProducts } from "../../redux/products";

export default function ProductCategoryPage() {
    const { category } = useParams()
    const dispatch = useDispatch()
    const [sortedProducts, setSortedProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const productObj = useSelector(state => state.products.allProducts)
    const products = Object.values(productObj)
    console.log(sortedProducts)
    console.log("category", category)

    useEffect(() => {
        dispatch(thunkLoadProducts())
    }, [])

    useEffect(() => {
        setLoading(true)
        if (products.length > 0 && category === "kids") {
            setSortedProducts(products.filter((product) => product.category === "Kids"))
        }
        if (products.length > 0 && category === "sculpture") {
            setSortedProducts(products.filter((product) => product.category === "Sculpture"))
        }
        if (products.length > 0 && category === "fashion-accessories") {
            setSortedProducts(products.filter((product) => product.category === "Fashion & Accessories"))
        }
        if (products.length > 0 && category === "jewellery") {
            setSortedProducts(products.filter((product) => product.category === "Jewellery"))
        }
        if (products.length > 0 && category === "books") {
            setSortedProducts(products.filter((product) => product.category === "Books"))
        }
        if (products.length > 0 && category === "decoration") {
            setSortedProducts(products.filter((product) => product.category === "Decoration"))
        }
        if (products.length > 0 && category === "posters-stationery") {
            setSortedProducts(products.filter((product) => product.category === "Posters & stationery"))
        }
        if (products.length > 0 && category === "beauty") {
            setSortedProducts(products.filter((product) => product.category === "Beauty"))
        }
        if (products.length > 0 && category === "engravings") {
            setSortedProducts(products.filter((product) => product.category === "Engravings"))
        }
        if (products.length > 0 && category === "print-on-demand") {
            setSortedProducts(products.filter((product) => product.category === "Print on demand"))
        }
        // if (sortedProducts.length) setLoading(false)
    }, [category, productObj])

    useEffect(() => {
        if (sortedProducts.length > 0) {
            setLoading(false)
        }
    }, [sortedProducts])

    return (
        loading ? <h1>Loading...</h1> :
        <div className="all-museums-container">
            <div className="museums-best-sellers-header">
                <p><NavLink to="/" className='no-underline font-text'><span> <i className="fa-solid fa-angle-left"></i> Home</span></NavLink></p>
                <h1 className="font-header all-museums-header-title">{!sortedProducts || (sortedProducts && sortedProducts.length === 0) ? "No Products for this category" : sortedProducts[0].category}</h1>
            </div>
            <div className="best-sellers-preview-grid font-text">
                {sortedProducts && sortedProducts.length > 0 && sortedProducts.map((product) =>
                    <NavLink to={`/products/${product.id}/details`} className='no-underline'><div className="best-sellers-preview-container">
                        <img src={product?.product_images[0].image_url}className="best-sellers-preview-img" />
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
