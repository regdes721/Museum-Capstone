const LOAD_PRODUCTS = 'products/loadProducts'

export const loadProducts = (products) => {
    return {
        type: LOAD_PRODUCTS,
        products
    }
}

export const thunkLoadProducts = () => async (dispatch) => {
    const response = await fetch('/api/products');
    const products = await response.json();
    dispatch(loadProducts(products))
}

const initialState = { allProducts: {}, singleProduct: {} }

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS: {
            const allProducts = {}
            action.products.products.forEach(product => allProducts[product.id] = product)
            return { ...state, allProducts }
        }
        default: {
            return state
        }
    }
}

export default productReducer;
