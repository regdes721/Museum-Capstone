const LOAD_MUSEUMS = 'museums/loadMuseums';
const LOAD_MUSEUM_DETAILS = 'museums/loadMuseumDetails';
const CREATE_MUSEUM = 'museums/createMuseum'
const UPDATE_MUSEUM = 'museums/updateMuseum'
const DELETE_MUSEUM = 'museums/deleteMuseum'

export const loadMuseums = (museums) => {
    return {
        type: LOAD_MUSEUMS,
        museums
    }
}

export const loadMuseumDetails = (museum) => {
    return {
        type: LOAD_MUSEUM_DETAILS,
        museum
    }
}

export const createMuseum = (museum) => {
    return {
        type: CREATE_MUSEUM,
        museum
    }
}

export const updateMuseum = (museum) => {
    return {
        type: UPDATE_MUSEUM,
        museum
    }
}

export const deleteMuseum = () => {
    return {
        type: DELETE_MUSEUM
    }
}

export const thunkLoadMuseums = () => async (dispatch) => {
    const response = await fetch('/api/museums');
    const museums = await response.json();
    dispatch(loadMuseums(museums));
}

export const thunkLoadMuseumDetails = (museumId) => async (dispatch) => {
    const response = await fetch(`/api/museums/${museumId}`);
    const museum = await response.json();
    dispatch(loadMuseumDetails(museum));
}

export const thunkCreateMuseum = (museum) => async (dispatch) => {
    const response = await fetch(`/api/museums`, {
        method: "POST",
        body: JSON.stringify(museum),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json()
    if (response.ok) {
        dispatch(createMuseum(data))
        return data
    } else {
        return data
    }
}

export const uploadImage = (image) => async () => {
    const res = await fetch(`/api/museums/images`, {
        method: "POST",
        body: image
    })
    const data = await res.json()
    return data
}

export const thunkUpdateMuseum = (museum) => async (dispatch) => {
    const { museumId, name, description, image_url, store_name, store_address, phone_number, email, museum_website } = museum
    const response = await fetch(`/api/museums/${museumId}`, {
        method: "PUT",
        body: JSON.stringify({
            name,
            description,
            image_url,
            store_name,
            store_address,
            phone_number,
            email,
            museum_website
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json();
    if (response.ok) {
        dispatch(updateMuseum(data))
        return data
    } else {
        return data
    }
}

export const thunkDeleteMuseum = (museum) => async (dispatch) => {
    const { museumId } = museum;
    const response = await fetch(`/api/museums/${museumId}`, {
        method: "DELETE"
    })
    const data = await response.json();
    if (response.ok) {
        dispatch(deleteMuseum(data))
        return data
    } else {
        return data
    }
}

const initialState = { allMuseums: {}, singleMuseum: {} };

const museumReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MUSEUMS: {
            const allMuseums = {}
            action.museums.museums.forEach(museum => { allMuseums[museum.id] = museum})
            return { ...state, allMuseums }
        }
        case LOAD_MUSEUM_DETAILS: {
            const singleMuseum = {}
            singleMuseum[action.museum.id] = action.museum
            return { ...state, singleMuseum }
        }
        case CREATE_MUSEUM: {
            const newMuseum = {}
            newMuseum[0] = action.museum
            return { ...state, newMuseum }
        }
        case UPDATE_MUSEUM: {
            const newMuseum = {}
            newMuseum[0] = action.museum
            return { ...state, newMuseum }
        }
        case DELETE_MUSEUM: {
            return { ...state, singleMuseum: {} }
        }
        default:
            return state;
    }
}

export default museumReducer;
