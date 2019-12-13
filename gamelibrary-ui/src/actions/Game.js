import { UPDATE_GAME_FORM, CLEAR_GAME_FORM } from './types';

export const updateGamenForm = ({ field, value }) => async dispatch => {
    dispatch({ type: UPDATE_GAME_FORM, payload: ({ field, value }) });
};
  
export const clearGameForm = () => async dispatch => {
    dispatch({ type: CLEAR_GAME_FORM });
}