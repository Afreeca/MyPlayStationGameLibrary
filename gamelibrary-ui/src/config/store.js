import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import reducer from '../reducers';

const initialState = {}
const middleware = reduxThunk

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(middleware)));

export default store;