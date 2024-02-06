import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, NavLink, useNavigate } from "react-router-dom"
import OpenModalButton from "../OpenModalButton"
import { thunkLoadMuseums } from "../../redux/museums"
import { thunkLoadProductDetails } from "../../redux/products"
import { thunkLoadCart, thunkAddToCart, thunkCreateCart } from "../../redux/carts"
import { thunkLoadWishlist, thunkAddToWishlist, thunkCreateWishlist } from "../../redux/wishlists"
import DeleteProductModal from "../DeleteProductModal"
import './ProductDetailsPage.css'

export default function ProductDetailsPage() {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const sessionUser = useSelector((state) => state.session.user);
    const productDetailsObj = useSelector(state => state.products.singleProduct);
    const product = Object.values(productDetailsObj)
    const cartObj = useSelector(state => state.cart.singleCart)
    const cart = Object.values(cartObj)
    const wishlistObj = useSelector(state => state.wishlist.singleWishlist)
    const wishlist = Object.values(wishlistObj)
    let category;
    if (product.length > 0 && product[0].category === "Kids") {
        category = "kids"
    }
    if (product.length > 0 && product[0].category === "Sculpture") {
        category = "sculpture"
    }
    if (product.length > 0 && product[0].category === "Fashion & Accessories") {
        category = "fashion-accessories"
    }
    if (product.length > 0 && product[0].category === "Jewellery") {
        category = "jewellery"
    }
    if (product.length > 0 && product[0].category === "Books") {
        category = "books"
    }
    if (product.length > 0 && product[0].category === "Decoration") {
        category = "decoration"
    }
    if (product.length > 0 && product[0].category === "Posters & stationery") {
        category = "posters-stationery"
    }
    if (product.length > 0 && product[0].category === "Beauty") {
        category = "beauty"
    }
    if (product.length > 0 && product[0].category === "Engravings") {
        category = "engravings"
    }
    if (product.length > 0 && product[0].category === "Print on demand") {
        category = "print-on-demand"
    }

    console.log(product)

    const handleAdd = async (e) => {
        e.preventDefault();
        console.log("Calling handleAdd");
        dispatch(thunkLoadCart())
        // await dispatch(thunkLoadCart());
        // console.log("thunkLoadCart dispatched");
        if (!cart[0] || cart[0].user_id != sessionUser.id ) {
            console.log("No Cart")
            await dispatch(thunkCreateCart())
            console.log("Now there is a cart!")
            await dispatch(thunkAddToCart(productId))
            navigate('/cart')
        }
        else {
            console.log("Cart")
            dispatch(thunkAddToCart(productId))
            navigate('/cart')
        }
    }

    const handleWishlistAdd = async (e) => {
        e.preventDefault();
        console.log("Calling handleWishlistAdd");
        dispatch(thunkLoadWishlist())
        // await dispatch(thunkLoadCart());
        // console.log("thunkLoadCart dispatched");
        if (!wishlist[0] || wishlist[0].user_id != sessionUser.id ) {
            console.log("No Wishlist")
            await dispatch(thunkCreateWishlist())
            console.log("Now there is a wishlist!")
            await dispatch(thunkAddToWishlist(productId))
            navigate('/wishlist')
        }
        else {
            console.log("Wishlist")
            dispatch(thunkAddToWishlist(productId))
            navigate('/wishlist')
        }
    }

    useEffect(() => {
        dispatch(thunkLoadProductDetails(productId))
        dispatch(thunkLoadCart())
        dispatch(thunkLoadWishlist())
    }, [dispatch, productId, sessionUser])

    useEffect(() => {
        if (product.length > 0) {
            setTimeout(() => {setLoading(false)}, 500)
        }
    }, [product])

    return (
        loading ?
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
        :
        <div className="all-museums-container">
            {!product || product.length === 0 ?
            <div className="museums-best-sellers-header">
                <p><NavLink to="/" className='no-underline font-text'><span> <i className="fa-solid fa-angle-left"></i> Home</span></NavLink></p>
                <h1>No Product Available</h1>
            </div>
            :
            <div className="museums-best-sellers-header">
                <p><NavLink to="/" className='no-underline font-text'><span> <i className="fa-solid fa-angle-left"></i> Home</span></NavLink> <NavLink to={`/products/${category}`} className='no-underline font-text'><span>{product[0].category}</span></NavLink></p>
            </div>}
            {product.length > 0 ?
                 <div className="product-details-container">
                    {/* <div>
                        {product[0]?.product_images.map((image) =>
                            <img src={image.image_url} />
                        )}
                    </div> */}
                    <div>
                        <img src={product[0]?.product_images[0].image_url} className="product-details-preview-img" />
                    </div>
                    <div className="font-text">
                        <h2 className="product-details-product-name">{product[0]?.name}</h2>
                        <p className="product-details-product-description ">{product[0]?.description}</p>
                        <p className="product-details-product-price">€{product[0]?.price.toFixed(2)}</p>
                        {sessionUser && <button className="product-details-addcart-button" onClick={handleAdd}>ADD TO CART</button>}
                        {sessionUser && sessionUser.id === product[0].museum.owner_id &&
                        <div className="product-details-row-buttons product-details-row2-buttons">
                            <NavLink to={`/products/${product[0].id}/edit`}><button className="nav-left-button">UPDATE PRODUCT</button></NavLink>
                            <OpenModalButton
                            buttonText="DELETE PRODUCT"
                            modalComponent={<DeleteProductModal />}
                        />
                        </div>
                        }
                        {sessionUser && <div className="product-details-row-buttons">
                            <button className="nav-right-button" onClick={handleWishlistAdd}><i className="fa-regular fa-heart"></i></button>
                        </div>}
                    </div>
                    <div className="font-text">
                        <div className="product-details-characteristics-border">
                            <h3>Characteristics</h3>
                        </div>
                        <div>
                            <p>Dimensions: {product[0].dimensions}</p>
                        </div>
                        <div>
                            <p>Museum: {product[0].museum.name}</p>
                        </div>
                    </div>
                </div>
                : null
            }
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
