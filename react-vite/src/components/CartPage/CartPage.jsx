import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { thunkLoadCart, thunkLoadCartProducts } from "../../redux/carts";

export default function CartPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const cartObj = useSelector(state => state.cart.singleCart)
    const cart = Object.values(cartObj)
    const cartProducts = useSelector(state => state.cart.cart_products)

    console.log("cartObj", cartObj)
    console.log("cart", cart)
    console.log("cart products", cartProducts)
    console.log("test", cartProducts && cartProducts.length > 0 && cartProducts.filter((cart) => cart.product_id === 1)[0].quantity)

    useEffect(() => {
        dispatch(thunkLoadCart())
        dispatch(thunkLoadCartProducts())
    }, [dispatch])

    if (!cart[0] || cart[0].user_id != sessionUser.id || cart[0].products.length === 0) return (
        <div>
            <h1>Your cart is empty</h1>
            <h2>Throughout your visit, you can use the Add to Cart button to easily select the desired items for further review. When you put everything you want in the cart, you can proceed to the order confirmation.</h2>
            <h3>For any item added to the cart, you can set:</h3>
            <p><i className="fa-solid fa-check"></i> amount of this item you want,</p>
            <h3>At any time, you can:</h3>
            <p><i className="fa-solid fa-check"></i> view your cart,</p>
            <p><i className="fa-solid fa-check"></i> remove items from the cart,</p>
            <p><i className="fa-solid fa-check"></i> recalculate the total amount of your cart.</p>
            <h3>How to fill your cart?</h3>
            <p>You're browsing our e-store. Add all desired items in your cart in one click by using the Add to Cart button.</p>
            <NavLink to="/"><button>CONTINUE SHOPPING</button></NavLink>
        </div>
    )

    return (
        <div>
            <h1>My Cart</h1>
            <NavLink to="/"><button>CONTINUE SHOPPING</button></NavLink>
            <button>ORDER</button>
            {cart[0].products.map((product) => (
                <div>
                    <img src={product.product_images[0].image_url} />
                    <p>{product.name}</p>
                    <p>Total: €{(product.price * cartProducts.filter((cart) => cart.product_id === product.id)[0].quantity).toFixed(2)}</p>

                </div>
            ))}
        </div>
    )
}
