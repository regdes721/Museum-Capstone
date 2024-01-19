import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { thunkLoadCart, thunkLoadCartProducts, thunkDeleteCartProduct } from "../../redux/carts";

export default function CartPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const cartObj = useSelector(state => state.cart.singleCart)
    const cart = Object.values(cartObj)
    const cartProducts = useSelector(state => state.cart.cart_products)
    const [totalPrice, setTotalPrice] = useState(0);

    console.log("cartObj", cartObj)
    console.log("cart", cart)
    console.log("cart products", cartProducts)

    const handleDelete = async (productId) => {
        await dispatch(thunkDeleteCartProduct(productId))
        await dispatch(thunkLoadCart())
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
                <div key={product.id}>
                    <img src={product.product_images[0].image_url} />
                    <p>{product.name}</p>
                    {cartProducts && cartProducts.length > 0 && (
                        <>
                            <p>{cartProducts.find((cart) => cart.product_id === product.id)?.quantity || 0}</p>
                            <p>Total: €{(product.price * (cartProducts.find((cart) => cart.product_id === product.id)?.quantity || 0)).toFixed(2)}</p>
                        </>
                    )}
                    <p onClick={() => handleDelete(product.id)}>Delete</p>
                </div>
            ))}
            <div>
                <p>Secure payment</p>
                <p>International delivery</p>
                <p>Shipping in 1-2 business days according to the method of delivery chosen</p>
                <p>14 days to change your mind</p>
            </div>
            <div>
                <p>Total: €{totalPrice.toFixed(2)}</p>
            </div>
            <div>
                <button>ORDER</button>
            </div>
        </div>
    )
}
