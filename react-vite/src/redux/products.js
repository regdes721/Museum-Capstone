const LOAD_PRODUCTS = 'products/loadProducts'
const LOAD_PRODUCT_DETAILS = 'products/loadProductDetails'

export const loadProducts = (products) => {
    return {
        type: LOAD_PRODUCTS,
        products
    }
}

export const loadProductDetails = (product) => {
    return {
        type: LOAD_PRODUCT_DETAILS,
        product
    }
}

export const thunkLoadProducts = () => async (dispatch) => {
    const response = await fetch('/api/products');
    const products = await response.json();
    dispatch(loadProducts(products))
}

export const thunkLoadProductDetails = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}`);
    const product = await response.json();
    dispatch(loadProductDetails(product))
}

const initialState = { allProducts: {}, singleProduct: {} }

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS: {
            const allProducts = {}
            action.products.products.forEach(product => allProducts[product.id] = product)
            return { ...state, allProducts }
        }
        case LOAD_PRODUCT_DETAILS: {
            const singleProduct = {};
            singleProduct[action.product.id] = action.product
            return { ...state, singleProduct}
        }
        default: {
            return state
        }
    }
}

export default productReducer;
