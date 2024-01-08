import { useEffect } from "react"
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { thunkLoadProducts } from "../../redux/products";

export default function ProductCategoryPage() {
    const { category } = useParams()
    const dispatch = useDispatch()
    const productObj = useSelector(state => state.products.allProducts)
    const products = Object.values(productObj)
    let sortedProducts;
    if (products && category === "kids") {
        sortedProducts = products.filter((product) => product.category === "Kids")
    }
    if (products && category === "sculpture") {
        sortedProducts = products.filter((product) => product.category === "Sculpture")
    }
    if (products && category === "fashion-accessories") {
        sortedProducts = products.filter((product) => product.category === "Fashion & Accessories")
    }
    if (products && category === "jewellery") {
        sortedProducts = products.filter((product) => product.category === "Jewellery")
    }
    if (products && category === "books") {
        sortedProducts = products.filter((product) => product.category === "Books")
    }
    if (products && category === "decoration") {
        sortedProducts = products.filter((product) => product.category === "Decoration")
    }
    if (products && category === "posters-stationery") {
        sortedProducts = products.filter((product) => product.category === "Posters & stationery")
    }
    if (products && category === "beauty") {
        sortedProducts = products.filter((product) => product.category === "Beauty")
    }
    if (products && category === "engravings") {
        sortedProducts = products.filter((product) => product.category === "Engravings")
    }
    if (products && category === "print-on-demand") {
        sortedProducts = products.filter((product) => product.category === "Print on demand")
    }
    console.log(sortedProducts)

    useEffect(() => {
        dispatch(thunkLoadProducts())
    }, [dispatch])

    return (
        <div>
            <div>
                <p><NavLink to="/"><span> <i className="fa-solid fa-angle-left"></i> Home</span></NavLink></p>
                <h1>{!sortedProducts || (sortedProducts && sortedProducts.length === 0) ? "No Products for this category" : sortedProducts[0].category}</h1>
            </div>
            {sortedProducts && sortedProducts.length > 0 && sortedProducts.map((product) =>
                <NavLink to={`/products/${product.id}/details`}><div>
                    <img src={product?.product_images[0].image_url} />
                    <h3>{product?.name}</h3>
                    <p>€{product?.price}</p>
                </div></NavLink>
            )}
        </div>
    )
}
