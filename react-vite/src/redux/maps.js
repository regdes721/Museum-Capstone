const LOAD_API_KEY = 'maps/LOAD_API_KEY';
const LOAD_GEO_API_KEY = 'maps/LOAD_GEO_API_KEY'

export const loadApiKey = (key) => {
    return {
        type: LOAD_API_KEY,
        payload: key,
    }
}

export const loadGeoApiKey = (key) => {
  return {
    type: LOAD_GEO_API_KEY,
    payload: key
  }
}

export const getKey = () => async (dispatch) => {
    const res = await fetch('/api/maps/key', {
      method: 'POST',
    });
    const data = await res.json();
    dispatch(loadApiKey(data.googleMapsAPIKey));
  };

  export const getGeoKey = () => async (dispatch) => {
    const res = await fetch('/api/maps/geokey', {
      method: 'POST',
    });
    const data = await res.json();
    dispatch(loadGeoApiKey(data.geocodeAPIKey));
  };

const initialState = { key: null, geoKey: null };

const mapsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_API_KEY:
      return { ...state, key: action.payload };
    case LOAD_GEO_API_KEY:
      return { ...state, geoKey: action.payload }
    default:
      return state;
  }
};

export default mapsReducer;
