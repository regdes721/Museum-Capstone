import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { thunkLoadCart, thunkLoadCartProducts, thunkEditCartProduct, thunkDeleteCartProduct, thunkDeleteCart } from "../../redux/carts";
import './CartPage.css'

export default function CartPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const sessionUser = useSelector(state => state.session.user);
    const cartObj = useSelector(state => state.cart.singleCart)
    const cart = Object.values(cartObj)
    const cartProducts = useSelector(state => state.cart.cart_products)
    const [totalPrice, setTotalPrice] = useState(0);

    const handleDelete = async (productId) => {
        await dispatch(thunkDeleteCartProduct(productId))
        await dispatch(thunkLoadCart())
    }

    const handleDeleteCart = async () => {
        await dispatch(thunkDeleteCart())
        navigate('/')
    }

    useEffect(() => {
        dispatch(thunkLoadCart())
        dispatch(thunkLoadCartProducts())
    }, [dispatch])

    useEffect(() => {
        let sum = 0;
        if (cart && cart[0] && cartProducts && cartProducts.length > 0) {
            cart[0].products.forEach((product) => {
                const quantity = cartProducts?.find((cart) => cart.product_id === product.id)?.quantity || 0;
                sum += product.price * quantity;
              });
        }
        setTotalPrice(sum);
      }, [cart, cartProducts]);

    if (!cart[0] || cart[0].user_id != sessionUser.id || cart[0].products.length === 0) return (
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
                <h1 className="font-header all-museums-header-title">My Cart</h1>
                <div className="nav-left">
                    <NavLink to="/"><button className="nav-left-button">CONTINUE SHOPPING</button></NavLink>
                    <button className="cart-header-order-button" onClick={handleDeleteCart}>ORDER</button>
                </div>
            </div>
            {cart[0].products.map((product) => (
                <div key={product.id} className="cart-details-container">
                    <NavLink to={`/products/${product.id}/details`}><img src={product.product_images[0].image_url} className="cart-details-img" /></NavLink>
                    {cartProducts && cartProducts.length > 0 && (
                        <div className="cart-details-info">
                            <NavLink to={`/products/${product.id}/details`} className="no-underline"><p className="font-text">{product.name}</p></NavLink>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <select name="quantity" value={cartProducts.find((cart) => cart.product_id === product.id)?.quantity || 0} onChange={async (e) => {
                                    e.preventDefault();
                                    const productId = product.id
                                    const quantity = e.target.value

                                    try {
                                        await dispatch(thunkEditCartProduct({ productId, quantity }));
                                        await dispatch(thunkLoadCartProducts());
                                    } catch (error) {
                                        console.error("Error updating cart:", error);
                                    }
                                }} id="">
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                    <option value={13}>13</option>
                                    <option value={14}>14</option>
                                    <option value={15}>15</option>
                                    <option value={16}>16</option>
                                    <option value={17}>17</option>
                                    <option value={18}>18</option>
                                    <option value={19}>19</option>
                                    <option value={20}>20</option>
                                </select>
                            </form>
                            <p className="font-text cart-price">Total: €{(product.price * (cartProducts.find((cart) => cart.product_id === product.id)?.quantity || 0)).toFixed(2)}</p>
                        </div>
                    )}
                    <div className="cart-details-delete">
                        <p className="font-text" onClick={() => handleDelete(product.id)}>Delete</p>
                    </div>
                </div>
            ))}
            <div className="cart-section-2">
                <div>
                    <p className="font-text cart-details-checks"><i className="fa-solid fa-check"></i> Secure payment</p>
                    <p className="font-text cart-details-checks"><i className="fa-solid fa-check"></i> International delivery</p>
                    <p className="font-text cart-details-checks"><i className="fa-solid fa-check"></i> Shipping in 1-2 business days according to the method of delivery chosen</p>
                    <p className="font-text cart-details-checks"><i className="fa-solid fa-check"></i> 14 days to change your mind</p>
                </div>
                <div>
                    <p className="cart-price cart-final-price font-text">Total: €{totalPrice.toFixed(2)}</p>
                </div>
            </div>
            <div className="cart-section-2">
                <NavLink to="/" className='no-underline font-text'><p className="all-museums-header-p"><i className="fa-solid fa-angle-left"></i> Continue shopping</p></NavLink>
                <div>
                    <button onClick={handleDeleteCart} className="cart-header-order-button">ORDER</button>
                </div>
            </div>
        </div>
    )
}
