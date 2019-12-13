import { UPDATE_GAME_FORM, CLEAR_GAME_FORM } from './types';
const SERVICE_URL = process.env.REACT_APP_API_URL;


export const getGames = ({}) => async dispatch => {
    axios.get(SERVICE_URL)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
}

export const updateGamenForm = ({ field, value }) => async dispatch => {
    dispatch({ type: UPDATE_GAME_FORM, payload: ({ field, value }) });
};
  
export const clearGameForm = () => async dispatch => {
    dispatch({ type: CLEAR_GAME_FORM });
}