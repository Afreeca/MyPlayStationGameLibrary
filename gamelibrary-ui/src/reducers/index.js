import { combineReducers } from "redux"
import Global from 'reducers/Global'
import Game from 'reducers/Game'

export default combineReducers({
    global: Global,
    game: Game
});