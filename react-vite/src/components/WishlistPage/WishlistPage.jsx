import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { thunkLoadCart, thunkLoadCartProducts, thunkEditCartProduct, thunkDeleteCartProduct, thunkDeleteCart } from "../../redux/carts";
import { thunkLoadWishlist, thunkLoadWishlistProducts, thunkDeleteWishlistProduct, thunkDeleteWishlist } from "../../redux/wishlists"
import './WishlistPage.css'

export default function WishlistPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const sessionUser = useSelector(state => state.session.user);
    const wishlistObj = useSelector(state => state.wishlist.singleWishlist)
    const wishlist = Object.values(wishlistObj)
    const wishlistProducts = useSelector(state => state.wishlist.wishlist_products)
    // const [productId, setProductId] = useState(0)
    // const [quantity, setQuantity] = useState(0)
    // console.log("productId", productId)
    // console.log("quantity", quantity)
    // console.log("cartObj", cartObj)
    // console.log("cart", cart)
    // console.log("cart products", cartProducts)

    // const handleEdit = async () => {
    //     const form = {
    //         productId,
    //         quantity
    //     }
    //     await dispatch(thunkEditCartProduct(form))
    //     await dispatch(thunkLoadCartProducts())
    // }

    const handleDelete = async (productId) => {
        await dispatch(thunkDeleteWishlistProduct(productId))
        await dispatch(thunkLoadWishlist())
    }

    useEffect(() => {
        dispatch(thunkLoadWishlist())
        dispatch(thunkLoadWishlistProducts())
    }, [dispatch])

    if (!wishlist[0] || wishlist[0].user_id != sessionUser.id || wishlist[0].products.length === 0) return (
        <div className="all-museums-container">
            <div className="cart-header">
                <NavLink to="/" className='no-underline font-text'><p className="all-museums-header-p"><i className="fa-solid fa-angle-left"></i> Home</p></NavLink>
                <h1 className="font-header all-museums-header-title">Your cart is empty</h1>
                <h2 className="font-text cart-font-weight">Throughout your visit, you can use the Add to Cart button to easily select the desired items for further review. When you put everything you want in the cart, you can proceed to the order confirmation.</h2>
                <h3 className="font-text">For any item added to the cart, you can set:</h3>
                <p className="font-text"><i className="fa-solid fa-check"></i> amount of this item you want,</p>
                <h3 className="font-text">At any time, you can:</h3>
                <p className="font-text"><i className="fa-solid fa-check"></i> view your cart,</p>
                <p className="font-text"><i className="fa-solid fa-check"></i> remove items from the cart,</p>
                <p className="font-text"><i className="fa-solid fa-check"></i> recalculate the total amount of your cart.</p>
                <h3 className="font-text">How to fill your cart?</h3>
                <p className="font-text">{"You're browsing our e-store. Add all desired items in your cart in one click by using the Add to Cart button."}</p>
                <NavLink to="/"><button className="product-details-addcart-button">CONTINUE SHOPPING</button></NavLink>
            </div>
        </div>
    )

    return (
        <div className="all-museums-container">
            <div className="cart-header">
                <NavLink to="/" className='no-underline font-text'><p className="all-museums-header-p"><i className="fa-solid fa-angle-left"></i> Home</p></NavLink>
            </div>
            <div className="cart-header-active">
                <h1 className="font-text all-museums-header-title">My Wishlist</h1>
            </div>
            {wishlist[0].products.map((product) => (
                <div key={product.id} className="cart-details-container">
                    <NavLink to={`/products/${product.id}/details`}><img src={product.product_images[0].image_url} className="cart-details-img" /></NavLink>
                    {wishlistProducts && wishlistProducts.length > 0 && (
                        <div className="cart-details-info">
                            <NavLink to={`/products/${product.id}/details`} className="no-underline"><p className="font-text">{product.name}</p></NavLink>
                            {/* <p>{cartProducts.find((cart) => cart.product_id === product.id)?.quantity || 0}</p> */}
                            <p className="font-text cart-price">Total: €{product.price.toFixed(2)}</p>
                        </div>
                    )}
                    <div className="cart-details-delete">
                        <p className="font-text" onClick={() => handleDelete(product.id)}>Delete</p>
                    </div>
                </div>
            ))}
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
