const LOAD_PRODUCTS = 'products/loadProducts'
const LOAD_PRODUCT_DETAILS = 'products/loadProductDetails'
const CREATE_PRODUCT = 'products/createProduct'
const DELETE_PRODUCT = 'products/deleteProduct'

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

export const createProduct = (product) => {
    return {
        type: CREATE_PRODUCT,
        product
    }
}

export const deleteProduct = () => {
    return {
        type: DELETE_PRODUCT
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

export const thunkCreateProduct = (product) => async (dispatch) => {
    const response = await fetch(`/api/products`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json()
    if (response.ok) {
        dispatch(createProduct(data))
        return data
    } else {
        return data
    }
}

export const thunkDeleteProduct = (product) => async (dispatch) => {
    const { productId } = product;
    const response = await fetch(`/api/products/${productId}`, {
        method: "DELETE"
    })
    const data = await response.json();
    if (response.ok) {
        dispatch(deleteProduct(data))
        return data
    } else {
        return data
    }
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
        case CREATE_PRODUCT: {
            const newProduct = {}
            newProduct[0] = action.product
            return { ...state, newProduct }
        }
        case DELETE_PRODUCT: {
            return { ...state, singleProduct: {} }
        }
        default: {
            return state
        }
    }
}

export default productReducer;
