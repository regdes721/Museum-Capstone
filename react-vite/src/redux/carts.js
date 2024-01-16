const LOAD_CART = 'carts/loadCart';
const LOAD_CART_PRODUCTS = 'carts/loadCartProducts'

export const loadCart = (cart) => {
    return {
        type: LOAD_CART,
        cart
    }
}

export const loadCartProducts = (cart) => {
    return {
        type: LOAD_CART_PRODUCTS,
        cart
    }
}

export const thunkLoadCart = () => async (dispatch) => {
    const response = await fetch('api/carts/')
    const cart = await response.json();
    if (response.ok) {
        dispatch(loadCart(cart));
        return cart
    } else {
        return cart
    }
}

export const thunkLoadCartProducts = () => async (dispatch) => {
    const response = await fetch('api/carts/cart_products')
    const cart = await response.json();
    console.log("thunk cart", cart)
    if (response.ok) {
        dispatch(loadCartProducts(cart));
        return cart
    } else {
        return cart
    }
}

const initialState = { singleCart: {}, cart_products: [] };

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CART: {
            const singleCart = {}
            singleCart[action.cart.id] = action.cart
            return { ...state, singleCart }
        }
        case LOAD_CART_PRODUCTS: {
            const cart_products = action.cart
            return { ...state, cart_products }
        }
        default:
            return state;
    }
}

export default cartReducer
