const LOAD_CART = 'carts/loadCart';

export const loadCart = (cart) => {
    return {
        type: LOAD_CART,
        cart
    }
}

export const thunkLoadCart = () => async (dispatch) => {
    const response = await fetch('api/carts')
    const cart = await response.json();
    if (response.ok) {
        dispatch(loadCart(cart));
        return cart
    } else {
        return cart
    }
}

const initialState = { singleCart: {} };

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CART: {
            const singleCart = {}
            singleCart[action.cart.id] = action.cart
            return { ...state, singleCart }
        }
        default:
            return state;
    }
}

export default cartReducer
