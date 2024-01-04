const LOAD_MUSEUMS = 'museums/loadMuseums';
const LOAD_MUSEUM_DETAILS = 'museums/loadMuseumDetails';


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
        default:
            return state;
    }
}

export default museumReducer;
