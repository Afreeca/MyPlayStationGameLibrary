import { PROCESSING, TOGGLE_MODAL, SET_ERROR, CLEAR_ERROR } from '../actions/types';
  
const INITIAL_STATE = {
    processing: false,
    globalError: [],
    modalStatus: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROCESSING:
            return { ...state, processing: action.payload };
        case TOGGLE_MODAL:
            return { ...state, modalStatus: !state.modalStatus };
        case SET_ERROR:
            return { ...state, globalError: action.payload };
        case CLEAR_ERROR:
            return { ...state, globalError: '' };
        default:
            return state;
    }
};