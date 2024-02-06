const LOAD_WISHLIST = 'wishlists/loadWishlist';
const LOAD_WISHLIST_PRODUCTS = 'wishlists/loadWishlistProducts'
const CREATE_WISHLIST = 'wishlists/createWishlists'
const DELETE_WISHLISTS = 'wishlists/deleteWishlists'

export const loadWishlist = (wishlist) => {
    return {
        type: LOAD_WISHLIST,
        wishlist
    }
}

export const loadWishlistProducts = (wishlist) => {
    return {
        type: LOAD_WISHLIST_PRODUCTS,
        wishlist
    }
}

export const createWishlist = (wishlist) => {
    return {
        type: CREATE_WISHLIST,
        wishlist
    }
}

export const deleteWishlist = () => {
    return {
        type: DELETE_WISHLISTS
    }
}

export const thunkLoadWishlist = () => async (dispatch) => {
    console.log('Thunk starting...');
    try {
        const response = await fetch('/api/wishlists/', {
            headers: {
                'Accept': 'application/json',
            },
        });
        if (!response.ok) {
            console.error('Non-OK response:', response);
            // Handle non-OK response here
            return;
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const wishlist = await response.json();
            console.log('Parsed wishlist:', wishlist);
            dispatch(loadWishlist(wishlist));
            return wishlist;
        } else {
            console.error('Invalid content type:', contentType);
            // Handle invalid content type here
        }
    } catch (error) {
        console.error('Error in thunkLoadWishlist:', error);
    }
    // const response = await fetch('api/carts/')
    // const cart = await response.json();
    // if (response.ok) {
    //     dispatch(loadCart(cart));
    //     return cart
    // } else {
    //     return cart
    // }
}

export const thunkLoadWishlistProducts = () => async (dispatch) => {
    const response = await fetch('/api/wishlists/wishlist_products')
    const wishlist = await response.json();
    console.log("thunk wishlist", wishlist)
    if (response.ok) {
        dispatch(loadWishlistProducts(wishlist));
        return wishlist
    } else {
        return wishlist
    }
}

export const thunkCreateWishlist = () => async (dispatch) => {
    const response = await fetch('/api/wishlists', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json()
    if (response.ok) {
        dispatch(createWishlist(data))
        return data
    } else {
        return data
    }
}

export const thunkAddToWishlist = (productId) => async (dispatch) => {
    const response = await fetch(`/api/wishlists/products/${productId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json()
    return data
}

export const thunkDeleteWishlistProduct = (productId) => async (dispatch) => {
    const response = await fetch(`/api/wishlists/products/${productId}`, {
        method: "DELETE"
    })
    const data = await response.json()
    return data
}

export const thunkDeleteWishlist = () => async (dispatch) => {
    const response = await fetch(`/api/wishlists`, {
        method: "DELETE"
    })
    const data = await response.json()
    if (response.ok) {
        dispatch(deleteWishlist())
    }
    return data
}

const initialState = { singleWishlist: {}, wishlist_products: [] };

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_WISHLIST: {
            const singleWishlist = {}
            singleWishlist[action.wishlist.id] = action.wishlist
            return { ...state, singleWishlist }
        }
        case LOAD_WISHLIST_PRODUCTS: {
            const wishlist_products = action.wishlist
            return { ...state, wishlist_products }
        }
        case CREATE_WISHLIST: {
            const singleWishlist = {}
            singleWishlist[action.wishlist.id] = action.wishlist
            return { ...state, singleWishlist }
        }
        case DELETE_WISHLISTS: {
            const singleWishlist = {}
            const wishlist_products = []
            return { ...state, singleWishlist, wishlist_products }
        }
        default:
            return state;
    }
}

export default wishlistReducer
