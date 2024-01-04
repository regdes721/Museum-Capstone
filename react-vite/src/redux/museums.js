const LOAD_MUSEUMS = 'museums/loadMuseums';

export const loadMuseums = (museums) => {
    return {
        type: LOAD_MUSEUMS,
        museums
    }
}

export const thunkLoadMuseums = () => async (dispatch) => {
    const response = await fetch('/api/museums');
    const museums = await response.json();
    dispatch(loadMuseums(museums));
}

const initialState = { allMuseums: {}, singleMuseum: {} };

const museumReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MUSEUMS: {
            const allMuseums = {}
            action.museums.museums.forEach(museum => { allMuseums[museum.id] = museum})
            return { ...state, allMuseums }
        }
        default:
            return state;
    }
}

export default museumReducer;
