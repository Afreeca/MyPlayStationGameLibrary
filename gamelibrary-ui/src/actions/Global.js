import { 
    SET_ERROR, 
    CLEAR_ERROR, 
    PROCESSING, 
    TOGGLE_MODAL, 
} from './types';


export const clearError = () => dispatch => dispatch({ type: CLEAR_ERROR });

export const setError = (error) => async dispatch => dispatch({ type: SET_ERROR, payload: error })

export const processing = () => async dispatch => dispatch({ type: PROCESSING });

export const toggleModal = () => async dispatch => dispatch({ type:TOGGLE_MODAL });