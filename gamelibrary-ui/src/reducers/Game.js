import { UPDATE_GAME_FORM, CLEAR_GAME_FORM } from '../actions/types';
  
  const INITIAL_STATE = {};
  
  export default (state = {}, action) => {  
    switch (action.type) {
      case UPDATE_GAME_FORM:
        return { ...state, [action.payload.field]: action.payload.value };
      case CLEAR_GAME_FORM:
        return INITIAL_STATE;
    default:
      return state;
    }
  };