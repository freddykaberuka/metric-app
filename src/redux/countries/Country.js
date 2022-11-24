import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1/region/europe';
const GET_COUNTRIES = 'GAMES/GET_COUNTRY';

export const GetCountryList = () => async (dispatch) => {
  try {
    const res = await axios.get(baseUrl);
    return dispatch({ type: GET_COUNTRIES, payload: res.data });
  } catch (err) {
    return err;
  }
};

const GetCountryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;

    default:
      return state;
  }
};

export default GetCountryReducer;
