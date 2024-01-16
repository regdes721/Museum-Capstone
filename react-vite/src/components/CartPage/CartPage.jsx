import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkLoadCart } from "../../redux/carts";

export default function CartPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const cartObj = useSelector(state => state.cart.singleCart)
    const cart = Object.values(cartObj)

    console.log("cartObj", cartObj)
    console.log("cart", cart)

    useEffect(() => {
        dispatch(thunkLoadCart())
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
            <button>CONTINUE SHOPPING</button>
        </div>
    )

    return (
        <div>
            <h1>My Cart</h1>
        </div>
    )
}
