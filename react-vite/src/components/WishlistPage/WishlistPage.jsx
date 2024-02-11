import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { thunkLoadCart, thunkCreateCart, thunkAddToCart } from "../../redux/carts";
import { thunkLoadWishlist, thunkLoadWishlistProducts, thunkDeleteWishlistProduct, thunkDeleteWishlist } from "../../redux/wishlists"
import './WishlistPage.css'

export default function WishlistPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const sessionUser = useSelector(state => state.session.user);
    const wishlistObj = useSelector(state => state.wishlist.singleWishlist)
    const wishlist = Object.values(wishlistObj)
    const cartObj = useSelector(state => state.cart.singleCart)
    const cart = Object.values(cartObj)
    const wishlistProducts = useSelector(state => state.wishlist.wishlist_products)

    const handleDelete = async (productId) => {
        await dispatch(thunkDeleteWishlistProduct(productId))
        await dispatch(thunkLoadWishlist())
    }

    useEffect(() => {
        dispatch(thunkLoadWishlist())
        dispatch(thunkLoadWishlistProducts())
        // dispatch(thunkLoadCart())
    }, [dispatch])

    if (!wishlist[0] || wishlist[0].user_id != sessionUser.id || wishlist[0].products.length === 0) return (
        <div className="all-museums-container">
            <div className="cart-header">
                <NavLink to="/" className='no-underline font-text'><p className="all-museums-header-p"><i className="fa-solid fa-angle-left"></i> Home</p></NavLink>
                <h1 className="font-header all-museums-header-title">Your wishlist is empty</h1>
                <h2 className="font-text cart-font-weight">Throughout your visit, you can use the Heart button (<i className="fa-regular fa-heart"></i>) to easily select the desired items for further review.</h2>
                <h3 className="font-text">At any time, you can:</h3>
                <p className="font-text"><i className="fa-solid fa-check"></i> view your wishlist,</p>
                <p className="font-text"><i className="fa-solid fa-check"></i> remove items from the wishlist,</p>
                <p className="font-text"><i className="fa-solid fa-check"></i> add wishlist items to your cart.</p>
                <h3 className="font-text">How to fill your wishlist?</h3>
                <p className="font-text">{"You're browsing our e-store. Add all desired items in your cart in one click by using the Heart button."}</p>
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
                <h1 className="font-text wishlist-header-title">My Wishlist</h1>
            </div>
            <div className="best-sellers-preview-grid font-text">
            {wishlistProducts && wishlistProducts.length > 0 && wishlist[0].products.map((product) => (
                <div key={product.id}>
                    {wishlistProducts && wishlistProducts.length > 0 && (
                        <div className="best-sellers-preview-container">
                            <NavLink to={`/products/${product.id}/details`}><img src={product.product_images[0].image_url} className="cart-details-img" /></NavLink>
                            <button className="wishlist-cart-button"><i className="fa-solid fa-cart-shopping" onClick={async (e) => {
                                e.preventDefault();
                                const productId = product.id
                                dispatch(thunkLoadCart())
                                // await dispatch(thunkLoadCart());
                                if (!cart[0] || cart[0].user_id != sessionUser.id ) {
                                    await dispatch(thunkCreateCart())
                                    await dispatch(thunkAddToCart(productId))
                                    navigate('/cart')
                                }
                                else {
                                    dispatch(thunkAddToCart(productId))
                                    navigate('/cart')
                                }
                            }}></i></button>
                            <NavLink to={`/products/${product.id}/details`} className="no-underline"><p className="font-text">{product.name}</p></NavLink>
                            <p className="font-text cart-price">Total: €{product.price.toFixed(2)}</p>
                            <p className="font-text wishlist-details-delete" onClick={() => handleDelete(product.id)}>Delete from my wishlist</p>
                        </div>
                    )}
                </div>
            ))}
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
